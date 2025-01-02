import './App.css';
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { Water } from "three/examples/jsm/objects/Water.js";

function App() {
  // モデルの読み込み状態
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  // マウス操作の状態を管理するためのフラグ
  const isDragging = useRef(false);
  // マウスの前回位置を記録する変数
  const prevMousePos = useRef({ x: 0, y: 0 });
  // カメラの回転角度を管理する変数
  const cameraAngles = useRef({ horizontal: 0, vertical: 0 });
  // カメラの初期位置を保存 
  const initialPosition = useRef({ x: 3.5, y: 1, z: -10 });
  // カメラが注視する目標点
  const target = new THREE.Vector3(0.25, 0.55, 0);
  // 水面を管理するための参照変数
  const waterRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {

    const setInitialPosition = () => {
      if (window.innerWidth <= 768) {
        initialPosition.current = { x: 1.5, y: 1, z: -9 }; // モバイル用
      } else {
        initialPosition.current = { x: 3.5, y: 1, z: -10 }; // デスクトップ用
      }
    };

    setInitialPosition(); // 初期化時に呼び出し


    // HTML内のcanvas要素を取得
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    // ウィンドウサイズを管理
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成し、初期位置を設定
    const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height, 0.1, 10000);
    camera.position.set(
      initialPosition.current.x - 25,
      initialPosition.current.y + 2,
      initialPosition.current.z
    );
    camera.lookAt(target); // カメラの注視点を設定
    scene.add(camera);

    // カメラの降下アニメーション
    gsap.to(camera.position, {
      x: initialPosition.current.x, // 目標位置を通常の初期位置に設定
      y: initialPosition.current.y, // 目標位置を通常の初期位置に設定
      duration: 3, // アニメーションの長さ（秒）
      ease: "circ.out", // イージング効果
      onUpdate: () => {
        camera.lookAt(target); // アニメーション中も常に注視点を向く
      },
    });

    // カメラの回転角度を計算し、保存
    const radius = Math.sqrt(
      initialPosition.current.x ** 2 +
      initialPosition.current.y ** 2 +
      initialPosition.current.z ** 2
    );
    cameraAngles.current.horizontal = Math.atan2(initialPosition.current.x, initialPosition.current.z);
    cameraAngles.current.vertical = Math.asin(initialPosition.current.y / radius);

    // WebGLRendererを作成して描画設定
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true, // アンチエイリアスを有効化
    });
    renderer.shadowMap.enabled = true; // 影を有効化
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // ソフトシャドウを使用
    renderer.setSize(sizes.width, sizes.height); // 描画サイズをウィンドウサイズに設定

    // 環境光を追加（全体を柔らかく照らす光）
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // 太陽光の設定
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    directionalLight.position.set(-100, 20, 1000);
    directionalLight.castShadow = true; // 影を生成
    directionalLight.shadow.mapSize.width = 4096; // 影の解像度
    directionalLight.shadow.mapSize.height = 4096;

    // 太陽光の影の範囲を設定
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 1500;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;
    scene.add(directionalLight);

    // 背後からの補助光を設定
    const backDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    backDirectionalLight.position.set(0, 300, -100);
    backDirectionalLight.castShadow = true;
    backDirectionalLight.shadow.mapSize.width = 512;
    backDirectionalLight.shadow.mapSize.height = 512;
    scene.add(backDirectionalLight);

    // 地面を作成
    const groundGeometry = new THREE.PlaneGeometry(500, 500);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2; // 水平方向に回転
    ground.position.y = 0; // Y座標を設定
    ground.position.z = -243; // Z座標を設定
    ground.receiveShadow = true; // 影を受け取る設定
    scene.add(ground);

    // GLTFモデルローダーを使用してメインモデルをロード
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("./models/testmodel0101_v2.gltf", (gltf) => {
      const model = gltf.scene;
      const animations = gltf.animations;
      

      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      scene.add(model);

      setIsModelLoaded(true);


      // アニメーションを設定
      if (animations && animations.length > 0) {
        const mixer = new THREE.AnimationMixer(model);

        animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.play();
        });

        // アニメーション更新用のクロックを作成
        const clock = new THREE.Clock();
        const animate = () => {
          requestAnimationFrame(animate);
          const delta = clock.getDelta(); // 時間の差分を取得
          mixer.update(delta); // アニメーション更新
          renderer.render(scene, camera);
        };

        animate();
      }

    });

    // 子モデルをロードして追加
    gltfLoader.load("./models/testmodel_child_.gltf", (gltf) => {
      const childModel = gltf.scene;
      const childAnimations = gltf.animations;

      childModel.position.set(0, 0, -0.75); // 子モデルの位置を調整

      childModel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      scene.add(childModel);

      // 子モデルのアニメーションを設定
      if (childAnimations && childAnimations.length > 0) {
        const childMixer = new THREE.AnimationMixer(childModel);

        childAnimations.forEach((clip) => {
          const action = childMixer.clipAction(clip);
          action.play();
        });

        // 子モデル用のクロックを作成
        const childClock = new THREE.Clock();
        const animateChild = () => {
          requestAnimationFrame(animateChild);
          const delta = childClock.getDelta(); // 時間の差分を取得
          childMixer.update(delta); // アニメーション更新
          renderer.render(scene, camera);
        };

        animateChild();
      }
    });

    // 空を作成
    const sky = new Sky();
    sky.scale.setScalar(50000); // 空のスケールを設定
    const skyUniforms = sky.material.uniforms;
    skyUniforms["turbidity"].value = 0.5; // 空の濁り
    skyUniforms["rayleigh"].value = 0.95; // 散乱の強さ
    skyUniforms["mieCoefficient"].value = 0.005; // ミー散乱係数
    skyUniforms["mieDirectionalG"].value = 0.8; // 散乱の方向性
    skyUniforms["sunPosition"].value.set(-10, 0, 100); // 太陽の位置
    scene.add(sky);

    // 水面を作成
    const waterGeometry = new THREE.PlaneGeometry(1000, 1000);
    const waterNormals = new THREE.TextureLoader().load(
      './textures/eslint.config.jpg',
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }
    );

    const water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: waterNormals,
      sunDirection: new THREE.Vector3(-1, -1, -1),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });

    water.rotation.x = -Math.PI / 2; // 水面を水平に配置
    scene.add(water);
    waterRef.current = water;
    water.position.y = -4; // 水面の高さを設定

    const sun = new THREE.Vector3();
    sun.set(-10, 15, 100).normalize();
    water.material.uniforms["sunDirection"].value.copy(sun);

    const waterAnimate = () => {
      requestAnimationFrame(waterAnimate);
      water.material.uniforms["time"].value += 1.0 / 1000.0;
      renderer.render(scene, camera);
    };

    waterAnimate();

    // ウィンドウサイズ変更時の処理
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    // マウス操作イベントを登録
    const onMouseDown = (event: MouseEvent) => {
      isDragging.current = true;
      prevMousePos.current = { x: event.clientX, y: event.clientY };
    };

    const onMouseMove = (event: MouseEvent) => {
      if (isDragging.current) {
        const deltaX = event.clientX - prevMousePos.current.x;
        const deltaY = event.clientY - prevMousePos.current.y;
        prevMousePos.current = { x: event.clientX, y: event.clientY };

        const rotationSpeed = 0.005;
        cameraAngles.current.horizontal += deltaX * rotationSpeed;
        cameraAngles.current.vertical -= deltaY * rotationSpeed;

        cameraAngles.current.vertical = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, cameraAngles.current.vertical)
        );

        const x = radius * Math.cos(cameraAngles.current.vertical) * Math.sin(cameraAngles.current.horizontal);
        const y = Math.max(1, radius * Math.sin(cameraAngles.current.vertical));
        const z = radius * Math.cos(cameraAngles.current.vertical) * Math.cos(cameraAngles.current.horizontal);

        camera.position.set(x, y, z);
        camera.lookAt(target);
      }
    };

    const onMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        gsap.to(cameraAngles.current, {
          horizontal: Math.atan2(initialPosition.current.x, initialPosition.current.z),
          vertical: Math.asin(initialPosition.current.y / radius),
          duration: 1,
          ease: "power2.out",
          onUpdate: () => {
            const x = radius * Math.cos(cameraAngles.current.vertical) * Math.sin(cameraAngles.current.horizontal);
            const y = Math.max(1, radius * Math.sin(cameraAngles.current.vertical));
            const z = radius * Math.cos(cameraAngles.current.vertical) * Math.cos(cameraAngles.current.horizontal);

            camera.position.set(x, y, z);
            camera.lookAt(target);
          },
        });
      }
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const renderLoop = () => {
      requestAnimationFrame(renderLoop);
      renderer.render(scene, camera);
    };
    renderLoop();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div className='noise'></div>
      {!isModelLoaded && <div className="loading">
        <div className='loading-wrapper'>
            <img className='loading-img' src="/loading.webp" alt="Loading" />
          <p className='loading-text'>
            Loading...
          </p>
        </div>
      </div>}
      <canvas
        className={`canvas ${isModelLoaded ? "loaded" : ""}`}
        id="canvas"
        style={{
          display: isModelLoaded ? "block" : "none", // モデルが読み込まれるまで非表示
          width: "100vw",
          height: "100vh",
          touchAction: "none"
        }}>
      </canvas>
      <div className='container'>
        <div className="inner">
          <div className="img2025">
            <img src="./2025.svg" alt="二〇二五" />
          </div>
          <div className="text">
            <p>
              あけましておめでとうございます。<br />
              昨年はいろいろとお世話になり、<wbr />ありがとうございました。<br />
              本年もどうぞよろしくお願いいたします。
            </p>
          </div>
          <div className="copy-text">
            <img src="./text_2.svg" alt="日の目を見る" width="174" height="680" />
          </div>
        </div>
      </div>
      <div className="fadein">
      </div>
    </>
  );
}

export default App;

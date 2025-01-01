(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var Xh={exports:{}},vl={},jh={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function dM(){if(e0)return ht;e0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=m&&k[m]||k["@@iterator"],typeof k=="function"?k:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(k,Q,be){this.props=k,this.context=Q,this.refs=M,this.updater=be||v}y.prototype.isReactComponent={},y.prototype.setState=function(k,Q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Q,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function b(k,Q,be){this.props=k,this.context=Q,this.refs=M,this.updater=be||v}var R=b.prototype=new x;R.constructor=b,E(R,y.prototype),R.isPureReactComponent=!0;var T=Array.isArray,D=Object.prototype.hasOwnProperty,N={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function F(k,Q,be){var J,fe={},Me=null,ve=null;if(Q!=null)for(J in Q.ref!==void 0&&(ve=Q.ref),Q.key!==void 0&&(Me=""+Q.key),Q)D.call(Q,J)&&!I.hasOwnProperty(J)&&(fe[J]=Q[J]);var Te=arguments.length-2;if(Te===1)fe.children=be;else if(1<Te){for(var Ne=Array(Te),Ze=0;Ze<Te;Ze++)Ne[Ze]=arguments[Ze+2];fe.children=Ne}if(k&&k.defaultProps)for(J in Te=k.defaultProps,Te)fe[J]===void 0&&(fe[J]=Te[J]);return{$$typeof:a,type:k,key:Me,ref:ve,props:fe,_owner:N.current}}function A(k,Q){return{$$typeof:a,type:k.type,key:Q,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===a}function z(k){var Q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(be){return Q[be]})}var $=/\/+/g;function K(k,Q){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):Q.toString(36)}function ue(k,Q,be,J,fe){var Me=typeof k;(Me==="undefined"||Me==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case a:case e:ve=!0}}if(ve)return ve=k,fe=fe(ve),k=J===""?"."+K(ve,0):J,T(fe)?(be="",k!=null&&(be=k.replace($,"$&/")+"/"),ue(fe,Q,be,"",function(Ze){return Ze})):fe!=null&&(C(fe)&&(fe=A(fe,be+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace($,"$&/")+"/")+k)),Q.push(fe)),1;if(ve=0,J=J===""?".":J+":",T(k))for(var Te=0;Te<k.length;Te++){Me=k[Te];var Ne=J+K(Me,Te);ve+=ue(Me,Q,be,Ne,fe)}else if(Ne=g(k),typeof Ne=="function")for(k=Ne.call(k),Te=0;!(Me=k.next()).done;)Me=Me.value,Ne=J+K(Me,Te++),ve+=ue(Me,Q,be,Ne,fe);else if(Me==="object")throw Q=String(k),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ve}function se(k,Q,be){if(k==null)return k;var J=[],fe=0;return ue(k,J,"","",function(Me){return Q.call(be,Me,fe++)}),J}function q(k){if(k._status===-1){var Q=k._result;Q=Q(),Q.then(function(be){(k._status===0||k._status===-1)&&(k._status=1,k._result=be)},function(be){(k._status===0||k._status===-1)&&(k._status=2,k._result=be)}),k._status===-1&&(k._status=0,k._result=Q)}if(k._status===1)return k._result.default;throw k._result}var ne={current:null},B={transition:null},te={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:se,forEach:function(k,Q,be){se(k,function(){Q.apply(this,arguments)},be)},count:function(k){var Q=0;return se(k,function(){Q++}),Q},toArray:function(k){return se(k,function(Q){return Q})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ht.Component=y,ht.Fragment=t,ht.Profiler=r,ht.PureComponent=b,ht.StrictMode=n,ht.Suspense=f,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ht.act=oe,ht.cloneElement=function(k,Q,be){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var J=E({},k.props),fe=k.key,Me=k.ref,ve=k._owner;if(Q!=null){if(Q.ref!==void 0&&(Me=Q.ref,ve=N.current),Q.key!==void 0&&(fe=""+Q.key),k.type&&k.type.defaultProps)var Te=k.type.defaultProps;for(Ne in Q)D.call(Q,Ne)&&!I.hasOwnProperty(Ne)&&(J[Ne]=Q[Ne]===void 0&&Te!==void 0?Te[Ne]:Q[Ne])}var Ne=arguments.length-2;if(Ne===1)J.children=be;else if(1<Ne){Te=Array(Ne);for(var Ze=0;Ze<Ne;Ze++)Te[Ze]=arguments[Ze+2];J.children=Te}return{$$typeof:a,type:k.type,key:fe,ref:Me,props:J,_owner:ve}},ht.createContext=function(k){return k={$$typeof:l,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:o,_context:k},k.Consumer=k},ht.createElement=F,ht.createFactory=function(k){var Q=F.bind(null,k);return Q.type=k,Q},ht.createRef=function(){return{current:null}},ht.forwardRef=function(k){return{$$typeof:u,render:k}},ht.isValidElement=C,ht.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:q}},ht.memo=function(k,Q){return{$$typeof:h,type:k,compare:Q===void 0?null:Q}},ht.startTransition=function(k){var Q=B.transition;B.transition={};try{k()}finally{B.transition=Q}},ht.unstable_act=oe,ht.useCallback=function(k,Q){return ne.current.useCallback(k,Q)},ht.useContext=function(k){return ne.current.useContext(k)},ht.useDebugValue=function(){},ht.useDeferredValue=function(k){return ne.current.useDeferredValue(k)},ht.useEffect=function(k,Q){return ne.current.useEffect(k,Q)},ht.useId=function(){return ne.current.useId()},ht.useImperativeHandle=function(k,Q,be){return ne.current.useImperativeHandle(k,Q,be)},ht.useInsertionEffect=function(k,Q){return ne.current.useInsertionEffect(k,Q)},ht.useLayoutEffect=function(k,Q){return ne.current.useLayoutEffect(k,Q)},ht.useMemo=function(k,Q){return ne.current.useMemo(k,Q)},ht.useReducer=function(k,Q,be){return ne.current.useReducer(k,Q,be)},ht.useRef=function(k){return ne.current.useRef(k)},ht.useState=function(k){return ne.current.useState(k)},ht.useSyncExternalStore=function(k,Q,be){return ne.current.useSyncExternalStore(k,Q,be)},ht.useTransition=function(){return ne.current.useTransition()},ht.version="18.3.1",ht}var t0;function Kp(){return t0||(t0=1,jh.exports=dM()),jh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function pM(){if(n0)return vl;n0=1;var a=Kp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(u,f,h){var p,m={},g=null,v=null;h!==void 0&&(g=""+h),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)n.call(f,p)&&!o.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:g,ref:v,props:m,_owner:r.current}}return vl.Fragment=t,vl.jsx=l,vl.jsxs=l,vl}var i0;function mM(){return i0||(i0=1,Xh.exports=pM()),Xh.exports}var gn=mM(),no=Kp(),sc={},Yh={exports:{}},ni={},qh={exports:{}},Kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function gM(){return r0||(r0=1,function(a){function e(B,te){var oe=B.length;B.push(te);e:for(;0<oe;){var k=oe-1>>>1,Q=B[k];if(0<r(Q,te))B[k]=te,B[oe]=Q,oe=k;else break e}}function t(B){return B.length===0?null:B[0]}function n(B){if(B.length===0)return null;var te=B[0],oe=B.pop();if(oe!==te){B[0]=oe;e:for(var k=0,Q=B.length,be=Q>>>1;k<be;){var J=2*(k+1)-1,fe=B[J],Me=J+1,ve=B[Me];if(0>r(fe,oe))Me<Q&&0>r(ve,fe)?(B[k]=ve,B[Me]=oe,k=Me):(B[k]=fe,B[J]=oe,k=J);else if(Me<Q&&0>r(ve,oe))B[k]=ve,B[Me]=oe,k=Me;else break e}}return te}function r(B,te){var oe=B.sortIndex-te.sortIndex;return oe!==0?oe:B.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();a.unstable_now=function(){return l.now()-u}}var f=[],h=[],p=1,m=null,g=3,v=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var te=t(h);te!==null;){if(te.callback===null)n(h);else if(te.startTime<=B)n(h),te.sortIndex=te.expirationTime,e(f,te);else break;te=t(h)}}function T(B){if(M=!1,R(B),!E)if(t(f)!==null)E=!0,q(D);else{var te=t(h);te!==null&&ne(T,te.startTime-B)}}function D(B,te){E=!1,M&&(M=!1,x(F),F=-1),v=!0;var oe=g;try{for(R(te),m=t(f);m!==null&&(!(m.expirationTime>te)||B&&!z());){var k=m.callback;if(typeof k=="function"){m.callback=null,g=m.priorityLevel;var Q=k(m.expirationTime<=te);te=a.unstable_now(),typeof Q=="function"?m.callback=Q:m===t(f)&&n(f),R(te)}else n(f);m=t(f)}if(m!==null)var be=!0;else{var J=t(h);J!==null&&ne(T,J.startTime-te),be=!1}return be}finally{m=null,g=oe,v=!1}}var N=!1,I=null,F=-1,A=5,C=-1;function z(){return!(a.unstable_now()-C<A)}function $(){if(I!==null){var B=a.unstable_now();C=B;var te=!0;try{te=I(!0,B)}finally{te?K():(N=!1,I=null)}}else N=!1}var K;if(typeof b=="function")K=function(){b($)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,se=ue.port2;ue.port1.onmessage=$,K=function(){se.postMessage(null)}}else K=function(){y($,0)};function q(B){I=B,N||(N=!0,K())}function ne(B,te){F=y(function(){B(a.unstable_now())},te)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_continueExecution=function(){E||v||(E=!0,q(D))},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_getFirstCallbackNode=function(){return t(f)},a.unstable_next=function(B){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var oe=g;g=te;try{return B()}finally{g=oe}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(B,te){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=g;g=B;try{return te()}finally{g=oe}},a.unstable_scheduleCallback=function(B,te,oe){var k=a.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,B){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=oe+Q,B={id:p++,callback:te,priorityLevel:B,startTime:oe,expirationTime:Q,sortIndex:-1},oe>k?(B.sortIndex=oe,e(h,B),t(f)===null&&B===t(h)&&(M?(x(F),F=-1):M=!0,ne(T,oe-k))):(B.sortIndex=Q,e(f,B),E||v||(E=!0,q(D))),B},a.unstable_shouldYield=z,a.unstable_wrapCallback=function(B){var te=g;return function(){var oe=g;g=te;try{return B.apply(this,arguments)}finally{g=oe}}}}(Kh)),Kh}var s0;function _M(){return s0||(s0=1,qh.exports=gM()),qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function vM(){if(o0)return ni;o0=1;var a=Kp(),e=_M();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,c=1;c<arguments.length;c++)s+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function o(i,s){l(i,s),l(i+"Capture",s)}function l(i,s){for(r[i]=s,i=0;i<s.length;i++)n.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(i){return f.call(m,i)?!0:f.call(p,i)?!1:h.test(i)?m[i]=!0:(p[i]=!0,!1)}function v(i,s,c,d){if(c!==null&&c.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:c!==null?!c.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,c,d){if(s===null||typeof s>"u"||v(i,s,c,d))return!0;if(d)return!1;if(c!==null)switch(c.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(i,s,c,d,_,S,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=_,this.mustUseProperty=c,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new M(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,b);y[s]=new M(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,b);y[s]=new M(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,b);y[s]=new M(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function R(i,s,c,d){var _=y.hasOwnProperty(s)?y[s]:null;(_!==null?_.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,c,_,d)&&(c=null),d||_===null?g(s)&&(c===null?i.removeAttribute(s):i.setAttribute(s,""+c)):_.mustUseProperty?i[_.propertyName]=c===null?_.type===3?!1:"":c:(s=_.attributeName,d=_.attributeNamespace,c===null?i.removeAttribute(s):(_=_.type,c=_===3||_===4&&c===!0?"":""+c,d?i.setAttributeNS(d,s,c):i.setAttribute(s,c))))}var T=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),B=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var oe=Object.assign,k;function Q(i){if(k===void 0)try{throw Error()}catch(c){var s=c.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+i}var be=!1;function J(i,s){if(!i||be)return"";be=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(re){var d=re}Reflect.construct(i,[],s)}else{try{s.call()}catch(re){d=re}i.call(s.prototype)}else{try{throw Error()}catch(re){d=re}i()}}catch(re){if(re&&d&&typeof re.stack=="string"){for(var _=re.stack.split(`
`),S=d.stack.split(`
`),w=_.length-1,O=S.length-1;1<=w&&0<=O&&_[w]!==S[O];)O--;for(;1<=w&&0<=O;w--,O--)if(_[w]!==S[O]){if(w!==1||O!==1)do if(w--,O--,0>O||_[w]!==S[O]){var V=`
`+_[w].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=w&&0<=O);break}}}finally{be=!1,Error.prepareStackTrace=c}return(i=i?i.displayName||i.name:"")?Q(i):""}function fe(i){switch(i.tag){case 5:return Q(i.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return i=J(i.type,!1),i;case 11:return i=J(i.type.render,!1),i;case 1:return i=J(i.type,!0),i;default:return""}}function Me(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case N:return"Portal";case A:return"Profiler";case F:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case se:return s=i.displayName||null,s!==null?s:Me(i.type)||"Memo";case q:s=i._payload,i=i._init;try{return Me(i(s))}catch{}}return null}function ve(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(s);case 8:return s===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ze(i){var s=Ne(i)?"checked":"value",c=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var _=c.get,S=c.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return _.call(this)},set:function(w){d=""+w,S.call(this,w)}}),Object.defineProperty(i,s,{enumerable:c.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Dt(i){i._valueTracker||(i._valueTracker=Ze(i))}function _t(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var c=s.getValue(),d="";return i&&(d=Ne(i)?i.checked?"true":"false":i.value),i=d,i!==c?(s.setValue(i),!0):!1}function Ot(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,s){var c=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??i._wrapperState.initialChecked})}function On(i,s){var c=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;c=Te(s.value!=null?s.value:c),i._wrapperState={initialChecked:d,initialValue:c,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function dt(i,s){s=s.checked,s!=null&&R(i,"checked",s,!1)}function ct(i,s){dt(i,s);var c=Te(s.value),d=s.type;if(c!=null)d==="number"?(c===0&&i.value===""||i.value!=c)&&(i.value=""+c):i.value!==""+c&&(i.value=""+c);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Lt(i,s.type,c):s.hasOwnProperty("defaultValue")&&Lt(i,s.type,Te(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function je(i,s,c){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,c||s===i.value||(i.value=s),i.defaultValue=s}c=i.name,c!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,c!==""&&(i.name=c)}function Lt(i,s,c){(s!=="number"||Ot(i.ownerDocument)!==i)&&(c==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+c&&(i.defaultValue=""+c))}var We=Array.isArray;function U(i,s,c,d){if(i=i.options,s){s={};for(var _=0;_<c.length;_++)s["$"+c[_]]=!0;for(c=0;c<i.length;c++)_=s.hasOwnProperty("$"+i[c].value),i[c].selected!==_&&(i[c].selected=_),_&&d&&(i[c].defaultSelected=!0)}else{for(c=""+Te(c),s=null,_=0;_<i.length;_++){if(i[_].value===c){i[_].selected=!0,d&&(i[_].defaultSelected=!0);return}s!==null||i[_].disabled||(s=i[_])}s!==null&&(s.selected=!0)}}function P(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ie(i,s){var c=s.value;if(c==null){if(c=s.children,s=s.defaultValue,c!=null){if(s!=null)throw Error(t(92));if(We(c)){if(1<c.length)throw Error(t(93));c=c[0]}s=c}s==null&&(s=""),c=s}i._wrapperState={initialValue:Te(c)}}function pe(i,s){var c=Te(s.value),d=Te(s.defaultValue);c!=null&&(c=""+c,c!==i.value&&(i.value=c),s.defaultValue==null&&i.defaultValue!==c&&(i.defaultValue=c)),d!=null&&(i.defaultValue=""+d)}function ge(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?he(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ae,Ue=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,c,d,_){MSApp.execUnsafeLocalFunction(function(){return i(s,c,d,_)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ut(i,s){if(s){var c=i.firstChild;if(c&&c===i.lastChild&&c.nodeType===3){c.nodeValue=s;return}}i.textContent=s}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(i){ke.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Se[s]=Se[i]})});function qe(i,s,c){return s==null||typeof s=="boolean"||s===""?"":c||typeof s!="number"||s===0||Se.hasOwnProperty(i)&&Se[i]?(""+s).trim():s+"px"}function Qe(i,s){i=i.style;for(var c in s)if(s.hasOwnProperty(c)){var d=c.indexOf("--")===0,_=qe(c,s[c],d);c==="float"&&(c="cssFloat"),d?i.setProperty(c,_):i[c]=_}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(i,s){if(s){if(Be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function it(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function X(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,ce=null,de=null;function Le(i){if(i=il(i)){if(typeof Re!="function")throw Error(t(280));var s=i.stateNode;s&&(s=yu(s),Re(i.stateNode,i.type,s))}}function Pe(i){ce?de?de.push(i):de=[i]:ce=i}function rt(){if(ce){var i=ce,s=de;if(de=ce=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function zt(i,s){return i(s)}function an(){}var Et=!1;function $n(i,s,c){if(Et)return i(s,c);Et=!0;try{return zt(i,s,c)}finally{Et=!1,(ce!==null||de!==null)&&(an(),rt())}}function kn(i,s){var c=i.stateNode;if(c===null)return null;var d=yu(c);if(d===null)return null;c=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(c&&typeof c!="function")throw Error(t(231,s,typeof c));return c}var So=!1;if(u)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){So=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{So=!1}function pr(i,s,c,d,_,S,w,O,V){var re=Array.prototype.slice.call(arguments,3);try{s.apply(c,re)}catch(_e){this.onError(_e)}}var mr=!1,Ls=null,Is=!1,Gr=null,Jl={onError:function(i){mr=!0,Ls=i}};function Mo(i,s,c,d,_,S,w,O,V){mr=!1,Ls=null,pr.apply(Jl,arguments)}function eu(i,s,c,d,_,S,w,O,V){if(Mo.apply(this,arguments),mr){if(mr){var re=Ls;mr=!1,Ls=null}else throw Error(t(198));Is||(Is=!0,Gr=re)}}function qi(i){var s=i,c=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(c=s.return),i=s.return;while(i)}return s.tag===3?c:null}function tu(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function nu(i){if(qi(i)!==i)throw Error(t(188))}function pf(i){var s=i.alternate;if(!s){if(s=qi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var c=i,d=s;;){var _=c.return;if(_===null)break;var S=_.alternate;if(S===null){if(d=_.return,d!==null){c=d;continue}break}if(_.child===S.child){for(S=_.child;S;){if(S===c)return nu(_),i;if(S===d)return nu(_),s;S=S.sibling}throw Error(t(188))}if(c.return!==d.return)c=_,d=S;else{for(var w=!1,O=_.child;O;){if(O===c){w=!0,c=_,d=S;break}if(O===d){w=!0,d=_,c=S;break}O=O.sibling}if(!w){for(O=S.child;O;){if(O===c){w=!0,c=S,d=_;break}if(O===d){w=!0,d=S,c=_;break}O=O.sibling}if(!w)throw Error(t(189))}}if(c.alternate!==d)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?i:s}function iu(i){return i=pf(i),i!==null?ru(i):null}function ru(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ru(i);if(s!==null)return s;i=i.sibling}return null}var L=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,ae=e.unstable_shouldYield,le=e.unstable_requestPaint,G=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,Xe=null,st=null;function At(i){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Xe,i,void 0,(i.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:Ye,Gt=Math.log,yt=Math.LN2;function Ye(i){return i>>>=0,i===0?32:31-(Gt(i)/yt|0)|0}var Zt=64,vt=4194304;function Sn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Di(i,s){var c=i.pendingLanes;if(c===0)return 0;var d=0,_=i.suspendedLanes,S=i.pingedLanes,w=c&268435455;if(w!==0){var O=w&~_;O!==0?d=Sn(O):(S&=w,S!==0&&(d=Sn(S)))}else w=c&~_,w!==0?d=Sn(w):S!==0&&(d=Sn(S));if(d===0)return 0;if(s!==0&&s!==d&&!(s&_)&&(_=d&-d,S=s&-s,_>=S||_===16&&(S&4194240)!==0))return s;if(d&4&&(d|=c&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)c=31-Rt(s),_=1<<c,d|=i[c],s&=~_;return d}function Bn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ds(i,s){for(var c=i.suspendedLanes,d=i.pingedLanes,_=i.expirationTimes,S=i.pendingLanes;0<S;){var w=31-Rt(S),O=1<<w,V=_[w];V===-1?(!(O&c)||O&d)&&(_[w]=Bn(O,s)):V<=s&&(i.expiredLanes|=O),S&=~O}}function Nt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function zn(){var i=Zt;return Zt<<=1,!(Zt&4194240)&&(Zt=64),i}function wn(i){for(var s=[],c=0;31>c;c++)s.push(i);return s}function en(i,s,c){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Rt(s),i[s]=c}function An(i,s){var c=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<c;){var _=31-Rt(c),S=1<<_;s[_]=0,d[_]=-1,i[_]=-1,c&=~S}}function Ns(i,s){var c=i.entangledLanes|=s;for(i=i.entanglements;c;){var d=31-Rt(c),_=1<<d;_&s|i[d]&s&&(i[d]|=s),c&=~_}}var pt=0;function Im(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Dm,mf,Nm,Um,Fm,gf=!1,su=[],Wr=null,Xr=null,jr=null,Va=new Map,Ha=new Map,Yr=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Om(i,s){switch(i){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Va.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(s.pointerId)}}function Ga(i,s,c,d,_,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:c,eventSystemFlags:d,nativeEvent:S,targetContainers:[_]},s!==null&&(s=il(s),s!==null&&mf(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,_!==null&&s.indexOf(_)===-1&&s.push(_),i)}function Oy(i,s,c,d,_){switch(s){case"focusin":return Wr=Ga(Wr,i,s,c,d,_),!0;case"dragenter":return Xr=Ga(Xr,i,s,c,d,_),!0;case"mouseover":return jr=Ga(jr,i,s,c,d,_),!0;case"pointerover":var S=_.pointerId;return Va.set(S,Ga(Va.get(S)||null,i,s,c,d,_)),!0;case"gotpointercapture":return S=_.pointerId,Ha.set(S,Ga(Ha.get(S)||null,i,s,c,d,_)),!0}return!1}function km(i){var s=Us(i.target);if(s!==null){var c=qi(s);if(c!==null){if(s=c.tag,s===13){if(s=tu(c),s!==null){i.blockedOn=s,Fm(i.priority,function(){Nm(c)});return}}else if(s===3&&c.stateNode.current.memoizedState.isDehydrated){i.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ou(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var c=vf(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(c===null){c=i.nativeEvent;var d=new c.constructor(c.type,c);bt=d,c.target.dispatchEvent(d),bt=null}else return s=il(c),s!==null&&mf(s),i.blockedOn=c,!1;s.shift()}return!0}function Bm(i,s,c){ou(i)&&c.delete(s)}function ky(){gf=!1,Wr!==null&&ou(Wr)&&(Wr=null),Xr!==null&&ou(Xr)&&(Xr=null),jr!==null&&ou(jr)&&(jr=null),Va.forEach(Bm),Ha.forEach(Bm)}function Wa(i,s){i.blockedOn===s&&(i.blockedOn=null,gf||(gf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ky)))}function Xa(i){function s(_){return Wa(_,i)}if(0<su.length){Wa(su[0],i);for(var c=1;c<su.length;c++){var d=su[c];d.blockedOn===i&&(d.blockedOn=null)}}for(Wr!==null&&Wa(Wr,i),Xr!==null&&Wa(Xr,i),jr!==null&&Wa(jr,i),Va.forEach(s),Ha.forEach(s),c=0;c<Yr.length;c++)d=Yr[c],d.blockedOn===i&&(d.blockedOn=null);for(;0<Yr.length&&(c=Yr[0],c.blockedOn===null);)km(c),c.blockedOn===null&&Yr.shift()}var Eo=T.ReactCurrentBatchConfig,au=!0;function By(i,s,c,d){var _=pt,S=Eo.transition;Eo.transition=null;try{pt=1,_f(i,s,c,d)}finally{pt=_,Eo.transition=S}}function zy(i,s,c,d){var _=pt,S=Eo.transition;Eo.transition=null;try{pt=4,_f(i,s,c,d)}finally{pt=_,Eo.transition=S}}function _f(i,s,c,d){if(au){var _=vf(i,s,c,d);if(_===null)Uf(i,s,d,lu,c),Om(i,d);else if(Oy(_,i,s,c,d))d.stopPropagation();else if(Om(i,d),s&4&&-1<Fy.indexOf(i)){for(;_!==null;){var S=il(_);if(S!==null&&Dm(S),S=vf(i,s,c,d),S===null&&Uf(i,s,d,lu,c),S===_)break;_=S}_!==null&&d.stopPropagation()}else Uf(i,s,d,null,c)}}var lu=null;function vf(i,s,c,d){if(lu=null,i=X(d),i=Us(i),i!==null)if(s=qi(i),s===null)i=null;else if(c=s.tag,c===13){if(i=tu(s),i!==null)return i;i=null}else if(c===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return lu=i,null}function zm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ye()){case Ce:return 1;case De:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var qr=null,xf=null,uu=null;function Vm(){if(uu)return uu;var i,s=xf,c=s.length,d,_="value"in qr?qr.value:qr.textContent,S=_.length;for(i=0;i<c&&s[i]===_[i];i++);var w=c-i;for(d=1;d<=w&&s[c-d]===_[S-d];d++);return uu=_.slice(i,1<d?1-d:void 0)}function cu(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function fu(){return!0}function Hm(){return!1}function li(i){function s(c,d,_,S,w){this._reactName=c,this._targetInst=_,this.type=d,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(c=i[O],this[O]=c?c(S):S[O]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?fu:Hm,this.isPropagationStopped=Hm,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=fu)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=fu)},persist:function(){},isPersistent:fu}),s}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yf=li(To),ja=oe({},To,{view:0,detail:0}),Vy=li(ja),Sf,Mf,Ya,hu=oe({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ya&&(Ya&&i.type==="mousemove"?(Sf=i.screenX-Ya.screenX,Mf=i.screenY-Ya.screenY):Mf=Sf=0,Ya=i),Sf)},movementY:function(i){return"movementY"in i?i.movementY:Mf}}),Gm=li(hu),Hy=oe({},hu,{dataTransfer:0}),Gy=li(Hy),Wy=oe({},ja,{relatedTarget:0}),Ef=li(Wy),Xy=oe({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=li(Xy),Yy=oe({},To,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),qy=li(Yy),Ky=oe({},To,{data:0}),Wm=li(Ky),$y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Qy[i])?!!s[i]:!1}function Tf(){return Jy}var eS=oe({},ja,{key:function(i){if(i.key){var s=$y[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=cu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Zy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(i){return i.type==="keypress"?cu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?cu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),tS=li(eS),nS=oe({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=li(nS),iS=oe({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),rS=li(iS),sS=oe({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),oS=li(sS),aS=oe({},hu,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=li(aS),uS=[9,13,27,32],wf=u&&"CompositionEvent"in window,qa=null;u&&"documentMode"in document&&(qa=document.documentMode);var cS=u&&"TextEvent"in window&&!qa,jm=u&&(!wf||qa&&8<qa&&11>=qa),Ym=" ",qm=!1;function Km(i,s){switch(i){case"keyup":return uS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var wo=!1;function fS(i,s){switch(i){case"compositionend":return $m(s);case"keypress":return s.which!==32?null:(qm=!0,Ym);case"textInput":return i=s.data,i===Ym&&qm?null:i;default:return null}}function hS(i,s){if(wo)return i==="compositionend"||!wf&&Km(i,s)?(i=Vm(),uu=xf=qr=null,wo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return jm&&s.locale!=="ko"?null:s.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!dS[i.type]:s==="textarea"}function Qm(i,s,c,d){Pe(d),s=_u(s,"onChange"),0<s.length&&(c=new yf("onChange","change",null,c,d),i.push({event:c,listeners:s}))}var Ka=null,$a=null;function pS(i){gg(i,0)}function du(i){var s=Po(i);if(_t(s))return i}function mS(i,s){if(i==="change")return s}var Jm=!1;if(u){var Af;if(u){var Rf="oninput"in document;if(!Rf){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Rf=typeof eg.oninput=="function"}Af=Rf}else Af=!1;Jm=Af&&(!document.documentMode||9<document.documentMode)}function tg(){Ka&&(Ka.detachEvent("onpropertychange",ng),$a=Ka=null)}function ng(i){if(i.propertyName==="value"&&du($a)){var s=[];Qm(s,$a,i,X(i)),$n(pS,s)}}function gS(i,s,c){i==="focusin"?(tg(),Ka=s,$a=c,Ka.attachEvent("onpropertychange",ng)):i==="focusout"&&tg()}function _S(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return du($a)}function vS(i,s){if(i==="click")return du(s)}function xS(i,s){if(i==="input"||i==="change")return du(s)}function yS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ni=typeof Object.is=="function"?Object.is:yS;function Za(i,s){if(Ni(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var c=Object.keys(i),d=Object.keys(s);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var _=c[d];if(!f.call(s,_)||!Ni(i[_],s[_]))return!1}return!0}function ig(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function rg(i,s){var c=ig(i);i=0;for(var d;c;){if(c.nodeType===3){if(d=i+c.textContent.length,i<=s&&d>=s)return{node:c,offset:s-i};i=d}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=ig(c)}}function sg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?sg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function og(){for(var i=window,s=Ot();s instanceof i.HTMLIFrameElement;){try{var c=typeof s.contentWindow.location.href=="string"}catch{c=!1}if(c)i=s.contentWindow;else break;s=Ot(i.document)}return s}function Cf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function SS(i){var s=og(),c=i.focusedElem,d=i.selectionRange;if(s!==c&&c&&c.ownerDocument&&sg(c.ownerDocument.documentElement,c)){if(d!==null&&Cf(c)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in c)c.selectionStart=s,c.selectionEnd=Math.min(i,c.value.length);else if(i=(s=c.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var _=c.textContent.length,S=Math.min(d.start,_);d=d.end===void 0?S:Math.min(d.end,_),!i.extend&&S>d&&(_=d,d=S,S=_),_=rg(c,S);var w=rg(c,d);_&&w&&(i.rangeCount!==1||i.anchorNode!==_.node||i.anchorOffset!==_.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(_.node,_.offset),i.removeAllRanges(),S>d?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=c;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<s.length;c++)i=s[c],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var MS=u&&"documentMode"in document&&11>=document.documentMode,Ao=null,bf=null,Qa=null,Pf=!1;function ag(i,s,c){var d=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Pf||Ao==null||Ao!==Ot(d)||(d=Ao,"selectionStart"in d&&Cf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Qa&&Za(Qa,d)||(Qa=d,d=_u(bf,"onSelect"),0<d.length&&(s=new yf("onSelect","select",null,s,c),i.push({event:s,listeners:d}),s.target=Ao)))}function pu(i,s){var c={};return c[i.toLowerCase()]=s.toLowerCase(),c["Webkit"+i]="webkit"+s,c["Moz"+i]="moz"+s,c}var Ro={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},Lf={},lg={};u&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function mu(i){if(Lf[i])return Lf[i];if(!Ro[i])return i;var s=Ro[i],c;for(c in s)if(s.hasOwnProperty(c)&&c in lg)return Lf[i]=s[c];return i}var ug=mu("animationend"),cg=mu("animationiteration"),fg=mu("animationstart"),hg=mu("transitionend"),dg=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(i,s){dg.set(i,s),o(s,[i])}for(var If=0;If<pg.length;If++){var Df=pg[If],ES=Df.toLowerCase(),TS=Df[0].toUpperCase()+Df.slice(1);Kr(ES,"on"+TS)}Kr(ug,"onAnimationEnd"),Kr(cg,"onAnimationIteration"),Kr(fg,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(hg,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function mg(i,s,c){var d=i.type||"unknown-event";i.currentTarget=c,eu(d,s,void 0,i),i.currentTarget=null}function gg(i,s){s=(s&4)!==0;for(var c=0;c<i.length;c++){var d=i[c],_=d.event;d=d.listeners;e:{var S=void 0;if(s)for(var w=d.length-1;0<=w;w--){var O=d[w],V=O.instance,re=O.currentTarget;if(O=O.listener,V!==S&&_.isPropagationStopped())break e;mg(_,O,re),S=V}else for(w=0;w<d.length;w++){if(O=d[w],V=O.instance,re=O.currentTarget,O=O.listener,V!==S&&_.isPropagationStopped())break e;mg(_,O,re),S=V}}}if(Is)throw i=Gr,Is=!1,Gr=null,i}function Vt(i,s){var c=s[Vf];c===void 0&&(c=s[Vf]=new Set);var d=i+"__bubble";c.has(d)||(_g(s,i,2,!1),c.add(d))}function Nf(i,s,c){var d=0;s&&(d|=4),_g(c,i,d,s)}var gu="_reactListening"+Math.random().toString(36).slice(2);function el(i){if(!i[gu]){i[gu]=!0,n.forEach(function(c){c!=="selectionchange"&&(wS.has(c)||Nf(c,!1,i),Nf(c,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[gu]||(s[gu]=!0,Nf("selectionchange",!1,s))}}function _g(i,s,c,d){switch(zm(s)){case 1:var _=By;break;case 4:_=zy;break;default:_=_f}c=_.bind(null,s,c,i),_=void 0,!So||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(_=!0),d?_!==void 0?i.addEventListener(s,c,{capture:!0,passive:_}):i.addEventListener(s,c,!0):_!==void 0?i.addEventListener(s,c,{passive:_}):i.addEventListener(s,c,!1)}function Uf(i,s,c,d,_){var S=d;if(!(s&1)&&!(s&2)&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var O=d.stateNode.containerInfo;if(O===_||O.nodeType===8&&O.parentNode===_)break;if(w===4)for(w=d.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===_||V.nodeType===8&&V.parentNode===_))return;w=w.return}for(;O!==null;){if(w=Us(O),w===null)return;if(V=w.tag,V===5||V===6){d=S=w;continue e}O=O.parentNode}}d=d.return}$n(function(){var re=S,_e=X(c),xe=[];e:{var me=dg.get(i);if(me!==void 0){var Ie=yf,ze=i;switch(i){case"keypress":if(cu(c)===0)break e;case"keydown":case"keyup":Ie=tS;break;case"focusin":ze="focus",Ie=Ef;break;case"focusout":ze="blur",Ie=Ef;break;case"beforeblur":case"afterblur":Ie=Ef;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=rS;break;case ug:case cg:case fg:Ie=jy;break;case hg:Ie=oS;break;case"scroll":Ie=Vy;break;case"wheel":Ie=lS;break;case"copy":case"cut":case"paste":Ie=qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Xm}var Ve=(s&4)!==0,tn=!Ve&&i==="scroll",Z=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var W=re,ee;W!==null;){ee=W;var Ee=ee.stateNode;if(ee.tag===5&&Ee!==null&&(ee=Ee,Z!==null&&(Ee=kn(W,Z),Ee!=null&&Ve.push(tl(W,Ee,ee)))),tn)break;W=W.return}0<Ve.length&&(me=new Ie(me,ze,null,c,_e),xe.push({event:me,listeners:Ve}))}}if(!(s&7)){e:{if(me=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",me&&c!==bt&&(ze=c.relatedTarget||c.fromElement)&&(Us(ze)||ze[gr]))break e;if((Ie||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ze=c.relatedTarget||c.toElement,Ie=re,ze=ze?Us(ze):null,ze!==null&&(tn=qi(ze),ze!==tn||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=re),Ie!==ze)){if(Ve=Gm,Ee="onMouseLeave",Z="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(Ve=Xm,Ee="onPointerLeave",Z="onPointerEnter",W="pointer"),tn=Ie==null?me:Po(Ie),ee=ze==null?me:Po(ze),me=new Ve(Ee,W+"leave",Ie,c,_e),me.target=tn,me.relatedTarget=ee,Ee=null,Us(_e)===re&&(Ve=new Ve(Z,W+"enter",ze,c,_e),Ve.target=ee,Ve.relatedTarget=tn,Ee=Ve),tn=Ee,Ie&&ze)t:{for(Ve=Ie,Z=ze,W=0,ee=Ve;ee;ee=Co(ee))W++;for(ee=0,Ee=Z;Ee;Ee=Co(Ee))ee++;for(;0<W-ee;)Ve=Co(Ve),W--;for(;0<ee-W;)Z=Co(Z),ee--;for(;W--;){if(Ve===Z||Z!==null&&Ve===Z.alternate)break t;Ve=Co(Ve),Z=Co(Z)}Ve=null}else Ve=null;Ie!==null&&vg(xe,me,Ie,Ve,!1),ze!==null&&tn!==null&&vg(xe,tn,ze,Ve,!0)}}e:{if(me=re?Po(re):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var Ge=mS;else if(Zm(me))if(Jm)Ge=xS;else{Ge=_S;var Ke=gS}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ge=vS);if(Ge&&(Ge=Ge(i,re))){Qm(xe,Ge,c,_e);break e}Ke&&Ke(i,me,re),i==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&Lt(me,"number",me.value)}switch(Ke=re?Po(re):window,i){case"focusin":(Zm(Ke)||Ke.contentEditable==="true")&&(Ao=Ke,bf=re,Qa=null);break;case"focusout":Qa=bf=Ao=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,ag(xe,c,_e);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":ag(xe,c,_e)}var $e;if(wf)e:{switch(i){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else wo?Km(i,c)&&(tt="onCompositionEnd"):i==="keydown"&&c.keyCode===229&&(tt="onCompositionStart");tt&&(jm&&c.locale!=="ko"&&(wo||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&wo&&($e=Vm()):(qr=_e,xf="value"in qr?qr.value:qr.textContent,wo=!0)),Ke=_u(re,tt),0<Ke.length&&(tt=new Wm(tt,i,null,c,_e),xe.push({event:tt,listeners:Ke}),$e?tt.data=$e:($e=$m(c),$e!==null&&(tt.data=$e)))),($e=cS?fS(i,c):hS(i,c))&&(re=_u(re,"onBeforeInput"),0<re.length&&(_e=new Wm("onBeforeInput","beforeinput",null,c,_e),xe.push({event:_e,listeners:re}),_e.data=$e))}gg(xe,s)})}function tl(i,s,c){return{instance:i,listener:s,currentTarget:c}}function _u(i,s){for(var c=s+"Capture",d=[];i!==null;){var _=i,S=_.stateNode;_.tag===5&&S!==null&&(_=S,S=kn(i,c),S!=null&&d.unshift(tl(i,S,_)),S=kn(i,s),S!=null&&d.push(tl(i,S,_))),i=i.return}return d}function Co(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function vg(i,s,c,d,_){for(var S=s._reactName,w=[];c!==null&&c!==d;){var O=c,V=O.alternate,re=O.stateNode;if(V!==null&&V===d)break;O.tag===5&&re!==null&&(O=re,_?(V=kn(c,S),V!=null&&w.unshift(tl(c,V,O))):_||(V=kn(c,S),V!=null&&w.push(tl(c,V,O)))),c=c.return}w.length!==0&&i.push({event:s,listeners:w})}var AS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function xg(i){return(typeof i=="string"?i:""+i).replace(AS,`
`).replace(RS,"")}function vu(i,s,c){if(s=xg(s),xg(i)!==s&&c)throw Error(t(425))}function xu(){}var Ff=null,Of=null;function kf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(i){return yg.resolve(null).then(i).catch(PS)}:Bf;function PS(i){setTimeout(function(){throw i})}function zf(i,s){var c=s,d=0;do{var _=c.nextSibling;if(i.removeChild(c),_&&_.nodeType===8)if(c=_.data,c==="/$"){if(d===0){i.removeChild(_),Xa(s);return}d--}else c!=="$"&&c!=="$?"&&c!=="$!"||d++;c=_}while(c);Xa(s)}function $r(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Sg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var c=i.data;if(c==="$"||c==="$!"||c==="$?"){if(s===0)return i;s--}else c==="/$"&&s++}i=i.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Ki="__reactFiber$"+bo,nl="__reactProps$"+bo,gr="__reactContainer$"+bo,Vf="__reactEvents$"+bo,LS="__reactListeners$"+bo,IS="__reactHandles$"+bo;function Us(i){var s=i[Ki];if(s)return s;for(var c=i.parentNode;c;){if(s=c[gr]||c[Ki]){if(c=s.alternate,s.child!==null||c!==null&&c.child!==null)for(i=Sg(i);i!==null;){if(c=i[Ki])return c;i=Sg(i)}return s}i=c,c=i.parentNode}return null}function il(i){return i=i[Ki]||i[gr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Po(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function yu(i){return i[nl]||null}var Hf=[],Lo=-1;function Zr(i){return{current:i}}function Ht(i){0>Lo||(i.current=Hf[Lo],Hf[Lo]=null,Lo--)}function kt(i,s){Lo++,Hf[Lo]=i.current,i.current=s}var Qr={},Rn=Zr(Qr),Zn=Zr(!1),Fs=Qr;function Io(i,s){var c=i.type.contextTypes;if(!c)return Qr;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var _={},S;for(S in c)_[S]=s[S];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=_),_}function Qn(i){return i=i.childContextTypes,i!=null}function Su(){Ht(Zn),Ht(Rn)}function Mg(i,s,c){if(Rn.current!==Qr)throw Error(t(168));kt(Rn,s),kt(Zn,c)}function Eg(i,s,c){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return c;d=d.getChildContext();for(var _ in d)if(!(_ in s))throw Error(t(108,ve(i)||"Unknown",_));return oe({},c,d)}function Mu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Qr,Fs=Rn.current,kt(Rn,i),kt(Zn,Zn.current),!0}function Tg(i,s,c){var d=i.stateNode;if(!d)throw Error(t(169));c?(i=Eg(i,s,Fs),d.__reactInternalMemoizedMergedChildContext=i,Ht(Zn),Ht(Rn),kt(Rn,i)):Ht(Zn),kt(Zn,c)}var _r=null,Eu=!1,Gf=!1;function wg(i){_r===null?_r=[i]:_r.push(i)}function DS(i){Eu=!0,wg(i)}function Jr(){if(!Gf&&_r!==null){Gf=!0;var i=0,s=pt;try{var c=_r;for(pt=1;i<c.length;i++){var d=c[i];do d=d(!0);while(d!==null)}_r=null,Eu=!1}catch(_){throw _r!==null&&(_r=_r.slice(i+1)),L(Ce,Jr),_}finally{pt=s,Gf=!1}}return null}var Do=[],No=0,Tu=null,wu=0,yi=[],Si=0,Os=null,vr=1,xr="";function ks(i,s){Do[No++]=wu,Do[No++]=Tu,Tu=i,wu=s}function Ag(i,s,c){yi[Si++]=vr,yi[Si++]=xr,yi[Si++]=Os,Os=i;var d=vr;i=xr;var _=32-Rt(d)-1;d&=~(1<<_),c+=1;var S=32-Rt(s)+_;if(30<S){var w=_-_%5;S=(d&(1<<w)-1).toString(32),d>>=w,_-=w,vr=1<<32-Rt(s)+_|c<<_|d,xr=S+i}else vr=1<<S|c<<_|d,xr=i}function Wf(i){i.return!==null&&(ks(i,1),Ag(i,1,0))}function Xf(i){for(;i===Tu;)Tu=Do[--No],Do[No]=null,wu=Do[--No],Do[No]=null;for(;i===Os;)Os=yi[--Si],yi[Si]=null,xr=yi[--Si],yi[Si]=null,vr=yi[--Si],yi[Si]=null}var ui=null,ci=null,Wt=!1,Ui=null;function Rg(i,s){var c=wi(5,null,null,0);c.elementType="DELETED",c.stateNode=s,c.return=i,s=i.deletions,s===null?(i.deletions=[c],i.flags|=16):s.push(c)}function Cg(i,s){switch(i.tag){case 5:var c=i.type;return s=s.nodeType!==1||c.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ui=i,ci=$r(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ui=i,ci=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(c=Os!==null?{id:vr,overflow:xr}:null,i.memoizedState={dehydrated:s,treeContext:c,retryLane:1073741824},c=wi(18,null,null,0),c.stateNode=s,c.return=i,i.child=c,ui=i,ci=null,!0):!1;default:return!1}}function jf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Yf(i){if(Wt){var s=ci;if(s){var c=s;if(!Cg(i,s)){if(jf(i))throw Error(t(418));s=$r(c.nextSibling);var d=ui;s&&Cg(i,s)?Rg(d,c):(i.flags=i.flags&-4097|2,Wt=!1,ui=i)}}else{if(jf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Wt=!1,ui=i}}}function bg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ui=i}function Au(i){if(i!==ui)return!1;if(!Wt)return bg(i),Wt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!kf(i.type,i.memoizedProps)),s&&(s=ci)){if(jf(i))throw Pg(),Error(t(418));for(;s;)Rg(i,s),s=$r(s.nextSibling)}if(bg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var c=i.data;if(c==="/$"){if(s===0){ci=$r(i.nextSibling);break e}s--}else c!=="$"&&c!=="$!"&&c!=="$?"||s++}i=i.nextSibling}ci=null}}else ci=ui?$r(i.stateNode.nextSibling):null;return!0}function Pg(){for(var i=ci;i;)i=$r(i.nextSibling)}function Uo(){ci=ui=null,Wt=!1}function qf(i){Ui===null?Ui=[i]:Ui.push(i)}var NS=T.ReactCurrentBatchConfig;function rl(i,s,c){if(i=c.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var d=c.stateNode}if(!d)throw Error(t(147,i));var _=d,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(w){var O=_.refs;w===null?delete O[S]:O[S]=w},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,i))}return i}function Ru(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lg(i){var s=i._init;return s(i._payload)}function Ig(i){function s(Z,W){if(i){var ee=Z.deletions;ee===null?(Z.deletions=[W],Z.flags|=16):ee.push(W)}}function c(Z,W){if(!i)return null;for(;W!==null;)s(Z,W),W=W.sibling;return null}function d(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function _(Z,W){return Z=as(Z,W),Z.index=0,Z.sibling=null,Z}function S(Z,W,ee){return Z.index=ee,i?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<W?(Z.flags|=2,W):ee):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function w(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function O(Z,W,ee,Ee){return W===null||W.tag!==6?(W=Bh(ee,Z.mode,Ee),W.return=Z,W):(W=_(W,ee),W.return=Z,W)}function V(Z,W,ee,Ee){var Ge=ee.type;return Ge===I?_e(Z,W,ee.props.children,Ee,ee.key):W!==null&&(W.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===q&&Lg(Ge)===W.type)?(Ee=_(W,ee.props),Ee.ref=rl(Z,W,ee),Ee.return=Z,Ee):(Ee=Zu(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=rl(Z,W,ee),Ee.return=Z,Ee)}function re(Z,W,ee,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=zh(ee,Z.mode,Ee),W.return=Z,W):(W=_(W,ee.children||[]),W.return=Z,W)}function _e(Z,W,ee,Ee,Ge){return W===null||W.tag!==7?(W=js(ee,Z.mode,Ee,Ge),W.return=Z,W):(W=_(W,ee),W.return=Z,W)}function xe(Z,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Bh(""+W,Z.mode,ee),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return ee=Zu(W.type,W.key,W.props,null,Z.mode,ee),ee.ref=rl(Z,null,W),ee.return=Z,ee;case N:return W=zh(W,Z.mode,ee),W.return=Z,W;case q:var Ee=W._init;return xe(Z,Ee(W._payload),ee)}if(We(W)||te(W))return W=js(W,Z.mode,ee,null),W.return=Z,W;Ru(Z,W)}return null}function me(Z,W,ee,Ee){var Ge=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ge!==null?null:O(Z,W,""+ee,Ee);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:return ee.key===Ge?V(Z,W,ee,Ee):null;case N:return ee.key===Ge?re(Z,W,ee,Ee):null;case q:return Ge=ee._init,me(Z,W,Ge(ee._payload),Ee)}if(We(ee)||te(ee))return Ge!==null?null:_e(Z,W,ee,Ee,null);Ru(Z,ee)}return null}function Ie(Z,W,ee,Ee,Ge){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Z=Z.get(ee)||null,O(W,Z,""+Ee,Ge);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,V(W,Z,Ee,Ge);case N:return Z=Z.get(Ee.key===null?ee:Ee.key)||null,re(W,Z,Ee,Ge);case q:var Ke=Ee._init;return Ie(Z,W,ee,Ke(Ee._payload),Ge)}if(We(Ee)||te(Ee))return Z=Z.get(ee)||null,_e(W,Z,Ee,Ge,null);Ru(W,Ee)}return null}function ze(Z,W,ee,Ee){for(var Ge=null,Ke=null,$e=W,tt=W=0,pn=null;$e!==null&&tt<ee.length;tt++){$e.index>tt?(pn=$e,$e=null):pn=$e.sibling;var Ct=me(Z,$e,ee[tt],Ee);if(Ct===null){$e===null&&($e=pn);break}i&&$e&&Ct.alternate===null&&s(Z,$e),W=S(Ct,W,tt),Ke===null?Ge=Ct:Ke.sibling=Ct,Ke=Ct,$e=pn}if(tt===ee.length)return c(Z,$e),Wt&&ks(Z,tt),Ge;if($e===null){for(;tt<ee.length;tt++)$e=xe(Z,ee[tt],Ee),$e!==null&&(W=S($e,W,tt),Ke===null?Ge=$e:Ke.sibling=$e,Ke=$e);return Wt&&ks(Z,tt),Ge}for($e=d(Z,$e);tt<ee.length;tt++)pn=Ie($e,Z,tt,ee[tt],Ee),pn!==null&&(i&&pn.alternate!==null&&$e.delete(pn.key===null?tt:pn.key),W=S(pn,W,tt),Ke===null?Ge=pn:Ke.sibling=pn,Ke=pn);return i&&$e.forEach(function(ls){return s(Z,ls)}),Wt&&ks(Z,tt),Ge}function Ve(Z,W,ee,Ee){var Ge=te(ee);if(typeof Ge!="function")throw Error(t(150));if(ee=Ge.call(ee),ee==null)throw Error(t(151));for(var Ke=Ge=null,$e=W,tt=W=0,pn=null,Ct=ee.next();$e!==null&&!Ct.done;tt++,Ct=ee.next()){$e.index>tt?(pn=$e,$e=null):pn=$e.sibling;var ls=me(Z,$e,Ct.value,Ee);if(ls===null){$e===null&&($e=pn);break}i&&$e&&ls.alternate===null&&s(Z,$e),W=S(ls,W,tt),Ke===null?Ge=ls:Ke.sibling=ls,Ke=ls,$e=pn}if(Ct.done)return c(Z,$e),Wt&&ks(Z,tt),Ge;if($e===null){for(;!Ct.done;tt++,Ct=ee.next())Ct=xe(Z,Ct.value,Ee),Ct!==null&&(W=S(Ct,W,tt),Ke===null?Ge=Ct:Ke.sibling=Ct,Ke=Ct);return Wt&&ks(Z,tt),Ge}for($e=d(Z,$e);!Ct.done;tt++,Ct=ee.next())Ct=Ie($e,Z,tt,Ct.value,Ee),Ct!==null&&(i&&Ct.alternate!==null&&$e.delete(Ct.key===null?tt:Ct.key),W=S(Ct,W,tt),Ke===null?Ge=Ct:Ke.sibling=Ct,Ke=Ct);return i&&$e.forEach(function(hM){return s(Z,hM)}),Wt&&ks(Z,tt),Ge}function tn(Z,W,ee,Ee){if(typeof ee=="object"&&ee!==null&&ee.type===I&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:e:{for(var Ge=ee.key,Ke=W;Ke!==null;){if(Ke.key===Ge){if(Ge=ee.type,Ge===I){if(Ke.tag===7){c(Z,Ke.sibling),W=_(Ke,ee.props.children),W.return=Z,Z=W;break e}}else if(Ke.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===q&&Lg(Ge)===Ke.type){c(Z,Ke.sibling),W=_(Ke,ee.props),W.ref=rl(Z,Ke,ee),W.return=Z,Z=W;break e}c(Z,Ke);break}else s(Z,Ke);Ke=Ke.sibling}ee.type===I?(W=js(ee.props.children,Z.mode,Ee,ee.key),W.return=Z,Z=W):(Ee=Zu(ee.type,ee.key,ee.props,null,Z.mode,Ee),Ee.ref=rl(Z,W,ee),Ee.return=Z,Z=Ee)}return w(Z);case N:e:{for(Ke=ee.key;W!==null;){if(W.key===Ke)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){c(Z,W.sibling),W=_(W,ee.children||[]),W.return=Z,Z=W;break e}else{c(Z,W);break}else s(Z,W);W=W.sibling}W=zh(ee,Z.mode,Ee),W.return=Z,Z=W}return w(Z);case q:return Ke=ee._init,tn(Z,W,Ke(ee._payload),Ee)}if(We(ee))return ze(Z,W,ee,Ee);if(te(ee))return Ve(Z,W,ee,Ee);Ru(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(c(Z,W.sibling),W=_(W,ee),W.return=Z,Z=W):(c(Z,W),W=Bh(ee,Z.mode,Ee),W.return=Z,Z=W),w(Z)):c(Z,W)}return tn}var Fo=Ig(!0),Dg=Ig(!1),Cu=Zr(null),bu=null,Oo=null,Kf=null;function $f(){Kf=Oo=bu=null}function Zf(i){var s=Cu.current;Ht(Cu),i._currentValue=s}function Qf(i,s,c){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===c)break;i=i.return}}function ko(i,s){bu=i,Kf=Oo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(Jn=!0),i.firstContext=null)}function Mi(i){var s=i._currentValue;if(Kf!==i)if(i={context:i,memoizedValue:s,next:null},Oo===null){if(bu===null)throw Error(t(308));Oo=i,bu.dependencies={lanes:0,firstContext:i}}else Oo=Oo.next=i;return s}var Bs=null;function Jf(i){Bs===null?Bs=[i]:Bs.push(i)}function Ng(i,s,c,d){var _=s.interleaved;return _===null?(c.next=c,Jf(s)):(c.next=_.next,_.next=c),s.interleaved=c,yr(i,d)}function yr(i,s){i.lanes|=s;var c=i.alternate;for(c!==null&&(c.lanes|=s),c=i,i=i.return;i!==null;)i.childLanes|=s,c=i.alternate,c!==null&&(c.childLanes|=s),c=i,i=i.return;return c.tag===3?c.stateNode:null}var es=!1;function eh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Sr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function ts(i,s,c){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,Tt&2){var _=d.pending;return _===null?s.next=s:(s.next=_.next,_.next=s),d.pending=s,yr(i,c)}return _=d.interleaved,_===null?(s.next=s,Jf(d)):(s.next=_.next,_.next=s),d.interleaved=s,yr(i,c)}function Pu(i,s,c){if(s=s.updateQueue,s!==null&&(s=s.shared,(c&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,c|=d,s.lanes=c,Ns(i,c)}}function Fg(i,s){var c=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,c===d)){var _=null,S=null;if(c=c.firstBaseUpdate,c!==null){do{var w={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};S===null?_=S=w:S=S.next=w,c=c.next}while(c!==null);S===null?_=S=s:S=S.next=s}else _=S=s;c={baseState:d.baseState,firstBaseUpdate:_,lastBaseUpdate:S,shared:d.shared,effects:d.effects},i.updateQueue=c;return}i=c.lastBaseUpdate,i===null?c.firstBaseUpdate=s:i.next=s,c.lastBaseUpdate=s}function Lu(i,s,c,d){var _=i.updateQueue;es=!1;var S=_.firstBaseUpdate,w=_.lastBaseUpdate,O=_.shared.pending;if(O!==null){_.shared.pending=null;var V=O,re=V.next;V.next=null,w===null?S=re:w.next=re,w=V;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,O=_e.lastBaseUpdate,O!==w&&(O===null?_e.firstBaseUpdate=re:O.next=re,_e.lastBaseUpdate=V))}if(S!==null){var xe=_.baseState;w=0,_e=re=V=null,O=S;do{var me=O.lane,Ie=O.eventTime;if((d&me)===me){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var ze=i,Ve=O;switch(me=s,Ie=c,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(Ie,xe,me);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,me=typeof ze=="function"?ze.call(Ie,xe,me):ze,me==null)break e;xe=oe({},xe,me);break e;case 2:es=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,me=_.effects,me===null?_.effects=[O]:me.push(O))}else Ie={eventTime:Ie,lane:me,tag:O.tag,payload:O.payload,callback:O.callback,next:null},_e===null?(re=_e=Ie,V=xe):_e=_e.next=Ie,w|=me;if(O=O.next,O===null){if(O=_.shared.pending,O===null)break;me=O,O=me.next,me.next=null,_.lastBaseUpdate=me,_.shared.pending=null}}while(!0);if(_e===null&&(V=xe),_.baseState=V,_.firstBaseUpdate=re,_.lastBaseUpdate=_e,s=_.shared.interleaved,s!==null){_=s;do w|=_.lane,_=_.next;while(_!==s)}else S===null&&(_.shared.lanes=0);Hs|=w,i.lanes=w,i.memoizedState=xe}}function Og(i,s,c){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],_=d.callback;if(_!==null){if(d.callback=null,d=c,typeof _!="function")throw Error(t(191,_));_.call(d)}}}var sl={},$i=Zr(sl),ol=Zr(sl),al=Zr(sl);function zs(i){if(i===sl)throw Error(t(174));return i}function th(i,s){switch(kt(al,s),kt(ol,i),kt($i,sl),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:He(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=He(s,i)}Ht($i),kt($i,s)}function Bo(){Ht($i),Ht(ol),Ht(al)}function kg(i){zs(al.current);var s=zs($i.current),c=He(s,i.type);s!==c&&(kt(ol,i),kt($i,c))}function nh(i){ol.current===i&&(Ht($i),Ht(ol))}var jt=Zr(0);function Iu(i){for(var s=i;s!==null;){if(s.tag===13){var c=s.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ih=[];function rh(){for(var i=0;i<ih.length;i++)ih[i]._workInProgressVersionPrimary=null;ih.length=0}var Du=T.ReactCurrentDispatcher,sh=T.ReactCurrentBatchConfig,Vs=0,Yt=null,ln=null,hn=null,Nu=!1,ll=!1,ul=0,US=0;function Cn(){throw Error(t(321))}function oh(i,s){if(s===null)return!1;for(var c=0;c<s.length&&c<i.length;c++)if(!Ni(i[c],s[c]))return!1;return!0}function ah(i,s,c,d,_,S){if(Vs=S,Yt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Du.current=i===null||i.memoizedState===null?BS:zS,i=c(d,_),ll){S=0;do{if(ll=!1,ul=0,25<=S)throw Error(t(301));S+=1,hn=ln=null,s.updateQueue=null,Du.current=VS,i=c(d,_)}while(ll)}if(Du.current=Ou,s=ln!==null&&ln.next!==null,Vs=0,hn=ln=Yt=null,Nu=!1,s)throw Error(t(300));return i}function lh(){var i=ul!==0;return ul=0,i}function Zi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Yt.memoizedState=hn=i:hn=hn.next=i,hn}function Ei(){if(ln===null){var i=Yt.alternate;i=i!==null?i.memoizedState:null}else i=ln.next;var s=hn===null?Yt.memoizedState:hn.next;if(s!==null)hn=s,ln=i;else{if(i===null)throw Error(t(310));ln=i,i={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},hn===null?Yt.memoizedState=hn=i:hn=hn.next=i}return hn}function cl(i,s){return typeof s=="function"?s(i):s}function uh(i){var s=Ei(),c=s.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var d=ln,_=d.baseQueue,S=c.pending;if(S!==null){if(_!==null){var w=_.next;_.next=S.next,S.next=w}d.baseQueue=_=S,c.pending=null}if(_!==null){S=_.next,d=d.baseState;var O=w=null,V=null,re=S;do{var _e=re.lane;if((Vs&_e)===_e)V!==null&&(V=V.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),d=re.hasEagerState?re.eagerState:i(d,re.action);else{var xe={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};V===null?(O=V=xe,w=d):V=V.next=xe,Yt.lanes|=_e,Hs|=_e}re=re.next}while(re!==null&&re!==S);V===null?w=d:V.next=O,Ni(d,s.memoizedState)||(Jn=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=V,c.lastRenderedState=d}if(i=c.interleaved,i!==null){_=i;do S=_.lane,Yt.lanes|=S,Hs|=S,_=_.next;while(_!==i)}else _===null&&(c.lanes=0);return[s.memoizedState,c.dispatch]}function ch(i){var s=Ei(),c=s.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=i;var d=c.dispatch,_=c.pending,S=s.memoizedState;if(_!==null){c.pending=null;var w=_=_.next;do S=i(S,w.action),w=w.next;while(w!==_);Ni(S,s.memoizedState)||(Jn=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),c.lastRenderedState=S}return[S,d]}function Bg(){}function zg(i,s){var c=Yt,d=Ei(),_=s(),S=!Ni(d.memoizedState,_);if(S&&(d.memoizedState=_,Jn=!0),d=d.queue,fh(Gg.bind(null,c,d,i),[i]),d.getSnapshot!==s||S||hn!==null&&hn.memoizedState.tag&1){if(c.flags|=2048,fl(9,Hg.bind(null,c,d,_,s),void 0,null),dn===null)throw Error(t(349));Vs&30||Vg(c,s,_)}return _}function Vg(i,s,c){i.flags|=16384,i={getSnapshot:s,value:c},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.stores=[i]):(c=s.stores,c===null?s.stores=[i]:c.push(i))}function Hg(i,s,c,d){s.value=c,s.getSnapshot=d,Wg(s)&&Xg(i)}function Gg(i,s,c){return c(function(){Wg(s)&&Xg(i)})}function Wg(i){var s=i.getSnapshot;i=i.value;try{var c=s();return!Ni(i,c)}catch{return!0}}function Xg(i){var s=yr(i,1);s!==null&&Bi(s,i,1,-1)}function jg(i){var s=Zi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:i},s.queue=i,i=i.dispatch=kS.bind(null,Yt,i),[s.memoizedState,i]}function fl(i,s,c,d){return i={tag:i,create:s,destroy:c,deps:d,next:null},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.lastEffect=i.next=i):(c=s.lastEffect,c===null?s.lastEffect=i.next=i:(d=c.next,c.next=i,i.next=d,s.lastEffect=i)),i}function Yg(){return Ei().memoizedState}function Uu(i,s,c,d){var _=Zi();Yt.flags|=i,_.memoizedState=fl(1|s,c,void 0,d===void 0?null:d)}function Fu(i,s,c,d){var _=Ei();d=d===void 0?null:d;var S=void 0;if(ln!==null){var w=ln.memoizedState;if(S=w.destroy,d!==null&&oh(d,w.deps)){_.memoizedState=fl(s,c,S,d);return}}Yt.flags|=i,_.memoizedState=fl(1|s,c,S,d)}function qg(i,s){return Uu(8390656,8,i,s)}function fh(i,s){return Fu(2048,8,i,s)}function Kg(i,s){return Fu(4,2,i,s)}function $g(i,s){return Fu(4,4,i,s)}function Zg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Qg(i,s,c){return c=c!=null?c.concat([i]):null,Fu(4,4,Zg.bind(null,s,i),c)}function hh(){}function Jg(i,s){var c=Ei();s=s===void 0?null:s;var d=c.memoizedState;return d!==null&&s!==null&&oh(s,d[1])?d[0]:(c.memoizedState=[i,s],i)}function e_(i,s){var c=Ei();s=s===void 0?null:s;var d=c.memoizedState;return d!==null&&s!==null&&oh(s,d[1])?d[0]:(i=i(),c.memoizedState=[i,s],i)}function t_(i,s,c){return Vs&21?(Ni(c,s)||(c=zn(),Yt.lanes|=c,Hs|=c,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,Jn=!0),i.memoizedState=c)}function FS(i,s){var c=pt;pt=c!==0&&4>c?c:4,i(!0);var d=sh.transition;sh.transition={};try{i(!1),s()}finally{pt=c,sh.transition=d}}function n_(){return Ei().memoizedState}function OS(i,s,c){var d=ss(i);if(c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null},i_(i))r_(s,c);else if(c=Ng(i,s,c,d),c!==null){var _=Hn();Bi(c,i,d,_),s_(c,s,d)}}function kS(i,s,c){var d=ss(i),_={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(i_(i))r_(s,_);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var w=s.lastRenderedState,O=S(w,c);if(_.hasEagerState=!0,_.eagerState=O,Ni(O,w)){var V=s.interleaved;V===null?(_.next=_,Jf(s)):(_.next=V.next,V.next=_),s.interleaved=_;return}}catch{}finally{}c=Ng(i,s,_,d),c!==null&&(_=Hn(),Bi(c,i,d,_),s_(c,s,d))}}function i_(i){var s=i.alternate;return i===Yt||s!==null&&s===Yt}function r_(i,s){ll=Nu=!0;var c=i.pending;c===null?s.next=s:(s.next=c.next,c.next=s),i.pending=s}function s_(i,s,c){if(c&4194240){var d=s.lanes;d&=i.pendingLanes,c|=d,s.lanes=c,Ns(i,c)}}var Ou={readContext:Mi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},BS={readContext:Mi,useCallback:function(i,s){return Zi().memoizedState=[i,s===void 0?null:s],i},useContext:Mi,useEffect:qg,useImperativeHandle:function(i,s,c){return c=c!=null?c.concat([i]):null,Uu(4194308,4,Zg.bind(null,s,i),c)},useLayoutEffect:function(i,s){return Uu(4194308,4,i,s)},useInsertionEffect:function(i,s){return Uu(4,2,i,s)},useMemo:function(i,s){var c=Zi();return s=s===void 0?null:s,i=i(),c.memoizedState=[i,s],i},useReducer:function(i,s,c){var d=Zi();return s=c!==void 0?c(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=OS.bind(null,Yt,i),[d.memoizedState,i]},useRef:function(i){var s=Zi();return i={current:i},s.memoizedState=i},useState:jg,useDebugValue:hh,useDeferredValue:function(i){return Zi().memoizedState=i},useTransition:function(){var i=jg(!1),s=i[0];return i=FS.bind(null,i[1]),Zi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,c){var d=Yt,_=Zi();if(Wt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=s(),dn===null)throw Error(t(349));Vs&30||Vg(d,s,c)}_.memoizedState=c;var S={value:c,getSnapshot:s};return _.queue=S,qg(Gg.bind(null,d,S,i),[i]),d.flags|=2048,fl(9,Hg.bind(null,d,S,c,s),void 0,null),c},useId:function(){var i=Zi(),s=dn.identifierPrefix;if(Wt){var c=xr,d=vr;c=(d&~(1<<32-Rt(d)-1)).toString(32)+c,s=":"+s+"R"+c,c=ul++,0<c&&(s+="H"+c.toString(32)),s+=":"}else c=US++,s=":"+s+"r"+c.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},zS={readContext:Mi,useCallback:Jg,useContext:Mi,useEffect:fh,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:$g,useMemo:e_,useReducer:uh,useRef:Yg,useState:function(){return uh(cl)},useDebugValue:hh,useDeferredValue:function(i){var s=Ei();return t_(s,ln.memoizedState,i)},useTransition:function(){var i=uh(cl)[0],s=Ei().memoizedState;return[i,s]},useMutableSource:Bg,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1},VS={readContext:Mi,useCallback:Jg,useContext:Mi,useEffect:fh,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:$g,useMemo:e_,useReducer:ch,useRef:Yg,useState:function(){return ch(cl)},useDebugValue:hh,useDeferredValue:function(i){var s=Ei();return ln===null?s.memoizedState=i:t_(s,ln.memoizedState,i)},useTransition:function(){var i=ch(cl)[0],s=Ei().memoizedState;return[i,s]},useMutableSource:Bg,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1};function Fi(i,s){if(i&&i.defaultProps){s=oe({},s),i=i.defaultProps;for(var c in i)s[c]===void 0&&(s[c]=i[c]);return s}return s}function dh(i,s,c,d){s=i.memoizedState,c=c(d,s),c=c==null?s:oe({},s,c),i.memoizedState=c,i.lanes===0&&(i.updateQueue.baseState=c)}var ku={isMounted:function(i){return(i=i._reactInternals)?qi(i)===i:!1},enqueueSetState:function(i,s,c){i=i._reactInternals;var d=Hn(),_=ss(i),S=Sr(d,_);S.payload=s,c!=null&&(S.callback=c),s=ts(i,S,_),s!==null&&(Bi(s,i,_,d),Pu(s,i,_))},enqueueReplaceState:function(i,s,c){i=i._reactInternals;var d=Hn(),_=ss(i),S=Sr(d,_);S.tag=1,S.payload=s,c!=null&&(S.callback=c),s=ts(i,S,_),s!==null&&(Bi(s,i,_,d),Pu(s,i,_))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var c=Hn(),d=ss(i),_=Sr(c,d);_.tag=2,s!=null&&(_.callback=s),s=ts(i,_,d),s!==null&&(Bi(s,i,d,c),Pu(s,i,d))}};function o_(i,s,c,d,_,S,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,S,w):s.prototype&&s.prototype.isPureReactComponent?!Za(c,d)||!Za(_,S):!0}function a_(i,s,c){var d=!1,_=Qr,S=s.contextType;return typeof S=="object"&&S!==null?S=Mi(S):(_=Qn(s)?Fs:Rn.current,d=s.contextTypes,S=(d=d!=null)?Io(i,_):Qr),s=new s(c,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ku,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=_,i.__reactInternalMemoizedMaskedChildContext=S),s}function l_(i,s,c,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(c,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(c,d),s.state!==i&&ku.enqueueReplaceState(s,s.state,null)}function ph(i,s,c,d){var _=i.stateNode;_.props=c,_.state=i.memoizedState,_.refs={},eh(i);var S=s.contextType;typeof S=="object"&&S!==null?_.context=Mi(S):(S=Qn(s)?Fs:Rn.current,_.context=Io(i,S)),_.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(dh(i,s,S,c),_.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(s=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),s!==_.state&&ku.enqueueReplaceState(_,_.state,null),Lu(i,c,_,d),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308)}function zo(i,s){try{var c="",d=s;do c+=fe(d),d=d.return;while(d);var _=c}catch(S){_=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:_,digest:null}}function mh(i,s,c){return{value:i,source:null,stack:c??null,digest:s??null}}function gh(i,s){try{console.error(s.value)}catch(c){setTimeout(function(){throw c})}}var HS=typeof WeakMap=="function"?WeakMap:Map;function u_(i,s,c){c=Sr(-1,c),c.tag=3,c.payload={element:null};var d=s.value;return c.callback=function(){Xu||(Xu=!0,Lh=d),gh(i,s)},c}function c_(i,s,c){c=Sr(-1,c),c.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var _=s.value;c.payload=function(){return d(_)},c.callback=function(){gh(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(c.callback=function(){gh(i,s),typeof d!="function"&&(is===null?is=new Set([this]):is.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),c}function f_(i,s,c){var d=i.pingCache;if(d===null){d=i.pingCache=new HS;var _=new Set;d.set(s,_)}else _=d.get(s),_===void 0&&(_=new Set,d.set(s,_));_.has(c)||(_.add(c),i=nM.bind(null,i,s,c),s.then(i,i))}function h_(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function d_(i,s,c,d,_){return i.mode&1?(i.flags|=65536,i.lanes=_,i):(i===s?i.flags|=65536:(i.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(s=Sr(-1,1),s.tag=2,ts(c,s,1))),c.lanes|=1),i)}var GS=T.ReactCurrentOwner,Jn=!1;function Vn(i,s,c,d){s.child=i===null?Dg(s,null,c,d):Fo(s,i.child,c,d)}function p_(i,s,c,d,_){c=c.render;var S=s.ref;return ko(s,_),d=ah(i,s,c,d,S,_),c=lh(),i!==null&&!Jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~_,Mr(i,s,_)):(Wt&&c&&Wf(s),s.flags|=1,Vn(i,s,d,_),s.child)}function m_(i,s,c,d,_){if(i===null){var S=c.type;return typeof S=="function"&&!kh(S)&&S.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(s.tag=15,s.type=S,g_(i,s,S,d,_)):(i=Zu(c.type,null,d,s,s.mode,_),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,!(i.lanes&_)){var w=S.memoizedProps;if(c=c.compare,c=c!==null?c:Za,c(w,d)&&i.ref===s.ref)return Mr(i,s,_)}return s.flags|=1,i=as(S,d),i.ref=s.ref,i.return=s,s.child=i}function g_(i,s,c,d,_){if(i!==null){var S=i.memoizedProps;if(Za(S,d)&&i.ref===s.ref)if(Jn=!1,s.pendingProps=d=S,(i.lanes&_)!==0)i.flags&131072&&(Jn=!0);else return s.lanes=i.lanes,Mr(i,s,_)}return _h(i,s,c,d,_)}function __(i,s,c){var d=s.pendingProps,_=d.children,S=i!==null?i.memoizedState:null;if(d.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ho,fi),fi|=c;else{if(!(c&1073741824))return i=S!==null?S.baseLanes|c:c,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,kt(Ho,fi),fi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:c,kt(Ho,fi),fi|=d}else S!==null?(d=S.baseLanes|c,s.memoizedState=null):d=c,kt(Ho,fi),fi|=d;return Vn(i,s,_,c),s.child}function v_(i,s){var c=s.ref;(i===null&&c!==null||i!==null&&i.ref!==c)&&(s.flags|=512,s.flags|=2097152)}function _h(i,s,c,d,_){var S=Qn(c)?Fs:Rn.current;return S=Io(s,S),ko(s,_),c=ah(i,s,c,d,S,_),d=lh(),i!==null&&!Jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~_,Mr(i,s,_)):(Wt&&d&&Wf(s),s.flags|=1,Vn(i,s,c,_),s.child)}function x_(i,s,c,d,_){if(Qn(c)){var S=!0;Mu(s)}else S=!1;if(ko(s,_),s.stateNode===null)zu(i,s),a_(s,c,d),ph(s,c,d,_),d=!0;else if(i===null){var w=s.stateNode,O=s.memoizedProps;w.props=O;var V=w.context,re=c.contextType;typeof re=="object"&&re!==null?re=Mi(re):(re=Qn(c)?Fs:Rn.current,re=Io(s,re));var _e=c.getDerivedStateFromProps,xe=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";xe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==d||V!==re)&&l_(s,w,d,re),es=!1;var me=s.memoizedState;w.state=me,Lu(s,d,w,_),V=s.memoizedState,O!==d||me!==V||Zn.current||es?(typeof _e=="function"&&(dh(s,c,_e,d),V=s.memoizedState),(O=es||o_(s,c,O,d,me,V,re))?(xe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=V),w.props=d,w.state=V,w.context=re,d=O):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,Ug(i,s),O=s.memoizedProps,re=s.type===s.elementType?O:Fi(s.type,O),w.props=re,xe=s.pendingProps,me=w.context,V=c.contextType,typeof V=="object"&&V!==null?V=Mi(V):(V=Qn(c)?Fs:Rn.current,V=Io(s,V));var Ie=c.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==xe||me!==V)&&l_(s,w,d,V),es=!1,me=s.memoizedState,w.state=me,Lu(s,d,w,_);var ze=s.memoizedState;O!==xe||me!==ze||Zn.current||es?(typeof Ie=="function"&&(dh(s,c,Ie,d),ze=s.memoizedState),(re=es||o_(s,c,re,d,me,ze,V)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ze,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ze,V)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=ze),w.props=d,w.state=ze,w.context=V,d=re):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),d=!1)}return vh(i,s,c,d,S,_)}function vh(i,s,c,d,_,S){v_(i,s);var w=(s.flags&128)!==0;if(!d&&!w)return _&&Tg(s,c,!1),Mr(i,s,S);d=s.stateNode,GS.current=s;var O=w&&typeof c.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&w?(s.child=Fo(s,i.child,null,S),s.child=Fo(s,null,O,S)):Vn(i,s,O,S),s.memoizedState=d.state,_&&Tg(s,c,!0),s.child}function y_(i){var s=i.stateNode;s.pendingContext?Mg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Mg(i,s.context,!1),th(i,s.containerInfo)}function S_(i,s,c,d,_){return Uo(),qf(_),s.flags|=256,Vn(i,s,c,d),s.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function yh(i){return{baseLanes:i,cachePool:null,transitions:null}}function M_(i,s,c){var d=s.pendingProps,_=jt.current,S=!1,w=(s.flags&128)!==0,O;if((O=w)||(O=i!==null&&i.memoizedState===null?!1:(_&2)!==0),O?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(_|=1),kt(jt,_&1),i===null)return Yf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=d.children,i=d.fallback,S?(d=s.mode,S=s.child,w={mode:"hidden",children:w},!(d&1)&&S!==null?(S.childLanes=0,S.pendingProps=w):S=Qu(w,d,0,null),i=js(i,d,c,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=yh(c),s.memoizedState=xh,i):Sh(s,w));if(_=i.memoizedState,_!==null&&(O=_.dehydrated,O!==null))return WS(i,s,w,d,O,_,c);if(S){S=d.fallback,w=s.mode,_=i.child,O=_.sibling;var V={mode:"hidden",children:d.children};return!(w&1)&&s.child!==_?(d=s.child,d.childLanes=0,d.pendingProps=V,s.deletions=null):(d=as(_,V),d.subtreeFlags=_.subtreeFlags&14680064),O!==null?S=as(O,S):(S=js(S,w,c,null),S.flags|=2),S.return=s,d.return=s,d.sibling=S,s.child=d,d=S,S=s.child,w=i.child.memoizedState,w=w===null?yh(c):{baseLanes:w.baseLanes|c,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=i.childLanes&~c,s.memoizedState=xh,d}return S=i.child,i=S.sibling,d=as(S,{mode:"visible",children:d.children}),!(s.mode&1)&&(d.lanes=c),d.return=s,d.sibling=null,i!==null&&(c=s.deletions,c===null?(s.deletions=[i],s.flags|=16):c.push(i)),s.child=d,s.memoizedState=null,d}function Sh(i,s){return s=Qu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Bu(i,s,c,d){return d!==null&&qf(d),Fo(s,i.child,null,c),i=Sh(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function WS(i,s,c,d,_,S,w){if(c)return s.flags&256?(s.flags&=-257,d=mh(Error(t(422))),Bu(i,s,w,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=d.fallback,_=s.mode,d=Qu({mode:"visible",children:d.children},_,0,null),S=js(S,_,w,null),S.flags|=2,d.return=s,S.return=s,d.sibling=S,s.child=d,s.mode&1&&Fo(s,i.child,null,w),s.child.memoizedState=yh(w),s.memoizedState=xh,S);if(!(s.mode&1))return Bu(i,s,w,null);if(_.data==="$!"){if(d=_.nextSibling&&_.nextSibling.dataset,d)var O=d.dgst;return d=O,S=Error(t(419)),d=mh(S,d,void 0),Bu(i,s,w,d)}if(O=(w&i.childLanes)!==0,Jn||O){if(d=dn,d!==null){switch(w&-w){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=_&(d.suspendedLanes|w)?0:_,_!==0&&_!==S.retryLane&&(S.retryLane=_,yr(i,_),Bi(d,i,_,-1))}return Oh(),d=mh(Error(t(421))),Bu(i,s,w,d)}return _.data==="$?"?(s.flags|=128,s.child=i.child,s=iM.bind(null,i),_._reactRetry=s,null):(i=S.treeContext,ci=$r(_.nextSibling),ui=s,Wt=!0,Ui=null,i!==null&&(yi[Si++]=vr,yi[Si++]=xr,yi[Si++]=Os,vr=i.id,xr=i.overflow,Os=s),s=Sh(s,d.children),s.flags|=4096,s)}function E_(i,s,c){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),Qf(i.return,s,c)}function Mh(i,s,c,d,_){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:_}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=c,S.tailMode=_)}function T_(i,s,c){var d=s.pendingProps,_=d.revealOrder,S=d.tail;if(Vn(i,s,d.children,c),d=jt.current,d&2)d=d&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&E_(i,c,s);else if(i.tag===19)E_(i,c,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(kt(jt,d),!(s.mode&1))s.memoizedState=null;else switch(_){case"forwards":for(c=s.child,_=null;c!==null;)i=c.alternate,i!==null&&Iu(i)===null&&(_=c),c=c.sibling;c=_,c===null?(_=s.child,s.child=null):(_=c.sibling,c.sibling=null),Mh(s,!1,_,c,S);break;case"backwards":for(c=null,_=s.child,s.child=null;_!==null;){if(i=_.alternate,i!==null&&Iu(i)===null){s.child=_;break}i=_.sibling,_.sibling=c,c=_,_=i}Mh(s,!0,c,null,S);break;case"together":Mh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function zu(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Mr(i,s,c){if(i!==null&&(s.dependencies=i.dependencies),Hs|=s.lanes,!(c&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,c=as(i,i.pendingProps),s.child=c,c.return=s;i.sibling!==null;)i=i.sibling,c=c.sibling=as(i,i.pendingProps),c.return=s;c.sibling=null}return s.child}function XS(i,s,c){switch(s.tag){case 3:y_(s),Uo();break;case 5:kg(s);break;case 1:Qn(s.type)&&Mu(s);break;case 4:th(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,_=s.memoizedProps.value;kt(Cu,d._currentValue),d._currentValue=_;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(kt(jt,jt.current&1),s.flags|=128,null):c&s.child.childLanes?M_(i,s,c):(kt(jt,jt.current&1),i=Mr(i,s,c),i!==null?i.sibling:null);kt(jt,jt.current&1);break;case 19:if(d=(c&s.childLanes)!==0,i.flags&128){if(d)return T_(i,s,c);s.flags|=128}if(_=s.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),kt(jt,jt.current),d)break;return null;case 22:case 23:return s.lanes=0,__(i,s,c)}return Mr(i,s,c)}var w_,Eh,A_,R_;w_=function(i,s){for(var c=s.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===s)break;for(;c.sibling===null;){if(c.return===null||c.return===s)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Eh=function(){},A_=function(i,s,c,d){var _=i.memoizedProps;if(_!==d){i=s.stateNode,zs($i.current);var S=null;switch(c){case"input":_=H(i,_),d=H(i,d),S=[];break;case"select":_=oe({},_,{value:void 0}),d=oe({},d,{value:void 0}),S=[];break;case"textarea":_=P(i,_),d=P(i,d),S=[];break;default:typeof _.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=xu)}ft(c,d);var w;c=null;for(re in _)if(!d.hasOwnProperty(re)&&_.hasOwnProperty(re)&&_[re]!=null)if(re==="style"){var O=_[re];for(w in O)O.hasOwnProperty(w)&&(c||(c={}),c[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(r.hasOwnProperty(re)?S||(S=[]):(S=S||[]).push(re,null));for(re in d){var V=d[re];if(O=_!=null?_[re]:void 0,d.hasOwnProperty(re)&&V!==O&&(V!=null||O!=null))if(re==="style")if(O){for(w in O)!O.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(c||(c={}),c[w]="");for(w in V)V.hasOwnProperty(w)&&O[w]!==V[w]&&(c||(c={}),c[w]=V[w])}else c||(S||(S=[]),S.push(re,c)),c=V;else re==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(S=S||[]).push(re,V)):re==="children"?typeof V!="string"&&typeof V!="number"||(S=S||[]).push(re,""+V):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(r.hasOwnProperty(re)?(V!=null&&re==="onScroll"&&Vt("scroll",i),S||O===V||(S=[])):(S=S||[]).push(re,V))}c&&(S=S||[]).push("style",c);var re=S;(s.updateQueue=re)&&(s.flags|=4)}},R_=function(i,s,c,d){c!==d&&(s.flags|=4)};function hl(i,s){if(!Wt)switch(i.tailMode){case"hidden":s=i.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i.tail=null:c.sibling=null;break;case"collapsed":c=i.tail;for(var d=null;c!==null;)c.alternate!==null&&(d=c),c=c.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function bn(i){var s=i.alternate!==null&&i.alternate.child===i.child,c=0,d=0;if(s)for(var _=i.child;_!==null;)c|=_.lanes|_.childLanes,d|=_.subtreeFlags&14680064,d|=_.flags&14680064,_.return=i,_=_.sibling;else for(_=i.child;_!==null;)c|=_.lanes|_.childLanes,d|=_.subtreeFlags,d|=_.flags,_.return=i,_=_.sibling;return i.subtreeFlags|=d,i.childLanes=c,s}function jS(i,s,c){var d=s.pendingProps;switch(Xf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(s),null;case 1:return Qn(s.type)&&Su(),bn(s),null;case 3:return d=s.stateNode,Bo(),Ht(Zn),Ht(Rn),rh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Au(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Ui!==null&&(Nh(Ui),Ui=null))),Eh(i,s),bn(s),null;case 5:nh(s);var _=zs(al.current);if(c=s.type,i!==null&&s.stateNode!=null)A_(i,s,c,d,_),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return bn(s),null}if(i=zs($i.current),Au(s)){d=s.stateNode,c=s.type;var S=s.memoizedProps;switch(d[Ki]=s,d[nl]=S,i=(s.mode&1)!==0,c){case"dialog":Vt("cancel",d),Vt("close",d);break;case"iframe":case"object":case"embed":Vt("load",d);break;case"video":case"audio":for(_=0;_<Ja.length;_++)Vt(Ja[_],d);break;case"source":Vt("error",d);break;case"img":case"image":case"link":Vt("error",d),Vt("load",d);break;case"details":Vt("toggle",d);break;case"input":On(d,S),Vt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},Vt("invalid",d);break;case"textarea":ie(d,S),Vt("invalid",d)}ft(c,S),_=null;for(var w in S)if(S.hasOwnProperty(w)){var O=S[w];w==="children"?typeof O=="string"?d.textContent!==O&&(S.suppressHydrationWarning!==!0&&vu(d.textContent,O,i),_=["children",O]):typeof O=="number"&&d.textContent!==""+O&&(S.suppressHydrationWarning!==!0&&vu(d.textContent,O,i),_=["children",""+O]):r.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Vt("scroll",d)}switch(c){case"input":Dt(d),je(d,S,!0);break;case"textarea":Dt(d),ge(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=xu)}d=_,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=_.nodeType===9?_:_.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(c)),i==="http://www.w3.org/1999/xhtml"?c==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=w.createElement(c,{is:d.is}):(i=w.createElement(c),c==="select"&&(w=i,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):i=w.createElementNS(i,c),i[Ki]=s,i[nl]=d,w_(i,s,!1,!1),s.stateNode=i;e:{switch(w=it(c,d),c){case"dialog":Vt("cancel",i),Vt("close",i),_=d;break;case"iframe":case"object":case"embed":Vt("load",i),_=d;break;case"video":case"audio":for(_=0;_<Ja.length;_++)Vt(Ja[_],i);_=d;break;case"source":Vt("error",i),_=d;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),_=d;break;case"details":Vt("toggle",i),_=d;break;case"input":On(i,d),_=H(i,d),Vt("invalid",i);break;case"option":_=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},_=oe({},d,{value:void 0}),Vt("invalid",i);break;case"textarea":ie(i,d),_=P(i,d),Vt("invalid",i);break;default:_=d}ft(c,_),O=_;for(S in O)if(O.hasOwnProperty(S)){var V=O[S];S==="style"?Qe(i,V):S==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ue(i,V)):S==="children"?typeof V=="string"?(c!=="textarea"||V!=="")&&ut(i,V):typeof V=="number"&&ut(i,""+V):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(r.hasOwnProperty(S)?V!=null&&S==="onScroll"&&Vt("scroll",i):V!=null&&R(i,S,V,w))}switch(c){case"input":Dt(i),je(i,d,!1);break;case"textarea":Dt(i),ge(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Te(d.value));break;case"select":i.multiple=!!d.multiple,S=d.value,S!=null?U(i,!!d.multiple,S,!1):d.defaultValue!=null&&U(i,!!d.multiple,d.defaultValue,!0);break;default:typeof _.onClick=="function"&&(i.onclick=xu)}switch(c){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bn(s),null;case 6:if(i&&s.stateNode!=null)R_(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(c=zs(al.current),zs($i.current),Au(s)){if(d=s.stateNode,c=s.memoizedProps,d[Ki]=s,(S=d.nodeValue!==c)&&(i=ui,i!==null))switch(i.tag){case 3:vu(d.nodeValue,c,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&vu(d.nodeValue,c,(i.mode&1)!==0)}S&&(s.flags|=4)}else d=(c.nodeType===9?c:c.ownerDocument).createTextNode(d),d[Ki]=s,s.stateNode=d}return bn(s),null;case 13:if(Ht(jt),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Wt&&ci!==null&&s.mode&1&&!(s.flags&128))Pg(),Uo(),s.flags|=98560,S=!1;else if(S=Au(s),d!==null&&d.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Ki]=s}else Uo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;bn(s),S=!1}else Ui!==null&&(Nh(Ui),Ui=null),S=!0;if(!S)return s.flags&65536?s:null}return s.flags&128?(s.lanes=c,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,s.mode&1&&(i===null||jt.current&1?un===0&&(un=3):Oh())),s.updateQueue!==null&&(s.flags|=4),bn(s),null);case 4:return Bo(),Eh(i,s),i===null&&el(s.stateNode.containerInfo),bn(s),null;case 10:return Zf(s.type._context),bn(s),null;case 17:return Qn(s.type)&&Su(),bn(s),null;case 19:if(Ht(jt),S=s.memoizedState,S===null)return bn(s),null;if(d=(s.flags&128)!==0,w=S.rendering,w===null)if(d)hl(S,!1);else{if(un!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(w=Iu(i),w!==null){for(s.flags|=128,hl(S,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=c,c=s.child;c!==null;)S=c,i=d,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,i=w.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),c=c.sibling;return kt(jt,jt.current&1|2),s.child}i=i.sibling}S.tail!==null&&G()>Go&&(s.flags|=128,d=!0,hl(S,!1),s.lanes=4194304)}else{if(!d)if(i=Iu(w),i!==null){if(s.flags|=128,d=!0,c=i.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),hl(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!Wt)return bn(s),null}else 2*G()-S.renderingStartTime>Go&&c!==1073741824&&(s.flags|=128,d=!0,hl(S,!1),s.lanes=4194304);S.isBackwards?(w.sibling=s.child,s.child=w):(c=S.last,c!==null?c.sibling=w:s.child=w,S.last=w)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=G(),s.sibling=null,c=jt.current,kt(jt,d?c&1|2:c&1),s):(bn(s),null);case 22:case 23:return Fh(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&s.mode&1?fi&1073741824&&(bn(s),s.subtreeFlags&6&&(s.flags|=8192)):bn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function YS(i,s){switch(Xf(s),s.tag){case 1:return Qn(s.type)&&Su(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Bo(),Ht(Zn),Ht(Rn),rh(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return nh(s),null;case 13:if(Ht(jt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Uo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ht(jt),null;case 4:return Bo(),null;case 10:return Zf(s.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var Vu=!1,Pn=!1,qS=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Vo(i,s){var c=i.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(d){Qt(i,s,d)}else c.current=null}function Th(i,s,c){try{c()}catch(d){Qt(i,s,d)}}var C_=!1;function KS(i,s){if(Ff=au,i=og(),Cf(i)){if("selectionStart"in i)var c={start:i.selectionStart,end:i.selectionEnd};else e:{c=(c=i.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&d.rangeCount!==0){c=d.anchorNode;var _=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{c.nodeType,S.nodeType}catch{c=null;break e}var w=0,O=-1,V=-1,re=0,_e=0,xe=i,me=null;t:for(;;){for(var Ie;xe!==c||_!==0&&xe.nodeType!==3||(O=w+_),xe!==S||d!==0&&xe.nodeType!==3||(V=w+d),xe.nodeType===3&&(w+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)me=xe,xe=Ie;for(;;){if(xe===i)break t;if(me===c&&++re===_&&(O=w),me===S&&++_e===d&&(V=w),(Ie=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Ie}c=O===-1||V===-1?null:{start:O,end:V}}else c=null}c=c||{start:0,end:0}}else c=null;for(Of={focusedElem:i,selectionRange:c},au=!1,Oe=s;Oe!==null;)if(s=Oe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Oe=i;else for(;Oe!==null;){s=Oe;try{var ze=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,tn=ze.memoizedState,Z=s.stateNode,W=Z.getSnapshotBeforeUpdate(s.elementType===s.type?Ve:Fi(s.type,Ve),tn);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Qt(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,Oe=i;break}Oe=s.return}return ze=C_,C_=!1,ze}function dl(i,s,c){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var _=d=d.next;do{if((_.tag&i)===i){var S=_.destroy;_.destroy=void 0,S!==void 0&&Th(s,c,S)}_=_.next}while(_!==d)}}function Hu(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&i)===i){var d=c.create;c.destroy=d()}c=c.next}while(c!==s)}}function wh(i){var s=i.ref;if(s!==null){var c=i.stateNode;switch(i.tag){case 5:i=c;break;default:i=c}typeof s=="function"?s(i):s.current=i}}function b_(i){var s=i.alternate;s!==null&&(i.alternate=null,b_(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ki],delete s[nl],delete s[Vf],delete s[LS],delete s[IS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function P_(i){return i.tag===5||i.tag===3||i.tag===4}function L_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||P_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ah(i,s,c){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?c.nodeType===8?c.parentNode.insertBefore(i,s):c.insertBefore(i,s):(c.nodeType===8?(s=c.parentNode,s.insertBefore(i,c)):(s=c,s.appendChild(i)),c=c._reactRootContainer,c!=null||s.onclick!==null||(s.onclick=xu));else if(d!==4&&(i=i.child,i!==null))for(Ah(i,s,c),i=i.sibling;i!==null;)Ah(i,s,c),i=i.sibling}function Rh(i,s,c){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?c.insertBefore(i,s):c.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Rh(i,s,c),i=i.sibling;i!==null;)Rh(i,s,c),i=i.sibling}var Mn=null,Oi=!1;function ns(i,s,c){for(c=c.child;c!==null;)I_(i,s,c),c=c.sibling}function I_(i,s,c){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Xe,c)}catch{}switch(c.tag){case 5:Pn||Vo(c,s);case 6:var d=Mn,_=Oi;Mn=null,ns(i,s,c),Mn=d,Oi=_,Mn!==null&&(Oi?(i=Mn,c=c.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)):Mn.removeChild(c.stateNode));break;case 18:Mn!==null&&(Oi?(i=Mn,c=c.stateNode,i.nodeType===8?zf(i.parentNode,c):i.nodeType===1&&zf(i,c),Xa(i)):zf(Mn,c.stateNode));break;case 4:d=Mn,_=Oi,Mn=c.stateNode.containerInfo,Oi=!0,ns(i,s,c),Mn=d,Oi=_;break;case 0:case 11:case 14:case 15:if(!Pn&&(d=c.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){_=d=d.next;do{var S=_,w=S.destroy;S=S.tag,w!==void 0&&(S&2||S&4)&&Th(c,s,w),_=_.next}while(_!==d)}ns(i,s,c);break;case 1:if(!Pn&&(Vo(c,s),d=c.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(O){Qt(c,s,O)}ns(i,s,c);break;case 21:ns(i,s,c);break;case 22:c.mode&1?(Pn=(d=Pn)||c.memoizedState!==null,ns(i,s,c),Pn=d):ns(i,s,c);break;default:ns(i,s,c)}}function D_(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var c=i.stateNode;c===null&&(c=i.stateNode=new qS),s.forEach(function(d){var _=rM.bind(null,i,d);c.has(d)||(c.add(d),d.then(_,_))})}}function ki(i,s){var c=s.deletions;if(c!==null)for(var d=0;d<c.length;d++){var _=c[d];try{var S=i,w=s,O=w;e:for(;O!==null;){switch(O.tag){case 5:Mn=O.stateNode,Oi=!1;break e;case 3:Mn=O.stateNode.containerInfo,Oi=!0;break e;case 4:Mn=O.stateNode.containerInfo,Oi=!0;break e}O=O.return}if(Mn===null)throw Error(t(160));I_(S,w,_),Mn=null,Oi=!1;var V=_.alternate;V!==null&&(V.return=null),_.return=null}catch(re){Qt(_,s,re)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)N_(s,i),s=s.sibling}function N_(i,s){var c=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(ki(s,i),Qi(i),d&4){try{dl(3,i,i.return),Hu(3,i)}catch(Ve){Qt(i,i.return,Ve)}try{dl(5,i,i.return)}catch(Ve){Qt(i,i.return,Ve)}}break;case 1:ki(s,i),Qi(i),d&512&&c!==null&&Vo(c,c.return);break;case 5:if(ki(s,i),Qi(i),d&512&&c!==null&&Vo(c,c.return),i.flags&32){var _=i.stateNode;try{ut(_,"")}catch(Ve){Qt(i,i.return,Ve)}}if(d&4&&(_=i.stateNode,_!=null)){var S=i.memoizedProps,w=c!==null?c.memoizedProps:S,O=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{O==="input"&&S.type==="radio"&&S.name!=null&&dt(_,S),it(O,w);var re=it(O,S);for(w=0;w<V.length;w+=2){var _e=V[w],xe=V[w+1];_e==="style"?Qe(_,xe):_e==="dangerouslySetInnerHTML"?Ue(_,xe):_e==="children"?ut(_,xe):R(_,_e,xe,re)}switch(O){case"input":ct(_,S);break;case"textarea":pe(_,S);break;case"select":var me=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!S.multiple;var Ie=S.value;Ie!=null?U(_,!!S.multiple,Ie,!1):me!==!!S.multiple&&(S.defaultValue!=null?U(_,!!S.multiple,S.defaultValue,!0):U(_,!!S.multiple,S.multiple?[]:"",!1))}_[nl]=S}catch(Ve){Qt(i,i.return,Ve)}}break;case 6:if(ki(s,i),Qi(i),d&4){if(i.stateNode===null)throw Error(t(162));_=i.stateNode,S=i.memoizedProps;try{_.nodeValue=S}catch(Ve){Qt(i,i.return,Ve)}}break;case 3:if(ki(s,i),Qi(i),d&4&&c!==null&&c.memoizedState.isDehydrated)try{Xa(s.containerInfo)}catch(Ve){Qt(i,i.return,Ve)}break;case 4:ki(s,i),Qi(i);break;case 13:ki(s,i),Qi(i),_=i.child,_.flags&8192&&(S=_.memoizedState!==null,_.stateNode.isHidden=S,!S||_.alternate!==null&&_.alternate.memoizedState!==null||(Ph=G())),d&4&&D_(i);break;case 22:if(_e=c!==null&&c.memoizedState!==null,i.mode&1?(Pn=(re=Pn)||_e,ki(s,i),Pn=re):ki(s,i),Qi(i),d&8192){if(re=i.memoizedState!==null,(i.stateNode.isHidden=re)&&!_e&&i.mode&1)for(Oe=i,_e=i.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(me=Oe,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:dl(4,me,me.return);break;case 1:Vo(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){d=me,c=me.return;try{s=d,ze.props=s.memoizedProps,ze.state=s.memoizedState,ze.componentWillUnmount()}catch(Ve){Qt(d,c,Ve)}}break;case 5:Vo(me,me.return);break;case 22:if(me.memoizedState!==null){O_(xe);continue}}Ie!==null?(Ie.return=me,Oe=Ie):O_(xe)}_e=_e.sibling}e:for(_e=null,xe=i;;){if(xe.tag===5){if(_e===null){_e=xe;try{_=xe.stateNode,re?(S=_.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(O=xe.stateNode,V=xe.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=qe("display",w))}catch(Ve){Qt(i,i.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=re?"":xe.memoizedProps}catch(Ve){Qt(i,i.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===i)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===i)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===i)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ki(s,i),Qi(i),d&4&&D_(i);break;case 21:break;default:ki(s,i),Qi(i)}}function Qi(i){var s=i.flags;if(s&2){try{e:{for(var c=i.return;c!==null;){if(P_(c)){var d=c;break e}c=c.return}throw Error(t(160))}switch(d.tag){case 5:var _=d.stateNode;d.flags&32&&(ut(_,""),d.flags&=-33);var S=L_(i);Rh(i,S,_);break;case 3:case 4:var w=d.stateNode.containerInfo,O=L_(i);Ah(i,O,w);break;default:throw Error(t(161))}}catch(V){Qt(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function $S(i,s,c){Oe=i,U_(i)}function U_(i,s,c){for(var d=(i.mode&1)!==0;Oe!==null;){var _=Oe,S=_.child;if(_.tag===22&&d){var w=_.memoizedState!==null||Vu;if(!w){var O=_.alternate,V=O!==null&&O.memoizedState!==null||Pn;O=Vu;var re=Pn;if(Vu=w,(Pn=V)&&!re)for(Oe=_;Oe!==null;)w=Oe,V=w.child,w.tag===22&&w.memoizedState!==null?k_(_):V!==null?(V.return=w,Oe=V):k_(_);for(;S!==null;)Oe=S,U_(S),S=S.sibling;Oe=_,Vu=O,Pn=re}F_(i)}else _.subtreeFlags&8772&&S!==null?(S.return=_,Oe=S):F_(i)}}function F_(i){for(;Oe!==null;){var s=Oe;if(s.flags&8772){var c=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Pn||Hu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Pn)if(c===null)d.componentDidMount();else{var _=s.elementType===s.type?c.memoizedProps:Fi(s.type,c.memoizedProps);d.componentDidUpdate(_,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&Og(s,S,d);break;case 3:var w=s.updateQueue;if(w!==null){if(c=null,s.child!==null)switch(s.child.tag){case 5:c=s.child.stateNode;break;case 1:c=s.child.stateNode}Og(s,w,c)}break;case 5:var O=s.stateNode;if(c===null&&s.flags&4){c=O;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&c.focus();break;case"img":V.src&&(c.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var re=s.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Xa(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||s.flags&512&&wh(s)}catch(me){Qt(s,s.return,me)}}if(s===i){Oe=null;break}if(c=s.sibling,c!==null){c.return=s.return,Oe=c;break}Oe=s.return}}function O_(i){for(;Oe!==null;){var s=Oe;if(s===i){Oe=null;break}var c=s.sibling;if(c!==null){c.return=s.return,Oe=c;break}Oe=s.return}}function k_(i){for(;Oe!==null;){var s=Oe;try{switch(s.tag){case 0:case 11:case 15:var c=s.return;try{Hu(4,s)}catch(V){Qt(s,c,V)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var _=s.return;try{d.componentDidMount()}catch(V){Qt(s,_,V)}}var S=s.return;try{wh(s)}catch(V){Qt(s,S,V)}break;case 5:var w=s.return;try{wh(s)}catch(V){Qt(s,w,V)}}}catch(V){Qt(s,s.return,V)}if(s===i){Oe=null;break}var O=s.sibling;if(O!==null){O.return=s.return,Oe=O;break}Oe=s.return}}var ZS=Math.ceil,Gu=T.ReactCurrentDispatcher,Ch=T.ReactCurrentOwner,Ti=T.ReactCurrentBatchConfig,Tt=0,dn=null,rn=null,En=0,fi=0,Ho=Zr(0),un=0,pl=null,Hs=0,Wu=0,bh=0,ml=null,ei=null,Ph=0,Go=1/0,Er=null,Xu=!1,Lh=null,is=null,ju=!1,rs=null,Yu=0,gl=0,Ih=null,qu=-1,Ku=0;function Hn(){return Tt&6?G():qu!==-1?qu:qu=G()}function ss(i){return i.mode&1?Tt&2&&En!==0?En&-En:NS.transition!==null?(Ku===0&&(Ku=zn()),Ku):(i=pt,i!==0||(i=window.event,i=i===void 0?16:zm(i.type)),i):1}function Bi(i,s,c,d){if(50<gl)throw gl=0,Ih=null,Error(t(185));en(i,c,d),(!(Tt&2)||i!==dn)&&(i===dn&&(!(Tt&2)&&(Wu|=c),un===4&&os(i,En)),ti(i,d),c===1&&Tt===0&&!(s.mode&1)&&(Go=G()+500,Eu&&Jr()))}function ti(i,s){var c=i.callbackNode;Ds(i,s);var d=Di(i,i===dn?En:0);if(d===0)c!==null&&Y(c),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(c!=null&&Y(c),s===1)i.tag===0?DS(z_.bind(null,i)):wg(z_.bind(null,i)),bS(function(){!(Tt&6)&&Jr()}),c=null;else{switch(Im(d)){case 1:c=Ce;break;case 4:c=De;break;case 16:c=Fe;break;case 536870912:c=et;break;default:c=Fe}c=q_(c,B_.bind(null,i))}i.callbackPriority=s,i.callbackNode=c}}function B_(i,s){if(qu=-1,Ku=0,Tt&6)throw Error(t(327));var c=i.callbackNode;if(Wo()&&i.callbackNode!==c)return null;var d=Di(i,i===dn?En:0);if(d===0)return null;if(d&30||d&i.expiredLanes||s)s=$u(i,d);else{s=d;var _=Tt;Tt|=2;var S=H_();(dn!==i||En!==s)&&(Er=null,Go=G()+500,Ws(i,s));do try{eM();break}catch(O){V_(i,O)}while(!0);$f(),Gu.current=S,Tt=_,rn!==null?s=0:(dn=null,En=0,s=un)}if(s!==0){if(s===2&&(_=Nt(i),_!==0&&(d=_,s=Dh(i,_))),s===1)throw c=pl,Ws(i,0),os(i,d),ti(i,G()),c;if(s===6)os(i,d);else{if(_=i.current.alternate,!(d&30)&&!QS(_)&&(s=$u(i,d),s===2&&(S=Nt(i),S!==0&&(d=S,s=Dh(i,S))),s===1))throw c=pl,Ws(i,0),os(i,d),ti(i,G()),c;switch(i.finishedWork=_,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Xs(i,ei,Er);break;case 3:if(os(i,d),(d&130023424)===d&&(s=Ph+500-G(),10<s)){if(Di(i,0)!==0)break;if(_=i.suspendedLanes,(_&d)!==d){Hn(),i.pingedLanes|=i.suspendedLanes&_;break}i.timeoutHandle=Bf(Xs.bind(null,i,ei,Er),s);break}Xs(i,ei,Er);break;case 4:if(os(i,d),(d&4194240)===d)break;for(s=i.eventTimes,_=-1;0<d;){var w=31-Rt(d);S=1<<w,w=s[w],w>_&&(_=w),d&=~S}if(d=_,d=G()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ZS(d/1960))-d,10<d){i.timeoutHandle=Bf(Xs.bind(null,i,ei,Er),d);break}Xs(i,ei,Er);break;case 5:Xs(i,ei,Er);break;default:throw Error(t(329))}}}return ti(i,G()),i.callbackNode===c?B_.bind(null,i):null}function Dh(i,s){var c=ml;return i.current.memoizedState.isDehydrated&&(Ws(i,s).flags|=256),i=$u(i,s),i!==2&&(s=ei,ei=c,s!==null&&Nh(s)),i}function Nh(i){ei===null?ei=i:ei.push.apply(ei,i)}function QS(i){for(var s=i;;){if(s.flags&16384){var c=s.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var d=0;d<c.length;d++){var _=c[d],S=_.getSnapshot;_=_.value;try{if(!Ni(S(),_))return!1}catch{return!1}}}if(c=s.child,s.subtreeFlags&16384&&c!==null)c.return=s,s=c;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function os(i,s){for(s&=~bh,s&=~Wu,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var c=31-Rt(s),d=1<<c;i[c]=-1,s&=~d}}function z_(i){if(Tt&6)throw Error(t(327));Wo();var s=Di(i,0);if(!(s&1))return ti(i,G()),null;var c=$u(i,s);if(i.tag!==0&&c===2){var d=Nt(i);d!==0&&(s=d,c=Dh(i,d))}if(c===1)throw c=pl,Ws(i,0),os(i,s),ti(i,G()),c;if(c===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Xs(i,ei,Er),ti(i,G()),null}function Uh(i,s){var c=Tt;Tt|=1;try{return i(s)}finally{Tt=c,Tt===0&&(Go=G()+500,Eu&&Jr())}}function Gs(i){rs!==null&&rs.tag===0&&!(Tt&6)&&Wo();var s=Tt;Tt|=1;var c=Ti.transition,d=pt;try{if(Ti.transition=null,pt=1,i)return i()}finally{pt=d,Ti.transition=c,Tt=s,!(Tt&6)&&Jr()}}function Fh(){fi=Ho.current,Ht(Ho)}function Ws(i,s){i.finishedWork=null,i.finishedLanes=0;var c=i.timeoutHandle;if(c!==-1&&(i.timeoutHandle=-1,CS(c)),rn!==null)for(c=rn.return;c!==null;){var d=c;switch(Xf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Su();break;case 3:Bo(),Ht(Zn),Ht(Rn),rh();break;case 5:nh(d);break;case 4:Bo();break;case 13:Ht(jt);break;case 19:Ht(jt);break;case 10:Zf(d.type._context);break;case 22:case 23:Fh()}c=c.return}if(dn=i,rn=i=as(i.current,null),En=fi=s,un=0,pl=null,bh=Wu=Hs=0,ei=ml=null,Bs!==null){for(s=0;s<Bs.length;s++)if(c=Bs[s],d=c.interleaved,d!==null){c.interleaved=null;var _=d.next,S=c.pending;if(S!==null){var w=S.next;S.next=_,d.next=w}c.pending=d}Bs=null}return i}function V_(i,s){do{var c=rn;try{if($f(),Du.current=Ou,Nu){for(var d=Yt.memoizedState;d!==null;){var _=d.queue;_!==null&&(_.pending=null),d=d.next}Nu=!1}if(Vs=0,hn=ln=Yt=null,ll=!1,ul=0,Ch.current=null,c===null||c.return===null){un=1,pl=s,rn=null;break}e:{var S=i,w=c.return,O=c,V=s;if(s=En,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var re=V,_e=O,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=h_(w);if(Ie!==null){Ie.flags&=-257,d_(Ie,w,O,S,s),Ie.mode&1&&f_(S,re,s),s=Ie,V=re;var ze=s.updateQueue;if(ze===null){var Ve=new Set;Ve.add(V),s.updateQueue=Ve}else ze.add(V);break e}else{if(!(s&1)){f_(S,re,s),Oh();break e}V=Error(t(426))}}else if(Wt&&O.mode&1){var tn=h_(w);if(tn!==null){!(tn.flags&65536)&&(tn.flags|=256),d_(tn,w,O,S,s),qf(zo(V,O));break e}}S=V=zo(V,O),un!==4&&(un=2),ml===null?ml=[S]:ml.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var Z=u_(S,V,s);Fg(S,Z);break e;case 1:O=V;var W=S.type,ee=S.stateNode;if(!(S.flags&128)&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(is===null||!is.has(ee)))){S.flags|=65536,s&=-s,S.lanes|=s;var Ee=c_(S,O,s);Fg(S,Ee);break e}}S=S.return}while(S!==null)}W_(c)}catch(Ge){s=Ge,rn===c&&c!==null&&(rn=c=c.return);continue}break}while(!0)}function H_(){var i=Gu.current;return Gu.current=Ou,i===null?Ou:i}function Oh(){(un===0||un===3||un===2)&&(un=4),dn===null||!(Hs&268435455)&&!(Wu&268435455)||os(dn,En)}function $u(i,s){var c=Tt;Tt|=2;var d=H_();(dn!==i||En!==s)&&(Er=null,Ws(i,s));do try{JS();break}catch(_){V_(i,_)}while(!0);if($f(),Tt=c,Gu.current=d,rn!==null)throw Error(t(261));return dn=null,En=0,un}function JS(){for(;rn!==null;)G_(rn)}function eM(){for(;rn!==null&&!ae();)G_(rn)}function G_(i){var s=Y_(i.alternate,i,fi);i.memoizedProps=i.pendingProps,s===null?W_(i):rn=s,Ch.current=null}function W_(i){var s=i;do{var c=s.alternate;if(i=s.return,s.flags&32768){if(c=YS(c,s),c!==null){c.flags&=32767,rn=c;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{un=6,rn=null;return}}else if(c=jS(c,s,fi),c!==null){rn=c;return}if(s=s.sibling,s!==null){rn=s;return}rn=s=i}while(s!==null);un===0&&(un=5)}function Xs(i,s,c){var d=pt,_=Ti.transition;try{Ti.transition=null,pt=1,tM(i,s,c,d)}finally{Ti.transition=_,pt=d}return null}function tM(i,s,c,d){do Wo();while(rs!==null);if(Tt&6)throw Error(t(327));c=i.finishedWork;var _=i.finishedLanes;if(c===null)return null;if(i.finishedWork=null,i.finishedLanes=0,c===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=c.lanes|c.childLanes;if(An(i,S),i===dn&&(rn=dn=null,En=0),!(c.subtreeFlags&2064)&&!(c.flags&2064)||ju||(ju=!0,q_(Fe,function(){return Wo(),null})),S=(c.flags&15990)!==0,c.subtreeFlags&15990||S){S=Ti.transition,Ti.transition=null;var w=pt;pt=1;var O=Tt;Tt|=4,Ch.current=null,KS(i,c),N_(c,i),SS(Of),au=!!Ff,Of=Ff=null,i.current=c,$S(c),le(),Tt=O,pt=w,Ti.transition=S}else i.current=c;if(ju&&(ju=!1,rs=i,Yu=_),S=i.pendingLanes,S===0&&(is=null),At(c.stateNode),ti(i,G()),s!==null)for(d=i.onRecoverableError,c=0;c<s.length;c++)_=s[c],d(_.value,{componentStack:_.stack,digest:_.digest});if(Xu)throw Xu=!1,i=Lh,Lh=null,i;return Yu&1&&i.tag!==0&&Wo(),S=i.pendingLanes,S&1?i===Ih?gl++:(gl=0,Ih=i):gl=0,Jr(),null}function Wo(){if(rs!==null){var i=Im(Yu),s=Ti.transition,c=pt;try{if(Ti.transition=null,pt=16>i?16:i,rs===null)var d=!1;else{if(i=rs,rs=null,Yu=0,Tt&6)throw Error(t(331));var _=Tt;for(Tt|=4,Oe=i.current;Oe!==null;){var S=Oe,w=S.child;if(Oe.flags&16){var O=S.deletions;if(O!==null){for(var V=0;V<O.length;V++){var re=O[V];for(Oe=re;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:dl(8,_e,S)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var me=_e.sibling,Ie=_e.return;if(b_(_e),_e===re){Oe=null;break}if(me!==null){me.return=Ie,Oe=me;break}Oe=Ie}}}var ze=S.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var tn=Ve.sibling;Ve.sibling=null,Ve=tn}while(Ve!==null)}}Oe=S}}if(S.subtreeFlags&2064&&w!==null)w.return=S,Oe=w;else e:for(;Oe!==null;){if(S=Oe,S.flags&2048)switch(S.tag){case 0:case 11:case 15:dl(9,S,S.return)}var Z=S.sibling;if(Z!==null){Z.return=S.return,Oe=Z;break e}Oe=S.return}}var W=i.current;for(Oe=W;Oe!==null;){w=Oe;var ee=w.child;if(w.subtreeFlags&2064&&ee!==null)ee.return=w,Oe=ee;else e:for(w=W;Oe!==null;){if(O=Oe,O.flags&2048)try{switch(O.tag){case 0:case 11:case 15:Hu(9,O)}}catch(Ge){Qt(O,O.return,Ge)}if(O===w){Oe=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,Oe=Ee;break e}Oe=O.return}}if(Tt=_,Jr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Xe,i)}catch{}d=!0}return d}finally{pt=c,Ti.transition=s}}return!1}function X_(i,s,c){s=zo(c,s),s=u_(i,s,1),i=ts(i,s,1),s=Hn(),i!==null&&(en(i,1,s),ti(i,s))}function Qt(i,s,c){if(i.tag===3)X_(i,i,c);else for(;s!==null;){if(s.tag===3){X_(s,i,c);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))){i=zo(c,i),i=c_(s,i,1),s=ts(s,i,1),i=Hn(),s!==null&&(en(s,1,i),ti(s,i));break}}s=s.return}}function nM(i,s,c){var d=i.pingCache;d!==null&&d.delete(s),s=Hn(),i.pingedLanes|=i.suspendedLanes&c,dn===i&&(En&c)===c&&(un===4||un===3&&(En&130023424)===En&&500>G()-Ph?Ws(i,0):bh|=c),ti(i,s)}function j_(i,s){s===0&&(i.mode&1?(s=vt,vt<<=1,!(vt&130023424)&&(vt=4194304)):s=1);var c=Hn();i=yr(i,s),i!==null&&(en(i,s,c),ti(i,c))}function iM(i){var s=i.memoizedState,c=0;s!==null&&(c=s.retryLane),j_(i,c)}function rM(i,s){var c=0;switch(i.tag){case 13:var d=i.stateNode,_=i.memoizedState;_!==null&&(c=_.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),j_(i,c)}var Y_;Y_=function(i,s,c){if(i!==null)if(i.memoizedProps!==s.pendingProps||Zn.current)Jn=!0;else{if(!(i.lanes&c)&&!(s.flags&128))return Jn=!1,XS(i,s,c);Jn=!!(i.flags&131072)}else Jn=!1,Wt&&s.flags&1048576&&Ag(s,wu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;zu(i,s),i=s.pendingProps;var _=Io(s,Rn.current);ko(s,c),_=ah(null,s,d,i,_,c);var S=lh();return s.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qn(d)?(S=!0,Mu(s)):S=!1,s.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,eh(s),_.updater=ku,s.stateNode=_,_._reactInternals=s,ph(s,d,i,c),s=vh(null,s,d,!0,S,c)):(s.tag=0,Wt&&S&&Wf(s),Vn(null,s,_,c),s=s.child),s;case 16:d=s.elementType;e:{switch(zu(i,s),i=s.pendingProps,_=d._init,d=_(d._payload),s.type=d,_=s.tag=oM(d),i=Fi(d,i),_){case 0:s=_h(null,s,d,i,c);break e;case 1:s=x_(null,s,d,i,c);break e;case 11:s=p_(null,s,d,i,c);break e;case 14:s=m_(null,s,d,Fi(d.type,i),c);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),_h(i,s,d,_,c);case 1:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),x_(i,s,d,_,c);case 3:e:{if(y_(s),i===null)throw Error(t(387));d=s.pendingProps,S=s.memoizedState,_=S.element,Ug(i,s),Lu(s,d,null,c);var w=s.memoizedState;if(d=w.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){_=zo(Error(t(423)),s),s=S_(i,s,d,c,_);break e}else if(d!==_){_=zo(Error(t(424)),s),s=S_(i,s,d,c,_);break e}else for(ci=$r(s.stateNode.containerInfo.firstChild),ui=s,Wt=!0,Ui=null,c=Dg(s,null,d,c),s.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Uo(),d===_){s=Mr(i,s,c);break e}Vn(i,s,d,c)}s=s.child}return s;case 5:return kg(s),i===null&&Yf(s),d=s.type,_=s.pendingProps,S=i!==null?i.memoizedProps:null,w=_.children,kf(d,_)?w=null:S!==null&&kf(d,S)&&(s.flags|=32),v_(i,s),Vn(i,s,w,c),s.child;case 6:return i===null&&Yf(s),null;case 13:return M_(i,s,c);case 4:return th(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Fo(s,null,d,c):Vn(i,s,d,c),s.child;case 11:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),p_(i,s,d,_,c);case 7:return Vn(i,s,s.pendingProps,c),s.child;case 8:return Vn(i,s,s.pendingProps.children,c),s.child;case 12:return Vn(i,s,s.pendingProps.children,c),s.child;case 10:e:{if(d=s.type._context,_=s.pendingProps,S=s.memoizedProps,w=_.value,kt(Cu,d._currentValue),d._currentValue=w,S!==null)if(Ni(S.value,w)){if(S.children===_.children&&!Zn.current){s=Mr(i,s,c);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var O=S.dependencies;if(O!==null){w=S.child;for(var V=O.firstContext;V!==null;){if(V.context===d){if(S.tag===1){V=Sr(-1,c&-c),V.tag=2;var re=S.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?V.next=V:(V.next=_e.next,_e.next=V),re.pending=V}}S.lanes|=c,V=S.alternate,V!==null&&(V.lanes|=c),Qf(S.return,c,s),O.lanes|=c;break}V=V.next}}else if(S.tag===10)w=S.type===s.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=c,O=w.alternate,O!==null&&(O.lanes|=c),Qf(w,c,s),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===s){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}Vn(i,s,_.children,c),s=s.child}return s;case 9:return _=s.type,d=s.pendingProps.children,ko(s,c),_=Mi(_),d=d(_),s.flags|=1,Vn(i,s,d,c),s.child;case 14:return d=s.type,_=Fi(d,s.pendingProps),_=Fi(d.type,_),m_(i,s,d,_,c);case 15:return g_(i,s,s.type,s.pendingProps,c);case 17:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),zu(i,s),s.tag=1,Qn(d)?(i=!0,Mu(s)):i=!1,ko(s,c),a_(s,d,_),ph(s,d,_,c),vh(null,s,d,!0,i,c);case 19:return T_(i,s,c);case 22:return __(i,s,c)}throw Error(t(156,s.tag))};function q_(i,s){return L(i,s)}function sM(i,s,c,d){this.tag=i,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(i,s,c,d){return new sM(i,s,c,d)}function kh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function oM(i){if(typeof i=="function")return kh(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===se)return 14}return 2}function as(i,s){var c=i.alternate;return c===null?(c=wi(i.tag,s,i.key,i.mode),c.elementType=i.elementType,c.type=i.type,c.stateNode=i.stateNode,c.alternate=i,i.alternate=c):(c.pendingProps=s,c.type=i.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=i.flags&14680064,c.childLanes=i.childLanes,c.lanes=i.lanes,c.child=i.child,c.memoizedProps=i.memoizedProps,c.memoizedState=i.memoizedState,c.updateQueue=i.updateQueue,s=i.dependencies,c.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},c.sibling=i.sibling,c.index=i.index,c.ref=i.ref,c}function Zu(i,s,c,d,_,S){var w=2;if(d=i,typeof i=="function")kh(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case I:return js(c.children,_,S,s);case F:w=8,_|=8;break;case A:return i=wi(12,c,s,_|2),i.elementType=A,i.lanes=S,i;case K:return i=wi(13,c,s,_),i.elementType=K,i.lanes=S,i;case ue:return i=wi(19,c,s,_),i.elementType=ue,i.lanes=S,i;case ne:return Qu(c,_,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:w=10;break e;case z:w=9;break e;case $:w=11;break e;case se:w=14;break e;case q:w=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=wi(w,c,s,_),s.elementType=i,s.type=d,s.lanes=S,s}function js(i,s,c,d){return i=wi(7,i,d,s),i.lanes=c,i}function Qu(i,s,c,d){return i=wi(22,i,d,s),i.elementType=ne,i.lanes=c,i.stateNode={isHidden:!1},i}function Bh(i,s,c){return i=wi(6,i,null,s),i.lanes=c,i}function zh(i,s,c){return s=wi(4,i.children!==null?i.children:[],i.key,s),s.lanes=c,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function aM(i,s,c,d,_){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=d,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function Vh(i,s,c,d,_,S,w,O,V){return i=new aM(i,s,c,O,V),s===1?(s=1,S===!0&&(s|=8)):s=0,S=wi(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(S),i}function lM(i,s,c){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:d==null?null:""+d,children:i,containerInfo:s,implementation:c}}function K_(i){if(!i)return Qr;i=i._reactInternals;e:{if(qi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var c=i.type;if(Qn(c))return Eg(i,c,s)}return s}function $_(i,s,c,d,_,S,w,O,V){return i=Vh(c,d,!0,i,_,S,w,O,V),i.context=K_(null),c=i.current,d=Hn(),_=ss(c),S=Sr(d,_),S.callback=s??null,ts(c,S,_),i.current.lanes=_,en(i,_,d),ti(i,d),i}function Ju(i,s,c,d){var _=s.current,S=Hn(),w=ss(_);return c=K_(c),s.context===null?s.context=c:s.pendingContext=c,s=Sr(S,w),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=ts(_,s,w),i!==null&&(Bi(i,_,w,S),Pu(i,_,w)),w}function ec(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Z_(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var c=i.retryLane;i.retryLane=c!==0&&c<s?c:s}}function Hh(i,s){Z_(i,s),(i=i.alternate)&&Z_(i,s)}var Q_=typeof reportError=="function"?reportError:function(i){console.error(i)};function Gh(i){this._internalRoot=i}tc.prototype.render=Gh.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Ju(i,s,null,null)},tc.prototype.unmount=Gh.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Gs(function(){Ju(null,i,null,null)}),s[gr]=null}};function tc(i){this._internalRoot=i}tc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Um();i={blockedOn:null,target:i,priority:s};for(var c=0;c<Yr.length&&s!==0&&s<Yr[c].priority;c++);Yr.splice(c,0,i),c===0&&km(i)}};function Wh(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function nc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function J_(){}function uM(i,s,c,d,_){if(_){if(typeof d=="function"){var S=d;d=function(){var re=ec(w);S.call(re)}}var w=$_(s,d,i,0,null,!1,!1,"",J_);return i._reactRootContainer=w,i[gr]=w.current,el(i.nodeType===8?i.parentNode:i),Gs(),w}for(;_=i.lastChild;)i.removeChild(_);if(typeof d=="function"){var O=d;d=function(){var re=ec(V);O.call(re)}}var V=Vh(i,0,!1,null,null,!1,!1,"",J_);return i._reactRootContainer=V,i[gr]=V.current,el(i.nodeType===8?i.parentNode:i),Gs(function(){Ju(s,V,c,d)}),V}function ic(i,s,c,d,_){var S=c._reactRootContainer;if(S){var w=S;if(typeof _=="function"){var O=_;_=function(){var V=ec(w);O.call(V)}}Ju(s,w,i,_)}else w=uM(c,s,i,_,d);return ec(w)}Dm=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var c=Sn(s.pendingLanes);c!==0&&(Ns(s,c|1),ti(s,G()),!(Tt&6)&&(Go=G()+500,Jr()))}break;case 13:Gs(function(){var d=yr(i,1);if(d!==null){var _=Hn();Bi(d,i,1,_)}}),Hh(i,1)}},mf=function(i){if(i.tag===13){var s=yr(i,134217728);if(s!==null){var c=Hn();Bi(s,i,134217728,c)}Hh(i,134217728)}},Nm=function(i){if(i.tag===13){var s=ss(i),c=yr(i,s);if(c!==null){var d=Hn();Bi(c,i,s,d)}Hh(i,s)}},Um=function(){return pt},Fm=function(i,s){var c=pt;try{return pt=i,s()}finally{pt=c}},Re=function(i,s,c){switch(s){case"input":if(ct(i,c),s=c.name,c.type==="radio"&&s!=null){for(c=i;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<c.length;s++){var d=c[s];if(d!==i&&d.form===i.form){var _=yu(d);if(!_)throw Error(t(90));_t(d),ct(d,_)}}}break;case"textarea":pe(i,c);break;case"select":s=c.value,s!=null&&U(i,!!c.multiple,s,!1)}},zt=Uh,an=Gs;var cM={usingClientEntryPoint:!1,Events:[il,Po,yu,Pe,rt,Uh]},_l={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fM={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=iu(i),i===null?null:i.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Xe=rc.inject(fM),st=rc}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cM,ni.createPortal=function(i,s){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(s))throw Error(t(200));return lM(i,s,null,c)},ni.createRoot=function(i,s){if(!Wh(i))throw Error(t(299));var c=!1,d="",_=Q_;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(_=s.onRecoverableError)),s=Vh(i,1,!1,null,null,c,!1,d,_),i[gr]=s.current,el(i.nodeType===8?i.parentNode:i),new Gh(s)},ni.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=iu(s),i=i===null?null:i.stateNode,i},ni.flushSync=function(i){return Gs(i)},ni.hydrate=function(i,s,c){if(!nc(s))throw Error(t(200));return ic(null,i,s,!0,c)},ni.hydrateRoot=function(i,s,c){if(!Wh(i))throw Error(t(405));var d=c!=null&&c.hydratedSources||null,_=!1,S="",w=Q_;if(c!=null&&(c.unstable_strictMode===!0&&(_=!0),c.identifierPrefix!==void 0&&(S=c.identifierPrefix),c.onRecoverableError!==void 0&&(w=c.onRecoverableError)),s=$_(s,null,i,1,c??null,_,!1,S,w),i[gr]=s.current,el(i),d)for(i=0;i<d.length;i++)c=d[i],_=c._getVersion,_=_(c._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[c,_]:s.mutableSourceEagerHydrationData.push(c,_);return new tc(s)},ni.render=function(i,s,c){if(!nc(s))throw Error(t(200));return ic(null,i,s,!1,c)},ni.unmountComponentAtNode=function(i){if(!nc(i))throw Error(t(40));return i._reactRootContainer?(Gs(function(){ic(null,null,i,!1,function(){i._reactRootContainer=null,i[gr]=null})}),!0):!1},ni.unstable_batchedUpdates=Uh,ni.unstable_renderSubtreeIntoContainer=function(i,s,c,d){if(!nc(c))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ic(i,s,c,!1,d)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var a0;function xM(){if(a0)return Yh.exports;a0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Yh.exports=vM(),Yh.exports}var l0;function yM(){if(l0)return sc;l0=1;var a=xM();return sc.createRoot=a.createRoot,sc.hydrateRoot=a.hydrateRoot,sc}var SM=yM();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $p="171",MM=0,u0=1,EM=2,Yv=1,qv=2,Pr=3,or=0,jn=1,tr=2,Es=0,da=1,c0=2,f0=3,h0=4,TM=5,so=100,wM=101,AM=102,RM=103,CM=104,bM=200,PM=201,LM=202,IM=203,Vd=204,Hd=205,DM=206,NM=207,UM=208,FM=209,OM=210,kM=211,BM=212,zM=213,VM=214,Gd=0,Wd=1,Xd=2,ya=3,jd=4,Yd=5,qd=6,Kd=7,Kv=0,HM=1,GM=2,Ts=0,WM=1,XM=2,jM=3,YM=4,qM=5,KM=6,$M=7,d0="attached",ZM="detached",$v=300,Sa=301,Ma=302,$d=303,Zd=304,sf=306,mo=1e3,vs=1001,Wc=1002,Yn=1003,Zv=1004,bl=1005,gi=1006,Nc=1007,Nr=1008,kr=1009,Qv=1010,Jv=1011,Bl=1012,Zp=1013,go=1014,Xi=1015,$l=1016,Qp=1017,Jp=1018,Ea=1020,ex=35902,tx=1021,nx=1022,bi=1023,ix=1024,rx=1025,pa=1026,Ta=1027,em=1028,tm=1029,sx=1030,nm=1031,im=1033,Uc=33776,Fc=33777,Oc=33778,kc=33779,Qd=35840,Jd=35841,ep=35842,tp=35843,np=36196,ip=37492,rp=37496,sp=37808,op=37809,ap=37810,lp=37811,up=37812,cp=37813,fp=37814,hp=37815,dp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,Bc=36492,xp=36494,yp=36495,ox=36283,Sp=36284,Mp=36285,Ep=36286,QM=2200,JM=2201,eE=2202,zl=2300,Vl=2301,$h=2302,la=2400,ua=2401,Xc=2402,rm=2500,tE=2501,nE=0,ax=1,Tp=2,iE=3200,rE=3201,lx=0,sE=1,_s="",Tn="srgb",Kn="srgb-linear",jc="linear",Ut="srgb",Xo=7680,p0=519,oE=512,aE=513,lE=514,ux=515,uE=516,cE=517,fE=518,hE=519,wp=35044,m0="300 es",Ur=2e3,Yc=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let g0=1234567;const Dl=Math.PI/180,wa=180/Math.PI;function ji(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function mt(a,e,t){return Math.max(e,Math.min(t,a))}function sm(a,e){return(a%e+e)%e}function dE(a,e,t,n,r){return n+(a-e)*(r-n)/(t-e)}function pE(a,e,t){return a!==e?(t-a)/(e-a):0}function Nl(a,e,t){return(1-t)*a+t*e}function mE(a,e,t,n){return Nl(a,e,1-Math.exp(-t*n))}function gE(a,e=1){return e-Math.abs(sm(a,e*2)-e)}function _E(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function vE(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function xE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function yE(a,e){return a+Math.random()*(e-a)}function SE(a){return a*(.5-Math.random())}function ME(a){a!==void 0&&(g0=a);let e=g0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EE(a){return a*Dl}function TE(a){return a*wa}function wE(a){return(a&a-1)===0&&a!==0}function AE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function RE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function CE(a,e,t,n,r){const o=Math.cos,l=Math.sin,u=o(t/2),f=l(t/2),h=o((e+n)/2),p=l((e+n)/2),m=o((e-n)/2),g=l((e-n)/2),v=o((n-e)/2),E=l((n-e)/2);switch(r){case"XYX":a.set(u*p,f*m,f*g,u*h);break;case"YZY":a.set(f*g,u*p,f*m,u*h);break;case"ZXZ":a.set(f*m,f*g,u*p,u*h);break;case"XZX":a.set(u*p,f*E,f*v,u*h);break;case"YXY":a.set(f*v,u*p,f*E,u*h);break;case"ZYZ":a.set(f*E,f*v,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function It(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const bE={DEG2RAD:Dl,RAD2DEG:wa,generateUUID:ji,clamp:mt,euclideanModulo:sm,mapLinear:dE,inverseLerp:pE,lerp:Nl,damp:mE,pingpong:gE,smoothstep:_E,smootherstep:vE,randInt:xE,randFloat:yE,randFloatSpread:SE,seededRandom:ME,degToRad:EE,radToDeg:TE,isPowerOfTwo:wE,ceilPowerOfTwo:AE,floorPowerOfTwo:RE,setQuaternionFromProperEuler:CE,normalize:It,denormalize:Gi};class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*r+e.x,this.y=o*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,r,o,l,u,f,h){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,u,f,h)}set(e,t,n,r,o,l,u,f,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=u,p[3]=t,p[4]=o,p[5]=f,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],u=n[3],f=n[6],h=n[1],p=n[4],m=n[7],g=n[2],v=n[5],E=n[8],M=r[0],y=r[3],x=r[6],b=r[1],R=r[4],T=r[7],D=r[2],N=r[5],I=r[8];return o[0]=l*M+u*b+f*D,o[3]=l*y+u*R+f*N,o[6]=l*x+u*T+f*I,o[1]=h*M+p*b+m*D,o[4]=h*y+p*R+m*N,o[7]=h*x+p*T+m*I,o[2]=g*M+v*b+E*D,o[5]=g*y+v*R+E*N,o[8]=g*x+v*T+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*l*p-t*u*h-n*o*p+n*u*f+r*o*h-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*l-u*h,g=u*f-p*o,v=h*o-l*f,E=t*m+n*g+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(r*h-p*n)*M,e[2]=(u*n-r*l)*M,e[3]=g*M,e[4]=(p*t-r*f)*M,e[5]=(r*o-u*t)*M,e[6]=v*M,e[7]=(n*f-h*t)*M,e[8]=(l*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,l,u){const f=Math.cos(o),h=Math.sin(o);return this.set(n*f,n*h,-n*(f*l+h*u)+l+e,-r*h,r*f,-r*(-h*l+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Zh.makeScale(e,t)),this}rotate(e){return this.premultiply(Zh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zh=new at;function cx(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Hl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function PE(){const a=Hl("canvas");return a.style.display="block",a}const _0={};function aa(a){a in _0||(_0[a]=!0,console.warn(a))}function LE(a,e,t){return new Promise(function(n,r){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:r();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function IE(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DE(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const v0=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NE(){const a={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(r,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ut&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ut&&(r.r=ma(r.r),r.g=ma(r.g),r.b=ma(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_s?jc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,l){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Kn]:{primaries:e,whitePoint:n,transfer:jc,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),a}const St=NE();function Fr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ma(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let jo;class UE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jo===void 0&&(jo=Hl("canvas")),jo.width=e.width,jo.height=e.height;const n=jo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Fr(o[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fr(t[n]/255)*255):t[n]=Fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class fx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,u=r.length;l<u;l++)r[l].isDataTexture?o.push(Qh(r[l].image)):o.push(Qh(r[l]))}else o=Qh(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Qh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?UE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OE=0;class xn extends xo{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=vs,r=vs,o=gi,l=Nr,u=bi,f=kr,h=xn.DEFAULT_ANISOTROPY,p=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=ji(),this.name="",this.source=new fx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=$v;xn.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const f=e.elements,h=f[0],p=f[4],m=f[8],g=f[1],v=f[5],E=f[9],M=f[2],y=f[6],x=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,T=(v+1)/2,D=(x+1)/2,N=(p+g)/4,I=(m+M)/4,F=(E+y)/4;return R>T&&R>D?R<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(R),r=N/n,o=I/n):T>D?T<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(T),n=N/r,o=F/r):D<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),n=I/o,r=F/o),this.set(n,r,o,t),this}let b=Math.sqrt((y-E)*(y-E)+(m-M)*(m-M)+(g-p)*(g-p));return Math.abs(b)<.001&&(b=1),this.x=(y-E)/b,this.y=(m-M)/b,this.z=(g-p)/b,this.w=Math.acos((h+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends xo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new xn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends kE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hx extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,l,u){let f=n[r+0],h=n[r+1],p=n[r+2],m=n[r+3];const g=o[l+0],v=o[l+1],E=o[l+2],M=o[l+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(m!==M||f!==g||h!==v||p!==E){let y=1-u;const x=f*g+h*v+p*E+m*M,b=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const D=Math.sqrt(R),N=Math.atan2(D,x*b);y=Math.sin(y*N)/D,u=Math.sin(u*N)/D}const T=u*b;if(f=f*y+g*T,h=h*y+v*T,p=p*y+E*T,m=m*y+M*T,y===1-u){const D=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=D,h*=D,p*=D,m*=D}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,o,l){const u=n[r],f=n[r+1],h=n[r+2],p=n[r+3],m=o[l],g=o[l+1],v=o[l+2],E=o[l+3];return e[t]=u*E+p*m+f*v-h*g,e[t+1]=f*E+p*g+h*m-u*v,e[t+2]=h*E+p*v+u*g-f*m,e[t+3]=p*E-u*m-f*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,h=u(n/2),p=u(r/2),m=u(o/2),g=f(n/2),v=f(r/2),E=f(o/2);switch(l){case"XYZ":this._x=g*p*m+h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m-g*v*E;break;case"YXZ":this._x=g*p*m+h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m+g*v*E;break;case"ZXY":this._x=g*p*m-h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m-g*v*E;break;case"ZYX":this._x=g*p*m-h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m+g*v*E;break;case"YZX":this._x=g*p*m+h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m-g*v*E;break;case"XZY":this._x=g*p*m-h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m+g*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],l=t[1],u=t[5],f=t[9],h=t[2],p=t[6],m=t[10],g=n+u+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(o-h)*v,this._z=(l-r)*v}else if(n>u&&n>m){const v=2*Math.sqrt(1+n-u-m);this._w=(p-f)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(o+h)/v}else if(u>m){const v=2*Math.sqrt(1+u-n-m);this._w=(o-h)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+m-n-u);this._w=(l-r)/v,this._x=(o+h)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,l=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+l*u+r*h-o*f,this._y=r*p+l*f+o*u-n*h,this._z=o*p+l*h+n*f-r*u,this._w=l*p-n*u-r*f-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,l=this._w;let u=l*e._w+n*e._x+r*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=r,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*r+t*this._y,this._z=v*o+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=l*m+this._w*g,this._x=n*m+this._x*g,this._y=r*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,l=e.y,u=e.z,f=e.w,h=2*(l*r-u*n),p=2*(u*t-o*r),m=2*(o*n-l*t);return this.x=t+f*h+l*m-u*p,this.y=n+f*p+u*h-o*m,this.z=r+f*m+o*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,l=t.x,u=t.y,f=t.z;return this.x=r*f-o*u,this.y=o*l-n*f,this.z=n*u-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jh=new j,y0=new Yi;class Vr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,zi):zi.fromBufferAttribute(o,l),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),ac.subVectors(this.max,xl),Yo.subVectors(e.a,xl),qo.subVectors(e.b,xl),Ko.subVectors(e.c,xl),us.subVectors(qo,Yo),cs.subVectors(Ko,qo),Ys.subVectors(Yo,Ko);let t=[0,-us.z,us.y,0,-cs.z,cs.y,0,-Ys.z,Ys.y,us.z,0,-us.x,cs.z,0,-cs.x,Ys.z,0,-Ys.x,-us.y,us.x,0,-cs.y,cs.x,0,-Ys.y,Ys.x,0];return!ed(t,Yo,qo,Ko,ac)||(t=[1,0,0,0,1,0,0,0,1],!ed(t,Yo,qo,Ko,ac))?!1:(lc.crossVectors(us,cs),t=[lc.x,lc.y,lc.z],ed(t,Yo,qo,Ko,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tr=[new j,new j,new j,new j,new j,new j,new j,new j],zi=new j,oc=new Vr,Yo=new j,qo=new j,Ko=new j,us=new j,cs=new j,Ys=new j,xl=new j,ac=new j,lc=new j,qs=new j;function ed(a,e,t,n,r){for(let o=0,l=a.length-3;o<=l;o+=3){qs.fromArray(a,o);const u=r.x*Math.abs(qs.x)+r.y*Math.abs(qs.y)+r.z*Math.abs(qs.z),f=e.dot(qs),h=t.dot(qs),p=n.dot(qs);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const zE=new Vr,yl=new j,td=new j;class cr{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zE.setFromPoints(e).getCenter(n);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const t=yl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(td)),this.expandByPoint(yl.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new j,nd=new j,uc=new j,fs=new j,id=new j,cc=new j,rd=new j;class of{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){nd.copy(e).add(t).multiplyScalar(.5),uc.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(nd);const o=e.distanceTo(t)*.5,l=-this.direction.dot(uc),u=fs.dot(this.direction),f=-fs.dot(uc),h=fs.lengthSq(),p=Math.abs(1-l*l);let m,g,v,E;if(p>0)if(m=l*f-u,g=l*u-f,E=o*p,m>=0)if(g>=-E)if(g<=E){const M=1/p;m*=M,g*=M,v=m*(m+l*g+2*u)+g*(l*m+g+2*f)+h}else g=o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g=-o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g<=-E?(m=Math.max(0,-(-l*o+u)),g=m>0?-o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h):g<=E?(m=0,g=Math.min(Math.max(-o,-f),o),v=g*(g+2*f)+h):(m=Math.max(0,-(l*o+u)),g=m>0?o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h);else g=l>0?-o:o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(nd).addScaledVector(uc,g),v}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const n=wr.dot(this.direction),r=wr.dot(wr)-n*n,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),u=n-l,f=n+l;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,l,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),m>=0?(u=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||u>r)||((u>n||n!==n)&&(n=u),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,r,o){id.subVectors(t,e),cc.subVectors(n,e),rd.crossVectors(id,cc);let l=this.direction.dot(rd),u;if(l>0){if(r)return null;u=1}else if(l<0)u=-1,l=-l;else return null;fs.subVectors(this.origin,e);const f=u*this.direction.dot(cc.crossVectors(fs,cc));if(f<0)return null;const h=u*this.direction.dot(id.cross(fs));if(h<0||f+h>l)return null;const p=-u*fs.dot(rd);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,o,l,u,f,h,p,m,g,v,E,M,y){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,u,f,h,p,m,g,v,E,M,y)}set(e,t,n,r,o,l,u,f,h,p,m,g,v,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=o,x[5]=l,x[9]=u,x[13]=f,x[2]=h,x[6]=p,x[10]=m,x[14]=g,x[3]=v,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$o.setFromMatrixColumn(e,0).length(),o=1/$o.setFromMatrixColumn(e,1).length(),l=1/$o.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),f=Math.cos(r),h=Math.sin(r),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=l*p,v=l*m,E=u*p,M=u*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=v+E*h,t[5]=g-M*h,t[9]=-u*f,t[2]=M-g*h,t[6]=E+v*h,t[10]=l*f}else if(e.order==="YXZ"){const g=f*p,v=f*m,E=h*p,M=h*m;t[0]=g+M*u,t[4]=E*u-v,t[8]=l*h,t[1]=l*m,t[5]=l*p,t[9]=-u,t[2]=v*u-E,t[6]=M+g*u,t[10]=l*f}else if(e.order==="ZXY"){const g=f*p,v=f*m,E=h*p,M=h*m;t[0]=g-M*u,t[4]=-l*m,t[8]=E+v*u,t[1]=v+E*u,t[5]=l*p,t[9]=M-g*u,t[2]=-l*h,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const g=l*p,v=l*m,E=u*p,M=u*m;t[0]=f*p,t[4]=E*h-v,t[8]=g*h+M,t[1]=f*m,t[5]=M*h+g,t[9]=v*h-E,t[2]=-h,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const g=l*f,v=l*h,E=u*f,M=u*h;t[0]=f*p,t[4]=M-g*m,t[8]=E*m+v,t[1]=m,t[5]=l*p,t[9]=-u*p,t[2]=-h*p,t[6]=v*m+E,t[10]=g-M*m}else if(e.order==="XZY"){const g=l*f,v=l*h,E=u*f,M=u*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=g*m+M,t[5]=l*p,t[9]=v*m-E,t[2]=E*m-v,t[6]=u*p,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VE,e,HE)}lookAt(e,t,n){const r=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),hs.crossVectors(n,hi),hs.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),hs.crossVectors(n,hi)),hs.normalize(),fc.crossVectors(hi,hs),r[0]=hs.x,r[4]=fc.x,r[8]=hi.x,r[1]=hs.y,r[5]=fc.y,r[9]=hi.y,r[2]=hs.z,r[6]=fc.z,r[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],u=n[4],f=n[8],h=n[12],p=n[1],m=n[5],g=n[9],v=n[13],E=n[2],M=n[6],y=n[10],x=n[14],b=n[3],R=n[7],T=n[11],D=n[15],N=r[0],I=r[4],F=r[8],A=r[12],C=r[1],z=r[5],$=r[9],K=r[13],ue=r[2],se=r[6],q=r[10],ne=r[14],B=r[3],te=r[7],oe=r[11],k=r[15];return o[0]=l*N+u*C+f*ue+h*B,o[4]=l*I+u*z+f*se+h*te,o[8]=l*F+u*$+f*q+h*oe,o[12]=l*A+u*K+f*ne+h*k,o[1]=p*N+m*C+g*ue+v*B,o[5]=p*I+m*z+g*se+v*te,o[9]=p*F+m*$+g*q+v*oe,o[13]=p*A+m*K+g*ne+v*k,o[2]=E*N+M*C+y*ue+x*B,o[6]=E*I+M*z+y*se+x*te,o[10]=E*F+M*$+y*q+x*oe,o[14]=E*A+M*K+y*ne+x*k,o[3]=b*N+R*C+T*ue+D*B,o[7]=b*I+R*z+T*se+D*te,o[11]=b*F+R*$+T*q+D*oe,o[15]=b*A+R*K+T*ne+D*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],l=e[1],u=e[5],f=e[9],h=e[13],p=e[2],m=e[6],g=e[10],v=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+o*f*m-r*h*m-o*u*g+n*h*g+r*u*v-n*f*v)+M*(+t*f*v-t*h*g+o*l*g-r*l*v+r*h*p-o*f*p)+y*(+t*h*m-t*u*v-o*l*m+n*l*v+o*u*p-n*h*p)+x*(-r*u*p-t*f*m+t*u*g+r*l*m-n*l*g+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],g=e[10],v=e[11],E=e[12],M=e[13],y=e[14],x=e[15],b=m*y*h-M*g*h+M*f*v-u*y*v-m*f*x+u*g*x,R=E*g*h-p*y*h-E*f*v+l*y*v+p*f*x-l*g*x,T=p*M*h-E*m*h+E*u*v-l*M*v-p*u*x+l*m*x,D=E*m*f-p*M*f-E*u*g+l*M*g+p*u*y-l*m*y,N=t*b+n*R+r*T+o*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=b*I,e[1]=(M*g*o-m*y*o-M*r*v+n*y*v+m*r*x-n*g*x)*I,e[2]=(u*y*o-M*f*o+M*r*h-n*y*h-u*r*x+n*f*x)*I,e[3]=(m*f*o-u*g*o-m*r*h+n*g*h+u*r*v-n*f*v)*I,e[4]=R*I,e[5]=(p*y*o-E*g*o+E*r*v-t*y*v-p*r*x+t*g*x)*I,e[6]=(E*f*o-l*y*o-E*r*h+t*y*h+l*r*x-t*f*x)*I,e[7]=(l*g*o-p*f*o+p*r*h-t*g*h-l*r*v+t*f*v)*I,e[8]=T*I,e[9]=(E*m*o-p*M*o-E*n*v+t*M*v+p*n*x-t*m*x)*I,e[10]=(l*M*o-E*u*o+E*n*h-t*M*h-l*n*x+t*u*x)*I,e[11]=(p*u*o-l*m*o-p*n*h+t*m*h+l*n*v-t*u*v)*I,e[12]=D*I,e[13]=(p*M*r-E*m*r+E*n*g-t*M*g-p*n*y+t*m*y)*I,e[14]=(E*u*r-l*M*r-E*n*f+t*M*f+l*n*y-t*u*y)*I,e[15]=(l*m*r-p*u*r+p*n*f-t*m*f-l*n*g+t*u*g)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,l=e.x,u=e.y,f=e.z,h=o*l,p=o*u;return this.set(h*l+n,h*u-r*f,h*f+r*u,0,h*u+r*f,p*u+n,p*f-r*l,0,h*f-r*u,p*f+r*l,o*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,l){return this.set(1,n,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,l=t._y,u=t._z,f=t._w,h=o+o,p=l+l,m=u+u,g=o*h,v=o*p,E=o*m,M=l*p,y=l*m,x=u*m,b=f*h,R=f*p,T=f*m,D=n.x,N=n.y,I=n.z;return r[0]=(1-(M+x))*D,r[1]=(v+T)*D,r[2]=(E-R)*D,r[3]=0,r[4]=(v-T)*N,r[5]=(1-(g+x))*N,r[6]=(y+b)*N,r[7]=0,r[8]=(E+R)*I,r[9]=(y-b)*I,r[10]=(1-(g+M))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=$o.set(r[0],r[1],r[2]).length();const l=$o.set(r[4],r[5],r[6]).length(),u=$o.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Vi.copy(this);const h=1/o,p=1/l,m=1/u;return Vi.elements[0]*=h,Vi.elements[1]*=h,Vi.elements[2]*=h,Vi.elements[4]*=p,Vi.elements[5]*=p,Vi.elements[6]*=p,Vi.elements[8]*=m,Vi.elements[9]*=m,Vi.elements[10]*=m,t.setFromRotationMatrix(Vi),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,r,o,l,u=Ur){const f=this.elements,h=2*o/(t-e),p=2*o/(n-r),m=(t+e)/(t-e),g=(n+r)/(n-r);let v,E;if(u===Ur)v=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(u===Yc)v=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,r,o,l,u=Ur){const f=this.elements,h=1/(t-e),p=1/(n-r),m=1/(l-o),g=(t+e)*h,v=(n+r)*p;let E,M;if(u===Ur)E=(l+o)*m,M=-2*m;else if(u===Yc)E=o*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $o=new j,Vi=new ot,VE=new j(0,0,0),HE=new j(1,1,1),hs=new j,fc=new j,hi=new j,S0=new ot,M0=new Yi;class ar{constructor(e=0,t=0,n=0,r=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],l=r[4],u=r[8],f=r[1],h=r[5],p=r[9],m=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return M0.setFromEuler(this),this.setFromQuaternion(M0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GE=0;const E0=new j,Zo=new Yi,Ar=new ot,hc=new j,Sl=new j,WE=new j,XE=new Yi,T0=new j(1,0,0),w0=new j(0,1,0),A0=new j(0,0,1),R0={type:"added"},jE={type:"removed"},Qo={type:"childadded",child:null},sd={type:"childremoved",child:null};class $t extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new j,t=new ar,n=new Yi,r=new j(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new at}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(w0,e)}rotateZ(e){return this.rotateOnAxis(A0,e)}translateOnAxis(e,t){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(w0,e)}translateZ(e){return this.translateOnAxis(A0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hc.copy(e):hc.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Sl,hc,this.up):Ar.lookAt(hc,Sl,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jE),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,WE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(e.materials,this.material[f]));r.material=u}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];r.animations.push(o(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),v=l(e.animations),E=l(e.nodes);u.length>0&&(n.geometries=u),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=r,n;function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}$t.DEFAULT_UP=new j(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new j,Rr=new j,od=new j,Cr=new j,Jo=new j,ea=new j,C0=new j,ad=new j,ld=new j,ud=new j,cd=new wt,fd=new wt,hd=new wt;class Wi{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Hi.subVectors(e,t),r.cross(Hi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Hi.subVectors(r,t),Rr.subVectors(n,t),od.subVectors(e,t);const l=Hi.dot(Hi),u=Hi.dot(Rr),f=Hi.dot(od),h=Rr.dot(Rr),p=Rr.dot(od),m=l*h-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,v=(h*f-u*p)*g,E=(l*p-u*f)*g;return o.set(1-v-E,E,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,n,r,o,l,u,f){return this.getBarycoord(e,t,n,r,Cr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Cr.x),f.addScaledVector(l,Cr.y),f.addScaledVector(u,Cr.z),f)}static getInterpolatedAttribute(e,t,n,r,o,l){return cd.setScalar(0),fd.setScalar(0),hd.setScalar(0),cd.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,n),hd.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(cd,o.x),l.addScaledVector(fd,o.y),l.addScaledVector(hd,o.z),l}static isFrontFacing(e,t,n,r){return Hi.subVectors(n,t),Rr.subVectors(e,t),Hi.cross(Rr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Hi.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Wi.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let l,u;Jo.subVectors(r,n),ea.subVectors(o,n),ad.subVectors(e,n);const f=Jo.dot(ad),h=ea.dot(ad);if(f<=0&&h<=0)return t.copy(n);ld.subVectors(e,r);const p=Jo.dot(ld),m=ea.dot(ld);if(p>=0&&m<=p)return t.copy(r);const g=f*m-p*h;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(Jo,l);ud.subVectors(e,o);const v=Jo.dot(ud),E=ea.dot(ud);if(E>=0&&v<=E)return t.copy(o);const M=v*h-f*E;if(M<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(n).addScaledVector(ea,u);const y=p*E-v*m;if(y<=0&&m-p>=0&&v-E>=0)return C0.subVectors(o,r),u=(m-p)/(m-p+(v-E)),t.copy(r).addScaledVector(C0,u);const x=1/(y+M+g);return l=M*x,u=g*x,t.copy(n).addScaledVector(Jo,l).addScaledVector(ea,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},dc={h:0,s:0,l:0};function dd(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=sm(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=dd(l,o,e+1/3),this.g=dd(l,o,e),this.b=dd(l,o,e-1/3)}return St.toWorkingColorSpace(this,r),this}setStyle(e,t=Tn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],u=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=px[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return St.fromWorkingColorSpace(In.copy(this),e),Math.round(mt(In.r*255,0,255))*65536+Math.round(mt(In.g*255,0,255))*256+Math.round(mt(In.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(In.copy(this),t);const n=In.r,r=In.g,o=In.b,l=Math.max(n,r,o),u=Math.min(n,r,o);let f,h;const p=(u+l)/2;if(u===l)f=0,h=0;else{const m=l-u;switch(h=p<=.5?m/(l+u):m/(2-l-u),l){case n:f=(r-o)/m+(r<o?6:0);break;case r:f=(o-n)/m+2;break;case o:f=(n-r)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Tn){St.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,r=In.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(dc);const n=Nl(ds.h,dc.h,t),r=Nl(ds.s,dc.s,t),o=Nl(ds.l,dc.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new nt;nt.NAMES=px;let YE=0;class rr extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=da,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Hd,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(n.blending=this.blending),this.side!==or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vd&&(n.blendSrc=this.blendSrc),this.blendDst!==Hd&&(n.blendDst=this.blendDst),this.blendEquation!==so&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ao extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new j,pc=new Mt;class qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wp,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),o=It(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wp&&(e.usage=this.usage),e}}class mx extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gx extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Or extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qE=0;const Ai=new ot,pd=new $t,ta=new j,di=new Vr,Ml=new Vr,mn=new j;class fr extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?gx:mx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new at().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,n){return Ai.makeTranslation(e,t,n),this.applyMatrix4(Ai),this}scale(e,t,n){return Ai.makeScale(e,t,n),this.applyMatrix4(Ai),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Or(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];di.setFromBufferAttribute(o),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Ml.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(di.min,Ml.min),di.expandByPoint(mn),mn.addVectors(di.max,Ml.max),di.expandByPoint(mn)):(di.expandByPoint(Ml.min),di.expandByPoint(Ml.max))}di.getCenter(n);let r=0;for(let o=0,l=e.count;o<l;o++)mn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(mn));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)mn.fromBufferAttribute(u,h),f&&(ta.fromBufferAttribute(e,h),mn.add(ta)),r=Math.max(r,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let F=0;F<n.count;F++)u[F]=new j,f[F]=new j;const h=new j,p=new j,m=new j,g=new Mt,v=new Mt,E=new Mt,M=new j,y=new j;function x(F,A,C){h.fromBufferAttribute(n,F),p.fromBufferAttribute(n,A),m.fromBufferAttribute(n,C),g.fromBufferAttribute(o,F),v.fromBufferAttribute(o,A),E.fromBufferAttribute(o,C),p.sub(h),m.sub(h),v.sub(g),E.sub(g);const z=1/(v.x*E.y-E.x*v.y);isFinite(z)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(m,-v.y).multiplyScalar(z),y.copy(m).multiplyScalar(v.x).addScaledVector(p,-E.x).multiplyScalar(z),u[F].add(M),u[A].add(M),u[C].add(M),f[F].add(y),f[A].add(y),f[C].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,A=b.length;F<A;++F){const C=b[F],z=C.start,$=C.count;for(let K=z,ue=z+$;K<ue;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const R=new j,T=new j,D=new j,N=new j;function I(F){D.fromBufferAttribute(r,F),N.copy(D);const A=u[F];R.copy(A),R.sub(D.multiplyScalar(D.dot(A))).normalize(),T.crossVectors(N,A);const z=T.dot(f[F])<0?-1:1;l.setXYZW(F,R.x,R.y,R.z,z)}for(let F=0,A=b.length;F<A;++F){const C=b[F],z=C.start,$=C.count;for(let K=z,ue=z+$;K<ue;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new j,o=new j,l=new j,u=new j,f=new j,h=new j,p=new j,m=new j;if(e)for(let g=0,v=e.count;g<v;g+=3){const E=e.getX(g+0),M=e.getX(g+1),y=e.getX(g+2);r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,y),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),u.add(p),f.add(p),h.add(p),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(f.length*p);let v=0,E=0;for(let M=0,y=f.length;M<y;M++){u.isInterleavedBufferAttribute?v=f[M]*u.data.stride+u.offset:v=f[M]*p;for(let x=0;x<p;x++)g[E++]=h[v++]}return new qn(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fr,n=this.index.array,r=this.attributes;for(const u in r){const f=r[u],h=e(f,n);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=e(g,n);f.push(v)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,g=h.length;m<g;m++){const v=h[m];p.push(v.toJSON(e.data))}p.length>0&&(r[f]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],m=o[h];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b0=new ot,Ks=new of,mc=new cr,P0=new j,gc=new j,_c=new j,vc=new j,md=new j,xc=new j,L0=new j,yc=new j;class vn extends $t{constructor(e=new fr,t=new ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(o&&u){xc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=u[f],m=o[f];p!==0&&(md.fromBufferAttribute(m,e),l?xc.addScaledVector(md,p):xc.addScaledVector(md.sub(t),p))}t.add(xc)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(o),Ks.copy(e.ray).recast(e.near),!(mc.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(mc,P0)===null||Ks.origin.distanceToSquared(P0)>(e.far-e.near)**2))&&(b0.copy(o).invert(),Ks.copy(e.ray).applyMatrix4(b0),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,n){let r;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=l[y.materialIndex],b=Math.max(y.start,v.start),R=Math.min(u.count,Math.min(y.start+y.count,v.start+v.count));for(let T=b,D=R;T<D;T+=3){const N=u.getX(T),I=u.getX(T+1),F=u.getX(T+2);r=Sc(this,x,e,n,h,p,m,N,I,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(u.count,v.start+v.count);for(let y=E,x=M;y<x;y+=3){const b=u.getX(y),R=u.getX(y+1),T=u.getX(y+2);r=Sc(this,l,e,n,h,p,m,b,R,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=l[y.materialIndex],b=Math.max(y.start,v.start),R=Math.min(f.count,Math.min(y.start+y.count,v.start+v.count));for(let T=b,D=R;T<D;T+=3){const N=T,I=T+1,F=T+2;r=Sc(this,x,e,n,h,p,m,N,I,F),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=y.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(f.count,v.start+v.count);for(let y=E,x=M;y<x;y+=3){const b=y,R=y+1,T=y+2;r=Sc(this,l,e,n,h,p,m,b,R,T),r&&(r.faceIndex=Math.floor(y/3),t.push(r))}}}}function KE(a,e,t,n,r,o,l,u){let f;if(e.side===jn?f=n.intersectTriangle(l,o,r,!0,u):f=n.intersectTriangle(r,o,l,e.side===or,u),f===null)return null;yc.copy(u),yc.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(yc);return h<t.near||h>t.far?null:{distance:h,point:yc.clone(),object:a}}function Sc(a,e,t,n,r,o,l,u,f,h){a.getVertexPosition(u,gc),a.getVertexPosition(f,_c),a.getVertexPosition(h,vc);const p=KE(a,e,t,n,gc,_c,vc,L0);if(p){const m=new j;Wi.getBarycoord(L0,gc,_c,vc,m),r&&(p.uv=Wi.getInterpolatedAttribute(r,u,f,h,m,new Mt)),o&&(p.uv1=Wi.getInterpolatedAttribute(o,u,f,h,m,new Mt)),l&&(p.normal=Wi.getInterpolatedAttribute(l,u,f,h,m,new j),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new j,materialIndex:0};Wi.getNormal(gc,_c,vc,g.normal),p.face=g,p.barycoord=m}return p}class Fa extends fr{constructor(e=1,t=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const u=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],p=[],m=[];let g=0,v=0;E("z","y","x",-1,-1,n,t,e,l,o,0),E("z","y","x",1,-1,n,t,-e,l,o,1),E("x","z","y",1,1,e,n,t,r,l,2),E("x","z","y",1,-1,e,n,-t,r,l,3),E("x","y","z",1,-1,e,t,n,r,o,4),E("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(f),this.setAttribute("position",new Or(h,3)),this.setAttribute("normal",new Or(p,3)),this.setAttribute("uv",new Or(m,2));function E(M,y,x,b,R,T,D,N,I,F,A){const C=T/I,z=D/F,$=T/2,K=D/2,ue=N/2,se=I+1,q=F+1;let ne=0,B=0;const te=new j;for(let oe=0;oe<q;oe++){const k=oe*z-K;for(let Q=0;Q<se;Q++){const be=Q*C-$;te[M]=be*b,te[y]=k*R,te[x]=ue,h.push(te.x,te.y,te.z),te[M]=0,te[y]=0,te[x]=N>0?1:-1,p.push(te.x,te.y,te.z),m.push(Q/I),m.push(1-oe/F),ne+=1}}for(let oe=0;oe<F;oe++)for(let k=0;k<I;k++){const Q=g+k+se*oe,be=g+k+se*(oe+1),J=g+(k+1)+se*(oe+1),fe=g+(k+1)+se*oe;f.push(Q,be,fe),f.push(be,J,fe),B+=6}u.addGroup(v,B,A),v+=B,g+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Aa(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Wn(a){const e={};for(let t=0;t<a.length;t++){const n=Aa(a[t]);for(const r in n)e[r]=n[r]}return e}function $E(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function _x(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const qc={clone:Aa,merge:Wn};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=$E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vx extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new j,I0=new Mt,D0=new Mt;class Dn extends vx{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,I0,D0),t.subVectors(D0,I0)}setViewOffset(e,t,n,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/f,t-=l.offsetY*n/h,r*=l.width/f,n*=l.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const na=-90,ia=1;class JE extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(na,ia,e,t);r.layers=this.layers,this.add(r);const o=new Dn(na,ia,e,t);o.layers=this.layers,this.add(o);const l=new Dn(na,ia,e,t);l.layers=this.layers,this.add(l);const u=new Dn(na,ia,e,t);u.layers=this.layers,this.add(u);const f=new Dn(na,ia,e,t);f.layers=this.layers,this.add(f);const h=new Dn(na,ia,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,l,u,f]=t;for(const h of t)this.remove(h);if(e===Ur)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Yc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,g,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class xx extends xn{constructor(e,t,n,r,o,l,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Sa,super(e,t,n,r,o,l,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eT extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fa(5,5,5),o=new lr({name:"CubemapFromEquirect",uniforms:Aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Es});o.uniforms.tEquirect.value=t;const l=new vn(r,o),u=t.minFilter;return t.minFilter===Nr&&(t.minFilter=gi),new JE(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(o)}}class tT extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wp,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new j;class om{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),o=It(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return new qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new om(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const N0=new j,U0=new wt,F0=new wt,iT=new j,O0=new ot,Mc=new j,gd=new cr,k0=new ot,_d=new of;class rT extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=d0,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingBox.expandByPoint(Mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingSphere.expandByPoint(Mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gd.copy(this.boundingSphere),gd.applyMatrix4(r),e.ray.intersectsSphere(gd)!==!1&&(k0.copy(r).invert(),_d.copy(e.ray).applyMatrix4(k0),!(this.boundingBox!==null&&_d.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_d)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===d0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ZM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;U0.fromBufferAttribute(r.attributes.skinIndex,e),F0.fromBufferAttribute(r.attributes.skinWeight,e),N0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const l=F0.getComponent(o);if(l!==0){const u=U0.getComponent(o);O0.multiplyMatrices(n.bones[u].matrixWorld,n.boneInverses[u]),t.addScaledVector(iT.copy(N0).applyMatrix4(O0),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yx extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sx extends xn{constructor(e=null,t=1,n=1,r,o,l,u,f,h=Yn,p=Yn,m,g){super(null,l,u,f,h,p,r,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const B0=new ot,sT=new ot;class am{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let o=0,l=e.length;o<l;o++){const u=e[o]?e[o].matrixWorld:sT;B0.multiplyMatrices(u,t[o]),B0.toArray(n,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new am(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sx(t,e,e,bi,Xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const o=e.bones[n];let l=t[o];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),l=new yx),this.bones.push(l),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,o=t.length;r<o;r++){const l=t[r];e.bones.push(l.uuid);const u=n[r];e.boneInverses.push(u.toArray())}return e}}class Ap extends qn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ra=new ot,z0=new ot,Ec=[],V0=new Vr,oT=new ot,El=new vn,Tl=new cr;class aT extends vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ap(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,oT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),V0.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(V0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),Tl.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(Tl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=n.length+1,l=e*o+1;for(let u=0;u<n.length;u++)n[u]=r[l+u]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(El.geometry=this.geometry,El.material=this.material,El.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(n),e.ray.intersectsSphere(Tl)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,ra),z0.multiplyMatrices(n,ra),El.matrixWorld=z0,El.raycast(e,Ec);for(let l=0,u=Ec.length;l<u;l++){const f=Ec[l];f.instanceId=o,f.object=this,t.push(f)}Ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ap(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sx(new Float32Array(r*this.count),r,this.count,em,Xi));const o=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const u=this.geometry.morphTargetsRelative?1:1-l,f=r*e;o[f]=u,o.set(n,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const vd=new j,lT=new j,uT=new at;class gs{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vd.subVectors(n,t).cross(lT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uT.getNormalMatrix(e),r=this.coplanarPoint(vd).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $s=new cr,Tc=new j;class lm{constructor(e=new gs,t=new gs,n=new gs,r=new gs,o=new gs,l=new gs){this.planes=[e,t,n,r,o,l]}set(e,t,n,r,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ur){const n=this.planes,r=e.elements,o=r[0],l=r[1],u=r[2],f=r[3],h=r[4],p=r[5],m=r[6],g=r[7],v=r[8],E=r[9],M=r[10],y=r[11],x=r[12],b=r[13],R=r[14],T=r[15];if(n[0].setComponents(f-o,g-h,y-v,T-x).normalize(),n[1].setComponents(f+o,g+h,y+v,T+x).normalize(),n[2].setComponents(f+l,g+p,y+E,T+b).normalize(),n[3].setComponents(f-l,g-p,y-E,T-b).normalize(),n[4].setComponents(f-u,g-m,y-M,T-R).normalize(),t===Ur)n[5].setComponents(f+u,g+m,y+M,T+R).normalize();else if(t===Yc)n[5].setComponents(u,m,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){return $s.center.set(0,0,0),$s.radius=.7071067811865476,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Tc.x=r.normal.x>0?e.max.x:e.min.x,Tc.y=r.normal.y>0?e.max.y:e.min.y,Tc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new j,$c=new j,H0=new ot,wl=new of,wc=new cr,xd=new j,G0=new j;class um extends $t{constructor(e=new fr,t=new Mx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Kc.fromBufferAttribute(t,r-1),$c.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Kc.distanceTo($c);e.setAttribute("lineDistance",new Or(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(r),wc.radius+=o,e.ray.intersectsSphere(wc)===!1)return;H0.copy(r).invert(),wl.copy(e.ray).applyMatrix4(H0);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const v=Math.max(0,l.start),E=Math.min(p.count,l.start+l.count);for(let M=v,y=E-1;M<y;M+=h){const x=p.getX(M),b=p.getX(M+1),R=Ac(this,e,wl,f,x,b);R&&t.push(R)}if(this.isLineLoop){const M=p.getX(E-1),y=p.getX(v),x=Ac(this,e,wl,f,M,y);x&&t.push(x)}}else{const v=Math.max(0,l.start),E=Math.min(g.count,l.start+l.count);for(let M=v,y=E-1;M<y;M+=h){const x=Ac(this,e,wl,f,M,M+1);x&&t.push(x)}if(this.isLineLoop){const M=Ac(this,e,wl,f,E-1,v);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Ac(a,e,t,n,r,o){const l=a.geometry.attributes.position;if(Kc.fromBufferAttribute(l,r),$c.fromBufferAttribute(l,o),t.distanceSqToSegment(Kc,$c,xd,G0)>n)return;xd.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(xd);if(!(f<e.near||f>e.far))return{distance:f,point:G0.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}const W0=new j,X0=new j;class cT extends um{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)W0.fromBufferAttribute(t,r),X0.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+W0.distanceTo(X0);e.setAttribute("lineDistance",new Or(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fT extends um{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ex extends rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const j0=new ot,Rp=new of,Rc=new cr,Cc=new j;class hT extends $t{constructor(e=new fr,t=new Ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=o,e.ray.intersectsSphere(Rc)===!1)return;j0.copy(r).invert(),Rp.copy(e.ray).applyMatrix4(j0);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=n.index,m=n.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let E=g,M=v;E<M;E++){const y=h.getX(E);Cc.fromBufferAttribute(m,y),Y0(Cc,y,f,r,e,t,this)}}else{const g=Math.max(0,l.start),v=Math.min(m.count,l.start+l.count);for(let E=g,M=v;E<M;E++)Cc.fromBufferAttribute(m,E),Y0(Cc,E,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const u=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Y0(a,e,t,n,r,o,l){const u=Rp.distanceSqToPoint(a);if(u<t){const f=new j;Rp.closestPointToPoint(a,f),f.applyMatrix4(n);const h=r.ray.origin.distanceTo(f);if(h<r.near||h>r.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class lo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Tx extends xn{constructor(e,t,n,r,o,l,u,f,h,p=pa){if(p!==pa&&p!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===pa&&(n=go),n===void 0&&p===Ta&&(n=Ea),super(null,r,o,l,u,f,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Yn,this.minFilter=f!==void 0?f:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ra extends fr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,l=t/2,u=Math.floor(n),f=Math.floor(r),h=u+1,p=f+1,m=e/u,g=t/f,v=[],E=[],M=[],y=[];for(let x=0;x<p;x++){const b=x*g-l;for(let R=0;R<h;R++){const T=R*m-o;E.push(T,-b,0),M.push(0,0,1),y.push(R/u),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let b=0;b<u;b++){const R=b+h*x,T=b+h*(x+1),D=b+1+h*(x+1),N=b+1+h*x;v.push(R,T,N),v.push(T,D,N)}this.setIndex(v),this.setAttribute("position",new Or(E,3)),this.setAttribute("normal",new Or(M,3)),this.setAttribute("uv",new Or(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class af extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lx,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hr extends af{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dT extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bc(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function mT(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function gT(a){function e(r,o){return a[r]-a[o]}const t=a.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function q0(a,e,t){const n=a.length,r=new a.constructor(n);for(let o=0,l=0;l!==n;++o){const u=t[o]*e;for(let f=0;f!==e;++f)r[l++]=a[u+f]}return r}function wx(a,e,t,n){let r=1,o=a[0];for(;o!==void 0&&o[n]===void 0;)o=a[r++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(e.push(o.time),t.push.apply(t,l)),o=a[r++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(e.push(o.time),l.toArray(t,t.length)),o=a[r++];while(o!==void 0);else do l=o[n],l!==void 0&&(e.push(o.time),t.push(l)),o=a[r++];while(o!==void 0)}class Zl{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],o=t[n-1];e:{t:{let l;n:{i:if(!(e<r)){for(let u=n+2;;){if(r===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(o=r,r=t[++n],e<r)break t}l=t.length;break n}if(!(e>=o)){const u=t[1];e<u&&(n=2,o=u);for(let f=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===f)break;if(r=o,o=t[--n-1],e>=o)break t}l=n,n=0;break n}break e}for(;n<l;){const u=n+l>>>1;e<t[u]?l=u:n=u+1}if(r=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,r)}return this.interpolate_(n,o,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r;for(let l=0;l!==r;++l)t[l]=n[o+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _T extends Zl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:la,endingEnd:la}}intervalChanged_(e,t,n){const r=this.parameterPositions;let o=e-2,l=e+1,u=r[o],f=r[l];if(u===void 0)switch(this.getSettings_().endingStart){case ua:o=e,u=2*t-n;break;case Xc:o=r.length-2,u=t+r[o]-r[o+1];break;default:o=e,u=n}if(f===void 0)switch(this.getSettings_().endingEnd){case ua:l=e,f=2*n-t;break;case Xc:l=1,f=n+r[1]-r[0];break;default:l=e-1,f=t}const h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(f-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,p=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,E=(n-t)/(r-t),M=E*E,y=M*E,x=-g*y+2*g*M-g*E,b=(1+g)*y+(-1.5-2*g)*M+(-.5+g)*E+1,R=(-1-v)*y+(1.5+v)*M+.5*E,T=v*y-v*M;for(let D=0;D!==u;++D)o[D]=x*l[p+D]+b*l[h+D]+R*l[f+D]+T*l[m+D];return o}}class Ax extends Zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,p=(n-t)/(r-t),m=1-p;for(let g=0;g!==u;++g)o[g]=l[h+g]*m+l[f+g]*p;return o}}class vT extends Zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class dr{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bc(t,this.TimeBufferType),this.values=bc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bc(e.times,Array),values:bc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _T(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zl:t=this.InterpolantFactoryMethodDiscrete;break;case Vl:t=this.InterpolantFactoryMethodLinear;break;case $h:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zl;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return $h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let o=0,l=r-1;for(;o!==r&&n[o]<e;)++o;for(;l!==-1&&n[l]>t;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);const u=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*u,l*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let u=0;u!==o;u++){const f=n[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(l!==null&&l>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,l),e=!1;break}l=f}if(r!==void 0&&mT(r))for(let u=0,f=r.length;u!==f;++u){const h=r[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$h,o=e.length-1;let l=1;for(let u=1;u<o;++u){let f=!1;const h=e[u],p=e[u+1];if(h!==p&&(u!==1||h!==e[0]))if(r)f=!0;else{const m=u*n,g=m-n,v=m+n;for(let E=0;E!==n;++E){const M=t[m+E];if(M!==t[g+E]||M!==t[v+E]){f=!0;break}}}if(f){if(u!==l){e[l]=e[u];const m=u*n,g=l*n;for(let v=0;v!==n;++v)t[g+v]=t[m+v]}++l}}if(o>0){e[l]=e[o];for(let u=o*n,f=l*n,h=0;h!==n;++h)t[f+h]=t[u+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}dr.prototype.TimeBufferType=Float32Array;dr.prototype.ValueBufferType=Float32Array;dr.prototype.DefaultInterpolation=Vl;class Oa extends dr{constructor(e,t,n){super(e,t,n)}}Oa.prototype.ValueTypeName="bool";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=zl;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;class Rx extends dr{}Rx.prototype.ValueTypeName="color";class Ca extends dr{}Ca.prototype.ValueTypeName="number";class xT extends Zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=(n-t)/(r-t);let h=e*u;for(let p=h+u;h!==p;h+=4)Yi.slerpFlat(o,0,l,h-u,l,h,f);return o}}class ba extends dr{InterpolantFactoryMethodLinear(e){return new xT(this.times,this.values,this.getValueSize(),e)}}ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;class ka extends dr{constructor(e,t,n){super(e,t,n)}}ka.prototype.ValueTypeName="string";ka.prototype.ValueBufferType=Array;ka.prototype.DefaultInterpolation=zl;ka.prototype.InterpolantFactoryMethodLinear=void 0;ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends dr{}Pa.prototype.ValueTypeName="vector";class Cp{constructor(e="",t=-1,n=[],r=rm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ji(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let l=0,u=n.length;l!==u;++l)t.push(ST(n[l]).scale(r));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,l=n.length;o!==l;++o)t.push(dr.toJSON(n[o]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const o=t.length,l=[];for(let u=0;u<o;u++){let f=[],h=[];f.push((u+o-1)%o,u,(u+1)%o),h.push(0,1,0);const p=gT(f);f=q0(f,1,p),h=q0(h,1,p),!r&&f[0]===0&&(f.push(o),h.push(h[0])),l.push(new Ca(".morphTargetInfluences["+t[u].name+"]",f,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},o=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const h=e[u],p=h.name.match(o);if(p&&p.length>1){const m=p[1];let g=r[m];g||(r[m]=g=[]),g.push(h)}}const l=[];for(const u in r)l.push(this.CreateFromMorphTargetSequence(u,r[u],t,n));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,g,v,E,M){if(v.length!==0){const y=[],x=[];wx(v,y,x,E),y.length!==0&&M.push(new m(g,y,x))}},r=[],o=e.name||"default",l=e.fps||30,u=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const g=h[m].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let E;for(E=0;E<g.length;E++)if(g[E].morphTargets)for(let M=0;M<g[E].morphTargets.length;M++)v[g[E].morphTargets[M]]=-1;for(const M in v){const y=[],x=[];for(let b=0;b!==g[E].morphTargets.length;++b){const R=g[E];y.push(R.time),x.push(R.morphTarget===M?1:0)}r.push(new Ca(".morphTargetInfluence["+M+"]",y,x))}f=v.length*l}else{const v=".bones["+t[m].name+"]";n(Pa,v+".position",g,"pos",r),n(ba,v+".quaternion",g,"rot",r),n(Pa,v+".scale",g,"scl",r)}}return r.length===0?null:new this(o,f,r,u)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yT(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ca;case"vector":case"vector2":case"vector3":case"vector4":return Pa;case"color":return Rx;case"quaternion":return ba;case"bool":case"boolean":return Oa;case"string":return ka}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function ST(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yT(a.type);if(a.times===void 0){const t=[],n=[];wx(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const xs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class MT{constructor(e,t,n){const r=this;let o=!1,l=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){u++,o===!1&&r.onStart!==void 0&&r.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,u),l===u&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const v=h[m],E=h[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return E}return null}}}const ET=new MT;class Ba{constructor(e){this.manager=e!==void 0?e:ET,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class TT extends Error{constructor(e,t){super(e),this.response=t}}class Cx extends Ba{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=xs.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:n,onError:r});return}br[e]=[],br[e].push({onLoad:t,onProgress:n,onError:r});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=br[e],m=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,E=v!==0;let M=0;const y=new ReadableStream({start(x){b();function b(){m.read().then(({done:R,value:T})=>{if(R)x.close();else{M+=T.byteLength;const D=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:v});for(let N=0,I=p.length;N<I;N++){const F=p[N];F.onProgress&&F.onProgress(D)}x.enqueue(T),b()}},R=>{x.error(R)})}}});return new Response(y)}else throw new TT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u===void 0)return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),g=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(E=>v.decode(E))}}}).then(h=>{xs.add(e,h);const p=br[e];delete br[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onLoad&&v.onLoad(h)}}).catch(h=>{const p=br[e];if(p===void 0)throw this.manager.itemError(e),h;delete br[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wT extends Ba{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=xs.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const u=Hl("img");function f(){p(),xs.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(m){p(),r&&r(m),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class bx extends Ba{constructor(e){super(e)}load(e,t,n,r){const o=new xn,l=new wT(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class lf extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const yd=new ot,K0=new j,$0=new j;class cm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lm,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;K0.setFromMatrixPosition(e.matrixWorld),t.position.copy(K0),$0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($0),t.updateMatrixWorld(),yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AT extends cm{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=wa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||r!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=r,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RT extends lf{constructor(e,t,n=0,r=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=n,this.angle=r,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new AT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Z0=new ot,Al=new j,Sd=new j;class CT extends cm{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Al.setFromMatrixPosition(e.matrixWorld),n.position.copy(Al),Sd.copy(n.position),Sd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sd),n.updateMatrixWorld(),r.makeTranslation(-Al.x,-Al.y,-Al.z),Z0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z0)}}class bT extends lf{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new CT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fm extends vx{constructor(e=-1,t=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class PT extends cm{constructor(){super(new fm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bp extends lf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new PT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class LT extends lf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ul{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class IT extends Ba{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=xs.get(e);if(l!==void 0){if(o.manager.itemStart(e),l.then){l.then(h=>{t&&t(h),o.manager.itemEnd(e)}).catch(h=>{r&&r(h)});return}return setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(h){return xs.add(e,h),t&&t(h),o.manager.itemEnd(e),h}).catch(function(h){r&&r(h),xs.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});xs.add(e,f),o.manager.itemStart(e)}}class DT extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Q0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=J0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=J0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function J0(){return performance.now()}class NT{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,o,l;switch(t){case"quaternion":r=this._slerp,o=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,o=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,o=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=o,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,o=e*r+r;let l=this.cumulativeWeight;if(l===0){for(let u=0;u!==r;++u)n[o+u]=n[u];l=t}else{l+=t;const u=t/l;this._mixBufferRegion(n,o,0,u,r)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,o=this.cumulativeWeight,l=this.cumulativeWeightAdditive,u=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const f=t*this._origIndex;this._mixBufferRegion(n,r,f,1-o,t)}l>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let f=t,h=t+t;f!==h;++f)if(n[f]!==n[f+t]){u.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let o=n,l=r;o!==l;++o)t[o]=t[r+o%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,o){if(r>=.5)for(let l=0;l!==o;++l)e[t+l]=e[n+l]}_slerp(e,t,n,r){Yi.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,o){const l=this._workIndex*o;Yi.multiplyQuaternionsFlat(e,l,e,t,e,n),Yi.slerpFlat(e,t,e,t,e,l,r)}_lerp(e,t,n,r,o){const l=1-r;for(let u=0;u!==o;++u){const f=t+u;e[f]=e[f]*l+e[n+u]*r}}_lerpAdditive(e,t,n,r,o){for(let l=0;l!==o;++l){const u=t+l;e[u]=e[u]+e[n+l]*r}}}const hm="\\[\\]\\.:\\/",UT=new RegExp("["+hm+"]","g"),dm="[^"+hm+"]",FT="[^"+hm.replace("\\.","")+"]",OT=/((?:WC+[\/:])*)/.source.replace("WC",dm),kT=/(WCOD+)?/.source.replace("WCOD",FT),BT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dm),zT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dm),VT=new RegExp("^"+OT+kT+BT+zT+"$"),HT=["material","materials","bones","map"];class GT{constructor(e,t,n){const r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=n.length;r!==o;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Pt{constructor(e,t,n){this.path=t,this.parsedPath=n||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,n):new Pt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(UT,"")}static parseTrackName(e){const t=VT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=n.nodeName.substring(r+1);HT.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let l=0;l<o.length;l++){const u=o[l];if(u.name===t||u.uuid===t)return u;const f=n(u.children);if(f)return f}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,o=n.length;r!==o;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let o=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[r];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=r;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=GT;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class WT{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const o=t.tracks,l=o.length,u=new Array(l),f={endingStart:la,endingEnd:la};for(let h=0;h!==l;++h){const p=o[h].createInterpolant(null);u[h]=p,p.settings=f}this._interpolantSettings=f,this._interpolants=u,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=JM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,o=e._clip.duration,l=o/r,u=r/o;e.warp(1,l,t),this.warp(u,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,o=r.time,l=this.timeScale;let u=this._timeScaleInterpolant;u===null&&(u=r._lendControlInterpolant(),this._timeScaleInterpolant=u);const f=u.parameterPositions,h=u.sampleValues;return f[0]=o,f[1]=o+n,h[0]=e/l,h[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const o=this._startTime;if(o!==null){const f=(e-o)*n;f<0||n===0?t=0:(this._startTime=null,t=n*f)}t*=this._updateTimeScale(e);const l=this._updateTime(t),u=this._updateWeight(e);if(u>0){const f=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case tE:for(let p=0,m=f.length;p!==m;++p)f[p].evaluate(l),h[p].accumulateAdditive(u);break;case rm:default:for(let p=0,m=f.length;p!==m;++p)f[p].evaluate(l),h[p].accumulate(r,u)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,o=this._loopCount;const l=n===eE;if(e===0)return o===-1?r:l&&(o&1)===1?t-r:r;if(n===QM){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(o===-1&&(e>=0?(o=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),r>=t||r<0){const u=Math.floor(r/t);r-=t*u,o+=Math.abs(u);const f=this.repetitions-o;if(f<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(f===1){const h=e<0;this._setEndings(h,!h,l)}else this._setEndings(!1,!1,l);this._loopCount=o,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:u})}}else this.time=r;if(l&&(o&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=ua,r.endingEnd=ua):(e?r.endingStart=this.zeroSlopeAtStart?ua:la:r.endingStart=Xc,t?r.endingEnd=this.zeroSlopeAtEnd?ua:la:r.endingEnd=Xc)}_scheduleFading(e,t,n){const r=this._mixer,o=r.time;let l=this._weightInterpolant;l===null&&(l=r._lendControlInterpolant(),this._weightInterpolant=l);const u=l.parameterPositions,f=l.sampleValues;return u[0]=o,f[0]=t,u[1]=o+e,f[1]=n,this}}const XT=new Float32Array(1);class ev extends xo{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,o=r.length,l=e._propertyBindings,u=e._interpolants,f=n.uuid,h=this._bindingsByRootAndName;let p=h[f];p===void 0&&(p={},h[f]=p);for(let m=0;m!==o;++m){const g=r[m],v=g.name;let E=p[v];if(E!==void 0)++E.referenceCount,l[m]=E;else{if(E=l[m],E!==void 0){E._cacheIndex===null&&(++E.referenceCount,this._addInactiveBinding(E,f,v));continue}const M=t&&t._propertyBindings[m].binding.parsedPath;E=new NT(Pt.create(n,v,M),g.ValueTypeName,g.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,f,v),l[m]=E}u[m].resultBuffer=E.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,o=this._actionsByClip[r];this._bindAction(e,o&&o.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const o=t[n];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,o=this._actionsByClip;let l=o[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,o[t]=l;else{const u=l.knownActions;e._byClipCacheIndex=u.length,u.push(e)}e._cacheIndex=r.length,r.push(e),l.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const o=e._clip.uuid,l=this._actionsByClip,u=l[o],f=u.knownActions,h=f[f.length-1],p=e._byClipCacheIndex;h._byClipCacheIndex=p,f[p]=h,f.pop(),e._byClipCacheIndex=null;const m=u.actionByRoot,g=(e._localRoot||this._root).uuid;delete m[g],f.length===0&&delete l[o],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const o=t[n];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,o=this._bindings;let l=r[t];l===void 0&&(l={},r[t]=l),l[n]=e,e._cacheIndex=o.length,o.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,o=n.path,l=this._bindingsByRootAndName,u=l[r],f=t[t.length-1],h=e._cacheIndex;f._cacheIndex=h,t[h]=f,t.pop(),delete u[o],Object.keys(u).length===0&&delete l[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,o=t[r];e._cacheIndex=r,t[r]=e,o._cacheIndex=n,t[n]=o}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ax(new Float32Array(2),new Float32Array(2),1,XT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,o=t[r];e.__cacheIndex=r,t[r]=e,o.__cacheIndex=n,t[n]=o}clipAction(e,t,n){const r=t||this._root,o=r.uuid;let l=typeof e=="string"?Cp.findByName(r,e):e;const u=l!==null?l.uuid:e,f=this._actionsByClip[u];let h=null;if(n===void 0&&(l!==null?n=l.blendMode:n=rm),f!==void 0){const m=f.actionByRoot[o];if(m!==void 0&&m.blendMode===n)return m;h=f.knownActions[0],l===null&&(l=h._clip)}if(l===null)return null;const p=new WT(this,l,t,n);return this._bindAction(p,h),this._addInactiveAction(p,u,o),p}existingAction(e,t){const n=t||this._root,r=n.uuid,o=typeof e=="string"?Cp.findByName(n,e):e,l=o?o.uuid:e,u=this._actionsByClip[l];return u!==void 0&&u.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,o=Math.sign(e),l=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(r,e,o,l);const u=this._bindings,f=this._nActiveBindings;for(let h=0;h!==f;++h)u[h].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,o=r[n];if(o!==void 0){const l=o.knownActions;for(let u=0,f=l.length;u!==f;++u){const h=l[u];this._deactivateAction(h);const p=h._cacheIndex,m=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,m._cacheIndex=p,t[p]=m,t.pop(),this._removeInactiveBindingsForAction(h)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const l in n){const u=n[l].actionByRoot,f=u[t];f!==void 0&&(this._deactivateAction(f),this._removeInactiveAction(f))}const r=this._bindingsByRootAndName,o=r[t];if(o!==void 0)for(const l in o){const u=o[l];u.restoreOriginalState(),this._removeInactiveBinding(u)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function tv(a,e,t,n){const r=jT(n);switch(t){case tx:return a*e;case ix:return a*e;case rx:return a*e*2;case em:return a*e/r.components*r.byteLength;case tm:return a*e/r.components*r.byteLength;case sx:return a*e*2/r.components*r.byteLength;case nm:return a*e*2/r.components*r.byteLength;case nx:return a*e*3/r.components*r.byteLength;case bi:return a*e*4/r.components*r.byteLength;case im:return a*e*4/r.components*r.byteLength;case Uc:case Fc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Oc:case kc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Jd:case tp:return Math.max(a,16)*Math.max(e,8)/4;case Qd:case ep:return Math.max(a,8)*Math.max(e,8)/2;case np:case ip:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case dp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Bc:case xp:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ox:case Sp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Mp:case Ep:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jT(a){switch(a){case kr:case Qv:return{byteLength:1,components:1};case Bl:case Jv:case $l:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case go:case Zp:case Xi:return{byteLength:4,components:1};case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let a=null,e=!1,t=null,n=null;function r(o,l){t(o,l),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function YT(a){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,m=h.byteLength,g=a.createBuffer();a.bindBuffer(f,g),a.bufferData(f,h,p),u.onUploadCallback();let v;if(h instanceof Float32Array)v=a.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?v=a.HALF_FLOAT:v=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=a.SHORT;else if(h instanceof Uint32Array)v=a.UNSIGNED_INT;else if(h instanceof Int32Array)v=a.INT;else if(h instanceof Int8Array)v=a.BYTE;else if(h instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function n(u,f,h){const p=f.array,m=f.updateRanges;if(a.bindBuffer(h,u),m.length===0)a.bufferSubData(h,0,p);else{m.sort((v,E)=>v.start-E.start);let g=0;for(let v=1;v<m.length;v++){const E=m[g],M=m[v];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,m[g]=M)}m.length=g+1;for(let v=0,E=m.length;v<E;v++){const M=m[v];a.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(a.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,u,f),h.version=u.version}}return{get:r,remove:o,update:l}}var qT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T1="gl_FragColor = linearToOutputTexel( gl_FragColor );",w1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:qT,alphahash_pars_fragment:KT,alphamap_fragment:$T,alphamap_pars_fragment:ZT,alphatest_fragment:QT,alphatest_pars_fragment:JT,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:o1,iridescence_fragment:a1,bumpmap_pars_fragment:l1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:h1,color_fragment:d1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:_1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:x1,displacementmap_pars_vertex:y1,displacementmap_vertex:S1,emissivemap_fragment:M1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:w1,envmap_fragment:A1,envmap_common_pars_fragment:R1,envmap_pars_fragment:C1,envmap_pars_vertex:b1,envmap_physical_pars_fragment:z1,envmap_vertex:P1,fog_vertex:L1,fog_pars_vertex:I1,fog_fragment:D1,fog_pars_fragment:N1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:F1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:k1,lights_pars_begin:B1,lights_toon_fragment:V1,lights_toon_pars_fragment:H1,lights_phong_fragment:G1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:j1,lights_fragment_begin:Y1,lights_fragment_maps:q1,lights_fragment_end:K1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:ew,map_pars_fragment:tw,map_particle_fragment:nw,map_particle_pars_fragment:iw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:sw,morphinstance_vertex:ow,morphcolor_vertex:aw,morphnormal_vertex:lw,morphtarget_pars_vertex:uw,morphtarget_vertex:cw,normal_fragment_begin:fw,normal_fragment_maps:hw,normal_pars_fragment:dw,normal_pars_vertex:pw,normal_vertex:mw,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:_w,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:xw,iridescence_pars_fragment:yw,opaque_fragment:Sw,packing:Mw,premultiplied_alpha_fragment:Ew,project_vertex:Tw,dithering_fragment:ww,dithering_pars_fragment:Aw,roughnessmap_fragment:Rw,roughnessmap_pars_fragment:Cw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Pw,shadowmap_vertex:Lw,shadowmask_pars_fragment:Iw,skinbase_vertex:Dw,skinning_pars_vertex:Nw,skinning_vertex:Uw,skinnormal_vertex:Fw,specularmap_fragment:Ow,specularmap_pars_fragment:kw,tonemapping_fragment:Bw,tonemapping_pars_fragment:zw,transmission_fragment:Vw,transmission_pars_fragment:Hw,uv_pars_fragment:Gw,uv_pars_vertex:Ww,uv_vertex:Xw,worldpos_vertex:jw,background_vert:Yw,background_frag:qw,backgroundCube_vert:Kw,backgroundCube_frag:$w,cube_vert:Zw,cube_frag:Qw,depth_vert:Jw,depth_frag:eA,distanceRGBA_vert:tA,distanceRGBA_frag:nA,equirect_vert:iA,equirect_frag:rA,linedashed_vert:sA,linedashed_frag:oA,meshbasic_vert:aA,meshbasic_frag:lA,meshlambert_vert:uA,meshlambert_frag:cA,meshmatcap_vert:fA,meshmatcap_frag:hA,meshnormal_vert:dA,meshnormal_frag:pA,meshphong_vert:mA,meshphong_frag:gA,meshphysical_vert:_A,meshphysical_frag:vA,meshtoon_vert:xA,meshtoon_frag:yA,points_vert:SA,points_frag:MA,shadow_vert:EA,shadow_frag:TA,sprite_vert:wA,sprite_frag:AA},we={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},er={basic:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Wn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Wn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Wn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new nt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Wn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Wn([we.points,we.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Wn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Wn([we.common,we.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Wn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Wn([we.sprite,we.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Wn([we.common,we.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Wn([we.lights,we.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};er.physical={uniforms:Wn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Pc={r:0,b:0,g:0},Zs=new ar,RA=new ot;function CA(a,e,t,n,r,o,l){const u=new nt(0);let f=o===!0?0:1,h,p,m=null,g=0,v=null;function E(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?t:e).get(T)),T}function M(R){let T=!1;const D=E(R);D===null?x(u,f):D&&D.isColor&&(x(D,1),T=!0);const N=a.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(a.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(R,T){const D=E(T);D&&(D.isCubeTexture||D.mapping===sf)?(p===void 0&&(p=new vn(new Fa(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Aa(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Zs.copy(T.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Zs)),p.material.toneMapped=St.getTransfer(D.colorSpace)!==Ut,(m!==D||g!==D.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,m=D,g=D.version,v=a.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new vn(new Ra(2,2),new lr({name:"BackgroundMaterial",uniforms:Aa(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=St.getTransfer(D.colorSpace)!==Ut,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(m!==D||g!==D.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,m=D,g=D.version,v=a.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,T){R.getRGB(Pc,_x(a)),n.buffers.color.setClear(Pc.r,Pc.g,Pc.b,T,l)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(R,T=1){u.set(R),f=T,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(u,f)},render:M,addToRenderList:y,dispose:b}}function bA(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},r=g(null);let o=r,l=!1;function u(C,z,$,K,ue){let se=!1;const q=m(K,$,z);o!==q&&(o=q,h(o.object)),se=v(C,K,$,ue),se&&E(C,K,$,ue),ue!==null&&e.update(ue,a.ELEMENT_ARRAY_BUFFER),(se||l)&&(l=!1,T(C,z,$,K),ue!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function f(){return a.createVertexArray()}function h(C){return a.bindVertexArray(C)}function p(C){return a.deleteVertexArray(C)}function m(C,z,$){const K=$.wireframe===!0;let ue=n[C.id];ue===void 0&&(ue={},n[C.id]=ue);let se=ue[z.id];se===void 0&&(se={},ue[z.id]=se);let q=se[K];return q===void 0&&(q=g(f()),se[K]=q),q}function g(C){const z=[],$=[],K=[];for(let ue=0;ue<t;ue++)z[ue]=0,$[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:K,object:C,attributes:{},index:null}}function v(C,z,$,K){const ue=o.attributes,se=z.attributes;let q=0;const ne=$.getAttributes();for(const B in ne)if(ne[B].location>=0){const oe=ue[B];let k=se[B];if(k===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;q++}return o.attributesNum!==q||o.index!==K}function E(C,z,$,K){const ue={},se=z.attributes;let q=0;const ne=$.getAttributes();for(const B in ne)if(ne[B].location>=0){let oe=se[B];oe===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),ue[B]=k,q++}o.attributes=ue,o.attributesNum=q,o.index=K}function M(){const C=o.newAttributes;for(let z=0,$=C.length;z<$;z++)C[z]=0}function y(C){x(C,0)}function x(C,z){const $=o.newAttributes,K=o.enabledAttributes,ue=o.attributeDivisors;$[C]=1,K[C]===0&&(a.enableVertexAttribArray(C),K[C]=1),ue[C]!==z&&(a.vertexAttribDivisor(C,z),ue[C]=z)}function b(){const C=o.newAttributes,z=o.enabledAttributes;for(let $=0,K=z.length;$<K;$++)z[$]!==C[$]&&(a.disableVertexAttribArray($),z[$]=0)}function R(C,z,$,K,ue,se,q){q===!0?a.vertexAttribIPointer(C,z,$,ue,se):a.vertexAttribPointer(C,z,$,K,ue,se)}function T(C,z,$,K){M();const ue=K.attributes,se=$.getAttributes(),q=z.defaultAttributeValues;for(const ne in se){const B=se[ne];if(B.location>=0){let te=ue[ne];if(te===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),te!==void 0){const oe=te.normalized,k=te.itemSize,Q=e.get(te);if(Q===void 0)continue;const be=Q.buffer,J=Q.type,fe=Q.bytesPerElement,Me=J===a.INT||J===a.UNSIGNED_INT||te.gpuType===Zp;if(te.isInterleavedBufferAttribute){const ve=te.data,Te=ve.stride,Ne=te.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<B.locationSize;Ze++)x(B.location+Ze,ve.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<B.locationSize;Ze++)y(B.location+Ze);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Ze=0;Ze<B.locationSize;Ze++)R(B.location+Ze,k/B.locationSize,J,oe,Te*fe,(Ne+k/B.locationSize*Ze)*fe,Me)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)x(B.location+ve,te.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve);a.bindBuffer(a.ARRAY_BUFFER,be);for(let ve=0;ve<B.locationSize;ve++)R(B.location+ve,k/B.locationSize,J,oe,k*fe,k/B.locationSize*ve*fe,Me)}}else if(q!==void 0){const oe=q[ne];if(oe!==void 0)switch(oe.length){case 2:a.vertexAttrib2fv(B.location,oe);break;case 3:a.vertexAttrib3fv(B.location,oe);break;case 4:a.vertexAttrib4fv(B.location,oe);break;default:a.vertexAttrib1fv(B.location,oe)}}}}b()}function D(){F();for(const C in n){const z=n[C];for(const $ in z){const K=z[$];for(const ue in K)p(K[ue].object),delete K[ue];delete z[$]}delete n[C]}}function N(C){if(n[C.id]===void 0)return;const z=n[C.id];for(const $ in z){const K=z[$];for(const ue in K)p(K[ue].object),delete K[ue];delete z[$]}delete n[C.id]}function I(C){for(const z in n){const $=n[z];if($[C.id]===void 0)continue;const K=$[C.id];for(const ue in K)p(K[ue].object),delete K[ue];delete $[C.id]}}function F(){A(),l=!0,o!==r&&(o=r,h(o.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:F,resetDefaultState:A,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:y,disableUnusedAttributes:b}}function PA(a,e,t){let n;function r(h){n=h}function o(h,p){a.drawArrays(n,h,p),t.update(p,n,1)}function l(h,p,m){m!==0&&(a.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let v=0;for(let E=0;E<m;E++)v+=p[E];t.update(v,n,1)}function f(h,p,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<h.length;E++)l(h[E],p[E],g[E]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,g,0,m);let E=0;for(let M=0;M<m;M++)E+=p[M]*g[M];t.update(E,n,1)}}this.setMode=r,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LA(a,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(I){return!(I!==bi&&n.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const F=I===$l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==kr&&n.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xi&&!F)}function f(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),R=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),D=E>0,N=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:D,maxSamples:N}}function IA(a){const e=this;let t=null,n=0,r=!1,o=!1;const l=new gs,u=new at,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||r;return r=g,n=m.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,v){const E=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,x=a.get(m);if(!r||E===null||E.length===0||o&&!y)o?p(null):h();else{const b=o?0:n,R=b*4;let T=x.clippingState||null;f.value=T,T=p(E,g,R,v);for(let D=0;D!==R;++D)T[D]=t[D];x.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,v,E){const M=m!==null?m.length:0;let y=null;if(M!==0){if(y=f.value,E!==!0||y===null){const x=v+M*4,b=g.matrixWorldInverse;u.getNormalMatrix(b),(y===null||y.length<x)&&(y=new Float32Array(x));for(let R=0,T=v;R!==M;++R,T+=4)l.copy(m[R]).applyMatrix4(b,u),l.normal.toArray(y,T),y[T+3]=l.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function DA(a){let e=new WeakMap;function t(l,u){return u===$d?l.mapping=Sa:u===Zd&&(l.mapping=Ma),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===$d||u===Zd)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new eT(f.height);return h.fromEquirectangularTexture(a,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const u=l.target;u.removeEventListener("dispose",r);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const ca=4,nv=[.125,.215,.35,.446,.526,.582],oo=20,Md=new fm,iv=new nt;let Ed=null,Td=0,wd=0,Ad=!1;const io=(1+Math.sqrt(5))/2,sa=1/io,rv=[new j(-io,sa,0),new j(io,sa,0),new j(-sa,0,io),new j(sa,0,io),new j(0,io,-sa),new j(0,io,sa),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,Td,wd),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sa||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:$l,format:bi,colorSpace:Kn,depthBuffer:!1},r=ov(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NA(o)),this._blurMaterial=UA(o,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Md)}_sceneToCubeUV(e,t,n,r){const u=new Dn(90,1,t,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(iv),p.toneMapping=Ts,p.autoClear=!1;const v=new ao({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),E=new vn(new Fa,v);let M=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,M=!0):(v.color.copy(iv),M=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):b===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const R=this._cubeSize;Lc(r,b*R,x>2?R:0,R,R),p.setRenderTarget(r),M&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Sa||e.mapping===Ma;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new vn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Lc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,Md)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=rv[(r-o-1)%rv.length];this._blur(e,o-1,o,l,u)}t.autoClear=n}_blur(e,t,n,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",o),this._halfBlur(l,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,l,u){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new vn(this._lodPlanes[r],h),g=h.uniforms,v=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*oo-1),M=o/E,y=isFinite(o)?1+Math.floor(p*M):oo;y>oo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${oo}`);const x=[];let b=0;for(let I=0;I<oo;++I){const F=I/M,A=Math.exp(-F*F/2);x.push(A),I===0?b+=A:I<y&&(b+=2*A)}for(let I=0;I<x.length;I++)x[I]=x[I]/b;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:R}=this;g.dTheta.value=E,g.mipInt.value=R-n;const T=this._sizeLods[r],D=3*T*(r>R-ca?r-R+ca:0),N=4*(this._cubeSize-T);Lc(t,D,N,3*T,2*T),f.setRenderTarget(t),f.render(m,Md)}}function NA(a){const e=[],t=[],n=[];let r=a;const o=a-ca+1+nv.length;for(let l=0;l<o;l++){const u=Math.pow(2,r);t.push(u);let f=1/u;l>a-ca?f=nv[l-a+ca-1]:l===0&&(f=0),n.push(f);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,E=6,M=3,y=2,x=1,b=new Float32Array(M*E*v),R=new Float32Array(y*E*v),T=new Float32Array(x*E*v);for(let N=0;N<v;N++){const I=N%3*2/3-1,F=N>2?0:-1,A=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];b.set(A,M*E*N),R.set(g,y*E*N);const C=[N,N,N,N,N,N];T.set(C,x*E*N)}const D=new fr;D.setAttribute("position",new qn(b,M)),D.setAttribute("uv",new qn(R,y)),D.setAttribute("faceIndex",new qn(T,x)),e.push(D),r>ca&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ov(a,e,t){const n=new Rs(a,e,t);return n.texture.mapping=sf,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lc(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function UA(a,e,t){const n=new Float32Array(oo),r=new j(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:oo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function av(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function lv(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function pm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FA(a){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const f=u.mapping,h=f===$d||f===Zd,p=f===Sa||f===Ma;if(h||p){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new sv(a)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return h&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new sv(a)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function r(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function OA(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&aa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kA(a,e,t,n){const r={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",l),delete r[g.id];const v=o.get(g);v&&(e.remove(v),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const v in g)e.update(g[v],a.ARRAY_BUFFER)}function h(m){const g=[],v=m.index,E=m.attributes.position;let M=0;if(v!==null){const b=v.array;M=v.version;for(let R=0,T=b.length;R<T;R+=3){const D=b[R+0],N=b[R+1],I=b[R+2];g.push(D,N,N,I,I,D)}}else if(E!==void 0){const b=E.array;M=E.version;for(let R=0,T=b.length/3-1;R<T;R+=3){const D=R+0,N=R+1,I=R+2;g.push(D,N,N,I,I,D)}}else return;const y=new(cx(g)?gx:mx)(g,1);y.version=M;const x=o.get(m);x&&e.remove(x),o.set(m,y)}function p(m){const g=o.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&h(m)}else h(m);return o.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function BA(a,e,t){let n;function r(g){n=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,v){a.drawElements(n,v,o,g*l),t.update(v,n,1)}function h(g,v,E){E!==0&&(a.drawElementsInstanced(n,v,o,g*l,E),t.update(v,n,E))}function p(g,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,o,g,0,E);let y=0;for(let x=0;x<E;x++)y+=v[x];t.update(y,n,1)}function m(g,v,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/l,v[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,o,g,0,M,0,E);let x=0;for(let b=0;b<E;b++)x+=v[b]*M[b];t.update(x,n,1)}}this.setMode=r,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function zA(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function VA(a,e,t){const n=new WeakMap,r=new wt;function o(l,u,f){const h=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(u);if(g===void 0||g.count!==m){let C=function(){F.dispose(),n.delete(u),u.removeEventListener("dispose",C)};var v=C;g!==void 0&&g.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let T=0;E===!0&&(T=1),M===!0&&(T=2),y===!0&&(T=3);let D=u.attributes.position.count*T,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const I=new Float32Array(D*N*4*m),F=new hx(I,D,N,m);F.type=Xi,F.needsUpdate=!0;const A=T*4;for(let z=0;z<m;z++){const $=x[z],K=b[z],ue=R[z],se=D*N*4*z;for(let q=0;q<$.count;q++){const ne=q*A;E===!0&&(r.fromBufferAttribute($,q),I[se+ne+0]=r.x,I[se+ne+1]=r.y,I[se+ne+2]=r.z,I[se+ne+3]=0),M===!0&&(r.fromBufferAttribute(K,q),I[se+ne+4]=r.x,I[se+ne+5]=r.y,I[se+ne+6]=r.z,I[se+ne+7]=0),y===!0&&(r.fromBufferAttribute(ue,q),I[se+ne+8]=r.x,I[se+ne+9]=r.y,I[se+ne+10]=r.z,I[se+ne+11]=ue.itemSize===4?r.w:1)}}g={count:m,texture:F,size:new Mt(D,N)},n.set(u,g),u.addEventListener("dispose",C)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(a,"morphTexture",l.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(a,"morphTargetBaseInfluence",M),f.getUniforms().setValue(a,"morphTargetInfluences",h)}f.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:o}}function HA(a,e,t,n){let r=new WeakMap;function o(f){const h=n.render.frame,p=f.geometry,m=e.get(f,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),r.get(f)!==h&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),r.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return m}function l(){r=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const Lx=new xn,uv=new Tx(1,1),Ix=new hx,Dx=new BE,Nx=new xx,cv=[],fv=[],hv=new Float32Array(16),dv=new Float32Array(9),pv=new Float32Array(4);function za(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let o=cv[r];if(o===void 0&&(o=new Float32Array(r),cv[r]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,a[l].toArray(o,u)}return o}function cn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function fn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function uf(a,e){let t=fv[e];t===void 0&&(t=new Int32Array(e),fv[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function GA(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function WA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;a.uniform2fv(this.addr,e),fn(t,e)}}function XA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;a.uniform3fv(this.addr,e),fn(t,e)}}function jA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;a.uniform4fv(this.addr,e),fn(t,e)}}function YA(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,n))return;pv.set(n),a.uniformMatrix2fv(this.addr,!1,pv),fn(t,n)}}function qA(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,n))return;dv.set(n),a.uniformMatrix3fv(this.addr,!1,dv),fn(t,n)}}function KA(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,n))return;hv.set(n),a.uniformMatrix4fv(this.addr,!1,hv),fn(t,n)}}function $A(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ZA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;a.uniform2iv(this.addr,e),fn(t,e)}}function QA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;a.uniform3iv(this.addr,e),fn(t,e)}}function JA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;a.uniform4iv(this.addr,e),fn(t,e)}}function eR(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function tR(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;a.uniform2uiv(this.addr,e),fn(t,e)}}function nR(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;a.uniform3uiv(this.addr,e),fn(t,e)}}function iR(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;a.uniform4uiv(this.addr,e),fn(t,e)}}function rR(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r);let o;this.type===a.SAMPLER_2D_SHADOW?(uv.compareFunction=ux,o=uv):o=Lx,t.setTexture2D(e||o,r)}function sR(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dx,r)}function oR(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Nx,r)}function aR(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ix,r)}function lR(a){switch(a){case 5126:return GA;case 35664:return WA;case 35665:return XA;case 35666:return jA;case 35674:return YA;case 35675:return qA;case 35676:return KA;case 5124:case 35670:return $A;case 35667:case 35671:return ZA;case 35668:case 35672:return QA;case 35669:case 35673:return JA;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}function uR(a,e){a.uniform1fv(this.addr,e)}function cR(a,e){const t=za(e,this.size,2);a.uniform2fv(this.addr,t)}function fR(a,e){const t=za(e,this.size,3);a.uniform3fv(this.addr,t)}function hR(a,e){const t=za(e,this.size,4);a.uniform4fv(this.addr,t)}function dR(a,e){const t=za(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function pR(a,e){const t=za(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function mR(a,e){const t=za(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function gR(a,e){a.uniform1iv(this.addr,e)}function _R(a,e){a.uniform2iv(this.addr,e)}function vR(a,e){a.uniform3iv(this.addr,e)}function xR(a,e){a.uniform4iv(this.addr,e)}function yR(a,e){a.uniform1uiv(this.addr,e)}function SR(a,e){a.uniform2uiv(this.addr,e)}function MR(a,e){a.uniform3uiv(this.addr,e)}function ER(a,e){a.uniform4uiv(this.addr,e)}function TR(a,e,t){const n=this.cache,r=e.length,o=uf(t,r);cn(n,o)||(a.uniform1iv(this.addr,o),fn(n,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Lx,o[l])}function wR(a,e,t){const n=this.cache,r=e.length,o=uf(t,r);cn(n,o)||(a.uniform1iv(this.addr,o),fn(n,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Dx,o[l])}function AR(a,e,t){const n=this.cache,r=e.length,o=uf(t,r);cn(n,o)||(a.uniform1iv(this.addr,o),fn(n,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Nx,o[l])}function RR(a,e,t){const n=this.cache,r=e.length,o=uf(t,r);cn(n,o)||(a.uniform1iv(this.addr,o),fn(n,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Ix,o[l])}function CR(a){switch(a){case 5126:return uR;case 35664:return cR;case 35665:return fR;case 35666:return hR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return vR;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return SR;case 36295:return MR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return RR}}class bR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lR(t.type)}}class PR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CR(t.type)}}class LR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const u=r[o];u.setValue(e,t[u.id],n)}}}const Rd=/(\w+)(\])?(\[|\.)?/g;function mv(a,e){a.seq.push(e),a.map[e.id]=e}function IR(a,e,t){const n=a.name,r=n.length;for(Rd.lastIndex=0;;){const o=Rd.exec(n),l=Rd.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===r){mv(t,h===void 0?new bR(u,a,e):new PR(u,a,e));break}else{let m=t.map[u];m===void 0&&(m=new LR(u),mv(t,m)),t=m}}}class zc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);IR(o,l,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,l=t.length;o!==l;++o){const u=t[o],f=n[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function gv(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const DR=37297;let NR=0;function UR(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const _v=new at;function FR(a){St._getMatrix(_v,St.workingColorSpace,a);const e=`mat3( ${_v.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(a)){case jc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function vv(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+UR(a.getShaderSource(e),l)}else return r}function OR(a,e){const t=FR(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kR(a,e){let t;switch(e){case WM:t="Linear";break;case XM:t="Reinhard";break;case jM:t="Cineon";break;case YM:t="ACESFilmic";break;case KM:t="AgX";break;case $M:t="Neutral";break;case qM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new j;function BR(){St.getLuminanceCoefficients(Ic);const a=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function VR(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HR(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=a.getActiveAttrib(e,r),l=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:a.getAttribLocation(e,l),locationSize:u}}return t}function Pl(a){return a!==""}function xv(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(a){return a.replace(GR,XR)}const WR=new Map;function XR(a,e){let t=lt[e];if(t===void 0){const n=WR.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pp(t)}const jR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(a){return a.replace(jR,YR)}function YR(a,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Mv(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qR(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===qv?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function KR(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Sa:case Ma:e="ENVMAP_TYPE_CUBE";break;case sf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $R(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ma:e="ENVMAP_MODE_REFRACTION";break}return e}function ZR(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Kv:e="ENVMAP_BLENDING_MULTIPLY";break;case HM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function QR(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function JR(a,e,t,n){const r=a.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=qR(t),h=KR(t),p=$R(t),m=ZR(t),g=QR(t),v=zR(t),E=VR(o),M=r.createProgram();let y,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pl).join(`
`),x.length>0&&(x+=`
`)):(y=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),x=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ts?"#define TONE_MAPPING":"",t.toneMapping!==Ts?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ts?kR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,OR("linearToOutputTexel",t.outputColorSpace),BR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pl).join(`
`)),l=Pp(l),l=xv(l,t),l=yv(l,t),u=Pp(u),u=xv(u,t),u=yv(u,t),l=Sv(l),u=Sv(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=b+y+l,T=b+x+u,D=gv(r,r.VERTEX_SHADER,R),N=gv(r,r.FRAGMENT_SHADER,T);r.attachShader(M,D),r.attachShader(M,N),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function I(z){if(a.debug.checkShaderErrors){const $=r.getProgramInfoLog(M).trim(),K=r.getShaderInfoLog(D).trim(),ue=r.getShaderInfoLog(N).trim();let se=!0,q=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(se=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,M,D,N);else{const ne=vv(r,D,"vertex"),B=vv(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+$+`
`+ne+`
`+B)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(K===""||ue==="")&&(q=!1);q&&(z.diagnostics={runnable:se,programLog:$,vertexShader:{log:K,prefix:y},fragmentShader:{log:ue,prefix:x}})}r.deleteShader(D),r.deleteShader(N),F=new zc(r,M),A=HR(r,M)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(M,DR)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=N,this}let eC=0;class tC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nC(e),t.set(e,n)),n}}class nC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function iC(a,e,t,n,r,o,l){const u=new dx,f=new tC,h=new Set,p=[],m=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,C,z,$,K){const ue=$.fog,se=K.geometry,q=A.isMeshStandardMaterial?$.environment:null,ne=(A.isMeshStandardMaterial?t:e).get(A.envMap||q),B=ne&&ne.mapping===sf?ne.image.height:null,te=E[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const oe=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,k=oe!==void 0?oe.length:0;let Q=0;se.morphAttributes.position!==void 0&&(Q=1),se.morphAttributes.normal!==void 0&&(Q=2),se.morphAttributes.color!==void 0&&(Q=3);let be,J,fe,Me;if(te){const Et=er[te];be=Et.vertexShader,J=Et.fragmentShader}else be=A.vertexShader,J=A.fragmentShader,f.update(A),fe=f.getVertexShaderID(A),Me=f.getFragmentShaderID(A);const ve=a.getRenderTarget(),Te=a.state.buffers.depth.getReversed(),Ne=K.isInstancedMesh===!0,Ze=K.isBatchedMesh===!0,Dt=!!A.map,_t=!!A.matcap,Ot=!!ne,H=!!A.aoMap,On=!!A.lightMap,dt=!!A.bumpMap,ct=!!A.normalMap,je=!!A.displacementMap,Lt=!!A.emissiveMap,We=!!A.metalnessMap,U=!!A.roughnessMap,P=A.anisotropy>0,ie=A.clearcoat>0,pe=A.dispersion>0,ge=A.iridescence>0,he=A.sheen>0,He=A.transmission>0,Ae=P&&!!A.anisotropyMap,Ue=ie&&!!A.clearcoatMap,ut=ie&&!!A.clearcoatNormalMap,Se=ie&&!!A.clearcoatRoughnessMap,ke=ge&&!!A.iridescenceMap,qe=ge&&!!A.iridescenceThicknessMap,Qe=he&&!!A.sheenColorMap,Be=he&&!!A.sheenRoughnessMap,ft=!!A.specularMap,it=!!A.specularColorMap,bt=!!A.specularIntensityMap,X=He&&!!A.transmissionMap,Re=He&&!!A.thicknessMap,ce=!!A.gradientMap,de=!!A.alphaMap,Le=A.alphaTest>0,Pe=!!A.alphaHash,rt=!!A.extensions;let zt=Ts;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(zt=a.toneMapping);const an={shaderID:te,shaderType:A.type,shaderName:A.name,vertexShader:be,fragmentShader:J,defines:A.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Ze,batchingColor:Ze&&K._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,instancingMorph:Ne&&K.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Kn,alphaToCoverage:!!A.alphaToCoverage,map:Dt,matcap:_t,envMap:Ot,envMapMode:Ot&&ne.mapping,envMapCubeUVHeight:B,aoMap:H,lightMap:On,bumpMap:dt,normalMap:ct,displacementMap:g&&je,emissiveMap:Lt,normalMapObjectSpace:ct&&A.normalMapType===sE,normalMapTangentSpace:ct&&A.normalMapType===lx,metalnessMap:We,roughnessMap:U,anisotropy:P,anisotropyMap:Ae,clearcoat:ie,clearcoatMap:Ue,clearcoatNormalMap:ut,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:qe,sheen:he,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:ft,specularColorMap:it,specularIntensityMap:bt,transmission:He,transmissionMap:X,thicknessMap:Re,gradientMap:ce,opaque:A.transparent===!1&&A.blending===da&&A.alphaToCoverage===!1,alphaMap:de,alphaTest:Le,alphaHash:Pe,combine:A.combine,mapUv:Dt&&M(A.map.channel),aoMapUv:H&&M(A.aoMap.channel),lightMapUv:On&&M(A.lightMap.channel),bumpMapUv:dt&&M(A.bumpMap.channel),normalMapUv:ct&&M(A.normalMap.channel),displacementMapUv:je&&M(A.displacementMap.channel),emissiveMapUv:Lt&&M(A.emissiveMap.channel),metalnessMapUv:We&&M(A.metalnessMap.channel),roughnessMapUv:U&&M(A.roughnessMap.channel),anisotropyMapUv:Ae&&M(A.anisotropyMap.channel),clearcoatMapUv:Ue&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:ut&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(A.sheenRoughnessMap.channel),specularMapUv:ft&&M(A.specularMap.channel),specularColorMapUv:it&&M(A.specularColorMap.channel),specularIntensityMapUv:bt&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:Re&&M(A.thicknessMap.channel),alphaMapUv:de&&M(A.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(ct||P),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!se.attributes.uv&&(Dt||de),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Te,skinning:K.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Q,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:zt,decodeVideoTexture:Dt&&A.map.isVideoTexture===!0&&St.getTransfer(A.map.colorSpace)===Ut,decodeVideoTextureEmissive:Lt&&A.emissiveMap.isVideoTexture===!0&&St.getTransfer(A.emissiveMap.colorSpace)===Ut,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===tr,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:rt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&A.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return an.vertexUv1s=h.has(1),an.vertexUv2s=h.has(2),an.vertexUv3s=h.has(3),h.clear(),an}function x(A){const C=[];if(A.shaderID?C.push(A.shaderID):(C.push(A.customVertexShaderID),C.push(A.customFragmentShaderID)),A.defines!==void 0)for(const z in A.defines)C.push(z),C.push(A.defines[z]);return A.isRawShaderMaterial===!1&&(b(C,A),R(C,A),C.push(a.outputColorSpace)),C.push(A.customProgramCacheKey),C.join()}function b(A,C){A.push(C.precision),A.push(C.outputColorSpace),A.push(C.envMapMode),A.push(C.envMapCubeUVHeight),A.push(C.mapUv),A.push(C.alphaMapUv),A.push(C.lightMapUv),A.push(C.aoMapUv),A.push(C.bumpMapUv),A.push(C.normalMapUv),A.push(C.displacementMapUv),A.push(C.emissiveMapUv),A.push(C.metalnessMapUv),A.push(C.roughnessMapUv),A.push(C.anisotropyMapUv),A.push(C.clearcoatMapUv),A.push(C.clearcoatNormalMapUv),A.push(C.clearcoatRoughnessMapUv),A.push(C.iridescenceMapUv),A.push(C.iridescenceThicknessMapUv),A.push(C.sheenColorMapUv),A.push(C.sheenRoughnessMapUv),A.push(C.specularMapUv),A.push(C.specularColorMapUv),A.push(C.specularIntensityMapUv),A.push(C.transmissionMapUv),A.push(C.thicknessMapUv),A.push(C.combine),A.push(C.fogExp2),A.push(C.sizeAttenuation),A.push(C.morphTargetsCount),A.push(C.morphAttributeCount),A.push(C.numDirLights),A.push(C.numPointLights),A.push(C.numSpotLights),A.push(C.numSpotLightMaps),A.push(C.numHemiLights),A.push(C.numRectAreaLights),A.push(C.numDirLightShadows),A.push(C.numPointLightShadows),A.push(C.numSpotLightShadows),A.push(C.numSpotLightShadowsWithMaps),A.push(C.numLightProbes),A.push(C.shadowMapType),A.push(C.toneMapping),A.push(C.numClippingPlanes),A.push(C.numClipIntersection),A.push(C.depthPacking)}function R(A,C){u.disableAll(),C.supportsVertexTextures&&u.enable(0),C.instancing&&u.enable(1),C.instancingColor&&u.enable(2),C.instancingMorph&&u.enable(3),C.matcap&&u.enable(4),C.envMap&&u.enable(5),C.normalMapObjectSpace&&u.enable(6),C.normalMapTangentSpace&&u.enable(7),C.clearcoat&&u.enable(8),C.iridescence&&u.enable(9),C.alphaTest&&u.enable(10),C.vertexColors&&u.enable(11),C.vertexAlphas&&u.enable(12),C.vertexUv1s&&u.enable(13),C.vertexUv2s&&u.enable(14),C.vertexUv3s&&u.enable(15),C.vertexTangents&&u.enable(16),C.anisotropy&&u.enable(17),C.alphaHash&&u.enable(18),C.batching&&u.enable(19),C.dispersion&&u.enable(20),C.batchingColor&&u.enable(21),A.push(u.mask),u.disableAll(),C.fog&&u.enable(0),C.useFog&&u.enable(1),C.flatShading&&u.enable(2),C.logarithmicDepthBuffer&&u.enable(3),C.reverseDepthBuffer&&u.enable(4),C.skinning&&u.enable(5),C.morphTargets&&u.enable(6),C.morphNormals&&u.enable(7),C.morphColors&&u.enable(8),C.premultipliedAlpha&&u.enable(9),C.shadowMapEnabled&&u.enable(10),C.doubleSided&&u.enable(11),C.flipSided&&u.enable(12),C.useDepthPacking&&u.enable(13),C.dithering&&u.enable(14),C.transmission&&u.enable(15),C.sheen&&u.enable(16),C.opaque&&u.enable(17),C.pointsUvs&&u.enable(18),C.decodeVideoTexture&&u.enable(19),C.decodeVideoTextureEmissive&&u.enable(20),C.alphaToCoverage&&u.enable(21),A.push(u.mask)}function T(A){const C=E[A.type];let z;if(C){const $=er[C];z=qc.clone($.uniforms)}else z=A.uniforms;return z}function D(A,C){let z;for(let $=0,K=p.length;$<K;$++){const ue=p[$];if(ue.cacheKey===C){z=ue,++z.usedTimes;break}}return z===void 0&&(z=new JR(a,C,A,o),p.push(z)),z}function N(A){if(--A.usedTimes===0){const C=p.indexOf(A);p[C]=p[p.length-1],p.pop(),A.destroy()}}function I(A){f.remove(A)}function F(){f.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:T,acquireProgram:D,releaseProgram:N,releaseShaderCache:I,programs:p,dispose:F}}function rC(){let a=new WeakMap;function e(l){return a.has(l)}function t(l){let u=a.get(l);return u===void 0&&(u={},a.set(l,u)),u}function n(l){a.delete(l)}function r(l,u,f){a.get(l)[u]=f}function o(){a=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function sC(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Ev(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Tv(){const a=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function l(m,g,v,E,M,y){let x=a[e];return x===void 0?(x={id:m.id,object:m,geometry:g,material:v,groupOrder:E,renderOrder:m.renderOrder,z:M,group:y},a[e]=x):(x.id=m.id,x.object=m,x.geometry=g,x.material=v,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=M,x.group=y),e++,x}function u(m,g,v,E,M,y){const x=l(m,g,v,E,M,y);v.transmission>0?n.push(x):v.transparent===!0?r.push(x):t.push(x)}function f(m,g,v,E,M,y){const x=l(m,g,v,E,M,y);v.transmission>0?n.unshift(x):v.transparent===!0?r.unshift(x):t.unshift(x)}function h(m,g){t.length>1&&t.sort(m||sC),n.length>1&&n.sort(g||Ev),r.length>1&&r.sort(g||Ev)}function p(){for(let m=e,g=a.length;m<g;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:u,unshift:f,finish:p,sort:h}}function oC(){let a=new WeakMap;function e(n,r){const o=a.get(n);let l;return o===void 0?(l=new Tv,a.set(n,[l])):r>=o.length?(l=new Tv,o.push(l)):l=o[r],l}function t(){a=new WeakMap}return{get:e,dispose:t}}function aC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new nt};break;case"SpotLight":t={position:new j,direction:new j,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new j,halfWidth:new j,halfHeight:new j};break}return a[e.id]=t,t}}}function lC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let uC=0;function cC(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function fC(a){const e=new aC,t=lC(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new j);const r=new j,o=new ot,l=new ot;function u(h){let p=0,m=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let v=0,E=0,M=0,y=0,x=0,b=0,R=0,T=0,D=0,N=0,I=0;h.sort(cC);for(let A=0,C=h.length;A<C;A++){const z=h[A],$=z.color,K=z.intensity,ue=z.distance,se=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=$.r*K,m+=$.g*K,g+=$.b*K;else if(z.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(z.sh.coefficients[q],K);I++}else if(z.isDirectionalLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ne=z.shadow,B=t.get(z);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,n.directionalShadow[v]=B,n.directionalShadowMap[v]=se,n.directionalShadowMatrix[v]=z.shadow.matrix,b++}n.directional[v]=q,v++}else if(z.isSpotLight){const q=e.get(z);q.position.setFromMatrixPosition(z.matrixWorld),q.color.copy($).multiplyScalar(K),q.distance=ue,q.coneCos=Math.cos(z.angle),q.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),q.decay=z.decay,n.spot[M]=q;const ne=z.shadow;if(z.map&&(n.spotLightMap[D]=z.map,D++,ne.updateMatrices(z),z.castShadow&&N++),n.spotLightMatrix[M]=ne.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,n.spotShadow[M]=B,n.spotShadowMap[M]=se,T++}M++}else if(z.isRectAreaLight){const q=e.get(z);q.color.copy($).multiplyScalar(K),q.halfWidth.set(z.width*.5,0,0),q.halfHeight.set(0,z.height*.5,0),n.rectArea[y]=q,y++}else if(z.isPointLight){const q=e.get(z);if(q.color.copy(z.color).multiplyScalar(z.intensity),q.distance=z.distance,q.decay=z.decay,z.castShadow){const ne=z.shadow,B=t.get(z);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,B.shadowCameraNear=ne.camera.near,B.shadowCameraFar=ne.camera.far,n.pointShadow[E]=B,n.pointShadowMap[E]=se,n.pointShadowMatrix[E]=z.shadow.matrix,R++}n.point[E]=q,E++}else if(z.isHemisphereLight){const q=e.get(z);q.skyColor.copy(z.color).multiplyScalar(K),q.groundColor.copy(z.groundColor).multiplyScalar(K),n.hemi[x]=q,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==v||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==b||F.numPointShadows!==R||F.numSpotShadows!==T||F.numSpotMaps!==D||F.numLightProbes!==I)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=y,n.point.length=E,n.hemi.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=T+D-N,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,F.directionalLength=v,F.pointLength=E,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=b,F.numPointShadows=R,F.numSpotShadows=T,F.numSpotMaps=D,F.numLightProbes=I,n.version=uC++)}function f(h,p){let m=0,g=0,v=0,E=0,M=0;const y=p.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){const R=h[x];if(R.isDirectionalLight){const T=n.directional[m];T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(y),m++}else if(R.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(y),v++}else if(R.isRectAreaLight){const T=n.rectArea[E];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),l.identity(),o.copy(R.matrixWorld),o.premultiply(y),l.extractRotation(o),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),E++}else if(R.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),g++}else if(R.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(y),M++}}}return{setup:u,setupView:f,state:n}}function wv(a){const e=new fC(a),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function l(p){n.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function hC(a){let e=new WeakMap;function t(r,o=0){const l=e.get(r);let u;return l===void 0?(u=new wv(a),e.set(r,[u])):o>=l.length?(u=new wv(a),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mC(a,e,t){let n=new lm;const r=new Mt,o=new Mt,l=new wt,u=new dT({depthPacking:rE}),f=new pT,h={},p=t.maxTextureSize,m={[or]:jn,[jn]:or,[tr]:tr},g=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const E=new fr;E.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new vn(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let x=this.type;this.render=function(N,I,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const A=a.getRenderTarget(),C=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),$=a.state;$.setBlending(Es),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=x!==Pr&&this.type===Pr,ue=x===Pr&&this.type!==Pr;for(let se=0,q=N.length;se<q;se++){const ne=N[se],B=ne.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const te=B.getFrameExtents();if(r.multiply(te),o.copy(B.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/te.x),r.x=o.x*te.x,B.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/te.y),r.y=o.y*te.y,B.mapSize.y=o.y)),B.map===null||K===!0||ue===!0){const k=this.type!==Pr?{minFilter:Yn,magFilter:Yn}:{};B.map!==null&&B.map.dispose(),B.map=new Rs(r.x,r.y,k),B.map.texture.name=ne.name+".shadowMap",B.camera.updateProjectionMatrix()}a.setRenderTarget(B.map),a.clear();const oe=B.getViewportCount();for(let k=0;k<oe;k++){const Q=B.getViewport(k);l.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),$.viewport(l),B.updateMatrices(ne,k),n=B.getFrustum(),T(I,F,B.camera,ne,this.type)}B.isPointLightShadow!==!0&&this.type===Pr&&b(B,F),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(A,C,z)};function b(N,I){const F=e.update(M);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Rs(r.x,r.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(I,null,F,g,M,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(I,null,F,v,M,null)}function R(N,I,F,A){let C=null;const z=F.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)C=z;else if(C=F.isPointLight===!0?f:u,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const $=C.uuid,K=I.uuid;let ue=h[$];ue===void 0&&(ue={},h[$]=ue);let se=ue[K];se===void 0&&(se=C.clone(),ue[K]=se,I.addEventListener("dispose",D)),C=se}if(C.visible=I.visible,C.wireframe=I.wireframe,A===Pr?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:m[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=a.properties.get(C);$.light=F}return C}function T(N,I,F,A,C){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===Pr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,N.matrixWorld);const K=e.update(N),ue=N.material;if(Array.isArray(ue)){const se=K.groups;for(let q=0,ne=se.length;q<ne;q++){const B=se[q],te=ue[B.materialIndex];if(te&&te.visible){const oe=R(N,te,A,C);N.onBeforeShadow(a,N,I,F,K,oe,B),a.renderBufferDirect(F,null,K,oe,N,B),N.onAfterShadow(a,N,I,F,K,oe,B)}}}else if(ue.visible){const se=R(N,ue,A,C);N.onBeforeShadow(a,N,I,F,K,se,null),a.renderBufferDirect(F,null,K,se,N,null),N.onAfterShadow(a,N,I,F,K,se,null)}}const $=N.children;for(let K=0,ue=$.length;K<ue;K++)T($[K],I,F,A,C)}function D(N){N.target.removeEventListener("dispose",D);for(const F in h){const A=h[F],C=N.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}const gC={[Gd]:Wd,[Xd]:qd,[jd]:Kd,[ya]:Yd,[Wd]:Gd,[qd]:Xd,[Kd]:jd,[Yd]:ya};function _C(a,e){function t(){let X=!1;const Re=new wt;let ce=null;const de=new wt(0,0,0,0);return{setMask:function(Le){ce!==Le&&!X&&(a.colorMask(Le,Le,Le,Le),ce=Le)},setLocked:function(Le){X=Le},setClear:function(Le,Pe,rt,zt,an){an===!0&&(Le*=zt,Pe*=zt,rt*=zt),Re.set(Le,Pe,rt,zt),de.equals(Re)===!1&&(a.clearColor(Le,Pe,rt,zt),de.copy(Re))},reset:function(){X=!1,ce=null,de.set(-1,0,0,0)}}}function n(){let X=!1,Re=!1,ce=null,de=null,Le=null;return{setReversed:function(Pe){if(Re!==Pe){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const zt=Le;Le=null,this.setClear(zt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?ve(a.DEPTH_TEST):Te(a.DEPTH_TEST)},setMask:function(Pe){ce!==Pe&&!X&&(a.depthMask(Pe),ce=Pe)},setFunc:function(Pe){if(Re&&(Pe=gC[Pe]),de!==Pe){switch(Pe){case Gd:a.depthFunc(a.NEVER);break;case Wd:a.depthFunc(a.ALWAYS);break;case Xd:a.depthFunc(a.LESS);break;case ya:a.depthFunc(a.LEQUAL);break;case jd:a.depthFunc(a.EQUAL);break;case Yd:a.depthFunc(a.GEQUAL);break;case qd:a.depthFunc(a.GREATER);break;case Kd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}de=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){Le!==Pe&&(Re&&(Pe=1-Pe),a.clearDepth(Pe),Le=Pe)},reset:function(){X=!1,ce=null,de=null,Le=null,Re=!1}}}function r(){let X=!1,Re=null,ce=null,de=null,Le=null,Pe=null,rt=null,zt=null,an=null;return{setTest:function(Et){X||(Et?ve(a.STENCIL_TEST):Te(a.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!X&&(a.stencilMask(Et),Re=Et)},setFunc:function(Et,$n,kn){(ce!==Et||de!==$n||Le!==kn)&&(a.stencilFunc(Et,$n,kn),ce=Et,de=$n,Le=kn)},setOp:function(Et,$n,kn){(Pe!==Et||rt!==$n||zt!==kn)&&(a.stencilOp(Et,$n,kn),Pe=Et,rt=$n,zt=kn)},setLocked:function(Et){X=Et},setClear:function(Et){an!==Et&&(a.clearStencil(Et),an=Et)},reset:function(){X=!1,Re=null,ce=null,de=null,Le=null,Pe=null,rt=null,zt=null,an=null}}}const o=new t,l=new n,u=new r,f=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,v=[],E=null,M=!1,y=null,x=null,b=null,R=null,T=null,D=null,N=null,I=new nt(0,0,0),F=0,A=!1,C=null,z=null,$=null,K=null,ue=null;const se=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ne=0;const B=a.getParameter(a.VERSION);B.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=ne>=1):B.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=ne>=2);let te=null,oe={};const k=a.getParameter(a.SCISSOR_BOX),Q=a.getParameter(a.VIEWPORT),be=new wt().fromArray(k),J=new wt().fromArray(Q);function fe(X,Re,ce,de){const Le=new Uint8Array(4),Pe=a.createTexture();a.bindTexture(X,Pe),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let rt=0;rt<ce;rt++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,de,0,a.RGBA,a.UNSIGNED_BYTE,Le):a.texImage2D(Re+rt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Le);return Pe}const Me={};Me[a.TEXTURE_2D]=fe(a.TEXTURE_2D,a.TEXTURE_2D,1),Me[a.TEXTURE_CUBE_MAP]=fe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[a.TEXTURE_2D_ARRAY]=fe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Me[a.TEXTURE_3D]=fe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(a.DEPTH_TEST),l.setFunc(ya),dt(!1),ct(u0),ve(a.CULL_FACE),H(Es);function ve(X){p[X]!==!0&&(a.enable(X),p[X]=!0)}function Te(X){p[X]!==!1&&(a.disable(X),p[X]=!1)}function Ne(X,Re){return m[X]!==Re?(a.bindFramebuffer(X,Re),m[X]=Re,X===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Re),X===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ze(X,Re){let ce=v,de=!1;if(X){ce=g.get(Re),ce===void 0&&(ce=[],g.set(Re,ce));const Le=X.textures;if(ce.length!==Le.length||ce[0]!==a.COLOR_ATTACHMENT0){for(let Pe=0,rt=Le.length;Pe<rt;Pe++)ce[Pe]=a.COLOR_ATTACHMENT0+Pe;ce.length=Le.length,de=!0}}else ce[0]!==a.BACK&&(ce[0]=a.BACK,de=!0);de&&a.drawBuffers(ce)}function Dt(X){return E!==X?(a.useProgram(X),E=X,!0):!1}const _t={[so]:a.FUNC_ADD,[wM]:a.FUNC_SUBTRACT,[AM]:a.FUNC_REVERSE_SUBTRACT};_t[RM]=a.MIN,_t[CM]=a.MAX;const Ot={[bM]:a.ZERO,[PM]:a.ONE,[LM]:a.SRC_COLOR,[Vd]:a.SRC_ALPHA,[OM]:a.SRC_ALPHA_SATURATE,[UM]:a.DST_COLOR,[DM]:a.DST_ALPHA,[IM]:a.ONE_MINUS_SRC_COLOR,[Hd]:a.ONE_MINUS_SRC_ALPHA,[FM]:a.ONE_MINUS_DST_COLOR,[NM]:a.ONE_MINUS_DST_ALPHA,[kM]:a.CONSTANT_COLOR,[BM]:a.ONE_MINUS_CONSTANT_COLOR,[zM]:a.CONSTANT_ALPHA,[VM]:a.ONE_MINUS_CONSTANT_ALPHA};function H(X,Re,ce,de,Le,Pe,rt,zt,an,Et){if(X===Es){M===!0&&(Te(a.BLEND),M=!1);return}if(M===!1&&(ve(a.BLEND),M=!0),X!==TM){if(X!==y||Et!==A){if((x!==so||T!==so)&&(a.blendEquation(a.FUNC_ADD),x=so,T=so),Et)switch(X){case da:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case c0:a.blendFunc(a.ONE,a.ONE);break;case f0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case h0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case da:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case c0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case f0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case h0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}b=null,R=null,D=null,N=null,I.set(0,0,0),F=0,y=X,A=Et}return}Le=Le||Re,Pe=Pe||ce,rt=rt||de,(Re!==x||Le!==T)&&(a.blendEquationSeparate(_t[Re],_t[Le]),x=Re,T=Le),(ce!==b||de!==R||Pe!==D||rt!==N)&&(a.blendFuncSeparate(Ot[ce],Ot[de],Ot[Pe],Ot[rt]),b=ce,R=de,D=Pe,N=rt),(zt.equals(I)===!1||an!==F)&&(a.blendColor(zt.r,zt.g,zt.b,an),I.copy(zt),F=an),y=X,A=!1}function On(X,Re){X.side===tr?Te(a.CULL_FACE):ve(a.CULL_FACE);let ce=X.side===jn;Re&&(ce=!ce),dt(ce),X.blending===da&&X.transparent===!1?H(Es):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),o.setMask(X.colorWrite);const de=X.stencilWrite;u.setTest(de),de&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):Te(a.SAMPLE_ALPHA_TO_COVERAGE)}function dt(X){C!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),C=X)}function ct(X){X!==MM?(ve(a.CULL_FACE),X!==z&&(X===u0?a.cullFace(a.BACK):X===EM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Te(a.CULL_FACE),z=X}function je(X){X!==$&&(q&&a.lineWidth(X),$=X)}function Lt(X,Re,ce){X?(ve(a.POLYGON_OFFSET_FILL),(K!==Re||ue!==ce)&&(a.polygonOffset(Re,ce),K=Re,ue=ce)):Te(a.POLYGON_OFFSET_FILL)}function We(X){X?ve(a.SCISSOR_TEST):Te(a.SCISSOR_TEST)}function U(X){X===void 0&&(X=a.TEXTURE0+se-1),te!==X&&(a.activeTexture(X),te=X)}function P(X,Re,ce){ce===void 0&&(te===null?ce=a.TEXTURE0+se-1:ce=te);let de=oe[ce];de===void 0&&(de={type:void 0,texture:void 0},oe[ce]=de),(de.type!==X||de.texture!==Re)&&(te!==ce&&(a.activeTexture(ce),te=ce),a.bindTexture(X,Re||Me[X]),de.type=X,de.texture=Re)}function ie(){const X=oe[te];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{a.compressedTexImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{a.compressedTexImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{a.texSubImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{a.texSubImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{a.texStorage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{a.texStorage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{a.texImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{a.texImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){be.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),be.copy(X))}function Be(X){J.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ft(X,Re){let ce=h.get(Re);ce===void 0&&(ce=new WeakMap,h.set(Re,ce));let de=ce.get(X);de===void 0&&(de=a.getUniformBlockIndex(Re,X.name),ce.set(X,de))}function it(X,Re){const de=h.get(Re).get(X);f.get(Re)!==de&&(a.uniformBlockBinding(Re,de,X.__bindingPointIndex),f.set(Re,de))}function bt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),l.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),p={},te=null,oe={},m={},g=new WeakMap,v=[],E=null,M=!1,y=null,x=null,b=null,R=null,T=null,D=null,N=null,I=new nt(0,0,0),F=0,A=!1,C=null,z=null,$=null,K=null,ue=null,be.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ve,disable:Te,bindFramebuffer:Ne,drawBuffers:Ze,useProgram:Dt,setBlending:H,setMaterial:On,setFlipSided:dt,setCullFace:ct,setLineWidth:je,setPolygonOffset:Lt,setScissorTest:We,activeTexture:U,bindTexture:P,unbindTexture:ie,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:qe,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Se,texSubImage2D:he,texSubImage3D:He,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ue,scissor:Qe,viewport:Be,reset:bt}}function vC(a,e,t,n,r,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,P){return v?new OffscreenCanvas(U,P):Hl("canvas")}function M(U,P,ie){let pe=1;const ge=We(U);if((ge.width>ie||ge.height>ie)&&(pe=ie/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const he=Math.floor(pe*ge.width),He=Math.floor(pe*ge.height);m===void 0&&(m=E(he,He));const Ae=P?E(he,He):m;return Ae.width=he,Ae.height=He,Ae.getContext("2d").drawImage(U,0,0,he,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+he+"x"+He+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){a.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(U,P,ie,pe,ge=!1){if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let he=P;if(P===a.RED&&(ie===a.FLOAT&&(he=a.R32F),ie===a.HALF_FLOAT&&(he=a.R16F),ie===a.UNSIGNED_BYTE&&(he=a.R8)),P===a.RED_INTEGER&&(ie===a.UNSIGNED_BYTE&&(he=a.R8UI),ie===a.UNSIGNED_SHORT&&(he=a.R16UI),ie===a.UNSIGNED_INT&&(he=a.R32UI),ie===a.BYTE&&(he=a.R8I),ie===a.SHORT&&(he=a.R16I),ie===a.INT&&(he=a.R32I)),P===a.RG&&(ie===a.FLOAT&&(he=a.RG32F),ie===a.HALF_FLOAT&&(he=a.RG16F),ie===a.UNSIGNED_BYTE&&(he=a.RG8)),P===a.RG_INTEGER&&(ie===a.UNSIGNED_BYTE&&(he=a.RG8UI),ie===a.UNSIGNED_SHORT&&(he=a.RG16UI),ie===a.UNSIGNED_INT&&(he=a.RG32UI),ie===a.BYTE&&(he=a.RG8I),ie===a.SHORT&&(he=a.RG16I),ie===a.INT&&(he=a.RG32I)),P===a.RGB_INTEGER&&(ie===a.UNSIGNED_BYTE&&(he=a.RGB8UI),ie===a.UNSIGNED_SHORT&&(he=a.RGB16UI),ie===a.UNSIGNED_INT&&(he=a.RGB32UI),ie===a.BYTE&&(he=a.RGB8I),ie===a.SHORT&&(he=a.RGB16I),ie===a.INT&&(he=a.RGB32I)),P===a.RGBA_INTEGER&&(ie===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),ie===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),ie===a.UNSIGNED_INT&&(he=a.RGBA32UI),ie===a.BYTE&&(he=a.RGBA8I),ie===a.SHORT&&(he=a.RGBA16I),ie===a.INT&&(he=a.RGBA32I)),P===a.RGB&&ie===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),P===a.RGBA){const He=ge?jc:St.getTransfer(pe);ie===a.FLOAT&&(he=a.RGBA32F),ie===a.HALF_FLOAT&&(he=a.RGBA16F),ie===a.UNSIGNED_BYTE&&(he=He===Ut?a.SRGB8_ALPHA8:a.RGBA8),ie===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),ie===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function T(U,P){let ie;return U?P===null||P===go||P===Ea?ie=a.DEPTH24_STENCIL8:P===Xi?ie=a.DEPTH32F_STENCIL8:P===Bl&&(ie=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===go||P===Ea?ie=a.DEPTH_COMPONENT24:P===Xi?ie=a.DEPTH_COMPONENT32F:P===Bl&&(ie=a.DEPTH_COMPONENT16),ie}function D(U,P){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Yn&&U.minFilter!==gi?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function N(U){const P=U.target;P.removeEventListener("dispose",N),F(P),P.isVideoTexture&&p.delete(P)}function I(U){const P=U.target;P.removeEventListener("dispose",I),C(P)}function F(U){const P=n.get(U);if(P.__webglInit===void 0)return;const ie=U.source,pe=g.get(ie);if(pe){const ge=pe[P.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&A(U),Object.keys(pe).length===0&&g.delete(ie)}n.remove(U)}function A(U){const P=n.get(U);a.deleteTexture(P.__webglTexture);const ie=U.source,pe=g.get(ie);delete pe[P.__cacheKey],l.memory.textures--}function C(U){const P=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(P.__webglFramebuffer[pe]))for(let ge=0;ge<P.__webglFramebuffer[pe].length;ge++)a.deleteFramebuffer(P.__webglFramebuffer[pe][ge]);else a.deleteFramebuffer(P.__webglFramebuffer[pe]);P.__webglDepthbuffer&&a.deleteRenderbuffer(P.__webglDepthbuffer[pe])}else{if(Array.isArray(P.__webglFramebuffer))for(let pe=0;pe<P.__webglFramebuffer.length;pe++)a.deleteFramebuffer(P.__webglFramebuffer[pe]);else a.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&a.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&a.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let pe=0;pe<P.__webglColorRenderbuffer.length;pe++)P.__webglColorRenderbuffer[pe]&&a.deleteRenderbuffer(P.__webglColorRenderbuffer[pe]);P.__webglDepthRenderbuffer&&a.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ie=U.textures;for(let pe=0,ge=ie.length;pe<ge;pe++){const he=n.get(ie[pe]);he.__webglTexture&&(a.deleteTexture(he.__webglTexture),l.memory.textures--),n.remove(ie[pe])}n.remove(U)}let z=0;function $(){z=0}function K(){const U=z;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),z+=1,U}function ue(U){const P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function se(U,P){const ie=n.get(U);if(U.isVideoTexture&&je(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ie,U,P);return}}t.bindTexture(a.TEXTURE_2D,ie.__webglTexture,a.TEXTURE0+P)}function q(U,P){const ie=n.get(U);if(U.version>0&&ie.__version!==U.version){J(ie,U,P);return}t.bindTexture(a.TEXTURE_2D_ARRAY,ie.__webglTexture,a.TEXTURE0+P)}function ne(U,P){const ie=n.get(U);if(U.version>0&&ie.__version!==U.version){J(ie,U,P);return}t.bindTexture(a.TEXTURE_3D,ie.__webglTexture,a.TEXTURE0+P)}function B(U,P){const ie=n.get(U);if(U.version>0&&ie.__version!==U.version){fe(ie,U,P);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ie.__webglTexture,a.TEXTURE0+P)}const te={[mo]:a.REPEAT,[vs]:a.CLAMP_TO_EDGE,[Wc]:a.MIRRORED_REPEAT},oe={[Yn]:a.NEAREST,[Zv]:a.NEAREST_MIPMAP_NEAREST,[bl]:a.NEAREST_MIPMAP_LINEAR,[gi]:a.LINEAR,[Nc]:a.LINEAR_MIPMAP_NEAREST,[Nr]:a.LINEAR_MIPMAP_LINEAR},k={[oE]:a.NEVER,[hE]:a.ALWAYS,[aE]:a.LESS,[ux]:a.LEQUAL,[lE]:a.EQUAL,[fE]:a.GEQUAL,[uE]:a.GREATER,[cE]:a.NOTEQUAL};function Q(U,P){if(P.type===Xi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===gi||P.magFilter===Nc||P.magFilter===bl||P.magFilter===Nr||P.minFilter===gi||P.minFilter===Nc||P.minFilter===bl||P.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,te[P.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,te[P.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,te[P.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,oe[P.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,oe[P.minFilter]),P.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,k[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Yn||P.minFilter!==bl&&P.minFilter!==Nr||P.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function be(U,P){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",N));const pe=P.source;let ge=g.get(pe);ge===void 0&&(ge={},g.set(pe,ge));const he=ue(P);if(he!==U.__cacheKey){ge[he]===void 0&&(ge[he]={texture:a.createTexture(),usedTimes:0},l.memory.textures++,ie=!0),ge[he].usedTimes++;const He=ge[U.__cacheKey];He!==void 0&&(ge[U.__cacheKey].usedTimes--,He.usedTimes===0&&A(P)),U.__cacheKey=he,U.__webglTexture=ge[he].texture}return ie}function J(U,P,ie){let pe=a.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(pe=a.TEXTURE_2D_ARRAY),P.isData3DTexture&&(pe=a.TEXTURE_3D);const ge=be(U,P),he=P.source;t.bindTexture(pe,U.__webglTexture,a.TEXTURE0+ie);const He=n.get(he);if(he.version!==He.__version||ge===!0){t.activeTexture(a.TEXTURE0+ie);const Ae=St.getPrimaries(St.workingColorSpace),Ue=P.colorSpace===_s?null:St.getPrimaries(P.colorSpace),ut=P.colorSpace===_s||Ae===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,P.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,P.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Se=M(P.image,!1,r.maxTextureSize);Se=Lt(P,Se);const ke=o.convert(P.format,P.colorSpace),qe=o.convert(P.type);let Qe=R(P.internalFormat,ke,qe,P.colorSpace,P.isVideoTexture);Q(pe,P);let Be;const ft=P.mipmaps,it=P.isVideoTexture!==!0,bt=He.__version===void 0||ge===!0,X=he.dataReady,Re=D(P,Se);if(P.isDepthTexture)Qe=T(P.format===Ta,P.type),bt&&(it?t.texStorage2D(a.TEXTURE_2D,1,Qe,Se.width,Se.height):t.texImage2D(a.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,null));else if(P.isDataTexture)if(ft.length>0){it&&bt&&t.texStorage2D(a.TEXTURE_2D,Re,Qe,ft[0].width,ft[0].height);for(let ce=0,de=ft.length;ce<de;ce++)Be=ft[ce],it?X&&t.texSubImage2D(a.TEXTURE_2D,ce,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(a.TEXTURE_2D,ce,Qe,Be.width,Be.height,0,ke,qe,Be.data);P.generateMipmaps=!1}else it?(bt&&t.texStorage2D(a.TEXTURE_2D,Re,Qe,Se.width,Se.height),X&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,qe,Se.data)):t.texImage2D(a.TEXTURE_2D,0,Qe,Se.width,Se.height,0,ke,qe,Se.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){it&&bt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Qe,ft[0].width,ft[0].height,Se.depth);for(let ce=0,de=ft.length;ce<de;ce++)if(Be=ft[ce],P.format!==bi)if(ke!==null)if(it){if(X)if(P.layerUpdates.size>0){const Le=tv(Be.width,Be.height,P.format,P.type);for(const Pe of P.layerUpdates){const rt=Be.data.subarray(Pe*Le/Be.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,Pe,Be.width,Be.height,1,ke,rt)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ce,Qe,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ce,0,0,0,Be.width,Be.height,Se.depth,ke,qe,Be.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ce,Qe,Be.width,Be.height,Se.depth,0,ke,qe,Be.data)}else{it&&bt&&t.texStorage2D(a.TEXTURE_2D,Re,Qe,ft[0].width,ft[0].height);for(let ce=0,de=ft.length;ce<de;ce++)Be=ft[ce],P.format!==bi?ke!==null?it?X&&t.compressedTexSubImage2D(a.TEXTURE_2D,ce,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(a.TEXTURE_2D,ce,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(a.TEXTURE_2D,ce,0,0,Be.width,Be.height,ke,qe,Be.data):t.texImage2D(a.TEXTURE_2D,ce,Qe,Be.width,Be.height,0,ke,qe,Be.data)}else if(P.isDataArrayTexture)if(it){if(bt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Qe,Se.width,Se.height,Se.depth),X)if(P.layerUpdates.size>0){const ce=tv(Se.width,Se.height,P.format,P.type);for(const de of P.layerUpdates){const Le=Se.data.subarray(de*ce/Se.data.BYTES_PER_ELEMENT,(de+1)*ce/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,ke,qe,Le)}P.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(P.isData3DTexture)it?(bt&&t.texStorage3D(a.TEXTURE_3D,Re,Qe,Se.width,Se.height,Se.depth),X&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,qe,Se.data)):t.texImage3D(a.TEXTURE_3D,0,Qe,Se.width,Se.height,Se.depth,0,ke,qe,Se.data);else if(P.isFramebufferTexture){if(bt)if(it)t.texStorage2D(a.TEXTURE_2D,Re,Qe,Se.width,Se.height);else{let ce=Se.width,de=Se.height;for(let Le=0;Le<Re;Le++)t.texImage2D(a.TEXTURE_2D,Le,Qe,ce,de,0,ke,qe,null),ce>>=1,de>>=1}}else if(ft.length>0){if(it&&bt){const ce=We(ft[0]);t.texStorage2D(a.TEXTURE_2D,Re,Qe,ce.width,ce.height)}for(let ce=0,de=ft.length;ce<de;ce++)Be=ft[ce],it?X&&t.texSubImage2D(a.TEXTURE_2D,ce,0,0,ke,qe,Be):t.texImage2D(a.TEXTURE_2D,ce,Qe,ke,qe,Be);P.generateMipmaps=!1}else if(it){if(bt){const ce=We(Se);t.texStorage2D(a.TEXTURE_2D,Re,Qe,ce.width,ce.height)}X&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ke,qe,Se)}else t.texImage2D(a.TEXTURE_2D,0,Qe,ke,qe,Se);y(P)&&x(pe),He.__version=he.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function fe(U,P,ie){if(P.image.length!==6)return;const pe=be(U,P),ge=P.source;t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+ie);const he=n.get(ge);if(ge.version!==he.__version||pe===!0){t.activeTexture(a.TEXTURE0+ie);const He=St.getPrimaries(St.workingColorSpace),Ae=P.colorSpace===_s?null:St.getPrimaries(P.colorSpace),Ue=P.colorSpace===_s||He===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,P.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,P.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ut=P.isCompressedTexture||P.image[0].isCompressedTexture,Se=P.image[0]&&P.image[0].isDataTexture,ke=[];for(let de=0;de<6;de++)!ut&&!Se?ke[de]=M(P.image[de],!0,r.maxCubemapSize):ke[de]=Se?P.image[de].image:P.image[de],ke[de]=Lt(P,ke[de]);const qe=ke[0],Qe=o.convert(P.format,P.colorSpace),Be=o.convert(P.type),ft=R(P.internalFormat,Qe,Be,P.colorSpace),it=P.isVideoTexture!==!0,bt=he.__version===void 0||pe===!0,X=ge.dataReady;let Re=D(P,qe);Q(a.TEXTURE_CUBE_MAP,P);let ce;if(ut){it&&bt&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Re,ft,qe.width,qe.height);for(let de=0;de<6;de++){ce=ke[de].mipmaps;for(let Le=0;Le<ce.length;Le++){const Pe=ce[Le];P.format!==bi?Qe!==null?it?X&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,Qe,Pe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,0,0,Pe.width,Pe.height,Qe,Be,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le,ft,Pe.width,Pe.height,0,Qe,Be,Pe.data)}}}else{if(ce=P.mipmaps,it&&bt){ce.length>0&&Re++;const de=We(ke[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Re,ft,de.width,de.height)}for(let de=0;de<6;de++)if(Se){it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ke[de].width,ke[de].height,Qe,Be,ke[de].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,ke[de].width,ke[de].height,0,Qe,Be,ke[de].data);for(let Le=0;Le<ce.length;Le++){const rt=ce[Le].image[de].image;it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,rt.width,rt.height,Qe,Be,rt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,ft,rt.width,rt.height,0,Qe,Be,rt.data)}}else{it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Qe,Be,ke[de]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Qe,Be,ke[de]);for(let Le=0;Le<ce.length;Le++){const Pe=ce[Le];it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,0,0,Qe,Be,Pe.image[de]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Le+1,ft,Qe,Be,Pe.image[de])}}}y(P)&&x(a.TEXTURE_CUBE_MAP),he.__version=ge.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function Me(U,P,ie,pe,ge,he){const He=o.convert(ie.format,ie.colorSpace),Ae=o.convert(ie.type),Ue=R(ie.internalFormat,He,Ae,ie.colorSpace),ut=n.get(P),Se=n.get(ie);if(Se.__renderTarget=P,!ut.__hasExternalTextures){const ke=Math.max(1,P.width>>he),qe=Math.max(1,P.height>>he);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?t.texImage3D(ge,he,Ue,ke,qe,P.depth,0,He,Ae,null):t.texImage2D(ge,he,Ue,ke,qe,0,He,Ae,null)}t.bindFramebuffer(a.FRAMEBUFFER,U),ct(P)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,dt(P)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,pe,ge,Se.__webglTexture,he),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ve(U,P,ie){if(a.bindRenderbuffer(a.RENDERBUFFER,U),P.depthBuffer){const pe=P.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,he=T(P.stencilBuffer,ge),He=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=dt(P);ct(P)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ae,he,P.width,P.height):ie?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ae,he,P.width,P.height):a.renderbufferStorage(a.RENDERBUFFER,he,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,He,a.RENDERBUFFER,U)}else{const pe=P.textures;for(let ge=0;ge<pe.length;ge++){const he=pe[ge],He=o.convert(he.format,he.colorSpace),Ae=o.convert(he.type),Ue=R(he.internalFormat,He,Ae,he.colorSpace),ut=dt(P);ie&&ct(P)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ut,Ue,P.width,P.height):ct(P)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ut,Ue,P.width,P.height):a.renderbufferStorage(a.RENDERBUFFER,Ue,P.width,P.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Te(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=n.get(P.depthTexture);pe.__renderTarget=P,(!pe.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),se(P.depthTexture,0);const ge=pe.__webglTexture,he=dt(P);if(P.depthTexture.format===pa)ct(P)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ge,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ge,0);else if(P.depthTexture.format===Ta)ct(P)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ge,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ne(U){const P=n.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),pe){const ge=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),P.__depthDisposeCallback=ge}P.__boundDepthTexture=pe}if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Te(P.__webglFramebuffer,U)}else if(ie){P.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(a.FRAMEBUFFER,P.__webglFramebuffer[pe]),P.__webglDepthbuffer[pe]===void 0)P.__webglDepthbuffer[pe]=a.createRenderbuffer(),ve(P.__webglDepthbuffer[pe],U,!1);else{const ge=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=P.__webglDepthbuffer[pe];a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,he)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=a.createRenderbuffer(),ve(P.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ge=P.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ge),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,ge)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ze(U,P,ie){const pe=n.get(U);P!==void 0&&Me(pe.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ie!==void 0&&Ne(U)}function Dt(U){const P=U.texture,ie=n.get(U),pe=n.get(P);U.addEventListener("dispose",I);const ge=U.textures,he=U.isWebGLCubeRenderTarget===!0,He=ge.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture()),pe.__version=P.version,l.memory.textures++),he){ie.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<P.mipmaps.length;Ue++)ie.__webglFramebuffer[Ae][Ue]=a.createFramebuffer()}else ie.__webglFramebuffer[Ae]=a.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ae=0;Ae<P.mipmaps.length;Ae++)ie.__webglFramebuffer[Ae]=a.createFramebuffer()}else ie.__webglFramebuffer=a.createFramebuffer();if(He)for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=n.get(ge[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=a.createTexture(),l.memory.textures++)}if(U.samples>0&&ct(U)===!1){ie.__webglMultisampledFramebuffer=a.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ue=ge[Ae];ie.__webglColorRenderbuffer[Ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ie.__webglColorRenderbuffer[Ae]);const ut=o.convert(Ue.format,Ue.colorSpace),Se=o.convert(Ue.type),ke=R(Ue.internalFormat,ut,Se,Ue.colorSpace,U.isXRRenderTarget===!0),qe=dt(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,qe,ke,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,ie.__webglColorRenderbuffer[Ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=a.createRenderbuffer(),ve(ie.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){t.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),Q(a.TEXTURE_CUBE_MAP,P);for(let Ae=0;Ae<6;Ae++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ue=0;Ue<P.mipmaps.length;Ue++)Me(ie.__webglFramebuffer[Ae][Ue],U,P,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else Me(ie.__webglFramebuffer[Ae],U,P,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(P)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let Ae=0,Ue=ge.length;Ae<Ue;Ae++){const ut=ge[Ae],Se=n.get(ut);t.bindTexture(a.TEXTURE_2D,Se.__webglTexture),Q(a.TEXTURE_2D,ut),Me(ie.__webglFramebuffer,U,ut,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,0),y(ut)&&x(a.TEXTURE_2D)}t.unbindTexture()}else{let Ae=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),Q(Ae,P),P.mipmaps&&P.mipmaps.length>0)for(let Ue=0;Ue<P.mipmaps.length;Ue++)Me(ie.__webglFramebuffer[Ue],U,P,a.COLOR_ATTACHMENT0,Ae,Ue);else Me(ie.__webglFramebuffer,U,P,a.COLOR_ATTACHMENT0,Ae,0);y(P)&&x(Ae),t.unbindTexture()}U.depthBuffer&&Ne(U)}function _t(U){const P=U.textures;for(let ie=0,pe=P.length;ie<pe;ie++){const ge=P[ie];if(y(ge)){const he=b(U),He=n.get(ge).__webglTexture;t.bindTexture(he,He),x(he),t.unbindTexture()}}}const Ot=[],H=[];function On(U){if(U.samples>0){if(ct(U)===!1){const P=U.textures,ie=U.width,pe=U.height;let ge=a.COLOR_BUFFER_BIT;const he=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,He=n.get(U),Ae=P.length>1;if(Ae)for(let Ue=0;Ue<P.length;Ue++)t.bindFramebuffer(a.FRAMEBUFFER,He.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,He.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ue=0;Ue<P.length;Ue++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),Ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ut=n.get(P[Ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ut,0)}a.blitFramebuffer(0,0,ie,pe,0,0,ie,pe,ge,a.NEAREST),f===!0&&(Ot.length=0,H.length=0,Ot.push(a.COLOR_ATTACHMENT0+Ue),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ot.push(he),H.push(he),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,H)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<P.length;Ue++){t.bindFramebuffer(a.FRAMEBUFFER,He.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,He.__webglColorRenderbuffer[Ue]);const ut=n.get(P[Ue]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,He.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,ut,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const P=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[P])}}}function dt(U){return Math.min(r.maxSamples,U.samples)}function ct(U){const P=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function je(U){const P=l.render.frame;p.get(U)!==P&&(p.set(U,P),U.update())}function Lt(U,P){const ie=U.colorSpace,pe=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ie!==Kn&&ie!==_s&&(St.getTransfer(ie)===Ut?(pe!==bi||ge!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),P}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=se,this.setTexture2DArray=q,this.setTexture3D=ne,this.setTextureCube=B,this.rebindTextures=Ze,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ct}function xC(a,e){function t(n,r=_s){let o;const l=St.getTransfer(r);if(n===kr)return a.UNSIGNED_BYTE;if(n===Qp)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Jp)return a.UNSIGNED_SHORT_5_5_5_1;if(n===ex)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Qv)return a.BYTE;if(n===Jv)return a.SHORT;if(n===Bl)return a.UNSIGNED_SHORT;if(n===Zp)return a.INT;if(n===go)return a.UNSIGNED_INT;if(n===Xi)return a.FLOAT;if(n===$l)return a.HALF_FLOAT;if(n===tx)return a.ALPHA;if(n===nx)return a.RGB;if(n===bi)return a.RGBA;if(n===ix)return a.LUMINANCE;if(n===rx)return a.LUMINANCE_ALPHA;if(n===pa)return a.DEPTH_COMPONENT;if(n===Ta)return a.DEPTH_STENCIL;if(n===em)return a.RED;if(n===tm)return a.RED_INTEGER;if(n===sx)return a.RG;if(n===nm)return a.RG_INTEGER;if(n===im)return a.RGBA_INTEGER;if(n===Uc||n===Fc||n===Oc||n===kc)if(l===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Uc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Uc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qd||n===Jd||n===ep||n===tp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Qd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ep)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===np||n===ip||n===rp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===np||n===ip)return l===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===rp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sp||n===op||n===ap||n===lp||n===up||n===cp||n===fp||n===hp||n===dp||n===pp||n===mp||n===gp||n===_p||n===vp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===sp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===op)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ap)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===up)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_p)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===xp||n===yp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Bc)return l===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ox||n===Sp||n===Mp||n===Ep)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Bc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Sp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ep)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ea?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const yC={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,E=.005;h.inputState.pinching&&g>v+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(yC)))}return u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const SC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new xn,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new lr({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends xo{constructor(e,t){super();const n=this;let r=null,o=1,l=null,u="local-floor",f=1,h=null,p=null,m=null,g=null,v=null,E=null;const M=new EC,y=t.getContextAttributes();let x=null,b=null;const R=[],T=[],D=new Mt;let N=null;const I=new Dn;I.viewport=new wt;const F=new Dn;F.viewport=new wt;const A=[I,F],C=new DT;let z=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=R[J];return fe===void 0&&(fe=new Cd,R[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=R[J];return fe===void 0&&(fe=new Cd,R[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=R[J];return fe===void 0&&(fe=new Cd,R[J]=fe),fe.getHandSpace()};function K(J){const fe=T.indexOf(J.inputSource);if(fe===-1)return;const Me=R[fe];Me!==void 0&&(Me.update(J.inputSource,J.frame,h||l),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function ue(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",se);for(let J=0;J<R.length;J++){const fe=T[J];fe!==null&&(T[J]=null,R[J].disconnect(fe))}z=null,$=null,M.reset(),e.setRenderTarget(x),v=null,g=null,m=null,r=null,b=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",se),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),b=new Rs(v.framebufferWidth,v.framebufferHeight,{format:bi,type:kr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let fe=null,Me=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Ta:pa,Me=y.stencil?Ea:go);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:o};m=new XRWebGLBinding(r,t),g=m.createProjectionLayer(Te),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Rs(g.textureWidth,g.textureHeight,{format:bi,type:kr,depthTexture:new Tx(g.textureWidth,g.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await r.requestReferenceSpace(u),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function se(J){for(let fe=0;fe<J.removed.length;fe++){const Me=J.removed[fe],ve=T.indexOf(Me);ve>=0&&(T[ve]=null,R[ve].disconnect(Me))}for(let fe=0;fe<J.added.length;fe++){const Me=J.added[fe];let ve=T.indexOf(Me);if(ve===-1){for(let Ne=0;Ne<R.length;Ne++)if(Ne>=T.length){T.push(Me),ve=Ne;break}else if(T[Ne]===null){T[Ne]=Me,ve=Ne;break}if(ve===-1)break}const Te=R[ve];Te&&Te.connect(Me)}}const q=new j,ne=new j;function B(J,fe,Me){q.setFromMatrixPosition(fe.matrixWorld),ne.setFromMatrixPosition(Me.matrixWorld);const ve=q.distanceTo(ne),Te=fe.projectionMatrix.elements,Ne=Me.projectionMatrix.elements,Ze=Te[14]/(Te[10]-1),Dt=Te[14]/(Te[10]+1),_t=(Te[9]+1)/Te[5],Ot=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],On=(Ne[8]+1)/Ne[0],dt=Ze*H,ct=Ze*On,je=ve/(-H+On),Lt=je*-H;if(fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const We=Ze+je,U=Dt+je,P=dt-Lt,ie=ct+(ve-Lt),pe=_t*Dt/U*We,ge=Ot*Dt/U*We;J.projectionMatrix.makePerspective(P,ie,pe,ge,We,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function te(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let fe=J.near,Me=J.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),C.near=F.near=I.near=fe,C.far=F.far=I.far=Me,(z!==C.near||$!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,$=C.far),I.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,C.layers.mask=I.layers.mask|F.layers.mask;const ve=J.parent,Te=C.cameras;te(C,ve);for(let Ne=0;Ne<Te.length;Ne++)te(Te[Ne],ve);Te.length===2?B(C,I,F):C.projectionMatrix.copy(I.projectionMatrix),oe(J,C,ve)};function oe(J,fe,Me){Me===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(J){f=J,g!==null&&(g.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let k=null;function Q(J,fe){if(p=fe.getViewerPose(h||l),E=fe,p!==null){const Me=p.views;v!==null&&(e.setRenderTargetFramebuffer(b,v.framebuffer),e.setRenderTarget(b));let ve=!1;Me.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Ne=0;Ne<Me.length;Ne++){const Ze=Me[Ne];let Dt=null;if(v!==null)Dt=v.getViewport(Ze);else{const Ot=m.getViewSubImage(g,Ze);Dt=Ot.viewport,Ne===0&&(e.setRenderTargetTextures(b,Ot.colorTexture,g.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(b))}let _t=A[Ne];_t===void 0&&(_t=new Dn,_t.layers.enable(Ne),_t.viewport=new wt,A[Ne]=_t),_t.matrix.fromArray(Ze.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Ze.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ne===0&&(C.matrix.copy(_t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(_t)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ne=m.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&M.init(e,Ne,r.renderState)}}for(let Me=0;Me<R.length;Me++){const ve=T[Me],Te=R[Me];ve!==null&&Te!==void 0&&Te.update(ve,fe,h||l)}k&&k(J,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),E=null}const be=new Px;be.setAnimationLoop(Q),this.setAnimationLoop=function(J){k=J},this.dispose=function(){}}}const Qs=new ar,wC=new ot;function AC(a,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,_x(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function r(y,x,b,R,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(y,x):x.isMeshToonMaterial?(o(y,x),m(y,x)):x.isMeshPhongMaterial?(o(y,x),p(y,x)):x.isMeshStandardMaterial?(o(y,x),g(y,x),x.isMeshPhysicalMaterial&&v(y,x,T)):x.isMeshMatcapMaterial?(o(y,x),E(y,x)):x.isMeshDepthMaterial?o(y,x):x.isMeshDistanceMaterial?(o(y,x),M(y,x)):x.isMeshNormalMaterial?o(y,x):x.isLineBasicMaterial?(l(y,x),x.isLineDashedMaterial&&u(y,x)):x.isPointsMaterial?f(y,x,b,R):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const b=e.get(x),R=b.envMap,T=b.envMapRotation;R&&(y.envMap.value=R,Qs.copy(T),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),y.envMapRotation.value.setFromMatrix4(wC.makeRotationFromEuler(Qs)),y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function l(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function u(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,b,R){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*b,y.scale.value=R*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function m(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function v(y,x,b){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=b.texture,y.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const b=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(b.matrixWorld),y.nearDistance.value=b.shadow.camera.near,y.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function RC(a,e,t,n){let r={},o={},l=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,R){const T=R.program;n.uniformBlockBinding(b,T)}function h(b,R){let T=r[b.id];T===void 0&&(E(b),T=p(b),r[b.id]=T,b.addEventListener("dispose",y));const D=R.program;n.updateUBOMapping(b,D);const N=e.render.frame;o[b.id]!==N&&(g(b),o[b.id]=N)}function p(b){const R=m();b.__bindingPointIndex=R;const T=a.createBuffer(),D=b.__size,N=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,D,N),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,R,T),T}function m(){for(let b=0;b<u;b++)if(l.indexOf(b)===-1)return l.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const R=r[b.id],T=b.uniforms,D=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,R);for(let N=0,I=T.length;N<I;N++){const F=Array.isArray(T[N])?T[N]:[T[N]];for(let A=0,C=F.length;A<C;A++){const z=F[A];if(v(z,N,A,D)===!0){const $=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let se=0;se<K.length;se++){const q=K[se],ne=M(q);typeof q=="number"||typeof q=="boolean"?(z.__data[0]=q,a.bufferSubData(a.UNIFORM_BUFFER,$+ue,z.__data)):q.isMatrix3?(z.__data[0]=q.elements[0],z.__data[1]=q.elements[1],z.__data[2]=q.elements[2],z.__data[3]=0,z.__data[4]=q.elements[3],z.__data[5]=q.elements[4],z.__data[6]=q.elements[5],z.__data[7]=0,z.__data[8]=q.elements[6],z.__data[9]=q.elements[7],z.__data[10]=q.elements[8],z.__data[11]=0):(q.toArray(z.__data,ue),ue+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,$,z.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function v(b,R,T,D){const N=b.value,I=R+"_"+T;if(D[I]===void 0)return typeof N=="number"||typeof N=="boolean"?D[I]=N:D[I]=N.clone(),!0;{const F=D[I];if(typeof N=="number"||typeof N=="boolean"){if(F!==N)return D[I]=N,!0}else if(F.equals(N)===!1)return F.copy(N),!0}return!1}function E(b){const R=b.uniforms;let T=0;const D=16;for(let I=0,F=R.length;I<F;I++){const A=Array.isArray(R[I])?R[I]:[R[I]];for(let C=0,z=A.length;C<z;C++){const $=A[C],K=Array.isArray($.value)?$.value:[$.value];for(let ue=0,se=K.length;ue<se;ue++){const q=K[ue],ne=M(q),B=T%D,te=B%ne.boundary,oe=B+te;T+=te,oe!==0&&D-oe<ne.storage&&(T+=D-oe),$.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=ne.storage}}}const N=T%D;return N>0&&(T+=D-N),b.__size=T,b.__cache={},this}function M(b){const R={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(R.boundary=4,R.storage=4):b.isVector2?(R.boundary=8,R.storage=8):b.isVector3||b.isColor?(R.boundary=16,R.storage=12):b.isVector4?(R.boundary=16,R.storage=16):b.isMatrix3?(R.boundary=48,R.storage=48):b.isMatrix4?(R.boundary=64,R.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),R}function y(b){const R=b.target;R.removeEventListener("dispose",y);const T=l.indexOf(R.__bindingPointIndex);l.splice(T,1),a.deleteBuffer(r[R.id]),delete r[R.id],delete o[R.id]}function x(){for(const b in r)a.deleteBuffer(r[b]);l=[],r={},o={}}return{bind:f,update:h,dispose:x}}class CC{constructor(e={}){const{canvas:t=PE(),context:n=null,depth:r=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Ts,this.toneMappingExposure=1;const T=this;let D=!1,N=0,I=0,F=null,A=-1,C=null;const z=new wt,$=new wt;let K=null;const ue=new nt(0);let se=0,q=t.width,ne=t.height,B=1,te=null,oe=null;const k=new wt(0,0,q,ne),Q=new wt(0,0,q,ne);let be=!1;const J=new lm;let fe=!1,Me=!1;const ve=new ot,Te=new ot,Ne=new j,Ze=new wt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ot(){return F===null?B:1}let H=n;function On(L,Y){return t.getContext(L,Y)}try{const L={alpha:!0,depth:r,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$p}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const Y="webgl2";if(H=On(Y,L),H===null)throw On(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let dt,ct,je,Lt,We,U,P,ie,pe,ge,he,He,Ae,Ue,ut,Se,ke,qe,Qe,Be,ft,it,bt,X;function Re(){dt=new OA(H),dt.init(),it=new xC(H,dt),ct=new LA(H,dt,e,it),je=new _C(H,dt),ct.reverseDepthBuffer&&g&&je.buffers.depth.setReversed(!0),Lt=new zA(H),We=new rC,U=new vC(H,dt,je,We,ct,it,Lt),P=new DA(T),ie=new FA(T),pe=new YT(H),bt=new bA(H,pe),ge=new kA(H,pe,Lt,bt),he=new HA(H,ge,pe,Lt),Qe=new VA(H,ct,U),Se=new IA(We),He=new iC(T,P,ie,dt,ct,bt,Se),Ae=new AC(T,We),Ue=new oC,ut=new hC(dt),qe=new CA(T,P,ie,je,he,v,f),ke=new mC(T,he,ct),X=new RC(H,Lt,ct,je),Be=new PA(H,dt,Lt),ft=new BA(H,dt,Lt),Lt.programs=He.programs,T.capabilities=ct,T.extensions=dt,T.properties=We,T.renderLists=Ue,T.shadowMap=ke,T.state=je,T.info=Lt}Re();const ce=new TC(T,H);this.xr=ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const L=dt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=dt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(q,ne,!1))},this.getSize=function(L){return L.set(q,ne)},this.setSize=function(L,Y,ae=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,ne=Y,t.width=Math.floor(L*B),t.height=Math.floor(Y*B),ae===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(q*B,ne*B).floor()},this.setDrawingBufferSize=function(L,Y,ae){q=L,ne=Y,B=ae,t.width=Math.floor(L*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(z)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,Y,ae,le){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,Y,ae,le),je.viewport(z.copy(k).multiplyScalar(B).round())},this.getScissor=function(L){return L.copy(Q)},this.setScissor=function(L,Y,ae,le){L.isVector4?Q.set(L.x,L.y,L.z,L.w):Q.set(L,Y,ae,le),je.scissor($.copy(Q).multiplyScalar(B).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(L){je.setScissorTest(be=L)},this.setOpaqueSort=function(L){te=L},this.setTransparentSort=function(L){oe=L},this.getClearColor=function(L){return L.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(L=!0,Y=!0,ae=!0){let le=0;if(L){let G=!1;if(F!==null){const ye=F.texture.format;G=ye===im||ye===nm||ye===tm}if(G){const ye=F.texture.type,Ce=ye===kr||ye===go||ye===Bl||ye===Ea||ye===Qp||ye===Jp,De=qe.getClearColor(),Fe=qe.getClearAlpha(),Je=De.r,et=De.g,Xe=De.b;Ce?(E[0]=Je,E[1]=et,E[2]=Xe,E[3]=Fe,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=Je,M[1]=et,M[2]=Xe,M[3]=Fe,H.clearBufferiv(H.COLOR,0,M))}else le|=H.COLOR_BUFFER_BIT}Y&&(le|=H.DEPTH_BUFFER_BIT),ae&&(le|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),qe.dispose(),Ue.dispose(),ut.dispose(),We.dispose(),P.dispose(),ie.dispose(),he.dispose(),bt.dispose(),X.dispose(),He.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",So),ce.removeEventListener("sessionend",Hr),pr.stop()};function de(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const L=Lt.autoReset,Y=ke.enabled,ae=ke.autoUpdate,le=ke.needsUpdate,G=ke.type;Re(),Lt.autoReset=L,ke.enabled=Y,ke.autoUpdate=ae,ke.needsUpdate=le,ke.type=G}function Pe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function rt(L){const Y=L.target;Y.removeEventListener("dispose",rt),zt(Y)}function zt(L){an(L),We.remove(L)}function an(L){const Y=We.get(L).programs;Y!==void 0&&(Y.forEach(function(ae){He.releaseProgram(ae)}),L.isShaderMaterial&&He.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,ae,le,G,ye){Y===null&&(Y=Dt);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,De=tu(L,Y,ae,le,G);je.setMaterial(le,Ce);let Fe=ae.index,Je=1;if(le.wireframe===!0){if(Fe=ge.getWireframeAttribute(ae),Fe===void 0)return;Je=2}const et=ae.drawRange,Xe=ae.attributes.position;let st=et.start*Je,At=(et.start+et.count)*Je;ye!==null&&(st=Math.max(st,ye.start*Je),At=Math.min(At,(ye.start+ye.count)*Je)),Fe!==null?(st=Math.max(st,0),At=Math.min(At,Fe.count)):Xe!=null&&(st=Math.max(st,0),At=Math.min(At,Xe.count));const Rt=At-st;if(Rt<0||Rt===1/0)return;bt.setup(G,le,De,ae,Fe);let Gt,yt=Be;if(Fe!==null&&(Gt=pe.get(Fe),yt=ft,yt.setIndex(Gt)),G.isMesh)le.wireframe===!0?(je.setLineWidth(le.wireframeLinewidth*Ot()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(G.isLine){let Ye=le.linewidth;Ye===void 0&&(Ye=1),je.setLineWidth(Ye*Ot()),G.isLineSegments?yt.setMode(H.LINES):G.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else G.isPoints?yt.setMode(H.POINTS):G.isSprite&&yt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,Zt=G._multiDrawCounts,vt=G._multiDrawCount,Sn=Fe?pe.get(Fe).bytesPerElement:1,Di=We.get(le).currentProgram.getUniforms();for(let Bn=0;Bn<vt;Bn++)Di.setValue(H,"_gl_DrawID",Bn),yt.render(Ye[Bn]/Sn,Zt[Bn])}else if(G.isInstancedMesh)yt.renderInstances(st,Rt,G.count);else if(ae.isInstancedBufferGeometry){const Ye=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Zt=Math.min(ae.instanceCount,Ye);yt.renderInstances(st,Rt,Zt)}else yt.render(st,Rt)};function Et(L,Y,ae){L.transparent===!0&&L.side===tr&&L.forceSinglePass===!1?(L.side=jn,L.needsUpdate=!0,Mo(L,Y,ae),L.side=or,L.needsUpdate=!0,Mo(L,Y,ae),L.side=tr):Mo(L,Y,ae)}this.compile=function(L,Y,ae=null){ae===null&&(ae=L),x=ut.get(ae),x.init(Y),R.push(x),ae.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),L!==ae&&L.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const le=new Set;return L.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const De=ye[Ce];Et(De,ae,G),le.add(De)}else Et(ye,ae,G),le.add(ye)}),R.pop(),x=null,le},this.compileAsync=function(L,Y,ae=null){const le=this.compile(L,Y,ae);return new Promise(G=>{function ye(){if(le.forEach(function(Ce){We.get(Ce).currentProgram.isReady()&&le.delete(Ce)}),le.size===0){G(L);return}setTimeout(ye,10)}dt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let $n=null;function kn(L){$n&&$n(L)}function So(){pr.stop()}function Hr(){pr.start()}const pr=new Px;pr.setAnimationLoop(kn),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(L){$n=L,ce.setAnimationLoop(L),L===null?pr.stop():pr.start()},ce.addEventListener("sessionstart",So),ce.addEventListener("sessionend",Hr),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Y),Y=ce.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,Y,F),x=ut.get(L,R.length),x.init(Y),R.push(x),Te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Me),y=Ue.get(L,b.length),y.init(),b.push(y),ce.enabled===!0&&ce.isPresenting===!0){const ye=T.xr.getDepthSensingMesh();ye!==null&&mr(ye,Y,-1/0,T.sortObjects)}mr(L,Y,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(te,oe),_t=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,_t&&qe.addToRenderList(y,L),this.info.render.frame++,fe===!0&&Se.beginShadows();const ae=x.state.shadowsArray;ke.render(ae,L,Y),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=y.opaque,G=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const ye=Y.cameras;if(G.length>0)for(let Ce=0,De=ye.length;Ce<De;Ce++){const Fe=ye[Ce];Is(le,G,L,Fe)}_t&&qe.render(L);for(let Ce=0,De=ye.length;Ce<De;Ce++){const Fe=ye[Ce];Ls(y,L,Fe,Fe.viewport)}}else G.length>0&&Is(le,G,L,Y),_t&&qe.render(L),Ls(y,L,Y);F!==null&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),L.isScene===!0&&L.onAfterRender(T,L,Y),bt.resetDefaultState(),A=-1,C=null,R.pop(),R.length>0?(x=R[R.length-1],fe===!0&&Se.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,b.pop(),b.length>0?y=b[b.length-1]:y=null};function mr(L,Y,ae,le){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)ae=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){le&&Ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Te);const Ce=he.update(L),De=L.material;De.visible&&y.push(L,Ce,De,ae,Ze.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||J.intersectsObject(L))){const Ce=he.update(L),De=L.material;if(le&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ze.copy(L.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ze.copy(Ce.boundingSphere.center)),Ze.applyMatrix4(L.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Fe=Ce.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const Xe=Fe[Je],st=De[Xe.materialIndex];st&&st.visible&&y.push(L,Ce,st,ae,Ze.z,Xe)}}else De.visible&&y.push(L,Ce,De,ae,Ze.z,null)}}const ye=L.children;for(let Ce=0,De=ye.length;Ce<De;Ce++)mr(ye[Ce],Y,ae,le)}function Ls(L,Y,ae,le){const G=L.opaque,ye=L.transmissive,Ce=L.transparent;x.setupLightsView(ae),fe===!0&&Se.setGlobalState(T.clippingPlanes,ae),le&&je.viewport(z.copy(le)),G.length>0&&Gr(G,Y,ae),ye.length>0&&Gr(ye,Y,ae),Ce.length>0&&Gr(Ce,Y,ae),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function Is(L,Y,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[le.id]===void 0&&(x.state.transmissionRenderTarget[le.id]=new Rs(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?$l:kr,minFilter:Nr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const ye=x.state.transmissionRenderTarget[le.id],Ce=le.viewport||z;ye.setSize(Ce.z,Ce.w);const De=T.getRenderTarget();T.setRenderTarget(ye),T.getClearColor(ue),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),_t&&qe.render(ae);const Fe=T.toneMapping;T.toneMapping=Ts;const Je=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),x.setupLightsView(le),fe===!0&&Se.setGlobalState(T.clippingPlanes,le),Gr(L,ae,le),U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye),dt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Xe=0,st=Y.length;Xe<st;Xe++){const At=Y[Xe],Rt=At.object,Gt=At.geometry,yt=At.material,Ye=At.group;if(yt.side===tr&&Rt.layers.test(le.layers)){const Zt=yt.side;yt.side=jn,yt.needsUpdate=!0,Jl(Rt,ae,le,Gt,yt,Ye),yt.side=Zt,yt.needsUpdate=!0,et=!0}}et===!0&&(U.updateMultisampleRenderTarget(ye),U.updateRenderTargetMipmap(ye))}T.setRenderTarget(De),T.setClearColor(ue,se),Je!==void 0&&(le.viewport=Je),T.toneMapping=Fe}function Gr(L,Y,ae){const le=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,ye=L.length;G<ye;G++){const Ce=L[G],De=Ce.object,Fe=Ce.geometry,Je=le===null?Ce.material:le,et=Ce.group;De.layers.test(ae.layers)&&Jl(De,Y,ae,Fe,Je,et)}}function Jl(L,Y,ae,le,G,ye){L.onBeforeRender(T,Y,ae,le,G,ye),L.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),G.onBeforeRender(T,Y,ae,le,L,ye),G.transparent===!0&&G.side===tr&&G.forceSinglePass===!1?(G.side=jn,G.needsUpdate=!0,T.renderBufferDirect(ae,Y,le,G,L,ye),G.side=or,G.needsUpdate=!0,T.renderBufferDirect(ae,Y,le,G,L,ye),G.side=tr):T.renderBufferDirect(ae,Y,le,G,L,ye),L.onAfterRender(T,Y,ae,le,G,ye)}function Mo(L,Y,ae){Y.isScene!==!0&&(Y=Dt);const le=We.get(L),G=x.state.lights,ye=x.state.shadowsArray,Ce=G.state.version,De=He.getParameters(L,G.state,ye,Y,ae),Fe=He.getProgramCacheKey(De);let Je=le.programs;le.environment=L.isMeshStandardMaterial?Y.environment:null,le.fog=Y.fog,le.envMap=(L.isMeshStandardMaterial?ie:P).get(L.envMap||le.environment),le.envMapRotation=le.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,Je===void 0&&(L.addEventListener("dispose",rt),Je=new Map,le.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(le.currentProgram===et&&le.lightsStateVersion===Ce)return qi(L,De),et}else De.uniforms=He.getUniforms(L),L.onBeforeCompile(De,T),et=He.acquireProgram(De,Fe),Je.set(Fe,et),le.uniforms=De.uniforms;const Xe=le.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),qi(L,De),le.needsLights=pf(L),le.lightsStateVersion=Ce,le.needsLights&&(Xe.ambientLightColor.value=G.state.ambient,Xe.lightProbe.value=G.state.probe,Xe.directionalLights.value=G.state.directional,Xe.directionalLightShadows.value=G.state.directionalShadow,Xe.spotLights.value=G.state.spot,Xe.spotLightShadows.value=G.state.spotShadow,Xe.rectAreaLights.value=G.state.rectArea,Xe.ltc_1.value=G.state.rectAreaLTC1,Xe.ltc_2.value=G.state.rectAreaLTC2,Xe.pointLights.value=G.state.point,Xe.pointLightShadows.value=G.state.pointShadow,Xe.hemisphereLights.value=G.state.hemi,Xe.directionalShadowMap.value=G.state.directionalShadowMap,Xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Xe.spotShadowMap.value=G.state.spotShadowMap,Xe.spotLightMatrix.value=G.state.spotLightMatrix,Xe.spotLightMap.value=G.state.spotLightMap,Xe.pointShadowMap.value=G.state.pointShadowMap,Xe.pointShadowMatrix.value=G.state.pointShadowMatrix),le.currentProgram=et,le.uniformsList=null,et}function eu(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=zc.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function qi(L,Y){const ae=We.get(L);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function tu(L,Y,ae,le,G){Y.isScene!==!0&&(Y=Dt),U.resetTextureUnits();const ye=Y.fog,Ce=le.isMeshStandardMaterial?Y.environment:null,De=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kn,Fe=(le.isMeshStandardMaterial?ie:P).get(le.envMap||Ce),Je=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Xe=!!ae.morphAttributes.position,st=!!ae.morphAttributes.normal,At=!!ae.morphAttributes.color;let Rt=Ts;le.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Rt=T.toneMapping);const Gt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,yt=Gt!==void 0?Gt.length:0,Ye=We.get(le),Zt=x.state.lights;if(fe===!0&&(Me===!0||L!==C)){const en=L===C&&le.id===A;Se.setState(le,L,en)}let vt=!1;le.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Zt.state.version||Ye.outputColorSpace!==De||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==Fe||le.fog===!0&&Ye.fog!==ye||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==et||Ye.morphTargets!==Xe||Ye.morphNormals!==st||Ye.morphColors!==At||Ye.toneMapping!==Rt||Ye.morphTargetsCount!==yt)&&(vt=!0):(vt=!0,Ye.__version=le.version);let Sn=Ye.currentProgram;vt===!0&&(Sn=Mo(le,Y,G));let Di=!1,Bn=!1,Ds=!1;const Nt=Sn.getUniforms(),zn=Ye.uniforms;if(je.useProgram(Sn.program)&&(Di=!0,Bn=!0,Ds=!0),le.id!==A&&(A=le.id,Bn=!0),Di||C!==L){je.buffers.depth.getReversed()?(ve.copy(L.projectionMatrix),IE(ve),DE(ve),Nt.setValue(H,"projectionMatrix",ve)):Nt.setValue(H,"projectionMatrix",L.projectionMatrix),Nt.setValue(H,"viewMatrix",L.matrixWorldInverse);const An=Nt.map.cameraPosition;An!==void 0&&An.setValue(H,Ne.setFromMatrixPosition(L.matrixWorld)),ct.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",L.isOrthographicCamera===!0),C!==L&&(C=L,Bn=!0,Ds=!0)}if(G.isSkinnedMesh){Nt.setOptional(H,G,"bindMatrix"),Nt.setOptional(H,G,"bindMatrixInverse");const en=G.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Nt.setValue(H,"boneTexture",en.boneTexture,U))}G.isBatchedMesh&&(Nt.setOptional(H,G,"batchingTexture"),Nt.setValue(H,"batchingTexture",G._matricesTexture,U),Nt.setOptional(H,G,"batchingIdTexture"),Nt.setValue(H,"batchingIdTexture",G._indirectTexture,U),Nt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(H,"batchingColorTexture",G._colorsTexture,U));const wn=ae.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Qe.update(G,ae,Sn),(Bn||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Nt.setValue(H,"receiveShadow",G.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(zn.envMap.value=Fe,zn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Y.environment!==null&&(zn.envMapIntensity.value=Y.environmentIntensity),Bn&&(Nt.setValue(H,"toneMappingExposure",T.toneMappingExposure),Ye.needsLights&&nu(zn,Ds),ye&&le.fog===!0&&Ae.refreshFogUniforms(zn,ye),Ae.refreshMaterialUniforms(zn,le,B,ne,x.state.transmissionRenderTarget[L.id]),zc.upload(H,eu(Ye),zn,U)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(zc.upload(H,eu(Ye),zn,U),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Nt.setValue(H,"center",G.center),Nt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(H,"normalMatrix",G.normalMatrix),Nt.setValue(H,"modelMatrix",G.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const en=le.uniformsGroups;for(let An=0,Ns=en.length;An<Ns;An++){const pt=en[An];X.update(pt,Sn),X.bind(pt,Sn)}}return Sn}function nu(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function pf(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(L,Y,ae){We.get(L.texture).__webglTexture=Y,We.get(L.depthTexture).__webglTexture=ae;const le=We.get(L);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Y){const ae=We.get(L);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,ae=0){F=L,N=Y,I=ae;let le=!0,G=null,ye=!1,Ce=!1;if(L){const Fe=We.get(L);if(Fe.__useDefaultFramebuffer!==void 0)je.bindFramebuffer(H.FRAMEBUFFER,null),le=!1;else if(Fe.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(Fe.__hasExternalTextures)U.rebindTextures(L,We.get(L.texture).__webglTexture,We.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Xe=L.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&We.has(Xe)&&(L.width!==Xe.image.width||L.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const Je=L.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ce=!0);const et=We.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(et[Y])?G=et[Y][ae]:G=et[Y],ye=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?G=We.get(L).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[ae]:G=et,z.copy(L.viewport),$.copy(L.scissor),K=L.scissorTest}else z.copy(k).multiplyScalar(B).floor(),$.copy(Q).multiplyScalar(B).floor(),K=be;if(je.bindFramebuffer(H.FRAMEBUFFER,G)&&le&&je.drawBuffers(L,G),je.viewport(z),je.scissor($),je.setScissorTest(K),ye){const Fe=We.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ae)}else if(Ce){const Fe=We.get(L.texture),Je=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,ae||0,Je)}A=-1},this.readRenderTargetPixels=function(L,Y,ae,le,G,ye,Ce){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){je.bindFramebuffer(H.FRAMEBUFFER,De);try{const Fe=L.texture,Je=Fe.format,et=Fe.type;if(!ct.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-le&&ae>=0&&ae<=L.height-G&&H.readPixels(Y,ae,le,G,it.convert(Je),it.convert(et),ye)}finally{const Fe=F!==null?We.get(F).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(L,Y,ae,le,G,ye,Ce){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){const Fe=L.texture,Je=Fe.format,et=Fe.type;if(!ct.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=L.width-le&&ae>=0&&ae<=L.height-G){je.bindFramebuffer(H.FRAMEBUFFER,De);const Xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.bufferData(H.PIXEL_PACK_BUFFER,ye.byteLength,H.STREAM_READ),H.readPixels(Y,ae,le,G,it.convert(Je),it.convert(et),0);const st=F!==null?We.get(F).__webglFramebuffer:null;je.bindFramebuffer(H.FRAMEBUFFER,st);const At=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await LE(H,At,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ye),H.deleteBuffer(Xe),H.deleteSync(At),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Y=null,ae=0){L.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1]);const le=Math.pow(2,-ae),G=Math.floor(L.image.width*le),ye=Math.floor(L.image.height*le),Ce=Y!==null?Y.x:0,De=Y!==null?Y.y:0;U.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,Ce,De,G,ye),je.unbindTexture()};const iu=H.createFramebuffer(),ru=H.createFramebuffer();this.copyTextureToTexture=function(L,Y,ae=null,le=null,G=0,ye=null){L.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,L=arguments[1],Y=arguments[2],ye=arguments[3]||0,ae=null),ye===null&&(G!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Ce,De,Fe,Je,et,Xe,st,At,Rt;const Gt=L.isCompressedTexture?L.mipmaps[ye]:L.image;if(ae!==null)Ce=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,et=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const wn=Math.pow(2,-G);Ce=Math.floor(Gt.width*wn),De=Math.floor(Gt.height*wn),L.isDataArrayTexture?Fe=Gt.depth:L.isData3DTexture?Fe=Math.floor(Gt.depth*wn):Fe=1,Je=0,et=0,Xe=0}le!==null?(st=le.x,At=le.y,Rt=le.z):(st=0,At=0,Rt=0);const yt=it.convert(Y.format),Ye=it.convert(Y.type);let Zt;Y.isData3DTexture?(U.setTexture3D(Y,0),Zt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Zt=H.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Zt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Di=H.getParameter(H.UNPACK_SKIP_PIXELS),Bn=H.getParameter(H.UNPACK_SKIP_ROWS),Ds=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Gt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const Nt=L.isDataArrayTexture||L.isData3DTexture,zn=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isDepthTexture){const wn=We.get(L),en=We.get(Y),An=We.get(wn.__renderTarget),Ns=We.get(en.__renderTarget);je.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let pt=0;pt<Fe;pt++)Nt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(L).__webglTexture,G,Xe+pt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,We.get(Y).__webglTexture,ye,Rt+pt)),H.blitFramebuffer(Je,et,Ce,De,st,At,Ce,De,H.DEPTH_BUFFER_BIT,H.NEAREST);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||L.isRenderTargetTexture||We.has(L)){const wn=We.get(L),en=We.get(Y);je.bindFramebuffer(H.READ_FRAMEBUFFER,iu),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,ru);for(let An=0;An<Fe;An++)Nt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,G,Xe+An):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,G),zn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,ye,Rt+An):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,ye),G!==0?H.blitFramebuffer(Je,et,Ce,De,st,At,Ce,De,H.COLOR_BUFFER_BIT,H.NEAREST):zn?H.copyTexSubImage3D(Zt,ye,st,At,Rt+An,Je,et,Ce,De):H.copyTexSubImage2D(Zt,ye,st,At,Je,et,Ce,De);je.bindFramebuffer(H.READ_FRAMEBUFFER,null),je.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zn?L.isDataTexture||L.isData3DTexture?H.texSubImage3D(Zt,ye,st,At,Rt,Ce,De,Fe,yt,Ye,Gt.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Zt,ye,st,At,Rt,Ce,De,Fe,yt,Gt.data):H.texSubImage3D(Zt,ye,st,At,Rt,Ce,De,Fe,yt,Ye,Gt):L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ye,st,At,Ce,De,yt,Ye,Gt.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ye,st,At,Gt.width,Gt.height,yt,Gt.data):H.texSubImage2D(H.TEXTURE_2D,ye,st,At,Ce,De,yt,Ye,Gt);H.pixelStorei(H.UNPACK_ROW_LENGTH,vt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Di),H.pixelStorei(H.UNPACK_SKIP_ROWS,Bn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ds),ye===0&&Y.generateMipmaps&&H.generateMipmap(Zt),je.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,ae=null,le=null,G=0){return L.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,le=arguments[1]||null,L=arguments[2],Y=arguments[3],G=arguments[4]||0),aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Y,ae,le,G)},this.initRenderTarget=function(L){We.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),je.unbindTexture()},this.resetState=function(){N=0,I=0,F=null,je.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class cf extends vn{constructor(){const e=cf.SkyShader,t=new lr({name:e.name,uniforms:qc.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:jn,depthWrite:!1});super(new Fa(1,1,1),t),this.isSky=!0}}cf.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new j},up:{value:new j(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Av(a,e){if(e===nE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Tp||e===ax){let t=a.getIndex();if(t===null){const l=[],u=a.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)l.push(f);a.setIndex(l),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,r=[];if(e===Tp)for(let l=1;l<=n;l++)r.push(t.getX(0)),r.push(t.getX(l)),r.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(r.push(t.getX(l)),r.push(t.getX(l+1)),r.push(t.getX(l+2))):(r.push(t.getX(l+2)),r.push(t.getX(l+1)),r.push(t.getX(l)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=a.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class bC extends Ba{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new XC(t)}),this.register(function(t){return new jC(t)}),this.register(function(t){return new OC(t)}),this.register(function(t){return new kC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new zC(t)}),this.register(function(t){return new DC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new LC(t)}),this.register(function(t){return new YC(t)}),this.register(function(t){return new qC(t)})}load(e,t,n,r){const o=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const h=Ul.extractUrlBase(e);l=Ul.resolveURL(h,this.path)}else l=Ul.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){r?r(h):console.error(h),o.manager.itemError(e),o.manager.itemEnd(e)},f=new Cx(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{o.parse(h,l,function(p){t(p),o.manager.itemEnd(e)},u)}catch(p){u(p)}},n,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let o;const l={},u={},f=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===Ux){try{l[gt.KHR_BINARY_GLTF]=new KC(e)}catch(m){r&&r(m);return}o=JSON.parse(l[gt.KHR_BINARY_GLTF].content)}else o=JSON.parse(f.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new lb(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[m.name]=m,l[m.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const m=o.extensionsUsed[p],g=o.extensionsRequired||[];switch(m){case gt.KHR_MATERIALS_UNLIT:l[m]=new IC;break;case gt.KHR_DRACO_MESH_COMPRESSION:l[m]=new $C(o,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:l[m]=new ZC;break;case gt.KHR_MESH_QUANTIZATION:l[m]=new QC;break;default:g.indexOf(m)>=0&&u[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(l),h.setPlugins(u),h.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,o){n.parse(e,t,r,o)})}}function PC(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LC{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const o=t.json,f=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let h;const p=new nt(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],Kn);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new bp(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new bT(p),h.distance=m;break;case"spot":h=new RT(p),h.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),h.decay=2,Lr(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),r=Promise.resolve(h),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],u=(o.extensions&&o.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return n._getNodeRef(t.cache,u,f)})}}class IC{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return ao}extendParams(e,t,n){const r=[];e.color=new nt(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const l=o.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Kn),e.opacity=l[3]}o.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",o.baseColorTexture,Tn))}return Promise.all(r)}}class DC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class NC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const u=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Mt(u,u)}return Promise.all(o)}}class UC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class FC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(o)}}class OC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=r.extensions[this.name];if(l.sheenColorFactor!==void 0){const u=l.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Kn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,Tn)),l.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(o)}}class kC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(o)}}class BC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const u=l.attenuationColor||[1,1,1];return t.attenuationColor=new nt().setRGB(u[0],u[1],u[2],Kn),Promise.all(o)}}class zC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class VC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const u=l.specularColorFactor||[1,1,1];return t.specularColor=new nt().setRGB(u[0],u[1],u[2],Kn),l.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,Tn)),Promise.all(o)}}class HC{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(o)}}class GC{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],l=r.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(o)}}class WC{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,l)}}class XC{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],u=r.images[l.source];let f=n.textureLoader;if(u.uri){const h=n.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,l.source,f);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jC{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,o=r.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],u=r.images[l.source];let f=n.textureLoader;if(u.uri){const h=n.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,l.source,f);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YC{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(u){const f=r.byteOffset||0,h=r.byteLength||0,p=r.count,m=r.byteStride,g=new Uint8Array(u,f,h);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(p,m,g,r.mode,r.filter).then(function(v){return v.buffer}):l.ready.then(function(){const v=new ArrayBuffer(p*m);return l.decodeGltfBuffer(new Uint8Array(v),p,m,g,r.mode,r.filter),v})})}else return null}}class qC{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const h of r.primitives)if(h.mode!==Ci.TRIANGLES&&h.mode!==Ci.TRIANGLE_STRIP&&h.mode!==Ci.TRIANGLE_FAN&&h.mode!==void 0)return null;const l=n.extensions[this.name].attributes,u=[],f={};for(const h in l)u.push(this.parser.getDependency("accessor",l[h]).then(p=>(f[h]=p,f[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const p=h.pop(),m=p.isGroup?p.children:[p],g=h[0].count,v=[];for(const E of m){const M=new ot,y=new j,x=new Yi,b=new j(1,1,1),R=new aT(E.geometry,E.material,g);for(let T=0;T<g;T++)f.TRANSLATION&&y.fromBufferAttribute(f.TRANSLATION,T),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,T),f.SCALE&&b.fromBufferAttribute(f.SCALE,T),R.setMatrixAt(T,M.compose(y,x,b));for(const T in f)if(T==="_COLOR_0"){const D=f[T];R.instanceColor=new Ap(D.array,D.itemSize,D.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&E.geometry.setAttribute(T,f[T]);$t.prototype.copy.call(R,E),this.parser.assignFinalMaterial(R),v.push(R)}return p.isGroup?(p.clear(),p.add(...v),p):v[0]}))}}const Ux="glTF",Rl=12,Rv={JSON:1313821514,BIN:5130562};class KC{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ux)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Rl,o=new DataView(e,Rl);let l=0;for(;l<r;){const u=o.getUint32(l,!0);l+=4;const f=o.getUint32(l,!0);if(l+=4,f===Rv.JSON){const h=new Uint8Array(e,Rl+l,u);this.content=n.decode(h)}else if(f===Rv.BIN){const h=Rl+l;this.body=e.slice(h,h+u)}l+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $C{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,u={},f={},h={};for(const p in l){const m=Lp[p]||p.toLowerCase();u[m]=l[p]}for(const p in e.attributes){const m=Lp[p]||p.toLowerCase();if(l[p]!==void 0){const g=n.accessors[e.attributes[p]],v=ga[g.componentType];h[m]=v.name,f[m]=g.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(m,g){r.decodeDracoFile(p,function(v){for(const E in v.attributes){const M=v.attributes[E],y=f[E];y!==void 0&&(M.normalized=y)}m(v)},u,h,Kn,g)})})}}class ZC{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QC{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class Fx extends Zl{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let l=0;l!==r;l++)t[l]=n[o+l];return t}interpolate_(e,t,n,r){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=u*2,h=u*3,p=r-t,m=(n-t)/p,g=m*m,v=g*m,E=e*h,M=E-h,y=-2*v+3*g,x=v-g,b=1-y,R=x-g+m;for(let T=0;T!==u;T++){const D=l[M+T+u],N=l[M+T+f]*p,I=l[E+T+u],F=l[E+T]*p;o[T]=b*D+R*N+y*I+x*F}return o}}const JC=new Yi;class eb extends Fx{interpolate_(e,t,n,r){const o=super.interpolate_(e,t,n,r);return JC.fromArray(o).normalize().toArray(o),o}}const Ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cv={9728:Yn,9729:gi,9984:Zv,9985:Nc,9986:bl,9987:Nr},bv={33071:vs,33648:Wc,10497:mo},bd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tb={CUBICSPLINE:void 0,LINEAR:Vl,STEP:zl},Pd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nb(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new af({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:or})),a.DefaultMaterial}function Js(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Lr(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ib(a,e,t){let n=!1,r=!1,o=!1;for(let h=0,p=e.length;h<p;h++){const m=e[h];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(r=!0),m.COLOR_0!==void 0&&(o=!0),n&&r&&o)break}if(!n&&!r&&!o)return Promise.resolve(a);const l=[],u=[],f=[];for(let h=0,p=e.length;h<p;h++){const m=e[h];if(n){const g=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):a.attributes.position;l.push(g)}if(r){const g=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):a.attributes.normal;u.push(g)}if(o){const g=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):a.attributes.color;f.push(g)}}return Promise.all([Promise.all(l),Promise.all(u),Promise.all(f)]).then(function(h){const p=h[0],m=h[1],g=h[2];return n&&(a.morphAttributes.position=p),r&&(a.morphAttributes.normal=m),o&&(a.morphAttributes.color=g),a.morphTargetsRelative=!0,a})}function rb(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sb(a){let e;const t=a.extensions&&a.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ld(t.attributes):e=a.indices+":"+Ld(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,r=a.targets.length;n<r;n++)e+=":"+Ld(a.targets[n]);return e}function Ld(a){let e="";const t=Object.keys(a).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Ip(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ob(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ab=new ot;class lb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,o=!1,l=-1;if(typeof navigator<"u"){const u=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);r=n&&f?parseInt(f[1],10):-1,o=u.indexOf("Firefox")>-1,l=o?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||o&&l<98?this.textureLoader=new bx(this.options.manager):this.textureLoader=new IT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const u={scene:l[0][r.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:r.asset,parser:n,userData:{}};return Js(o,u,r),Lr(u,r),Promise.all(n._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const l=t[r].joints;for(let u=0,f=l.length;u<f;u++)e[l[u]].isBone=!0}for(let r=0,o=e.length;r<o;r++){const l=e[r];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),o=(l,u)=>{const f=this.associations.get(l);f!=null&&this.associations.set(u,f);for(const[h,p]of l.children.entries())o(p,u.children[h])};return o(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const o=e(t[r]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,l){n.load(Ul.resolveURL(t.uri,r.path),o,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const l=bd[r.type],u=ga[r.componentType],f=r.normalized===!0,h=new u(r.count*l);return Promise.resolve(new qn(h,l,f))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(l){const u=l[0],f=bd[r.type],h=ga[r.componentType],p=h.BYTES_PER_ELEMENT,m=p*f,g=r.byteOffset||0,v=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,E=r.normalized===!0;let M,y;if(v&&v!==m){const x=Math.floor(g/v),b="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+x+":"+r.count;let R=t.cache.get(b);R||(M=new h(u,x*v,r.count*v/p),R=new nT(M,v/p),t.cache.add(b,R)),y=new om(R,f,g%v/p,E)}else u===null?M=new h(r.count*f):M=new h(u,g,r.count*f),y=new qn(M,f,E);if(r.sparse!==void 0){const x=bd.SCALAR,b=ga[r.sparse.indices.componentType],R=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,D=new b(l[1],R,r.sparse.count*x),N=new h(l[2],T,r.sparse.count*f);u!==null&&(y=new qn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let I=0,F=D.length;I<F;I++){const A=D[I];if(y.setX(A,N[I*f]),f>=2&&y.setY(A,N[I*f+1]),f>=3&&y.setZ(A,N[I*f+2]),f>=4&&y.setW(A,N[I*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=E}return y})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,l=t.images[o];let u=this.textureLoader;if(l.uri){const f=n.manager.getHandler(l.uri);f!==null&&(u=f)}return this.loadTextureImage(e,o,u)}loadTextureImage(e,t,n){const r=this,o=this.json,l=o.textures[e],u=o.images[t],f=(u.uri||u.bufferView)+":"+l.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=l.name||u.name||"",p.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(p.name=u.uri);const g=(o.samplers||{})[l.sampler]||{};return p.magFilter=Cv[g.magFilter]||gi,p.minFilter=Cv[g.minFilter]||Nr,p.wrapS=bv[g.wrapS]||mo,p.wrapT=bv[g.wrapT]||mo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==Yn&&p.minFilter!==gi,r.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const n=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const l=r.images[e],u=self.URL||self.webkitURL;let f=l.uri||"",h=!1;if(l.bufferView!==void 0)f=n.getDependency("bufferView",l.bufferView).then(function(m){h=!0;const g=new Blob([m],{type:l.mimeType});return f=u.createObjectURL(g),f});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(m){return new Promise(function(g,v){let E=g;t.isImageBitmapLoader===!0&&(E=function(M){const y=new xn(M);y.needsUpdate=!0,g(y)}),t.load(Ul.resolveURL(m,o.path),E,void 0,v)})}).then(function(m){return h===!0&&u.revokeObjectURL(f),Lr(m,l),m.userData.mimeType=l.mimeType||ob(l.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,r){const o=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),o.extensions[gt.KHR_TEXTURE_TRANSFORM]){const u=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=o.associations.get(l);l=o.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(l,u),o.associations.set(l,f)}}return r!==void 0&&(l.colorSpace=r),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+n.uuid;let f=this.cache.get(u);f||(f=new Ex,rr.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,f.sizeAttenuation=!1,this.cache.add(u,f)),n=f}else if(e.isLine){const u="LineBasicMaterial:"+n.uuid;let f=this.cache.get(u);f||(f=new Mx,rr.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,this.cache.add(u,f)),n=f}if(r||o||l){let u="ClonedMaterial:"+n.uuid+":";r&&(u+="derivative-tangents:"),o&&(u+="vertex-colors:"),l&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=n.clone(),o&&(f.vertexColors=!0),l&&(f.flatShading=!0),r&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(n))),n=f}e.material=n}getMaterialType(){return af}loadMaterial(e){const t=this,n=this.json,r=this.extensions,o=n.materials[e];let l;const u={},f=o.extensions||{},h=[];if(f[gt.KHR_MATERIALS_UNLIT]){const m=r[gt.KHR_MATERIALS_UNLIT];l=m.getMaterialType(),h.push(m.extendParams(u,o,t))}else{const m=o.pbrMetallicRoughness||{};if(u.color=new nt(1,1,1),u.opacity=1,Array.isArray(m.baseColorFactor)){const g=m.baseColorFactor;u.color.setRGB(g[0],g[1],g[2],Kn),u.opacity=g[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",m.baseColorTexture,Tn)),u.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,u.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",m.metallicRoughnessTexture))),l=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,u)})))}o.doubleSided===!0&&(u.side=tr);const p=o.alphaMode||Pd.OPAQUE;if(p===Pd.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,p===Pd.MASK&&(u.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&l!==ao&&(h.push(t.assignTexture(u,"normalMap",o.normalTexture)),u.normalScale=new Mt(1,1),o.normalTexture.scale!==void 0)){const m=o.normalTexture.scale;u.normalScale.set(m,m)}if(o.occlusionTexture!==void 0&&l!==ao&&(h.push(t.assignTexture(u,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&l!==ao){const m=o.emissiveFactor;u.emissive=new nt().setRGB(m[0],m[1],m[2],Kn)}return o.emissiveTexture!==void 0&&l!==ao&&h.push(t.assignTexture(u,"emissiveMap",o.emissiveTexture,Tn)),Promise.all(h).then(function(){const m=new l(u);return o.name&&(m.name=o.name),Lr(m,o),t.associations.set(m,{materials:e}),o.extensions&&Js(r,m,o),m})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function o(u){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return Pv(f,u,t)})}const l=[];for(let u=0,f=e.length;u<f;u++){const h=e[u],p=sb(h),m=r[p];if(m)l.push(m.promise);else{let g;h.extensions&&h.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?g=o(h):g=Pv(new fr,h,t),r[p]={primitive:h,promise:g},l.push(g)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,r=this.extensions,o=n.meshes[e],l=o.primitives,u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f].material===void 0?nb(this.cache):this.getDependency("material",l[f].material);u.push(p)}return u.push(t.loadGeometries(l)),Promise.all(u).then(function(f){const h=f.slice(0,f.length-1),p=f[f.length-1],m=[];for(let v=0,E=p.length;v<E;v++){const M=p[v],y=l[v];let x;const b=h[v];if(y.mode===Ci.TRIANGLES||y.mode===Ci.TRIANGLE_STRIP||y.mode===Ci.TRIANGLE_FAN||y.mode===void 0)x=o.isSkinnedMesh===!0?new rT(M,b):new vn(M,b),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===Ci.TRIANGLE_STRIP?x.geometry=Av(x.geometry,ax):y.mode===Ci.TRIANGLE_FAN&&(x.geometry=Av(x.geometry,Tp));else if(y.mode===Ci.LINES)x=new cT(M,b);else if(y.mode===Ci.LINE_STRIP)x=new um(M,b);else if(y.mode===Ci.LINE_LOOP)x=new fT(M,b);else if(y.mode===Ci.POINTS)x=new hT(M,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&rb(x,o),x.name=t.createUniqueName(o.name||"mesh_"+e),Lr(x,o),y.extensions&&Js(r,x,y),t.assignFinalMaterial(x),m.push(x)}for(let v=0,E=m.length;v<E;v++)t.associations.set(m[v],{meshes:e,primitives:v});if(m.length===1)return o.extensions&&Js(r,m[0],o),m[0];const g=new lo;o.extensions&&Js(r,g,o),t.associations.set(g,{meshes:e});for(let v=0,E=m.length;v<E;v++)g.add(m[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dn(bE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new fm(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Lr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,o=t.joints.length;r<o;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const o=r.pop(),l=r,u=[],f=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];if(m){u.push(m);const g=new ot;o!==null&&g.fromArray(o.array,h*16),f.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new am(u,f)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],o=r.name?r.name:"animation_"+e,l=[],u=[],f=[],h=[],p=[];for(let m=0,g=r.channels.length;m<g;m++){const v=r.channels[m],E=r.samplers[v.sampler],M=v.target,y=M.node,x=r.parameters!==void 0?r.parameters[E.input]:E.input,b=r.parameters!==void 0?r.parameters[E.output]:E.output;M.node!==void 0&&(l.push(this.getDependency("node",y)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",b)),h.push(E),p.push(M))}return Promise.all([Promise.all(l),Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(p)]).then(function(m){const g=m[0],v=m[1],E=m[2],M=m[3],y=m[4],x=[];for(let b=0,R=g.length;b<R;b++){const T=g[b],D=v[b],N=E[b],I=M[b],F=y[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const A=n._createAnimationTracks(T,D,N,I,F);if(A)for(let C=0;C<A.length;C++)x.push(A[C])}return new Cp(o,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(o){const l=n._getNodeRef(n.meshCache,r.mesh,o);return r.weights!==void 0&&l.traverse(function(u){if(u.isMesh)for(let f=0,h=r.weights.length;f<h;f++)u.morphTargetInfluences[f]=r.weights[f]}),l})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],o=n._loadNodeShallow(e),l=[],u=r.children||[];for(let h=0,p=u.length;h<p;h++)l.push(n.getDependency("node",u[h]));const f=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([o,Promise.all(l),f]).then(function(h){const p=h[0],m=h[1],g=h[2];g!==null&&p.traverse(function(v){v.isSkinnedMesh&&v.bind(g,ab)});for(let v=0,E=m.length;v<E;v++)p.add(m[v]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],l=o.name?r.createUniqueName(o.name):"",u=[],f=r._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&u.push(f),o.camera!==void 0&&u.push(r.getDependency("camera",o.camera).then(function(h){return r._getNodeRef(r.cameraCache,o.camera,h)})),r._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let p;if(o.isBone===!0?p=new yx:h.length>1?p=new lo:h.length===1?p=h[0]:p=new $t,p!==h[0])for(let m=0,g=h.length;m<g;m++)p.add(h[m]);if(o.name&&(p.userData.name=o.name,p.name=l),Lr(p,o),o.extensions&&Js(n,p,o),o.matrix!==void 0){const m=new ot;m.fromArray(o.matrix),p.applyMatrix4(m)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);return r.associations.has(p)||r.associations.set(p,{}),r.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,o=new lo;n.name&&(o.name=r.createUniqueName(n.name)),Lr(o,n),n.extensions&&Js(t,o,n);const l=n.nodes||[],u=[];for(let f=0,h=l.length;f<h;f++)u.push(r.getDependency("node",l[f]));return Promise.all(u).then(function(f){for(let p=0,m=f.length;p<m;p++)o.add(f[p]);const h=p=>{const m=new Map;for(const[g,v]of r.associations)(g instanceof rr||g instanceof xn)&&m.set(g,v);return p.traverse(g=>{const v=r.associations.get(g);v!=null&&m.set(g,v)}),m};return r.associations=h(o),o})}_createAnimationTracks(e,t,n,r,o){const l=[],u=e.name?e.name:e.uuid,f=[];ms[o.path]===ms.weights?e.traverse(function(g){g.morphTargetInfluences&&f.push(g.name?g.name:g.uuid)}):f.push(u);let h;switch(ms[o.path]){case ms.weights:h=Ca;break;case ms.rotation:h=ba;break;case ms.position:case ms.scale:h=Pa;break;default:switch(n.itemSize){case 1:h=Ca;break;case 2:case 3:default:h=Pa;break}break}const p=r.interpolation!==void 0?tb[r.interpolation]:Vl,m=this._getArrayFromAccessor(n);for(let g=0,v=f.length;g<v;g++){const E=new h(f[g]+"."+ms[o.path],t.array,m,p);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),l.push(E)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ip(t.constructor),r=new Float32Array(t.length);for(let o=0,l=t.length;o<l;o++)r[o]=t[o]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ba?eb:Fx;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ub(a,e,t){const n=e.attributes,r=new Vr;if(n.POSITION!==void 0){const u=t.json.accessors[n.POSITION],f=u.min,h=u.max;if(f!==void 0&&h!==void 0){if(r.set(new j(f[0],f[1],f[2]),new j(h[0],h[1],h[2])),u.normalized){const p=Ip(ga[u.componentType]);r.min.multiplyScalar(p),r.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const u=new j,f=new j;for(let h=0,p=o.length;h<p;h++){const m=o[h];if(m.POSITION!==void 0){const g=t.json.accessors[m.POSITION],v=g.min,E=g.max;if(v!==void 0&&E!==void 0){if(f.setX(Math.max(Math.abs(v[0]),Math.abs(E[0]))),f.setY(Math.max(Math.abs(v[1]),Math.abs(E[1]))),f.setZ(Math.max(Math.abs(v[2]),Math.abs(E[2]))),g.normalized){const M=Ip(ga[g.componentType]);f.multiplyScalar(M)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(u)}a.boundingBox=r;const l=new cr;r.getCenter(l.center),l.radius=r.min.distanceTo(r.max)/2,a.boundingSphere=l}function Pv(a,e,t){const n=e.attributes,r=[];function o(l,u){return t.getDependency("accessor",l).then(function(f){a.setAttribute(u,f)})}for(const l in n){const u=Lp[l]||l.toLowerCase();u in a.attributes||r.push(o(n[l],u))}if(e.indices!==void 0&&!a.index){const l=t.getDependency("accessor",e.indices).then(function(u){a.setIndex(u)});r.push(l)}return St.workingColorSpace!==Kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Lr(a,e),ub(a,e,t),Promise.all(r).then(function(){return e.targets!==void 0?ib(a,e.targets,t):a})}function Ir(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ox(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},La={duration:.5,overwrite:!1,delay:0},mm,Un,Xt,Pi=1e8,Bt=1/Pi,Dp=Math.PI*2,cb=Dp/4,fb=0,kx=Math.sqrt,hb=Math.cos,db=Math.sin,yn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Br=function(e){return typeof e=="number"},gm=function(e){return typeof e>"u"},ur=function(e){return typeof e=="object"},ii=function(e){return e!==!1},_m=function(){return typeof window<"u"},Dc=function(e){return Jt(e)||yn(e)},Bx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,Np=/(?:-?\.?\d|\.)+/gi,zx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Id=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vx=/[+-]=-?[.\d]+/,Hx=/[^,'"\[\]\s]+/gi,pb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,Ji,Up,vm,xi={},Zc={},Gx,Wx=function(e){return(Zc=_o(e,xi))&&ai},xm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gl=function(e,t){return!t&&console.warn(e)},Xx=function(e,t){return e&&(xi[e]=t)&&Zc&&(Zc[e]=t)||xi},Wl=function(){return 0},mb={suppressEvents:!0,isStart:!0,kill:!1},Vc={suppressEvents:!0,kill:!1},gb={suppressEvents:!0},ym={},ws=[],Fp={},jx,pi={},Dd={},Lv=30,Hc=[],Sm="",Mm=function(e){var t=e[0],n,r;if(ur(t)||Jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Hc.length;r--&&!Hc[r].targetTest(t););n=Hc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new gy(e[r],n)))||e.splice(r,1);return e},co=function(e){return e._gsap||Mm(Li(e))[0]._gsap},Yx=function(e,t,n){return(n=e[t])&&Jt(n)?e[t]():gm(n)&&e.getAttribute&&e.getAttribute(t)||n},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},_n=function(e){return Math.round(e*1e7)/1e7||0},_a=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},_b=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Qc=function(){var e=ws.length,t=ws.slice(0),n,r;for(Fp={},ws.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},qx=function(e,t,n,r){ws.length&&!Un&&Qc(),e.render(t,n,Un&&t<0&&(e._initted||e._startAt)),ws.length&&!Un&&Qc()},Kx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hx).length<2?t:yn(e)?e.trim():e},$x=function(e){return e},Ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vb=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},_o=function(e,t){for(var n in t)e[n]=t[n];return e},Iv=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ur(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},Jc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Fl=function(e){var t=e.parent||qt,n=e.keyframes?vb(Fn(e.keyframes)):Ii;if(ii(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xb=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Zx=function(e,t,n,r,o){var l=e[r],u;if(o)for(u=t[o];l&&l[o]>u;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=l,t.parent=t._dp=e,t},ff=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t._prev,l=t._next;o?o._next=l:e[n]===t&&(e[n]=l),l?l._prev=o:e[r]===t&&(e[r]=o),t._next=t._prev=t.parent=null},Cs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Op=function(e,t,n,r){return e._startAt&&(Un?e._startAt.revert(Vc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Sb=function a(e){return!e||e._ts&&a(e.parent)},Dv=function(e){return e._repeat?Ia(e._tTime,e=e.duration()+e._rDelay)*e:0},Ia=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ef=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hf=function(e){return e._end=_n(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bt)||0))},df=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_n(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hf(e),n._dirty||fo(n,e)),e},Qx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ef(e.rawTime(),t),(!t._dur||Ql(0,t.totalDuration(),n)-t._tTime>Bt)&&t.render(n,!0)),fo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Bt}},nr=function(e,t,n,r){return t.parent&&Cs(t),t._start=_n((Br(n)?n:n||e!==qt?Ri(e,n,t):e._time)+t._delay),t._end=_n(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zx(e,t,"_first","_last",e._sort?"_start":0),kp(t)||(e._recent=t),r||Qx(e,t),e._ts<0&&df(e,e._tTime),e},Jx=function(e,t){return(xi.ScrollTrigger||xm("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},ey=function(e,t,n,r,o){if(Tm(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!Un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jx!==mi.frame)return ws.push(e),e._lazy=[o,r],1},Mb=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},kp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Eb=function(e,t,n,r){var o=e.ratio,l=t<0||!t&&(!e._start&&Mb(e)&&!(!e._initted&&kp(e))||(e._ts<0||e._dp._ts<0)&&!kp(e))?0:1,u=e._rDelay,f=0,h,p,m;if(u&&e._repeat&&(f=Ql(0,e._tDur,t),p=Ia(f,u),e._yoyo&&p&1&&(l=1-l),p!==Ia(e._tTime,u)&&(o=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==o||Un||r||e._zTime===Bt||!t&&e._zTime){if(!e._initted&&ey(e,t,r,n,f))return;for(m=e._zTime,e._zTime=t||(n?Bt:0),n||(n=t&&!m),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,h=e._pt;h;)h.r(l,h.d),h=h._next;t<0&&Op(e,t,n,!0),e._onUpdate&&!n&&_i(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&_i(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Cs(e,1),!n&&!Un&&(_i(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tb=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Da=function(e,t,n,r){var o=e._repeat,l=_n(t)||0,u=e._tTime/e._tDur;return u&&!r&&(e._time*=l/e._dur),e._dur=l,e._tDur=o?o<0?1e10:_n(l*(o+1)+e._rDelay*o):l,u>0&&!r&&df(e,e._tTime=e._tDur*u),e.parent&&hf(e),n||fo(e.parent,e),e},Nv=function(e){return e instanceof Xn?fo(e):Da(e,e._dur)},wb={_start:0,endTime:Wl,totalDuration:Wl},Ri=function a(e,t,n){var r=e.labels,o=e._recent||wb,l=e.duration()>=Pi?o.endTime(!1):e._dur,u,f,h;return yn(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),h=t.substr(-1)==="%",u=t.indexOf("="),f==="<"||f===">"?(u>=0&&(t=t.replace(/=/,"")),(f==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(u<0?o:n).totalDuration()/100:1)):u<0?(t in r||(r[t]=l),r[t]):(f=parseFloat(t.charAt(u-1)+t.substr(u+1)),h&&n&&(f=f/100*(Fn(n)?n[0]:n).totalDuration()),u>1?a(e,t.substr(0,u-1),n)+f:l+f)):t==null?l:+t},Ol=function(e,t,n){var r=Br(t[1]),o=(r?2:1)+(e<2?0:1),l=t[o],u,f;if(r&&(l.duration=t[1]),l.parent=n,e){for(u=l,f=n;f&&!("immediateRender"in u);)u=f.vars.defaults||{},f=ii(f.vars.inherit)&&f.parent;l.immediateRender=ii(u.immediateRender),e<2?l.runBackwards=1:l.startAt=t[o-1]}return new on(t[0],l,t[o+1])},Ps=function(e,t){return e||e===0?t(e):t},Ql=function(e,t,n){return n<e?e:n>t?t:n},Nn=function(e,t){return!yn(e)||!(t=pb.exec(e))?"":t[1]},Ab=function(e,t,n){return Ps(n,function(r){return Ql(e,t,r)})},Bp=[].slice,ty=function(e,t){return e&&ur(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ur(e[0]))&&!e.nodeType&&e!==Ji},Rb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return yn(r)&&!t||ty(r,1)?(o=n).push.apply(o,Li(r)):n.push(r)})||n},Li=function(e,t,n){return Xt&&!t&&Xt.selector?Xt.selector(e):yn(e)&&!n&&(Up||!Na())?Bp.call((t||vm).querySelectorAll(e),0):Fn(e)?Rb(e,n):ty(e)?Bp.call(e,0):e?[e]:[]},zp=function(e){return e=Li(e)[0]||Gl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Li(t,n.querySelectorAll?n:n===e?Gl("Invalid scope")||vm.createElement("div"):e)}},ny=function(e){return e.sort(function(){return .5-Math.random()})},iy=function(e){if(Jt(e))return e;var t=ur(e)?e:{each:e},n=ho(t.ease),r=t.from||0,o=parseFloat(t.base)||0,l={},u=r>0&&r<1,f=isNaN(r)||u,h=t.axis,p=r,m=r;return yn(r)?p=m={center:.5,edges:.5,end:1}[r]||0:!u&&f&&(p=r[0],m=r[1]),function(g,v,E){var M=(E||t).length,y=l[M],x,b,R,T,D,N,I,F,A;if(!y){if(A=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!A){for(I=-Pi;I<(I=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(y=l[M]=[],x=f?Math.min(A,M)*p-.5:r%A,b=A===Pi?0:f?M*m/A-.5:r/A|0,I=0,F=Pi,N=0;N<M;N++)R=N%A-x,T=b-(N/A|0),y[N]=D=h?Math.abs(h==="y"?T:R):kx(R*R+T*T),D>I&&(I=D),D<F&&(F=D);r==="random"&&ny(y),y.max=I-F,y.min=F,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(A>M?M-1:h?h==="y"?M/A:A:Math.max(A,M/A))||0)*(r==="edges"?-1:1),y.b=M<0?o-M:o,y.u=Nn(t.amount||t.each)||0,n=n&&M<0?dy(n):n}return M=(y[g]-y.min)/y.max||0,_n(y.b+(n?n(M):M)*y.v)+y.u}},Vp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=_n(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Br(n)?0:Nn(n))}},ry=function(e,t){var n=Fn(e),r,o;return!n&&ur(e)&&(r=n=e.radius||Pi,e.values?(e=Li(e.values),(o=!Br(e[0]))&&(r*=r)):e=Vp(e.increment)),Ps(t,n?Jt(e)?function(l){return o=e(l),Math.abs(o-l)<=r?o:l}:function(l){for(var u=parseFloat(o?l.x:l),f=parseFloat(o?l.y:0),h=Pi,p=0,m=e.length,g,v;m--;)o?(g=e[m].x-u,v=e[m].y-f,g=g*g+v*v):g=Math.abs(e[m]-u),g<h&&(h=g,p=m);return p=!r||h<=r?e[p]:l,o||p===l||Br(l)?p:p+Nn(l)}:Vp(e))},sy=function(e,t,n,r){return Ps(Fn(e)?!t:n===!0?!!(n=0):!r,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Cb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(o,l){return l(o)},r)}},bb=function(e,t){return function(n){return e(parseFloat(n))+(t||Nn(n))}},Pb=function(e,t,n){return ay(e,t,0,1,n)},oy=function(e,t,n){return Ps(n,function(r){return e[~~t(r)]})},Lb=function a(e,t,n){var r=t-e;return Fn(e)?oy(e,a(0,e.length),t):Ps(n,function(o){return(r+(o-e)%r)%r+e})},Ib=function a(e,t,n){var r=t-e,o=r*2;return Fn(e)?oy(e,a(0,e.length-1),t):Ps(n,function(l){return l=(o+(l-e)%o)%o||0,e+(l>r?o-l:l)})},Xl=function(e){for(var t=0,n="",r,o,l,u;~(r=e.indexOf("random(",t));)l=e.indexOf(")",r),u=e.charAt(r+7)==="[",o=e.substr(r+7,l-r-7).match(u?Hx:Np),n+=e.substr(t,r-t)+sy(u?o:+o[0],u?0:+o[1],+o[2]||1e-5),t=l+1;return n+e.substr(t,e.length-t)},ay=function(e,t,n,r,o){var l=t-e,u=r-n;return Ps(o,function(f){return n+((f-e)/l*u||0)})},Db=function a(e,t,n,r){var o=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!o){var l=yn(e),u={},f,h,p,m,g;if(n===!0&&(r=1)&&(n=null),l)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(p=[],m=e.length,g=m-2,h=1;h<m;h++)p.push(a(e[h-1],e[h]));m--,o=function(E){E*=m;var M=Math.min(g,~~E);return p[M](E-M)},n=t}else r||(e=_o(Fn(e)?[]:{},e));if(!p){for(f in t)Em.call(u,e,f,"get",t[f]);o=function(E){return Rm(E,u)||(l?e.p:e)}}}return Ps(n,o)},Uv=function(e,t,n){var r=e.labels,o=Pi,l,u,f;for(l in r)u=r[l]-t,u<0==!!n&&u&&o>(u=Math.abs(u))&&(f=l,o=u);return f},_i=function(e,t,n){var r=e.vars,o=r[t],l=Xt,u=e._ctx,f,h,p;if(o)return f=r[t+"Params"],h=r.callbackScope||e,n&&ws.length&&Qc(),u&&(Xt=u),p=f?o.apply(h,f):o.call(h),Xt=l,p},Ll=function(e){return Cs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Un),e.progress()<1&&_i(e,"onInterrupt"),e},ha,ly=[],uy=function(e){if(e)if(e=!e.name&&e.default||e,_m()||e.headless){var t=e.name,n=Jt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,o={init:Wl,render:Rm,add:Em,kill:Kb,modifier:qb,rawVars:0},l={targetTest:0,get:0,getSetter:Am,aliases:{},register:0};if(Na(),e!==r){if(pi[t])return;Ii(r,Ii(Jc(e,o),l)),_o(r.prototype,_o(o,Jc(e,l))),pi[r.prop=t]=r,e.targetTest&&(Hc.push(r),ym[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xx(t,r),e.register&&e.register(ai,r,si)}else ly.push(e)},Ft=255,Il={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},Nd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ft+.5|0},cy=function(e,t,n){var r=e?Br(e)?[e>>16,e>>8&Ft,e&Ft]:0:Il.black,o,l,u,f,h,p,m,g,v,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Il[e])r=Il[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),l=e.charAt(2),u=e.charAt(3),e="#"+o+o+l+l+u+u+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ft,r&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(Np),!t)f=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,l=p<=.5?p*(h+1):p+h-p*h,o=p*2-l,r.length>3&&(r[3]*=1),r[0]=Nd(f+1/3,o,l),r[1]=Nd(f,o,l),r[2]=Nd(f-1/3,o,l);else if(~e.indexOf("="))return r=e.match(zx),n&&r.length<4&&(r[3]=1),r}else r=e.match(Np)||Il.transparent;r=r.map(Number)}return t&&!E&&(o=r[0]/Ft,l=r[1]/Ft,u=r[2]/Ft,m=Math.max(o,l,u),g=Math.min(o,l,u),p=(m+g)/2,m===g?f=h=0:(v=m-g,h=p>.5?v/(2-m-g):v/(m+g),f=m===o?(l-u)/v+(l<u?6:0):m===l?(u-o)/v+2:(o-l)/v+4,f*=60),r[0]=~~(f+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},fy=function(e){var t=[],n=[],r=-1;return e.split(As).forEach(function(o){var l=o.match(fa)||[];t.push.apply(t,l),n.push(r+=l.length+1)}),t.c=n,t},Fv=function(e,t,n){var r="",o=(e+r).match(As),l=t?"hsla(":"rgba(",u=0,f,h,p,m;if(!o)return e;if(o=o.map(function(g){return(g=cy(g,t,1))&&l+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=fy(e),f=n.c,f.join(r)!==p.c.join(r)))for(h=e.replace(As,"1").split(fa),m=h.length-1;u<m;u++)r+=h[u]+(~f.indexOf(u)?o.shift()||l+"0,0,0,0)":(p.length?p:o.length?o:n).shift());if(!h)for(h=e.split(As),m=h.length-1;u<m;u++)r+=h[u]+o[u];return r+h[m]},As=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Il)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),Nb=/hsl[a]?\(/,hy=function(e){var t=e.join(" "),n;if(As.lastIndex=0,As.test(t))return n=Nb.test(t),e[1]=Fv(e[1],n),e[0]=Fv(e[0],n,fy(e[1])),!0},jl,mi=function(){var a=Date.now,e=500,t=33,n=a(),r=n,o=1e3/240,l=o,u=[],f,h,p,m,g,v,E=function M(y){var x=a()-r,b=y===!0,R,T,D,N;if((x>e||x<0)&&(n+=x-t),r+=x,D=r-n,R=D-l,(R>0||b)&&(N=++m.frame,g=D-m.time*1e3,m.time=D=D/1e3,l+=R+(R>=o?4:o-R),T=1),b||(f=h(M)),T)for(v=0;v<u.length;v++)u[v](D,g,N,y)};return m={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){Gx&&(!Up&&_m()&&(Ji=Up=window,vm=Ji.document||{},xi.gsap=ai,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(ai.version),Wx(Zc||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),ly.forEach(uy)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),h=p||function(y){return setTimeout(y,l-m.time*1e3+1|0)},jl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),jl=0,h=Wl},lagSmoothing:function(y,x){e=y||1/0,t=Math.min(x||33,e)},fps:function(y){o=1e3/(y||240),l=m.time*1e3+o},add:function(y,x,b){var R=x?function(T,D,N,I){y(T,D,N,I),m.remove(R)}:y;return m.remove(y),u[b?"unshift":"push"](R),Na(),R},remove:function(y,x){~(x=u.indexOf(y))&&u.splice(x,1)&&v>=x&&v--},_listeners:u},m}(),Na=function(){return!jl&&mi.wake()},xt={},Ub=/^[\d.\-M][\d.\-,\s]/,Fb=/["']/g,Ob=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,l=n.length,u,f,h;o<l;o++)f=n[o],u=o!==l-1?f.lastIndexOf(","):f.length,h=f.substr(0,u),t[r]=isNaN(h)?h.replace(Fb,"").trim():+h,r=f.substr(u+1).trim();return t},kb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Bb=function(e){var t=(e+"").split("("),n=xt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ob(t[1])]:kb(e).split(",").map(Kx)):xt._CE&&Ub.test(e)?xt._CE("",e):n},dy=function(e){return function(t){return 1-e(1-t)}},py=function a(e,t){for(var n=e._first,r;n;)n instanceof Xn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ho=function(e,t){return e&&(Jt(e)?e:xt[e]||Bb(e))||t},yo=function(e,t,n,r){n===void 0&&(n=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:r},l;return ri(e,function(u){xt[u]=xi[u]=o,xt[l=u.toLowerCase()]=n;for(var f in o)xt[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=xt[u+"."+f]=o[f]}),o},my=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ud=function a(e,t,n){var r=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),l=o/Dp*(Math.asin(1/r)||0),u=function(p){return p===1?1:r*Math.pow(2,-10*p)*db((p-l)*o)+1},f=e==="out"?u:e==="in"?function(h){return 1-u(1-h)}:my(u);return o=Dp/o,f.config=function(h,p){return a(e,h,p)},f},Fd=function a(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:my(n);return r.config=function(o){return a(e,o)},r};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;yo(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;yo("Elastic",Ud("in"),Ud("out"),Ud());(function(a,e){var t=1/e,n=2*t,r=2.5*t,o=function(u){return u<t?a*u*u:u<n?a*Math.pow(u-1.5/e,2)+.75:u<r?a*(u-=2.25/e)*u+.9375:a*Math.pow(u-2.625/e,2)+.984375};yo("Bounce",function(l){return 1-o(1-l)},o)})(7.5625,2.75);yo("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});yo("Circ",function(a){return-(kx(1-a*a)-1)});yo("Sine",function(a){return a===1?1:-hb(a*cb)+1});yo("Back",Fd("in"),Fd("out"),Fd());xt.SteppedEase=xt.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),o=t?1:0,l=1-Bt;return function(u){return((r*Ql(0,l,u)|0)+o)*n}}};La.ease=xt["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Sm+=a+","+a+"Params,"});var gy=function(e,t){this.id=fb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yx,this.set=t?t.getSetter:Am},Yl=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),jl||mi.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Na(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(df(this,n),!o._dp||o.parent||Qx(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&nr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qx(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dv(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?Ia(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?ef(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(Ql(-Math.abs(this._delay),this._tDur,o),r!==!1),hf(this),yb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Na(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&nr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ef(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gb);var r=Un;return Un=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Un=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Nv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Ri(this,n),ii(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,ii(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Bt)},e.eventCallback=function(n,r,o){var l=this.vars;return arguments.length>1?(r?(l[n]=r,o&&(l[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete l[n],this):l[n]},e.then=function(n){var r=this;return new Promise(function(o){var l=Jt(n)?n:$x,u=function(){var h=r.then;r.then=null,Jt(l)&&(l=l(r))&&(l.then||l===r)&&(r.then=h),o(l),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?u():r._prom=u})},e.kill=function(){Ll(this)},a}();Ii(Yl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var Xn=function(a){Ox(e,a);function e(n,r){var o;return n===void 0&&(n={}),o=a.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=ii(n.sortChildren),qt&&nr(n.parent||qt,Ir(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Jx(Ir(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(r,o,l){return Ol(0,arguments,this),this},t.from=function(r,o,l){return Ol(1,arguments,this),this},t.fromTo=function(r,o,l,u){return Ol(2,arguments,this),this},t.set=function(r,o,l){return o.duration=0,o.parent=this,Fl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new on(r,o,Ri(this,l),1),this},t.call=function(r,o,l){return nr(this,on.delayedCall(0,r,o),l)},t.staggerTo=function(r,o,l,u,f,h,p){return l.duration=o,l.stagger=l.stagger||u,l.onComplete=h,l.onCompleteParams=p,l.parent=this,new on(r,l,Ri(this,f)),this},t.staggerFrom=function(r,o,l,u,f,h,p){return l.runBackwards=1,Fl(l).immediateRender=ii(l.immediateRender),this.staggerTo(r,o,l,u,f,h,p)},t.staggerFromTo=function(r,o,l,u,f,h,p,m){return u.startAt=l,Fl(u).immediateRender=ii(u.immediateRender),this.staggerTo(r,o,u,f,h,p,m)},t.render=function(r,o,l){var u=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:_n(r),m=this._zTime<0!=r<0&&(this._initted||!h),g,v,E,M,y,x,b,R,T,D,N,I;if(this!==qt&&p>f&&r>=0&&(p=f),p!==this._tTime||l||m){if(u!==this._time&&h&&(p+=this._time-u,r+=this._time-u),g=p,T=this._start,R=this._ts,x=!R,m&&(h||(u=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(N=this._yoyo,y=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,o,l);if(g=_n(p%y),p===f?(M=this._repeat,g=h):(M=~~(p/y),M&&M===p/y&&(g=h,M--),g>h&&(g=h)),D=Ia(this._tTime,y),!u&&this._tTime&&D!==M&&this._tTime-D*y-this._dur<=0&&(D=M),N&&M&1&&(g=h-g,I=1),M!==D&&!this._lock){var F=N&&D&1,A=F===(N&&M&1);if(M<D&&(F=!F),u=F?0:p%h?h:p,this._lock=1,this.render(u||(I?0:_n(M*y)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),u&&u!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,A&&(this._lock=2,u=F?h:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;py(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Tb(this,_n(u),_n(g)),b&&(p-=g-(g=b._start))),this._tTime=p,this._time=g,this._act=!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,u=0),!u&&g&&!o&&!M&&(_i(this,"onStart"),this._tTime!==p))return this;if(g>=u&&r>=0)for(v=this._first;v;){if(E=v._next,(v._act||g>=v._start)&&v._ts&&b!==v){if(v.parent!==this)return this.render(r,o,l);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,o,l),g!==this._time||!this._ts&&!x){b=0,E&&(p+=this._zTime=-Bt);break}}v=E}else{v=this._last;for(var C=r<0?r:g;v;){if(E=v._prev,(v._act||C<=v._end)&&v._ts&&b!==v){if(v.parent!==this)return this.render(r,o,l);if(v.render(v._ts>0?(C-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(C-v._start)*v._ts,o,l||Un&&(v._initted||v._startAt)),g!==this._time||!this._ts&&!x){b=0,E&&(p+=this._zTime=C?-Bt:Bt);break}}v=E}}if(b&&!o&&(this.pause(),b.render(g>=u?0:-Bt)._zTime=g>=u?1:-1,this._ts))return this._start=T,hf(this),this.render(r,o,l);this._onUpdate&&!o&&_i(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&u)&&(T===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&Cs(this,1),!o&&!(r<0&&!u)&&(p||u||!f)&&(_i(this,p===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,o){var l=this;if(Br(o)||(o=Ri(this,o,r)),!(r instanceof Yl)){if(Fn(r))return r.forEach(function(u){return l.add(u,o)}),this;if(yn(r))return this.addLabel(r,o);if(Jt(r))r=on.delayedCall(0,r);else return this}return this!==r?nr(this,r,o):this},t.getChildren=function(r,o,l,u){r===void 0&&(r=!0),o===void 0&&(o=!0),l===void 0&&(l=!0),u===void 0&&(u=-Pi);for(var f=[],h=this._first;h;)h._start>=u&&(h instanceof on?o&&f.push(h):(l&&f.push(h),r&&f.push.apply(f,h.getChildren(!0,o,l)))),h=h._next;return f},t.getById=function(r){for(var o=this.getChildren(1,1,1),l=o.length;l--;)if(o[l].vars.id===r)return o[l]},t.remove=function(r){return yn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(ff(this,r),r===this._recent&&(this._recent=this._last),fo(this))},t.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),a.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},t.addLabel=function(r,o){return this.labels[r]=Ri(this,o),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,o,l){var u=on.delayedCall(0,o||Wl,l);return u.data="isPause",this._hasPause=1,nr(this,u,Ri(this,r))},t.removePause=function(r){var o=this._first;for(r=Ri(this,r);o;)o._start===r&&o.data==="isPause"&&Cs(o),o=o._next},t.killTweensOf=function(r,o,l){for(var u=this.getTweensOf(r,l),f=u.length;f--;)ys!==u[f]&&u[f].kill(r,o);return this},t.getTweensOf=function(r,o){for(var l=[],u=Li(r),f=this._first,h=Br(o),p;f;)f instanceof on?_b(f._targets,u)&&(h?(!ys||f._initted&&f._ts)&&f.globalTime(0)<=o&&f.globalTime(f.totalDuration())>o:!o||f.isActive())&&l.push(f):(p=f.getTweensOf(u,o)).length&&l.push.apply(l,p),f=f._next;return l},t.tweenTo=function(r,o){o=o||{};var l=this,u=Ri(l,r),f=o,h=f.startAt,p=f.onStart,m=f.onStartParams,g=f.immediateRender,v,E=on.to(l,Ii({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:o.duration||Math.abs((u-(h&&"time"in h?h.time:l._time))/l.timeScale())||Bt,onStart:function(){if(l.pause(),!v){var y=o.duration||Math.abs((u-(h&&"time"in h?h.time:l._time))/l.timeScale());E._dur!==y&&Da(E,y,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,m||[])}},o));return g?E.render(0):E},t.tweenFromTo=function(r,o,l){return this.tweenTo(o,Ii({startAt:{time:Ri(this,r)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Uv(this,Ri(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Uv(this,Ri(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Bt)},t.shiftChildren=function(r,o,l){l===void 0&&(l=0);for(var u=this._first,f=this.labels,h;u;)u._start>=l&&(u._start+=r,u._end+=r),u=u._next;if(o)for(h in f)f[h]>=l&&(f[h]+=r);return fo(this)},t.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return a.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,l;o;)l=o._next,this.remove(o),o=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),fo(this)},t.totalDuration=function(r){var o=0,l=this,u=l._last,f=Pi,h,p,m;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(m=l.parent;u;)h=u._prev,u._dirty&&u.totalDuration(),p=u._start,p>f&&l._sort&&u._ts&&!l._lock?(l._lock=1,nr(l,u,p-u._delay,1)._lock=0):f=p,p<0&&u._ts&&(o-=p,(!m&&!l._dp||m&&m.smoothChildTiming)&&(l._start+=p/l._ts,l._time-=p,l._tTime-=p),l.shiftChildren(-p,!1,-1/0),f=0),u._end>o&&u._ts&&(o=u._end),u=h;Da(l,l===qt&&l._time>o?l._time:o,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(qt._ts&&(qx(qt,ef(r,qt)),jx=mi.frame),mi.frame>=Lv){Lv+=vi.autoSleep||120;var o=qt._first;if((!o||!o._ts)&&vi.autoSleep&&mi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||mi.sleep()}}},e}(Yl);Ii(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zb=function(e,t,n,r,o,l,u){var f=new si(this._pt,e,t,0,1,My,null,o),h=0,p=0,m,g,v,E,M,y,x,b;for(f.b=n,f.e=r,n+="",r+="",(x=~r.indexOf("random("))&&(r=Xl(r)),l&&(b=[n,r],l(b,e,t),n=b[0],r=b[1]),g=n.match(Id)||[];m=Id.exec(r);)E=m[0],M=r.substring(h,m.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==g[p++]&&(y=parseFloat(g[p-1])||0,f._pt={_next:f._pt,p:M||p===1?M:",",s:y,c:E.charAt(1)==="="?_a(y,E)-y:parseFloat(E)-y,m:v&&v<4?Math.round:0},h=Id.lastIndex);return f.c=h<r.length?r.substring(h,r.length):"",f.fp=u,(Vx.test(r)||x)&&(f.e=0),this._pt=f,f},Em=function(e,t,n,r,o,l,u,f,h,p){Jt(r)&&(r=r(o||0,e,l));var m=e[t],g=n!=="get"?n:Jt(m)?h?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,v=Jt(m)?h?Xb:yy:wm,E;if(yn(r)&&(~r.indexOf("random(")&&(r=Xl(r)),r.charAt(1)==="="&&(E=_a(g,r)+(Nn(g)||0),(E||E===0)&&(r=E))),!p||g!==r||Hp)return!isNaN(g*r)&&r!==""?(E=new si(this._pt,e,t,+g||0,r-(g||0),typeof m=="boolean"?Yb:Sy,0,v),h&&(E.fp=h),u&&E.modifier(u,this,e),this._pt=E):(!m&&!(t in e)&&xm(t,r),zb.call(this,e,t,g,r,v,f||vi.stringFilter,h))},Vb=function(e,t,n,r,o){if(Jt(e)&&(e=kl(e,o,t,n,r)),!ur(e)||e.style&&e.nodeType||Fn(e)||Bx(e))return yn(e)?kl(e,o,t,n,r):e;var l={},u;for(u in e)l[u]=kl(e[u],o,t,n,r);return l},_y=function(e,t,n,r,o,l){var u,f,h,p;if(pi[e]&&(u=new pi[e]).init(o,u.rawVars?t[e]:Vb(t[e],r,o,l,n),n,r,l)!==!1&&(n._pt=f=new si(n._pt,o,e,0,1,u.render,u,0,u.priority),n!==ha))for(h=n._ptLookup[n._targets.indexOf(o)],p=u._props.length;p--;)h[u._props[p]]=f;return u},ys,Hp,Tm=function a(e,t,n){var r=e.vars,o=r.ease,l=r.startAt,u=r.immediateRender,f=r.lazy,h=r.onUpdate,p=r.runBackwards,m=r.yoyoEase,g=r.keyframes,v=r.autoRevert,E=e._dur,M=e._startAt,y=e._targets,x=e.parent,b=x&&x.data==="nested"?x.vars.targets:y,R=e._overwrite==="auto"&&!mm,T=e.timeline,D,N,I,F,A,C,z,$,K,ue,se,q,ne;if(T&&(!g||!o)&&(o="none"),e._ease=ho(o,La.ease),e._yEase=m?dy(ho(m===!0?o:m,La.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!r.runBackwards,!T||g&&!r.stagger){if($=y[0]?co(y[0]).harness:0,q=$&&r[$.prop],D=Jc(r,ym),M&&(M._zTime<0&&M.progress(1),t<0&&p&&u&&!v?M.render(-1,!0):M.revert(p&&E?Vc:mb),M._lazy=0),l){if(Cs(e._startAt=on.set(y,Ii({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ii(f),startAt:null,delay:0,onUpdate:h&&function(){return _i(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un||!u&&!v)&&e._startAt.revert(Vc),u&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(u=!1),I=Ii({overwrite:!1,data:"isFromStart",lazy:u&&!M&&ii(f),immediateRender:u,stagger:0,parent:x},D),q&&(I[$.prop]=q),Cs(e._startAt=on.set(y,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un?e._startAt.revert(Vc):e._startAt.render(-1,!0)),e._zTime=t,!u)a(e._startAt,Bt,Bt);else if(!t)return}for(e._pt=e._ptCache=0,f=E&&ii(f)||f&&!E,N=0;N<y.length;N++){if(A=y[N],z=A._gsap||Mm(y)[N]._gsap,e._ptLookup[N]=ue={},Fp[z.id]&&ws.length&&Qc(),se=b===y?N:b.indexOf(A),$&&(K=new $).init(A,q||D,e,se,b)!==!1&&(e._pt=F=new si(e._pt,A,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(B){ue[B]=F}),K.priority&&(C=1)),!$||q)for(I in D)pi[I]&&(K=_y(I,D,e,se,A,b))?K.priority&&(C=1):ue[I]=F=Em.call(e,A,I,"get",D[I],se,b,0,r.stringFilter);e._op&&e._op[N]&&e.kill(A,e._op[N]),R&&e._pt&&(ys=e,qt.killTweensOf(A,ue,e.globalTime(t)),ne=!e.parent,ys=0),e._pt&&f&&(Fp[z.id]=1)}C&&Ey(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!ne,g&&t<=0&&T.render(Pi,!0,!0)},Hb=function(e,t,n,r,o,l,u,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,g,v;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,v=e._targets.length;v--;){if(p=g[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Hp=1,e.vars[t]="+=0",Tm(e,u),Hp=0,f?Gl(t+" not eligible for reset"):1;h.push(p)}for(v=h.length;v--;)m=h[v],p=m._pt||m,p.s=(r||r===0)&&!o?r:p.s+(r||0)+l*p.c,p.c=n-p.s,m.e&&(m.e=nn(n)+Nn(m.e)),m.b&&(m.b=p.s+Nn(m.b))},Gb=function(e,t){var n=e[0]?co(e[0]).harness:0,r=n&&n.aliases,o,l,u,f;if(!r)return t;o=_o({},t);for(l in r)if(l in o)for(f=r[l].split(","),u=f.length;u--;)o[f[u]]=o[l];return o},Wb=function(e,t,n,r){var o=t.ease||r||"power1.inOut",l,u;if(Fn(t))u=n[e]||(n[e]=[]),t.forEach(function(f,h){return u.push({t:h/(t.length-1)*100,v:f,e:o})});else for(l in t)u=n[l]||(n[l]=[]),l==="ease"||u.push({t:parseFloat(e),v:t[l],e:o})},kl=function(e,t,n,r,o){return Jt(e)?e.call(t,n,r,o):yn(e)&&~e.indexOf("random(")?Xl(e):e},vy=Sm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xy={};ri(vy+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return xy[a]=1});var on=function(a){Ox(e,a);function e(n,r,o,l){var u;typeof r=="number"&&(o.duration=r,r=o,o=null),u=a.call(this,l?r:Fl(r))||this;var f=u.vars,h=f.duration,p=f.delay,m=f.immediateRender,g=f.stagger,v=f.overwrite,E=f.keyframes,M=f.defaults,y=f.scrollTrigger,x=f.yoyoEase,b=r.parent||qt,R=(Fn(n)||Bx(n)?Br(n[0]):"length"in r)?[n]:Li(n),T,D,N,I,F,A,C,z;if(u._targets=R.length?Mm(R):Gl("GSAP target "+n+" not found. https://gsap.com",!vi.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=v,E||g||Dc(h)||Dc(p)){if(r=u.vars,T=u.timeline=new Xn({data:"nested",defaults:M||{},targets:b&&b.data==="nested"?b.vars.targets:R}),T.kill(),T.parent=T._dp=Ir(u),T._start=0,g||Dc(h)||Dc(p)){if(I=R.length,C=g&&iy(g),ur(g))for(F in g)~vy.indexOf(F)&&(z||(z={}),z[F]=g[F]);for(D=0;D<I;D++)N=Jc(r,xy),N.stagger=0,x&&(N.yoyoEase=x),z&&_o(N,z),A=R[D],N.duration=+kl(h,Ir(u),D,A,R),N.delay=(+kl(p,Ir(u),D,A,R)||0)-u._delay,!g&&I===1&&N.delay&&(u._delay=p=N.delay,u._start+=p,N.delay=0),T.to(A,N,C?C(D,A,R):0),T._ease=xt.none;T.duration()?h=p=0:u.timeline=0}else if(E){Fl(Ii(T.vars.defaults,{ease:"none"})),T._ease=ho(E.ease||r.ease||"none");var $=0,K,ue,se;if(Fn(E))E.forEach(function(q){return T.to(R,q,">")}),T.duration();else{N={};for(F in E)F==="ease"||F==="easeEach"||Wb(F,E[F],N,E.easeEach);for(F in N)for(K=N[F].sort(function(q,ne){return q.t-ne.t}),$=0,D=0;D<K.length;D++)ue=K[D],se={ease:ue.e,duration:(ue.t-(D?K[D-1].t:0))/100*h},se[F]=ue.v,T.to(R,se,$),$+=se.duration;T.duration()<h&&T.to({},{duration:h-T.duration()})}}h||u.duration(h=T.duration())}else u.timeline=0;return v===!0&&!mm&&(ys=Ir(u),qt.killTweensOf(R),ys=0),nr(b,Ir(u),o),r.reversed&&u.reverse(),r.paused&&u.paused(!0),(m||!h&&!E&&u._start===_n(b._time)&&ii(m)&&Sb(Ir(u))&&b.data!=="nested")&&(u._tTime=-Bt,u.render(Math.max(0,-p)||0)),y&&Jx(Ir(u),y),u}var t=e.prototype;return t.render=function(r,o,l){var u=this._time,f=this._tDur,h=this._dur,p=r<0,m=r>f-Bt&&!p?f:r<Bt?0:r,g,v,E,M,y,x,b,R,T;if(!h)Eb(this,r,o,l);else if(m!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p){if(g=m,R=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+r,o,l);if(g=_n(m%M),m===f?(E=this._repeat,g=h):(E=~~(m/M),E&&E===_n(m/M)&&(g=h,E--),g>h&&(g=h)),x=this._yoyo&&E&1,x&&(T=this._yEase,g=h-g),y=Ia(this._tTime,M),g===u&&!l&&this._initted&&E===y)return this._tTime=m,this;E!==y&&(R&&this._yEase&&py(R,x),this.vars.repeatRefresh&&!x&&!this._lock&&this._time!==M&&this._initted&&(this._lock=l=1,this.render(_n(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(ey(this,p?r:g,l,o,m))return this._tTime=0,this;if(u!==this._time&&!(l&&this.vars.repeatRefresh&&E!==y))return this;if(h!==this._dur)return this.render(r,o,l)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(T||this._ease)(g/h),this._from&&(this.ratio=b=1-b),g&&!u&&!o&&!E&&(_i(this,"onStart"),this._tTime!==m))return this;for(v=this._pt;v;)v.r(b,v.d),v=v._next;R&&R.render(r<0?r:R._dur*R._ease(g/this._dur),o,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(p&&Op(this,r,o,l),_i(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!o&&this.parent&&_i(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&Op(this,r,!0,!0),(r||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Cs(this,1),!o&&!(p&&!u)&&(m||u||x)&&(_i(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),a.prototype.invalidate.call(this,r)},t.resetTo=function(r,o,l,u,f){jl||mi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Tm(this,h),p=this._ease(h/this._dur),Hb(this,r,o,l,u,p,h,f)?this.resetTo(r,o,l,u,1):(df(this,0),this.parent||Zx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Ll(this):this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,ys&&ys.vars.overwrite!==!0)._first||Ll(this),this.parent&&l!==this.timeline.totalDuration()&&Da(this,this._dur*this.timeline._tDur/l,0,1),this}var u=this._targets,f=r?Li(r):u,h=this._ptLookup,p=this._pt,m,g,v,E,M,y,x;if((!o||o==="all")&&xb(u,f))return o==="all"&&(this._pt=0),Ll(this);for(m=this._op=this._op||[],o!=="all"&&(yn(o)&&(M={},ri(o,function(b){return M[b]=1}),o=M),o=Gb(u,o)),x=u.length;x--;)if(~f.indexOf(u[x])){g=h[x],o==="all"?(m[x]=o,E=g,v={}):(v=m[x]=m[x]||{},E=o);for(M in E)y=g&&g[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&ff(this,y,"_pt"),delete g[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&p&&Ll(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return Ol(1,arguments)},e.delayedCall=function(r,o,l,u){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:u})},e.fromTo=function(r,o,l){return Ol(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,l){return qt.killTweensOf(r,o,l)},e}(Yl);Ii(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(a){on[a]=function(){var e=new Xn,t=Bp.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var wm=function(e,t,n){return e[t]=n},yy=function(e,t,n){return e[t](n)},Xb=function(e,t,n,r){return e[t](r.fp,n)},jb=function(e,t,n){return e.setAttribute(t,n)},Am=function(e,t){return Jt(e[t])?yy:gm(e[t])&&e.setAttribute?jb:wm},Sy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},My=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Rm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qb=function(e,t,n,r){for(var o=this._pt,l;o;)l=o._next,o.p===r&&o.modifier(e,t,n),o=l},Kb=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ff(this,t,"_pt"):t.dep||(n=1),t=r;return!n},$b=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Ey=function(e){for(var t=e._pt,n,r,o,l;t;){for(n=t._next,r=o;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:l)?t._prev._next=t:o=t,(t._next=r)?r._prev=t:l=t,t=n}e._pt=o},si=function(){function a(t,n,r,o,l,u,f,h,p){this.t=n,this.s=o,this.c=l,this.p=r,this.r=u||Sy,this.d=f||this,this.set=h||wm,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=$b,this.m=n,this.mt=o,this.tween=r},a}();ri(Sm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return ym[a]=1});xi.TweenMax=xi.TweenLite=on;xi.TimelineLite=xi.TimelineMax=Xn;qt=new Xn({sortChildren:!1,defaults:La,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=hy;var po=[],Gc={},Zb=[],Ov=0,Qb=0,Od=function(e){return(Gc[e]||Zb).map(function(t){return t()})},Gp=function(){var e=Date.now(),t=[];e-Ov>2&&(Od("matchMediaInit"),po.forEach(function(n){var r=n.queries,o=n.conditions,l,u,f,h;for(u in r)l=Ji.matchMedia(r[u]).matches,l&&(f=1),l!==o[u]&&(o[u]=l,h=1);h&&(n.revert(),f&&t.push(n))}),Od("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ov=e,Od("matchMedia"))},Ty=function(){function a(t,n){this.selector=n&&zp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qb++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,r,o){Jt(n)&&(o=r,r=n,n=Jt);var l=this,u=function(){var h=Xt,p=l.selector,m;return h&&h!==l&&h.data.push(l),o&&(l.selector=zp(o)),Xt=l,m=r.apply(l,arguments),Jt(m)&&l._r.push(m),Xt=h,l.selector=p,l.isReverted=!1,m};return l.last=u,n===Jt?u(l,function(f){return l.add(null,f)}):n?l[n]=u:u},e.ignore=function(n){var r=Xt;Xt=null,n(this),Xt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof a?n.push.apply(n,r.getTweens()):r instanceof on&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?function(){for(var u=o.getTweens(),f=o.data.length,h;f--;)h=o.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return u.splice(u.indexOf(p),1)}));for(u.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=o.data.length;f--;)h=o.data[f],h instanceof Xn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof on)&&h.revert&&h.revert(n);o._r.forEach(function(p){return p(n,o)}),o.isReverted=!0}():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),r)for(var l=po.length;l--;)po[l].id===this.id&&po.splice(l,1)},e.revert=function(n){this.kill(n||{})},a}(),Jb=function(){function a(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=a.prototype;return e.add=function(n,r,o){ur(n)||(n={matches:n});var l=new Ty(0,o||this.scope),u=l.conditions={},f,h,p;Xt&&!l.selector&&(l.selector=Xt.selector),this.contexts.push(l),r=l.add("onMatch",r),l.queries=n;for(h in n)h==="all"?p=1:(f=Ji.matchMedia(n[h]),f&&(po.indexOf(l)<0&&po.push(l),(u[h]=f.matches)&&(p=1),f.addListener?f.addListener(Gp):f.addEventListener("change",Gp)));return p&&r(l,function(m){return l.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},a}(),tf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return uy(r)})},timeline:function(e){return new Xn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,r){yn(e)&&(e=Li(e)[0]);var o=co(e||{}).get,l=n?$x:Kx;return n==="native"&&(n=""),e&&(t?l((pi[t]&&pi[t].get||o)(e,t,n,r)):function(u,f,h){return l((pi[u]&&pi[u].get||o)(e,u,f,h))})},quickSetter:function(e,t,n){if(e=Li(e),e.length>1){var r=e.map(function(p){return ai.quickSetter(p,t,n)}),o=r.length;return function(p){for(var m=o;m--;)r[m](p)}}e=e[0]||{};var l=pi[t],u=co(e),f=u.harness&&(u.harness.aliases||{})[t]||t,h=l?function(p){var m=new l;ha._pt=0,m.init(e,n?p+n:p,ha,0,[e]),m.render(1,m),ha._pt&&Rm(1,ha)}:u.set(e,f);return l?h:function(p){return h(e,f,n?p+n:p,u,1)}},quickTo:function(e,t,n){var r,o=ai.to(e,_o((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),l=function(f,h,p){return o.resetTo(t,f,h,p)};return l.tween=o,l},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ho(e.ease,La.ease)),Iv(La,e||{})},config:function(e){return Iv(vi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,o=e.defaults,l=e.extendTimeline;(r||"").split(",").forEach(function(u){return u&&!pi[u]&&!xi[u]&&Gl(t+" effect requires "+u+" plugin.")}),Dd[t]=function(u,f,h){return n(Li(u),Ii(f||{},o),h)},l&&(Xn.prototype[t]=function(u,f,h){return this.add(Dd[t](u,ur(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){xt[e]=ho(t)},parseEase:function(e,t){return arguments.length?ho(e,t):xt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Xn(e),r,o;for(n.smoothChildTiming=ii(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,r=qt._first;r;)o=r._next,(t||!(!r._dur&&r instanceof on&&r.vars.onComplete===r._targets[0]))&&nr(n,r,r._start-r._delay),r=o;return nr(qt,n,0),n},context:function(e,t){return e?new Ty(e,t):Xt},matchMedia:function(e){return new Jb(e)},matchMediaRefresh:function(){return po.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Gp()},addEventListener:function(e,t){var n=Gc[e]||(Gc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Lb,wrapYoyo:Ib,distribute:iy,random:sy,snap:ry,normalize:Pb,getUnit:Nn,clamp:Ab,splitColor:cy,toArray:Li,selector:zp,mapRange:ay,pipe:Cb,unitize:bb,interpolate:Db,shuffle:ny},install:Wx,effects:Dd,ticker:mi,updateRoot:Xn.updateRoot,plugins:pi,globalTimeline:qt,core:{PropTween:si,globals:Xx,Tween:on,Timeline:Xn,Animation:Yl,getCache:co,_removeLinkedListItem:ff,reverting:function(){return Un},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return mm=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return tf[a]=on[a]});mi.add(Xn.updateRoot);ha=tf.to({},{duration:0});var eP=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},tP=function(e,t){var n=e._targets,r,o,l;for(r in t)for(o=n.length;o--;)l=e._ptLookup[o][r],l&&(l=l.d)&&(l._pt&&(l=eP(l,r)),l&&l.modifier&&l.modifier(t[r],e,n[o],r))},kd=function(e,t){return{name:e,rawVars:1,init:function(r,o,l){l._onInit=function(u){var f,h;if(yn(o)&&(f={},ri(o,function(p){return f[p]=1}),o=f),t){f={};for(h in o)f[h]=t(o[h]);o=f}tP(u,o)}}}},ai=tf.registerPlugin({name:"attr",init:function(e,t,n,r,o){var l,u,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",u=this.add(e,"setAttribute",(f||0)+"",t[l],r,o,0,0,l),u.op=l,u.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)Un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kd("roundProps",Vp),kd("modifiers"),kd("snap",ry))||tf;on.version=Xn.version=ai.version="3.12.5";Gx=1;_m()&&Na();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kv,Ss,va,Cm,uo,Bv,bm,nP=function(){return typeof window<"u"},zr={},ro=180/Math.PI,xa=Math.PI/180,oa=Math.atan2,zv=1e8,Pm=/([A-Z])/g,iP=/(left|right|width|margin|padding|x)/i,rP=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ay=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lP=function(e,t,n){return e.style[t]=n},uP=function(e,t,n){return e.style.setProperty(t,n)},cP=function(e,t,n){return e._gsap[t]=n},fP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hP=function(e,t,n,r,o){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(o,l)},dP=function(e,t,n,r,o){var l=e._gsap;l[t]=n,l.renderTransform(o,l)},Kt="transform",oi=Kt+"Origin",pP=function a(e,t){var n=this,r=this.target,o=r.style,l=r._gsap;if(e in zr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(u){return n.tfm[u]=Dr(r,u)}):this.tfm[e]=l.x?l[e]:Dr(r,e),e===oi&&(this.tfm.zOrigin=l.zOrigin);else return ir.transform.split(",").forEach(function(u){return a.call(n,u,t)});if(this.props.indexOf(Kt)>=0)return;l.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=Kt}(o||t)&&this.props.push(e,t,o[e])},Ry=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mP=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,o,l;for(o=0;o<e.length;o+=3)e[o+1]?t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Pm,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=bm(),(!o||!o.isStart)&&!n[Kt]&&(Ry(n),r.zOrigin&&n[oi]&&(n[oi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Cy=function(e,t){var n={target:e,props:[],revert:mP,save:pP};return e._gsap||ai.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},by,Xp=function(e,t){var n=Ss.createElementNS?Ss.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ss.createElement(e);return n&&n.style?n:Ss.createElement(e)},sr=function a(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Pm,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&a(e,Ua(t)||t,1)||""},Vv="O,Moz,ms,Ms,Webkit".split(","),Ua=function(e,t,n){var r=t||uo,o=r.style,l=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Vv[l]+e in o););return l<0?null:(l===3?"ms":l>=0?Vv[l]:"")+e},jp=function(){nP()&&window.document&&(kv=window,Ss=kv.document,va=Ss.documentElement,uo=Xp("div")||{style:{}},Xp("div"),Kt=Ua(Kt),oi=Kt+"Origin",uo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",by=!!Ua("perspective"),bm=ai.core.reverting,Cm=1)},Bd=function a(e){var t=Xp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,o=this.style.cssText,l;if(va.appendChild(t),t.appendChild(this),this.style.display="block",e)try{l=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(l=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),va.removeChild(t),this.style.cssText=o,l},Hv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Py=function(e){var t;try{t=e.getBBox()}catch{t=Bd.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Bd||(t=Bd.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Hv(e,["x","cx","x1"])||0,y:+Hv(e,["y","cy","y1"])||0,width:0,height:0}:t},Ly=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Py(e))},vo=function(e,t){if(t){var n=e.style,r;t in zr&&t!==oi&&(t=Kt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Pm,"-$1").toLowerCase())):n.removeAttribute(t)}},Ms=function(e,t,n,r,o,l){var u=new si(e._pt,t,n,0,1,l?Ay:wy);return e._pt=u,u.b=r,u.e=o,e._props.push(n),u},Gv={deg:1,rad:1,turn:1},gP={grid:1,flex:1},bs=function a(e,t,n,r){var o=parseFloat(n)||0,l=(n+"").trim().substr((o+"").length)||"px",u=uo.style,f=iP.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),m=100,g=r==="px",v=r==="%",E,M,y,x;if(r===l||!o||Gv[r]||Gv[l])return o;if(l!=="px"&&!g&&(o=a(e,t,n,"px")),x=e.getCTM&&Ly(e),(v||l==="%")&&(zr[t]||~t.indexOf("adius")))return E=x?e.getBBox()[f?"width":"height"]:e[p],nn(v?o/E*m:o/100*E);if(u[f?"width":"height"]=m+(g?l:r),M=~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Ss||!M.appendChild)&&(M=Ss.body),y=M._gsap,y&&v&&y.width&&f&&y.time===mi.time&&!y.uncache)return nn(o/y.width*m);if(v&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=m+r,E=e[p],b?e.style[t]=b:vo(e,t)}else(v||l==="%")&&!gP[sr(M,"display")]&&(u.position=sr(e,"position")),M===e&&(u.position="static"),M.appendChild(uo),E=uo[p],M.removeChild(uo),u.position="absolute";return f&&v&&(y=co(M),y.time=mi.time,y.width=M[p]),nn(g?E*o/m:E&&o?m/E*o:0)},Dr=function(e,t,n,r){var o;return Cm||jp(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),zr[t]&&t!=="transform"?(o=Kl(e,r),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:rf(sr(e,oi))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=nf[t]&&nf[t](e,t,n)||sr(e,t)||Yx(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?bs(e,t,o,n)+n:o},_P=function(e,t,n,r){if(!n||n==="none"){var o=Ua(t,e,1),l=o&&sr(e,o,1);l&&l!==n?(t=o,n=l):t==="borderColor"&&(n=sr(e,"borderTopColor"))}var u=new si(this._pt,e.style,t,0,1,My),f=0,h=0,p,m,g,v,E,M,y,x,b,R,T,D;if(u.b=n,u.e=r,n+="",r+="",r==="auto"&&(M=e.style[t],e.style[t]=r,r=sr(e,t)||r,M?e.style[t]=M:vo(e,t)),p=[n,r],hy(p),n=p[0],r=p[1],g=n.match(fa)||[],D=r.match(fa)||[],D.length){for(;m=fa.exec(r);)y=m[0],b=r.substring(f,m.index),E?E=(E+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(E=1),y!==(M=g[h++]||"")&&(v=parseFloat(M)||0,T=M.substr((v+"").length),y.charAt(1)==="="&&(y=_a(v,y)+T),x=parseFloat(y),R=y.substr((x+"").length),f=fa.lastIndex-R.length,R||(R=R||vi.units[t]||T,f===r.length&&(r+=R,u.e+=R)),T!==R&&(v=bs(e,t,M,R)||0),u._pt={_next:u._pt,p:b||h===1?b:",",s:v,c:x-v,m:E&&E<4||t==="zIndex"?Math.round:0});u.c=f<r.length?r.substring(f,r.length):""}else u.r=t==="display"&&r==="none"?Ay:wy;return Vx.test(r)&&(u.e=0),this._pt=u,u},Wv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vP=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Wv[n]||n,t[1]=Wv[r]||r,t.join(" ")},xP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,o=t.u,l=n._gsap,u,f,h;if(o==="all"||o===!0)r.cssText="",f=1;else for(o=o.split(","),h=o.length;--h>-1;)u=o[h],zr[u]&&(f=1,u=u==="transformOrigin"?oi:Kt),vo(n,u);f&&(vo(n,Kt),l&&(l.svg&&n.removeAttribute("transform"),Kl(n,1),l.uncache=1,Ry(r)))}},nf={clearProps:function(e,t,n,r,o){if(o.data!=="isFromStart"){var l=e._pt=new si(e._pt,t,n,0,0,xP);return l.u=r,l.pr=-10,l.tween=o,e._props.push(n),1}}},ql=[1,0,0,1,0,0],Iy={},Dy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xv=function(e){var t=sr(e,Kt);return Dy(t)?ql:t.substr(7).match(zx).map(nn)},Lm=function(e,t){var n=e._gsap||co(e),r=e.style,o=Xv(e),l,u,f,h;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,o=[f.a,f.b,f.c,f.d,f.e,f.f],o.join(",")==="1,0,0,1,0,0"?ql:o):(o===ql&&!e.offsetParent&&e!==va&&!n.svg&&(f=r.display,r.display="block",l=e.parentNode,(!l||!e.offsetParent)&&(h=1,u=e.nextElementSibling,va.appendChild(e)),o=Xv(e),f?r.display=f:vo(e,"display"),h&&(u?l.insertBefore(e,u):l?l.appendChild(e):va.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Yp=function(e,t,n,r,o,l){var u=e._gsap,f=o||Lm(e,!0),h=u.xOrigin||0,p=u.yOrigin||0,m=u.xOffset||0,g=u.yOffset||0,v=f[0],E=f[1],M=f[2],y=f[3],x=f[4],b=f[5],R=t.split(" "),T=parseFloat(R[0])||0,D=parseFloat(R[1])||0,N,I,F,A;n?f!==ql&&(I=v*y-E*M)&&(F=T*(y/I)+D*(-M/I)+(M*b-y*x)/I,A=T*(-E/I)+D*(v/I)-(v*b-E*x)/I,T=F,D=A):(N=Py(e),T=N.x+(~R[0].indexOf("%")?T/100*N.width:T),D=N.y+(~(R[1]||R[0]).indexOf("%")?D/100*N.height:D)),r||r!==!1&&u.smooth?(x=T-h,b=D-p,u.xOffset=m+(x*v+b*M)-x,u.yOffset=g+(x*E+b*y)-b):u.xOffset=u.yOffset=0,u.xOrigin=T,u.yOrigin=D,u.smooth=!!r,u.origin=t,u.originIsAbsolute=!!n,e.style[oi]="0px 0px",l&&(Ms(l,u,"xOrigin",h,T),Ms(l,u,"yOrigin",p,D),Ms(l,u,"xOffset",m,u.xOffset),Ms(l,u,"yOffset",g,u.yOffset)),e.setAttribute("data-svg-origin",T+" "+D)},Kl=function(e,t){var n=e._gsap||new gy(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,l="px",u="deg",f=getComputedStyle(e),h=sr(e,oi)||"0",p,m,g,v,E,M,y,x,b,R,T,D,N,I,F,A,C,z,$,K,ue,se,q,ne,B,te,oe,k,Q,be,J,fe;return p=m=g=M=y=x=b=R=T=0,v=E=1,n.svg=!!(e.getCTM&&Ly(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[Kt]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Kt]!=="none"?f[Kt]:"")),r.scale=r.rotate=r.translate="none"),I=Lm(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),h=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",ne=""):ne=!t&&e.getAttribute("data-svg-origin"),Yp(e,ne||h,!!ne||n.originIsAbsolute,n.smooth!==!1,I)),D=n.xOrigin||0,N=n.yOrigin||0,I!==ql&&(z=I[0],$=I[1],K=I[2],ue=I[3],p=se=I[4],m=q=I[5],I.length===6?(v=Math.sqrt(z*z+$*$),E=Math.sqrt(ue*ue+K*K),M=z||$?oa($,z)*ro:0,b=K||ue?oa(K,ue)*ro+M:0,b&&(E*=Math.abs(Math.cos(b*xa))),n.svg&&(p-=D-(D*z+N*K),m-=N-(D*$+N*ue))):(fe=I[6],be=I[7],oe=I[8],k=I[9],Q=I[10],J=I[11],p=I[12],m=I[13],g=I[14],F=oa(fe,Q),y=F*ro,F&&(A=Math.cos(-F),C=Math.sin(-F),ne=se*A+oe*C,B=q*A+k*C,te=fe*A+Q*C,oe=se*-C+oe*A,k=q*-C+k*A,Q=fe*-C+Q*A,J=be*-C+J*A,se=ne,q=B,fe=te),F=oa(-K,Q),x=F*ro,F&&(A=Math.cos(-F),C=Math.sin(-F),ne=z*A-oe*C,B=$*A-k*C,te=K*A-Q*C,J=ue*C+J*A,z=ne,$=B,K=te),F=oa($,z),M=F*ro,F&&(A=Math.cos(F),C=Math.sin(F),ne=z*A+$*C,B=se*A+q*C,$=$*A-z*C,q=q*A-se*C,z=ne,se=B),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),v=nn(Math.sqrt(z*z+$*$+K*K)),E=nn(Math.sqrt(q*q+fe*fe)),F=oa(se,q),b=Math.abs(F)>2e-4?F*ro:0,T=J?1/(J<0?-J:J):0),n.svg&&(ne=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dy(sr(e,Kt)),ne&&e.setAttribute("transform",ne))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(v*=-1,b+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=g+l,n.scaleX=nn(v),n.scaleY=nn(E),n.rotation=nn(M)+u,n.rotationX=nn(y)+u,n.rotationY=nn(x)+u,n.skewX=b+u,n.skewY=R+u,n.transformPerspective=T+l,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[oi]=rf(h)),n.xOffset=n.yOffset=0,n.force3D=vi.force3D,n.renderTransform=n.svg?SP:by?Ny:yP,n.uncache=0,n},rf=function(e){return(e=e.split(" "))[0]+" "+e[1]},zd=function(e,t,n){var r=Nn(t);return nn(parseFloat(t)+parseFloat(bs(e,"x",n+"px",r)))+r},yP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ny(e,t)},eo="0deg",Cl="0px",to=") ",Ny=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,l=n.x,u=n.y,f=n.z,h=n.rotation,p=n.rotationY,m=n.rotationX,g=n.skewX,v=n.skewY,E=n.scaleX,M=n.scaleY,y=n.transformPerspective,x=n.force3D,b=n.target,R=n.zOrigin,T="",D=x==="auto"&&e&&e!==1||x===!0;if(R&&(m!==eo||p!==eo)){var N=parseFloat(p)*xa,I=Math.sin(N),F=Math.cos(N),A;N=parseFloat(m)*xa,A=Math.cos(N),l=zd(b,l,I*A*-R),u=zd(b,u,-Math.sin(N)*-R),f=zd(b,f,F*A*-R+R)}y!==Cl&&(T+="perspective("+y+to),(r||o)&&(T+="translate("+r+"%, "+o+"%) "),(D||l!==Cl||u!==Cl||f!==Cl)&&(T+=f!==Cl||D?"translate3d("+l+", "+u+", "+f+") ":"translate("+l+", "+u+to),h!==eo&&(T+="rotate("+h+to),p!==eo&&(T+="rotateY("+p+to),m!==eo&&(T+="rotateX("+m+to),(g!==eo||v!==eo)&&(T+="skew("+g+", "+v+to),(E!==1||M!==1)&&(T+="scale("+E+", "+M+to),b.style[Kt]=T||"translate(0, 0)"},SP=function(e,t){var n=t||this,r=n.xPercent,o=n.yPercent,l=n.x,u=n.y,f=n.rotation,h=n.skewX,p=n.skewY,m=n.scaleX,g=n.scaleY,v=n.target,E=n.xOrigin,M=n.yOrigin,y=n.xOffset,x=n.yOffset,b=n.forceCSS,R=parseFloat(l),T=parseFloat(u),D,N,I,F,A;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=xa,h*=xa,D=Math.cos(f)*m,N=Math.sin(f)*m,I=Math.sin(f-h)*-g,F=Math.cos(f-h)*g,h&&(p*=xa,A=Math.tan(h-p),A=Math.sqrt(1+A*A),I*=A,F*=A,p&&(A=Math.tan(p),A=Math.sqrt(1+A*A),D*=A,N*=A)),D=nn(D),N=nn(N),I=nn(I),F=nn(F)):(D=m,F=g,N=I=0),(R&&!~(l+"").indexOf("px")||T&&!~(u+"").indexOf("px"))&&(R=bs(v,"x",l,"px"),T=bs(v,"y",u,"px")),(E||M||y||x)&&(R=nn(R+E-(E*D+M*I)+y),T=nn(T+M-(E*N+M*F)+x)),(r||o)&&(A=v.getBBox(),R=nn(R+r/100*A.width),T=nn(T+o/100*A.height)),A="matrix("+D+","+N+","+I+","+F+","+R+","+T+")",v.setAttribute("transform",A),b&&(v.style[Kt]=A)},MP=function(e,t,n,r,o){var l=360,u=yn(o),f=parseFloat(o)*(u&&~o.indexOf("rad")?ro:1),h=f-r,p=r+h+"deg",m,g;return u&&(m=o.split("_")[1],m==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-l)),m==="cw"&&h<0?h=(h+l*zv)%l-~~(h/l)*l:m==="ccw"&&h>0&&(h=(h-l*zv)%l-~~(h/l)*l)),e._pt=g=new si(e._pt,t,n,r,h,sP),g.e=p,g.u="deg",e._props.push(n),g},jv=function(e,t){for(var n in t)e[n]=t[n];return e},EP=function(e,t,n){var r=jv({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",l=n.style,u,f,h,p,m,g,v,E;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),l[Kt]=t,u=Kl(n,1),vo(n,Kt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Kt],l[Kt]=t,u=Kl(n,1),l[Kt]=h);for(f in zr)h=r[f],p=u[f],h!==p&&o.indexOf(f)<0&&(v=Nn(h),E=Nn(p),m=v!==E?bs(n,f,h,E):parseFloat(h),g=parseFloat(p),e._pt=new si(e._pt,u,f,m,g-m,Wp),e._pt.u=E||0,e._props.push(f));jv(u,r)};ri("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",r="Bottom",o="Left",l=(e<3?[t,n,r,o]:[t+o,t+n,r+n,r+o]).map(function(u){return e<2?a+u:"border"+u+a});nf[e>1?"border"+a:a]=function(u,f,h,p,m){var g,v;if(arguments.length<4)return g=l.map(function(E){return Dr(u,E,h)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(p+"").split(" "),v={},l.forEach(function(E,M){return v[E]=g[M]=g[M]||g[(M-1)/2|0]}),u.init(f,v,m)}});var Uy={name:"css",register:jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,o){var l=this._props,u=e.style,f=n.vars.startAt,h,p,m,g,v,E,M,y,x,b,R,T,D,N,I,F;Cm||jp(),this.styles=this.styles||Cy(e),F=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(pi[M]&&_y(M,t,n,r,e,o)))){if(v=typeof p,E=nf[M],v==="function"&&(p=p.call(n,r,e,o),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=Xl(p)),E)E(this,e,M,p,n)&&(I=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",As.lastIndex=0,As.test(h)||(y=Nn(h),x=Nn(p)),x?y!==x&&(h=bs(e,M,h,x)+x):y&&(p+=y),this.add(u,"setProperty",h,p,r,o,0,0,M),l.push(M),F.push(M,0,u[M]);else if(v!=="undefined"){if(f&&M in f?(h=typeof f[M]=="function"?f[M].call(n,r,e,o):f[M],yn(h)&&~h.indexOf("random(")&&(h=Xl(h)),Nn(h+"")||h==="auto"||(h+=vi.units[M]||Nn(Dr(e,M))||""),(h+"").charAt(1)==="="&&(h=Dr(e,M))):h=Dr(e,M),g=parseFloat(h),b=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),m=parseFloat(p),M in ir&&(M==="autoAlpha"&&(g===1&&Dr(e,"visibility")==="hidden"&&m&&(g=0),F.push("visibility",0,u.visibility),Ms(this,u,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),M!=="scale"&&M!=="transform"&&(M=ir[M],~M.indexOf(",")&&(M=M.split(",")[0]))),R=M in zr,R){if(this.styles.save(M),T||(D=e._gsap,D.renderTransform&&!t.parseTransform||Kl(e,t.parseTransform),N=t.smoothOrigin!==!1&&D.smooth,T=this._pt=new si(this._pt,u,Kt,0,1,D.renderTransform,D,0,-1),T.dep=1),M==="scale")this._pt=new si(this._pt,D,"scaleY",D.scaleY,(b?_a(D.scaleY,b+m):m)-D.scaleY||0,Wp),this._pt.u=0,l.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(oi,0,u[oi]),p=vP(p),D.svg?Yp(e,p,0,N,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==D.zOrigin&&Ms(this,D,"zOrigin",D.zOrigin,x),Ms(this,u,M,rf(h),rf(p)));continue}else if(M==="svgOrigin"){Yp(e,p,1,N,0,this);continue}else if(M in Iy){MP(this,D,M,g,b?_a(g,b+p):p);continue}else if(M==="smoothOrigin"){Ms(this,D,"smooth",D.smooth,p);continue}else if(M==="force3D"){D[M]=p;continue}else if(M==="transform"){EP(this,p,e);continue}}else M in u||(M=Ua(M)||M);if(R||(m||m===0)&&(g||g===0)&&!rP.test(p)&&M in u)y=(h+"").substr((g+"").length),m||(m=0),x=Nn(p)||(M in vi.units?vi.units[M]:y),y!==x&&(g=bs(e,M,h,x)),this._pt=new si(this._pt,R?D:u,M,g,(b?_a(g,b+m):m)-g,!R&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?aP:Wp),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=oP);else if(M in u)_P.call(this,e,M,h,b?b+p:p);else if(M in e)this.add(e,M,h||e[M],b?b+p:p,r,o);else if(M!=="parseTransform"){xm(M,p);continue}R||(M in u?F.push(M,0,u[M]):F.push(M,1,h||e[M])),l.push(M)}}I&&Ey(this)},render:function(e,t){if(t.tween._time||!bm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Dr,aliases:ir,getSetter:function(e,t,n){var r=ir[t];return r&&r.indexOf(",")<0&&(t=r),t in zr&&t!==oi&&(e._gsap.x||Dr(e,"x"))?n&&Bv===n?t==="scale"?fP:cP:(Bv=n||{})&&(t==="scale"?hP:dP):e.style&&!gm(e.style[t])?lP:~t.indexOf("-")?uP:Am(e,t)},core:{_removeProperty:vo,_getMatrix:Lm}};ai.utils.checkPrefix=Ua;ai.core.getStyleSaver=Cy;(function(a,e,t,n){var r=ri(a+","+e+","+t,function(o){zr[o]=1});ri(e,function(o){vi.units[o]="deg",Iy[o]=1}),ir[r[13]]=a+","+e,ri(n,function(o){var l=o.split(":");ir[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){vi.units[a]="px"});ai.registerPlugin(Uy);var qp=ai.registerPlugin(Uy)||ai;qp.core.Tween;class TP extends vn{constructor(e,t={}){super(e),this.isWater=!0;const n=this,r=t.textureWidth!==void 0?t.textureWidth:512,o=t.textureHeight!==void 0?t.textureHeight:512,l=t.clipBias!==void 0?t.clipBias:0,u=t.alpha!==void 0?t.alpha:1,f=t.time!==void 0?t.time:0,h=t.waterNormals!==void 0?t.waterNormals:null,p=t.sunDirection!==void 0?t.sunDirection:new j(.70707,.70707,0),m=new nt(t.sunColor!==void 0?t.sunColor:16777215),g=new nt(t.waterColor!==void 0?t.waterColor:8355711),v=t.eye!==void 0?t.eye:new j(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,M=t.side!==void 0?t.side:or,y=t.fog!==void 0?t.fog:!1,x=new gs,b=new j,R=new j,T=new j,D=new ot,N=new j(0,0,-1),I=new wt,F=new j,A=new j,C=new wt,z=new ot,$=new Dn,K=new Rs(r,o),ue={name:"MirrorShader",uniforms:qc.merge([we.fog,we.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ot},sunColor:{value:new nt(8355711)},sunDirection:{value:new j(.70707,.70707,0)},eye:{value:new j},waterColor:{value:new nt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},se=new lr({name:ue.name,uniforms:qc.clone(ue.uniforms),vertexShader:ue.vertexShader,fragmentShader:ue.fragmentShader,lights:!0,side:M,fog:y});se.uniforms.mirrorSampler.value=K.texture,se.uniforms.textureMatrix.value=z,se.uniforms.alpha.value=u,se.uniforms.time.value=f,se.uniforms.normalSampler.value=h,se.uniforms.sunColor.value=m,se.uniforms.waterColor.value=g,se.uniforms.sunDirection.value=p,se.uniforms.distortionScale.value=E,se.uniforms.eye.value=v,n.material=se,n.onBeforeRender=function(q,ne,B){if(R.setFromMatrixPosition(n.matrixWorld),T.setFromMatrixPosition(B.matrixWorld),D.extractRotation(n.matrixWorld),b.set(0,0,1),b.applyMatrix4(D),F.subVectors(R,T),F.dot(b)>0)return;F.reflect(b).negate(),F.add(R),D.extractRotation(B.matrixWorld),N.set(0,0,-1),N.applyMatrix4(D),N.add(T),A.subVectors(R,N),A.reflect(b).negate(),A.add(R),$.position.copy(F),$.up.set(0,1,0),$.up.applyMatrix4(D),$.up.reflect(b),$.lookAt(A),$.far=B.far,$.updateMatrixWorld(),$.projectionMatrix.copy(B.projectionMatrix),z.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),z.multiply($.projectionMatrix),z.multiply($.matrixWorldInverse),x.setFromNormalAndCoplanarPoint(b,R),x.applyMatrix4($.matrixWorldInverse),I.set(x.normal.x,x.normal.y,x.normal.z,x.constant);const te=$.projectionMatrix;C.x=(Math.sign(I.x)+te.elements[8])/te.elements[0],C.y=(Math.sign(I.y)+te.elements[9])/te.elements[5],C.z=-1,C.w=(1+te.elements[10])/te.elements[14],I.multiplyScalar(2/I.dot(C)),te.elements[2]=I.x,te.elements[6]=I.y,te.elements[10]=I.z+1-l,te.elements[14]=I.w,v.setFromMatrixPosition(B.matrixWorld);const oe=q.getRenderTarget(),k=q.xr.enabled,Q=q.shadowMap.autoUpdate;n.visible=!1,q.xr.enabled=!1,q.shadowMap.autoUpdate=!1,q.setRenderTarget(K),q.state.buffers.depth.setMask(!0),q.autoClear===!1&&q.clear(),q.render(ne,$),n.visible=!0,q.xr.enabled=k,q.shadowMap.autoUpdate=Q,q.setRenderTarget(oe);const be=B.viewport;be!==void 0&&q.state.viewport(be)}}}function wP(){const a=no.useRef(!1),e=no.useRef({x:0,y:0}),t=no.useRef({horizontal:0,vertical:0}),n=no.useRef({x:3.5,y:1,z:-10}),r=new j(.25,.55,0),o=no.useRef(null);return no.useEffect(()=>{(()=>{window.innerWidth<=768?n.current={x:1.5,y:1,z:-9}:n.current={x:3.5,y:1,z:-10}})();const u=document.getElementById("canvas"),f={width:window.innerWidth,height:window.innerHeight},h=new tT,p=new Dn(25,f.width/f.height,.1,1e4);p.position.set(n.current.x-25,n.current.y+2,n.current.z),p.lookAt(r),h.add(p),qp.to(p.position,{x:n.current.x,y:n.current.y,duration:3,ease:"circ.out",onUpdate:()=>{p.lookAt(r)}});const m=Math.sqrt(n.current.x**2+n.current.y**2+n.current.z**2);t.current.horizontal=Math.atan2(n.current.x,n.current.z),t.current.vertical=Math.asin(n.current.y/m);const g=new CC({canvas:u,antialias:!0});g.shadowMap.enabled=!0,g.shadowMap.type=qv,g.setSize(f.width,f.height);const v=new LT(16777215,1);h.add(v);const E=new bp(16777215,5);E.position.set(-100,20,1e3),E.castShadow=!0,E.shadow.mapSize.width=4096,E.shadow.mapSize.height=4096,E.shadow.camera.near=.5,E.shadow.camera.far=1500,E.shadow.camera.left=-50,E.shadow.camera.right=50,E.shadow.camera.top=50,E.shadow.camera.bottom=-50,h.add(E);const M=new bp(16777215,.6);M.position.set(0,300,-100),M.castShadow=!0,M.shadow.mapSize.width=512,M.shadow.mapSize.height=512,h.add(M);const y=new Ra(500,500),x=new af({color:11184810}),b=new vn(y,x);b.rotation.x=-Math.PI/2,b.position.y=0,b.position.z=-243,b.receiveShadow=!0,h.add(b);const R=new bC;R.load("/models/testmodel0101_v2.gltf",q=>{const ne=q.scene,B=q.animations;if(ne.traverse(te=>{te instanceof vn&&(te.castShadow=!0,te.receiveShadow=!0)}),h.add(ne),B&&B.length>0){const te=new ev(ne);B.forEach(Q=>{te.clipAction(Q).play()});const oe=new Q0,k=()=>{requestAnimationFrame(k);const Q=oe.getDelta();te.update(Q),g.render(h,p)};k()}}),R.load("/models/testmodel_child_.gltf",q=>{const ne=q.scene,B=q.animations;if(ne.position.set(0,0,-.75),ne.traverse(te=>{te instanceof vn&&(te.castShadow=!0,te.receiveShadow=!0)}),h.add(ne),B&&B.length>0){const te=new ev(ne);B.forEach(Q=>{te.clipAction(Q).play()});const oe=new Q0,k=()=>{requestAnimationFrame(k);const Q=oe.getDelta();te.update(Q),g.render(h,p)};k()}});const T=new cf;T.scale.setScalar(5e4);const D=T.material.uniforms;D.turbidity.value=.5,D.rayleigh.value=.95,D.mieCoefficient.value=.005,D.mieDirectionalG.value=.8,D.sunPosition.value.set(-10,0,100),h.add(T);const N=new Ra(1e3,1e3),I=new bx().load("/textures/eslint.config.jpg",q=>{q.wrapS=q.wrapT=mo}),F=new TP(N,{textureWidth:512,textureHeight:512,waterNormals:I,sunDirection:new j(-1,-1,-1),sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:h.fog!==void 0});F.rotation.x=-Math.PI/2,h.add(F),o.current=F,F.position.y=-4;const A=new j;A.set(-10,15,100).normalize(),F.material.uniforms.sunDirection.value.copy(A);const C=()=>{requestAnimationFrame(C),F.material.uniforms.time.value+=1/1e3,g.render(h,p)};C();const z=()=>{f.width=window.innerWidth,f.height=window.innerHeight,p.aspect=f.width/f.height,p.updateProjectionMatrix(),g.setSize(f.width,f.height)},$=q=>{a.current=!0,e.current={x:q.clientX,y:q.clientY}},K=q=>{if(a.current){const ne=q.clientX-e.current.x,B=q.clientY-e.current.y;e.current={x:q.clientX,y:q.clientY};const te=.005;t.current.horizontal+=ne*te,t.current.vertical-=B*te,t.current.vertical=Math.max(-Math.PI/2,Math.min(Math.PI/2,t.current.vertical));const oe=m*Math.cos(t.current.vertical)*Math.sin(t.current.horizontal),k=Math.max(1,m*Math.sin(t.current.vertical)),Q=m*Math.cos(t.current.vertical)*Math.cos(t.current.horizontal);p.position.set(oe,k,Q),p.lookAt(r)}},ue=()=>{a.current&&(a.current=!1,qp.to(t.current,{horizontal:Math.atan2(n.current.x,n.current.z),vertical:Math.asin(n.current.y/m),duration:1,ease:"power2.out",onUpdate:()=>{const q=m*Math.cos(t.current.vertical)*Math.sin(t.current.horizontal),ne=Math.max(1,m*Math.sin(t.current.vertical)),B=m*Math.cos(t.current.vertical)*Math.cos(t.current.horizontal);p.position.set(q,ne,B),p.lookAt(r)}}))};window.addEventListener("resize",z),u.addEventListener("mousedown",$),window.addEventListener("mousemove",K),window.addEventListener("mouseup",ue);const se=()=>{requestAnimationFrame(se),g.render(h,p)};return se(),()=>{window.removeEventListener("resize",z),u.removeEventListener("mousedown",$),window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",ue)}},[]),gn.jsxs(gn.Fragment,{children:[gn.jsx("div",{className:"noise"}),gn.jsx("canvas",{id:"canvas",style:{width:"100vw",height:"100vh",touchAction:"none"}}),gn.jsx("div",{className:"container",children:gn.jsxs("div",{className:"inner",children:[gn.jsx("div",{className:"img2025",children:gn.jsx("img",{src:"/2025.svg",alt:""})}),gn.jsx("div",{className:"text",children:gn.jsxs("p",{children:["あけましておめでとうございます。",gn.jsx("br",{}),"昨年はいろいろとお世話になり、",gn.jsx("wbr",{}),"ありがとうございました。",gn.jsx("br",{}),"本年もどうぞよろしくお願いいたします。"]})}),gn.jsx("div",{className:"copy-text",children:gn.jsx("img",{src:"/text_2.svg",alt:"",width:"174",height:"680"})})]})}),gn.jsx("div",{className:"fadein"})]})}SM.createRoot(document.getElementById("root")).render(gn.jsx(no.StrictMode,{children:gn.jsx(wP,{})}));

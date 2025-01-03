(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var jh={exports:{}},vl={},Yh={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function dM(){if(e0)return pt;e0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=m&&k[m]||k["@@iterator"],typeof k=="function"?k:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(k,te,Re){this.props=k,this.context=te,this.refs=M,this.updater=Re||v}y.prototype.isReactComponent={},y.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function R(k,te,Re){this.props=k,this.context=te,this.refs=M,this.updater=Re||v}var C=R.prototype=new x;C.constructor=R,E(C,y.prototype),C.isPureReactComponent=!0;var T=Array.isArray,D=Object.prototype.hasOwnProperty,N={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function F(k,te,Re){var J,Z={},me=null,he=null;if(te!=null)for(J in te.ref!==void 0&&(he=te.ref),te.key!==void 0&&(me=""+te.key),te)D.call(te,J)&&!I.hasOwnProperty(J)&&(Z[J]=te[J]);var ve=arguments.length-2;if(ve===1)Z.children=Re;else if(1<ve){for(var we=Array(ve),He=0;He<ve;He++)we[He]=arguments[He+2];Z.children=we}if(k&&k.defaultProps)for(J in ve=k.defaultProps,ve)Z[J]===void 0&&(Z[J]=ve[J]);return{$$typeof:a,type:k,key:me,ref:he,props:Z,_owner:N.current}}function A(k,te){return{$$typeof:a,type:k.type,key:te,ref:k.ref,props:k.props,_owner:k._owner}}function b(k){return typeof k=="object"&&k!==null&&k.$$typeof===a}function B(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Re){return te[Re]})}var K=/\/+/g;function q(k,te){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):te.toString(36)}function ce(k,te,Re,J,Z){var me=typeof k;(me==="undefined"||me==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(me){case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case a:case e:he=!0}}if(he)return he=k,Z=Z(he),k=J===""?"."+q(he,0):J,T(Z)?(Re="",k!=null&&(Re=k.replace(K,"$&/")+"/"),ce(Z,te,Re,"",function(He){return He})):Z!=null&&(b(Z)&&(Z=A(Z,Re+(!Z.key||he&&he.key===Z.key?"":(""+Z.key).replace(K,"$&/")+"/")+k)),te.push(Z)),1;if(he=0,J=J===""?".":J+":",T(k))for(var ve=0;ve<k.length;ve++){me=k[ve];var we=J+q(me,ve);he+=ce(me,te,Re,we,Z)}else if(we=g(k),typeof we=="function")for(k=we.call(k),ve=0;!(me=k.next()).done;)me=me.value,we=J+q(me,ve++),he+=ce(me,te,Re,we,Z);else if(me==="object")throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return he}function re(k,te,Re){if(k==null)return k;var J=[],Z=0;return ce(k,J,"","",function(me){return te.call(Re,me,Z++)}),J}function Q(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(Re){(k._status===0||k._status===-1)&&(k._status=1,k._result=Re)},function(Re){(k._status===0||k._status===-1)&&(k._status=2,k._result=Re)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var oe={current:null},z={transition:null},ue={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:z,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:re,forEach:function(k,te,Re){re(k,function(){te.apply(this,arguments)},Re)},count:function(k){var te=0;return re(k,function(){te++}),te},toArray:function(k){return re(k,function(te){return te})||[]},only:function(k){if(!b(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},pt.Component=y,pt.Fragment=t,pt.Profiler=i,pt.PureComponent=R,pt.StrictMode=n,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,pt.act=le,pt.cloneElement=function(k,te,Re){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var J=E({},k.props),Z=k.key,me=k.ref,he=k._owner;if(te!=null){if(te.ref!==void 0&&(me=te.ref,he=N.current),te.key!==void 0&&(Z=""+te.key),k.type&&k.type.defaultProps)var ve=k.type.defaultProps;for(we in te)D.call(te,we)&&!I.hasOwnProperty(we)&&(J[we]=te[we]===void 0&&ve!==void 0?ve[we]:te[we])}var we=arguments.length-2;if(we===1)J.children=Re;else if(1<we){ve=Array(we);for(var He=0;He<we;He++)ve[He]=arguments[He+2];J.children=ve}return{$$typeof:a,type:k.type,key:Z,ref:me,props:J,_owner:he}},pt.createContext=function(k){return k={$$typeof:l,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:o,_context:k},k.Consumer=k},pt.createElement=F,pt.createFactory=function(k){var te=F.bind(null,k);return te.type=k,te},pt.createRef=function(){return{current:null}},pt.forwardRef=function(k){return{$$typeof:u,render:k}},pt.isValidElement=b,pt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:Q}},pt.memo=function(k,te){return{$$typeof:h,type:k,compare:te===void 0?null:te}},pt.startTransition=function(k){var te=z.transition;z.transition={};try{k()}finally{z.transition=te}},pt.unstable_act=le,pt.useCallback=function(k,te){return oe.current.useCallback(k,te)},pt.useContext=function(k){return oe.current.useContext(k)},pt.useDebugValue=function(){},pt.useDeferredValue=function(k){return oe.current.useDeferredValue(k)},pt.useEffect=function(k,te){return oe.current.useEffect(k,te)},pt.useId=function(){return oe.current.useId()},pt.useImperativeHandle=function(k,te,Re){return oe.current.useImperativeHandle(k,te,Re)},pt.useInsertionEffect=function(k,te){return oe.current.useInsertionEffect(k,te)},pt.useLayoutEffect=function(k,te){return oe.current.useLayoutEffect(k,te)},pt.useMemo=function(k,te){return oe.current.useMemo(k,te)},pt.useReducer=function(k,te,Re){return oe.current.useReducer(k,te,Re)},pt.useRef=function(k){return oe.current.useRef(k)},pt.useState=function(k){return oe.current.useState(k)},pt.useSyncExternalStore=function(k,te,Re){return oe.current.useSyncExternalStore(k,te,Re)},pt.useTransition=function(){return oe.current.useTransition()},pt.version="18.3.1",pt}var t0;function Kp(){return t0||(t0=1,Yh.exports=dM()),Yh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function pM(){if(n0)return vl;n0=1;var a=Kp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(u,f,h){var p,m={},g=null,v=null;h!==void 0&&(g=""+h),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)n.call(f,p)&&!o.hasOwnProperty(p)&&(m[p]=f[p]);if(u&&u.defaultProps)for(p in f=u.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:u,key:g,ref:v,props:m,_owner:i.current}}return vl.Fragment=t,vl.jsx=l,vl.jsxs=l,vl}var i0;function mM(){return i0||(i0=1,jh.exports=pM()),jh.exports}var qt=mM(),gs=Kp(),sc={},qh={exports:{}},ni={},Kh={exports:{}},$h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function gM(){return r0||(r0=1,function(a){function e(z,ue){var le=z.length;z.push(ue);e:for(;0<le;){var k=le-1>>>1,te=z[k];if(0<i(te,ue))z[k]=ue,z[le]=te,le=k;else break e}}function t(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var ue=z[0],le=z.pop();if(le!==ue){z[0]=le;e:for(var k=0,te=z.length,Re=te>>>1;k<Re;){var J=2*(k+1)-1,Z=z[J],me=J+1,he=z[me];if(0>i(Z,le))me<te&&0>i(he,Z)?(z[k]=he,z[me]=le,k=me):(z[k]=Z,z[J]=le,k=J);else if(me<te&&0>i(he,le))z[k]=he,z[me]=le,k=me;else break e}}return ue}function i(z,ue){var le=z.sortIndex-ue.sortIndex;return le!==0?le:z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();a.unstable_now=function(){return l.now()-u}}var f=[],h=[],p=1,m=null,g=3,v=!1,E=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var ue=t(h);ue!==null;){if(ue.callback===null)n(h);else if(ue.startTime<=z)n(h),ue.sortIndex=ue.expirationTime,e(f,ue);else break;ue=t(h)}}function T(z){if(M=!1,C(z),!E)if(t(f)!==null)E=!0,Q(D);else{var ue=t(h);ue!==null&&oe(T,ue.startTime-z)}}function D(z,ue){E=!1,M&&(M=!1,x(F),F=-1),v=!0;var le=g;try{for(C(ue),m=t(f);m!==null&&(!(m.expirationTime>ue)||z&&!B());){var k=m.callback;if(typeof k=="function"){m.callback=null,g=m.priorityLevel;var te=k(m.expirationTime<=ue);ue=a.unstable_now(),typeof te=="function"?m.callback=te:m===t(f)&&n(f),C(ue)}else n(f);m=t(f)}if(m!==null)var Re=!0;else{var J=t(h);J!==null&&oe(T,J.startTime-ue),Re=!1}return Re}finally{m=null,g=le,v=!1}}var N=!1,I=null,F=-1,A=5,b=-1;function B(){return!(a.unstable_now()-b<A)}function K(){if(I!==null){var z=a.unstable_now();b=z;var ue=!0;try{ue=I(!0,z)}finally{ue?q():(N=!1,I=null)}}else N=!1}var q;if(typeof R=="function")q=function(){R(K)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,re=ce.port2;ce.port1.onmessage=K,q=function(){re.postMessage(null)}}else q=function(){y(K,0)};function Q(z){I=z,N||(N=!0,q())}function oe(z,ue){F=y(function(){z(a.unstable_now())},ue)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){E||v||(E=!0,Q(D))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_getFirstCallbackNode=function(){return t(f)},a.unstable_next=function(z){switch(g){case 1:case 2:case 3:var ue=3;break;default:ue=g}var le=g;g=ue;try{return z()}finally{g=le}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,ue){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var le=g;g=z;try{return ue()}finally{g=le}},a.unstable_scheduleCallback=function(z,ue,le){var k=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?k+le:k):le=k,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=le+te,z={id:p++,callback:ue,priorityLevel:z,startTime:le,expirationTime:te,sortIndex:-1},le>k?(z.sortIndex=le,e(h,z),t(f)===null&&z===t(h)&&(M?(x(F),F=-1):M=!0,oe(T,le-k))):(z.sortIndex=te,e(f,z),E||v||(E=!0,Q(D))),z},a.unstable_shouldYield=B,a.unstable_wrapCallback=function(z){var ue=g;return function(){var le=g;g=ue;try{return z.apply(this,arguments)}finally{g=le}}}}($h)),$h}var s0;function _M(){return s0||(s0=1,Kh.exports=gM()),Kh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function vM(){if(o0)return ni;o0=1;var a=Kp(),e=_M();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,c=1;c<arguments.length;c++)s+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,i={};function o(r,s){l(r,s),l(r+"Capture",s)}function l(r,s){for(i[r]=s,r=0;r<s.length;r++)n.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(r){return f.call(m,r)?!0:f.call(p,r)?!1:h.test(r)?m[r]=!0:(p[r]=!0,!1)}function v(r,s,c,d){if(c!==null&&c.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:c!==null?!c.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function E(r,s,c,d){if(s===null||typeof s>"u"||v(r,s,c,d))return!0;if(d)return!1;if(c!==null)switch(c.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(r,s,c,d,_,S,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=_,this.mustUseProperty=c,this.propertyName=r,this.type=s,this.sanitizeURL=S,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){y[r]=new M(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];y[s]=new M(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){y[r]=new M(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){y[r]=new M(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){y[r]=new M(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){y[r]=new M(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){y[r]=new M(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){y[r]=new M(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){y[r]=new M(r,5,!1,r.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(x,R);y[s]=new M(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(x,R);y[s]=new M(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(x,R);y[s]=new M(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){y[r]=new M(r,1,!1,r.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){y[r]=new M(r,1,!1,r.toLowerCase(),null,!0,!0)});function C(r,s,c,d){var _=y.hasOwnProperty(s)?y[s]:null;(_!==null?_.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,c,_,d)&&(c=null),d||_===null?g(s)&&(c===null?r.removeAttribute(s):r.setAttribute(s,""+c)):_.mustUseProperty?r[_.propertyName]=c===null?_.type===3?!1:"":c:(s=_.attributeName,d=_.attributeNamespace,c===null?r.removeAttribute(s):(_=_.type,c=_===3||_===4&&c===!0?"":""+c,d?r.setAttributeNS(d,s,c):r.setAttribute(s,c))))}var T=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),N=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),z=Symbol.iterator;function ue(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,k;function te(r){if(k===void 0)try{throw Error()}catch(c){var s=c.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+r}var Re=!1;function J(r,s){if(!r||Re)return"";Re=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ie){var d=ie}Reflect.construct(r,[],s)}else{try{s.call()}catch(ie){d=ie}r.call(s.prototype)}else{try{throw Error()}catch(ie){d=ie}r()}}catch(ie){if(ie&&d&&typeof ie.stack=="string"){for(var _=ie.stack.split(`
`),S=d.stack.split(`
`),w=_.length-1,O=S.length-1;1<=w&&0<=O&&_[w]!==S[O];)O--;for(;1<=w&&0<=O;w--,O--)if(_[w]!==S[O]){if(w!==1||O!==1)do if(w--,O--,0>O||_[w]!==S[O]){var V=`
`+_[w].replace(" at new "," at ");return r.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",r.displayName)),V}while(1<=w&&0<=O);break}}}finally{Re=!1,Error.prepareStackTrace=c}return(r=r?r.displayName||r.name:"")?te(r):""}function Z(r){switch(r.tag){case 5:return te(r.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return r=J(r.type,!1),r;case 11:return r=J(r.type.render,!1),r;case 1:return r=J(r.type,!0),r;default:return""}}function me(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case N:return"Portal";case A:return"Profiler";case F:return"StrictMode";case q:return"Suspense";case ce:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case B:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case K:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case re:return s=r.displayName||null,s!==null?s:me(r.type)||"Memo";case Q:s=r._payload,r=r._init;try{return me(r(s))}catch{}}return null}function he(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(s);case 8:return s===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function we(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function He(r){var s=we(r)?"checked":"value",c=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),d=""+r[s];if(!r.hasOwnProperty(s)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var _=c.get,S=c.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return _.call(this)},set:function(w){d=""+w,S.call(this,w)}}),Object.defineProperty(r,s,{enumerable:c.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function lt(r){r._valueTracker||(r._valueTracker=He(r))}function ut(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var c=s.getValue(),d="";return r&&(d=we(r)?r.checked?"true":"false":r.value),r=d,r!==c?(s.setValue(r),!0):!1}function Ot(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function H(r,s){var c=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??r._wrapperState.initialChecked})}function On(r,s){var c=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;c=ve(s.value!=null?s.value:c),r._wrapperState={initialChecked:d,initialValue:c,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function mt(r,s){s=s.checked,s!=null&&C(r,"checked",s,!1)}function ht(r,s){mt(r,s);var c=ve(s.value),d=s.type;if(c!=null)d==="number"?(c===0&&r.value===""||r.value!=c)&&(r.value=""+c):r.value!==""+c&&(r.value=""+c);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?It(r,s.type,c):s.hasOwnProperty("defaultValue")&&It(r,s.type,ve(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ye(r,s,c){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,c||s===r.value||(r.value=s),r.defaultValue=s}c=r.name,c!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,c!==""&&(r.name=c)}function It(r,s,c){(s!=="number"||Ot(r.ownerDocument)!==r)&&(c==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+c&&(r.defaultValue=""+c))}var Xe=Array.isArray;function U(r,s,c,d){if(r=r.options,s){s={};for(var _=0;_<c.length;_++)s["$"+c[_]]=!0;for(c=0;c<r.length;c++)_=s.hasOwnProperty("$"+r[c].value),r[c].selected!==_&&(r[c].selected=_),_&&d&&(r[c].defaultSelected=!0)}else{for(c=""+ve(c),s=null,_=0;_<r.length;_++){if(r[_].value===c){r[_].selected=!0,d&&(r[_].defaultSelected=!0);return}s!==null||r[_].disabled||(s=r[_])}s!==null&&(s.selected=!0)}}function P(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ne(r,s){var c=s.value;if(c==null){if(c=s.children,s=s.defaultValue,c!=null){if(s!=null)throw Error(t(92));if(Xe(c)){if(1<c.length)throw Error(t(93));c=c[0]}s=c}s==null&&(s=""),c=s}r._wrapperState={initialValue:ve(c)}}function ge(r,s){var c=ve(s.value),d=ve(s.defaultValue);c!=null&&(c=""+c,c!==r.value&&(r.value=c),s.defaultValue==null&&r.defaultValue!==c&&(r.defaultValue=c)),d!=null&&(r.defaultValue=""+d)}function xe(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function de(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?de(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ce,Ue=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,c,d,_){MSApp.execUnsafeLocalFunction(function(){return r(s,c,d,_)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ft(r,s){if(s){var c=r.firstChild;if(c&&c===r.lastChild&&c.nodeType===3){c.nodeValue=s;return}}r.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(r){ke.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ee[s]=Ee[r]})});function Ke(r,s,c){return s==null||typeof s=="boolean"||s===""?"":c||typeof s!="number"||s===0||Ee.hasOwnProperty(r)&&Ee[r]?(""+s).trim():s+"px"}function Qe(r,s){r=r.style;for(var c in s)if(s.hasOwnProperty(c)){var d=c.indexOf("--")===0,_=Ke(c,s[c],d);c==="float"&&(c="cssFloat"),d?r.setProperty(c,_):r[c]=_}}var Be=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(r,s){if(s){if(Be[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function it(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function X(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var be=null,fe=null,pe=null;function Ie(r){if(r=il(r)){if(typeof be!="function")throw Error(t(280));var s=r.stateNode;s&&(s=yu(s),be(r.stateNode,r.type,s))}}function Le(r){fe?pe?pe.push(r):pe=[r]:fe=r}function rt(){if(fe){var r=fe,s=pe;if(pe=fe=null,Ie(r),s)for(r=0;r<s.length;r++)Ie(s[r])}}function zt(r,s){return r(s)}function ln(){}var Tt=!1;function $n(r,s,c){if(Tt)return r(s,c);Tt=!0;try{return zt(r,s,c)}finally{Tt=!1,(fe!==null||pe!==null)&&(ln(),rt())}}function kn(r,s){var c=r.stateNode;if(c===null)return null;var d=yu(c);if(d===null)return null;c=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(c&&typeof c!="function")throw Error(t(231,s,typeof c));return c}var So=!1;if(u)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){So=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{So=!1}function pr(r,s,c,d,_,S,w,O,V){var ie=Array.prototype.slice.call(arguments,3);try{s.apply(c,ie)}catch(ye){this.onError(ye)}}var mr=!1,Is=null,Ds=!1,Gr=null,Jl={onError:function(r){mr=!0,Is=r}};function Mo(r,s,c,d,_,S,w,O,V){mr=!1,Is=null,pr.apply(Jl,arguments)}function eu(r,s,c,d,_,S,w,O,V){if(Mo.apply(this,arguments),mr){if(mr){var ie=Is;mr=!1,Is=null}else throw Error(t(198));Ds||(Ds=!0,Gr=ie)}}function qi(r){var s=r,c=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(c=s.return),r=s.return;while(r)}return s.tag===3?c:null}function tu(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function nu(r){if(qi(r)!==r)throw Error(t(188))}function mf(r){var s=r.alternate;if(!s){if(s=qi(r),s===null)throw Error(t(188));return s!==r?null:r}for(var c=r,d=s;;){var _=c.return;if(_===null)break;var S=_.alternate;if(S===null){if(d=_.return,d!==null){c=d;continue}break}if(_.child===S.child){for(S=_.child;S;){if(S===c)return nu(_),r;if(S===d)return nu(_),s;S=S.sibling}throw Error(t(188))}if(c.return!==d.return)c=_,d=S;else{for(var w=!1,O=_.child;O;){if(O===c){w=!0,c=_,d=S;break}if(O===d){w=!0,d=_,c=S;break}O=O.sibling}if(!w){for(O=S.child;O;){if(O===c){w=!0,c=S,d=_;break}if(O===d){w=!0,d=S,c=_;break}O=O.sibling}if(!w)throw Error(t(189))}}if(c.alternate!==d)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?r:s}function iu(r){return r=mf(r),r!==null?ru(r):null}function ru(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=ru(r);if(s!==null)return s;r=r.sibling}return null}var L=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,G=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Je=e.unstable_LowPriority,et=e.unstable_IdlePriority,je=null,st=null;function Rt(r){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(je,r,void 0,(r.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:qe,Gt=Math.log,St=Math.LN2;function qe(r){return r>>>=0,r===0?32:31-(Gt(r)/St|0)|0}var Qt=64,xt=4194304;function Sn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Di(r,s){var c=r.pendingLanes;if(c===0)return 0;var d=0,_=r.suspendedLanes,S=r.pingedLanes,w=c&268435455;if(w!==0){var O=w&~_;O!==0?d=Sn(O):(S&=w,S!==0&&(d=Sn(S)))}else w=c&~_,w!==0?d=Sn(w):S!==0&&(d=Sn(S));if(d===0)return 0;if(s!==0&&s!==d&&!(s&_)&&(_=d&-d,S=s&-s,_>=S||_===16&&(S&4194240)!==0))return s;if(d&4&&(d|=c&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=d;0<s;)c=31-Ct(s),_=1<<c,d|=r[c],s&=~_;return d}function Bn(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ns(r,s){for(var c=r.suspendedLanes,d=r.pingedLanes,_=r.expirationTimes,S=r.pendingLanes;0<S;){var w=31-Ct(S),O=1<<w,V=_[w];V===-1?(!(O&c)||O&d)&&(_[w]=Bn(O,s)):V<=s&&(r.expiredLanes|=O),S&=~O}}function Nt(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function zn(){var r=Qt;return Qt<<=1,!(Qt&4194240)&&(Qt=64),r}function wn(r){for(var s=[],c=0;31>c;c++)s.push(r);return s}function tn(r,s,c){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Ct(s),r[s]=c}function An(r,s){var c=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<c;){var _=31-Ct(c),S=1<<_;s[_]=0,d[_]=-1,r[_]=-1,c&=~S}}function Us(r,s){var c=r.entangledLanes|=s;for(r=r.entanglements;c;){var d=31-Ct(c),_=1<<d;_&s|r[d]&s&&(r[d]|=s),c&=~_}}var gt=0;function Im(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Dm,gf,Nm,Um,Fm,_f=!1,su=[],Wr=null,Xr=null,jr=null,Va=new Map,Ha=new Map,Yr=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Om(r,s){switch(r){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":Xr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Va.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(s.pointerId)}}function Ga(r,s,c,d,_,S){return r===null||r.nativeEvent!==S?(r={blockedOn:s,domEventName:c,eventSystemFlags:d,nativeEvent:S,targetContainers:[_]},s!==null&&(s=il(s),s!==null&&gf(s)),r):(r.eventSystemFlags|=d,s=r.targetContainers,_!==null&&s.indexOf(_)===-1&&s.push(_),r)}function Oy(r,s,c,d,_){switch(s){case"focusin":return Wr=Ga(Wr,r,s,c,d,_),!0;case"dragenter":return Xr=Ga(Xr,r,s,c,d,_),!0;case"mouseover":return jr=Ga(jr,r,s,c,d,_),!0;case"pointerover":var S=_.pointerId;return Va.set(S,Ga(Va.get(S)||null,r,s,c,d,_)),!0;case"gotpointercapture":return S=_.pointerId,Ha.set(S,Ga(Ha.get(S)||null,r,s,c,d,_)),!0}return!1}function km(r){var s=Fs(r.target);if(s!==null){var c=qi(s);if(c!==null){if(s=c.tag,s===13){if(s=tu(c),s!==null){r.blockedOn=s,Fm(r.priority,function(){Nm(c)});return}}else if(s===3&&c.stateNode.current.memoizedState.isDehydrated){r.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ou(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var c=xf(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(c===null){c=r.nativeEvent;var d=new c.constructor(c.type,c);Pt=d,c.target.dispatchEvent(d),Pt=null}else return s=il(c),s!==null&&gf(s),r.blockedOn=c,!1;s.shift()}return!0}function Bm(r,s,c){ou(r)&&c.delete(s)}function ky(){_f=!1,Wr!==null&&ou(Wr)&&(Wr=null),Xr!==null&&ou(Xr)&&(Xr=null),jr!==null&&ou(jr)&&(jr=null),Va.forEach(Bm),Ha.forEach(Bm)}function Wa(r,s){r.blockedOn===s&&(r.blockedOn=null,_f||(_f=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ky)))}function Xa(r){function s(_){return Wa(_,r)}if(0<su.length){Wa(su[0],r);for(var c=1;c<su.length;c++){var d=su[c];d.blockedOn===r&&(d.blockedOn=null)}}for(Wr!==null&&Wa(Wr,r),Xr!==null&&Wa(Xr,r),jr!==null&&Wa(jr,r),Va.forEach(s),Ha.forEach(s),c=0;c<Yr.length;c++)d=Yr[c],d.blockedOn===r&&(d.blockedOn=null);for(;0<Yr.length&&(c=Yr[0],c.blockedOn===null);)km(c),c.blockedOn===null&&Yr.shift()}var Eo=T.ReactCurrentBatchConfig,au=!0;function By(r,s,c,d){var _=gt,S=Eo.transition;Eo.transition=null;try{gt=1,vf(r,s,c,d)}finally{gt=_,Eo.transition=S}}function zy(r,s,c,d){var _=gt,S=Eo.transition;Eo.transition=null;try{gt=4,vf(r,s,c,d)}finally{gt=_,Eo.transition=S}}function vf(r,s,c,d){if(au){var _=xf(r,s,c,d);if(_===null)Ff(r,s,d,lu,c),Om(r,d);else if(Oy(_,r,s,c,d))d.stopPropagation();else if(Om(r,d),s&4&&-1<Fy.indexOf(r)){for(;_!==null;){var S=il(_);if(S!==null&&Dm(S),S=xf(r,s,c,d),S===null&&Ff(r,s,d,lu,c),S===_)break;_=S}_!==null&&d.stopPropagation()}else Ff(r,s,d,null,c)}}var lu=null;function xf(r,s,c,d){if(lu=null,r=X(d),r=Fs(r),r!==null)if(s=qi(r),s===null)r=null;else if(c=s.tag,c===13){if(r=tu(s),r!==null)return r;r=null}else if(c===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return lu=r,null}function zm(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case Pe:return 1;case Ne:return 4;case Fe:case Je:return 16;case et:return 536870912;default:return 16}default:return 16}}var qr=null,yf=null,uu=null;function Vm(){if(uu)return uu;var r,s=yf,c=s.length,d,_="value"in qr?qr.value:qr.textContent,S=_.length;for(r=0;r<c&&s[r]===_[r];r++);var w=c-r;for(d=1;d<=w&&s[c-d]===_[S-d];d++);return uu=_.slice(r,1<d?1-d:void 0)}function cu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function fu(){return!0}function Hm(){return!1}function li(r){function s(c,d,_,S,w){this._reactName=c,this._targetInst=_,this.type=d,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var O in r)r.hasOwnProperty(O)&&(c=r[O],this[O]=c?c(S):S[O]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?fu:Hm,this.isPropagationStopped=Hm,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=fu)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=fu)},persist:function(){},isPersistent:fu}),s}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sf=li(To),ja=le({},To,{view:0,detail:0}),Vy=li(ja),Mf,Ef,Ya,hu=le({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ya&&(Ya&&r.type==="mousemove"?(Mf=r.screenX-Ya.screenX,Ef=r.screenY-Ya.screenY):Ef=Mf=0,Ya=r),Mf)},movementY:function(r){return"movementY"in r?r.movementY:Ef}}),Gm=li(hu),Hy=le({},hu,{dataTransfer:0}),Gy=li(Hy),Wy=le({},ja,{relatedTarget:0}),Tf=li(Wy),Xy=le({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=li(Xy),Yy=le({},To,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),qy=li(Yy),Ky=le({},To,{data:0}),Wm=li(Ky),$y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jy(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Qy[r])?!!s[r]:!1}function wf(){return Jy}var eS=le({},ja,{key:function(r){if(r.key){var s=$y[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=cu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Zy[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(r){return r.type==="keypress"?cu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?cu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),tS=li(eS),nS=le({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=li(nS),iS=le({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),rS=li(iS),sS=le({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),oS=li(sS),aS=le({},hu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=li(aS),uS=[9,13,27,32],Af=u&&"CompositionEvent"in window,qa=null;u&&"documentMode"in document&&(qa=document.documentMode);var cS=u&&"TextEvent"in window&&!qa,jm=u&&(!Af||qa&&8<qa&&11>=qa),Ym=" ",qm=!1;function Km(r,s){switch(r){case"keyup":return uS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var wo=!1;function fS(r,s){switch(r){case"compositionend":return $m(s);case"keypress":return s.which!==32?null:(qm=!0,Ym);case"textInput":return r=s.data,r===Ym&&qm?null:r;default:return null}}function hS(r,s){if(wo)return r==="compositionend"||!Af&&Km(r,s)?(r=Vm(),uu=yf=qr=null,wo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return jm&&s.locale!=="ko"?null:s.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!dS[r.type]:s==="textarea"}function Qm(r,s,c,d){Le(d),s=_u(s,"onChange"),0<s.length&&(c=new Sf("onChange","change",null,c,d),r.push({event:c,listeners:s}))}var Ka=null,$a=null;function pS(r){gg(r,0)}function du(r){var s=Po(r);if(ut(s))return r}function mS(r,s){if(r==="change")return s}var Jm=!1;if(u){var Rf;if(u){var Cf="oninput"in document;if(!Cf){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Cf=typeof eg.oninput=="function"}Rf=Cf}else Rf=!1;Jm=Rf&&(!document.documentMode||9<document.documentMode)}function tg(){Ka&&(Ka.detachEvent("onpropertychange",ng),$a=Ka=null)}function ng(r){if(r.propertyName==="value"&&du($a)){var s=[];Qm(s,$a,r,X(r)),$n(pS,s)}}function gS(r,s,c){r==="focusin"?(tg(),Ka=s,$a=c,Ka.attachEvent("onpropertychange",ng)):r==="focusout"&&tg()}function _S(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return du($a)}function vS(r,s){if(r==="click")return du(s)}function xS(r,s){if(r==="input"||r==="change")return du(s)}function yS(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ni=typeof Object.is=="function"?Object.is:yS;function Za(r,s){if(Ni(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var c=Object.keys(r),d=Object.keys(s);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var _=c[d];if(!f.call(s,_)||!Ni(r[_],s[_]))return!1}return!0}function ig(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function rg(r,s){var c=ig(r);r=0;for(var d;c;){if(c.nodeType===3){if(d=r+c.textContent.length,r<=s&&d>=s)return{node:c,offset:s-r};r=d}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=ig(c)}}function sg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?sg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function og(){for(var r=window,s=Ot();s instanceof r.HTMLIFrameElement;){try{var c=typeof s.contentWindow.location.href=="string"}catch{c=!1}if(c)r=s.contentWindow;else break;s=Ot(r.document)}return s}function bf(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function SS(r){var s=og(),c=r.focusedElem,d=r.selectionRange;if(s!==c&&c&&c.ownerDocument&&sg(c.ownerDocument.documentElement,c)){if(d!==null&&bf(c)){if(s=d.start,r=d.end,r===void 0&&(r=s),"selectionStart"in c)c.selectionStart=s,c.selectionEnd=Math.min(r,c.value.length);else if(r=(s=c.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var _=c.textContent.length,S=Math.min(d.start,_);d=d.end===void 0?S:Math.min(d.end,_),!r.extend&&S>d&&(_=d,d=S,S=_),_=rg(c,S);var w=rg(c,d);_&&w&&(r.rangeCount!==1||r.anchorNode!==_.node||r.anchorOffset!==_.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(_.node,_.offset),r.removeAllRanges(),S>d?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=c;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<s.length;c++)r=s[c],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var MS=u&&"documentMode"in document&&11>=document.documentMode,Ao=null,Pf=null,Qa=null,Lf=!1;function ag(r,s,c){var d=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Lf||Ao==null||Ao!==Ot(d)||(d=Ao,"selectionStart"in d&&bf(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Qa&&Za(Qa,d)||(Qa=d,d=_u(Pf,"onSelect"),0<d.length&&(s=new Sf("onSelect","select",null,s,c),r.push({event:s,listeners:d}),s.target=Ao)))}function pu(r,s){var c={};return c[r.toLowerCase()]=s.toLowerCase(),c["Webkit"+r]="webkit"+s,c["Moz"+r]="moz"+s,c}var Ro={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},If={},lg={};u&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function mu(r){if(If[r])return If[r];if(!Ro[r])return r;var s=Ro[r],c;for(c in s)if(s.hasOwnProperty(c)&&c in lg)return If[r]=s[c];return r}var ug=mu("animationend"),cg=mu("animationiteration"),fg=mu("animationstart"),hg=mu("transitionend"),dg=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(r,s){dg.set(r,s),o(s,[r])}for(var Df=0;Df<pg.length;Df++){var Nf=pg[Df],ES=Nf.toLowerCase(),TS=Nf[0].toUpperCase()+Nf.slice(1);Kr(ES,"on"+TS)}Kr(ug,"onAnimationEnd"),Kr(cg,"onAnimationIteration"),Kr(fg,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(hg,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function mg(r,s,c){var d=r.type||"unknown-event";r.currentTarget=c,eu(d,s,void 0,r),r.currentTarget=null}function gg(r,s){s=(s&4)!==0;for(var c=0;c<r.length;c++){var d=r[c],_=d.event;d=d.listeners;e:{var S=void 0;if(s)for(var w=d.length-1;0<=w;w--){var O=d[w],V=O.instance,ie=O.currentTarget;if(O=O.listener,V!==S&&_.isPropagationStopped())break e;mg(_,O,ie),S=V}else for(w=0;w<d.length;w++){if(O=d[w],V=O.instance,ie=O.currentTarget,O=O.listener,V!==S&&_.isPropagationStopped())break e;mg(_,O,ie),S=V}}}if(Ds)throw r=Gr,Ds=!1,Gr=null,r}function Vt(r,s){var c=s[Hf];c===void 0&&(c=s[Hf]=new Set);var d=r+"__bubble";c.has(d)||(_g(s,r,2,!1),c.add(d))}function Uf(r,s,c){var d=0;s&&(d|=4),_g(c,r,d,s)}var gu="_reactListening"+Math.random().toString(36).slice(2);function el(r){if(!r[gu]){r[gu]=!0,n.forEach(function(c){c!=="selectionchange"&&(wS.has(c)||Uf(c,!1,r),Uf(c,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[gu]||(s[gu]=!0,Uf("selectionchange",!1,s))}}function _g(r,s,c,d){switch(zm(s)){case 1:var _=By;break;case 4:_=zy;break;default:_=vf}c=_.bind(null,s,c,r),_=void 0,!So||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(_=!0),d?_!==void 0?r.addEventListener(s,c,{capture:!0,passive:_}):r.addEventListener(s,c,!0):_!==void 0?r.addEventListener(s,c,{passive:_}):r.addEventListener(s,c,!1)}function Ff(r,s,c,d,_){var S=d;if(!(s&1)&&!(s&2)&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var O=d.stateNode.containerInfo;if(O===_||O.nodeType===8&&O.parentNode===_)break;if(w===4)for(w=d.return;w!==null;){var V=w.tag;if((V===3||V===4)&&(V=w.stateNode.containerInfo,V===_||V.nodeType===8&&V.parentNode===_))return;w=w.return}for(;O!==null;){if(w=Fs(O),w===null)return;if(V=w.tag,V===5||V===6){d=S=w;continue e}O=O.parentNode}}d=d.return}$n(function(){var ie=S,ye=X(c),Se=[];e:{var _e=dg.get(r);if(_e!==void 0){var De=Sf,ze=r;switch(r){case"keypress":if(cu(c)===0)break e;case"keydown":case"keyup":De=tS;break;case"focusin":ze="focus",De=Tf;break;case"focusout":ze="blur",De=Tf;break;case"beforeblur":case"afterblur":De=Tf;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=rS;break;case ug:case cg:case fg:De=jy;break;case hg:De=oS;break;case"scroll":De=Vy;break;case"wheel":De=lS;break;case"copy":case"cut":case"paste":De=qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Xm}var Ve=(s&4)!==0,nn=!Ve&&r==="scroll",$=Ve?_e!==null?_e+"Capture":null:_e;Ve=[];for(var W=ie,ee;W!==null;){ee=W;var Te=ee.stateNode;if(ee.tag===5&&Te!==null&&(ee=Te,$!==null&&(Te=kn(W,$),Te!=null&&Ve.push(tl(W,Te,ee)))),nn)break;W=W.return}0<Ve.length&&(_e=new De(_e,ze,null,c,ye),Se.push({event:_e,listeners:Ve}))}}if(!(s&7)){e:{if(_e=r==="mouseover"||r==="pointerover",De=r==="mouseout"||r==="pointerout",_e&&c!==Pt&&(ze=c.relatedTarget||c.fromElement)&&(Fs(ze)||ze[gr]))break e;if((De||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,De?(ze=c.relatedTarget||c.toElement,De=ie,ze=ze?Fs(ze):null,ze!==null&&(nn=qi(ze),ze!==nn||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=ie),De!==ze)){if(Ve=Gm,Te="onMouseLeave",$="onMouseEnter",W="mouse",(r==="pointerout"||r==="pointerover")&&(Ve=Xm,Te="onPointerLeave",$="onPointerEnter",W="pointer"),nn=De==null?_e:Po(De),ee=ze==null?_e:Po(ze),_e=new Ve(Te,W+"leave",De,c,ye),_e.target=nn,_e.relatedTarget=ee,Te=null,Fs(ye)===ie&&(Ve=new Ve($,W+"enter",ze,c,ye),Ve.target=ee,Ve.relatedTarget=nn,Te=Ve),nn=Te,De&&ze)t:{for(Ve=De,$=ze,W=0,ee=Ve;ee;ee=Co(ee))W++;for(ee=0,Te=$;Te;Te=Co(Te))ee++;for(;0<W-ee;)Ve=Co(Ve),W--;for(;0<ee-W;)$=Co($),ee--;for(;W--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=Co(Ve),$=Co($)}Ve=null}else Ve=null;De!==null&&vg(Se,_e,De,Ve,!1),ze!==null&&nn!==null&&vg(Se,nn,ze,Ve,!0)}}e:{if(_e=ie?Po(ie):window,De=_e.nodeName&&_e.nodeName.toLowerCase(),De==="select"||De==="input"&&_e.type==="file")var We=mS;else if(Zm(_e))if(Jm)We=xS;else{We=_S;var $e=gS}else(De=_e.nodeName)&&De.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(We=vS);if(We&&(We=We(r,ie))){Qm(Se,We,c,ye);break e}$e&&$e(r,_e,ie),r==="focusout"&&($e=_e._wrapperState)&&$e.controlled&&_e.type==="number"&&It(_e,"number",_e.value)}switch($e=ie?Po(ie):window,r){case"focusin":(Zm($e)||$e.contentEditable==="true")&&(Ao=$e,Pf=ie,Qa=null);break;case"focusout":Qa=Pf=Ao=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,ag(Se,c,ye);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":ag(Se,c,ye)}var Ze;if(Af)e:{switch(r){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else wo?Km(r,c)&&(tt="onCompositionEnd"):r==="keydown"&&c.keyCode===229&&(tt="onCompositionStart");tt&&(jm&&c.locale!=="ko"&&(wo||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&wo&&(Ze=Vm()):(qr=ye,yf="value"in qr?qr.value:qr.textContent,wo=!0)),$e=_u(ie,tt),0<$e.length&&(tt=new Wm(tt,r,null,c,ye),Se.push({event:tt,listeners:$e}),Ze?tt.data=Ze:(Ze=$m(c),Ze!==null&&(tt.data=Ze)))),(Ze=cS?fS(r,c):hS(r,c))&&(ie=_u(ie,"onBeforeInput"),0<ie.length&&(ye=new Wm("onBeforeInput","beforeinput",null,c,ye),Se.push({event:ye,listeners:ie}),ye.data=Ze))}gg(Se,s)})}function tl(r,s,c){return{instance:r,listener:s,currentTarget:c}}function _u(r,s){for(var c=s+"Capture",d=[];r!==null;){var _=r,S=_.stateNode;_.tag===5&&S!==null&&(_=S,S=kn(r,c),S!=null&&d.unshift(tl(r,S,_)),S=kn(r,s),S!=null&&d.push(tl(r,S,_))),r=r.return}return d}function Co(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function vg(r,s,c,d,_){for(var S=s._reactName,w=[];c!==null&&c!==d;){var O=c,V=O.alternate,ie=O.stateNode;if(V!==null&&V===d)break;O.tag===5&&ie!==null&&(O=ie,_?(V=kn(c,S),V!=null&&w.unshift(tl(c,V,O))):_||(V=kn(c,S),V!=null&&w.push(tl(c,V,O)))),c=c.return}w.length!==0&&r.push({event:s,listeners:w})}var AS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function xg(r){return(typeof r=="string"?r:""+r).replace(AS,`
`).replace(RS,"")}function vu(r,s,c){if(s=xg(s),xg(r)!==s&&c)throw Error(t(425))}function xu(){}var Of=null,kf=null;function Bf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,CS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,bS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(r){return yg.resolve(null).then(r).catch(PS)}:zf;function PS(r){setTimeout(function(){throw r})}function Vf(r,s){var c=s,d=0;do{var _=c.nextSibling;if(r.removeChild(c),_&&_.nodeType===8)if(c=_.data,c==="/$"){if(d===0){r.removeChild(_),Xa(s);return}d--}else c!=="$"&&c!=="$?"&&c!=="$!"||d++;c=_}while(c);Xa(s)}function $r(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Sg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var c=r.data;if(c==="$"||c==="$!"||c==="$?"){if(s===0)return r;s--}else c==="/$"&&s++}r=r.previousSibling}return null}var bo=Math.random().toString(36).slice(2),Ki="__reactFiber$"+bo,nl="__reactProps$"+bo,gr="__reactContainer$"+bo,Hf="__reactEvents$"+bo,LS="__reactListeners$"+bo,IS="__reactHandles$"+bo;function Fs(r){var s=r[Ki];if(s)return s;for(var c=r.parentNode;c;){if(s=c[gr]||c[Ki]){if(c=s.alternate,s.child!==null||c!==null&&c.child!==null)for(r=Sg(r);r!==null;){if(c=r[Ki])return c;r=Sg(r)}return s}r=c,c=r.parentNode}return null}function il(r){return r=r[Ki]||r[gr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Po(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function yu(r){return r[nl]||null}var Gf=[],Lo=-1;function Zr(r){return{current:r}}function Ht(r){0>Lo||(r.current=Gf[Lo],Gf[Lo]=null,Lo--)}function kt(r,s){Lo++,Gf[Lo]=r.current,r.current=s}var Qr={},Rn=Zr(Qr),Zn=Zr(!1),Os=Qr;function Io(r,s){var c=r.type.contextTypes;if(!c)return Qr;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var _={},S;for(S in c)_[S]=s[S];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=_),_}function Qn(r){return r=r.childContextTypes,r!=null}function Su(){Ht(Zn),Ht(Rn)}function Mg(r,s,c){if(Rn.current!==Qr)throw Error(t(168));kt(Rn,s),kt(Zn,c)}function Eg(r,s,c){var d=r.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return c;d=d.getChildContext();for(var _ in d)if(!(_ in s))throw Error(t(108,he(r)||"Unknown",_));return le({},c,d)}function Mu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Qr,Os=Rn.current,kt(Rn,r),kt(Zn,Zn.current),!0}function Tg(r,s,c){var d=r.stateNode;if(!d)throw Error(t(169));c?(r=Eg(r,s,Os),d.__reactInternalMemoizedMergedChildContext=r,Ht(Zn),Ht(Rn),kt(Rn,r)):Ht(Zn),kt(Zn,c)}var _r=null,Eu=!1,Wf=!1;function wg(r){_r===null?_r=[r]:_r.push(r)}function DS(r){Eu=!0,wg(r)}function Jr(){if(!Wf&&_r!==null){Wf=!0;var r=0,s=gt;try{var c=_r;for(gt=1;r<c.length;r++){var d=c[r];do d=d(!0);while(d!==null)}_r=null,Eu=!1}catch(_){throw _r!==null&&(_r=_r.slice(r+1)),L(Pe,Jr),_}finally{gt=s,Wf=!1}}return null}var Do=[],No=0,Tu=null,wu=0,yi=[],Si=0,ks=null,vr=1,xr="";function Bs(r,s){Do[No++]=wu,Do[No++]=Tu,Tu=r,wu=s}function Ag(r,s,c){yi[Si++]=vr,yi[Si++]=xr,yi[Si++]=ks,ks=r;var d=vr;r=xr;var _=32-Ct(d)-1;d&=~(1<<_),c+=1;var S=32-Ct(s)+_;if(30<S){var w=_-_%5;S=(d&(1<<w)-1).toString(32),d>>=w,_-=w,vr=1<<32-Ct(s)+_|c<<_|d,xr=S+r}else vr=1<<S|c<<_|d,xr=r}function Xf(r){r.return!==null&&(Bs(r,1),Ag(r,1,0))}function jf(r){for(;r===Tu;)Tu=Do[--No],Do[No]=null,wu=Do[--No],Do[No]=null;for(;r===ks;)ks=yi[--Si],yi[Si]=null,xr=yi[--Si],yi[Si]=null,vr=yi[--Si],yi[Si]=null}var ui=null,ci=null,Wt=!1,Ui=null;function Rg(r,s){var c=wi(5,null,null,0);c.elementType="DELETED",c.stateNode=s,c.return=r,s=r.deletions,s===null?(r.deletions=[c],r.flags|=16):s.push(c)}function Cg(r,s){switch(r.tag){case 5:var c=r.type;return s=s.nodeType!==1||c.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ui=r,ci=$r(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ui=r,ci=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(c=ks!==null?{id:vr,overflow:xr}:null,r.memoizedState={dehydrated:s,treeContext:c,retryLane:1073741824},c=wi(18,null,null,0),c.stateNode=s,c.return=r,r.child=c,ui=r,ci=null,!0):!1;default:return!1}}function Yf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function qf(r){if(Wt){var s=ci;if(s){var c=s;if(!Cg(r,s)){if(Yf(r))throw Error(t(418));s=$r(c.nextSibling);var d=ui;s&&Cg(r,s)?Rg(d,c):(r.flags=r.flags&-4097|2,Wt=!1,ui=r)}}else{if(Yf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Wt=!1,ui=r}}}function bg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ui=r}function Au(r){if(r!==ui)return!1;if(!Wt)return bg(r),Wt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Bf(r.type,r.memoizedProps)),s&&(s=ci)){if(Yf(r))throw Pg(),Error(t(418));for(;s;)Rg(r,s),s=$r(s.nextSibling)}if(bg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var c=r.data;if(c==="/$"){if(s===0){ci=$r(r.nextSibling);break e}s--}else c!=="$"&&c!=="$!"&&c!=="$?"||s++}r=r.nextSibling}ci=null}}else ci=ui?$r(r.stateNode.nextSibling):null;return!0}function Pg(){for(var r=ci;r;)r=$r(r.nextSibling)}function Uo(){ci=ui=null,Wt=!1}function Kf(r){Ui===null?Ui=[r]:Ui.push(r)}var NS=T.ReactCurrentBatchConfig;function rl(r,s,c){if(r=c.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var d=c.stateNode}if(!d)throw Error(t(147,r));var _=d,S=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(w){var O=_.refs;w===null?delete O[S]:O[S]=w},s._stringRef=S,s)}if(typeof r!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,r))}return r}function Ru(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Lg(r){var s=r._init;return s(r._payload)}function Ig(r){function s($,W){if(r){var ee=$.deletions;ee===null?($.deletions=[W],$.flags|=16):ee.push(W)}}function c($,W){if(!r)return null;for(;W!==null;)s($,W),W=W.sibling;return null}function d($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function _($,W){return $=as($,W),$.index=0,$.sibling=null,$}function S($,W,ee){return $.index=ee,r?(ee=$.alternate,ee!==null?(ee=ee.index,ee<W?($.flags|=2,W):ee):($.flags|=2,W)):($.flags|=1048576,W)}function w($){return r&&$.alternate===null&&($.flags|=2),$}function O($,W,ee,Te){return W===null||W.tag!==6?(W=zh(ee,$.mode,Te),W.return=$,W):(W=_(W,ee),W.return=$,W)}function V($,W,ee,Te){var We=ee.type;return We===I?ye($,W,ee.props.children,Te,ee.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Q&&Lg(We)===W.type)?(Te=_(W,ee.props),Te.ref=rl($,W,ee),Te.return=$,Te):(Te=Zu(ee.type,ee.key,ee.props,null,$.mode,Te),Te.ref=rl($,W,ee),Te.return=$,Te)}function ie($,W,ee,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==ee.containerInfo||W.stateNode.implementation!==ee.implementation?(W=Vh(ee,$.mode,Te),W.return=$,W):(W=_(W,ee.children||[]),W.return=$,W)}function ye($,W,ee,Te,We){return W===null||W.tag!==7?(W=Ys(ee,$.mode,Te,We),W.return=$,W):(W=_(W,ee),W.return=$,W)}function Se($,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return W=zh(""+W,$.mode,ee),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return ee=Zu(W.type,W.key,W.props,null,$.mode,ee),ee.ref=rl($,null,W),ee.return=$,ee;case N:return W=Vh(W,$.mode,ee),W.return=$,W;case Q:var Te=W._init;return Se($,Te(W._payload),ee)}if(Xe(W)||ue(W))return W=Ys(W,$.mode,ee,null),W.return=$,W;Ru($,W)}return null}function _e($,W,ee,Te){var We=W!==null?W.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return We!==null?null:O($,W,""+ee,Te);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:return ee.key===We?V($,W,ee,Te):null;case N:return ee.key===We?ie($,W,ee,Te):null;case Q:return We=ee._init,_e($,W,We(ee._payload),Te)}if(Xe(ee)||ue(ee))return We!==null?null:ye($,W,ee,Te,null);Ru($,ee)}return null}function De($,W,ee,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(ee)||null,O(W,$,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return $=$.get(Te.key===null?ee:Te.key)||null,V(W,$,Te,We);case N:return $=$.get(Te.key===null?ee:Te.key)||null,ie(W,$,Te,We);case Q:var $e=Te._init;return De($,W,ee,$e(Te._payload),We)}if(Xe(Te)||ue(Te))return $=$.get(ee)||null,ye(W,$,Te,We,null);Ru(W,Te)}return null}function ze($,W,ee,Te){for(var We=null,$e=null,Ze=W,tt=W=0,mn=null;Ze!==null&&tt<ee.length;tt++){Ze.index>tt?(mn=Ze,Ze=null):mn=Ze.sibling;var bt=_e($,Ze,ee[tt],Te);if(bt===null){Ze===null&&(Ze=mn);break}r&&Ze&&bt.alternate===null&&s($,Ze),W=S(bt,W,tt),$e===null?We=bt:$e.sibling=bt,$e=bt,Ze=mn}if(tt===ee.length)return c($,Ze),Wt&&Bs($,tt),We;if(Ze===null){for(;tt<ee.length;tt++)Ze=Se($,ee[tt],Te),Ze!==null&&(W=S(Ze,W,tt),$e===null?We=Ze:$e.sibling=Ze,$e=Ze);return Wt&&Bs($,tt),We}for(Ze=d($,Ze);tt<ee.length;tt++)mn=De(Ze,$,tt,ee[tt],Te),mn!==null&&(r&&mn.alternate!==null&&Ze.delete(mn.key===null?tt:mn.key),W=S(mn,W,tt),$e===null?We=mn:$e.sibling=mn,$e=mn);return r&&Ze.forEach(function(ls){return s($,ls)}),Wt&&Bs($,tt),We}function Ve($,W,ee,Te){var We=ue(ee);if(typeof We!="function")throw Error(t(150));if(ee=We.call(ee),ee==null)throw Error(t(151));for(var $e=We=null,Ze=W,tt=W=0,mn=null,bt=ee.next();Ze!==null&&!bt.done;tt++,bt=ee.next()){Ze.index>tt?(mn=Ze,Ze=null):mn=Ze.sibling;var ls=_e($,Ze,bt.value,Te);if(ls===null){Ze===null&&(Ze=mn);break}r&&Ze&&ls.alternate===null&&s($,Ze),W=S(ls,W,tt),$e===null?We=ls:$e.sibling=ls,$e=ls,Ze=mn}if(bt.done)return c($,Ze),Wt&&Bs($,tt),We;if(Ze===null){for(;!bt.done;tt++,bt=ee.next())bt=Se($,bt.value,Te),bt!==null&&(W=S(bt,W,tt),$e===null?We=bt:$e.sibling=bt,$e=bt);return Wt&&Bs($,tt),We}for(Ze=d($,Ze);!bt.done;tt++,bt=ee.next())bt=De(Ze,$,tt,bt.value,Te),bt!==null&&(r&&bt.alternate!==null&&Ze.delete(bt.key===null?tt:bt.key),W=S(bt,W,tt),$e===null?We=bt:$e.sibling=bt,$e=bt);return r&&Ze.forEach(function(hM){return s($,hM)}),Wt&&Bs($,tt),We}function nn($,W,ee,Te){if(typeof ee=="object"&&ee!==null&&ee.type===I&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case D:e:{for(var We=ee.key,$e=W;$e!==null;){if($e.key===We){if(We=ee.type,We===I){if($e.tag===7){c($,$e.sibling),W=_($e,ee.props.children),W.return=$,$=W;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===Q&&Lg(We)===$e.type){c($,$e.sibling),W=_($e,ee.props),W.ref=rl($,$e,ee),W.return=$,$=W;break e}c($,$e);break}else s($,$e);$e=$e.sibling}ee.type===I?(W=Ys(ee.props.children,$.mode,Te,ee.key),W.return=$,$=W):(Te=Zu(ee.type,ee.key,ee.props,null,$.mode,Te),Te.ref=rl($,W,ee),Te.return=$,$=Te)}return w($);case N:e:{for($e=ee.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===ee.containerInfo&&W.stateNode.implementation===ee.implementation){c($,W.sibling),W=_(W,ee.children||[]),W.return=$,$=W;break e}else{c($,W);break}else s($,W);W=W.sibling}W=Vh(ee,$.mode,Te),W.return=$,$=W}return w($);case Q:return $e=ee._init,nn($,W,$e(ee._payload),Te)}if(Xe(ee))return ze($,W,ee,Te);if(ue(ee))return Ve($,W,ee,Te);Ru($,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,W!==null&&W.tag===6?(c($,W.sibling),W=_(W,ee),W.return=$,$=W):(c($,W),W=zh(ee,$.mode,Te),W.return=$,$=W),w($)):c($,W)}return nn}var Fo=Ig(!0),Dg=Ig(!1),Cu=Zr(null),bu=null,Oo=null,$f=null;function Zf(){$f=Oo=bu=null}function Qf(r){var s=Cu.current;Ht(Cu),r._currentValue=s}function Jf(r,s,c){for(;r!==null;){var d=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),r===c)break;r=r.return}}function ko(r,s){bu=r,$f=Oo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Jn=!0),r.firstContext=null)}function Mi(r){var s=r._currentValue;if($f!==r)if(r={context:r,memoizedValue:s,next:null},Oo===null){if(bu===null)throw Error(t(308));Oo=r,bu.dependencies={lanes:0,firstContext:r}}else Oo=Oo.next=r;return s}var zs=null;function eh(r){zs===null?zs=[r]:zs.push(r)}function Ng(r,s,c,d){var _=s.interleaved;return _===null?(c.next=c,eh(s)):(c.next=_.next,_.next=c),s.interleaved=c,yr(r,d)}function yr(r,s){r.lanes|=s;var c=r.alternate;for(c!==null&&(c.lanes|=s),c=r,r=r.return;r!==null;)r.childLanes|=s,c=r.alternate,c!==null&&(c.childLanes|=s),c=r,r=r.return;return c.tag===3?c.stateNode:null}var es=!1;function th(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ug(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Sr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ts(r,s,c){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,wt&2){var _=d.pending;return _===null?s.next=s:(s.next=_.next,_.next=s),d.pending=s,yr(r,c)}return _=d.interleaved,_===null?(s.next=s,eh(d)):(s.next=_.next,_.next=s),d.interleaved=s,yr(r,c)}function Pu(r,s,c){if(s=s.updateQueue,s!==null&&(s=s.shared,(c&4194240)!==0)){var d=s.lanes;d&=r.pendingLanes,c|=d,s.lanes=c,Us(r,c)}}function Fg(r,s){var c=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,c===d)){var _=null,S=null;if(c=c.firstBaseUpdate,c!==null){do{var w={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};S===null?_=S=w:S=S.next=w,c=c.next}while(c!==null);S===null?_=S=s:S=S.next=s}else _=S=s;c={baseState:d.baseState,firstBaseUpdate:_,lastBaseUpdate:S,shared:d.shared,effects:d.effects},r.updateQueue=c;return}r=c.lastBaseUpdate,r===null?c.firstBaseUpdate=s:r.next=s,c.lastBaseUpdate=s}function Lu(r,s,c,d){var _=r.updateQueue;es=!1;var S=_.firstBaseUpdate,w=_.lastBaseUpdate,O=_.shared.pending;if(O!==null){_.shared.pending=null;var V=O,ie=V.next;V.next=null,w===null?S=ie:w.next=ie,w=V;var ye=r.alternate;ye!==null&&(ye=ye.updateQueue,O=ye.lastBaseUpdate,O!==w&&(O===null?ye.firstBaseUpdate=ie:O.next=ie,ye.lastBaseUpdate=V))}if(S!==null){var Se=_.baseState;w=0,ye=ie=V=null,O=S;do{var _e=O.lane,De=O.eventTime;if((d&_e)===_e){ye!==null&&(ye=ye.next={eventTime:De,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var ze=r,Ve=O;switch(_e=s,De=c,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){Se=ze.call(De,Se,_e);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,_e=typeof ze=="function"?ze.call(De,Se,_e):ze,_e==null)break e;Se=le({},Se,_e);break e;case 2:es=!0}}O.callback!==null&&O.lane!==0&&(r.flags|=64,_e=_.effects,_e===null?_.effects=[O]:_e.push(O))}else De={eventTime:De,lane:_e,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ye===null?(ie=ye=De,V=Se):ye=ye.next=De,w|=_e;if(O=O.next,O===null){if(O=_.shared.pending,O===null)break;_e=O,O=_e.next,_e.next=null,_.lastBaseUpdate=_e,_.shared.pending=null}}while(!0);if(ye===null&&(V=Se),_.baseState=V,_.firstBaseUpdate=ie,_.lastBaseUpdate=ye,s=_.shared.interleaved,s!==null){_=s;do w|=_.lane,_=_.next;while(_!==s)}else S===null&&(_.shared.lanes=0);Gs|=w,r.lanes=w,r.memoizedState=Se}}function Og(r,s,c){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var d=r[s],_=d.callback;if(_!==null){if(d.callback=null,d=c,typeof _!="function")throw Error(t(191,_));_.call(d)}}}var sl={},$i=Zr(sl),ol=Zr(sl),al=Zr(sl);function Vs(r){if(r===sl)throw Error(t(174));return r}function nh(r,s){switch(kt(al,s),kt(ol,r),kt($i,sl),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ge(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Ge(s,r)}Ht($i),kt($i,s)}function Bo(){Ht($i),Ht(ol),Ht(al)}function kg(r){Vs(al.current);var s=Vs($i.current),c=Ge(s,r.type);s!==c&&(kt(ol,r),kt($i,c))}function ih(r){ol.current===r&&(Ht($i),Ht(ol))}var jt=Zr(0);function Iu(r){for(var s=r;s!==null;){if(s.tag===13){var c=s.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var rh=[];function sh(){for(var r=0;r<rh.length;r++)rh[r]._workInProgressVersionPrimary=null;rh.length=0}var Du=T.ReactCurrentDispatcher,oh=T.ReactCurrentBatchConfig,Hs=0,Yt=null,un=null,dn=null,Nu=!1,ll=!1,ul=0,US=0;function Cn(){throw Error(t(321))}function ah(r,s){if(s===null)return!1;for(var c=0;c<s.length&&c<r.length;c++)if(!Ni(r[c],s[c]))return!1;return!0}function lh(r,s,c,d,_,S){if(Hs=S,Yt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Du.current=r===null||r.memoizedState===null?BS:zS,r=c(d,_),ll){S=0;do{if(ll=!1,ul=0,25<=S)throw Error(t(301));S+=1,dn=un=null,s.updateQueue=null,Du.current=VS,r=c(d,_)}while(ll)}if(Du.current=Ou,s=un!==null&&un.next!==null,Hs=0,dn=un=Yt=null,Nu=!1,s)throw Error(t(300));return r}function uh(){var r=ul!==0;return ul=0,r}function Zi(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Yt.memoizedState=dn=r:dn=dn.next=r,dn}function Ei(){if(un===null){var r=Yt.alternate;r=r!==null?r.memoizedState:null}else r=un.next;var s=dn===null?Yt.memoizedState:dn.next;if(s!==null)dn=s,un=r;else{if(r===null)throw Error(t(310));un=r,r={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},dn===null?Yt.memoizedState=dn=r:dn=dn.next=r}return dn}function cl(r,s){return typeof s=="function"?s(r):s}function ch(r){var s=Ei(),c=s.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var d=un,_=d.baseQueue,S=c.pending;if(S!==null){if(_!==null){var w=_.next;_.next=S.next,S.next=w}d.baseQueue=_=S,c.pending=null}if(_!==null){S=_.next,d=d.baseState;var O=w=null,V=null,ie=S;do{var ye=ie.lane;if((Hs&ye)===ye)V!==null&&(V=V.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),d=ie.hasEagerState?ie.eagerState:r(d,ie.action);else{var Se={lane:ye,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};V===null?(O=V=Se,w=d):V=V.next=Se,Yt.lanes|=ye,Gs|=ye}ie=ie.next}while(ie!==null&&ie!==S);V===null?w=d:V.next=O,Ni(d,s.memoizedState)||(Jn=!0),s.memoizedState=d,s.baseState=w,s.baseQueue=V,c.lastRenderedState=d}if(r=c.interleaved,r!==null){_=r;do S=_.lane,Yt.lanes|=S,Gs|=S,_=_.next;while(_!==r)}else _===null&&(c.lanes=0);return[s.memoizedState,c.dispatch]}function fh(r){var s=Ei(),c=s.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var d=c.dispatch,_=c.pending,S=s.memoizedState;if(_!==null){c.pending=null;var w=_=_.next;do S=r(S,w.action),w=w.next;while(w!==_);Ni(S,s.memoizedState)||(Jn=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),c.lastRenderedState=S}return[S,d]}function Bg(){}function zg(r,s){var c=Yt,d=Ei(),_=s(),S=!Ni(d.memoizedState,_);if(S&&(d.memoizedState=_,Jn=!0),d=d.queue,hh(Gg.bind(null,c,d,r),[r]),d.getSnapshot!==s||S||dn!==null&&dn.memoizedState.tag&1){if(c.flags|=2048,fl(9,Hg.bind(null,c,d,_,s),void 0,null),pn===null)throw Error(t(349));Hs&30||Vg(c,s,_)}return _}function Vg(r,s,c){r.flags|=16384,r={getSnapshot:s,value:c},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.stores=[r]):(c=s.stores,c===null?s.stores=[r]:c.push(r))}function Hg(r,s,c,d){s.value=c,s.getSnapshot=d,Wg(s)&&Xg(r)}function Gg(r,s,c){return c(function(){Wg(s)&&Xg(r)})}function Wg(r){var s=r.getSnapshot;r=r.value;try{var c=s();return!Ni(r,c)}catch{return!0}}function Xg(r){var s=yr(r,1);s!==null&&Bi(s,r,1,-1)}function jg(r){var s=Zi();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cl,lastRenderedState:r},s.queue=r,r=r.dispatch=kS.bind(null,Yt,r),[s.memoizedState,r]}function fl(r,s,c,d){return r={tag:r,create:s,destroy:c,deps:d,next:null},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.lastEffect=r.next=r):(c=s.lastEffect,c===null?s.lastEffect=r.next=r:(d=c.next,c.next=r,r.next=d,s.lastEffect=r)),r}function Yg(){return Ei().memoizedState}function Uu(r,s,c,d){var _=Zi();Yt.flags|=r,_.memoizedState=fl(1|s,c,void 0,d===void 0?null:d)}function Fu(r,s,c,d){var _=Ei();d=d===void 0?null:d;var S=void 0;if(un!==null){var w=un.memoizedState;if(S=w.destroy,d!==null&&ah(d,w.deps)){_.memoizedState=fl(s,c,S,d);return}}Yt.flags|=r,_.memoizedState=fl(1|s,c,S,d)}function qg(r,s){return Uu(8390656,8,r,s)}function hh(r,s){return Fu(2048,8,r,s)}function Kg(r,s){return Fu(4,2,r,s)}function $g(r,s){return Fu(4,4,r,s)}function Zg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Qg(r,s,c){return c=c!=null?c.concat([r]):null,Fu(4,4,Zg.bind(null,s,r),c)}function dh(){}function Jg(r,s){var c=Ei();s=s===void 0?null:s;var d=c.memoizedState;return d!==null&&s!==null&&ah(s,d[1])?d[0]:(c.memoizedState=[r,s],r)}function e_(r,s){var c=Ei();s=s===void 0?null:s;var d=c.memoizedState;return d!==null&&s!==null&&ah(s,d[1])?d[0]:(r=r(),c.memoizedState=[r,s],r)}function t_(r,s,c){return Hs&21?(Ni(c,s)||(c=zn(),Yt.lanes|=c,Gs|=c,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Jn=!0),r.memoizedState=c)}function FS(r,s){var c=gt;gt=c!==0&&4>c?c:4,r(!0);var d=oh.transition;oh.transition={};try{r(!1),s()}finally{gt=c,oh.transition=d}}function n_(){return Ei().memoizedState}function OS(r,s,c){var d=ss(r);if(c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null},i_(r))r_(s,c);else if(c=Ng(r,s,c,d),c!==null){var _=Hn();Bi(c,r,d,_),s_(c,s,d)}}function kS(r,s,c){var d=ss(r),_={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(i_(r))r_(s,_);else{var S=r.alternate;if(r.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var w=s.lastRenderedState,O=S(w,c);if(_.hasEagerState=!0,_.eagerState=O,Ni(O,w)){var V=s.interleaved;V===null?(_.next=_,eh(s)):(_.next=V.next,V.next=_),s.interleaved=_;return}}catch{}finally{}c=Ng(r,s,_,d),c!==null&&(_=Hn(),Bi(c,r,d,_),s_(c,s,d))}}function i_(r){var s=r.alternate;return r===Yt||s!==null&&s===Yt}function r_(r,s){ll=Nu=!0;var c=r.pending;c===null?s.next=s:(s.next=c.next,c.next=s),r.pending=s}function s_(r,s,c){if(c&4194240){var d=s.lanes;d&=r.pendingLanes,c|=d,s.lanes=c,Us(r,c)}}var Ou={readContext:Mi,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},BS={readContext:Mi,useCallback:function(r,s){return Zi().memoizedState=[r,s===void 0?null:s],r},useContext:Mi,useEffect:qg,useImperativeHandle:function(r,s,c){return c=c!=null?c.concat([r]):null,Uu(4194308,4,Zg.bind(null,s,r),c)},useLayoutEffect:function(r,s){return Uu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Uu(4,2,r,s)},useMemo:function(r,s){var c=Zi();return s=s===void 0?null:s,r=r(),c.memoizedState=[r,s],r},useReducer:function(r,s,c){var d=Zi();return s=c!==void 0?c(s):s,d.memoizedState=d.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},d.queue=r,r=r.dispatch=OS.bind(null,Yt,r),[d.memoizedState,r]},useRef:function(r){var s=Zi();return r={current:r},s.memoizedState=r},useState:jg,useDebugValue:dh,useDeferredValue:function(r){return Zi().memoizedState=r},useTransition:function(){var r=jg(!1),s=r[0];return r=FS.bind(null,r[1]),Zi().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,c){var d=Yt,_=Zi();if(Wt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=s(),pn===null)throw Error(t(349));Hs&30||Vg(d,s,c)}_.memoizedState=c;var S={value:c,getSnapshot:s};return _.queue=S,qg(Gg.bind(null,d,S,r),[r]),d.flags|=2048,fl(9,Hg.bind(null,d,S,c,s),void 0,null),c},useId:function(){var r=Zi(),s=pn.identifierPrefix;if(Wt){var c=xr,d=vr;c=(d&~(1<<32-Ct(d)-1)).toString(32)+c,s=":"+s+"R"+c,c=ul++,0<c&&(s+="H"+c.toString(32)),s+=":"}else c=US++,s=":"+s+"r"+c.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},zS={readContext:Mi,useCallback:Jg,useContext:Mi,useEffect:hh,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:$g,useMemo:e_,useReducer:ch,useRef:Yg,useState:function(){return ch(cl)},useDebugValue:dh,useDeferredValue:function(r){var s=Ei();return t_(s,un.memoizedState,r)},useTransition:function(){var r=ch(cl)[0],s=Ei().memoizedState;return[r,s]},useMutableSource:Bg,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1},VS={readContext:Mi,useCallback:Jg,useContext:Mi,useEffect:hh,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:$g,useMemo:e_,useReducer:fh,useRef:Yg,useState:function(){return fh(cl)},useDebugValue:dh,useDeferredValue:function(r){var s=Ei();return un===null?s.memoizedState=r:t_(s,un.memoizedState,r)},useTransition:function(){var r=fh(cl)[0],s=Ei().memoizedState;return[r,s]},useMutableSource:Bg,useSyncExternalStore:zg,useId:n_,unstable_isNewReconciler:!1};function Fi(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var c in r)s[c]===void 0&&(s[c]=r[c]);return s}return s}function ph(r,s,c,d){s=r.memoizedState,c=c(d,s),c=c==null?s:le({},s,c),r.memoizedState=c,r.lanes===0&&(r.updateQueue.baseState=c)}var ku={isMounted:function(r){return(r=r._reactInternals)?qi(r)===r:!1},enqueueSetState:function(r,s,c){r=r._reactInternals;var d=Hn(),_=ss(r),S=Sr(d,_);S.payload=s,c!=null&&(S.callback=c),s=ts(r,S,_),s!==null&&(Bi(s,r,_,d),Pu(s,r,_))},enqueueReplaceState:function(r,s,c){r=r._reactInternals;var d=Hn(),_=ss(r),S=Sr(d,_);S.tag=1,S.payload=s,c!=null&&(S.callback=c),s=ts(r,S,_),s!==null&&(Bi(s,r,_,d),Pu(s,r,_))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var c=Hn(),d=ss(r),_=Sr(c,d);_.tag=2,s!=null&&(_.callback=s),s=ts(r,_,d),s!==null&&(Bi(s,r,d,c),Pu(s,r,d))}};function o_(r,s,c,d,_,S,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,S,w):s.prototype&&s.prototype.isPureReactComponent?!Za(c,d)||!Za(_,S):!0}function a_(r,s,c){var d=!1,_=Qr,S=s.contextType;return typeof S=="object"&&S!==null?S=Mi(S):(_=Qn(s)?Os:Rn.current,d=s.contextTypes,S=(d=d!=null)?Io(r,_):Qr),s=new s(c,S),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ku,r.stateNode=s,s._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=_,r.__reactInternalMemoizedMaskedChildContext=S),s}function l_(r,s,c,d){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(c,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(c,d),s.state!==r&&ku.enqueueReplaceState(s,s.state,null)}function mh(r,s,c,d){var _=r.stateNode;_.props=c,_.state=r.memoizedState,_.refs={},th(r);var S=s.contextType;typeof S=="object"&&S!==null?_.context=Mi(S):(S=Qn(s)?Os:Rn.current,_.context=Io(r,S)),_.state=r.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(ph(r,s,S,c),_.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(s=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),s!==_.state&&ku.enqueueReplaceState(_,_.state,null),Lu(r,c,_,d),_.state=r.memoizedState),typeof _.componentDidMount=="function"&&(r.flags|=4194308)}function zo(r,s){try{var c="",d=s;do c+=Z(d),d=d.return;while(d);var _=c}catch(S){_=`
Error generating stack: `+S.message+`
`+S.stack}return{value:r,source:s,stack:_,digest:null}}function gh(r,s,c){return{value:r,source:null,stack:c??null,digest:s??null}}function _h(r,s){try{console.error(s.value)}catch(c){setTimeout(function(){throw c})}}var HS=typeof WeakMap=="function"?WeakMap:Map;function u_(r,s,c){c=Sr(-1,c),c.tag=3,c.payload={element:null};var d=s.value;return c.callback=function(){Xu||(Xu=!0,Ih=d),_h(r,s)},c}function c_(r,s,c){c=Sr(-1,c),c.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var _=s.value;c.payload=function(){return d(_)},c.callback=function(){_h(r,s)}}var S=r.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(c.callback=function(){_h(r,s),typeof d!="function"&&(is===null?is=new Set([this]):is.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),c}function f_(r,s,c){var d=r.pingCache;if(d===null){d=r.pingCache=new HS;var _=new Set;d.set(s,_)}else _=d.get(s),_===void 0&&(_=new Set,d.set(s,_));_.has(c)||(_.add(c),r=nM.bind(null,r,s,c),s.then(r,r))}function h_(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function d_(r,s,c,d,_){return r.mode&1?(r.flags|=65536,r.lanes=_,r):(r===s?r.flags|=65536:(r.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(s=Sr(-1,1),s.tag=2,ts(c,s,1))),c.lanes|=1),r)}var GS=T.ReactCurrentOwner,Jn=!1;function Vn(r,s,c,d){s.child=r===null?Dg(s,null,c,d):Fo(s,r.child,c,d)}function p_(r,s,c,d,_){c=c.render;var S=s.ref;return ko(s,_),d=lh(r,s,c,d,S,_),c=uh(),r!==null&&!Jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~_,Mr(r,s,_)):(Wt&&c&&Xf(s),s.flags|=1,Vn(r,s,d,_),s.child)}function m_(r,s,c,d,_){if(r===null){var S=c.type;return typeof S=="function"&&!Bh(S)&&S.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(s.tag=15,s.type=S,g_(r,s,S,d,_)):(r=Zu(c.type,null,d,s,s.mode,_),r.ref=s.ref,r.return=s,s.child=r)}if(S=r.child,!(r.lanes&_)){var w=S.memoizedProps;if(c=c.compare,c=c!==null?c:Za,c(w,d)&&r.ref===s.ref)return Mr(r,s,_)}return s.flags|=1,r=as(S,d),r.ref=s.ref,r.return=s,s.child=r}function g_(r,s,c,d,_){if(r!==null){var S=r.memoizedProps;if(Za(S,d)&&r.ref===s.ref)if(Jn=!1,s.pendingProps=d=S,(r.lanes&_)!==0)r.flags&131072&&(Jn=!0);else return s.lanes=r.lanes,Mr(r,s,_)}return vh(r,s,c,d,_)}function __(r,s,c){var d=s.pendingProps,_=d.children,S=r!==null?r.memoizedState:null;if(d.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ho,fi),fi|=c;else{if(!(c&1073741824))return r=S!==null?S.baseLanes|c:c,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,kt(Ho,fi),fi|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:c,kt(Ho,fi),fi|=d}else S!==null?(d=S.baseLanes|c,s.memoizedState=null):d=c,kt(Ho,fi),fi|=d;return Vn(r,s,_,c),s.child}function v_(r,s){var c=s.ref;(r===null&&c!==null||r!==null&&r.ref!==c)&&(s.flags|=512,s.flags|=2097152)}function vh(r,s,c,d,_){var S=Qn(c)?Os:Rn.current;return S=Io(s,S),ko(s,_),c=lh(r,s,c,d,S,_),d=uh(),r!==null&&!Jn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~_,Mr(r,s,_)):(Wt&&d&&Xf(s),s.flags|=1,Vn(r,s,c,_),s.child)}function x_(r,s,c,d,_){if(Qn(c)){var S=!0;Mu(s)}else S=!1;if(ko(s,_),s.stateNode===null)zu(r,s),a_(s,c,d),mh(s,c,d,_),d=!0;else if(r===null){var w=s.stateNode,O=s.memoizedProps;w.props=O;var V=w.context,ie=c.contextType;typeof ie=="object"&&ie!==null?ie=Mi(ie):(ie=Qn(c)?Os:Rn.current,ie=Io(s,ie));var ye=c.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==d||V!==ie)&&l_(s,w,d,ie),es=!1;var _e=s.memoizedState;w.state=_e,Lu(s,d,w,_),V=s.memoizedState,O!==d||_e!==V||Zn.current||es?(typeof ye=="function"&&(ph(s,c,ye,d),V=s.memoizedState),(O=es||o_(s,c,O,d,_e,V,ie))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=V),w.props=d,w.state=V,w.context=ie,d=O):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{w=s.stateNode,Ug(r,s),O=s.memoizedProps,ie=s.type===s.elementType?O:Fi(s.type,O),w.props=ie,Se=s.pendingProps,_e=w.context,V=c.contextType,typeof V=="object"&&V!==null?V=Mi(V):(V=Qn(c)?Os:Rn.current,V=Io(s,V));var De=c.getDerivedStateFromProps;(ye=typeof De=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==Se||_e!==V)&&l_(s,w,d,V),es=!1,_e=s.memoizedState,w.state=_e,Lu(s,d,w,_);var ze=s.memoizedState;O!==Se||_e!==ze||Zn.current||es?(typeof De=="function"&&(ph(s,c,De,d),ze=s.memoizedState),(ie=es||o_(s,c,ie,d,_e,ze,V)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ze,V),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ze,V)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===r.memoizedProps&&_e===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===r.memoizedProps&&_e===r.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=ze),w.props=d,w.state=ze,w.context=V,d=ie):(typeof w.componentDidUpdate!="function"||O===r.memoizedProps&&_e===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===r.memoizedProps&&_e===r.memoizedState||(s.flags|=1024),d=!1)}return xh(r,s,c,d,S,_)}function xh(r,s,c,d,_,S){v_(r,s);var w=(s.flags&128)!==0;if(!d&&!w)return _&&Tg(s,c,!1),Mr(r,s,S);d=s.stateNode,GS.current=s;var O=w&&typeof c.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,r!==null&&w?(s.child=Fo(s,r.child,null,S),s.child=Fo(s,null,O,S)):Vn(r,s,O,S),s.memoizedState=d.state,_&&Tg(s,c,!0),s.child}function y_(r){var s=r.stateNode;s.pendingContext?Mg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Mg(r,s.context,!1),nh(r,s.containerInfo)}function S_(r,s,c,d,_){return Uo(),Kf(_),s.flags|=256,Vn(r,s,c,d),s.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function Sh(r){return{baseLanes:r,cachePool:null,transitions:null}}function M_(r,s,c){var d=s.pendingProps,_=jt.current,S=!1,w=(s.flags&128)!==0,O;if((O=w)||(O=r!==null&&r.memoizedState===null?!1:(_&2)!==0),O?(S=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(_|=1),kt(jt,_&1),r===null)return qf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=d.children,r=d.fallback,S?(d=s.mode,S=s.child,w={mode:"hidden",children:w},!(d&1)&&S!==null?(S.childLanes=0,S.pendingProps=w):S=Qu(w,d,0,null),r=Ys(r,d,c,null),S.return=s,r.return=s,S.sibling=r,s.child=S,s.child.memoizedState=Sh(c),s.memoizedState=yh,r):Mh(s,w));if(_=r.memoizedState,_!==null&&(O=_.dehydrated,O!==null))return WS(r,s,w,d,O,_,c);if(S){S=d.fallback,w=s.mode,_=r.child,O=_.sibling;var V={mode:"hidden",children:d.children};return!(w&1)&&s.child!==_?(d=s.child,d.childLanes=0,d.pendingProps=V,s.deletions=null):(d=as(_,V),d.subtreeFlags=_.subtreeFlags&14680064),O!==null?S=as(O,S):(S=Ys(S,w,c,null),S.flags|=2),S.return=s,d.return=s,d.sibling=S,s.child=d,d=S,S=s.child,w=r.child.memoizedState,w=w===null?Sh(c):{baseLanes:w.baseLanes|c,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=r.childLanes&~c,s.memoizedState=yh,d}return S=r.child,r=S.sibling,d=as(S,{mode:"visible",children:d.children}),!(s.mode&1)&&(d.lanes=c),d.return=s,d.sibling=null,r!==null&&(c=s.deletions,c===null?(s.deletions=[r],s.flags|=16):c.push(r)),s.child=d,s.memoizedState=null,d}function Mh(r,s){return s=Qu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Bu(r,s,c,d){return d!==null&&Kf(d),Fo(s,r.child,null,c),r=Mh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function WS(r,s,c,d,_,S,w){if(c)return s.flags&256?(s.flags&=-257,d=gh(Error(t(422))),Bu(r,s,w,d)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(S=d.fallback,_=s.mode,d=Qu({mode:"visible",children:d.children},_,0,null),S=Ys(S,_,w,null),S.flags|=2,d.return=s,S.return=s,d.sibling=S,s.child=d,s.mode&1&&Fo(s,r.child,null,w),s.child.memoizedState=Sh(w),s.memoizedState=yh,S);if(!(s.mode&1))return Bu(r,s,w,null);if(_.data==="$!"){if(d=_.nextSibling&&_.nextSibling.dataset,d)var O=d.dgst;return d=O,S=Error(t(419)),d=gh(S,d,void 0),Bu(r,s,w,d)}if(O=(w&r.childLanes)!==0,Jn||O){if(d=pn,d!==null){switch(w&-w){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=_&(d.suspendedLanes|w)?0:_,_!==0&&_!==S.retryLane&&(S.retryLane=_,yr(r,_),Bi(d,r,_,-1))}return kh(),d=gh(Error(t(421))),Bu(r,s,w,d)}return _.data==="$?"?(s.flags|=128,s.child=r.child,s=iM.bind(null,r),_._reactRetry=s,null):(r=S.treeContext,ci=$r(_.nextSibling),ui=s,Wt=!0,Ui=null,r!==null&&(yi[Si++]=vr,yi[Si++]=xr,yi[Si++]=ks,vr=r.id,xr=r.overflow,ks=s),s=Mh(s,d.children),s.flags|=4096,s)}function E_(r,s,c){r.lanes|=s;var d=r.alternate;d!==null&&(d.lanes|=s),Jf(r.return,s,c)}function Eh(r,s,c,d,_){var S=r.memoizedState;S===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:_}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=c,S.tailMode=_)}function T_(r,s,c){var d=s.pendingProps,_=d.revealOrder,S=d.tail;if(Vn(r,s,d.children,c),d=jt.current,d&2)d=d&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&E_(r,c,s);else if(r.tag===19)E_(r,c,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(kt(jt,d),!(s.mode&1))s.memoizedState=null;else switch(_){case"forwards":for(c=s.child,_=null;c!==null;)r=c.alternate,r!==null&&Iu(r)===null&&(_=c),c=c.sibling;c=_,c===null?(_=s.child,s.child=null):(_=c.sibling,c.sibling=null),Eh(s,!1,_,c,S);break;case"backwards":for(c=null,_=s.child,s.child=null;_!==null;){if(r=_.alternate,r!==null&&Iu(r)===null){s.child=_;break}r=_.sibling,_.sibling=c,c=_,_=r}Eh(s,!0,c,null,S);break;case"together":Eh(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function zu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Mr(r,s,c){if(r!==null&&(s.dependencies=r.dependencies),Gs|=s.lanes,!(c&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,c=as(r,r.pendingProps),s.child=c,c.return=s;r.sibling!==null;)r=r.sibling,c=c.sibling=as(r,r.pendingProps),c.return=s;c.sibling=null}return s.child}function XS(r,s,c){switch(s.tag){case 3:y_(s),Uo();break;case 5:kg(s);break;case 1:Qn(s.type)&&Mu(s);break;case 4:nh(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,_=s.memoizedProps.value;kt(Cu,d._currentValue),d._currentValue=_;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(kt(jt,jt.current&1),s.flags|=128,null):c&s.child.childLanes?M_(r,s,c):(kt(jt,jt.current&1),r=Mr(r,s,c),r!==null?r.sibling:null);kt(jt,jt.current&1);break;case 19:if(d=(c&s.childLanes)!==0,r.flags&128){if(d)return T_(r,s,c);s.flags|=128}if(_=s.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),kt(jt,jt.current),d)break;return null;case 22:case 23:return s.lanes=0,__(r,s,c)}return Mr(r,s,c)}var w_,Th,A_,R_;w_=function(r,s){for(var c=s.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===s)break;for(;c.sibling===null;){if(c.return===null||c.return===s)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Th=function(){},A_=function(r,s,c,d){var _=r.memoizedProps;if(_!==d){r=s.stateNode,Vs($i.current);var S=null;switch(c){case"input":_=H(r,_),d=H(r,d),S=[];break;case"select":_=le({},_,{value:void 0}),d=le({},d,{value:void 0}),S=[];break;case"textarea":_=P(r,_),d=P(r,d),S=[];break;default:typeof _.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=xu)}dt(c,d);var w;c=null;for(ie in _)if(!d.hasOwnProperty(ie)&&_.hasOwnProperty(ie)&&_[ie]!=null)if(ie==="style"){var O=_[ie];for(w in O)O.hasOwnProperty(w)&&(c||(c={}),c[w]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(i.hasOwnProperty(ie)?S||(S=[]):(S=S||[]).push(ie,null));for(ie in d){var V=d[ie];if(O=_!=null?_[ie]:void 0,d.hasOwnProperty(ie)&&V!==O&&(V!=null||O!=null))if(ie==="style")if(O){for(w in O)!O.hasOwnProperty(w)||V&&V.hasOwnProperty(w)||(c||(c={}),c[w]="");for(w in V)V.hasOwnProperty(w)&&O[w]!==V[w]&&(c||(c={}),c[w]=V[w])}else c||(S||(S=[]),S.push(ie,c)),c=V;else ie==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(S=S||[]).push(ie,V)):ie==="children"?typeof V!="string"&&typeof V!="number"||(S=S||[]).push(ie,""+V):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(i.hasOwnProperty(ie)?(V!=null&&ie==="onScroll"&&Vt("scroll",r),S||O===V||(S=[])):(S=S||[]).push(ie,V))}c&&(S=S||[]).push("style",c);var ie=S;(s.updateQueue=ie)&&(s.flags|=4)}},R_=function(r,s,c,d){c!==d&&(s.flags|=4)};function hl(r,s){if(!Wt)switch(r.tailMode){case"hidden":s=r.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r.tail=null:c.sibling=null;break;case"collapsed":c=r.tail;for(var d=null;c!==null;)c.alternate!==null&&(d=c),c=c.sibling;d===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function bn(r){var s=r.alternate!==null&&r.alternate.child===r.child,c=0,d=0;if(s)for(var _=r.child;_!==null;)c|=_.lanes|_.childLanes,d|=_.subtreeFlags&14680064,d|=_.flags&14680064,_.return=r,_=_.sibling;else for(_=r.child;_!==null;)c|=_.lanes|_.childLanes,d|=_.subtreeFlags,d|=_.flags,_.return=r,_=_.sibling;return r.subtreeFlags|=d,r.childLanes=c,s}function jS(r,s,c){var d=s.pendingProps;switch(jf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(s),null;case 1:return Qn(s.type)&&Su(),bn(s),null;case 3:return d=s.stateNode,Bo(),Ht(Zn),Ht(Rn),sh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(Au(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Ui!==null&&(Uh(Ui),Ui=null))),Th(r,s),bn(s),null;case 5:ih(s);var _=Vs(al.current);if(c=s.type,r!==null&&s.stateNode!=null)A_(r,s,c,d,_),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return bn(s),null}if(r=Vs($i.current),Au(s)){d=s.stateNode,c=s.type;var S=s.memoizedProps;switch(d[Ki]=s,d[nl]=S,r=(s.mode&1)!==0,c){case"dialog":Vt("cancel",d),Vt("close",d);break;case"iframe":case"object":case"embed":Vt("load",d);break;case"video":case"audio":for(_=0;_<Ja.length;_++)Vt(Ja[_],d);break;case"source":Vt("error",d);break;case"img":case"image":case"link":Vt("error",d),Vt("load",d);break;case"details":Vt("toggle",d);break;case"input":On(d,S),Vt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},Vt("invalid",d);break;case"textarea":ne(d,S),Vt("invalid",d)}dt(c,S),_=null;for(var w in S)if(S.hasOwnProperty(w)){var O=S[w];w==="children"?typeof O=="string"?d.textContent!==O&&(S.suppressHydrationWarning!==!0&&vu(d.textContent,O,r),_=["children",O]):typeof O=="number"&&d.textContent!==""+O&&(S.suppressHydrationWarning!==!0&&vu(d.textContent,O,r),_=["children",""+O]):i.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Vt("scroll",d)}switch(c){case"input":lt(d),Ye(d,S,!0);break;case"textarea":lt(d),xe(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=xu)}d=_,s.updateQueue=d,d!==null&&(s.flags|=4)}else{w=_.nodeType===9?_:_.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=de(c)),r==="http://www.w3.org/1999/xhtml"?c==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(c,{is:d.is}):(r=w.createElement(c),c==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,c),r[Ki]=s,r[nl]=d,w_(r,s,!1,!1),s.stateNode=r;e:{switch(w=it(c,d),c){case"dialog":Vt("cancel",r),Vt("close",r),_=d;break;case"iframe":case"object":case"embed":Vt("load",r),_=d;break;case"video":case"audio":for(_=0;_<Ja.length;_++)Vt(Ja[_],r);_=d;break;case"source":Vt("error",r),_=d;break;case"img":case"image":case"link":Vt("error",r),Vt("load",r),_=d;break;case"details":Vt("toggle",r),_=d;break;case"input":On(r,d),_=H(r,d),Vt("invalid",r);break;case"option":_=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},_=le({},d,{value:void 0}),Vt("invalid",r);break;case"textarea":ne(r,d),_=P(r,d),Vt("invalid",r);break;default:_=d}dt(c,_),O=_;for(S in O)if(O.hasOwnProperty(S)){var V=O[S];S==="style"?Qe(r,V):S==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ue(r,V)):S==="children"?typeof V=="string"?(c!=="textarea"||V!=="")&&ft(r,V):typeof V=="number"&&ft(r,""+V):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(i.hasOwnProperty(S)?V!=null&&S==="onScroll"&&Vt("scroll",r):V!=null&&C(r,S,V,w))}switch(c){case"input":lt(r),Ye(r,d,!1);break;case"textarea":lt(r),xe(r);break;case"option":d.value!=null&&r.setAttribute("value",""+ve(d.value));break;case"select":r.multiple=!!d.multiple,S=d.value,S!=null?U(r,!!d.multiple,S,!1):d.defaultValue!=null&&U(r,!!d.multiple,d.defaultValue,!0);break;default:typeof _.onClick=="function"&&(r.onclick=xu)}switch(c){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bn(s),null;case 6:if(r&&s.stateNode!=null)R_(r,s,r.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(c=Vs(al.current),Vs($i.current),Au(s)){if(d=s.stateNode,c=s.memoizedProps,d[Ki]=s,(S=d.nodeValue!==c)&&(r=ui,r!==null))switch(r.tag){case 3:vu(d.nodeValue,c,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&vu(d.nodeValue,c,(r.mode&1)!==0)}S&&(s.flags|=4)}else d=(c.nodeType===9?c:c.ownerDocument).createTextNode(d),d[Ki]=s,s.stateNode=d}return bn(s),null;case 13:if(Ht(jt),d=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Wt&&ci!==null&&s.mode&1&&!(s.flags&128))Pg(),Uo(),s.flags|=98560,S=!1;else if(S=Au(s),d!==null&&d.dehydrated!==null){if(r===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Ki]=s}else Uo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;bn(s),S=!1}else Ui!==null&&(Uh(Ui),Ui=null),S=!0;if(!S)return s.flags&65536?s:null}return s.flags&128?(s.lanes=c,s):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(s.child.flags|=8192,s.mode&1&&(r===null||jt.current&1?cn===0&&(cn=3):kh())),s.updateQueue!==null&&(s.flags|=4),bn(s),null);case 4:return Bo(),Th(r,s),r===null&&el(s.stateNode.containerInfo),bn(s),null;case 10:return Qf(s.type._context),bn(s),null;case 17:return Qn(s.type)&&Su(),bn(s),null;case 19:if(Ht(jt),S=s.memoizedState,S===null)return bn(s),null;if(d=(s.flags&128)!==0,w=S.rendering,w===null)if(d)hl(S,!1);else{if(cn!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=Iu(r),w!==null){for(s.flags|=128,hl(S,!1),d=w.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=c,c=s.child;c!==null;)S=c,r=d,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=r,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,r=w.dependencies,S.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),c=c.sibling;return kt(jt,jt.current&1|2),s.child}r=r.sibling}S.tail!==null&&G()>Go&&(s.flags|=128,d=!0,hl(S,!1),s.lanes=4194304)}else{if(!d)if(r=Iu(w),r!==null){if(s.flags|=128,d=!0,c=r.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),hl(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!Wt)return bn(s),null}else 2*G()-S.renderingStartTime>Go&&c!==1073741824&&(s.flags|=128,d=!0,hl(S,!1),s.lanes=4194304);S.isBackwards?(w.sibling=s.child,s.child=w):(c=S.last,c!==null?c.sibling=w:s.child=w,S.last=w)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=G(),s.sibling=null,c=jt.current,kt(jt,d?c&1|2:c&1),s):(bn(s),null);case 22:case 23:return Oh(),d=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(s.flags|=8192),d&&s.mode&1?fi&1073741824&&(bn(s),s.subtreeFlags&6&&(s.flags|=8192)):bn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function YS(r,s){switch(jf(s),s.tag){case 1:return Qn(s.type)&&Su(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Bo(),Ht(Zn),Ht(Rn),sh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return ih(s),null;case 13:if(Ht(jt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Uo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ht(jt),null;case 4:return Bo(),null;case 10:return Qf(s.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var Vu=!1,Pn=!1,qS=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Vo(r,s){var c=r.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(d){Jt(r,s,d)}else c.current=null}function wh(r,s,c){try{c()}catch(d){Jt(r,s,d)}}var C_=!1;function KS(r,s){if(Of=au,r=og(),bf(r)){if("selectionStart"in r)var c={start:r.selectionStart,end:r.selectionEnd};else e:{c=(c=r.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&d.rangeCount!==0){c=d.anchorNode;var _=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{c.nodeType,S.nodeType}catch{c=null;break e}var w=0,O=-1,V=-1,ie=0,ye=0,Se=r,_e=null;t:for(;;){for(var De;Se!==c||_!==0&&Se.nodeType!==3||(O=w+_),Se!==S||d!==0&&Se.nodeType!==3||(V=w+d),Se.nodeType===3&&(w+=Se.nodeValue.length),(De=Se.firstChild)!==null;)_e=Se,Se=De;for(;;){if(Se===r)break t;if(_e===c&&++ie===_&&(O=w),_e===S&&++ye===d&&(V=w),(De=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=De}c=O===-1||V===-1?null:{start:O,end:V}}else c=null}c=c||{start:0,end:0}}else c=null;for(kf={focusedElem:r,selectionRange:c},au=!1,Oe=s;Oe!==null;)if(s=Oe,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,Oe=r;else for(;Oe!==null;){s=Oe;try{var ze=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,nn=ze.memoizedState,$=s.stateNode,W=$.getSnapshotBeforeUpdate(s.elementType===s.type?Ve:Fi(s.type,Ve),nn);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ee=s.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Jt(s,s.return,Te)}if(r=s.sibling,r!==null){r.return=s.return,Oe=r;break}Oe=s.return}return ze=C_,C_=!1,ze}function dl(r,s,c){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var _=d=d.next;do{if((_.tag&r)===r){var S=_.destroy;_.destroy=void 0,S!==void 0&&wh(s,c,S)}_=_.next}while(_!==d)}}function Hu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&r)===r){var d=c.create;c.destroy=d()}c=c.next}while(c!==s)}}function Ah(r){var s=r.ref;if(s!==null){var c=r.stateNode;switch(r.tag){case 5:r=c;break;default:r=c}typeof s=="function"?s(r):s.current=r}}function b_(r){var s=r.alternate;s!==null&&(r.alternate=null,b_(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Ki],delete s[nl],delete s[Hf],delete s[LS],delete s[IS])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function P_(r){return r.tag===5||r.tag===3||r.tag===4}function L_(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||P_(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Rh(r,s,c){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?c.nodeType===8?c.parentNode.insertBefore(r,s):c.insertBefore(r,s):(c.nodeType===8?(s=c.parentNode,s.insertBefore(r,c)):(s=c,s.appendChild(r)),c=c._reactRootContainer,c!=null||s.onclick!==null||(s.onclick=xu));else if(d!==4&&(r=r.child,r!==null))for(Rh(r,s,c),r=r.sibling;r!==null;)Rh(r,s,c),r=r.sibling}function Ch(r,s,c){var d=r.tag;if(d===5||d===6)r=r.stateNode,s?c.insertBefore(r,s):c.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Ch(r,s,c),r=r.sibling;r!==null;)Ch(r,s,c),r=r.sibling}var Mn=null,Oi=!1;function ns(r,s,c){for(c=c.child;c!==null;)I_(r,s,c),c=c.sibling}function I_(r,s,c){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(je,c)}catch{}switch(c.tag){case 5:Pn||Vo(c,s);case 6:var d=Mn,_=Oi;Mn=null,ns(r,s,c),Mn=d,Oi=_,Mn!==null&&(Oi?(r=Mn,c=c.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)):Mn.removeChild(c.stateNode));break;case 18:Mn!==null&&(Oi?(r=Mn,c=c.stateNode,r.nodeType===8?Vf(r.parentNode,c):r.nodeType===1&&Vf(r,c),Xa(r)):Vf(Mn,c.stateNode));break;case 4:d=Mn,_=Oi,Mn=c.stateNode.containerInfo,Oi=!0,ns(r,s,c),Mn=d,Oi=_;break;case 0:case 11:case 14:case 15:if(!Pn&&(d=c.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){_=d=d.next;do{var S=_,w=S.destroy;S=S.tag,w!==void 0&&(S&2||S&4)&&wh(c,s,w),_=_.next}while(_!==d)}ns(r,s,c);break;case 1:if(!Pn&&(Vo(c,s),d=c.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(O){Jt(c,s,O)}ns(r,s,c);break;case 21:ns(r,s,c);break;case 22:c.mode&1?(Pn=(d=Pn)||c.memoizedState!==null,ns(r,s,c),Pn=d):ns(r,s,c);break;default:ns(r,s,c)}}function D_(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var c=r.stateNode;c===null&&(c=r.stateNode=new qS),s.forEach(function(d){var _=rM.bind(null,r,d);c.has(d)||(c.add(d),d.then(_,_))})}}function ki(r,s){var c=s.deletions;if(c!==null)for(var d=0;d<c.length;d++){var _=c[d];try{var S=r,w=s,O=w;e:for(;O!==null;){switch(O.tag){case 5:Mn=O.stateNode,Oi=!1;break e;case 3:Mn=O.stateNode.containerInfo,Oi=!0;break e;case 4:Mn=O.stateNode.containerInfo,Oi=!0;break e}O=O.return}if(Mn===null)throw Error(t(160));I_(S,w,_),Mn=null,Oi=!1;var V=_.alternate;V!==null&&(V.return=null),_.return=null}catch(ie){Jt(_,s,ie)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)N_(s,r),s=s.sibling}function N_(r,s){var c=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(ki(s,r),Qi(r),d&4){try{dl(3,r,r.return),Hu(3,r)}catch(Ve){Jt(r,r.return,Ve)}try{dl(5,r,r.return)}catch(Ve){Jt(r,r.return,Ve)}}break;case 1:ki(s,r),Qi(r),d&512&&c!==null&&Vo(c,c.return);break;case 5:if(ki(s,r),Qi(r),d&512&&c!==null&&Vo(c,c.return),r.flags&32){var _=r.stateNode;try{ft(_,"")}catch(Ve){Jt(r,r.return,Ve)}}if(d&4&&(_=r.stateNode,_!=null)){var S=r.memoizedProps,w=c!==null?c.memoizedProps:S,O=r.type,V=r.updateQueue;if(r.updateQueue=null,V!==null)try{O==="input"&&S.type==="radio"&&S.name!=null&&mt(_,S),it(O,w);var ie=it(O,S);for(w=0;w<V.length;w+=2){var ye=V[w],Se=V[w+1];ye==="style"?Qe(_,Se):ye==="dangerouslySetInnerHTML"?Ue(_,Se):ye==="children"?ft(_,Se):C(_,ye,Se,ie)}switch(O){case"input":ht(_,S);break;case"textarea":ge(_,S);break;case"select":var _e=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!S.multiple;var De=S.value;De!=null?U(_,!!S.multiple,De,!1):_e!==!!S.multiple&&(S.defaultValue!=null?U(_,!!S.multiple,S.defaultValue,!0):U(_,!!S.multiple,S.multiple?[]:"",!1))}_[nl]=S}catch(Ve){Jt(r,r.return,Ve)}}break;case 6:if(ki(s,r),Qi(r),d&4){if(r.stateNode===null)throw Error(t(162));_=r.stateNode,S=r.memoizedProps;try{_.nodeValue=S}catch(Ve){Jt(r,r.return,Ve)}}break;case 3:if(ki(s,r),Qi(r),d&4&&c!==null&&c.memoizedState.isDehydrated)try{Xa(s.containerInfo)}catch(Ve){Jt(r,r.return,Ve)}break;case 4:ki(s,r),Qi(r);break;case 13:ki(s,r),Qi(r),_=r.child,_.flags&8192&&(S=_.memoizedState!==null,_.stateNode.isHidden=S,!S||_.alternate!==null&&_.alternate.memoizedState!==null||(Lh=G())),d&4&&D_(r);break;case 22:if(ye=c!==null&&c.memoizedState!==null,r.mode&1?(Pn=(ie=Pn)||ye,ki(s,r),Pn=ie):ki(s,r),Qi(r),d&8192){if(ie=r.memoizedState!==null,(r.stateNode.isHidden=ie)&&!ye&&r.mode&1)for(Oe=r,ye=r.child;ye!==null;){for(Se=Oe=ye;Oe!==null;){switch(_e=Oe,De=_e.child,_e.tag){case 0:case 11:case 14:case 15:dl(4,_e,_e.return);break;case 1:Vo(_e,_e.return);var ze=_e.stateNode;if(typeof ze.componentWillUnmount=="function"){d=_e,c=_e.return;try{s=d,ze.props=s.memoizedProps,ze.state=s.memoizedState,ze.componentWillUnmount()}catch(Ve){Jt(d,c,Ve)}}break;case 5:Vo(_e,_e.return);break;case 22:if(_e.memoizedState!==null){O_(Se);continue}}De!==null?(De.return=_e,Oe=De):O_(Se)}ye=ye.sibling}e:for(ye=null,Se=r;;){if(Se.tag===5){if(ye===null){ye=Se;try{_=Se.stateNode,ie?(S=_.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(O=Se.stateNode,V=Se.memoizedProps.style,w=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=Ke("display",w))}catch(Ve){Jt(r,r.return,Ve)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(Ve){Jt(r,r.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===r)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===r)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===r)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ki(s,r),Qi(r),d&4&&D_(r);break;case 21:break;default:ki(s,r),Qi(r)}}function Qi(r){var s=r.flags;if(s&2){try{e:{for(var c=r.return;c!==null;){if(P_(c)){var d=c;break e}c=c.return}throw Error(t(160))}switch(d.tag){case 5:var _=d.stateNode;d.flags&32&&(ft(_,""),d.flags&=-33);var S=L_(r);Ch(r,S,_);break;case 3:case 4:var w=d.stateNode.containerInfo,O=L_(r);Rh(r,O,w);break;default:throw Error(t(161))}}catch(V){Jt(r,r.return,V)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function $S(r,s,c){Oe=r,U_(r)}function U_(r,s,c){for(var d=(r.mode&1)!==0;Oe!==null;){var _=Oe,S=_.child;if(_.tag===22&&d){var w=_.memoizedState!==null||Vu;if(!w){var O=_.alternate,V=O!==null&&O.memoizedState!==null||Pn;O=Vu;var ie=Pn;if(Vu=w,(Pn=V)&&!ie)for(Oe=_;Oe!==null;)w=Oe,V=w.child,w.tag===22&&w.memoizedState!==null?k_(_):V!==null?(V.return=w,Oe=V):k_(_);for(;S!==null;)Oe=S,U_(S),S=S.sibling;Oe=_,Vu=O,Pn=ie}F_(r)}else _.subtreeFlags&8772&&S!==null?(S.return=_,Oe=S):F_(r)}}function F_(r){for(;Oe!==null;){var s=Oe;if(s.flags&8772){var c=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Pn||Hu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Pn)if(c===null)d.componentDidMount();else{var _=s.elementType===s.type?c.memoizedProps:Fi(s.type,c.memoizedProps);d.componentDidUpdate(_,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&Og(s,S,d);break;case 3:var w=s.updateQueue;if(w!==null){if(c=null,s.child!==null)switch(s.child.tag){case 5:c=s.child.stateNode;break;case 1:c=s.child.stateNode}Og(s,w,c)}break;case 5:var O=s.stateNode;if(c===null&&s.flags&4){c=O;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&c.focus();break;case"img":V.src&&(c.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ie=s.alternate;if(ie!==null){var ye=ie.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&Xa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||s.flags&512&&Ah(s)}catch(_e){Jt(s,s.return,_e)}}if(s===r){Oe=null;break}if(c=s.sibling,c!==null){c.return=s.return,Oe=c;break}Oe=s.return}}function O_(r){for(;Oe!==null;){var s=Oe;if(s===r){Oe=null;break}var c=s.sibling;if(c!==null){c.return=s.return,Oe=c;break}Oe=s.return}}function k_(r){for(;Oe!==null;){var s=Oe;try{switch(s.tag){case 0:case 11:case 15:var c=s.return;try{Hu(4,s)}catch(V){Jt(s,c,V)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var _=s.return;try{d.componentDidMount()}catch(V){Jt(s,_,V)}}var S=s.return;try{Ah(s)}catch(V){Jt(s,S,V)}break;case 5:var w=s.return;try{Ah(s)}catch(V){Jt(s,w,V)}}}catch(V){Jt(s,s.return,V)}if(s===r){Oe=null;break}var O=s.sibling;if(O!==null){O.return=s.return,Oe=O;break}Oe=s.return}}var ZS=Math.ceil,Gu=T.ReactCurrentDispatcher,bh=T.ReactCurrentOwner,Ti=T.ReactCurrentBatchConfig,wt=0,pn=null,sn=null,En=0,fi=0,Ho=Zr(0),cn=0,pl=null,Gs=0,Wu=0,Ph=0,ml=null,ei=null,Lh=0,Go=1/0,Er=null,Xu=!1,Ih=null,is=null,ju=!1,rs=null,Yu=0,gl=0,Dh=null,qu=-1,Ku=0;function Hn(){return wt&6?G():qu!==-1?qu:qu=G()}function ss(r){return r.mode&1?wt&2&&En!==0?En&-En:NS.transition!==null?(Ku===0&&(Ku=zn()),Ku):(r=gt,r!==0||(r=window.event,r=r===void 0?16:zm(r.type)),r):1}function Bi(r,s,c,d){if(50<gl)throw gl=0,Dh=null,Error(t(185));tn(r,c,d),(!(wt&2)||r!==pn)&&(r===pn&&(!(wt&2)&&(Wu|=c),cn===4&&os(r,En)),ti(r,d),c===1&&wt===0&&!(s.mode&1)&&(Go=G()+500,Eu&&Jr()))}function ti(r,s){var c=r.callbackNode;Ns(r,s);var d=Di(r,r===pn?En:0);if(d===0)c!==null&&Y(c),r.callbackNode=null,r.callbackPriority=0;else if(s=d&-d,r.callbackPriority!==s){if(c!=null&&Y(c),s===1)r.tag===0?DS(z_.bind(null,r)):wg(z_.bind(null,r)),bS(function(){!(wt&6)&&Jr()}),c=null;else{switch(Im(d)){case 1:c=Pe;break;case 4:c=Ne;break;case 16:c=Fe;break;case 536870912:c=et;break;default:c=Fe}c=q_(c,B_.bind(null,r))}r.callbackPriority=s,r.callbackNode=c}}function B_(r,s){if(qu=-1,Ku=0,wt&6)throw Error(t(327));var c=r.callbackNode;if(Wo()&&r.callbackNode!==c)return null;var d=Di(r,r===pn?En:0);if(d===0)return null;if(d&30||d&r.expiredLanes||s)s=$u(r,d);else{s=d;var _=wt;wt|=2;var S=H_();(pn!==r||En!==s)&&(Er=null,Go=G()+500,Xs(r,s));do try{eM();break}catch(O){V_(r,O)}while(!0);Zf(),Gu.current=S,wt=_,sn!==null?s=0:(pn=null,En=0,s=cn)}if(s!==0){if(s===2&&(_=Nt(r),_!==0&&(d=_,s=Nh(r,_))),s===1)throw c=pl,Xs(r,0),os(r,d),ti(r,G()),c;if(s===6)os(r,d);else{if(_=r.current.alternate,!(d&30)&&!QS(_)&&(s=$u(r,d),s===2&&(S=Nt(r),S!==0&&(d=S,s=Nh(r,S))),s===1))throw c=pl,Xs(r,0),os(r,d),ti(r,G()),c;switch(r.finishedWork=_,r.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:js(r,ei,Er);break;case 3:if(os(r,d),(d&130023424)===d&&(s=Lh+500-G(),10<s)){if(Di(r,0)!==0)break;if(_=r.suspendedLanes,(_&d)!==d){Hn(),r.pingedLanes|=r.suspendedLanes&_;break}r.timeoutHandle=zf(js.bind(null,r,ei,Er),s);break}js(r,ei,Er);break;case 4:if(os(r,d),(d&4194240)===d)break;for(s=r.eventTimes,_=-1;0<d;){var w=31-Ct(d);S=1<<w,w=s[w],w>_&&(_=w),d&=~S}if(d=_,d=G()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ZS(d/1960))-d,10<d){r.timeoutHandle=zf(js.bind(null,r,ei,Er),d);break}js(r,ei,Er);break;case 5:js(r,ei,Er);break;default:throw Error(t(329))}}}return ti(r,G()),r.callbackNode===c?B_.bind(null,r):null}function Nh(r,s){var c=ml;return r.current.memoizedState.isDehydrated&&(Xs(r,s).flags|=256),r=$u(r,s),r!==2&&(s=ei,ei=c,s!==null&&Uh(s)),r}function Uh(r){ei===null?ei=r:ei.push.apply(ei,r)}function QS(r){for(var s=r;;){if(s.flags&16384){var c=s.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var d=0;d<c.length;d++){var _=c[d],S=_.getSnapshot;_=_.value;try{if(!Ni(S(),_))return!1}catch{return!1}}}if(c=s.child,s.subtreeFlags&16384&&c!==null)c.return=s,s=c;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function os(r,s){for(s&=~Ph,s&=~Wu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var c=31-Ct(s),d=1<<c;r[c]=-1,s&=~d}}function z_(r){if(wt&6)throw Error(t(327));Wo();var s=Di(r,0);if(!(s&1))return ti(r,G()),null;var c=$u(r,s);if(r.tag!==0&&c===2){var d=Nt(r);d!==0&&(s=d,c=Nh(r,d))}if(c===1)throw c=pl,Xs(r,0),os(r,s),ti(r,G()),c;if(c===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,js(r,ei,Er),ti(r,G()),null}function Fh(r,s){var c=wt;wt|=1;try{return r(s)}finally{wt=c,wt===0&&(Go=G()+500,Eu&&Jr())}}function Ws(r){rs!==null&&rs.tag===0&&!(wt&6)&&Wo();var s=wt;wt|=1;var c=Ti.transition,d=gt;try{if(Ti.transition=null,gt=1,r)return r()}finally{gt=d,Ti.transition=c,wt=s,!(wt&6)&&Jr()}}function Oh(){fi=Ho.current,Ht(Ho)}function Xs(r,s){r.finishedWork=null,r.finishedLanes=0;var c=r.timeoutHandle;if(c!==-1&&(r.timeoutHandle=-1,CS(c)),sn!==null)for(c=sn.return;c!==null;){var d=c;switch(jf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Su();break;case 3:Bo(),Ht(Zn),Ht(Rn),sh();break;case 5:ih(d);break;case 4:Bo();break;case 13:Ht(jt);break;case 19:Ht(jt);break;case 10:Qf(d.type._context);break;case 22:case 23:Oh()}c=c.return}if(pn=r,sn=r=as(r.current,null),En=fi=s,cn=0,pl=null,Ph=Wu=Gs=0,ei=ml=null,zs!==null){for(s=0;s<zs.length;s++)if(c=zs[s],d=c.interleaved,d!==null){c.interleaved=null;var _=d.next,S=c.pending;if(S!==null){var w=S.next;S.next=_,d.next=w}c.pending=d}zs=null}return r}function V_(r,s){do{var c=sn;try{if(Zf(),Du.current=Ou,Nu){for(var d=Yt.memoizedState;d!==null;){var _=d.queue;_!==null&&(_.pending=null),d=d.next}Nu=!1}if(Hs=0,dn=un=Yt=null,ll=!1,ul=0,bh.current=null,c===null||c.return===null){cn=1,pl=s,sn=null;break}e:{var S=r,w=c.return,O=c,V=s;if(s=En,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ie=V,ye=O,Se=ye.tag;if(!(ye.mode&1)&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var De=h_(w);if(De!==null){De.flags&=-257,d_(De,w,O,S,s),De.mode&1&&f_(S,ie,s),s=De,V=ie;var ze=s.updateQueue;if(ze===null){var Ve=new Set;Ve.add(V),s.updateQueue=Ve}else ze.add(V);break e}else{if(!(s&1)){f_(S,ie,s),kh();break e}V=Error(t(426))}}else if(Wt&&O.mode&1){var nn=h_(w);if(nn!==null){!(nn.flags&65536)&&(nn.flags|=256),d_(nn,w,O,S,s),Kf(zo(V,O));break e}}S=V=zo(V,O),cn!==4&&(cn=2),ml===null?ml=[S]:ml.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var $=u_(S,V,s);Fg(S,$);break e;case 1:O=V;var W=S.type,ee=S.stateNode;if(!(S.flags&128)&&(typeof W.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(is===null||!is.has(ee)))){S.flags|=65536,s&=-s,S.lanes|=s;var Te=c_(S,O,s);Fg(S,Te);break e}}S=S.return}while(S!==null)}W_(c)}catch(We){s=We,sn===c&&c!==null&&(sn=c=c.return);continue}break}while(!0)}function H_(){var r=Gu.current;return Gu.current=Ou,r===null?Ou:r}function kh(){(cn===0||cn===3||cn===2)&&(cn=4),pn===null||!(Gs&268435455)&&!(Wu&268435455)||os(pn,En)}function $u(r,s){var c=wt;wt|=2;var d=H_();(pn!==r||En!==s)&&(Er=null,Xs(r,s));do try{JS();break}catch(_){V_(r,_)}while(!0);if(Zf(),wt=c,Gu.current=d,sn!==null)throw Error(t(261));return pn=null,En=0,cn}function JS(){for(;sn!==null;)G_(sn)}function eM(){for(;sn!==null&&!se();)G_(sn)}function G_(r){var s=Y_(r.alternate,r,fi);r.memoizedProps=r.pendingProps,s===null?W_(r):sn=s,bh.current=null}function W_(r){var s=r;do{var c=s.alternate;if(r=s.return,s.flags&32768){if(c=YS(c,s),c!==null){c.flags&=32767,sn=c;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{cn=6,sn=null;return}}else if(c=jS(c,s,fi),c!==null){sn=c;return}if(s=s.sibling,s!==null){sn=s;return}sn=s=r}while(s!==null);cn===0&&(cn=5)}function js(r,s,c){var d=gt,_=Ti.transition;try{Ti.transition=null,gt=1,tM(r,s,c,d)}finally{Ti.transition=_,gt=d}return null}function tM(r,s,c,d){do Wo();while(rs!==null);if(wt&6)throw Error(t(327));c=r.finishedWork;var _=r.finishedLanes;if(c===null)return null;if(r.finishedWork=null,r.finishedLanes=0,c===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var S=c.lanes|c.childLanes;if(An(r,S),r===pn&&(sn=pn=null,En=0),!(c.subtreeFlags&2064)&&!(c.flags&2064)||ju||(ju=!0,q_(Fe,function(){return Wo(),null})),S=(c.flags&15990)!==0,c.subtreeFlags&15990||S){S=Ti.transition,Ti.transition=null;var w=gt;gt=1;var O=wt;wt|=4,bh.current=null,KS(r,c),N_(c,r),SS(kf),au=!!Of,kf=Of=null,r.current=c,$S(c),ae(),wt=O,gt=w,Ti.transition=S}else r.current=c;if(ju&&(ju=!1,rs=r,Yu=_),S=r.pendingLanes,S===0&&(is=null),Rt(c.stateNode),ti(r,G()),s!==null)for(d=r.onRecoverableError,c=0;c<s.length;c++)_=s[c],d(_.value,{componentStack:_.stack,digest:_.digest});if(Xu)throw Xu=!1,r=Ih,Ih=null,r;return Yu&1&&r.tag!==0&&Wo(),S=r.pendingLanes,S&1?r===Dh?gl++:(gl=0,Dh=r):gl=0,Jr(),null}function Wo(){if(rs!==null){var r=Im(Yu),s=Ti.transition,c=gt;try{if(Ti.transition=null,gt=16>r?16:r,rs===null)var d=!1;else{if(r=rs,rs=null,Yu=0,wt&6)throw Error(t(331));var _=wt;for(wt|=4,Oe=r.current;Oe!==null;){var S=Oe,w=S.child;if(Oe.flags&16){var O=S.deletions;if(O!==null){for(var V=0;V<O.length;V++){var ie=O[V];for(Oe=ie;Oe!==null;){var ye=Oe;switch(ye.tag){case 0:case 11:case 15:dl(8,ye,S)}var Se=ye.child;if(Se!==null)Se.return=ye,Oe=Se;else for(;Oe!==null;){ye=Oe;var _e=ye.sibling,De=ye.return;if(b_(ye),ye===ie){Oe=null;break}if(_e!==null){_e.return=De,Oe=_e;break}Oe=De}}}var ze=S.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var nn=Ve.sibling;Ve.sibling=null,Ve=nn}while(Ve!==null)}}Oe=S}}if(S.subtreeFlags&2064&&w!==null)w.return=S,Oe=w;else e:for(;Oe!==null;){if(S=Oe,S.flags&2048)switch(S.tag){case 0:case 11:case 15:dl(9,S,S.return)}var $=S.sibling;if($!==null){$.return=S.return,Oe=$;break e}Oe=S.return}}var W=r.current;for(Oe=W;Oe!==null;){w=Oe;var ee=w.child;if(w.subtreeFlags&2064&&ee!==null)ee.return=w,Oe=ee;else e:for(w=W;Oe!==null;){if(O=Oe,O.flags&2048)try{switch(O.tag){case 0:case 11:case 15:Hu(9,O)}}catch(We){Jt(O,O.return,We)}if(O===w){Oe=null;break e}var Te=O.sibling;if(Te!==null){Te.return=O.return,Oe=Te;break e}Oe=O.return}}if(wt=_,Jr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(je,r)}catch{}d=!0}return d}finally{gt=c,Ti.transition=s}}return!1}function X_(r,s,c){s=zo(c,s),s=u_(r,s,1),r=ts(r,s,1),s=Hn(),r!==null&&(tn(r,1,s),ti(r,s))}function Jt(r,s,c){if(r.tag===3)X_(r,r,c);else for(;s!==null;){if(s.tag===3){X_(s,r,c);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(is===null||!is.has(d))){r=zo(c,r),r=c_(s,r,1),s=ts(s,r,1),r=Hn(),s!==null&&(tn(s,1,r),ti(s,r));break}}s=s.return}}function nM(r,s,c){var d=r.pingCache;d!==null&&d.delete(s),s=Hn(),r.pingedLanes|=r.suspendedLanes&c,pn===r&&(En&c)===c&&(cn===4||cn===3&&(En&130023424)===En&&500>G()-Lh?Xs(r,0):Ph|=c),ti(r,s)}function j_(r,s){s===0&&(r.mode&1?(s=xt,xt<<=1,!(xt&130023424)&&(xt=4194304)):s=1);var c=Hn();r=yr(r,s),r!==null&&(tn(r,s,c),ti(r,c))}function iM(r){var s=r.memoizedState,c=0;s!==null&&(c=s.retryLane),j_(r,c)}function rM(r,s){var c=0;switch(r.tag){case 13:var d=r.stateNode,_=r.memoizedState;_!==null&&(c=_.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),j_(r,c)}var Y_;Y_=function(r,s,c){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zn.current)Jn=!0;else{if(!(r.lanes&c)&&!(s.flags&128))return Jn=!1,XS(r,s,c);Jn=!!(r.flags&131072)}else Jn=!1,Wt&&s.flags&1048576&&Ag(s,wu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;zu(r,s),r=s.pendingProps;var _=Io(s,Rn.current);ko(s,c),_=lh(null,s,d,r,_,c);var S=uh();return s.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Qn(d)?(S=!0,Mu(s)):S=!1,s.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,th(s),_.updater=ku,s.stateNode=_,_._reactInternals=s,mh(s,d,r,c),s=xh(null,s,d,!0,S,c)):(s.tag=0,Wt&&S&&Xf(s),Vn(null,s,_,c),s=s.child),s;case 16:d=s.elementType;e:{switch(zu(r,s),r=s.pendingProps,_=d._init,d=_(d._payload),s.type=d,_=s.tag=oM(d),r=Fi(d,r),_){case 0:s=vh(null,s,d,r,c);break e;case 1:s=x_(null,s,d,r,c);break e;case 11:s=p_(null,s,d,r,c);break e;case 14:s=m_(null,s,d,Fi(d.type,r),c);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),vh(r,s,d,_,c);case 1:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),x_(r,s,d,_,c);case 3:e:{if(y_(s),r===null)throw Error(t(387));d=s.pendingProps,S=s.memoizedState,_=S.element,Ug(r,s),Lu(s,d,null,c);var w=s.memoizedState;if(d=w.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){_=zo(Error(t(423)),s),s=S_(r,s,d,c,_);break e}else if(d!==_){_=zo(Error(t(424)),s),s=S_(r,s,d,c,_);break e}else for(ci=$r(s.stateNode.containerInfo.firstChild),ui=s,Wt=!0,Ui=null,c=Dg(s,null,d,c),s.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Uo(),d===_){s=Mr(r,s,c);break e}Vn(r,s,d,c)}s=s.child}return s;case 5:return kg(s),r===null&&qf(s),d=s.type,_=s.pendingProps,S=r!==null?r.memoizedProps:null,w=_.children,Bf(d,_)?w=null:S!==null&&Bf(d,S)&&(s.flags|=32),v_(r,s),Vn(r,s,w,c),s.child;case 6:return r===null&&qf(s),null;case 13:return M_(r,s,c);case 4:return nh(s,s.stateNode.containerInfo),d=s.pendingProps,r===null?s.child=Fo(s,null,d,c):Vn(r,s,d,c),s.child;case 11:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),p_(r,s,d,_,c);case 7:return Vn(r,s,s.pendingProps,c),s.child;case 8:return Vn(r,s,s.pendingProps.children,c),s.child;case 12:return Vn(r,s,s.pendingProps.children,c),s.child;case 10:e:{if(d=s.type._context,_=s.pendingProps,S=s.memoizedProps,w=_.value,kt(Cu,d._currentValue),d._currentValue=w,S!==null)if(Ni(S.value,w)){if(S.children===_.children&&!Zn.current){s=Mr(r,s,c);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var O=S.dependencies;if(O!==null){w=S.child;for(var V=O.firstContext;V!==null;){if(V.context===d){if(S.tag===1){V=Sr(-1,c&-c),V.tag=2;var ie=S.updateQueue;if(ie!==null){ie=ie.shared;var ye=ie.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),ie.pending=V}}S.lanes|=c,V=S.alternate,V!==null&&(V.lanes|=c),Jf(S.return,c,s),O.lanes|=c;break}V=V.next}}else if(S.tag===10)w=S.type===s.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=c,O=w.alternate,O!==null&&(O.lanes|=c),Jf(w,c,s),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===s){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}Vn(r,s,_.children,c),s=s.child}return s;case 9:return _=s.type,d=s.pendingProps.children,ko(s,c),_=Mi(_),d=d(_),s.flags|=1,Vn(r,s,d,c),s.child;case 14:return d=s.type,_=Fi(d,s.pendingProps),_=Fi(d.type,_),m_(r,s,d,_,c);case 15:return g_(r,s,s.type,s.pendingProps,c);case 17:return d=s.type,_=s.pendingProps,_=s.elementType===d?_:Fi(d,_),zu(r,s),s.tag=1,Qn(d)?(r=!0,Mu(s)):r=!1,ko(s,c),a_(s,d,_),mh(s,d,_,c),xh(null,s,d,!0,r,c);case 19:return T_(r,s,c);case 22:return __(r,s,c)}throw Error(t(156,s.tag))};function q_(r,s){return L(r,s)}function sM(r,s,c,d){this.tag=r,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(r,s,c,d){return new sM(r,s,c,d)}function Bh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function oM(r){if(typeof r=="function")return Bh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===K)return 11;if(r===re)return 14}return 2}function as(r,s){var c=r.alternate;return c===null?(c=wi(r.tag,s,r.key,r.mode),c.elementType=r.elementType,c.type=r.type,c.stateNode=r.stateNode,c.alternate=r,r.alternate=c):(c.pendingProps=s,c.type=r.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=r.flags&14680064,c.childLanes=r.childLanes,c.lanes=r.lanes,c.child=r.child,c.memoizedProps=r.memoizedProps,c.memoizedState=r.memoizedState,c.updateQueue=r.updateQueue,s=r.dependencies,c.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},c.sibling=r.sibling,c.index=r.index,c.ref=r.ref,c}function Zu(r,s,c,d,_,S){var w=2;if(d=r,typeof r=="function")Bh(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case I:return Ys(c.children,_,S,s);case F:w=8,_|=8;break;case A:return r=wi(12,c,s,_|2),r.elementType=A,r.lanes=S,r;case q:return r=wi(13,c,s,_),r.elementType=q,r.lanes=S,r;case ce:return r=wi(19,c,s,_),r.elementType=ce,r.lanes=S,r;case oe:return Qu(c,_,S,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:w=10;break e;case B:w=9;break e;case K:w=11;break e;case re:w=14;break e;case Q:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=wi(w,c,s,_),s.elementType=r,s.type=d,s.lanes=S,s}function Ys(r,s,c,d){return r=wi(7,r,d,s),r.lanes=c,r}function Qu(r,s,c,d){return r=wi(22,r,d,s),r.elementType=oe,r.lanes=c,r.stateNode={isHidden:!1},r}function zh(r,s,c){return r=wi(6,r,null,s),r.lanes=c,r}function Vh(r,s,c){return s=wi(4,r.children!==null?r.children:[],r.key,s),s.lanes=c,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function aM(r,s,c,d,_){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=d,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function Hh(r,s,c,d,_,S,w,O,V){return r=new aM(r,s,c,O,V),s===1?(s=1,S===!0&&(s|=8)):s=0,S=wi(3,null,null,s),r.current=S,S.stateNode=r,S.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(S),r}function lM(r,s,c){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:d==null?null:""+d,children:r,containerInfo:s,implementation:c}}function K_(r){if(!r)return Qr;r=r._reactInternals;e:{if(qi(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var c=r.type;if(Qn(c))return Eg(r,c,s)}return s}function $_(r,s,c,d,_,S,w,O,V){return r=Hh(c,d,!0,r,_,S,w,O,V),r.context=K_(null),c=r.current,d=Hn(),_=ss(c),S=Sr(d,_),S.callback=s??null,ts(c,S,_),r.current.lanes=_,tn(r,_,d),ti(r,d),r}function Ju(r,s,c,d){var _=s.current,S=Hn(),w=ss(_);return c=K_(c),s.context===null?s.context=c:s.pendingContext=c,s=Sr(S,w),s.payload={element:r},d=d===void 0?null:d,d!==null&&(s.callback=d),r=ts(_,s,w),r!==null&&(Bi(r,_,w,S),Pu(r,_,w)),w}function ec(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Z_(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var c=r.retryLane;r.retryLane=c!==0&&c<s?c:s}}function Gh(r,s){Z_(r,s),(r=r.alternate)&&Z_(r,s)}var Q_=typeof reportError=="function"?reportError:function(r){console.error(r)};function Wh(r){this._internalRoot=r}tc.prototype.render=Wh.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Ju(r,s,null,null)},tc.prototype.unmount=Wh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Ws(function(){Ju(null,r,null,null)}),s[gr]=null}};function tc(r){this._internalRoot=r}tc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Um();r={blockedOn:null,target:r,priority:s};for(var c=0;c<Yr.length&&s!==0&&s<Yr[c].priority;c++);Yr.splice(c,0,r),c===0&&km(r)}};function Xh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function nc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function J_(){}function uM(r,s,c,d,_){if(_){if(typeof d=="function"){var S=d;d=function(){var ie=ec(w);S.call(ie)}}var w=$_(s,d,r,0,null,!1,!1,"",J_);return r._reactRootContainer=w,r[gr]=w.current,el(r.nodeType===8?r.parentNode:r),Ws(),w}for(;_=r.lastChild;)r.removeChild(_);if(typeof d=="function"){var O=d;d=function(){var ie=ec(V);O.call(ie)}}var V=Hh(r,0,!1,null,null,!1,!1,"",J_);return r._reactRootContainer=V,r[gr]=V.current,el(r.nodeType===8?r.parentNode:r),Ws(function(){Ju(s,V,c,d)}),V}function ic(r,s,c,d,_){var S=c._reactRootContainer;if(S){var w=S;if(typeof _=="function"){var O=_;_=function(){var V=ec(w);O.call(V)}}Ju(s,w,r,_)}else w=uM(c,s,r,_,d);return ec(w)}Dm=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var c=Sn(s.pendingLanes);c!==0&&(Us(s,c|1),ti(s,G()),!(wt&6)&&(Go=G()+500,Jr()))}break;case 13:Ws(function(){var d=yr(r,1);if(d!==null){var _=Hn();Bi(d,r,1,_)}}),Gh(r,1)}},gf=function(r){if(r.tag===13){var s=yr(r,134217728);if(s!==null){var c=Hn();Bi(s,r,134217728,c)}Gh(r,134217728)}},Nm=function(r){if(r.tag===13){var s=ss(r),c=yr(r,s);if(c!==null){var d=Hn();Bi(c,r,s,d)}Gh(r,s)}},Um=function(){return gt},Fm=function(r,s){var c=gt;try{return gt=r,s()}finally{gt=c}},be=function(r,s,c){switch(s){case"input":if(ht(r,c),s=c.name,c.type==="radio"&&s!=null){for(c=r;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<c.length;s++){var d=c[s];if(d!==r&&d.form===r.form){var _=yu(d);if(!_)throw Error(t(90));ut(d),ht(d,_)}}}break;case"textarea":ge(r,c);break;case"select":s=c.value,s!=null&&U(r,!!c.multiple,s,!1)}},zt=Fh,ln=Ws;var cM={usingClientEntryPoint:!1,Events:[il,Po,yu,Le,rt,Fh]},_l={findFiberByHostInstance:Fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fM={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=iu(r),r===null?null:r.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{je=rc.inject(fM),st=rc}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cM,ni.createPortal=function(r,s){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(s))throw Error(t(200));return lM(r,s,null,c)},ni.createRoot=function(r,s){if(!Xh(r))throw Error(t(299));var c=!1,d="",_=Q_;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(_=s.onRecoverableError)),s=Hh(r,1,!1,null,null,c,!1,d,_),r[gr]=s.current,el(r.nodeType===8?r.parentNode:r),new Wh(s)},ni.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=iu(s),r=r===null?null:r.stateNode,r},ni.flushSync=function(r){return Ws(r)},ni.hydrate=function(r,s,c){if(!nc(s))throw Error(t(200));return ic(null,r,s,!0,c)},ni.hydrateRoot=function(r,s,c){if(!Xh(r))throw Error(t(405));var d=c!=null&&c.hydratedSources||null,_=!1,S="",w=Q_;if(c!=null&&(c.unstable_strictMode===!0&&(_=!0),c.identifierPrefix!==void 0&&(S=c.identifierPrefix),c.onRecoverableError!==void 0&&(w=c.onRecoverableError)),s=$_(s,null,r,1,c??null,_,!1,S,w),r[gr]=s.current,el(r),d)for(r=0;r<d.length;r++)c=d[r],_=c._getVersion,_=_(c._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[c,_]:s.mutableSourceEagerHydrationData.push(c,_);return new tc(s)},ni.render=function(r,s,c){if(!nc(s))throw Error(t(200));return ic(null,r,s,!1,c)},ni.unmountComponentAtNode=function(r){if(!nc(r))throw Error(t(40));return r._reactRootContainer?(Ws(function(){ic(null,null,r,!1,function(){r._reactRootContainer=null,r[gr]=null})}),!0):!1},ni.unstable_batchedUpdates=Fh,ni.unstable_renderSubtreeIntoContainer=function(r,s,c,d){if(!nc(c))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return ic(r,s,c,!1,d)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var a0;function xM(){if(a0)return qh.exports;a0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),qh.exports=vM(),qh.exports}var l0;function yM(){if(l0)return sc;l0=1;var a=xM();return sc.createRoot=a.createRoot,sc.hydrateRoot=a.hydrateRoot,sc}var SM=yM();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $p="171",MM=0,u0=1,EM=2,Yv=1,qv=2,Pr=3,or=0,jn=1,tr=2,Ts=0,da=1,c0=2,f0=3,h0=4,TM=5,so=100,wM=101,AM=102,RM=103,CM=104,bM=200,PM=201,LM=202,IM=203,Hd=204,Gd=205,DM=206,NM=207,UM=208,FM=209,OM=210,kM=211,BM=212,zM=213,VM=214,Wd=0,Xd=1,jd=2,ya=3,Yd=4,qd=5,Kd=6,$d=7,Kv=0,HM=1,GM=2,ws=0,WM=1,XM=2,jM=3,YM=4,qM=5,KM=6,$M=7,d0="attached",ZM="detached",$v=300,Sa=301,Ma=302,Zd=303,Qd=304,of=306,mo=1e3,xs=1001,Xc=1002,Yn=1003,Zv=1004,bl=1005,gi=1006,Nc=1007,Nr=1008,kr=1009,Qv=1010,Jv=1011,Bl=1012,Zp=1013,go=1014,Xi=1015,$l=1016,Qp=1017,Jp=1018,Ea=1020,ex=35902,tx=1021,nx=1022,bi=1023,ix=1024,rx=1025,pa=1026,Ta=1027,em=1028,tm=1029,sx=1030,nm=1031,im=1033,Uc=33776,Fc=33777,Oc=33778,kc=33779,Jd=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,op=37808,ap=37809,lp=37810,up=37811,cp=37812,fp=37813,hp=37814,dp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,xp=37821,Bc=36492,yp=36494,Sp=36495,ox=36283,Mp=36284,Ep=36285,Tp=36286,QM=2200,JM=2201,eE=2202,zl=2300,Vl=2301,Zh=2302,la=2400,ua=2401,jc=2402,rm=2500,tE=2501,nE=0,ax=1,wp=2,iE=3200,rE=3201,lx=0,sE=1,vs="",Tn="srgb",Kn="srgb-linear",Yc="linear",Ut="srgb",Xo=7680,p0=519,oE=512,aE=513,lE=514,ux=515,uE=516,cE=517,fE=518,hE=519,Ap=35044,m0="300 es",Ur=2e3,qc=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,l=i.length;o<l;o++)i[o].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let g0=1234567;const Dl=Math.PI/180,wa=180/Math.PI;function ji(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function _t(a,e,t){return Math.max(e,Math.min(t,a))}function sm(a,e){return(a%e+e)%e}function dE(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function pE(a,e,t){return a!==e?(t-a)/(e-a):0}function Nl(a,e,t){return(1-t)*a+t*e}function mE(a,e,t,n){return Nl(a,e,1-Math.exp(-t*n))}function gE(a,e=1){return e-Math.abs(sm(a,e*2)-e)}function _E(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function vE(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function xE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function yE(a,e){return a+Math.random()*(e-a)}function SE(a){return a*(.5-Math.random())}function ME(a){a!==void 0&&(g0=a);let e=g0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EE(a){return a*Dl}function TE(a){return a*wa}function wE(a){return(a&a-1)===0&&a!==0}function AE(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function RE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function CE(a,e,t,n,i){const o=Math.cos,l=Math.sin,u=o(t/2),f=l(t/2),h=o((e+n)/2),p=l((e+n)/2),m=o((e-n)/2),g=l((e-n)/2),v=o((n-e)/2),E=l((n-e)/2);switch(i){case"XYX":a.set(u*p,f*m,f*g,u*h);break;case"YZY":a.set(f*g,u*p,f*m,u*h);break;case"ZXZ":a.set(f*m,f*g,u*p,u*h);break;case"XZX":a.set(u*p,f*E,f*v,u*h);break;case"YXY":a.set(f*v,u*p,f*E,u*h);break;case"ZYZ":a.set(f*E,f*v,u*p,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Dt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const bE={DEG2RAD:Dl,RAD2DEG:wa,generateUUID:ji,clamp:_t,euclideanModulo:sm,mapLinear:dE,inverseLerp:pE,lerp:Nl,damp:mE,pingpong:gE,smoothstep:_E,smootherstep:vE,randInt:xE,randFloat:yE,randFloatSpread:SE,seededRandom:ME,degToRad:EE,radToDeg:TE,isPowerOfTwo:wE,ceilPowerOfTwo:AE,floorPowerOfTwo:RE,setQuaternionFromProperEuler:CE,normalize:Dt,denormalize:Gi};class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*i+e.x,this.y=o*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,i,o,l,u,f,h){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,l,u,f,h)}set(e,t,n,i,o,l,u,f,h){const p=this.elements;return p[0]=e,p[1]=i,p[2]=u,p[3]=t,p[4]=o,p[5]=f,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,l=n[0],u=n[3],f=n[6],h=n[1],p=n[4],m=n[7],g=n[2],v=n[5],E=n[8],M=i[0],y=i[3],x=i[6],R=i[1],C=i[4],T=i[7],D=i[2],N=i[5],I=i[8];return o[0]=l*M+u*R+f*D,o[3]=l*y+u*C+f*N,o[6]=l*x+u*T+f*I,o[1]=h*M+p*R+m*D,o[4]=h*y+p*C+m*N,o[7]=h*x+p*T+m*I,o[2]=g*M+v*R+E*D,o[5]=g*y+v*C+E*N,o[8]=g*x+v*T+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8];return t*l*p-t*u*h-n*o*p+n*u*f+i*o*h-i*l*f}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=p*l-u*h,g=u*f-p*o,v=h*o-l*f,E=t*m+n*g+i*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(i*h-p*n)*M,e[2]=(u*n-i*l)*M,e[3]=g*M,e[4]=(p*t-i*f)*M,e[5]=(i*o-u*t)*M,e[6]=v*M,e[7]=(n*f-h*t)*M,e[8]=(l*t-n*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,l,u){const f=Math.cos(o),h=Math.sin(o);return this.set(n*f,n*h,-n*(f*l+h*u)+l+e,-i*h,i*f,-i*(-h*l+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Qh.makeScale(e,t)),this}rotate(e){return this.premultiply(Qh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qh=new at;function cx(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Hl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function PE(){const a=Hl("canvas");return a.style.display="block",a}const _0={};function aa(a){a in _0||(_0[a]=!0,console.warn(a))}function LE(a,e,t){return new Promise(function(n,i){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function IE(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DE(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const v0=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NE(){const a={enabled:!0,workingColorSpace:Kn,spaces:{},convert:function(i,o,l){return this.enabled===!1||o===l||!o||!l||(this.spaces[o].transfer===Ut&&(i.r=Fr(i.r),i.g=Fr(i.g),i.b=Fr(i.b)),this.spaces[o].primaries!==this.spaces[l].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ut&&(i.r=ma(i.r),i.g=ma(i.g),i.b=ma(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vs?Yc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,l){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[Kn]:{primaries:e,whitePoint:n,transfer:Yc,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:v0,fromXYZ:x0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),a}const Mt=NE();function Fr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ma(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let jo;class UE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jo===void 0&&(jo=Hl("canvas")),jo.width=e.width,jo.height=e.height;const n=jo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let l=0;l<o.length;l++)o[l]=Fr(o[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fr(t[n]/255)*255):t[n]=Fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class fx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let l=0,u=i.length;l<u;l++)i[l].isDataTexture?o.push(Jh(i[l].image)):o.push(Jh(i[l]))}else o=Jh(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function Jh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?UE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OE=0;class xn extends xo{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=xs,i=xs,o=gi,l=Nr,u=bi,f=kr,h=xn.DEFAULT_ANISOTROPY,p=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=ji(),this.name="",this.source=new fx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=$v;xn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const f=e.elements,h=f[0],p=f[4],m=f[8],g=f[1],v=f[5],E=f[9],M=f[2],y=f[6],x=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+M)<.1&&Math.abs(E+y)<.1&&Math.abs(h+v+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,T=(v+1)/2,D=(x+1)/2,N=(p+g)/4,I=(m+M)/4,F=(E+y)/4;return C>T&&C>D?C<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(C),i=N/n,o=I/n):T>D?T<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(T),n=N/i,o=F/i):D<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(D),n=I/o,i=F/o),this.set(n,i,o,t),this}let R=Math.sqrt((y-E)*(y-E)+(m-M)*(m-M)+(g-p)*(g-p));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(m-M)/R,this.z=(g-p)/R,this.w=Math.acos((h+v+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends xo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends kE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hx extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BE extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,l,u){let f=n[i+0],h=n[i+1],p=n[i+2],m=n[i+3];const g=o[l+0],v=o[l+1],E=o[l+2],M=o[l+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(m!==M||f!==g||h!==v||p!==E){let y=1-u;const x=f*g+h*v+p*E+m*M,R=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const D=Math.sqrt(C),N=Math.atan2(D,x*R);y=Math.sin(y*N)/D,u=Math.sin(u*N)/D}const T=u*R;if(f=f*y+g*T,h=h*y+v*T,p=p*y+E*T,m=m*y+M*T,y===1-u){const D=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=D,h*=D,p*=D,m*=D}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,o,l){const u=n[i],f=n[i+1],h=n[i+2],p=n[i+3],m=o[l],g=o[l+1],v=o[l+2],E=o[l+3];return e[t]=u*E+p*m+f*v-h*g,e[t+1]=f*E+p*g+h*m-u*v,e[t+2]=h*E+p*v+u*g-f*m,e[t+3]=p*E-u*m-f*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,l=e._order,u=Math.cos,f=Math.sin,h=u(n/2),p=u(i/2),m=u(o/2),g=f(n/2),v=f(i/2),E=f(o/2);switch(l){case"XYZ":this._x=g*p*m+h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m-g*v*E;break;case"YXZ":this._x=g*p*m+h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m+g*v*E;break;case"ZXY":this._x=g*p*m-h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m-g*v*E;break;case"ZYX":this._x=g*p*m-h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m+g*v*E;break;case"YZX":this._x=g*p*m+h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m-g*v*E;break;case"XZY":this._x=g*p*m-h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m+g*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],l=t[1],u=t[5],f=t[9],h=t[2],p=t[6],m=t[10],g=n+u+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(o-h)*v,this._z=(l-i)*v}else if(n>u&&n>m){const v=2*Math.sqrt(1+n-u-m);this._w=(p-f)/v,this._x=.25*v,this._y=(i+l)/v,this._z=(o+h)/v}else if(u>m){const v=2*Math.sqrt(1+u-n-m);this._w=(o-h)/v,this._x=(i+l)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+m-n-u);this._w=(l-i)/v,this._x=(o+h)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,l=e._w,u=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+l*u+i*h-o*f,this._y=i*p+l*f+o*u-n*h,this._z=o*p+l*h+n*f-i*u,this._w=l*p-n*u-i*f-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,l=this._w;let u=l*e._w+n*e._x+i*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=i,this._z=o,this;const f=1-u*u;if(f<=Number.EPSILON){const v=1-t;return this._w=v*l+t*this._w,this._x=v*n+t*this._x,this._y=v*i+t*this._y,this._z=v*o+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=l*m+this._w*g,this._x=n*m+this._x*g,this._y=i*m+this._y*g,this._z=o*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,l=e.y,u=e.z,f=e.w,h=2*(l*i-u*n),p=2*(u*t-o*i),m=2*(o*n-l*t);return this.x=t+f*h+l*m-u*p,this.y=n+f*p+u*h-o*m,this.z=i+f*m+o*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_t(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,l=t.x,u=t.y,f=t.z;return this.x=i*f-o*u,this.y=o*l-n*f,this.z=n*u-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new j,y0=new Yi;class Vr{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,zi):zi.fromBufferAttribute(o,l),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oc.copy(n.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const i=e.children;for(let o=0,l=i.length;o<l;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),ac.subVectors(this.max,xl),Yo.subVectors(e.a,xl),qo.subVectors(e.b,xl),Ko.subVectors(e.c,xl),us.subVectors(qo,Yo),cs.subVectors(Ko,qo),qs.subVectors(Yo,Ko);let t=[0,-us.z,us.y,0,-cs.z,cs.y,0,-qs.z,qs.y,us.z,0,-us.x,cs.z,0,-cs.x,qs.z,0,-qs.x,-us.y,us.x,0,-cs.y,cs.x,0,-qs.y,qs.x,0];return!td(t,Yo,qo,Ko,ac)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Yo,qo,Ko,ac))?!1:(lc.crossVectors(us,cs),t=[lc.x,lc.y,lc.z],td(t,Yo,qo,Ko,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tr=[new j,new j,new j,new j,new j,new j,new j,new j],zi=new j,oc=new Vr,Yo=new j,qo=new j,Ko=new j,us=new j,cs=new j,qs=new j,xl=new j,ac=new j,lc=new j,Ks=new j;function td(a,e,t,n,i){for(let o=0,l=a.length-3;o<=l;o+=3){Ks.fromArray(a,o);const u=i.x*Math.abs(Ks.x)+i.y*Math.abs(Ks.y)+i.z*Math.abs(Ks.z),f=e.dot(Ks),h=t.dot(Ks),p=n.dot(Ks);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>u)return!1}return!0}const zE=new Vr,yl=new j,nd=new j;class cr{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zE.setFromPoints(e).getCenter(n);let i=0;for(let o=0,l=e.length;o<l;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const t=yl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(nd)),this.expandByPoint(yl.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wr=new j,id=new j,uc=new j,fs=new j,rd=new j,cc=new j,sd=new j;class af{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){id.copy(e).add(t).multiplyScalar(.5),uc.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(id);const o=e.distanceTo(t)*.5,l=-this.direction.dot(uc),u=fs.dot(this.direction),f=-fs.dot(uc),h=fs.lengthSq(),p=Math.abs(1-l*l);let m,g,v,E;if(p>0)if(m=l*f-u,g=l*u-f,E=o*p,m>=0)if(g>=-E)if(g<=E){const M=1/p;m*=M,g*=M,v=m*(m+l*g+2*u)+g*(l*m+g+2*f)+h}else g=o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g=-o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;else g<=-E?(m=Math.max(0,-(-l*o+u)),g=m>0?-o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h):g<=E?(m=0,g=Math.min(Math.max(-o,-f),o),v=g*(g+2*f)+h):(m=Math.max(0,-(l*o+u)),g=m>0?o:Math.min(Math.max(-o,-f),o),v=-m*m+g*(g+2*f)+h);else g=l>0?-o:o,m=Math.max(0,-(l*g+u)),v=-m*m+g*(g+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(id).addScaledVector(uc,g),v}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const n=wr.dot(this.direction),i=wr.dot(wr)-n*n,o=e.radius*e.radius;if(i>o)return null;const l=Math.sqrt(o-i),u=n-l,f=n+l;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,l,u,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,i=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,i=(e.min.x-g.x)*h),p>=0?(o=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(o=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),n>l||o>i||((o>n||isNaN(n))&&(n=o),(l<i||isNaN(i))&&(i=l),m>=0?(u=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||u>i)||((u>n||n!==n)&&(n=u),(f<i||i!==i)&&(i=f),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,i,o){rd.subVectors(t,e),cc.subVectors(n,e),sd.crossVectors(rd,cc);let l=this.direction.dot(sd),u;if(l>0){if(i)return null;u=1}else if(l<0)u=-1,l=-l;else return null;fs.subVectors(this.origin,e);const f=u*this.direction.dot(cc.crossVectors(fs,cc));if(f<0)return null;const h=u*this.direction.dot(rd.cross(fs));if(h<0||f+h>l)return null;const p=-u*fs.dot(sd);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,o,l,u,f,h,p,m,g,v,E,M,y){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,l,u,f,h,p,m,g,v,E,M,y)}set(e,t,n,i,o,l,u,f,h,p,m,g,v,E,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=o,x[5]=l,x[9]=u,x[13]=f,x[2]=h,x[6]=p,x[10]=m,x[14]=g,x[3]=v,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$o.setFromMatrixColumn(e,0).length(),o=1/$o.setFromMatrixColumn(e,1).length(),l=1/$o.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),f=Math.cos(i),h=Math.sin(i),p=Math.cos(o),m=Math.sin(o);if(e.order==="XYZ"){const g=l*p,v=l*m,E=u*p,M=u*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=v+E*h,t[5]=g-M*h,t[9]=-u*f,t[2]=M-g*h,t[6]=E+v*h,t[10]=l*f}else if(e.order==="YXZ"){const g=f*p,v=f*m,E=h*p,M=h*m;t[0]=g+M*u,t[4]=E*u-v,t[8]=l*h,t[1]=l*m,t[5]=l*p,t[9]=-u,t[2]=v*u-E,t[6]=M+g*u,t[10]=l*f}else if(e.order==="ZXY"){const g=f*p,v=f*m,E=h*p,M=h*m;t[0]=g-M*u,t[4]=-l*m,t[8]=E+v*u,t[1]=v+E*u,t[5]=l*p,t[9]=M-g*u,t[2]=-l*h,t[6]=u,t[10]=l*f}else if(e.order==="ZYX"){const g=l*p,v=l*m,E=u*p,M=u*m;t[0]=f*p,t[4]=E*h-v,t[8]=g*h+M,t[1]=f*m,t[5]=M*h+g,t[9]=v*h-E,t[2]=-h,t[6]=u*f,t[10]=l*f}else if(e.order==="YZX"){const g=l*f,v=l*h,E=u*f,M=u*h;t[0]=f*p,t[4]=M-g*m,t[8]=E*m+v,t[1]=m,t[5]=l*p,t[9]=-u*p,t[2]=-h*p,t[6]=v*m+E,t[10]=g-M*m}else if(e.order==="XZY"){const g=l*f,v=l*h,E=u*f,M=u*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=g*m+M,t[5]=l*p,t[9]=v*m-E,t[2]=E*m-v,t[6]=u*p,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VE,e,HE)}lookAt(e,t,n){const i=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),hs.crossVectors(n,hi),hs.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),hs.crossVectors(n,hi)),hs.normalize(),fc.crossVectors(hi,hs),i[0]=hs.x,i[4]=fc.x,i[8]=hi.x,i[1]=hs.y,i[5]=fc.y,i[9]=hi.y,i[2]=hs.z,i[6]=fc.z,i[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,l=n[0],u=n[4],f=n[8],h=n[12],p=n[1],m=n[5],g=n[9],v=n[13],E=n[2],M=n[6],y=n[10],x=n[14],R=n[3],C=n[7],T=n[11],D=n[15],N=i[0],I=i[4],F=i[8],A=i[12],b=i[1],B=i[5],K=i[9],q=i[13],ce=i[2],re=i[6],Q=i[10],oe=i[14],z=i[3],ue=i[7],le=i[11],k=i[15];return o[0]=l*N+u*b+f*ce+h*z,o[4]=l*I+u*B+f*re+h*ue,o[8]=l*F+u*K+f*Q+h*le,o[12]=l*A+u*q+f*oe+h*k,o[1]=p*N+m*b+g*ce+v*z,o[5]=p*I+m*B+g*re+v*ue,o[9]=p*F+m*K+g*Q+v*le,o[13]=p*A+m*q+g*oe+v*k,o[2]=E*N+M*b+y*ce+x*z,o[6]=E*I+M*B+y*re+x*ue,o[10]=E*F+M*K+y*Q+x*le,o[14]=E*A+M*q+y*oe+x*k,o[3]=R*N+C*b+T*ce+D*z,o[7]=R*I+C*B+T*re+D*ue,o[11]=R*F+C*K+T*Q+D*le,o[15]=R*A+C*q+T*oe+D*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],l=e[1],u=e[5],f=e[9],h=e[13],p=e[2],m=e[6],g=e[10],v=e[14],E=e[3],M=e[7],y=e[11],x=e[15];return E*(+o*f*m-i*h*m-o*u*g+n*h*g+i*u*v-n*f*v)+M*(+t*f*v-t*h*g+o*l*g-i*l*v+i*h*p-o*f*p)+y*(+t*h*m-t*u*v-o*l*m+n*l*v+o*u*p-n*h*p)+x*(-i*u*p-t*f*m+t*u*g+i*l*m-n*l*g+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],l=e[4],u=e[5],f=e[6],h=e[7],p=e[8],m=e[9],g=e[10],v=e[11],E=e[12],M=e[13],y=e[14],x=e[15],R=m*y*h-M*g*h+M*f*v-u*y*v-m*f*x+u*g*x,C=E*g*h-p*y*h-E*f*v+l*y*v+p*f*x-l*g*x,T=p*M*h-E*m*h+E*u*v-l*M*v-p*u*x+l*m*x,D=E*m*f-p*M*f-E*u*g+l*M*g+p*u*y-l*m*y,N=t*R+n*C+i*T+o*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/N;return e[0]=R*I,e[1]=(M*g*o-m*y*o-M*i*v+n*y*v+m*i*x-n*g*x)*I,e[2]=(u*y*o-M*f*o+M*i*h-n*y*h-u*i*x+n*f*x)*I,e[3]=(m*f*o-u*g*o-m*i*h+n*g*h+u*i*v-n*f*v)*I,e[4]=C*I,e[5]=(p*y*o-E*g*o+E*i*v-t*y*v-p*i*x+t*g*x)*I,e[6]=(E*f*o-l*y*o-E*i*h+t*y*h+l*i*x-t*f*x)*I,e[7]=(l*g*o-p*f*o+p*i*h-t*g*h-l*i*v+t*f*v)*I,e[8]=T*I,e[9]=(E*m*o-p*M*o-E*n*v+t*M*v+p*n*x-t*m*x)*I,e[10]=(l*M*o-E*u*o+E*n*h-t*M*h-l*n*x+t*u*x)*I,e[11]=(p*u*o-l*m*o-p*n*h+t*m*h+l*n*v-t*u*v)*I,e[12]=D*I,e[13]=(p*M*i-E*m*i+E*n*g-t*M*g-p*n*y+t*m*y)*I,e[14]=(E*u*i-l*M*i-E*n*f+t*M*f+l*n*y-t*u*y)*I,e[15]=(l*m*i-p*u*i+p*n*f-t*m*f-l*n*g+t*u*g)*I,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,l=e.x,u=e.y,f=e.z,h=o*l,p=o*u;return this.set(h*l+n,h*u-i*f,h*f+i*u,0,h*u+i*f,p*u+n,p*f-i*l,0,h*f-i*u,p*f+i*l,o*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,l){return this.set(1,n,o,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,l=t._y,u=t._z,f=t._w,h=o+o,p=l+l,m=u+u,g=o*h,v=o*p,E=o*m,M=l*p,y=l*m,x=u*m,R=f*h,C=f*p,T=f*m,D=n.x,N=n.y,I=n.z;return i[0]=(1-(M+x))*D,i[1]=(v+T)*D,i[2]=(E-C)*D,i[3]=0,i[4]=(v-T)*N,i[5]=(1-(g+x))*N,i[6]=(y+R)*N,i[7]=0,i[8]=(E+C)*I,i[9]=(y-R)*I,i[10]=(1-(g+M))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=$o.set(i[0],i[1],i[2]).length();const l=$o.set(i[4],i[5],i[6]).length(),u=$o.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Vi.copy(this);const h=1/o,p=1/l,m=1/u;return Vi.elements[0]*=h,Vi.elements[1]*=h,Vi.elements[2]*=h,Vi.elements[4]*=p,Vi.elements[5]*=p,Vi.elements[6]*=p,Vi.elements[8]*=m,Vi.elements[9]*=m,Vi.elements[10]*=m,t.setFromRotationMatrix(Vi),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,i,o,l,u=Ur){const f=this.elements,h=2*o/(t-e),p=2*o/(n-i),m=(t+e)/(t-e),g=(n+i)/(n-i);let v,E;if(u===Ur)v=-(l+o)/(l-o),E=-2*l*o/(l-o);else if(u===qc)v=-l/(l-o),E=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=p,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,i,o,l,u=Ur){const f=this.elements,h=1/(t-e),p=1/(n-i),m=1/(l-o),g=(t+e)*h,v=(n+i)*p;let E,M;if(u===Ur)E=(l+o)*m,M=-2*m;else if(u===qc)E=o*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-v,f[2]=0,f[6]=0,f[10]=M,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $o=new j,Vi=new ot,VE=new j(0,0,0),HE=new j(1,1,1),hs=new j,fc=new j,hi=new j,S0=new ot,M0=new Yi;class ar{constructor(e=0,t=0,n=0,i=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],l=i[4],u=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,o),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,o));break;case"ZYX":this._y=Math.asin(-_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,o)):(this._x=0,this._y=Math.atan2(u,v));break;case"XZY":this._z=Math.asin(-_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return M0.setFromEuler(this),this.setFromQuaternion(M0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GE=0;const E0=new j,Zo=new Yi,Ar=new ot,hc=new j,Sl=new j,WE=new j,XE=new Yi,T0=new j(1,0,0),w0=new j(0,1,0),A0=new j(0,0,1),R0={type:"added"},jE={type:"removed"},Qo={type:"childadded",child:null},od={type:"childremoved",child:null};class Zt extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new j,t=new ar,n=new Yi,i=new j(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new at}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(w0,e)}rotateZ(e){return this.rotateOnAxis(A0,e)}translateOnAxis(e,t){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(w0,e)}translateZ(e){return this.translateOnAxis(A0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hc.copy(e):hc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Sl,hc,this.up):Ar.lookAt(hc,Sl,this.up),this.quaternion.setFromRotationMatrix(Ar),i&&(Ar.extractRotation(i.matrixWorld),Zo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jE),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,l=i.length;o<l;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,WE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,l=i.length;o<l;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];o(e.shapes,m)}else o(e.shapes,f)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(o(e.materials,this.material[f]));i.material=u}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let u=0;u<this.children.length;u++)i.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];i.animations.push(o(e.animations,f))}}if(t){const u=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),v=l(e.animations),E=l(e.nodes);u.length>0&&(n.geometries=u),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=i,n;function l(u){const f=[];for(const h in u){const p=u[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Zt.DEFAULT_UP=new j(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new j,Rr=new j,ad=new j,Cr=new j,Jo=new j,ea=new j,C0=new j,ld=new j,ud=new j,cd=new j,fd=new At,hd=new At,dd=new At;class Wi{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hi.subVectors(e,t),i.cross(Hi);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){Hi.subVectors(i,t),Rr.subVectors(n,t),ad.subVectors(e,t);const l=Hi.dot(Hi),u=Hi.dot(Rr),f=Hi.dot(ad),h=Rr.dot(Rr),p=Rr.dot(ad),m=l*h-u*u;if(m===0)return o.set(0,0,0),null;const g=1/m,v=(h*f-u*p)*g,E=(l*p-u*f)*g;return o.set(1-v-E,E,v)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,n,i,o,l,u,f){return this.getBarycoord(e,t,n,i,Cr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(o,Cr.x),f.addScaledVector(l,Cr.y),f.addScaledVector(u,Cr.z),f)}static getInterpolatedAttribute(e,t,n,i,o,l){return fd.setScalar(0),hd.setScalar(0),dd.setScalar(0),fd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,n),dd.fromBufferAttribute(e,i),l.setScalar(0),l.addScaledVector(fd,o.x),l.addScaledVector(hd,o.y),l.addScaledVector(dd,o.z),l}static isFrontFacing(e,t,n,i){return Hi.subVectors(n,t),Rr.subVectors(e,t),Hi.cross(Rr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Rr.subVectors(this.a,this.b),Hi.cross(Rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return Wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let l,u;Jo.subVectors(i,n),ea.subVectors(o,n),ld.subVectors(e,n);const f=Jo.dot(ld),h=ea.dot(ld);if(f<=0&&h<=0)return t.copy(n);ud.subVectors(e,i);const p=Jo.dot(ud),m=ea.dot(ud);if(p>=0&&m<=p)return t.copy(i);const g=f*m-p*h;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(Jo,l);cd.subVectors(e,o);const v=Jo.dot(cd),E=ea.dot(cd);if(E>=0&&v<=E)return t.copy(o);const M=v*h-f*E;if(M<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(n).addScaledVector(ea,u);const y=p*E-v*m;if(y<=0&&m-p>=0&&v-E>=0)return C0.subVectors(o,i),u=(m-p)/(m-p+(v-E)),t.copy(i).addScaledVector(C0,u);const x=1/(y+M+g);return l=M*x,u=g*x,t.copy(n).addScaledVector(Jo,l).addScaledVector(ea,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},dc={h:0,s:0,l:0};function pd(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=sm(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=pd(l,o,e+1/3),this.g=pd(l,o,e),this.b=pd(l,o,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=i[1],u=i[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=px[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Mt.fromWorkingColorSpace(In.copy(this),e),Math.round(_t(In.r*255,0,255))*65536+Math.round(_t(In.g*255,0,255))*256+Math.round(_t(In.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(In.copy(this),t);const n=In.r,i=In.g,o=In.b,l=Math.max(n,i,o),u=Math.min(n,i,o);let f,h;const p=(u+l)/2;if(u===l)f=0,h=0;else{const m=l-u;switch(h=p<=.5?m/(l+u):m/(2-l-u),l){case n:f=(i-o)/m+(i<o?6:0);break;case i:f=(o-n)/m+2;break;case o:f=(n-i)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Tn){Mt.fromWorkingColorSpace(In.copy(this),e);const t=In.r,n=In.g,i=In.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(dc);const n=Nl(ds.h,dc.h,t),i=Nl(ds.s,dc.s,t),o=Nl(ds.l,dc.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new nt;nt.NAMES=px;let YE=0;class rr extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=da,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(n.blending=this.blending),this.side!==or&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hd&&(n.blendSrc=this.blendSrc),this.blendDst!==Gd&&(n.blendDst=this.blendDst),this.blendEquation!==so&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}if(t){const o=i(e.textures),l=i(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ao extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new j,pc=new Et;class qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ap,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),o=Dt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),e}}class mx extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gx extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Or extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qE=0;const Ai=new ot,md=new Zt,ta=new j,di=new Vr,Ml=new Vr,gn=new j;class fr extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?gx:mx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new at().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,n){return Ai.makeTranslation(e,t,n),this.applyMatrix4(Ai),this}scale(e,t,n){return Ai.makeScale(e,t,n),this.applyMatrix4(Ai),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,o=e.length;i<o;i++){const l=e[i];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Or(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];di.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];Ml.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(di.min,Ml.min),di.expandByPoint(gn),gn.addVectors(di.max,Ml.max),di.expandByPoint(gn)):(di.expandByPoint(Ml.min),di.expandByPoint(Ml.max))}di.getCenter(n);let i=0;for(let o=0,l=e.count;o<l;o++)gn.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],f=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)gn.fromBufferAttribute(u,h),f&&(ta.fromBufferAttribute(e,h),gn.add(ta)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],f=[];for(let F=0;F<n.count;F++)u[F]=new j,f[F]=new j;const h=new j,p=new j,m=new j,g=new Et,v=new Et,E=new Et,M=new j,y=new j;function x(F,A,b){h.fromBufferAttribute(n,F),p.fromBufferAttribute(n,A),m.fromBufferAttribute(n,b),g.fromBufferAttribute(o,F),v.fromBufferAttribute(o,A),E.fromBufferAttribute(o,b),p.sub(h),m.sub(h),v.sub(g),E.sub(g);const B=1/(v.x*E.y-E.x*v.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(m,-v.y).multiplyScalar(B),y.copy(m).multiplyScalar(v.x).addScaledVector(p,-E.x).multiplyScalar(B),u[F].add(M),u[A].add(M),u[b].add(M),f[F].add(y),f[A].add(y),f[b].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,A=R.length;F<A;++F){const b=R[F],B=b.start,K=b.count;for(let q=B,ce=B+K;q<ce;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new j,T=new j,D=new j,N=new j;function I(F){D.fromBufferAttribute(i,F),N.copy(D);const A=u[F];C.copy(A),C.sub(D.multiplyScalar(D.dot(A))).normalize(),T.crossVectors(N,A);const B=T.dot(f[F])<0?-1:1;l.setXYZW(F,C.x,C.y,C.z,B)}for(let F=0,A=R.length;F<A;++F){const b=R[F],B=b.start,K=b.count;for(let q=B,ce=B+K;q<ce;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const i=new j,o=new j,l=new j,u=new j,f=new j,h=new j,p=new j,m=new j;if(e)for(let g=0,v=e.count;g<v;g+=3){const E=e.getX(g+0),M=e.getX(g+1),y=e.getX(g+2);i.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,y),p.subVectors(l,o),m.subVectors(i,o),p.cross(m),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),u.add(p),f.add(p),h.add(p),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)i.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,o),m.subVectors(i,o),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(u,f){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(f.length*p);let v=0,E=0;for(let M=0,y=f.length;M<y;M++){u.isInterleavedBufferAttribute?v=f[M]*u.data.stride+u.offset:v=f[M]*p;for(let x=0;x<p;x++)g[E++]=h[v++]}return new qn(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fr,n=this.index.array,i=this.attributes;for(const u in i){const f=i[u],h=e(f,n);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const f=[],h=o[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=e(g,n);f.push(v)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,f=l.length;u<f;u++){const h=l[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const i={};let o=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,g=h.length;m<g;m++){const v=h[m];p.push(v.toJSON(e.data))}p.length>0&&(i[f]=p,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const p=i[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],m=o[h];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const b0=new ot,$s=new af,mc=new cr,P0=new j,gc=new j,_c=new j,vc=new j,gd=new j,xc=new j,L0=new j,yc=new j;class vn extends Zt{constructor(e=new fr,t=new ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const u=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const u=this.morphTargetInfluences;if(o&&u){xc.set(0,0,0);for(let f=0,h=o.length;f<h;f++){const p=u[f],m=o[f];p!==0&&(gd.fromBufferAttribute(m,e),l?xc.addScaledVector(gd,p):xc.addScaledVector(gd.sub(t),p))}t.add(xc)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(o),$s.copy(e.ray).recast(e.near),!(mc.containsPoint($s.origin)===!1&&($s.intersectSphere(mc,P0)===null||$s.origin.distanceToSquared(P0)>(e.far-e.near)**2))&&(b0.copy(o).invert(),$s.copy(e.ray).applyMatrix4(b0),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,n){let i;const o=this.geometry,l=this.material,u=o.index,f=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,g=o.groups,v=o.drawRange;if(u!==null)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=l[y.materialIndex],R=Math.max(y.start,v.start),C=Math.min(u.count,Math.min(y.start+y.count,v.start+v.count));for(let T=R,D=C;T<D;T+=3){const N=u.getX(T),I=u.getX(T+1),F=u.getX(T+2);i=Sc(this,x,e,n,h,p,m,N,I,F),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const E=Math.max(0,v.start),M=Math.min(u.count,v.start+v.count);for(let y=E,x=M;y<x;y+=3){const R=u.getX(y),C=u.getX(y+1),T=u.getX(y+2);i=Sc(this,l,e,n,h,p,m,R,C,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const y=g[E],x=l[y.materialIndex],R=Math.max(y.start,v.start),C=Math.min(f.count,Math.min(y.start+y.count,v.start+v.count));for(let T=R,D=C;T<D;T+=3){const N=T,I=T+1,F=T+2;i=Sc(this,x,e,n,h,p,m,N,I,F),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{const E=Math.max(0,v.start),M=Math.min(f.count,v.start+v.count);for(let y=E,x=M;y<x;y+=3){const R=y,C=y+1,T=y+2;i=Sc(this,l,e,n,h,p,m,R,C,T),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}}function KE(a,e,t,n,i,o,l,u){let f;if(e.side===jn?f=n.intersectTriangle(l,o,i,!0,u):f=n.intersectTriangle(i,o,l,e.side===or,u),f===null)return null;yc.copy(u),yc.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(yc);return h<t.near||h>t.far?null:{distance:h,point:yc.clone(),object:a}}function Sc(a,e,t,n,i,o,l,u,f,h){a.getVertexPosition(u,gc),a.getVertexPosition(f,_c),a.getVertexPosition(h,vc);const p=KE(a,e,t,n,gc,_c,vc,L0);if(p){const m=new j;Wi.getBarycoord(L0,gc,_c,vc,m),i&&(p.uv=Wi.getInterpolatedAttribute(i,u,f,h,m,new Et)),o&&(p.uv1=Wi.getInterpolatedAttribute(o,u,f,h,m,new Et)),l&&(p.normal=Wi.getInterpolatedAttribute(l,u,f,h,m,new j),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new j,materialIndex:0};Wi.getNormal(gc,_c,vc,g.normal),p.face=g,p.barycoord=m}return p}class Fa extends fr{constructor(e=1,t=1,n=1,i=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:l};const u=this;i=Math.floor(i),o=Math.floor(o),l=Math.floor(l);const f=[],h=[],p=[],m=[];let g=0,v=0;E("z","y","x",-1,-1,n,t,e,l,o,0),E("z","y","x",1,-1,n,t,-e,l,o,1),E("x","z","y",1,1,e,n,t,i,l,2),E("x","z","y",1,-1,e,n,-t,i,l,3),E("x","y","z",1,-1,e,t,n,i,o,4),E("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(f),this.setAttribute("position",new Or(h,3)),this.setAttribute("normal",new Or(p,3)),this.setAttribute("uv",new Or(m,2));function E(M,y,x,R,C,T,D,N,I,F,A){const b=T/I,B=D/F,K=T/2,q=D/2,ce=N/2,re=I+1,Q=F+1;let oe=0,z=0;const ue=new j;for(let le=0;le<Q;le++){const k=le*B-q;for(let te=0;te<re;te++){const Re=te*b-K;ue[M]=Re*R,ue[y]=k*C,ue[x]=ce,h.push(ue.x,ue.y,ue.z),ue[M]=0,ue[y]=0,ue[x]=N>0?1:-1,p.push(ue.x,ue.y,ue.z),m.push(te/I),m.push(1-le/F),oe+=1}}for(let le=0;le<F;le++)for(let k=0;k<I;k++){const te=g+k+re*le,Re=g+k+re*(le+1),J=g+(k+1)+re*(le+1),Z=g+(k+1)+re*le;f.push(te,Re,Z),f.push(Re,J,Z),z+=6}u.addGroup(v,z,A),v+=z,g+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Aa(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wn(a){const e={};for(let t=0;t<a.length;t++){const n=Aa(a[t]);for(const i in n)e[i]=n[i]}return e}function $E(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function _x(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Kc={clone:Aa,merge:Wn};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=QE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=$E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vx extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new j,I0=new Et,D0=new Et;class Dn extends vx{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,I0,D0),t.subVectors(D0,I0)}setViewOffset(e,t,n,i,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;o+=l.offsetX*i/f,t-=l.offsetY*n/h,i*=l.width/f,n*=l.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const na=-90,ia=1;class JE extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(na,ia,e,t);i.layers=this.layers,this.add(i);const o=new Dn(na,ia,e,t);o.layers=this.layers,this.add(o);const l=new Dn(na,ia,e,t);l.layers=this.layers,this.add(l);const u=new Dn(na,ia,e,t);u.layers=this.layers,this.add(u);const f=new Dn(na,ia,e,t);f.layers=this.layers,this.add(f);const h=new Dn(na,ia,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,l,u,f]=t;for(const h of t)this.remove(h);if(e===Ur)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,f,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,l),e.setRenderTarget(n,2,i),e.render(t,u),e.setRenderTarget(n,3,i),e.render(t,f),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(m,g,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class xx extends xn{constructor(e,t,n,i,o,l,u,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Sa,super(e,t,n,i,o,l,u,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eT extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xx(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fa(5,5,5),o=new lr({name:"CubemapFromEquirect",uniforms:Aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Ts});o.uniforms.tEquirect.value=t;const l=new vn(i,o),u=t.minFilter;return t.minFilter===Nr&&(t.minFilter=gi),new JE(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(o)}}class tT extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ap,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,o=this.stride;i<o;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new j;class om{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),o=Dt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return new qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new om(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[i+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const N0=new j,U0=new At,F0=new At,iT=new j,O0=new ot,Mc=new j,_d=new cr,k0=new ot,vd=new af;class rT extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=d0,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingBox.expandByPoint(Mc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mc),this.boundingSphere.expandByPoint(Mc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_d.copy(this.boundingSphere),_d.applyMatrix4(i),e.ray.intersectsSphere(_d)!==!1&&(k0.copy(i).invert(),vd.copy(e.ray).applyMatrix4(k0),!(this.boundingBox!==null&&vd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===d0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ZM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;U0.fromBufferAttribute(i.attributes.skinIndex,e),F0.fromBufferAttribute(i.attributes.skinWeight,e),N0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let o=0;o<4;o++){const l=F0.getComponent(o);if(l!==0){const u=U0.getComponent(o);O0.multiplyMatrices(n.bones[u].matrixWorld,n.boneInverses[u]),t.addScaledVector(iT.copy(N0).applyMatrix4(O0),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}class yx extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Sx extends xn{constructor(e=null,t=1,n=1,i,o,l,u,f,h=Yn,p=Yn,m,g){super(null,l,u,f,h,p,i,o,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const B0=new ot,sT=new ot;class am{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let o=0,l=e.length;o<l;o++){const u=e[o]?e[o].matrixWorld:sT;B0.multiplyMatrices(u,t[o]),B0.toArray(n,o*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new am(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sx(t,e,e,bi,Xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const o=e.bones[n];let l=t[o];l===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),l=new yx),this.bones.push(l),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,o=t.length;i<o;i++){const l=t[i];e.bones.push(l.uuid);const u=n[i];e.boneInverses.push(u.toArray())}return e}}class Rp extends qn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ra=new ot,z0=new ot,Ec=[],V0=new Vr,oT=new ot,El=new vn,Tl=new cr;class aT extends vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,oT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),V0.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(V0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),Tl.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(Tl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=n.length+1,l=e*o+1;for(let u=0;u<n.length;u++)n[u]=i[l+u]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(El.geometry=this.geometry,El.material=this.material,El.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(n),e.ray.intersectsSphere(Tl)!==!1))for(let o=0;o<i;o++){this.getMatrixAt(o,ra),z0.multiplyMatrices(n,ra),El.matrixWorld=z0,El.raycast(e,Ec);for(let l=0,u=Ec.length;l<u;l++){const f=Ec[l];f.instanceId=o,f.object=this,t.push(f)}Ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sx(new Float32Array(i*this.count),i,this.count,em,Xi));const o=this.morphTexture.source.data.data;let l=0;for(let h=0;h<n.length;h++)l+=n[h];const u=this.geometry.morphTargetsRelative?1:1-l,f=i*e;o[f]=u,o.set(n,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const xd=new j,lT=new j,uT=new at;class _s{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xd.subVectors(n,t).cross(lT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||uT.getNormalMatrix(e),i=this.coplanarPoint(xd).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new cr,Tc=new j;class lm{constructor(e=new _s,t=new _s,n=new _s,i=new _s,o=new _s,l=new _s){this.planes=[e,t,n,i,o,l]}set(e,t,n,i,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(i),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ur){const n=this.planes,i=e.elements,o=i[0],l=i[1],u=i[2],f=i[3],h=i[4],p=i[5],m=i[6],g=i[7],v=i[8],E=i[9],M=i[10],y=i[11],x=i[12],R=i[13],C=i[14],T=i[15];if(n[0].setComponents(f-o,g-h,y-v,T-x).normalize(),n[1].setComponents(f+o,g+h,y+v,T+x).normalize(),n[2].setComponents(f+l,g+p,y+E,T+R).normalize(),n[3].setComponents(f-l,g-p,y-E,T-R).normalize(),n[4].setComponents(f-u,g-m,y-M,T-C).normalize(),t===Ur)n[5].setComponents(f+u,g+m,y+M,T+C).normalize();else if(t===qc)n[5].setComponents(u,m,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){return Zs.center.set(0,0,0),Zs.radius=.7071067811865476,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Tc.x=i.normal.x>0?e.max.x:e.min.x,Tc.y=i.normal.y>0?e.max.y:e.min.y,Tc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mx extends rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new j,Zc=new j,H0=new ot,wl=new af,wc=new cr,yd=new j,G0=new j;class um extends Zt{constructor(e=new fr,t=new Mx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)$c.fromBufferAttribute(t,i-1),Zc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$c.distanceTo(Zc);e.setAttribute("lineDistance",new Or(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(i),wc.radius+=o,e.ray.intersectsSphere(wc)===!1)return;H0.copy(i).invert(),wl.copy(e.ray).applyMatrix4(H0);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const v=Math.max(0,l.start),E=Math.min(p.count,l.start+l.count);for(let M=v,y=E-1;M<y;M+=h){const x=p.getX(M),R=p.getX(M+1),C=Ac(this,e,wl,f,x,R);C&&t.push(C)}if(this.isLineLoop){const M=p.getX(E-1),y=p.getX(v),x=Ac(this,e,wl,f,M,y);x&&t.push(x)}}else{const v=Math.max(0,l.start),E=Math.min(g.count,l.start+l.count);for(let M=v,y=E-1;M<y;M+=h){const x=Ac(this,e,wl,f,M,M+1);x&&t.push(x)}if(this.isLineLoop){const M=Ac(this,e,wl,f,E-1,v);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const u=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Ac(a,e,t,n,i,o){const l=a.geometry.attributes.position;if($c.fromBufferAttribute(l,i),Zc.fromBufferAttribute(l,o),t.distanceSqToSegment($c,Zc,yd,G0)>n)return;yd.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(yd);if(!(f<e.near||f>e.far))return{distance:f,point:G0.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:a}}const W0=new j,X0=new j;class cT extends um{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,o=t.count;i<o;i+=2)W0.fromBufferAttribute(t,i),X0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+W0.distanceTo(X0);e.setAttribute("lineDistance",new Or(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fT extends um{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ex extends rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const j0=new ot,Cp=new af,Rc=new cr,Cc=new j;class hT extends Zt{constructor(e=new fr,t=new Ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(i),Rc.radius+=o,e.ray.intersectsSphere(Rc)===!1)return;j0.copy(i).invert(),Cp.copy(e.ray).applyMatrix4(j0);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=n.index,m=n.attributes.position;if(h!==null){const g=Math.max(0,l.start),v=Math.min(h.count,l.start+l.count);for(let E=g,M=v;E<M;E++){const y=h.getX(E);Cc.fromBufferAttribute(m,y),Y0(Cc,y,f,i,e,t,this)}}else{const g=Math.max(0,l.start),v=Math.min(m.count,l.start+l.count);for(let E=g,M=v;E<M;E++)Cc.fromBufferAttribute(m,E),Y0(Cc,E,f,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=i.length;o<l;o++){const u=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Y0(a,e,t,n,i,o,l){const u=Cp.distanceSqToPoint(a);if(u<t){const f=new j;Cp.closestPointToPoint(a,f),f.applyMatrix4(n);const h=i.ray.origin.distanceTo(f);if(h<i.near||h>i.far)return;o.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:l})}}class lo extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Tx extends xn{constructor(e,t,n,i,o,l,u,f,h,p=pa){if(p!==pa&&p!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===pa&&(n=go),n===void 0&&p===Ta&&(n=Ea),super(null,i,o,l,u,f,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Yn,this.minFilter=f!==void 0?f:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ra extends fr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,l=t/2,u=Math.floor(n),f=Math.floor(i),h=u+1,p=f+1,m=e/u,g=t/f,v=[],E=[],M=[],y=[];for(let x=0;x<p;x++){const R=x*g-l;for(let C=0;C<h;C++){const T=C*m-o;E.push(T,-R,0),M.push(0,0,1),y.push(C/u),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let R=0;R<u;R++){const C=R+h*x,T=R+h*(x+1),D=R+1+h*(x+1),N=R+1+h*x;v.push(C,T,N),v.push(T,D,N)}this.setIndex(v),this.setAttribute("position",new Or(E,3)),this.setAttribute("normal",new Or(M,3)),this.setAttribute("uv",new Or(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}class lf extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lx,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hr extends lf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dT extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function bc(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function mT(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function gT(a){function e(i,o){return a[i]-a[o]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function q0(a,e,t){const n=a.length,i=new a.constructor(n);for(let o=0,l=0;l!==n;++o){const u=t[o]*e;for(let f=0;f!==e;++f)i[l++]=a[u+f]}return i}function wx(a,e,t,n){let i=1,o=a[0];for(;o!==void 0&&o[n]===void 0;)o=a[i++];if(o===void 0)return;let l=o[n];if(l!==void 0)if(Array.isArray(l))do l=o[n],l!==void 0&&(e.push(o.time),t.push.apply(t,l)),o=a[i++];while(o!==void 0);else if(l.toArray!==void 0)do l=o[n],l!==void 0&&(e.push(o.time),l.toArray(t,t.length)),o=a[i++];while(o!==void 0);else do l=o[n],l!==void 0&&(e.push(o.time),t.push(l)),o=a[i++];while(o!==void 0)}class Zl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],o=t[n-1];e:{t:{let l;n:{i:if(!(e<i)){for(let u=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(o=i,i=t[++n],e<i)break t}l=t.length;break n}if(!(e>=o)){const u=t[1];e<u&&(n=2,o=u);for(let f=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===f)break;if(i=o,o=t[--n-1],e>=o)break t}l=n,n=0;break n}break e}for(;n<l;){const u=n+l>>>1;e<t[u]?l=u:n=u+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let l=0;l!==i;++l)t[l]=n[o+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _T extends Zl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:la,endingEnd:la}}intervalChanged_(e,t,n){const i=this.parameterPositions;let o=e-2,l=e+1,u=i[o],f=i[l];if(u===void 0)switch(this.getSettings_().endingStart){case ua:o=e,u=2*t-n;break;case jc:o=i.length-2,u=t+i[o]-i[o+1];break;default:o=e,u=n}if(f===void 0)switch(this.getSettings_().endingEnd){case ua:l=e,f=2*n-t;break;case jc:l=1,f=n+i[1]-i[0];break;default:l=e-1,f=t}const h=(n-t)*.5,p=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(f-n),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(e,t,n,i){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,p=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,v=this._weightNext,E=(n-t)/(i-t),M=E*E,y=M*E,x=-g*y+2*g*M-g*E,R=(1+g)*y+(-1.5-2*g)*M+(-.5+g)*E+1,C=(-1-v)*y+(1.5+v)*M+.5*E,T=v*y-v*M;for(let D=0;D!==u;++D)o[D]=x*l[p+D]+R*l[h+D]+C*l[f+D]+T*l[m+D];return o}}class Ax extends Zl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,p=(n-t)/(i-t),m=1-p;for(let g=0;g!==u;++g)o[g]=l[h+g]*m+l[f+g]*p;return o}}class vT extends Zl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class dr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bc(t,this.TimeBufferType),this.values=bc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bc(e.times,Array),values:bc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _T(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zl:t=this.InterpolantFactoryMethodDiscrete;break;case Vl:t=this.InterpolantFactoryMethodLinear;break;case Zh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zl;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let o=0,l=i-1;for(;o!==i&&n[o]<e;)++o;for(;l!==-1&&n[l]>t;)--l;if(++l,o!==0||l!==i){o>=l&&(l=Math.max(l,1),o=l-1);const u=this.getValueSize();this.times=n.slice(o,l),this.values=this.values.slice(o*u,l*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let u=0;u!==o;u++){const f=n[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(l!==null&&l>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,l),e=!1;break}l=f}if(i!==void 0&&mT(i))for(let u=0,f=i.length;u!==f;++u){const h=i[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zh,o=e.length-1;let l=1;for(let u=1;u<o;++u){let f=!1;const h=e[u],p=e[u+1];if(h!==p&&(u!==1||h!==e[0]))if(i)f=!0;else{const m=u*n,g=m-n,v=m+n;for(let E=0;E!==n;++E){const M=t[m+E];if(M!==t[g+E]||M!==t[v+E]){f=!0;break}}}if(f){if(u!==l){e[l]=e[u];const m=u*n,g=l*n;for(let v=0;v!==n;++v)t[g+v]=t[m+v]}++l}}if(o>0){e[l]=e[o];for(let u=o*n,f=l*n,h=0;h!==n;++h)t[f+h]=t[u+h];++l}return l!==e.length?(this.times=e.slice(0,l),this.values=t.slice(0,l*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}dr.prototype.TimeBufferType=Float32Array;dr.prototype.ValueBufferType=Float32Array;dr.prototype.DefaultInterpolation=Vl;class Oa extends dr{constructor(e,t,n){super(e,t,n)}}Oa.prototype.ValueTypeName="bool";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=zl;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;class Rx extends dr{}Rx.prototype.ValueTypeName="color";class Ca extends dr{}Ca.prototype.ValueTypeName="number";class xT extends Zl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=(n-t)/(i-t);let h=e*u;for(let p=h+u;h!==p;h+=4)Yi.slerpFlat(o,0,l,h-u,l,h,f);return o}}class ba extends dr{InterpolantFactoryMethodLinear(e){return new xT(this.times,this.values,this.getValueSize(),e)}}ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;class ka extends dr{constructor(e,t,n){super(e,t,n)}}ka.prototype.ValueTypeName="string";ka.prototype.ValueBufferType=Array;ka.prototype.DefaultInterpolation=zl;ka.prototype.InterpolantFactoryMethodLinear=void 0;ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends dr{}Pa.prototype.ValueTypeName="vector";class bp{constructor(e="",t=-1,n=[],i=rm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ji(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let l=0,u=n.length;l!==u;++l)t.push(ST(n[l]).scale(i));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,l=n.length;o!==l;++o)t.push(dr.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const o=t.length,l=[];for(let u=0;u<o;u++){let f=[],h=[];f.push((u+o-1)%o,u,(u+1)%o),h.push(0,1,0);const p=gT(f);f=q0(f,1,p),h=q0(h,1,p),!i&&f[0]===0&&(f.push(o),h.push(h[0])),l.push(new Ca(".morphTargetInfluences["+t[u].name+"]",f,h).scale(1/n))}return new this(e,-1,l)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const h=e[u],p=h.name.match(o);if(p&&p.length>1){const m=p[1];let g=i[m];g||(i[m]=g=[]),g.push(h)}}const l=[];for(const u in i)l.push(this.CreateFromMorphTargetSequence(u,i[u],t,n));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(m,g,v,E,M){if(v.length!==0){const y=[],x=[];wx(v,y,x,E),y.length!==0&&M.push(new m(g,y,x))}},i=[],o=e.name||"default",l=e.fps||30,u=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const g=h[m].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let E;for(E=0;E<g.length;E++)if(g[E].morphTargets)for(let M=0;M<g[E].morphTargets.length;M++)v[g[E].morphTargets[M]]=-1;for(const M in v){const y=[],x=[];for(let R=0;R!==g[E].morphTargets.length;++R){const C=g[E];y.push(C.time),x.push(C.morphTarget===M?1:0)}i.push(new Ca(".morphTargetInfluence["+M+"]",y,x))}f=v.length*l}else{const v=".bones["+t[m].name+"]";n(Pa,v+".position",g,"pos",i),n(ba,v+".quaternion",g,"rot",i),n(Pa,v+".scale",g,"scl",i)}}return i.length===0?null:new this(o,f,i,u)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yT(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ca;case"vector":case"vector2":case"vector3":case"vector4":return Pa;case"color":return Rx;case"quaternion":return ba;case"bool":case"boolean":return Oa;case"string":return ka}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function ST(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yT(a.type);if(a.times===void 0){const t=[],n=[];wx(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const ys={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class MT{constructor(e,t,n){const i=this;let o=!1,l=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){u++,o===!1&&i.onStart!==void 0&&i.onStart(p,l,u),o=!0},this.itemEnd=function(p){l++,i.onProgress!==void 0&&i.onProgress(p,l,u),l===u&&(o=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(p){i.onError!==void 0&&i.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const v=h[m],E=h[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return E}return null}}}const ET=new MT;class Ba{constructor(e){this.manager=e!==void 0?e:ET,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,o){n.load(e,i,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ba.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class TT extends Error{constructor(e,t){super(e),this.response=t}}class Cx extends Ba{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ys.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:n,onError:i});return}br[e]=[],br[e].push({onLoad:t,onProgress:n,onError:i});const l=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(l).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=br[e],m=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,E=v!==0;let M=0;const y=new ReadableStream({start(x){R();function R(){m.read().then(({done:C,value:T})=>{if(C)x.close();else{M+=T.byteLength;const D=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:v});for(let N=0,I=p.length;N<I;N++){const F=p[N];F.onProgress&&F.onProgress(D)}x.enqueue(T),R()}},C=>{x.error(C)})}}});return new Response(y)}else throw new TT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return h.json();default:if(u===void 0)return h.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),g=m&&m[1]?m[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(E=>v.decode(E))}}}).then(h=>{ys.add(e,h);const p=br[e];delete br[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onLoad&&v.onLoad(h)}}).catch(h=>{const p=br[e];if(p===void 0)throw this.manager.itemError(e),h;delete br[e];for(let m=0,g=p.length;m<g;m++){const v=p[m];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wT extends Ba{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=ys.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const u=Hl("img");function f(){p(),ys.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(m){p(),i&&i(m),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),o.manager.itemStart(e),u.src=e,u}}class bx extends Ba{constructor(e){super(e)}load(e,t,n,i){const o=new xn,l=new wT(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){o.image=u,o.needsUpdate=!0,t!==void 0&&t(o)},n,i),o}}class uf extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Sd=new ot,K0=new j,$0=new j;class cm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lm,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;K0.setFromMatrixPosition(e.matrixWorld),t.position.copy(K0),$0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($0),t.updateMatrixWorld(),Sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AT extends cm{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=wa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||i!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=i,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RT extends uf{constructor(e,t,n=0,i=Math.PI/3,o=0,l=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=n,this.angle=i,this.penumbra=o,this.decay=l,this.map=null,this.shadow=new AT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Z0=new ot,Al=new j,Md=new j;class CT extends cm{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Al.setFromMatrixPosition(e.matrixWorld),n.position.copy(Al),Md.copy(n.position),Md.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Md),n.updateMatrixWorld(),i.makeTranslation(-Al.x,-Al.y,-Al.z),Z0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Z0)}}class bT extends uf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new CT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fm extends vx{constructor(e=-1,t=1,n=1,i=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=i+t,f=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,u-=p*this.view.offsetY,f=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class PT extends cm{constructor(){super(new fm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pp extends uf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new PT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class LT extends uf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ul{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class IT extends Ba{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=ys.get(e);if(l!==void 0){if(o.manager.itemStart(e),l.then){l.then(h=>{t&&t(h),o.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(h){return ys.add(e,h),t&&t(h),o.manager.itemEnd(e),h}).catch(function(h){i&&i(h),ys.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});ys.add(e,f),o.manager.itemStart(e)}}class DT extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Q0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=J0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=J0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function J0(){return performance.now()}class NT{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,o,l;switch(t){case"quaternion":i=this._slerp,o=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,o=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,o=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=o,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,o=e*i+i;let l=this.cumulativeWeight;if(l===0){for(let u=0;u!==i;++u)n[o+u]=n[u];l=t}else{l+=t;const u=t/l;this._mixBufferRegion(n,o,0,u,i)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,o=this.cumulativeWeight,l=this.cumulativeWeightAdditive,u=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const f=t*this._origIndex;this._mixBufferRegion(n,i,f,1-o,t)}l>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let f=t,h=t+t;f!==h;++f)if(n[f]!==n[f+t]){u.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let o=n,l=i;o!==l;++o)t[o]=t[i+o%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,o){if(i>=.5)for(let l=0;l!==o;++l)e[t+l]=e[n+l]}_slerp(e,t,n,i){Yi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,o){const l=this._workIndex*o;Yi.multiplyQuaternionsFlat(e,l,e,t,e,n),Yi.slerpFlat(e,t,e,t,e,l,i)}_lerp(e,t,n,i,o){const l=1-i;for(let u=0;u!==o;++u){const f=t+u;e[f]=e[f]*l+e[n+u]*i}}_lerpAdditive(e,t,n,i,o){for(let l=0;l!==o;++l){const u=t+l;e[u]=e[u]+e[n+l]*i}}}const hm="\\[\\]\\.:\\/",UT=new RegExp("["+hm+"]","g"),dm="[^"+hm+"]",FT="[^"+hm.replace("\\.","")+"]",OT=/((?:WC+[\/:])*)/.source.replace("WC",dm),kT=/(WCOD+)?/.source.replace("WCOD",FT),BT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dm),zT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dm),VT=new RegExp("^"+OT+kT+BT+zT+"$"),HT=["material","materials","bones","map"];class GT{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(UT,"")}static parseTrackName(e){const t=VT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);HT.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let l=0;l<o.length;l++){const u=o[l];if(u.name===t||u.uuid===t)return u;const f=n(u.children);if(f)return f}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let o=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[i];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}f=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=o}else l.fromArray!==void 0&&l.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(f=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=i;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=GT;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class WT{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const o=t.tracks,l=o.length,u=new Array(l),f={endingStart:la,endingEnd:la};for(let h=0;h!==l;++h){const p=o[h].createInterpolant(null);u[h]=p,p.settings=f}this._interpolantSettings=f,this._interpolants=u,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=JM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,o=e._clip.duration,l=o/i,u=i/o;e.warp(1,l,t),this.warp(u,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,o=i.time,l=this.timeScale;let u=this._timeScaleInterpolant;u===null&&(u=i._lendControlInterpolant(),this._timeScaleInterpolant=u);const f=u.parameterPositions,h=u.sampleValues;return f[0]=o,f[1]=o+n,h[0]=e/l,h[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const o=this._startTime;if(o!==null){const f=(e-o)*n;f<0||n===0?t=0:(this._startTime=null,t=n*f)}t*=this._updateTimeScale(e);const l=this._updateTime(t),u=this._updateWeight(e);if(u>0){const f=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case tE:for(let p=0,m=f.length;p!==m;++p)f[p].evaluate(l),h[p].accumulateAdditive(u);break;case rm:default:for(let p=0,m=f.length;p!==m;++p)f[p].evaluate(l),h[p].accumulate(i,u)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,o=this._loopCount;const l=n===eE;if(e===0)return o===-1?i:l&&(o&1)===1?t-i:i;if(n===QM){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(o===-1&&(e>=0?(o=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),i>=t||i<0){const u=Math.floor(i/t);i-=t*u,o+=Math.abs(u);const f=this.repetitions-o;if(f<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(f===1){const h=e<0;this._setEndings(h,!h,l)}else this._setEndings(!1,!1,l);this._loopCount=o,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:u})}}else this.time=i;if(l&&(o&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ua,i.endingEnd=ua):(e?i.endingStart=this.zeroSlopeAtStart?ua:la:i.endingStart=jc,t?i.endingEnd=this.zeroSlopeAtEnd?ua:la:i.endingEnd=jc)}_scheduleFading(e,t,n){const i=this._mixer,o=i.time;let l=this._weightInterpolant;l===null&&(l=i._lendControlInterpolant(),this._weightInterpolant=l);const u=l.parameterPositions,f=l.sampleValues;return u[0]=o,f[0]=t,u[1]=o+e,f[1]=n,this}}const XT=new Float32Array(1);class ev extends xo{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,o=i.length,l=e._propertyBindings,u=e._interpolants,f=n.uuid,h=this._bindingsByRootAndName;let p=h[f];p===void 0&&(p={},h[f]=p);for(let m=0;m!==o;++m){const g=i[m],v=g.name;let E=p[v];if(E!==void 0)++E.referenceCount,l[m]=E;else{if(E=l[m],E!==void 0){E._cacheIndex===null&&(++E.referenceCount,this._addInactiveBinding(E,f,v));continue}const M=t&&t._propertyBindings[m].binding.parsedPath;E=new NT(Lt.create(n,v,M),g.ValueTypeName,g.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,f,v),l[m]=E}u[m].resultBuffer=E.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,o=this._actionsByClip[i];this._bindAction(e,o&&o.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const o=t[n];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const o=t[n];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,o=this._actionsByClip;let l=o[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,o[t]=l;else{const u=l.knownActions;e._byClipCacheIndex=u.length,u.push(e)}e._cacheIndex=i.length,i.push(e),l.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const o=e._clip.uuid,l=this._actionsByClip,u=l[o],f=u.knownActions,h=f[f.length-1],p=e._byClipCacheIndex;h._byClipCacheIndex=p,f[p]=h,f.pop(),e._byClipCacheIndex=null;const m=u.actionByRoot,g=(e._localRoot||this._root).uuid;delete m[g],f.length===0&&delete l[o],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const o=t[n];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,o=this._bindings;let l=i[t];l===void 0&&(l={},i[t]=l),l[n]=e,e._cacheIndex=o.length,o.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,o=n.path,l=this._bindingsByRootAndName,u=l[i],f=t[t.length-1],h=e._cacheIndex;f._cacheIndex=h,t[h]=f,t.pop(),delete u[o],Object.keys(u).length===0&&delete l[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ax(new Float32Array(2),new Float32Array(2),1,XT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,o=t[i];e.__cacheIndex=i,t[i]=e,o.__cacheIndex=n,t[n]=o}clipAction(e,t,n){const i=t||this._root,o=i.uuid;let l=typeof e=="string"?bp.findByName(i,e):e;const u=l!==null?l.uuid:e,f=this._actionsByClip[u];let h=null;if(n===void 0&&(l!==null?n=l.blendMode:n=rm),f!==void 0){const m=f.actionByRoot[o];if(m!==void 0&&m.blendMode===n)return m;h=f.knownActions[0],l===null&&(l=h._clip)}if(l===null)return null;const p=new WT(this,l,t,n);return this._bindAction(p,h),this._addInactiveAction(p,u,o),p}existingAction(e,t){const n=t||this._root,i=n.uuid,o=typeof e=="string"?bp.findByName(n,e):e,l=o?o.uuid:e,u=this._actionsByClip[l];return u!==void 0&&u.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,o=Math.sign(e),l=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,o,l);const u=this._bindings,f=this._nActiveBindings;for(let h=0;h!==f;++h)u[h].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,o=i[n];if(o!==void 0){const l=o.knownActions;for(let u=0,f=l.length;u!==f;++u){const h=l[u];this._deactivateAction(h);const p=h._cacheIndex,m=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,m._cacheIndex=p,t[p]=m,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const l in n){const u=n[l].actionByRoot,f=u[t];f!==void 0&&(this._deactivateAction(f),this._removeInactiveAction(f))}const i=this._bindingsByRootAndName,o=i[t];if(o!==void 0)for(const l in o){const u=o[l];u.restoreOriginalState(),this._removeInactiveBinding(u)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function tv(a,e,t,n){const i=jT(n);switch(t){case tx:return a*e;case ix:return a*e;case rx:return a*e*2;case em:return a*e/i.components*i.byteLength;case tm:return a*e/i.components*i.byteLength;case sx:return a*e*2/i.components*i.byteLength;case nm:return a*e*2/i.components*i.byteLength;case nx:return a*e*3/i.components*i.byteLength;case bi:return a*e*4/i.components*i.byteLength;case im:return a*e*4/i.components*i.byteLength;case Uc:case Fc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Oc:case kc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(a,16)*Math.max(e,8)/4;case Jd:case tp:return Math.max(a,8)*Math.max(e,8)/2;case ip:case rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case xp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Bc:case yp:case Sp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ox:case Mp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ep:case Tp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jT(a){switch(a){case kr:case Qv:return{byteLength:1,components:1};case Bl:case Jv:case $l:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case go:case Zp:case Xi:return{byteLength:4,components:1};case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$p);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let a=null,e=!1,t=null,n=null;function i(o,l){t(o,l),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function YT(a){const e=new WeakMap;function t(u,f){const h=u.array,p=u.usage,m=h.byteLength,g=a.createBuffer();a.bindBuffer(f,g),a.bufferData(f,h,p),u.onUploadCallback();let v;if(h instanceof Float32Array)v=a.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?v=a.HALF_FLOAT:v=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=a.SHORT;else if(h instanceof Uint32Array)v=a.UNSIGNED_INT;else if(h instanceof Int32Array)v=a.INT;else if(h instanceof Int8Array)v=a.BYTE;else if(h instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:m}}function n(u,f,h){const p=f.array,m=f.updateRanges;if(a.bindBuffer(h,u),m.length===0)a.bufferSubData(h,0,p);else{m.sort((v,E)=>v.start-E.start);let g=0;for(let v=1;v<m.length;v++){const E=m[g],M=m[v];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,m[g]=M)}m.length=g+1;for(let v=0,E=m.length;v<E;v++){const M=m[v];a.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function i(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(a.deleteBuffer(f.buffer),e.delete(u))}function l(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,u,f),h.version=u.version}}return{get:i,remove:o,update:l}}var qT=`#ifdef USE_ALPHAHASH
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
}`,ct={alphahash_fragment:qT,alphahash_pars_fragment:KT,alphamap_fragment:$T,alphamap_pars_fragment:ZT,alphatest_fragment:QT,alphatest_pars_fragment:JT,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:o1,iridescence_fragment:a1,bumpmap_pars_fragment:l1,clipping_planes_fragment:u1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:h1,color_fragment:d1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:_1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:x1,displacementmap_pars_vertex:y1,displacementmap_vertex:S1,emissivemap_fragment:M1,emissivemap_pars_fragment:E1,colorspace_fragment:T1,colorspace_pars_fragment:w1,envmap_fragment:A1,envmap_common_pars_fragment:R1,envmap_pars_fragment:C1,envmap_pars_vertex:b1,envmap_physical_pars_fragment:z1,envmap_vertex:P1,fog_vertex:L1,fog_pars_vertex:I1,fog_fragment:D1,fog_pars_fragment:N1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:F1,lights_lambert_fragment:O1,lights_lambert_pars_fragment:k1,lights_pars_begin:B1,lights_toon_fragment:V1,lights_toon_pars_fragment:H1,lights_phong_fragment:G1,lights_phong_pars_fragment:W1,lights_physical_fragment:X1,lights_physical_pars_fragment:j1,lights_fragment_begin:Y1,lights_fragment_maps:q1,lights_fragment_end:K1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:ew,map_pars_fragment:tw,map_particle_fragment:nw,map_particle_pars_fragment:iw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:sw,morphinstance_vertex:ow,morphcolor_vertex:aw,morphnormal_vertex:lw,morphtarget_pars_vertex:uw,morphtarget_vertex:cw,normal_fragment_begin:fw,normal_fragment_maps:hw,normal_pars_fragment:dw,normal_pars_vertex:pw,normal_vertex:mw,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:_w,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:xw,iridescence_pars_fragment:yw,opaque_fragment:Sw,packing:Mw,premultiplied_alpha_fragment:Ew,project_vertex:Tw,dithering_fragment:ww,dithering_pars_fragment:Aw,roughnessmap_fragment:Rw,roughnessmap_pars_fragment:Cw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Pw,shadowmap_vertex:Lw,shadowmask_pars_fragment:Iw,skinbase_vertex:Dw,skinning_pars_vertex:Nw,skinning_vertex:Uw,skinnormal_vertex:Fw,specularmap_fragment:Ow,specularmap_pars_fragment:kw,tonemapping_fragment:Bw,tonemapping_pars_fragment:zw,transmission_fragment:Vw,transmission_pars_fragment:Hw,uv_pars_fragment:Gw,uv_pars_vertex:Ww,uv_vertex:Xw,worldpos_vertex:jw,background_vert:Yw,background_frag:qw,backgroundCube_vert:Kw,backgroundCube_frag:$w,cube_vert:Zw,cube_frag:Qw,depth_vert:Jw,depth_frag:eA,distanceRGBA_vert:tA,distanceRGBA_frag:nA,equirect_vert:iA,equirect_frag:rA,linedashed_vert:sA,linedashed_frag:oA,meshbasic_vert:aA,meshbasic_frag:lA,meshlambert_vert:uA,meshlambert_frag:cA,meshmatcap_vert:fA,meshmatcap_frag:hA,meshnormal_vert:dA,meshnormal_frag:pA,meshphong_vert:mA,meshphong_frag:gA,meshphysical_vert:_A,meshphysical_frag:vA,meshtoon_vert:xA,meshtoon_frag:yA,points_vert:SA,points_frag:MA,shadow_vert:EA,shadow_frag:TA,sprite_vert:wA,sprite_frag:AA},Ae={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},er={basic:{uniforms:Wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Wn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Wn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Wn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Wn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Wn([Ae.points,Ae.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Wn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Wn([Ae.common,Ae.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Wn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Wn([Ae.sprite,Ae.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Wn([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Wn([Ae.lights,Ae.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};er.physical={uniforms:Wn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Pc={r:0,b:0,g:0},Qs=new ar,RA=new ot;function CA(a,e,t,n,i,o,l){const u=new nt(0);let f=o===!0?0:1,h,p,m=null,g=0,v=null;function E(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function M(C){let T=!1;const D=E(C);D===null?x(u,f):D&&D.isColor&&(x(D,1),T=!0);const N=a.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(a.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(C,T){const D=E(T);D&&(D.isCubeTexture||D.mapping===of)?(p===void 0&&(p=new vn(new Fa(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Aa(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),Qs.copy(T.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),p.material.uniforms.envMap.value=D,p.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Qs)),p.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Ut,(m!==D||g!==D.version||v!==a.toneMapping)&&(p.material.needsUpdate=!0,m=D,g=D.version,v=a.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new vn(new Ra(2,2),new lr({name:"BackgroundMaterial",uniforms:Aa(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Ut,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(m!==D||g!==D.version||v!==a.toneMapping)&&(h.material.needsUpdate=!0,m=D,g=D.version,v=a.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,T){C.getRGB(Pc,_x(a)),n.buffers.color.setClear(Pc.r,Pc.g,Pc.b,T,l)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(C,T=1){u.set(C),f=T,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,x(u,f)},render:M,addToRenderList:y,dispose:R}}function bA(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=g(null);let o=i,l=!1;function u(b,B,K,q,ce){let re=!1;const Q=m(q,K,B);o!==Q&&(o=Q,h(o.object)),re=v(b,q,K,ce),re&&E(b,q,K,ce),ce!==null&&e.update(ce,a.ELEMENT_ARRAY_BUFFER),(re||l)&&(l=!1,T(b,B,K,q),ce!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function f(){return a.createVertexArray()}function h(b){return a.bindVertexArray(b)}function p(b){return a.deleteVertexArray(b)}function m(b,B,K){const q=K.wireframe===!0;let ce=n[b.id];ce===void 0&&(ce={},n[b.id]=ce);let re=ce[B.id];re===void 0&&(re={},ce[B.id]=re);let Q=re[q];return Q===void 0&&(Q=g(f()),re[q]=Q),Q}function g(b){const B=[],K=[],q=[];for(let ce=0;ce<t;ce++)B[ce]=0,K[ce]=0,q[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:q,object:b,attributes:{},index:null}}function v(b,B,K,q){const ce=o.attributes,re=B.attributes;let Q=0;const oe=K.getAttributes();for(const z in oe)if(oe[z].location>=0){const le=ce[z];let k=re[z];if(k===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(k=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(k=b.instanceColor)),le===void 0||le.attribute!==k||k&&le.data!==k.data)return!0;Q++}return o.attributesNum!==Q||o.index!==q}function E(b,B,K,q){const ce={},re=B.attributes;let Q=0;const oe=K.getAttributes();for(const z in oe)if(oe[z].location>=0){let le=re[z];le===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(le=b.instanceColor));const k={};k.attribute=le,le&&le.data&&(k.data=le.data),ce[z]=k,Q++}o.attributes=ce,o.attributesNum=Q,o.index=q}function M(){const b=o.newAttributes;for(let B=0,K=b.length;B<K;B++)b[B]=0}function y(b){x(b,0)}function x(b,B){const K=o.newAttributes,q=o.enabledAttributes,ce=o.attributeDivisors;K[b]=1,q[b]===0&&(a.enableVertexAttribArray(b),q[b]=1),ce[b]!==B&&(a.vertexAttribDivisor(b,B),ce[b]=B)}function R(){const b=o.newAttributes,B=o.enabledAttributes;for(let K=0,q=B.length;K<q;K++)B[K]!==b[K]&&(a.disableVertexAttribArray(K),B[K]=0)}function C(b,B,K,q,ce,re,Q){Q===!0?a.vertexAttribIPointer(b,B,K,ce,re):a.vertexAttribPointer(b,B,K,q,ce,re)}function T(b,B,K,q){M();const ce=q.attributes,re=K.getAttributes(),Q=B.defaultAttributeValues;for(const oe in re){const z=re[oe];if(z.location>=0){let ue=ce[oe];if(ue===void 0&&(oe==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),oe==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const le=ue.normalized,k=ue.itemSize,te=e.get(ue);if(te===void 0)continue;const Re=te.buffer,J=te.type,Z=te.bytesPerElement,me=J===a.INT||J===a.UNSIGNED_INT||ue.gpuType===Zp;if(ue.isInterleavedBufferAttribute){const he=ue.data,ve=he.stride,we=ue.offset;if(he.isInstancedInterleavedBuffer){for(let He=0;He<z.locationSize;He++)x(z.location+He,he.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let He=0;He<z.locationSize;He++)y(z.location+He);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let He=0;He<z.locationSize;He++)C(z.location+He,k/z.locationSize,J,le,ve*Z,(we+k/z.locationSize*He)*Z,me)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)x(z.location+he,ue.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<z.locationSize;he++)y(z.location+he);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let he=0;he<z.locationSize;he++)C(z.location+he,k/z.locationSize,J,le,k*Z,k/z.locationSize*he*Z,me)}}else if(Q!==void 0){const le=Q[oe];if(le!==void 0)switch(le.length){case 2:a.vertexAttrib2fv(z.location,le);break;case 3:a.vertexAttrib3fv(z.location,le);break;case 4:a.vertexAttrib4fv(z.location,le);break;default:a.vertexAttrib1fv(z.location,le)}}}}R()}function D(){F();for(const b in n){const B=n[b];for(const K in B){const q=B[K];for(const ce in q)p(q[ce].object),delete q[ce];delete B[K]}delete n[b]}}function N(b){if(n[b.id]===void 0)return;const B=n[b.id];for(const K in B){const q=B[K];for(const ce in q)p(q[ce].object),delete q[ce];delete B[K]}delete n[b.id]}function I(b){for(const B in n){const K=n[B];if(K[b.id]===void 0)continue;const q=K[b.id];for(const ce in q)p(q[ce].object),delete q[ce];delete K[b.id]}}function F(){A(),l=!0,o!==i&&(o=i,h(o.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:u,reset:F,resetDefaultState:A,dispose:D,releaseStatesOfGeometry:N,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:y,disableUnusedAttributes:R}}function PA(a,e,t){let n;function i(h){n=h}function o(h,p){a.drawArrays(n,h,p),t.update(p,n,1)}function l(h,p,m){m!==0&&(a.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let v=0;for(let E=0;E<m;E++)v+=p[E];t.update(v,n,1)}function f(h,p,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<h.length;E++)l(h[E],p[E],g[E]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,g,0,m);let E=0;for(let M=0;M<m;M++)E+=p[M]*g[M];t.update(E,n,1)}}this.setMode=i,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LA(a,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function l(I){return!(I!==bi&&n.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const F=I===$l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==kr&&n.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xi&&!F)}function f(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),D=E>0,N=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:g,maxTextures:v,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:D,maxSamples:N}}function IA(a){const e=this;let t=null,n=0,i=!1,o=!1;const l=new _s,u=new at,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||i;return i=g,n=m.length,v},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,v){const E=m.clippingPlanes,M=m.clipIntersection,y=m.clipShadows,x=a.get(m);if(!i||E===null||E.length===0||o&&!y)o?p(null):h();else{const R=o?0:n,C=R*4;let T=x.clippingState||null;f.value=T,T=p(E,g,C,v);for(let D=0;D!==C;++D)T[D]=t[D];x.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,v,E){const M=m!==null?m.length:0;let y=null;if(M!==0){if(y=f.value,E!==!0||y===null){const x=v+M*4,R=g.matrixWorldInverse;u.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let C=0,T=v;C!==M;++C,T+=4)l.copy(m[C]).applyMatrix4(R,u),l.normal.toArray(y,T),y[T+3]=l.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function DA(a){let e=new WeakMap;function t(l,u){return u===Zd?l.mapping=Sa:u===Qd&&(l.mapping=Ma),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===Zd||u===Qd)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new eT(f.height);return h.fromEquirectangularTexture(a,l),e.set(l,h),l.addEventListener("dispose",i),t(h.texture,l.mapping)}else return null}}return l}function i(l){const u=l.target;u.removeEventListener("dispose",i);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const ca=4,nv=[.125,.215,.35,.446,.526,.582],oo=20,Ed=new fm,iv=new nt;let Td=null,wd=0,Ad=0,Rd=!1;const io=(1+Math.sqrt(5))/2,sa=1/io,rv=[new j(-io,sa,0),new j(io,sa,0),new j(-sa,0,io),new j(sa,0,io),new j(0,io,-sa),new j(0,io,sa),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Td=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,wd,Ad),this._renderer.xr.enabled=Rd,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sa||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:$l,format:bi,colorSpace:Kn,depthBuffer:!1},i=ov(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ov(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NA(o)),this._blurMaterial=UA(o,e,t)}return i}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Ed)}_sceneToCubeUV(e,t,n,i){const u=new Dn(90,1,t,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(iv),p.toneMapping=ws,p.autoClear=!1;const v=new ao({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),E=new vn(new Fa,v);let M=!1;const y=e.background;y?y.isColor&&(v.color.copy(y),e.background=null,M=!0):(v.color.copy(iv),M=!0);for(let x=0;x<6;x++){const R=x%3;R===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):R===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const C=this._cubeSize;Lc(i,R*C,x>2?C:0,C,C),p.setRenderTarget(i),M&&p.render(E,u),p.render(e,u)}E.geometry.dispose(),E.material.dispose(),p.toneMapping=g,p.autoClear=m,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Sa||e.mapping===Ma;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const o=i?this._cubemapMaterial:this._equirectMaterial,l=new vn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const f=this._cubeSize;Lc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,Ed)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=rv[(i-o-1)%rv.length];this._blur(e,o-1,o,l,u)}t.autoClear=n}_blur(e,t,n,i,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",o),this._halfBlur(l,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,l,u){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new vn(this._lodPlanes[i],h),g=h.uniforms,v=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*oo-1),M=o/E,y=isFinite(o)?1+Math.floor(p*M):oo;y>oo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${oo}`);const x=[];let R=0;for(let I=0;I<oo;++I){const F=I/M,A=Math.exp(-F*F/2);x.push(A),I===0?R+=A:I<y&&(R+=2*A)}for(let I=0;I<x.length;I++)x[I]=x[I]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=l==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:C}=this;g.dTheta.value=E,g.mipInt.value=C-n;const T=this._sizeLods[i],D=3*T*(i>C-ca?i-C+ca:0),N=4*(this._cubeSize-T);Lc(t,D,N,3*T,2*T),f.setRenderTarget(t),f.render(m,Ed)}}function NA(a){const e=[],t=[],n=[];let i=a;const o=a-ca+1+nv.length;for(let l=0;l<o;l++){const u=Math.pow(2,i);t.push(u);let f=1/u;l>a-ca?f=nv[l-a+ca-1]:l===0&&(f=0),n.push(f);const h=1/(u-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,E=6,M=3,y=2,x=1,R=new Float32Array(M*E*v),C=new Float32Array(y*E*v),T=new Float32Array(x*E*v);for(let N=0;N<v;N++){const I=N%3*2/3-1,F=N>2?0:-1,A=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];R.set(A,M*E*N),C.set(g,y*E*N);const b=[N,N,N,N,N,N];T.set(b,x*E*N)}const D=new fr;D.setAttribute("position",new qn(R,M)),D.setAttribute("uv",new qn(C,y)),D.setAttribute("faceIndex",new qn(T,x)),e.push(D),i>ca&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ov(a,e,t){const n=new Cs(a,e,t);return n.texture.mapping=of,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lc(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function UA(a,e,t){const n=new Float32Array(oo),i=new j(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:oo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pm(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function av(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pm(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function lv(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function pm(){return`

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
	`}function FA(a){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const f=u.mapping,h=f===Zd||f===Qd,p=f===Sa||f===Ma;if(h||p){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return t===null&&(t=new sv(a)),m=h?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return h&&v&&v.height>0||p&&v&&i(v)?(t===null&&(t=new sv(a)),m=h?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",o),m.texture):null}}}return u}function i(u){let f=0;const h=6;for(let p=0;p<h;p++)u[p]!==void 0&&f++;return f===h}function o(u){const f=u.target;f.removeEventListener("dispose",o);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function OA(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&aa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kA(a,e,t,n){const i={},o=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",l),delete i[g.id];const v=o.get(g);v&&(e.remove(v),o.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return i[g.id]===!0||(g.addEventListener("dispose",l),i[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const v in g)e.update(g[v],a.ARRAY_BUFFER)}function h(m){const g=[],v=m.index,E=m.attributes.position;let M=0;if(v!==null){const R=v.array;M=v.version;for(let C=0,T=R.length;C<T;C+=3){const D=R[C+0],N=R[C+1],I=R[C+2];g.push(D,N,N,I,I,D)}}else if(E!==void 0){const R=E.array;M=E.version;for(let C=0,T=R.length/3-1;C<T;C+=3){const D=C+0,N=C+1,I=C+2;g.push(D,N,N,I,I,D)}}else return;const y=new(cx(g)?gx:mx)(g,1);y.version=M;const x=o.get(m);x&&e.remove(x),o.set(m,y)}function p(m){const g=o.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&h(m)}else h(m);return o.get(m)}return{get:u,update:f,getWireframeAttribute:p}}function BA(a,e,t){let n;function i(g){n=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,v){a.drawElements(n,v,o,g*l),t.update(v,n,1)}function h(g,v,E){E!==0&&(a.drawElementsInstanced(n,v,o,g*l,E),t.update(v,n,E))}function p(g,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,o,g,0,E);let y=0;for(let x=0;x<E;x++)y+=v[x];t.update(y,n,1)}function m(g,v,E,M){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/l,v[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(n,v,0,o,g,0,M,0,E);let x=0;for(let R=0;R<E;R++)x+=v[R]*M[R];t.update(x,n,1)}}this.setMode=i,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function zA(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function VA(a,e,t){const n=new WeakMap,i=new At;function o(l,u,f){const h=l.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(u);if(g===void 0||g.count!==m){let b=function(){F.dispose(),n.delete(u),u.removeEventListener("dispose",b)};var v=b;g!==void 0&&g.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let T=0;E===!0&&(T=1),M===!0&&(T=2),y===!0&&(T=3);let D=u.attributes.position.count*T,N=1;D>e.maxTextureSize&&(N=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const I=new Float32Array(D*N*4*m),F=new hx(I,D,N,m);F.type=Xi,F.needsUpdate=!0;const A=T*4;for(let B=0;B<m;B++){const K=x[B],q=R[B],ce=C[B],re=D*N*4*B;for(let Q=0;Q<K.count;Q++){const oe=Q*A;E===!0&&(i.fromBufferAttribute(K,Q),I[re+oe+0]=i.x,I[re+oe+1]=i.y,I[re+oe+2]=i.z,I[re+oe+3]=0),M===!0&&(i.fromBufferAttribute(q,Q),I[re+oe+4]=i.x,I[re+oe+5]=i.y,I[re+oe+6]=i.z,I[re+oe+7]=0),y===!0&&(i.fromBufferAttribute(ce,Q),I[re+oe+8]=i.x,I[re+oe+9]=i.y,I[re+oe+10]=i.z,I[re+oe+11]=ce.itemSize===4?i.w:1)}}g={count:m,texture:F,size:new Et(D,N)},n.set(u,g),u.addEventListener("dispose",b)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(a,"morphTexture",l.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const M=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(a,"morphTargetBaseInfluence",M),f.getUniforms().setValue(a,"morphTargetInfluences",h)}f.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:o}}function HA(a,e,t,n){let i=new WeakMap;function o(f){const h=n.render.frame,p=f.geometry,m=e.get(f,p);if(i.get(m)!==h&&(e.update(m),i.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),i.get(f)!==h&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),i.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;i.get(g)!==h&&(g.update(),i.set(g,h))}return m}function l(){i=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}const Lx=new xn,uv=new Tx(1,1),Ix=new hx,Dx=new BE,Nx=new xx,cv=[],fv=[],hv=new Float32Array(16),dv=new Float32Array(9),pv=new Float32Array(4);function za(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let o=cv[i];if(o===void 0&&(o=new Float32Array(i),cv[i]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,a[l].toArray(o,u)}return o}function fn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function hn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function cf(a,e){let t=fv[e];t===void 0&&(t=new Int32Array(e),fv[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function GA(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function WA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;a.uniform2fv(this.addr,e),hn(t,e)}}function XA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;a.uniform3fv(this.addr,e),hn(t,e)}}function jA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;a.uniform4fv(this.addr,e),hn(t,e)}}function YA(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,n))return;pv.set(n),a.uniformMatrix2fv(this.addr,!1,pv),hn(t,n)}}function qA(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,n))return;dv.set(n),a.uniformMatrix3fv(this.addr,!1,dv),hn(t,n)}}function KA(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,n))return;hv.set(n),a.uniformMatrix4fv(this.addr,!1,hv),hn(t,n)}}function $A(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ZA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;a.uniform2iv(this.addr,e),hn(t,e)}}function QA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;a.uniform3iv(this.addr,e),hn(t,e)}}function JA(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;a.uniform4iv(this.addr,e),hn(t,e)}}function eR(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function tR(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;a.uniform2uiv(this.addr,e),hn(t,e)}}function nR(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;a.uniform3uiv(this.addr,e),hn(t,e)}}function iR(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;a.uniform4uiv(this.addr,e),hn(t,e)}}function rR(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let o;this.type===a.SAMPLER_2D_SHADOW?(uv.compareFunction=ux,o=uv):o=Lx,t.setTexture2D(e||o,i)}function sR(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Dx,i)}function oR(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nx,i)}function aR(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ix,i)}function lR(a){switch(a){case 5126:return GA;case 35664:return WA;case 35665:return XA;case 35666:return jA;case 35674:return YA;case 35675:return qA;case 35676:return KA;case 5124:case 35670:return $A;case 35667:case 35671:return ZA;case 35668:case 35672:return QA;case 35669:case 35673:return JA;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}function uR(a,e){a.uniform1fv(this.addr,e)}function cR(a,e){const t=za(e,this.size,2);a.uniform2fv(this.addr,t)}function fR(a,e){const t=za(e,this.size,3);a.uniform3fv(this.addr,t)}function hR(a,e){const t=za(e,this.size,4);a.uniform4fv(this.addr,t)}function dR(a,e){const t=za(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function pR(a,e){const t=za(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function mR(a,e){const t=za(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function gR(a,e){a.uniform1iv(this.addr,e)}function _R(a,e){a.uniform2iv(this.addr,e)}function vR(a,e){a.uniform3iv(this.addr,e)}function xR(a,e){a.uniform4iv(this.addr,e)}function yR(a,e){a.uniform1uiv(this.addr,e)}function SR(a,e){a.uniform2uiv(this.addr,e)}function MR(a,e){a.uniform3uiv(this.addr,e)}function ER(a,e){a.uniform4uiv(this.addr,e)}function TR(a,e,t){const n=this.cache,i=e.length,o=cf(t,i);fn(n,o)||(a.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||Lx,o[l])}function wR(a,e,t){const n=this.cache,i=e.length,o=cf(t,i);fn(n,o)||(a.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||Dx,o[l])}function AR(a,e,t){const n=this.cache,i=e.length,o=cf(t,i);fn(n,o)||(a.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||Nx,o[l])}function RR(a,e,t){const n=this.cache,i=e.length,o=cf(t,i);fn(n,o)||(a.uniform1iv(this.addr,o),hn(n,o));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||Ix,o[l])}function CR(a){switch(a){case 5126:return uR;case 35664:return cR;case 35665:return fR;case 35666:return hR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return vR;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return SR;case 36295:return MR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return RR}}class bR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lR(t.type)}}class PR{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CR(t.type)}}class LR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,l=i.length;o!==l;++o){const u=i[o];u.setValue(e,t[u.id],n)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function mv(a,e){a.seq.push(e),a.map[e.id]=e}function IR(a,e,t){const n=a.name,i=n.length;for(Cd.lastIndex=0;;){const o=Cd.exec(n),l=Cd.lastIndex;let u=o[1];const f=o[2]==="]",h=o[3];if(f&&(u=u|0),h===void 0||h==="["&&l+2===i){mv(t,h===void 0?new bR(u,a,e):new PR(u,a,e));break}else{let m=t.map[u];m===void 0&&(m=new LR(u),mv(t,m)),t=m}}}class zc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),l=e.getUniformLocation(t,o.name);IR(o,l,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,l=t.length;o!==l;++o){const u=t[o],f=n[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function gv(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const DR=37297;let NR=0;function UR(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=i;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const _v=new at;function FR(a){Mt._getMatrix(_v,Mt.workingColorSpace,a);const e=`mat3( ${_v.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(a)){case Yc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function vv(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+UR(a.getShaderSource(e),l)}else return i}function OR(a,e){const t=FR(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kR(a,e){let t;switch(e){case WM:t="Linear";break;case XM:t="Reinhard";break;case jM:t="Cineon";break;case YM:t="ACESFilmic";break;case KM:t="AgX";break;case $M:t="Neutral";break;case qM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ic=new j;function BR(){Mt.getLuminanceCoefficients(Ic);const a=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function VR(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function HR(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=a.getActiveAttrib(e,i),l=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:a.getAttribLocation(e,l),locationSize:u}}return t}function Pl(a){return a!==""}function xv(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lp(a){return a.replace(GR,XR)}const WR=new Map;function XR(a,e){let t=ct[e];if(t===void 0){const n=WR.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lp(t)}const jR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sv(a){return a.replace(jR,YR)}function YR(a,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Mv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function qR(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===qv?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function KR(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Sa:case Ma:e="ENVMAP_TYPE_CUBE";break;case of:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $R(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ma:e="ENVMAP_MODE_REFRACTION";break}return e}function ZR(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Kv:e="ENVMAP_BLENDING_MULTIPLY";break;case HM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function QR(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function JR(a,e,t,n){const i=a.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const f=qR(t),h=KR(t),p=$R(t),m=ZR(t),g=QR(t),v=zR(t),E=VR(o),M=i.createProgram();let y,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Pl).join(`
`),x.length>0&&(x+=`
`)):(y=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),x=[Mv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?ct.tonemapping_pars_fragment:"",t.toneMapping!==ws?kR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,OR("linearToOutputTexel",t.outputColorSpace),BR(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pl).join(`
`)),l=Lp(l),l=xv(l,t),l=yv(l,t),u=Lp(u),u=xv(u,t),u=yv(u,t),l=Sv(l),u=Sv(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=R+y+l,T=R+x+u,D=gv(i,i.VERTEX_SHADER,C),N=gv(i,i.FRAGMENT_SHADER,T);i.attachShader(M,D),i.attachShader(M,N),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function I(B){if(a.debug.checkShaderErrors){const K=i.getProgramInfoLog(M).trim(),q=i.getShaderInfoLog(D).trim(),ce=i.getShaderInfoLog(N).trim();let re=!0,Q=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(re=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,M,D,N);else{const oe=vv(i,D,"vertex"),z=vv(i,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+K+`
`+oe+`
`+z)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(q===""||ce==="")&&(Q=!1);Q&&(B.diagnostics={runnable:re,programLog:K,vertexShader:{log:q,prefix:y},fragmentShader:{log:ce,prefix:x}})}i.deleteShader(D),i.deleteShader(N),F=new zc(i,M),A=HR(i,M)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(M,DR)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=N,this}let eC=0;class tC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nC(e),t.set(e,n)),n}}class nC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function iC(a,e,t,n,i,o,l){const u=new dx,f=new tC,h=new Set,p=[],m=i.logarithmicDepthBuffer,g=i.vertexTextures;let v=i.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,b,B,K,q){const ce=K.fog,re=q.geometry,Q=A.isMeshStandardMaterial?K.environment:null,oe=(A.isMeshStandardMaterial?t:e).get(A.envMap||Q),z=oe&&oe.mapping===of?oe.image.height:null,ue=E[A.type];A.precision!==null&&(v=i.getMaxPrecision(A.precision),v!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const le=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,k=le!==void 0?le.length:0;let te=0;re.morphAttributes.position!==void 0&&(te=1),re.morphAttributes.normal!==void 0&&(te=2),re.morphAttributes.color!==void 0&&(te=3);let Re,J,Z,me;if(ue){const Tt=er[ue];Re=Tt.vertexShader,J=Tt.fragmentShader}else Re=A.vertexShader,J=A.fragmentShader,f.update(A),Z=f.getVertexShaderID(A),me=f.getFragmentShaderID(A);const he=a.getRenderTarget(),ve=a.state.buffers.depth.getReversed(),we=q.isInstancedMesh===!0,He=q.isBatchedMesh===!0,lt=!!A.map,ut=!!A.matcap,Ot=!!oe,H=!!A.aoMap,On=!!A.lightMap,mt=!!A.bumpMap,ht=!!A.normalMap,Ye=!!A.displacementMap,It=!!A.emissiveMap,Xe=!!A.metalnessMap,U=!!A.roughnessMap,P=A.anisotropy>0,ne=A.clearcoat>0,ge=A.dispersion>0,xe=A.iridescence>0,de=A.sheen>0,Ge=A.transmission>0,Ce=P&&!!A.anisotropyMap,Ue=ne&&!!A.clearcoatMap,ft=ne&&!!A.clearcoatNormalMap,Ee=ne&&!!A.clearcoatRoughnessMap,ke=xe&&!!A.iridescenceMap,Ke=xe&&!!A.iridescenceThicknessMap,Qe=de&&!!A.sheenColorMap,Be=de&&!!A.sheenRoughnessMap,dt=!!A.specularMap,it=!!A.specularColorMap,Pt=!!A.specularIntensityMap,X=Ge&&!!A.transmissionMap,be=Ge&&!!A.thicknessMap,fe=!!A.gradientMap,pe=!!A.alphaMap,Ie=A.alphaTest>0,Le=!!A.alphaHash,rt=!!A.extensions;let zt=ws;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(zt=a.toneMapping);const ln={shaderID:ue,shaderType:A.type,shaderName:A.name,vertexShader:Re,fragmentShader:J,defines:A.defines,customVertexShaderID:Z,customFragmentShaderID:me,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:He,batchingColor:He&&q._colorsTexture!==null,instancing:we,instancingColor:we&&q.instanceColor!==null,instancingMorph:we&&q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:he===null?a.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Kn,alphaToCoverage:!!A.alphaToCoverage,map:lt,matcap:ut,envMap:Ot,envMapMode:Ot&&oe.mapping,envMapCubeUVHeight:z,aoMap:H,lightMap:On,bumpMap:mt,normalMap:ht,displacementMap:g&&Ye,emissiveMap:It,normalMapObjectSpace:ht&&A.normalMapType===sE,normalMapTangentSpace:ht&&A.normalMapType===lx,metalnessMap:Xe,roughnessMap:U,anisotropy:P,anisotropyMap:Ce,clearcoat:ne,clearcoatMap:Ue,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:xe,iridescenceMap:ke,iridescenceThicknessMap:Ke,sheen:de,sheenColorMap:Qe,sheenRoughnessMap:Be,specularMap:dt,specularColorMap:it,specularIntensityMap:Pt,transmission:Ge,transmissionMap:X,thicknessMap:be,gradientMap:fe,opaque:A.transparent===!1&&A.blending===da&&A.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ie,alphaHash:Le,combine:A.combine,mapUv:lt&&M(A.map.channel),aoMapUv:H&&M(A.aoMap.channel),lightMapUv:On&&M(A.lightMap.channel),bumpMapUv:mt&&M(A.bumpMap.channel),normalMapUv:ht&&M(A.normalMap.channel),displacementMapUv:Ye&&M(A.displacementMap.channel),emissiveMapUv:It&&M(A.emissiveMap.channel),metalnessMapUv:Xe&&M(A.metalnessMap.channel),roughnessMapUv:U&&M(A.roughnessMap.channel),anisotropyMapUv:Ce&&M(A.anisotropyMap.channel),clearcoatMapUv:Ue&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:ft&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(A.sheenRoughnessMap.channel),specularMapUv:dt&&M(A.specularMap.channel),specularColorMapUv:it&&M(A.specularColorMap.channel),specularIntensityMapUv:Pt&&M(A.specularIntensityMap.channel),transmissionMapUv:X&&M(A.transmissionMap.channel),thicknessMapUv:be&&M(A.thicknessMap.channel),alphaMapUv:pe&&M(A.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(ht||P),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!re.attributes.uv&&(lt||pe),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:ve,skinning:q.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:zt,decodeVideoTexture:lt&&A.map.isVideoTexture===!0&&Mt.getTransfer(A.map.colorSpace)===Ut,decodeVideoTextureEmissive:It&&A.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(A.emissiveMap.colorSpace)===Ut,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===tr,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:rt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&A.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ln.vertexUv1s=h.has(1),ln.vertexUv2s=h.has(2),ln.vertexUv3s=h.has(3),h.clear(),ln}function x(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const B in A.defines)b.push(B),b.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(R(b,A),C(b,A),b.push(a.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function R(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function C(A,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),A.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reverseDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),A.push(u.mask)}function T(A){const b=E[A.type];let B;if(b){const K=er[b];B=Kc.clone(K.uniforms)}else B=A.uniforms;return B}function D(A,b){let B;for(let K=0,q=p.length;K<q;K++){const ce=p[K];if(ce.cacheKey===b){B=ce,++B.usedTimes;break}}return B===void 0&&(B=new JR(a,b,A,o),p.push(B)),B}function N(A){if(--A.usedTimes===0){const b=p.indexOf(A);p[b]=p[p.length-1],p.pop(),A.destroy()}}function I(A){f.remove(A)}function F(){f.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:T,acquireProgram:D,releaseProgram:N,releaseShaderCache:I,programs:p,dispose:F}}function rC(){let a=new WeakMap;function e(l){return a.has(l)}function t(l){let u=a.get(l);return u===void 0&&(u={},a.set(l,u)),u}function n(l){a.delete(l)}function i(l,u,f){a.get(l)[u]=f}function o(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function sC(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Ev(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Tv(){const a=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function l(m,g,v,E,M,y){let x=a[e];return x===void 0?(x={id:m.id,object:m,geometry:g,material:v,groupOrder:E,renderOrder:m.renderOrder,z:M,group:y},a[e]=x):(x.id=m.id,x.object=m,x.geometry=g,x.material=v,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=M,x.group=y),e++,x}function u(m,g,v,E,M,y){const x=l(m,g,v,E,M,y);v.transmission>0?n.push(x):v.transparent===!0?i.push(x):t.push(x)}function f(m,g,v,E,M,y){const x=l(m,g,v,E,M,y);v.transmission>0?n.unshift(x):v.transparent===!0?i.unshift(x):t.unshift(x)}function h(m,g){t.length>1&&t.sort(m||sC),n.length>1&&n.sort(g||Ev),i.length>1&&i.sort(g||Ev)}function p(){for(let m=e,g=a.length;m<g;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:u,unshift:f,finish:p,sort:h}}function oC(){let a=new WeakMap;function e(n,i){const o=a.get(n);let l;return o===void 0?(l=new Tv,a.set(n,[l])):i>=o.length?(l=new Tv,o.push(l)):l=o[i],l}function t(){a=new WeakMap}return{get:e,dispose:t}}function aC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new nt};break;case"SpotLight":t={position:new j,direction:new j,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new j,halfWidth:new j,halfHeight:new j};break}return a[e.id]=t,t}}}function lC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let uC=0;function cC(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function fC(a){const e=new aC,t=lC(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new j);const i=new j,o=new ot,l=new ot;function u(h){let p=0,m=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let v=0,E=0,M=0,y=0,x=0,R=0,C=0,T=0,D=0,N=0,I=0;h.sort(cC);for(let A=0,b=h.length;A<b;A++){const B=h[A],K=B.color,q=B.intensity,ce=B.distance,re=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=K.r*q,m+=K.g*q,g+=K.b*q;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(B.sh.coefficients[Q],q);I++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const oe=B.shadow,z=t.get(B);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,n.directionalShadow[v]=z,n.directionalShadowMap[v]=re,n.directionalShadowMatrix[v]=B.shadow.matrix,R++}n.directional[v]=Q,v++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(K).multiplyScalar(q),Q.distance=ce,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,n.spot[M]=Q;const oe=B.shadow;if(B.map&&(n.spotLightMap[D]=B.map,D++,oe.updateMatrices(B),B.castShadow&&N++),n.spotLightMatrix[M]=oe.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,n.spotShadow[M]=z,n.spotShadowMap[M]=re,T++}M++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(K).multiplyScalar(q),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),n.rectArea[y]=Q,y++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const oe=B.shadow,z=t.get(B);z.shadowIntensity=oe.intensity,z.shadowBias=oe.bias,z.shadowNormalBias=oe.normalBias,z.shadowRadius=oe.radius,z.shadowMapSize=oe.mapSize,z.shadowCameraNear=oe.camera.near,z.shadowCameraFar=oe.camera.far,n.pointShadow[E]=z,n.pointShadowMap[E]=re,n.pointShadowMatrix[E]=B.shadow.matrix,C++}n.point[E]=Q,E++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(q),Q.groundColor.copy(B.groundColor).multiplyScalar(q),n.hemi[x]=Q,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==v||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==R||F.numPointShadows!==C||F.numSpotShadows!==T||F.numSpotMaps!==D||F.numLightProbes!==I)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=y,n.point.length=E,n.hemi.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+D-N,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=I,F.directionalLength=v,F.pointLength=E,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=R,F.numPointShadows=C,F.numSpotShadows=T,F.numSpotMaps=D,F.numLightProbes=I,n.version=uC++)}function f(h,p){let m=0,g=0,v=0,E=0,M=0;const y=p.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const C=h[x];if(C.isDirectionalLight){const T=n.directional[m];T.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(y),m++}else if(C.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(y),v++}else if(C.isRectAreaLight){const T=n.rectArea[E];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(y),l.identity(),o.copy(C.matrixWorld),o.premultiply(y),l.extractRotation(o),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(l),T.halfHeight.applyMatrix4(l),E++}else if(C.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(y),g++}else if(C.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(y),M++}}}return{setup:u,setupView:f,state:n}}function wv(a){const e=new fC(a),t=[],n=[];function i(p){h.camera=p,t.length=0,n.length=0}function o(p){t.push(p)}function l(p){n.push(p)}function u(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function hC(a){let e=new WeakMap;function t(i,o=0){const l=e.get(i);let u;return l===void 0?(u=new wv(a),e.set(i,[u])):o>=l.length?(u=new wv(a),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}const dC=`void main() {
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
}`;function mC(a,e,t){let n=new lm;const i=new Et,o=new Et,l=new At,u=new dT({depthPacking:rE}),f=new pT,h={},p=t.maxTextureSize,m={[or]:jn,[jn]:or,[tr]:tr},g=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const E=new fr;E.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new vn(E,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let x=this.type;this.render=function(N,I,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const A=a.getRenderTarget(),b=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Ts),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const q=x!==Pr&&this.type===Pr,ce=x===Pr&&this.type!==Pr;for(let re=0,Q=N.length;re<Q;re++){const oe=N[re],z=oe.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ue=z.getFrameExtents();if(i.multiply(ue),o.copy(z.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(o.x=Math.floor(p/ue.x),i.x=o.x*ue.x,z.mapSize.x=o.x),i.y>p&&(o.y=Math.floor(p/ue.y),i.y=o.y*ue.y,z.mapSize.y=o.y)),z.map===null||q===!0||ce===!0){const k=this.type!==Pr?{minFilter:Yn,magFilter:Yn}:{};z.map!==null&&z.map.dispose(),z.map=new Cs(i.x,i.y,k),z.map.texture.name=oe.name+".shadowMap",z.camera.updateProjectionMatrix()}a.setRenderTarget(z.map),a.clear();const le=z.getViewportCount();for(let k=0;k<le;k++){const te=z.getViewport(k);l.set(o.x*te.x,o.y*te.y,o.x*te.z,o.y*te.w),K.viewport(l),z.updateMatrices(oe,k),n=z.getFrustum(),T(I,F,z.camera,oe,this.type)}z.isPointLightShadow!==!0&&this.type===Pr&&R(z,F),z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(A,b,B)};function R(N,I){const F=e.update(M);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Cs(i.x,i.y)),g.uniforms.shadow_pass.value=N.map.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,a.setRenderTarget(N.mapPass),a.clear(),a.renderBufferDirect(I,null,F,g,M,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,a.setRenderTarget(N.map),a.clear(),a.renderBufferDirect(I,null,F,v,M,null)}function C(N,I,F,A){let b=null;const B=F.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)b=B;else if(b=F.isPointLight===!0?f:u,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const K=b.uuid,q=I.uuid;let ce=h[K];ce===void 0&&(ce={},h[K]=ce);let re=ce[q];re===void 0&&(re=b.clone(),ce[q]=re,I.addEventListener("dispose",D)),b=re}if(b.visible=I.visible,b.wireframe=I.wireframe,A===Pr?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:m[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=a.properties.get(b);K.light=F}return b}function T(N,I,F,A,b){if(N.visible===!1)return;if(N.layers.test(I.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===Pr)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,N.matrixWorld);const q=e.update(N),ce=N.material;if(Array.isArray(ce)){const re=q.groups;for(let Q=0,oe=re.length;Q<oe;Q++){const z=re[Q],ue=ce[z.materialIndex];if(ue&&ue.visible){const le=C(N,ue,A,b);N.onBeforeShadow(a,N,I,F,q,le,z),a.renderBufferDirect(F,null,q,le,N,z),N.onAfterShadow(a,N,I,F,q,le,z)}}}else if(ce.visible){const re=C(N,ce,A,b);N.onBeforeShadow(a,N,I,F,q,re,null),a.renderBufferDirect(F,null,q,re,N,null),N.onAfterShadow(a,N,I,F,q,re,null)}}const K=N.children;for(let q=0,ce=K.length;q<ce;q++)T(K[q],I,F,A,b)}function D(N){N.target.removeEventListener("dispose",D);for(const F in h){const A=h[F],b=N.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}const gC={[Wd]:Xd,[jd]:Kd,[Yd]:$d,[ya]:qd,[Xd]:Wd,[Kd]:jd,[$d]:Yd,[qd]:ya};function _C(a,e){function t(){let X=!1;const be=new At;let fe=null;const pe=new At(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!X&&(a.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,Le,rt,zt,ln){ln===!0&&(Ie*=zt,Le*=zt,rt*=zt),be.set(Ie,Le,rt,zt),pe.equals(be)===!1&&(a.clearColor(Ie,Le,rt,zt),pe.copy(be))},reset:function(){X=!1,fe=null,pe.set(-1,0,0,0)}}}function n(){let X=!1,be=!1,fe=null,pe=null,Ie=null;return{setReversed:function(Le){if(be!==Le){const rt=e.get("EXT_clip_control");be?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const zt=Ie;Ie=null,this.setClear(zt)}be=Le},getReversed:function(){return be},setTest:function(Le){Le?he(a.DEPTH_TEST):ve(a.DEPTH_TEST)},setMask:function(Le){fe!==Le&&!X&&(a.depthMask(Le),fe=Le)},setFunc:function(Le){if(be&&(Le=gC[Le]),pe!==Le){switch(Le){case Wd:a.depthFunc(a.NEVER);break;case Xd:a.depthFunc(a.ALWAYS);break;case jd:a.depthFunc(a.LESS);break;case ya:a.depthFunc(a.LEQUAL);break;case Yd:a.depthFunc(a.EQUAL);break;case qd:a.depthFunc(a.GEQUAL);break;case Kd:a.depthFunc(a.GREATER);break;case $d:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=Le}},setLocked:function(Le){X=Le},setClear:function(Le){Ie!==Le&&(be&&(Le=1-Le),a.clearDepth(Le),Ie=Le)},reset:function(){X=!1,fe=null,pe=null,Ie=null,be=!1}}}function i(){let X=!1,be=null,fe=null,pe=null,Ie=null,Le=null,rt=null,zt=null,ln=null;return{setTest:function(Tt){X||(Tt?he(a.STENCIL_TEST):ve(a.STENCIL_TEST))},setMask:function(Tt){be!==Tt&&!X&&(a.stencilMask(Tt),be=Tt)},setFunc:function(Tt,$n,kn){(fe!==Tt||pe!==$n||Ie!==kn)&&(a.stencilFunc(Tt,$n,kn),fe=Tt,pe=$n,Ie=kn)},setOp:function(Tt,$n,kn){(Le!==Tt||rt!==$n||zt!==kn)&&(a.stencilOp(Tt,$n,kn),Le=Tt,rt=$n,zt=kn)},setLocked:function(Tt){X=Tt},setClear:function(Tt){ln!==Tt&&(a.clearStencil(Tt),ln=Tt)},reset:function(){X=!1,be=null,fe=null,pe=null,Ie=null,Le=null,rt=null,zt=null,ln=null}}}const o=new t,l=new n,u=new i,f=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,v=[],E=null,M=!1,y=null,x=null,R=null,C=null,T=null,D=null,N=null,I=new nt(0,0,0),F=0,A=!1,b=null,B=null,K=null,q=null,ce=null;const re=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const z=a.getParameter(a.VERSION);z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(z)[1]),Q=oe>=1):z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Q=oe>=2);let ue=null,le={};const k=a.getParameter(a.SCISSOR_BOX),te=a.getParameter(a.VIEWPORT),Re=new At().fromArray(k),J=new At().fromArray(te);function Z(X,be,fe,pe){const Ie=new Uint8Array(4),Le=a.createTexture();a.bindTexture(X,Le),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let rt=0;rt<fe;rt++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(be,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,Ie):a.texImage2D(be+rt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ie);return Le}const me={};me[a.TEXTURE_2D]=Z(a.TEXTURE_2D,a.TEXTURE_2D,1),me[a.TEXTURE_CUBE_MAP]=Z(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[a.TEXTURE_2D_ARRAY]=Z(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),me[a.TEXTURE_3D]=Z(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),he(a.DEPTH_TEST),l.setFunc(ya),mt(!1),ht(u0),he(a.CULL_FACE),H(Ts);function he(X){p[X]!==!0&&(a.enable(X),p[X]=!0)}function ve(X){p[X]!==!1&&(a.disable(X),p[X]=!1)}function we(X,be){return m[X]!==be?(a.bindFramebuffer(X,be),m[X]=be,X===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=be),X===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=be),!0):!1}function He(X,be){let fe=v,pe=!1;if(X){fe=g.get(be),fe===void 0&&(fe=[],g.set(be,fe));const Ie=X.textures;if(fe.length!==Ie.length||fe[0]!==a.COLOR_ATTACHMENT0){for(let Le=0,rt=Ie.length;Le<rt;Le++)fe[Le]=a.COLOR_ATTACHMENT0+Le;fe.length=Ie.length,pe=!0}}else fe[0]!==a.BACK&&(fe[0]=a.BACK,pe=!0);pe&&a.drawBuffers(fe)}function lt(X){return E!==X?(a.useProgram(X),E=X,!0):!1}const ut={[so]:a.FUNC_ADD,[wM]:a.FUNC_SUBTRACT,[AM]:a.FUNC_REVERSE_SUBTRACT};ut[RM]=a.MIN,ut[CM]=a.MAX;const Ot={[bM]:a.ZERO,[PM]:a.ONE,[LM]:a.SRC_COLOR,[Hd]:a.SRC_ALPHA,[OM]:a.SRC_ALPHA_SATURATE,[UM]:a.DST_COLOR,[DM]:a.DST_ALPHA,[IM]:a.ONE_MINUS_SRC_COLOR,[Gd]:a.ONE_MINUS_SRC_ALPHA,[FM]:a.ONE_MINUS_DST_COLOR,[NM]:a.ONE_MINUS_DST_ALPHA,[kM]:a.CONSTANT_COLOR,[BM]:a.ONE_MINUS_CONSTANT_COLOR,[zM]:a.CONSTANT_ALPHA,[VM]:a.ONE_MINUS_CONSTANT_ALPHA};function H(X,be,fe,pe,Ie,Le,rt,zt,ln,Tt){if(X===Ts){M===!0&&(ve(a.BLEND),M=!1);return}if(M===!1&&(he(a.BLEND),M=!0),X!==TM){if(X!==y||Tt!==A){if((x!==so||T!==so)&&(a.blendEquation(a.FUNC_ADD),x=so,T=so),Tt)switch(X){case da:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case c0:a.blendFunc(a.ONE,a.ONE);break;case f0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case h0:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case da:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case c0:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case f0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case h0:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,C=null,D=null,N=null,I.set(0,0,0),F=0,y=X,A=Tt}return}Ie=Ie||be,Le=Le||fe,rt=rt||pe,(be!==x||Ie!==T)&&(a.blendEquationSeparate(ut[be],ut[Ie]),x=be,T=Ie),(fe!==R||pe!==C||Le!==D||rt!==N)&&(a.blendFuncSeparate(Ot[fe],Ot[pe],Ot[Le],Ot[rt]),R=fe,C=pe,D=Le,N=rt),(zt.equals(I)===!1||ln!==F)&&(a.blendColor(zt.r,zt.g,zt.b,ln),I.copy(zt),F=ln),y=X,A=!1}function On(X,be){X.side===tr?ve(a.CULL_FACE):he(a.CULL_FACE);let fe=X.side===jn;be&&(fe=!fe),mt(fe),X.blending===da&&X.transparent===!1?H(Ts):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),l.setFunc(X.depthFunc),l.setTest(X.depthTest),l.setMask(X.depthWrite),o.setMask(X.colorWrite);const pe=X.stencilWrite;u.setTest(pe),pe&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),It(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?he(a.SAMPLE_ALPHA_TO_COVERAGE):ve(a.SAMPLE_ALPHA_TO_COVERAGE)}function mt(X){b!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),b=X)}function ht(X){X!==MM?(he(a.CULL_FACE),X!==B&&(X===u0?a.cullFace(a.BACK):X===EM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ve(a.CULL_FACE),B=X}function Ye(X){X!==K&&(Q&&a.lineWidth(X),K=X)}function It(X,be,fe){X?(he(a.POLYGON_OFFSET_FILL),(q!==be||ce!==fe)&&(a.polygonOffset(be,fe),q=be,ce=fe)):ve(a.POLYGON_OFFSET_FILL)}function Xe(X){X?he(a.SCISSOR_TEST):ve(a.SCISSOR_TEST)}function U(X){X===void 0&&(X=a.TEXTURE0+re-1),ue!==X&&(a.activeTexture(X),ue=X)}function P(X,be,fe){fe===void 0&&(ue===null?fe=a.TEXTURE0+re-1:fe=ue);let pe=le[fe];pe===void 0&&(pe={type:void 0,texture:void 0},le[fe]=pe),(pe.type!==X||pe.texture!==be)&&(ue!==fe&&(a.activeTexture(fe),ue=fe),a.bindTexture(X,be||me[X]),pe.type=X,pe.texture=be)}function ne(){const X=le[ue];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{a.compressedTexImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{a.compressedTexImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{a.texSubImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{a.texSubImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{a.texStorage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ee(){try{a.texStorage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{a.texImage2D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{a.texImage3D.apply(a,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Re.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),Re.copy(X))}function Be(X){J.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function dt(X,be){let fe=h.get(be);fe===void 0&&(fe=new WeakMap,h.set(be,fe));let pe=fe.get(X);pe===void 0&&(pe=a.getUniformBlockIndex(be,X.name),fe.set(X,pe))}function it(X,be){const pe=h.get(be).get(X);f.get(be)!==pe&&(a.uniformBlockBinding(be,pe,X.__bindingPointIndex),f.set(be,pe))}function Pt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),l.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),p={},ue=null,le={},m={},g=new WeakMap,v=[],E=null,M=!1,y=null,x=null,R=null,C=null,T=null,D=null,N=null,I=new nt(0,0,0),F=0,A=!1,b=null,B=null,K=null,q=null,ce=null,Re.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:he,disable:ve,bindFramebuffer:we,drawBuffers:He,useProgram:lt,setBlending:H,setMaterial:On,setFlipSided:mt,setCullFace:ht,setLineWidth:Ye,setPolygonOffset:It,setScissorTest:Xe,activeTexture:U,bindTexture:P,unbindTexture:ne,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:ke,texImage3D:Ke,updateUBOMapping:dt,uniformBlockBinding:it,texStorage2D:ft,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:Qe,viewport:Be,reset:Pt}}function vC(a,e,t,n,i,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,P){return v?new OffscreenCanvas(U,P):Hl("canvas")}function M(U,P,ne){let ge=1;const xe=Xe(U);if((xe.width>ne||xe.height>ne)&&(ge=ne/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(ge*xe.width),Ge=Math.floor(ge*xe.height);m===void 0&&(m=E(de,Ge));const Ce=P?E(de,Ge):m;return Ce.width=de,Ce.height=Ge,Ce.getContext("2d").drawImage(U,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ge+")."),Ce}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){a.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(U,P,ne,ge,xe=!1){if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=P;if(P===a.RED&&(ne===a.FLOAT&&(de=a.R32F),ne===a.HALF_FLOAT&&(de=a.R16F),ne===a.UNSIGNED_BYTE&&(de=a.R8)),P===a.RED_INTEGER&&(ne===a.UNSIGNED_BYTE&&(de=a.R8UI),ne===a.UNSIGNED_SHORT&&(de=a.R16UI),ne===a.UNSIGNED_INT&&(de=a.R32UI),ne===a.BYTE&&(de=a.R8I),ne===a.SHORT&&(de=a.R16I),ne===a.INT&&(de=a.R32I)),P===a.RG&&(ne===a.FLOAT&&(de=a.RG32F),ne===a.HALF_FLOAT&&(de=a.RG16F),ne===a.UNSIGNED_BYTE&&(de=a.RG8)),P===a.RG_INTEGER&&(ne===a.UNSIGNED_BYTE&&(de=a.RG8UI),ne===a.UNSIGNED_SHORT&&(de=a.RG16UI),ne===a.UNSIGNED_INT&&(de=a.RG32UI),ne===a.BYTE&&(de=a.RG8I),ne===a.SHORT&&(de=a.RG16I),ne===a.INT&&(de=a.RG32I)),P===a.RGB_INTEGER&&(ne===a.UNSIGNED_BYTE&&(de=a.RGB8UI),ne===a.UNSIGNED_SHORT&&(de=a.RGB16UI),ne===a.UNSIGNED_INT&&(de=a.RGB32UI),ne===a.BYTE&&(de=a.RGB8I),ne===a.SHORT&&(de=a.RGB16I),ne===a.INT&&(de=a.RGB32I)),P===a.RGBA_INTEGER&&(ne===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),ne===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),ne===a.UNSIGNED_INT&&(de=a.RGBA32UI),ne===a.BYTE&&(de=a.RGBA8I),ne===a.SHORT&&(de=a.RGBA16I),ne===a.INT&&(de=a.RGBA32I)),P===a.RGB&&ne===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),P===a.RGBA){const Ge=xe?Yc:Mt.getTransfer(ge);ne===a.FLOAT&&(de=a.RGBA32F),ne===a.HALF_FLOAT&&(de=a.RGBA16F),ne===a.UNSIGNED_BYTE&&(de=Ge===Ut?a.SRGB8_ALPHA8:a.RGBA8),ne===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),ne===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function T(U,P){let ne;return U?P===null||P===go||P===Ea?ne=a.DEPTH24_STENCIL8:P===Xi?ne=a.DEPTH32F_STENCIL8:P===Bl&&(ne=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===go||P===Ea?ne=a.DEPTH_COMPONENT24:P===Xi?ne=a.DEPTH_COMPONENT32F:P===Bl&&(ne=a.DEPTH_COMPONENT16),ne}function D(U,P){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Yn&&U.minFilter!==gi?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function N(U){const P=U.target;P.removeEventListener("dispose",N),F(P),P.isVideoTexture&&p.delete(P)}function I(U){const P=U.target;P.removeEventListener("dispose",I),b(P)}function F(U){const P=n.get(U);if(P.__webglInit===void 0)return;const ne=U.source,ge=g.get(ne);if(ge){const xe=ge[P.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&A(U),Object.keys(ge).length===0&&g.delete(ne)}n.remove(U)}function A(U){const P=n.get(U);a.deleteTexture(P.__webglTexture);const ne=U.source,ge=g.get(ne);delete ge[P.__cacheKey],l.memory.textures--}function b(U){const P=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(P.__webglFramebuffer[ge]))for(let xe=0;xe<P.__webglFramebuffer[ge].length;xe++)a.deleteFramebuffer(P.__webglFramebuffer[ge][xe]);else a.deleteFramebuffer(P.__webglFramebuffer[ge]);P.__webglDepthbuffer&&a.deleteRenderbuffer(P.__webglDepthbuffer[ge])}else{if(Array.isArray(P.__webglFramebuffer))for(let ge=0;ge<P.__webglFramebuffer.length;ge++)a.deleteFramebuffer(P.__webglFramebuffer[ge]);else a.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&a.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&a.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ge=0;ge<P.__webglColorRenderbuffer.length;ge++)P.__webglColorRenderbuffer[ge]&&a.deleteRenderbuffer(P.__webglColorRenderbuffer[ge]);P.__webglDepthRenderbuffer&&a.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ne=U.textures;for(let ge=0,xe=ne.length;ge<xe;ge++){const de=n.get(ne[ge]);de.__webglTexture&&(a.deleteTexture(de.__webglTexture),l.memory.textures--),n.remove(ne[ge])}n.remove(U)}let B=0;function K(){B=0}function q(){const U=B;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),B+=1,U}function ce(U){const P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function re(U,P){const ne=n.get(U);if(U.isVideoTexture&&Ye(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ne,U,P);return}}t.bindTexture(a.TEXTURE_2D,ne.__webglTexture,a.TEXTURE0+P)}function Q(U,P){const ne=n.get(U);if(U.version>0&&ne.__version!==U.version){J(ne,U,P);return}t.bindTexture(a.TEXTURE_2D_ARRAY,ne.__webglTexture,a.TEXTURE0+P)}function oe(U,P){const ne=n.get(U);if(U.version>0&&ne.__version!==U.version){J(ne,U,P);return}t.bindTexture(a.TEXTURE_3D,ne.__webglTexture,a.TEXTURE0+P)}function z(U,P){const ne=n.get(U);if(U.version>0&&ne.__version!==U.version){Z(ne,U,P);return}t.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture,a.TEXTURE0+P)}const ue={[mo]:a.REPEAT,[xs]:a.CLAMP_TO_EDGE,[Xc]:a.MIRRORED_REPEAT},le={[Yn]:a.NEAREST,[Zv]:a.NEAREST_MIPMAP_NEAREST,[bl]:a.NEAREST_MIPMAP_LINEAR,[gi]:a.LINEAR,[Nc]:a.LINEAR_MIPMAP_NEAREST,[Nr]:a.LINEAR_MIPMAP_LINEAR},k={[oE]:a.NEVER,[hE]:a.ALWAYS,[aE]:a.LESS,[ux]:a.LEQUAL,[lE]:a.EQUAL,[fE]:a.GEQUAL,[uE]:a.GREATER,[cE]:a.NOTEQUAL};function te(U,P){if(P.type===Xi&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===gi||P.magFilter===Nc||P.magFilter===bl||P.magFilter===Nr||P.minFilter===gi||P.minFilter===Nc||P.minFilter===bl||P.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,ue[P.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,ue[P.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,ue[P.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,le[P.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,le[P.minFilter]),P.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,k[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Yn||P.minFilter!==bl&&P.minFilter!==Nr||P.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Re(U,P){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",N));const ge=P.source;let xe=g.get(ge);xe===void 0&&(xe={},g.set(ge,xe));const de=ce(P);if(de!==U.__cacheKey){xe[de]===void 0&&(xe[de]={texture:a.createTexture(),usedTimes:0},l.memory.textures++,ne=!0),xe[de].usedTimes++;const Ge=xe[U.__cacheKey];Ge!==void 0&&(xe[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&A(P)),U.__cacheKey=de,U.__webglTexture=xe[de].texture}return ne}function J(U,P,ne){let ge=a.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ge=a.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ge=a.TEXTURE_3D);const xe=Re(U,P),de=P.source;t.bindTexture(ge,U.__webglTexture,a.TEXTURE0+ne);const Ge=n.get(de);if(de.version!==Ge.__version||xe===!0){t.activeTexture(a.TEXTURE0+ne);const Ce=Mt.getPrimaries(Mt.workingColorSpace),Ue=P.colorSpace===vs?null:Mt.getPrimaries(P.colorSpace),ft=P.colorSpace===vs||Ce===Ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,P.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,P.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ee=M(P.image,!1,i.maxTextureSize);Ee=It(P,Ee);const ke=o.convert(P.format,P.colorSpace),Ke=o.convert(P.type);let Qe=C(P.internalFormat,ke,Ke,P.colorSpace,P.isVideoTexture);te(ge,P);let Be;const dt=P.mipmaps,it=P.isVideoTexture!==!0,Pt=Ge.__version===void 0||xe===!0,X=de.dataReady,be=D(P,Ee);if(P.isDepthTexture)Qe=T(P.format===Ta,P.type),Pt&&(it?t.texStorage2D(a.TEXTURE_2D,1,Qe,Ee.width,Ee.height):t.texImage2D(a.TEXTURE_2D,0,Qe,Ee.width,Ee.height,0,ke,Ke,null));else if(P.isDataTexture)if(dt.length>0){it&&Pt&&t.texStorage2D(a.TEXTURE_2D,be,Qe,dt[0].width,dt[0].height);for(let fe=0,pe=dt.length;fe<pe;fe++)Be=dt[fe],it?X&&t.texSubImage2D(a.TEXTURE_2D,fe,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(a.TEXTURE_2D,fe,Qe,Be.width,Be.height,0,ke,Ke,Be.data);P.generateMipmaps=!1}else it?(Pt&&t.texStorage2D(a.TEXTURE_2D,be,Qe,Ee.width,Ee.height),X&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ke,Ke,Ee.data)):t.texImage2D(a.TEXTURE_2D,0,Qe,Ee.width,Ee.height,0,ke,Ke,Ee.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){it&&Pt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,be,Qe,dt[0].width,dt[0].height,Ee.depth);for(let fe=0,pe=dt.length;fe<pe;fe++)if(Be=dt[fe],P.format!==bi)if(ke!==null)if(it){if(X)if(P.layerUpdates.size>0){const Ie=tv(Be.width,Be.height,P.format,P.type);for(const Le of P.layerUpdates){const rt=Be.data.subarray(Le*Ie/Be.data.BYTES_PER_ELEMENT,(Le+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,fe,0,0,Le,Be.width,Be.height,1,ke,rt)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,fe,0,0,0,Be.width,Be.height,Ee.depth,ke,Be.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,fe,Qe,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,fe,0,0,0,Be.width,Be.height,Ee.depth,ke,Ke,Be.data):t.texImage3D(a.TEXTURE_2D_ARRAY,fe,Qe,Be.width,Be.height,Ee.depth,0,ke,Ke,Be.data)}else{it&&Pt&&t.texStorage2D(a.TEXTURE_2D,be,Qe,dt[0].width,dt[0].height);for(let fe=0,pe=dt.length;fe<pe;fe++)Be=dt[fe],P.format!==bi?ke!==null?it?X&&t.compressedTexSubImage2D(a.TEXTURE_2D,fe,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(a.TEXTURE_2D,fe,Qe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(a.TEXTURE_2D,fe,0,0,Be.width,Be.height,ke,Ke,Be.data):t.texImage2D(a.TEXTURE_2D,fe,Qe,Be.width,Be.height,0,ke,Ke,Be.data)}else if(P.isDataArrayTexture)if(it){if(Pt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,be,Qe,Ee.width,Ee.height,Ee.depth),X)if(P.layerUpdates.size>0){const fe=tv(Ee.width,Ee.height,P.format,P.type);for(const pe of P.layerUpdates){const Ie=Ee.data.subarray(pe*fe/Ee.data.BYTES_PER_ELEMENT,(pe+1)*fe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,ke,Ke,Ie)}P.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ke,Ee.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Qe,Ee.width,Ee.height,Ee.depth,0,ke,Ke,Ee.data);else if(P.isData3DTexture)it?(Pt&&t.texStorage3D(a.TEXTURE_3D,be,Qe,Ee.width,Ee.height,Ee.depth),X&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ke,Ke,Ee.data)):t.texImage3D(a.TEXTURE_3D,0,Qe,Ee.width,Ee.height,Ee.depth,0,ke,Ke,Ee.data);else if(P.isFramebufferTexture){if(Pt)if(it)t.texStorage2D(a.TEXTURE_2D,be,Qe,Ee.width,Ee.height);else{let fe=Ee.width,pe=Ee.height;for(let Ie=0;Ie<be;Ie++)t.texImage2D(a.TEXTURE_2D,Ie,Qe,fe,pe,0,ke,Ke,null),fe>>=1,pe>>=1}}else if(dt.length>0){if(it&&Pt){const fe=Xe(dt[0]);t.texStorage2D(a.TEXTURE_2D,be,Qe,fe.width,fe.height)}for(let fe=0,pe=dt.length;fe<pe;fe++)Be=dt[fe],it?X&&t.texSubImage2D(a.TEXTURE_2D,fe,0,0,ke,Ke,Be):t.texImage2D(a.TEXTURE_2D,fe,Qe,ke,Ke,Be);P.generateMipmaps=!1}else if(it){if(Pt){const fe=Xe(Ee);t.texStorage2D(a.TEXTURE_2D,be,Qe,fe.width,fe.height)}X&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ke,Ke,Ee)}else t.texImage2D(a.TEXTURE_2D,0,Qe,ke,Ke,Ee);y(P)&&x(ge),Ge.__version=de.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function Z(U,P,ne){if(P.image.length!==6)return;const ge=Re(U,P),xe=P.source;t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+ne);const de=n.get(xe);if(xe.version!==de.__version||ge===!0){t.activeTexture(a.TEXTURE0+ne);const Ge=Mt.getPrimaries(Mt.workingColorSpace),Ce=P.colorSpace===vs?null:Mt.getPrimaries(P.colorSpace),Ue=P.colorSpace===vs||Ge===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,P.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,P.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const ft=P.isCompressedTexture||P.image[0].isCompressedTexture,Ee=P.image[0]&&P.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!ft&&!Ee?ke[pe]=M(P.image[pe],!0,i.maxCubemapSize):ke[pe]=Ee?P.image[pe].image:P.image[pe],ke[pe]=It(P,ke[pe]);const Ke=ke[0],Qe=o.convert(P.format,P.colorSpace),Be=o.convert(P.type),dt=C(P.internalFormat,Qe,Be,P.colorSpace),it=P.isVideoTexture!==!0,Pt=de.__version===void 0||ge===!0,X=xe.dataReady;let be=D(P,Ke);te(a.TEXTURE_CUBE_MAP,P);let fe;if(ft){it&&Pt&&t.texStorage2D(a.TEXTURE_CUBE_MAP,be,dt,Ke.width,Ke.height);for(let pe=0;pe<6;pe++){fe=ke[pe].mipmaps;for(let Ie=0;Ie<fe.length;Ie++){const Le=fe[Ie];P.format!==bi?Qe!==null?it?X&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,Le.width,Le.height,Qe,Le.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,dt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,Le.width,Le.height,Qe,Be,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,dt,Le.width,Le.height,0,Qe,Be,Le.data)}}}else{if(fe=P.mipmaps,it&&Pt){fe.length>0&&be++;const pe=Xe(ke[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,be,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,Qe,Be,ke[pe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,ke[pe].width,ke[pe].height,0,Qe,Be,ke[pe].data);for(let Ie=0;Ie<fe.length;Ie++){const rt=fe[Ie].image[pe].image;it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,rt.width,rt.height,Qe,Be,rt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,dt,rt.width,rt.height,0,Qe,Be,rt.data)}}else{it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Qe,Be,ke[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Qe,Be,ke[pe]);for(let Ie=0;Ie<fe.length;Ie++){const Le=fe[Ie];it?X&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,Qe,Be,Le.image[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,dt,Qe,Be,Le.image[pe])}}}y(P)&&x(a.TEXTURE_CUBE_MAP),de.__version=xe.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function me(U,P,ne,ge,xe,de){const Ge=o.convert(ne.format,ne.colorSpace),Ce=o.convert(ne.type),Ue=C(ne.internalFormat,Ge,Ce,ne.colorSpace),ft=n.get(P),Ee=n.get(ne);if(Ee.__renderTarget=P,!ft.__hasExternalTextures){const ke=Math.max(1,P.width>>de),Ke=Math.max(1,P.height>>de);xe===a.TEXTURE_3D||xe===a.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,Ue,ke,Ke,P.depth,0,Ge,Ce,null):t.texImage2D(xe,de,Ue,ke,Ke,0,Ge,Ce,null)}t.bindFramebuffer(a.FRAMEBUFFER,U),ht(P)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ge,xe,Ee.__webglTexture,0,mt(P)):(xe===a.TEXTURE_2D||xe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ge,xe,Ee.__webglTexture,de),t.bindFramebuffer(a.FRAMEBUFFER,null)}function he(U,P,ne){if(a.bindRenderbuffer(a.RENDERBUFFER,U),P.depthBuffer){const ge=P.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,de=T(P.stencilBuffer,xe),Ge=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=mt(P);ht(P)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,de,P.width,P.height):ne?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,de,P.width,P.height):a.renderbufferStorage(a.RENDERBUFFER,de,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ge,a.RENDERBUFFER,U)}else{const ge=P.textures;for(let xe=0;xe<ge.length;xe++){const de=ge[xe],Ge=o.convert(de.format,de.colorSpace),Ce=o.convert(de.type),Ue=C(de.internalFormat,Ge,Ce,de.colorSpace),ft=mt(P);ne&&ht(P)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ft,Ue,P.width,P.height):ht(P)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ft,Ue,P.width,P.height):a.renderbufferStorage(a.RENDERBUFFER,Ue,P.width,P.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ve(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=n.get(P.depthTexture);ge.__renderTarget=P,(!ge.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),re(P.depthTexture,0);const xe=ge.__webglTexture,de=mt(P);if(P.depthTexture.format===pa)ht(P)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,xe,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,xe,0);else if(P.depthTexture.format===Ta)ht(P)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,xe,0,de):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function we(U){const P=n.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==U.depthTexture){const ge=U.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ge){const xe=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),P.__depthDisposeCallback=xe}P.__boundDepthTexture=ge}if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ve(P.__webglFramebuffer,U)}else if(ne){P.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(a.FRAMEBUFFER,P.__webglFramebuffer[ge]),P.__webglDepthbuffer[ge]===void 0)P.__webglDepthbuffer[ge]=a.createRenderbuffer(),he(P.__webglDepthbuffer[ge],U,!1);else{const xe=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=P.__webglDepthbuffer[ge];a.bindRenderbuffer(a.RENDERBUFFER,de),a.framebufferRenderbuffer(a.FRAMEBUFFER,xe,a.RENDERBUFFER,de)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=a.createRenderbuffer(),he(P.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,xe=P.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,xe),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,xe)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function He(U,P,ne){const ge=n.get(U);P!==void 0&&me(ge.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ne!==void 0&&we(U)}function lt(U){const P=U.texture,ne=n.get(U),ge=n.get(P);U.addEventListener("dispose",I);const xe=U.textures,de=U.isWebGLCubeRenderTarget===!0,Ge=xe.length>1;if(Ge||(ge.__webglTexture===void 0&&(ge.__webglTexture=a.createTexture()),ge.__version=P.version,l.memory.textures++),de){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<P.mipmaps.length;Ue++)ne.__webglFramebuffer[Ce][Ue]=a.createFramebuffer()}else ne.__webglFramebuffer[Ce]=a.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<P.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=a.createFramebuffer()}else ne.__webglFramebuffer=a.createFramebuffer();if(Ge)for(let Ce=0,Ue=xe.length;Ce<Ue;Ce++){const ft=n.get(xe[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=a.createTexture(),l.memory.textures++)}if(U.samples>0&&ht(U)===!1){ne.__webglMultisampledFramebuffer=a.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const Ue=xe[Ce];ne.__webglColorRenderbuffer[Ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const ft=o.convert(Ue.format,Ue.colorSpace),Ee=o.convert(Ue.type),ke=C(Ue.internalFormat,ft,Ee,Ue.colorSpace,U.isXRRenderTarget===!0),Ke=mt(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,ke,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=a.createRenderbuffer(),he(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(de){t.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),te(a.TEXTURE_CUBE_MAP,P);for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ue=0;Ue<P.mipmaps.length;Ue++)me(ne.__webglFramebuffer[Ce][Ue],U,P,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else me(ne.__webglFramebuffer[Ce],U,P,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(P)&&x(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,Ue=xe.length;Ce<Ue;Ce++){const ft=xe[Ce],Ee=n.get(ft);t.bindTexture(a.TEXTURE_2D,Ee.__webglTexture),te(a.TEXTURE_2D,ft),me(ne.__webglFramebuffer,U,ft,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,0),y(ft)&&x(a.TEXTURE_2D)}t.unbindTexture()}else{let Ce=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),te(Ce,P),P.mipmaps&&P.mipmaps.length>0)for(let Ue=0;Ue<P.mipmaps.length;Ue++)me(ne.__webglFramebuffer[Ue],U,P,a.COLOR_ATTACHMENT0,Ce,Ue);else me(ne.__webglFramebuffer,U,P,a.COLOR_ATTACHMENT0,Ce,0);y(P)&&x(Ce),t.unbindTexture()}U.depthBuffer&&we(U)}function ut(U){const P=U.textures;for(let ne=0,ge=P.length;ne<ge;ne++){const xe=P[ne];if(y(xe)){const de=R(U),Ge=n.get(xe).__webglTexture;t.bindTexture(de,Ge),x(de),t.unbindTexture()}}}const Ot=[],H=[];function On(U){if(U.samples>0){if(ht(U)===!1){const P=U.textures,ne=U.width,ge=U.height;let xe=a.COLOR_BUFFER_BIT;const de=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ge=n.get(U),Ce=P.length>1;if(Ce)for(let Ue=0;Ue<P.length;Ue++)t.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<P.length;Ue++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=a.STENCIL_BUFFER_BIT)),Ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=n.get(P[Ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ft,0)}a.blitFramebuffer(0,0,ne,ge,0,0,ne,ge,xe,a.NEAREST),f===!0&&(Ot.length=0,H.length=0,Ot.push(a.COLOR_ATTACHMENT0+Ue),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ot.push(de),H.push(de),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,H)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<P.length;Ue++){t.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const ft=n.get(P[Ue]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ge.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ue,a.TEXTURE_2D,ft,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const P=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[P])}}}function mt(U){return Math.min(i.maxSamples,U.samples)}function ht(U){const P=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ye(U){const P=l.render.frame;p.get(U)!==P&&(p.set(U,P),U.update())}function It(U,P){const ne=U.colorSpace,ge=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==Kn&&ne!==vs&&(Mt.getTransfer(ne)===Ut?(ge!==bi||xe!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),P}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=re,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=z,this.rebindTextures=He,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ht}function xC(a,e){function t(n,i=vs){let o;const l=Mt.getTransfer(i);if(n===kr)return a.UNSIGNED_BYTE;if(n===Qp)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Jp)return a.UNSIGNED_SHORT_5_5_5_1;if(n===ex)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Qv)return a.BYTE;if(n===Jv)return a.SHORT;if(n===Bl)return a.UNSIGNED_SHORT;if(n===Zp)return a.INT;if(n===go)return a.UNSIGNED_INT;if(n===Xi)return a.FLOAT;if(n===$l)return a.HALF_FLOAT;if(n===tx)return a.ALPHA;if(n===nx)return a.RGB;if(n===bi)return a.RGBA;if(n===ix)return a.LUMINANCE;if(n===rx)return a.LUMINANCE_ALPHA;if(n===pa)return a.DEPTH_COMPONENT;if(n===Ta)return a.DEPTH_STENCIL;if(n===em)return a.RED;if(n===tm)return a.RED_INTEGER;if(n===sx)return a.RG;if(n===nm)return a.RG_INTEGER;if(n===im)return a.RGBA_INTEGER;if(n===Uc||n===Fc||n===Oc||n===kc)if(l===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Uc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Uc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jd||n===ep||n===tp||n===np)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Jd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ep)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===np)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ip||n===rp||n===sp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ip||n===rp)return l===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===sp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===op||n===ap||n===lp||n===up||n===cp||n===fp||n===hp||n===dp||n===pp||n===mp||n===gp||n===_p||n===vp||n===xp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===op)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ap)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===up)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_p)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xp)return l===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===yp||n===Sp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Bc)return l===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ox||n===Mp||n===Ep||n===Tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Bc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Mp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ep)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ea?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}const yC={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,l=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,n),x=this._getHandJoint(h,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,E=.005;h.inputState.pinching&&g>v+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(u.matrix.fromArray(i.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,i.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(i.linearVelocity)):u.hasLinearVelocity=!1,i.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(i.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(yC)))}return u!==null&&(u.visible=i!==null),f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const SC=`
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

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new xn,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new lr({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends xo{constructor(e,t){super();const n=this;let i=null,o=1,l=null,u="local-floor",f=1,h=null,p=null,m=null,g=null,v=null,E=null;const M=new EC,y=t.getContextAttributes();let x=null,R=null;const C=[],T=[],D=new Et;let N=null;const I=new Dn;I.viewport=new At;const F=new Dn;F.viewport=new At;const A=[I,F],b=new DT;let B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Z=C[J];return Z===void 0&&(Z=new bd,C[J]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(J){let Z=C[J];return Z===void 0&&(Z=new bd,C[J]=Z),Z.getGripSpace()},this.getHand=function(J){let Z=C[J];return Z===void 0&&(Z=new bd,C[J]=Z),Z.getHandSpace()};function q(J){const Z=T.indexOf(J.inputSource);if(Z===-1)return;const me=C[Z];me!==void 0&&(me.update(J.inputSource,J.frame,h||l),me.dispatchEvent({type:J.type,data:J.inputSource}))}function ce(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",ce),i.removeEventListener("inputsourceschange",re);for(let J=0;J<C.length;J++){const Z=T[J];Z!==null&&(T[J]=null,C[J].disconnect(Z))}B=null,K=null,M.reset(),e.setRenderTarget(x),v=null,g=null,m=null,i=null,R=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){u=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",ce),i.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const Z={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};v=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),R=new Cs(v.framebufferWidth,v.framebufferHeight,{format:bi,type:kr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Z=null,me=null,he=null;y.depth&&(he=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=y.stencil?Ta:pa,me=y.stencil?Ea:go);const ve={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:o};m=new XRWebGLBinding(i,t),g=m.createProjectionLayer(ve),i.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Cs(g.textureWidth,g.textureHeight,{format:bi,type:kr,depthTexture:new Tx(g.textureWidth,g.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await i.requestReferenceSpace(u),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function re(J){for(let Z=0;Z<J.removed.length;Z++){const me=J.removed[Z],he=T.indexOf(me);he>=0&&(T[he]=null,C[he].disconnect(me))}for(let Z=0;Z<J.added.length;Z++){const me=J.added[Z];let he=T.indexOf(me);if(he===-1){for(let we=0;we<C.length;we++)if(we>=T.length){T.push(me),he=we;break}else if(T[we]===null){T[we]=me,he=we;break}if(he===-1)break}const ve=C[he];ve&&ve.connect(me)}}const Q=new j,oe=new j;function z(J,Z,me){Q.setFromMatrixPosition(Z.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);const he=Q.distanceTo(oe),ve=Z.projectionMatrix.elements,we=me.projectionMatrix.elements,He=ve[14]/(ve[10]-1),lt=ve[14]/(ve[10]+1),ut=(ve[9]+1)/ve[5],Ot=(ve[9]-1)/ve[5],H=(ve[8]-1)/ve[0],On=(we[8]+1)/we[0],mt=He*H,ht=He*On,Ye=he/(-H+On),It=Ye*-H;if(Z.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(It),J.translateZ(Ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Xe=He+Ye,U=lt+Ye,P=mt-It,ne=ht+(he-It),ge=ut*lt/U*Xe,xe=Ot*lt/U*Xe;J.projectionMatrix.makePerspective(P,ne,ge,xe,Xe,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ue(J,Z){Z===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Z.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let Z=J.near,me=J.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(me=M.depthFar)),b.near=F.near=I.near=Z,b.far=F.far=I.far=me,(B!==b.near||K!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),B=b.near,K=b.far),I.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,b.layers.mask=I.layers.mask|F.layers.mask;const he=J.parent,ve=b.cameras;ue(b,he);for(let we=0;we<ve.length;we++)ue(ve[we],he);ve.length===2?z(b,I,F):b.projectionMatrix.copy(I.projectionMatrix),le(J,b,he)};function le(J,Z,me){me===null?J.matrix.copy(Z.matrixWorld):(J.matrix.copy(me.matrixWorld),J.matrix.invert(),J.matrix.multiply(Z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Z.projectionMatrix),J.projectionMatrixInverse.copy(Z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(J){f=J,g!==null&&(g.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let k=null;function te(J,Z){if(p=Z.getViewerPose(h||l),E=Z,p!==null){const me=p.views;v!==null&&(e.setRenderTargetFramebuffer(R,v.framebuffer),e.setRenderTarget(R));let he=!1;me.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let we=0;we<me.length;we++){const He=me[we];let lt=null;if(v!==null)lt=v.getViewport(He);else{const Ot=m.getViewSubImage(g,He);lt=Ot.viewport,we===0&&(e.setRenderTargetTextures(R,Ot.colorTexture,g.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(R))}let ut=A[we];ut===void 0&&(ut=new Dn,ut.layers.enable(we),ut.viewport=new At,A[we]=ut),ut.matrix.fromArray(He.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(He.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(lt.x,lt.y,lt.width,lt.height),we===0&&(b.matrix.copy(ut.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(ut)}const ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const we=m.getDepthInformation(me[0]);we&&we.isValid&&we.texture&&M.init(e,we,i.renderState)}}for(let me=0;me<C.length;me++){const he=T[me],ve=C[me];he!==null&&ve!==void 0&&ve.update(he,Z,h||l)}k&&k(J,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),E=null}const Re=new Px;Re.setAnimationLoop(te),this.setAnimationLoop=function(J){k=J},this.dispose=function(){}}}const Js=new ar,wC=new ot;function AC(a,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function n(y,x){x.color.getRGB(y.fogColor.value,_x(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function i(y,x,R,C,T){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(y,x):x.isMeshToonMaterial?(o(y,x),m(y,x)):x.isMeshPhongMaterial?(o(y,x),p(y,x)):x.isMeshStandardMaterial?(o(y,x),g(y,x),x.isMeshPhysicalMaterial&&v(y,x,T)):x.isMeshMatcapMaterial?(o(y,x),E(y,x)):x.isMeshDepthMaterial?o(y,x):x.isMeshDistanceMaterial?(o(y,x),M(y,x)):x.isMeshNormalMaterial?o(y,x):x.isLineBasicMaterial?(l(y,x),x.isLineDashedMaterial&&u(y,x)):x.isPointsMaterial?f(y,x,R,C):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=e.get(x),C=R.envMap,T=R.envMapRotation;C&&(y.envMap.value=C,Js.copy(T),Js.x*=-1,Js.y*=-1,Js.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),y.envMapRotation.value.setFromMatrix4(wC.makeRotationFromEuler(Js)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function l(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function u(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,R,C){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=C*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function m(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function v(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const R=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function RC(a,e,t,n){let i={},o={},l=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function f(R,C){const T=C.program;n.uniformBlockBinding(R,T)}function h(R,C){let T=i[R.id];T===void 0&&(E(R),T=p(R),i[R.id]=T,R.addEventListener("dispose",y));const D=C.program;n.updateUBOMapping(R,D);const N=e.render.frame;o[R.id]!==N&&(g(R),o[R.id]=N)}function p(R){const C=m();R.__bindingPointIndex=C;const T=a.createBuffer(),D=R.__size,N=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,D,N),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,T),T}function m(){for(let R=0;R<u;R++)if(l.indexOf(R)===-1)return l.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const C=i[R.id],T=R.uniforms,D=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let N=0,I=T.length;N<I;N++){const F=Array.isArray(T[N])?T[N]:[T[N]];for(let A=0,b=F.length;A<b;A++){const B=F[A];if(v(B,N,A,D)===!0){const K=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let ce=0;for(let re=0;re<q.length;re++){const Q=q[re],oe=M(Q);typeof Q=="number"||typeof Q=="boolean"?(B.__data[0]=Q,a.bufferSubData(a.UNIFORM_BUFFER,K+ce,B.__data)):Q.isMatrix3?(B.__data[0]=Q.elements[0],B.__data[1]=Q.elements[1],B.__data[2]=Q.elements[2],B.__data[3]=0,B.__data[4]=Q.elements[3],B.__data[5]=Q.elements[4],B.__data[6]=Q.elements[5],B.__data[7]=0,B.__data[8]=Q.elements[6],B.__data[9]=Q.elements[7],B.__data[10]=Q.elements[8],B.__data[11]=0):(Q.toArray(B.__data,ce),ce+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,K,B.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function v(R,C,T,D){const N=R.value,I=C+"_"+T;if(D[I]===void 0)return typeof N=="number"||typeof N=="boolean"?D[I]=N:D[I]=N.clone(),!0;{const F=D[I];if(typeof N=="number"||typeof N=="boolean"){if(F!==N)return D[I]=N,!0}else if(F.equals(N)===!1)return F.copy(N),!0}return!1}function E(R){const C=R.uniforms;let T=0;const D=16;for(let I=0,F=C.length;I<F;I++){const A=Array.isArray(C[I])?C[I]:[C[I]];for(let b=0,B=A.length;b<B;b++){const K=A[b],q=Array.isArray(K.value)?K.value:[K.value];for(let ce=0,re=q.length;ce<re;ce++){const Q=q[ce],oe=M(Q),z=T%D,ue=z%oe.boundary,le=z+ue;T+=ue,le!==0&&D-le<oe.storage&&(T+=D-le),K.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=oe.storage}}}const N=T%D;return N>0&&(T+=D-N),R.__size=T,R.__cache={},this}function M(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),C}function y(R){const C=R.target;C.removeEventListener("dispose",y);const T=l.indexOf(C.__bindingPointIndex);l.splice(T,1),a.deleteBuffer(i[C.id]),delete i[C.id],delete o[C.id]}function x(){for(const R in i)a.deleteBuffer(i[R]);l=[],i={},o={}}return{bind:f,update:h,dispose:x}}class CC{constructor(e={}){const{canvas:t=PE(),context:n=null,depth:i=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=l;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const R=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=ws,this.toneMappingExposure=1;const T=this;let D=!1,N=0,I=0,F=null,A=-1,b=null;const B=new At,K=new At;let q=null;const ce=new nt(0);let re=0,Q=t.width,oe=t.height,z=1,ue=null,le=null;const k=new At(0,0,Q,oe),te=new At(0,0,Q,oe);let Re=!1;const J=new lm;let Z=!1,me=!1;const he=new ot,ve=new ot,we=new j,He=new At,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ot(){return F===null?z:1}let H=n;function On(L,Y){return t.getContext(L,Y)}try{const L={alpha:!0,depth:i,stencil:o,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$p}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),H===null){const Y="webgl2";if(H=On(Y,L),H===null)throw On(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let mt,ht,Ye,It,Xe,U,P,ne,ge,xe,de,Ge,Ce,Ue,ft,Ee,ke,Ke,Qe,Be,dt,it,Pt,X;function be(){mt=new OA(H),mt.init(),it=new xC(H,mt),ht=new LA(H,mt,e,it),Ye=new _C(H,mt),ht.reverseDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),It=new zA(H),Xe=new rC,U=new vC(H,mt,Ye,Xe,ht,it,It),P=new DA(T),ne=new FA(T),ge=new YT(H),Pt=new bA(H,ge),xe=new kA(H,ge,It,Pt),de=new HA(H,xe,ge,It),Qe=new VA(H,ht,U),Ee=new IA(Xe),Ge=new iC(T,P,ne,mt,ht,Pt,Ee),Ce=new AC(T,Xe),Ue=new oC,ft=new hC(mt),Ke=new CA(T,P,ne,Ye,de,v,f),ke=new mC(T,de,ht),X=new RC(H,It,ht,Ye),Be=new PA(H,mt,It),dt=new BA(H,mt,It),It.programs=Ge.programs,T.capabilities=ht,T.extensions=mt,T.properties=Xe,T.renderLists=Ue,T.shadowMap=ke,T.state=Ye,T.info=It}be();const fe=new TC(T,H);this.xr=fe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const L=mt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=mt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(Q,oe,!1))},this.getSize=function(L){return L.set(Q,oe)},this.setSize=function(L,Y,se=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=L,oe=Y,t.width=Math.floor(L*z),t.height=Math.floor(Y*z),se===!0&&(t.style.width=L+"px",t.style.height=Y+"px"),this.setViewport(0,0,L,Y)},this.getDrawingBufferSize=function(L){return L.set(Q*z,oe*z).floor()},this.setDrawingBufferSize=function(L,Y,se){Q=L,oe=Y,z=se,t.width=Math.floor(L*se),t.height=Math.floor(Y*se),this.setViewport(0,0,L,Y)},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(k)},this.setViewport=function(L,Y,se,ae){L.isVector4?k.set(L.x,L.y,L.z,L.w):k.set(L,Y,se,ae),Ye.viewport(B.copy(k).multiplyScalar(z).round())},this.getScissor=function(L){return L.copy(te)},this.setScissor=function(L,Y,se,ae){L.isVector4?te.set(L.x,L.y,L.z,L.w):te.set(L,Y,se,ae),Ye.scissor(K.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(L){Ye.setScissorTest(Re=L)},this.setOpaqueSort=function(L){ue=L},this.setTransparentSort=function(L){le=L},this.getClearColor=function(L){return L.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(L=!0,Y=!0,se=!0){let ae=0;if(L){let G=!1;if(F!==null){const Me=F.texture.format;G=Me===im||Me===nm||Me===tm}if(G){const Me=F.texture.type,Pe=Me===kr||Me===go||Me===Bl||Me===Ea||Me===Qp||Me===Jp,Ne=Ke.getClearColor(),Fe=Ke.getClearAlpha(),Je=Ne.r,et=Ne.g,je=Ne.b;Pe?(E[0]=Je,E[1]=et,E[2]=je,E[3]=Fe,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=Je,M[1]=et,M[2]=je,M[3]=Fe,H.clearBufferiv(H.COLOR,0,M))}else ae|=H.COLOR_BUFFER_BIT}Y&&(ae|=H.DEPTH_BUFFER_BIT),se&&(ae|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ke.dispose(),Ue.dispose(),ft.dispose(),Xe.dispose(),P.dispose(),ne.dispose(),de.dispose(),Pt.dispose(),X.dispose(),Ge.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",So),fe.removeEventListener("sessionend",Hr),pr.stop()};function pe(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const L=It.autoReset,Y=ke.enabled,se=ke.autoUpdate,ae=ke.needsUpdate,G=ke.type;be(),It.autoReset=L,ke.enabled=Y,ke.autoUpdate=se,ke.needsUpdate=ae,ke.type=G}function Le(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function rt(L){const Y=L.target;Y.removeEventListener("dispose",rt),zt(Y)}function zt(L){ln(L),Xe.remove(L)}function ln(L){const Y=Xe.get(L).programs;Y!==void 0&&(Y.forEach(function(se){Ge.releaseProgram(se)}),L.isShaderMaterial&&Ge.releaseShaderCache(L))}this.renderBufferDirect=function(L,Y,se,ae,G,Me){Y===null&&(Y=lt);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,Ne=tu(L,Y,se,ae,G);Ye.setMaterial(ae,Pe);let Fe=se.index,Je=1;if(ae.wireframe===!0){if(Fe=xe.getWireframeAttribute(se),Fe===void 0)return;Je=2}const et=se.drawRange,je=se.attributes.position;let st=et.start*Je,Rt=(et.start+et.count)*Je;Me!==null&&(st=Math.max(st,Me.start*Je),Rt=Math.min(Rt,(Me.start+Me.count)*Je)),Fe!==null?(st=Math.max(st,0),Rt=Math.min(Rt,Fe.count)):je!=null&&(st=Math.max(st,0),Rt=Math.min(Rt,je.count));const Ct=Rt-st;if(Ct<0||Ct===1/0)return;Pt.setup(G,ae,Ne,se,Fe);let Gt,St=Be;if(Fe!==null&&(Gt=ge.get(Fe),St=dt,St.setIndex(Gt)),G.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*Ot()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(G.isLine){let qe=ae.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Ot()),G.isLineSegments?St.setMode(H.LINES):G.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else G.isPoints?St.setMode(H.POINTS):G.isSprite&&St.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)St.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,Qt=G._multiDrawCounts,xt=G._multiDrawCount,Sn=Fe?ge.get(Fe).bytesPerElement:1,Di=Xe.get(ae).currentProgram.getUniforms();for(let Bn=0;Bn<xt;Bn++)Di.setValue(H,"_gl_DrawID",Bn),St.render(qe[Bn]/Sn,Qt[Bn])}else if(G.isInstancedMesh)St.renderInstances(st,Ct,G.count);else if(se.isInstancedBufferGeometry){const qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Qt=Math.min(se.instanceCount,qe);St.renderInstances(st,Ct,Qt)}else St.render(st,Ct)};function Tt(L,Y,se){L.transparent===!0&&L.side===tr&&L.forceSinglePass===!1?(L.side=jn,L.needsUpdate=!0,Mo(L,Y,se),L.side=or,L.needsUpdate=!0,Mo(L,Y,se),L.side=tr):Mo(L,Y,se)}this.compile=function(L,Y,se=null){se===null&&(se=L),x=ft.get(se),x.init(Y),C.push(x),se.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),L!==se&&L.traverseVisible(function(G){G.isLight&&G.layers.test(Y.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();const ae=new Set;return L.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const Ne=Me[Pe];Tt(Ne,se,G),ae.add(Ne)}else Tt(Me,se,G),ae.add(Me)}),C.pop(),x=null,ae},this.compileAsync=function(L,Y,se=null){const ae=this.compile(L,Y,se);return new Promise(G=>{function Me(){if(ae.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&ae.delete(Pe)}),ae.size===0){G(L);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let $n=null;function kn(L){$n&&$n(L)}function So(){pr.stop()}function Hr(){pr.start()}const pr=new Px;pr.setAnimationLoop(kn),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(L){$n=L,fe.setAnimationLoop(L),L===null?pr.stop():pr.start()},fe.addEventListener("sessionstart",So),fe.addEventListener("sessionend",Hr),this.render=function(L,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,Y,F),x=ft.get(L,C.length),x.init(Y),C.push(x),ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(ve),me=this.localClippingEnabled,Z=Ee.init(this.clippingPlanes,me),y=Ue.get(L,R.length),y.init(),R.push(y),fe.enabled===!0&&fe.isPresenting===!0){const Me=T.xr.getDepthSensingMesh();Me!==null&&mr(Me,Y,-1/0,T.sortObjects)}mr(L,Y,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ue,le),ut=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ut&&Ke.addToRenderList(y,L),this.info.render.frame++,Z===!0&&Ee.beginShadows();const se=x.state.shadowsArray;ke.render(se,L,Y),Z===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,G=y.transmissive;if(x.setupLights(),Y.isArrayCamera){const Me=Y.cameras;if(G.length>0)for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++){const Fe=Me[Pe];Ds(ae,G,L,Fe)}ut&&Ke.render(L);for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++){const Fe=Me[Pe];Is(y,L,Fe,Fe.viewport)}}else G.length>0&&Ds(ae,G,L,Y),ut&&Ke.render(L),Is(y,L,Y);F!==null&&(U.updateMultisampleRenderTarget(F),U.updateRenderTargetMipmap(F)),L.isScene===!0&&L.onAfterRender(T,L,Y),Pt.resetDefaultState(),A=-1,b=null,C.pop(),C.length>0?(x=C[C.length-1],Z===!0&&Ee.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function mr(L,Y,se,ae){if(L.visible===!1)return;if(L.layers.test(Y.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Y);else if(L.isLight)x.pushLight(L),L.castShadow&&x.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||J.intersectsSprite(L)){ae&&He.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ve);const Pe=de.update(L),Ne=L.material;Ne.visible&&y.push(L,Pe,Ne,se,He.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||J.intersectsObject(L))){const Pe=de.update(L),Ne=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),He.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),He.copy(Pe.boundingSphere.center)),He.applyMatrix4(L.matrixWorld).applyMatrix4(ve)),Array.isArray(Ne)){const Fe=Pe.groups;for(let Je=0,et=Fe.length;Je<et;Je++){const je=Fe[Je],st=Ne[je.materialIndex];st&&st.visible&&y.push(L,Pe,st,se,He.z,je)}}else Ne.visible&&y.push(L,Pe,Ne,se,He.z,null)}}const Me=L.children;for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++)mr(Me[Pe],Y,se,ae)}function Is(L,Y,se,ae){const G=L.opaque,Me=L.transmissive,Pe=L.transparent;x.setupLightsView(se),Z===!0&&Ee.setGlobalState(T.clippingPlanes,se),ae&&Ye.viewport(B.copy(ae)),G.length>0&&Gr(G,Y,se),Me.length>0&&Gr(Me,Y,se),Pe.length>0&&Gr(Pe,Y,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ds(L,Y,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ae.id]===void 0&&(x.state.transmissionRenderTarget[ae.id]=new Cs(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?$l:kr,minFilter:Nr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Me=x.state.transmissionRenderTarget[ae.id],Pe=ae.viewport||B;Me.setSize(Pe.z,Pe.w);const Ne=T.getRenderTarget();T.setRenderTarget(Me),T.getClearColor(ce),re=T.getClearAlpha(),re<1&&T.setClearColor(16777215,.5),T.clear(),ut&&Ke.render(se);const Fe=T.toneMapping;T.toneMapping=ws;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),x.setupLightsView(ae),Z===!0&&Ee.setGlobalState(T.clippingPlanes,ae),Gr(L,se,ae),U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let je=0,st=Y.length;je<st;je++){const Rt=Y[je],Ct=Rt.object,Gt=Rt.geometry,St=Rt.material,qe=Rt.group;if(St.side===tr&&Ct.layers.test(ae.layers)){const Qt=St.side;St.side=jn,St.needsUpdate=!0,Jl(Ct,se,ae,Gt,St,qe),St.side=Qt,St.needsUpdate=!0,et=!0}}et===!0&&(U.updateMultisampleRenderTarget(Me),U.updateRenderTargetMipmap(Me))}T.setRenderTarget(Ne),T.setClearColor(ce,re),Je!==void 0&&(ae.viewport=Je),T.toneMapping=Fe}function Gr(L,Y,se){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let G=0,Me=L.length;G<Me;G++){const Pe=L[G],Ne=Pe.object,Fe=Pe.geometry,Je=ae===null?Pe.material:ae,et=Pe.group;Ne.layers.test(se.layers)&&Jl(Ne,Y,se,Fe,Je,et)}}function Jl(L,Y,se,ae,G,Me){L.onBeforeRender(T,Y,se,ae,G,Me),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),G.onBeforeRender(T,Y,se,ae,L,Me),G.transparent===!0&&G.side===tr&&G.forceSinglePass===!1?(G.side=jn,G.needsUpdate=!0,T.renderBufferDirect(se,Y,ae,G,L,Me),G.side=or,G.needsUpdate=!0,T.renderBufferDirect(se,Y,ae,G,L,Me),G.side=tr):T.renderBufferDirect(se,Y,ae,G,L,Me),L.onAfterRender(T,Y,se,ae,G,Me)}function Mo(L,Y,se){Y.isScene!==!0&&(Y=lt);const ae=Xe.get(L),G=x.state.lights,Me=x.state.shadowsArray,Pe=G.state.version,Ne=Ge.getParameters(L,G.state,Me,Y,se),Fe=Ge.getProgramCacheKey(Ne);let Je=ae.programs;ae.environment=L.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(L.isMeshStandardMaterial?ne:P).get(L.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&L.envMap===null?Y.environmentRotation:L.envMapRotation,Je===void 0&&(L.addEventListener("dispose",rt),Je=new Map,ae.programs=Je);let et=Je.get(Fe);if(et!==void 0){if(ae.currentProgram===et&&ae.lightsStateVersion===Pe)return qi(L,Ne),et}else Ne.uniforms=Ge.getUniforms(L),L.onBeforeCompile(Ne,T),et=Ge.acquireProgram(Ne,Fe),Je.set(Fe,et),ae.uniforms=Ne.uniforms;const je=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(je.clippingPlanes=Ee.uniform),qi(L,Ne),ae.needsLights=mf(L),ae.lightsStateVersion=Pe,ae.needsLights&&(je.ambientLightColor.value=G.state.ambient,je.lightProbe.value=G.state.probe,je.directionalLights.value=G.state.directional,je.directionalLightShadows.value=G.state.directionalShadow,je.spotLights.value=G.state.spot,je.spotLightShadows.value=G.state.spotShadow,je.rectAreaLights.value=G.state.rectArea,je.ltc_1.value=G.state.rectAreaLTC1,je.ltc_2.value=G.state.rectAreaLTC2,je.pointLights.value=G.state.point,je.pointLightShadows.value=G.state.pointShadow,je.hemisphereLights.value=G.state.hemi,je.directionalShadowMap.value=G.state.directionalShadowMap,je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,je.spotShadowMap.value=G.state.spotShadowMap,je.spotLightMatrix.value=G.state.spotLightMatrix,je.spotLightMap.value=G.state.spotLightMap,je.pointShadowMap.value=G.state.pointShadowMap,je.pointShadowMatrix.value=G.state.pointShadowMatrix),ae.currentProgram=et,ae.uniformsList=null,et}function eu(L){if(L.uniformsList===null){const Y=L.currentProgram.getUniforms();L.uniformsList=zc.seqWithValue(Y.seq,L.uniforms)}return L.uniformsList}function qi(L,Y){const se=Xe.get(L);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function tu(L,Y,se,ae,G){Y.isScene!==!0&&(Y=lt),U.resetTextureUnits();const Me=Y.fog,Pe=ae.isMeshStandardMaterial?Y.environment:null,Ne=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kn,Fe=(ae.isMeshStandardMaterial?ne:P).get(ae.envMap||Pe),Je=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,et=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),je=!!se.morphAttributes.position,st=!!se.morphAttributes.normal,Rt=!!se.morphAttributes.color;let Ct=ws;ae.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const Gt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,St=Gt!==void 0?Gt.length:0,qe=Xe.get(ae),Qt=x.state.lights;if(Z===!0&&(me===!0||L!==b)){const tn=L===b&&ae.id===A;Ee.setState(ae,L,tn)}let xt=!1;ae.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Qt.state.version||qe.outputColorSpace!==Ne||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==Fe||ae.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==Je||qe.vertexTangents!==et||qe.morphTargets!==je||qe.morphNormals!==st||qe.morphColors!==Rt||qe.toneMapping!==Ct||qe.morphTargetsCount!==St)&&(xt=!0):(xt=!0,qe.__version=ae.version);let Sn=qe.currentProgram;xt===!0&&(Sn=Mo(ae,Y,G));let Di=!1,Bn=!1,Ns=!1;const Nt=Sn.getUniforms(),zn=qe.uniforms;if(Ye.useProgram(Sn.program)&&(Di=!0,Bn=!0,Ns=!0),ae.id!==A&&(A=ae.id,Bn=!0),Di||b!==L){Ye.buffers.depth.getReversed()?(he.copy(L.projectionMatrix),IE(he),DE(he),Nt.setValue(H,"projectionMatrix",he)):Nt.setValue(H,"projectionMatrix",L.projectionMatrix),Nt.setValue(H,"viewMatrix",L.matrixWorldInverse);const An=Nt.map.cameraPosition;An!==void 0&&An.setValue(H,we.setFromMatrixPosition(L.matrixWorld)),ht.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Bn=!0,Ns=!0)}if(G.isSkinnedMesh){Nt.setOptional(H,G,"bindMatrix"),Nt.setOptional(H,G,"bindMatrixInverse");const tn=G.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Nt.setValue(H,"boneTexture",tn.boneTexture,U))}G.isBatchedMesh&&(Nt.setOptional(H,G,"batchingTexture"),Nt.setValue(H,"batchingTexture",G._matricesTexture,U),Nt.setOptional(H,G,"batchingIdTexture"),Nt.setValue(H,"batchingIdTexture",G._indirectTexture,U),Nt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(H,"batchingColorTexture",G._colorsTexture,U));const wn=se.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Qe.update(G,se,Sn),(Bn||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Nt.setValue(H,"receiveShadow",G.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(zn.envMap.value=Fe,zn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(zn.envMapIntensity.value=Y.environmentIntensity),Bn&&(Nt.setValue(H,"toneMappingExposure",T.toneMappingExposure),qe.needsLights&&nu(zn,Ns),Me&&ae.fog===!0&&Ce.refreshFogUniforms(zn,Me),Ce.refreshMaterialUniforms(zn,ae,z,oe,x.state.transmissionRenderTarget[L.id]),zc.upload(H,eu(qe),zn,U)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(zc.upload(H,eu(qe),zn,U),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Nt.setValue(H,"center",G.center),Nt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(H,"normalMatrix",G.normalMatrix),Nt.setValue(H,"modelMatrix",G.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const tn=ae.uniformsGroups;for(let An=0,Us=tn.length;An<Us;An++){const gt=tn[An];X.update(gt,Sn),X.bind(gt,Sn)}}return Sn}function nu(L,Y){L.ambientLightColor.needsUpdate=Y,L.lightProbe.needsUpdate=Y,L.directionalLights.needsUpdate=Y,L.directionalLightShadows.needsUpdate=Y,L.pointLights.needsUpdate=Y,L.pointLightShadows.needsUpdate=Y,L.spotLights.needsUpdate=Y,L.spotLightShadows.needsUpdate=Y,L.rectAreaLights.needsUpdate=Y,L.hemisphereLights.needsUpdate=Y}function mf(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(L,Y,se){Xe.get(L.texture).__webglTexture=Y,Xe.get(L.depthTexture).__webglTexture=se;const ae=Xe.get(L);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Y){const se=Xe.get(L);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(L,Y=0,se=0){F=L,N=Y,I=se;let ae=!0,G=null,Me=!1,Pe=!1;if(L){const Fe=Xe.get(L);if(Fe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),ae=!1;else if(Fe.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(Fe.__hasExternalTextures)U.rebindTextures(L,Xe.get(L.texture).__webglTexture,Xe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const je=L.depthTexture;if(Fe.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(L.width!==je.image.width||L.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const Je=L.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Pe=!0);const et=Xe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(et[Y])?G=et[Y][se]:G=et[Y],Me=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?G=Xe.get(L).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[se]:G=et,B.copy(L.viewport),K.copy(L.scissor),q=L.scissorTest}else B.copy(k).multiplyScalar(z).floor(),K.copy(te).multiplyScalar(z).floor(),q=Re;if(Ye.bindFramebuffer(H.FRAMEBUFFER,G)&&ae&&Ye.drawBuffers(L,G),Ye.viewport(B),Ye.scissor(K),Ye.setScissorTest(q),Me){const Fe=Xe.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,se)}else if(Pe){const Fe=Xe.get(L.texture),Je=Y||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,se||0,Je)}A=-1},this.readRenderTargetPixels=function(L,Y,se,ae,G,Me,Pe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const Fe=L.texture,Je=Fe.format,et=Fe.type;if(!ht.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=L.width-ae&&se>=0&&se<=L.height-G&&H.readPixels(Y,se,ae,G,it.convert(Je),it.convert(et),Me)}finally{const Fe=F!==null?Xe.get(F).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(L,Y,se,ae,G,Me,Pe){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){const Fe=L.texture,Je=Fe.format,et=Fe.type;if(!ht.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=L.width-ae&&se>=0&&se<=L.height-G){Ye.bindFramebuffer(H.FRAMEBUFFER,Ne);const je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(Y,se,ae,G,it.convert(Je),it.convert(et),0);const st=F!==null?Xe.get(F).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,st);const Rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await LE(H,Rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(je),H.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Y=null,se=0){L.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1]);const ae=Math.pow(2,-se),G=Math.floor(L.image.width*ae),Me=Math.floor(L.image.height*ae),Pe=Y!==null?Y.x:0,Ne=Y!==null?Y.y:0;U.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,Pe,Ne,G,Me),Ye.unbindTexture()};const iu=H.createFramebuffer(),ru=H.createFramebuffer();this.copyTextureToTexture=function(L,Y,se=null,ae=null,G=0,Me=null){L.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,L=arguments[1],Y=arguments[2],Me=arguments[3]||0,se=null),Me===null&&(G!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=G,G=0):Me=0);let Pe,Ne,Fe,Je,et,je,st,Rt,Ct;const Gt=L.isCompressedTexture?L.mipmaps[Me]:L.image;if(se!==null)Pe=se.max.x-se.min.x,Ne=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,Je=se.min.x,et=se.min.y,je=se.isBox3?se.min.z:0;else{const wn=Math.pow(2,-G);Pe=Math.floor(Gt.width*wn),Ne=Math.floor(Gt.height*wn),L.isDataArrayTexture?Fe=Gt.depth:L.isData3DTexture?Fe=Math.floor(Gt.depth*wn):Fe=1,Je=0,et=0,je=0}ae!==null?(st=ae.x,Rt=ae.y,Ct=ae.z):(st=0,Rt=0,Ct=0);const St=it.convert(Y.format),qe=it.convert(Y.type);let Qt;Y.isData3DTexture?(U.setTexture3D(Y,0),Qt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(U.setTexture2DArray(Y,0),Qt=H.TEXTURE_2D_ARRAY):(U.setTexture2D(Y,0),Qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const xt=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Di=H.getParameter(H.UNPACK_SKIP_PIXELS),Bn=H.getParameter(H.UNPACK_SKIP_ROWS),Ns=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Gt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),H.pixelStorei(H.UNPACK_SKIP_ROWS,et),H.pixelStorei(H.UNPACK_SKIP_IMAGES,je);const Nt=L.isDataArrayTexture||L.isData3DTexture,zn=Y.isDataArrayTexture||Y.isData3DTexture;if(L.isDepthTexture){const wn=Xe.get(L),tn=Xe.get(Y),An=Xe.get(wn.__renderTarget),Us=Xe.get(tn.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let gt=0;gt<Fe;gt++)Nt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(L).__webglTexture,G,je+gt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xe.get(Y).__webglTexture,Me,Ct+gt)),H.blitFramebuffer(Je,et,Pe,Ne,st,Rt,Pe,Ne,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||L.isRenderTargetTexture||Xe.has(L)){const wn=Xe.get(L),tn=Xe.get(Y);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,iu),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,ru);for(let An=0;An<Fe;An++)Nt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,G,je+An):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,G),zn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tn.__webglTexture,Me,Ct+An):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tn.__webglTexture,Me),G!==0?H.blitFramebuffer(Je,et,Pe,Ne,st,Rt,Pe,Ne,H.COLOR_BUFFER_BIT,H.NEAREST):zn?H.copyTexSubImage3D(Qt,Me,st,Rt,Ct+An,Je,et,Pe,Ne):H.copyTexSubImage2D(Qt,Me,st,Rt,Je,et,Pe,Ne);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zn?L.isDataTexture||L.isData3DTexture?H.texSubImage3D(Qt,Me,st,Rt,Ct,Pe,Ne,Fe,St,qe,Gt.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Qt,Me,st,Rt,Ct,Pe,Ne,Fe,St,Gt.data):H.texSubImage3D(Qt,Me,st,Rt,Ct,Pe,Ne,Fe,St,qe,Gt):L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,st,Rt,Pe,Ne,St,qe,Gt.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,st,Rt,Gt.width,Gt.height,St,Gt.data):H.texSubImage2D(H.TEXTURE_2D,Me,st,Rt,Pe,Ne,St,qe,Gt);H.pixelStorei(H.UNPACK_ROW_LENGTH,xt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Di),H.pixelStorei(H.UNPACK_SKIP_ROWS,Bn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ns),Me===0&&Y.generateMipmaps&&H.generateMipmap(Qt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(L,Y,se=null,ae=null,G=0){return L.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,L=arguments[2],Y=arguments[3],G=arguments[4]||0),aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Y,se,ae,G)},this.initRenderTarget=function(L){Xe.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),Ye.unbindTexture()},this.resetState=function(){N=0,I=0,F=null,Ye.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}class ff extends vn{constructor(){const e=ff.SkyShader,t=new lr({name:e.name,uniforms:Kc.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:jn,depthWrite:!1});super(new Fa(1,1,1),t),this.isSky=!0}}ff.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new j},up:{value:new j(0,1,0)}},vertexShader:`
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

		}`};function Av(a,e){if(e===nE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===wp||e===ax){let t=a.getIndex();if(t===null){const l=[],u=a.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)l.push(f);a.setIndex(l),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===wp)for(let l=1;l<=n;l++)i.push(t.getX(0)),i.push(t.getX(l)),i.push(t.getX(l+1));else for(let l=0;l<n;l++)l%2===0?(i.push(t.getX(l)),i.push(t.getX(l+1)),i.push(t.getX(l+2))):(i.push(t.getX(l+2)),i.push(t.getX(l+1)),i.push(t.getX(l)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=a.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class bC extends Ba{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new NC(t)}),this.register(function(t){return new UC(t)}),this.register(function(t){return new WC(t)}),this.register(function(t){return new XC(t)}),this.register(function(t){return new jC(t)}),this.register(function(t){return new OC(t)}),this.register(function(t){return new kC(t)}),this.register(function(t){return new BC(t)}),this.register(function(t){return new zC(t)}),this.register(function(t){return new DC(t)}),this.register(function(t){return new VC(t)}),this.register(function(t){return new FC(t)}),this.register(function(t){return new GC(t)}),this.register(function(t){return new HC(t)}),this.register(function(t){return new LC(t)}),this.register(function(t){return new YC(t)}),this.register(function(t){return new qC(t)})}load(e,t,n,i){const o=this;let l;if(this.resourcePath!=="")l=this.resourcePath;else if(this.path!==""){const h=Ul.extractUrlBase(e);l=Ul.resolveURL(h,this.path)}else l=Ul.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){i?i(h):console.error(h),o.manager.itemError(e),o.manager.itemEnd(e)},f=new Cx(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{o.parse(h,l,function(p){t(p),o.manager.itemEnd(e)},u)}catch(p){u(p)}},n,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let o;const l={},u={},f=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===Ux){try{l[vt.KHR_BINARY_GLTF]=new KC(e)}catch(m){i&&i(m);return}o=JSON.parse(l[vt.KHR_BINARY_GLTF].content)}else o=JSON.parse(f.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new lb(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let p=0;p<this.pluginCallbacks.length;p++){const m=this.pluginCallbacks[p](h);m.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[m.name]=m,l[m.name]=!0}if(o.extensionsUsed)for(let p=0;p<o.extensionsUsed.length;++p){const m=o.extensionsUsed[p],g=o.extensionsRequired||[];switch(m){case vt.KHR_MATERIALS_UNLIT:l[m]=new IC;break;case vt.KHR_DRACO_MESH_COMPRESSION:l[m]=new $C(o,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:l[m]=new ZC;break;case vt.KHR_MESH_QUANTIZATION:l[m]=new QC;break;default:g.indexOf(m)>=0&&u[m]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+m+'".')}}h.setExtensions(l),h.setPlugins(u),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,o){n.parse(e,t,i,o)})}}function PC(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LC{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const o=t[n];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const o=t.json,f=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e];let h;const p=new nt(16777215);f.color!==void 0&&p.setRGB(f.color[0],f.color[1],f.color[2],Kn);const m=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new Pp(p),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new bT(p),h.distance=m;break;case"spot":h=new RT(p),h.distance=m,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),h.decay=2,Lr(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,o=n.json.nodes[e],u=(o.extensions&&o.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return n._getNodeRef(t.cache,u,f)})}}class IC{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return ao}extendParams(e,t,n){const i=[];e.color=new nt(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const l=o.baseColorFactor;e.color.setRGB(l[0],l[1],l[2],Kn),e.opacity=l[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",o.baseColorTexture,Tn))}return Promise.all(i)}}class DC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class NC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],l=i.extensions[this.name];if(l.clearcoatFactor!==void 0&&(t.clearcoat=l.clearcoatFactor),l.clearcoatTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatMap",l.clearcoatTexture)),l.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=l.clearcoatRoughnessFactor),l.clearcoatRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"clearcoatRoughnessMap",l.clearcoatRoughnessTexture)),l.clearcoatNormalTexture!==void 0&&(o.push(n.assignTexture(t,"clearcoatNormalMap",l.clearcoatNormalTexture)),l.clearcoatNormalTexture.scale!==void 0)){const u=l.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Et(u,u)}return Promise.all(o)}}class UC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class FC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],l=i.extensions[this.name];return l.iridescenceFactor!==void 0&&(t.iridescence=l.iridescenceFactor),l.iridescenceTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceMap",l.iridescenceTexture)),l.iridescenceIor!==void 0&&(t.iridescenceIOR=l.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),l.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=l.iridescenceThicknessMinimum),l.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=l.iridescenceThicknessMaximum),l.iridescenceThicknessTexture!==void 0&&o.push(n.assignTexture(t,"iridescenceThicknessMap",l.iridescenceThicknessTexture)),Promise.all(o)}}class OC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1;const l=i.extensions[this.name];if(l.sheenColorFactor!==void 0){const u=l.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Kn)}return l.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=l.sheenRoughnessFactor),l.sheenColorTexture!==void 0&&o.push(n.assignTexture(t,"sheenColorMap",l.sheenColorTexture,Tn)),l.sheenRoughnessTexture!==void 0&&o.push(n.assignTexture(t,"sheenRoughnessMap",l.sheenRoughnessTexture)),Promise.all(o)}}class kC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],l=i.extensions[this.name];return l.transmissionFactor!==void 0&&(t.transmission=l.transmissionFactor),l.transmissionTexture!==void 0&&o.push(n.assignTexture(t,"transmissionMap",l.transmissionTexture)),Promise.all(o)}}class BC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],l=i.extensions[this.name];t.thickness=l.thicknessFactor!==void 0?l.thicknessFactor:0,l.thicknessTexture!==void 0&&o.push(n.assignTexture(t,"thicknessMap",l.thicknessTexture)),t.attenuationDistance=l.attenuationDistance||1/0;const u=l.attenuationColor||[1,1,1];return t.attenuationColor=new nt().setRGB(u[0],u[1],u[2],Kn),Promise.all(o)}}class zC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=i.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class VC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],l=i.extensions[this.name];t.specularIntensity=l.specularFactor!==void 0?l.specularFactor:1,l.specularTexture!==void 0&&o.push(n.assignTexture(t,"specularIntensityMap",l.specularTexture));const u=l.specularColorFactor||[1,1,1];return t.specularColor=new nt().setRGB(u[0],u[1],u[2],Kn),l.specularColorTexture!==void 0&&o.push(n.assignTexture(t,"specularColorMap",l.specularColorTexture,Tn)),Promise.all(o)}}class HC{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],l=i.extensions[this.name];return t.bumpScale=l.bumpFactor!==void 0?l.bumpFactor:1,l.bumpTexture!==void 0&&o.push(n.assignTexture(t,"bumpMap",l.bumpTexture)),Promise.all(o)}}class GC{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const o=[],l=i.extensions[this.name];return l.anisotropyStrength!==void 0&&(t.anisotropy=l.anisotropyStrength),l.anisotropyRotation!==void 0&&(t.anisotropyRotation=l.anisotropyRotation),l.anisotropyTexture!==void 0&&o.push(n.assignTexture(t,"anisotropyMap",l.anisotropyTexture)),Promise.all(o)}}class WC{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const o=i.extensions[this.name],l=t.options.ktx2Loader;if(!l){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o.source,l)}}class XC{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],u=i.images[l.source];let f=n.textureLoader;if(u.uri){const h=n.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,l.source,f);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jC{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,o=i.textures[e];if(!o.extensions||!o.extensions[t])return null;const l=o.extensions[t],u=i.images[l.source];let f=n.textureLoader;if(u.uri){const h=n.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,l.source,f);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YC{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],o=this.parser.getDependency("buffer",i.buffer),l=this.parser.options.meshoptDecoder;if(!l||!l.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(u){const f=i.byteOffset||0,h=i.byteLength||0,p=i.count,m=i.byteStride,g=new Uint8Array(u,f,h);return l.decodeGltfBufferAsync?l.decodeGltfBufferAsync(p,m,g,i.mode,i.filter).then(function(v){return v.buffer}):l.ready.then(function(){const v=new ArrayBuffer(p*m);return l.decodeGltfBuffer(new Uint8Array(v),p,m,g,i.mode,i.filter),v})})}else return null}}class qC{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Ci.TRIANGLES&&h.mode!==Ci.TRIANGLE_STRIP&&h.mode!==Ci.TRIANGLE_FAN&&h.mode!==void 0)return null;const l=n.extensions[this.name].attributes,u=[],f={};for(const h in l)u.push(this.parser.getDependency("accessor",l[h]).then(p=>(f[h]=p,f[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const p=h.pop(),m=p.isGroup?p.children:[p],g=h[0].count,v=[];for(const E of m){const M=new ot,y=new j,x=new Yi,R=new j(1,1,1),C=new aT(E.geometry,E.material,g);for(let T=0;T<g;T++)f.TRANSLATION&&y.fromBufferAttribute(f.TRANSLATION,T),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,T),f.SCALE&&R.fromBufferAttribute(f.SCALE,T),C.setMatrixAt(T,M.compose(y,x,R));for(const T in f)if(T==="_COLOR_0"){const D=f[T];C.instanceColor=new Rp(D.array,D.itemSize,D.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&E.geometry.setAttribute(T,f[T]);Zt.prototype.copy.call(C,E),this.parser.assignFinalMaterial(C),v.push(C)}return p.isGroup?(p.clear(),p.add(...v),p):v[0]}))}}const Ux="glTF",Rl=12,Rv={JSON:1313821514,BIN:5130562};class KC{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ux)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Rl,o=new DataView(e,Rl);let l=0;for(;l<i;){const u=o.getUint32(l,!0);l+=4;const f=o.getUint32(l,!0);if(l+=4,f===Rv.JSON){const h=new Uint8Array(e,Rl+l,u);this.content=n.decode(h)}else if(f===Rv.BIN){const h=Rl+l;this.body=e.slice(h,h+u)}l+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $C{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,o=e.extensions[this.name].bufferView,l=e.extensions[this.name].attributes,u={},f={},h={};for(const p in l){const m=Ip[p]||p.toLowerCase();u[m]=l[p]}for(const p in e.attributes){const m=Ip[p]||p.toLowerCase();if(l[p]!==void 0){const g=n.accessors[e.attributes[p]],v=ga[g.componentType];h[m]=v.name,f[m]=g.normalized===!0}}return t.getDependency("bufferView",o).then(function(p){return new Promise(function(m,g){i.decodeDracoFile(p,function(v){for(const E in v.attributes){const M=v.attributes[E],y=f[E];y!==void 0&&(M.normalized=y)}m(v)},u,h,Kn,g)})})}}class ZC{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QC{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Fx extends Zl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i*3+i;for(let l=0;l!==i;l++)t[l]=n[o+l];return t}interpolate_(e,t,n,i){const o=this.resultBuffer,l=this.sampleValues,u=this.valueSize,f=u*2,h=u*3,p=i-t,m=(n-t)/p,g=m*m,v=g*m,E=e*h,M=E-h,y=-2*v+3*g,x=v-g,R=1-y,C=x-g+m;for(let T=0;T!==u;T++){const D=l[M+T+u],N=l[M+T+f]*p,I=l[E+T+u],F=l[E+T]*p;o[T]=R*D+C*N+y*I+x*F}return o}}const JC=new Yi;class eb extends Fx{interpolate_(e,t,n,i){const o=super.interpolate_(e,t,n,i);return JC.fromArray(o).normalize().toArray(o),o}}const Ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cv={9728:Yn,9729:gi,9984:Zv,9985:Nc,9986:bl,9987:Nr},bv={33071:xs,33648:Xc,10497:mo},Pd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ip={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tb={CUBICSPLINE:void 0,LINEAR:Vl,STEP:zl},Ld={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nb(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new lf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:or})),a.DefaultMaterial}function eo(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Lr(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ib(a,e,t){let n=!1,i=!1,o=!1;for(let h=0,p=e.length;h<p;h++){const m=e[h];if(m.POSITION!==void 0&&(n=!0),m.NORMAL!==void 0&&(i=!0),m.COLOR_0!==void 0&&(o=!0),n&&i&&o)break}if(!n&&!i&&!o)return Promise.resolve(a);const l=[],u=[],f=[];for(let h=0,p=e.length;h<p;h++){const m=e[h];if(n){const g=m.POSITION!==void 0?t.getDependency("accessor",m.POSITION):a.attributes.position;l.push(g)}if(i){const g=m.NORMAL!==void 0?t.getDependency("accessor",m.NORMAL):a.attributes.normal;u.push(g)}if(o){const g=m.COLOR_0!==void 0?t.getDependency("accessor",m.COLOR_0):a.attributes.color;f.push(g)}}return Promise.all([Promise.all(l),Promise.all(u),Promise.all(f)]).then(function(h){const p=h[0],m=h[1],g=h[2];return n&&(a.morphAttributes.position=p),i&&(a.morphAttributes.normal=m),o&&(a.morphAttributes.color=g),a.morphTargetsRelative=!0,a})}function rb(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sb(a){let e;const t=a.extensions&&a.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Id(t.attributes):e=a.indices+":"+Id(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+Id(a.targets[n]);return e}function Id(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Dp(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ob(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ab=new ot;class lb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PC,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,o=!1,l=-1;if(typeof navigator<"u"){const u=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);i=n&&f?parseInt(f[1],10):-1,o=u.indexOf("Firefox")>-1,l=o?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||o&&l<98?this.textureLoader=new bx(this.options.manager):this.textureLoader=new IT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(l){return l._markDefs&&l._markDefs()}),Promise.all(this._invokeAll(function(l){return l.beforeRoot&&l.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(l){const u={scene:l[0][i.scene||0],scenes:l[0],animations:l[1],cameras:l[2],asset:i.asset,parser:n,userData:{}};return eo(o,u,i),Lr(u,i),Promise.all(n._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,o=t.length;i<o;i++){const l=t[i].joints;for(let u=0,f=l.length;u<f;u++)e[l[u]].isBone=!0}for(let i=0,o=e.length;i<o;i++){const l=e[i];l.mesh!==void 0&&(this._addNodeRef(this.meshCache,l.mesh),l.skin!==void 0&&(n[l.mesh].isSkinnedMesh=!0)),l.camera!==void 0&&this._addNodeRef(this.cameraCache,l.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),o=(l,u)=>{const f=this.associations.get(l);f!=null&&this.associations.set(u,f);for(const[h,p]of l.children.entries())o(p,u.children[h])};return o(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const o=e(t[i]);o&&n.push(o)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":i=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(o,l){return n.getDependency(e,l)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(o,l){n.load(Ul.resolveURL(t.uri,i.path),o,void 0,function(){l(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,o=t.byteOffset||0;return n.slice(o,o+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const l=Pd[i.type],u=ga[i.componentType],f=i.normalized===!0,h=new u(i.count*l);return Promise.resolve(new qn(h,l,f))}const o=[];return i.bufferView!==void 0?o.push(this.getDependency("bufferView",i.bufferView)):o.push(null),i.sparse!==void 0&&(o.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(o).then(function(l){const u=l[0],f=Pd[i.type],h=ga[i.componentType],p=h.BYTES_PER_ELEMENT,m=p*f,g=i.byteOffset||0,v=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,E=i.normalized===!0;let M,y;if(v&&v!==m){const x=Math.floor(g/v),R="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count;let C=t.cache.get(R);C||(M=new h(u,x*v,i.count*v/p),C=new nT(M,v/p),t.cache.add(R,C)),y=new om(C,f,g%v/p,E)}else u===null?M=new h(i.count*f):M=new h(u,g,i.count*f),y=new qn(M,f,E);if(i.sparse!==void 0){const x=Pd.SCALAR,R=ga[i.sparse.indices.componentType],C=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,D=new R(l[1],C,i.sparse.count*x),N=new h(l[2],T,i.sparse.count*f);u!==null&&(y=new qn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let I=0,F=D.length;I<F;I++){const A=D[I];if(y.setX(A,N[I*f]),f>=2&&y.setY(A,N[I*f+1]),f>=3&&y.setZ(A,N[I*f+2]),f>=4&&y.setW(A,N[I*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=E}return y})}loadTexture(e){const t=this.json,n=this.options,o=t.textures[e].source,l=t.images[o];let u=this.textureLoader;if(l.uri){const f=n.manager.getHandler(l.uri);f!==null&&(u=f)}return this.loadTextureImage(e,o,u)}loadTextureImage(e,t,n){const i=this,o=this.json,l=o.textures[e],u=o.images[t],f=(u.uri||u.bufferView)+":"+l.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,n).then(function(p){p.flipY=!1,p.name=l.name||u.name||"",p.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(p.name=u.uri);const g=(o.samplers||{})[l.sampler]||{};return p.magFilter=Cv[g.magFilter]||gi,p.minFilter=Cv[g.minFilter]||Nr,p.wrapS=bv[g.wrapS]||mo,p.wrapT=bv[g.wrapT]||mo,p.generateMipmaps=!p.isCompressedTexture&&p.minFilter!==Yn&&p.minFilter!==gi,i.associations.set(p,{textures:e}),p}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const n=this,i=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(m=>m.clone());const l=i.images[e],u=self.URL||self.webkitURL;let f=l.uri||"",h=!1;if(l.bufferView!==void 0)f=n.getDependency("bufferView",l.bufferView).then(function(m){h=!0;const g=new Blob([m],{type:l.mimeType});return f=u.createObjectURL(g),f});else if(l.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(f).then(function(m){return new Promise(function(g,v){let E=g;t.isImageBitmapLoader===!0&&(E=function(M){const y=new xn(M);y.needsUpdate=!0,g(y)}),t.load(Ul.resolveURL(m,o.path),E,void 0,v)})}).then(function(m){return h===!0&&u.revokeObjectURL(f),Lr(m,l),m.userData.mimeType=l.mimeType||ob(l.uri),m}).catch(function(m){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),m});return this.sourceCache[e]=p,p}assignTexture(e,t,n,i){const o=this;return this.getDependency("texture",n.index).then(function(l){if(!l)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(l=l.clone(),l.channel=n.texCoord),o.extensions[vt.KHR_TEXTURE_TRANSFORM]){const u=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=o.associations.get(l);l=o.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(l,u),o.associations.set(l,f)}}return i!==void 0&&(l.colorSpace=i),e[t]=l,l})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,l=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+n.uuid;let f=this.cache.get(u);f||(f=new Ex,rr.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,f.sizeAttenuation=!1,this.cache.add(u,f)),n=f}else if(e.isLine){const u="LineBasicMaterial:"+n.uuid;let f=this.cache.get(u);f||(f=new Mx,rr.prototype.copy.call(f,n),f.color.copy(n.color),f.map=n.map,this.cache.add(u,f)),n=f}if(i||o||l){let u="ClonedMaterial:"+n.uuid+":";i&&(u+="derivative-tangents:"),o&&(u+="vertex-colors:"),l&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=n.clone(),o&&(f.vertexColors=!0),l&&(f.flatShading=!0),i&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(n))),n=f}e.material=n}getMaterialType(){return lf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,o=n.materials[e];let l;const u={},f=o.extensions||{},h=[];if(f[vt.KHR_MATERIALS_UNLIT]){const m=i[vt.KHR_MATERIALS_UNLIT];l=m.getMaterialType(),h.push(m.extendParams(u,o,t))}else{const m=o.pbrMetallicRoughness||{};if(u.color=new nt(1,1,1),u.opacity=1,Array.isArray(m.baseColorFactor)){const g=m.baseColorFactor;u.color.setRGB(g[0],g[1],g[2],Kn),u.opacity=g[3]}m.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",m.baseColorTexture,Tn)),u.metalness=m.metallicFactor!==void 0?m.metallicFactor:1,u.roughness=m.roughnessFactor!==void 0?m.roughnessFactor:1,m.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",m.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",m.metallicRoughnessTexture))),l=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,u)})))}o.doubleSided===!0&&(u.side=tr);const p=o.alphaMode||Ld.OPAQUE;if(p===Ld.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,p===Ld.MASK&&(u.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&l!==ao&&(h.push(t.assignTexture(u,"normalMap",o.normalTexture)),u.normalScale=new Et(1,1),o.normalTexture.scale!==void 0)){const m=o.normalTexture.scale;u.normalScale.set(m,m)}if(o.occlusionTexture!==void 0&&l!==ao&&(h.push(t.assignTexture(u,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&l!==ao){const m=o.emissiveFactor;u.emissive=new nt().setRGB(m[0],m[1],m[2],Kn)}return o.emissiveTexture!==void 0&&l!==ao&&h.push(t.assignTexture(u,"emissiveMap",o.emissiveTexture,Tn)),Promise.all(h).then(function(){const m=new l(u);return o.name&&(m.name=o.name),Lr(m,o),t.associations.set(m,{materials:e}),o.extensions&&eo(i,m,o),m})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function o(u){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return Pv(f,u,t)})}const l=[];for(let u=0,f=e.length;u<f;u++){const h=e[u],p=sb(h),m=i[p];if(m)l.push(m.promise);else{let g;h.extensions&&h.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?g=o(h):g=Pv(new fr,h,t),i[p]={primitive:h,promise:g},l.push(g)}}return Promise.all(l)}loadMesh(e){const t=this,n=this.json,i=this.extensions,o=n.meshes[e],l=o.primitives,u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f].material===void 0?nb(this.cache):this.getDependency("material",l[f].material);u.push(p)}return u.push(t.loadGeometries(l)),Promise.all(u).then(function(f){const h=f.slice(0,f.length-1),p=f[f.length-1],m=[];for(let v=0,E=p.length;v<E;v++){const M=p[v],y=l[v];let x;const R=h[v];if(y.mode===Ci.TRIANGLES||y.mode===Ci.TRIANGLE_STRIP||y.mode===Ci.TRIANGLE_FAN||y.mode===void 0)x=o.isSkinnedMesh===!0?new rT(M,R):new vn(M,R),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),y.mode===Ci.TRIANGLE_STRIP?x.geometry=Av(x.geometry,ax):y.mode===Ci.TRIANGLE_FAN&&(x.geometry=Av(x.geometry,wp));else if(y.mode===Ci.LINES)x=new cT(M,R);else if(y.mode===Ci.LINE_STRIP)x=new um(M,R);else if(y.mode===Ci.LINE_LOOP)x=new fT(M,R);else if(y.mode===Ci.POINTS)x=new hT(M,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(x.geometry.morphAttributes).length>0&&rb(x,o),x.name=t.createUniqueName(o.name||"mesh_"+e),Lr(x,o),y.extensions&&eo(i,x,y),t.assignFinalMaterial(x),m.push(x)}for(let v=0,E=m.length;v<E;v++)t.associations.set(m[v],{meshes:e,primitives:v});if(m.length===1)return o.extensions&&eo(i,m[0],o),m[0];const g=new lo;o.extensions&&eo(i,g,o),t.associations.set(g,{meshes:e});for(let v=0,E=m.length;v<E;v++)g.add(m[v]);return g})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dn(bE.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fm(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Lr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,o=t.joints.length;i<o;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const o=i.pop(),l=i,u=[],f=[];for(let h=0,p=l.length;h<p;h++){const m=l[h];if(m){u.push(m);const g=new ot;o!==null&&g.fromArray(o.array,h*16),f.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new am(u,f)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],o=i.name?i.name:"animation_"+e,l=[],u=[],f=[],h=[],p=[];for(let m=0,g=i.channels.length;m<g;m++){const v=i.channels[m],E=i.samplers[v.sampler],M=v.target,y=M.node,x=i.parameters!==void 0?i.parameters[E.input]:E.input,R=i.parameters!==void 0?i.parameters[E.output]:E.output;M.node!==void 0&&(l.push(this.getDependency("node",y)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",R)),h.push(E),p.push(M))}return Promise.all([Promise.all(l),Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(p)]).then(function(m){const g=m[0],v=m[1],E=m[2],M=m[3],y=m[4],x=[];for(let R=0,C=g.length;R<C;R++){const T=g[R],D=v[R],N=E[R],I=M[R],F=y[R];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const A=n._createAnimationTracks(T,D,N,I,F);if(A)for(let b=0;b<A.length;b++)x.push(A[b])}return new bp(o,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(o){const l=n._getNodeRef(n.meshCache,i.mesh,o);return i.weights!==void 0&&l.traverse(function(u){if(u.isMesh)for(let f=0,h=i.weights.length;f<h;f++)u.morphTargetInfluences[f]=i.weights[f]}),l})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],o=n._loadNodeShallow(e),l=[],u=i.children||[];for(let h=0,p=u.length;h<p;h++)l.push(n.getDependency("node",u[h]));const f=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([o,Promise.all(l),f]).then(function(h){const p=h[0],m=h[1],g=h[2];g!==null&&p.traverse(function(v){v.isSkinnedMesh&&v.bind(g,ab)});for(let v=0,E=m.length;v<E;v++)p.add(m[v]);return p})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const o=t.nodes[e],l=o.name?i.createUniqueName(o.name):"",u=[],f=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&u.push(f),o.camera!==void 0&&u.push(i.getDependency("camera",o.camera).then(function(h){return i._getNodeRef(i.cameraCache,o.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let p;if(o.isBone===!0?p=new yx:h.length>1?p=new lo:h.length===1?p=h[0]:p=new Zt,p!==h[0])for(let m=0,g=h.length;m<g;m++)p.add(h[m]);if(o.name&&(p.userData.name=o.name,p.name=l),Lr(p,o),o.extensions&&eo(n,p,o),o.matrix!==void 0){const m=new ot;m.fromArray(o.matrix),p.applyMatrix4(m)}else o.translation!==void 0&&p.position.fromArray(o.translation),o.rotation!==void 0&&p.quaternion.fromArray(o.rotation),o.scale!==void 0&&p.scale.fromArray(o.scale);return i.associations.has(p)||i.associations.set(p,{}),i.associations.get(p).nodes=e,p}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,o=new lo;n.name&&(o.name=i.createUniqueName(n.name)),Lr(o,n),n.extensions&&eo(t,o,n);const l=n.nodes||[],u=[];for(let f=0,h=l.length;f<h;f++)u.push(i.getDependency("node",l[f]));return Promise.all(u).then(function(f){for(let p=0,m=f.length;p<m;p++)o.add(f[p]);const h=p=>{const m=new Map;for(const[g,v]of i.associations)(g instanceof rr||g instanceof xn)&&m.set(g,v);return p.traverse(g=>{const v=i.associations.get(g);v!=null&&m.set(g,v)}),m};return i.associations=h(o),o})}_createAnimationTracks(e,t,n,i,o){const l=[],u=e.name?e.name:e.uuid,f=[];ms[o.path]===ms.weights?e.traverse(function(g){g.morphTargetInfluences&&f.push(g.name?g.name:g.uuid)}):f.push(u);let h;switch(ms[o.path]){case ms.weights:h=Ca;break;case ms.rotation:h=ba;break;case ms.position:case ms.scale:h=Pa;break;default:switch(n.itemSize){case 1:h=Ca;break;case 2:case 3:default:h=Pa;break}break}const p=i.interpolation!==void 0?tb[i.interpolation]:Vl,m=this._getArrayFromAccessor(n);for(let g=0,v=f.length;g<v;g++){const E=new h(f[g]+"."+ms[o.path],t.array,m,p);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(E),l.push(E)}return l}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Dp(t.constructor),i=new Float32Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=t[o]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ba?eb:Fx;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ub(a,e,t){const n=e.attributes,i=new Vr;if(n.POSITION!==void 0){const u=t.json.accessors[n.POSITION],f=u.min,h=u.max;if(f!==void 0&&h!==void 0){if(i.set(new j(f[0],f[1],f[2]),new j(h[0],h[1],h[2])),u.normalized){const p=Dp(ga[u.componentType]);i.min.multiplyScalar(p),i.max.multiplyScalar(p)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=e.targets;if(o!==void 0){const u=new j,f=new j;for(let h=0,p=o.length;h<p;h++){const m=o[h];if(m.POSITION!==void 0){const g=t.json.accessors[m.POSITION],v=g.min,E=g.max;if(v!==void 0&&E!==void 0){if(f.setX(Math.max(Math.abs(v[0]),Math.abs(E[0]))),f.setY(Math.max(Math.abs(v[1]),Math.abs(E[1]))),f.setZ(Math.max(Math.abs(v[2]),Math.abs(E[2]))),g.normalized){const M=Dp(ga[g.componentType]);f.multiplyScalar(M)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(u)}a.boundingBox=i;const l=new cr;i.getCenter(l.center),l.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=l}function Pv(a,e,t){const n=e.attributes,i=[];function o(l,u){return t.getDependency("accessor",l).then(function(f){a.setAttribute(u,f)})}for(const l in n){const u=Ip[l]||l.toLowerCase();u in a.attributes||i.push(o(n[l],u))}if(e.indices!==void 0&&!a.index){const l=t.getDependency("accessor",e.indices).then(function(u){a.setIndex(u)});i.push(l)}return Mt.workingColorSpace!==Kn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),Lr(a,e),ub(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ib(a,e.targets,t):a})}function Ir(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ox(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},La={duration:.5,overwrite:!1,delay:0},mm,Un,Xt,Pi=1e8,Bt=1/Pi,Np=Math.PI*2,cb=Np/4,fb=0,kx=Math.sqrt,hb=Math.cos,db=Math.sin,yn=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},Br=function(e){return typeof e=="number"},gm=function(e){return typeof e>"u"},ur=function(e){return typeof e=="object"},ii=function(e){return e!==!1},_m=function(){return typeof window<"u"},Dc=function(e){return en(e)||yn(e)},Bx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,Up=/(?:-?\.?\d|\.)+/gi,zx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vx=/[+-]=-?[.\d]+/,Hx=/[^,'"\[\]\s]+/gi,pb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Kt,Ji,Fp,vm,xi={},Qc={},Gx,Wx=function(e){return(Qc=_o(e,xi))&&ai},xm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gl=function(e,t){return!t&&console.warn(e)},Xx=function(e,t){return e&&(xi[e]=t)&&Qc&&(Qc[e]=t)||xi},Wl=function(){return 0},mb={suppressEvents:!0,isStart:!0,kill:!1},Vc={suppressEvents:!0,kill:!1},gb={suppressEvents:!0},ym={},As=[],Op={},jx,pi={},Nd={},Lv=30,Hc=[],Sm="",Mm=function(e){var t=e[0],n,i;if(ur(t)||en(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Hc.length;i--&&!Hc[i].targetTest(t););n=Hc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new gy(e[i],n)))||e.splice(i,1);return e},co=function(e){return e._gsap||Mm(Li(e))[0]._gsap},Yx=function(e,t,n){return(n=e[t])&&en(n)?e[t]():gm(n)&&e.getAttribute&&e.getAttribute(t)||n},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},rn=function(e){return Math.round(e*1e5)/1e5||0},_n=function(e){return Math.round(e*1e7)/1e7||0},_a=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_b=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Jc=function(){var e=As.length,t=As.slice(0),n,i;for(Op={},As.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qx=function(e,t,n,i){As.length&&!Un&&Jc(),e.render(t,n,Un&&t<0&&(e._initted||e._startAt)),As.length&&!Un&&Jc()},Kx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hx).length<2?t:yn(e)?e.trim():e},$x=function(e){return e},Ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},_o=function(e,t){for(var n in t)e[n]=t[n];return e},Iv=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ur(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},ef=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Fl=function(e){var t=e.parent||Kt,n=e.keyframes?vb(Fn(e.keyframes)):Ii;if(ii(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Zx=function(e,t,n,i,o){var l=e[i],u;if(o)for(u=t[o];l&&l[o]>u;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=l,t.parent=t._dp=e,t},hf=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t._prev,l=t._next;o?o._next=l:e[n]===t&&(e[n]=l),l?l._prev=o:e[i]===t&&(e[i]=o),t._next=t._prev=t.parent=null},bs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kp=function(e,t,n,i){return e._startAt&&(Un?e._startAt.revert(Vc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Sb=function a(e){return!e||e._ts&&a(e.parent)},Dv=function(e){return e._repeat?Ia(e._tTime,e=e.duration()+e._rDelay)*e:0},Ia=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},tf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},df=function(e){return e._end=_n(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bt)||0))},pf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_n(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),df(e),n._dirty||fo(n,e)),e},Qx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=tf(e.rawTime(),t),(!t._dur||Ql(0,t.totalDuration(),n)-t._tTime>Bt)&&t.render(n,!0)),fo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Bt}},nr=function(e,t,n,i){return t.parent&&bs(t),t._start=_n((Br(n)?n:n||e!==Kt?Ri(e,n,t):e._time)+t._delay),t._end=_n(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zx(e,t,"_first","_last",e._sort?"_start":0),Bp(t)||(e._recent=t),i||Qx(e,t),e._ts<0&&pf(e,e._tTime),e},Jx=function(e,t){return(xi.ScrollTrigger||xm("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},ey=function(e,t,n,i,o){if(Tm(e,t,o),!e._initted)return 1;if(!n&&e._pt&&!Un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jx!==mi.frame)return As.push(e),e._lazy=[o,i],1},Mb=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Bp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Eb=function(e,t,n,i){var o=e.ratio,l=t<0||!t&&(!e._start&&Mb(e)&&!(!e._initted&&Bp(e))||(e._ts<0||e._dp._ts<0)&&!Bp(e))?0:1,u=e._rDelay,f=0,h,p,m;if(u&&e._repeat&&(f=Ql(0,e._tDur,t),p=Ia(f,u),e._yoyo&&p&1&&(l=1-l),p!==Ia(e._tTime,u)&&(o=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==o||Un||i||e._zTime===Bt||!t&&e._zTime){if(!e._initted&&ey(e,t,i,n,f))return;for(m=e._zTime,e._zTime=t||(n?Bt:0),n||(n=t&&!m),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,h=e._pt;h;)h.r(l,h.d),h=h._next;t<0&&kp(e,t,n,!0),e._onUpdate&&!n&&_i(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&_i(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&bs(e,1),!n&&!Un&&(_i(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Da=function(e,t,n,i){var o=e._repeat,l=_n(t)||0,u=e._tTime/e._tDur;return u&&!i&&(e._time*=l/e._dur),e._dur=l,e._tDur=o?o<0?1e10:_n(l*(o+1)+e._rDelay*o):l,u>0&&!i&&pf(e,e._tTime=e._tDur*u),e.parent&&df(e),n||fo(e.parent,e),e},Nv=function(e){return e instanceof Xn?fo(e):Da(e,e._dur)},wb={_start:0,endTime:Wl,totalDuration:Wl},Ri=function a(e,t,n){var i=e.labels,o=e._recent||wb,l=e.duration()>=Pi?o.endTime(!1):e._dur,u,f,h;return yn(t)&&(isNaN(t)||t in i)?(f=t.charAt(0),h=t.substr(-1)==="%",u=t.indexOf("="),f==="<"||f===">"?(u>=0&&(t=t.replace(/=/,"")),(f==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(u<0?o:n).totalDuration()/100:1)):u<0?(t in i||(i[t]=l),i[t]):(f=parseFloat(t.charAt(u-1)+t.substr(u+1)),h&&n&&(f=f/100*(Fn(n)?n[0]:n).totalDuration()),u>1?a(e,t.substr(0,u-1),n)+f:l+f)):t==null?l:+t},Ol=function(e,t,n){var i=Br(t[1]),o=(i?2:1)+(e<2?0:1),l=t[o],u,f;if(i&&(l.duration=t[1]),l.parent=n,e){for(u=l,f=n;f&&!("immediateRender"in u);)u=f.vars.defaults||{},f=ii(f.vars.inherit)&&f.parent;l.immediateRender=ii(u.immediateRender),e<2?l.runBackwards=1:l.startAt=t[o-1]}return new an(t[0],l,t[o+1])},Ls=function(e,t){return e||e===0?t(e):t},Ql=function(e,t,n){return n<e?e:n>t?t:n},Nn=function(e,t){return!yn(e)||!(t=pb.exec(e))?"":t[1]},Ab=function(e,t,n){return Ls(n,function(i){return Ql(e,t,i)})},zp=[].slice,ty=function(e,t){return e&&ur(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ur(e[0]))&&!e.nodeType&&e!==Ji},Rb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var o;return yn(i)&&!t||ty(i,1)?(o=n).push.apply(o,Li(i)):n.push(i)})||n},Li=function(e,t,n){return Xt&&!t&&Xt.selector?Xt.selector(e):yn(e)&&!n&&(Fp||!Na())?zp.call((t||vm).querySelectorAll(e),0):Fn(e)?Rb(e,n):ty(e)?zp.call(e,0):e?[e]:[]},Vp=function(e){return e=Li(e)[0]||Gl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Li(t,n.querySelectorAll?n:n===e?Gl("Invalid scope")||vm.createElement("div"):e)}},ny=function(e){return e.sort(function(){return .5-Math.random()})},iy=function(e){if(en(e))return e;var t=ur(e)?e:{each:e},n=ho(t.ease),i=t.from||0,o=parseFloat(t.base)||0,l={},u=i>0&&i<1,f=isNaN(i)||u,h=t.axis,p=i,m=i;return yn(i)?p=m={center:.5,edges:.5,end:1}[i]||0:!u&&f&&(p=i[0],m=i[1]),function(g,v,E){var M=(E||t).length,y=l[M],x,R,C,T,D,N,I,F,A;if(!y){if(A=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!A){for(I=-Pi;I<(I=E[A++].getBoundingClientRect().left)&&A<M;);A<M&&A--}for(y=l[M]=[],x=f?Math.min(A,M)*p-.5:i%A,R=A===Pi?0:f?M*m/A-.5:i/A|0,I=0,F=Pi,N=0;N<M;N++)C=N%A-x,T=R-(N/A|0),y[N]=D=h?Math.abs(h==="y"?T:C):kx(C*C+T*T),D>I&&(I=D),D<F&&(F=D);i==="random"&&ny(y),y.max=I-F,y.min=F,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(A>M?M-1:h?h==="y"?M/A:A:Math.max(A,M/A))||0)*(i==="edges"?-1:1),y.b=M<0?o-M:o,y.u=Nn(t.amount||t.each)||0,n=n&&M<0?dy(n):n}return M=(y[g]-y.min)/y.max||0,_n(y.b+(n?n(M):M)*y.v)+y.u}},Hp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_n(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Br(n)?0:Nn(n))}},ry=function(e,t){var n=Fn(e),i,o;return!n&&ur(e)&&(i=n=e.radius||Pi,e.values?(e=Li(e.values),(o=!Br(e[0]))&&(i*=i)):e=Hp(e.increment)),Ls(t,n?en(e)?function(l){return o=e(l),Math.abs(o-l)<=i?o:l}:function(l){for(var u=parseFloat(o?l.x:l),f=parseFloat(o?l.y:0),h=Pi,p=0,m=e.length,g,v;m--;)o?(g=e[m].x-u,v=e[m].y-f,g=g*g+v*v):g=Math.abs(e[m]-u),g<h&&(h=g,p=m);return p=!i||h<=i?e[p]:l,o||p===l||Br(l)?p:p+Nn(l)}:Hp(e))},sy=function(e,t,n,i){return Ls(Fn(e)?!t:n===!0?!!(n=0):!i,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Cb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(o,l){return l(o)},i)}},bb=function(e,t){return function(n){return e(parseFloat(n))+(t||Nn(n))}},Pb=function(e,t,n){return ay(e,t,0,1,n)},oy=function(e,t,n){return Ls(n,function(i){return e[~~t(i)]})},Lb=function a(e,t,n){var i=t-e;return Fn(e)?oy(e,a(0,e.length),t):Ls(n,function(o){return(i+(o-e)%i)%i+e})},Ib=function a(e,t,n){var i=t-e,o=i*2;return Fn(e)?oy(e,a(0,e.length-1),t):Ls(n,function(l){return l=(o+(l-e)%o)%o||0,e+(l>i?o-l:l)})},Xl=function(e){for(var t=0,n="",i,o,l,u;~(i=e.indexOf("random(",t));)l=e.indexOf(")",i),u=e.charAt(i+7)==="[",o=e.substr(i+7,l-i-7).match(u?Hx:Up),n+=e.substr(t,i-t)+sy(u?o:+o[0],u?0:+o[1],+o[2]||1e-5),t=l+1;return n+e.substr(t,e.length-t)},ay=function(e,t,n,i,o){var l=t-e,u=i-n;return Ls(o,function(f){return n+((f-e)/l*u||0)})},Db=function a(e,t,n,i){var o=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!o){var l=yn(e),u={},f,h,p,m,g;if(n===!0&&(i=1)&&(n=null),l)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(p=[],m=e.length,g=m-2,h=1;h<m;h++)p.push(a(e[h-1],e[h]));m--,o=function(E){E*=m;var M=Math.min(g,~~E);return p[M](E-M)},n=t}else i||(e=_o(Fn(e)?[]:{},e));if(!p){for(f in t)Em.call(u,e,f,"get",t[f]);o=function(E){return Rm(E,u)||(l?e.p:e)}}}return Ls(n,o)},Uv=function(e,t,n){var i=e.labels,o=Pi,l,u,f;for(l in i)u=i[l]-t,u<0==!!n&&u&&o>(u=Math.abs(u))&&(f=l,o=u);return f},_i=function(e,t,n){var i=e.vars,o=i[t],l=Xt,u=e._ctx,f,h,p;if(o)return f=i[t+"Params"],h=i.callbackScope||e,n&&As.length&&Jc(),u&&(Xt=u),p=f?o.apply(h,f):o.call(h),Xt=l,p},Ll=function(e){return bs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Un),e.progress()<1&&_i(e,"onInterrupt"),e},ha,ly=[],uy=function(e){if(e)if(e=!e.name&&e.default||e,_m()||e.headless){var t=e.name,n=en(e),i=t&&!n&&e.init?function(){this._props=[]}:e,o={init:Wl,render:Rm,add:Em,kill:Kb,modifier:qb,rawVars:0},l={targetTest:0,get:0,getSetter:Am,aliases:{},register:0};if(Na(),e!==i){if(pi[t])return;Ii(i,Ii(ef(e,o),l)),_o(i.prototype,_o(o,ef(e,l))),pi[i.prop=t]=i,e.targetTest&&(Hc.push(i),ym[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xx(t,i),e.register&&e.register(ai,i,si)}else ly.push(e)},Ft=255,Il={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},Ud=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ft+.5|0},cy=function(e,t,n){var i=e?Br(e)?[e>>16,e>>8&Ft,e&Ft]:0:Il.black,o,l,u,f,h,p,m,g,v,E;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Il[e])i=Il[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),l=e.charAt(2),u=e.charAt(3),e="#"+o+o+l+l+u+u+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ft,i&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(i=E=e.match(Up),!t)f=+i[0]%360/360,h=+i[1]/100,p=+i[2]/100,l=p<=.5?p*(h+1):p+h-p*h,o=p*2-l,i.length>3&&(i[3]*=1),i[0]=Ud(f+1/3,o,l),i[1]=Ud(f,o,l),i[2]=Ud(f-1/3,o,l);else if(~e.indexOf("="))return i=e.match(zx),n&&i.length<4&&(i[3]=1),i}else i=e.match(Up)||Il.transparent;i=i.map(Number)}return t&&!E&&(o=i[0]/Ft,l=i[1]/Ft,u=i[2]/Ft,m=Math.max(o,l,u),g=Math.min(o,l,u),p=(m+g)/2,m===g?f=h=0:(v=m-g,h=p>.5?v/(2-m-g):v/(m+g),f=m===o?(l-u)/v+(l<u?6:0):m===l?(u-o)/v+2:(o-l)/v+4,f*=60),i[0]=~~(f+.5),i[1]=~~(h*100+.5),i[2]=~~(p*100+.5)),n&&i.length<4&&(i[3]=1),i},fy=function(e){var t=[],n=[],i=-1;return e.split(Rs).forEach(function(o){var l=o.match(fa)||[];t.push.apply(t,l),n.push(i+=l.length+1)}),t.c=n,t},Fv=function(e,t,n){var i="",o=(e+i).match(Rs),l=t?"hsla(":"rgba(",u=0,f,h,p,m;if(!o)return e;if(o=o.map(function(g){return(g=cy(g,t,1))&&l+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=fy(e),f=n.c,f.join(i)!==p.c.join(i)))for(h=e.replace(Rs,"1").split(fa),m=h.length-1;u<m;u++)i+=h[u]+(~f.indexOf(u)?o.shift()||l+"0,0,0,0)":(p.length?p:o.length?o:n).shift());if(!h)for(h=e.split(Rs),m=h.length-1;u<m;u++)i+=h[u]+o[u];return i+h[m]},Rs=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Il)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),Nb=/hsl[a]?\(/,hy=function(e){var t=e.join(" "),n;if(Rs.lastIndex=0,Rs.test(t))return n=Nb.test(t),e[1]=Fv(e[1],n),e[0]=Fv(e[0],n,fy(e[1])),!0},jl,mi=function(){var a=Date.now,e=500,t=33,n=a(),i=n,o=1e3/240,l=o,u=[],f,h,p,m,g,v,E=function M(y){var x=a()-i,R=y===!0,C,T,D,N;if((x>e||x<0)&&(n+=x-t),i+=x,D=i-n,C=D-l,(C>0||R)&&(N=++m.frame,g=D-m.time*1e3,m.time=D=D/1e3,l+=C+(C>=o?4:o-C),T=1),R||(f=h(M)),T)for(v=0;v<u.length;v++)u[v](D,g,N,y)};return m={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){Gx&&(!Fp&&_m()&&(Ji=Fp=window,vm=Ji.document||{},xi.gsap=ai,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(ai.version),Wx(Qc||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),ly.forEach(uy)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),h=p||function(y){return setTimeout(y,l-m.time*1e3+1|0)},jl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),jl=0,h=Wl},lagSmoothing:function(y,x){e=y||1/0,t=Math.min(x||33,e)},fps:function(y){o=1e3/(y||240),l=m.time*1e3+o},add:function(y,x,R){var C=x?function(T,D,N,I){y(T,D,N,I),m.remove(C)}:y;return m.remove(y),u[R?"unshift":"push"](C),Na(),C},remove:function(y,x){~(x=u.indexOf(y))&&u.splice(x,1)&&v>=x&&v--},_listeners:u},m}(),Na=function(){return!jl&&mi.wake()},yt={},Ub=/^[\d.\-M][\d.\-,\s]/,Fb=/["']/g,Ob=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],o=1,l=n.length,u,f,h;o<l;o++)f=n[o],u=o!==l-1?f.lastIndexOf(","):f.length,h=f.substr(0,u),t[i]=isNaN(h)?h.replace(Fb,"").trim():+h,i=f.substr(u+1).trim();return t},kb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Bb=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ob(t[1])]:kb(e).split(",").map(Kx)):yt._CE&&Ub.test(e)?yt._CE("",e):n},dy=function(e){return function(t){return 1-e(1-t)}},py=function a(e,t){for(var n=e._first,i;n;)n instanceof Xn?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ho=function(e,t){return e&&(en(e)?e:yt[e]||Bb(e))||t},yo=function(e,t,n,i){n===void 0&&(n=function(f){return 1-t(1-f)}),i===void 0&&(i=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var o={easeIn:t,easeOut:n,easeInOut:i},l;return ri(e,function(u){yt[u]=xi[u]=o,yt[l=u.toLowerCase()]=n;for(var f in o)yt[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=yt[u+"."+f]=o[f]}),o},my=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fd=function a(e,t,n){var i=t>=1?t:1,o=(n||(e?.3:.45))/(t<1?t:1),l=o/Np*(Math.asin(1/i)||0),u=function(p){return p===1?1:i*Math.pow(2,-10*p)*db((p-l)*o)+1},f=e==="out"?u:e==="in"?function(h){return 1-u(1-h)}:my(u);return o=Np/o,f.config=function(h,p){return a(e,h,p)},f},Od=function a(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},i=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:my(n);return i.config=function(o){return a(e,o)},i};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;yo(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;yo("Elastic",Fd("in"),Fd("out"),Fd());(function(a,e){var t=1/e,n=2*t,i=2.5*t,o=function(u){return u<t?a*u*u:u<n?a*Math.pow(u-1.5/e,2)+.75:u<i?a*(u-=2.25/e)*u+.9375:a*Math.pow(u-2.625/e,2)+.984375};yo("Bounce",function(l){return 1-o(1-l)},o)})(7.5625,2.75);yo("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});yo("Circ",function(a){return-(kx(1-a*a)-1)});yo("Sine",function(a){return a===1?1:-hb(a*cb)+1});yo("Back",Od("in"),Od("out"),Od());yt.SteppedEase=yt.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),o=t?1:0,l=1-Bt;return function(u){return((i*Ql(0,l,u)|0)+o)*n}}};La.ease=yt["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Sm+=a+","+a+"Params,"});var gy=function(e,t){this.id=fb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yx,this.set=t?t.getSetter:Am},Yl=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),jl||mi.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Na(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(pf(this,n),!o._dp||o.parent||Qx(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&nr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qx(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dv(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dv(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,i):this._repeat?Ia(this._tTime,o)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?tf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(Ql(-Math.abs(this._delay),this._tDur,o),i!==!1),df(this),yb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Na(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&nr(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tf(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gb);var i=Un;return Un=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Un=i,this},e.globalTime=function(n){for(var i=this,o=arguments.length?n:i.rawTime();i;)o=i._start+o/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nv(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ri(this,n),ii(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ii(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=i&&o<this.endTime(!0)-Bt)},e.eventCallback=function(n,i,o){var l=this.vars;return arguments.length>1?(i?(l[n]=i,o&&(l[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=i)):delete l[n],this):l[n]},e.then=function(n){var i=this;return new Promise(function(o){var l=en(n)?n:$x,u=function(){var h=i.then;i.then=null,en(l)&&(l=l(i))&&(l.then||l===i)&&(i.then=h),o(l),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?u():i._prom=u})},e.kill=function(){Ll(this)},a}();Ii(Yl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var Xn=function(a){Ox(e,a);function e(n,i){var o;return n===void 0&&(n={}),o=a.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=ii(n.sortChildren),Kt&&nr(n.parent||Kt,Ir(o),i),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&Jx(Ir(o),n.scrollTrigger),o}var t=e.prototype;return t.to=function(i,o,l){return Ol(0,arguments,this),this},t.from=function(i,o,l){return Ol(1,arguments,this),this},t.fromTo=function(i,o,l,u){return Ol(2,arguments,this),this},t.set=function(i,o,l){return o.duration=0,o.parent=this,Fl(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new an(i,o,Ri(this,l),1),this},t.call=function(i,o,l){return nr(this,an.delayedCall(0,i,o),l)},t.staggerTo=function(i,o,l,u,f,h,p){return l.duration=o,l.stagger=l.stagger||u,l.onComplete=h,l.onCompleteParams=p,l.parent=this,new an(i,l,Ri(this,f)),this},t.staggerFrom=function(i,o,l,u,f,h,p){return l.runBackwards=1,Fl(l).immediateRender=ii(l.immediateRender),this.staggerTo(i,o,l,u,f,h,p)},t.staggerFromTo=function(i,o,l,u,f,h,p,m){return u.startAt=l,Fl(u).immediateRender=ii(u.immediateRender),this.staggerTo(i,o,u,f,h,p,m)},t.render=function(i,o,l){var u=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=i<=0?0:_n(i),m=this._zTime<0!=i<0&&(this._initted||!h),g,v,E,M,y,x,R,C,T,D,N,I;if(this!==Kt&&p>f&&i>=0&&(p=f),p!==this._tTime||l||m){if(u!==this._time&&h&&(p+=this._time-u,i+=this._time-u),g=p,T=this._start,C=this._ts,x=!C,m&&(h||(u=this._zTime),(i||!o)&&(this._zTime=i)),this._repeat){if(N=this._yoyo,y=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(y*100+i,o,l);if(g=_n(p%y),p===f?(M=this._repeat,g=h):(M=~~(p/y),M&&M===p/y&&(g=h,M--),g>h&&(g=h)),D=Ia(this._tTime,y),!u&&this._tTime&&D!==M&&this._tTime-D*y-this._dur<=0&&(D=M),N&&M&1&&(g=h-g,I=1),M!==D&&!this._lock){var F=N&&D&1,A=F===(N&&M&1);if(M<D&&(F=!F),u=F?0:p%h?h:p,this._lock=1,this.render(u||(I?0:_n(M*y)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),u&&u!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,A&&(this._lock=2,u=F?h:-1e-4,this.render(u,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;py(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=Tb(this,_n(u),_n(g)),R&&(p-=g-(g=R._start))),this._tTime=p,this._time=g,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,u=0),!u&&g&&!o&&!M&&(_i(this,"onStart"),this._tTime!==p))return this;if(g>=u&&i>=0)for(v=this._first;v;){if(E=v._next,(v._act||g>=v._start)&&v._ts&&R!==v){if(v.parent!==this)return this.render(i,o,l);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,o,l),g!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=-Bt);break}}v=E}else{v=this._last;for(var b=i<0?i:g;v;){if(E=v._prev,(v._act||b<=v._end)&&v._ts&&R!==v){if(v.parent!==this)return this.render(i,o,l);if(v.render(v._ts>0?(b-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(b-v._start)*v._ts,o,l||Un&&(v._initted||v._startAt)),g!==this._time||!this._ts&&!x){R=0,E&&(p+=this._zTime=b?-Bt:Bt);break}}v=E}}if(R&&!o&&(this.pause(),R.render(g>=u?0:-Bt)._zTime=g>=u?1:-1,this._ts))return this._start=T,df(this),this.render(i,o,l);this._onUpdate&&!o&&_i(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&u)&&(T===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&bs(this,1),!o&&!(i<0&&!u)&&(p||u||!f)&&(_i(this,p===f&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,o){var l=this;if(Br(o)||(o=Ri(this,o,i)),!(i instanceof Yl)){if(Fn(i))return i.forEach(function(u){return l.add(u,o)}),this;if(yn(i))return this.addLabel(i,o);if(en(i))i=an.delayedCall(0,i);else return this}return this!==i?nr(this,i,o):this},t.getChildren=function(i,o,l,u){i===void 0&&(i=!0),o===void 0&&(o=!0),l===void 0&&(l=!0),u===void 0&&(u=-Pi);for(var f=[],h=this._first;h;)h._start>=u&&(h instanceof an?o&&f.push(h):(l&&f.push(h),i&&f.push.apply(f,h.getChildren(!0,o,l)))),h=h._next;return f},t.getById=function(i){for(var o=this.getChildren(1,1,1),l=o.length;l--;)if(o[l].vars.id===i)return o[l]},t.remove=function(i){return yn(i)?this.removeLabel(i):en(i)?this.killTweensOf(i):(hf(this,i),i===this._recent&&(this._recent=this._last),fo(this))},t.totalTime=function(i,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(mi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,o),this._forcing=0,this):this._tTime},t.addLabel=function(i,o){return this.labels[i]=Ri(this,o),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,o,l){var u=an.delayedCall(0,o||Wl,l);return u.data="isPause",this._hasPause=1,nr(this,u,Ri(this,i))},t.removePause=function(i){var o=this._first;for(i=Ri(this,i);o;)o._start===i&&o.data==="isPause"&&bs(o),o=o._next},t.killTweensOf=function(i,o,l){for(var u=this.getTweensOf(i,l),f=u.length;f--;)Ss!==u[f]&&u[f].kill(i,o);return this},t.getTweensOf=function(i,o){for(var l=[],u=Li(i),f=this._first,h=Br(o),p;f;)f instanceof an?_b(f._targets,u)&&(h?(!Ss||f._initted&&f._ts)&&f.globalTime(0)<=o&&f.globalTime(f.totalDuration())>o:!o||f.isActive())&&l.push(f):(p=f.getTweensOf(u,o)).length&&l.push.apply(l,p),f=f._next;return l},t.tweenTo=function(i,o){o=o||{};var l=this,u=Ri(l,i),f=o,h=f.startAt,p=f.onStart,m=f.onStartParams,g=f.immediateRender,v,E=an.to(l,Ii({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:u,overwrite:"auto",duration:o.duration||Math.abs((u-(h&&"time"in h?h.time:l._time))/l.timeScale())||Bt,onStart:function(){if(l.pause(),!v){var y=o.duration||Math.abs((u-(h&&"time"in h?h.time:l._time))/l.timeScale());E._dur!==y&&Da(E,y,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,m||[])}},o));return g?E.render(0):E},t.tweenFromTo=function(i,o,l){return this.tweenTo(o,Ii({startAt:{time:Ri(this,i)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Uv(this,Ri(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Uv(this,Ri(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Bt)},t.shiftChildren=function(i,o,l){l===void 0&&(l=0);for(var u=this._first,f=this.labels,h;u;)u._start>=l&&(u._start+=i,u._end+=i),u=u._next;if(o)for(h in f)f[h]>=l&&(f[h]+=i);return fo(this)},t.invalidate=function(i){var o=this._first;for(this._lock=0;o;)o.invalidate(i),o=o._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var o=this._first,l;o;)l=o._next,this.remove(o),o=l;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fo(this)},t.totalDuration=function(i){var o=0,l=this,u=l._last,f=Pi,h,p,m;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-i:i));if(l._dirty){for(m=l.parent;u;)h=u._prev,u._dirty&&u.totalDuration(),p=u._start,p>f&&l._sort&&u._ts&&!l._lock?(l._lock=1,nr(l,u,p-u._delay,1)._lock=0):f=p,p<0&&u._ts&&(o-=p,(!m&&!l._dp||m&&m.smoothChildTiming)&&(l._start+=p/l._ts,l._time-=p,l._tTime-=p),l.shiftChildren(-p,!1,-1/0),f=0),u._end>o&&u._ts&&(o=u._end),u=h;Da(l,l===Kt&&l._time>o?l._time:o,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(i){if(Kt._ts&&(qx(Kt,tf(i,Kt)),jx=mi.frame),mi.frame>=Lv){Lv+=vi.autoSleep||120;var o=Kt._first;if((!o||!o._ts)&&vi.autoSleep&&mi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||mi.sleep()}}},e}(Yl);Ii(Xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zb=function(e,t,n,i,o,l,u){var f=new si(this._pt,e,t,0,1,My,null,o),h=0,p=0,m,g,v,E,M,y,x,R;for(f.b=n,f.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=Xl(i)),l&&(R=[n,i],l(R,e,t),n=R[0],i=R[1]),g=n.match(Dd)||[];m=Dd.exec(i);)E=m[0],M=i.substring(h,m.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==g[p++]&&(y=parseFloat(g[p-1])||0,f._pt={_next:f._pt,p:M||p===1?M:",",s:y,c:E.charAt(1)==="="?_a(y,E)-y:parseFloat(E)-y,m:v&&v<4?Math.round:0},h=Dd.lastIndex);return f.c=h<i.length?i.substring(h,i.length):"",f.fp=u,(Vx.test(i)||x)&&(f.e=0),this._pt=f,f},Em=function(e,t,n,i,o,l,u,f,h,p){en(i)&&(i=i(o||0,e,l));var m=e[t],g=n!=="get"?n:en(m)?h?e[t.indexOf("set")||!en(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,v=en(m)?h?Xb:yy:wm,E;if(yn(i)&&(~i.indexOf("random(")&&(i=Xl(i)),i.charAt(1)==="="&&(E=_a(g,i)+(Nn(g)||0),(E||E===0)&&(i=E))),!p||g!==i||Gp)return!isNaN(g*i)&&i!==""?(E=new si(this._pt,e,t,+g||0,i-(g||0),typeof m=="boolean"?Yb:Sy,0,v),h&&(E.fp=h),u&&E.modifier(u,this,e),this._pt=E):(!m&&!(t in e)&&xm(t,i),zb.call(this,e,t,g,i,v,f||vi.stringFilter,h))},Vb=function(e,t,n,i,o){if(en(e)&&(e=kl(e,o,t,n,i)),!ur(e)||e.style&&e.nodeType||Fn(e)||Bx(e))return yn(e)?kl(e,o,t,n,i):e;var l={},u;for(u in e)l[u]=kl(e[u],o,t,n,i);return l},_y=function(e,t,n,i,o,l){var u,f,h,p;if(pi[e]&&(u=new pi[e]).init(o,u.rawVars?t[e]:Vb(t[e],i,o,l,n),n,i,l)!==!1&&(n._pt=f=new si(n._pt,o,e,0,1,u.render,u,0,u.priority),n!==ha))for(h=n._ptLookup[n._targets.indexOf(o)],p=u._props.length;p--;)h[u._props[p]]=f;return u},Ss,Gp,Tm=function a(e,t,n){var i=e.vars,o=i.ease,l=i.startAt,u=i.immediateRender,f=i.lazy,h=i.onUpdate,p=i.runBackwards,m=i.yoyoEase,g=i.keyframes,v=i.autoRevert,E=e._dur,M=e._startAt,y=e._targets,x=e.parent,R=x&&x.data==="nested"?x.vars.targets:y,C=e._overwrite==="auto"&&!mm,T=e.timeline,D,N,I,F,A,b,B,K,q,ce,re,Q,oe;if(T&&(!g||!o)&&(o="none"),e._ease=ho(o,La.ease),e._yEase=m?dy(ho(m===!0?o:m,La.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(K=y[0]?co(y[0]).harness:0,Q=K&&i[K.prop],D=ef(i,ym),M&&(M._zTime<0&&M.progress(1),t<0&&p&&u&&!v?M.render(-1,!0):M.revert(p&&E?Vc:mb),M._lazy=0),l){if(bs(e._startAt=an.set(y,Ii({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ii(f),startAt:null,delay:0,onUpdate:h&&function(){return _i(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un||!u&&!v)&&e._startAt.revert(Vc),u&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(u=!1),I=Ii({overwrite:!1,data:"isFromStart",lazy:u&&!M&&ii(f),immediateRender:u,stagger:0,parent:x},D),Q&&(I[K.prop]=Q),bs(e._startAt=an.set(y,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Un?e._startAt.revert(Vc):e._startAt.render(-1,!0)),e._zTime=t,!u)a(e._startAt,Bt,Bt);else if(!t)return}for(e._pt=e._ptCache=0,f=E&&ii(f)||f&&!E,N=0;N<y.length;N++){if(A=y[N],B=A._gsap||Mm(y)[N]._gsap,e._ptLookup[N]=ce={},Op[B.id]&&As.length&&Jc(),re=R===y?N:R.indexOf(A),K&&(q=new K).init(A,Q||D,e,re,R)!==!1&&(e._pt=F=new si(e._pt,A,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(z){ce[z]=F}),q.priority&&(b=1)),!K||Q)for(I in D)pi[I]&&(q=_y(I,D,e,re,A,R))?q.priority&&(b=1):ce[I]=F=Em.call(e,A,I,"get",D[I],re,R,0,i.stringFilter);e._op&&e._op[N]&&e.kill(A,e._op[N]),C&&e._pt&&(Ss=e,Kt.killTweensOf(A,ce,e.globalTime(t)),oe=!e.parent,Ss=0),e._pt&&f&&(Op[B.id]=1)}b&&Ey(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!oe,g&&t<=0&&T.render(Pi,!0,!0)},Hb=function(e,t,n,i,o,l,u,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,g,v;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,v=e._targets.length;v--;){if(p=g[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Gp=1,e.vars[t]="+=0",Tm(e,u),Gp=0,f?Gl(t+" not eligible for reset"):1;h.push(p)}for(v=h.length;v--;)m=h[v],p=m._pt||m,p.s=(i||i===0)&&!o?i:p.s+(i||0)+l*p.c,p.c=n-p.s,m.e&&(m.e=rn(n)+Nn(m.e)),m.b&&(m.b=p.s+Nn(m.b))},Gb=function(e,t){var n=e[0]?co(e[0]).harness:0,i=n&&n.aliases,o,l,u,f;if(!i)return t;o=_o({},t);for(l in i)if(l in o)for(f=i[l].split(","),u=f.length;u--;)o[f[u]]=o[l];return o},Wb=function(e,t,n,i){var o=t.ease||i||"power1.inOut",l,u;if(Fn(t))u=n[e]||(n[e]=[]),t.forEach(function(f,h){return u.push({t:h/(t.length-1)*100,v:f,e:o})});else for(l in t)u=n[l]||(n[l]=[]),l==="ease"||u.push({t:parseFloat(e),v:t[l],e:o})},kl=function(e,t,n,i,o){return en(e)?e.call(t,n,i,o):yn(e)&&~e.indexOf("random(")?Xl(e):e},vy=Sm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xy={};ri(vy+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return xy[a]=1});var an=function(a){Ox(e,a);function e(n,i,o,l){var u;typeof i=="number"&&(o.duration=i,i=o,o=null),u=a.call(this,l?i:Fl(i))||this;var f=u.vars,h=f.duration,p=f.delay,m=f.immediateRender,g=f.stagger,v=f.overwrite,E=f.keyframes,M=f.defaults,y=f.scrollTrigger,x=f.yoyoEase,R=i.parent||Kt,C=(Fn(n)||Bx(n)?Br(n[0]):"length"in i)?[n]:Li(n),T,D,N,I,F,A,b,B;if(u._targets=C.length?Mm(C):Gl("GSAP target "+n+" not found. https://gsap.com",!vi.nullTargetWarn)||[],u._ptLookup=[],u._overwrite=v,E||g||Dc(h)||Dc(p)){if(i=u.vars,T=u.timeline=new Xn({data:"nested",defaults:M||{},targets:R&&R.data==="nested"?R.vars.targets:C}),T.kill(),T.parent=T._dp=Ir(u),T._start=0,g||Dc(h)||Dc(p)){if(I=C.length,b=g&&iy(g),ur(g))for(F in g)~vy.indexOf(F)&&(B||(B={}),B[F]=g[F]);for(D=0;D<I;D++)N=ef(i,xy),N.stagger=0,x&&(N.yoyoEase=x),B&&_o(N,B),A=C[D],N.duration=+kl(h,Ir(u),D,A,C),N.delay=(+kl(p,Ir(u),D,A,C)||0)-u._delay,!g&&I===1&&N.delay&&(u._delay=p=N.delay,u._start+=p,N.delay=0),T.to(A,N,b?b(D,A,C):0),T._ease=yt.none;T.duration()?h=p=0:u.timeline=0}else if(E){Fl(Ii(T.vars.defaults,{ease:"none"})),T._ease=ho(E.ease||i.ease||"none");var K=0,q,ce,re;if(Fn(E))E.forEach(function(Q){return T.to(C,Q,">")}),T.duration();else{N={};for(F in E)F==="ease"||F==="easeEach"||Wb(F,E[F],N,E.easeEach);for(F in N)for(q=N[F].sort(function(Q,oe){return Q.t-oe.t}),K=0,D=0;D<q.length;D++)ce=q[D],re={ease:ce.e,duration:(ce.t-(D?q[D-1].t:0))/100*h},re[F]=ce.v,T.to(C,re,K),K+=re.duration;T.duration()<h&&T.to({},{duration:h-T.duration()})}}h||u.duration(h=T.duration())}else u.timeline=0;return v===!0&&!mm&&(Ss=Ir(u),Kt.killTweensOf(C),Ss=0),nr(R,Ir(u),o),i.reversed&&u.reverse(),i.paused&&u.paused(!0),(m||!h&&!E&&u._start===_n(R._time)&&ii(m)&&Sb(Ir(u))&&R.data!=="nested")&&(u._tTime=-Bt,u.render(Math.max(0,-p)||0)),y&&Jx(Ir(u),y),u}var t=e.prototype;return t.render=function(i,o,l){var u=this._time,f=this._tDur,h=this._dur,p=i<0,m=i>f-Bt&&!p?f:i<Bt?0:i,g,v,E,M,y,x,R,C,T;if(!h)Eb(this,i,o,l);else if(m!==this._tTime||!i||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p){if(g=m,C=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+i,o,l);if(g=_n(m%M),m===f?(E=this._repeat,g=h):(E=~~(m/M),E&&E===_n(m/M)&&(g=h,E--),g>h&&(g=h)),x=this._yoyo&&E&1,x&&(T=this._yEase,g=h-g),y=Ia(this._tTime,M),g===u&&!l&&this._initted&&E===y)return this._tTime=m,this;E!==y&&(C&&this._yEase&&py(C,x),this.vars.repeatRefresh&&!x&&!this._lock&&this._time!==M&&this._initted&&(this._lock=l=1,this.render(_n(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(ey(this,p?i:g,l,o,m))return this._tTime=0,this;if(u!==this._time&&!(l&&this.vars.repeatRefresh&&E!==y))return this;if(h!==this._dur)return this.render(i,o,l)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(T||this._ease)(g/h),this._from&&(this.ratio=R=1-R),g&&!u&&!o&&!E&&(_i(this,"onStart"),this._tTime!==m))return this;for(v=this._pt;v;)v.r(R,v.d),v=v._next;C&&C.render(i<0?i:C._dur*C._ease(g/this._dur),o,l)||this._startAt&&(this._zTime=i),this._onUpdate&&!o&&(p&&kp(this,i,o,l),_i(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!o&&this.parent&&_i(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&kp(this,i,!0,!0),(i||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&bs(this,1),!o&&!(p&&!u)&&(m||u||x)&&(_i(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,o,l,u,f){jl||mi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Tm(this,h),p=this._ease(h/this._dur),Hb(this,i,o,l,u,p,h,f)?this.resetTo(i,o,l,u,1):(pf(this,0),this.parent||Zx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,o){if(o===void 0&&(o="all"),!i&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Ll(this):this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(i,o,Ss&&Ss.vars.overwrite!==!0)._first||Ll(this),this.parent&&l!==this.timeline.totalDuration()&&Da(this,this._dur*this.timeline._tDur/l,0,1),this}var u=this._targets,f=i?Li(i):u,h=this._ptLookup,p=this._pt,m,g,v,E,M,y,x;if((!o||o==="all")&&xb(u,f))return o==="all"&&(this._pt=0),Ll(this);for(m=this._op=this._op||[],o!=="all"&&(yn(o)&&(M={},ri(o,function(R){return M[R]=1}),o=M),o=Gb(u,o)),x=u.length;x--;)if(~f.indexOf(u[x])){g=h[x],o==="all"?(m[x]=o,E=g,v={}):(v=m[x]=m[x]||{},E=o);for(M in E)y=g&&g[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&hf(this,y,"_pt"),delete g[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&p&&Ll(this),this},e.to=function(i,o){return new e(i,o,arguments[2])},e.from=function(i,o){return Ol(1,arguments)},e.delayedCall=function(i,o,l,u){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:o,onReverseComplete:o,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:u})},e.fromTo=function(i,o,l){return Ol(2,arguments)},e.set=function(i,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(i,o)},e.killTweensOf=function(i,o,l){return Kt.killTweensOf(i,o,l)},e}(Yl);Ii(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(a){an[a]=function(){var e=new Xn,t=zp.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var wm=function(e,t,n){return e[t]=n},yy=function(e,t,n){return e[t](n)},Xb=function(e,t,n,i){return e[t](i.fp,n)},jb=function(e,t,n){return e.setAttribute(t,n)},Am=function(e,t){return en(e[t])?yy:gm(e[t])&&e.setAttribute?jb:wm},Sy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Yb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},My=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Rm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qb=function(e,t,n,i){for(var o=this._pt,l;o;)l=o._next,o.p===i&&o.modifier(e,t,n),o=l},Kb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hf(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$b=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ey=function(e){for(var t=e._pt,n,i,o,l;t;){for(n=t._next,i=o;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:l)?t._prev._next=t:o=t,(t._next=i)?i._prev=t:l=t,t=n}e._pt=o},si=function(){function a(t,n,i,o,l,u,f,h,p){this.t=n,this.s=o,this.c=l,this.p=i,this.r=u||Sy,this.d=f||this,this.set=h||wm,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,o){this.mSet=this.mSet||this.set,this.set=$b,this.m=n,this.mt=o,this.tween=i},a}();ri(Sm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return ym[a]=1});xi.TweenMax=xi.TweenLite=an;xi.TimelineLite=xi.TimelineMax=Xn;Kt=new Xn({sortChildren:!1,defaults:La,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=hy;var po=[],Gc={},Zb=[],Ov=0,Qb=0,kd=function(e){return(Gc[e]||Zb).map(function(t){return t()})},Wp=function(){var e=Date.now(),t=[];e-Ov>2&&(kd("matchMediaInit"),po.forEach(function(n){var i=n.queries,o=n.conditions,l,u,f,h;for(u in i)l=Ji.matchMedia(i[u]).matches,l&&(f=1),l!==o[u]&&(o[u]=l,h=1);h&&(n.revert(),f&&t.push(n))}),kd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ov=e,kd("matchMedia"))},Ty=function(){function a(t,n){this.selector=n&&Vp(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qb++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,o){en(n)&&(o=i,i=n,n=en);var l=this,u=function(){var h=Xt,p=l.selector,m;return h&&h!==l&&h.data.push(l),o&&(l.selector=Vp(o)),Xt=l,m=i.apply(l,arguments),en(m)&&l._r.push(m),Xt=h,l.selector=p,l.isReverted=!1,m};return l.last=u,n===en?u(l,function(f){return l.add(null,f)}):n?l[n]=u:u},e.ignore=function(n){var i=Xt;Xt=null,n(this),Xt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof an&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var o=this;if(n?function(){for(var u=o.getTweens(),f=o.data.length,h;f--;)h=o.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return u.splice(u.indexOf(p),1)}));for(u.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=o.data.length;f--;)h=o.data[f],h instanceof Xn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof an)&&h.revert&&h.revert(n);o._r.forEach(function(p){return p(n,o)}),o.isReverted=!0}():this.data.forEach(function(u){return u.kill&&u.kill()}),this.clear(),i)for(var l=po.length;l--;)po[l].id===this.id&&po.splice(l,1)},e.revert=function(n){this.kill(n||{})},a}(),Jb=function(){function a(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=a.prototype;return e.add=function(n,i,o){ur(n)||(n={matches:n});var l=new Ty(0,o||this.scope),u=l.conditions={},f,h,p;Xt&&!l.selector&&(l.selector=Xt.selector),this.contexts.push(l),i=l.add("onMatch",i),l.queries=n;for(h in n)h==="all"?p=1:(f=Ji.matchMedia(n[h]),f&&(po.indexOf(l)<0&&po.push(l),(u[h]=f.matches)&&(p=1),f.addListener?f.addListener(Wp):f.addEventListener("change",Wp)));return p&&i(l,function(m){return l.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),nf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return uy(i)})},timeline:function(e){return new Xn(e)},getTweensOf:function(e,t){return Kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){yn(e)&&(e=Li(e)[0]);var o=co(e||{}).get,l=n?$x:Kx;return n==="native"&&(n=""),e&&(t?l((pi[t]&&pi[t].get||o)(e,t,n,i)):function(u,f,h){return l((pi[u]&&pi[u].get||o)(e,u,f,h))})},quickSetter:function(e,t,n){if(e=Li(e),e.length>1){var i=e.map(function(p){return ai.quickSetter(p,t,n)}),o=i.length;return function(p){for(var m=o;m--;)i[m](p)}}e=e[0]||{};var l=pi[t],u=co(e),f=u.harness&&(u.harness.aliases||{})[t]||t,h=l?function(p){var m=new l;ha._pt=0,m.init(e,n?p+n:p,ha,0,[e]),m.render(1,m),ha._pt&&Rm(1,ha)}:u.set(e,f);return l?h:function(p){return h(e,f,n?p+n:p,u,1)}},quickTo:function(e,t,n){var i,o=ai.to(e,_o((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),l=function(f,h,p){return o.resetTo(t,f,h,p)};return l.tween=o,l},isTweening:function(e){return Kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ho(e.ease,La.ease)),Iv(La,e||{})},config:function(e){return Iv(vi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,o=e.defaults,l=e.extendTimeline;(i||"").split(",").forEach(function(u){return u&&!pi[u]&&!xi[u]&&Gl(t+" effect requires "+u+" plugin.")}),Nd[t]=function(u,f,h){return n(Li(u),Ii(f||{},o),h)},l&&(Xn.prototype[t]=function(u,f,h){return this.add(Nd[t](u,ur(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){yt[e]=ho(t)},parseEase:function(e,t){return arguments.length?ho(e,t):yt},getById:function(e){return Kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Xn(e),i,o;for(n.smoothChildTiming=ii(e.smoothChildTiming),Kt.remove(n),n._dp=0,n._time=n._tTime=Kt._time,i=Kt._first;i;)o=i._next,(t||!(!i._dur&&i instanceof an&&i.vars.onComplete===i._targets[0]))&&nr(n,i,i._start-i._delay),i=o;return nr(Kt,n,0),n},context:function(e,t){return e?new Ty(e,t):Xt},matchMedia:function(e){return new Jb(e)},matchMediaRefresh:function(){return po.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wp()},addEventListener:function(e,t){var n=Gc[e]||(Gc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Lb,wrapYoyo:Ib,distribute:iy,random:sy,snap:ry,normalize:Pb,getUnit:Nn,clamp:Ab,splitColor:cy,toArray:Li,selector:Vp,mapRange:ay,pipe:Cb,unitize:bb,interpolate:Db,shuffle:ny},install:Wx,effects:Nd,ticker:mi,updateRoot:Xn.updateRoot,plugins:pi,globalTimeline:Kt,core:{PropTween:si,globals:Xx,Tween:an,Timeline:Xn,Animation:Yl,getCache:co,_removeLinkedListItem:hf,reverting:function(){return Un},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return mm=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return nf[a]=an[a]});mi.add(Xn.updateRoot);ha=nf.to({},{duration:0});var eP=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},tP=function(e,t){var n=e._targets,i,o,l;for(i in t)for(o=n.length;o--;)l=e._ptLookup[o][i],l&&(l=l.d)&&(l._pt&&(l=eP(l,i)),l&&l.modifier&&l.modifier(t[i],e,n[o],i))},Bd=function(e,t){return{name:e,rawVars:1,init:function(i,o,l){l._onInit=function(u){var f,h;if(yn(o)&&(f={},ri(o,function(p){return f[p]=1}),o=f),t){f={};for(h in o)f[h]=t(o[h]);o=f}tP(u,o)}}}},ai=nf.registerPlugin({name:"attr",init:function(e,t,n,i,o){var l,u,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",u=this.add(e,"setAttribute",(f||0)+"",t[l],i,o,0,0,l),u.op=l,u.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)Un?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bd("roundProps",Hp),Bd("modifiers"),Bd("snap",ry))||nf;an.version=Xn.version=ai.version="3.12.5";Gx=1;_m()&&Na();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kv,Ms,va,Cm,uo,Bv,bm,nP=function(){return typeof window<"u"},zr={},ro=180/Math.PI,xa=Math.PI/180,oa=Math.atan2,zv=1e8,Pm=/([A-Z])/g,iP=/(left|right|width|margin|padding|x)/i,rP=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},aP=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ay=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},lP=function(e,t,n){return e.style[t]=n},uP=function(e,t,n){return e.style.setProperty(t,n)},cP=function(e,t,n){return e._gsap[t]=n},fP=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hP=function(e,t,n,i,o){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(o,l)},dP=function(e,t,n,i,o){var l=e._gsap;l[t]=n,l.renderTransform(o,l)},$t="transform",oi=$t+"Origin",pP=function a(e,t){var n=this,i=this.target,o=i.style,l=i._gsap;if(e in zr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(u){return n.tfm[u]=Dr(i,u)}):this.tfm[e]=l.x?l[e]:Dr(i,e),e===oi&&(this.tfm.zOrigin=l.zOrigin);else return ir.transform.split(",").forEach(function(u){return a.call(n,u,t)});if(this.props.indexOf($t)>=0)return;l.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=$t}(o||t)&&this.props.push(e,t,o[e])},Ry=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},mP=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,o,l;for(o=0;o<e.length;o+=3)e[o+1]?t[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Pm,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)i[l]=this.tfm[l];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=bm(),(!o||!o.isStart)&&!n[$t]&&(Ry(n),i.zOrigin&&n[oi]&&(n[oi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cy=function(e,t){var n={target:e,props:[],revert:mP,save:pP};return e._gsap||ai.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},by,jp=function(e,t){var n=Ms.createElementNS?Ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ms.createElement(e);return n&&n.style?n:Ms.createElement(e)},sr=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,Ua(t)||t,1)||""},Vv="O,Moz,ms,Ms,Webkit".split(","),Ua=function(e,t,n){var i=t||uo,o=i.style,l=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(Vv[l]+e in o););return l<0?null:(l===3?"ms":l>=0?Vv[l]:"")+e},Yp=function(){nP()&&window.document&&(kv=window,Ms=kv.document,va=Ms.documentElement,uo=jp("div")||{style:{}},jp("div"),$t=Ua($t),oi=$t+"Origin",uo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",by=!!Ua("perspective"),bm=ai.core.reverting,Cm=1)},zd=function a(e){var t=jp("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,o=this.style.cssText,l;if(va.appendChild(t),t.appendChild(this),this.style.display="block",e)try{l=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(l=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),va.removeChild(t),this.style.cssText=o,l},Hv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Py=function(e){var t;try{t=e.getBBox()}catch{t=zd.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===zd||(t=zd.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Hv(e,["x","cx","x1"])||0,y:+Hv(e,["y","cy","y1"])||0,width:0,height:0}:t},Ly=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Py(e))},vo=function(e,t){if(t){var n=e.style,i;t in zr&&t!==oi&&(t=$t),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Pm,"-$1").toLowerCase())):n.removeAttribute(t)}},Es=function(e,t,n,i,o,l){var u=new si(e._pt,t,n,0,1,l?Ay:wy);return e._pt=u,u.b=i,u.e=o,e._props.push(n),u},Gv={deg:1,rad:1,turn:1},gP={grid:1,flex:1},Ps=function a(e,t,n,i){var o=parseFloat(n)||0,l=(n+"").trim().substr((o+"").length)||"px",u=uo.style,f=iP.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),m=100,g=i==="px",v=i==="%",E,M,y,x;if(i===l||!o||Gv[i]||Gv[l])return o;if(l!=="px"&&!g&&(o=a(e,t,n,"px")),x=e.getCTM&&Ly(e),(v||l==="%")&&(zr[t]||~t.indexOf("adius")))return E=x?e.getBBox()[f?"width":"height"]:e[p],rn(v?o/E*m:o/100*E);if(u[f?"width":"height"]=m+(g?l:i),M=~t.indexOf("adius")||i==="em"&&e.appendChild&&!h?e:e.parentNode,x&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===Ms||!M.appendChild)&&(M=Ms.body),y=M._gsap,y&&v&&y.width&&f&&y.time===mi.time&&!y.uncache)return rn(o/y.width*m);if(v&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=m+i,E=e[p],R?e.style[t]=R:vo(e,t)}else(v||l==="%")&&!gP[sr(M,"display")]&&(u.position=sr(e,"position")),M===e&&(u.position="static"),M.appendChild(uo),E=uo[p],M.removeChild(uo),u.position="absolute";return f&&v&&(y=co(M),y.time=mi.time,y.width=M[p]),rn(g?E*o/m:E&&o?m/E*o:0)},Dr=function(e,t,n,i){var o;return Cm||Yp(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),zr[t]&&t!=="transform"?(o=Kl(e,i),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:sf(sr(e,oi))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||i||~(o+"").indexOf("calc("))&&(o=rf[t]&&rf[t](e,t,n)||sr(e,t)||Yx(e,t)||(t==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?Ps(e,t,o,n)+n:o},_P=function(e,t,n,i){if(!n||n==="none"){var o=Ua(t,e,1),l=o&&sr(e,o,1);l&&l!==n?(t=o,n=l):t==="borderColor"&&(n=sr(e,"borderTopColor"))}var u=new si(this._pt,e.style,t,0,1,My),f=0,h=0,p,m,g,v,E,M,y,x,R,C,T,D;if(u.b=n,u.e=i,n+="",i+="",i==="auto"&&(M=e.style[t],e.style[t]=i,i=sr(e,t)||i,M?e.style[t]=M:vo(e,t)),p=[n,i],hy(p),n=p[0],i=p[1],g=n.match(fa)||[],D=i.match(fa)||[],D.length){for(;m=fa.exec(i);)y=m[0],R=i.substring(f,m.index),E?E=(E+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(E=1),y!==(M=g[h++]||"")&&(v=parseFloat(M)||0,T=M.substr((v+"").length),y.charAt(1)==="="&&(y=_a(v,y)+T),x=parseFloat(y),C=y.substr((x+"").length),f=fa.lastIndex-C.length,C||(C=C||vi.units[t]||T,f===i.length&&(i+=C,u.e+=C)),T!==C&&(v=Ps(e,t,M,C)||0),u._pt={_next:u._pt,p:R||h===1?R:",",s:v,c:x-v,m:E&&E<4||t==="zIndex"?Math.round:0});u.c=f<i.length?i.substring(f,i.length):""}else u.r=t==="display"&&i==="none"?Ay:wy;return Vx.test(i)&&(u.e=0),this._pt=u,u},Wv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vP=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Wv[n]||n,t[1]=Wv[i]||i,t.join(" ")},xP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,o=t.u,l=n._gsap,u,f,h;if(o==="all"||o===!0)i.cssText="",f=1;else for(o=o.split(","),h=o.length;--h>-1;)u=o[h],zr[u]&&(f=1,u=u==="transformOrigin"?oi:$t),vo(n,u);f&&(vo(n,$t),l&&(l.svg&&n.removeAttribute("transform"),Kl(n,1),l.uncache=1,Ry(i)))}},rf={clearProps:function(e,t,n,i,o){if(o.data!=="isFromStart"){var l=e._pt=new si(e._pt,t,n,0,0,xP);return l.u=i,l.pr=-10,l.tween=o,e._props.push(n),1}}},ql=[1,0,0,1,0,0],Iy={},Dy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xv=function(e){var t=sr(e,$t);return Dy(t)?ql:t.substr(7).match(zx).map(rn)},Lm=function(e,t){var n=e._gsap||co(e),i=e.style,o=Xv(e),l,u,f,h;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,o=[f.a,f.b,f.c,f.d,f.e,f.f],o.join(",")==="1,0,0,1,0,0"?ql:o):(o===ql&&!e.offsetParent&&e!==va&&!n.svg&&(f=i.display,i.display="block",l=e.parentNode,(!l||!e.offsetParent)&&(h=1,u=e.nextElementSibling,va.appendChild(e)),o=Xv(e),f?i.display=f:vo(e,"display"),h&&(u?l.insertBefore(e,u):l?l.appendChild(e):va.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},qp=function(e,t,n,i,o,l){var u=e._gsap,f=o||Lm(e,!0),h=u.xOrigin||0,p=u.yOrigin||0,m=u.xOffset||0,g=u.yOffset||0,v=f[0],E=f[1],M=f[2],y=f[3],x=f[4],R=f[5],C=t.split(" "),T=parseFloat(C[0])||0,D=parseFloat(C[1])||0,N,I,F,A;n?f!==ql&&(I=v*y-E*M)&&(F=T*(y/I)+D*(-M/I)+(M*R-y*x)/I,A=T*(-E/I)+D*(v/I)-(v*R-E*x)/I,T=F,D=A):(N=Py(e),T=N.x+(~C[0].indexOf("%")?T/100*N.width:T),D=N.y+(~(C[1]||C[0]).indexOf("%")?D/100*N.height:D)),i||i!==!1&&u.smooth?(x=T-h,R=D-p,u.xOffset=m+(x*v+R*M)-x,u.yOffset=g+(x*E+R*y)-R):u.xOffset=u.yOffset=0,u.xOrigin=T,u.yOrigin=D,u.smooth=!!i,u.origin=t,u.originIsAbsolute=!!n,e.style[oi]="0px 0px",l&&(Es(l,u,"xOrigin",h,T),Es(l,u,"yOrigin",p,D),Es(l,u,"xOffset",m,u.xOffset),Es(l,u,"yOffset",g,u.yOffset)),e.setAttribute("data-svg-origin",T+" "+D)},Kl=function(e,t){var n=e._gsap||new gy(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,o=n.scaleX<0,l="px",u="deg",f=getComputedStyle(e),h=sr(e,oi)||"0",p,m,g,v,E,M,y,x,R,C,T,D,N,I,F,A,b,B,K,q,ce,re,Q,oe,z,ue,le,k,te,Re,J,Z;return p=m=g=M=y=x=R=C=T=0,v=E=1,n.svg=!!(e.getCTM&&Ly(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(i[$t]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[$t]!=="none"?f[$t]:"")),i.scale=i.rotate=i.translate="none"),I=Lm(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),h=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",oe=""):oe=!t&&e.getAttribute("data-svg-origin"),qp(e,oe||h,!!oe||n.originIsAbsolute,n.smooth!==!1,I)),D=n.xOrigin||0,N=n.yOrigin||0,I!==ql&&(B=I[0],K=I[1],q=I[2],ce=I[3],p=re=I[4],m=Q=I[5],I.length===6?(v=Math.sqrt(B*B+K*K),E=Math.sqrt(ce*ce+q*q),M=B||K?oa(K,B)*ro:0,R=q||ce?oa(q,ce)*ro+M:0,R&&(E*=Math.abs(Math.cos(R*xa))),n.svg&&(p-=D-(D*B+N*q),m-=N-(D*K+N*ce))):(Z=I[6],Re=I[7],le=I[8],k=I[9],te=I[10],J=I[11],p=I[12],m=I[13],g=I[14],F=oa(Z,te),y=F*ro,F&&(A=Math.cos(-F),b=Math.sin(-F),oe=re*A+le*b,z=Q*A+k*b,ue=Z*A+te*b,le=re*-b+le*A,k=Q*-b+k*A,te=Z*-b+te*A,J=Re*-b+J*A,re=oe,Q=z,Z=ue),F=oa(-q,te),x=F*ro,F&&(A=Math.cos(-F),b=Math.sin(-F),oe=B*A-le*b,z=K*A-k*b,ue=q*A-te*b,J=ce*b+J*A,B=oe,K=z,q=ue),F=oa(K,B),M=F*ro,F&&(A=Math.cos(F),b=Math.sin(F),oe=B*A+K*b,z=re*A+Q*b,K=K*A-B*b,Q=Q*A-re*b,B=oe,re=z),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),v=rn(Math.sqrt(B*B+K*K+q*q)),E=rn(Math.sqrt(Q*Q+Z*Z)),F=oa(re,Q),R=Math.abs(F)>2e-4?F*ro:0,T=J?1/(J<0?-J:J):0),n.svg&&(oe=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dy(sr(e,$t)),oe&&e.setAttribute("transform",oe))),Math.abs(R)>90&&Math.abs(R)<270&&(o?(v*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,R+=R<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=g+l,n.scaleX=rn(v),n.scaleY=rn(E),n.rotation=rn(M)+u,n.rotationX=rn(y)+u,n.rotationY=rn(x)+u,n.skewX=R+u,n.skewY=C+u,n.transformPerspective=T+l,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(i[oi]=sf(h)),n.xOffset=n.yOffset=0,n.force3D=vi.force3D,n.renderTransform=n.svg?SP:by?Ny:yP,n.uncache=0,n},sf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vd=function(e,t,n){var i=Nn(t);return rn(parseFloat(t)+parseFloat(Ps(e,"x",n+"px",i)))+i},yP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ny(e,t)},to="0deg",Cl="0px",no=") ",Ny=function(e,t){var n=t||this,i=n.xPercent,o=n.yPercent,l=n.x,u=n.y,f=n.z,h=n.rotation,p=n.rotationY,m=n.rotationX,g=n.skewX,v=n.skewY,E=n.scaleX,M=n.scaleY,y=n.transformPerspective,x=n.force3D,R=n.target,C=n.zOrigin,T="",D=x==="auto"&&e&&e!==1||x===!0;if(C&&(m!==to||p!==to)){var N=parseFloat(p)*xa,I=Math.sin(N),F=Math.cos(N),A;N=parseFloat(m)*xa,A=Math.cos(N),l=Vd(R,l,I*A*-C),u=Vd(R,u,-Math.sin(N)*-C),f=Vd(R,f,F*A*-C+C)}y!==Cl&&(T+="perspective("+y+no),(i||o)&&(T+="translate("+i+"%, "+o+"%) "),(D||l!==Cl||u!==Cl||f!==Cl)&&(T+=f!==Cl||D?"translate3d("+l+", "+u+", "+f+") ":"translate("+l+", "+u+no),h!==to&&(T+="rotate("+h+no),p!==to&&(T+="rotateY("+p+no),m!==to&&(T+="rotateX("+m+no),(g!==to||v!==to)&&(T+="skew("+g+", "+v+no),(E!==1||M!==1)&&(T+="scale("+E+", "+M+no),R.style[$t]=T||"translate(0, 0)"},SP=function(e,t){var n=t||this,i=n.xPercent,o=n.yPercent,l=n.x,u=n.y,f=n.rotation,h=n.skewX,p=n.skewY,m=n.scaleX,g=n.scaleY,v=n.target,E=n.xOrigin,M=n.yOrigin,y=n.xOffset,x=n.yOffset,R=n.forceCSS,C=parseFloat(l),T=parseFloat(u),D,N,I,F,A;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=xa,h*=xa,D=Math.cos(f)*m,N=Math.sin(f)*m,I=Math.sin(f-h)*-g,F=Math.cos(f-h)*g,h&&(p*=xa,A=Math.tan(h-p),A=Math.sqrt(1+A*A),I*=A,F*=A,p&&(A=Math.tan(p),A=Math.sqrt(1+A*A),D*=A,N*=A)),D=rn(D),N=rn(N),I=rn(I),F=rn(F)):(D=m,F=g,N=I=0),(C&&!~(l+"").indexOf("px")||T&&!~(u+"").indexOf("px"))&&(C=Ps(v,"x",l,"px"),T=Ps(v,"y",u,"px")),(E||M||y||x)&&(C=rn(C+E-(E*D+M*I)+y),T=rn(T+M-(E*N+M*F)+x)),(i||o)&&(A=v.getBBox(),C=rn(C+i/100*A.width),T=rn(T+o/100*A.height)),A="matrix("+D+","+N+","+I+","+F+","+C+","+T+")",v.setAttribute("transform",A),R&&(v.style[$t]=A)},MP=function(e,t,n,i,o){var l=360,u=yn(o),f=parseFloat(o)*(u&&~o.indexOf("rad")?ro:1),h=f-i,p=i+h+"deg",m,g;return u&&(m=o.split("_")[1],m==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-l)),m==="cw"&&h<0?h=(h+l*zv)%l-~~(h/l)*l:m==="ccw"&&h>0&&(h=(h-l*zv)%l-~~(h/l)*l)),e._pt=g=new si(e._pt,t,n,i,h,sP),g.e=p,g.u="deg",e._props.push(n),g},jv=function(e,t){for(var n in t)e[n]=t[n];return e},EP=function(e,t,n){var i=jv({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",l=n.style,u,f,h,p,m,g,v,E;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),l[$t]=t,u=Kl(n,1),vo(n,$t),n.setAttribute("transform",h)):(h=getComputedStyle(n)[$t],l[$t]=t,u=Kl(n,1),l[$t]=h);for(f in zr)h=i[f],p=u[f],h!==p&&o.indexOf(f)<0&&(v=Nn(h),E=Nn(p),m=v!==E?Ps(n,f,h,E):parseFloat(h),g=parseFloat(p),e._pt=new si(e._pt,u,f,m,g-m,Xp),e._pt.u=E||0,e._props.push(f));jv(u,i)};ri("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",o="Left",l=(e<3?[t,n,i,o]:[t+o,t+n,i+n,i+o]).map(function(u){return e<2?a+u:"border"+u+a});rf[e>1?"border"+a:a]=function(u,f,h,p,m){var g,v;if(arguments.length<4)return g=l.map(function(E){return Dr(u,E,h)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(p+"").split(" "),v={},l.forEach(function(E,M){return v[E]=g[M]=g[M]||g[(M-1)/2|0]}),u.init(f,v,m)}});var Uy={name:"css",register:Yp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,o){var l=this._props,u=e.style,f=n.vars.startAt,h,p,m,g,v,E,M,y,x,R,C,T,D,N,I,F;Cm||Yp(),this.styles=this.styles||Cy(e),F=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(pi[M]&&_y(M,t,n,i,e,o)))){if(v=typeof p,E=rf[M],v==="function"&&(p=p.call(n,i,e,o),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=Xl(p)),E)E(this,e,M,p,n)&&(I=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",Rs.lastIndex=0,Rs.test(h)||(y=Nn(h),x=Nn(p)),x?y!==x&&(h=Ps(e,M,h,x)+x):y&&(p+=y),this.add(u,"setProperty",h,p,i,o,0,0,M),l.push(M),F.push(M,0,u[M]);else if(v!=="undefined"){if(f&&M in f?(h=typeof f[M]=="function"?f[M].call(n,i,e,o):f[M],yn(h)&&~h.indexOf("random(")&&(h=Xl(h)),Nn(h+"")||h==="auto"||(h+=vi.units[M]||Nn(Dr(e,M))||""),(h+"").charAt(1)==="="&&(h=Dr(e,M))):h=Dr(e,M),g=parseFloat(h),R=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),R&&(p=p.substr(2)),m=parseFloat(p),M in ir&&(M==="autoAlpha"&&(g===1&&Dr(e,"visibility")==="hidden"&&m&&(g=0),F.push("visibility",0,u.visibility),Es(this,u,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),M!=="scale"&&M!=="transform"&&(M=ir[M],~M.indexOf(",")&&(M=M.split(",")[0]))),C=M in zr,C){if(this.styles.save(M),T||(D=e._gsap,D.renderTransform&&!t.parseTransform||Kl(e,t.parseTransform),N=t.smoothOrigin!==!1&&D.smooth,T=this._pt=new si(this._pt,u,$t,0,1,D.renderTransform,D,0,-1),T.dep=1),M==="scale")this._pt=new si(this._pt,D,"scaleY",D.scaleY,(R?_a(D.scaleY,R+m):m)-D.scaleY||0,Xp),this._pt.u=0,l.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(oi,0,u[oi]),p=vP(p),D.svg?qp(e,p,0,N,0,this):(x=parseFloat(p.split(" ")[2])||0,x!==D.zOrigin&&Es(this,D,"zOrigin",D.zOrigin,x),Es(this,u,M,sf(h),sf(p)));continue}else if(M==="svgOrigin"){qp(e,p,1,N,0,this);continue}else if(M in Iy){MP(this,D,M,g,R?_a(g,R+p):p);continue}else if(M==="smoothOrigin"){Es(this,D,"smooth",D.smooth,p);continue}else if(M==="force3D"){D[M]=p;continue}else if(M==="transform"){EP(this,p,e);continue}}else M in u||(M=Ua(M)||M);if(C||(m||m===0)&&(g||g===0)&&!rP.test(p)&&M in u)y=(h+"").substr((g+"").length),m||(m=0),x=Nn(p)||(M in vi.units?vi.units[M]:y),y!==x&&(g=Ps(e,M,h,x)),this._pt=new si(this._pt,C?D:u,M,g,(R?_a(g,R+m):m)-g,!C&&(x==="px"||M==="zIndex")&&t.autoRound!==!1?aP:Xp),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=oP);else if(M in u)_P.call(this,e,M,h,R?R+p:p);else if(M in e)this.add(e,M,h||e[M],R?R+p:p,i,o);else if(M!=="parseTransform"){xm(M,p);continue}C||(M in u?F.push(M,0,u[M]):F.push(M,1,h||e[M])),l.push(M)}}I&&Ey(this)},render:function(e,t){if(t.tween._time||!bm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Dr,aliases:ir,getSetter:function(e,t,n){var i=ir[t];return i&&i.indexOf(",")<0&&(t=i),t in zr&&t!==oi&&(e._gsap.x||Dr(e,"x"))?n&&Bv===n?t==="scale"?fP:cP:(Bv=n||{})&&(t==="scale"?hP:dP):e.style&&!gm(e.style[t])?lP:~t.indexOf("-")?uP:Am(e,t)},core:{_removeProperty:vo,_getMatrix:Lm}};ai.utils.checkPrefix=Ua;ai.core.getStyleSaver=Cy;(function(a,e,t,n){var i=ri(a+","+e+","+t,function(o){zr[o]=1});ri(e,function(o){vi.units[o]="deg",Iy[o]=1}),ir[i[13]]=a+","+e,ri(n,function(o){var l=o.split(":");ir[l[1]]=i[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){vi.units[a]="px"});ai.registerPlugin(Uy);var Wc=ai.registerPlugin(Uy)||ai;Wc.core.Tween;class TP extends vn{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,o=t.textureHeight!==void 0?t.textureHeight:512,l=t.clipBias!==void 0?t.clipBias:0,u=t.alpha!==void 0?t.alpha:1,f=t.time!==void 0?t.time:0,h=t.waterNormals!==void 0?t.waterNormals:null,p=t.sunDirection!==void 0?t.sunDirection:new j(.70707,.70707,0),m=new nt(t.sunColor!==void 0?t.sunColor:16777215),g=new nt(t.waterColor!==void 0?t.waterColor:8355711),v=t.eye!==void 0?t.eye:new j(0,0,0),E=t.distortionScale!==void 0?t.distortionScale:20,M=t.side!==void 0?t.side:or,y=t.fog!==void 0?t.fog:!1,x=new _s,R=new j,C=new j,T=new j,D=new ot,N=new j(0,0,-1),I=new At,F=new j,A=new j,b=new At,B=new ot,K=new Dn,q=new Cs(i,o),ce={name:"MirrorShader",uniforms:Kc.merge([Ae.fog,Ae.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ot},sunColor:{value:new nt(8355711)},sunDirection:{value:new j(.70707,.70707,0)},eye:{value:new j},waterColor:{value:new nt(5592405)}}]),vertexShader:`
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
				}`},re=new lr({name:ce.name,uniforms:Kc.clone(ce.uniforms),vertexShader:ce.vertexShader,fragmentShader:ce.fragmentShader,lights:!0,side:M,fog:y});re.uniforms.mirrorSampler.value=q.texture,re.uniforms.textureMatrix.value=B,re.uniforms.alpha.value=u,re.uniforms.time.value=f,re.uniforms.normalSampler.value=h,re.uniforms.sunColor.value=m,re.uniforms.waterColor.value=g,re.uniforms.sunDirection.value=p,re.uniforms.distortionScale.value=E,re.uniforms.eye.value=v,n.material=re,n.onBeforeRender=function(Q,oe,z){if(C.setFromMatrixPosition(n.matrixWorld),T.setFromMatrixPosition(z.matrixWorld),D.extractRotation(n.matrixWorld),R.set(0,0,1),R.applyMatrix4(D),F.subVectors(C,T),F.dot(R)>0)return;F.reflect(R).negate(),F.add(C),D.extractRotation(z.matrixWorld),N.set(0,0,-1),N.applyMatrix4(D),N.add(T),A.subVectors(C,N),A.reflect(R).negate(),A.add(C),K.position.copy(F),K.up.set(0,1,0),K.up.applyMatrix4(D),K.up.reflect(R),K.lookAt(A),K.far=z.far,K.updateMatrixWorld(),K.projectionMatrix.copy(z.projectionMatrix),B.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),B.multiply(K.projectionMatrix),B.multiply(K.matrixWorldInverse),x.setFromNormalAndCoplanarPoint(R,C),x.applyMatrix4(K.matrixWorldInverse),I.set(x.normal.x,x.normal.y,x.normal.z,x.constant);const ue=K.projectionMatrix;b.x=(Math.sign(I.x)+ue.elements[8])/ue.elements[0],b.y=(Math.sign(I.y)+ue.elements[9])/ue.elements[5],b.z=-1,b.w=(1+ue.elements[10])/ue.elements[14],I.multiplyScalar(2/I.dot(b)),ue.elements[2]=I.x,ue.elements[6]=I.y,ue.elements[10]=I.z+1-l,ue.elements[14]=I.w,v.setFromMatrixPosition(z.matrixWorld);const le=Q.getRenderTarget(),k=Q.xr.enabled,te=Q.shadowMap.autoUpdate;n.visible=!1,Q.xr.enabled=!1,Q.shadowMap.autoUpdate=!1,Q.setRenderTarget(q),Q.state.buffers.depth.setMask(!0),Q.autoClear===!1&&Q.clear(),Q.render(oe,K),n.visible=!0,Q.xr.enabled=k,Q.shadowMap.autoUpdate=te,Q.setRenderTarget(le);const Re=z.viewport;Re!==void 0&&Q.state.viewport(Re)}}}function wP(){const[a,e]=gs.useState(!1),t=gs.useRef(!1),n=gs.useRef({x:0,y:0}),i=gs.useRef({horizontal:0,vertical:0}),o=gs.useRef({x:4,y:1,z:-10}),l=new j(.25,.55,0),u=gs.useRef(null);return gs.useEffect(()=>{var Re,J;const f=()=>{var we;const Z=document.querySelector(".window-wrapper"),me=((we=window.visualViewport)==null?void 0:we.height)||window.innerHeight,ve=window.innerHeight-me;ve>0&&window.innerWidth<=768?Z.style.paddingBottom=`${ve}px`:Z.style.paddingBottom="0"};f(),(Re=window.visualViewport)==null||Re.addEventListener("resize",f),f(),(J=window.visualViewport)==null||J.addEventListener("resize",f),(()=>{window.innerWidth<=768?o.current={x:2.5,y:1,z:-12}:o.current={x:3.5,y:1,z:-10}})();const p=document.getElementById("canvas"),m={width:window.innerWidth,height:window.innerHeight},g=new tT,v=new Dn(25,m.width/m.height,.1,1e4);v.position.set(o.current.x-25,o.current.y+2,o.current.z),v.lookAt(l),g.add(v),a&&(()=>{Wc.to(v.position,{x:o.current.x,y:o.current.y,duration:3.5,ease:"circ.out",onUpdate:()=>{v.lookAt(l)}})})();const M=Math.sqrt(o.current.x**2+o.current.y**2+o.current.z**2);i.current.horizontal=Math.atan2(o.current.x,o.current.z),i.current.vertical=Math.asin(o.current.y/M);const y=new CC({canvas:p,antialias:!0});y.shadowMap.enabled=!0,y.shadowMap.type=qv,y.setSize(m.width,m.height);const x=new LT(16777215,1);g.add(x);const R=new Pp(16777215,5);R.position.set(-100,20,1e3),R.castShadow=!0,R.shadow.mapSize.width=4096,R.shadow.mapSize.height=4096,R.shadow.camera.near=.5,R.shadow.camera.far=1500,R.shadow.camera.left=-50,R.shadow.camera.right=50,R.shadow.camera.top=50,R.shadow.camera.bottom=-50,g.add(R);const C=new Pp(16777215,.6);C.position.set(0,300,-100),C.castShadow=!0,C.shadow.mapSize.width=512,C.shadow.mapSize.height=512,g.add(C);const T=new Ra(500,500),D=new lf({color:11184810}),N=new vn(T,D);N.rotation.x=-Math.PI/2,N.position.y=0,N.position.z=-243,N.receiveShadow=!0,g.add(N);const I=new bC;I.load("./models/testmodel0101_v2.gltf",Z=>{const me=Z.scene,he=Z.animations;if(me.traverse(ve=>{ve instanceof vn&&(ve.castShadow=!0,ve.receiveShadow=!0)}),g.add(me),e(!0),he&&he.length>0){const ve=new ev(me);he.forEach(lt=>{ve.clipAction(lt).play()});const we=new Q0,He=()=>{requestAnimationFrame(He);const lt=we.getDelta();ve.update(lt),y.render(g,v)};He()}}),I.load("./models/testmodel_child_.gltf",Z=>{const me=Z.scene,he=Z.animations;if(me.position.set(0,0,-.75),me.traverse(ve=>{ve instanceof vn&&(ve.castShadow=!0,ve.receiveShadow=!0)}),g.add(me),he&&he.length>0){const ve=new ev(me);he.forEach(lt=>{ve.clipAction(lt).play()});const we=new Q0,He=()=>{requestAnimationFrame(He);const lt=we.getDelta();ve.update(lt),y.render(g,v)};He()}});const F=new ff;F.scale.setScalar(5e4);const A=F.material.uniforms;A.turbidity.value=.5,A.rayleigh.value=.95,A.mieCoefficient.value=.005,A.mieDirectionalG.value=.8,A.sunPosition.value.set(-10,0,100),g.add(F);const b=new Ra(1e3,1e3),B=new bx().load("./textures/eslint.config.jpg",Z=>{Z.wrapS=Z.wrapT=mo}),K=new TP(b,{textureWidth:512,textureHeight:512,waterNormals:B,sunDirection:new j(-1,-1,-1),sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:g.fog!==void 0});K.rotation.x=-Math.PI/2,g.add(K),u.current=K,K.position.y=-4;const q=new j;q.set(-10,15,100).normalize(),K.material.uniforms.sunDirection.value.copy(q);const ce=()=>{requestAnimationFrame(ce),K.material.uniforms.time.value+=1/1e3,y.render(g,v)};ce();const re=()=>{m.width=window.innerWidth,m.height=window.innerHeight,v.aspect=m.width/m.height,v.updateProjectionMatrix(),y.setSize(m.width,m.height)},Q=Z=>{t.current=!0,n.current={x:Z.clientX,y:Z.clientY}},oe=Z=>{if(t.current){const me=Z.clientX-n.current.x,he=Z.clientY-n.current.y;n.current={x:Z.clientX,y:Z.clientY};const ve=.005;i.current.horizontal+=me*ve,i.current.vertical-=he*ve,i.current.vertical=Math.max(-Math.PI/2,Math.min(Math.PI/2,i.current.vertical));const we=M*Math.cos(i.current.vertical)*Math.sin(i.current.horizontal),He=Math.max(1,M*Math.sin(i.current.vertical)),lt=M*Math.cos(i.current.vertical)*Math.cos(i.current.horizontal);v.position.set(we,He,lt),v.lookAt(l)}},z=()=>{t.current&&(t.current=!1,Wc.to(i.current,{horizontal:Math.atan2(o.current.x,o.current.z),vertical:Math.asin(o.current.y/M),duration:1,ease:"power2.out",onUpdate:()=>{const Z=M*Math.cos(i.current.vertical)*Math.sin(i.current.horizontal),me=Math.max(1,M*Math.sin(i.current.vertical)),he=M*Math.cos(i.current.vertical)*Math.cos(i.current.horizontal);v.position.set(Z,me,he),v.lookAt(l)}}))},ue=Z=>{Z.touches.length===1&&(t.current=!0,n.current={x:Z.touches[0].clientX,y:Z.touches[0].clientY})},le=Z=>{if(t.current&&Z.touches.length===1){const me=Z.touches[0].clientX-n.current.x,he=Z.touches[0].clientY-n.current.y;n.current={x:Z.touches[0].clientX,y:Z.touches[0].clientY};const ve=.005;i.current.horizontal+=me*ve,i.current.vertical-=he*ve,i.current.vertical=Math.max(-Math.PI/2,Math.min(Math.PI/2,i.current.vertical));const we=Math.sqrt(o.current.x**2+o.current.y**2+o.current.z**2),He=we*Math.cos(i.current.vertical)*Math.sin(i.current.horizontal),lt=Math.max(1,we*Math.sin(i.current.vertical)),ut=we*Math.cos(i.current.vertical)*Math.cos(i.current.horizontal);v.position.set(He,lt,ut),v.lookAt(l)}},k=()=>{t.current&&(t.current=!1,Wc.to(i.current,{horizontal:Math.atan2(o.current.x,o.current.z),vertical:Math.asin(o.current.y/Math.sqrt(o.current.x**2+o.current.y**2+o.current.z**2)),duration:1,ease:"power2.out",onUpdate:()=>{const Z=Math.sqrt(o.current.x**2+o.current.y**2+o.current.z**2),me=Z*Math.cos(i.current.vertical)*Math.sin(i.current.horizontal),he=Math.max(1,Z*Math.sin(i.current.vertical)),ve=Z*Math.cos(i.current.vertical)*Math.cos(i.current.horizontal);v.position.set(me,he,ve),v.lookAt(l)}}))};window.addEventListener("resize",re),p.addEventListener("mousedown",Q),window.addEventListener("mousemove",oe),window.addEventListener("mouseup",z),p.addEventListener("touchstart",ue),window.addEventListener("touchmove",le),window.addEventListener("touchend",k);const te=()=>{requestAnimationFrame(te),y.render(g,v)};return te(),()=>{var Z;window.removeEventListener("resize",re),p.removeEventListener("mousedown",Q),window.removeEventListener("mousemove",oe),window.removeEventListener("mouseup",z),p.removeEventListener("touchstart",ue),window.removeEventListener("touchmove",le),window.removeEventListener("touchend",k),(Z=window.visualViewport)==null||Z.removeEventListener("resize",f)}},[a]),qt.jsx(qt.Fragment,{children:qt.jsxs("div",{className:"window-wrapper",children:[qt.jsx("div",{className:"noise"}),qt.jsx("div",{className:`loading ${a?"hidden":""}`,children:qt.jsxs("div",{className:"loading-wrapper",children:[qt.jsx("img",{className:"loading-img",src:"./images/loading.gif",alt:"Loading"}),qt.jsx("p",{className:"loading-text",children:"Loading..."})]})}),qt.jsx("canvas",{className:"canvas",id:"canvas",style:{width:"100vw",height:"100vh",touchAction:"none"}}),qt.jsx("div",{className:"container",children:qt.jsxs("div",{className:"inner",children:[qt.jsx("div",{className:"img2025",children:qt.jsx("img",{src:"./images/2025.svg",alt:"二〇二五"})}),qt.jsx("div",{className:"text",children:qt.jsxs("p",{children:["あけましておめでとうございます。",qt.jsx("br",{}),"昨年はいろいろとお世話になり、",qt.jsx("wbr",{}),"ありがとうございました。",qt.jsx("br",{}),"本年もどうぞよろしくお願いいたします。"]})}),qt.jsx("div",{className:"copy-text",children:qt.jsx("img",{src:"./images/text_2.svg",alt:"日の目を見る",width:"174",height:"680"})})]})}),qt.jsx("div",{className:"fadein"})]})})}SM.createRoot(document.getElementById("root")).render(qt.jsx(gs.StrictMode,{children:qt.jsx(wP,{})}));

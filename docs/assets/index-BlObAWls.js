(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var bh={exports:{}},_l={};var Gv;function FE(){if(Gv)return _l;Gv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:f}}return _l.Fragment=e,_l.jsx=i,_l.jsxs=i,_l}var Vv;function HE(){return Vv||(Vv=1,bh.exports=FE()),bh.exports}var $t=HE(),Ah={exports:{}},se={};var Xv;function GE(){if(Xv)return se;Xv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function R(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function P(z,mt,At){this.props=z,this.context=mt,this.refs=x,this.updater=At||w}P.prototype.isReactComponent={},P.prototype.setState=function(z,mt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,mt,"setState")},P.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function H(){}H.prototype=P.prototype;function C(z,mt,At){this.props=z,this.context=mt,this.refs=x,this.updater=At||w}var N=C.prototype=new H;N.constructor=C,M(N,P.prototype),N.isPureReactComponent=!0;var U=Array.isArray;function D(){}var T={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function G(z,mt,At){var Q=At.ref;return{$$typeof:o,type:z,key:mt,ref:Q!==void 0?Q:null,props:At}}function Z(z,mt){return G(z.type,mt,z.props)}function Y(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function $(z){var mt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(At){return mt[At]})}var V=/\/+/g;function tt(z,mt){return typeof z=="object"&&z!==null&&z.key!=null?$(""+z.key):mt.toString(36)}function W(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(D,D):(z.status="pending",z.then(function(mt){z.status==="pending"&&(z.status="fulfilled",z.value=mt)},function(mt){z.status==="pending"&&(z.status="rejected",z.reason=mt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function X(z,mt,At,Q,ht){var Tt=typeof z;(Tt==="undefined"||Tt==="boolean")&&(z=null);var It=!1;if(z===null)It=!0;else switch(Tt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(z.$$typeof){case o:case e:It=!0;break;case S:return It=z._init,X(It(z._payload),mt,At,Q,ht)}}if(It)return ht=ht(z),It=Q===""?"."+tt(z,0):Q,U(ht)?(At="",It!=null&&(At=It.replace(V,"$&/")+"/"),X(ht,mt,At,"",function(Ve){return Ve})):ht!=null&&(Y(ht)&&(ht=Z(ht,At+(ht.key==null||z&&z.key===ht.key?"":(""+ht.key).replace(V,"$&/")+"/")+It)),mt.push(ht)),1;It=0;var _t=Q===""?".":Q+":";if(U(z))for(var Rt=0;Rt<z.length;Rt++)Q=z[Rt],Tt=_t+tt(Q,Rt),It+=X(Q,mt,At,Tt,ht);else if(Rt=R(z),typeof Rt=="function")for(z=Rt.call(z),Rt=0;!(Q=z.next()).done;)Q=Q.value,Tt=_t+tt(Q,Rt++),It+=X(Q,mt,At,Tt,ht);else if(Tt==="object"){if(typeof z.then=="function")return X(W(z),mt,At,Q,ht);throw mt=String(z),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return It}function ut(z,mt,At){if(z==null)return z;var Q=[],ht=0;return X(z,Q,"","",function(Tt){return mt.call(At,Tt,ht++)}),Q}function ot(z){if(z._status===-1){var mt=z._result,At=mt();At.then(function(Q){(z._status===0||z._status===-1)&&(z._status=1,z._result=Q,At.status===void 0&&(At.status="fulfilled",At.value=Q))},function(Q){(z._status===0||z._status===-1)&&(z._status=2,z._result=Q,At.status===void 0&&(At.status="rejected",At.reason=Q))}),z._status===-1&&(z._status=0,z._result=At)}if(z._status===1)return z._result.default;throw z._result}var dt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function yt(z){var mt=T.T,At={};At.types=mt!==null?mt.types:null,T.T=At;try{var Q=z(),ht=T.S;ht!==null&&ht(At,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(D,dt)}catch(Tt){dt(Tt)}finally{mt!==null&&At.types!==null&&(mt.types=At.types),T.T=mt}}function Qt(z){var mt=T.T;if(mt!==null){var At=mt.types;At===null?mt.types=[z]:At.indexOf(z)===-1&&At.push(z)}else yt(Qt.bind(null,z))}var Yt={map:ut,forEach:function(z,mt,At){ut(z,function(){mt.apply(this,arguments)},At)},count:function(z){var mt=0;return ut(z,function(){mt++}),mt},toArray:function(z){return ut(z,function(mt){return mt})||[]},only:function(z){if(!Y(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return se.Activity=g,se.Children=Yt,se.Component=P,se.Fragment=i,se.Profiler=l,se.PureComponent=C,se.StrictMode=s,se.Suspense=p,se.ViewTransition=v,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,se.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},se.addTransitionType=Qt,se.cache=function(z){return function(){return z.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(z,mt,At){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Q=M({},z.props),ht=z.key;if(mt!=null)for(Tt in mt.key!==void 0&&(ht=""+mt.key),mt)!L.call(mt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&mt.ref===void 0||(Q[Tt]=mt[Tt]);var Tt=arguments.length-2;if(Tt===1)Q.children=At;else if(1<Tt){for(var It=Array(Tt),_t=0;_t<Tt;_t++)It[_t]=arguments[_t+2];Q.children=It}return G(z.type,ht,Q)},se.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},se.createElement=function(z,mt,At){var Q,ht={},Tt=null;if(mt!=null)for(Q in mt.key!==void 0&&(Tt=""+mt.key),mt)L.call(mt,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ht[Q]=mt[Q]);var It=arguments.length-2;if(It===1)ht.children=At;else if(1<It){for(var _t=Array(It),Rt=0;Rt<It;Rt++)_t[Rt]=arguments[Rt+2];ht.children=_t}if(z&&z.defaultProps)for(Q in It=z.defaultProps,It)ht[Q]===void 0&&(ht[Q]=It[Q]);return G(z,Tt,ht)},se.createRef=function(){return{current:null}},se.forwardRef=function(z){return{$$typeof:h,render:z}},se.isValidElement=Y,se.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:ot}},se.memo=function(z,mt){return{$$typeof:m,type:z,compare:mt===void 0?null:mt}},se.startTransition=yt,se.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},se.use=function(z){return T.H.use(z)},se.useActionState=function(z,mt,At){return T.H.useActionState(z,mt,At)},se.useCallback=function(z,mt){return T.H.useCallback(z,mt)},se.useContext=function(z){return T.H.useContext(z)},se.useDebugValue=function(){},se.useDeferredValue=function(z,mt){return T.H.useDeferredValue(z,mt)},se.useEffect=function(z,mt){return T.H.useEffect(z,mt)},se.useEffectEvent=function(z){return T.H.useEffectEvent(z)},se.useId=function(){return T.H.useId()},se.useImperativeHandle=function(z,mt,At){return T.H.useImperativeHandle(z,mt,At)},se.useInsertionEffect=function(z,mt){return T.H.useInsertionEffect(z,mt)},se.useLayoutEffect=function(z,mt){return T.H.useLayoutEffect(z,mt)},se.useMemo=function(z,mt){return T.H.useMemo(z,mt)},se.useOptimistic=function(z,mt){return T.H.useOptimistic(z,mt)},se.useReducer=function(z,mt,At){return T.H.useReducer(z,mt,At)},se.useRef=function(z){return T.H.useRef(z)},se.useState=function(z){return T.H.useState(z)},se.useSyncExternalStore=function(z,mt,At){return T.H.useSyncExternalStore(z,mt,At)},se.useTransition=function(){return T.H.useTransition()},se.version="19.3.0",se}var kv;function pm(){return kv||(kv=1,Ah.exports=GE()),Ah.exports}var xe=pm(),Rh={exports:{}},vl={},Ch={exports:{}},wh={};var Wv;function VE(){return Wv||(Wv=1,(function(o){function e(W,X){var ut=W.length;W.push(X);t:for(;0<ut;){var ot=ut-1>>>1,dt=W[ot];if(0<l(dt,X))W[ot]=X,W[ut]=dt,ut=ot;else break t}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var X=W[0],ut=W.pop();if(ut!==X){W[0]=ut;t:for(var ot=0,dt=W.length,yt=dt>>>1;ot<yt;){var Qt=2*(ot+1)-1,Yt=W[Qt],z=Qt+1,mt=W[z];if(0>l(Yt,ut))z<dt&&0>l(mt,Yt)?(W[ot]=mt,W[z]=ut,ot=z):(W[ot]=Yt,W[Qt]=ut,ot=Qt);else if(z<dt&&0>l(mt,ut))W[ot]=mt,W[z]=ut,ot=z;else break t}}return X}function l(W,X){var ut=W.sortIndex-X.sortIndex;return ut!==0?ut:W.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,g=null,v=3,y=!1,R=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var X=i(m);X!==null;){if(X.callback===null)s(m);else if(X.startTime<=W)s(m),X.sortIndex=X.expirationTime,e(p,X);else break;X=i(m)}}function N(W){if(w=!1,C(W),!R)if(i(p)!==null)R=!0,U||(U=!0,Y());else{var X=i(m);X!==null&&tt(N,X.startTime-W)}}var U=!1,D=-1,T=5,L=-1;function G(){return M?!0:!(o.unstable_now()-L<T)}function Z(){if(M=!1,U){var W=o.unstable_now();L=W;var X=!0;try{t:{R=!1,w&&(w=!1,P(D),D=-1),y=!0;var ut=v;try{e:{for(C(W),g=i(p);g!==null&&!(g.expirationTime>W&&G());){var ot=g.callback;if(typeof ot=="function"){g.callback=null,v=g.priorityLevel;var dt=ot(g.expirationTime<=W);if(W=o.unstable_now(),typeof dt=="function"){g.callback=dt,C(W),X=!0;break e}g===i(p)&&s(p),C(W)}else s(p);g=i(p)}if(g!==null)X=!0;else{var yt=i(m);yt!==null&&tt(N,yt.startTime-W),X=!1}}break t}finally{g=null,v=ut,y=!1}X=void 0}}finally{X?Y():U=!1}}}var Y;if(typeof H=="function")Y=function(){H(Z)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,V=$.port2;$.port1.onmessage=Z,Y=function(){V.postMessage(null)}}else Y=function(){x(Z,0)};function tt(W,X){D=x(function(){W(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(W){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var ut=v;v=X;try{return W()}finally{v=ut}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(W,X){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ut=v;v=W;try{return X()}finally{v=ut}},o.unstable_scheduleCallback=function(W,X,ut){var ot=o.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?ot+ut:ot):ut=ot,W){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=ut+dt,W={id:S++,callback:X,priorityLevel:W,startTime:ut,expirationTime:dt,sortIndex:-1},ut>ot?(W.sortIndex=ut,e(m,W),i(p)===null&&W===i(m)&&(w?(P(D),D=-1):w=!0,tt(N,ut-ot))):(W.sortIndex=dt,e(p,W),R||y||(R=!0,U||(U=!0,Y()))),W},o.unstable_shouldYield=G,o.unstable_wrapCallback=function(W){var X=v;return function(){var ut=v;v=X;try{return W.apply(this,arguments)}finally{v=ut}}}})(wh)),wh}var qv;function XE(){return qv||(qv=1,Ch.exports=VE()),Ch.exports}var Dh={exports:{}},Un={};var Yv;function kE(){if(Yv)return Un;Yv=1;var o=pm();function e(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===d?d:""+y,children:S,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(S){return{$$typeof:f,_reason:S}},Un.createPortal=function(S,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(S,g,null,v)},Un.flushSync=function(S){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,S)return S()}finally{p.T=g,s.p=v,s.d.f()}},Un.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(S,g))},Un.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Un.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:R,fetchPriority:w}):v==="script"&&s.d.X(S,{crossOrigin:y,integrity:R,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Un.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(S,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(S)},Un.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);s.d.L(S,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Un.preloadModule=function(S,g){if(typeof S=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(S)},Un.requestFormReset=function(S){s.d.r(S)},Un.unstable_batchedUpdates=function(S,g){return S(g)},Un.useFormState=function(S,g,v){return p.H.useFormState(S,g,v)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var Zv;function hx(){if(Zv)return Dh.exports;Zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Dh.exports=kE(),Dh.exports}var Kv;function WE(){if(Kv)return vl;Kv=1;var o=XE(),e=pm(),i=hx();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===r)return p(u),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=c;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,r=c;break}if(A===r){_=!0,r=u,a=c;break}A=A.sibling}if(!_){for(A=c.child;A;){if(A===a){_=!0,a=c,r=u;break}if(A===r){_=!0,r=c,a=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,r,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,r,u,c))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,P=null;function H(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(x=t),!0):!1}function N(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var c=n;c;c=a(c))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var D=Object.assign,T=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),Qt=Symbol.for("react.legacy_hidden"),Yt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),At=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case $:return"Profiler";case Y:return"StrictMode";case X:return"Suspense";case ut:return"SuspenseList";case yt:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case G:return"Portal";case tt:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case W:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ot:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case dt:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var It=Array.isArray,_t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ve={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function Me(t){return{current:t}}function ee(t){0>ge||(t.current=pe[ge],pe[ge]=null,ge--)}function ie(t,n){ge++,pe[ge]=t.current,t.current=n}var Xe=Me(null),hn=Me(null),Ie=Me(null),tn=Me(null);function q(t,n){switch(ie(Ie,n),ie(hn,t),ie(Xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Q_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Q_(n),t=J_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Xe),ie(Xe,t)}function an(){ee(Xe),ee(hn),ee(Ie)}function Pe(t){var n=t.memoizedState;n!==null&&(ks._currentValue=n.memoizedState,ie(tn,t)),n=Xe.current;var a=J_(n,t.type);n!==a&&(ie(hn,t),ie(Xe,a))}function O(t){hn.current===t&&(ee(Xe),ee(hn)),tn.current===t&&(ee(tn),ks._currentValue=Ve)}var E,nt;function lt(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+t+nt}var pt=!1;function bt(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Lt){var K=Lt}Reflect.construct(t,[],St)}else{try{St.call()}catch(Lt){K=Lt}St=!1;try{var st=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(st!==void 0?Object.defineProperty(t.prototype,"props",st):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){K=Lt}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Lt){if(Lt&&K&&typeof Lt.stack=="string")return[Lt.stack,K.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),_=c[0],A=c[1];if(_&&A){var I=_.split(`
`),j=A.split(`
`);for(u=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(r===I.length||u===j.length)for(r=I.length-1,u=j.length-1;1<=r&&0<=u&&I[r]!==j[u];)u--;for(;1<=r&&0<=u;r--,u--)if(I[r]!==j[u]){if(r!==1||u!==1)do if(r--,u--,0>u||I[r]!==j[u]){var ct=`
`+I[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?lt(a):""}function Dt(t,n){switch(t.tag){case 26:case 27:case 5:return lt(t.type);case 16:return lt("Lazy");case 13:return t.child!==n&&n!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return lt("Activity");case 30:return lt("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Dt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mt=Object.prototype.hasOwnProperty,wt=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,Ot=o.unstable_requestPaint,Vt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,k=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,xt=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,Gt=o.log,Et=o.unstable_setDisableYieldValue,Jt=null,Ht=null;function Ce(t){if(typeof Gt=="function"&&Et(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Jt,t)}catch{}}var ue=Math.clz32?Math.clz32:$c,ti=Math.log,pi=Math.LN2;function $c(t){return t>>>=0,t===0?32:31-(ti(t)/pi|0)|0}var ss=256,br=262144,Ga=4194304;function ha(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ar(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?u=ha(r):(_&=A,_!==0?u=ha(_):a||(a=A&~t,a!==0&&(u=ha(a))))):(A=r&~c,A!==0?u=ha(A):_!==0?u=ha(_):a||(a=r&~t,a!==0&&(u=ha(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Va(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Gi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-ue(a),u=1<<r;n|=t[r],a&=~u}return n}function Eo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var t=Ga;return Ga<<=1,(Ga&62914560)===0&&(Ga=4194304),t}function os(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Vi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vl(t,n,a,r,u,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-ue(a),St=1<<ct;A[ct]=0,I[ct]=-1;var K=j[ct];if(K!==null)for(j[ct]=null,ct=0;ct<K.length;ct++){var st=K[ct];st!==null&&(st.lane&=-536870913)}a&=~St}r!==0&&Rr(t,r,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function Rr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ue(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function bo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ue(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Ao(t,n){var a=n&-n;return a=(a&42)!==0?1:Ro(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ro(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Co(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xl(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:Ov(t.type))}function kl(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var mi=Math.random().toString(36).slice(2),b="__reactFiber$"+mi,B="__reactProps$"+mi,ft="__reactContainer$"+mi,at="__reactEvents$"+mi,rt="__reactListeners$"+mi,zt="__reactHandles$"+mi,Xt="__reactResources$"+mi,Ut="__reactMarker$"+mi,qt="__reactLoad$"+mi;function Zt(t){delete t[b],delete t[B],delete t[rt],delete t[zt]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ft]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=pv(t);t!==null;){if(a=t[b])return a;t=pv(t)}return n}t=a,a=t.parentNode}return null}function ce(t){if(t=t[b]||t[ft]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ye(t){var n=t[Xt];return n||(n=t[Xt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Ut]=!0}function Ze(t){t[qt]=void 0}var He=new Set,Sn={};function Bt(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(Sn[t]=n,t=0;t<n.length;t++)He.add(n[t])}var we=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},ei={};function Xi(t){return Mt.call(ei,t)?!0:Mt.call(Gn,t)?!1:we.test(t)?ei[t]=!0:(Gn[t]=!0,!1)}var ve=!1;function Be(){var t=ve;return ve=!1,t}function Je(t,n,a){if(Xi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ni(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function tf(t){if(!t._valueTracker){var n=pa(t)?"checked":"value";t._valueTracker=Wl(t,n,""+t[n])}}function Bm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=pa(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var sM=/[\n"\\]/g;function gi(t){return t.replace(sM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ef(t,n,a,r,u,c,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ln(n)):t.value!==""+ln(n)&&(t.value=""+ln(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?nf(t,ln(t.value)):nf(t,ln(n)):a!=null?nf(t,ln(a)):r!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ln(A):t.removeAttribute("name")}function Fm(t,n,a,r,u,c,_,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){tf(t);return}a=a!=null?""+ln(a):"",n=n!=null?""+ln(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),tf(t)}function nf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ls(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Hm(t,n,a){if(n!=null&&(n=""+ln(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ln(a):""}function Gm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ln(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),tf(t)}function us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var oM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||oM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ve=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(Vm(t,u,r),ve=!0)}else for(var c in n)n.hasOwnProperty(c)&&Vm(t,c,n[c])}function af(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(t){return uM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var rf=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cs=null,fs=null;function km(t){var n=ce(t);if(n&&(t=n.stateNode)){var a=t[B]||null;t:switch(t=n.stateNode,n.type){case"input":if(ef(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[B]||null;if(!u)throw Error(s(90));ef(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Bm(r)}break t;case"textarea":Hm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ls(t,!!a.multiple,n,!1)}}}var of=!1;function Wm(t,n,a){if(of)return t(n,a);of=!0;try{var r=t(n);return r}finally{if(of=!1,(cs!==null||fs!==null)&&(qu(),cs&&(n=cs,t=fs,fs=cs=null,km(n),t)))for(n=0;n<t.length;n++)km(t[n])}}function wo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[B]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(ma)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{lf=!1}var Xa=null,uf=null,Yl=null;function qm(){if(Yl)return Yl;var t,n=uf,a=n.length,r,u="value"in Xa?Xa.value:Xa.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[c-r];r++);return Yl=u.slice(t,1<r?1-r:void 0)}function Zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function Ym(){return!1}function Vn(t){function n(a,r,u,c,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Kl:Ym,this.isPropagationStopped=Ym,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Vn(ka),No=D({},ka,{view:0,detail:0}),cM=Vn(No),cf,ff,Uo,Jl=D({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(cf=t.screenX-Uo.screenX,ff=t.screenY-Uo.screenY):ff=cf=0,Uo=t),cf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Zm=Vn(Jl),fM=D({},Jl,{dataTransfer:0}),dM=Vn(fM),hM=D({},No,{relatedTarget:0}),df=Vn(hM),pM=D({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),mM=Vn(pM),gM=D({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_M=Vn(gM),vM=D({},ka,{data:0}),Km=Vn(vM),SM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=MM[t])?!!n[t]:!1}function hf(){return yM}var EM=D({},No,{key:function(t){if(t.key){var n=SM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TM=Vn(EM),bM=D({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Vn(bM),AM=D({},ka,{submitter:0}),RM=Vn(AM),CM=D({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),wM=Vn(CM),DM=D({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),NM=Vn(DM),UM=D({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LM=Vn(UM),OM=D({},ka,{newState:0,oldState:0,source:0}),PM=Vn(OM),IM=[9,13,27,32],pf=ma&&"CompositionEvent"in window,Lo=null;ma&&"documentMode"in document&&(Lo=document.documentMode);var zM=ma&&"TextEvent"in window&&!Lo,Jm=ma&&(!pf||Lo&&8<Lo&&11>=Lo),jm=" ",$m=!1;function t0(t,n){switch(t){case"keyup":return IM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function BM(t,n){switch(t){case"compositionend":return e0(n);case"keypress":return n.which!==32?null:($m=!0,jm);case"textInput":return t=n.data,t===jm&&$m?null:t;default:return null}}function FM(t,n){if(ds)return t==="compositionend"||!pf&&t0(t,n)?(t=qm(),Yl=uf=Xa=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jm&&n.locale!=="ko"?null:n.data;default:return null}}var HM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!HM[t.type]:n==="textarea"}function i0(t,n,a,r){cs?fs?fs.push(r):fs=[r]:cs=r,n=ju(n,"onChange"),0<n.length&&(a=new Ql("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Oo=null,Po=null;function GM(t){k_(t,0)}function jl(t){var n=kt(t);if(Bm(n))return t}function a0(t,n){if(t==="change")return n}var r0=!1;if(ma){var mf;if(ma){var gf="oninput"in document;if(!gf){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),gf=typeof s0.oninput=="function"}mf=gf}else mf=!1;r0=mf&&(!document.documentMode||9<document.documentMode)}function o0(){Oo&&(Oo.detachEvent("onpropertychange",l0),Po=Oo=null)}function l0(t){if(t.propertyName==="value"&&jl(Po)){var n=[];i0(n,Po,t,sf(t)),Wm(GM,n)}}function VM(t,n,a){t==="focusin"?(o0(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",l0)):t==="focusout"&&o0()}function XM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Po)}function kM(t,n){if(t==="click")return jl(n)}function WM(t,n){if(t==="input"||t==="change")return jl(n)}function qM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:qM;function Io(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Mt.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function _f(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function u0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function c0(t,n){var a=u0(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=u0(a)}}function f0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?f0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function d0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_f(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_f(t.document)}return n}function vf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var YM=ma&&"documentMode"in document&&11>=document.documentMode,hs=null,Sf=null,zo=null,xf=!1;function h0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xf||hs==null||hs!==_f(r)||(r=hs,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&Io(zo,r)||(zo=r,r=ju(Sf,"onSelect"),0<r.length&&(n=new Ql("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=hs)))}function Cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ps={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},Mf={},p0={};ma&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function wr(t){if(Mf[t])return Mf[t];if(!ps[t])return t;var n=ps[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in p0)return Mf[t]=n[a];return t}var m0=wr("animationend"),g0=wr("animationiteration"),_0=wr("animationstart"),ZM=wr("transitionrun"),KM=wr("transitionstart"),QM=wr("transitioncancel"),v0=wr("transitionend"),S0=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function Ri(t,n){S0.set(t,n),Bt(n,[t])}var JM=0;function ga(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ni.identifierPrefix;var a=JM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function x0(t){if(t==null||typeof t=="string")return t;var n=null,a=Os;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function _a(t,n){return t=x0(t),n=x0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],ms=0,Ef=0;function tu(){for(var t=ms,n=Ef=ms=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var c=_i[n];if(_i[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}c!==0&&M0(a,u,c)}}function eu(t,n,a,r){_i[ms++]=t,_i[ms++]=n,_i[ms++]=a,_i[ms++]=r,Ef|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Tf(t,n,a,r){return eu(t,n,a,r),nu(t)}function Dr(t,n){return eu(t,null,null,n),nu(t)}function M0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-ue(a),t=c.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),c):null}function nu(t){if(50<rl)throw rl=0,Wu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gs={};function jM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new jM(t,n,a,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function y0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function iu(t,n,a,r,u,c){var _=0;if(r=t,typeof r=="function")bf(r)&&(_=1);else if(typeof r=="string")_=AE(t,a,Xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case yt:return t=Yn(31,a,n,u),t.elementType=yt,t.lanes=c,t;case Z:return Nr(a.children,u,c,n);case Y:_=8,u|=24;break;case $:return t=Yn(12,a,n,u|2),t.elementType=$,t.lanes=c,t;case X:return t=Yn(13,a,n,u),t.elementType=X,t.lanes=c,t;case ut:return t=Yn(19,a,n,u),t.elementType=ut,t.lanes=c,t;case Qt:case z:return t=u|32,t=Yn(30,a,n,t),t.elementType=z,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case tt:_=10;break t;case V:_=9;break t;case W:_=11;break t;case ot:_=14;break t;case dt:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(_,a,n,u),n.elementType=t,n.type=r,n.lanes=c,n}function Nr(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function Af(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function E0(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Rf(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var T0=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=T0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},T0.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var _s=[],vs=0,au=null,Bo=0,Si=[],xi=0,Wa=null,Wi=1,qi="";function Sa(t,n){_s[vs++]=Bo,_s[vs++]=au,au=t,Bo=n}function b0(t,n,a){Si[xi++]=Wi,Si[xi++]=qi,Si[xi++]=Wa,Wa=t;var r=Wi;t=qi;var u=32-ue(r)-1;r&=~(1<<u),a+=1;var c=32-ue(n)+u;if(30<c){var _=u-u%5;c=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Wi=1<<32-ue(n)+u|a<<u|r,qi=c+t}else Wi=1<<c|a<<u|r,qi=t}function ru(t){t.return!==null&&(Sa(t,1),b0(t,1,0))}function Cf(t){for(;t===au;)au=_s[--vs],_s[vs]=null,Bo=_s[--vs],_s[vs]=null;for(;t===Wa;)Wa=Si[--xi],Si[xi]=null,qi=Si[--xi],Si[xi]=null,Wi=Si[--xi],Si[xi]=null}function A0(t,n){Si[xi++]=Wi,Si[xi++]=qi,Si[xi++]=Wa,Wi=n.id,qi=n.overflow,Wa=t}var En=null,je=null,Se=!1,qa=null,Mi=!1,wf=Error(s(519));function Ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(vi(n,t)),wf}function R0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[B]=r,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Te(ol[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Fm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Gm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Z_(n.textContent,a)?(r.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),r.onScroll!=null&&Te("scroll",n),r.onScrollEnd!=null&&Te("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ya(t,!0)}function su(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:En=En.return}}function Ss(t){if(t!==En)return!1;if(!Se)return su(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rh(t.type,t.memoizedProps)),a=!a),a&&je&&Ya(t),su(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=hv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=hv(t)}else n===27?(n=je,ur(t.type)?(t=ph,ph=null,je=t):je=n):je=En?Ei(t.stateNode.nextSibling):null;return!0}function Ur(){je=En=null,Se=!1}function Df(){var t=qa;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),qa=null),t}function Fo(t){qa===null?qa=[t]:qa.push(t)}var Nf=Me(null),Lr=null,xa=null;function Za(t,n,a){ie(Nf,n._currentValue),n._currentValue=a}function Ma(t){t._currentValue=Nf.current,ee(Nf)}function ou(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Uf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var _=u.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),ou(c.return,a,t),r||(_=null);break t}c=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),ou(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),ou(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Or(t,n,a,r){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;ii(u.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(u===tn.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ks):t=[ks])}u=u.return}return t!==null&&Uf(n,t,a,r),n.flags|=262144,t!==null}function lu(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Lr=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return C0(Lr,t)}function uu(t,n){return Lr===null&&Pr(t),C0(t,n)}function C0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(t===null)throw Error(s(308));xa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else xa=xa.next=n;return a}var $M=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ty=o.unstable_scheduleCallback,ey=o.unstable_NormalPriority,pn={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lf(){return{controller:new $M,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&ty(ey,function(){t.controller.abort()})}function w0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Go=null;function ny(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Vo=null,Of=0,Ir=0,xs=null;function iy(t,n){if(Vo===null){var a=Vo=[];Of=0,Ir=Qd(),xs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Of++,n.then(D0,D0),n}function D0(){if(--Of===0&&(Go=null,Vo!==null)){xs!==null&&(xs.status="fulfilled");var t=Vo;Vo=null,Ir=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ay(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var N0=_t.S;_t.S=function(t,n){if(E_=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&iy(t,n),Go!==null)for(var a=Bs;a!==null;)w0(a,Go),a=a.next;if(a=t.types,a!==null){for(var r=Bs;r!==null;)w0(r,a),r=r.next;if(Ir!==0){r=Go,r===null&&(r=Go=[]);for(var u=0;u<a.length;u++){var c=a[u];r.indexOf(c)===-1&&r.push(c)}}}N0!==null&&N0(t,n)};var zr=Me(null);function Pf(){var t=zr.current;return t!==null?t:Qe.pooledCache}function cu(t,n){n===null?ie(zr,zr.current):ie(zr,n.pool)}function U0(){var t=Pf();return t===null?null:{parent:pn._currentValue,pool:t}}var Ms=Error(s(460)),If=Error(s(474)),fu=Error(s(542)),du={then:function(){}};function L0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function O0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,I0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,I0(t),t}throw Fr=n,Ms}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fr=a,Ms):a}}var Fr=null;function P0(){if(Fr===null)throw Error(s(459));var t=Fr;return Fr=null,t}function I0(t){if(t===Ms||t===fu)throw Error(s(483))}var ys=null,Xo=0;function hu(t){var n=Xo;return Xo+=1,ys===null&&(ys=[]),O0(ys,t,n)}function Ka(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pu(t,n){throw n.$$typeof===T?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function z0(t){function n(J,F){if(t){var it=J.deletions;it===null?(J.deletions=[F],J.flags|=16):it.push(F)}}function a(J,F){if(!t)return null;for(;F!==null;)n(J,F),F=F.sibling;return null}function r(J){for(var F=new Map;J!==null;)J.key===null?F.set(J.index,J):F.set(J.key,J),J=J.sibling;return F}function u(J,F){return J=va(J,F),J.index=0,J.sibling=null,J}function c(J,F,it){return J.index=it,t?(it=J.alternate,it!==null?(it=it.index,it<F?(J.flags|=2,F):it):(J.flags|=134217730,F)):(J.flags|=1048576,F)}function _(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function A(J,F,it,vt){return F===null||F.tag!==6?(F=Af(it,J.mode,vt),F.return=J,F):(F=u(F,it),F.return=J,F)}function I(J,F,it,vt){var Wt=it.type;return Wt===Z?(J=ct(J,F,it.props.children,vt,it.key),Ka(J,it),J):F!==null&&(F.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===dt&&Br(Wt)===F.type)?(F=u(F,it.props),Ka(F,it),F.return=J,F):(F=iu(it.type,it.key,it.props,null,J.mode,vt),Ka(F,it),F.return=J,F)}function j(J,F,it,vt){return F===null||F.tag!==4||F.stateNode.containerInfo!==it.containerInfo||F.stateNode.implementation!==it.implementation?(F=Rf(it,J.mode,vt),F.return=J,F):(F=u(F,it.children||[]),F.return=J,F)}function ct(J,F,it,vt,Wt){return F===null||F.tag!==7?(F=Nr(it,J.mode,vt,Wt),F.return=J,F):(F=u(F,it),F.return=J,F)}function St(J,F,it){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=Af(""+F,J.mode,it),F.return=J,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case L:return it=iu(F.type,F.key,F.props,null,J.mode,it),Ka(it,F),it.return=J,it;case G:return F=Rf(F,J.mode,it),F.return=J,F;case dt:return F=Br(F),St(J,F,it)}if(It(F)||Q(F))return F=Nr(F,J.mode,it,null),F.return=J,F;if(typeof F.then=="function")return St(J,hu(F),it);if(F.$$typeof===tt)return St(J,uu(J,F),it);pu(J,F)}return null}function K(J,F,it,vt){var Wt=F!==null?F.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Wt!==null?null:A(J,F,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case L:return it.key===Wt?I(J,F,it,vt):null;case G:return it.key===Wt?j(J,F,it,vt):null;case dt:return it=Br(it),K(J,F,it,vt)}if(It(it)||Q(it))return Wt!==null?null:ct(J,F,it,vt,null);if(typeof it.then=="function")return K(J,F,hu(it),vt);if(it.$$typeof===tt)return K(J,F,uu(J,it),vt);pu(J,it)}return null}function st(J,F,it,vt,Wt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(it)||null,A(F,J,""+vt,Wt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case L:return J=J.get(vt.key===null?it:vt.key)||null,I(F,J,vt,Wt);case G:return J=J.get(vt.key===null?it:vt.key)||null,j(F,J,vt,Wt);case dt:return vt=Br(vt),st(J,F,it,vt,Wt)}if(It(vt)||Q(vt))return J=J.get(it)||null,ct(F,J,vt,Wt,null);if(typeof vt.then=="function")return st(J,F,it,hu(vt),Wt);if(vt.$$typeof===tt)return st(J,F,it,uu(F,vt),Wt);pu(F,vt)}return null}function Lt(J,F,it,vt){for(var Wt=null,Re=null,te=F,ae=F=0,_n=null;te!==null&&ae<it.length;ae++){te.index>ae?(_n=te,te=null):_n=te.sibling;var Ue=K(J,te,it[ae],vt);if(Ue===null){te===null&&(te=_n);break}t&&te&&Ue.alternate===null&&n(J,te),F=c(Ue,F,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue,te=_n}if(ae===it.length)return a(J,te),Se&&Sa(J,ae),Wt;if(te===null){for(;ae<it.length;ae++)te=St(J,it[ae],vt),te!==null&&(F=c(te,F,ae),Re===null?Wt=te:Re.sibling=te,Re=te);return Se&&Sa(J,ae),Wt}for(te=r(te);ae<it.length;ae++)_n=st(te,J,ae,it[ae],vt),_n!==null&&(t&&(Ue=_n.alternate,Ue!==null&&te.delete(Ue.key===null?ae:Ue.key)),F=c(_n,F,ae),Re===null?Wt=_n:Re.sibling=_n,Re=_n);return t&&te.forEach(function(pr){return n(J,pr)}),Se&&Sa(J,ae),Wt}function Kt(J,F,it,vt){if(it==null)throw Error(s(151));for(var Wt=null,Re=null,te=F,ae=F=0,_n=null,Ue=it.next();te!==null&&!Ue.done;ae++,Ue=it.next()){te.index>ae?(_n=te,te=null):_n=te.sibling;var pr=K(J,te,Ue.value,vt);if(pr===null){te===null&&(te=_n);break}t&&te&&pr.alternate===null&&n(J,te),F=c(pr,F,ae),Re===null?Wt=pr:Re.sibling=pr,Re=pr,te=_n}if(Ue.done)return a(J,te),Se&&Sa(J,ae),Wt;if(te===null){for(;!Ue.done;ae++,Ue=it.next())Ue=St(J,Ue.value,vt),Ue!==null&&(F=c(Ue,F,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue);return Se&&Sa(J,ae),Wt}for(te=r(te);!Ue.done;ae++,Ue=it.next())Ue=st(te,J,ae,Ue.value,vt),Ue!==null&&(t&&(_n=Ue.alternate,_n!==null&&te.delete(_n.key===null?ae:_n.key)),F=c(Ue,F,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue);return t&&te.forEach(function(BE){return n(J,BE)}),Se&&Sa(J,ae),Wt}function he(J,F,it,vt){if(typeof it=="object"&&it!==null&&it.type===Z&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case L:t:{for(var Wt=it.key;F!==null;){if(F.key===Wt){if(Wt=it.type,Wt===Z){if(F.tag===7){a(J,F.sibling),vt=u(F,it.props.children),Ka(vt,it),vt.return=J,J=vt;break t}}else if(F.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===dt&&Br(Wt)===F.type){a(J,F.sibling),vt=u(F,it.props),Ka(vt,it),vt.return=J,J=vt;break t}a(J,F);break}else n(J,F);F=F.sibling}it.type===Z?(vt=Nr(it.props.children,J.mode,vt,it.key),Ka(vt,it),vt.return=J,J=vt):(vt=iu(it.type,it.key,it.props,null,J.mode,vt),Ka(vt,it),vt.return=J,J=vt)}return _(J);case G:t:{for(Wt=it.key;F!==null;){if(F.key===Wt)if(F.tag===4&&F.stateNode.containerInfo===it.containerInfo&&F.stateNode.implementation===it.implementation){a(J,F.sibling),vt=u(F,it.children||[]),vt.return=J,J=vt;break t}else{a(J,F);break}else n(J,F);F=F.sibling}vt=Rf(it,J.mode,vt),vt.return=J,J=vt}return _(J);case dt:return it=Br(it),he(J,F,it,vt)}if(It(it))return Lt(J,F,it,vt);if(Q(it)){if(Wt=Q(it),typeof Wt!="function")throw Error(s(150));return it=Wt.call(it),Kt(J,F,it,vt)}if(typeof it.then=="function")return he(J,F,hu(it),vt);if(it.$$typeof===tt)return he(J,F,uu(J,it),vt);pu(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,F!==null&&F.tag===6?(a(J,F.sibling),vt=u(F,it),vt.return=J,J=vt):(a(J,F),vt=Af(it,J.mode,vt),vt.return=J,J=vt),_(J)):a(J,F)}return function(J,F,it,vt){try{Xo=0;var Wt=he(J,F,it,vt);return ys=null,Wt}catch(te){if(te===Ms||te===fu)throw te;var Re=Yn(29,te,null,J.mode);return Re.lanes=vt,Re.return=J,Re}}}var Hr=z0(!0),B0=z0(!1),Qa=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=nu(t),M0(t,null,a),n}return eu(t,r,n,a),nu(t)}function ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,bo(t,a)}}function Ff(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hf=!1;function Wo(){if(Hf){var t=xs;if(t!==null)throw t}}function qo(t,n,a,r){Hf=!1;var u=t.updateQueue;Qa=!1;var c=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,j=I.next;I.next=null,_===null?c=j:_.next=j,_=I;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==_&&(A===null?ct.firstBaseUpdate=j:A.next=j,ct.lastBaseUpdate=I))}if(c!==null){var St=u.baseState;_=0,ct=j=I=null,A=c;do{var K=A.lane&-536870913,st=K!==A.lane;if(st?(Ae&K)===K:(r&K)===K){K!==0&&K===Ir&&(Hf=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Lt=t,Kt=A;K=n;var he=a;switch(Kt.tag){case 1:if(Lt=Kt.payload,typeof Lt=="function"){St=Lt.call(he,St,K);break t}St=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Kt.payload,K=typeof Lt=="function"?Lt.call(he,St,K):Lt,K==null)break t;St=D({},St,K);break t;case 2:Qa=!0}}K=A.callback,K!==null&&(t.flags|=64,st&&(t.flags|=8192),st=u.callbacks,st===null?u.callbacks=[K]:st.push(K))}else st={lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(j=ct=st,I=St):ct=ct.next=st,_|=K;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;st=A,A=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ct===null&&(I=St),u.baseState=I,u.firstBaseUpdate=j,u.lastBaseUpdate=ct,c===null&&(u.shared.lanes=0),rr|=_,t.lanes=_,t.memoizedState=St}}function F0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function H0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)F0(a[t],n)}var $a=Me(null),mu=Me(0);function G0(t,n){t=Aa,ie(mu,t),ie($a,n),Aa=t|n.baseLanes}function Gf(){ie(mu,Aa),ie($a,$a.current)}function Vf(){Aa=mu.current,ee($a),ee(mu)}var Cn=Me(null),In=null;function tr(t){var n=t.alternate;ie(wn,wn.current&1),ie(Cn,t),In===null&&(n===null||$a.current!==null||n.memoizedState!==null)&&(In=t)}function Xf(t){ie(wn,wn.current),ie(Cn,t),In===null&&(In=t)}function V0(t){t.tag===22?(ie(wn,wn.current),ie(Cn,t),In===null&&(In=t)):er()}function er(){ie(wn,wn.current),ie(Cn,Cn.current)}function ai(t){ee(Cn),In===t&&(In=null),ee(wn)}var wn=Me(0);function Yo(t,n){ie(Cn,Cn.current),ie(wn,n)}function kf(t){ee(wn),ee(Cn),In===t&&(In=null)}function gu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dh(a)||hh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,de=null,Ke=null,mn=null,_u=!1,Es=!1,Gr=!1,vu=0,Zo=0,Ts=null,ry=0;function un(){throw Error(s(321))}function Wf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function qf(t,n,a,r,u,c){return ya=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=t===null||t.memoizedState===null?bg:Ag,Gr=!1,c=a(r,u),Gr=!1,Es&&(c=k0(n,a,r,u)),X0(t),c}function X0(t){_t.H=bu;var n=Ke!==null&&Ke.next!==null;if(ya=0,mn=Ke=de=null,_u=!1,Zo=0,Ts=null,n)throw Error(s(300));t===null||gn||(t=t.dependencies,t!==null&&lu(t)&&(gn=!0))}function k0(t,n,a,r){de=t;var u=0;do{if(Es&&(Ts=null),Zo=0,Es=!1,25<=u)throw Error(s(301));if(u+=1,mn=Ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_t.H=hy,c=n(a,r)}while(Es);return c}function sy(){var t=_t.H,n=t.useState()[0];return n=typeof n.then=="function"?Ko(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(de.flags|=1024),n}function Yf(){var t=vu!==0;return vu=0,t}function Zf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Kf(t){if(_u){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_u=!1}ya=0,mn=Ke=de=null,Es=!1,Zo=vu=0,Ts=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?de.memoizedState=mn=t:mn=mn.next=t,mn}function fn(){if(Ke===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=mn===null?de.memoizedState:mn.next;if(n!==null)mn=n,Ke=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},mn===null?de.memoizedState=mn=t:mn=mn.next=t}return mn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var n=Zo;return Zo+=1,Ts===null&&(Ts=[]),t=O0(Ts,t,n),n=de,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?bg:Ag),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===mt)return;if(t.$$typeof===tt)return Rn(t)}throw Error(s(438,String(t)))}function Qf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Yt;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function Mu(t){var n=fn();return Jf(n,Ke,t)}function Jf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,c=r.pending;if(c!==null){if(u!==null){var _=u.next;u.next=c.next,c.next=_}n.baseQueue=u=c,r.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var A=_=null,I=null,j=n,ct=!1;do{var St=j.lane&-536870913;if(St!==j.lane?(Ae&St)===St:(ya&St)===St){var K=j.revertLane;if(K===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),St===Ir&&(ct=!0);else if((ya&K)===K){j=j.next,K===Ir&&(ct=!0);continue}else St={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(A=I=St,_=c):I=I.next=St,de.lanes|=K,rr|=K;St=j.action,Gr&&a(c,St),c=j.hasEagerState?j.eagerState:a(c,St)}else K={lane:St,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(A=I=K,_=c):I=I.next=K,de.lanes|=St,rr|=St;j=j.next}while(j!==null&&j!==n);if(I===null?_=c:I.next=A,!ii(c,t.memoizedState)&&(gn=!0,ct&&(a=xs,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=I,r.lastRenderedState=c}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function jf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do c=t(c,_.action),_=_.next;while(_!==u);ii(c,n.memoizedState)||(gn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function W0(t,n,a){var r=de,u=fn(),c=Se;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ii((Ke||u).memoizedState,a);if(_&&(u.memoizedState=a,gn=!0),u=u.queue,ed(Z0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||_||mn!==null&&(mn.memoizedState.tag&1)!==0,bs(t?9:8,{destroy:void 0},Y0.bind(null,r,u,a,n),null),t){if(r.flags|=2048,Qe===null)throw Error(s(349));c||(ya&127)!==0||q0(r,n,a)}return a}function q0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Su(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Y0(t,n,a,r){n.value=a,n.getSnapshot=r,K0(n)&&Q0(t)}function Z0(t,n,a){return a(function(){K0(n)&&Q0(t)})}function K0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function Q0(t){var n=Dr(t,2);n!==null&&Jn(n,t,2)}function $f(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Gr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function J0(t,n,a,r){return t.baseState=a,Jf(t,Ke,typeof r=="function"?r:Ea)}function oy(t,n,a,r,u){if(Tu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};_t.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,j0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function j0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var c=_t.T,_={};_.types=c!==null?c.types:null,_t.T=_;try{var A=a(u,r),I=_t.S;I!==null&&I(_,A),$0(t,n,A)}catch(j){td(t,n,j)}finally{c!==null&&_.types!==null&&(c.types=_.types),_t.T=c}}else try{c=a(u,r),$0(t,n,c)}catch(j){td(t,n,j)}}function $0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){tg(t,n,r)},function(r){return td(t,n,r)}):tg(t,n,a)}function tg(t,n,a){n.status="fulfilled",n.value=a,eg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,j0(t,a)))}function td(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,eg(n),n=n.next;while(n!==r)}t.action=null}function eg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ng(t,n){return n}function ig(t,n){if(Se){var a=Qe.formState;if(a!==null){t:{var r=de;if(Se){if(je){e:{for(var u=je,c=Mi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){je=Ei(u.nextSibling),r=u.data==="F!";break t}}Ya(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:n},a.queue=r,a=yg.bind(null,de,r),r.dispatch=a,r=$f(!1),c=sd.bind(null,de,!1,r.queue),r=Xn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=oy.bind(null,de,u,c,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function ag(t){var n=fn();return rg(n,Ke,t)}function rg(t,n,a){if(n=Jf(t,n,ng)[0],t=Mu(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ko(n)}catch(_){throw _===Ms?fu:_}else r=n;n=fn();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,bs(9,{destroy:void 0},ly.bind(null,u,a),null)),[r,c,t]}function ly(t,n){t.action=n}function sg(t){var n=fn(),a=Ke;if(a!==null)return rg(n,a,t);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function bs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=Su(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function og(){return fn().memoizedState}function yu(t,n,a,r){var u=Xn();de.flags|=t,u.memoizedState=bs(1|n,{destroy:void 0},a,r===void 0?null:r)}function Eu(t,n,a,r){var u=fn();r=r===void 0?null:r;var c=u.memoizedState.inst;Ke!==null&&r!==null&&Wf(r,Ke.memoizedState.deps)?u.memoizedState=bs(n,c,a,r):(de.flags|=t,u.memoizedState=bs(1|n,c,a,r))}function lg(t,n){yu(8390656,8,t,n)}function ed(t,n){Eu(2048,8,t,n)}function uy(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Su(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ug(t){var n=fn().memoizedState;return uy({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function cg(t,n){return Eu(4,2,t,n)}function fg(t,n){return Eu(4,4,t,n)}function dg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function hg(t,n,a){a=a!=null?a.concat([t]):null,Eu(4,4,dg.bind(null,n,t),a)}function nd(){}function pg(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Wf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function mg(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Wf(n,r[1]))return r[0];if(r=t(),Gr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r}function id(t,n,a){return a===void 0||(ya&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=b_(),de.lanes|=t,rr|=t,a)}function gg(t,n,a,r){return ii(a,n)?a:$a.current!==null?(t=id(t,a,r),ii(t,n)||(gn=!0),t):(ya&106)===0||(ya&1073741824)!==0&&(Ae&261930)===0?(gn=!0,t.memoizedState=a):(t=b_(),de.lanes|=t,rr|=t,n)}function _g(t,n,a,r,u){var c=Rt.p;Rt.p=c!==0&&8>c?c:8;var _=_t.T,A={};A.types=_!==null?_.types:null,_t.T=A,sd(t,!1,n,a);try{var I=u(),j=_t.S;if(j!==null&&j(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=ay(I,r);Qo(t,n,ct,li(t))}else Qo(t,n,r,li(t))}catch(St){Qo(t,n,{then:function(){},status:"rejected",reason:St},li())}finally{Rt.p=c,_!==null&&A.types!==null&&(_.types=A.types),_t.T=_}}function cy(){}function ad(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=vg(t).queue;_g(t,u,n,Ve,a===null?cy:function(){return Sg(t),a(r)})}function vg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ve,baseState:Ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:Ve},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sg(t){var n=vg(t);n.next===null&&(n=t.alternate.memoizedState),Qo(t,n.next.queue,{},li())}function rd(){return Rn(ks)}function xg(){return fn().memoizedState}function Mg(){return fn().memoizedState}function fy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Ja(a);var r=ja(n,t,a);r!==null&&(Jn(r,n,a),ko(r,n,a)),n={cache:Lf()},t.payload=n;return}n=n.return}}function dy(t,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(t)?Eg(n,a):(a=Tf(t,n,a,r),a!==null&&(Jn(a,t,r),Tg(a,n,r)))}function yg(t,n,a){var r=li();Qo(t,n,a,r)}function Qo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tu(t))Eg(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,A=c(_,a);if(u.hasEagerState=!0,u.eagerState=A,ii(A,_))return eu(t,n,u,0),Qe===null&&tu(),!1}catch{}if(a=Tf(t,n,u,r),a!==null)return Jn(a,t,r),Tg(a,n,r),!0}return!1}function sd(t,n,a,r){if(r={lane:2,revertLane:Qd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tu(t)){if(n)throw Error(s(479))}else n=Tf(t,a,r,2),n!==null&&Jn(n,t,2)}function Tu(t){var n=t.alternate;return t===de||n!==null&&n===de}function Eg(t,n){Es=_u=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,bo(t,a)}}var bu={readContext:Rn,use:xu,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},bg={readContext:Rn,use:xu,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:lg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,yu(4194308,4,dg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return yu(4194308,4,t,n)},useInsertionEffect:function(t,n){yu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(Gr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var u=a(n);if(Gr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=dy.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=$f(t);var n=t.queue,a=yg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nd,useDeferredValue:function(t,n){var a=Xn();return id(a,t,n)},useTransition:function(){var t=$f(!1);return t=_g.bind(null,de,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=de,u=Xn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Ae&127)!==0||q0(r,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,lg(Z0.bind(null,r,c,t),[t]),r.flags|=2048,bs(9,{destroy:void 0},Y0.bind(null,r,c,a,n),null),a},useId:function(){var t=Xn(),n=Qe.identifierPrefix;if(Se){var a=qi,r=Wi;a=(r&~(1<<32-ue(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ry++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rd,useFormState:ig,useActionState:ig,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sd.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qf,useCacheRefresh:function(){return Xn().memoizedState=fy.bind(null,de)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ag={readContext:Rn,use:xu,useCallback:pg,useContext:Rn,useEffect:ed,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:Mu,useRef:og,useState:function(){return Mu(Ea)},useDebugValue:nd,useDeferredValue:function(t,n){var a=fn();return gg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=Mu(Ea)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:W0,useId:xg,useHostTransitionStatus:rd,useFormState:ag,useActionState:ag,useOptimistic:function(t,n){var a=fn();return J0(a,Ke,t,n)},useMemoCache:Qf,useCacheRefresh:Mg,useEffectEvent:ug},hy={readContext:Rn,use:xu,useCallback:pg,useContext:Rn,useEffect:ed,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:jf,useRef:og,useState:function(){return jf(Ea)},useDebugValue:nd,useDeferredValue:function(t,n){var a=fn();return Ke===null?id(a,t,n):gg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=jf(Ea)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:W0,useId:xg,useHostTransitionStatus:rd,useFormState:sg,useActionState:sg,useOptimistic:function(t,n){var a=fn();return Ke!==null?J0(a,Ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qf,useCacheRefresh:Mg,useEffectEvent:ug};function od(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:D({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ld={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=li(),u=Ja(r);u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,r),n!==null&&(Jn(n,t,r),ko(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=li(),u=Ja(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ja(t,u,r),n!==null&&(Jn(n,t,r),ko(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),r=Ja(a);r.tag=2,n!=null&&(r.callback=n),n=ja(t,r,a),n!==null&&(Jn(n,t,a),ko(n,t,a))}};function Rg(t,n,a,r,u,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,_):n.prototype&&n.prototype.isPureReactComponent?!Io(a,r)||!Io(u,c):!0}function Cg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ld.enqueueReplaceState(n,n.state,null)}function Vr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=D({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function wg(t){$l(t)}function Dg(t){console.error(t)}function Ng(t){$l(t)}function Au(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Ug(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ud(t,n,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Au(t,n)},a}function Lg(t){return t=Ja(t),t.tag=3,t}function Og(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;t.payload=function(){return u(c)},t.callback=function(){Ug(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ug(n,a,r),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function py(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,u,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Yu():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Yd(t,r,u)),!1;case 22:return a.flags|=65536,r===du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Yd(t,r,u)),!1}throw Error(s(435,a.tag))}return Yd(t,r,u),Yu(),!1}if(Se)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==wf&&(t=Error(s(422),{cause:r}),Fo(vi(t,a)))):(r!==wf&&(n=Error(s(423),{cause:r}),Fo(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=vi(r,a),u=ud(t.stateNode,r,u),Ff(t,u),cn!==4&&(cn=2)),!1;var c=Error(s(520),{cause:r});if(c=vi(c,a),al===null?al=[c]:al.push(c),cn!==4&&(cn=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ud(a.stateNode,r,t),Ff(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sr===null||!sr.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lg(u),Og(u,t,a,r),Ff(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var cd=Error(s(461)),gn=!1;function xn(t,n,a,r){n.child=t===null?B0(n,null,a,r):Hr(n,t.child,a,r)}function Pg(t,n,a,r,u){a=a.render;var c=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return Pr(n),r=qf(t,n,a,_,c,u),A=Yf(),t!==null&&!gn?(Zf(t,n,u),Ta(t,n,u)):(Se&&A&&ru(n),n.flags|=1,xn(t,n,r,u),n.child)}function Ig(t,n,a,r,u){if(t===null){var c=a.type;return typeof c=="function"&&!bf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,zg(t,n,c,r,u)):(t=iu(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!vd(t,u)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(_,r)&&t.ref===n.ref)return Ta(t,n,u)}return n.flags|=1,t=va(c,r),t.ref=n.ref,t.return=n,n.child=t}function zg(t,n,a,r,u){if(t!==null){var c=t.memoizedProps;if(Io(c,r)&&t.ref===n.ref)if(gn=!1,n.pendingProps=r=c,vd(t,u))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Ta(t,n,u)}return fd(t,n,a,r,u)}function Bg(t,n,a,r){var u=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return Fg(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(n,c!==null?c.cachePool:null),c!==null?G0(n,c):Gf(),V0(n);else return r=n.lanes=536870912,Fg(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(cu(n,c.cachePool),G0(n,c),er(),n.memoizedState=null):(t!==null&&cu(n,null),Gf(),er());return xn(t,n,u,a),n.child}function Jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fg(t,n,a,r,u){var c=Pf();return c=c===null?null:{parent:pn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&cu(n,null),Gf(),V0(n),t!==null&&Or(t,n,r,!0),n.childLanes=u,null}function Ru(t,n){return n=Cu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hg(t,n,a){return Hr(n,t.child,null,a),t=Ru(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function my(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Ru(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Jo(null,t);if(Xf(n),(t=je)?(t=dv(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=E0(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return Ru(n,r)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(Xf(n),u)if(n.flags&256)n.flags&=-257,n=Hg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||Or(t,n,a,!1),u=(a&t.childLanes)!==0,gn||u){if($a.current===null){if(r=Qe,r!==null&&(_=Ao(r,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,Dr(t,_),Jn(r,t,_),cd;Yu()}n=Hg(t,n,a)}else t=c.treeContext,je=Ei(_.nextSibling),En=n,Se=!0,qa=null,Mi=!1,t!==null&&A0(n,t),n=Ru(n,r),n.flags|=134221824;return n}return t=va(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function As(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function fd(t,n,a,r,u){return Pr(n),a=qf(t,n,a,r,void 0,u),r=Yf(),t!==null&&!gn?(Zf(t,n,u),Ta(t,n,u)):(Se&&r&&ru(n),n.flags|=1,xn(t,n,a,u),n.child)}function Gg(t,n,a,r,u,c){return Pr(n),n.updateQueue=null,a=k0(n,r,a,u),X0(t),r=Yf(),t!==null&&!gn?(Zf(t,n,c),Ta(t,n,c)):(Se&&r&&ru(n),n.flags|=1,xn(t,n,a,c),n.child)}function Vg(t,n,a,r,u){if(Pr(n),n.stateNode===null){var c=gs,_=a.contextType;typeof _=="object"&&_!==null&&(c=Rn(_)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ld,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},zf(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?Rn(_):gs,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(od(n,a,_,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&ld.enqueueReplaceState(c,c.state,null),qo(n,r,c,u),Wo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,I=Vr(a,A);c.props=I;var j=c.context,ct=a.contextType;_=gs,typeof ct=="object"&&ct!==null&&(_=Rn(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||j!==_)&&Cg(n,c,r,_),Qa=!1;var K=n.memoizedState;c.state=K,qo(n,r,c,u),Wo(),j=n.memoizedState,A||K!==j||Qa?(typeof St=="function"&&(od(n,a,St,r),j=n.memoizedState),(I=Qa||Rg(n,a,I,r,K,j,_))?(ct||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),c.props=r,c.state=j,c.context=_,r=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Bf(t,n),_=n.memoizedProps,ct=Vr(a,_),c.props=ct,St=n.pendingProps,K=c.context,j=a.contextType,I=gs,typeof j=="object"&&j!==null&&(I=Rn(j)),A=a.getDerivedStateFromProps,(j=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==St||K!==I)&&Cg(n,c,r,I),Qa=!1,K=n.memoizedState,c.state=K,qo(n,r,c,u),Wo();var st=n.memoizedState;_!==St||K!==st||Qa||t!==null&&t.dependencies!==null&&lu(t.dependencies)?(typeof A=="function"&&(od(n,a,A,r),st=n.memoizedState),(ct=Qa||Rg(n,a,ct,r,K,st,I)||t!==null&&t.dependencies!==null&&lu(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,st,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,st,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),c.props=r,c.state=st,c.context=I,r=ct):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&K===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,As(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Hr(n,t.child,null,u),n.child=Hr(n,null,a,u)):xn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=Ta(t,n,u),t}function Xg(t,n,a,r){return Ur(),n.flags|=256,xn(t,n,a,r),n.child}var dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(t){return{baseLanes:t,cachePool:U0()}}function pd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function kg(t,n,a){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(wn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?tr(n):er(),(t=je)?(t=dv(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=E0(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw Ya(n);return hh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,u?(er(),u=n.mode,c=Cu({mode:"hidden",children:c},u),r=Nr(r,u,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=hd(a),r.childLanes=pd(t,_,a),n.memoizedState=dd,Jo(null,r)):(tr(n),md(n,c))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return gy(t,n,c,_,r,I,A,a)}return u?(er(),u=r.fallback,c=n.mode,A=t.child,I=A.sibling,r=va(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,I!==null?u=va(I,u):(u=Nr(u,c,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Jo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=hd(a):(c=u.cachePool,c!==null?(A=pn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=U0(),u={baseLanes:u.baseLanes|a,cachePool:c}),r.memoizedState=u,r.childLanes=pd(t,_,a),n.memoizedState=dd,Jo(t.child,r)):(tr(n),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function md(t,n){return n=Cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cu(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function wu(t,n,a){return Hr(n,t.child,null,a),t=md(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function gy(t,n,a,r,u,c,_,A){if(a)return n.flags&256?(tr(n),n.flags&=-257,wu(t,n,A)):n.memoizedState!==null?(er(),n.child=t.child,n.flags|=128,null):(er(),c=u.fallback,_=n.mode,u=Cu({mode:"visible",children:u.children},_),c=Nr(c,_,A,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Hr(n,t.child,null,A),u=n.child,u.memoizedState=hd(A),u.childLanes=pd(t,r,A),n.memoizedState=dd,Jo(null,u));if(tr(n),hh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Fo({value:u,source:null,stack:null})),wu(t,n,A)}if(gn||Or(t,n,A,!1),r=(A&t.childLanes)!==0,gn||r){if($a.current!==null)return wu(t,n,A);if(r=Qe,r!==null&&(u=Ao(r,A),u!==0&&u!==_.retryLane))throw _.retryLane=u,Dr(t,u),Jn(r,t,u),cd;return dh(c)||Yu(),wu(t,n,A)}return dh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,je=Ei(c.nextSibling),En=n,Se=!0,qa=null,Mi=!1,t!==null&&A0(n,t),n=md(n,u.children),n.flags|=134221824,n)}function Wg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ou(t.return,n,a)}function qg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&gu(a)===null&&(n=t),t=t.sibling}return n}function Du(t,n,a,r,u,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=c)}function gd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function _d(t,n,a){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var _=wn.current;if(n.flags&128)return Yo(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,Yo(n,_),u==="backwards"&&t!==null?(gd(t),xn(t,n,r,a),gd(t)):xn(t,n,r,a),r=Se?Bo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,a,n);else if(t.tag===19)Wg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=qg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,gd(n)),Du(n,!0,u,null,c,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&gu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Du(n,!0,a,null,c,r);break;case"together":Du(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=qg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Du(n,!1,u,a,c,r)}return n.child}function Yg(t,n,a){var r=n.pendingProps;return Za(n,n.type,r.value),xn(t,n,r.children,a),n.child}function Ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),rr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=va(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&lu(t)))}function _y(t,n,a){switch(n.tag){case 3:q(n,n.stateNode.containerInfo),Za(n,pn,t.memoizedState.cache),Ur();break;case 27:case 5:Pe(n);break;case 4:q(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return tr(n),n.flags|=128,null;r=Or(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?kg(t,n,a):(tr(n),t=Ta(t,n,a),t!==null?t.sibling:null)}tr(n);break;case 19:if(n.flags&128)return _d(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Or(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return _d(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Yo(n,wn.current),r)break;return null;case 22:return n.lanes=0,Bg(t,n,a,n.pendingProps);case 24:Za(n,pn,t.memoizedState.cache)}return Ta(t,n,a)}function Zg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!vd(t,a)&&(n.flags&128)===0)return gn=!1,_y(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,Se&&(n.flags&1048576)!==0&&b0(n,Bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")bf(t)?(r=Vr(t,r),n.tag=1,n=Vg(null,n,t,r,a)):(n.tag=0,n=fd(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===W){n.tag=11,n=Pg(null,n,t,r,a);break t}else if(u===ot){n.tag=14,n=Ig(null,n,t,r,a);break t}else if(u===tt){n.tag=10,n.type=t,n=Yg(null,n,a);break t}}throw n=Tt(t)||t,Error(s(306,n,""))}}return n;case 0:return fd(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Vr(r,n.pendingProps),Vg(t,n,r,u,a);case 3:t:{if(q(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,Bf(t,n),qo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Za(n,pn,r),r!==c.cache&&Uf(n,[pn],a,!0),Wo(),r=_.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Xg(t,n,r,a);break t}else if(r!==u){u=vi(Error(s(424)),n),Fo(u),n=Xg(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=Ei(t.firstChild),En=n,Se=!0,qa=null,Mi=!0,a=B0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ur(),r===u){n=Ta(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return As(t,n),t===null?(a=Sv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=j_(n.type,n.pendingProps,Ie.current,n)):n.memoizedState=Sv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&Se&&(r=n.stateNode=mv(n.type,n.pendingProps,Ie.current),En=n,Mi=!0,u=je,ur(n.type)?(ph=u,je=Ei(r.firstChild)):je=u),xn(t,n,n.pendingProps.children,a),As(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=r=je)&&(r=fE(r,n.type,n.pendingProps,Mi),r!==null?(n.stateNode=r,En=n,je=Ei(r.firstChild),Mi=!1,u=!0):u=!1),u||Ya(n)),Pe(n),u=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,r=c.children,rh(u,c)?r=null:_!==null&&rh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=qf(t,n,sy,null,null,a),ks._currentValue=u),As(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=je)&&(a=dE(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,En=n,je=null,t=!0):t=!1),t||Ya(n)),null;case 13:return kg(t,n,a);case 4:return q(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Hr(n,null,r,a):xn(t,n,r,a),n.child;case 11:return Pg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,As(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return Yg(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Pr(n),u=Rn(u),r=r(u),n.flags|=1,xn(t,n,r,a),n.child;case 14:return Ig(t,n,n.type,n.pendingProps,a);case 15:return zg(t,n,n.type,n.pendingProps,a);case 19:return _d(t,n,a);case 31:return my(t,n,a);case 22:return Bg(t,n,a,n.pendingProps);case 24:return Pr(n),r=Rn(pn),t===null?(u=Pf(),u===null&&(u=Qe,c=Lf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:r,cache:u},zf(n),Za(n,pn,u)):((t.lanes&a)!==0&&(Bf(t,n),qo(n,null,null,a),Wo()),u=t.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Za(n,pn,r)):(r=c.cache,Za(n,pn,r),r!==u.cache&&Uf(n,[pn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&ru(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:As(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ba(t){t.flags|=4}function Sd(t,n,a,r,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Ev(n,r):Ev(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(w_())t.flags|=8192;else throw Fr=du,If}else t.flags&=-16777217}function Kg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tv(n))if(w_())t.flags|=8192;else throw Fr=du,If}function Nu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?To():536870912,t.lanes|=n,Ns|=n)}function jo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function vy(t,n,a){var r=n.pendingProps;switch(Cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ma(pn),an(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ss(n)?ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Df())),$e(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ba(n),c!==null?($e(n),Kg(n,c)):($e(n),Sd(n,u,null,r,a))):c?c!==t.memoizedState?(ba(n),$e(n),Kg(n,c)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ba(n),$e(n),Sd(n,u,t,r,a)),null;case 27:if(O(n),a=Ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}t=Xe.current,Ss(n)?R0(n):(t=mv(u,r,a),n.stateNode=t,ba(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(c=Xe.current,Ss(n))R0(n);else{var _=ul(Ie.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}c[b]=n,c[B]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Nn(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ba(n)}}return $e(n),n.subtreeFlags&=-33554433,Sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ie.current,Ss(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=En,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Z_(t.nodeValue,a)),t||Ya(n,!0)}else t=ul(t).createTextNode(r),t[b]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ss(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ss(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[b]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nu(n,n.updateQueue),$e(n),null);case 4:return an(),t===null&&th(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return Ma(n.type),$e(n),null;case 19:if(kf(n),r=n.memoizedState,r===null)return $e(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)jo(r,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=gu(t),c!==null){for(n.flags|=128,jo(r,!1),t=c.updateQueue,n.updateQueue=t,Nu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)y0(a,t),a=a.sibling;return Yo(n,wn.current&1|2),Se&&Sa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Vt()>Xu&&(n.flags|=128,u=!0,jo(r,!1),n.lanes=4194304)}else{if(!u)if(t=gu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Nu(n,t),jo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return $e(n),null}else 2*Vt()-r.renderingStartTime>Xu&&a!==536870912&&(n.flags|=128,u=!0,jo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Vt(),t.sibling=null,c=wn.current,c=u?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Yo(n,c):(a=c,ie(Cn,n),ie(wn,a),In===null&&(In=n)),Se&&Sa(n,r.treeForkCount),t}return $e(n),null;case 22:case 23:return ai(n),Vf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Nu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ee(zr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(pn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function Sy(t,n){switch(Cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(pn),an(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return kf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return an(),null;case 10:return Ma(n.type),null;case 22:case 23:return ai(n),Vf(),t!==null&&ee(zr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(pn),null;case 25:return null;default:return null}}function Qg(t,n){switch(Cf(n),n.tag){case 3:Ma(pn),an();break;case 26:case 27:case 5:O(n);break;case 4:an();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:kf(n);break;case 10:Ma(n.type);break;case 22:case 23:ai(n),Vf(),t!==null&&ee(zr);break;case 24:Ma(pn)}}function $o(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var c=a.create,_=a.inst;r=c(),_.destroy=r}a=a.next}while(a!==u)}}catch(A){We(n,n.return,A)}}function nr(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&t)===t){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var I=a,j=A;try{j()}catch(ct){We(u,I,ct)}}}r=r.next}while(r!==c)}}catch(ct){We(n,n.return,ct)}}function Jg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{H0(n,a)}catch(r){We(t,t.return,r)}}}function jg(t,n,a){a.props=Vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){We(t,n,r)}}function Yi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,c=ga(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=rv(c)),r=u.ref;break;case 7:if(t.stateNode===null){var _=new ui(t);g(t.child,!1,uE,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){We(t,n,A)}}function Dn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){We(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(t,n,u)}else a.current=null}function Uu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)fv(t.stateNode,n[a])}function $g(t){for(var n=t.return;n!==null&&(Md(n)&&fv(t.stateNode,n.stateNode),!xd(n));)n=n.return}function tl(t){for(var n=t.return;n!==null&&(Md(n)&&cE(t.stateNode,n.stateNode),!xd(n));)n=n.return}function xd(t){return t.tag===5||t.tag===3||t.tag===27}function Md(t){return t&&t.tag===7&&t.stateNode!==null}function yd(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){We(t,t.return,u)}}function Ed(t,n,a){try{var r=t.stateNode;Wy(r,t.type,a,n),r[B]=n}catch(u){We(t,t.return,u)}}function t_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ur(t.type)||t.tag===4}function Td(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||t_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),Uu(t,r),ve=!0;else if(u!==4&&(u===27&&(Uu(t,r),r=null,ur(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(bd(t,n,a,r),t=t.sibling;t!==null;)bd(t,n,a,r),t=t.sibling}function Lu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Uu(t,r),ve=!0;else if(u!==4&&(u===27&&(Uu(t,r),r=null,ur(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Lu(t,n,a,r),t=t.sibling;t!==null;)Lu(t,n,a,r),t=t.sibling}function e_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,r,a),n[b]=t,n[B]=a}catch(c){We(t,t.return,c)}}var Ou=!1,ri=null;function n_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ou=!0)}var Zi=null;function i_(){var t=Zi;return Zi=null,t}var Zn=0;function Rs(t,n,a,r,u){return Zn=0,a_(t.child,n,a,r,u)}function a_(t,n,a,r,u){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var A=lh(_);r.push(A),A.view&&(c=!0)}else c||lh(_).view&&(c=!0);Ou=!0,iv(_,Zn===0?n:n+"_"+Zn,a),Zn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||a_(t.child,n,a,r,u)&&(c=!0));t=t.sibling}return c}function Ki(t,n){for(;t!==null;)t.tag===5?av(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function Pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=_a(n.default,n.share),n!=="none"&&(Rs(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function Ad(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=ga(r,a),c=_a(r.default,a.paired?r.share:r.enter);c!=="none"?Rs(t,u,c,null,!1)?(Pu(t),a.paired||n||Ps(t,r.onEnter)):Ki(t.child,!1):Pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ad(t,n),t=t.sibling;else Pu(t)}function Rd(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var c=_a(a.default,a.share);if(c!=="none"&&(Rs(t,r,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Ps(t,a.onShare)):Ki(t.child,!1)),n.delete(r),n.size===0)break}}}Rd(t)}t=t.sibling}}}function Cd(t){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode),r=ri!==null?ri.get(a):void 0,u=_a(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Rs(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ri.delete(a),Ps(t,n.onShare)):Ps(t,n.onExit):Ki(t.child,!1)),ri!==null&&Rd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Cd(t),t=t.sibling;else ri!==null&&Rd(t)}function r_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode);n=_a(n.default,n.update),t.flags&=-5,n!=="none"&&Rs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&r_(t);t=t.sibling}}function wd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}wd(t)}t=t.sibling}}function Iu(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),wd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Iu(t),t=t.sibling;else wd(t)}function s_(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&s_(t),t=t.sibling}function Dd(t,n,a,r,u,c,_){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&Zn<c.length){var j=c[Zn],ct=lh(I);(j.view||ct.view)&&(A=!0);var St;if(St=(t.flags&4)===0)if(ct.clip)St=!0;else{St=j.rect;var K=ct.rect;St=St.y!==K.y||St.x!==K.x||St.height!==K.height||St.width!==K.width}St&&(t.flags|=4),ct.abs?ct=!j.abs:(j=j.rect,ct=ct.rect,ct=j.height!==ct.height||j.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&iv(I,Zn===0?a:a+"_"+Zn,u),A&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(I,Zn===0?r:r+"_"+Zn,n.memoizedProps)),Zn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Dd(t,n.child,a,r,u,c,_)&&(A=!0));n=n.sibling}return A}function o_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=ga(a,r),c=_a(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;Zn=0,u=Dd(r,A,u,u,c,_,!1),(t.flags&4)!==0&&u&&Ps(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&o_(t);t=t.sibling}}var Tn=!1,Ge=!1,Qi=!1,Nd=!1,l_=typeof WeakSet=="function"?WeakSet:Set,bn=null,Ji=!1,el=!1,zu=!1,Ud=!1;function xy(t,n,a){if(t=t.containerInfo,ih=Ws,t=d0(t),vf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var c=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var A=0,I=-1,j=-1,ct=0,St=0,K=t,st=null;e:for(;;){for(var Lt;K!==r||c!==0&&K.nodeType!==3||(I=A+c),K!==_||u!==0&&K.nodeType!==3||(j=A+u),K.nodeType===3&&(A+=K.nodeValue.length),(Lt=K.firstChild)!==null;)st=K,K=Lt;for(;;){if(K===t)break e;if(st===r&&++ct===c&&(I=A),st===_&&++St===u&&(j=A),(Lt=K.nextSibling)!==null)break;K=st,st=K.parentNode}K=Lt}r=I===-1||j===-1?null:{start:I,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(ah={focusedElem:t,selectionRange:r},Ws=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&Cd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&n_(t),Bu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Cd(r),Bu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&n_(t),Bu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&r_(t),Bu(a))}}ri=null}function Bu(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var _=Vr(n.type,u);a=c.getSnapshotBeforeUpdate(_,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){We(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)fh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":fh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ga(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=_a(u.default,u.update),u!=="none"&&Rs(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function u_(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),r&4&&$o(5,a);break;case 1:if(ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){We(a,a.return,_)}else{var u=Vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}r&64&&Jg(a),r&512&&Yi(a,a.return);break;case 3:if(ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{H0(t,n)}catch(_){We(a,a.return,_)}}break;case 27:n===null&&r&4&&e_(a);case 26:case 5:ji(t,a),n===null&&r&4&&yd(a),r&512&&Yi(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),r&4&&h_(t,a);break;case 13:ji(t,a),r&4&&p_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Uy.bind(null,a),hE(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var c=n!==null&&n.memoizedState!==null||Ge;n=Tn,u=Ge,Tn=r,(Ge=c)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Di(t,a,r)):ji(t,a),Tn=n,Ge=u}break;case 30:ji(t,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:ji(t,a)}}function Ld(t,n){for(t=t.child;t!==null;)c_(t,n),t=t.sibling}function c_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){We(t,t.return,I)}Od(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ve=!0}catch(I){We(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?nv(A,!0):nv(t.stateNode,!1)}catch(I){We(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Ld(t,n);break;default:Ld(t,n)}}function Od(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:c_(a,r);break t;case 22:a.memoizedState===null&&Od(a,r);break t;default:Od(a,r)}}t=t.sibling}}function f_(t){var n=t.alternate;n!==null&&(t.alternate=null,f_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Kn=!1;function Ci(t,n,a){for(a=a.child;a!==null;)d_(t,n,a),a=a.sibling}function d_(t,n,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ge||Dn(a,n),Ci(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Dn(a,n),tl(a);var r=en,u=Kn;ur(a.type)&&(en=a.stateNode,Kn=!1),Ci(t,n,a),gv(a.stateNode,a.type,a.memoizedProps),en=r,Kn=u;break;case 5:Ge||Dn(a,n),tl(a);case 6:if(a.tag===6&&tl(a),r=en,u=Kn,en=null,Ci(t,n,a),en=r,Kn=u,en!==null)if(Kn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ve=!0}catch(c){We(a,n,c)}else try{en.removeChild(a.stateNode),ve=!0}catch(c){We(a,n,c)}break;case 18:en!==null&&(Kn?(t=en,ev(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qs(t)):ev(en,a.stateNode));break;case 4:r=en,u=Kn,en=a.stateNode.containerInfo,Kn=!0,Ci(t,n,a),en=r,Kn=u;break;case 0:case 11:case 14:case 15:nr(2,a,n),Ge||nr(4,a,n),Ci(t,n,a);break;case 1:Ge||(Dn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&jg(a,n,r)),Ci(t,n,a);break;case 21:Ci(t,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Ci(t,n,a),Ge=r;break;case 30:Dn(a,n),Ci(t,n,a);break;case 7:Ge||Dn(a,n),Ci(t,n,a);break;default:Ci(t,n,a)}}function h_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qs(t)}catch(a){We(n,n.return,a)}}}function p_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qs(t)}catch(a){We(n,n.return,a)}}function My(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new l_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new l_),n;default:throw Error(s(435,t.tag))}}function Fu(t,n){var a=My(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Ly.bind(null,t,r);r.then(u,u)}})}function kn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var c=r[u],_=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(ur(I.type)){en=I.stateNode,Kn=!1;break t}break;case 5:en=I.stateNode,Kn=!1;break t;case 3:case 4:en=I.stateNode.containerInfo,Kn=!0;break t}I=I.return}if(en===null)throw Error(s(160));d_(_,A,c),en=null,Kn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)m_(n,t,a),n=n.sibling}var wi=null;function m_(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var _=r[c];_.ref.impl=_.nextImpl}kn(n,t,a),Wn(t),u&4&&(nr(3,t,t.return),$o(3,t),nr(5,t,t.return));break;case 1:kn(n,t,a),Wn(t),u&512&&(Ge||r===null||Dn(r,r.return)),u&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=wi,kn(n,t,a),Wn(t),u&512&&(Ge||r===null||Dn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=j_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ut]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Nn(r,n,a),r[b]=t,_e(r),n=r;break t;case"link":if(c=yv("link","href",u).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;case"meta":if(c=yv("meta","content",u).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,_e(r),n=r}t.stateNode=n}else Tn||vh(c,t.type,t.stateNode);else t.stateNode=Mv(c,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):u.count--,a===null?Tn||vh(c,t.type,t.stateNode):Mv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,r.memoizedProps);break;case 27:kn(n,t,a),Wn(t),u&512&&(Ge||r===null||Dn(r,r.return)),r!==null&&u&4&&Ed(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Qi,Qi=!1,kn(n,t,a),Qi=c,Wn(t),u&512&&(Ge||r===null||Dn(r,r.return)),t.flags&32){n=t.stateNode;try{us(n,""),ve=!0}catch(ct){We(t,t.return,ct)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Ed(t,n,r!==null?r.memoizedProps:n)),u&1024&&(Nd=!0);break;case 6:if(kn(n,t,a),Wn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ve=!0}catch(ct){We(t,t.return,ct)}}break;case 3:if(ve=!1,tc=null,c=wi,wi=cl(n.containerInfo),kn(n,t,a),wi=c,Wn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{qs(n.containerInfo)}catch(ct){We(t,t.return,ct)}Nd&&(Nd=!1,g_(t)),ve=!1;break;case 4:u=Qi,Qi=Tn,r=Be(),c=wi,wi=cl(t.stateNode.containerInfo),kn(n,t,a),Wn(t),wi=c,ve&&el&&(zu=!0),ve=r,Qi=u;break;case 12:kn(n,t,a),Wn(t);break;case 31:kn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 13:kn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Vu=Vt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 22:c=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var A=Tn,I=Ge,j=Qi;Tn=A||c,Qi=j||c,Ge=I||_,kn(n,t,a),Ge=I,Qi=j,Tn=A,Wn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||_||Tn||Ge||(n=_||Ge,a=Tn,r=Ge,Tn=c||Tn,Ge=n,ir(t,2),Tn=a,Ge=r),!c&&Qi||Ld(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Fu(t,a))));break;case 19:kn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 30:u&512&&(Ge||r===null||Dn(r,r.return)),u=Be(),c=el,_=(a&335544064)===a,A=t.memoizedProps,el=_&&_a(A.default,A.update)!=="none",kn(n,t,a),Wn(t),_&&r!==null&&ve&&(t.flags|=4),el=c,ve=u;break;case 21:break;case 7:u&512&&(Ge||r===null||Dn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:kn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(t_(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(Md(u)){var c=u.stateNode;r===null?r=[c]:r.push(c)}if(xd(u))break;u=u.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,I=Td(t);Lu(t,I,A,_);break;case 5:var j=a.stateNode;a.flags&32&&(us(j,""),a.flags&=-33);var ct=Td(t);Lu(t,ct,j,_);break;case 3:case 4:var St=a.stateNode.containerInfo,K=Td(t);bd(t,K,St,_);break;default:throw Error(s(161))}}catch(st){We(t,t.return,st)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function g_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;g_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ws=!0,n.reset(),Ws=!1),t=t.sibling}}function Cs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)__(n,t),n=n.sibling;else o_(n)}function __(t,n){var a=t.alternate;if(a===null)Ad(t,!1);else switch(t.tag){case 3:if(Ud=Ji=!1,i_(),Cs(n,t),!Ji&&!zu){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];av(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ud=!0}Zi=null;break;case 5:Cs(n,t);break;case 4:r=Ji,Ji=!1,Cs(n,t),Ji&&(zu=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Ad(t,!1):Cs(n,t));break;case 30:r=Ji,u=i_(),Ji=!1,Cs(n,t),Ji&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=ga(c,_),_=ga(a.memoizedProps,_);var A=_a(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Zn=0,n=Dd(t,a,n,_,A,c,!0),Zn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ps(t,t.memoizedProps.onUpdate),Zi=u):u!==null&&(u.push.apply(u,Zi),Zi=u),Ji=(t.flags&32)!==0?!0:r;break;default:Cs(n,t)}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u_(t,n.alternate,n),n=n.sibling}function ir(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:nr(4,a,a.return),ir(a,r);break;case 1:Dn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&jg(a,a.return,u),ir(a,r);break;case 27:(r&2)!==0&&gv(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||tl(a),ir(a,r);break;case 6:tl(a);break;case 26:Dn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ge||u.parentNode.removeChild(u),ir(a,r);break;case 22:a.memoizedState===null&&ir(a,r);break;case 30:Dn(a,a.return),ir(a,r);break;case 7:Dn(a,a.return);default:ir(a,r)}t=t.sibling}}function Di(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,c=n,_=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Di(u,c,a),$o(4,c);break;case 1:if(Di(u,c,a),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ct){We(r,r.return,ct)}if(r=c,u=r.updateQueue,u!==null){var I=r.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)F0(j[u],I)}catch(ct){We(r,r.return,ct)}}A&&_&64&&Jg(c),Yi(c,c.return);break;case 27:(a&2)!==0&&e_(c);case 5:c.tag!==5&&c.tag!==27||$g(c),Di(u,c,a),A&&r===null&&_&4&&yd(c),Yi(c,c.return);break;case 6:$g(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||Tn||vh(cl(I.ownerDocument),c.type,I),Di(u,c,a),A&&r===null&&_&4&&yd(c),Yi(c,c.return);break;case 12:Di(u,c,a);break;case 31:Di(u,c,a),A&&_&4&&h_(u,c);break;case 13:Di(u,c,a),A&&_&4&&p_(u,c);break;case 22:c.memoizedState===null&&Di(u,c,a),Yi(c,c.return);break;case 30:Di(u,c,a),Yi(c,c.return);break;case 7:Yi(c,c.return);default:Di(u,c,a)}n=n.sibling}}function Pd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ho(a))}function Id(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function yi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)v_(t,n,a,r),n=n.sibling;else u&&s_(n)}function v_(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Iu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,r),c&2048&&$o(9,n);break;case 1:yi(t,n,a,r);break;case 3:yi(t,n,a,r),u&&Ud&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ho(c)));break;case 12:if(c&2048){yi(t,n,a,r),c=n.stateNode;try{var _=n.memoizedProps,A=_.id,I=_.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){We(n,n.return,j)}}else yi(t,n,a,r);break;case 31:yi(t,n,a,r);break;case 13:yi(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&Iu(A),_._visibility&2?yi(t,n,a,r):nl(t,n)):(u&&A!==null&&A.memoizedState!==null&&Iu(n),_._visibility&2?yi(t,n,a,r):(_._visibility|=2,ws(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Pd(A,n);break;case 24:yi(t,n,a,r),c&2048&&Id(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Ki(c.child,!0),Ki(n.child,!0))),yi(t,n,a,r);break;default:yi(t,n,a,r)}}function ws(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,A=a,I=r,j=_.flags;switch(_.tag){case 0:case 11:case 15:ws(c,_,A,I,u),$o(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?ws(c,_,A,I,u):nl(c,_):(ct._visibility|=2,ws(c,_,A,I,u)),u&&j&2048&&Pd(_.alternate,_);break;case 24:ws(c,_,A,I,u),u&&j&2048&&Id(_.alternate,_);break;default:ws(c,_,A,I,u)}n=n.sibling}}function nl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:nl(a,r),u&2048&&Pd(r.alternate,r);break;case 24:nl(a,r),u&2048&&Id(r.alternate,r);break;default:nl(a,r)}n=n.sibling}}var Xr=8192;function kr(t,n,a){if(t.subtreeFlags&Xr)for(t=t.child;t!==null;)S_(t,n,a),t=t.sibling}function S_(t,n,a){switch(t.tag){case 26:kr(t,n,a),t.flags&Xr&&(t.memoizedState!==null?RE(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Av(a,t)));break;case 5:kr(t,n,a),t.flags&Xr&&(t=t.stateNode,(n&335544128)===n&&Av(a,t));break;case 3:case 4:var r=wi;wi=cl(t.stateNode.containerInfo),kr(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Xr,Xr=16777216,kr(t,n,a),Xr=r):kr(t,n,a));break;case 30:if((t.flags&Xr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ri===null&&(ri=new Map),ri.set(r,u)}kr(t,n,a);break;default:kr(t,n,a)}}function x_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,y_(r,t)}x_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M_(t),t=t.sibling}function M_(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&nr(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hu(t)):il(t);break;default:il(t)}}function Hu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,y_(r,t)}x_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:nr(8,n,n.return),Hu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hu(n));break;default:Hu(n)}t=t.sibling}}function y_(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:nr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var u=r.sibling,c=r.return;if(f_(r),r===a){bn=null;break t}if(u!==null){u.return=c,bn=u;break t}bn=c}}}var yy={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(pn).controller.signal}},Ey=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Ee=null,Ae=0,ke=0,si=null,ar=!1,Ds=!1,zd=!1,Aa=0,cn=0,rr=0,Wr=0,Gu=0,oi=0,Ns=0,al=null,Qn=null,Bd=!1,Vu=0,E_=0,Xu=1/0,ku=null,sr=null,rn=0,Ni=null,qr=null,$i=0,Fd=0,Hd=null,T_=null,Us=null,Ls=null,Os=null,rl=0,Wu=null;function li(){return(Fe&2)!==0&&Ae!==0?Ae&-Ae:_t.T!==null?Qd():Xl()}function b_(){if(oi===0)if((Ae&536870912)===0||Se){var t=br;br<<=1,(br&3932160)===0&&(br=262144),oi=t}else oi=536870912;return t=Cn.current,t!==null&&(t.flags|=32),oi}function Ps(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=rv(ga(t.memoizedProps,a))),Ls===null&&(Ls=[]),Ls.push(n.bind(null,r))}}function Jn(t,n,a){(t===Qe&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(Is(t,0),or(t,Ae,oi,!1)),Vi(t,a),((Fe&2)===0||t!==Qe)&&(t===Qe&&((Fe&2)===0&&(Wr|=a),cn===4&&or(t,Ae,oi,!1)),ta(t))}function A_(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Va(t,n),u=r?Ay(t,n):Vd(t,n,!0),c=r;do{if(u===0){Ds&&!r&&or(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Ty(a)){u=Vd(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;u=al;var I=A.current.memoizedState.isDehydrated;if(I&&(Is(A,_).flags|=256),_=Vd(A,_,!1),_!==2&&_!==6){if(zd&&!I){A.errorRecoveryDisabledLanes|=c,Wr|=c,u=4;break t}c=Qn,Qn=u,c!==null&&(Qn===null?Qn=c:Qn.push.apply(Qn,c))}u=_}if(c=!1,u!==2)continue}}if(u===1){Is(t,0),or(t,n,0,!0);break}t:{switch(r=t,c=u,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:or(r,n,oi,!ar);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Vu+300-Vt(),10<u)){if(or(r,n,oi,!ar),Ar(r,0,!0)!==0)break t;$i=n,r.timeoutHandle=oh(R_.bind(null,r,a,Qn,ku,Bd,n,oi,Wr,Ns,ar,c,"Throttled",-0,0),u);break t}R_(r,a,Qn,ku,Bd,n,oi,Wr,Ns,ar,c,null,-0,0)}}break}while(!0);ta(t)}function R_(t,n,a,r,u,c,_,A,I,j,ct,St,K,st){t.timeoutHandle=-1;var Lt=n.subtreeFlags,Kt=(c&335544064)===c;if(St=null,(Kt||Lt&8192||(Lt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ri=null,S_(n,c,St),Kt&&(Lt=St,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=hl.bind(Lt),Kt.finished.then(Lt,Lt))),Lt=(c&62914560)===c?Vu-Vt():(c&4194048)===c?E_-Vt():0,Lt=CE(St,Lt),Lt!==null)){$i=c,t.cancelPendingCommit=Lt(P_.bind(null,t,n,c,a,r,u,_,A,I,j,ct,St,null,K,st)),or(t,c,_,!j);return}P_(t,n,c,a,r,u,_,A,I,j,ct,St)}function Ty(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],c=u.getSnapshot;u=u.value;try{if(!ii(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function or(t,n,a,r){n=Gi(t,n),n&=~Gu,n&=~Wr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var c=31-ue(u),_=1<<c;r[c]=-1,u&=~_}a!==0&&Rr(t,a,n)}function qu(){return(Fe&6)===0?(sl(0),!1):!0}function Gd(){if(Ee!==null){if(ke===0)var t=Ee.return;else t=Ee,xa=Lr=null,Kf(t),ys=null,Xo=0,t=Ee;for(;t!==null;)Qg(t.alternate,t),t=t.return;Ee=null}}function Is(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Zy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Gd(),Qe=t,Ee=a=va(t.current,null),Ae=n,ke=0,si=null,ar=!1,Ds=Va(t,n),zd=!1,Ns=oi=Gu=Wr=rr=cn=0,Qn=al=null,Bd=!1,Aa=Gi(t,n),tu(),a}function C_(t,n){de=null,_t.H=bu,n===Ms||n===fu?(n=P0(),ke=3):n===If?(n=P0(),ke=4):ke=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Ee===null&&(cn=1,Au(t,vi(n,t.current)))}function w_(){var t=Cn.current;return t===null?!0:(Ae&4194048)===Ae?In===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===In:!1}function D_(){var t=_t.H;return _t.H=bu,t===null?bu:t}function N_(){var t=_t.A;return _t.A=yy,t}function Yu(){cn=4,ar||(Ae&4194048)!==Ae&&Cn.current!==null||(Ds=!0),(rr&134217727)===0&&(Wr&134217727)===0||Qe===null||or(Qe,Ae,oi,!1)}function Vd(t,n,a){var r=Fe;Fe|=2;var u=D_(),c=N_();(Qe!==t||Ae!==n)&&(ku=null,Is(t,n)),n=!1;var _=cn;t:do try{if(ke!==0&&Ee!==null){var A=Ee,I=si;switch(ke){case 8:Gd(),_=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var j=ke;if(ke=0,si=null,zs(t,A,I,j),a&&Ds){_=0;break t}break;default:j=ke,ke=0,si=null,zs(t,A,I,j)}}by(),_=cn;break}catch(ct){C_(t,ct)}while(!0);return n&&t.shellSuspendCounter++,xa=Lr=null,Fe=r,_t.H=u,_t.A=c,Ee===null&&(Qe=null,Ae=0,tu()),_}function by(){for(;Ee!==null;)U_(Ee)}function Ay(t,n){var a=Fe;Fe|=2;var r=D_(),u=N_();Qe!==t||Ae!==n?(ku=null,Xu=Vt()+500,Is(t,n)):Ds=Va(t,n);t:do try{if(ke!==0&&Ee!==null){n=Ee;var c=si;e:switch(ke){case 1:ke=0,si=null,zs(t,n,c,1);break;case 2:case 9:if(L0(c)){ke=0,si=null,L_(n);break}n=function(){ke!==2&&ke!==9||Qe!==t||(ke=7),ta(t)},c.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:L0(c)?(ke=0,si=null,L_(n)):(ke=0,si=null,zs(t,n,c,7));break;case 5:var _=null;switch(Ee.tag){case 26:_=Ee.memoizedState;case 5:case 27:var A=Ee;if(_?Tv(_):A.stateNode.complete){ke=0,si=null;var I=A.sibling;if(I!==null)Ee=I;else{var j=A.return;j!==null?(Ee=j,Zu(j)):Ee=null}break e}}ke=0,si=null,zs(t,n,c,5);break;case 6:ke=0,si=null,zs(t,n,c,6);break;case 8:Gd(),cn=6;break t;default:throw Error(s(462))}}Ry();break}catch(ct){C_(t,ct)}while(!0);return xa=Lr=null,_t.H=r,_t.A=u,Fe=a,Ee!==null?0:(Qe=null,Ae=0,tu(),cn)}function Ry(){for(;Ee!==null&&!Pt();)U_(Ee)}function U_(t){var n=Zg(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?Zu(t):Ee=n}function L_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Gg(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Gg(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Kf(n);var r=n;r===En&&(Se?(su(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):(su(r),Se=!0));default:Qg(a,n),n=Ee=y0(n,Aa),n=Zg(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?Zu(t):Ee=n}function zs(t,n,a,r){xa=Lr=null,Kf(n),ys=null,Xo=0;var u=n.return;try{if(py(t,u,n,a,Ae)){cn=1,Au(t,vi(a,t.current)),Ee=null;return}}catch(c){if(u!==null)throw Ee=u,c;cn=1,Au(t,vi(a,t.current)),Ee=null;return}n.flags&32768?(Se||r===1?t=!0:Ds||(Ae&536870912)!==0?t=!1:(ar=t=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),O_(n,t)):Zu(n)}function Zu(t){var n=t;do{if((n.flags&32768)!==0){O_(n,ar);return}t=n.return;var a=vy(n.alternate,n,Aa);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);cn===0&&(cn=5)}function O_(t,n){do{var a=Sy(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);cn=6,Ee=null}function P_(t,n,a,r,u,c,_,A,I,j,ct,St){t.cancelPendingCommit=null;do Ku();while(rn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Qe&&(Ee=Qe=null,Ae=0),qr=n,Ni=t,$i=a,Hd=u,T_=r,Cy(t,n,a,_,A,I,St)}}function Cy(t,n,a,r,u,c,_){var A=n.lanes|n.childLanes;if(Fd=A,A|=Ef,Vl(t,a,A,r,u,c),Ls=null,(a&335544064)===a?(Os=ny(t),r=10262):(Os=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Oy(Ct,function(){return qd(),null})):(t.callbackNode=null,t.callbackPriority=0),Ou=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,u=Rt.p,Rt.p=2,c=Fe,Fe|=4;try{xy(t,n,a)}finally{Fe=c,Rt.p=u,_t.T=r}}rn=1,Ou?Us=tE(_,t.containerInfo,Os,Xd,kd,Dy,Wd,qd,wy):(Xd(),kd(),Wd())}function wy(t){if(rn!==0){var n=Ni.onRecoverableError;n(t,{componentStack:null})}}function Dy(){rn===3&&(rn=0,__(qr,Ni),rn=4)}function Xd(){if(rn===1){rn=0;var t=Ni,n=qr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var u=Rt.p;Rt.p=2;var c=Fe;Fe|=4;try{el=zu=!1,m_(n,t,a),a=ah;var _=d0(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&f0(A.ownerDocument.documentElement,A)){if(I!==null&&vf(A)){var j=I.start,ct=I.end;if(ct===void 0&&(ct=j),"selectionStart"in A)A.selectionStart=j,A.selectionEnd=Math.min(ct,A.value.length);else{var St=A.ownerDocument||document,K=St&&St.defaultView||window;if(K.getSelection){var st=K.getSelection(),Lt=A.textContent.length,Kt=Math.min(I.start,Lt),he=I.end===void 0?Kt:Math.min(I.end,Lt);!st.extend&&Kt>he&&(_=he,he=Kt,Kt=_);var J=c0(A,Kt),F=c0(A,he);if(J&&F&&(st.rangeCount!==1||st.anchorNode!==J.node||st.anchorOffset!==J.offset||st.focusNode!==F.node||st.focusOffset!==F.offset)){var it=St.createRange();it.setStart(J.node,J.offset),st.removeAllRanges(),Kt>he?(st.addRange(it),st.extend(F.node,F.offset)):(it.setEnd(F.node,F.offset),st.addRange(it))}}}}for(St=[],st=A;st=st.parentNode;)st.nodeType===1&&St.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Ws=!!ih,ah=ih=null}finally{Fe=c,Rt.p=u,_t.T=r}}t.current=n,rn=2}}function kd(){if(rn===2){rn=0;var t=Ni,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=Rt.p;Rt.p=2;var u=Fe;Fe|=4;try{u_(t,n.alternate,n)}finally{Fe=u,Rt.p=r,_t.T=a}}rn=3}}function Wd(){if(rn===4||rn===3){rn=0;var t=Us;Us=null,Ot();var n=Ni,a=qr,r=$i,u=T_,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?rn=5:(rn=0,qr=Ni=null,I_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(sr=null),Co(r),a=a.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=_t.T,c=Rt.p,Rt.p=2,_t.T=null;try{for(var _=n.onRecoverableError,A=0;A<u.length;A++){var I=u[A];_(I.value,{componentStack:I.stack})}}finally{_t.T=a,Rt.p=c}}if(u=Ls,_=Os,Os=null,u!==null&&(Ls=null,_===null&&(_=[]),t!==null))for(I=0;I<u.length;I++)a=(0,u[I])(_),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Ku(),ta(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Wu?rl++:(rl=0,Wu=n):(rl=0,Wu=null),sl(0)}}function I_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function Ku(){return Us!==null&&(Us.skipTransition(),Us=null),Xd(),kd(),Wd(),qd()}function qd(){if(rn!==5)return!1;var t=Ni,n=Fd;Fd=0;var a=Co($i),r=_t.T,u=Rt.p;try{Rt.p=32>a?32:a,_t.T=null,a=Hd,Hd=null;var c=Ni,_=$i;if(rn=0,qr=Ni=null,$i=0,(Fe&6)!==0)throw Error(s(331));var A=Fe;if(Fe|=4,M_(c.current),v_(c,c.current,_,a),Fe=A,sl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Jt,c)}catch{}return!0}finally{Rt.p=u,_t.T=r,I_(t,n)}}function z_(t,n,a){n=vi(a,n),n=ud(t.stateNode,n,2),t=ja(t,n,2),t!==null&&(Vi(t,2),ta(t))}function We(t,n,a){if(t.tag===3)z_(t,t,a);else for(;n!==null;){if(n.tag===3){z_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=vi(a,t),a=Lg(2),r=ja(n,a,2),r!==null&&(Og(a,r,n,t),Vi(r,2),ta(r));break}}n=n.return}}function Yd(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ey;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(zd=!0,u.add(a),t=Ny.bind(null,t,n,a),n.then(t,t))}function Ny(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Ae&a)===a&&((cn===4||cn===3&&(Ae&62914560)===Ae&&300>Vt()-Vu)&&(Fe&2)===0?Is(t,0):Gu|=a,Ns===Ae&&(Ns=0)),ta(t)}function B_(t,n){n===0&&(n=To()),t=Dr(t,n),t!==null&&(Vi(t,n),ta(t))}function Uy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),B_(t,a)}function Ly(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),B_(t,a)}function Oy(t,n){return wt(t,n)}var Bs=null,Fs=null,Zd=!1,Qu=!1,Kd=!1,lr=0;function ta(t){t!==Fs&&t.next===null&&(Fs===null?Bs=Fs=t:Fs=Fs.next=t),Qu=!0,Zd||(Zd=!0,Iy())}function sl(t,n){if(!Kd&&Qu){Kd=!0;do for(var a=!1,r=Bs;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var _=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-ue(42|t)+1)-1,c&=u&~(_&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,V_(r,c))}else c=Ae,c=Ar(r,r===Qe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Va(r,c)||(a=!0,V_(r,c));r=r.next}while(a);Kd=!1}}function Py(){F_()}function F_(){Qu=Zd=!1;var t=0;lr!==0&&Yy()&&(t=lr);for(var n=Vt(),a=null,r=Bs;r!==null;){var u=r.next,c=H_(r,n);c===0?(r.next=null,a===null?Bs=u:a.next=u,u===null&&(Fs=a)):(a=r,(t!==0||(c&3)!==0)&&(Qu=!0)),r=u}rn!==0&&rn!==5||sl(t),lr!==0&&(lr=0)}function H_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-ue(c),A=1<<_,I=u[_];I===-1?((A&a)===0||(A&r)!==0)&&(u[_]=Eo(A,n)):I<=n&&(t.expiredLanes|=A),c&=~A}if(n=Qe,a=Ae,a=Ar(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&jt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Va(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&jt(r),Co(a)){case 2:case 8:a=k;break;case 32:a=Ct;break;case 268435456:a=Nt;break;default:a=Ct}return r=G_.bind(null,t),a=wt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&jt(r),t.callbackPriority=2,t.callbackNode=null,2}function G_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ku()&&t.callbackNode!==a)return null;var r=Ae;return r=Ar(t,t===Qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(A_(t,r,n),H_(t,Vt()),t.callbackNode!=null&&t.callbackNode===a?G_.bind(null,t):null)}function V_(t,n){if(Ku())return null;A_(t,n,!0)}function Iy(){Ky(function(){(Fe&6)!==0?wt(le,Py):F_()})}function Qd(){if(lr===0){var t=Ir;t===0&&(t=ss,ss<<=1,(ss&261888)===0&&(ss=256)),lr=t}return lr}function X_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ql(t)}function zy(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var c=X_((u[B]||null).action),_=r.submitter;_&&(n=(n=_[B]||null)?X_(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var A=new Ql("action","action",null,r,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(lr!==0){var I=new FormData(u,_);ad(a,{pending:!0,data:I,method:u.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(u,_),ad(a,{pending:!0,data:I,method:u.method,action:c},c,I))},currentTarget:u}]})}}for(var Jd=0;Jd<yf.length;Jd++){var jd=yf[Jd],By=jd.toLowerCase(),Fy=jd[0].toUpperCase()+jd.slice(1);Ri(By,"on"+Fy)}Ri(m0,"onAnimationEnd"),Ri(g0,"onAnimationIteration"),Ri(_0,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(ZM,"onTransitionRun"),Ri(KM,"onTransitionStart"),Ri(QM,"onTransitionCancel"),Ri(v0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function k_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],I=A.instance,j=A.currentTarget;if(A=A.listener,I!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=j;try{c(u)}catch(ct){$l(ct)}u.currentTarget=null,c=I}else for(_=0;_<r.length;_++){if(A=r[_],I=A.instance,j=A.currentTarget,A=A.listener,I!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=j;try{c(u)}catch(ct){$l(ct)}u.currentTarget=null,c=I}}}}function Te(t,n){var a=n[at];a===void 0&&(a=n[at]=new Set);var r=t+"__bubble";a.has(r)||(W_(n,t,2,!1),a.add(r))}function $d(t,n,a){var r=0;n&&(r|=4),W_(a,t,r,n)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function th(t){if(!t[Ju]){t[Ju]=!0,He.forEach(function(a){a!=="selectionchange"&&(Hy.has(a)||$d(a,!1,t),$d(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ju]||(n[Ju]=!0,$d("selectionchange",!1,n))}}function W_(t,n,a,r){switch(Ov(n)){case 2:var u=UE;break;case 8:u=LE;break;default:u=xh}a=u.bind(null,n,a,t),u=void 0,!lf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function eh(t,n,a,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=re(A),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=c=_;continue t}A=A.parentNode}}r=r.return}Wm(function(){var j=c,ct=sf(a),St=[];t:{var K=S0.get(t);if(K!==void 0){var st=Ql,Lt=t;switch(t){case"keypress":if(Zl(a)===0)break t;case"keydown":case"keyup":st=TM;break;case"focusin":Lt="focus",st=df;break;case"focusout":Lt="blur",st=df;break;case"beforeblur":case"afterblur":st=df;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=dM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=wM;break;case m0:case g0:case _0:st=mM;break;case v0:st=NM;break;case"scroll":case"scrollend":st=cM;break;case"wheel":st=LM;break;case"copy":case"cut":case"paste":st=_M;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Qm;break;case"submit":st=RM;break;case"toggle":case"beforetoggle":st=PM}var Kt=(n&4)!==0,he=!Kt&&(t==="scroll"||t==="scrollend"),J=Kt?K!==null?K+"Capture":null:K;Kt=[];for(var F=j,it;F!==null;){var vt=F;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||J===null||(vt=wo(F,J),vt!=null&&Kt.push(ll(F,vt,it))),he)break;F=F.return}0<Kt.length&&(K=new st(K,Lt,null,a,ct),St.push({event:K,listeners:Kt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",K=t==="mouseout"||t==="pointerout",st&&a!==rf&&(Lt=a.relatedTarget||a.fromElement)&&(re(Lt)||Lt[ft]))break t;(K||st)&&(Lt=ct.window===ct?ct:(st=ct.ownerDocument)?st.defaultView||st.parentWindow:window,K?(st=a.relatedTarget||a.toElement,K=j,st=st?re(st):null,st!==null&&(he=f(st),Kt=st.tag,st!==he||Kt!==5&&Kt!==27&&Kt!==6)&&(st=null)):(K=null,st=j),K!==st&&(Kt=Zm,vt="onMouseLeave",J="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Qm,vt="onPointerLeave",J="onPointerEnter",F="pointer"),he=K==null?Lt:kt(K),it=st==null?Lt:kt(st),Lt=new Kt(vt,F+"leave",K,a,ct),Lt.target=he,Lt.relatedTarget=it,vt=null,re(ct)===j&&(Kt=new Kt(J,F+"enter",st,a,ct),Kt.target=it,Kt.relatedTarget=he,vt=Kt),he=vt,Kt=K&&st?U(K,st,Gy):null,K!==null&&q_(St,Lt,K,Kt,!1),st!==null&&he!==null&&q_(St,he,st,Kt,!0)))}t:{if(K=j?kt(j):window,st=K.nodeName&&K.nodeName.toLowerCase(),st==="select"||st==="input"&&K.type==="file")var Wt=a0;else if(n0(K))if(r0)Wt=WM;else{Wt=XM;var Re=VM}else st=K.nodeName,!st||st.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?j&&af(j.elementType)&&(Wt=a0):Wt=kM;if(Wt&&(Wt=Wt(t,j))){i0(St,Wt,a,ct);break t}Re&&Re(t,K,j)}switch(Re=j?kt(j):window,t){case"focusin":(n0(Re)||Re.contentEditable==="true")&&(hs=Re,Sf=j,zo=null);break;case"focusout":zo=Sf=hs=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,h0(St,a,ct);break;case"selectionchange":if(YM)break;case"keydown":case"keyup":h0(St,a,ct)}var te;if(pf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ds?t0(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Jm&&a.locale!=="ko"&&(ds||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ds&&(te=qm()):(Xa=ct,uf="value"in Xa?Xa.value:Xa.textContent,ds=!0)),Re=ju(j,ae),0<Re.length&&(ae=new Km(ae,t,null,a,ct),St.push({event:ae,listeners:Re}),te?ae.data=te:(te=e0(a),te!==null&&(ae.data=te)))),(te=zM?BM(t,a):FM(t,a))&&(ae=ju(j,"onBeforeInput"),0<ae.length&&(Re=new Km("onBeforeInput","beforeinput",null,a,ct),St.push({event:Re,listeners:ae}),Re.data=te)),zy(St,t,j,a,ct)}k_(St,n)})}function ll(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ju(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=wo(t,a),u!=null&&r.unshift(ll(t,u,c)),u=wo(t,n),u!=null&&r.push(ll(t,u,c))),t.tag===3)return r;t=t.return}return[]}function Gy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function q_(t,n,a,r,u){for(var c=n._reactName,_=[];a!==null&&a!==r;){var A=a,I=A.alternate,j=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||j===null||(I=j,u?(j=wo(a,c),j!=null&&_.unshift(ll(a,j,I))):u||(j=wo(a,c),j!=null&&_.push(ll(a,j,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Vy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function Y_(t){return(typeof t=="string"?t:""+t).replace(Vy,`
`).replace(Xy,"")}function Z_(t,n){return n=Y_(n),Y_(t)===n}function qe(t,n,a,r,u,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||us(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&us(t,""+r);else return;break;case"className":ni(t,"class",r);break;case"tabIndex":ni(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,r);break;case"style":Xm(t,r,c);return;case"data":if(n!=="object"){ni(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ql(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&qe(t,n,"name",u.name,u,null),qe(t,n,"formEncType",u.formEncType,u,null),qe(t,n,"formMethod",u.formMethod,u,null),qe(t,n,"formTarget",u.formTarget,u,null)):(qe(t,n,"encType",u.encType,u,null),qe(t,n,"method",u.method,u,null),qe(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ql(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ki);return;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ql(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Te("beforetoggle",t),Te("toggle",t),Je(t,"popover",r);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=lM.get(a)||a,Je(t,a,r);else return}ve=!0}function nh(t,n,a,r,u,c){switch(a){case"style":Xm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")us(t,r);else if(typeof r=="number"||typeof r=="bigint")us(t,""+r);else return;break;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"onClick":r!=null&&(t.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[B]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,u);break t}ve=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Je(t,a,r)}return}ve=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",t),Te("load",t);var r=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,c,_,a,null)}}u&&qe(t,n,"srcSet",a.srcSet,a,null),r&&qe(t,n,"src",a.src,a,null);return;case"input":Te("invalid",t);var A=c=_=u=null,I=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":u=ct;break;case"type":_=ct;break;case"checked":I=ct;break;case"defaultChecked":j=ct;break;case"value":c=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:qe(t,n,r,ct,a,null)}}Fm(t,c,A,I,j,_,u,!1);return;case"select":Te("invalid",t),r=_=c=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":c=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:qe(t,n,u,A,a,null)}n=c,a=_,t.multiple=!!r,n!=null?ls(t,!!r,n,!1):a!=null&&ls(t,!!r,a,!0);return;case"textarea":Te("invalid",t),c=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":u=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:qe(t,n,_,A,a,null)}Gm(t,r,u,c);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":qe(t,n,I,r,a,null));return;case"dialog":Te("beforetoggle",t),Te("toggle",t),Te("cancel",t),Te("close",t);break;case"iframe":case"object":Te("load",t);break;case"video":case"audio":for(r=0;r<ol.length;r++)Te(ol[r],t);break;case"image":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"embed":case"source":case"link":Te("error",t),Te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,j,r,a,null)}return;default:if(af(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&nh(t,n,ct,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&qe(t,n,A,r,a,null))}var ky={};function Wy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,_=null,A=null,I=null,j=null,ct=null;for(st in a){var St=a[st];if(a.hasOwnProperty(st)&&St!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=St;default:r.hasOwnProperty(st)||qe(t,n,st,null,r,St)}}for(var K in r){var st=r[K];if(St=a[K],r.hasOwnProperty(K)&&(st!=null||St!=null))switch(K){case"type":st!==St&&(ve=!0),c=st;break;case"name":st!==St&&(ve=!0),u=st;break;case"checked":st!==St&&(ve=!0),j=st;break;case"defaultChecked":st!==St&&(ve=!0),ct=st;break;case"value":st!==St&&(ve=!0),_=st;break;case"defaultValue":st!==St&&(ve=!0),A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==St&&qe(t,n,K,st,r,St)}}ef(t,_,A,I,j,ct,c,u);return;case"select":st=_=A=K=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":st=I;default:r.hasOwnProperty(c)||qe(t,n,c,null,r,I)}for(u in r)if(c=r[u],I=a[u],r.hasOwnProperty(u)&&(c!=null||I!=null))switch(u){case"value":c!==I&&(ve=!0),K=c;break;case"defaultValue":c!==I&&(ve=!0),A=c;break;case"multiple":c!==I&&(ve=!0),_=c;default:c!==I&&qe(t,n,u,c,r,I)}n=A,a=_,r=st,K!=null?ls(t,!!a,K,!1):!!r!=!!a&&(n!=null?ls(t,!!a,n,!0):ls(t,!!a,a?[]:"",!1));return;case"textarea":st=K=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(t,n,A,null,r,u)}for(_ in r)if(u=r[_],c=a[_],r.hasOwnProperty(_)&&(u!=null||c!=null))switch(_){case"value":u!==c&&(ve=!0),K=u;break;case"defaultValue":u!==c&&(ve=!0),st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==c&&qe(t,n,_,u,r,c)}Hm(t,K,st);return;case"option":for(var Lt in a)K=a[Lt],a.hasOwnProperty(Lt)&&K!=null&&!r.hasOwnProperty(Lt)&&(Lt==="selected"?t.selected=!1:qe(t,n,Lt,null,r,K));for(I in r)K=r[I],st=a[I],r.hasOwnProperty(I)&&K!==st&&(K!=null||st!=null)&&(I==="selected"?(K!==st&&(ve=!0),t.selected=K&&typeof K!="function"&&typeof K!="symbol"):qe(t,n,I,K,r,st));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)K=a[Kt],a.hasOwnProperty(Kt)&&K!=null&&!r.hasOwnProperty(Kt)&&qe(t,n,Kt,null,r,K);for(j in r)if(K=r[j],st=a[j],r.hasOwnProperty(j)&&K!==st&&(K!=null||st!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,n));break;default:qe(t,n,j,K,r,st)}return;default:if(af(n)){for(var he in a)K=a[he],a.hasOwnProperty(he)&&K!==void 0&&!r.hasOwnProperty(he)&&nh(t,n,he,void 0,r,K);for(ct in r)K=r[ct],st=a[ct],!r.hasOwnProperty(ct)||K===st||K===void 0&&st===void 0||nh(t,n,ct,K,r,st);return}}for(var J in a)K=a[J],a.hasOwnProperty(J)&&K!=null&&!r.hasOwnProperty(J)&&qe(t,n,J,null,r,K);for(St in r)K=r[St],st=a[St],!r.hasOwnProperty(St)||K===st||K==null&&st==null||qe(t,n,St,K,r,st)}function K_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],c=u.transferSize,_=u.initiatorType,A=u.duration;if(c&&A&&K_(_)){for(_=0,A=u.responseEnd,r+=1;r<a.length;r++){var I=a[r],j=I.startTime;if(j>A)break;var ct=I.transferSize,St=I.initiatorType;ct&&K_(St)&&(I=I.responseEnd,_+=ct*(I<A?1:(A-j)/(I-j)))}if(--r,n+=8*(c+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ih=null,ah=null;function ul(t){return t.nodeType===9?t:t.ownerDocument}function Q_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function j_(t,n,a,r){return a=ul(a).createElement(t),a[b]=r,a[B]=n,Nn(a,t,n),_e(a),a}function rh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sh=null;function Yy(){var t=window.event;return t&&t.type==="popstate"?t===sh?!1:(sh=t,!0):(sh=null,!1)}var oh=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,$_=typeof Promise=="function"?Promise:void 0,tv=typeof requestAnimationFrame=="function"?requestAnimationFrame:oh,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof $_<"u"?function(t){return $_.resolve(null).then(t).catch(Qy)}:oh;function Qy(t){setTimeout(function(){throw t})}function ur(t){return t==="head"}function ev(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),qs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")mh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mh(a);for(var c=a.firstChild;c;){var _=c.nextSibling,A=c.nodeName;c[Ut]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&mh(t.ownerDocument.body);a=u}while(a);qs(n)}function nv(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function iv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function av(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Jy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function lh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Jy(n,a,t)}function jy(t){return t.documentElement.clientHeight}function $y(t){this.addEventListener("load",t),this.addEventListener("error",t)}function tE(t,n,a,r,u,c,_,A,I){var j=n.nodeType===9?n:n.ownerDocument;try{var ct=j.startViewTransition({update:function(){var K=j.defaultView,st=K.navigation&&K.navigation.transition,Lt=j.fonts.status;r();var Kt=[];if(Lt==="loaded"&&(jy(j),j.fonts.status==="loading"&&Kt.push(j.fonts.ready)),Lt=Kt.length,t!==null)for(var he=t.suspenseyImages,J=0,F=0;F<he.length;F++){var it=he[F];if(!it.complete){var vt=it.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<K.innerHeight&&vt.left<K.innerWidth){if(J+=bv(it),J>ec){Kt.length=Lt;break}it=new Promise($y.bind(it)),Kt.push(it)}}}if(0<Kt.length)return K=Promise.race([Promise.all(Kt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(u,u),(st?Promise.allSettled([st.finished,K]):K).then(c,c);if(u(),st)return st.finished.then(c,c);c()},types:a});j.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var K=j.documentElement.getAnimations({subtree:!0}),st=0;st<K.length;st++){var Lt=K[st],Kt=Lt.effect,he=Kt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){St.push(Lt),Lt=Kt.getKeyframes();for(var J=he=void 0,F=!0,it=0;it<Lt.length;it++){var vt=Lt[it],Wt=vt.width;if(he===void 0)he=Wt;else if(he!==Wt){F=!1;break}if(Wt=vt.height,J===void 0)J=Wt;else if(J!==Wt){F=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}F&&he!==void 0&&J!==void 0&&(Kt.setKeyframes(Lt),F=getComputedStyle(Kt.target,Kt.pseudoElement),F.width!==he||F.height!==J)&&(F=Lt[0],F.width=he,F.height=J,F=Lt[Lt.length-1],F.width=he,F.height=J,Kt.setKeyframes(Lt))}}_()},function(K){j.__reactViewTransition===ct&&(j.__reactViewTransition=null);try{typeof K=="object"&&K!==null&&K.name==="InvalidStateError"&&(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null),K!==null&&I(K)}finally{r(),u(),_()}}),ct.finished.finally(function(){for(var K=0;K<St.length;K++)St[K].cancel();j.__reactViewTransition===ct&&(j.__reactViewTransition=null),A()}),ct}catch{return r(),u(),_(),null}}function Yr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Yr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:D({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Yr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[u])}return r},Yr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function rv(t){return{name:t,group:new Yr("group",t),imagePair:new Yr("image-pair",t),old:new Yr("old",t),new:new Yr("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(ov(c,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(u=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Hs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),g(this._fragmentFiber.child,!1,eE,t,A,r)}this._eventListeners=c}};function eE(t,n,a,r){return M(t).addEventListener(n,a,r),!1}ui.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=ov(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var c=u.cleanup;u=Hs(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,nE,t,a,u),r.splice(n,1),c!==null&&c()}};function nE(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Hs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function sv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function ov(t,n,a,r){if(t.length===0)return-1;r=sv(r);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&sv(c.optionsOrUseCapture)===r)return u}return-1}ui.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];r.addEventListener(c.type,c.attachedListener,Hs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],r.removeEventListener(c.type,c.attachedListener,Hs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){g(this._fragmentFiber.child,!0,lv,t,void 0,void 0)};function lv(t,n){return t.tag===6?!1:(t=M(t),pE(t,n))}ui.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,uh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!lv(n[a],t);a--);};function uh(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=ul(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,iE,t,void 0,void 0))};function iE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,aE,t,void 0,void 0)};function aE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,rE,t,void 0,void 0);for(var a=n=0;a<Ui.length;a++){var r=Ui[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ui[n++]=r}Ui.length=n}};function rE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ui=[],ch=!1;function sE(t,n,a){Ui.push({fragmentInstance:t,observer:n,instance:a}),ch||(ch=!0,mE(function(){ch=!1;var r=Ui;Ui=[];for(var u=0;u<r.length;u++){var c=r[u];c.observer.unobserve(c.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,oE,t,void 0,void 0),t};function oE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,uh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var c=y(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=u.compareDocumentPosition(t),I=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&u===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||lE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function lE(t,n,a,r,u){var c=re(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=v(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=U(a,c,N),n===null?n=!1:(g(n,!0,H,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=U(r,c,N),n===null?n=!1:(g(n,!0,C,c,r),c=x,P=x=null,n=c!==null)),n):!1}function uv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,uh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),uv(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),uv(u,a)):M(u).scrollIntoView(t),r+=a?-1:1}};function uE(t,n){return t=M(t),cv(t,n),!1}function cv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function fv(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Hs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,A=0;A<Ui.length;A++){var I=Ui[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Ui[_++]=I)}Ui.length=_,c.observe(t)}),cv(t,n))}function cE(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Hs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?sE(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function fh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fh(a),Zt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function fE(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ut])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function dE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function dv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function dh(t){return t.data==="$?"||t.data==="$~"}function hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ph=null;function hv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function pv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function pE(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function mE(t){tv(function(){tv(function(n){return t(n)})})}function mv(t,n,a){switch(n=ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function gv(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&qe(t,n,r,null,ky,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ki&&(t.onclick=null),Zt(t)}function mh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zt(t)}var Ti=new Map,_v=new Set;function cl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ra=Rt.d;Rt.d={f:gE,r:_E,D:vE,C:SE,L:xE,m:ME,X:EE,S:yE,M:TE};function gE(){var t=Ra.f(),n=qu();return t||n}function _E(t){var n=ce(t);n!==null&&n.tag===5&&n.type==="form"?Sg(n):Ra.r(t)}var Gs=typeof document>"u"?null:document;function vv(t,n,a){var r=Gs;if(r&&typeof n=="string"&&n){var u=gi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_v.has(u)||(_v.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Nn(n,"link",t),_e(n),r.head.appendChild(n)))}}function vE(t){Ra.D(t),vv("dns-prefetch",t,null)}function SE(t,n){Ra.C(t,n),vv("preconnect",t,n)}function xE(t,n,a){Ra.L(t,n,a);var r=Gs;if(r&&t&&n){var u='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+gi(a.imageSizes)+'"]')):u+='[href="'+gi(t)+'"]';var c=u;switch(n){case"style":c=Vs(t);break;case"script":c=Xs(t)}if(!(Ti.has(c)||(t=D({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(c,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(fl(c))||n==="script"&&r.querySelector(dl(c))))){var _=r.createElement("link");Nn(_,"link",t),n==="style"&&(_[qt]=!0,_.onload=_.onerror=function(){Ze(_)}),_e(_),r.head.appendChild(_)}}}function ME(t,n){Ra.m(t,n);var a=Gs;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+gi(r)+'"][href="'+gi(t)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Xs(t)}if(!Ti.has(c)&&(t=D({rel:"modulepreload",href:t},n),Ti.set(c,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(c)))return}r=a.createElement("link"),Nn(r,"link",t),_e(r),a.head.appendChild(r)}}}function yE(t,n,a){Ra.S(t,n,a);var r=Gs;if(r&&t){var u=ye(r).hoistableStyles,c=Vs(t);n=n||"default";var _=u.get(c);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(fl(c)))A.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(c))&&gh(t,a);var I=_=r.createElement("link");_e(I),Nn(I,"link",t),I._p=new Promise(function(j,ct){I.onload=j,I.onerror=ct}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,$u(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(c,_)}}}function EE(t,n){Ra.X(t,n);var a=Gs;if(a&&t){var r=ye(a).hoistableScripts,u=Xs(t),c=r.get(u);c||(c=a.querySelector(dl(u)),c||(t=D({src:t,async:!0},n),(n=Ti.get(u))&&_h(t,n),c=a.createElement("script"),_e(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function TE(t,n){Ra.M(t,n);var a=Gs;if(a&&t){var r=ye(a).hoistableScripts,u=Xs(t),c=r.get(u);c||(c=a.querySelector(dl(u)),c||(t=D({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&_h(t,n),c=a.createElement("script"),_e(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function Sv(t,n,a,r){var u=(u=Ie.current)?cl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vs(a.href),n=ye(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vs(a.href);var c=ye(u).hoistableStyles,_=c.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=u.querySelector(fl(t)))?c._p||(_.instance=c,_.state.loading=5):(c=Ti.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,c)),bE(u,t,c,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Xs(a),n=ye(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Vs(t){return'href="'+gi(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function xv(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function bE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[qt]=!0,n.onload=n.onerror=Ze.bind(null,n),Nn(n,"link",a),_e(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Xs(t){return'[src="'+gi(t)+'"]'}function dl(t){return"script[async]"+t}function Mv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(r)return n.instance=r,_e(r),r;var u=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),_e(r),Nn(r,"style",u),$u(r,a.precedence,t),n.instance=r;case"stylesheet":u=Vs(a.href);var c=t.querySelector(fl(u));if(c)return n.state.loading|=4,n.instance=c,_e(c),c;r=xv(a),(u=Ti.get(u))&&gh(r,u),c=(t.ownerDocument||t).createElement("link"),_e(c);var _=c;return _._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Nn(c,"link",r),n.state.loading|=4,$u(c,a.precedence,t),n.instance=c;case"script":return c=Xs(a.src),(u=t.querySelector(dl(c)))?(n.instance=u,_e(u),u):(r=a,(u=Ti.get(c))&&(r=D({},a),_h(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),_e(u),Nn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$u(r,a.precedence,t));return n.instance}function $u(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)c=A;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function yv(t,n,a){if(tc===null){var r=new Map,u=tc=new Map;u.set(a,r)}else u=tc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Ut]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var A=r.get(_);A?A.push(c):r.set(_,[c])}}return r}function vh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function AE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ev(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Tv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Av(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=bv(n),t.suspenseyImages.push(n)),t=wE.bind(t),n.decode().then(t,t))}function RE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Vs(r.href),c=n.querySelector(fl(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,_e(c);return}c=n.ownerDocument||n,r=xv(r),(u=Ti.get(u))&&gh(r,u),c=c.createElement("link"),_e(c);var _=c;_._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Nn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ec=0;function CE(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ec===0&&(ec=62500*qy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ec?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Rv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ic(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function hl(){this.count--,Rv(this)}function wE(){this.imgCount--,Rv(this)}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(DE,t),nc=null,hl.call(t))}function DE(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var r=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var _=u[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),c=a.get(_)||r,c===r&&a.set(null,u),a.set(_,u),this.count++,r=hl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ks={$$typeof:tt,Provider:null,Consumer:null,_currentValue:Ve,_currentValue2:Ve,_threadCount:0};function NE(t,n,a,r,u,c,_,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Cv(t,n,a,r,u,c,_,A,I,j,ct,St){return t=new NE(t,n,a,_,I,j,ct,St,A),n=1,c===!0&&(n|=24),c=Yn(3,null,null,n),t.current=c,c.stateNode=t,n=Lf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},zf(c),t}function wv(t){return t?(t=gs,t):gs}function Dv(t,n,a,r,u,c){u=wv(u),r.context===null?r.context=u:r.pendingContext=u,r=Ja(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=ja(t,r,n),a!==null&&(Jn(a,t,n),ko(a,t,n))}function Nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sh(t,n){Nv(t,n),(t=t.alternate)&&Nv(t,n)}function Uv(t){if(t.tag===13||t.tag===31){var n=Dr(t,67108864);n!==null&&Jn(n,t,67108864),Sh(t,67108864)}}function Lv(t){if(t.tag===13||t.tag===31){var n=li();n=Ro(n);var a=Dr(t,n);a!==null&&Jn(a,t,n),Sh(t,n)}}var Ws=!0;function UE(t,n,a,r){var u=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=2,xh(t,n,a,r)}finally{Rt.p=c,_t.T=u}}function LE(t,n,a,r){var u=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=8,xh(t,n,a,r)}finally{Rt.p=c,_t.T=u}}function xh(t,n,a,r){if(Ws){var u=Mh(r);if(u===null)eh(t,n,r,ac,a),Pv(t,r);else if(PE(u,t,n,a,r))r.stopPropagation();else if(Pv(t,r),n&4&&-1<OE.indexOf(t)){for(;u!==null;){var c=ce(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=ha(c.pendingLanes);if(_!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var I=1<<31-ue(_);A.entanglements[1]|=I,_&=~I}ta(c),(Fe&6)===0&&(Xu=Vt()+500,sl(0))}}break;case 31:case 13:A=Dr(c,2),A!==null&&Jn(A,c,2),qu(),Sh(c,2)}if(c=Mh(r),c===null&&eh(t,n,r,ac,a),c===u)break;u=c}u!==null&&r.stopPropagation()}else eh(t,n,r,null,a)}}function Mh(t){return t=sf(t),yh(t)}var ac=null;function yh(t){if(ac=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Ov(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case le:return 2;case k:return 8;case Ct:case xt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var Eh=!1,cr=null,fr=null,dr=null,pl=new Map,ml=new Map,hr=[],OE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(t,n){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(t,n,a,r,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ce(n),n!==null&&Uv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function PE(t,n,a,r,u){switch(n){case"focusin":return cr=gl(cr,t,n,a,r,u),!0;case"dragenter":return fr=gl(fr,t,n,a,r,u),!0;case"mouseover":return dr=gl(dr,t,n,a,r,u),!0;case"pointerover":var c=u.pointerId;return pl.set(c,gl(pl.get(c)||null,t,n,a,r,u)),!0;case"gotpointercapture":return c=u.pointerId,ml.set(c,gl(ml.get(c)||null,t,n,a,r,u)),!0}return!1}function Iv(t){var n=re(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,kl(t.priority,function(){Lv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,kl(t.priority,function(){Lv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Mh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);rf=r,a.target.dispatchEvent(r),rf=null}else return n=ce(a),n!==null&&Uv(n),t.blockedOn=a,!1;n.shift()}return!0}function zv(t,n,a){rc(t)&&a.delete(n)}function IE(){Eh=!1,cr!==null&&rc(cr)&&(cr=null),fr!==null&&rc(fr)&&(fr=null),dr!==null&&rc(dr)&&(dr=null),pl.forEach(zv),ml.forEach(zv)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,Eh||(Eh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,IE)))}var oc=null;function Bv(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(yh(r||a)===null)continue;break}var c=ce(a);c!==null&&(t.splice(n,3),n-=3,ad(c,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function qs(t){function n(I){return sc(I,t)}cr!==null&&sc(cr,t),fr!==null&&sc(fr,t),dr!==null&&sc(dr,t),pl.forEach(n),ml.forEach(n);for(var a=0;a<hr.length;a++){var r=hr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Iv(a),a.blockedOn===null&&hr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],c=a[r+1],_=u[B]||null;if(typeof c=="function")_||Bv(a);else if(_){var A=null;if(c&&c.hasAttribute("formAction")){if(u=c,_=c[B]||null)A=_.formAction;else if(yh(u)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Bv(a)}}}function Fv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Th(t){this._internalRoot=t}lc.prototype.render=Th.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();Dv(a,r,t,n,null,null)},lc.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dv(t.current,2,null,t,null,null),qu(),n[ft]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<hr.length&&n!==0&&n<hr[a].priority;a++);hr.splice(a,0,t),a===0&&Iv(t)}};var Hv=e.version;if(Hv!=="19.3.0")throw Error(s(527,Hv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var zE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Jt=uc.inject(zE),Ht=uc}catch{}}return vl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=wg,c=Dg,_=Ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Cv(t,1,!1,null,null,a,r,null,u,c,_,Fv),t[ft]=n.current,th(t),new Th(n)},vl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",c=wg,_=Dg,A=Ng,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Cv(t,1,!0,n,a??null,r,u,I,c,_,A,Fv),n.context=wv(null),a=n.current,r=li(),r=Ro(r),u=Ja(r),u.callback=null,ja(a,u,r),a=r,n.current.lanes=a,Vi(n,a),ta(n),t[ft]=n.current,th(t),new lc(n)},vl.version="19.3.0",vl}var Qv;function qE(){if(Qv)return Rh.exports;Qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rh.exports=WE(),Rh.exports}var YE=qE();const mm="186",ZE=0,Jv=1,KE=2,Pc=1,QE=2,Rl=3,Fa=0,$n=1,Oa=2,Ia=0,wl=1,jv=2,$v=3,tS=4,JE=5,oo=100,jE=101,$E=102,tT=103,eT=104,nT=200,iT=201,aT=202,rT=203,px=204,mx=205,sT=206,oT=207,lT=208,uT=209,cT=210,fT=211,dT=212,hT=213,pT=214,dp=0,hp=1,pp=2,Nl=3,mp=4,gp=5,_p=6,vp=7,gx=0,mT=1,gT=2,oa=0,_x=1,vx=2,Sx=3,xx=4,Mx=5,yx=6,Ex=7,Tx=300,ns=301,po=302,Nh=303,Uh=304,Kc=306,Sp=1e3,Pa=1001,xp=1002,Ln=1003,_T=1004,cc=1005,Fn=1006,Lh=1007,ts=1008,hi=1009,bx=1010,Ax=1011,Ul=1012,gm=1013,ua=1014,ra=1015,ca=1016,_m=1017,vm=1018,Ll=1020,Rx=35902,Cx=35899,wx=1021,Dx=1022,zi=1023,Ha=1026,es=1027,Nx=1028,Sm=1029,is=1030,xm=1031,Mm=1033,Ic=33776,zc=33777,Bc=33778,Fc=33779,Mp=35840,yp=35841,Ep=35842,Tp=35843,bp=36196,Ap=37492,Rp=37496,Cp=37488,wp=37489,Vc=37490,Dp=37491,Np=37808,Up=37809,Lp=37810,Op=37811,Pp=37812,Ip=37813,zp=37814,Bp=37815,Fp=37816,Hp=37817,Gp=37818,Vp=37819,Xp=37820,kp=37821,Wp=36492,qp=36494,Yp=36495,Zp=36283,Kp=36284,Xc=36285,Qp=36286,vT=3200,Jp=0,ST=1,yr="",di="srgb",kc="srgb-linear",Wc="linear",Ye="srgb",Oh=7680,xT=519,MT=512,yT=513,ET=514,ym=515,TT=516,bT=517,Em=518,AT=519,RT=35044,eS="300 es",sa=2e3,Ol=2001;function CT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wT(){const o=qc("canvas");return o.style.display="block",o}const nS={};function iS(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ux(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=Ux(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function ze(...o){o=Ux(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function uo(...o){const e=o.join(" ");e in nS||(nS[e]=!0,oe(...o))}function DT(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const NT={[dp]:hp,[pp]:_p,[mp]:vp,[Nl]:gp,[hp]:dp,[_p]:pp,[vp]:mp,[gp]:Nl};class as{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=Math.PI/180,jp=180/Math.PI;function Il(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function UT(o,e){return(o%e+e)%e}function Ih(o,e,i){return(1-i)*o+i*e}function Sl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lm=class Lm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*l+e.x,this.y=f*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lm.prototype.isVector2=!0;let Oe=Lm;class dn{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,d,h){let p=s[l+0],m=s[l+1],S=s[l+2],g=s[l+3],v=f[d+0],y=f[d+1],R=f[d+2],w=f[d+3];if(g!==w||p!==v||m!==y||S!==R){let M=p*v+m*y+S*R+g*w;M<0&&(v=-v,y=-y,R=-R,w=-w,M=-M);let x=1-h;if(M<.9995){const P=Math.acos(M),H=Math.sin(P);x=Math.sin(x*P)/H,h=Math.sin(h*P)/H,p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+w*h}else{p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+w*h;const P=1/Math.sqrt(p*p+m*m+S*S+g*g);p*=P,m*=P,S*=P,g*=P}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,f,d){const h=s[l],p=s[l+1],m=s[l+2],S=s[l+3],g=f[d],v=f[d+1],y=f[d+2],R=f[d+3];return e[i]=h*R+S*g+p*y-m*v,e[i+1]=p*R+S*v+m*g-h*y,e[i+2]=m*R+S*y+h*v-p*g,e[i+3]=S*R-h*g-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),S=h(l/2),g=h(f/2),v=p(s/2),y=p(l/2),R=p(f/2);switch(d){case"XYZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"YXZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"ZXY":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"ZYX":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"YZX":this._x=v*S*g+m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g-v*y*R;break;case"XZY":this._x=v*S*g-m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g+v*y*R;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],g=i[10],v=s+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(S-p)*y,this._y=(f-m)*y,this._z=(d-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(S-p)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(f+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(f-m)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(p+S)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(d-l)/y,this._x=(f+m)/y,this._y=(p+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+l*m-f*p,this._y=l*S+d*p+f*h-s*m,this._z=f*S+d*m+s*p-l*h,this._w=d*S-s*h-l*p-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Om=class Om{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(aS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(aS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*s),S=2*(h*i-f*l),g=2*(f*s-d*i);return this.x=i+p*m+d*g-h*S,this.y=s+p*S+h*m-f*g,this.z=l+p*g+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-f*h,this.y=f*d-s*p,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zh.copy(this).projectOnVector(e),this.sub(zh)}reflect(e){return this.sub(zh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Om.prototype.isVector3=!0;let et=Om;const zh=new et,aS=new dn,Pm=class Pm{constructor(e,i,s,l,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,p,m)}set(e,i,s,l,f,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=f,S[5]=p,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],S=s[4],g=s[7],v=s[2],y=s[5],R=s[8],w=l[0],M=l[3],x=l[6],P=l[1],H=l[4],C=l[7],N=l[2],U=l[5],D=l[8];return f[0]=d*w+h*P+p*N,f[3]=d*M+h*H+p*U,f[6]=d*x+h*C+p*D,f[1]=m*w+S*P+g*N,f[4]=m*M+S*H+g*U,f[7]=m*x+S*C+g*D,f[2]=v*w+y*P+R*N,f[5]=v*M+y*H+R*U,f[8]=v*x+y*C+R*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*f*S+s*h*p+l*f*m-l*d*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=S*d-h*m,v=h*p-S*f,y=m*f-d*p,R=i*g+s*v+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=g*w,e[1]=(l*m-S*s)*w,e[2]=(h*s-l*d)*w,e[3]=v*w,e[4]=(S*i-l*p)*w,e[5]=(l*f-h*i)*w,e[6]=y*w,e[7]=(s*p-m*i)*w,e[8]=(d*i-s*f)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,i)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pm.prototype.isMatrix3=!0;let fe=Pm;const Bh=new fe,rS=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sS=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LT(){const o={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ye&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ye&&(l.r=co(l.r),l.g=co(l.g),l.b=co(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===yr?Wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[kc]:{primaries:e,whitePoint:s,transfer:Wc,toXYZ:rS,fromXYZ:sS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:s,transfer:Ye,toXYZ:rS,fromXYZ:sS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const De=LT();function za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ys;class OT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ys===void 0&&(Ys=qc("canvas")),Ys.width=e.width,Ys.height=e.height;const l=Ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ys}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=za(f[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(za(i[s]/255)*255):i[s]=za(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PT=0;class Tm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(Fh(l[d].image)):f.push(Fh(l[d]))}else f=Fh(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function Fh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?OT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let IT=0;const Hh=new et;class Hn extends as{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Pa,l=Pa,f=Fn,d=ts,h=zi,p=hi,m=Hn.DEFAULT_ANISOTROPY,S=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=Il(),this.name="",this.source=new Tm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sp:e.x=e.x-Math.floor(e.x);break;case Pa:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sp:e.y=e.y-Math.floor(e.y);break;case Pa:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Tx;Hn.DEFAULT_ANISOTROPY=1;const Im=class Im{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const p=e.elements,m=p[0],S=p[4],g=p[8],v=p[1],y=p[5],R=p[9],w=p[2],M=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(g-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(g+w)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(m+1)/2,C=(y+1)/2,N=(x+1)/2,U=(S+v)/4,D=(g+w)/4,T=(R+M)/4;return H>C&&H>N?H<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(H),l=U/s,f=D/s):C>N?C<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(C),s=U/l,f=T/l):N<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(N),s=D/f,l=T/f),this.set(s,l,f,i),this}let P=Math.sqrt((M-R)*(M-R)+(g-w)*(g-w)+(v-S)*(v-S));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(g-w)/P,this.z=(v-S)/P,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Im.prototype.isVector4=!0;let sn=Im;class zT extends as{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},f=new Hn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Tm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends zT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Lx extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class BT extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Zc=class Zc{constructor(e,i,s,l,f,d,h,p,m,S,g,v,y,R,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,d,h,p,m,S,g,v,y,R,w,M)}set(e,i,s,l,f,d,h,p,m,S,g,v,y,R,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=g,x[14]=v,x[3]=y,x[7]=R,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Zs.setFromMatrixColumn(e,0).length(),f=1/Zs.setFromMatrixColumn(e,1).length(),d=1/Zs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(l),m=Math.sin(l),S=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const v=d*S,y=d*g,R=h*S,w=h*g;i[0]=p*S,i[4]=-p*g,i[8]=m,i[1]=y+R*m,i[5]=v-w*m,i[9]=-h*p,i[2]=w-v*m,i[6]=R+y*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,y=p*g,R=m*S,w=m*g;i[0]=v+w*h,i[4]=R*h-y,i[8]=d*m,i[1]=d*g,i[5]=d*S,i[9]=-h,i[2]=y*h-R,i[6]=w+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,y=p*g,R=m*S,w=m*g;i[0]=v-w*h,i[4]=-d*g,i[8]=R+y*h,i[1]=y+R*h,i[5]=d*S,i[9]=w-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,y=d*g,R=h*S,w=h*g;i[0]=p*S,i[4]=R*m-y,i[8]=v*m+w,i[1]=p*g,i[5]=w*m+v,i[9]=y*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*S,i[4]=w-v*g,i[8]=R*g+y,i[1]=g,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=y*g+R,i[10]=v-w*g}else if(e.order==="XZY"){const v=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*S,i[4]=-g,i[8]=m*S,i[1]=v*g+w,i[5]=d*S,i[9]=y*g-R,i[2]=R*g-y,i[6]=h*S,i[10]=w*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FT,e,HT)}lookAt(e,i,s){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),mr.crossVectors(s,ci),mr.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),mr.crossVectors(s,ci)),mr.normalize(),fc.crossVectors(ci,mr),l[0]=mr.x,l[4]=fc.x,l[8]=ci.x,l[1]=mr.y,l[5]=fc.y,l[9]=ci.y,l[2]=mr.z,l[6]=fc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],S=s[1],g=s[5],v=s[9],y=s[13],R=s[2],w=s[6],M=s[10],x=s[14],P=s[3],H=s[7],C=s[11],N=s[15],U=l[0],D=l[4],T=l[8],L=l[12],G=l[1],Z=l[5],Y=l[9],$=l[13],V=l[2],tt=l[6],W=l[10],X=l[14],ut=l[3],ot=l[7],dt=l[11],yt=l[15];return f[0]=d*U+h*G+p*V+m*ut,f[4]=d*D+h*Z+p*tt+m*ot,f[8]=d*T+h*Y+p*W+m*dt,f[12]=d*L+h*$+p*X+m*yt,f[1]=S*U+g*G+v*V+y*ut,f[5]=S*D+g*Z+v*tt+y*ot,f[9]=S*T+g*Y+v*W+y*dt,f[13]=S*L+g*$+v*X+y*yt,f[2]=R*U+w*G+M*V+x*ut,f[6]=R*D+w*Z+M*tt+x*ot,f[10]=R*T+w*Y+M*W+x*dt,f[14]=R*L+w*$+M*X+x*yt,f[3]=P*U+H*G+C*V+N*ut,f[7]=P*D+H*Z+C*tt+N*ot,f[11]=P*T+H*Y+C*W+N*dt,f[15]=P*L+H*$+C*X+N*yt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],g=e[6],v=e[10],y=e[14],R=e[3],w=e[7],M=e[11],x=e[15],P=p*y-m*v,H=h*y-m*g,C=h*v-p*g,N=d*y-m*S,U=d*v-p*S,D=d*g-h*S;return i*(w*P-M*H+x*C)-s*(R*P-M*N+x*U)+l*(R*H-w*N+x*D)-f*(R*C-w*U+M*D)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(f*S-h*p)+l*(f*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=e[9],v=e[10],y=e[11],R=e[12],w=e[13],M=e[14],x=e[15],P=i*h-s*d,H=i*p-l*d,C=i*m-f*d,N=s*p-l*h,U=s*m-f*h,D=l*m-f*p,T=S*w-g*R,L=S*M-v*R,G=S*x-y*R,Z=g*M-v*w,Y=g*x-y*w,$=v*x-y*M,V=P*$-H*Y+C*Z+N*G-U*L+D*T;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/V;return e[0]=(h*$-p*Y+m*Z)*tt,e[1]=(l*Y-s*$-f*Z)*tt,e[2]=(w*D-M*U+x*N)*tt,e[3]=(v*U-g*D-y*N)*tt,e[4]=(p*G-d*$-m*L)*tt,e[5]=(i*$-l*G+f*L)*tt,e[6]=(M*C-R*D-x*H)*tt,e[7]=(S*D-v*C+y*H)*tt,e[8]=(d*Y-h*G+m*T)*tt,e[9]=(s*G-i*Y-f*T)*tt,e[10]=(R*U-w*C+x*P)*tt,e[11]=(g*C-S*U-y*P)*tt,e[12]=(h*L-d*Z-p*T)*tt,e[13]=(i*Z-s*L+l*T)*tt,e[14]=(w*H-R*N-M*P)*tt,e[15]=(S*N-g*H+v*P)*tt,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,d=e.x,h=e.y,p=e.z,m=f*d,S=f*h;return this.set(m*d+s,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+s,S*p-l*d,0,m*p-l*h,S*p+l*d,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,d){return this.set(1,s,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,S=d+d,g=h+h,v=f*m,y=f*S,R=f*g,w=d*S,M=d*g,x=h*g,P=p*m,H=p*S,C=p*g,N=s.x,U=s.y,D=s.z;return l[0]=(1-(w+x))*N,l[1]=(y+C)*N,l[2]=(R-H)*N,l[3]=0,l[4]=(y-C)*U,l[5]=(1-(v+x))*U,l[6]=(M+P)*U,l[7]=0,l[8]=(R+H)*D,l[9]=(M-P)*D,l[10]=(1-(v+w))*D,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Zs.set(l[0],l[1],l[2]).length();const h=Zs.set(l[4],l[5],l[6]).length(),p=Zs.set(l[8],l[9],l[10]).length();f<0&&(d=-d),Li.copy(this);const m=1/d,S=1/h,g=1/p;return Li.elements[0]*=m,Li.elements[1]*=m,Li.elements[2]*=m,Li.elements[4]*=S,Li.elements[5]*=S,Li.elements[6]*=S,Li.elements[8]*=g,Li.elements[9]*=g,Li.elements[10]*=g,i.setFromRotationMatrix(Li),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,l,f,d,h=sa,p=!1){const m=this.elements,S=2*f/(i-e),g=2*f/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let R,w;if(p)R=f/(d-f),w=d*f/(d-f);else if(h===sa)R=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(h===Ol)R=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,f,d,h=sa,p=!1){const m=this.elements,S=2/(i-e),g=2/(s-l),v=-(i+e)/(i-e),y=-(s+l)/(s-l);let R,w;if(p)R=1/(d-f),w=d/(d-f);else if(h===sa)R=-2/(d-f),w=-(d+f)/(d-f);else if(h===Ol)R=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=R,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Zc.prototype.isMatrix4=!0;let nn=Zc;const Zs=new et,Li=new nn,FT=new et(0,0,0),HT=new et(1,1,1),mr=new et,fc=new et,ci=new et,oS=new nn,lS=new dn;class Hi{constructor(e=0,i=0,s=0,l=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return oS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oS,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return lS.setFromEuler(this),this.setFromQuaternion(lS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Ox{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GT=0;const uS=new et,Ks=new dn,Ca=new nn,dc=new et,xl=new et,VT=new et,XT=new dn,cS=new et(1,0,0),fS=new et(0,1,0),dS=new et(0,0,1),hS={type:"added"},kT={type:"removed"},Qs={type:"childadded",child:null},Gh={type:"childremoved",child:null};class On extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new et,i=new Hi,s=new dn,l=new et(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new fe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(cS,e)}rotateY(e){return this.rotateOnAxis(fS,e)}rotateZ(e){return this.rotateOnAxis(dS,e)}translateOnAxis(e,i){return uS.copy(e).applyQuaternion(this.quaternion),this.position.add(uS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(cS,e)}translateY(e){return this.translateOnAxis(fS,e)}translateZ(e){return this.translateOnAxis(dS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(xl,dc,this.up):Ca.lookAt(dc,xl,this.up),this.quaternion.setFromRotationMatrix(Ca),l&&(Ca.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(Ca),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hS),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kT),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hS),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,VT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,XT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*l,f[13]+=s-f[1]*i-f[5]*s-f[9]*l,f[14]+=l-f[2]*i-f[6]*s-f[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const g=p[m];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(e.materials,this.material[p]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),g=d(e.shapes),v=d(e.skeletons),y=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),R.length>0&&(s.nodes=R)}return s.object=l,s;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}On.DEFAULT_UP=new et(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WT={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(m,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=S.position.distanceTo(g.position),y=.02,R=.005;m.inputState.pinching&&v>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(WT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new hc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=De.workingColorSpace){if(e=UT(e,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Xh(d,f,e+1/3),this.g=Xh(d,f,e),this.b=Xh(d,f,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function s(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const s=Px[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return De.workingToColorSpace(Bn.copy(this),e),Math.round(Ne(Bn.r*255,0,255))*65536+Math.round(Ne(Bn.g*255,0,255))*256+Math.round(Ne(Bn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,f=Bn.b,d=Math.max(s,l,f),h=Math.min(s,l,f);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=S<=.5?g/(d+h):g/(2-d-h),d){case s:p=(l-f)/g+(l<f?6:0);break;case l:p=(f-s)/g+2;break;case f:p=(s-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=di){De.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,l=Bn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+i,gr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(gr),e.getHSL(pc);const s=Ih(gr.h,pc.h,i),l=Ih(gr.s,pc.s,i),f=Ih(gr.l,pc.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Le;Le.NAMES=Px;class qT extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new et,wa=new et,kh=new et,Da=new et,Js=new et,js=new et,pS=new et,Wh=new et,qh=new et,Yh=new et,Zh=new sn,Kh=new sn,Qh=new sn;class Ii{constructor(e=new et,i=new et,s=new et){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Oi.subVectors(e,i),l.cross(Oi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Oi.subVectors(l,i),wa.subVectors(s,i),kh.subVectors(e,i);const d=Oi.dot(Oi),h=Oi.dot(wa),p=Oi.dot(kh),m=wa.dot(wa),S=wa.dot(kh),g=d*m-h*h;if(g===0)return f.set(0,0,0),null;const v=1/g,y=(m*p-h*S)*v,R=(d*S-h*p)*v;return f.set(1-y-R,R,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,i,s,l,f,d,h,p){return this.getBarycoord(e,i,s,l,Da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Da.x),p.addScaledVector(d,Da.y),p.addScaledVector(h,Da.z),p)}static getInterpolatedAttribute(e,i,s,l,f,d){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(e,i),Kh.fromBufferAttribute(e,s),Qh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Zh,f.x),d.addScaledVector(Kh,f.y),d.addScaledVector(Qh,f.z),d}static isFrontFacing(e,i,s,l){return Oi.subVectors(s,i),wa.subVectors(e,i),Oi.cross(wa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Oi.cross(wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let d,h;Js.subVectors(l,s),js.subVectors(f,s),Wh.subVectors(e,s);const p=Js.dot(Wh),m=js.dot(Wh);if(p<=0&&m<=0)return i.copy(s);qh.subVectors(e,l);const S=Js.dot(qh),g=js.dot(qh);if(S>=0&&g<=S)return i.copy(l);const v=p*g-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(s).addScaledVector(Js,d);Yh.subVectors(e,f);const y=Js.dot(Yh),R=js.dot(Yh);if(R>=0&&y<=R)return i.copy(f);const w=y*m-p*R;if(w<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(js,h);const M=S*R-y*g;if(M<=0&&g-S>=0&&y-R>=0)return pS.subVectors(f,l),h=(g-S)/(g-S+(y-R)),i.copy(l).addScaledVector(pS,h);const x=1/(M+w+v);return d=w*x,h=v*x,i.copy(s).addScaledVector(Js,d).addScaledVector(js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Pi):Pi.fromBufferAttribute(f,d),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),gc.subVectors(this.max,Ml),$s.subVectors(e.a,Ml),to.subVectors(e.b,Ml),eo.subVectors(e.c,Ml),_r.subVectors(to,$s),vr.subVectors(eo,to),Zr.subVectors($s,eo);let i=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Zr.z,Zr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Zr.z,0,-Zr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Zr.y,Zr.x,0];return!Jh(i,$s,to,eo,gc)||(i=[1,0,0,0,1,0,0,0,1],!Jh(i,$s,to,eo,gc))?!1:(_c.crossVectors(_r,vr),i=[_c.x,_c.y,_c.z],Jh(i,$s,to,eo,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new et,new et,new et,new et,new et,new et,new et,new et],Pi=new et,mc=new zl,$s=new et,to=new et,eo=new et,_r=new et,vr=new et,Zr=new et,Ml=new et,gc=new et,_c=new et,Kr=new et;function Jh(o,e,i,s,l){for(let f=0,d=o.length-3;f<=d;f+=3){Kr.fromArray(o,f);const h=l.x*Math.abs(Kr.x)+l.y*Math.abs(Kr.y)+l.z*Math.abs(Kr.z),p=e.dot(Kr),m=i.dot(Kr),S=s.dot(Kr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const vn=new et,vc=new Oe;let YT=0;class Ba extends as{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=RT,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Sl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Sl(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Sl(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Sl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Sl(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),f=jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ix extends Ba{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class zx extends Ba{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Fi extends Ba{constructor(e,i,s){super(new Float32Array(e),i,s)}}const ZT=new zl,yl=new et,jh=new et;class bm{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):ZT.setFromPoints(e).getCenter(s);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const i=yl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(yl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(jh)),this.expandByPoint(yl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let KT=0;const bi=new nn,$h=new On,no=new et,fi=new zl,El=new zl,An=new et;class da extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CT(e)?zx:Ix)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new fe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];El.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(fi.min,El.min),fi.expandByPoint(An),An.addVectors(fi.max,El.max),fi.expandByPoint(An)):(fi.expandByPoint(El.min),fi.expandByPoint(El.max))}fi.getCenter(s);let l=0;for(let f=0,d=e.count;f<d;f++)An.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(An));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)An.fromBufferAttribute(h,m),p&&(no.fromBufferAttribute(e,m),An.add(no)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ba(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<s.count;T++)h[T]=new et,p[T]=new et;const m=new et,S=new et,g=new et,v=new Oe,y=new Oe,R=new Oe,w=new et,M=new et;function x(T,L,G){m.fromBufferAttribute(s,T),S.fromBufferAttribute(s,L),g.fromBufferAttribute(s,G),v.fromBufferAttribute(f,T),y.fromBufferAttribute(f,L),R.fromBufferAttribute(f,G),S.sub(m),g.sub(m),y.sub(v),R.sub(v);const Z=1/(y.x*R.y-R.x*y.y);isFinite(Z)&&(w.copy(S).multiplyScalar(R.y).addScaledVector(g,-y.y).multiplyScalar(Z),M.copy(g).multiplyScalar(y.x).addScaledVector(S,-R.x).multiplyScalar(Z),h[T].add(w),h[L].add(w),h[G].add(w),p[T].add(M),p[L].add(M),p[G].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,L=P.length;T<L;++T){const G=P[T],Z=G.start,Y=G.count;for(let $=Z,V=Z+Y;$<V;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const H=new et,C=new et,N=new et,U=new et;function D(T){N.fromBufferAttribute(l,T),U.copy(N);const L=h[T];H.copy(L),H.sub(N.multiplyScalar(N.dot(L))).normalize(),C.crossVectors(U,L);const Z=C.dot(p[T])<0?-1:1;d.setXYZW(T,H.x,H.y,H.z,Z)}for(let T=0,L=P.length;T<L;++T){const G=P[T],Z=G.start,Y=G.count;for(let $=Z,V=Z+Y;$<V;$+=3)D(e.getX($+0)),D(e.getX($+1)),D(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ba(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new et,f=new et,d=new et,h=new et,p=new et,m=new et,S=new et,g=new et;if(e)for(let v=0,y=e.count;v<y;v+=3){const R=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,R),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),S.subVectors(d,f),g.subVectors(l,f),S.cross(g),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),h.add(S),p.add(S),m.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,f),g.subVectors(l,f),S.cross(g),s.setXYZ(v+0,S.x,S.y,S.z),s.setXYZ(v+1,S.x,S.y,S.z),s.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,g=h.normalized,v=new m.constructor(p.length*S);let y=0,R=0;for(let w=0,M=p.length;w<M;w++){h.isInterleavedBufferAttribute?y=p[w]*h.data.stride+h.offset:y=p[w]*S;for(let x=0;x<S;x++)v[R++]=m[y++]}return new Ba(v,S,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new da,s=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let S=0,g=m.length;S<g;S++){const v=m[S],y=e(v,s);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];S.push(y.toJSON(e.data))}S.length>0&&(l[p]=S,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],g=f[m];for(let v=0,y=g.length;v<y;v++)S.push(g[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tp=new et,QT=new et,JT=new fe;class Mr{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=tp.subVectors(s,i).cross(QT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(tp),f=this.normal.dot(l);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||JT.getNormalMatrix(e),l=this.coplanarPoint(tp).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let jT=0;class Bl extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=wl,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=px,this.blendDst=mx,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oh,this.stencilZFail=Oh,this.stencilZPass=Oh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Mr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Oe().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua=new et,ep=new et,Sc=new et,xc=new et;class $T{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ep.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),xc.copy(this.origin).sub(ep);const f=e.distanceTo(i)*.5,d=-this.direction.dot(Sc),h=xc.dot(this.direction),p=-xc.dot(Sc),m=xc.lengthSq(),S=Math.abs(1-d*d);let g,v,y,R;if(S>0)if(g=d*p-h,v=d*h-p,R=f*S,g>=0)if(v>=-R)if(v<=R){const w=1/S;g*=w,v*=w,y=g*(g+d*v+2*h)+v*(d*g+v+2*p)+m}else v=f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v=-f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v<=-R?(g=Math.max(0,-(-d*f+h)),v=g>0?-f:Math.min(Math.max(-f,-p),f),y=-g*g+v*(v+2*p)+m):v<=R?(g=0,v=Math.min(Math.max(-f,-p),f),y=v*(v+2*p)+m):(g=Math.max(0,-(d*f+h)),v=g>0?f:Math.min(Math.max(-f,-p),f),y=-g*g+v*(v+2*p)+m);else v=d>0?-f:f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ep).addScaledVector(Sc,v),y}intersectSphere(e,i){if(e.radius<0)return null;Ua.subVectors(e.center,this.origin);const s=Ua.dot(this.direction),l=Ua.dot(Ua)-s*s,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),S>=0?(f=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(f=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),s>d||f>l||((f>s||isNaN(s))&&(s=f),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),s>p||h>l)||((h>s||s!==s)&&(s=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,s,l,f){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,g=e.x-d.x,v=e.y-d.y,y=e.z-d.z,R=i.x-d.x,w=i.y-d.y,M=i.z-d.z,x=s.x-d.x,P=s.y-d.y,H=s.z-d.z,C=Math.abs(p),N=Math.abs(m),U=Math.abs(S);let D,T,L,G,Z,Y,$,V,tt,W,X,ut;if(C>=N&&C>=U?(L=p,Y=g,tt=R,ut=x,p>=0?(D=m,T=S,G=v,Z=y,$=w,V=M,W=P,X=H):(D=S,T=m,G=y,Z=v,$=M,V=w,W=H,X=P)):N>=U?(L=m,Y=v,tt=w,ut=P,m>=0?(D=S,T=p,G=y,Z=g,$=M,V=R,W=H,X=x):(D=p,T=S,G=g,Z=y,$=R,V=M,W=x,X=H)):(L=S,Y=y,tt=M,ut=H,S>=0?(D=p,T=m,G=g,Z=v,$=R,V=w,W=x,X=P):(D=m,T=p,G=v,Z=g,$=w,V=R,W=P,X=x)),L===0)return null;const ot=D/L,dt=T/L,yt=1/L,Qt=G-ot*Y,Yt=Z-dt*Y,z=$-ot*tt,mt=V-dt*tt,At=W-ot*ut,Q=X-dt*ut,ht=At*mt-Q*z,Tt=Qt*Q-Yt*At,It=z*Yt-mt*Qt;if(l){if(ht<0||Tt<0||It<0)return null}else if((ht<0||Tt<0||It<0)&&(ht>0||Tt>0||It>0))return null;const _t=ht+Tt+It;if(_t===0)return null;const Rt=yt*(ht*Y+Tt*tt+It*ut);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qc extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mS=new nn,Qr=new $T,Mc=new bm,gS=new et,yc=new et,Ec=new et,Tc=new et,np=new et,bc=new et,_S=new et,Ac=new et;class Pn extends On{constructor(e=new da,i=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){bc.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const S=h[p],g=f[p];S!==0&&(np.fromBufferAttribute(g,e),d?bc.addScaledVector(np,S):bc.addScaledVector(np.sub(i),S))}i.add(bc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(f),Qr.copy(e.ray).recast(e.near),!(Mc.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Mc,gS)===null||Qr.origin.distanceToSquared(gS)>(e.far-e.near)**2))&&(mS.copy(f).invert(),Qr.copy(e.ray).applyMatrix4(mS),!(s.boundingBox!==null&&Qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Qr)))}_computeIntersections(e,i,s){let l;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,g=f.attributes.normal,v=f.groups,y=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],P=Math.max(M.start,y.start),H=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,N=H;C<N;C+=3){const U=h.getX(C),D=h.getX(C+1),T=h.getX(C+2);l=Rc(this,x,e,s,m,S,g,U,D,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const P=h.getX(M),H=h.getX(M+1),C=h.getX(M+2);l=Rc(this,d,e,s,m,S,g,P,H,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],P=Math.max(M.start,y.start),H=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,N=H;C<N;C+=3){const U=C,D=C+1,T=C+2;l=Rc(this,x,e,s,m,S,g,U,D,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const P=M,H=M+1,C=M+2;l=Rc(this,d,e,s,m,S,g,P,H,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function t1(o,e,i,s,l,f,d,h){let p;if(e.side===$n?p=s.intersectTriangle(d,f,l,!0,h):p=s.intersectTriangle(l,f,d,e.side===Fa,h),p===null)return null;Ac.copy(h),Ac.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Ac);return m<i.near||m>i.far?null:{distance:m,point:Ac.clone(),object:o}}function Rc(o,e,i,s,l,f,d,h,p,m){o.getVertexPosition(h,yc),o.getVertexPosition(p,Ec),o.getVertexPosition(m,Tc);const S=t1(o,e,i,s,yc,Ec,Tc,_S);if(S){const g=new et;Ii.getBarycoord(_S,yc,Ec,Tc,g),l&&(S.uv=Ii.getInterpolatedAttribute(l,h,p,m,g,new Oe)),f&&(S.uv1=Ii.getInterpolatedAttribute(f,h,p,m,g,new Oe)),d&&(S.normal=Ii.getInterpolatedAttribute(d,h,p,m,g,new et),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new et,materialIndex:0};Ii.getNormal(yc,Ec,Tc,v.normal),S.face=v,S.barycoord=g}return S}class e1 extends Hn{constructor(e=null,i=1,s=1,l,f,d,h,p,m=Ln,S=Ln,g,v){super(null,d,h,p,m,S,l,f,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new bm,n1=new Oe(.5,.5),Cc=new et;class Am{constructor(e=new Mr,i=new Mr,s=new Mr,l=new Mr,f=new Mr,d=new Mr){this.planes=[e,i,s,l,f,d]}set(e,i,s,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=sa,s=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],p=f[2],m=f[3],S=f[4],g=f[5],v=f[6],y=f[7],R=f[8],w=f[9],M=f[10],x=f[11],P=f[12],H=f[13],C=f[14],N=f[15];if(l[0].setComponents(m-d,y-S,x-R,N-P).normalize(),l[1].setComponents(m+d,y+S,x+R,N+P).normalize(),l[2].setComponents(m+h,y+g,x+w,N+H).normalize(),l[3].setComponents(m-h,y-g,x-w,N-H).normalize(),s)l[4].setComponents(p,v,M,C).normalize(),l[5].setComponents(m-p,y-v,x-M,N-C).normalize();else if(l[4].setComponents(m-p,y-v,x-M,N-C).normalize(),i===sa)l[5].setComponents(m+p,y+v,x+M,N+C).normalize();else if(i===Ol)l[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const i=n1.distanceTo(e.center);return Jr.radius=.7071067811865476+i,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bx extends Hn{constructor(e=[],i=ns,s,l,f,d,h,p,m,S){super(e,i,s,l,f,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pl extends Hn{constructor(e,i,s=ua,l,f,d,h=Ln,p=Ln,m,S=Ha,g=1){if(S!==Ha&&S!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,f,d,h,p,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class i1 extends Pl{constructor(e,i=ua,s=ns,l,f,d=Ln,h=Ln,p,m=Ha){const S={width:e,height:e,depth:1},g=[S,S,S,S,S,S];super(e,e,i,s,l,f,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fl extends da{constructor(e=1,i=1,s=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],S=[],g=[];let v=0,y=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,l,d,2),R("x","z","y",1,-1,e,s,-i,l,d,3),R("x","y","z",1,-1,e,i,s,l,f,4),R("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(p),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(S,3)),this.setAttribute("uv",new Fi(g,2));function R(w,M,x,P,H,C,N,U,D,T,L){const G=C/D,Z=N/T,Y=C/2,$=N/2,V=U/2,tt=D+1,W=T+1;let X=0,ut=0;const ot=new et;for(let dt=0;dt<W;dt++){const yt=dt*Z-$;for(let Qt=0;Qt<tt;Qt++){const Yt=Qt*G-Y;ot[w]=Yt*P,ot[M]=yt*H,ot[x]=V,m.push(ot.x,ot.y,ot.z),ot[w]=0,ot[M]=0,ot[x]=U>0?1:-1,S.push(ot.x,ot.y,ot.z),g.push(Qt/D),g.push(1-dt/T),X+=1}}for(let dt=0;dt<T;dt++)for(let yt=0;yt<D;yt++){const Qt=v+yt+tt*dt,Yt=v+yt+tt*(dt+1),z=v+(yt+1)+tt*(dt+1),mt=v+(yt+1)+tt*dt;p.push(Qt,Yt,mt),p.push(Yt,z,mt),ut+=6}h.addGroup(y,ut,L),y+=ut,v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class go extends da{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(s),p=Math.floor(l),m=h+1,S=p+1,g=e/h,v=i/p,y=[],R=[],w=[],M=[];for(let x=0;x<S;x++){const P=x*v-d;for(let H=0;H<m;H++){const C=H*g-f;R.push(C,-P,0),w.push(0,0,1),M.push(H/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<h;P++){const H=P+m*x,C=P+m*(x+1),N=P+1+m*(x+1),U=P+1+m*x;y.push(H,C,U),y.push(C,N,U)}this.setIndex(y),this.setAttribute("position",new Fi(R,3)),this.setAttribute("normal",new Fi(w,3)),this.setAttribute("uv",new Fi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}function mo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(vS(l))l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(vS(l[0])){const f=[];for(let d=0,h=l.length;d<h;d++)f[d]=l[d].clone();e[i][s]=f}else e[i][s]=l.slice();else e[i][s]=l}}return e}function qn(o){const e={};for(let i=0;i<o.length;i++){const s=mo(o[i]);for(const l in s)e[l]=s[l]}return e}function vS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function a1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Hx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const r1={clone:mo,merge:qn};var s1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=a1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Le().setHex(l.value);break;case"v2":this.uniforms[s].value=new Oe().fromArray(l.value);break;case"v3":this.uniforms[s].value=new et().fromArray(l.value);break;case"v4":this.uniforms[s].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new fe().fromArray(l.value);break;case"m4":this.uniforms[s].value=new nn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class l1 extends fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _o extends Bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jp,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u1 extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c1 extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rm extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class f1 extends Rm{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const ip=new nn,SS=new et,xS=new et;class d1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Am,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;SS.setFromMatrixPosition(e.matrixWorld),i.position.copy(SS),xS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(xS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,l){ip.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(ip,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=l?l.z/f.x:1,h=l?l.w/f.y:1,p=l?l.x/f.x:0,m=l?l.y/f.y:0;e.coordinateSystem===Ol||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(ip)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new et,Dc=new dn,ea=new et;class Gx extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,ea.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(wc,Dc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new et,MS=new Oe,yS=new Oe;class Ai extends Gx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=jp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jp*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,i){return this.getViewBounds(e,MS,yS),i.subVectors(yS,MS)}setViewOffset(e,i,s,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ph*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*l/p,i-=d.offsetY*s/m,l*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Cm extends Gx{constructor(e=-1,i=1,s=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class h1 extends d1{constructor(){super(new Cm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends Rm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new h1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class m1 extends Rm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const io=-90,ao=1;class g1 extends On{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(io,ao,e,i);l.layers=this.layers,this.add(l);const f=new Ai(io,ao,e,i);f.layers=this.layers,this.add(f);const d=new Ai(io,ao,e,i);d.layers=this.layers,this.add(d);const h=new Ai(io,ao,e,i);h.layers=this.layers,this.add(h);const p=new Ai(io,ao,e,i);p.layers=this.layers,this.add(p);const m=new Ai(io,ao,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,d,h,p]=i;for(const m of i)this.remove(m);if(e===sa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ol)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,S]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(g,v,y),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class _1 extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zm=class zm{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=l,this}};zm.prototype.isMatrix2=!0;let ES=zm;function TS(o,e,i,s){const l=v1(s);switch(i){case wx:return o*e;case Nx:return o*e/l.components*l.byteLength;case Sm:return o*e/l.components*l.byteLength;case is:return o*e*2/l.components*l.byteLength;case xm:return o*e*2/l.components*l.byteLength;case Dx:return o*e*3/l.components*l.byteLength;case zi:return o*e*4/l.components*l.byteLength;case Mm:return o*e*4/l.components*l.byteLength;case Ic:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yp:case Tp:return Math.max(o,16)*Math.max(e,8)/4;case Mp:case Ep:return Math.max(o,8)*Math.max(e,8)/2;case bp:case Ap:case Cp:case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rp:case Vc:case Dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Lp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case zp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Xp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Wp:case qp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xc:case Qp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function v1(o){switch(o){case hi:case bx:return{byteLength:1,components:1};case Ul:case Ax:case ca:return{byteLength:2,components:1};case _m:case vm:return{byteLength:2,components:4};case ua:case gm:case ra:return{byteLength:4,components:1};case Rx:case Cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mm}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mm);function Vx(){let o=null,e=!1,i=null,s=null;function l(f,d){s=o.requestAnimationFrame(l),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function S1(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const S=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,S);else{g.sort((y,R)=>y.start-R.start);let v=0;for(let y=1;y<g.length;y++){const R=g[v],w=g[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++v,g[v]=w)}g.length=v+1;for(let y=0,R=g.length;y<R;y++){const w=g[y];o.bufferSubData(m,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:l,remove:f,update:d}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M1=`#ifdef USE_ALPHAHASH
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
#endif`,y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
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
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L1=`#ifdef USE_IRIDESCENCE
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
#endif`,O1=`#ifdef USE_BUMPMAP
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
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,k1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W1=`vec3 transformedNormal = objectNormal;
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
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
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
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,db=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_b=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,vb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sb=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Db=`#if defined( USE_POINTS_UV )
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
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
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
#endif`,zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
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
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,aA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,rA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,sA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oA=`#ifdef USE_SKINNING
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
#endif`,lA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,cA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pA=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mA=`#ifdef USE_TRANSMISSION
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
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`#include <common>
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
}`,RA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CA=`#define DISTANCE
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
}`,wA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`uniform float scale;
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
}`,LA=`uniform vec3 diffuse;
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
}`,OA=`#include <common>
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
}`,PA=`uniform vec3 diffuse;
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
}`,IA=`#define LAMBERT
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
}`,zA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,BA=`#define MATCAP
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
}`,FA=`#define MATCAP
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
}`,HA=`#define NORMAL
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
}`,GA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VA=`#define PHONG
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
}`,XA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kA=`#define STANDARD
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
}`,WA=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,qA=`#define TOON
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
}`,YA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ZA=`uniform float size;
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
}`,KA=`uniform vec3 diffuse;
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
}`,QA=`#include <common>
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
}`,JA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,jA=`uniform float rotation;
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
}`,$A=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:x1,alphahash_pars_fragment:M1,alphamap_fragment:y1,alphamap_pars_fragment:E1,alphatest_fragment:T1,alphatest_pars_fragment:b1,aomap_fragment:A1,aomap_pars_fragment:R1,batching_pars_vertex:C1,batching_vertex:w1,begin_vertex:D1,beginnormal_vertex:N1,bsdfs:U1,iridescence_fragment:L1,bumpmap_pars_fragment:O1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:I1,clipping_planes_pars_vertex:z1,clipping_planes_vertex:B1,color_fragment:F1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:V1,common:X1,cube_uv_reflection_fragment:k1,defaultnormal_vertex:W1,displacementmap_pars_vertex:q1,displacementmap_vertex:Y1,emissivemap_fragment:Z1,emissivemap_pars_fragment:K1,colorspace_fragment:Q1,colorspace_pars_fragment:J1,envmap_fragment:j1,envmap_common_pars_fragment:$1,envmap_pars_fragment:tb,envmap_pars_vertex:eb,envmap_physical_pars_fragment:db,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:ab,fog_fragment:rb,fog_pars_fragment:sb,gradientmap_pars_fragment:ob,lightmap_pars_fragment:lb,lights_lambert_fragment:ub,lights_lambert_pars_fragment:cb,lights_pars_begin:fb,lights_toon_fragment:hb,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:_b,lights_physical_pars_fragment:vb,lights_fragment_begin:Sb,lights_fragment_maps:xb,lights_fragment_end:Mb,lightprobes_pars_fragment:yb,logdepthbuf_fragment:Eb,logdepthbuf_pars_fragment:Tb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:Ab,map_fragment:Rb,map_pars_fragment:Cb,map_particle_fragment:wb,map_particle_pars_fragment:Db,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Ub,morphinstance_vertex:Lb,morphcolor_vertex:Ob,morphnormal_vertex:Pb,morphtarget_pars_vertex:Ib,morphtarget_vertex:zb,normal_fragment_begin:Bb,normal_fragment_maps:Fb,normal_pars_fragment:Hb,normal_pars_vertex:Gb,normal_vertex:Vb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Wb,clearcoat_pars_fragment:qb,iridescence_pars_fragment:Yb,opaque_fragment:Zb,packing:Kb,premultiplied_alpha_fragment:Qb,project_vertex:Jb,dithering_fragment:jb,dithering_pars_fragment:$b,roughnessmap_fragment:tA,roughnessmap_pars_fragment:eA,shadowmap_pars_fragment:nA,shadowmap_pars_vertex:iA,shadowmap_vertex:aA,shadowmask_pars_fragment:rA,skinbase_vertex:sA,skinning_pars_vertex:oA,skinning_vertex:lA,skinnormal_vertex:uA,specularmap_fragment:cA,specularmap_pars_fragment:fA,tonemapping_fragment:dA,tonemapping_pars_fragment:hA,transmission_fragment:pA,transmission_pars_fragment:mA,uv_pars_fragment:gA,uv_pars_vertex:_A,uv_vertex:vA,worldpos_vertex:SA,background_vert:xA,background_frag:MA,backgroundCube_vert:yA,backgroundCube_frag:EA,cube_vert:TA,cube_frag:bA,depth_vert:AA,depth_frag:RA,distance_vert:CA,distance_frag:wA,equirect_vert:DA,equirect_frag:NA,linedashed_vert:UA,linedashed_frag:LA,meshbasic_vert:OA,meshbasic_frag:PA,meshlambert_vert:IA,meshlambert_frag:zA,meshmatcap_vert:BA,meshmatcap_frag:FA,meshnormal_vert:HA,meshnormal_frag:GA,meshphong_vert:VA,meshphong_frag:XA,meshphysical_vert:kA,meshphysical_frag:WA,meshtoon_vert:qA,meshtoon_frag:YA,points_vert:ZA,points_frag:KA,shadow_vert:QA,shadow_frag:JA,sprite_vert:jA,sprite_frag:$A},Ft={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new et},probesMax:{value:new et},probesResolution:{value:new et}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ia={basic:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:qn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:qn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:qn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:qn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:qn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:qn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:qn([Ft.common,Ft.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:qn([Ft.lights,Ft.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ia.physical={uniforms:qn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Nc={r:0,b:0,g:0},tR=new nn,Xx=new fe;Xx.set(-1,0,0,0,1,0,0,0,1);function eR(o,e,i,s,l,f){const d=new Le(0);let h=l===!0?0:1,p,m,S=null,g=0,v=null;function y(P){let H=P.isScene===!0?P.background:null;if(H&&H.isTexture){const C=P.backgroundBlurriness>0;H=e.get(H,C)}return H}function R(P){let H=!1;const C=y(P);C===null?M(d,h):C&&C.isColor&&(M(C,1),H=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(P,H){const C=y(H);C&&(C.isCubeTexture||C.mapping===Kc)?(m===void 0&&(m=new Pn(new Fl(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:mo(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(tR.makeRotationFromEuler(H.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Xx),m.material.toneMapped=De.getTransfer(C.colorSpace)!==Ye,(S!==C||g!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,g=C.version,v=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Pn(new go(2,2),new fa({name:"BackgroundMaterial",uniforms:mo(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.toneMapped=De.getTransfer(C.colorSpace)!==Ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||g!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,g=C.version,v=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function M(P,H){P.getRGB(Nc,Hx(o)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,H,f)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,H=1){d.set(P),h=H,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,M(d,h)},render:R,addToRenderList:w,dispose:x}}function nR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let f=l,d=!1;function h(Z,Y,$,V,tt){let W=!1;const X=g(Z,V,$,Y);f!==X&&(f=X,m(f.object)),W=y(Z,V,$,tt),W&&R(Z,V,$,tt),tt!==null&&e.update(tt,o.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,C(Z,Y,$,V),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function p(){return o.createVertexArray()}function m(Z){return o.bindVertexArray(Z)}function S(Z){return o.deleteVertexArray(Z)}function g(Z,Y,$,V){const tt=V.wireframe===!0;let W=s[Y.id];W===void 0&&(W={},s[Y.id]=W);const X=Z.isInstancedMesh===!0?Z.id:0;let ut=W[X];ut===void 0&&(ut={},W[X]=ut);let ot=ut[$.id];ot===void 0&&(ot={},ut[$.id]=ot);let dt=ot[tt];return dt===void 0&&(dt=v(p()),ot[tt]=dt),dt}function v(Z){const Y=[],$=[],V=[];for(let tt=0;tt<i;tt++)Y[tt]=0,$[tt]=0,V[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:$,attributeDivisors:V,object:Z,attributes:{},index:null}}function y(Z,Y,$,V){const tt=f.attributes,W=Y.attributes;let X=0;const ut=$.getAttributes();for(const ot in ut)if(ut[ot].location>=0){const yt=tt[ot];let Qt=W[ot];if(Qt===void 0&&(ot==="instanceMatrix"&&Z.instanceMatrix&&(Qt=Z.instanceMatrix),ot==="instanceColor"&&Z.instanceColor&&(Qt=Z.instanceColor)),yt===void 0||yt.attribute!==Qt||Qt&&yt.data!==Qt.data)return!0;X++}return f.attributesNum!==X||f.index!==V}function R(Z,Y,$,V){const tt={},W=Y.attributes;let X=0;const ut=$.getAttributes();for(const ot in ut)if(ut[ot].location>=0){let yt=W[ot];yt===void 0&&(ot==="instanceMatrix"&&Z.instanceMatrix&&(yt=Z.instanceMatrix),ot==="instanceColor"&&Z.instanceColor&&(yt=Z.instanceColor));const Qt={};Qt.attribute=yt,yt&&yt.data&&(Qt.data=yt.data),tt[ot]=Qt,X++}f.attributes=tt,f.attributesNum=X,f.index=V}function w(){const Z=f.newAttributes;for(let Y=0,$=Z.length;Y<$;Y++)Z[Y]=0}function M(Z){x(Z,0)}function x(Z,Y){const $=f.newAttributes,V=f.enabledAttributes,tt=f.attributeDivisors;$[Z]=1,V[Z]===0&&(o.enableVertexAttribArray(Z),V[Z]=1),tt[Z]!==Y&&(o.vertexAttribDivisor(Z,Y),tt[Z]=Y)}function P(){const Z=f.newAttributes,Y=f.enabledAttributes;for(let $=0,V=Y.length;$<V;$++)Y[$]!==Z[$]&&(o.disableVertexAttribArray($),Y[$]=0)}function H(Z,Y,$,V,tt,W,X){X===!0?o.vertexAttribIPointer(Z,Y,$,tt,W):o.vertexAttribPointer(Z,Y,$,V,tt,W)}function C(Z,Y,$,V){w();const tt=V.attributes,W=$.getAttributes(),X=Y.defaultAttributeValues;for(const ut in W){const ot=W[ut];if(ot.location>=0){let dt=tt[ut];if(dt===void 0&&(ut==="instanceMatrix"&&Z.instanceMatrix&&(dt=Z.instanceMatrix),ut==="instanceColor"&&Z.instanceColor&&(dt=Z.instanceColor)),dt!==void 0){const yt=dt.normalized,Qt=dt.itemSize,Yt=e.get(dt);if(Yt===void 0)continue;const z=Yt.buffer,mt=Yt.type,At=Yt.bytesPerElement,Q=mt===o.INT||mt===o.UNSIGNED_INT||dt.gpuType===gm;if(dt.isInterleavedBufferAttribute){const ht=dt.data,Tt=ht.stride,It=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let _t=0;_t<ot.locationSize;_t++)x(ot.location+_t,ht.meshPerAttribute);Z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<ot.locationSize;_t++)M(ot.location+_t);o.bindBuffer(o.ARRAY_BUFFER,z);for(let _t=0;_t<ot.locationSize;_t++)H(ot.location+_t,Qt/ot.locationSize,mt,yt,Tt*At,(It+Qt/ot.locationSize*_t)*At,Q)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<ot.locationSize;ht++)x(ot.location+ht,dt.meshPerAttribute);Z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<ot.locationSize;ht++)M(ot.location+ht);o.bindBuffer(o.ARRAY_BUFFER,z);for(let ht=0;ht<ot.locationSize;ht++)H(ot.location+ht,Qt/ot.locationSize,mt,yt,Qt*At,Qt/ot.locationSize*ht*At,Q)}}else if(X!==void 0){const yt=X[ut];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(ot.location,yt);break;case 3:o.vertexAttrib3fv(ot.location,yt);break;case 4:o.vertexAttrib4fv(ot.location,yt);break;default:o.vertexAttrib1fv(ot.location,yt)}}}}P()}function N(){L();for(const Z in s){const Y=s[Z];for(const $ in Y){const V=Y[$];for(const tt in V){const W=V[tt];for(const X in W)S(W[X].object),delete W[X];delete V[tt]}}delete s[Z]}}function U(Z){if(s[Z.id]===void 0)return;const Y=s[Z.id];for(const $ in Y){const V=Y[$];for(const tt in V){const W=V[tt];for(const X in W)S(W[X].object),delete W[X];delete V[tt]}}delete s[Z.id]}function D(Z){for(const Y in s){const $=s[Y];for(const V in $){const tt=$[V];if(tt[Z.id]===void 0)continue;const W=tt[Z.id];for(const X in W)S(W[X].object),delete W[X];delete tt[Z.id]}}}function T(Z){for(const Y in s){const $=s[Y],V=Z.isInstancedMesh===!0?Z.id:0,tt=$[V];if(tt!==void 0){for(const W in tt){const X=tt[W];for(const ut in X)S(X[ut].object),delete X[ut];delete tt[W]}delete $[V],Object.keys($).length===0&&delete s[Y]}}}function L(){G(),d=!0,f!==l&&(f=l,m(f.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:G,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function iR(o,e,i){let s;function l(p){s=p}function f(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(s,p,m,S),i.update(m,s,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,S);let v=0;for(let y=0;y<S;y++)v+=m[y];i.update(v,s,1)}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function aR(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(D){return!(D!==zi&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const T=D===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==hi&&D!==ra&&!T&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(oe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:H,maxFragmentUniforms:C,maxSamples:N,samples:U}}function rR(o){const e=this;let i=null,s=0,l=!1,f=!1;const d=new Mr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||l;return l=v,s=g.length,y},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,v){i=S(g,v,0)},this.setState=function(g,v,y){const R=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||R===null||R.length===0||f&&!M)f?S(null):m();else{const P=f?0:s,H=P*4;let C=x.clippingState||null;p.value=C,C=S(R,v,H,y);for(let N=0;N!==H;++N)C[N]=i[N];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(g,v,y,R){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=p.value,R!==!0||M===null){const x=y+w*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let H=0,C=y;H!==w;++H,C+=4)d.copy(g[H]).applyMatrix4(P,h),d.normal.toArray(M,C),M[C+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const lo=4,sR=6,oR=20,lR=256,Tl=new Cm,bS=new Le;let ap=null,rp=0,sp=0,op=!1;const uR=new et,jr=new et;class AS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,f={}){const{size:d=256,position:h=uR}=f;ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=CS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ap,rp,sp),this._renderer.xr.enabled=op,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ns||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ca,format:zi,colorSpace:kc,depthBuffer:!1},l=RS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=RS(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cR(f)),this._blurMaterial=dR(f,e,i),this._ggxMaterial=fR(f,e,i)}return l}_compileMaterial(e){const i=new Pn(new da,e);this._renderer.compile(i,Tl)}_sceneToCubeUV(e,i,s,l,f){const p=new Ai(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(bS),g.toneMapping=oa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new Fl,new Qc({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,x=!0):(M.color.copy(bS),x=!0);for(let H=0;H<6;H++){const C=H%3;C===0?(p.up.set(0,m[H],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+S[H],f.y,f.z)):C===1?(p.up.set(0,0,m[H]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+S[H],f.z)):(p.up.set(0,m[H],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+S[H]));const N=this._cubeSize;ro(l,C*N,H>2?N:0,N,N),g.setRenderTarget(l),x&&g.render(w,p),g.render(e,p)}g.toneMapping=y,g.autoClear=v,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ns||e.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=CS());const f=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;ro(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Tl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-S*S),v=m*1.25,y=g*v,{_lodMax:R}=this,w=this._sizeLods[s],M=3*w*(s>R-lo?s-R+lo:0),x=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=R-i,ro(f,M,x,3*w,2*w),l.setRenderTarget(f),l.render(h,Tl),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=R-s,ro(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(h,Tl)}_blur(e,i,s,l){const f=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,l,f){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[l],g=3*S*(l>this._lodMax-lo?l-this._lodMax+lo:0),v=4*(this._cubeSize-S);ro(i,g,v,3*S,2*S),d.setRenderTarget(i),d.render(p,Tl)}}function cR(o){const e=[],i=[];let s=o;const l=o-lo+1+sR;for(let f=0;f<l;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,y=3,R=new Float32Array(y*v*g),w=new Float32Array(y*v*g);for(let x=0;x<g;x++){const P=x%3*2/3-1,H=x>2?0:-1,C=[P,H,0,P+2/3,H,0,P+2/3,H+1,0,P,H,0,P+2/3,H+1,0,P,H+1,0];R.set(C,y*v*x);for(let N=0;N<v;N++){const U=S[N*2]*2-1,D=S[N*2+1]*2-1;x===0?jr.set(1,D,U):x===1?jr.set(-U,1,-D):x===2?jr.set(-U,D,1):x===3?jr.set(-1,D,-U):x===4?jr.set(-U,-1,D):jr.set(U,D,-1),jr.toArray(w,(x*v+N)*y)}}const M=new da;M.setAttribute("position",new Ba(R,y)),M.setAttribute("outputDirection",new Ba(w,y)),i.push(new Pn(M,null)),s>lo&&s--}return{lodMeshes:i,sizeLods:e}}function RS(o,e,i){const s=new Bi(o,e,i);return s.texture.mapping=Kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ro(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function fR(o,e,i){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function dR(o,e,i){return new fa({name:"SphericalGaussianBlur",defines:{SAMPLES:oR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function CS(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function wS(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kx extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Bx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Fl(5,5,5),f=new fa({name:"CubemapFromEquirect",uniforms:mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Ia});f.uniforms.tEquirect.value=i;const d=new Pn(l,f),h=i.minFilter;return i.minFilter===ts&&(i.minFilter=Fn),new g1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(f)}}function hR(o){let e=new WeakMap,i=new WeakMap,s=null;function l(v,y=!1){return v==null?null:y?d(v):f(v)}function f(v){if(v&&v.isTexture){const y=v.mapping;if(y===Nh||y===Uh)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const w=new kx(R.height);return w.fromEquirectangularTexture(o,v),e.set(v,w),v.addEventListener("dispose",m),h(w.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const y=v.mapping,R=y===Nh||y===Uh,w=y===ns||y===po;if(R||w){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new AS(o)),M=R?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const P=v.image;return R&&P&&P.height>0||w&&P&&p(P)?(s===null&&(s=new AS(o)),M=R?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,y){return y===Nh?v.mapping=ns:y===Uh&&(v.mapping=po),v}function p(v){let y=0;const R=6;for(let w=0;w<R;w++)v[w]!==void 0&&y++;return y===R}function m(v){const y=v.target;y.removeEventListener("dispose",m);const R=e.get(y);R!==void 0&&(e.delete(y),R.dispose())}function S(v){const y=v.target;y.removeEventListener("dispose",S);const R=i.get(y);R!==void 0&&(i.delete(y),R.dispose())}function g(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function pR(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&uo("WebGLRenderer: "+s+" extension not supported."),l}}}function mR(o,e,i,s){const l={},f=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete l[v.id];const y=f.get(v);y&&(e.remove(y),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,R=g.attributes.position;let w=0;if(R===void 0)return;if(y!==null){const P=y.array;w=y.version;for(let H=0,C=P.length;H<C;H+=3){const N=P[H+0],U=P[H+1],D=P[H+2];v.push(N,U,U,D,D,N)}}else{const P=R.array;w=R.version;for(let H=0,C=P.length/3-1;H<C;H+=3){const N=H+0,U=H+1,D=H+2;v.push(N,U,U,D,D,N)}}const M=new(R.count>=65535?zx:Ix)(v,1);M.version=w;const x=f.get(g);x&&e.remove(x),f.set(g,M)}function S(g){const v=f.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return f.get(g)}return{get:h,update:p,getWireframeAttribute:S}}function gR(o,e,i){let s;function l(g){s=g}let f,d;function h(g){f=g.type,d=g.bytesPerElement}function p(g,v){o.drawElements(s,v,f,g*d),i.update(v,s,1)}function m(g,v,y){y!==0&&(o.drawElementsInstanced(s,v,f,g*d,y),i.update(v,s,y))}function S(g,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,g,0,y);let w=0;for(let M=0;M<y;M++)w+=v[M];i.update(w,s,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function _R(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:ze("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function vR(o,e,i){const s=new WeakMap,l=new sn;function f(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=S!==void 0?S.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let G=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",G)};var y=G;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],H=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let N=h.attributes.position.count*C,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*U*4*g),T=new Lx(D,N,U,g);T.type=ra,T.needsUpdate=!0;const L=C*4;for(let Z=0;Z<g;Z++){const Y=x[Z],$=P[Z],V=H[Z],tt=N*U*4*Z;for(let W=0;W<Y.count;W++){const X=W*L;R===!0&&(l.fromBufferAttribute(Y,W),D[tt+X+0]=l.x,D[tt+X+1]=l.y,D[tt+X+2]=l.z,D[tt+X+3]=0),w===!0&&(l.fromBufferAttribute($,W),D[tt+X+4]=l.x,D[tt+X+5]=l.y,D[tt+X+6]=l.z,D[tt+X+7]=0),M===!0&&(l.fromBufferAttribute(V,W),D[tt+X+8]=l.x,D[tt+X+9]=l.y,D[tt+X+10]=l.z,D[tt+X+11]=V.itemSize===4?l.w:1)}}v={count:g,texture:T,size:new Oe(N,U)},s.set(h,v),h.addEventListener("dispose",G)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const w=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function SR(o,e,i,s,l){let f=new WeakMap;function d(m){const S=l.render.frame,g=m.geometry,v=e.get(m,g);if(f.get(v)!==S&&(e.update(v),f.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const y=m.skeleton;f.get(y)!==S&&(y.update(),f.set(y,S))}return v}function h(){f=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const xR={[_x]:"LINEAR_TONE_MAPPING",[vx]:"REINHARD_TONE_MAPPING",[Sx]:"CINEON_TONE_MAPPING",[xx]:"ACES_FILMIC_TONE_MAPPING",[yx]:"AGX_TONE_MAPPING",[Ex]:"NEUTRAL_TONE_MAPPING",[Mx]:"CUSTOM_TONE_MAPPING"};function MR(o,e,i,s,l,f){const d=new Bi(e,i,{type:o,depthBuffer:l,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new da;m.setAttribute("position",new Fi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Fi([0,2,0,0,2,0],2));const S=new l1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Pn(m,S),v=new Cm(-1,1,1,-1,0,1);let y=null,R=null,w=!1,M,x=null,P=[],H=!1;this.setSize=function(C,N){d.setSize(C,N),h!==null&&h.setSize(C,N),p!==null&&p.setSize(C,N);for(let U=0;U<P.length;U++){const D=P[U];D.setSize&&D.setSize(C,N)}},this.setEffects=function(C){P=C,H=P.length>0&&P[0].isRenderPass===!0;const N=d.width,U=d.height;P.length>0&&h===null&&(h=new Bi(N,U,{type:ca,depthBuffer:!1,stencilBuffer:!1}),p=new Bi(N,U,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<P.length;D++){const T=P[D];T.setSize&&T.setSize(N,U)}},this.begin=function(C,N){if(w||C.toneMapping===oa&&P.length===0)return!1;if(x=N,N!==null){const U=N.width,D=N.height;(d.width!==U||d.height!==D)&&this.setSize(U,D)}return H===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return H},this.end=function(C,N){C.toneMapping=M,w=!0;let U=d,D=h;for(let T=0;T<P.length;T++){const L=P[T];L.enabled!==!1&&(L.render(C,D,U,N),L.needsSwap!==!1&&(U=D,D=D===h?p:h))}if(y!==C.outputColorSpace||R!==C.toneMapping){y=C.outputColorSpace,R=C.toneMapping,S.defines={},De.getTransfer(y)===Ye&&(S.defines.SRGB_TRANSFER="");const T=xR[R];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(x),C.render(g,v),x=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const Wx=new Hn,$p=new Pl(1,1),qx=new Lx,Yx=new BT,Zx=new Bx,DS=[],NS=[],US=new Float32Array(16),LS=new Float32Array(9),OS=new Float32Array(4);function vo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=DS[l];if(f===void 0&&(f=new Float32Array(l),DS[l]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function jc(o,e){let i=NS[e];i===void 0&&(i=new Int32Array(e),NS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function yR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function ER(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function TR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function bR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function AR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;OS.set(s),o.uniformMatrix2fv(this.addr,!1,OS),yn(i,s)}}function RR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;LS.set(s),o.uniformMatrix3fv(this.addr,!1,LS),yn(i,s)}}function CR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;US.set(s),o.uniformMatrix4fv(this.addr,!1,US),yn(i,s)}}function wR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function DR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function NR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function UR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function LR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function OR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function PR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function IR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function zR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?($p.compareFunction=i.isReversedDepthBuffer()?Em:ym,f=$p):f=Wx,i.setTexture2D(e||f,l)}function BR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Yx,l)}function FR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Zx,l)}function HR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||qx,l)}function GR(o){switch(o){case 5126:return yR;case 35664:return ER;case 35665:return TR;case 35666:return bR;case 35674:return AR;case 35675:return RR;case 35676:return CR;case 5124:case 35670:return wR;case 35667:case 35671:return DR;case 35668:case 35672:return NR;case 35669:case 35673:return UR;case 5125:return LR;case 36294:return OR;case 36295:return PR;case 36296:return IR;case 35678:case 36198:case 36298:case 36306:case 35682:return zR;case 35679:case 36299:case 36307:return BR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return HR}}function VR(o,e){o.uniform1fv(this.addr,e)}function XR(o,e){const i=vo(e,this.size,2);o.uniform2fv(this.addr,i)}function kR(o,e){const i=vo(e,this.size,3);o.uniform3fv(this.addr,i)}function WR(o,e){const i=vo(e,this.size,4);o.uniform4fv(this.addr,i)}function qR(o,e){const i=vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function YR(o,e){const i=vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ZR(o,e){const i=vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function KR(o,e){o.uniform1iv(this.addr,e)}function QR(o,e){o.uniform2iv(this.addr,e)}function JR(o,e){o.uniform3iv(this.addr,e)}function jR(o,e){o.uniform4iv(this.addr,e)}function $R(o,e){o.uniform1uiv(this.addr,e)}function t3(o,e){o.uniform2uiv(this.addr,e)}function e3(o,e){o.uniform3uiv(this.addr,e)}function n3(o,e){o.uniform4uiv(this.addr,e)}function i3(o,e,i){const s=this.cache,l=e.length,f=jc(i,l);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=$p:d=Wx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,f[h])}function a3(o,e,i){const s=this.cache,l=e.length,f=jc(i,l);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Yx,f[d])}function r3(o,e,i){const s=this.cache,l=e.length,f=jc(i,l);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Zx,f[d])}function s3(o,e,i){const s=this.cache,l=e.length,f=jc(i,l);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||qx,f[d])}function o3(o){switch(o){case 5126:return VR;case 35664:return XR;case 35665:return kR;case 35666:return WR;case 35674:return qR;case 35675:return YR;case 35676:return ZR;case 5124:case 35670:return KR;case 35667:case 35671:return QR;case 35668:case 35672:return JR;case 35669:case 35673:return jR;case 5125:return $R;case 36294:return t3;case 36295:return e3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return a3;case 35680:case 36300:case 36308:case 36293:return r3;case 36289:case 36303:case 36311:case 36292:return s3}}class l3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=GR(i.type)}}class u3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=o3(i.type)}}class c3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],s)}}}const lp=/(\w+)(\])?(\[|\.)?/g;function PS(o,e){o.seq.push(e),o.map[e.id]=e}function f3(o,e,i){const s=o.name,l=s.length;for(lp.lastIndex=0;;){const f=lp.exec(s),d=lp.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){PS(i,m===void 0?new l3(h,o,e):new u3(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new c3(h),PS(i,g)),i=g}}}class Hc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);f3(h,p,this)}const l=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):f.push(d);l.length>0&&(this.seq=l.concat(f))}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function IS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const d3=37297;let h3=0;function p3(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const zS=new fe;function m3(o){De._getMatrix(zS,De.workingColorSpace,o);const e=`mat3( ${zS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Wc:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function BS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+p3(o.getShaderSource(e),h)}else return f}function g3(o,e){const i=m3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const _3={[_x]:"Linear",[vx]:"Reinhard",[Sx]:"Cineon",[xx]:"ACESFilmic",[yx]:"AgX",[Ex]:"Neutral",[Mx]:"Custom"};function v3(o,e){const i=_3[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new et;function S3(){De.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function M3(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function y3(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Cl(o){return o!==""}function FS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function HS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E3=/^[ \t]*#include +<([\w\d./]+)>/gm;function tm(o){return o.replace(E3,b3)}const T3=new Map;function b3(o,e){let i=me[e];if(i===void 0){const s=T3.get(e);if(s!==void 0)i=me[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tm(i)}const A3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function GS(o){return o.replace(A3,R3)}function R3(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function VS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const C3={[Pc]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function w3(o){return C3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D3={[ns]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function N3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":D3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const U3={[po]:"ENVMAP_MODE_REFRACTION"};function L3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":U3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O3={[gx]:"ENVMAP_BLENDING_MULTIPLY",[mT]:"ENVMAP_BLENDING_MIX",[gT]:"ENVMAP_BLENDING_ADD"};function P3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":O3[o.combine]||"ENVMAP_BLENDING_NONE"}function I3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function z3(o,e,i,s){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=w3(i),m=N3(i),S=L3(i),g=P3(i),v=I3(i),y=x3(i),R=M3(f),w=l.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Cl).join(`
`),x.length>0&&(x+=`
`)):(M=[VS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),x=[VS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?me.tonemapping_pars_fragment:"",i.toneMapping!==oa?v3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,g3("linearToOutputTexel",i.outputColorSpace),S3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cl).join(`
`)),d=tm(d),d=FS(d,i),d=HS(d,i),h=tm(h),h=FS(h,i),h=HS(h,i),d=GS(d),h=GS(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===eS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===eS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=P+M+d,C=P+x+h,N=IS(l,l.VERTEX_SHADER,H),U=IS(l,l.FRAGMENT_SHADER,C);l.attachShader(w,N),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function D(Z){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",$=l.getShaderInfoLog(N)||"",V=l.getShaderInfoLog(U)||"",tt=Y.trim(),W=$.trim(),X=V.trim();let ut=!0,ot=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,N,U);else{const dt=BS(l,N,"vertex"),yt=BS(l,U,"fragment");ze("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+tt+`
`+dt+`
`+yt)}else tt!==""?oe("WebGLProgram: Program Info Log:",tt):(W===""||X==="")&&(ot=!1);ot&&(Z.diagnostics={runnable:ut,programLog:tt,vertexShader:{log:W,prefix:M},fragmentShader:{log:X,prefix:x}})}l.deleteShader(N),l.deleteShader(U),T=new Hc(l,w),L=y3(l,w)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let G=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=l.getProgramParameter(w,d3)),G},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=h3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=U,this}let B3=0;class F3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new H3(e),i.set(e,s)),s}}class H3{constructor(e){this.id=B3++,this.code=e,this.usedTimes=0}}function G3(o){return o===is||o===Vc||o===Xc}function V3(o,e,i,s,l,f){const d=new Ox,h=new F3,p=new Set,m=[],S=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,L,G,Z,Y,$){const V=Z.fog,tt=Y.geometry,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Z.environment:null,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ut=e.get(T.envMap||W,X),ot=ut&&ut.mapping===Kc?ut.image.height:null,dt=y[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const yt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Qt=yt!==void 0?yt.length:0;let Yt=0;tt.morphAttributes.position!==void 0&&(Yt=1),tt.morphAttributes.normal!==void 0&&(Yt=2),tt.morphAttributes.color!==void 0&&(Yt=3);let z,mt,At,Q;if(dt){const Ce=ia[dt];z=Ce.vertexShader,mt=Ce.fragmentShader}else{z=T.vertexShader,mt=T.fragmentShader;const Ce=h.getVertexShaderStage(T),ue=h.getFragmentShaderStage(T);h.update(T,Ce,ue),At=Ce.id,Q=ue.id}const ht=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),It=Y.isInstancedMesh===!0,_t=Y.isBatchedMesh===!0,Rt=!!T.map,Ve=!!T.matcap,pe=!!ut,ge=!!T.aoMap,Me=!!T.lightMap,ee=!!T.bumpMap&&T.wireframe===!1,ie=!!T.normalMap,Xe=!!T.displacementMap,hn=!!T.emissiveMap,Ie=!!T.metalnessMap,tn=!!T.roughnessMap,q=T.anisotropy>0,an=T.clearcoat>0,Pe=T.dispersion>0,O=T.retroreflectivity>0,E=T.iridescence>0,nt=T.sheen>0,lt=T.transmission>0,pt=q&&!!T.anisotropyMap,bt=an&&!!T.clearcoatMap,Dt=an&&!!T.clearcoatNormalMap,gt=an&&!!T.clearcoatRoughnessMap,Mt=E&&!!T.iridescenceMap,wt=E&&!!T.iridescenceThicknessMap,jt=nt&&!!T.sheenColorMap,Pt=nt&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Vt=!!T.specularColorMap,ne=!!T.specularIntensityMap,le=lt&&!!T.transmissionMap,k=lt&&!!T.thicknessMap,Ct=!!T.gradientMap,xt=!!T.alphaMap,Nt=T.alphaTest>0,Gt=!!T.alphaHash,Et=!!T.extensions;let Jt=oa;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Ht={shaderID:dt,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:mt,defines:T.defines,customVertexShaderID:At,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:_t,batchingColor:_t&&Y._colorsTexture!==null,instancing:It,instancingColor:It&&Y.instanceColor!==null,instancingMorph:It&&Y.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Rt,matcap:Ve,envMap:pe,envMapMode:pe&&ut.mapping,envMapCubeUVHeight:ot,aoMap:ge,lightMap:Me,bumpMap:ee,normalMap:ie,displacementMap:Xe,emissiveMap:hn,normalMapObjectSpace:ie&&T.normalMapType===ST,normalMapTangentSpace:ie&&T.normalMapType===Jp,packedNormalMap:ie&&T.normalMapType===Jp&&G3(T.normalMap.format),metalnessMap:Ie,roughnessMap:tn,anisotropy:q,anisotropyMap:pt,clearcoat:an,clearcoatMap:bt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:gt,dispersion:Pe,retroreflection:O,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:wt,sheen:nt,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Vt,specularIntensityMap:ne,transmission:lt,transmissionMap:le,thicknessMap:k,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===wl&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:Nt,alphaHash:Gt,combine:T.combine,mapUv:Rt&&R(T.map.channel),aoMapUv:ge&&R(T.aoMap.channel),lightMapUv:Me&&R(T.lightMap.channel),bumpMapUv:ee&&R(T.bumpMap.channel),normalMapUv:ie&&R(T.normalMap.channel),displacementMapUv:Xe&&R(T.displacementMap.channel),emissiveMapUv:hn&&R(T.emissiveMap.channel),metalnessMapUv:Ie&&R(T.metalnessMap.channel),roughnessMapUv:tn&&R(T.roughnessMap.channel),anisotropyMapUv:pt&&R(T.anisotropyMap.channel),clearcoatMapUv:bt&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&R(T.sheenRoughnessMap.channel),specularMapUv:Ot&&R(T.specularMap.channel),specularColorMapUv:Vt&&R(T.specularColorMap.channel),specularIntensityMapUv:ne&&R(T.specularIntensityMap.channel),transmissionMapUv:le&&R(T.transmissionMap.channel),thicknessMapUv:k&&R(T.thicknessMap.channel),alphaMapUv:xt&&R(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ie||q),vertexNormals:!!tt.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!tt.attributes.uv&&(Rt||xt),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&ie===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Tt,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:Yt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===Ye,decodeVideoTextureEmissive:hn&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===Ye,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Oa,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Et&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&T.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)L.push(G),L.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(x(L,T),P(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numSunLights),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numSunLightShadows),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function P(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function H(T){const L=y[T.type];let G;if(L){const Z=ia[L];G=r1.clone(Z.uniforms)}else G=T.uniforms;return G}function C(T,L){let G=S.get(L);return G!==void 0?++G.usedTimes:(G=new z3(o,L,T,l),m.push(G),S.set(L,G)),G}function N(T){if(--T.usedTimes===0){const L=m.indexOf(T);m[L]=m[m.length-1],m.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function D(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:H,acquireProgram:C,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:D}}function X3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function k3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function XS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function kS(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function d(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,R,w,M,x){let P=o[e];return P===void 0?(P={id:v.id,object:v,geometry:y,material:R,materialVariant:d(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:x},o[e]=P):(P.id=v.id,P.object=v,P.geometry=y,P.material=R,P.materialVariant=d(v),P.groupOrder=w,P.renderOrder=v.renderOrder,P.z=M,P.group=x),e++,P}function p(v,y,R,w,M,x,P){P.reversedDepth===!0&&(M=-M);const H=h(v,y,R,w,M,x);R.transmission>0?s.push(H):R.transparent===!0?l.push(H):i.push(H)}function m(v,y,R,w,M,x){const P=h(v,y,R,w,M,x);R.transmission>0?s.unshift(P):R.transparent===!0?l.unshift(P):i.unshift(P)}function S(v,y){i.length>1&&i.sort(v||k3),s.length>1&&s.sort(y||XS),l.length>1&&l.sort(y||XS)}function g(){for(let v=e,y=o.length;v<y;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:p,unshift:m,finish:g,sort:S}}function W3(){let o=new WeakMap;function e(s,l){const f=o.get(s);let d;return f===void 0?(d=new kS,o.set(s,[d])):l>=f.length?(d=new kS,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function q3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new et,color:new Le};break;case"SpotLight":i={position:new et,direction:new et,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function Y3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Z3=0;function K3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Q3(o){const e=new q3,i=Y3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new et);const l=new et,f=new nn,d=new nn;function h(m){let S=0,g=0,v=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let y=0,R=0,w=0,M=0,x=0,P=0,H=0,C=0,N=0,U=0,D=0,T=0,L=0,G=0;m.sort(K3);for(let Y=0,$=m.length;Y<$;Y++){const V=m[Y],tt=V.color,W=V.intensity,X=V.distance;let ut=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===is?ut=V.shadow.map.texture:ut=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=tt.r*W,g+=tt.g*W,v+=tt.b*W;else if(V.isLightProbe){for(let ot=0;ot<9;ot++)s.probe[ot].addScaledVector(V.sh.coefficients[ot],W);G++}else if(V.isSunLight){const ot=e.get(V);if(ot.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const dt=V.shadow,yt=i.get(V);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize.copy(dt.mapSize).multiply(dt.getFrameExtents()),s.sunShadow[R]=yt,s.sunShadowMap[R]=ut;const Qt=dt.getViewportCount();for(let Yt=0;Yt<Qt;Yt++)s.sunShadowMatrix[w+Yt]=dt.getMatrix(Yt),s.sunShadowCascade[w+Yt]=dt._cascadeData[Yt];w+=Qt,R++}s.sun[y]=ot,y++}else if(V.isDirectionalLight){const ot=e.get(V);if(ot.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const dt=V.shadow,yt=i.get(V);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize=dt.mapSize,s.directionalShadow[M]=yt,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=V.shadow.matrix,N++}s.directional[M]=ot,M++}else if(V.isSpotLight){const ot=e.get(V);ot.position.setFromMatrixPosition(V.matrixWorld),ot.color.copy(tt).multiplyScalar(W),ot.distance=X,ot.coneCos=Math.cos(V.angle),ot.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ot.decay=V.decay,s.spot[P]=ot;const dt=V.shadow;if(V.map&&(s.spotLightMap[T]=V.map,T++,dt.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[P]=dt.matrix,V.castShadow){const yt=i.get(V);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize=dt.mapSize,s.spotShadow[P]=yt,s.spotShadowMap[P]=ut,D++}P++}else if(V.isRectAreaLight){const ot=e.get(V);ot.color.copy(tt).multiplyScalar(W),ot.halfWidth.set(V.width*.5,0,0),ot.halfHeight.set(0,V.height*.5,0),s.rectArea[H]=ot,H++}else if(V.isPointLight){const ot=e.get(V);if(ot.color.copy(V.color).multiplyScalar(V.intensity),ot.distance=V.distance,ot.decay=V.decay,V.castShadow){const dt=V.shadow,yt=i.get(V);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize=dt.mapSize,yt.shadowCameraNear=dt.camera.near,yt.shadowCameraFar=dt.camera.far,s.pointShadow[x]=yt,s.pointShadowMap[x]=ut,s.pointShadowMatrix[x]=V.shadow.matrix,U++}s.point[x]=ot,x++}else if(V.isHemisphereLight){const ot=e.get(V);ot.skyColor.copy(V.color).multiplyScalar(W),ot.groundColor.copy(V.groundColor).multiplyScalar(W),s.hemi[C]=ot,C++}}H>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=g,s.ambient[2]=v;const Z=s.hash;(Z.sunLength!==y||Z.directionalLength!==M||Z.pointLength!==x||Z.spotLength!==P||Z.rectAreaLength!==H||Z.hemiLength!==C||Z.numSunShadows!==R||Z.numDirectionalShadows!==N||Z.numPointShadows!==U||Z.numSpotShadows!==D||Z.numSpotMaps!==T||Z.numLightProbes!==G)&&(s.sun.length=y,s.directional.length=M,s.spot.length=P,s.rectArea.length=H,s.point.length=x,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.spotLightMatrix.length=D+T-L,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=G,Z.sunLength=y,Z.directionalLength=M,Z.pointLength=x,Z.spotLength=P,Z.rectAreaLength=H,Z.hemiLength=C,Z.numSunShadows=R,Z.numDirectionalShadows=N,Z.numPointShadows=U,Z.numSpotShadows=D,Z.numSpotMaps=T,Z.numLightProbes=G,s.version=Z3++)}function p(m,S){let g=0,v=0,y=0,R=0,w=0,M=0;const x=S.matrixWorldInverse;for(let P=0,H=m.length;P<H;P++){const C=m[P];if(C.isSunLight){const N=s.sun[g];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),g++}else if(C.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),v++}else if(C.isSpotLight){const N=s.spot[R];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const N=s.rectArea[w];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const N=s.point[y];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),y++}else if(C.isHemisphereLight){const N=s.hemi[M];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:s}}function WS(o){const e=new Q3(o),i=[],s=[],l=[];function f(v){g.camera=v,i.length=0,s.length=0,l.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:g,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function J3(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new WS(o),e.set(l,[h])):f>=d.length?(h=new WS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const j3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tC=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],eC=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],qS=new nn,bl=new et,up=new et;function nC(o,e,i){let s=new Am;const l=new Oe,f=new Oe,d=new sn,h=new u1,p=new c1,m={},S=i.maxTextureSize,g={[Fa]:$n,[$n]:Fa,[Oa]:Oa},v=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:j3,fragmentShader:$3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const R=new da;R.setAttribute("position",new Ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Pn(R,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let x=this.type;this.render=function(U,D,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===QE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pc);const L=o.getRenderTarget(),G=o.getActiveCubeFace(),Z=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Ia),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=x!==this.type;$&&D.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(tt=>tt.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,tt=U.length;V<tt;V++){const W=U[V],X=W.shadow;if(X===void 0){oe("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ut=X.getFrameExtents();l.multiply(ut),f.copy(X.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(f.x=Math.floor(S/ut.x),l.x=f.x*ut.x,X.mapSize.x=f.x),l.y>S&&(f.y=Math.floor(S/ut.y),l.y=f.y*ut.y,X.mapSize.y=f.y));const ot=o.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ot,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Rl){if(W.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Bi(l.x,l.y,{format:is,type:ca,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new Pl(l.x,l.y,ra),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=Ha,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ln,X.map.depthTexture.magFilter=Ln}else W.isPointLight?(X.map=new kx(l.x),X.map.depthTexture=new i1(l.x,ua)):(X.map=new Bi(l.x,l.y),X.map.depthTexture=new Pl(l.x,l.y,ua)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=Ha,this.type===Pc?(X.map.depthTexture.compareFunction=ot?Em:ym,X.map.depthTexture.minFilter=Fn,X.map.depthTexture.magFilter=Fn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ln,X.map.depthTexture.magFilter=Ln);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==l.x||X.map.height!==l.y)&&X.map.setSize(l.x,l.y);const dt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();W.isPointLight!==!0&&X.updateMatrices(W,T);for(let yt=0;yt<dt;yt++){const Qt=X.getCamera(yt);if(W.isPointLight){const Yt=X.camera,z=X.matrix,mt=W.distance||Yt.far;mt!==Yt.far&&(Yt.far=mt,Yt.updateProjectionMatrix()),bl.setFromMatrixPosition(W.matrixWorld),Yt.position.copy(bl),up.copy(Yt.position),up.add(tC[yt]),Yt.up.copy(eC[yt]),Yt.lookAt(up),Yt.updateMatrixWorld(),z.makeTranslation(-bl.x,-bl.y,-bl.z),qS.multiplyMatrices(Yt.projectionMatrix,Yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(qS,Yt.coordinateSystem,Yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)o.setRenderTarget(X.map,yt),o.clear();else{yt===0&&(o.setRenderTarget(X.map),o.clear());const Yt=X.getViewport(yt);d.set(f.x*Yt.x,f.y*Yt.y,f.x*Yt.z,f.y*Yt.w),Y.viewport(d)}s=X.getFrustum(yt),C(D,T,Qt,W,this.type)}X.isPointLightShadow!==!0&&this.type===Rl&&P(X,T),X.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,G,Z)};function P(U,D){const T=e.update(w);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new Bi(l.x,l.y,{format:is,type:ca}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(D,null,T,v,w,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(D,null,T,y,w,null)}function H(U,D,T,L){let G=null;const Z=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(Z!==void 0)G=Z;else if(G=T.isPointLight===!0?p:h,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Y=G.uuid,$=D.uuid;let V=m[Y];V===void 0&&(V={},m[Y]=V);let tt=V[$];tt===void 0&&(tt=G.clone(),V[$]=tt,D.addEventListener("dispose",N)),G=tt}if(G.visible=D.visible,G.wireframe=D.wireframe,L===Rl?G.side=D.shadowSide!==null?D.shadowSide:D.side:G.side=D.shadowSide!==null?D.shadowSide:g[D.side],G.alphaMap=D.alphaMap,G.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,G.map=D.map,G.clipShadows=D.clipShadows,G.clippingPlanes=D.clippingPlanes,G.clipIntersection=D.clipIntersection,G.displacementMap=D.displacementMap,G.displacementScale=D.displacementScale,G.displacementBias=D.displacementBias,G.wireframeLinewidth=D.wireframeLinewidth,G.linewidth=D.linewidth,T.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const Y=o.properties.get(G);Y.light=T}return G}function C(U,D,T,L,G){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&G===Rl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const $=e.update(U),V=U.material;if(Array.isArray(V)){const tt=$.groups;for(let W=0,X=tt.length;W<X;W++){const ut=tt[W],ot=V[ut.materialIndex];if(ot&&ot.visible){const dt=H(U,ot,L,G);U.onBeforeShadow(o,U,D,T,$,dt,ut),o.renderBufferDirect(T,null,$,dt,U,ut),U.onAfterShadow(o,U,D,T,$,dt,ut)}}}else if(V.visible){const tt=H(U,V,L,G);U.onBeforeShadow(o,U,D,T,$,tt,null),o.renderBufferDirect(T,null,$,tt,U,null),U.onAfterShadow(o,U,D,T,$,tt,null)}}const Y=U.children;for(let $=0,V=Y.length;$<V;$++)C(Y[$],D,T,L,G)}function N(U){U.target.removeEventListener("dispose",N);for(const T in m){const L=m[T],G=U.target.uuid;G in L&&(L[G].dispose(),delete L[G])}}}function iC(o,e){function i(){let k=!1;const Ct=new sn;let xt=null;const Nt=new sn(0,0,0,0);return{setMask:function(Gt){xt!==Gt&&!k&&(o.colorMask(Gt,Gt,Gt,Gt),xt=Gt)},setLocked:function(Gt){k=Gt},setClear:function(Gt,Et,Jt,Ht,Ce){Ce===!0&&(Gt*=Ht,Et*=Ht,Jt*=Ht),Ct.set(Gt,Et,Jt,Ht),Nt.equals(Ct)===!1&&(o.clearColor(Gt,Et,Jt,Ht),Nt.copy(Ct))},reset:function(){k=!1,xt=null,Nt.set(-1,0,0,0)}}}function s(){let k=!1,Ct=!1,xt=null,Nt=null,Gt=null;return{setReversed:function(Et){if(Ct!==Et){const Jt=e.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const Ht=Gt;Gt=null,this.setClear(Ht)}},getReversed:function(){return Ct},setTest:function(Et){Et?ht(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!k&&(o.depthMask(Et),xt=Et)},setFunc:function(Et){if(Ct&&(Et=NT[Et]),Nt!==Et){switch(Et){case dp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case pp:o.depthFunc(o.LESS);break;case Nl:o.depthFunc(o.LEQUAL);break;case mp:o.depthFunc(o.EQUAL);break;case gp:o.depthFunc(o.GEQUAL);break;case _p:o.depthFunc(o.GREATER);break;case vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Nt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){Gt!==Et&&(Gt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){k=!1,xt=null,Nt=null,Gt=null,Ct=!1}}}function l(){let k=!1,Ct=null,xt=null,Nt=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null;return{setTest:function(ue){k||(ue?ht(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(ue){Ct!==ue&&!k&&(o.stencilMask(ue),Ct=ue)},setFunc:function(ue,ti,pi){(xt!==ue||Nt!==ti||Gt!==pi)&&(o.stencilFunc(ue,ti,pi),xt=ue,Nt=ti,Gt=pi)},setOp:function(ue,ti,pi){(Et!==ue||Jt!==ti||Ht!==pi)&&(o.stencilOp(ue,ti,pi),Et=ue,Jt=ti,Ht=pi)},setLocked:function(ue){k=ue},setClear:function(ue){Ce!==ue&&(o.clearStencil(ue),Ce=ue)},reset:function(){k=!1,Ct=null,xt=null,Nt=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null}}}const f=new i,d=new s,h=new l,p=new WeakMap,m=new WeakMap;let S={},g={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,P=null,H=null,C=null,N=null,U=null,D=null,T=new Le(0,0,0),L=0,G=!1,Z=null,Y=null,$=null,V=null,tt=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ut=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(ot)[1]),X=ut>=1):ot.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),X=ut>=2);let dt=null,yt={};const Qt=o.getParameter(o.SCISSOR_BOX),Yt=o.getParameter(o.VIEWPORT),z=new sn().fromArray(Qt),mt=new sn().fromArray(Yt);function At(k,Ct,xt,Nt){const Gt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(k,Et),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<xt;Jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Nt,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Et}const Q={};Q[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ht(o.DEPTH_TEST),d.setFunc(Nl),ee(!1),ie(Jv),ht(o.CULL_FACE),ge(Ia);function ht(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function Tt(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function It(k,Ct){return v[k]!==Ct?(o.bindFramebuffer(k,Ct),v[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function _t(k,Ct){let xt=R,Nt=!1;if(k){xt=y.get(Ct),xt===void 0&&(xt=[],y.set(Ct,xt));const Gt=k.textures;if(xt.length!==Gt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Jt=Gt.length;Et<Jt;Et++)xt[Et]=o.COLOR_ATTACHMENT0+Et;xt.length=Gt.length,Nt=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Nt=!0);Nt&&o.drawBuffers(xt)}function Rt(k){return w!==k?(o.useProgram(k),w=k,!0):!1}const Ve={[oo]:o.FUNC_ADD,[jE]:o.FUNC_SUBTRACT,[$E]:o.FUNC_REVERSE_SUBTRACT};Ve[tT]=o.MIN,Ve[eT]=o.MAX;const pe={[nT]:o.ZERO,[iT]:o.ONE,[aT]:o.SRC_COLOR,[px]:o.SRC_ALPHA,[cT]:o.SRC_ALPHA_SATURATE,[lT]:o.DST_COLOR,[sT]:o.DST_ALPHA,[rT]:o.ONE_MINUS_SRC_COLOR,[mx]:o.ONE_MINUS_SRC_ALPHA,[uT]:o.ONE_MINUS_DST_COLOR,[oT]:o.ONE_MINUS_DST_ALPHA,[fT]:o.CONSTANT_COLOR,[dT]:o.ONE_MINUS_CONSTANT_COLOR,[hT]:o.CONSTANT_ALPHA,[pT]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(k,Ct,xt,Nt,Gt,Et,Jt,Ht,Ce,ue){if(k===Ia){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(ht(o.BLEND),M=!0),k!==JE){if(k!==x||ue!==G){if((P!==oo||N!==oo)&&(o.blendEquation(o.FUNC_ADD),P=oo,N=oo),ue)switch(k){case wl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jv:o.blendFunc(o.ONE,o.ONE);break;case $v:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ze("WebGLState: Invalid blending: ",k);break}else switch(k){case wl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $v:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tS:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",k);break}H=null,C=null,U=null,D=null,T.set(0,0,0),L=0,x=k,G=ue}return}Gt=Gt||Ct,Et=Et||xt,Jt=Jt||Nt,(Ct!==P||Gt!==N)&&(o.blendEquationSeparate(Ve[Ct],Ve[Gt]),P=Ct,N=Gt),(xt!==H||Nt!==C||Et!==U||Jt!==D)&&(o.blendFuncSeparate(pe[xt],pe[Nt],pe[Et],pe[Jt]),H=xt,C=Nt,U=Et,D=Jt),(Ht.equals(T)===!1||Ce!==L)&&(o.blendColor(Ht.r,Ht.g,Ht.b,Ce),T.copy(Ht),L=Ce),x=k,G=!1}function Me(k,Ct){k.side===Oa?Tt(o.CULL_FACE):ht(o.CULL_FACE);let xt=k.side===$n;Ct&&(xt=!xt),ee(xt),k.blending===wl&&k.transparent===!1?ge(Ia):ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const Nt=k.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),hn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){Z!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),Z=k)}function ie(k){k!==ZE?(ht(o.CULL_FACE),k!==Y&&(k===Jv?o.cullFace(o.BACK):k===KE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),Y=k}function Xe(k){k!==$&&(X&&o.lineWidth(k),$=k)}function hn(k,Ct,xt){k?(ht(o.POLYGON_OFFSET_FILL),(V!==Ct||tt!==xt)&&(V=Ct,tt=xt,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,xt))):Tt(o.POLYGON_OFFSET_FILL)}function Ie(k){k?ht(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function tn(k){k===void 0&&(k=o.TEXTURE0+W-1),dt!==k&&(o.activeTexture(k),dt=k)}function q(k,Ct,xt){xt===void 0&&(dt===null?xt=o.TEXTURE0+W-1:xt=dt);let Nt=yt[xt];Nt===void 0&&(Nt={type:void 0,texture:void 0},yt[xt]=Nt),(Nt.type!==k||Nt.texture!==Ct)&&(dt!==xt&&(o.activeTexture(xt),dt=xt),o.bindTexture(k,Ct||Q[k]),Nt.type=k,Nt.texture=Ct)}function an(){const k=yt[dt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function E(){try{o.texSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function nt(){try{o.texSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function bt(){try{o.texStorage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function Dt(){try{o.texStorage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function gt(){try{o.texImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function wt(k){return g[k]!==void 0?g[k]:o.getParameter(k)}function jt(k,Ct){g[k]!==Ct&&(o.pixelStorei(k,Ct),g[k]=Ct)}function Pt(k){z.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),z.copy(k))}function Ot(k){mt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),mt.copy(k))}function Vt(k,Ct){let xt=m.get(Ct);xt===void 0&&(xt=new WeakMap,m.set(Ct,xt));let Nt=xt.get(k);Nt===void 0&&(Nt=o.getUniformBlockIndex(Ct,k.name),xt.set(k,Nt))}function ne(k,Ct){const Nt=m.get(Ct).get(k);p.get(Ct)!==Nt&&(o.uniformBlockBinding(Ct,Nt,k.__bindingPointIndex),p.set(Ct,Nt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},g={},dt=null,yt={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,P=null,H=null,C=null,N=null,U=null,D=null,T=new Le(0,0,0),L=0,G=!1,Z=null,Y=null,$=null,V=null,tt=null,z.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ht,disable:Tt,bindFramebuffer:It,drawBuffers:_t,useProgram:Rt,setBlending:ge,setMaterial:Me,setFlipSided:ee,setCullFace:ie,setLineWidth:Xe,setPolygonOffset:hn,setScissorTest:Ie,activeTexture:tn,bindTexture:q,unbindTexture:an,compressedTexImage2D:Pe,compressedTexImage3D:O,texImage2D:gt,texImage3D:Mt,pixelStorei:jt,getParameter:wt,updateUBOMapping:Vt,uniformBlockBinding:ne,texStorage2D:bt,texStorage3D:Dt,texSubImage2D:E,texSubImage3D:nt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:Ot,reset:le}}function aC(o,e,i,s,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Oe,S=new WeakMap,g=new Set;let v;const y=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return R?new OffscreenCanvas(O,E):qc("canvas")}function M(O,E,nt){let lt=1;const pt=Pe(O);if((pt.width>nt||pt.height>nt)&&(lt=nt/Math.max(pt.width,pt.height)),lt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const bt=Math.floor(lt*pt.width),Dt=Math.floor(lt*pt.height);v===void 0&&(v=w(bt,Dt));const gt=E?w(bt,Dt):v;return gt.width=bt,gt.height=Dt,gt.getContext("2d").drawImage(O,0,0,bt,Dt),oe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+bt+"x"+Dt+")."),gt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function x(O){return O.generateMipmaps}function P(O){o.generateMipmap(O)}function H(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,E,nt,lt,pt,bt=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Dt;lt&&(Dt=e.get("EXT_texture_norm16"),Dt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(nt===o.FLOAT&&(gt=o.R32F),nt===o.HALF_FLOAT&&(gt=o.R16F),nt===o.UNSIGNED_BYTE&&(gt=o.R8),nt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.R16_EXT),nt===o.SHORT&&Dt&&(gt=Dt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.R8UI),nt===o.UNSIGNED_SHORT&&(gt=o.R16UI),nt===o.UNSIGNED_INT&&(gt=o.R32UI),nt===o.BYTE&&(gt=o.R8I),nt===o.SHORT&&(gt=o.R16I),nt===o.INT&&(gt=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(gt=o.RG32F),nt===o.HALF_FLOAT&&(gt=o.RG16F),nt===o.UNSIGNED_BYTE&&(gt=o.RG8),nt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RG16_EXT),nt===o.SHORT&&Dt&&(gt=Dt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RG16UI),nt===o.UNSIGNED_INT&&(gt=o.RG32UI),nt===o.BYTE&&(gt=o.RG8I),nt===o.SHORT&&(gt=o.RG16I),nt===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),nt===o.UNSIGNED_INT&&(gt=o.RGB32UI),nt===o.BYTE&&(gt=o.RGB8I),nt===o.SHORT&&(gt=o.RGB16I),nt===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(gt=o.RGBA32UI),nt===o.BYTE&&(gt=o.RGBA8I),nt===o.SHORT&&(gt=o.RGBA16I),nt===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(nt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGB16_EXT),nt===o.SHORT&&Dt&&(gt=Dt.RGB16_SNORM_EXT),nt===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=bt?Wc:De.getTransfer(pt);nt===o.FLOAT&&(gt=o.RGBA32F),nt===o.HALF_FLOAT&&(gt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(gt=Mt===Ye?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGBA16_EXT),nt===o.SHORT&&Dt&&(gt=Dt.RGBA16_SNORM_EXT),nt===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function N(O,E){let nt;return O?E===null||E===ua||E===Ll?nt=o.DEPTH24_STENCIL8:E===ra?nt=o.DEPTH32F_STENCIL8:E===Ul&&(nt=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ua||E===Ll?nt=o.DEPTH_COMPONENT24:E===ra?nt=o.DEPTH_COMPONENT32F:E===Ul&&(nt=o.DEPTH_COMPONENT16),nt}function U(O,E){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ln&&O.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function D(O){const E=O.target;E.removeEventListener("dispose",D),L(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&g.delete(E)}function T(O){const E=O.target;E.removeEventListener("dispose",T),Z(E)}function L(O){const E=s.get(O);if(E.__webglInit===void 0)return;const nt=O.source,lt=y.get(nt);if(lt){const pt=lt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&G(O),Object.keys(lt).length===0&&y.delete(nt)}s.remove(O)}function G(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const nt=O.source,lt=y.get(nt);delete lt[E.__cacheKey],d.memory.textures--}function Z(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let pt=0;pt<E.__webglFramebuffer[lt].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[lt][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[lt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=O.textures;for(let lt=0,pt=nt.length;lt<pt;lt++){const bt=s.get(nt[lt]);bt.__webglTexture&&(o.deleteTexture(bt.__webglTexture),d.memory.textures--),s.remove(nt[lt])}s.remove(O)}let Y=0;function $(){Y=0}function V(){return Y}function tt(O){Y=O}function W(){const O=Y;return O>=l.maxTextures&&oe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),Y+=1,O}function X(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ut(O,E){const nt=s.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&nt.__version!==O.version){const lt=O.image;if(lt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(nt,O,E);return}}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function ot(O,E){const nt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){Tt(nt,O,E);return}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function dt(O,E){const nt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){Tt(nt,O,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function yt(O,E){const nt=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&nt.__version!==O.version){It(nt,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const Qt={[Sp]:o.REPEAT,[Pa]:o.CLAMP_TO_EDGE,[xp]:o.MIRRORED_REPEAT},Yt={[Ln]:o.NEAREST,[_T]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[Lh]:o.LINEAR_MIPMAP_NEAREST,[ts]:o.LINEAR_MIPMAP_LINEAR},z={[MT]:o.NEVER,[AT]:o.ALWAYS,[yT]:o.LESS,[ym]:o.LEQUAL,[ET]:o.EQUAL,[Em]:o.GEQUAL,[TT]:o.GREATER,[bT]:o.NOTEQUAL};function mt(O,E){if(E.type===ra&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Lh||E.magFilter===cc||E.magFilter===ts||E.minFilter===Fn||E.minFilter===Lh||E.minFilter===cc||E.minFilter===ts)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Qt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Qt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Qt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Yt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Yt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==cc&&E.minFilter!==ts||E.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function At(O,E){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",D));const lt=E.source;let pt=y.get(lt);pt===void 0&&(pt={},y.set(lt,pt));const bt=X(E);if(bt!==O.__cacheKey){pt[bt]===void 0&&(pt[bt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,nt=!0),pt[bt].usedTimes++;const Dt=pt[O.__cacheKey];Dt!==void 0&&(pt[O.__cacheKey].usedTimes--,Dt.usedTimes===0&&G(E)),O.__cacheKey=bt,O.__webglTexture=pt[bt].texture}return nt}function Q(O,E,nt){return Math.floor(Math.floor(O/nt)/E)}function ht(O,E,nt,lt){const bt=O.updateRanges;if(bt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,nt,lt,E.data);else{bt.sort((jt,Pt)=>jt.start-Pt.start);let Dt=0;for(let jt=1;jt<bt.length;jt++){const Pt=bt[Dt],Ot=bt[jt],Vt=Pt.start+Pt.count,ne=Q(Ot.start,E.width,4),le=Q(Pt.start,E.width,4);Ot.start<=Vt+1&&ne===le&&Q(Ot.start+Ot.count-1,E.width,4)===ne?Pt.count=Math.max(Pt.count,Ot.start+Ot.count-Pt.start):(++Dt,bt[Dt]=Ot)}bt.length=Dt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),wt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let jt=0,Pt=bt.length;jt<Pt;jt++){const Ot=bt[jt],Vt=Math.floor(Ot.start/4),ne=Math.ceil(Ot.count/4),le=Vt%E.width,k=Math.floor(Vt/E.width),Ct=ne,xt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Ct,xt,nt,lt,E.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,wt)}}function Tt(O,E,nt){let lt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=o.TEXTURE_3D);const pt=At(O,E),bt=E.source;i.bindTexture(lt,O.__webglTexture,o.TEXTURE0+nt);const Dt=s.get(bt);if(bt.version!==Dt.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+nt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xt=De.getPrimaries(De.workingColorSpace),Nt=E.colorSpace===yr?null:De.getPrimaries(E.colorSpace),Gt=E.colorSpace===yr||xt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=M(E.image,!1,l.maxTextureSize);Mt=an(E,Mt);const wt=f.convert(E.format,E.colorSpace),jt=f.convert(E.type);let Pt=C(E.internalFormat,wt,jt,E.normalized,E.colorSpace,E.isVideoTexture);mt(lt,E);let Ot;const Vt=E.mipmaps,ne=E.isVideoTexture!==!0,le=Dt.__version===void 0||pt===!0,k=bt.dataReady,Ct=U(E,Mt);if(E.isDepthTexture)Pt=N(E.format===es,E.type),le&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Pt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,null));else if(E.isDataTexture)if(Vt.length>0){ne&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data);E.generateMipmaps=!1}else ne?(le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height),k&&ht(E,Mt,wt,jt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Vt[0].width,Vt[0].height,Mt.depth);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)if(Ot=Vt[xt],E.format!==zi)if(wt!==null)if(ne){if(k)if(E.layerUpdates.size>0){const Gt=TS(Ot.width,Ot.height,E.format,E.type);for(const Et of E.layerUpdates){const Jt=Ot.data.subarray(Et*Gt/Ot.data.BYTES_PER_ELEMENT,(Et+1)*Gt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,Et,Ot.width,Ot.height,1,wt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,wt,jt,Ot.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ne&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],E.format!==zi?wt!==null?ne?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,Ot.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data)}else if(E.isDataArrayTexture)if(ne){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Mt.width,Mt.height,Mt.depth),k)if(E.layerUpdates.size>0){const xt=TS(Mt.width,Mt.height,E.format,E.type);for(const Nt of E.layerUpdates){const Gt=Mt.data.subarray(Nt*xt/Mt.data.BYTES_PER_ELEMENT,(Nt+1)*xt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Nt,Mt.width,Mt.height,1,wt,jt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isData3DTexture)ne?(le&&i.texStorage3D(o.TEXTURE_3D,Ct,Pt,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isFramebufferTexture){if(le)if(ne)i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height);else{let xt=Mt.width,Nt=Mt.height;for(let Gt=0;Gt<Ct;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Pt,xt,Nt,0,wt,jt,null),xt>>=1,Nt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const xt=o.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),Mt.parentNode!==xt){xt.appendChild(Mt),g.add(E),xt.onpaint=Nt=>{const Gt=Nt.changedElements;for(const Et of g)Gt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Gt=o.RGBA,Et=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Gt,Et,Jt,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(ne&&le){const xt=Pe(Vt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,wt,jt,Ot):i.texImage2D(o.TEXTURE_2D,xt,Pt,wt,jt,Ot);E.generateMipmaps=!1}else if(ne){if(le){const xt=Pe(Mt);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,jt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,wt,jt,Mt);x(E)&&P(lt),Dt.__version=bt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function It(O,E,nt){if(E.image.length!==6)return;const lt=At(O,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+nt);const bt=s.get(pt);if(pt.version!==bt.__version||lt===!0){i.activeTexture(o.TEXTURE0+nt);const Dt=De.getPrimaries(De.workingColorSpace),gt=E.colorSpace===yr?null:De.getPrimaries(E.colorSpace),Mt=E.colorSpace===yr||Dt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,jt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let Et=0;Et<6;Et++)!wt&&!jt?Pt[Et]=M(E.image[Et],!0,l.maxCubemapSize):Pt[Et]=jt?E.image[Et].image:E.image[Et],Pt[Et]=an(E,Pt[Et]);const Ot=Pt[0],Vt=f.convert(E.format,E.colorSpace),ne=f.convert(E.type),le=C(E.internalFormat,Vt,ne,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ct=bt.__version===void 0||lt===!0,xt=pt.dataReady;let Nt=U(E,Ot);mt(o.TEXTURE_CUBE_MAP,E);let Gt;if(wt){k&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Ot.width,Ot.height);for(let Et=0;Et<6;Et++){Gt=Pt[Et].mipmaps;for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];E.format!==zi?Vt!==null?k?xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,Ht.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Ht.width,Ht.height,0,Ht.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,ne,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Ht.width,Ht.height,0,Vt,ne,Ht.data)}}}else{if(Gt=E.mipmaps,k&&Ct){Gt.length>0&&Nt++;const Et=Pe(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(jt){k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Pt[Et].width,Pt[Et].height,Vt,ne,Pt[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,Pt[Et].width,Pt[Et].height,0,Vt,ne,Pt[Et].data);for(let Jt=0;Jt<Gt.length;Jt++){const Ce=Gt[Jt].image[Et].image;k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Ce.width,Ce.height,Vt,ne,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,Ce.width,Ce.height,0,Vt,ne,Ce.data)}}else{k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Vt,ne,Pt[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,Vt,ne,Pt[Et]);for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Vt,ne,Ht.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,Vt,ne,Ht.image[Et])}}}x(E)&&P(o.TEXTURE_CUBE_MAP),bt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,nt,lt,pt,bt){const Dt=f.convert(nt.format,nt.colorSpace),gt=f.convert(nt.type),Mt=C(nt.internalFormat,Dt,gt,nt.normalized,nt.colorSpace),wt=s.get(E),jt=s.get(nt);if(jt.__renderTarget=E,!wt.__hasExternalTextures){const Pt=Math.max(1,E.width>>bt),Ot=Math.max(1,E.height>>bt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,bt,Mt,Pt,Ot,E.depth,0,Dt,gt,null):i.texImage2D(pt,bt,Mt,Pt,Ot,0,Dt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,0,Ie(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,bt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const lt=E.depthTexture,pt=lt&&lt.isDepthTexture?lt.type:null,bt=N(E.stencilBuffer,pt),Dt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),bt,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),bt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,bt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,O)}else{const lt=E.textures;for(let pt=0;pt<lt.length;pt++){const bt=lt[pt],Dt=f.convert(bt.format,bt.colorSpace),gt=f.convert(bt.type),Mt=C(bt.internalFormat,Dt,gt,bt.normalized,bt.colorSpace);tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),Mt,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),Mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ve(O,E,nt){const lt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=s.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const wt=f.convert(E.depthTexture.format),jt=f.convert(E.depthTexture.type);let Pt;E.depthTexture.format===Ha?Pt=o.DEPTH_COMPONENT24:E.depthTexture.format===es&&(Pt=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Pt,E.width,E.height,0,wt,jt,null)}}else ut(E.depthTexture,0);const bt=pt.__webglTexture,Dt=Ie(E),gt=lt?o.TEXTURE_CUBE_MAP_POSITIVE_X+nt:o.TEXTURE_2D,Mt=E.depthTexture.format===es?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ha)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else if(E.depthTexture.format===es)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(O){const E=s.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const lt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",pt)};lt.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=lt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(nt)for(let lt=0;lt<6;lt++)Ve(E.__webglFramebuffer[lt],O,lt);else{const lt=O.texture.mipmaps;lt&&lt.length>0?Ve(E.__webglFramebuffer[0],O,0):Ve(E.__webglFramebuffer,O,0)}else if(nt){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=o.createRenderbuffer(),Rt(E.__webglDepthbuffer[lt],O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}else{const lt=O.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Rt(E.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(O,E,nt){const lt=s.get(O);E!==void 0&&_t(lt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&pe(O)}function Me(O){const E=O.texture,nt=s.get(O),lt=s.get(E);O.addEventListener("dispose",T);const pt=O.textures,bt=O.isWebGLCubeRenderTarget===!0,Dt=pt.length>1;if(Dt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=E.version,d.memory.textures++),bt){nt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)nt.__webglFramebuffer[gt][Mt]=o.createFramebuffer()}else nt.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)nt.__webglFramebuffer[gt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Dt)for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=s.get(pt[gt]);wt.__webglTexture===void 0&&(wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&tn(O)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let gt=0;gt<pt.length;gt++){const Mt=pt[gt];nt.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[gt]);const wt=f.convert(Mt.format,Mt.colorSpace),jt=f.convert(Mt.type),Pt=C(Mt.internalFormat,wt,jt,Mt.normalized,Mt.colorSpace,O.isXRRenderTarget===!0),Ot=Ie(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Pt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(nt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(bt){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(nt.__webglFramebuffer[gt][Mt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else _t(nt.__webglFramebuffer[gt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(E)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=pt[gt],jt=s.get(wt);let Pt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,jt.__webglTexture),mt(Pt,wt),_t(nt.__webglFramebuffer,O,wt,o.COLOR_ATTACHMENT0+gt,Pt,0),x(wt)&&P(Pt)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(gt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,lt.__webglTexture),mt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(nt.__webglFramebuffer[Mt],O,E,o.COLOR_ATTACHMENT0,gt,Mt);else _t(nt.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,gt,0);x(E)&&P(gt),i.unbindTexture()}O.depthBuffer&&pe(O)}function ee(O){const E=O.textures;for(let nt=0,lt=E.length;nt<lt;nt++){const pt=E[nt];if(x(pt)){const bt=H(O),Dt=s.get(pt).__webglTexture;i.bindTexture(bt,Dt),P(bt),i.unbindTexture()}}}const ie=[],Xe=[];function hn(O){if(O.samples>0){if(tn(O)===!1){const E=O.textures,nt=O.width,lt=O.height;let pt=o.COLOR_BUFFER_BIT;const bt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=s.get(O),gt=E.length>1;if(gt)for(let wt=0;wt<E.length;wt++)i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Mt=O.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=s.get(E[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,jt,0)}o.blitFramebuffer(0,0,nt,lt,0,0,nt,lt,pt,o.NEAREST),p===!0&&(ie.length=0,Xe.length=0,ie.push(o.COLOR_ATTACHMENT0+wt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(bt),Xe.push(bt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<E.length;wt++){i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=s.get(E[wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,jt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&p){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(O){return Math.min(l.maxSamples,O.samples)}function tn(O){const E=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(O){const E=d.render.frame;S.get(O)!==E&&(S.set(O,E),O.update())}function an(O,E){const nt=O.colorSpace,lt=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==kc&&nt!==yr&&(De.getTransfer(nt)===Ye?(lt!==zi||pt!==hi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",nt)),E}function Pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.getTextureUnits=V,this.setTextureUnits=tt,this.setTexture2D=ut,this.setTexture2DArray=ot,this.setTexture3D=dt,this.setTextureCube=yt,this.rebindTextures=ge,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function rC(o,e){function i(s,l=yr){let f;const d=De.getTransfer(l);if(s===hi)return o.UNSIGNED_BYTE;if(s===_m)return o.UNSIGNED_SHORT_4_4_4_4;if(s===vm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Rx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Cx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===bx)return o.BYTE;if(s===Ax)return o.SHORT;if(s===Ul)return o.UNSIGNED_SHORT;if(s===gm)return o.INT;if(s===ua)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ca)return o.HALF_FLOAT;if(s===wx)return o.ALPHA;if(s===Dx)return o.RGB;if(s===zi)return o.RGBA;if(s===Ha)return o.DEPTH_COMPONENT;if(s===es)return o.DEPTH_STENCIL;if(s===Nx)return o.RED;if(s===Sm)return o.RED_INTEGER;if(s===is)return o.RG;if(s===xm)return o.RG_INTEGER;if(s===Mm)return o.RGBA_INTEGER;if(s===Ic||s===zc||s===Bc||s===Fc)if(d===Ye)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Ic)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Ic)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mp||s===yp||s===Ep||s===Tp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Mp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ep)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Tp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Vc||s===Dp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===bp||s===Ap)return d===Ye?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Rp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===Cp)return f.COMPRESSED_R11_EAC;if(s===wp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Vc)return f.COMPRESSED_RG11_EAC;if(s===Dp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Np||s===Up||s===Lp||s===Op||s===Pp||s===Ip||s===zp||s===Bp||s===Fp||s===Hp||s===Gp||s===Vp||s===Xp||s===kp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Np)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Up)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Op)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ip)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wp||s===qp||s===Yp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Wp)return d===Ye?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zp||s===Kp||s===Xc||s===Qp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Zp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Kp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ll?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const sC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oC=`
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

}`;class lC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Fx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new fa({vertexShader:sC,fragmentShader:oC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pn(new go(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uC extends as{constructor(e,i){super();const s=this;let l=null,f=1,d=null,h="local-floor",p=1,m=null,S=null,g=null,v=null,y=null,R=null;const w=typeof XRWebGLBinding<"u",M=new lC,x={},P=i.getContextAttributes();let H=null,C=null;const N=[],U=[],D=new Oe;let T=null,L=null;const G=new Ai;G.viewport=new sn;const Z=new Ai;Z.viewport=new sn;const Y=[G,Z],$=new _1;let V=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ht=N[Q];return ht===void 0&&(ht=new Vh,N[Q]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Q){let ht=N[Q];return ht===void 0&&(ht=new Vh,N[Q]=ht),ht.getGripSpace()},this.getHand=function(Q){let ht=N[Q];return ht===void 0&&(ht=new Vh,N[Q]=ht),ht.getHandSpace()};function W(Q){const ht=U.indexOf(Q.inputSource);if(ht===-1)return;const Tt=N[ht];Tt!==void 0&&(Tt.update(Q.inputSource,Q.frame,m||d),Tt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",X),l.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<N.length;Q++){const ht=U[Q];ht!==null&&(U[Q]=null,N[Q].disconnect(ht))}V=null,tt=null,M.reset();for(const Q in x)delete x[Q];if(e.setRenderTarget(H),y=null,v=null,g=null,l=null,C=null,At.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),L!==null){const Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",X),l.addEventListener("inputsourceschange",ut),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,It=null,_t=null;P.depth&&(_t=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=P.stencil?es:Ha,It=P.stencil?Ll:ua);const Rt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};g=this.getBinding(),v=g.createProjectionLayer(Rt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Bi(v.textureWidth,v.textureHeight,{format:zi,type:hi,depthTexture:new Pl(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Bi(y.framebufferWidth,y.framebufferHeight,{format:zi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ut(Q){for(let ht=0;ht<Q.removed.length;ht++){const Tt=Q.removed[ht],It=U.indexOf(Tt);It>=0&&(U[It]=null,N[It].disconnect(Tt))}for(let ht=0;ht<Q.added.length;ht++){const Tt=Q.added[ht];let It=U.indexOf(Tt);if(It===-1){for(let Rt=0;Rt<N.length;Rt++)if(Rt>=U.length){U.push(Tt),It=Rt;break}else if(U[Rt]===null){U[Rt]=Tt,It=Rt;break}if(It===-1)break}const _t=N[It];_t&&_t.connect(Tt)}}const ot=new et,dt=new et;function yt(Q,ht,Tt){ot.setFromMatrixPosition(ht.matrixWorld),dt.setFromMatrixPosition(Tt.matrixWorld);const It=ot.distanceTo(dt),_t=ht.projectionMatrix.elements,Rt=Tt.projectionMatrix.elements,Ve=_t[14]/(_t[10]-1),pe=_t[14]/(_t[10]+1),ge=(_t[9]+1)/_t[5],Me=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(Rt[8]+1)/Rt[0],Xe=Ve*ee,hn=Ve*ie,Ie=It/(-ee+ie),tn=Ie*-ee;if(ht.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(tn),Q.translateZ(Ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_t[10]===-1)Q.projectionMatrix.copy(ht.projectionMatrix),Q.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const q=Ve+Ie,an=pe+Ie,Pe=Xe-tn,O=hn+(It-tn),E=ge*pe/an*q,nt=Me*pe/an*q;Q.projectionMatrix.makePerspective(Pe,O,E,nt,q,an),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Qt(Q,ht){ht===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ht.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ht=Q.near,Tt=Q.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),$.near=Z.near=G.near=ht,$.far=Z.far=G.far=Tt,(V!==$.near||tt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),V=$.near,tt=$.far),$.layers.mask=Q.layers.mask|6,G.layers.mask=$.layers.mask&-5,Z.layers.mask=$.layers.mask&-3;const It=Q.parent,_t=$.cameras;Qt($,It);for(let Rt=0;Rt<_t.length;Rt++)Qt(_t[Rt],It);_t.length===2?yt($,G,Z):$.projectionMatrix.copy(G.projectionMatrix),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),Yt(Q,$,It)};function Yt(Q,ht,Tt){Tt===null?Q.matrix.copy(ht.matrixWorld):(Q.matrix.copy(Tt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ht.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ht.projectionMatrix),Q.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=jp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(Q){p=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(Q){return x[Q]};let z=null;function mt(Q,ht){if(S=ht.getViewerPose(m||d),R=ht,S!==null){const Tt=S.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let It=!1;Tt.length!==$.cameras.length&&($.cameras.length=0,It=!0);for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe];let Me=null;if(y!==null)Me=y.getViewport(ge);else{const ie=g.getViewSubImage(v,ge);Me=ie.viewport,pe===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let ee=Y[pe];ee===void 0&&(ee=new Ai,ee.layers.enable(pe),ee.viewport=new sn,Y[pe]=ee),ee.matrix.fromArray(ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Me.x,Me.y,Me.width,Me.height),pe===0&&($.matrix.copy(ee.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),It===!0&&$.cameras.push(ee)}const _t=l.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const pe=g.getDepthInformation(Tt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(_t&&_t.includes("camera-access")&&w){e.state.unbindTexture(),g=s.getBinding();for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe].camera;if(ge){let Me=x[ge];Me||(Me=new Fx,x[ge]=Me);const ee=g.getCameraImage(ge);Me.sourceTexture=ee}}}}for(let Tt=0;Tt<N.length;Tt++){const It=U[Tt],_t=N[Tt];It!==null&&_t!==void 0&&_t.update(It,ht,m||d)}z&&z(Q,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),R=null}const At=new Vx;At.setAnimationLoop(mt),this.setAnimationLoop=function(Q){z=Q},this.dispose=function(){}}}const cC=new nn,Kx=new fe;Kx.set(-1,0,0,0,1,0,0,0,1);function fC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Hx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,H,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),g(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),w(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,P,H):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===$n&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===$n&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=e.get(x),H=P.envMap,C=P.envMapRotation;H&&(M.envMap.value=H,M.envMapRotation.value.setFromMatrix4(cC.makeRotationFromEuler(C)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Kx),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,P,H){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=H*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const P=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function dC(o,e,i,s){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const U=N.program;s.uniformBlockBinding(C,U)}function m(C,N){let U=l[C.id];U===void 0&&(M(C),U=S(C),l[C.id]=U,C.addEventListener("dispose",P));const D=N.program;s.updateUBOMapping(C,D);const T=e.render.frame;f[C.id]!==T&&(v(C),f[C.id]=T)}function S(C){const N=g();C.__bindingPointIndex=N;const U=o.createBuffer(),D=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,D,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function g(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const N=l[C.id],U=C.uniforms,D=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let T=0,L=U.length;T<L;T++){const G=U[T];if(Array.isArray(G))for(let Z=0,Y=G.length;Z<Y;Z++)y(G[Z],T,Z,D);else y(G,T,0,D)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,N,U,D){if(w(C,N,U,D)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let G=0;for(let Z=0;Z<L.length;Z++){const Y=L[Z],$=x(Y);R(Y,C.__data,G),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function R(C,N,U){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,U)}function w(C,N,U,D){const T=C.value,L=N+"_"+U;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:ArrayBuffer.isView(T)?D[L]=T.slice():D[L]=T.clone(),!0;{const G=D[L];if(typeof T=="number"||typeof T=="boolean"){if(G!==T)return D[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(G.equals(T)===!1)return G.copy(T),!0}}return!1}function M(C){const N=C.uniforms;let U=0;const D=16;for(let L=0,G=N.length;L<G;L++){const Z=Array.isArray(N[L])?N[L]:[N[L]];for(let Y=0,$=Z.length;Y<$;Y++){const V=Z[Y],tt=Array.isArray(V.value)?V.value:[V.value];for(let W=0,X=tt.length;W<X;W++){const ut=tt[W],ot=x(ut),dt=U%D,yt=dt%ot.boundary,Qt=dt+yt;U+=yt,Qt!==0&&D-Qt<ot.storage&&(U+=D-Qt),V.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=U,U+=ot.storage}}}const T=U%D;return T>0&&(U+=D-T),C.__size=U,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),N}function P(C){const N=C.target;N.removeEventListener("dispose",P);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete f[N.id]}function H(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},f={}}return{bind:p,update:m,dispose:H}}const hC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function pC(){return na===null&&(na=new e1(hC,16,16,is,ca),na.name="DFG_LUT",na.minFilter=Fn,na.magFilter=Fn,na.wrapS=Pa,na.wrapT=Pa,na.generateMipmaps=!1,na.needsUpdate=!0),na}class mC{constructor(e={}){const{canvas:i=wT(),context:s=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=hi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const w=y,M=new Set([Mm,xm,Sm]),x=new Set([hi,ua,Ul,Ll,_m,vm]),P=new Uint32Array(4),H=new Int32Array(4),C=new et;let N=null,U=null;const D=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let Z=!1,Y=null,$=null,V=null,tt=null;this._outputColorSpace=di;let W=0,X=0,ut=null,ot=-1,dt=null;const yt=new sn,Qt=new sn;let Yt=null;const z=new Le(0);let mt=0,At=i.width,Q=i.height,ht=1,Tt=null,It=null;const _t=new sn(0,0,At,Q),Rt=new sn(0,0,At,Q);let Ve=!1;const pe=new Am;let ge=!1,Me=!1;const ee=new nn,ie=new et,Xe=new sn,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function tn(){return ut===null?ht:1}let q=s;function an(b,B){return i.getContext(b,B)}let Pe,O,E,nt,lt,pt,bt,Dt,gt,Mt,wt,jt,Pt,Ot,Vt,ne,le,k,Ct,xt,Nt,Gt,Et;try{const b={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mm}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ti,!1),q===null){const B="webgl2";if(q=an(B,b),q===null)throw an(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ze("WebGLRenderer: "+b.message),b}function Jt(){Pe=new pR(q),Pe.init(),Nt=new rC(q,Pe),O=new aR(q,Pe,e,Nt),E=new iC(q,Pe),O.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),$=q.createFramebuffer(),V=q.createFramebuffer(),tt=q.createFramebuffer(),nt=new _R(q),lt=new X3,pt=new aC(q,Pe,E,lt,O,Nt,nt),bt=new hR(G),Dt=new S1(q),Gt=new nR(q,Dt),gt=new mR(q,Dt,nt,Gt),Mt=new SR(q,gt,Dt,Gt,nt),k=new vR(q,O,pt),Vt=new rR(lt),wt=new V3(G,bt,Pe,O,Gt,Vt),jt=new fC(G,lt),Pt=new W3,Ot=new J3(Pe),le=new eR(G,bt,E,Mt,R,p),ne=new nC(G,Mt,O),Et=new dC(q,nt,O,E),Ct=new iR(q,Pe,nt),xt=new gR(q,Pe,nt),nt.programs=wt.programs,G.capabilities=O,G.extensions=Pe,G.properties=lt,G.renderLists=Pt,G.shadowMap=ne,G.state=E,G.info=nt}w!==hi&&(L=new MR(w,i.width,i.height,h,l,f));const Ht=new uC(G,q);this.xr=Ht,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(At,Q,!1))},this.getSize=function(b){return b.set(At,Q)},this.setSize=function(b,B,ft=!0){if(Ht.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}At=b,Q=B,i.width=Math.floor(b*ht),i.height=Math.floor(B*ht),ft===!0&&(i.style.width=b+"px",i.style.height=B+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(At*ht,Q*ht).floor()},this.setDrawingBufferSize=function(b,B,ft){At=b,Q=B,ht=ft,i.width=Math.floor(b*ft),i.height=Math.floor(B*ft),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(w===hi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(yt)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,B,ft,at){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,B,ft,at),E.viewport(yt.copy(_t).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,B,ft,at){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,B,ft,at),E.scissor(Qt.copy(Rt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){E.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){Tt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,ft=!0){let at=0;if(b){let rt=!1;if(ut!==null){const zt=ut.texture.format;rt=M.has(zt)}if(rt){const zt=ut.texture.type,Xt=x.has(zt),Ut=le.getClearColor(),qt=le.getClearAlpha(),Zt=Ut.r,re=Ut.g,ce=Ut.b;Xt?(P[0]=Zt,P[1]=re,P[2]=ce,P[3]=qt,q.clearBufferuiv(q.COLOR,0,P)):(H[0]=Zt,H[1]=re,H[2]=ce,H[3]=qt,q.clearBufferiv(q.COLOR,0,H))}else at|=q.COLOR_BUFFER_BIT}B&&(at|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(at|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&q.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Y=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),le.dispose(),Pt.dispose(),Ot.dispose(),lt.dispose(),bt.dispose(),Mt.dispose(),Gt.dispose(),Et.dispose(),wt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ar),Ht.removeEventListener("sessionend",Va),Gi.stop()};function Ce(b){b.preventDefault(),iS("WebGLRenderer: Context Lost."),Z=!0}function ue(){iS("WebGLRenderer: Context Restored."),Z=!1;const b=nt.autoReset,B=ne.enabled,ft=ne.autoUpdate,at=ne.needsUpdate,rt=ne.type;Jt(),nt.autoReset=b,ne.enabled=B,ne.autoUpdate=ft,ne.needsUpdate=at,ne.type=rt}function ti(b){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pi(b){const B=b.target;B.removeEventListener("dispose",pi),$c(B)}function $c(b){ss(b),lt.remove(b)}function ss(b){const B=lt.get(b).programs;B!==void 0&&(B.forEach(function(ft){wt.releaseProgram(ft)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,ft,at,rt,zt){B===null&&(B=hn);const Xt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Ut=Co(b,B,ft,at,rt);E.setMaterial(at,Xt);let qt=ft.index,Zt=1;if(at.wireframe===!0){if(qt=gt.getWireframeAttribute(ft),qt===void 0)return;Zt=2}const re=ft.drawRange,ce=ft.attributes.position;let kt=re.start*Zt,ye=(re.start+re.count)*Zt;zt!==null&&(kt=Math.max(kt,zt.start*Zt),ye=Math.min(ye,(zt.start+zt.count)*Zt)),qt!==null?(kt=Math.max(kt,0),ye=Math.min(ye,qt.count)):ce!=null&&(kt=Math.max(kt,0),ye=Math.min(ye,ce.count));const _e=ye-kt;if(_e<0||_e===1/0)return;Gt.setup(rt,at,Ut,ft,qt);let Ze,He=Ct;if(qt!==null&&(Ze=Dt.get(qt),He=xt,He.setIndex(Ze)),rt.isMesh)at.wireframe===!0?(E.setLineWidth(at.wireframeLinewidth*tn()),He.setMode(q.LINES)):He.setMode(q.TRIANGLES);else if(rt.isLine){let Sn=at.linewidth;Sn===void 0&&(Sn=1),E.setLineWidth(Sn*tn()),rt.isLineSegments?He.setMode(q.LINES):rt.isLineLoop?He.setMode(q.LINE_LOOP):He.setMode(q.LINE_STRIP)}else rt.isPoints?He.setMode(q.POINTS):rt.isSprite&&He.setMode(q.TRIANGLES);if(rt.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))He.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const Sn=rt._multiDrawStarts,Bt=rt._multiDrawCounts,on=rt._multiDrawCount,we=qt?Dt.get(qt).bytesPerElement:1,Gn=lt.get(at).currentProgram.getUniforms();for(let ei=0;ei<on;ei++)Gn.setValue(q,"_gl_DrawID",ei),He.render(Sn[ei]/we,Bt[ei])}else if(rt.isInstancedMesh)He.renderInstances(kt,_e,rt.count);else if(ft.isInstancedBufferGeometry){const Sn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Bt=Math.min(ft.instanceCount,Sn);He.renderInstances(kt,_e,Bt)}else He.render(kt,_e)};function br(b,B,ft,at){Y!==null&&b.isNodeMaterial&&Y.setObject(at,b),ge===!0&&Vt.setState(b,ft,!1),b.transparent===!0&&b.side===Oa&&b.forceSinglePass===!1?(b.side=$n,b.needsUpdate=!0,Rr(b,B,at),b.side=Fa,b.needsUpdate=!0,Rr(b,B,at),b.side=Oa):Rr(b,B,at)}this.compile=function(b,B,ft=null){ft===null&&(ft=b),Y!==null&&Y.renderStart(b,B,ft),U=Ot.get(ft),U.init(B),T.push(U),ft.traverseVisible(function(rt){rt.isLight&&rt.layers.test(B.layers)&&(U.pushLight(rt),rt.castShadow&&U.pushShadow(rt))}),b!==ft&&b.traverseVisible(function(rt){rt.isLight&&rt.layers.test(B.layers)&&(U.pushLight(rt),rt.castShadow&&U.pushShadow(rt))}),U.setupLights(),Y!==null&&Y.updateLights(U.state.lightsArray),Me=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,Me),ge===!0&&Vt.setGlobalState(this.clippingPlanes,B),Y!==null&&ne.render(U.state.shadowsArray,ft,B);const at=new Set;return b.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const zt=rt.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){const Ut=zt[Xt];br(Ut,ft,B,rt),at.add(Ut)}else br(zt,ft,B,rt),at.add(zt)}),U=T.pop(),Y!==null&&Y.renderEnd(),at},this.compileAsync=function(b,B,ft=null){const at=this.compile(b,B,ft);return new Promise(rt=>{function zt(){if(at.forEach(function(Xt){const qt=lt.get(Xt).currentProgram;(qt===void 0||qt.isReady())&&at.delete(Xt)}),at.size===0){rt(b);return}setTimeout(zt,10)}Pe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Ga=null;function ha(b){Ga&&Ga(b)}function Ar(){Gi.stop()}function Va(){Gi.start()}const Gi=new Vx;Gi.setAnimationLoop(ha),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){Ga=b,Ht.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Ht.addEventListener("sessionstart",Ar),Ht.addEventListener("sessionend",Va),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;Y!==null&&Y.renderStart(b,B);const ft=Ht.enabled===!0&&Ht.isPresenting===!0,at=L!==null&&(ut===null||ft)&&L.begin(G,ut);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(B),B=Ht.getCamera()),b.isScene===!0&&b.onBeforeRender(G,b,B,ut),U=Ot.get(b,T.length),U.init(B),U.state.textureUnits=pt.getTextureUnits(),T.push(U),ee.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),pe.setFromProjectionMatrix(ee,sa,B.reversedDepth),Me=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,Me),N=Pt.get(b,D.length),N.init(),D.push(N),Ht.enabled===!0&&Ht.isPresenting===!0){const Xt=G.xr.getDepthSensingMesh();Xt!==null&&Eo(Xt,B,-1/0,G.sortObjects)}Eo(b,B,0,G.sortObjects),N.finish(),Y!==null&&Y.updateLights(U.state.lightsArray),G.sortObjects===!0&&N.sort(Tt,It),Ie=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Ie&&le.addToRenderList(N,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Vt.beginShadows();const rt=U.state.shadowsArray;if(ne.render(rt,b,B),ge===!0&&Vt.endShadows(),(at&&L.hasRenderPass())===!1){const Xt=N.opaque,Ut=N.transmissive;if(U.setupLights(),B.isArrayCamera){const qt=B.cameras;if(Ut.length>0)for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt];os(Xt,Ut,b,ce)}Ie&&le.render(b);for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt];To(N,b,ce,ce.viewport)}}else Ut.length>0&&os(Xt,Ut,b,B),Ie&&le.render(b),To(N,b,B)}ut!==null&&X===0&&(pt.updateMultisampleRenderTarget(ut),pt.updateRenderTargetMipmap(ut)),at&&L.end(G),b.isScene===!0&&b.onAfterRender(G,b,B),Gt.resetDefaultState(),ot=-1,dt=null,T.pop(),T.length>0?(U=T[T.length-1],pt.setTextureUnits(U.state.textureUnits),ge===!0&&Vt.setGlobalState(G.clippingPlanes,U.state.camera)):U=null,D.pop(),D.length>0?N=D[D.length-1]:N=null,Y!==null&&Y.renderEnd()};function Eo(b,B,ft,at){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)ft=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)U.pushLightProbeGrid(b);else if(b.isLight)U.pushLight(b),b.castShadow&&U.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(pe)){at&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Xt=Mt.update(b),Ut=b.material;Ut.visible&&N.push(b,Xt,Ut,ft,Xe.z,null,B)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(pe))){const Xt=Mt.update(b),Ut=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Xe.copy(Xt.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Ut)){const qt=Xt.groups;for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt],kt=Ut[ce.materialIndex];kt&&kt.visible&&N.push(b,Xt,kt,ft,Xe.z,ce,B)}}else Ut.visible&&N.push(b,Xt,Ut,ft,Xe.z,null,B)}}const zt=b.children;for(let Xt=0,Ut=zt.length;Xt<Ut;Xt++)Eo(zt[Xt],B,ft,at)}function To(b,B,ft,at){const{opaque:rt,transmissive:zt,transparent:Xt}=b;U.setupLightsView(ft),ge===!0&&Vt.setGlobalState(G.clippingPlanes,ft),at&&E.viewport(yt.copy(at)),rt.length>0&&Vi(rt,B,ft),zt.length>0&&Vi(zt,B,ft),Xt.length>0&&Vi(Xt,B,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function os(b,B,ft,at){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[at.id]===void 0){const kt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[at.id]=new Bi(1,1,{generateMipmaps:!0,type:kt?ca:hi,minFilter:ts,samples:Math.max(4,O.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const zt=U.state.transmissionRenderTarget[at.id],Xt=at.viewport||yt;zt.setSize(Xt.z*G.transmissionResolutionScale,Xt.w*G.transmissionResolutionScale);const Ut=G.getRenderTarget(),qt=G.getActiveCubeFace(),Zt=G.getActiveMipmapLevel();G.setRenderTarget(zt),G.getClearColor(z),mt=G.getClearAlpha(),mt<1&&G.setClearColor(16777215,.5),G.clear(),Ie&&le.render(ft);const re=G.toneMapping;G.toneMapping=oa;const ce=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),U.setupLightsView(at),ge===!0&&Vt.setGlobalState(G.clippingPlanes,at),Vi(b,ft,at),pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ye=0,_e=B.length;ye<_e;ye++){const Ze=B[ye],{object:He,geometry:Sn,material:Bt,group:on}=Ze;if(Bt.side===Oa&&He.layers.test(at.layers)){const we=Bt.side;Bt.side=$n,Bt.needsUpdate=!0,Vl(He,ft,at,Sn,Bt,on),Bt.side=we,Bt.needsUpdate=!0,kt=!0}}kt===!0&&(pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt))}G.setRenderTarget(Ut,qt,Zt),G.setClearColor(z,mt),ce!==void 0&&(at.viewport=ce),G.toneMapping=re}function Vi(b,B,ft){const at=B.isScene===!0?B.overrideMaterial:null;for(let rt=0,zt=b.length;rt<zt;rt++){const Xt=b[rt],{object:Ut,geometry:qt,group:Zt}=Xt;let re=Xt.material;re.allowOverride===!0&&at!==null&&(re=at),Ut.layers.test(ft.layers)&&Vl(Ut,B,ft,qt,re,Zt)}}function Vl(b,B,ft,at,rt,zt){Y!==null&&rt.isNodeMaterial&&Y.setObject(b,rt),b.onBeforeRender(G,B,ft,at,rt,zt),b.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),rt.onBeforeRender(G,B,ft,at,b,zt),rt.transparent===!0&&rt.side===Oa&&rt.forceSinglePass===!1?(rt.side=$n,rt.needsUpdate=!0,G.renderBufferDirect(ft,B,at,rt,b,zt),rt.side=Fa,rt.needsUpdate=!0,G.renderBufferDirect(ft,B,at,rt,b,zt),rt.side=Oa):G.renderBufferDirect(ft,B,at,rt,b,zt),b.onAfterRender(G,B,ft,at,rt,zt)}function Rr(b,B,ft){B.isScene!==!0&&(B=hn);const at=lt.get(b),rt=U.state.lights,zt=U.state.shadowsArray,Xt=rt.state.version,Ut=wt.getParameters(b,rt.state,zt,B,ft,U.state.lightProbeGridArray),qt=wt.getProgramCacheKey(Ut);let Zt=at.programs;at.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,at.fog=B.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;at.envMap=bt.get(b.envMap||at.environment,re),at.envMapRotation=at.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",pi),Zt=new Map,at.programs=Zt);let ce=Zt.get(qt);if(ce!==void 0){if(at.currentProgram===ce&&at.lightsStateVersion===Xt)return Ao(b,Ut),ce}else Ut.uniforms=wt.getUniforms(b),Y!==null&&b.isNodeMaterial&&Y.build(b,ft,Ut),b.onBeforeCompile(Ut,G),ce=wt.acquireProgram(Ut,qt),Zt.set(qt,ce),at.uniforms=Ut.uniforms;const kt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Vt.uniform),Ao(b,Ut),at.needsLights=kl(b),at.lightsStateVersion=Xt,at.needsLights&&(kt.ambientLightColor.value=rt.state.ambient,kt.lightProbe.value=rt.state.probe,kt.sunLights.value=rt.state.sun,kt.sunLightShadows.value=rt.state.sunShadow,kt.directionalLights.value=rt.state.directional,kt.directionalLightShadows.value=rt.state.directionalShadow,kt.spotLights.value=rt.state.spot,kt.spotLightShadows.value=rt.state.spotShadow,kt.rectAreaLights.value=rt.state.rectArea,kt.ltc_1.value=rt.state.rectAreaLTC1,kt.ltc_2.value=rt.state.rectAreaLTC2,kt.pointLights.value=rt.state.point,kt.pointLightShadows.value=rt.state.pointShadow,kt.hemisphereLights.value=rt.state.hemi,kt.sunShadowMatrix.value=rt.state.sunShadowMatrix,kt.sunShadowCascade.value=rt.state.sunShadowCascade,kt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,kt.spotLightMatrix.value=rt.state.spotLightMatrix,kt.spotLightMap.value=rt.state.spotLightMap,kt.pointShadowMatrix.value=rt.state.pointShadowMatrix),at.lightProbeGrid=U.state.lightProbeGridArray.length>0,at.currentProgram=ce,at.uniformsList=null,ce}function bo(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Hc.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ao(b,B){const ft=lt.get(b);ft.outputColorSpace=B.outputColorSpace,ft.batching=B.batching,ft.batchingColor=B.batchingColor,ft.instancing=B.instancing,ft.instancingColor=B.instancingColor,ft.instancingMorph=B.instancingMorph,ft.skinning=B.skinning,ft.morphTargets=B.morphTargets,ft.morphNormals=B.morphNormals,ft.morphColors=B.morphColors,ft.morphTargetsCount=B.morphTargetsCount,ft.numClippingPlanes=B.numClippingPlanes,ft.numIntersection=B.numClipIntersection,ft.vertexAlphas=B.vertexAlphas,ft.vertexTangents=B.vertexTangents,ft.toneMapping=B.toneMapping}function Ro(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(B.matrixWorld);for(let ft=0,at=b.length;ft<at;ft++){const rt=b[ft];if(rt.texture!==null&&rt.boundingBox.containsPoint(C))return rt}return null}function Co(b,B,ft,at,rt){B.isScene!==!0&&(B=hn),pt.resetTextureUnits();const zt=B.fog,Xt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?B.environment:null,Ut=ut===null?G.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:De.workingColorSpace,qt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Zt=bt.get(at.envMap||Xt,qt),re=at.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ce=!!ft.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),kt=!!ft.morphAttributes.position,ye=!!ft.morphAttributes.normal,_e=!!ft.morphAttributes.color;let Ze=oa;at.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ze=G.toneMapping);const He=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Sn=He!==void 0?He.length:0,Bt=lt.get(at),on=U.state.lights;if(ge===!0&&(Me===!0||b!==dt)){const be=b===dt&&at.id===ot;Vt.setState(at,b,be)}let we=!1;at.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==on.state.version||Bt.outputColorSpace!==Ut||rt.isBatchedMesh&&Bt.batching===!1||!rt.isBatchedMesh&&Bt.batching===!0||rt.isBatchedMesh&&Bt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Bt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Bt.instancing===!1||!rt.isInstancedMesh&&Bt.instancing===!0||rt.isSkinnedMesh&&Bt.skinning===!1||!rt.isSkinnedMesh&&Bt.skinning===!0||rt.isInstancedMesh&&Bt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Bt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Bt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Bt.instancingMorph===!1&&rt.morphTexture!==null||Bt.envMap!==Zt||at.fog===!0&&Bt.fog!==zt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Vt.numPlanes||Bt.numIntersection!==Vt.numIntersection)||Bt.vertexAlphas!==re||Bt.vertexTangents!==ce||Bt.morphTargets!==kt||Bt.morphNormals!==ye||Bt.morphColors!==_e||Bt.toneMapping!==Ze||Bt.morphTargetsCount!==Sn||!!Bt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Bt.__version=at.version);let Gn=Bt.currentProgram;we===!0&&(Gn=Rr(at,B,rt),Y&&at.isNodeMaterial&&Y.onUpdateProgram(at,Gn,Bt));let ei=!1,Xi=!1,ve=!1;const Be=Gn.getUniforms(),Je=Bt.uniforms;if(E.useProgram(Gn.program)&&(ei=!0,Xi=!0,ve=!0),at.id!==ot&&(ot=at.id,Xi=!0),Bt.needsLights){const be=Ro(U.state.lightProbeGridArray,rt);Bt.lightProbeGrid!==be&&(Bt.lightProbeGrid=be,Xi=!0)}if(ei||dt!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(q,"projectionMatrix",b.projectionMatrix),Be.setValue(q,"viewMatrix",b.matrixWorldInverse);const ln=Be.map.cameraPosition;ln!==void 0&&ln.setValue(q,ie.setFromMatrixPosition(b.matrixWorld)),O.logarithmicDepthBuffer&&Be.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),dt!==b&&(dt=b,Xi=!0,ve=!0)}if(Bt.needsLights&&(on.state.sunShadowMap.length>0&&Be.setValue(q,"sunShadowMap",on.state.sunShadowMap,pt),on.state.directionalShadowMap.length>0&&Be.setValue(q,"directionalShadowMap",on.state.directionalShadowMap,pt),on.state.spotShadowMap.length>0&&Be.setValue(q,"spotShadowMap",on.state.spotShadowMap,pt),on.state.pointShadowMap.length>0&&Be.setValue(q,"pointShadowMap",on.state.pointShadowMap,pt)),rt.isSkinnedMesh){Be.setOptional(q,rt,"bindMatrix"),Be.setOptional(q,rt,"bindMatrixInverse");const be=rt.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Be.setValue(q,"boneTexture",be.boneTexture,pt))}rt.isBatchedMesh&&(Be.setOptional(q,rt,"batchingTexture"),Be.setValue(q,"batchingTexture",rt._matricesTexture,pt),Be.setOptional(q,rt,"batchingIdTexture"),Be.setValue(q,"batchingIdTexture",rt._indirectTexture,pt),Be.setOptional(q,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Be.setValue(q,"batchingColorTexture",rt._colorsTexture,pt));const ni=ft.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&k.update(rt,ft,Gn),(Xi||Bt.receiveShadow!==rt.receiveShadow)&&(Bt.receiveShadow=rt.receiveShadow,Be.setValue(q,"receiveShadow",rt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&B.environment!==null&&(Je.envMapIntensity.value=B.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=pC()),Xi){if(Be.setValue(q,"toneMappingExposure",G.toneMappingExposure),Bt.needsLights&&Xl(Je,ve),zt&&at.fog===!0&&jt.refreshFogUniforms(Je,zt),jt.refreshMaterialUniforms(Je,at,ht,Q,U.state.transmissionRenderTarget[b.id]),Bt.needsLights&&Bt.lightProbeGrid){const be=Bt.lightProbeGrid;Je.probesSH.value=be.texture,Je.probesMin.value.copy(be.boundingBox.min),Je.probesMax.value.copy(be.boundingBox.max),Je.probesResolution.value.copy(be.resolution)}Hc.upload(q,bo(Bt),Je,pt)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Hc.upload(q,bo(Bt),Je,pt),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(q,"center",rt.center),Be.setValue(q,"modelViewMatrix",rt.modelViewMatrix),Be.setValue(q,"normalMatrix",rt.normalMatrix),Be.setValue(q,"modelMatrix",rt.matrixWorld),at.uniformsGroups!==void 0){const be=at.uniformsGroups;for(let ln=0,pa=be.length;ln<pa;ln++){const Wl=be[ln];Et.update(Wl,Gn),Et.bind(Wl,Gn)}}return Gn}function Xl(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function kl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(b,B,ft){const at=lt.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),lt.get(b.texture).__webglTexture=B,lt.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ft,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const ft=lt.get(b);ft.__webglFramebuffer=B,ft.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,ft=0){ut=b,W=B,X=ft;let at=null,rt=!1,zt=!1;if(b){const Ut=lt.get(b);if(Ut.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(q.FRAMEBUFFER,Ut.__webglFramebuffer),yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest,E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),ot=-1;return}else if(Ut.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Ut.__hasExternalTextures)pt.rebindTextures(b,lt.get(b.texture).__webglTexture,lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Ut.__boundDepthTexture!==re){if(re!==null&&lt.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(zt=!0);const Zt=lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?at=Zt[B][ft]:at=Zt[B],rt=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?at=lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?at=Zt[ft]:at=Zt,yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest}else yt.copy(_t).multiplyScalar(ht).floor(),Qt.copy(Rt).multiplyScalar(ht).floor(),Yt=Ve;if(ft!==0&&(at=$),E.bindFramebuffer(q.FRAMEBUFFER,at)&&E.drawBuffers(b,at),E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),rt){const Ut=lt.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,ft)}else if(zt){const Ut=B;for(let qt=0;qt<b.textures.length;qt++){const Zt=lt.get(b.textures[qt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,ft,Ut)}}else if(b!==null&&ft!==0){const Ut=lt.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ut.__webglTexture,ft)}ot=-1};function mi(b){const B=lt.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=O.textureFormatReadable(b.format),B.__typeReadable=O.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,ft,at,rt,zt,Xt,Ut=0){if(!(b&&b.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt){E.bindFramebuffer(q.FRAMEBUFFER,qt);try{const Zt=b.textures[Ut],re=Zt.format,ce=Zt.type;b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ut);const kt=mi(Zt);if(kt.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-at&&ft>=0&&ft<=b.height-rt&&q.readPixels(B,ft,at,rt,Nt.convert(re),Nt.convert(ce),zt)}finally{const Zt=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,B,ft,at,rt,zt,Xt,Ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt)if(B>=0&&B<=b.width-at&&ft>=0&&ft<=b.height-rt){E.bindFramebuffer(q.FRAMEBUFFER,qt);const Zt=b.textures[Ut],re=Zt.format,ce=Zt.type;b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ut);const kt=mi(Zt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ye),q.bufferData(q.PIXEL_PACK_BUFFER,zt.byteLength,q.STREAM_READ),q.readPixels(B,ft,at,rt,Nt.convert(re),Nt.convert(ce),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const _e=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,_e);const Ze=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await DT(q,Ze,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ye),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,zt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(ye),q.deleteSync(Ze),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,ft=0){const at=Math.pow(2,-ft),rt=Math.floor(b.image.width*at),zt=Math.floor(b.image.height*at),Xt=B!==null?B.x:0,Ut=B!==null?B.y:0;pt.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,ft,0,0,Xt,Ut,rt,zt),E.unbindTexture()},this.copyTextureToTexture=function(b,B,ft=null,at=null,rt=0,zt=0){let Xt,Ut,qt,Zt,re,ce,kt,ye,_e;const Ze=b.isCompressedTexture?b.mipmaps[zt]:b.image;if(ft!==null)Xt=ft.max.x-ft.min.x,Ut=ft.max.y-ft.min.y,qt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,re=ft.min.y,ce=ft.isBox3?ft.min.z:0;else{const Je=Math.pow(2,-rt);Xt=Math.floor(Ze.width*Je),Ut=Math.floor(Ze.height*Je),b.isDataArrayTexture?qt=Ze.depth:b.isData3DTexture?qt=Math.floor(Ze.depth*Je):qt=1,Zt=0,re=0,ce=0}at!==null?(kt=at.x,ye=at.y,_e=at.z):(kt=0,ye=0,_e=0);const He=Nt.convert(B.format),Sn=Nt.convert(B.type);let Bt;B.isData3DTexture?(pt.setTexture3D(B,0),Bt=q.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(pt.setTexture2DArray(B,0),Bt=q.TEXTURE_2D_ARRAY):(pt.setTexture2D(B,0),Bt=q.TEXTURE_2D),E.activeTexture(q.TEXTURE0),E.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,B.flipY),E.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),E.pixelStorei(q.UNPACK_ALIGNMENT,B.unpackAlignment);const on=E.getParameter(q.UNPACK_ROW_LENGTH),we=E.getParameter(q.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(q.UNPACK_SKIP_PIXELS),ei=E.getParameter(q.UNPACK_SKIP_ROWS),Xi=E.getParameter(q.UNPACK_SKIP_IMAGES);E.pixelStorei(q.UNPACK_ROW_LENGTH,Ze.width),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ze.height),E.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),E.pixelStorei(q.UNPACK_SKIP_ROWS,re),E.pixelStorei(q.UNPACK_SKIP_IMAGES,ce);const ve=b.isDataArrayTexture||b.isData3DTexture,Be=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Je=lt.get(b),ni=lt.get(B),be=lt.get(Je.__renderTarget),ln=lt.get(ni.__renderTarget);E.bindFramebuffer(q.READ_FRAMEBUFFER,be.__webglFramebuffer),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let pa=0;pa<qt;pa++)ve&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,lt.get(b).__webglTexture,rt,ce+pa),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,lt.get(B).__webglTexture,zt,_e+pa)),q.blitFramebuffer(Zt,re,Xt,Ut,kt,ye,Xt,Ut,q.DEPTH_BUFFER_BIT,q.NEAREST);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(rt!==0||b.isRenderTargetTexture||lt.has(b)){const Je=lt.get(b),ni=lt.get(B);E.bindFramebuffer(q.READ_FRAMEBUFFER,V),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,tt);for(let be=0;be<qt;be++)ve?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Je.__webglTexture,rt,ce+be):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Je.__webglTexture,rt),Be?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ni.__webglTexture,zt,_e+be):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ni.__webglTexture,zt),rt!==0?q.blitFramebuffer(Zt,re,Xt,Ut,kt,ye,Xt,Ut,q.COLOR_BUFFER_BIT,q.NEAREST):Be?q.copyTexSubImage3D(Bt,zt,kt,ye,_e+be,Zt,re,Xt,Ut):q.copyTexSubImage2D(Bt,zt,kt,ye,Zt,re,Xt,Ut);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Be?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(Bt,zt,kt,ye,_e,Xt,Ut,qt,He,Sn,Ze.data):B.isCompressedArrayTexture?q.compressedTexSubImage3D(Bt,zt,kt,ye,_e,Xt,Ut,qt,He,Ze.data):q.texSubImage3D(Bt,zt,kt,ye,_e,Xt,Ut,qt,He,Sn,Ze):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,zt,kt,ye,Xt,Ut,He,Sn,Ze.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,zt,kt,ye,Ze.width,Ze.height,He,Ze.data):q.texSubImage2D(q.TEXTURE_2D,zt,kt,ye,Xt,Ut,He,Sn,Ze);E.pixelStorei(q.UNPACK_ROW_LENGTH,on),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,we),E.pixelStorei(q.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(q.UNPACK_SKIP_ROWS,ei),E.pixelStorei(q.UNPACK_SKIP_IMAGES,Xi),zt===0&&B.generateMipmaps&&q.generateMipmap(Bt),E.unbindTexture()},this.initRenderTarget=function(b){lt.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){W=0,X=0,ut=null,E.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const Tr=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],rs=o=>{const e=o.reduce((l,f)=>l+f[0],0)/o.length,i=o.reduce((l,f)=>l+f[1],0)/o.length,s=o.reduce((l,f)=>l+f[2],0)/o.length;return new et(e,i,s)},wm=(o,e)=>{const[i,s,l]=o,f=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],p=f[2]*d[0]-f[0]*d[2],m=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new et(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},So=o=>{const e=new da,i=[],s=[];for(const l of o){const f=rs(l),d=wm(l,f),h=d.x,p=d.y,m=d.z,[S,g,v]=l,y=[g[0]-S[0],g[1]-S[1],g[2]-S[2]],R=[v[0]-S[0],v[1]-S[1],v[2]-S[2]],w=y[1]*R[2]-y[2]*R[1],M=y[2]*R[0]-y[0]*R[2],x=y[0]*R[1]-y[1]*R[0],H=w*f.x+M*f.y+x*f.z>=0?l:[...l].reverse();for(let C=1;C<H.length-1;C++)i.push(...H[0],...H[C],...H[C+1]),s.push(h,p,m,h,p,m,h,p,m)}return e.setAttribute("position",new Fi(i,3)),e.setAttribute("normal",new Fi(s,3)),e},Qx=o=>{const e=Math.abs(o.y)>.9?new et(0,0,1):new et(0,1,0),i=e.clone().sub(o.clone().multiplyScalar(e.dot(o))).normalize(),s=new et().crossVectors(i,o).normalize(),l=new nn().makeBasis(s,i,o);return{normal:o,up:i,orientation:new dn().setFromRotationMatrix(l)}},Jx=o=>Qx(new et(...o).normalize()),Dm=o=>Qx(wm(o,rs(o))),Hl=o=>{const e=new et(0,0,1),i=new dn().setFromUnitVectors(o.normal,e),s=o.up.clone().applyQuaternion(i);return new dn().setFromAxisAngle(new et(0,0,1),Math.atan2(s.x,s.y)).multiply(i)},gC=o=>{const e=new Image,i=new Hn(e);return i.colorSpace=di,e.onload=()=>{i.needsUpdate=!0},e.src=o.toDataURL("image/png"),i},YS=new Map,jx=new WeakSet,$x=(o,e,i)=>{const s=YS.get(o);if(s)return s;const l=document.createElement("canvas");l.width=e,l.height=e;const f=l.getContext("2d");if(!f)return null;i(f);const d=gC(l);return YS.set(o,d),jx.add(d),d},_C=o=>jx.has(o);var vC=hx();function xo({isRolling:o,error:e,result:i}){return vC.createPortal($t.jsx("p",{className:"hint",children:o?"Rolling...":e||(i!==null?`You rolled ${i}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")}),document.body)}const fo=Math.PI/180,SC=3,xC=7,MC=.98,Dl=o=>1-(1-o)**3,tM=o=>new dn().setFromEuler(new Hi(o.x*fo,o.y*fo,o.z*fo,"XYZ")),cp=o=>(o%360+540)%360-180,eM=o=>{const e=new et(o.x,o.y,o.z),i=e.length();return i<1e-9?new et(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},yC=(o,e)=>{const i=f=>tM({x:o.x+(e.x-o.x)*Dl(f),y:o.y+(e.y-o.y)*Dl(f),z:o.z+(e.z-o.z)*Dl(f)}),s=i(MC),l=i(1);return eM(l.multiply(s.clone().invert()))},EC=(o,e,i)=>{const s=tM(o),l=eM(s.clone().invert().multiply(e)).applyQuaternion(s).normalize(),f=Math.random()*Math.PI,d=new dn().setFromAxisAngle(l,-f).multiply(e),h=new Hi().setFromQuaternion(d,"XYZ"),p={x:h.x/fo,y:h.y/fo,z:h.z/fo},m=[];for(let g=SC;g<=xC;g++){const v=i-g;if(!(v<1))for(const y of[1,-1])for(const R of[1,-1])for(const w of[1,-1]){const M={x:o.x+y*360*g,y:o.y+R*360*v,z:o.z+w*360*i};M.x+=cp(p.x-M.x),M.y+=cp(p.y-M.y),M.z+=cp(p.z-M.z);const x=yC(o,M).dot(l);m.push({rotation:M,dot:x})}}const S=m.filter(g=>g.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((g,v)=>v.dot>g.dot?v:g).rotation};function TC(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const la=Math.PI/180,ZS=65,KS=.5,bC=10,AC=1500,RC=750,CC=260,QS=(o,e,i)=>Math.min(i,Math.max(e,o)),Al=(o,e,i)=>{o.current&&(cancelAnimationFrame(o.current),o.current=null);const s=e.current;e.current=null,s?.(i)},wC=o=>{const e=new Hi().setFromQuaternion(o,"XYZ");return{x:e.x/la,y:e.y/la,z:e.z/la}};function Mo({sides:o,resolveTarget:e,initialRotation:i={x:0,y:0,z:0}}){const s=xe.useRef(null),l=xe.useRef({...i}),f=xe.useRef({...i}),d=xe.useRef(null),h=xe.useRef(null),p=xe.useRef(null),m=xe.useRef(null),S=xe.useRef(!1),[g,v]=xe.useState(!1),[y,R]=xe.useState(!1),[w,M]=xe.useState(null),[x,P]=xe.useState(null),H=xe.useRef({sides:o,resolveTarget:e});H.current={sides:o,resolveTarget:e};const C=xe.useCallback(Y=>{l.current=Y,s.current?.rotation.set(Y.x*la,Y.y*la,Y.z*la)},[]),N=xe.useCallback((Y,$)=>{Al(p,m,"cancelled");const V={...l.current},tt=performance.now();return new Promise(W=>{m.current=W;const X=ut=>{const ot=Math.min((ut-tt)/$,1),dt=Dl(ot);C({x:V.x+(Y.x-V.x)*dt,y:V.y+(Y.y-V.y)*dt,z:V.z+(Y.z-V.z)*dt}),ot<1?p.current=requestAnimationFrame(X):Al(p,m,"completed")};p.current=requestAnimationFrame(X)})},[C]),U=xe.useCallback((Y,$)=>{Al(p,m,"cancelled");const V=s.current;if(!V)return Promise.resolve("completed");const tt=V.quaternion.clone(),W=performance.now();return new Promise(X=>{m.current=X;const ut=ot=>{const dt=Math.min((ot-W)/$,1);V.quaternion.slerpQuaternions(tt,Y,Dl(dt)),l.current=wC(V.quaternion),dt<1?p.current=requestAnimationFrame(ut):Al(p,m,"completed")};p.current=requestAnimationFrame(ut)})},[]),D=xe.useCallback(async()=>{S.current=!0,v(!0),M(null),P(null);const Y=()=>{f.current=l.current,S.current=!1,v(!1)};try{const $=await TC(H.current.sides),V=H.current.resolveTarget($),tt=l.current,W=EC(tt,V,bC);if(await N(W,AC)==="cancelled"||await U(V,RC)==="cancelled")return Y();f.current=l.current,v(!1),S.current=!1,M($)}catch($){v(!1),S.current=!1,P($ instanceof Error?$.message:"Roll failed.")}},[U,N]),T=xe.useCallback(Y=>{if(S.current)return;const $=Y.currentTarget.getBoundingClientRect();d.current={centerX:$.left+$.width/2,centerY:$.top+$.height/2,halfWidth:$.width/2,halfHeight:$.height/2,nx:0,ny:0},Y.currentTarget.setPointerCapture(Y.pointerId),R(!0)},[]),L=xe.useCallback(Y=>{const $=d.current;!$||S.current||($.nx=QS((Y.clientX-$.centerX)/$.halfWidth,-1,1),$.ny=QS((Y.clientY-$.centerY)/$.halfHeight,-1,1),!h.current&&(h.current=requestAnimationFrame(()=>{h.current=null;const V=f.current;C({x:V.x-$.ny*ZS,y:V.y+$.nx*ZS,z:V.z})})))},[C]),G=xe.useCallback(()=>{const Y=d.current;if(!Y)return;d.current=null,R(!1),h.current&&(cancelAnimationFrame(h.current),h.current=null),Math.abs(Y.nx)>=KS||Math.abs(Y.ny)>=KS?D():N(f.current,CC)},[N,D]),Z=xe.useCallback(()=>{Al(p,m,"cancelled")},[]);return{meshRef:s,rotationRef:l,cancelAnimation:Z,isRolling:g,isDragging:y,error:x,result:w,onPointerDown:T,onPointerMove:L,onPointerUp:G}}let Er=null,Gc=0,ho=null,JS=!1;const DC=()=>JS?!1:(JS=!0,!0),NC=()=>{if(ho!==null&&(clearTimeout(ho),ho=null),Gc+=1,!Er){const o=new Ai(28,1,.1,100);o.position.set(0,0,7),o.lookAt(0,0,0);const e=new mC({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(0,0),Er={renderer:e,camera:o}}return Er},UC=()=>{Gc-=1,!(Gc>0||ho!==null)&&(ho=setTimeout(()=>{ho=null,!(Gc>0||!Er)&&(Er.renderer.domElement.remove(),Er.renderer.dispose(),Er.renderer.forceContextLoss(),Er=null)},0))},nM={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:769384,cssTop:[11,189,104],cssBottom:[9,165,90],label:"#ffffff"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},Nm=[4,6,8,10,12,20],Um=["red","yellow","green","blue","black","white"];function jS(o,e){return o[(o.indexOf(e)+1)%o.length]}const fp={sides:6,color:"red",translucent:!0},LC=.87,OC=o=>o?LC:1;function PC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=Nm.includes(e)?e:fp.sides,s=o.get("c")?.toLowerCase(),l=s!==void 0&&Um.includes(s)?s:fp.color,f=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=f==="true"?!0:f==="false"?!1:fp.translucent;return{sides:i,color:l,translucent:d}}function yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:l,buildMesh:f}){const d=xe.useRef(null),h=xe.useRef(null),p=xe.useRef(null),m=xe.useRef(f);return m.current=f,xe.useEffect(()=>{const S=new qT,g=m.current({palette:nM[o],opacity:OC(e),translucent:e});g.rotation.set(s.current.x*la,s.current.y*la,s.current.z*la),S.add(g),S.add(new m1(16777215,1)),S.add(new f1(16777215,12303291,1));const v=new p1(16777215,1);return v.position.set(3,4,5),S.add(v),i.current=g,h.current=S,()=>{l(),g.geometry.dispose(),g.material.dispose(),g.children.forEach(y=>{const R=y;R.geometry.dispose(),R.material.map&&!_C(R.material.map)&&R.material.map.dispose(),R.material.dispose()}),i.current=null,h.current=null}},[o,e,i,s,l]),xe.useEffect(()=>{const S=d.current;if(!S)return;const{renderer:g,camera:v}=NC(),y=()=>{const M=S.clientWidth,x=S.clientHeight;g.setSize(M,x,!1),v.aspect=M/x,v.updateProjectionMatrix()},R=new ResizeObserver(y);R.observe(S),y(),h.current&&g.render(h.current,v),DC()&&g.getContext().finish(),S.appendChild(g.domElement);const w=()=>{p.current=requestAnimationFrame(w),h.current&&g.render(h.current,v)};return w(),()=>{g.domElement.remove(),R.disconnect(),p.current&&cancelAnimationFrame(p.current),UC()}},[]),{mountRef:d}}const IC=1.01,zC=2,BC=.95,FC=1.9,HC=.07,Lc=512,$S=[.246667,.5,.753333],GC=.055733,VC="#ffffff",XC=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],kC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},WC=o=>{const e=[],i=o/2,s=[1,-1];for(const l of[0,1,2]){const[f,d]=[0,1,2].filter(h=>h!==l);for(const h of s){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([S,g])=>{const v=[0,0,0];return v[l]=h,v[f]=S,v[d]=g,v}),m=[];for(let S=0;S<4;S++){const g=p[S],v=p[(S+1)%4];m.push(Tr(g,v,i)),m.push(Tr(v,g,i))}e.push(m)}}for(const l of s)for(const f of s)for(const d of s)e.push([[l*(1-o),f,d],[l,f*(1-o),d],[l,f,d*(1-o)]]);return e},qC=WC(HC),tx=XC.map(Jx),ex=(o,e,i)=>{const s=$x(`pip:${o}:${e}`,Lc,f=>{const d=GC*Lc;f.fillStyle=e;for(const[h,p]of kC[o]){const m=$S[p-1]*Lc,S=$S[h-1]*Lc;f.beginPath(),f.arc(m,S,d,0,Math.PI*2),f.fill()}});if(!s)return null;const l=new Qc({map:s,transparent:!0,side:Fa,depthWrite:!1});return new Pn(new go(i,i),l)};function YC({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:6,resolveTarget:y=>Hl(tx[y-1])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(qC),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new et(0,1,0),Math.PI);return tx.forEach((C,N)=>{const U=N+1,D=ex(U,y.label,zC);if(!D)return;D.position.copy(C.normal).multiplyScalar(IC),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const T=ex(U,VC,FC);T&&(T.renderOrder=-1,T.position.copy(C.normal).multiplyScalar(BC),T.quaternion.copy(C.orientation).multiply(P),x.add(T))}),x}});return $t.jsxs("div",{className:`stage stage--six-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const Gl=({text:o,fontPx:e,color:i,planeSize:s,shadow:l})=>{const f=$x(`digit:${o}:${e}:${i}:${l?`${l.color}:${l.blur}`:""}`,256,p=>{p.font=`700 ${e}px dice-font, system-ui, sans-serif`,p.textAlign="center",p.textBaseline="middle",p.fillStyle=i,l&&(p.shadowColor=l.color,p.shadowBlur=l.blur),p.fillText(o,128,136)});if(!f)return null;const d=new Qc({map:f,transparent:!0,side:Fa,depthWrite:!1});return new Pn(new go(s,s),d)},ZC=.8,La=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],aa=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],em=[1,2,3,4],nx=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],KC=[180,180,0,180,0,180,0,180,180,0,180,180],QC={x:-177.2356,y:55.25,z:45},nm=aa.map(o=>{const e=o.map(s=>La[s]),i=rs(e);return{normal:wm(e,i),center:i}}),JC=.07,jC=o=>{const e=[];for(const i of aa){const s=[];for(let l=0;l<3;l++){const f=La[i[l]],d=La[i[(l+1)%3]],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),p=o/h;s.push(Tr(f,d,p)),s.push(Tr(d,f,p))}e.push(s)}for(let i=0;i<La.length;i++){const s=[];for(let l=0;l<La.length;l++){if(l===i)continue;const f=La[i],d=La[l],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]);s.push(Tr(f,d,o/h))}e.push(s)}return e},$C=jC(JC),t2=(o,e)=>{const i=aa[o][e],s=aa[o][(e+1)%3];for(let l=0;l<aa.length;l++)if(l!==o&&aa[l].includes(i)&&aa[l].includes(s))return em[l];return em[o]},e2=o=>{const{normal:e}=nm[o],i=new dn().setFromUnitVectors(e,new et(0,-1,0)),s=(o+1)%aa.length,l=nm[s].normal.clone().applyQuaternion(i),f=Math.atan2(l.x,l.z);return new dn().setFromAxisAngle(new et(0,1,0),-f).multiply(i)},n2="#ffffff",ix=(o,e)=>Gl({text:String(o),fontPx:160,color:e,planeSize:ZC});function i2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:4,resolveTarget:y=>e2(em.indexOf(y)),initialRotation:QC}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So($C),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new et(1,0,0),Math.PI),H=()=>{nm.forEach(({normal:C,center:N},U)=>{for(let D=0;D<3;D++){const T=U*3+D,L=t2(U,D),G=aa[U][D],Z=aa[U][(D+1)%3],Y=new et().addVectors(new et(...La[G]),new et(...La[Z])).multiplyScalar(.5),$=N.clone().sub(Y).normalize(),V=new et().crossVectors($,C),tt=new dn().setFromRotationMatrix(new nn().makeBasis(V,$,C)),W=new dn().setFromAxisAngle(new et(0,0,1),KC[T]*la),X=ix(L,y.label);X&&(X.renderOrder=1,X.position.copy(new et(...nx[T])).addScaledVector(C,.01),X.quaternion.copy(tt),x.add(X));const ut=ix(L,n2);ut&&(ut.renderOrder=-1,ut.position.copy(new et(...nx[T])).addScaledVector(C,-.05),ut.quaternion.copy(tt).multiply(W).multiply(P),x.add(ut))}})};return document.fonts.load("700 160px dice-font").then(H),x}});return $t.jsxs("div",{className:`stage stage--four-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const ax=1.08,a2=.864,iM=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],rx=iM.map(Jx),r2=.07,so=1.7,$r=[[so,0,0],[-so,0,0],[0,so,0],[0,-so,0],[0,0,so],[0,0,-so]],s2=iM.map(([o,e,i])=>[o>0?0:1,e>0?2:3,i>0?4:5]),o2=o=>{const e=[];for(const i of s2){const s=[];for(let l=0;l<3;l++){const f=$r[i[l]],d=$r[i[(l+1)%3]],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),p=o/h;s.push(Tr(f,d,p)),s.push(Tr(d,f,p))}e.push(s)}for(let i=0;i<$r.length;i++){const s=[];for(let p=0;p<$r.length;p++){if(Math.floor(p/2)===Math.floor(i/2))continue;const S=$r[i],g=$r[p],v=Math.hypot(g[0]-S[0],g[1]-S[1],g[2]-S[2]);s.push(Tr(S,g,o/v))}const l=rs(s),f=new et(...$r[i]).normalize(),d=new et(...s[0]).sub(l),h=new et().crossVectors(f,d);s.sort((p,m)=>{const S=new et(...p).sub(l),g=new et(...m).sub(l);return Math.atan2(S.dot(h),S.dot(d))-Math.atan2(g.dot(h),g.dot(d))}),e.push(s)}return e},l2=o2(r2),u2="#ffffff",sx=(o,e)=>Gl({text:String(o),fontPx:200,shadow:{color:"rgba(0, 0, 0, 0.35)",blur:6},color:e,planeSize:a2});function c2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:8,resolveTarget:y=>Hl(rx[y-1])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(l2),x=new Pn(M,new _o({color:y.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new et(0,1,0),Math.PI),H=()=>{rx.forEach((C,N)=>{const U=N+1,D=sx(U,y.label);if(!D)return;D.position.copy(C.normal).multiplyScalar(ax),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const T=sx(U,u2);T&&(T.renderOrder=-1,T.position.copy(C.normal).multiplyScalar(ax-.2),T.quaternion.copy(C.orientation).multiply(P),x.add(T))})};return document.fonts.load("700 200px dice-font").then(H),x}});return $t.jsxs("div",{className:`stage stage--eight-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const f2=.77,aM=2.2,d2=.85,Yc=aM*.9*d2,xr=aM*.65,im=Yc*.105573,am=Yc*.8,Oc=(Yc-am)/(Yc-im),rm=[...[0,1,2,3,4].map(o=>[Oc*xr*Math.cos(o*2*Math.PI/5),am,Oc*xr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Oc*xr*Math.cos((o+.5)*2*Math.PI/5),-am,Oc*xr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[xr*Math.cos(o*2*Math.PI/5),im,xr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[xr*Math.cos((o+.5)*2*Math.PI/5),-im,xr*Math.sin((o+.5)*2*Math.PI/5)])],sm=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],om=[1,3,5,7,9,8,6,4,2,10],ox=Array.from({length:om.length},(o,e)=>Dm(sm[e].map(i=>rm[i]))),h2="#ffffff",lx=(o,e)=>Gl({text:String(o===10?0:o),fontPx:180,color:e,planeSize:f2});function p2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:10,resolveTarget:y=>Hl(ox[om.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(sm.map(C=>C.map(N=>rm[N]))),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new et(0,1,0),Math.PI),H=()=>{ox.forEach((C,N)=>{const U=om[N],D=lx(U,y.label);if(!D)return;const T=rs(sm[N].map(G=>rm[G]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=lx(U,h2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 180px dice-font").then(H),x}});return $t.jsxs("div",{className:`stage stage--ten-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const m2=1,lm=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],um=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],cm=[1,2,3,4,5,6,8,7,9,10,11,12],ux=Array.from({length:cm.length},(o,e)=>Dm(um[e].map(i=>lm[i]))),g2="#ffffff",cx=(o,e)=>Gl({text:String(o),fontPx:160,color:e,planeSize:m2});function _2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:12,resolveTarget:y=>Hl(ux[cm.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(um.map(C=>C.map(N=>lm[N]))),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new et(0,1,0),Math.PI),H=()=>{ux.forEach((C,N)=>{const U=cm[N],D=cx(U,y.label);if(!D)return;const T=rs(um[N].map(G=>lm[G]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=cx(U,g2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 160px dice-font").then(H),x}});return $t.jsxs("div",{className:`stage stage--twelve-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const v2=.9,fm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],dm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],hm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],fx=Array.from({length:hm.length},(o,e)=>Dm(dm[e].map(i=>fm[i]))),S2="#ffffff",dx=(o,e)=>Gl({text:String(o),fontPx:160,color:e,planeSize:v2});function x2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:20,resolveTarget:y=>Hl(fx[hm.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(dm.map(C=>C.map(N=>fm[N]))),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new et(0,1,0),Math.PI),H=()=>{fx.forEach((C,N)=>{const U=hm[N],D=dx(U,y.label);if(!D)return;const T=rs(dm[N].map(G=>fm[G]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=dx(U,S2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 160px dice-font").then(H),x}});return $t.jsxs("div",{className:`stage stage--twenty-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}function M2({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return $t.jsx(i2,{color:e,translucent:i});case 6:return $t.jsx(YC,{color:e,translucent:i});case 8:return $t.jsx(c2,{color:e,translucent:i});case 10:return $t.jsx(p2,{color:e,translucent:i});case 12:return $t.jsx(_2,{color:e,translucent:i});case 20:return $t.jsx(x2,{color:e,translucent:i});default:return null}}const y2=[0,45,90,135];function E2({isOpen:o,onClick:e,ref:i}){return $t.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:$t.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[y2.map(s=>$t.jsx("span",{className:`settings-button__tooth settings-button__tooth--${s}`},s)),$t.jsx("span",{className:"settings-button__hub"})]})})}const T2='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function b2({sides:o,color:e,translucent:i,onSettingsChange:s,onClose:l}){const f=xe.useRef(null),d=xe.useRef(null);return xe.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=f.current;if(!m)return;const S=Array.from(m.querySelectorAll(T2));if(S.length===0)return;const g=S[0],v=S[S.length-1],y=document.activeElement;if(!m.contains(y)){p.preventDefault(),(p.shiftKey?v:g).focus();return}p.shiftKey&&y===g?(p.preventDefault(),v.focus()):!p.shiftKey&&y===v&&(p.preventDefault(),g.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),$t.jsxs("div",{ref:f,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[$t.jsxs("div",{className:"settings-dialog__content",children:[$t.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:$t.jsx("div",{className:"sides-picker__options",children:Nm.map((h,p)=>$t.jsxs(xe.Fragment,{children:[p>0&&$t.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),$t.jsxs("span",{className:"sides-picker__option",children:[$t.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>s({sides:h})}),$t.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),$t.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:$t.jsx("div",{className:"color-picker__options",children:Um.map(h=>$t.jsxs("span",{className:"color-picker__option",children:[$t.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>s({color:h})}),$t.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${nM[h].cssTop.join(" ")})`}})]},h))})}),$t.jsxs("label",{className:"translucent-toggle",children:[$t.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>s({translucent:h.target.checked})}),$t.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),$t.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:$t.jsx("span",{className:"translucent-toggle__knob"})})]})]}),$t.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:$t.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function A2(){const[o,e]=xe.useState(()=>PC()),[i,s]=xe.useState(!1),l=xe.useRef(null),f=xe.useCallback(h=>{e(p=>({...p,...h}))},[]),d=xe.useCallback(()=>{s(!1),l.current?.focus()},[]);return xe.useEffect(()=>{const h=p=>{if(i||p.ctrlKey||p.altKey||p.metaKey)return;const m=p.key.toLowerCase();m==="s"?e(S=>({...S,sides:jS(Nm,S.sides)})):m==="c"?e(S=>({...S,color:jS(Um,S.color)})):m==="t"&&e(S=>({...S,translucent:!S.translucent}))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),$t.jsxs($t.Fragment,{children:[$t.jsx(E2,{ref:l,isOpen:i,onClick:()=>s(!0)}),i&&$t.jsx(b2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:f,onClose:d}),$t.jsx(M2,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const rM=document.getElementById("root");if(!rM)throw new Error("Root element was not found.");YE.createRoot(rM).render($t.jsx(xe.StrictMode,{children:$t.jsx(A2,{})}));

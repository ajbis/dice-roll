(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var bh={exports:{}},xl={};var Gv;function GE(){if(Gv)return xl;Gv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var d=null;if(f!==void 0&&(d=""+f),l.key!==void 0&&(d=""+l.key),"key"in l){f={};for(var h in l)h!=="key"&&(f[h]=l[h])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:f}}return xl.Fragment=e,xl.jsx=i,xl.jsxs=i,xl}var Vv;function VE(){return Vv||(Vv=1,bh.exports=GE()),bh.exports}var $t=VE(),Ah={exports:{}},se={};var Xv;function XE(){if(Xv)return se;Xv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function R(B){return B===null||typeof B!="object"?null:(B=y&&B[y]||B["@@iterator"],typeof B=="function"?B:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function P(B,mt,At){this.props=B,this.context=mt,this.refs=x,this.updater=At||w}P.prototype.isReactComponent={},P.prototype.setState=function(B,mt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,mt,"setState")},P.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function G(){}G.prototype=P.prototype;function C(B,mt,At){this.props=B,this.context=mt,this.refs=x,this.updater=At||w}var N=C.prototype=new G;N.constructor=C,M(N,P.prototype),N.isPureReactComponent=!0;var U=Array.isArray;function D(){}var T={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function V(B,mt,At){var Q=At.ref;return{$$typeof:o,type:B,key:mt,ref:Q!==void 0?Q:null,props:At}}function z(B,mt){return V(B.type,mt,B.props)}function Y(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function nt(B){var mt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(At){return mt[At]})}var K=/\/+/g;function tt(B,mt){return typeof B=="object"&&B!==null&&B.key!=null?nt(""+B.key):mt.toString(36)}function q(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(D,D):(B.status="pending",B.then(function(mt){B.status==="pending"&&(B.status="fulfilled",B.value=mt)},function(mt){B.status==="pending"&&(B.status="rejected",B.reason=mt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function X(B,mt,At,Q,dt){var Tt=typeof B;(Tt==="undefined"||Tt==="boolean")&&(B=null);var It=!1;if(B===null)It=!0;else switch(Tt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(B.$$typeof){case o:case e:It=!0;break;case S:return It=B._init,X(It(B._payload),mt,At,Q,dt)}}if(It)return dt=dt(B),It=Q===""?"."+tt(B,0):Q,U(dt)?(At="",It!=null&&(At=It.replace(K,"$&/")+"/"),X(dt,mt,At,"",function(Ve){return Ve})):dt!=null&&(Y(dt)&&(dt=z(dt,At+(dt.key==null||B&&B.key===dt.key?"":(""+dt.key).replace(K,"$&/")+"/")+It)),mt.push(dt)),1;It=0;var _t=Q===""?".":Q+":";if(U(B))for(var Rt=0;Rt<B.length;Rt++)Q=B[Rt],Tt=_t+tt(Q,Rt),It+=X(Q,mt,At,Tt,dt);else if(Rt=R(B),typeof Rt=="function")for(B=Rt.call(B),Rt=0;!(Q=B.next()).done;)Q=Q.value,Tt=_t+tt(Q,Rt++),It+=X(Q,mt,At,Tt,dt);else if(Tt==="object"){if(typeof B.then=="function")return X(q(B),mt,At,Q,dt);throw mt=String(B),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return It}function ut(B,mt,At){if(B==null)return B;var Q=[],dt=0;return X(B,Q,"","",function(Tt){return mt.call(At,Tt,dt++)}),Q}function at(B){if(B._status===-1){var mt=B._result,At=mt();At.then(function(Q){(B._status===0||B._status===-1)&&(B._status=1,B._result=Q,At.status===void 0&&(At.status="fulfilled",At.value=Q))},function(Q){(B._status===0||B._status===-1)&&(B._status=2,B._result=Q,At.status===void 0&&(At.status="rejected",At.reason=Q))}),B._status===-1&&(B._status=0,B._result=At)}if(B._status===1)return B._result.default;throw B._result}var ht=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function yt(B){var mt=T.T,At={};At.types=mt!==null?mt.types:null,T.T=At;try{var Q=B(),dt=T.S;dt!==null&&dt(At,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(D,ht)}catch(Tt){ht(Tt)}finally{mt!==null&&At.types!==null&&(mt.types=At.types),T.T=mt}}function Qt(B){var mt=T.T;if(mt!==null){var At=mt.types;At===null?mt.types=[B]:At.indexOf(B)===-1&&At.push(B)}else yt(Qt.bind(null,B))}var Yt={map:ut,forEach:function(B,mt,At){ut(B,function(){mt.apply(this,arguments)},At)},count:function(B){var mt=0;return ut(B,function(){mt++}),mt},toArray:function(B){return ut(B,function(mt){return mt})||[]},only:function(B){if(!Y(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return se.Activity=g,se.Children=Yt,se.Component=P,se.Fragment=i,se.Profiler=l,se.PureComponent=C,se.StrictMode=r,se.Suspense=p,se.ViewTransition=v,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,se.__COMPILER_RUNTIME={__proto__:null,c:function(B){return T.H.useMemoCache(B)}},se.addTransitionType=Qt,se.cache=function(B){return function(){return B.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(B,mt,At){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Q=M({},B.props),dt=B.key;if(mt!=null)for(Tt in mt.key!==void 0&&(dt=""+mt.key),mt)!L.call(mt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&mt.ref===void 0||(Q[Tt]=mt[Tt]);var Tt=arguments.length-2;if(Tt===1)Q.children=At;else if(1<Tt){for(var It=Array(Tt),_t=0;_t<Tt;_t++)It[_t]=arguments[_t+2];Q.children=It}return V(B.type,dt,Q)},se.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},se.createElement=function(B,mt,At){var Q,dt={},Tt=null;if(mt!=null)for(Q in mt.key!==void 0&&(Tt=""+mt.key),mt)L.call(mt,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(dt[Q]=mt[Q]);var It=arguments.length-2;if(It===1)dt.children=At;else if(1<It){for(var _t=Array(It),Rt=0;Rt<It;Rt++)_t[Rt]=arguments[Rt+2];dt.children=_t}if(B&&B.defaultProps)for(Q in It=B.defaultProps,It)dt[Q]===void 0&&(dt[Q]=It[Q]);return V(B,Tt,dt)},se.createRef=function(){return{current:null}},se.forwardRef=function(B){return{$$typeof:h,render:B}},se.isValidElement=Y,se.lazy=function(B){return{$$typeof:S,_payload:{_status:-1,_result:B},_init:at}},se.memo=function(B,mt){return{$$typeof:m,type:B,compare:mt===void 0?null:mt}},se.startTransition=yt,se.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},se.use=function(B){return T.H.use(B)},se.useActionState=function(B,mt,At){return T.H.useActionState(B,mt,At)},se.useCallback=function(B,mt){return T.H.useCallback(B,mt)},se.useContext=function(B){return T.H.useContext(B)},se.useDebugValue=function(){},se.useDeferredValue=function(B,mt){return T.H.useDeferredValue(B,mt)},se.useEffect=function(B,mt){return T.H.useEffect(B,mt)},se.useEffectEvent=function(B){return T.H.useEffectEvent(B)},se.useId=function(){return T.H.useId()},se.useImperativeHandle=function(B,mt,At){return T.H.useImperativeHandle(B,mt,At)},se.useInsertionEffect=function(B,mt){return T.H.useInsertionEffect(B,mt)},se.useLayoutEffect=function(B,mt){return T.H.useLayoutEffect(B,mt)},se.useMemo=function(B,mt){return T.H.useMemo(B,mt)},se.useOptimistic=function(B,mt){return T.H.useOptimistic(B,mt)},se.useReducer=function(B,mt,At){return T.H.useReducer(B,mt,At)},se.useRef=function(B){return T.H.useRef(B)},se.useState=function(B){return T.H.useState(B)},se.useSyncExternalStore=function(B,mt,At){return T.H.useSyncExternalStore(B,mt,At)},se.useTransition=function(){return T.H.useTransition()},se.version="19.3.0",se}var kv;function pm(){return kv||(kv=1,Ah.exports=XE()),Ah.exports}var Te=pm(),Rh={exports:{}},Ml={},Ch={exports:{}},wh={};var Wv;function kE(){return Wv||(Wv=1,(function(o){function e(q,X){var ut=q.length;q.push(X);t:for(;0<ut;){var at=ut-1>>>1,ht=q[at];if(0<l(ht,X))q[at]=X,q[ut]=ht,ut=at;else break t}}function i(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var X=q[0],ut=q.pop();if(ut!==X){q[0]=ut;t:for(var at=0,ht=q.length,yt=ht>>>1;at<yt;){var Qt=2*(at+1)-1,Yt=q[Qt],B=Qt+1,mt=q[B];if(0>l(Yt,ut))B<ht&&0>l(mt,Yt)?(q[at]=mt,q[B]=ut,at=B):(q[at]=Yt,q[Qt]=ut,at=Qt);else if(B<ht&&0>l(mt,ut))q[at]=mt,q[B]=ut,at=B;else break t}}return X}function l(q,X){var ut=q.sortIndex-X.sortIndex;return ut!==0?ut:q.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,g=null,v=3,y=!1,R=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function C(q){for(var X=i(m);X!==null;){if(X.callback===null)r(m);else if(X.startTime<=q)r(m),X.sortIndex=X.expirationTime,e(p,X);else break;X=i(m)}}function N(q){if(w=!1,C(q),!R)if(i(p)!==null)R=!0,U||(U=!0,Y());else{var X=i(m);X!==null&&tt(N,X.startTime-q)}}var U=!1,D=-1,T=5,L=-1;function V(){return M?!0:!(o.unstable_now()-L<T)}function z(){if(M=!1,U){var q=o.unstable_now();L=q;var X=!0;try{t:{R=!1,w&&(w=!1,P(D),D=-1),y=!0;var ut=v;try{e:{for(C(q),g=i(p);g!==null&&!(g.expirationTime>q&&V());){var at=g.callback;if(typeof at=="function"){g.callback=null,v=g.priorityLevel;var ht=at(g.expirationTime<=q);if(q=o.unstable_now(),typeof ht=="function"){g.callback=ht,C(q),X=!0;break e}g===i(p)&&r(p),C(q)}else r(p);g=i(p)}if(g!==null)X=!0;else{var yt=i(m);yt!==null&&tt(N,yt.startTime-q),X=!1}}break t}finally{g=null,v=ut,y=!1}X=void 0}}finally{X?Y():U=!1}}}var Y;if(typeof G=="function")Y=function(){G(z)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,K=nt.port2;nt.port1.onmessage=z,Y=function(){K.postMessage(null)}}else Y=function(){x(z,0)};function tt(q,X){D=x(function(){q(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(q){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var ut=v;v=X;try{return q()}finally{v=ut}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ut=v;v=q;try{return X()}finally{v=ut}},o.unstable_scheduleCallback=function(q,X,ut){var at=o.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?at+ut:at):ut=at,q){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=ut+ht,q={id:S++,callback:X,priorityLevel:q,startTime:ut,expirationTime:ht,sortIndex:-1},ut>at?(q.sortIndex=ut,e(m,q),i(p)===null&&q===i(m)&&(w?(P(D),D=-1):w=!0,tt(N,ut-at))):(q.sortIndex=ht,e(p,q),R||y||(R=!0,U||(U=!0,Y()))),q},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(q){var X=v;return function(){var ut=v;v=X;try{return q.apply(this,arguments)}finally{v=ut}}}})(wh)),wh}var qv;function WE(){return qv||(qv=1,Ch.exports=kE()),Ch.exports}var Dh={exports:{}},Ln={};var Yv;function qE(){if(Yv)return Ln;Yv=1;var o=pm();function e(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===d?d:""+y,children:S,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.browser=function(S){return{$$typeof:f,_reason:S}},Ln.createPortal=function(S,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(S,g,null,v)},Ln.flushSync=function(S){var g=p.T,v=r.p;try{if(p.T=null,r.p=2,S)return S()}finally{p.T=g,r.p=v,r.d.f()}},Ln.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(S,g))},Ln.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Ln.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:R,fetchPriority:w}):v==="script"&&r.d.X(S,{crossOrigin:y,integrity:R,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ln.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(S,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(S)},Ln.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);r.d.L(S,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ln.preloadModule=function(S,g){if(typeof S=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(S)},Ln.requestFormReset=function(S){r.d.r(S)},Ln.unstable_batchedUpdates=function(S,g){return S(g)},Ln.useFormState=function(S,g,v){return p.H.useFormState(S,g,v)},Ln.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ln.version="19.3.0",Ln}var Zv;function _x(){if(Zv)return Dh.exports;Zv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Dh.exports=qE(),Dh.exports}var Kv;function YE(){if(Kv)return Ml;Kv=1;var o=WE(),e=pm(),i=_x();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===s)return p(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,s=c;break}if(A===s){_=!0,s=u,a=c;break}A=A.sibling}if(!_){for(A=c.child;A;){if(A===a){_=!0,a=c,s=u;break}if(A===s){_=!0,s=c,a=u;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,P=null;function G(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(x=t),!0):!1}function N(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var D=Object.assign,T=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),Qt=Symbol.for("react.legacy_hidden"),Yt=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),At=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===dt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case nt:return"Profiler";case Y:return"StrictMode";case X:return"Suspense";case ut:return"SuspenseList";case yt:return"Activity";case B:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case tt:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case at:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var It=Array.isArray,_t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ve={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function xe(t){return{current:t}}function ee(t){0>ge||(t.current=pe[ge],pe[ge]=null,ge--)}function ie(t,n){ge++,pe[ge]=t.current,t.current=n}var Xe=xe(null),pn=xe(null),Ie=xe(null),tn=xe(null);function W(t,n){switch(ie(Ie,n),ie(pn,t),ie(Xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Q_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Q_(n),t=J_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Xe),ie(Xe,t)}function an(){ee(Xe),ee(pn),ee(Ie)}function Pe(t){var n=t.memoizedState;n!==null&&(qs._currentValue=n.memoizedState,ie(tn,t)),n=Xe.current;var a=J_(n,t.type);n!==a&&(ie(pn,t),ie(Xe,a))}function O(t){pn.current===t&&(ee(Xe),ee(pn)),tn.current===t&&(ee(tn),qs._currentValue=Ve)}var E,et;function lt(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+t+et}var pt=!1;function bt(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Lt){var Z=Lt}Reflect.construct(t,[],St)}else{try{St.call()}catch(Lt){Z=Lt}St=!1;try{var ot=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(ot!==void 0?Object.defineProperty(t.prototype,"props",ot):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){Z=Lt}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Lt){if(Lt&&Z&&typeof Lt.stack=="string")return[Lt.stack,Z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),_=c[0],A=c[1];if(_&&A){var I=_.split(`
`),j=A.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<j.length&&!j[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===j.length)for(s=I.length-1,u=j.length-1;1<=s&&0<=u&&I[s]!==j[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==j[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==j[u]){var ct=`
`+I[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=u);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?lt(a):""}function Dt(t,n){switch(t.tag){case 26:case 27:case 5:return lt(t.type);case 16:return lt("Lazy");case 13:return t.child!==n&&n!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return lt("Activity");case 30:return lt("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Dt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Mt=Object.prototype.hasOwnProperty,wt=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,Ot=o.unstable_requestPaint,Vt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,k=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,xt=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,Gt=o.log,Et=o.unstable_setDisableYieldValue,Jt=null,Ht=null;function Ce(t){if(typeof Gt=="function"&&Et(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Jt,t)}catch{}}var ue=Math.clz32?Math.clz32:$c,ti=Math.log,mi=Math.LN2;function $c(t){return t>>>=0,t===0?32:31-(ti(t)/mi|0)|0}var ls=256,Rr=262144,Va=4194304;function ma(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~c,s!==0?u=ma(s):(_&=A,_!==0?u=ma(_):a||(a=A&~t,a!==0&&(u=ma(a))))):(A=s&~c,A!==0?u=ma(A):_!==0?u=ma(_):a||(a=s&~t,a!==0&&(u=ma(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Xa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Vi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-ue(a),u=1<<s;n|=t[s],a&=~u}return n}function Ao(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var t=Va;return Va<<=1,(Va&62914560)===0&&(Va=4194304),t}function us(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Xi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kl(t,n,a,s,u,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-ue(a),St=1<<ct;A[ct]=0,I[ct]=-1;var Z=j[ct];if(Z!==null)for(j[ct]=null,ct=0;ct<Z.length;ct++){var ot=Z[ct];ot!==null&&(ot.lane&=-536870913)}a&=~St}s!==0&&wr(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function wr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ue(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Co(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ue(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function wo(t,n){var a=n&-n;return a=(a&42)!==0?1:Do(a),(a&(t.suspendedLanes|n))!==0?0:a}function Do(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function No(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wl(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:Ov(t.type))}function ql(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var gi=Math.random().toString(36).slice(2),b="__reactFiber$"+gi,F="__reactProps$"+gi,ft="__reactContainer$"+gi,rt="__reactEvents$"+gi,st="__reactListeners$"+gi,Bt="__reactHandles$"+gi,Xt="__reactResources$"+gi,Ut="__reactMarker$"+gi,qt="__reactLoad$"+gi;function Zt(t){delete t[b],delete t[F],delete t[st],delete t[Bt]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ft]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=pv(t);t!==null;){if(a=t[b])return a;t=pv(t)}return n}t=a,a=t.parentNode}return null}function ce(t){if(t=t[b]||t[ft]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Me(t){var n=t[Xt];return n||(n=t[Xt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Ut]=!0}function Ze(t){t[qt]=void 0}var He=new Set,xn={};function zt(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(xn[t]=n,t=0;t<n.length;t++)He.add(n[t])}var we=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},ei={};function ki(t){return Mt.call(ei,t)?!0:Mt.call(Gn,t)?!1:we.test(t)?ei[t]=!0:(Gn[t]=!0,!1)}var ve=!1;function ze(){var t=ve;return ve=!1,t}function Je(t,n,a){if(ki(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ni(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ga(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yl(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function tf(t){if(!t._valueTracker){var n=ga(t)?"checked":"value";t._valueTracker=Yl(t,n,""+t[n])}}function zm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ga(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var lM=/[\n"\\]/g;function _i(t){return t.replace(lM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ef(t,n,a,s,u,c,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ln(n)):t.value!==""+ln(n)&&(t.value=""+ln(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?nf(t,ln(t.value)):nf(t,ln(n)):a!=null?nf(t,ln(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ln(A):t.removeAttribute("name")}function Fm(t,n,a,s,u,c,_,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){tf(t);return}a=a!=null?""+ln(a):"",n=n!=null?""+ln(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),tf(t)}function nf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function cs(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Hm(t,n,a){if(n!=null&&(n=""+ln(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ln(a):""}function Gm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(It(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ln(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),tf(t)}function fs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var uM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||uM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Xm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",ve=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(Vm(t,u,s),ve=!0)}else for(var c in n)n.hasOwnProperty(c)&&Vm(t,c,n[c])}function af(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zl(t){return fM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var rf=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ds=null,hs=null;function km(t){var n=ce(t);if(n&&(t=n.stateNode)){var a=t[F]||null;t:switch(t=n.stateNode,n.type){case"input":if(ef(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[F]||null;if(!u)throw Error(r(90));ef(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&zm(s)}break t;case"textarea":Hm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&cs(t,!!a.multiple,n,!1)}}}var of=!1;function Wm(t,n,a){if(of)return t(n,a);of=!0;try{var s=t(n);return s}finally{if(of=!1,(ds!==null||hs!==null)&&(Zu(),ds&&(n=ds,t=hs,hs=ds=null,km(n),t)))for(n=0;n<t.length;n++)km(t[n])}}function Uo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[F]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(_a)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{lf=!1}var ka=null,uf=null,Kl=null;function qm(){if(Kl)return Kl;var t,n=uf,a=n.length,s,u="value"in ka?ka.value:ka.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[c-s];s++);return Kl=u.slice(t,1<s?1-s:void 0)}function Ql(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Jl(){return!0}function Ym(){return!1}function Vn(t){function n(a,s,u,c,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Jl:Ym,this.isPropagationStopped=Ym,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Vn(Wa),Oo=D({},Wa,{view:0,detail:0}),dM=Vn(Oo),cf,ff,Po,$l=D({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(cf=t.screenX-Po.screenX,ff=t.screenY-Po.screenY):ff=cf=0,Po=t),cf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Zm=Vn($l),hM=D({},$l,{dataTransfer:0}),pM=Vn(hM),mM=D({},Oo,{relatedTarget:0}),df=Vn(mM),gM=D({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),_M=Vn(gM),vM=D({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),SM=Vn(vM),xM=D({},Wa,{data:0}),Km=Vn(xM),MM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=EM[t])?!!n[t]:!1}function hf(){return TM}var bM=D({},Oo,{key:function(t){if(t.key){var n=MM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AM=Vn(bM),RM=D({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Vn(RM),CM=D({},Wa,{submitter:0}),wM=Vn(CM),DM=D({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),NM=Vn(DM),UM=D({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),LM=Vn(UM),OM=D({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=Vn(OM),IM=D({},Wa,{newState:0,oldState:0,source:0}),BM=Vn(IM),zM=[9,13,27,32],pf=_a&&"CompositionEvent"in window,Io=null;_a&&"documentMode"in document&&(Io=document.documentMode);var FM=_a&&"TextEvent"in window&&!Io,Jm=_a&&(!pf||Io&&8<Io&&11>=Io),jm=" ",$m=!1;function t0(t,n){switch(t){case"keyup":return zM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function HM(t,n){switch(t){case"compositionend":return e0(n);case"keypress":return n.which!==32?null:($m=!0,jm);case"textInput":return t=n.data,t===jm&&$m?null:t;default:return null}}function GM(t,n){if(ps)return t==="compositionend"||!pf&&t0(t,n)?(t=qm(),Kl=uf=ka=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jm&&n.locale!=="ko"?null:n.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!VM[t.type]:n==="textarea"}function i0(t,n,a,s){ds?hs?hs.push(s):hs=[s]:ds=s,n=tc(n,"onChange"),0<n.length&&(a=new jl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bo=null,zo=null;function XM(t){k_(t,0)}function tu(t){var n=kt(t);if(zm(n))return t}function a0(t,n){if(t==="change")return n}var r0=!1;if(_a){var mf;if(_a){var gf="oninput"in document;if(!gf){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),gf=typeof s0.oninput=="function"}mf=gf}else mf=!1;r0=mf&&(!document.documentMode||9<document.documentMode)}function o0(){Bo&&(Bo.detachEvent("onpropertychange",l0),zo=Bo=null)}function l0(t){if(t.propertyName==="value"&&tu(zo)){var n=[];i0(n,zo,t,sf(t)),Wm(XM,n)}}function kM(t,n,a){t==="focusin"?(o0(),Bo=n,zo=a,Bo.attachEvent("onpropertychange",l0)):t==="focusout"&&o0()}function WM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tu(zo)}function qM(t,n){if(t==="click")return tu(n)}function YM(t,n){if(t==="input"||t==="change")return tu(n)}function ZM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:ZM;function Fo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Mt.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function _f(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function u0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function c0(t,n){var a=u0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=u0(a)}}function f0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?f0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function d0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_f(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_f(t.document)}return n}function vf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var KM=_a&&"documentMode"in document&&11>=document.documentMode,ms=null,Sf=null,Ho=null,xf=!1;function h0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xf||ms==null||ms!==_f(s)||(s=ms,"selectionStart"in s&&vf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ho&&Fo(Ho,s)||(Ho=s,s=tc(Sf,"onSelect"),0<s.length&&(n=new jl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ms)))}function Dr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var gs={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},Mf={},p0={};_a&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Nr(t){if(Mf[t])return Mf[t];if(!gs[t])return t;var n=gs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in p0)return Mf[t]=n[a];return t}var m0=Nr("animationend"),g0=Nr("animationiteration"),_0=Nr("animationstart"),QM=Nr("transitionrun"),JM=Nr("transitionstart"),jM=Nr("transitioncancel"),v0=Nr("transitionend"),S0=new Map,yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yf.push("scrollEnd");function Ci(t,n){S0.set(t,n),zt(n,[t])}var $M=0;function va(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ui.identifierPrefix;var a=$M++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function x0(t){if(t==null||typeof t=="string")return t;var n=null,a=Is;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function Sa(t,n){return t=x0(t),n=x0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var eu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],_s=0,Ef=0;function nu(){for(var t=_s,n=Ef=_s=0;n<t;){var a=vi[n];vi[n++]=null;var s=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var c=vi[n];if(vi[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}c!==0&&M0(a,u,c)}}function iu(t,n,a,s){vi[_s++]=t,vi[_s++]=n,vi[_s++]=a,vi[_s++]=s,Ef|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Tf(t,n,a,s){return iu(t,n,a,s),au(t)}function Ur(t,n){return iu(t,null,null,n),au(t)}function M0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-ue(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function au(t){if(50<ll)throw ll=0,Yu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var vs={};function ty(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new ty(t,n,a,s)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xa(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function y0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ru(t,n,a,s,u,c){var _=0;if(s=t,typeof s=="function")bf(s)&&(_=1);else if(typeof s=="string")_=CE(t,a,Xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case yt:return t=Yn(31,a,n,u),t.elementType=yt,t.lanes=c,t;case z:return Lr(a.children,u,c,n);case Y:_=8,u|=24;break;case nt:return t=Yn(12,a,n,u|2),t.elementType=nt,t.lanes=c,t;case X:return t=Yn(13,a,n,u),t.elementType=X,t.lanes=c,t;case ut:return t=Yn(19,a,n,u),t.elementType=ut,t.lanes=c,t;case Qt:case B:return t=u|32,t=Yn(30,a,n,t),t.elementType=B,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case tt:_=10;break t;case K:_=9;break t;case q:_=11;break t;case at:_=14;break t;case ht:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function Lr(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function Af(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function E0(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Rf(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var T0=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=T0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},T0.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var Ss=[],xs=0,su=null,Go=0,xi=[],Mi=0,qa=null,qi=1,Yi="";function Ma(t,n){Ss[xs++]=Go,Ss[xs++]=su,su=t,Go=n}function b0(t,n,a){xi[Mi++]=qi,xi[Mi++]=Yi,xi[Mi++]=qa,qa=t;var s=qi;t=Yi;var u=32-ue(s)-1;s&=~(1<<u),a+=1;var c=32-ue(n)+u;if(30<c){var _=u-u%5;c=(s&(1<<_)-1).toString(32),s>>=_,u-=_,qi=1<<32-ue(n)+u|a<<u|s,Yi=c+t}else qi=1<<c|a<<u|s,Yi=t}function ou(t){t.return!==null&&(Ma(t,1),b0(t,1,0))}function Cf(t){for(;t===su;)su=Ss[--xs],Ss[xs]=null,Go=Ss[--xs],Ss[xs]=null;for(;t===qa;)qa=xi[--Mi],xi[Mi]=null,Yi=xi[--Mi],xi[Mi]=null,qi=xi[--Mi],xi[Mi]=null}function A0(t,n){xi[Mi++]=qi,xi[Mi++]=Yi,xi[Mi++]=qa,qi=n.id,Yi=n.overflow,qa=t}var Tn=null,je=null,Se=!1,Ya=null,yi=!1,wf=Error(r(519));function Za(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Si(n,t)),wf}function R0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[b]=t,n[F]=s,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<cl.length;a++)Ee(cl[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Fm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Gm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Z_(n.textContent,a)?(s.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),s.onScroll!=null&&Ee("scroll",n),s.onScrollEnd!=null&&Ee("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Za(t,!0)}function lu(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Tn=Tn.return}}function Ms(t){if(t!==Tn)return!1;if(!Se)return lu(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rh(t.type,t.memoizedProps)),a=!a),a&&je&&Za(t),lu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=hv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=hv(t)}else n===27?(n=je,cr(t.type)?(t=ph,ph=null,je=t):je=n):je=Tn?Ti(t.stateNode.nextSibling):null;return!0}function Or(){je=Tn=null,Se=!1}function Df(){var t=Ya;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Ya=null),t}function Vo(t){Ya===null?Ya=[t]:Ya.push(t)}var Nf=xe(null),Pr=null,ya=null;function Ka(t,n,a){ie(Nf,n._currentValue),n._currentValue=a}function Ea(t){t._currentValue=Nf.current,ee(Nf)}function uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Uf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var _=u.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),uu(c.return,a,t),s||(_=null);break t}c=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),uu(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),uu(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ir(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=u.type;ii(u.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(u===tn.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(qs):t=[qs])}u=u.return}return t!==null&&Uf(n,t,a,s),n.flags|=262144,t!==null}function cu(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Br(t){Pr=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return C0(Pr,t)}function fu(t,n){return Pr===null&&Br(t),C0(t,n)}function C0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(t===null)throw Error(r(308));ya=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ya=ya.next=n;return a}var ey=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ny=o.unstable_scheduleCallback,iy=o.unstable_NormalPriority,mn={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lf(){return{controller:new ey,data:new Map,refCount:0}}function Xo(t){t.refCount--,t.refCount===0&&ny(iy,function(){t.controller.abort()})}function w0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var ko=null;function ay(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Wo=null,Of=0,zr=0,ys=null;function ry(t,n){if(Wo===null){var a=Wo=[];Of=0,zr=Qd(),ys={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Of++,n.then(D0,D0),n}function D0(){if(--Of===0&&(ko=null,Wo!==null)){ys!==null&&(ys.status="fulfilled");var t=Wo;Wo=null,zr=0,ys=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function sy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var N0=_t.S;_t.S=function(t,n){if(E_=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ry(t,n),ko!==null)for(var a=Hs;a!==null;)w0(a,ko),a=a.next;if(a=t.types,a!==null){for(var s=Hs;s!==null;)w0(s,a),s=s.next;if(zr!==0){s=ko,s===null&&(s=ko=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}N0!==null&&N0(t,n)};var Fr=xe(null);function Pf(){var t=Fr.current;return t!==null?t:Qe.pooledCache}function du(t,n){n===null?ie(Fr,Fr.current):ie(Fr,n.pool)}function U0(){var t=Pf();return t===null?null:{parent:mn._currentValue,pool:t}}var Es=Error(r(460)),If=Error(r(474)),hu=Error(r(542)),pu={then:function(){}};function L0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function O0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,I0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,I0(t),t}throw Gr=n,Es}}function Hr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gr=a,Es):a}}var Gr=null;function P0(){if(Gr===null)throw Error(r(459));var t=Gr;return Gr=null,t}function I0(t){if(t===Es||t===hu)throw Error(r(483))}var Ts=null,qo=0;function mu(t){var n=qo;return qo+=1,Ts===null&&(Ts=[]),O0(Ts,t,n)}function Qa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gu(t,n){throw n.$$typeof===T?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function B0(t){function n(J,H){if(t){var it=J.deletions;it===null?(J.deletions=[H],J.flags|=16):it.push(H)}}function a(J,H){if(!t)return null;for(;H!==null;)n(J,H),H=H.sibling;return null}function s(J){for(var H=new Map;J!==null;)J.key===null?H.set(J.index,J):H.set(J.key,J),J=J.sibling;return H}function u(J,H){return J=xa(J,H),J.index=0,J.sibling=null,J}function c(J,H,it){return J.index=it,t?(it=J.alternate,it!==null?(it=it.index,it<H?(J.flags|=2,H):it):(J.flags|=134217730,H)):(J.flags|=1048576,H)}function _(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function A(J,H,it,vt){return H===null||H.tag!==6?(H=Af(it,J.mode,vt),H.return=J,H):(H=u(H,it),H.return=J,H)}function I(J,H,it,vt){var Wt=it.type;return Wt===z?(J=ct(J,H,it.props.children,vt,it.key),Qa(J,it),J):H!==null&&(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===ht&&Hr(Wt)===H.type)?(H=u(H,it.props),Qa(H,it),H.return=J,H):(H=ru(it.type,it.key,it.props,null,J.mode,vt),Qa(H,it),H.return=J,H)}function j(J,H,it,vt){return H===null||H.tag!==4||H.stateNode.containerInfo!==it.containerInfo||H.stateNode.implementation!==it.implementation?(H=Rf(it,J.mode,vt),H.return=J,H):(H=u(H,it.children||[]),H.return=J,H)}function ct(J,H,it,vt,Wt){return H===null||H.tag!==7?(H=Lr(it,J.mode,vt,Wt),H.return=J,H):(H=u(H,it),H.return=J,H)}function St(J,H,it){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Af(""+H,J.mode,it),H.return=J,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case L:return it=ru(H.type,H.key,H.props,null,J.mode,it),Qa(it,H),it.return=J,it;case V:return H=Rf(H,J.mode,it),H.return=J,H;case ht:return H=Hr(H),St(J,H,it)}if(It(H)||Q(H))return H=Lr(H,J.mode,it,null),H.return=J,H;if(typeof H.then=="function")return St(J,mu(H),it);if(H.$$typeof===tt)return St(J,fu(J,H),it);gu(J,H)}return null}function Z(J,H,it,vt){var Wt=H!==null?H.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Wt!==null?null:A(J,H,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case L:return it.key===Wt?I(J,H,it,vt):null;case V:return it.key===Wt?j(J,H,it,vt):null;case ht:return it=Hr(it),Z(J,H,it,vt)}if(It(it)||Q(it))return Wt!==null?null:ct(J,H,it,vt,null);if(typeof it.then=="function")return Z(J,H,mu(it),vt);if(it.$$typeof===tt)return Z(J,H,fu(J,it),vt);gu(J,it)}return null}function ot(J,H,it,vt,Wt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(it)||null,A(H,J,""+vt,Wt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case L:return J=J.get(vt.key===null?it:vt.key)||null,I(H,J,vt,Wt);case V:return J=J.get(vt.key===null?it:vt.key)||null,j(H,J,vt,Wt);case ht:return vt=Hr(vt),ot(J,H,it,vt,Wt)}if(It(vt)||Q(vt))return J=J.get(it)||null,ct(H,J,vt,Wt,null);if(typeof vt.then=="function")return ot(J,H,it,mu(vt),Wt);if(vt.$$typeof===tt)return ot(J,H,it,fu(H,vt),Wt);gu(H,vt)}return null}function Lt(J,H,it,vt){for(var Wt=null,Re=null,te=H,ae=H=0,vn=null;te!==null&&ae<it.length;ae++){te.index>ae?(vn=te,te=null):vn=te.sibling;var Ue=Z(J,te,it[ae],vt);if(Ue===null){te===null&&(te=vn);break}t&&te&&Ue.alternate===null&&n(J,te),H=c(Ue,H,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue,te=vn}if(ae===it.length)return a(J,te),Se&&Ma(J,ae),Wt;if(te===null){for(;ae<it.length;ae++)te=St(J,it[ae],vt),te!==null&&(H=c(te,H,ae),Re===null?Wt=te:Re.sibling=te,Re=te);return Se&&Ma(J,ae),Wt}for(te=s(te);ae<it.length;ae++)vn=ot(te,J,ae,it[ae],vt),vn!==null&&(t&&(Ue=vn.alternate,Ue!==null&&te.delete(Ue.key===null?ae:Ue.key)),H=c(vn,H,ae),Re===null?Wt=vn:Re.sibling=vn,Re=vn);return t&&te.forEach(function(mr){return n(J,mr)}),Se&&Ma(J,ae),Wt}function Kt(J,H,it,vt){if(it==null)throw Error(r(151));for(var Wt=null,Re=null,te=H,ae=H=0,vn=null,Ue=it.next();te!==null&&!Ue.done;ae++,Ue=it.next()){te.index>ae?(vn=te,te=null):vn=te.sibling;var mr=Z(J,te,Ue.value,vt);if(mr===null){te===null&&(te=vn);break}t&&te&&mr.alternate===null&&n(J,te),H=c(mr,H,ae),Re===null?Wt=mr:Re.sibling=mr,Re=mr,te=vn}if(Ue.done)return a(J,te),Se&&Ma(J,ae),Wt;if(te===null){for(;!Ue.done;ae++,Ue=it.next())Ue=St(J,Ue.value,vt),Ue!==null&&(H=c(Ue,H,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue);return Se&&Ma(J,ae),Wt}for(te=s(te);!Ue.done;ae++,Ue=it.next())Ue=ot(te,J,ae,Ue.value,vt),Ue!==null&&(t&&(vn=Ue.alternate,vn!==null&&te.delete(vn.key===null?ae:vn.key)),H=c(Ue,H,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue);return t&&te.forEach(function(HE){return n(J,HE)}),Se&&Ma(J,ae),Wt}function he(J,H,it,vt){if(typeof it=="object"&&it!==null&&it.type===z&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case L:t:{for(var Wt=it.key;H!==null;){if(H.key===Wt){if(Wt=it.type,Wt===z){if(H.tag===7){a(J,H.sibling),vt=u(H,it.props.children),Qa(vt,it),vt.return=J,J=vt;break t}}else if(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===ht&&Hr(Wt)===H.type){a(J,H.sibling),vt=u(H,it.props),Qa(vt,it),vt.return=J,J=vt;break t}a(J,H);break}else n(J,H);H=H.sibling}it.type===z?(vt=Lr(it.props.children,J.mode,vt,it.key),Qa(vt,it),vt.return=J,J=vt):(vt=ru(it.type,it.key,it.props,null,J.mode,vt),Qa(vt,it),vt.return=J,J=vt)}return _(J);case V:t:{for(Wt=it.key;H!==null;){if(H.key===Wt)if(H.tag===4&&H.stateNode.containerInfo===it.containerInfo&&H.stateNode.implementation===it.implementation){a(J,H.sibling),vt=u(H,it.children||[]),vt.return=J,J=vt;break t}else{a(J,H);break}else n(J,H);H=H.sibling}vt=Rf(it,J.mode,vt),vt.return=J,J=vt}return _(J);case ht:return it=Hr(it),he(J,H,it,vt)}if(It(it))return Lt(J,H,it,vt);if(Q(it)){if(Wt=Q(it),typeof Wt!="function")throw Error(r(150));return it=Wt.call(it),Kt(J,H,it,vt)}if(typeof it.then=="function")return he(J,H,mu(it),vt);if(it.$$typeof===tt)return he(J,H,fu(J,it),vt);gu(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,H!==null&&H.tag===6?(a(J,H.sibling),vt=u(H,it),vt.return=J,J=vt):(a(J,H),vt=Af(it,J.mode,vt),vt.return=J,J=vt),_(J)):a(J,H)}return function(J,H,it,vt){try{qo=0;var Wt=he(J,H,it,vt);return Ts=null,Wt}catch(te){if(te===Es||te===hu)throw te;var Re=Yn(29,te,null,J.mode);return Re.lanes=vt,Re.return=J,Re}}}var Vr=B0(!0),z0=B0(!1),Ja=!1;function Bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Fe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=au(t),M0(t,null,a),n}return iu(t,s,n,a),au(t)}function Yo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Co(t,a)}}function Ff(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hf=!1;function Zo(){if(Hf){var t=ys;if(t!==null)throw t}}function Ko(t,n,a,s){Hf=!1;var u=t.updateQueue;Ja=!1;var c=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,j=I.next;I.next=null,_===null?c=j:_.next=j,_=I;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==_&&(A===null?ct.firstBaseUpdate=j:A.next=j,ct.lastBaseUpdate=I))}if(c!==null){var St=u.baseState;_=0,ct=j=I=null,A=c;do{var Z=A.lane&-536870913,ot=Z!==A.lane;if(ot?(Ae&Z)===Z:(s&Z)===Z){Z!==0&&Z===zr&&(Hf=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Lt=t,Kt=A;Z=n;var he=a;switch(Kt.tag){case 1:if(Lt=Kt.payload,typeof Lt=="function"){St=Lt.call(he,St,Z);break t}St=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Kt.payload,Z=typeof Lt=="function"?Lt.call(he,St,Z):Lt,Z==null)break t;St=D({},St,Z);break t;case 2:Ja=!0}}Z=A.callback,Z!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[Z]:ot.push(Z))}else ot={lane:Z,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(j=ct=ot,I=St):ct=ct.next=ot,_|=Z;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ct===null&&(I=St),u.baseState=I,u.firstBaseUpdate=j,u.lastBaseUpdate=ct,c===null&&(u.shared.lanes=0),sr|=_,t.lanes=_,t.memoizedState=St}}function F0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function H0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)F0(a[t],n)}var tr=xe(null),_u=xe(0);function G0(t,n){t=Ca,ie(_u,t),ie(tr,n),Ca=t|n.baseLanes}function Gf(){ie(_u,Ca),ie(tr,tr.current)}function Vf(){Ca=_u.current,ee(tr),ee(_u)}var wn=xe(null),In=null;function er(t){var n=t.alternate;ie(Dn,Dn.current&1),ie(wn,t),In===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(In=t)}function Xf(t){ie(Dn,Dn.current),ie(wn,t),In===null&&(In=t)}function V0(t){t.tag===22?(ie(Dn,Dn.current),ie(wn,t),In===null&&(In=t)):nr()}function nr(){ie(Dn,Dn.current),ie(wn,wn.current)}function ai(t){ee(wn),In===t&&(In=null),ee(Dn)}var Dn=xe(0);function Qo(t,n){ie(wn,wn.current),ie(Dn,n)}function kf(t){ee(Dn),ee(wn),In===t&&(In=null)}function vu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||dh(a)||hh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,de=null,Ke=null,gn=null,Su=!1,bs=!1,Xr=!1,xu=0,Jo=0,As=null,oy=0;function un(){throw Error(r(321))}function Wf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function qf(t,n,a,s,u,c){return Ta=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=t===null||t.memoizedState===null?bg:Ag,Xr=!1,c=a(s,u),Xr=!1,bs&&(c=k0(n,a,s,u)),X0(t),c}function X0(t){_t.H=Ru;var n=Ke!==null&&Ke.next!==null;if(Ta=0,gn=Ke=de=null,Su=!1,Jo=0,As=null,n)throw Error(r(300));t===null||_n||(t=t.dependencies,t!==null&&cu(t)&&(_n=!0))}function k0(t,n,a,s){de=t;var u=0;do{if(bs&&(As=null),Jo=0,bs=!1,25<=u)throw Error(r(301));if(u+=1,gn=Ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_t.H=my,c=n(a,s)}while(bs);return c}function ly(){var t=_t.H,n=t.useState()[0];return n=typeof n.then=="function"?jo(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(de.flags|=1024),n}function Yf(){var t=xu!==0;return xu=0,t}function Zf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Kf(t){if(Su){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Su=!1}Ta=0,gn=Ke=de=null,bs=!1,Jo=xu=0,As=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?de.memoizedState=gn=t:gn=gn.next=t,gn}function fn(){if(Ke===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=gn===null?de.memoizedState:gn.next;if(n!==null)gn=n,Ke=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},gn===null?de.memoizedState=gn=t:gn=gn.next=t}return gn}function Mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(t){var n=Jo;return Jo+=1,As===null&&(As=[]),t=O0(As,t,n),n=de,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?bg:Ag),t}function yu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return jo(t);if(t.$$typeof===mt)return;if(t.$$typeof===tt)return Cn(t)}throw Error(r(438,String(t)))}function Qf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Mu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Yt;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function Eu(t){var n=fn();return Jf(n,Ke,t)}function Jf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var _=u.next;u.next=c.next,c.next=_}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var A=_=null,I=null,j=n,ct=!1;do{var St=j.lane&-536870913;if(St!==j.lane?(Ae&St)===St:(Ta&St)===St){var Z=j.revertLane;if(Z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),St===zr&&(ct=!0);else if((Ta&Z)===Z){j=j.next,Z===zr&&(ct=!0);continue}else St={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(A=I=St,_=c):I=I.next=St,de.lanes|=Z,sr|=Z;St=j.action,Xr&&a(c,St),c=j.hasEagerState?j.eagerState:a(c,St)}else Z={lane:St,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(A=I=Z,_=c):I=I.next=Z,de.lanes|=St,sr|=St;j=j.next}while(j!==null&&j!==n);if(I===null?_=c:I.next=A,!ii(c,t.memoizedState)&&(_n=!0,ct&&(a=ys,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=I,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function jf(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do c=t(c,_.action),_=_.next;while(_!==u);ii(c,n.memoizedState)||(_n=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function W0(t,n,a){var s=de,u=fn(),c=Se;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ii((Ke||u).memoizedState,a);if(_&&(u.memoizedState=a,_n=!0),u=u.queue,ed(Z0.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||_||gn!==null&&(gn.memoizedState.tag&1)!==0,Rs(t?9:8,{destroy:void 0},Y0.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Qe===null)throw Error(r(349));c||(Ta&127)!==0||q0(s,n,a)}return a}function q0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Mu(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Y0(t,n,a,s){n.value=a,n.getSnapshot=s,K0(n)&&Q0(t)}function Z0(t,n,a){return a(function(){K0(n)&&Q0(t)})}function K0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function Q0(t){var n=Ur(t,2);n!==null&&Jn(n,t,2)}function $f(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Xr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function J0(t,n,a,s){return t.baseState=a,Jf(t,Ke,typeof s=="function"?s:ba)}function uy(t,n,a,s,u){if(Au(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};_t.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,j0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function j0(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=_t.T,_={};_.types=c!==null?c.types:null,_t.T=_;try{var A=a(u,s),I=_t.S;I!==null&&I(_,A),$0(t,n,A)}catch(j){td(t,n,j)}finally{c!==null&&_.types!==null&&(c.types=_.types),_t.T=c}}else try{c=a(u,s),$0(t,n,c)}catch(j){td(t,n,j)}}function $0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){tg(t,n,s)},function(s){return td(t,n,s)}):tg(t,n,a)}function tg(t,n,a){n.status="fulfilled",n.value=a,eg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,j0(t,a)))}function td(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,eg(n),n=n.next;while(n!==s)}t.action=null}function eg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ng(t,n){return n}function ig(t,n){if(Se){var a=Qe.formState;if(a!==null){t:{var s=de;if(Se){if(je){e:{for(var u=je,c=yi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){je=Ti(u.nextSibling),s=u.data==="F!";break t}}Za(s)}s=!1}s&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ng,lastRenderedState:n},a.queue=s,a=yg.bind(null,de,s),s.dispatch=a,s=$f(!1),c=sd.bind(null,de,!1,s.queue),s=Xn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=uy.bind(null,de,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function ag(t){var n=fn();return rg(n,Ke,t)}function rg(t,n,a){if(n=Jf(t,n,ng)[0],t=Eu(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=jo(n)}catch(_){throw _===Es?hu:_}else s=n;n=fn();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Rs(9,{destroy:void 0},cy.bind(null,u,a),null)),[s,c,t]}function cy(t,n){t.action=n}function sg(t){var n=fn(),a=Ke;if(a!==null)return rg(n,a,t);fn(),n=n.memoizedState,a=fn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Rs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Mu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function og(){return fn().memoizedState}function Tu(t,n,a,s){var u=Xn();de.flags|=t,u.memoizedState=Rs(1|n,{destroy:void 0},a,s===void 0?null:s)}function bu(t,n,a,s){var u=fn();s=s===void 0?null:s;var c=u.memoizedState.inst;Ke!==null&&s!==null&&Wf(s,Ke.memoizedState.deps)?u.memoizedState=Rs(n,c,a,s):(de.flags|=t,u.memoizedState=Rs(1|n,c,a,s))}function lg(t,n){Tu(8390656,8,t,n)}function ed(t,n){bu(2048,8,t,n)}function fy(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Mu(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ug(t){var n=fn().memoizedState;return fy({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function cg(t,n){return bu(4,2,t,n)}function fg(t,n){return bu(4,4,t,n)}function dg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function hg(t,n,a){a=a!=null?a.concat([t]):null,bu(4,4,dg.bind(null,n,t),a)}function nd(){}function pg(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Wf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function mg(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Wf(n,s[1]))return s[0];if(s=t(),Xr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[s,n],s}function id(t,n,a){return a===void 0||(Ta&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=b_(),de.lanes|=t,sr|=t,a)}function gg(t,n,a,s){return ii(a,n)?a:tr.current!==null?(t=id(t,a,s),ii(t,n)||(_n=!0),t):(Ta&106)===0||(Ta&1073741824)!==0&&(Ae&261930)===0?(_n=!0,t.memoizedState=a):(t=b_(),de.lanes|=t,sr|=t,n)}function _g(t,n,a,s,u){var c=Rt.p;Rt.p=c!==0&&8>c?c:8;var _=_t.T,A={};A.types=_!==null?_.types:null,_t.T=A,sd(t,!1,n,a);try{var I=u(),j=_t.S;if(j!==null&&j(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=sy(I,s);$o(t,n,ct,li(t))}else $o(t,n,s,li(t))}catch(St){$o(t,n,{then:function(){},status:"rejected",reason:St},li())}finally{Rt.p=c,_!==null&&A.types!==null&&(_.types=A.types),_t.T=_}}function dy(){}function ad(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=vg(t).queue;_g(t,u,n,Ve,a===null?dy:function(){return Sg(t),a(s)})}function vg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ve,baseState:Ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:Ve},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sg(t){var n=vg(t);n.next===null&&(n=t.alternate.memoizedState),$o(t,n.next.queue,{},li())}function rd(){return Cn(qs)}function xg(){return fn().memoizedState}function Mg(){return fn().memoizedState}function hy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=ja(a);var s=$a(n,t,a);s!==null&&(Jn(s,n,a),Yo(s,n,a)),n={cache:Lf()},t.payload=n;return}n=n.return}}function py(t,n,a){var s=li();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Au(t)?Eg(n,a):(a=Tf(t,n,a,s),a!==null&&(Jn(a,t,s),Tg(a,n,s)))}function yg(t,n,a){var s=li();$o(t,n,a,s)}function $o(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Au(t))Eg(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,A=c(_,a);if(u.hasEagerState=!0,u.eagerState=A,ii(A,_))return iu(t,n,u,0),Qe===null&&nu(),!1}catch{}if(a=Tf(t,n,u,s),a!==null)return Jn(a,t,s),Tg(a,n,s),!0}return!1}function sd(t,n,a,s){if(s={lane:2,revertLane:Qd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Au(t)){if(n)throw Error(r(479))}else n=Tf(t,a,s,2),n!==null&&Jn(n,t,2)}function Au(t){var n=t.alternate;return t===de||n!==null&&n===de}function Eg(t,n){bs=Su=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Co(t,a)}}var Ru={readContext:Cn,use:yu,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},bg={readContext:Cn,use:yu,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:lg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Tu(4194308,4,dg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Tu(4194308,4,t,n)},useInsertionEffect:function(t,n){Tu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var s=t();if(Xr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Xn();if(a!==void 0){var u=a(n);if(Xr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=py.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=$f(t);var n=t.queue,a=yg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nd,useDeferredValue:function(t,n){var a=Xn();return id(a,t,n)},useTransition:function(){var t=$f(!1);return t=_g.bind(null,de,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,u=Xn();if(Se){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Qe===null)throw Error(r(349));(Ae&127)!==0||q0(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,lg(Z0.bind(null,s,c,t),[t]),s.flags|=2048,Rs(9,{destroy:void 0},Y0.bind(null,s,c,a,n),null),a},useId:function(){var t=Xn(),n=Qe.identifierPrefix;if(Se){var a=Yi,s=qi;a=(s&~(1<<32-ue(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=oy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rd,useFormState:ig,useActionState:ig,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sd.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Qf,useCacheRefresh:function(){return Xn().memoizedState=hy.bind(null,de)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ag={readContext:Cn,use:yu,useCallback:pg,useContext:Cn,useEffect:ed,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:Eu,useRef:og,useState:function(){return Eu(ba)},useDebugValue:nd,useDeferredValue:function(t,n){var a=fn();return gg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=Eu(ba)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:W0,useId:xg,useHostTransitionStatus:rd,useFormState:ag,useActionState:ag,useOptimistic:function(t,n){var a=fn();return J0(a,Ke,t,n)},useMemoCache:Qf,useCacheRefresh:Mg,useEffectEvent:ug},my={readContext:Cn,use:yu,useCallback:pg,useContext:Cn,useEffect:ed,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:fg,useMemo:mg,useReducer:jf,useRef:og,useState:function(){return jf(ba)},useDebugValue:nd,useDeferredValue:function(t,n){var a=fn();return Ke===null?id(a,t,n):gg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=jf(ba)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:W0,useId:xg,useHostTransitionStatus:rd,useFormState:sg,useActionState:sg,useOptimistic:function(t,n){var a=fn();return Ke!==null?J0(a,Ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Qf,useCacheRefresh:Mg,useEffectEvent:ug};function od(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:D({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ld={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=li(),u=ja(s);u.payload=n,a!=null&&(u.callback=a),n=$a(t,u,s),n!==null&&(Jn(n,t,s),Yo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=li(),u=ja(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=$a(t,u,s),n!==null&&(Jn(n,t,s),Yo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),s=ja(a);s.tag=2,n!=null&&(s.callback=n),n=$a(t,s,a),n!==null&&(Jn(n,t,a),Yo(n,t,a))}};function Rg(t,n,a,s,u,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,_):n.prototype&&n.prototype.isPureReactComponent?!Fo(a,s)||!Fo(u,c):!0}function Cg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ld.enqueueReplaceState(n,n.state,null)}function kr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=D({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function wg(t){eu(t)}function Dg(t){console.error(t)}function Ng(t){eu(t)}function Cu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Ug(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ud(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Cu(t,n)},a}function Lg(t){return t=ja(t),t.tag=3,t}function Og(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){Ug(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ug(n,a,s),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function gy(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Ku():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Yd(t,s,u)),!1;case 22:return a.flags|=65536,s===pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Yd(t,s,u)),!1}throw Error(r(435,a.tag))}return Yd(t,s,u),Ku(),!1}if(Se)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==wf&&(t=Error(r(422),{cause:s}),Vo(Si(t,a)))):(s!==wf&&(n=Error(r(423),{cause:s}),Vo(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Si(s,a),u=ud(t.stateNode,s,u),Ff(t,u),cn!==4&&(cn=2)),!1;var c=Error(r(520),{cause:s});if(c=Si(c,a),ol===null?ol=[c]:ol.push(c),cn!==4&&(cn=2),n===null)return!0;s=Si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ud(a.stateNode,s,t),Ff(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(or===null||!or.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lg(u),Og(u,t,a,s),Ff(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var cd=Error(r(461)),_n=!1;function Mn(t,n,a,s){n.child=t===null?z0(n,null,a,s):Vr(n,t.child,a,s)}function Pg(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var _={};for(var A in s)A!=="ref"&&(_[A]=s[A])}else _=s;return Br(n),s=qf(t,n,a,_,c,u),A=Yf(),t!==null&&!_n?(Zf(t,n,u),Aa(t,n,u)):(Se&&A&&ou(n),n.flags|=1,Mn(t,n,s,u),n.child)}function Ig(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!bf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Bg(t,n,c,s,u)):(t=ru(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!vd(t,u)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(_,s)&&t.ref===n.ref)return Aa(t,n,u)}return n.flags|=1,t=xa(c,s),t.ref=n.ref,t.return=n,n.child=t}function Bg(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(Fo(c,s)&&t.ref===n.ref)if(_n=!1,n.pendingProps=s=c,vd(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,Aa(t,n,u)}return fd(t,n,a,s,u)}function zg(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return Fg(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&du(n,c!==null?c.cachePool:null),c!==null?G0(n,c):Gf(),V0(n);else return s=n.lanes=536870912,Fg(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(du(n,c.cachePool),G0(n,c),nr(),n.memoizedState=null):(t!==null&&du(n,null),Gf(),nr());return Mn(t,n,u,a),n.child}function tl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fg(t,n,a,s,u){var c=Pf();return c=c===null?null:{parent:mn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&du(n,null),Gf(),V0(n),t!==null&&Ir(t,n,s,!0),n.childLanes=u,null}function wu(t,n){return n=Du({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hg(t,n,a){return Vr(n,t.child,null,a),t=wu(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function _y(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(s.mode==="hidden")return t=wu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},tl(null,t);if(Xf(n),(t=je)?(t=dv(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=E0(t),a.return=n,n.child=a,Tn=n,je=null)):t=null,t===null)throw Za(n);return n.lanes=536870912,null}return wu(n,s)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(Xf(n),u)if(n.flags&256)n.flags&=-257,n=Hg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(_n||Ir(t,n,a,!1),u=(a&t.childLanes)!==0,_n||u){if(tr.current===null){if(s=Qe,s!==null&&(_=wo(s,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,Ur(t,_),Jn(s,t,_),cd;Ku()}n=Hg(t,n,a)}else t=c.treeContext,je=Ti(_.nextSibling),Tn=n,Se=!0,Ya=null,yi=!1,t!==null&&A0(n,t),n=wu(n,s),n.flags|=134221824;return n}return t=xa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Cs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function fd(t,n,a,s,u){return Br(n),a=qf(t,n,a,s,void 0,u),s=Yf(),t!==null&&!_n?(Zf(t,n,u),Aa(t,n,u)):(Se&&s&&ou(n),n.flags|=1,Mn(t,n,a,u),n.child)}function Gg(t,n,a,s,u,c){return Br(n),n.updateQueue=null,a=k0(n,s,a,u),X0(t),s=Yf(),t!==null&&!_n?(Zf(t,n,c),Aa(t,n,c)):(Se&&s&&ou(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Vg(t,n,a,s,u){if(Br(n),n.stateNode===null){var c=vs,_=a.contextType;typeof _=="object"&&_!==null&&(c=Cn(_)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ld,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},Bf(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?Cn(_):vs,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(od(n,a,_,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&ld.enqueueReplaceState(c,c.state,null),Ko(n,s,c,u),Zo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,I=kr(a,A);c.props=I;var j=c.context,ct=a.contextType;_=vs,typeof ct=="object"&&ct!==null&&(_=Cn(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||j!==_)&&Cg(n,c,s,_),Ja=!1;var Z=n.memoizedState;c.state=Z,Ko(n,s,c,u),Zo(),j=n.memoizedState,A||Z!==j||Ja?(typeof St=="function"&&(od(n,a,St,s),j=n.memoizedState),(I=Ja||Rg(n,a,I,s,Z,j,_))?(ct||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=j),c.props=s,c.state=j,c.context=_,s=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,zf(t,n),_=n.memoizedProps,ct=kr(a,_),c.props=ct,St=n.pendingProps,Z=c.context,j=a.contextType,I=vs,typeof j=="object"&&j!==null&&(I=Cn(j)),A=a.getDerivedStateFromProps,(j=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==St||Z!==I)&&Cg(n,c,s,I),Ja=!1,Z=n.memoizedState,c.state=Z,Ko(n,s,c,u),Zo();var ot=n.memoizedState;_!==St||Z!==ot||Ja||t!==null&&t.dependencies!==null&&cu(t.dependencies)?(typeof A=="function"&&(od(n,a,A,s),ot=n.memoizedState),(ct=Ja||Rg(n,a,ct,s,Z,ot,I)||t!==null&&t.dependencies!==null&&cu(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,ot,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,ot,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),c.props=s,c.state=ot,c.context=I,s=ct):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,Cs(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Vr(n,t.child,null,u),n.child=Vr(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=Aa(t,n,u),t}function Xg(t,n,a,s){return Or(),n.flags|=256,Mn(t,n,a,s),n.child}var dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(t){return{baseLanes:t,cachePool:U0()}}function pd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function kg(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?er(n):nr(),(t=je)?(t=dv(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:qi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},a=E0(t),a.return=n,n.child=a,Tn=n,je=null)):t=null,t===null)throw Za(n);return hh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(nr(),u=n.mode,c=Du({mode:"hidden",children:c},u),s=Lr(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=hd(a),s.childLanes=pd(t,_,a),n.memoizedState=dd,tl(null,s)):(er(n),md(n,c))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return vy(t,n,c,_,s,I,A,a)}return u?(nr(),u=s.fallback,c=n.mode,A=t.child,I=A.sibling,s=xa(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,I!==null?u=xa(I,u):(u=Lr(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,tl(null,s),s=n.child,u=t.child.memoizedState,u===null?u=hd(a):(c=u.cachePool,c!==null?(A=mn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=U0(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=pd(t,_,a),n.memoizedState=dd,tl(t.child,s)):(er(n),a=t.child,t=a.sibling,a=xa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function md(t,n){return n=Du({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Du(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function Nu(t,n,a){return Vr(n,t.child,null,a),t=md(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function vy(t,n,a,s,u,c,_,A){if(a)return n.flags&256?(er(n),n.flags&=-257,Nu(t,n,A)):n.memoizedState!==null?(nr(),n.child=t.child,n.flags|=128,null):(nr(),c=u.fallback,_=n.mode,u=Du({mode:"visible",children:u.children},_),c=Lr(c,_,A,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Vr(n,t.child,null,A),u=n.child,u.memoizedState=hd(A),u.childLanes=pd(t,s,A),n.memoizedState=dd,tl(null,u));if(er(n),hh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Vo({value:u,source:null,stack:null})),Nu(t,n,A)}if(_n||Ir(t,n,A,!1),s=(A&t.childLanes)!==0,_n||s){if(tr.current!==null)return Nu(t,n,A);if(s=Qe,s!==null&&(u=wo(s,A),u!==0&&u!==_.retryLane))throw _.retryLane=u,Ur(t,u),Jn(s,t,u),cd;return dh(c)||Ku(),Nu(t,n,A)}return dh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,je=Ti(c.nextSibling),Tn=n,Se=!0,Ya=null,yi=!1,t!==null&&A0(n,t),n=md(n,u.children),n.flags|=134221824,n)}function Wg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),uu(t.return,n,a)}function qg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&vu(a)===null&&(n=t),t=t.sibling}return n}function Uu(t,n,a,s,u,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=c)}function gd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function _d(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var _=Dn.current;if(n.flags&128)return Qo(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,Qo(n,_),u==="backwards"&&t!==null?(gd(t),Mn(t,n,s,a),gd(t)):Mn(t,n,s,a),s=Se?Go:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,a,n);else if(t.tag===19)Wg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=qg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,gd(n)),Uu(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&vu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Uu(n,!0,a,null,c,s);break;case"together":Uu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=qg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uu(n,!1,u,a,c,s)}return n.child}function Yg(t,n,a){var s=n.pendingProps;return Ka(n,n.type,s.value),Mn(t,n,s.children,a),n.child}function Aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),sr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=xa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=xa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cu(t)))}function Sy(t,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),Ka(n,mn,t.memoizedState.cache),Or();break;case 27:case 5:Pe(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return er(n),n.flags|=128,null;s=Ir(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?kg(t,n,a):(er(n),t=Aa(t,n,a),t!==null?t.sibling:null)}er(n);break;case 19:if(n.flags&128)return _d(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Ir(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return _d(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Qo(n,Dn.current),s)break;return null;case 22:return n.lanes=0,zg(t,n,a,n.pendingProps);case 24:Ka(n,mn,t.memoizedState.cache)}return Aa(t,n,a)}function Zg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!vd(t,a)&&(n.flags&128)===0)return _n=!1,Sy(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,Se&&(n.flags&1048576)!==0&&b0(n,Go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Hr(n.elementType),n.type=t,typeof t=="function")bf(t)?(s=kr(t,s),n.tag=1,n=Vg(null,n,t,s,a)):(n.tag=0,n=fd(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=Pg(null,n,t,s,a);break t}else if(u===at){n.tag=14,n=Ig(null,n,t,s,a);break t}else if(u===tt){n.tag=10,n.type=t,n=Yg(null,n,a);break t}}throw n=Tt(t)||t,Error(r(306,n,""))}}return n;case 0:return fd(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=kr(s,n.pendingProps),Vg(t,n,s,u,a);case 3:t:{if(W(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,zf(t,n),Ko(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Ka(n,mn,s),s!==c.cache&&Uf(n,[mn],a,!0),Zo(),s=_.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Xg(t,n,s,a);break t}else if(s!==u){u=Si(Error(r(424)),n),Vo(u),n=Xg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=Ti(t.firstChild),Tn=n,Se=!0,Ya=null,yi=!0,a=z0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Or(),s===u){n=Aa(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return Cs(t,n),t===null?(a=Sv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=j_(n.type,n.pendingProps,Ie.current,n)):n.memoizedState=Sv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&Se&&(s=n.stateNode=mv(n.type,n.pendingProps,Ie.current),Tn=n,yi=!0,u=je,cr(n.type)?(ph=u,je=Ti(s.firstChild)):je=u),Mn(t,n,n.pendingProps.children,a),Cs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=s=je)&&(s=hE(s,n.type,n.pendingProps,yi),s!==null?(n.stateNode=s,Tn=n,je=Ti(s.firstChild),yi=!1,u=!0):u=!1),u||Za(n)),Pe(n),u=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,s=c.children,rh(u,c)?s=null:_!==null&&rh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=qf(t,n,ly,null,null,a),qs._currentValue=u),Cs(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&Se&&((t=a=je)&&(a=pE(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Tn=n,je=null,t=!0):t=!1),t||Za(n)),null;case 13:return kg(t,n,a);case 4:return W(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Vr(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return Pg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Cs(t,n),Mn(t,n,s,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return Yg(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Br(n),u=Cn(u),s=s(u),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return Ig(t,n,n.type,n.pendingProps,a);case 15:return Bg(t,n,n.type,n.pendingProps,a);case 19:return _d(t,n,a);case 31:return _y(t,n,a);case 22:return zg(t,n,a,n.pendingProps);case 24:return Br(n),s=Cn(mn),t===null?(u=Pf(),u===null&&(u=Qe,c=Lf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},Bf(n),Ka(n,mn,u)):((t.lanes&a)!==0&&(zf(t,n),Ko(n,null,null,a),Zo()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ka(n,mn,s)):(s=c.cache,Ka(n,mn,s),s!==u.cache&&Uf(n,[mn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&ou(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Cs(t,n),Mn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ra(t){t.flags|=4}function Sd(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?Ev(n,s):Ev(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(w_())t.flags|=8192;else throw Gr=pu,If}else t.flags&=-16777217}function Kg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tv(n))if(w_())t.flags|=8192;else throw Gr=pu,If}function Lu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ro():536870912,t.lanes|=n,Ls|=n)}function el(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function xy(t,n,a){var s=n.pendingProps;switch(Cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(mn),an(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ms(n)?Ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Df())),$e(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(Ra(n),c!==null?($e(n),Kg(n,c)):($e(n),Sd(n,u,null,s,a))):c?c!==t.memoizedState?(Ra(n),$e(n),Kg(n,c)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ra(n),$e(n),Sd(n,u,t,s,a)),null;case 27:if(O(n),a=Ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return $e(n),n.subtreeFlags&=-33554433,null}t=Xe.current,Ms(n)?R0(n):(t=mv(u,s,a),n.stateNode=t,Ra(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return $e(n),n.subtreeFlags&=-33554433,null}if(c=Xe.current,Ms(n))R0(n);else{var _=dl(Ie.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}c[b]=n,c[F]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Un(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ra(n)}}return $e(n),n.subtreeFlags&=-33554433,Sd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ra(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ie.current,Ms(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Z_(t.nodeValue,a)),t||Za(n,!0)}else t=dl(t).createTextNode(s),t[b]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Ms(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[b]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return $e(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ms(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[b]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=Df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Lu(n,n.updateQueue),$e(n),null);case 4:return an(),t===null&&th(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return Ea(n.type),$e(n),null;case 19:if(kf(n),s=n.memoizedState,s===null)return $e(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)el(s,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=vu(t),c!==null){for(n.flags|=128,el(s,!1),t=c.updateQueue,n.updateQueue=t,Lu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)y0(a,t),a=a.sibling;return Qo(n,Dn.current&1|2),Se&&Ma(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Vt()>Wu&&(n.flags|=128,u=!0,el(s,!1),n.lanes=4194304)}else{if(!u)if(t=vu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Lu(n,t),el(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!Se)return $e(n),null}else 2*Vt()-s.renderingStartTime>Wu&&a!==536870912&&(n.flags|=128,u=!0,el(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Vt(),t.sibling=null,c=Dn.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Se?Qo(n,c):(a=c,ie(wn,n),ie(Dn,a),In===null&&(In=n)),Se&&Ma(n,s.treeForkCount),t}return $e(n),null;case 22:case 23:return ai(n),Vf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Lu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ee(Fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(mn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(r(156,n.tag))}function My(t,n){switch(Cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ea(mn),an(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));Or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return kf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return an(),null;case 10:return Ea(n.type),null;case 22:case 23:return ai(n),Vf(),t!==null&&ee(Fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ea(mn),null;case 25:return null;default:return null}}function Qg(t,n){switch(Cf(n),n.tag){case 3:Ea(mn),an();break;case 26:case 27:case 5:O(n);break;case 4:an();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:kf(n);break;case 10:Ea(n.type);break;case 22:case 23:ai(n),Vf(),t!==null&&ee(Fr);break;case 24:Ea(mn)}}function nl(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,_=a.inst;s=c(),_.destroy=s}a=a.next}while(a!==u)}}catch(A){We(n,n.return,A)}}function ir(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var _=s.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var I=a,j=A;try{j()}catch(ct){We(u,I,ct)}}}s=s.next}while(s!==c)}}catch(ct){We(n,n.return,ct)}}function Jg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{H0(n,a)}catch(s){We(t,t.return,s)}}}function jg(t,n,a){a.props=kr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){We(t,n,s)}}function Zi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=va(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=rv(c)),s=u.ref;break;case 7:if(t.stateNode===null){var _=new ui(t);g(t.child,!1,fE,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(A){We(t,n,A)}}function Nn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){We(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(t,n,u)}else a.current=null}function Ou(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)fv(t.stateNode,n[a])}function $g(t){for(var n=t.return;n!==null&&(Md(n)&&fv(t.stateNode,n.stateNode),!xd(n));)n=n.return}function il(t){for(var n=t.return;n!==null&&(Md(n)&&dE(t.stateNode,n.stateNode),!xd(n));)n=n.return}function xd(t){return t.tag===5||t.tag===3||t.tag===27}function Md(t){return t&&t.tag===7&&t.stateNode!==null}function yd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){We(t,t.return,u)}}function Ed(t,n,a){try{var s=t.stateNode;Yy(s,t.type,a,n),s[F]=n}catch(u){We(t,t.return,u)}}function t_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&cr(t.type)||t.tag===4}function Td(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||t_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&cr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bd(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Ou(t,s),ve=!0;else if(u!==4&&(u===27&&(Ou(t,s),s=null,cr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(bd(t,n,a,s),t=t.sibling;t!==null;)bd(t,n,a,s),t=t.sibling}function Pu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Ou(t,s),ve=!0;else if(u!==4&&(u===27&&(Ou(t,s),s=null,cr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Pu(t,n,a,s),t=t.sibling;t!==null;)Pu(t,n,a,s),t=t.sibling}function e_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,s,a),n[b]=t,n[F]=a}catch(c){We(t,t.return,c)}}var Iu=!1,ri=null;function n_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Iu=!0)}var Ki=null;function i_(){var t=Ki;return Ki=null,t}var Zn=0;function ws(t,n,a,s,u){return Zn=0,a_(t.child,n,a,s,u)}function a_(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var A=lh(_);s.push(A),A.view&&(c=!0)}else c||lh(_).view&&(c=!0);Iu=!0,iv(_,Zn===0?n:n+"_"+Zn,a),Zn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||a_(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Qi(t,n){for(;t!==null;)t.tag===5?av(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Qi(t.child,n)),t=t.sibling}function Bu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Bu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Sa(n.default,n.share),n!=="none"&&(ws(t,a,n,null,!1)||Qi(t.child,!1))}t=t.sibling}}function Ad(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=va(s,a),c=Sa(s.default,a.paired?s.share:s.enter);c!=="none"?ws(t,u,c,null,!1)?(Bu(t),a.paired||n||Bs(t,s.onEnter)):Qi(t.child,!1):Bu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ad(t,n),t=t.sibling;else Bu(t)}function Rd(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=Sa(a.default,a.share);if(c!=="none"&&(ws(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Bs(t,a.onShare)):Qi(t.child,!1)),n.delete(s),n.size===0)break}}}Rd(t)}t=t.sibling}}}function Cd(t){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode),s=ri!==null?ri.get(a):void 0,u=Sa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(ws(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,ri.delete(a),Bs(t,n.onShare)):Bs(t,n.onExit):Qi(t.child,!1)),ri!==null&&Rd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Cd(t),t=t.sibling;else ri!==null&&Rd(t)}function r_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=va(n,t.stateNode);n=Sa(n.default,n.update),t.flags&=-5,n!=="none"&&ws(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&r_(t);t=t.sibling}}function wd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Qi(t.child,!1))}wd(t)}t=t.sibling}}function zu(t){if(t.tag===30)t.stateNode.paired=null,Qi(t.child,!1),wd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zu(t),t=t.sibling;else wd(t)}function s_(t){for(t=t.child;t!==null;)t.tag===30?Qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&s_(t),t=t.sibling}function Dd(t,n,a,s,u,c,_){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&Zn<c.length){var j=c[Zn],ct=lh(I);(j.view||ct.view)&&(A=!0);var St;if(St=(t.flags&4)===0)if(ct.clip)St=!0;else{St=j.rect;var Z=ct.rect;St=St.y!==Z.y||St.x!==Z.x||St.height!==Z.height||St.width!==Z.width}St&&(t.flags|=4),ct.abs?ct=!j.abs:(j=j.rect,ct=ct.rect,ct=j.height!==ct.height||j.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&iv(I,Zn===0?a:a+"_"+Zn,u),A&&(t.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(I,Zn===0?s:s+"_"+Zn,n.memoizedProps)),Zn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Dd(t,n.child,a,s,u,c,_)&&(A=!0));n=n.sibling}return A}function o_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=va(a,s),c=Sa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var A=t.child;Zn=0,u=Dd(s,A,u,u,c,_,!1),(t.flags&4)!==0&&u&&Bs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&o_(t);t=t.sibling}}var bn=!1,Ge=!1,Ji=!1,Nd=!1,l_=typeof WeakSet=="function"?WeakSet:Set,An=null,ji=!1,al=!1,Fu=!1,Ud=!1;function yy(t,n,a){if(t=t.containerInfo,ih=Ys,t=d0(t),vf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var A=0,I=-1,j=-1,ct=0,St=0,Z=t,ot=null;e:for(;;){for(var Lt;Z!==s||c!==0&&Z.nodeType!==3||(I=A+c),Z!==_||u!==0&&Z.nodeType!==3||(j=A+u),Z.nodeType===3&&(A+=Z.nodeValue.length),(Lt=Z.firstChild)!==null;)ot=Z,Z=Lt;for(;;){if(Z===t)break e;if(ot===s&&++ct===c&&(I=A),ot===_&&++St===u&&(j=A),(Lt=Z.nextSibling)!==null)break;Z=ot,ot=Z.parentNode}Z=Lt}s=I===-1||j===-1?null:{start:I,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(ah={focusedElem:t,selectionRange:s},Ys=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&Cd(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&n_(t),Hu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Cd(s),Hu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&n_(t),Hu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,An=s):(a&&r_(t),Hu(a))}}ri=null}function Hu(t){for(;An!==null;){var n=An,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var _=kr(n.type,u);a=c.getSnapshotBeforeUpdate(_,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){We(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)fh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":fh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=va(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=Sa(u.default,u.update),u!=="none"&&ws(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,An=s;break}An=n.return}}function u_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),s&4&&nl(5,a);break;case 1:if($i(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){We(a,a.return,_)}else{var u=kr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}s&64&&Jg(a),s&512&&Zi(a,a.return);break;case 3:if($i(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{H0(t,n)}catch(_){We(a,a.return,_)}}break;case 27:n===null&&s&4&&e_(a);case 26:case 5:$i(t,a),n===null&&s&4&&yd(a),s&512&&Zi(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),s&4&&h_(t,a);break;case 13:$i(t,a),s&4&&p_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Oy.bind(null,a),mE(t,a))));break;case 22:if(s=a.memoizedState!==null||bn,!s){var c=n!==null&&n.memoizedState!==null||Ge;n=bn,u=Ge,bn=s,(Ge=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ni(t,a,s)):$i(t,a),bn=n,Ge=u}break;case 30:$i(t,a),s&512&&Zi(a,a.return);break;case 7:s&512&&Zi(a,a.return);default:$i(t,a)}}function Ld(t,n){for(t=t.child;t!==null;)c_(t,n),t=t.sibling}function c_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){We(t,t.return,I)}Od(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ve=!0}catch(I){We(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?nv(A,!0):nv(t.stateNode,!1)}catch(I){We(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Ld(t,n);break;default:Ld(t,n)}}function Od(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:c_(a,s);break t;case 22:a.memoizedState===null&&Od(a,s);break t;default:Od(a,s)}}t=t.sibling}}function f_(t){var n=t.alternate;n!==null&&(t.alternate=null,f_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Kn=!1;function wi(t,n,a){for(a=a.child;a!==null;)d_(t,n,a),a=a.sibling}function d_(t,n,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ge||Nn(a,n),wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Nn(a,n),il(a);var s=en,u=Kn;cr(a.type)&&(en=a.stateNode,Kn=!1),wi(t,n,a),gv(a.stateNode,a.type,a.memoizedProps),en=s,Kn=u;break;case 5:Ge||Nn(a,n),il(a);case 6:if(a.tag===6&&il(a),s=en,u=Kn,en=null,wi(t,n,a),en=s,Kn=u,en!==null)if(Kn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ve=!0}catch(c){We(a,n,c)}else try{en.removeChild(a.stateNode),ve=!0}catch(c){We(a,n,c)}break;case 18:en!==null&&(Kn?(t=en,ev(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Zs(t)):ev(en,a.stateNode));break;case 4:s=en,u=Kn,en=a.stateNode.containerInfo,Kn=!0,wi(t,n,a),en=s,Kn=u;break;case 0:case 11:case 14:case 15:ir(2,a,n),Ge||ir(4,a,n),wi(t,n,a);break;case 1:Ge||(Nn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&jg(a,n,s)),wi(t,n,a);break;case 21:wi(t,n,a);break;case 22:Ge=(s=Ge)||a.memoizedState!==null,wi(t,n,a),Ge=s;break;case 30:Nn(a,n),wi(t,n,a);break;case 7:Ge||Nn(a,n),wi(t,n,a);break;default:wi(t,n,a)}}function h_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Zs(t)}catch(a){We(n,n.return,a)}}}function p_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zs(t)}catch(a){We(n,n.return,a)}}function Ey(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new l_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new l_),n;default:throw Error(r(435,t.tag))}}function Gu(t,n){var a=Ey(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Py.bind(null,t,s);s.then(u,u)}})}function kn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],_=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(cr(I.type)){en=I.stateNode,Kn=!1;break t}break;case 5:en=I.stateNode,Kn=!1;break t;case 3:case 4:en=I.stateNode.containerInfo,Kn=!0;break t}I=I.return}if(en===null)throw Error(r(160));d_(_,A,c),en=null,Kn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)m_(n,t,a),n=n.sibling}var Di=null;function m_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var _=s[c];_.ref.impl=_.nextImpl}kn(n,t,a),Wn(t),u&4&&(ir(3,t,t.return),nl(3,t),ir(5,t,t.return));break;case 1:kn(n,t,a),Wn(t),u&512&&(Ge||s===null||Nn(s,s.return)),u&64&&bn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Di,kn(n,t,a),Wn(t),u&512&&(Ge||s===null||Nn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(bn)t.stateNode=j_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Ut]||s[b]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Un(s,n,a),s[b]=t,_e(s),n=s;break t;case"link":if(c=yv("link","href",u).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}s=u.createElement(n),Un(s,n,a),u.head.appendChild(s);break;case"meta":if(c=yv("meta","content",u).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}s=u.createElement(n),Un(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[b]=t,_e(s),n=s}t.stateNode=n}else bn||vh(c,t.type,t.stateNode);else t.stateNode=Mv(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Ge||n.parentNode.removeChild(n)):u.count--,a===null?bn||vh(c,t.type,t.stateNode):Mv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,s.memoizedProps);break;case 27:kn(n,t,a),Wn(t),u&512&&(Ge||s===null||Nn(s,s.return)),s!==null&&u&4&&Ed(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=Ji,Ji=!1,kn(n,t,a),Ji=c,Wn(t),u&512&&(Ge||s===null||Nn(s,s.return)),t.flags&32){n=t.stateNode;try{fs(n,""),ve=!0}catch(ct){We(t,t.return,ct)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Ed(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Nd=!0);break;case 6:if(kn(n,t,a),Wn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ve=!0}catch(ct){We(t,t.return,ct)}}break;case 3:if(ve=!1,nc=null,c=Di,Di=hl(n.containerInfo),kn(n,t,a),Di=c,Wn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Zs(n.containerInfo)}catch(ct){We(t,t.return,ct)}Nd&&(Nd=!1,g_(t)),ve=!1;break;case 4:u=Ji,Ji=bn,s=ze(),c=Di,Di=hl(t.stateNode.containerInfo),kn(n,t,a),Wn(t),Di=c,ve&&al&&(Fu=!0),ve=s,Ji=u;break;case 12:kn(n,t,a),Wn(t);break;case 31:kn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Gu(t,n)));break;case 13:kn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ku=Vt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Gu(t,n)));break;case 22:c=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var A=bn,I=Ge,j=Ji;bn=A||c,Ji=j||c,Ge=I||_,kn(n,t,a),Ge=I,Ji=j,bn=A,Wn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||_||bn||Ge||(n=_||Ge,a=bn,s=Ge,bn=c||bn,Ge=n,ar(t,2),bn=a,Ge=s),!c&&Ji||Ld(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Gu(t,a))));break;case 19:kn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Gu(t,n)));break;case 30:u&512&&(Ge||s===null||Nn(s,s.return)),u=ze(),c=al,_=(a&335544064)===a,A=t.memoizedProps,al=_&&Sa(A.default,A.update)!=="none",kn(n,t,a),Wn(t),_&&s!==null&&ve&&(t.flags|=4),al=c,ve=u;break;case 21:break;case 7:u&512&&(Ge||s===null||Nn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:kn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(t_(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(Md(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(xd(u))break;u=u.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var A=a.stateNode,I=Td(t);Pu(t,I,A,_);break;case 5:var j=a.stateNode;a.flags&32&&(fs(j,""),a.flags&=-33);var ct=Td(t);Pu(t,ct,j,_);break;case 3:case 4:var St=a.stateNode.containerInfo,Z=Td(t);bd(t,Z,St,_);break;default:throw Error(r(161))}}catch(ot){We(t,t.return,ot)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function g_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;g_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ys=!0,n.reset(),Ys=!1),t=t.sibling}}function Ds(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)__(n,t),n=n.sibling;else o_(n)}function __(t,n){var a=t.alternate;if(a===null)Ad(t,!1);else switch(t.tag){case 3:if(Ud=ji=!1,i_(),Ds(n,t),!ji&&!Fu){if(t=Ki,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];av(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ud=!0}Ki=null;break;case 5:Ds(n,t);break;case 4:s=ji,ji=!1,Ds(n,t),ji&&(Fu=!0),ji=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Ad(t,!1):Ds(n,t));break;case 30:s=ji,u=i_(),ji=!1,Ds(n,t),ji&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=va(c,_),_=va(a.memoizedProps,_);var A=Sa(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Zn=0,n=Dd(t,a,n,_,A,c,!0),Zn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Bs(t,t.memoizedProps.onUpdate),Ki=u):u!==null&&(u.push.apply(u,Ki),Ki=u),ji=(t.flags&32)!==0?!0:s;break;default:Ds(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u_(t,n.alternate,n),n=n.sibling}function ar(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ir(4,a,a.return),ar(a,s);break;case 1:Nn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&jg(a,a.return,u),ar(a,s);break;case 27:(s&2)!==0&&gv(a.stateNode,a.type,a.memoizedProps);case 5:Nn(a,a.return),a.tag!==5&&a.tag!==27||il(a),ar(a,s);break;case 6:il(a);break;case 26:Nn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ge||u.parentNode.removeChild(u),ar(a,s);break;case 22:a.memoizedState===null&&ar(a,s);break;case 30:Nn(a,a.return),ar(a,s);break;case 7:Nn(a,a.return);default:ar(a,s)}t=t.sibling}}function Ni(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,_=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ni(u,c,a),nl(4,c);break;case 1:if(Ni(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ct){We(s,s.return,ct)}if(s=c,u=s.updateQueue,u!==null){var I=s.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)F0(j[u],I)}catch(ct){We(s,s.return,ct)}}A&&_&64&&Jg(c),Zi(c,c.return);break;case 27:(a&2)!==0&&e_(c);case 5:c.tag!==5&&c.tag!==27||$g(c),Ni(u,c,a),A&&s===null&&_&4&&yd(c),Zi(c,c.return);break;case 6:$g(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||bn||vh(hl(I.ownerDocument),c.type,I),Ni(u,c,a),A&&s===null&&_&4&&yd(c),Zi(c,c.return);break;case 12:Ni(u,c,a);break;case 31:Ni(u,c,a),A&&_&4&&h_(u,c);break;case 13:Ni(u,c,a),A&&_&4&&p_(u,c);break;case 22:c.memoizedState===null&&Ni(u,c,a),Zi(c,c.return);break;case 30:Ni(u,c,a),Zi(c,c.return);break;case 7:Zi(c,c.return);default:Ni(u,c,a)}n=n.sibling}}function Pd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xo(a))}function Id(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xo(t))}function Ei(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)v_(t,n,a,s),n=n.sibling;else u&&s_(n)}function v_(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&zu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),c&2048&&nl(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),u&&Ud&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Xo(c)));break;case 12:if(c&2048){Ei(t,n,a,s),c=n.stateNode;try{var _=n.memoizedProps,A=_.id,I=_.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){We(n,n.return,j)}}else Ei(t,n,a,s);break;case 31:Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&zu(A),_._visibility&2?Ei(t,n,a,s):rl(t,n)):(u&&A!==null&&A.memoizedState!==null&&zu(n),_._visibility&2?Ei(t,n,a,s):(_._visibility|=2,Ns(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Pd(A,n);break;case 24:Ei(t,n,a,s),c&2048&&Id(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Qi(c.child,!0),Qi(n.child,!0))),Ei(t,n,a,s);break;default:Ei(t,n,a,s)}}function Ns(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,A=a,I=s,j=_.flags;switch(_.tag){case 0:case 11:case 15:Ns(c,_,A,I,u),nl(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?Ns(c,_,A,I,u):rl(c,_):(ct._visibility|=2,Ns(c,_,A,I,u)),u&&j&2048&&Pd(_.alternate,_);break;case 24:Ns(c,_,A,I,u),u&&j&2048&&Id(_.alternate,_);break;default:Ns(c,_,A,I,u)}n=n.sibling}}function rl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:rl(a,s),u&2048&&Pd(s.alternate,s);break;case 24:rl(a,s),u&2048&&Id(s.alternate,s);break;default:rl(a,s)}n=n.sibling}}var Wr=8192;function qr(t,n,a){if(t.subtreeFlags&Wr)for(t=t.child;t!==null;)S_(t,n,a),t=t.sibling}function S_(t,n,a){switch(t.tag){case 26:qr(t,n,a),t.flags&Wr&&(t.memoizedState!==null?wE(a,Di,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Av(a,t)));break;case 5:qr(t,n,a),t.flags&Wr&&(t=t.stateNode,(n&335544128)===n&&Av(a,t));break;case 3:case 4:var s=Di;Di=hl(t.stateNode.containerInfo),qr(t,n,a),Di=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Wr,Wr=16777216,qr(t,n,a),Wr=s):qr(t,n,a));break;case 30:if((t.flags&Wr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,ri===null&&(ri=new Map),ri.set(s,u)}qr(t,n,a);break;default:qr(t,n,a)}}function x_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,y_(s,t)}x_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M_(t),t=t.sibling}function M_(t){switch(t.tag){case 0:case 11:case 15:sl(t),t.flags&2048&&ir(9,t,t.return);break;case 3:sl(t);break;case 12:sl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vu(t)):sl(t);break;default:sl(t)}}function Vu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];An=s,y_(s,t)}x_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ir(8,n,n.return),Vu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vu(n));break;default:Vu(n)}t=t.sibling}}function y_(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:ir(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,An=s;else t:for(a=t;An!==null;){s=An;var u=s.sibling,c=s.return;if(f_(s),s===a){An=null;break t}if(u!==null){u.return=c,An=u;break t}An=c}}}var Ty={getCacheForType:function(t){var n=Cn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(mn).controller.signal}},by=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,ye=null,Ae=0,ke=0,si=null,rr=!1,Us=!1,Bd=!1,Ca=0,cn=0,sr=0,Yr=0,Xu=0,oi=0,Ls=0,ol=null,Qn=null,zd=!1,ku=0,E_=0,Wu=1/0,qu=null,or=null,rn=0,Ui=null,Zr=null,ta=0,Fd=0,Hd=null,T_=null,Os=null,Ps=null,Is=null,ll=0,Yu=null;function li(){return(Fe&2)!==0&&Ae!==0?Ae&-Ae:_t.T!==null?Qd():Wl()}function b_(){if(oi===0)if((Ae&536870912)===0||Se){var t=Rr;Rr<<=1,(Rr&3932160)===0&&(Rr=262144),oi=t}else oi=536870912;return t=wn.current,t!==null&&(t.flags|=32),oi}function Bs(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=rv(va(t.memoizedProps,a))),Ps===null&&(Ps=[]),Ps.push(n.bind(null,s))}}function Jn(t,n,a){(t===Qe&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(zs(t,0),lr(t,Ae,oi,!1)),Xi(t,a),((Fe&2)===0||t!==Qe)&&(t===Qe&&((Fe&2)===0&&(Yr|=a),cn===4&&lr(t,Ae,oi,!1)),ea(t))}function A_(t,n,a){if((Fe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Xa(t,n),u=s?Cy(t,n):Vd(t,n,!0),c=s;do{if(u===0){Us&&!s&&lr(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Ay(a)){u=Vd(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;u=ol;var I=A.current.memoizedState.isDehydrated;if(I&&(zs(A,_).flags|=256),_=Vd(A,_,!1),_!==2&&_!==6){if(Bd&&!I){A.errorRecoveryDisabledLanes|=c,Yr|=c,u=4;break t}c=Qn,Qn=u,c!==null&&(Qn===null?Qn=c:Qn.push.apply(Qn,c))}u=_}if(c=!1,u!==2)continue}}if(u===1){zs(t,0),lr(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:lr(s,n,oi,!rr);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=ku+300-Vt(),10<u)){if(lr(s,n,oi,!rr),Cr(s,0,!0)!==0)break t;ta=n,s.timeoutHandle=oh(R_.bind(null,s,a,Qn,qu,zd,n,oi,Yr,Ls,rr,c,"Throttled",-0,0),u);break t}R_(s,a,Qn,qu,zd,n,oi,Yr,Ls,rr,c,null,-0,0)}}break}while(!0);ea(t)}function R_(t,n,a,s,u,c,_,A,I,j,ct,St,Z,ot){t.timeoutHandle=-1;var Lt=n.subtreeFlags,Kt=(c&335544064)===c;if(St=null,(Kt||Lt&8192||(Lt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},ri=null,S_(n,c,St),Kt&&(Lt=St,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=gl.bind(Lt),Kt.finished.then(Lt,Lt))),Lt=(c&62914560)===c?ku-Vt():(c&4194048)===c?E_-Vt():0,Lt=DE(St,Lt),Lt!==null)){ta=c,t.cancelPendingCommit=Lt(P_.bind(null,t,n,c,a,s,u,_,A,I,j,ct,St,null,Z,ot)),lr(t,c,_,!j);return}P_(t,n,c,a,s,u,_,A,I,j,ct,St)}function Ay(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!ii(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function lr(t,n,a,s){n=Vi(t,n),n&=~Xu,n&=~Yr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-ue(u),_=1<<c;s[c]=-1,u&=~_}a!==0&&wr(t,a,n)}function Zu(){return(Fe&6)===0?(ul(0),!1):!0}function Gd(){if(ye!==null){if(ke===0)var t=ye.return;else t=ye,ya=Pr=null,Kf(t),Ts=null,qo=0,t=ye;for(;t!==null;)Qg(t.alternate,t),t=t.return;ye=null}}function zs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Qy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Gd(),Qe=t,ye=a=xa(t.current,null),Ae=n,ke=0,si=null,rr=!1,Us=Xa(t,n),Bd=!1,Ls=oi=Xu=Yr=sr=cn=0,Qn=ol=null,zd=!1,Ca=Vi(t,n),nu(),a}function C_(t,n){de=null,_t.H=Ru,n===Es||n===hu?(n=P0(),ke=3):n===If?(n=P0(),ke=4):ke=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ye===null&&(cn=1,Cu(t,Si(n,t.current)))}function w_(){var t=wn.current;return t===null?!0:(Ae&4194048)===Ae?In===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===In:!1}function D_(){var t=_t.H;return _t.H=Ru,t===null?Ru:t}function N_(){var t=_t.A;return _t.A=Ty,t}function Ku(){cn=4,rr||(Ae&4194048)!==Ae&&wn.current!==null||(Us=!0),(sr&134217727)===0&&(Yr&134217727)===0||Qe===null||lr(Qe,Ae,oi,!1)}function Vd(t,n,a){var s=Fe;Fe|=2;var u=D_(),c=N_();(Qe!==t||Ae!==n)&&(qu=null,zs(t,n)),n=!1;var _=cn;t:do try{if(ke!==0&&ye!==null){var A=ye,I=si;switch(ke){case 8:Gd(),_=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var j=ke;if(ke=0,si=null,Fs(t,A,I,j),a&&Us){_=0;break t}break;default:j=ke,ke=0,si=null,Fs(t,A,I,j)}}Ry(),_=cn;break}catch(ct){C_(t,ct)}while(!0);return n&&t.shellSuspendCounter++,ya=Pr=null,Fe=s,_t.H=u,_t.A=c,ye===null&&(Qe=null,Ae=0,nu()),_}function Ry(){for(;ye!==null;)U_(ye)}function Cy(t,n){var a=Fe;Fe|=2;var s=D_(),u=N_();Qe!==t||Ae!==n?(qu=null,Wu=Vt()+500,zs(t,n)):Us=Xa(t,n);t:do try{if(ke!==0&&ye!==null){n=ye;var c=si;e:switch(ke){case 1:ke=0,si=null,Fs(t,n,c,1);break;case 2:case 9:if(L0(c)){ke=0,si=null,L_(n);break}n=function(){ke!==2&&ke!==9||Qe!==t||(ke=7),ea(t)},c.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:L0(c)?(ke=0,si=null,L_(n)):(ke=0,si=null,Fs(t,n,c,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var A=ye;if(_?Tv(_):A.stateNode.complete){ke=0,si=null;var I=A.sibling;if(I!==null)ye=I;else{var j=A.return;j!==null?(ye=j,Qu(j)):ye=null}break e}}ke=0,si=null,Fs(t,n,c,5);break;case 6:ke=0,si=null,Fs(t,n,c,6);break;case 8:Gd(),cn=6;break t;default:throw Error(r(462))}}wy();break}catch(ct){C_(t,ct)}while(!0);return ya=Pr=null,_t.H=s,_t.A=u,Fe=a,ye!==null?0:(Qe=null,Ae=0,nu(),cn)}function wy(){for(;ye!==null&&!Pt();)U_(ye)}function U_(t){var n=Zg(t.alternate,t,Ca);t.memoizedProps=t.pendingProps,n===null?Qu(t):ye=n}function L_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Gg(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Gg(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Kf(n);var s=n;s===Tn&&(Se?(lu(s),s.tag===5&&s.stateNode!=null&&(je=s.stateNode)):(lu(s),Se=!0));default:Qg(a,n),n=ye=y0(n,Ca),n=Zg(a,n,Ca)}t.memoizedProps=t.pendingProps,n===null?Qu(t):ye=n}function Fs(t,n,a,s){ya=Pr=null,Kf(n),Ts=null,qo=0;var u=n.return;try{if(gy(t,u,n,a,Ae)){cn=1,Cu(t,Si(a,t.current)),ye=null;return}}catch(c){if(u!==null)throw ye=u,c;cn=1,Cu(t,Si(a,t.current)),ye=null;return}n.flags&32768?(Se||s===1?t=!0:Us||(Ae&536870912)!==0?t=!1:(rr=t=!0,(s===2||s===9||s===3||s===6)&&(s=wn.current,s!==null&&s.tag===13&&(s.flags|=16384))),O_(n,t)):Qu(n)}function Qu(t){var n=t;do{if((n.flags&32768)!==0){O_(n,rr);return}t=n.return;var a=xy(n.alternate,n,Ca);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);cn===0&&(cn=5)}function O_(t,n){do{var a=My(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);cn=6,ye=null}function P_(t,n,a,s,u,c,_,A,I,j,ct,St){t.cancelPendingCommit=null;do Ju();while(rn!==0);if((Fe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Qe&&(ye=Qe=null,Ae=0),Zr=n,Ui=t,ta=a,Hd=u,T_=s,Dy(t,n,a,_,A,I,St)}}function Dy(t,n,a,s,u,c,_){var A=n.lanes|n.childLanes;if(Fd=A,A|=Ef,kl(t,a,A,s,u,c),Ps=null,(a&335544064)===a?(Is=ay(t),s=10262):(Is=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Iy(Ct,function(){return qd(),null})):(t.callbackNode=null,t.callbackPriority=0),Iu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=_t.T,_t.T=null,u=Rt.p,Rt.p=2,c=Fe,Fe|=4;try{yy(t,n,a)}finally{Fe=c,Rt.p=u,_t.T=s}}rn=1,Iu?Os=nE(_,t.containerInfo,Is,Xd,kd,Uy,Wd,qd,Ny):(Xd(),kd(),Wd())}function Ny(t){if(rn!==0){var n=Ui.onRecoverableError;n(t,{componentStack:null})}}function Uy(){rn===3&&(rn=0,__(Zr,Ui),rn=4)}function Xd(){if(rn===1){rn=0;var t=Ui,n=Zr,a=ta,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=_t.T,_t.T=null;var u=Rt.p;Rt.p=2;var c=Fe;Fe|=4;try{al=Fu=!1,m_(n,t,a),a=ah;var _=d0(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&f0(A.ownerDocument.documentElement,A)){if(I!==null&&vf(A)){var j=I.start,ct=I.end;if(ct===void 0&&(ct=j),"selectionStart"in A)A.selectionStart=j,A.selectionEnd=Math.min(ct,A.value.length);else{var St=A.ownerDocument||document,Z=St&&St.defaultView||window;if(Z.getSelection){var ot=Z.getSelection(),Lt=A.textContent.length,Kt=Math.min(I.start,Lt),he=I.end===void 0?Kt:Math.min(I.end,Lt);!ot.extend&&Kt>he&&(_=he,he=Kt,Kt=_);var J=c0(A,Kt),H=c0(A,he);if(J&&H&&(ot.rangeCount!==1||ot.anchorNode!==J.node||ot.anchorOffset!==J.offset||ot.focusNode!==H.node||ot.focusOffset!==H.offset)){var it=St.createRange();it.setStart(J.node,J.offset),ot.removeAllRanges(),Kt>he?(ot.addRange(it),ot.extend(H.node,H.offset)):(it.setEnd(H.node,H.offset),ot.addRange(it))}}}}for(St=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&St.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Ys=!!ih,ah=ih=null}finally{Fe=c,Rt.p=u,_t.T=s}}t.current=n,rn=2}}function kd(){if(rn===2){rn=0;var t=Ui,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var s=Rt.p;Rt.p=2;var u=Fe;Fe|=4;try{u_(t,n.alternate,n)}finally{Fe=u,Rt.p=s,_t.T=a}}rn=3}}function Wd(){if(rn===4||rn===3){rn=0;var t=Os;Os=null,Ot();var n=Ui,a=Zr,s=ta,u=T_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?rn=5:(rn=0,Zr=Ui=null,I_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(or=null),No(s),a=a.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=_t.T,c=Rt.p,Rt.p=2,_t.T=null;try{for(var _=n.onRecoverableError,A=0;A<u.length;A++){var I=u[A];_(I.value,{componentStack:I.stack})}}finally{_t.T=a,Rt.p=c}}if(u=Ps,_=Is,Is=null,u!==null&&(Ps=null,_===null&&(_=[]),t!==null))for(I=0;I<u.length;I++)a=(0,u[I])(_),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&Ju(),ea(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Yu?ll++:(ll=0,Yu=n):(ll=0,Yu=null),ul(0)}}function I_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xo(n)))}function Ju(){return Os!==null&&(Os.skipTransition(),Os=null),Xd(),kd(),Wd(),qd()}function qd(){if(rn!==5)return!1;var t=Ui,n=Fd;Fd=0;var a=No(ta),s=_t.T,u=Rt.p;try{Rt.p=32>a?32:a,_t.T=null,a=Hd,Hd=null;var c=Ui,_=ta;if(rn=0,Zr=Ui=null,ta=0,(Fe&6)!==0)throw Error(r(331));var A=Fe;if(Fe|=4,M_(c.current),v_(c,c.current,_,a),Fe=A,ul(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Jt,c)}catch{}return!0}finally{Rt.p=u,_t.T=s,I_(t,n)}}function B_(t,n,a){n=Si(a,n),n=ud(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(Xi(t,2),ea(t))}function We(t,n,a){if(t.tag===3)B_(t,t,a);else for(;n!==null;){if(n.tag===3){B_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(or===null||!or.has(s))){t=Si(a,t),a=Lg(2),s=$a(n,a,2),s!==null&&(Og(a,s,n,t),Xi(s,2),ea(s));break}}n=n.return}}function Yd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new by;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Bd=!0,u.add(a),t=Ly.bind(null,t,n,a),n.then(t,t))}function Ly(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Ae&a)===a&&((cn===4||cn===3&&(Ae&62914560)===Ae&&300>Vt()-ku)&&(Fe&2)===0?zs(t,0):Xu|=a,Ls===Ae&&(Ls=0)),ea(t)}function z_(t,n){n===0&&(n=Ro()),t=Ur(t,n),t!==null&&(Xi(t,n),ea(t))}function Oy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),z_(t,a)}function Py(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),z_(t,a)}function Iy(t,n){return wt(t,n)}var Hs=null,Gs=null,Zd=!1,ju=!1,Kd=!1,ur=0;function ea(t){t!==Gs&&t.next===null&&(Gs===null?Hs=Gs=t:Gs=Gs.next=t),ju=!0,Zd||(Zd=!0,zy())}function ul(t,n){if(!Kd&&ju){Kd=!0;do for(var a=!1,s=Hs;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var _=s.suspendedLanes,A=s.pingedLanes;c=(1<<31-ue(42|t)+1)-1,c&=u&~(_&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,V_(s,c))}else c=Ae,c=Cr(s,s===Qe?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Xa(s,c)||(a=!0,V_(s,c));s=s.next}while(a);Kd=!1}}function By(){F_()}function F_(){ju=Zd=!1;var t=0;ur!==0&&Ky()&&(t=ur);for(var n=Vt(),a=null,s=Hs;s!==null;){var u=s.next,c=H_(s,n);c===0?(s.next=null,a===null?Hs=u:a.next=u,u===null&&(Gs=a)):(a=s,(t!==0||(c&3)!==0)&&(ju=!0)),s=u}rn!==0&&rn!==5||ul(t),ur!==0&&(ur=0)}function H_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-ue(c),A=1<<_,I=u[_];I===-1?((A&a)===0||(A&s)!==0)&&(u[_]=Ao(A,n)):I<=n&&(t.expiredLanes|=A),c&=~A}if(n=Qe,a=Ae,a=Cr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Xa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),No(a)){case 2:case 8:a=k;break;case 32:a=Ct;break;case 268435456:a=Nt;break;default:a=Ct}return s=G_.bind(null,t),a=wt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function G_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ju()&&t.callbackNode!==a)return null;var s=Ae;return s=Cr(t,t===Qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(A_(t,s,n),H_(t,Vt()),t.callbackNode!=null&&t.callbackNode===a?G_.bind(null,t):null)}function V_(t,n){if(Ju())return null;A_(t,n,!0)}function zy(){Jy(function(){(Fe&6)!==0?wt(le,By):F_()})}function Qd(){if(ur===0){var t=zr;t===0&&(t=ls,ls<<=1,(ls&261888)===0&&(ls=256)),ur=t}return ur}function X_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zl(t)}function Fy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=X_((u[F]||null).action),_=s.submitter;_&&(n=(n=_[F]||null)?X_(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var A=new jl("action","action",null,s,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ur!==0){var I=new FormData(u,_);ad(a,{pending:!0,data:I,method:u.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(u,_),ad(a,{pending:!0,data:I,method:u.method,action:c},c,I))},currentTarget:u}]})}}for(var Jd=0;Jd<yf.length;Jd++){var jd=yf[Jd],Hy=jd.toLowerCase(),Gy=jd[0].toUpperCase()+jd.slice(1);Ci(Hy,"on"+Gy)}Ci(m0,"onAnimationEnd"),Ci(g0,"onAnimationIteration"),Ci(_0,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(QM,"onTransitionRun"),Ci(JM,"onTransitionStart"),Ci(jM,"onTransitionCancel"),Ci(v0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function k_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var _=s.length-1;0<=_;_--){var A=s[_],I=A.instance,j=A.currentTarget;if(A=A.listener,I!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=j;try{c(u)}catch(ct){eu(ct)}u.currentTarget=null,c=I}else for(_=0;_<s.length;_++){if(A=s[_],I=A.instance,j=A.currentTarget,A=A.listener,I!==c&&u.isPropagationStopped())break t;c=A,u.currentTarget=j;try{c(u)}catch(ct){eu(ct)}u.currentTarget=null,c=I}}}}function Ee(t,n){var a=n[rt];a===void 0&&(a=n[rt]=new Set);var s=t+"__bubble";a.has(s)||(W_(n,t,2,!1),a.add(s))}function $d(t,n,a){var s=0;n&&(s|=4),W_(a,t,s,n)}var $u="_reactListening"+Math.random().toString(36).slice(2);function th(t){if(!t[$u]){t[$u]=!0,He.forEach(function(a){a!=="selectionchange"&&(Vy.has(a)||$d(a,!1,t),$d(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$u]||(n[$u]=!0,$d("selectionchange",!1,n))}}function W_(t,n,a,s){switch(Ov(n)){case 2:var u=OE;break;case 8:u=PE;break;default:u=xh}a=u.bind(null,n,a,t),u=void 0,!lf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function eh(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var A=s.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=s.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=re(A),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){s=c=_;continue t}A=A.parentNode}}s=s.return}Wm(function(){var j=c,ct=sf(a),St=[];t:{var Z=S0.get(t);if(Z!==void 0){var ot=jl,Lt=t;switch(t){case"keypress":if(Ql(a)===0)break t;case"keydown":case"keyup":ot=AM;break;case"focusin":Lt="focus",ot=df;break;case"focusout":Lt="blur",ot=df;break;case"beforeblur":case"afterblur":ot=df;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=pM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=NM;break;case m0:case g0:case _0:ot=_M;break;case v0:ot=LM;break;case"scroll":case"scrollend":ot=dM;break;case"wheel":ot=PM;break;case"copy":case"cut":case"paste":ot=SM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Qm;break;case"submit":ot=wM;break;case"toggle":case"beforetoggle":ot=BM}var Kt=(n&4)!==0,he=!Kt&&(t==="scroll"||t==="scrollend"),J=Kt?Z!==null?Z+"Capture":null:Z;Kt=[];for(var H=j,it;H!==null;){var vt=H;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||J===null||(vt=Uo(H,J),vt!=null&&Kt.push(fl(H,vt,it))),he)break;H=H.return}0<Kt.length&&(Z=new ot(Z,Lt,null,a,ct),St.push({event:Z,listeners:Kt}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",ot&&a!==rf&&(Lt=a.relatedTarget||a.fromElement)&&(re(Lt)||Lt[ft]))break t;(Z||ot)&&(Lt=ct.window===ct?ct:(ot=ct.ownerDocument)?ot.defaultView||ot.parentWindow:window,Z?(ot=a.relatedTarget||a.toElement,Z=j,ot=ot?re(ot):null,ot!==null&&(he=f(ot),Kt=ot.tag,ot!==he||Kt!==5&&Kt!==27&&Kt!==6)&&(ot=null)):(Z=null,ot=j),Z!==ot&&(Kt=Zm,vt="onMouseLeave",J="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Qm,vt="onPointerLeave",J="onPointerEnter",H="pointer"),he=Z==null?Lt:kt(Z),it=ot==null?Lt:kt(ot),Lt=new Kt(vt,H+"leave",Z,a,ct),Lt.target=he,Lt.relatedTarget=it,vt=null,re(ct)===j&&(Kt=new Kt(J,H+"enter",ot,a,ct),Kt.target=it,Kt.relatedTarget=he,vt=Kt),he=vt,Kt=Z&&ot?U(Z,ot,Xy):null,Z!==null&&q_(St,Lt,Z,Kt,!1),ot!==null&&he!==null&&q_(St,he,ot,Kt,!0)))}t:{if(Z=j?kt(j):window,ot=Z.nodeName&&Z.nodeName.toLowerCase(),ot==="select"||ot==="input"&&Z.type==="file")var Wt=a0;else if(n0(Z))if(r0)Wt=YM;else{Wt=WM;var Re=kM}else ot=Z.nodeName,!ot||ot.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?j&&af(j.elementType)&&(Wt=a0):Wt=qM;if(Wt&&(Wt=Wt(t,j))){i0(St,Wt,a,ct);break t}Re&&Re(t,Z,j)}switch(Re=j?kt(j):window,t){case"focusin":(n0(Re)||Re.contentEditable==="true")&&(ms=Re,Sf=j,Ho=null);break;case"focusout":Ho=Sf=ms=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,h0(St,a,ct);break;case"selectionchange":if(KM)break;case"keydown":case"keyup":h0(St,a,ct)}var te;if(pf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ps?t0(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Jm&&a.locale!=="ko"&&(ps||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ps&&(te=qm()):(ka=ct,uf="value"in ka?ka.value:ka.textContent,ps=!0)),Re=tc(j,ae),0<Re.length&&(ae=new Km(ae,t,null,a,ct),St.push({event:ae,listeners:Re}),te?ae.data=te:(te=e0(a),te!==null&&(ae.data=te)))),(te=FM?HM(t,a):GM(t,a))&&(ae=tc(j,"onBeforeInput"),0<ae.length&&(Re=new Km("onBeforeInput","beforeinput",null,a,ct),St.push({event:Re,listeners:ae}),Re.data=te)),Fy(St,t,j,a,ct)}k_(St,n)})}function fl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tc(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=Uo(t,a),u!=null&&s.unshift(fl(t,u,c)),u=Uo(t,n),u!=null&&s.push(fl(t,u,c))),t.tag===3)return s;t=t.return}return[]}function Xy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function q_(t,n,a,s,u){for(var c=n._reactName,_=[];a!==null&&a!==s;){var A=a,I=A.alternate,j=A.stateNode;if(A=A.tag,I!==null&&I===s)break;A!==5&&A!==26&&A!==27||j===null||(I=j,u?(j=Uo(a,c),j!=null&&_.unshift(fl(a,j,I))):u||(j=Uo(a,c),j!=null&&_.push(fl(a,j,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var ky=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function Y_(t){return(typeof t=="string"?t:""+t).replace(ky,`
`).replace(Wy,"")}function Z_(t,n){return n=Y_(n),Y_(t)===n}function qe(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||fs(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&fs(t,""+s);else return;break;case"className":ni(t,"class",s);break;case"tabIndex":ni(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,s);break;case"style":Xm(t,s,c);return;case"data":if(n!=="object"){ni(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Zl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&qe(t,n,"name",u.name,u,null),qe(t,n,"formEncType",u.formEncType,u,null),qe(t,n,"formMethod",u.formMethod,u,null),qe(t,n,"formTarget",u.formTarget,u,null)):(qe(t,n,"encType",u.encType,u,null),qe(t,n,"method",u.method,u,null),qe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Zl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wi);return;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Zl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Je(t,"popover",s);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Je(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=cM.get(a)||a,Je(t,a,s);else return}ve=!0}function nh(t,n,a,s,u,c){switch(a){case"style":Xm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")fs(t,s);else if(typeof s=="number"||typeof s=="bigint")fs(t,""+s);else return;break;case"onScroll":s!=null&&Ee("scroll",t);return;case"onScrollEnd":s!=null&&Ee("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!xn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[F]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}ve=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Je(t,a,s)}return}ve=!0}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qe(t,n,c,_,a,null)}}u&&qe(t,n,"srcSet",a.srcSet,a,null),s&&qe(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var A=c=_=u=null,I=null,j=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":_=ct;break;case"checked":I=ct;break;case"defaultChecked":j=ct;break;case"value":c=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:qe(t,n,s,ct,a,null)}}Fm(t,c,A,I,j,_,u,!1);return;case"select":Ee("invalid",t),s=_=c=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":c=A;break;case"defaultValue":_=A;break;case"multiple":s=A;default:qe(t,n,u,A,a,null)}n=c,a=_,t.multiple=!!s,n!=null?cs(t,!!s,n,!1):a!=null&&cs(t,!!s,a,!0);return;case"textarea":Ee("invalid",t),c=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":s=A;break;case"defaultValue":u=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:qe(t,n,_,A,a,null)}Gm(t,s,u,c);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":qe(t,n,I,s,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(s=0;s<cl.length;s++)Ee(cl[s],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(s=a[j],s!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qe(t,n,j,s,a,null)}return;default:if(af(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&nh(t,n,ct,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&qe(t,n,A,s,a,null))}var qy={};function Yy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,_=null,A=null,I=null,j=null,ct=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=St;default:s.hasOwnProperty(ot)||qe(t,n,ot,null,s,St)}}for(var Z in s){var ot=s[Z];if(St=a[Z],s.hasOwnProperty(Z)&&(ot!=null||St!=null))switch(Z){case"type":ot!==St&&(ve=!0),c=ot;break;case"name":ot!==St&&(ve=!0),u=ot;break;case"checked":ot!==St&&(ve=!0),j=ot;break;case"defaultChecked":ot!==St&&(ve=!0),ct=ot;break;case"value":ot!==St&&(ve=!0),_=ot;break;case"defaultValue":ot!==St&&(ve=!0),A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==St&&qe(t,n,Z,ot,s,St)}}ef(t,_,A,I,j,ct,c,u);return;case"select":ot=_=A=Z=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":ot=I;default:s.hasOwnProperty(c)||qe(t,n,c,null,s,I)}for(u in s)if(c=s[u],I=a[u],s.hasOwnProperty(u)&&(c!=null||I!=null))switch(u){case"value":c!==I&&(ve=!0),Z=c;break;case"defaultValue":c!==I&&(ve=!0),A=c;break;case"multiple":c!==I&&(ve=!0),_=c;default:c!==I&&qe(t,n,u,c,s,I)}n=A,a=_,s=ot,Z!=null?cs(t,!!a,Z,!1):!!s!=!!a&&(n!=null?cs(t,!!a,n,!0):cs(t,!!a,a?[]:"",!1));return;case"textarea":ot=Z=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(t,n,A,null,s,u)}for(_ in s)if(u=s[_],c=a[_],s.hasOwnProperty(_)&&(u!=null||c!=null))switch(_){case"value":u!==c&&(ve=!0),Z=u;break;case"defaultValue":u!==c&&(ve=!0),ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&qe(t,n,_,u,s,c)}Hm(t,Z,ot);return;case"option":for(var Lt in a)Z=a[Lt],a.hasOwnProperty(Lt)&&Z!=null&&!s.hasOwnProperty(Lt)&&(Lt==="selected"?t.selected=!1:qe(t,n,Lt,null,s,Z));for(I in s)Z=s[I],ot=a[I],s.hasOwnProperty(I)&&Z!==ot&&(Z!=null||ot!=null)&&(I==="selected"?(Z!==ot&&(ve=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol"):qe(t,n,I,Z,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)Z=a[Kt],a.hasOwnProperty(Kt)&&Z!=null&&!s.hasOwnProperty(Kt)&&qe(t,n,Kt,null,s,Z);for(j in s)if(Z=s[j],ot=a[j],s.hasOwnProperty(j)&&Z!==ot&&(Z!=null||ot!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,n));break;default:qe(t,n,j,Z,s,ot)}return;default:if(af(n)){for(var he in a)Z=a[he],a.hasOwnProperty(he)&&Z!==void 0&&!s.hasOwnProperty(he)&&nh(t,n,he,void 0,s,Z);for(ct in s)Z=s[ct],ot=a[ct],!s.hasOwnProperty(ct)||Z===ot||Z===void 0&&ot===void 0||nh(t,n,ct,Z,s,ot);return}}for(var J in a)Z=a[J],a.hasOwnProperty(J)&&Z!=null&&!s.hasOwnProperty(J)&&qe(t,n,J,null,s,Z);for(St in s)Z=s[St],ot=a[St],!s.hasOwnProperty(St)||Z===ot||Z==null&&ot==null||qe(t,n,St,Z,s,ot)}function K_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,_=u.initiatorType,A=u.duration;if(c&&A&&K_(_)){for(_=0,A=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],j=I.startTime;if(j>A)break;var ct=I.transferSize,St=I.initiatorType;ct&&K_(St)&&(I=I.responseEnd,_+=ct*(I<A?1:(A-j)/(I-j)))}if(--s,n+=8*(c+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ih=null,ah=null;function dl(t){return t.nodeType===9?t:t.ownerDocument}function Q_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function j_(t,n,a,s){return a=dl(a).createElement(t),a[b]=s,a[F]=n,Un(a,t,n),_e(a),a}function rh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sh=null;function Ky(){var t=window.event;return t&&t.type==="popstate"?t===sh?!1:(sh=t,!0):(sh=null,!1)}var oh=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,$_=typeof Promise=="function"?Promise:void 0,tv=typeof requestAnimationFrame=="function"?requestAnimationFrame:oh,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof $_<"u"?function(t){return $_.resolve(null).then(t).catch(jy)}:oh;function jy(t){setTimeout(function(){throw t})}function cr(t){return t==="head"}function ev(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Zs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")mh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,mh(a);for(var c=a.firstChild;c;){var _=c.nextSibling,A=c.nodeName;c[Ut]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&mh(t.ownerDocument.body);a=u}while(a);Zs(n)}function nv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function iv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function av(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function $y(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function lh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return $y(n,a,t)}function tE(t){return t.documentElement.clientHeight}function eE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function nE(t,n,a,s,u,c,_,A,I){var j=n.nodeType===9?n:n.ownerDocument;try{var ct=j.startViewTransition({update:function(){var Z=j.defaultView,ot=Z.navigation&&Z.navigation.transition,Lt=j.fonts.status;s();var Kt=[];if(Lt==="loaded"&&(tE(j),j.fonts.status==="loading"&&Kt.push(j.fonts.ready)),Lt=Kt.length,t!==null)for(var he=t.suspenseyImages,J=0,H=0;H<he.length;H++){var it=he[H];if(!it.complete){var vt=it.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<Z.innerHeight&&vt.left<Z.innerWidth){if(J+=bv(it),J>ic){Kt.length=Lt;break}it=new Promise(eE.bind(it)),Kt.push(it)}}}if(0<Kt.length)return Z=Promise.race([Promise.all(Kt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(u,u),(ot?Promise.allSettled([ot.finished,Z]):Z).then(c,c);if(u(),ot)return ot.finished.then(c,c);c()},types:a});j.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var Z=j.documentElement.getAnimations({subtree:!0}),ot=0;ot<Z.length;ot++){var Lt=Z[ot],Kt=Lt.effect,he=Kt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){St.push(Lt),Lt=Kt.getKeyframes();for(var J=he=void 0,H=!0,it=0;it<Lt.length;it++){var vt=Lt[it],Wt=vt.width;if(he===void 0)he=Wt;else if(he!==Wt){H=!1;break}if(Wt=vt.height,J===void 0)J=Wt;else if(J!==Wt){H=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}H&&he!==void 0&&J!==void 0&&(Kt.setKeyframes(Lt),H=getComputedStyle(Kt.target,Kt.pseudoElement),H.width!==he||H.height!==J)&&(H=Lt[0],H.width=he,H.height=J,H=Lt[Lt.length-1],H.width=he,H.height=J,Kt.setKeyframes(Lt))}}_()},function(Z){j.__reactViewTransition===ct&&(j.__reactViewTransition=null);try{typeof Z=="object"&&Z!==null&&Z.name==="InvalidStateError"&&(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null),Z!==null&&I(Z)}finally{s(),u(),_()}}),ct.finished.finally(function(){for(var Z=0;Z<St.length;Z++)St[Z].cancel();j.__reactViewTransition===ct&&(j.__reactViewTransition=null),A()}),ct}catch{return s(),u(),_(),null}}function Kr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Kr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:D({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Kr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Kr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function rv(t){return{name:t,group:new Kr("group",t),imagePair:new Kr("image-pair",t),old:new Kr("old",t),new:new Kr("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(ov(c,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(u=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Vs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),g(this._fragmentFiber.child,!1,iE,t,A,s)}this._eventListeners=c}};function iE(t,n,a,s){return M(t).addEventListener(n,a,s),!1}ui.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=ov(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Vs(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,aE,t,a,u),s.splice(n,1),c!==null&&c()}};function aE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Vs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function sv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function ov(t,n,a,s){if(t.length===0)return-1;s=sv(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&sv(c.optionsOrUseCapture)===s)return u}return-1}ui.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Vs(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Vs(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){g(this._fragmentFiber.child,!0,lv,t,void 0,void 0)};function lv(t,n){return t.tag===6?!1:(t=M(t),gE(t,n))}ui.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,uh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!lv(n[a],t);a--);};function uh(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=dl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,rE,t,void 0,void 0))};function rE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,sE,t,void 0,void 0)};function sE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,oE,t,void 0,void 0);for(var a=n=0;a<Li.length;a++){var s=Li[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Li[n++]=s}Li.length=n}};function oE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Li=[],ch=!1;function lE(t,n,a){Li.push({fragmentInstance:t,observer:n,instance:a}),ch||(ch=!0,_E(function(){ch=!1;var s=Li;Li=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,uE,t,void 0,void 0),t};function uE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,uh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var c=y(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=u.compareDocumentPosition(t),I=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||cE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function cE(t,n,a,s,u){var c=re(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=v(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=U(a,c,N),n===null?n=!1:(g(n,!0,G,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=U(s,c,N),n===null?n=!1:(g(n,!0,C,c,s),c=x,P=x=null,n=c!==null)),n):!1}function uv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,uh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=R(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),uv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),uv(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function fE(t,n){return t=M(t),cv(t,n),!1}function cv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function fv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Vs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,A=0;A<Li.length;A++){var I=Li[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Li[_++]=I)}Li.length=_,c.observe(t)}),cv(t,n))}function dE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Vs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?lE(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function fh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fh(a),Zt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hE(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ut])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function pE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function dv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function dh(t){return t.data==="$?"||t.data==="$~"}function hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function mE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ph=null;function hv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ti(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function pv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function gE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function _E(t){tv(function(){tv(function(n){return t(n)})})}function mv(t,n,a){switch(n=dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function gv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&qe(t,n,s,null,qy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wi&&(t.onclick=null),Zt(t)}function mh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zt(t)}var bi=new Map,_v=new Set;function hl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var wa=Rt.d;Rt.d={f:vE,r:SE,D:xE,C:ME,L:yE,m:EE,X:bE,S:TE,M:AE};function vE(){var t=wa.f(),n=Zu();return t||n}function SE(t){var n=ce(t);n!==null&&n.tag===5&&n.type==="form"?Sg(n):wa.r(t)}var Xs=typeof document>"u"?null:document;function vv(t,n,a){var s=Xs;if(s&&typeof n=="string"&&n){var u=_i(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_v.has(u)||(_v.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Un(n,"link",t),_e(n),s.head.appendChild(n)))}}function xE(t){wa.D(t),vv("dns-prefetch",t,null)}function ME(t,n){wa.C(t,n),vv("preconnect",t,n)}function yE(t,n,a){wa.L(t,n,a);var s=Xs;if(s&&t&&n){var u='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_i(a.imageSizes)+'"]')):u+='[href="'+_i(t)+'"]';var c=u;switch(n){case"style":c=ks(t);break;case"script":c=Ws(t)}if(!(bi.has(c)||(t=D({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(pl(c))||n==="script"&&s.querySelector(ml(c))))){var _=s.createElement("link");Un(_,"link",t),n==="style"&&(_[qt]=!0,_.onload=_.onerror=function(){Ze(_)}),_e(_),s.head.appendChild(_)}}}function EE(t,n){wa.m(t,n);var a=Xs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_i(s)+'"][href="'+_i(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ws(t)}if(!bi.has(c)&&(t=D({rel:"modulepreload",href:t},n),bi.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(c)))return}s=a.createElement("link"),Un(s,"link",t),_e(s),a.head.appendChild(s)}}}function TE(t,n,a){wa.S(t,n,a);var s=Xs;if(s&&t){var u=Me(s).hoistableStyles,c=ks(t);n=n||"default";var _=u.get(c);if(!_){var A={loading:0,preload:null};if(_=s.querySelector(pl(c)))A.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(c))&&gh(t,a);var I=_=s.createElement("link");_e(I),Un(I,"link",t),I._p=new Promise(function(j,ct){I.onload=j,I.onerror=ct}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ec(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(c,_)}}}function bE(t,n){wa.X(t,n);var a=Xs;if(a&&t){var s=Me(a).hoistableScripts,u=Ws(t),c=s.get(u);c||(c=a.querySelector(ml(u)),c||(t=D({src:t,async:!0},n),(n=bi.get(u))&&_h(t,n),c=a.createElement("script"),_e(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function AE(t,n){wa.M(t,n);var a=Xs;if(a&&t){var s=Me(a).hoistableScripts,u=Ws(t),c=s.get(u);c||(c=a.querySelector(ml(u)),c||(t=D({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&_h(t,n),c=a.createElement("script"),_e(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function Sv(t,n,a,s){var u=(u=Ie.current)?hl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=ks(a.href),n=Me(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ks(a.href);var c=Me(u).hoistableStyles,_=c.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=u.querySelector(pl(t)))?c._p||(_.instance=c,_.state.loading=5):(c=bi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,c)),RE(u,t,c,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ws(a),n=Me(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ks(t){return'href="'+_i(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function xv(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function RE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[qt]=!0,n.onload=n.onerror=Ze.bind(null,n),Un(n,"link",a),_e(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ws(t){return'[src="'+_i(t)+'"]'}function ml(t){return"script[async]"+t}function Mv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+_i(a.href)+'"]');if(s)return n.instance=s,_e(s),s;var u=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),_e(s),Un(s,"style",u),ec(s,a.precedence,t),n.instance=s;case"stylesheet":u=ks(a.href);var c=t.querySelector(pl(u));if(c)return n.state.loading|=4,n.instance=c,_e(c),c;s=xv(a),(u=bi.get(u))&&gh(s,u),c=(t.ownerDocument||t).createElement("link"),_e(c);var _=c;return _._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Un(c,"link",s),n.state.loading|=4,ec(c,a.precedence,t),n.instance=c;case"script":return c=Ws(a.src),(u=t.querySelector(ml(c)))?(n.instance=u,_e(u),u):(s=a,(u=bi.get(c))&&(s=D({},a),_h(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),_e(u),Un(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ec(s,a.precedence,t));return n.instance}function ec(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,_=0;_<s.length;_++){var A=s[_];if(A.dataset.precedence===n)c=A;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function gh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nc=null;function yv(t,n,a){if(nc===null){var s=new Map,u=nc=new Map;u.set(a,s)}else u=nc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Ut]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var A=s.get(_);A?A.push(c):s.set(_,[c])}}return s}function vh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function CE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ev(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Tv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function bv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Av(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=bv(n),t.suspenseyImages.push(n)),t=NE.bind(t),n.decode().then(t,t))}function wE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ks(s.href),c=n.querySelector(pl(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,_e(c);return}c=n.ownerDocument||n,s=xv(s),(u=bi.get(u))&&gh(s,u),c=c.createElement("link"),_e(c);var _=c;_._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Un(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ic=0;function DE(t,n){return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ic===0&&(ic=62500*Zy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ic?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Rv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)rc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function gl(){this.count--,Rv(this)}function NE(){this.imgCount--,Rv(this)}var ac=null;function rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,n.forEach(UE,t),ac=null,gl.call(t))}function UE(t,n){if(!(n.state.loading&4)){var a=ac.get(t);if(a)var s=a.get(null);else{a=new Map,ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var _=u[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),c=a.get(_)||s,c===s&&a.set(null,u),a.set(_,u),this.count++,s=gl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var qs={$$typeof:tt,Provider:null,Consumer:null,_currentValue:Ve,_currentValue2:Ve,_threadCount:0};function LE(t,n,a,s,u,c,_,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=us(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=us(0),this.hiddenUpdates=us(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Cv(t,n,a,s,u,c,_,A,I,j,ct,St){return t=new LE(t,n,a,_,I,j,ct,St,A),n=1,c===!0&&(n|=24),c=Yn(3,null,null,n),t.current=c,c.stateNode=t,n=Lf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},Bf(c),t}function wv(t){return t?(t=vs,t):vs}function Dv(t,n,a,s,u,c){u=wv(u),s.context===null?s.context=u:s.pendingContext=u,s=ja(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=$a(t,s,n),a!==null&&(Jn(a,t,n),Yo(a,t,n))}function Nv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sh(t,n){Nv(t,n),(t=t.alternate)&&Nv(t,n)}function Uv(t){if(t.tag===13||t.tag===31){var n=Ur(t,67108864);n!==null&&Jn(n,t,67108864),Sh(t,67108864)}}function Lv(t){if(t.tag===13||t.tag===31){var n=li();n=Do(n);var a=Ur(t,n);a!==null&&Jn(a,t,n),Sh(t,n)}}var Ys=!0;function OE(t,n,a,s){var u=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=2,xh(t,n,a,s)}finally{Rt.p=c,_t.T=u}}function PE(t,n,a,s){var u=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=8,xh(t,n,a,s)}finally{Rt.p=c,_t.T=u}}function xh(t,n,a,s){if(Ys){var u=Mh(s);if(u===null)eh(t,n,s,sc,a),Pv(t,s);else if(BE(u,t,n,a,s))s.stopPropagation();else if(Pv(t,s),n&4&&-1<IE.indexOf(t)){for(;u!==null;){var c=ce(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=ma(c.pendingLanes);if(_!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var I=1<<31-ue(_);A.entanglements[1]|=I,_&=~I}ea(c),(Fe&6)===0&&(Wu=Vt()+500,ul(0))}}break;case 31:case 13:A=Ur(c,2),A!==null&&Jn(A,c,2),Zu(),Sh(c,2)}if(c=Mh(s),c===null&&eh(t,n,s,sc,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else eh(t,n,s,null,a)}}function Mh(t){return t=sf(t),yh(t)}var sc=null;function yh(t){if(sc=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function Ov(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case le:return 2;case k:return 8;case Ct:case xt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var Eh=!1,fr=null,dr=null,hr=null,_l=new Map,vl=new Map,pr=[],IE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(t,n){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":_l.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function Sl(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ce(n),n!==null&&Uv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function BE(t,n,a,s,u){switch(n){case"focusin":return fr=Sl(fr,t,n,a,s,u),!0;case"dragenter":return dr=Sl(dr,t,n,a,s,u),!0;case"mouseover":return hr=Sl(hr,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return _l.set(c,Sl(_l.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,vl.set(c,Sl(vl.get(c)||null,t,n,a,s,u)),!0}return!1}function Iv(t){var n=re(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ql(t.priority,function(){Lv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ql(t.priority,function(){Lv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Mh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);rf=s,a.target.dispatchEvent(s),rf=null}else return n=ce(a),n!==null&&Uv(n),t.blockedOn=a,!1;n.shift()}return!0}function Bv(t,n,a){oc(t)&&a.delete(n)}function zE(){Eh=!1,fr!==null&&oc(fr)&&(fr=null),dr!==null&&oc(dr)&&(dr=null),hr!==null&&oc(hr)&&(hr=null),_l.forEach(Bv),vl.forEach(Bv)}function lc(t,n){t.blockedOn===n&&(t.blockedOn=null,Eh||(Eh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zE)))}var uc=null;function zv(t){uc!==t&&(uc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===t&&(uc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(yh(s||a)===null)continue;break}var c=ce(a);c!==null&&(t.splice(n,3),n-=3,ad(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Zs(t){function n(I){return lc(I,t)}fr!==null&&lc(fr,t),dr!==null&&lc(dr,t),hr!==null&&lc(hr,t),_l.forEach(n),vl.forEach(n);for(var a=0;a<pr.length;a++){var s=pr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Iv(a),a.blockedOn===null&&pr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],_=u[F]||null;if(typeof c=="function")_||zv(a);else if(_){var A=null;if(c&&c.hasAttribute("formAction")){if(u=c,_=c[F]||null)A=_.formAction;else if(yh(u)!==null)continue}else A=_.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),zv(a)}}}function Fv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Th(t){this._internalRoot=t}cc.prototype.render=Th.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=li();Dv(a,s,t,n,null,null)},cc.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dv(t.current,2,null,t,null,null),Zu(),n[ft]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Wl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<pr.length&&n!==0&&n<pr[a].priority;a++);pr.splice(a,0,t),a===0&&Iv(t)}};var Hv=e.version;if(Hv!=="19.3.0")throw Error(r(527,Hv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var FE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{Jt=fc.inject(FE),Ht=fc}catch{}}return Ml.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=wg,c=Dg,_=Ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Cv(t,1,!1,null,null,a,s,null,u,c,_,Fv),t[ft]=n.current,th(t),new Th(n)},Ml.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=wg,_=Dg,A=Ng,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Cv(t,1,!0,n,a??null,s,u,I,c,_,A,Fv),n.context=wv(null),a=n.current,s=li(),s=Do(s),u=ja(s),u.callback=null,$a(a,u,s),a=s,n.current.lanes=a,Xi(n,a),ea(n),t[ft]=n.current,th(t),new cc(n)},Ml.version="19.3.0",Ml}var Qv;function ZE(){if(Qv)return Rh.exports;Qv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Rh.exports=YE(),Rh.exports}var KE=ZE();const mm="186",QE=0,Jv=1,JE=2,Ic=1,jE=2,Dl=3,pi=0,$n=1,Ia=2,za=0,Ul=1,jv=2,$v=3,tS=4,$E=5,uo=100,tT=101,eT=102,nT=103,iT=104,aT=200,rT=201,sT=202,oT=203,vx=204,Sx=205,lT=206,uT=207,cT=208,fT=209,dT=210,hT=211,pT=212,mT=213,gT=214,dp=0,hp=1,pp=2,Ol=3,mp=4,gp=5,_p=6,vp=7,xx=0,_T=1,vT=2,la=0,Mx=1,yx=2,Ex=3,Tx=4,bx=5,Ax=6,Rx=7,Cx=300,as=301,go=302,Nh=303,Uh=304,Qc=306,Sp=1e3,Ba=1001,xp=1002,On=1003,ST=1004,dc=1005,Fn=1006,Lh=1007,ns=1008,hi=1009,wx=1010,Dx=1011,Pl=1012,gm=1013,ca=1014,sa=1015,fa=1016,_m=1017,vm=1018,Il=1020,Nx=35902,Ux=35899,Lx=1021,Ox=1022,zi=1023,Ga=1026,is=1027,Px=1028,Sm=1029,rs=1030,xm=1031,Mm=1033,Bc=33776,zc=33777,Fc=33778,Hc=33779,Mp=35840,yp=35841,Ep=35842,Tp=35843,bp=36196,Ap=37492,Rp=37496,Cp=37488,wp=37489,Xc=37490,Dp=37491,Np=37808,Up=37809,Lp=37810,Op=37811,Pp=37812,Ip=37813,Bp=37814,zp=37815,Fp=37816,Hp=37817,Gp=37818,Vp=37819,Xp=37820,kp=37821,Wp=36492,qp=36494,Yp=36495,Zp=36283,Kp=36284,kc=36285,Qp=36286,xT=3200,Jp=0,MT=1,Er="",di="srgb",Wc="srgb-linear",qc="linear",Ye="srgb",Oh=7680,yT=519,ET=512,TT=513,bT=514,ym=515,AT=516,RT=517,Em=518,CT=519,wT=35044,eS="300 es",oa=2e3,Bl=2001;function DT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function NT(){const o=Yc("canvas");return o.style.display="block",o}const nS={};function iS(...o){const e="THREE."+o.shift();console.log(e,...o)}function Ix(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=Ix(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Be(...o){o=Ix(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function fo(...o){const e=o.join(" ");e in nS||(nS[e]=!0,oe(...o))}function UT(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const LT={[dp]:hp,[pp]:_p,[mp]:vp,[Ol]:gp,[hp]:dp,[_p]:pp,[vp]:mp,[gp]:Ol};class ss{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,d=l.length;f<d;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=Math.PI/180,jp=180/Math.PI;function Fl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function OT(o,e){return(o%e+e)%e}function Ih(o,e,i){return(1-i)*o+i*e}function yl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lm=class Lm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ne(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*r-d*l+e.x,this.y=f*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lm.prototype.isVector2=!0;let Oe=Lm;class dn{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,d,h){let p=r[l+0],m=r[l+1],S=r[l+2],g=r[l+3],v=f[d+0],y=f[d+1],R=f[d+2],w=f[d+3];if(g!==w||p!==v||m!==y||S!==R){let M=p*v+m*y+S*R+g*w;M<0&&(v=-v,y=-y,R=-R,w=-w,M=-M);let x=1-h;if(M<.9995){const P=Math.acos(M),G=Math.sin(P);x=Math.sin(x*P)/G,h=Math.sin(h*P)/G,p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+w*h}else{p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+w*h;const P=1/Math.sqrt(p*p+m*m+S*S+g*g);p*=P,m*=P,S*=P,g*=P}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,f,d){const h=r[l],p=r[l+1],m=r[l+2],S=r[l+3],g=f[d],v=f[d+1],y=f[d+2],R=f[d+3];return e[i]=h*R+S*g+p*y-m*v,e[i+1]=p*R+S*v+m*g-h*y,e[i+2]=m*R+S*y+h*v-p*g,e[i+3]=S*R-h*g-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),S=h(l/2),g=h(f/2),v=p(r/2),y=p(l/2),R=p(f/2);switch(d){case"XYZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"YXZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"ZXY":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"ZYX":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"YZX":this._x=v*S*g+m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g-v*y*R;break;case"XZY":this._x=v*S*g-m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g+v*y*R;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],g=i[10],v=r+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(S-p)*y,this._y=(f-m)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(S-p)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(f+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(f-m)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(p+S)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(f+m)/y,this._y=(p+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=r*S+d*h+l*m-f*p,this._y=l*S+d*p+f*h-r*m,this._z=f*S+d*m+r*p-l*h,this._w=d*S-r*h-l*p-f*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Om=class Om{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(aS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(aS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,d=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*d,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*d,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),S=2*(h*i-f*l),g=2*(f*r-d*i);return this.x=i+p*m+d*g-h*S,this.y=r+p*S+h*m-f*g,this.z=l+p*g+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-f*h,this.y=f*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ne(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Om.prototype.isVector3=!0;let $=Om;const Bh=new $,aS=new dn,Pm=class Pm{constructor(e,i,r,l,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,p,m)}set(e,i,r,l,f,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=f,S[5]=p,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],S=r[4],g=r[7],v=r[2],y=r[5],R=r[8],w=l[0],M=l[3],x=l[6],P=l[1],G=l[4],C=l[7],N=l[2],U=l[5],D=l[8];return f[0]=d*w+h*P+p*N,f[3]=d*M+h*G+p*U,f[6]=d*x+h*C+p*D,f[1]=m*w+S*P+g*N,f[4]=m*M+S*G+g*U,f[7]=m*x+S*C+g*D,f[2]=v*w+y*P+R*N,f[5]=v*M+y*G+R*U,f[8]=v*x+y*C+R*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-r*f*S+r*h*p+l*f*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=S*d-h*m,v=h*p-S*f,y=m*f-d*p,R=i*g+r*v+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=g*w,e[1]=(l*m-S*r)*w,e[2]=(h*r-l*d)*w,e[3]=v*w,e[4]=(S*i-l*p)*w,e[5]=(l*f-h*i)*w,e[6]=y*w,e[7]=(r*p-m*i)*w,e[8]=(d*i-r*f)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zh.makeScale(e,i)),this}rotate(e){return fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zh.makeRotation(-e)),this}translate(e,i){return fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pm.prototype.isMatrix3=!0;let fe=Pm;const zh=new fe,rS=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sS=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const o={enabled:!0,workingColorSpace:Wc,spaces:{},convert:function(l,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ye&&(l.r=Fa(l.r),l.g=Fa(l.g),l.b=Fa(l.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ye&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Er?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,d){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Wc]:{primaries:e,whitePoint:r,transfer:qc,toXYZ:rS,fromXYZ:sS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Ye,toXYZ:rS,fromXYZ:sS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const De=PT();function Fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ks;class IT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=Yc("canvas")),Ks.width=e.width,Ks.height=e.height;const l=Ks.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let d=0;d<f.length;d++)f[d]=Fa(f[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Fa(i[r]/255)*255):i[r]=Fa(i[r]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BT=0;class Tm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Fl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?f.push(Fh(l[d].image)):f.push(Fh(l[d]))}else f=Fh(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Fh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?IT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let zT=0;const Hh=new $;class Hn extends ss{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Ba,l=Ba,f=Fn,d=ns,h=zi,p=hi,m=Hn.DEFAULT_ANISOTROPY,S=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=Fl(),this.name="",this.source=new Tm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sp:e.x=e.x-Math.floor(e.x);break;case Ba:e.x=e.x<0?0:1;break;case xp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sp:e.y=e.y-Math.floor(e.y);break;case Ba:e.y=e.y<0?0:1;break;case xp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Cx;Hn.DEFAULT_ANISOTROPY=1;const Im=class Im{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*f,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*f,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*f,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const p=e.elements,m=p[0],S=p[4],g=p[8],v=p[1],y=p[5],R=p[9],w=p[2],M=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(g-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(g+w)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(m+1)/2,C=(y+1)/2,N=(x+1)/2,U=(S+v)/4,D=(g+w)/4,T=(R+M)/4;return G>C&&G>N?G<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(G),l=U/r,f=D/r):C>N?C<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(C),r=U/l,f=T/l):N<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(N),r=D/f,l=T/f),this.set(r,l,f,i),this}let P=Math.sqrt((M-R)*(M-R)+(g-w)*(g-w)+(v-S)*(v-S));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(g-w)/P,this.z=(v-S)/P,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ne(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Im.prototype.isVector4=!0;let sn=Im;class FT extends ss{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},f=new Hn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Tm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends FT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Bx extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HT extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Kc=class Kc{constructor(e,i,r,l,f,d,h,p,m,S,g,v,y,R,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,d,h,p,m,S,g,v,y,R,w,M)}set(e,i,r,l,f,d,h,p,m,S,g,v,y,R,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=g,x[14]=v,x[3]=y,x[7]=R,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Qs.setFromMatrixColumn(e,0).length(),f=1/Qs.setFromMatrixColumn(e,1).length(),d=1/Qs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),S=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const v=d*S,y=d*g,R=h*S,w=h*g;i[0]=p*S,i[4]=-p*g,i[8]=m,i[1]=y+R*m,i[5]=v-w*m,i[9]=-h*p,i[2]=w-v*m,i[6]=R+y*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,y=p*g,R=m*S,w=m*g;i[0]=v+w*h,i[4]=R*h-y,i[8]=d*m,i[1]=d*g,i[5]=d*S,i[9]=-h,i[2]=y*h-R,i[6]=w+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,y=p*g,R=m*S,w=m*g;i[0]=v-w*h,i[4]=-d*g,i[8]=R+y*h,i[1]=y+R*h,i[5]=d*S,i[9]=w-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,y=d*g,R=h*S,w=h*g;i[0]=p*S,i[4]=R*m-y,i[8]=v*m+w,i[1]=p*g,i[5]=w*m+v,i[9]=y*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*S,i[4]=w-v*g,i[8]=R*g+y,i[1]=g,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=y*g+R,i[10]=v-w*g}else if(e.order==="XZY"){const v=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*S,i[4]=-g,i[8]=m*S,i[1]=v*g+w,i[5]=d*S,i[9]=y*g-R,i[2]=R*g-y,i[6]=h*S,i[10]=w*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GT,e,VT)}lookAt(e,i,r){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),gr.crossVectors(r,ci),gr.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),gr.crossVectors(r,ci)),gr.normalize(),hc.crossVectors(ci,gr),l[0]=gr.x,l[4]=hc.x,l[8]=ci.x,l[1]=gr.y,l[5]=hc.y,l[9]=ci.y,l[2]=gr.z,l[6]=hc.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],S=r[1],g=r[5],v=r[9],y=r[13],R=r[2],w=r[6],M=r[10],x=r[14],P=r[3],G=r[7],C=r[11],N=r[15],U=l[0],D=l[4],T=l[8],L=l[12],V=l[1],z=l[5],Y=l[9],nt=l[13],K=l[2],tt=l[6],q=l[10],X=l[14],ut=l[3],at=l[7],ht=l[11],yt=l[15];return f[0]=d*U+h*V+p*K+m*ut,f[4]=d*D+h*z+p*tt+m*at,f[8]=d*T+h*Y+p*q+m*ht,f[12]=d*L+h*nt+p*X+m*yt,f[1]=S*U+g*V+v*K+y*ut,f[5]=S*D+g*z+v*tt+y*at,f[9]=S*T+g*Y+v*q+y*ht,f[13]=S*L+g*nt+v*X+y*yt,f[2]=R*U+w*V+M*K+x*ut,f[6]=R*D+w*z+M*tt+x*at,f[10]=R*T+w*Y+M*q+x*ht,f[14]=R*L+w*nt+M*X+x*yt,f[3]=P*U+G*V+C*K+N*ut,f[7]=P*D+G*z+C*tt+N*at,f[11]=P*T+G*Y+C*q+N*ht,f[15]=P*L+G*nt+C*X+N*yt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],g=e[6],v=e[10],y=e[14],R=e[3],w=e[7],M=e[11],x=e[15],P=p*y-m*v,G=h*y-m*g,C=h*v-p*g,N=d*y-m*S,U=d*v-p*S,D=d*g-h*S;return i*(w*P-M*G+x*C)-r*(R*P-M*N+x*U)+l*(R*G-w*N+x*D)-f*(R*C-w*U+M*D)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-r*(f*S-h*p)+l*(f*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=e[9],v=e[10],y=e[11],R=e[12],w=e[13],M=e[14],x=e[15],P=i*h-r*d,G=i*p-l*d,C=i*m-f*d,N=r*p-l*h,U=r*m-f*h,D=l*m-f*p,T=S*w-g*R,L=S*M-v*R,V=S*x-y*R,z=g*M-v*w,Y=g*x-y*w,nt=v*x-y*M,K=P*nt-G*Y+C*z+N*V-U*L+D*T;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/K;return e[0]=(h*nt-p*Y+m*z)*tt,e[1]=(l*Y-r*nt-f*z)*tt,e[2]=(w*D-M*U+x*N)*tt,e[3]=(v*U-g*D-y*N)*tt,e[4]=(p*V-d*nt-m*L)*tt,e[5]=(i*nt-l*V+f*L)*tt,e[6]=(M*C-R*D-x*G)*tt,e[7]=(S*D-v*C+y*G)*tt,e[8]=(d*Y-h*V+m*T)*tt,e[9]=(r*V-i*Y-f*T)*tt,e[10]=(R*U-w*C+x*P)*tt,e[11]=(g*C-S*U-y*P)*tt,e[12]=(h*L-d*z-p*T)*tt,e[13]=(i*z-r*L+l*T)*tt,e[14]=(w*G-R*N-M*P)*tt,e[15]=(S*N-g*G+v*P)*tt,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,d=e.x,h=e.y,p=e.z,m=f*d,S=f*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+r,S*p-l*d,0,m*p-l*h,S*p+l*d,f*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,d){return this.set(1,r,f,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,S=d+d,g=h+h,v=f*m,y=f*S,R=f*g,w=d*S,M=d*g,x=h*g,P=p*m,G=p*S,C=p*g,N=r.x,U=r.y,D=r.z;return l[0]=(1-(w+x))*N,l[1]=(y+C)*N,l[2]=(R-G)*N,l[3]=0,l[4]=(y-C)*U,l[5]=(1-(v+x))*U,l[6]=(M+P)*U,l[7]=0,l[8]=(R+G)*D,l[9]=(M-P)*D,l[10]=(1-(v+w))*D,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const f=this.determinantAffine();if(f===0)return r.set(1,1,1),i.identity(),this;let d=Qs.set(l[0],l[1],l[2]).length();const h=Qs.set(l[4],l[5],l[6]).length(),p=Qs.set(l[8],l[9],l[10]).length();f<0&&(d=-d),Oi.copy(this);const m=1/d,S=1/h,g=1/p;return Oi.elements[0]*=m,Oi.elements[1]*=m,Oi.elements[2]*=m,Oi.elements[4]*=S,Oi.elements[5]*=S,Oi.elements[6]*=S,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,i.setFromRotationMatrix(Oi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,f,d,h=oa,p=!1){const m=this.elements,S=2*f/(i-e),g=2*f/(r-l),v=(i+e)/(i-e),y=(r+l)/(r-l);let R,w;if(p)R=f/(d-f),w=d*f/(d-f);else if(h===oa)R=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(h===Bl)R=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,f,d,h=oa,p=!1){const m=this.elements,S=2/(i-e),g=2/(r-l),v=-(i+e)/(i-e),y=-(r+l)/(r-l);let R,w;if(p)R=1/(d-f),w=d/(d-f);else if(h===oa)R=-2/(d-f),w=-(d+f)/(d-f);else if(h===Bl)R=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=R,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Kc.prototype.isMatrix4=!0;let nn=Kc;const Qs=new $,Oi=new nn,GT=new $(0,0,0),VT=new $(1,1,1),gr=new $,hc=new $,ci=new $,oS=new nn,lS=new dn;class Gi{constructor(e=0,i=0,r=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return oS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return lS.setFromEuler(this),this.setFromQuaternion(lS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let XT=0;const uS=new $,Js=new dn,Da=new nn,pc=new $,El=new $,kT=new $,WT=new dn,cS=new $(1,0,0),fS=new $(0,1,0),dS=new $(0,0,1),hS={type:"added"},qT={type:"removed"},js={type:"childadded",child:null},Gh={type:"childremoved",child:null};class Pn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new $,i=new Gi,r=new dn,l=new $(1,1,1);function f(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new fe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Js.setFromAxisAngle(e,i),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,i){return Js.setFromAxisAngle(e,i),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(cS,e)}rotateY(e){return this.rotateOnAxis(fS,e)}rotateZ(e){return this.rotateOnAxis(dS,e)}translateOnAxis(e,i){return uS.copy(e).applyQuaternion(this.quaternion),this.position.add(uS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(cS,e)}translateY(e){return this.translateOnAxis(fS,e)}translateZ(e){return this.translateOnAxis(dS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?pc.copy(e):pc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(El,pc,this.up):Da.lookAt(pc,El,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),Js.setFromRotationMatrix(Da),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hS),js.child=e,this.dispatchEvent(js),js.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qT),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hS),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,d=l.length;f<d;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,kT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,WT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*r-f[8]*l,f[13]+=r-f[1]*i-f[5]*r-f[9]*l,f[14]+=l-f[2]*i-f[6]*r-f[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const g=p[m];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(e.materials,this.material[p]));l.material=h}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),g=d(e.shapes),v=d(e.skeletons),y=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Pn.DEFAULT_UP=new $(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),x=this._getHandJoint(m,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=S.position.distanceTo(g.position),y=.02,R=.005;m.inputState.pinching&&v>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=OT(e,1),i=Ne(i,0,1),r=Ne(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,d=2*r-f;this.r=Xh(d,f,e+1/3),this.g=Xh(d,f,e),this.b=Xh(d,f,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function r(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=Fx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return De.workingToColorSpace(zn.copy(this),e),Math.round(Ne(zn.r*255,0,255))*65536+Math.round(Ne(zn.g*255,0,255))*256+Math.round(Ne(zn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,f=zn.b,d=Math.max(r,l,f),h=Math.min(r,l,f);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=S<=.5?g/(d+h):g/(2-d-h),d){case r:p=(l-f)/g+(l<f?6:0);break;case l:p=(f-r)/g+2;break;case f:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=di){De.workingToColorSpace(zn.copy(this),e);const i=zn.r,r=zn.g,l=zn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+i,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(_r),e.getHSL(gc);const r=Ih(_r.h,gc.h,i),l=Ih(_r.s,gc.s,i),f=Ih(_r.l,gc.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Le;Le.NAMES=Fx;class ZT extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new $,Na=new $,kh=new $,Ua=new $,$s=new $,to=new $,pS=new $,Wh=new $,qh=new $,Yh=new $,Zh=new sn,Kh=new sn,Qh=new sn;class Bi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Pi.subVectors(e,i),l.cross(Pi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Pi.subVectors(l,i),Na.subVectors(r,i),kh.subVectors(e,i);const d=Pi.dot(Pi),h=Pi.dot(Na),p=Pi.dot(kh),m=Na.dot(Na),S=Na.dot(kh),g=d*m-h*h;if(g===0)return f.set(0,0,0),null;const v=1/g,y=(m*p-h*S)*v,R=(d*S-h*p)*v;return f.set(1-y-R,R,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,r,l,f,d,h,p){return this.getBarycoord(e,i,r,l,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ua.x),p.addScaledVector(d,Ua.y),p.addScaledVector(h,Ua.z),p)}static getInterpolatedAttribute(e,i,r,l,f,d){return Zh.setScalar(0),Kh.setScalar(0),Qh.setScalar(0),Zh.fromBufferAttribute(e,i),Kh.fromBufferAttribute(e,r),Qh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Zh,f.x),d.addScaledVector(Kh,f.y),d.addScaledVector(Qh,f.z),d}static isFrontFacing(e,i,r,l){return Pi.subVectors(r,i),Na.subVectors(e,i),Pi.cross(Na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Pi.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let d,h;$s.subVectors(l,r),to.subVectors(f,r),Wh.subVectors(e,r);const p=$s.dot(Wh),m=to.dot(Wh);if(p<=0&&m<=0)return i.copy(r);qh.subVectors(e,l);const S=$s.dot(qh),g=to.dot(qh);if(S>=0&&g<=S)return i.copy(l);const v=p*g-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(r).addScaledVector($s,d);Yh.subVectors(e,f);const y=$s.dot(Yh),R=to.dot(Yh);if(R>=0&&y<=R)return i.copy(f);const w=y*m-p*R;if(w<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(r).addScaledVector(to,h);const M=S*R-y*g;if(M<=0&&g-S>=0&&y-R>=0)return pS.subVectors(f,l),h=(g-S)/(g-S+(y-R)),i.copy(l).addScaledVector(pS,h);const x=1/(M+w+v);return d=w*x,h=v*x,i.copy(r).addScaledVector($s,d).addScaledVector(to,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ii.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ii.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ii.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ii):Ii.fromBufferAttribute(f,d),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const l=e.children;for(let f=0,d=l.length;f<d;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),vc.subVectors(this.max,Tl),eo.subVectors(e.a,Tl),no.subVectors(e.b,Tl),io.subVectors(e.c,Tl),vr.subVectors(no,eo),Sr.subVectors(io,no),Qr.subVectors(eo,io);let i=[0,-vr.z,vr.y,0,-Sr.z,Sr.y,0,-Qr.z,Qr.y,vr.z,0,-vr.x,Sr.z,0,-Sr.x,Qr.z,0,-Qr.x,-vr.y,vr.x,0,-Sr.y,Sr.x,0,-Qr.y,Qr.x,0];return!Jh(i,eo,no,io,vc)||(i=[1,0,0,0,1,0,0,0,1],!Jh(i,eo,no,io,vc))?!1:(Sc.crossVectors(vr,Sr),i=[Sc.x,Sc.y,Sc.z],Jh(i,eo,no,io,vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const La=[new $,new $,new $,new $,new $,new $,new $,new $],Ii=new $,_c=new Hl,eo=new $,no=new $,io=new $,vr=new $,Sr=new $,Qr=new $,Tl=new $,vc=new $,Sc=new $,Jr=new $;function Jh(o,e,i,r,l){for(let f=0,d=o.length-3;f<=d;f+=3){Jr.fromArray(o,f);const h=l.x*Math.abs(Jr.x)+l.y*Math.abs(Jr.y)+l.z*Math.abs(Jr.z),p=e.dot(Jr),m=i.dot(Jr),S=r.dot(Jr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const Sn=new $,xc=new Oe;let KT=0;class Ha extends ss{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=wT,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=yl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=yl(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=yl(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=yl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=yl(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),f=jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hx extends Ha{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Gx extends Ha{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Hi extends Ha{constructor(e,i,r){super(new Float32Array(e),i,r)}}const QT=new Hl,bl=new $,jh=new $;class bm{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):QT.setFromPoints(e).getCenter(r);let l=0;for(let f=0,d=e.length;f<d;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const i=bl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(bl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(jh)),this.expandByPoint(bl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let JT=0;const Ai=new nn,$h=new Pn,ao=new $,fi=new Hl,Al=new Hl,Rn=new $;class ha extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DT(e)?Gx:Hx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new fe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,r){return Ai.makeTranslation(e,i,r),this.applyMatrix4(Ai),this}scale(e,i,r){return Ai.makeScale(e,i,r),this.applyMatrix4(Ai),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Hi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];Al.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(fi.min,Al.min),fi.expandByPoint(Rn),Rn.addVectors(fi.max,Al.max),fi.expandByPoint(Rn)):(fi.expandByPoint(Al.min),fi.expandByPoint(Al.max))}fi.getCenter(r);let l=0;for(let f=0,d=e.count;f<d;f++)Rn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)Rn.fromBufferAttribute(h,m),p&&(ao.fromBufferAttribute(e,m),Rn.add(ao)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Ha(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<r.count;T++)h[T]=new $,p[T]=new $;const m=new $,S=new $,g=new $,v=new Oe,y=new Oe,R=new Oe,w=new $,M=new $;function x(T,L,V){m.fromBufferAttribute(r,T),S.fromBufferAttribute(r,L),g.fromBufferAttribute(r,V),v.fromBufferAttribute(f,T),y.fromBufferAttribute(f,L),R.fromBufferAttribute(f,V),S.sub(m),g.sub(m),y.sub(v),R.sub(v);const z=1/(y.x*R.y-R.x*y.y);isFinite(z)&&(w.copy(S).multiplyScalar(R.y).addScaledVector(g,-y.y).multiplyScalar(z),M.copy(g).multiplyScalar(y.x).addScaledVector(S,-R.x).multiplyScalar(z),h[T].add(w),h[L].add(w),h[V].add(w),p[T].add(M),p[L].add(M),p[V].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,L=P.length;T<L;++T){const V=P[T],z=V.start,Y=V.count;for(let nt=z,K=z+Y;nt<K;nt+=3)x(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const G=new $,C=new $,N=new $,U=new $;function D(T){N.fromBufferAttribute(l,T),U.copy(N);const L=h[T];G.copy(L),G.sub(N.multiplyScalar(N.dot(L))).normalize(),C.crossVectors(U,L);const z=C.dot(p[T])<0?-1:1;d.setXYZW(T,G.x,G.y,G.z,z)}for(let T=0,L=P.length;T<L;++T){const V=P[T],z=V.start,Y=V.count;for(let nt=z,K=z+Y;nt<K;nt+=3)D(e.getX(nt+0)),D(e.getX(nt+1)),D(e.getX(nt+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ha(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new $,f=new $,d=new $,h=new $,p=new $,m=new $,S=new $,g=new $;if(e)for(let v=0,y=e.count;v<y;v+=3){const R=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,R),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),S.subVectors(d,f),g.subVectors(l,f),S.cross(g),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),h.add(S),p.add(S),m.add(S),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,f),g.subVectors(l,f),S.cross(g),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,g=h.normalized,v=new m.constructor(p.length*S);let y=0,R=0;for(let w=0,M=p.length;w<M;w++){h.isInterleavedBufferAttribute?y=p[w]*h.data.stride+h.offset:y=p[w]*S;for(let x=0;x<S;x++)v[R++]=m[y++]}return new Ha(v,S,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ha,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let S=0,g=m.length;S<g;S++){const v=m[S],y=e(v,r);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];S.push(y.toJSON(e.data))}S.length>0&&(l[p]=S,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],g=f[m];for(let v=0,y=g.length;v<y;v++)S.push(g[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tp=new $,jT=new $,$T=new fe;class yr{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=tp.subVectors(r,i).cross(jT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(tp),f=this.normal.dot(l);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||$T.getNormalMatrix(e),l=this.coplanarPoint(tp).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let t1=0;class Gl extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=Ul,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vx,this.blendDst=Sx,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oh,this.stencilZFail=Oh,this.stencilZPass=Oh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=l(e.textures),d=l(e.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new yr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Oe().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oa=new $,ep=new $,Mc=new $,yc=new $;class e1{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ep.copy(e).add(i).multiplyScalar(.5),Mc.copy(i).sub(e).normalize(),yc.copy(this.origin).sub(ep);const f=e.distanceTo(i)*.5,d=-this.direction.dot(Mc),h=yc.dot(this.direction),p=-yc.dot(Mc),m=yc.lengthSq(),S=Math.abs(1-d*d);let g,v,y,R;if(S>0)if(g=d*p-h,v=d*h-p,R=f*S,g>=0)if(v>=-R)if(v<=R){const w=1/S;g*=w,v*=w,y=g*(g+d*v+2*h)+v*(d*g+v+2*p)+m}else v=f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v=-f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v<=-R?(g=Math.max(0,-(-d*f+h)),v=g>0?-f:Math.min(Math.max(-f,-p),f),y=-g*g+v*(v+2*p)+m):v<=R?(g=0,v=Math.min(Math.max(-f,-p),f),y=v*(v+2*p)+m):(g=Math.max(0,-(d*f+h)),v=g>0?f:Math.min(Math.max(-f,-p),f),y=-g*g+v*(v+2*p)+m);else v=d>0?-f:f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ep).addScaledVector(Mc,v),y}intersectSphere(e,i){if(e.radius<0)return null;Oa.subVectors(e.center,this.origin);const r=Oa.dot(this.direction),l=Oa.dot(Oa)-r*r,f=e.radius*e.radius;if(l>f)return null;const d=Math.sqrt(f-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),S>=0?(f=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(f=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),r>d||f>l||((f>r||isNaN(r))&&(r=f),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,i,r,l,f){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,g=e.x-d.x,v=e.y-d.y,y=e.z-d.z,R=i.x-d.x,w=i.y-d.y,M=i.z-d.z,x=r.x-d.x,P=r.y-d.y,G=r.z-d.z,C=Math.abs(p),N=Math.abs(m),U=Math.abs(S);let D,T,L,V,z,Y,nt,K,tt,q,X,ut;if(C>=N&&C>=U?(L=p,Y=g,tt=R,ut=x,p>=0?(D=m,T=S,V=v,z=y,nt=w,K=M,q=P,X=G):(D=S,T=m,V=y,z=v,nt=M,K=w,q=G,X=P)):N>=U?(L=m,Y=v,tt=w,ut=P,m>=0?(D=S,T=p,V=y,z=g,nt=M,K=R,q=G,X=x):(D=p,T=S,V=g,z=y,nt=R,K=M,q=x,X=G)):(L=S,Y=y,tt=M,ut=G,S>=0?(D=p,T=m,V=g,z=v,nt=R,K=w,q=x,X=P):(D=m,T=p,V=v,z=g,nt=w,K=R,q=P,X=x)),L===0)return null;const at=D/L,ht=T/L,yt=1/L,Qt=V-at*Y,Yt=z-ht*Y,B=nt-at*tt,mt=K-ht*tt,At=q-at*ut,Q=X-ht*ut,dt=At*mt-Q*B,Tt=Qt*Q-Yt*At,It=B*Yt-mt*Qt;if(l){if(dt<0||Tt<0||It<0)return null}else if((dt<0||Tt<0||It<0)&&(dt>0||Tt>0||It>0))return null;const _t=dt+Tt+It;if(_t===0)return null;const Rt=yt*(dt*Y+Tt*tt+It*ut);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ar extends Gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mS=new nn,jr=new e1,Ec=new bm,gS=new $,Tc=new $,bc=new $,Ac=new $,np=new $,Rc=new $,_S=new $,Cc=new $;class hn extends Pn{constructor(e=new ha,i=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=l.length;f<d;f++){const h=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(f&&h){Rc.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const S=h[p],g=f[p];S!==0&&(np.fromBufferAttribute(g,e),d?Rc.addScaledVector(np,S):Rc.addScaledVector(np.sub(i),S))}i.add(Rc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(f),jr.copy(e.ray).recast(e.near),!(Ec.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Ec,gS)===null||jr.origin.distanceToSquared(gS)>(e.far-e.near)**2))&&(mS.copy(f).invert(),jr.copy(e.ray).applyMatrix4(mS),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,jr)))}_computeIntersections(e,i,r){let l;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,g=f.attributes.normal,v=f.groups,y=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],P=Math.max(M.start,y.start),G=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,N=G;C<N;C+=3){const U=h.getX(C),D=h.getX(C+1),T=h.getX(C+2);l=wc(this,x,e,r,m,S,g,U,D,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const P=h.getX(M),G=h.getX(M+1),C=h.getX(M+2);l=wc(this,d,e,r,m,S,g,P,G,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],P=Math.max(M.start,y.start),G=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,N=G;C<N;C+=3){const U=C,D=C+1,T=C+2;l=wc(this,x,e,r,m,S,g,U,D,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const P=M,G=M+1,C=M+2;l=wc(this,d,e,r,m,S,g,P,G,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function n1(o,e,i,r,l,f,d,h){let p;if(e.side===$n?p=r.intersectTriangle(d,f,l,!0,h):p=r.intersectTriangle(l,f,d,e.side===pi,h),p===null)return null;Cc.copy(h),Cc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Cc);return m<i.near||m>i.far?null:{distance:m,point:Cc.clone(),object:o}}function wc(o,e,i,r,l,f,d,h,p,m){o.getVertexPosition(h,Tc),o.getVertexPosition(p,bc),o.getVertexPosition(m,Ac);const S=n1(o,e,i,r,Tc,bc,Ac,_S);if(S){const g=new $;Bi.getBarycoord(_S,Tc,bc,Ac,g),l&&(S.uv=Bi.getInterpolatedAttribute(l,h,p,m,g,new Oe)),f&&(S.uv1=Bi.getInterpolatedAttribute(f,h,p,m,g,new Oe)),d&&(S.normal=Bi.getInterpolatedAttribute(d,h,p,m,g,new $),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new $,materialIndex:0};Bi.getNormal(Tc,bc,Ac,v.normal),S.face=v,S.barycoord=g}return S}class i1 extends Hn{constructor(e=null,i=1,r=1,l,f,d,h,p,m=On,S=On,g,v){super(null,d,h,p,m,S,l,f,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $r=new bm,a1=new Oe(.5,.5),Dc=new $;class Am{constructor(e=new yr,i=new yr,r=new yr,l=new yr,f=new yr,d=new yr){this.planes=[e,i,r,l,f,d]}set(e,i,r,l,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa,r=!1){const l=this.planes,f=e.elements,d=f[0],h=f[1],p=f[2],m=f[3],S=f[4],g=f[5],v=f[6],y=f[7],R=f[8],w=f[9],M=f[10],x=f[11],P=f[12],G=f[13],C=f[14],N=f[15];if(l[0].setComponents(m-d,y-S,x-R,N-P).normalize(),l[1].setComponents(m+d,y+S,x+R,N+P).normalize(),l[2].setComponents(m+h,y+g,x+w,N+G).normalize(),l[3].setComponents(m-h,y-g,x-w,N-G).normalize(),r)l[4].setComponents(p,v,M,C).normalize(),l[5].setComponents(m-p,y-v,x-M,N-C).normalize();else if(l[4].setComponents(m-p,y-v,x-M,N-C).normalize(),i===oa)l[5].setComponents(m+p,y+v,x+M,N+C).normalize();else if(i===Bl)l[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const i=a1.distanceTo(e.center);return $r.radius=.7071067811865476+i,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Dc.x=l.normal.x>0?e.max.x:e.min.x,Dc.y=l.normal.y>0?e.max.y:e.min.y,Dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vx extends Hn{constructor(e=[],i=as,r,l,f,d,h,p,m,S){super(e,i,r,l,f,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zl extends Hn{constructor(e,i,r=ca,l,f,d,h=On,p=On,m,S=Ga,g=1){if(S!==Ga&&S!==is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,f,d,h,p,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class r1 extends zl{constructor(e,i=ca,r=as,l,f,d=On,h=On,p,m=Ga){const S={width:e,height:e,depth:1},g=[S,S,S,S,S,S];super(e,e,i,r,l,f,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vl extends ha{constructor(e=1,i=1,r=1,l=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:d};const h=this;l=Math.floor(l),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],S=[],g=[];let v=0,y=0;R("z","y","x",-1,-1,r,i,e,d,f,0),R("z","y","x",1,-1,r,i,-e,d,f,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,f,4),R("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(p),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(S,3)),this.setAttribute("uv",new Hi(g,2));function R(w,M,x,P,G,C,N,U,D,T,L){const V=C/D,z=N/T,Y=C/2,nt=N/2,K=U/2,tt=D+1,q=T+1;let X=0,ut=0;const at=new $;for(let ht=0;ht<q;ht++){const yt=ht*z-nt;for(let Qt=0;Qt<tt;Qt++){const Yt=Qt*V-Y;at[w]=Yt*P,at[M]=yt*G,at[x]=K,m.push(at.x,at.y,at.z),at[w]=0,at[M]=0,at[x]=U>0?1:-1,S.push(at.x,at.y,at.z),g.push(Qt/D),g.push(1-ht/T),X+=1}}for(let ht=0;ht<T;ht++)for(let yt=0;yt<D;yt++){const Qt=v+yt+tt*ht,Yt=v+yt+tt*(ht+1),B=v+(yt+1)+tt*(ht+1),mt=v+(yt+1)+tt*ht;p.push(Qt,Yt,mt),p.push(Yt,B,mt),ut+=6}h.addGroup(y,ut,L),y+=ut,v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pa extends ha{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,S=p+1,g=e/h,v=i/p,y=[],R=[],w=[],M=[];for(let x=0;x<S;x++){const P=x*v-d;for(let G=0;G<m;G++){const C=G*g-f;R.push(C,-P,0),w.push(0,0,1),M.push(G/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<h;P++){const G=P+m*x,C=P+m*(x+1),N=P+1+m*(x+1),U=P+1+m*x;y.push(G,C,U),y.push(C,N,U)}this.setIndex(y),this.setAttribute("position",new Hi(R,3)),this.setAttribute("normal",new Hi(w,3)),this.setAttribute("uv",new Hi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}function _o(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(vS(l))l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(vS(l[0])){const f=[];for(let d=0,h=l.length;d<h;d++)f[d]=l[d].clone();e[i][r]=f}else e[i][r]=l.slice();else e[i][r]=l}}return e}function qn(o){const e={};for(let i=0;i<o.length;i++){const r=_o(o[i]);for(const l in r)e[l]=r[l]}return e}function vS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function s1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function kx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const o1={clone:_o,merge:qn};var l1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends Gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Le().setHex(l.value);break;case"v2":this.uniforms[r].value=new Oe().fromArray(l.value);break;case"v3":this.uniforms[r].value=new $().fromArray(l.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new fe().fromArray(l.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class c1 extends da{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vo extends Gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jp,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class f1 extends Gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d1 extends Gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rm extends Pn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class h1 extends Rm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const ip=new nn,SS=new $,xS=new $;class p1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Am,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;SS.setFromMatrixPosition(e.matrixWorld),i.position.copy(SS),xS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(xS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){ip.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ip,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=l?l.z/f.x:1,h=l?l.w/f.y:1,p=l?l.x/f.x:0,m=l?l.y/f.y:0;e.coordinateSystem===Bl||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(ip)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nc=new $,Uc=new dn,na=new $;class Wx extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nc,Uc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Uc,na.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Nc,Uc,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nc,Uc,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new $,MS=new Oe,yS=new Oe;class Ri extends Wx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=jp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jp*2*Math.atan(Math.tan(Ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,i){return this.getViewBounds(e,MS,yS),i.subVectors(yS,MS)}setViewOffset(e,i,r,l,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ph*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Cm extends Wx{constructor(e=-1,i=1,r=1,l=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class m1 extends p1{constructor(){super(new Cm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g1 extends Rm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new m1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class _1 extends Rm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ro=-90,so=1;class v1 extends Pn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(ro,so,e,i);l.layers=this.layers,this.add(l);const f=new Ri(ro,so,e,i);f.layers=this.layers,this.add(f);const d=new Ri(ro,so,e,i);d.layers=this.layers,this.add(d);const h=new Ri(ro,so,e,i);h.layers=this.layers,this.add(h);const p=new Ri(ro,so,e,i);p.layers=this.layers,this.add(p);const m=new Ri(ro,so,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,d,h,p]=i;for(const m of i)this.remove(m);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,S]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(g,v,y),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class S1 extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bm=class Bm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const f=this.elements;return f[0]=e,f[2]=i,f[1]=r,f[3]=l,this}};Bm.prototype.isMatrix2=!0;let ES=Bm;function TS(o,e,i,r){const l=x1(r);switch(i){case Lx:return o*e;case Px:return o*e/l.components*l.byteLength;case Sm:return o*e/l.components*l.byteLength;case rs:return o*e*2/l.components*l.byteLength;case xm:return o*e*2/l.components*l.byteLength;case Ox:return o*e*3/l.components*l.byteLength;case zi:return o*e*4/l.components*l.byteLength;case Mm:return o*e*4/l.components*l.byteLength;case Bc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yp:case Tp:return Math.max(o,16)*Math.max(e,8)/4;case Mp:case Ep:return Math.max(o,8)*Math.max(e,8)/2;case bp:case Ap:case Cp:case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Rp:case Xc:case Dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Lp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ip:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case zp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Xp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case kp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Wp:case qp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case kc:case Qp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function x1(o){switch(o){case hi:case wx:return{byteLength:1,components:1};case Pl:case Dx:case fa:return{byteLength:2,components:1};case _m:case vm:return{byteLength:2,components:4};case ca:case gm:case sa:return{byteLength:4,components:1};case Nx:case Ux:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mm}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mm);function qx(){let o=null,e=!1,i=null,r=null;function l(f,d){r=o.requestAnimationFrame(l),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function M1(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,p,m){const S=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,S);else{g.sort((y,R)=>y.start-R.start);let v=0;for(let y=1;y<g.length;y++){const R=g[v],w=g[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++v,g[v]=w)}g.length=v+1;for(let y=0,R=g.length;y<R;y++){const w=g[y];o.bufferSubData(m,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:f,update:d}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E1=`#ifdef USE_ALPHAHASH
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
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C1=`#ifdef USE_AOMAP
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
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
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
#endif`,N1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P1=`#ifdef USE_IRIDESCENCE
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
#endif`,I1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,W1=`#define PI 3.141592653589793
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
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y1=`vec3 transformedNormal = objectNormal;
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
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j1="gl_FragColor = linearToOutputTexel( gl_FragColor );",$1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ub=`#ifdef USE_GRADIENTMAP
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
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sb=`PhysicalMaterial material;
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
#endif`,xb=`uniform sampler2D dfgLUT;
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
}`,Mb=`
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ub=`#if defined( USE_POINTS_UV )
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
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oA=`float getShadowMask() {
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
}`,lA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uA=`#ifdef USE_SKINNING
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
#endif`,cA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fA=`#ifdef USE_SKINNING
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
#endif`,dA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gA=`#ifdef USE_TRANSMISSION
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
#endif`,_A=`#ifdef USE_TRANSMISSION
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
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EA=`uniform sampler2D t2D;
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
}`,TA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`#include <common>
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
}`,wA=`#if DEPTH_PACKING == 3200
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
}`,DA=`#define DISTANCE
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
}`,NA=`#define DISTANCE
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
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OA=`uniform float scale;
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
}`,PA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,BA=`uniform vec3 diffuse;
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
}`,zA=`#define LAMBERT
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
}`,FA=`#define LAMBERT
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
}`,HA=`#define MATCAP
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
}`,GA=`#define MATCAP
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
}`,VA=`#define NORMAL
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
}`,XA=`#define NORMAL
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
}`,kA=`#define PHONG
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
}`,WA=`#define PHONG
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
}`,qA=`#define STANDARD
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
}`,YA=`#define STANDARD
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
}`,ZA=`#define TOON
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
}`,KA=`#define TOON
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
}`,QA=`uniform float size;
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
}`,JA=`uniform vec3 diffuse;
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
}`,jA=`#include <common>
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
}`,$A=`uniform vec3 color;
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
}`,tR=`uniform float rotation;
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
}`,eR=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:y1,alphahash_pars_fragment:E1,alphamap_fragment:T1,alphamap_pars_fragment:b1,alphatest_fragment:A1,alphatest_pars_fragment:R1,aomap_fragment:C1,aomap_pars_fragment:w1,batching_pars_vertex:D1,batching_vertex:N1,begin_vertex:U1,beginnormal_vertex:L1,bsdfs:O1,iridescence_fragment:P1,bumpmap_pars_fragment:I1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:H1,color_fragment:G1,color_pars_fragment:V1,color_pars_vertex:X1,color_vertex:k1,common:W1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:Z1,displacementmap_vertex:K1,emissivemap_fragment:Q1,emissivemap_pars_fragment:J1,colorspace_fragment:j1,colorspace_pars_fragment:$1,envmap_fragment:tb,envmap_common_pars_fragment:eb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:ab,fog_vertex:rb,fog_pars_vertex:sb,fog_fragment:ob,fog_pars_fragment:lb,gradientmap_pars_fragment:ub,lightmap_pars_fragment:cb,lights_lambert_fragment:fb,lights_lambert_pars_fragment:db,lights_pars_begin:hb,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:_b,lights_phong_pars_fragment:vb,lights_physical_fragment:Sb,lights_physical_pars_fragment:xb,lights_fragment_begin:Mb,lights_fragment_maps:yb,lights_fragment_end:Eb,lightprobes_pars_fragment:Tb,logdepthbuf_fragment:bb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:wb,map_pars_fragment:Db,map_particle_fragment:Nb,map_particle_pars_fragment:Ub,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Bb,morphtarget_pars_vertex:zb,morphtarget_vertex:Fb,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Vb,normal_pars_vertex:Xb,normal_vertex:kb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:Kb,opaque_fragment:Qb,packing:Jb,premultiplied_alpha_fragment:jb,project_vertex:$b,dithering_fragment:tA,dithering_pars_fragment:eA,roughnessmap_fragment:nA,roughnessmap_pars_fragment:iA,shadowmap_pars_fragment:aA,shadowmap_pars_vertex:rA,shadowmap_vertex:sA,shadowmask_pars_fragment:oA,skinbase_vertex:lA,skinning_pars_vertex:uA,skinning_vertex:cA,skinnormal_vertex:fA,specularmap_fragment:dA,specularmap_pars_fragment:hA,tonemapping_fragment:pA,tonemapping_pars_fragment:mA,transmission_fragment:gA,transmission_pars_fragment:_A,uv_pars_fragment:vA,uv_pars_vertex:SA,uv_vertex:xA,worldpos_vertex:MA,background_vert:yA,background_frag:EA,backgroundCube_vert:TA,backgroundCube_frag:bA,cube_vert:AA,cube_frag:RA,depth_vert:CA,depth_frag:wA,distance_vert:DA,distance_frag:NA,equirect_vert:UA,equirect_frag:LA,linedashed_vert:OA,linedashed_frag:PA,meshbasic_vert:IA,meshbasic_frag:BA,meshlambert_vert:zA,meshlambert_frag:FA,meshmatcap_vert:HA,meshmatcap_frag:GA,meshnormal_vert:VA,meshnormal_frag:XA,meshphong_vert:kA,meshphong_frag:WA,meshphysical_vert:qA,meshphysical_frag:YA,meshtoon_vert:ZA,meshtoon_frag:KA,points_vert:QA,points_frag:JA,shadow_vert:jA,shadow_frag:$A,sprite_vert:tR,sprite_frag:eR},Ft={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},aa={basic:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:qn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:qn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:qn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:qn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:qn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:qn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:qn([Ft.common,Ft.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:qn([Ft.lights,Ft.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};aa.physical={uniforms:qn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Lc={r:0,b:0,g:0},nR=new nn,Yx=new fe;Yx.set(-1,0,0,0,1,0,0,0,1);function iR(o,e,i,r,l,f){const d=new Le(0);let h=l===!0?0:1,p,m,S=null,g=0,v=null;function y(P){let G=P.isScene===!0?P.background:null;if(G&&G.isTexture){const C=P.backgroundBlurriness>0;G=e.get(G,C)}return G}function R(P){let G=!1;const C=y(P);C===null?M(d,h):C&&C.isColor&&(M(C,1),G=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(P,G){const C=y(G);C&&(C.isCubeTexture||C.mapping===Qc)?(m===void 0&&(m=new hn(new Vl(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:_o(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(nR.makeRotationFromEuler(G.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Yx),m.material.toneMapped=De.getTransfer(C.colorSpace)!==Ye,(S!==C||g!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,g=C.version,v=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new hn(new pa(2,2),new da({name:"BackgroundMaterial",uniforms:_o(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,p.material.toneMapped=De.getTransfer(C.colorSpace)!==Ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||g!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,g=C.version,v=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function M(P,G){P.getRGB(Lc,kx(o)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,G,f)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,G=1){d.set(P),h=G,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,M(d,h)},render:R,addToRenderList:w,dispose:x}}function aR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let f=l,d=!1;function h(z,Y,nt,K,tt){let q=!1;const X=g(z,K,nt,Y);f!==X&&(f=X,m(f.object)),q=y(z,K,nt,tt),q&&R(z,K,nt,tt),tt!==null&&e.update(tt,o.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,C(z,Y,nt,K),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function p(){return o.createVertexArray()}function m(z){return o.bindVertexArray(z)}function S(z){return o.deleteVertexArray(z)}function g(z,Y,nt,K){const tt=K.wireframe===!0;let q=r[Y.id];q===void 0&&(q={},r[Y.id]=q);const X=z.isInstancedMesh===!0?z.id:0;let ut=q[X];ut===void 0&&(ut={},q[X]=ut);let at=ut[nt.id];at===void 0&&(at={},ut[nt.id]=at);let ht=at[tt];return ht===void 0&&(ht=v(p()),at[tt]=ht),ht}function v(z){const Y=[],nt=[],K=[];for(let tt=0;tt<i;tt++)Y[tt]=0,nt[tt]=0,K[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:nt,attributeDivisors:K,object:z,attributes:{},index:null}}function y(z,Y,nt,K){const tt=f.attributes,q=Y.attributes;let X=0;const ut=nt.getAttributes();for(const at in ut)if(ut[at].location>=0){const yt=tt[at];let Qt=q[at];if(Qt===void 0&&(at==="instanceMatrix"&&z.instanceMatrix&&(Qt=z.instanceMatrix),at==="instanceColor"&&z.instanceColor&&(Qt=z.instanceColor)),yt===void 0||yt.attribute!==Qt||Qt&&yt.data!==Qt.data)return!0;X++}return f.attributesNum!==X||f.index!==K}function R(z,Y,nt,K){const tt={},q=Y.attributes;let X=0;const ut=nt.getAttributes();for(const at in ut)if(ut[at].location>=0){let yt=q[at];yt===void 0&&(at==="instanceMatrix"&&z.instanceMatrix&&(yt=z.instanceMatrix),at==="instanceColor"&&z.instanceColor&&(yt=z.instanceColor));const Qt={};Qt.attribute=yt,yt&&yt.data&&(Qt.data=yt.data),tt[at]=Qt,X++}f.attributes=tt,f.attributesNum=X,f.index=K}function w(){const z=f.newAttributes;for(let Y=0,nt=z.length;Y<nt;Y++)z[Y]=0}function M(z){x(z,0)}function x(z,Y){const nt=f.newAttributes,K=f.enabledAttributes,tt=f.attributeDivisors;nt[z]=1,K[z]===0&&(o.enableVertexAttribArray(z),K[z]=1),tt[z]!==Y&&(o.vertexAttribDivisor(z,Y),tt[z]=Y)}function P(){const z=f.newAttributes,Y=f.enabledAttributes;for(let nt=0,K=Y.length;nt<K;nt++)Y[nt]!==z[nt]&&(o.disableVertexAttribArray(nt),Y[nt]=0)}function G(z,Y,nt,K,tt,q,X){X===!0?o.vertexAttribIPointer(z,Y,nt,tt,q):o.vertexAttribPointer(z,Y,nt,K,tt,q)}function C(z,Y,nt,K){w();const tt=K.attributes,q=nt.getAttributes(),X=Y.defaultAttributeValues;for(const ut in q){const at=q[ut];if(at.location>=0){let ht=tt[ut];if(ht===void 0&&(ut==="instanceMatrix"&&z.instanceMatrix&&(ht=z.instanceMatrix),ut==="instanceColor"&&z.instanceColor&&(ht=z.instanceColor)),ht!==void 0){const yt=ht.normalized,Qt=ht.itemSize,Yt=e.get(ht);if(Yt===void 0)continue;const B=Yt.buffer,mt=Yt.type,At=Yt.bytesPerElement,Q=mt===o.INT||mt===o.UNSIGNED_INT||ht.gpuType===gm;if(ht.isInterleavedBufferAttribute){const dt=ht.data,Tt=dt.stride,It=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<at.locationSize;_t++)x(at.location+_t,dt.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<at.locationSize;_t++)M(at.location+_t);o.bindBuffer(o.ARRAY_BUFFER,B);for(let _t=0;_t<at.locationSize;_t++)G(at.location+_t,Qt/at.locationSize,mt,yt,Tt*At,(It+Qt/at.locationSize*_t)*At,Q)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<at.locationSize;dt++)x(at.location+dt,ht.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<at.locationSize;dt++)M(at.location+dt);o.bindBuffer(o.ARRAY_BUFFER,B);for(let dt=0;dt<at.locationSize;dt++)G(at.location+dt,Qt/at.locationSize,mt,yt,Qt*At,Qt/at.locationSize*dt*At,Q)}}else if(X!==void 0){const yt=X[ut];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(at.location,yt);break;case 3:o.vertexAttrib3fv(at.location,yt);break;case 4:o.vertexAttrib4fv(at.location,yt);break;default:o.vertexAttrib1fv(at.location,yt)}}}}P()}function N(){L();for(const z in r){const Y=r[z];for(const nt in Y){const K=Y[nt];for(const tt in K){const q=K[tt];for(const X in q)S(q[X].object),delete q[X];delete K[tt]}}delete r[z]}}function U(z){if(r[z.id]===void 0)return;const Y=r[z.id];for(const nt in Y){const K=Y[nt];for(const tt in K){const q=K[tt];for(const X in q)S(q[X].object),delete q[X];delete K[tt]}}delete r[z.id]}function D(z){for(const Y in r){const nt=r[Y];for(const K in nt){const tt=nt[K];if(tt[z.id]===void 0)continue;const q=tt[z.id];for(const X in q)S(q[X].object),delete q[X];delete tt[z.id]}}}function T(z){for(const Y in r){const nt=r[Y],K=z.isInstancedMesh===!0?z.id:0,tt=nt[K];if(tt!==void 0){for(const q in tt){const X=tt[q];for(const ut in X)S(X[ut].object),delete X[ut];delete tt[q]}delete nt[K],Object.keys(nt).length===0&&delete r[Y]}}}function L(){V(),d=!0,f!==l&&(f=l,m(f.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function rR(o,e,i){let r;function l(p){r=p}function f(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(r,p,m,S),i.update(m,r,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,S);let v=0;for(let y=0;y<S;y++)v+=m[y];i.update(v,r,1)}this.setMode=l,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function sR(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(D){return!(D!==zi&&r.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const T=D===fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==hi&&D!==sa&&!T&&r.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(oe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:G,maxFragmentUniforms:C,maxSamples:N,samples:U}}function oR(o){const e=this;let i=null,r=0,l=!1,f=!1;const d=new yr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||l;return l=v,r=g.length,y},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,v){i=S(g,v,0)},this.setState=function(g,v,y){const R=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||R===null||R.length===0||f&&!M)f?S(null):m();else{const P=f?0:r,G=P*4;let C=x.clippingState||null;p.value=C,C=S(R,v,G,y);for(let N=0;N!==G;++N)C[N]=i[N];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(g,v,y,R){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=p.value,R!==!0||M===null){const x=y+w*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let G=0,C=y;G!==w;++G,C+=4)d.copy(g[G]).applyMatrix4(P,h),d.normal.toArray(M,C),M[C+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const co=4,lR=6,uR=20,cR=256,Rl=new Cm,bS=new Le;let ap=null,rp=0,sp=0,op=!1;const fR=new $,ts=new $;class AS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,f={}){const{size:d=256,position:h=fR}=f;ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=CS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ap,rp,sp),this._renderer.xr.enabled=op,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===as||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:fa,format:zi,colorSpace:Wc,depthBuffer:!1},l=RS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=RS(e,i,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dR(f)),this._blurMaterial=pR(f,e,i),this._ggxMaterial=hR(f,e,i)}return l}_compileMaterial(e){const i=new hn(new ha,e);this._renderer.compile(i,Rl)}_sceneToCubeUV(e,i,r,l,f){const p=new Ri(90,1,i,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(bS),g.toneMapping=la,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new Vl,new Ar({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,x=!0):(M.color.copy(bS),x=!0);for(let G=0;G<6;G++){const C=G%3;C===0?(p.up.set(0,m[G],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+S[G],f.y,f.z)):C===1?(p.up.set(0,0,m[G]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+S[G],f.z)):(p.up.set(0,m[G],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+S[G]));const N=this._cubeSize;oo(l,C*N,G>2?N:0,N,N),g.setRenderTarget(l),x&&g.render(w,p),g.render(e,p)}g.toneMapping=y,g.autoClear=v,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===as||e.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=CS());const f=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;oo(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Rl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-S*S),v=m*1.25,y=g*v,{_lodMax:R}=this,w=this._sizeLods[r],M=3*w*(r>R-co?r-R+co:0),x=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=R-i,oo(f,M,x,3*w,2*w),l.setRenderTarget(f),l.render(h,Rl),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=R-r,oo(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(h,Rl)}_blur(e,i,r,l){const f=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,r,d),this._blurPass(f,e,r,r,d)}_blurPass(e,i,r,l,f){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-r;const S=this._sizeLods[l],g=3*S*(l>this._lodMax-co?l-this._lodMax+co:0),v=4*(this._cubeSize-S);oo(i,g,v,3*S,2*S),d.setRenderTarget(i),d.render(p,Rl)}}function dR(o){const e=[],i=[];let r=o;const l=o-co+1+lR;for(let f=0;f<l;f++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,y=3,R=new Float32Array(y*v*g),w=new Float32Array(y*v*g);for(let x=0;x<g;x++){const P=x%3*2/3-1,G=x>2?0:-1,C=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];R.set(C,y*v*x);for(let N=0;N<v;N++){const U=S[N*2]*2-1,D=S[N*2+1]*2-1;x===0?ts.set(1,D,U):x===1?ts.set(-U,1,-D):x===2?ts.set(-U,D,1):x===3?ts.set(-1,D,-U):x===4?ts.set(-U,-1,D):ts.set(U,D,-1),ts.toArray(w,(x*v+N)*y)}}const M=new ha;M.setAttribute("position",new Ha(R,y)),M.setAttribute("outputDirection",new Ha(w,y)),i.push(new hn(M,null)),r>co&&r--}return{lodMeshes:i,sizeLods:e}}function RS(o,e,i){const r=new Fi(o,e,i);return r.texture.mapping=Qc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function oo(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function hR(o,e,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function pR(o,e,i){return new da({name:"SphericalGaussianBlur",defines:{SAMPLES:uR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function CS(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:za,depthTest:!1,depthWrite:!1})}function wS(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zx extends Fi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Vx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vl(5,5,5),f=new da({name:"CubemapFromEquirect",uniforms:_o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:za});f.uniforms.tEquirect.value=i;const d=new hn(l,f),h=i.minFilter;return i.minFilter===ns&&(i.minFilter=Fn),new v1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(f)}}function mR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(v,y=!1){return v==null?null:y?d(v):f(v)}function f(v){if(v&&v.isTexture){const y=v.mapping;if(y===Nh||y===Uh)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const w=new Zx(R.height);return w.fromEquirectangularTexture(o,v),e.set(v,w),v.addEventListener("dispose",m),h(w.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const y=v.mapping,R=y===Nh||y===Uh,w=y===as||y===go;if(R||w){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new AS(o)),M=R?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const P=v.image;return R&&P&&P.height>0||w&&P&&p(P)?(r===null&&(r=new AS(o)),M=R?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,y){return y===Nh?v.mapping=as:y===Uh&&(v.mapping=go),v}function p(v){let y=0;const R=6;for(let w=0;w<R;w++)v[w]!==void 0&&y++;return y===R}function m(v){const y=v.target;y.removeEventListener("dispose",m);const R=e.get(y);R!==void 0&&(e.delete(y),R.dispose())}function S(v){const y=v.target;y.removeEventListener("dispose",S);const R=i.get(y);R!==void 0&&(i.delete(y),R.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function gR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&fo("WebGLRenderer: "+r+" extension not supported."),l}}}function _R(o,e,i,r){const l={},f=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete l[v.id];const y=f.get(v);y&&(e.remove(y),f.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,R=g.attributes.position;let w=0;if(R===void 0)return;if(y!==null){const P=y.array;w=y.version;for(let G=0,C=P.length;G<C;G+=3){const N=P[G+0],U=P[G+1],D=P[G+2];v.push(N,U,U,D,D,N)}}else{const P=R.array;w=R.version;for(let G=0,C=P.length/3-1;G<C;G+=3){const N=G+0,U=G+1,D=G+2;v.push(N,U,U,D,D,N)}}const M=new(R.count>=65535?Gx:Hx)(v,1);M.version=w;const x=f.get(g);x&&e.remove(x),f.set(g,M)}function S(g){const v=f.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return f.get(g)}return{get:h,update:p,getWireframeAttribute:S}}function vR(o,e,i){let r;function l(g){r=g}let f,d;function h(g){f=g.type,d=g.bytesPerElement}function p(g,v){o.drawElements(r,v,f,g*d),i.update(v,r,1)}function m(g,v,y){y!==0&&(o.drawElementsInstanced(r,v,f,g*d,y),i.update(v,r,y))}function S(g,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,f,g,0,y);let w=0;for(let M=0;M<y;M++)w+=v[M];i.update(w,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function SR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Be("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function xR(o,e,i){const r=new WeakMap,l=new sn;function f(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=S!==void 0?S.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let V=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",V)};var y=V;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let N=h.attributes.position.count*C,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*U*4*g),T=new Bx(D,N,U,g);T.type=sa,T.needsUpdate=!0;const L=C*4;for(let z=0;z<g;z++){const Y=x[z],nt=P[z],K=G[z],tt=N*U*4*z;for(let q=0;q<Y.count;q++){const X=q*L;R===!0&&(l.fromBufferAttribute(Y,q),D[tt+X+0]=l.x,D[tt+X+1]=l.y,D[tt+X+2]=l.z,D[tt+X+3]=0),w===!0&&(l.fromBufferAttribute(nt,q),D[tt+X+4]=l.x,D[tt+X+5]=l.y,D[tt+X+6]=l.z,D[tt+X+7]=0),M===!0&&(l.fromBufferAttribute(K,q),D[tt+X+8]=l.x,D[tt+X+9]=l.y,D[tt+X+10]=l.z,D[tt+X+11]=K.itemSize===4?l.w:1)}}v={count:g,texture:T,size:new Oe(N,U)},r.set(h,v),h.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const w=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function MR(o,e,i,r,l){let f=new WeakMap;function d(m){const S=l.render.frame,g=m.geometry,v=e.get(m,g);if(f.get(v)!==S&&(e.update(v),f.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const y=m.skeleton;f.get(y)!==S&&(y.update(),f.set(y,S))}return v}function h(){f=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const yR={[Mx]:"LINEAR_TONE_MAPPING",[yx]:"REINHARD_TONE_MAPPING",[Ex]:"CINEON_TONE_MAPPING",[Tx]:"ACES_FILMIC_TONE_MAPPING",[Ax]:"AGX_TONE_MAPPING",[Rx]:"NEUTRAL_TONE_MAPPING",[bx]:"CUSTOM_TONE_MAPPING"};function ER(o,e,i,r,l,f){const d=new Fi(e,i,{type:o,depthBuffer:l,stencilBuffer:f,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new ha;m.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const S=new c1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new hn(m,S),v=new Cm(-1,1,1,-1,0,1);let y=null,R=null,w=!1,M,x=null,P=[],G=!1;this.setSize=function(C,N){d.setSize(C,N),h!==null&&h.setSize(C,N),p!==null&&p.setSize(C,N);for(let U=0;U<P.length;U++){const D=P[U];D.setSize&&D.setSize(C,N)}},this.setEffects=function(C){P=C,G=P.length>0&&P[0].isRenderPass===!0;const N=d.width,U=d.height;P.length>0&&h===null&&(h=new Fi(N,U,{type:fa,depthBuffer:!1,stencilBuffer:!1}),p=new Fi(N,U,{type:fa,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<P.length;D++){const T=P[D];T.setSize&&T.setSize(N,U)}},this.begin=function(C,N){if(w||C.toneMapping===la&&P.length===0)return!1;if(x=N,N!==null){const U=N.width,D=N.height;(d.width!==U||d.height!==D)&&this.setSize(U,D)}return G===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=la,!0},this.hasRenderPass=function(){return G},this.end=function(C,N){C.toneMapping=M,w=!0;let U=d,D=h;for(let T=0;T<P.length;T++){const L=P[T];L.enabled!==!1&&(L.render(C,D,U,N),L.needsSwap!==!1&&(U=D,D=D===h?p:h))}if(y!==C.outputColorSpace||R!==C.toneMapping){y=C.outputColorSpace,R=C.toneMapping,S.defines={},De.getTransfer(y)===Ye&&(S.defines.SRGB_TRANSFER="");const T=yR[R];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(x),C.render(g,v),x=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const Kx=new Hn,$p=new zl(1,1),Qx=new Bx,Jx=new HT,jx=new Vx,DS=[],NS=[],US=new Float32Array(16),LS=new Float32Array(9),OS=new Float32Array(4);function So(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=DS[l];if(f===void 0&&(f=new Float32Array(l),DS[l]=f),e!==0){r.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function yn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function En(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function jc(o,e){let i=NS[e];i===void 0&&(i=new Int32Array(e),NS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function TR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function bR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2fv(this.addr,e),En(i,e)}}function AR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;o.uniform3fv(this.addr,e),En(i,e)}}function RR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4fv(this.addr,e),En(i,e)}}function CR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(yn(i,r))return;OS.set(r),o.uniformMatrix2fv(this.addr,!1,OS),En(i,r)}}function wR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(yn(i,r))return;LS.set(r),o.uniformMatrix3fv(this.addr,!1,LS),En(i,r)}}function DR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(yn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(yn(i,r))return;US.set(r),o.uniformMatrix4fv(this.addr,!1,US),En(i,r)}}function NR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function UR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2iv(this.addr,e),En(i,e)}}function LR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3iv(this.addr,e),En(i,e)}}function OR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4iv(this.addr,e),En(i,e)}}function PR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function IR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;o.uniform2uiv(this.addr,e),En(i,e)}}function BR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;o.uniform3uiv(this.addr,e),En(i,e)}}function zR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;o.uniform4uiv(this.addr,e),En(i,e)}}function FR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?($p.compareFunction=i.isReversedDepthBuffer()?Em:ym,f=$p):f=Kx,i.setTexture2D(e||f,l)}function HR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Jx,l)}function GR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||jx,l)}function VR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Qx,l)}function XR(o){switch(o){case 5126:return TR;case 35664:return bR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return wR;case 35676:return DR;case 5124:case 35670:return NR;case 35667:case 35671:return UR;case 35668:case 35672:return LR;case 35669:case 35673:return OR;case 5125:return PR;case 36294:return IR;case 36295:return BR;case 36296:return zR;case 35678:case 36198:case 36298:case 36306:case 35682:return FR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return GR;case 36289:case 36303:case 36311:case 36292:return VR}}function kR(o,e){o.uniform1fv(this.addr,e)}function WR(o,e){const i=So(e,this.size,2);o.uniform2fv(this.addr,i)}function qR(o,e){const i=So(e,this.size,3);o.uniform3fv(this.addr,i)}function YR(o,e){const i=So(e,this.size,4);o.uniform4fv(this.addr,i)}function ZR(o,e){const i=So(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function KR(o,e){const i=So(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function QR(o,e){const i=So(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function JR(o,e){o.uniform1iv(this.addr,e)}function jR(o,e){o.uniform2iv(this.addr,e)}function $R(o,e){o.uniform3iv(this.addr,e)}function t3(o,e){o.uniform4iv(this.addr,e)}function e3(o,e){o.uniform1uiv(this.addr,e)}function n3(o,e){o.uniform2uiv(this.addr,e)}function i3(o,e){o.uniform3uiv(this.addr,e)}function a3(o,e){o.uniform4uiv(this.addr,e)}function r3(o,e,i){const r=this.cache,l=e.length,f=jc(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=$p:d=Kx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,f[h])}function s3(o,e,i){const r=this.cache,l=e.length,f=jc(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Jx,f[d])}function o3(o,e,i){const r=this.cache,l=e.length,f=jc(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||jx,f[d])}function l3(o,e,i){const r=this.cache,l=e.length,f=jc(i,l);yn(r,f)||(o.uniform1iv(this.addr,f),En(r,f));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Qx,f[d])}function u3(o){switch(o){case 5126:return kR;case 35664:return WR;case 35665:return qR;case 35666:return YR;case 35674:return ZR;case 35675:return KR;case 35676:return QR;case 5124:case 35670:return JR;case 35667:case 35671:return jR;case 35668:case 35672:return $R;case 35669:case 35673:return t3;case 5125:return e3;case 36294:return n3;case 36295:return i3;case 36296:return a3;case 35678:case 36198:case 36298:case 36306:case 35682:return r3;case 35679:case 36299:case 36307:return s3;case 35680:case 36300:case 36308:case 36293:return o3;case 36289:case 36303:case 36311:case 36292:return l3}}class c3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=XR(i.type)}}class f3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=u3(i.type)}}class d3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,d=l.length;f!==d;++f){const h=l[f];h.setValue(e,i[h.id],r)}}}const lp=/(\w+)(\])?(\[|\.)?/g;function PS(o,e){o.seq.push(e),o.map[e.id]=e}function h3(o,e,i){const r=o.name,l=r.length;for(lp.lastIndex=0;;){const f=lp.exec(r),d=lp.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){PS(i,m===void 0?new c3(h,o,e):new f3(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new d3(h),PS(i,g)),i=g}}}class Gc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);h3(h,p,this)}const l=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):f.push(d);l.length>0&&(this.seq=l.concat(f))}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function IS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const p3=37297;let m3=0;function g3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=l;d<f;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const BS=new fe;function _3(o){De._getMatrix(BS,De.workingColorSpace,o);const e=`mat3( ${BS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case qc:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function zS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+g3(o.getShaderSource(e),h)}else return f}function v3(o,e){const i=_3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const S3={[Mx]:"Linear",[yx]:"Reinhard",[Ex]:"Cineon",[Tx]:"ACESFilmic",[Ax]:"AgX",[Rx]:"Neutral",[bx]:"Custom"};function x3(o,e){const i=S3[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new $;function M3(){De.getLuminanceCoefficients(Oc);const o=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function E3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function T3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Nl(o){return o!==""}function FS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function HS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b3=/^[ \t]*#include +<([\w\d./]+)>/gm;function tm(o){return o.replace(b3,R3)}const A3=new Map;function R3(o,e){let i=me[e];if(i===void 0){const r=A3.get(e);if(r!==void 0)i=me[r],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tm(i)}const C3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function GS(o){return o.replace(C3,w3)}function w3(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function VS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const D3={[Ic]:"SHADOWMAP_TYPE_PCF",[Dl]:"SHADOWMAP_TYPE_VSM"};function N3(o){return D3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U3={[as]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[Qc]:"ENVMAP_TYPE_CUBE_UV"};function L3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":U3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const O3={[go]:"ENVMAP_MODE_REFRACTION"};function P3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":O3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I3={[xx]:"ENVMAP_BLENDING_MULTIPLY",[_T]:"ENVMAP_BLENDING_MIX",[vT]:"ENVMAP_BLENDING_ADD"};function B3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":I3[o.combine]||"ENVMAP_BLENDING_NONE"}function z3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function F3(o,e,i,r){const l=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=N3(i),m=L3(i),S=P3(i),g=B3(i),v=z3(i),y=y3(i),R=E3(f),w=l.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Nl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Nl).join(`
`),x.length>0&&(x+=`
`)):(M=[VS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),x=[VS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?me.tonemapping_pars_fragment:"",i.toneMapping!==la?x3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,v3("linearToOutputTexel",i.outputColorSpace),M3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),d=tm(d),d=FS(d,i),d=HS(d,i),h=tm(h),h=FS(h,i),h=HS(h,i),d=GS(d),h=GS(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===eS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===eS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=P+M+d,C=P+x+h,N=IS(l,l.VERTEX_SHADER,G),U=IS(l,l.FRAGMENT_SHADER,C);l.attachShader(w,N),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function D(z){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",nt=l.getShaderInfoLog(N)||"",K=l.getShaderInfoLog(U)||"",tt=Y.trim(),q=nt.trim(),X=K.trim();let ut=!0,at=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,N,U);else{const ht=zS(l,N,"vertex"),yt=zS(l,U,"fragment");Be("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+tt+`
`+ht+`
`+yt)}else tt!==""?oe("WebGLProgram: Program Info Log:",tt):(q===""||X==="")&&(at=!1);at&&(z.diagnostics={runnable:ut,programLog:tt,vertexShader:{log:q,prefix:M},fragmentShader:{log:X,prefix:x}})}l.deleteShader(N),l.deleteShader(U),T=new Gc(l,w),L=T3(l,w)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(w,p3)),V},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=m3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=U,this}let H3=0;class G3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new V3(e),i.set(e,r)),r}}class V3{constructor(e){this.id=H3++,this.code=e,this.usedTimes=0}}function X3(o){return o===rs||o===Xc||o===kc}function k3(o,e,i,r,l,f){const d=new zx,h=new G3,p=new Set,m=[],S=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,L,V,z,Y,nt){const K=z.fog,tt=Y.geometry,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ut=e.get(T.envMap||q,X),at=ut&&ut.mapping===Qc?ut.image.height:null,ht=y[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const yt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Qt=yt!==void 0?yt.length:0;let Yt=0;tt.morphAttributes.position!==void 0&&(Yt=1),tt.morphAttributes.normal!==void 0&&(Yt=2),tt.morphAttributes.color!==void 0&&(Yt=3);let B,mt,At,Q;if(ht){const Ce=aa[ht];B=Ce.vertexShader,mt=Ce.fragmentShader}else{B=T.vertexShader,mt=T.fragmentShader;const Ce=h.getVertexShaderStage(T),ue=h.getFragmentShaderStage(T);h.update(T,Ce,ue),At=Ce.id,Q=ue.id}const dt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),It=Y.isInstancedMesh===!0,_t=Y.isBatchedMesh===!0,Rt=!!T.map,Ve=!!T.matcap,pe=!!ut,ge=!!T.aoMap,xe=!!T.lightMap,ee=!!T.bumpMap&&T.wireframe===!1,ie=!!T.normalMap,Xe=!!T.displacementMap,pn=!!T.emissiveMap,Ie=!!T.metalnessMap,tn=!!T.roughnessMap,W=T.anisotropy>0,an=T.clearcoat>0,Pe=T.dispersion>0,O=T.retroreflectivity>0,E=T.iridescence>0,et=T.sheen>0,lt=T.transmission>0,pt=W&&!!T.anisotropyMap,bt=an&&!!T.clearcoatMap,Dt=an&&!!T.clearcoatNormalMap,gt=an&&!!T.clearcoatRoughnessMap,Mt=E&&!!T.iridescenceMap,wt=E&&!!T.iridescenceThicknessMap,jt=et&&!!T.sheenColorMap,Pt=et&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Vt=!!T.specularColorMap,ne=!!T.specularIntensityMap,le=lt&&!!T.transmissionMap,k=lt&&!!T.thicknessMap,Ct=!!T.gradientMap,xt=!!T.alphaMap,Nt=T.alphaTest>0,Gt=!!T.alphaHash,Et=!!T.extensions;let Jt=la;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Ht={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:B,fragmentShader:mt,defines:T.defines,customVertexShaderID:At,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:_t,batchingColor:_t&&Y._colorsTexture!==null,instancing:It,instancingColor:It&&Y.instanceColor!==null,instancingMorph:It&&Y.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Rt,matcap:Ve,envMap:pe,envMapMode:pe&&ut.mapping,envMapCubeUVHeight:at,aoMap:ge,lightMap:xe,bumpMap:ee,normalMap:ie,displacementMap:Xe,emissiveMap:pn,normalMapObjectSpace:ie&&T.normalMapType===MT,normalMapTangentSpace:ie&&T.normalMapType===Jp,packedNormalMap:ie&&T.normalMapType===Jp&&X3(T.normalMap.format),metalnessMap:Ie,roughnessMap:tn,anisotropy:W,anisotropyMap:pt,clearcoat:an,clearcoatMap:bt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:gt,dispersion:Pe,retroreflection:O,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:wt,sheen:et,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Vt,specularIntensityMap:ne,transmission:lt,transmissionMap:le,thicknessMap:k,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===Ul&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:Nt,alphaHash:Gt,combine:T.combine,mapUv:Rt&&R(T.map.channel),aoMapUv:ge&&R(T.aoMap.channel),lightMapUv:xe&&R(T.lightMap.channel),bumpMapUv:ee&&R(T.bumpMap.channel),normalMapUv:ie&&R(T.normalMap.channel),displacementMapUv:Xe&&R(T.displacementMap.channel),emissiveMapUv:pn&&R(T.emissiveMap.channel),metalnessMapUv:Ie&&R(T.metalnessMap.channel),roughnessMapUv:tn&&R(T.roughnessMap.channel),anisotropyMapUv:pt&&R(T.anisotropyMap.channel),clearcoatMapUv:bt&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&R(T.sheenRoughnessMap.channel),specularMapUv:Ot&&R(T.specularMap.channel),specularColorMapUv:Vt&&R(T.specularColorMap.channel),specularIntensityMapUv:ne&&R(T.specularIntensityMap.channel),transmissionMapUv:le&&R(T.transmissionMap.channel),thicknessMapUv:k&&R(T.thicknessMap.channel),alphaMapUv:xt&&R(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ie||W),vertexNormals:!!tt.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!tt.attributes.uv&&(Rt||xt),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&ie===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Tt,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:Yt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===Ye,decodeVideoTextureEmissive:pn&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===Ye,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ia,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Et&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&T.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)L.push(V),L.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(x(L,T),P(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numSunLights),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numSunLightShadows),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function P(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function G(T){const L=y[T.type];let V;if(L){const z=aa[L];V=o1.clone(z.uniforms)}else V=T.uniforms;return V}function C(T,L){let V=S.get(L);return V!==void 0?++V.usedTimes:(V=new F3(o,L,T,l),m.push(V),S.set(L,V)),V}function N(T){if(--T.usedTimes===0){const L=m.indexOf(T);m[L]=m[m.length-1],m.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function D(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:G,acquireProgram:C,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:D}}function W3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function q3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function XS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function kS(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function d(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,R,w,M,x){let P=o[e];return P===void 0?(P={id:v.id,object:v,geometry:y,material:R,materialVariant:d(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:x},o[e]=P):(P.id=v.id,P.object=v,P.geometry=y,P.material=R,P.materialVariant=d(v),P.groupOrder=w,P.renderOrder=v.renderOrder,P.z=M,P.group=x),e++,P}function p(v,y,R,w,M,x,P){P.reversedDepth===!0&&(M=-M);const G=h(v,y,R,w,M,x);R.transmission>0?r.push(G):R.transparent===!0?l.push(G):i.push(G)}function m(v,y,R,w,M,x){const P=h(v,y,R,w,M,x);R.transmission>0?r.unshift(P):R.transparent===!0?l.unshift(P):i.unshift(P)}function S(v,y){i.length>1&&i.sort(v||q3),r.length>1&&r.sort(y||XS),l.length>1&&l.sort(y||XS)}function g(){for(let v=e,y=o.length;v<y;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:p,unshift:m,finish:g,sort:S}}function Y3(){let o=new WeakMap;function e(r,l){const f=o.get(r);let d;return f===void 0?(d=new kS,o.set(r,[d])):l>=f.length?(d=new kS,f.push(d)):d=f[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Z3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new $,color:new Le};break;case"SpotLight":i={position:new $,direction:new $,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function K3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Q3=0;function J3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function j3(o){const e=new Z3,i=K3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const l=new $,f=new nn,d=new nn;function h(m){let S=0,g=0,v=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,R=0,w=0,M=0,x=0,P=0,G=0,C=0,N=0,U=0,D=0,T=0,L=0,V=0;m.sort(J3);for(let Y=0,nt=m.length;Y<nt;Y++){const K=m[Y],tt=K.color,q=K.intensity,X=K.distance;let ut=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===rs?ut=K.shadow.map.texture:ut=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)S+=tt.r*q,g+=tt.g*q,v+=tt.b*q;else if(K.isLightProbe){for(let at=0;at<9;at++)r.probe[at].addScaledVector(K.sh.coefficients[at],q);V++}else if(K.isSunLight){const at=e.get(K);if(at.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ht=K.shadow,yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),r.sunShadow[R]=yt,r.sunShadowMap[R]=ut;const Qt=ht.getViewportCount();for(let Yt=0;Yt<Qt;Yt++)r.sunShadowMatrix[w+Yt]=ht.getMatrix(Yt),r.sunShadowCascade[w+Yt]=ht._cascadeData[Yt];w+=Qt,R++}r.sun[y]=at,y++}else if(K.isDirectionalLight){const at=e.get(K);if(at.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ht=K.shadow,yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,r.directionalShadow[M]=yt,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=K.shadow.matrix,N++}r.directional[M]=at,M++}else if(K.isSpotLight){const at=e.get(K);at.position.setFromMatrixPosition(K.matrixWorld),at.color.copy(tt).multiplyScalar(q),at.distance=X,at.coneCos=Math.cos(K.angle),at.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),at.decay=K.decay,r.spot[P]=at;const ht=K.shadow;if(K.map&&(r.spotLightMap[T]=K.map,T++,ht.updateMatrices(K),K.castShadow&&L++),r.spotLightMatrix[P]=ht.matrix,K.castShadow){const yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,r.spotShadow[P]=yt,r.spotShadowMap[P]=ut,D++}P++}else if(K.isRectAreaLight){const at=e.get(K);at.color.copy(tt).multiplyScalar(q),at.halfWidth.set(K.width*.5,0,0),at.halfHeight.set(0,K.height*.5,0),r.rectArea[G]=at,G++}else if(K.isPointLight){const at=e.get(K);if(at.color.copy(K.color).multiplyScalar(K.intensity),at.distance=K.distance,at.decay=K.decay,K.castShadow){const ht=K.shadow,yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,yt.shadowCameraNear=ht.camera.near,yt.shadowCameraFar=ht.camera.far,r.pointShadow[x]=yt,r.pointShadowMap[x]=ut,r.pointShadowMatrix[x]=K.shadow.matrix,U++}r.point[x]=at,x++}else if(K.isHemisphereLight){const at=e.get(K);at.skyColor.copy(K.color).multiplyScalar(q),at.groundColor.copy(K.groundColor).multiplyScalar(q),r.hemi[C]=at,C++}}G>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=g,r.ambient[2]=v;const z=r.hash;(z.sunLength!==y||z.directionalLength!==M||z.pointLength!==x||z.spotLength!==P||z.rectAreaLength!==G||z.hemiLength!==C||z.numSunShadows!==R||z.numDirectionalShadows!==N||z.numPointShadows!==U||z.numSpotShadows!==D||z.numSpotMaps!==T||z.numLightProbes!==V)&&(r.sun.length=y,r.directional.length=M,r.spot.length=P,r.rectArea.length=G,r.point.length=x,r.hemi.length=C,r.sunShadow.length=R,r.sunShadowMap.length=R,r.sunShadowMatrix.length=w,r.sunShadowCascade.length=w,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.directionalShadowMatrix.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.spotLightMatrix.length=D+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=V,z.sunLength=y,z.directionalLength=M,z.pointLength=x,z.spotLength=P,z.rectAreaLength=G,z.hemiLength=C,z.numSunShadows=R,z.numDirectionalShadows=N,z.numPointShadows=U,z.numSpotShadows=D,z.numSpotMaps=T,z.numLightProbes=V,r.version=Q3++)}function p(m,S){let g=0,v=0,y=0,R=0,w=0,M=0;const x=S.matrixWorldInverse;for(let P=0,G=m.length;P<G;P++){const C=m[P];if(C.isSunLight){const N=r.sun[g];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),g++}else if(C.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),v++}else if(C.isSpotLight){const N=r.spot[R];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),y++}else if(C.isHemisphereLight){const N=r.hemi[M];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:r}}function WS(o){const e=new j3(o),i=[],r=[],l=[];function f(v){g.camera=v,i.length=0,r.length=0,l.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:g,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function $3(o){let e=new WeakMap;function i(l,f=0){const d=e.get(l);let h;return d===void 0?(h=new WS(o),e.set(l,[h])):f>=d.length?(h=new WS(o),d.push(h)):h=d[f],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const tC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eC=`uniform sampler2D shadow_pass;
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
}`,nC=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],iC=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],qS=new nn,Cl=new $,up=new $;function aC(o,e,i){let r=new Am;const l=new Oe,f=new Oe,d=new sn,h=new f1,p=new d1,m={},S=i.maxTextureSize,g={[pi]:$n,[$n]:pi,[Ia]:Ia},v=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:tC,fragmentShader:eC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const R=new ha;R.setAttribute("position",new Ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new hn(R,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let x=this.type;this.render=function(U,D,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===jE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ic);const L=o.getRenderTarget(),V=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(za),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const nt=x!==this.type;nt&&D.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(tt=>tt.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,tt=U.length;K<tt;K++){const q=U[K],X=q.shadow;if(X===void 0){oe("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ut=X.getFrameExtents();l.multiply(ut),f.copy(X.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(f.x=Math.floor(S/ut.x),l.x=f.x*ut.x,X.mapSize.x=f.x),l.y>S&&(f.y=Math.floor(S/ut.y),l.y=f.y*ut.y,X.mapSize.y=f.y));const at=o.state.buffers.depth.getReversed();if(X.camera._reversedDepth=at,X.map===null||nt===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Dl){if(q.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Fi(l.x,l.y,{format:rs,type:fa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new zl(l.x,l.y,sa),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Ga,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=On,X.map.depthTexture.magFilter=On}else q.isPointLight?(X.map=new Zx(l.x),X.map.depthTexture=new r1(l.x,ca)):(X.map=new Fi(l.x,l.y),X.map.depthTexture=new zl(l.x,l.y,ca)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Ga,this.type===Ic?(X.map.depthTexture.compareFunction=at?Em:ym,X.map.depthTexture.minFilter=Fn,X.map.depthTexture.magFilter=Fn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=On,X.map.depthTexture.magFilter=On);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==l.x||X.map.height!==l.y)&&X.map.setSize(l.x,l.y);const ht=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,T);for(let yt=0;yt<ht;yt++){const Qt=X.getCamera(yt);if(q.isPointLight){const Yt=X.camera,B=X.matrix,mt=q.distance||Yt.far;mt!==Yt.far&&(Yt.far=mt,Yt.updateProjectionMatrix()),Cl.setFromMatrixPosition(q.matrixWorld),Yt.position.copy(Cl),up.copy(Yt.position),up.add(nC[yt]),Yt.up.copy(iC[yt]),Yt.lookAt(up),Yt.updateMatrixWorld(),B.makeTranslation(-Cl.x,-Cl.y,-Cl.z),qS.multiplyMatrices(Yt.projectionMatrix,Yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(qS,Yt.coordinateSystem,Yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)o.setRenderTarget(X.map,yt),o.clear();else{yt===0&&(o.setRenderTarget(X.map),o.clear());const Yt=X.getViewport(yt);d.set(f.x*Yt.x,f.y*Yt.y,f.x*Yt.z,f.y*Yt.w),Y.viewport(d)}r=X.getFrustum(yt),C(D,T,Qt,q,this.type)}X.isPointLightShadow!==!0&&this.type===Dl&&P(X,T),X.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,V,z)};function P(U,D){const T=e.update(w);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new Fi(l.x,l.y,{format:rs,type:fa}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(D,null,T,v,w,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(D,null,T,y,w,null)}function G(U,D,T,L){let V=null;const z=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)V=z;else if(V=T.isPointLight===!0?p:h,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Y=V.uuid,nt=D.uuid;let K=m[Y];K===void 0&&(K={},m[Y]=K);let tt=K[nt];tt===void 0&&(tt=V.clone(),K[nt]=tt,D.addEventListener("dispose",N)),V=tt}if(V.visible=D.visible,V.wireframe=D.wireframe,L===Dl?V.side=D.shadowSide!==null?D.shadowSide:D.side:V.side=D.shadowSide!==null?D.shadowSide:g[D.side],V.alphaMap=D.alphaMap,V.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,V.map=D.map,V.clipShadows=D.clipShadows,V.clippingPlanes=D.clippingPlanes,V.clipIntersection=D.clipIntersection,V.displacementMap=D.displacementMap,V.displacementScale=D.displacementScale,V.displacementBias=D.displacementBias,V.wireframeLinewidth=D.wireframeLinewidth,V.linewidth=D.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Y=o.properties.get(V);Y.light=T}return V}function C(U,D,T,L,V){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===Dl)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const nt=e.update(U),K=U.material;if(Array.isArray(K)){const tt=nt.groups;for(let q=0,X=tt.length;q<X;q++){const ut=tt[q],at=K[ut.materialIndex];if(at&&at.visible){const ht=G(U,at,L,V);U.onBeforeShadow(o,U,D,T,nt,ht,ut),o.renderBufferDirect(T,null,nt,ht,U,ut),U.onAfterShadow(o,U,D,T,nt,ht,ut)}}}else if(K.visible){const tt=G(U,K,L,V);U.onBeforeShadow(o,U,D,T,nt,tt,null),o.renderBufferDirect(T,null,nt,tt,U,null),U.onAfterShadow(o,U,D,T,nt,tt,null)}}const Y=U.children;for(let nt=0,K=Y.length;nt<K;nt++)C(Y[nt],D,T,L,V)}function N(U){U.target.removeEventListener("dispose",N);for(const T in m){const L=m[T],V=U.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function rC(o,e){function i(){let k=!1;const Ct=new sn;let xt=null;const Nt=new sn(0,0,0,0);return{setMask:function(Gt){xt!==Gt&&!k&&(o.colorMask(Gt,Gt,Gt,Gt),xt=Gt)},setLocked:function(Gt){k=Gt},setClear:function(Gt,Et,Jt,Ht,Ce){Ce===!0&&(Gt*=Ht,Et*=Ht,Jt*=Ht),Ct.set(Gt,Et,Jt,Ht),Nt.equals(Ct)===!1&&(o.clearColor(Gt,Et,Jt,Ht),Nt.copy(Ct))},reset:function(){k=!1,xt=null,Nt.set(-1,0,0,0)}}}function r(){let k=!1,Ct=!1,xt=null,Nt=null,Gt=null;return{setReversed:function(Et){if(Ct!==Et){const Jt=e.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const Ht=Gt;Gt=null,this.setClear(Ht)}},getReversed:function(){return Ct},setTest:function(Et){Et?dt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!k&&(o.depthMask(Et),xt=Et)},setFunc:function(Et){if(Ct&&(Et=LT[Et]),Nt!==Et){switch(Et){case dp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case pp:o.depthFunc(o.LESS);break;case Ol:o.depthFunc(o.LEQUAL);break;case mp:o.depthFunc(o.EQUAL);break;case gp:o.depthFunc(o.GEQUAL);break;case _p:o.depthFunc(o.GREATER);break;case vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Nt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){Gt!==Et&&(Gt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){k=!1,xt=null,Nt=null,Gt=null,Ct=!1}}}function l(){let k=!1,Ct=null,xt=null,Nt=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null;return{setTest:function(ue){k||(ue?dt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(ue){Ct!==ue&&!k&&(o.stencilMask(ue),Ct=ue)},setFunc:function(ue,ti,mi){(xt!==ue||Nt!==ti||Gt!==mi)&&(o.stencilFunc(ue,ti,mi),xt=ue,Nt=ti,Gt=mi)},setOp:function(ue,ti,mi){(Et!==ue||Jt!==ti||Ht!==mi)&&(o.stencilOp(ue,ti,mi),Et=ue,Jt=ti,Ht=mi)},setLocked:function(ue){k=ue},setClear:function(ue){Ce!==ue&&(o.clearStencil(ue),Ce=ue)},reset:function(){k=!1,Ct=null,xt=null,Nt=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null}}}const f=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let S={},g={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,P=null,G=null,C=null,N=null,U=null,D=null,T=new Le(0,0,0),L=0,V=!1,z=null,Y=null,nt=null,K=null,tt=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ut=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(at)[1]),X=ut>=1):at.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),X=ut>=2);let ht=null,yt={};const Qt=o.getParameter(o.SCISSOR_BOX),Yt=o.getParameter(o.VIEWPORT),B=new sn().fromArray(Qt),mt=new sn().fromArray(Yt);function At(k,Ct,xt,Nt){const Gt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(k,Et),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<xt;Jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Nt,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Et}const Q={};Q[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),d.setFunc(Ol),ee(!1),ie(Jv),dt(o.CULL_FACE),ge(za);function dt(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function Tt(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function It(k,Ct){return v[k]!==Ct?(o.bindFramebuffer(k,Ct),v[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function _t(k,Ct){let xt=R,Nt=!1;if(k){xt=y.get(Ct),xt===void 0&&(xt=[],y.set(Ct,xt));const Gt=k.textures;if(xt.length!==Gt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Jt=Gt.length;Et<Jt;Et++)xt[Et]=o.COLOR_ATTACHMENT0+Et;xt.length=Gt.length,Nt=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Nt=!0);Nt&&o.drawBuffers(xt)}function Rt(k){return w!==k?(o.useProgram(k),w=k,!0):!1}const Ve={[uo]:o.FUNC_ADD,[tT]:o.FUNC_SUBTRACT,[eT]:o.FUNC_REVERSE_SUBTRACT};Ve[nT]=o.MIN,Ve[iT]=o.MAX;const pe={[aT]:o.ZERO,[rT]:o.ONE,[sT]:o.SRC_COLOR,[vx]:o.SRC_ALPHA,[dT]:o.SRC_ALPHA_SATURATE,[cT]:o.DST_COLOR,[lT]:o.DST_ALPHA,[oT]:o.ONE_MINUS_SRC_COLOR,[Sx]:o.ONE_MINUS_SRC_ALPHA,[fT]:o.ONE_MINUS_DST_COLOR,[uT]:o.ONE_MINUS_DST_ALPHA,[hT]:o.CONSTANT_COLOR,[pT]:o.ONE_MINUS_CONSTANT_COLOR,[mT]:o.CONSTANT_ALPHA,[gT]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(k,Ct,xt,Nt,Gt,Et,Jt,Ht,Ce,ue){if(k===za){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(dt(o.BLEND),M=!0),k!==$E){if(k!==x||ue!==V){if((P!==uo||N!==uo)&&(o.blendEquation(o.FUNC_ADD),P=uo,N=uo),ue)switch(k){case Ul:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jv:o.blendFunc(o.ONE,o.ONE);break;case $v:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case tS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Be("WebGLState: Invalid blending: ",k);break}else switch(k){case Ul:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case jv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case $v:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tS:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",k);break}G=null,C=null,U=null,D=null,T.set(0,0,0),L=0,x=k,V=ue}return}Gt=Gt||Ct,Et=Et||xt,Jt=Jt||Nt,(Ct!==P||Gt!==N)&&(o.blendEquationSeparate(Ve[Ct],Ve[Gt]),P=Ct,N=Gt),(xt!==G||Nt!==C||Et!==U||Jt!==D)&&(o.blendFuncSeparate(pe[xt],pe[Nt],pe[Et],pe[Jt]),G=xt,C=Nt,U=Et,D=Jt),(Ht.equals(T)===!1||Ce!==L)&&(o.blendColor(Ht.r,Ht.g,Ht.b,Ce),T.copy(Ht),L=Ce),x=k,V=!1}function xe(k,Ct){k.side===Ia?Tt(o.CULL_FACE):dt(o.CULL_FACE);let xt=k.side===$n;Ct&&(xt=!xt),ee(xt),k.blending===Ul&&k.transparent===!1?ge(za):ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const Nt=k.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){z!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),z=k)}function ie(k){k!==QE?(dt(o.CULL_FACE),k!==Y&&(k===Jv?o.cullFace(o.BACK):k===JE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),Y=k}function Xe(k){k!==nt&&(X&&o.lineWidth(k),nt=k)}function pn(k,Ct,xt){k?(dt(o.POLYGON_OFFSET_FILL),(K!==Ct||tt!==xt)&&(K=Ct,tt=xt,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,xt))):Tt(o.POLYGON_OFFSET_FILL)}function Ie(k){k?dt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function tn(k){k===void 0&&(k=o.TEXTURE0+q-1),ht!==k&&(o.activeTexture(k),ht=k)}function W(k,Ct,xt){xt===void 0&&(ht===null?xt=o.TEXTURE0+q-1:xt=ht);let Nt=yt[xt];Nt===void 0&&(Nt={type:void 0,texture:void 0},yt[xt]=Nt),(Nt.type!==k||Nt.texture!==Ct)&&(ht!==xt&&(o.activeTexture(xt),ht=xt),o.bindTexture(k,Ct||Q[k]),Nt.type=k,Nt.texture=Ct)}function an(){const k=yt[ht];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function E(){try{o.texSubImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function et(){try{o.texSubImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function bt(){try{o.texStorage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function Dt(){try{o.texStorage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function gt(){try{o.texImage2D(...arguments)}catch(k){Be("WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){Be("WebGLState:",k)}}function wt(k){return g[k]!==void 0?g[k]:o.getParameter(k)}function jt(k,Ct){g[k]!==Ct&&(o.pixelStorei(k,Ct),g[k]=Ct)}function Pt(k){B.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),B.copy(k))}function Ot(k){mt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),mt.copy(k))}function Vt(k,Ct){let xt=m.get(Ct);xt===void 0&&(xt=new WeakMap,m.set(Ct,xt));let Nt=xt.get(k);Nt===void 0&&(Nt=o.getUniformBlockIndex(Ct,k.name),xt.set(k,Nt))}function ne(k,Ct){const Nt=m.get(Ct).get(k);p.get(Ct)!==Nt&&(o.uniformBlockBinding(Ct,Nt,k.__bindingPointIndex),p.set(Ct,Nt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},g={},ht=null,yt={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,P=null,G=null,C=null,N=null,U=null,D=null,T=new Le(0,0,0),L=0,V=!1,z=null,Y=null,nt=null,K=null,tt=null,B.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:dt,disable:Tt,bindFramebuffer:It,drawBuffers:_t,useProgram:Rt,setBlending:ge,setMaterial:xe,setFlipSided:ee,setCullFace:ie,setLineWidth:Xe,setPolygonOffset:pn,setScissorTest:Ie,activeTexture:tn,bindTexture:W,unbindTexture:an,compressedTexImage2D:Pe,compressedTexImage3D:O,texImage2D:gt,texImage3D:Mt,pixelStorei:jt,getParameter:wt,updateUBOMapping:Vt,uniformBlockBinding:ne,texStorage2D:bt,texStorage3D:Dt,texSubImage2D:E,texSubImage3D:et,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:Ot,reset:le}}function sC(o,e,i,r,l,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Oe,S=new WeakMap,g=new Set;let v;const y=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return R?new OffscreenCanvas(O,E):Yc("canvas")}function M(O,E,et){let lt=1;const pt=Pe(O);if((pt.width>et||pt.height>et)&&(lt=et/Math.max(pt.width,pt.height)),lt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const bt=Math.floor(lt*pt.width),Dt=Math.floor(lt*pt.height);v===void 0&&(v=w(bt,Dt));const gt=E?w(bt,Dt):v;return gt.width=bt,gt.height=Dt,gt.getContext("2d").drawImage(O,0,0,bt,Dt),oe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+bt+"x"+Dt+")."),gt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function x(O){return O.generateMipmaps}function P(O){o.generateMipmap(O)}function G(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,E,et,lt,pt,bt=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Dt;lt&&(Dt=e.get("EXT_texture_norm16"),Dt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8),et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.R16_EXT),et===o.SHORT&&Dt&&(gt=Dt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8),et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RG16_EXT),et===o.SHORT&&Dt&&(gt=Dt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGB16_EXT),et===o.SHORT&&Dt&&(gt=Dt.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=bt?qc:De.getTransfer(pt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=Mt===Ye?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGBA16_EXT),et===o.SHORT&&Dt&&(gt=Dt.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function N(O,E){let et;return O?E===null||E===ca||E===Il?et=o.DEPTH24_STENCIL8:E===sa?et=o.DEPTH32F_STENCIL8:E===Pl&&(et=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ca||E===Il?et=o.DEPTH_COMPONENT24:E===sa?et=o.DEPTH_COMPONENT32F:E===Pl&&(et=o.DEPTH_COMPONENT16),et}function U(O,E){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==On&&O.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function D(O){const E=O.target;E.removeEventListener("dispose",D),L(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&g.delete(E)}function T(O){const E=O.target;E.removeEventListener("dispose",T),z(E)}function L(O){const E=r.get(O);if(E.__webglInit===void 0)return;const et=O.source,lt=y.get(et);if(lt){const pt=lt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&V(O),Object.keys(lt).length===0&&y.delete(et)}r.remove(O)}function V(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const et=O.source,lt=y.get(et);delete lt[E.__cacheKey],d.memory.textures--}function z(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let pt=0;pt<E.__webglFramebuffer[lt].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[lt][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[lt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=O.textures;for(let lt=0,pt=et.length;lt<pt;lt++){const bt=r.get(et[lt]);bt.__webglTexture&&(o.deleteTexture(bt.__webglTexture),d.memory.textures--),r.remove(et[lt])}r.remove(O)}let Y=0;function nt(){Y=0}function K(){return Y}function tt(O){Y=O}function q(){const O=Y;return O>=l.maxTextures&&oe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),Y+=1,O}function X(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ut(O,E){const et=r.get(O);if(O.isVideoTexture&&W(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&et.__version!==O.version){const lt=O.image;if(lt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(et,O,E);return}}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function at(O,E){const et=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){Tt(et,O,E);return}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function ht(O,E){const et=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){Tt(et,O,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function yt(O,E){const et=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&et.__version!==O.version){It(et,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const Qt={[Sp]:o.REPEAT,[Ba]:o.CLAMP_TO_EDGE,[xp]:o.MIRRORED_REPEAT},Yt={[On]:o.NEAREST,[ST]:o.NEAREST_MIPMAP_NEAREST,[dc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[Lh]:o.LINEAR_MIPMAP_NEAREST,[ns]:o.LINEAR_MIPMAP_LINEAR},B={[ET]:o.NEVER,[CT]:o.ALWAYS,[TT]:o.LESS,[ym]:o.LEQUAL,[bT]:o.EQUAL,[Em]:o.GEQUAL,[AT]:o.GREATER,[RT]:o.NOTEQUAL};function mt(O,E){if(E.type===sa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Lh||E.magFilter===dc||E.magFilter===ns||E.minFilter===Fn||E.minFilter===Lh||E.minFilter===dc||E.minFilter===ns)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Qt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Qt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Qt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Yt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Yt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==dc&&E.minFilter!==ns||E.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(O,E){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",D));const lt=E.source;let pt=y.get(lt);pt===void 0&&(pt={},y.set(lt,pt));const bt=X(E);if(bt!==O.__cacheKey){pt[bt]===void 0&&(pt[bt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),pt[bt].usedTimes++;const Dt=pt[O.__cacheKey];Dt!==void 0&&(pt[O.__cacheKey].usedTimes--,Dt.usedTimes===0&&V(E)),O.__cacheKey=bt,O.__webglTexture=pt[bt].texture}return et}function Q(O,E,et){return Math.floor(Math.floor(O/et)/E)}function dt(O,E,et,lt){const bt=O.updateRanges;if(bt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,lt,E.data);else{bt.sort((jt,Pt)=>jt.start-Pt.start);let Dt=0;for(let jt=1;jt<bt.length;jt++){const Pt=bt[Dt],Ot=bt[jt],Vt=Pt.start+Pt.count,ne=Q(Ot.start,E.width,4),le=Q(Pt.start,E.width,4);Ot.start<=Vt+1&&ne===le&&Q(Ot.start+Ot.count-1,E.width,4)===ne?Pt.count=Math.max(Pt.count,Ot.start+Ot.count-Pt.start):(++Dt,bt[Dt]=Ot)}bt.length=Dt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),wt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let jt=0,Pt=bt.length;jt<Pt;jt++){const Ot=bt[jt],Vt=Math.floor(Ot.start/4),ne=Math.ceil(Ot.count/4),le=Vt%E.width,k=Math.floor(Vt/E.width),Ct=ne,xt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Ct,xt,et,lt,E.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,wt)}}function Tt(O,E,et){let lt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=o.TEXTURE_3D);const pt=At(O,E),bt=E.source;i.bindTexture(lt,O.__webglTexture,o.TEXTURE0+et);const Dt=r.get(bt);if(bt.version!==Dt.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xt=De.getPrimaries(De.workingColorSpace),Nt=E.colorSpace===Er?null:De.getPrimaries(E.colorSpace),Gt=E.colorSpace===Er||xt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=M(E.image,!1,l.maxTextureSize);Mt=an(E,Mt);const wt=f.convert(E.format,E.colorSpace),jt=f.convert(E.type);let Pt=C(E.internalFormat,wt,jt,E.normalized,E.colorSpace,E.isVideoTexture);mt(lt,E);let Ot;const Vt=E.mipmaps,ne=E.isVideoTexture!==!0,le=Dt.__version===void 0||pt===!0,k=bt.dataReady,Ct=U(E,Mt);if(E.isDepthTexture)Pt=N(E.format===is,E.type),le&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Pt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,null));else if(E.isDataTexture)if(Vt.length>0){ne&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data);E.generateMipmaps=!1}else ne?(le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height),k&&dt(E,Mt,wt,jt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Vt[0].width,Vt[0].height,Mt.depth);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)if(Ot=Vt[xt],E.format!==zi)if(wt!==null)if(ne){if(k)if(E.layerUpdates.size>0){const Gt=TS(Ot.width,Ot.height,E.format,E.type);for(const Et of E.layerUpdates){const Jt=Ot.data.subarray(Et*Gt/Ot.data.BYTES_PER_ELEMENT,(Et+1)*Gt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,Et,Ot.width,Ot.height,1,wt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,wt,jt,Ot.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ne&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],E.format!==zi?wt!==null?ne?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,Ot.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data)}else if(E.isDataArrayTexture)if(ne){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Mt.width,Mt.height,Mt.depth),k)if(E.layerUpdates.size>0){const xt=TS(Mt.width,Mt.height,E.format,E.type);for(const Nt of E.layerUpdates){const Gt=Mt.data.subarray(Nt*xt/Mt.data.BYTES_PER_ELEMENT,(Nt+1)*xt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Nt,Mt.width,Mt.height,1,wt,jt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isData3DTexture)ne?(le&&i.texStorage3D(o.TEXTURE_3D,Ct,Pt,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isFramebufferTexture){if(le)if(ne)i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height);else{let xt=Mt.width,Nt=Mt.height;for(let Gt=0;Gt<Ct;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Pt,xt,Nt,0,wt,jt,null),xt>>=1,Nt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const xt=o.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),Mt.parentNode!==xt){xt.appendChild(Mt),g.add(E),xt.onpaint=Nt=>{const Gt=Nt.changedElements;for(const Et of g)Gt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Gt=o.RGBA,Et=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Gt,Et,Jt,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(ne&&le){const xt=Pe(Vt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,wt,jt,Ot):i.texImage2D(o.TEXTURE_2D,xt,Pt,wt,jt,Ot);E.generateMipmaps=!1}else if(ne){if(le){const xt=Pe(Mt);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,jt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,wt,jt,Mt);x(E)&&P(lt),Dt.__version=bt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function It(O,E,et){if(E.image.length!==6)return;const lt=At(O,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const bt=r.get(pt);if(pt.version!==bt.__version||lt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=De.getPrimaries(De.workingColorSpace),gt=E.colorSpace===Er?null:De.getPrimaries(E.colorSpace),Mt=E.colorSpace===Er||Dt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,jt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let Et=0;Et<6;Et++)!wt&&!jt?Pt[Et]=M(E.image[Et],!0,l.maxCubemapSize):Pt[Et]=jt?E.image[Et].image:E.image[Et],Pt[Et]=an(E,Pt[Et]);const Ot=Pt[0],Vt=f.convert(E.format,E.colorSpace),ne=f.convert(E.type),le=C(E.internalFormat,Vt,ne,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ct=bt.__version===void 0||lt===!0,xt=pt.dataReady;let Nt=U(E,Ot);mt(o.TEXTURE_CUBE_MAP,E);let Gt;if(wt){k&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Ot.width,Ot.height);for(let Et=0;Et<6;Et++){Gt=Pt[Et].mipmaps;for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];E.format!==zi?Vt!==null?k?xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,Ht.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Ht.width,Ht.height,0,Ht.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,ne,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Ht.width,Ht.height,0,Vt,ne,Ht.data)}}}else{if(Gt=E.mipmaps,k&&Ct){Gt.length>0&&Nt++;const Et=Pe(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(jt){k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Pt[Et].width,Pt[Et].height,Vt,ne,Pt[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,Pt[Et].width,Pt[Et].height,0,Vt,ne,Pt[Et].data);for(let Jt=0;Jt<Gt.length;Jt++){const Ce=Gt[Jt].image[Et].image;k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Ce.width,Ce.height,Vt,ne,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,Ce.width,Ce.height,0,Vt,ne,Ce.data)}}else{k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Vt,ne,Pt[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,Vt,ne,Pt[Et]);for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Vt,ne,Ht.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,Vt,ne,Ht.image[Et])}}}x(E)&&P(o.TEXTURE_CUBE_MAP),bt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,et,lt,pt,bt){const Dt=f.convert(et.format,et.colorSpace),gt=f.convert(et.type),Mt=C(et.internalFormat,Dt,gt,et.normalized,et.colorSpace),wt=r.get(E),jt=r.get(et);if(jt.__renderTarget=E,!wt.__hasExternalTextures){const Pt=Math.max(1,E.width>>bt),Ot=Math.max(1,E.height>>bt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,bt,Mt,Pt,Ot,E.depth,0,Dt,gt,null):i.texImage2D(pt,bt,Mt,Pt,Ot,0,Dt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,0,Ie(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,bt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const lt=E.depthTexture,pt=lt&&lt.isDepthTexture?lt.type:null,bt=N(E.stencilBuffer,pt),Dt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),bt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),bt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,bt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,O)}else{const lt=E.textures;for(let pt=0;pt<lt.length;pt++){const bt=lt[pt],Dt=f.convert(bt.format,bt.colorSpace),gt=f.convert(bt.type),Mt=C(bt.internalFormat,Dt,gt,bt.normalized,bt.colorSpace);tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),Mt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),Mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ve(O,E,et){const lt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=r.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const wt=f.convert(E.depthTexture.format),jt=f.convert(E.depthTexture.type);let Pt;E.depthTexture.format===Ga?Pt=o.DEPTH_COMPONENT24:E.depthTexture.format===is&&(Pt=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Pt,E.width,E.height,0,wt,jt,null)}}else ut(E.depthTexture,0);const bt=pt.__webglTexture,Dt=Ie(E),gt=lt?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,Mt=E.depthTexture.format===is?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ga)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else if(E.depthTexture.format===is)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(O){const E=r.get(O),et=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const lt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",pt)};lt.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=lt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(et)for(let lt=0;lt<6;lt++)Ve(E.__webglFramebuffer[lt],O,lt);else{const lt=O.texture.mipmaps;lt&&lt.length>0?Ve(E.__webglFramebuffer[0],O,0):Ve(E.__webglFramebuffer,O,0)}else if(et){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=o.createRenderbuffer(),Rt(E.__webglDepthbuffer[lt],O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}else{const lt=O.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Rt(E.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(O,E,et){const lt=r.get(O);E!==void 0&&_t(lt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&pe(O)}function xe(O){const E=O.texture,et=r.get(O),lt=r.get(E);O.addEventListener("dispose",T);const pt=O.textures,bt=O.isWebGLCubeRenderTarget===!0,Dt=pt.length>1;if(Dt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=E.version,d.memory.textures++),bt){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)et.__webglFramebuffer[gt][Mt]=o.createFramebuffer()}else et.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)et.__webglFramebuffer[gt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Dt)for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=r.get(pt[gt]);wt.__webglTexture===void 0&&(wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&tn(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<pt.length;gt++){const Mt=pt[gt];et.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);const wt=f.convert(Mt.format,Mt.colorSpace),jt=f.convert(Mt.type),Pt=C(Mt.internalFormat,wt,jt,Mt.normalized,Mt.colorSpace,O.isXRRenderTarget===!0),Ot=Ie(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Pt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(bt){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(et.__webglFramebuffer[gt][Mt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else _t(et.__webglFramebuffer[gt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(E)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=pt[gt],jt=r.get(wt);let Pt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,jt.__webglTexture),mt(Pt,wt),_t(et.__webglFramebuffer,O,wt,o.COLOR_ATTACHMENT0+gt,Pt,0),x(wt)&&P(Pt)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(gt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,lt.__webglTexture),mt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(et.__webglFramebuffer[Mt],O,E,o.COLOR_ATTACHMENT0,gt,Mt);else _t(et.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,gt,0);x(E)&&P(gt),i.unbindTexture()}O.depthBuffer&&pe(O)}function ee(O){const E=O.textures;for(let et=0,lt=E.length;et<lt;et++){const pt=E[et];if(x(pt)){const bt=G(O),Dt=r.get(pt).__webglTexture;i.bindTexture(bt,Dt),P(bt),i.unbindTexture()}}}const ie=[],Xe=[];function pn(O){if(O.samples>0){if(tn(O)===!1){const E=O.textures,et=O.width,lt=O.height;let pt=o.COLOR_BUFFER_BIT;const bt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=r.get(O),gt=E.length>1;if(gt)for(let wt=0;wt<E.length;wt++)i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Mt=O.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=r.get(E[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,jt,0)}o.blitFramebuffer(0,0,et,lt,0,0,et,lt,pt,o.NEAREST),p===!0&&(ie.length=0,Xe.length=0,ie.push(o.COLOR_ATTACHMENT0+wt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(bt),Xe.push(bt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<E.length;wt++){i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=r.get(E[wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,jt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&p){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(O){return Math.min(l.maxSamples,O.samples)}function tn(O){const E=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(O){const E=d.render.frame;S.get(O)!==E&&(S.set(O,E),O.update())}function an(O,E){const et=O.colorSpace,lt=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Wc&&et!==Er&&(De.getTransfer(et)===Ye?(lt!==zi||pt!==hi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",et)),E}function Pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=nt,this.getTextureUnits=K,this.setTextureUnits=tt,this.setTexture2D=ut,this.setTexture2DArray=at,this.setTexture3D=ht,this.setTextureCube=yt,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function oC(o,e){function i(r,l=Er){let f;const d=De.getTransfer(l);if(r===hi)return o.UNSIGNED_BYTE;if(r===_m)return o.UNSIGNED_SHORT_4_4_4_4;if(r===vm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Nx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ux)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===wx)return o.BYTE;if(r===Dx)return o.SHORT;if(r===Pl)return o.UNSIGNED_SHORT;if(r===gm)return o.INT;if(r===ca)return o.UNSIGNED_INT;if(r===sa)return o.FLOAT;if(r===fa)return o.HALF_FLOAT;if(r===Lx)return o.ALPHA;if(r===Ox)return o.RGB;if(r===zi)return o.RGBA;if(r===Ga)return o.DEPTH_COMPONENT;if(r===is)return o.DEPTH_STENCIL;if(r===Px)return o.RED;if(r===Sm)return o.RED_INTEGER;if(r===rs)return o.RG;if(r===xm)return o.RG_INTEGER;if(r===Mm)return o.RGBA_INTEGER;if(r===Bc||r===zc||r===Fc||r===Hc)if(d===Ye)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Bc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Bc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mp||r===yp||r===Ep||r===Tp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Mp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ep)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Tp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Xc||r===Dp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===bp||r===Ap)return d===Ye?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Rp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(r===Cp)return f.COMPRESSED_R11_EAC;if(r===wp)return f.COMPRESSED_SIGNED_R11_EAC;if(r===Xc)return f.COMPRESSED_RG11_EAC;if(r===Dp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Np||r===Up||r===Lp||r===Op||r===Pp||r===Ip||r===Bp||r===zp||r===Fp||r===Hp||r===Gp||r===Vp||r===Xp||r===kp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===Np)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Up)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Lp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Op)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ip)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wp||r===qp||r===Yp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Wp)return d===Ye?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Zp||r===Kp||r===kc||r===Qp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Zp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Kp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Qp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Il?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const lC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uC=`
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

}`;class cC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Xx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new da({vertexShader:lC,fragmentShader:uC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hn(new pa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fC extends ss{constructor(e,i){super();const r=this;let l=null,f=1,d=null,h="local-floor",p=1,m=null,S=null,g=null,v=null,y=null,R=null;const w=typeof XRWebGLBinding<"u",M=new cC,x={},P=i.getContextAttributes();let G=null,C=null;const N=[],U=[],D=new Oe;let T=null,L=null;const V=new Ri;V.viewport=new sn;const z=new Ri;z.viewport=new sn;const Y=[V,z],nt=new S1;let K=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=N[Q];return dt===void 0&&(dt=new Vh,N[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=N[Q];return dt===void 0&&(dt=new Vh,N[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=N[Q];return dt===void 0&&(dt=new Vh,N[Q]=dt),dt.getHandSpace()};function q(Q){const dt=U.indexOf(Q.inputSource);if(dt===-1)return;const Tt=N[dt];Tt!==void 0&&(Tt.update(Q.inputSource,Q.frame,m||d),Tt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",X),l.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<N.length;Q++){const dt=U[Q];dt!==null&&(U[Q]=null,N[Q].disconnect(dt))}K=null,tt=null,M.reset();for(const Q in x)delete x[Q];if(e.setRenderTarget(G),y=null,v=null,g=null,l=null,C=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),L!==null){const Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,r.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",X),l.addEventListener("inputsourceschange",ut),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,It=null,_t=null;P.depth&&(_t=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=P.stencil?is:Ga,It=P.stencil?Il:ca);const Rt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};g=this.getBinding(),v=g.createProjectionLayer(Rt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Fi(v.textureWidth,v.textureHeight,{format:zi,type:hi,depthTexture:new zl(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Fi(y.framebufferWidth,y.framebufferHeight,{format:zi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ut(Q){for(let dt=0;dt<Q.removed.length;dt++){const Tt=Q.removed[dt],It=U.indexOf(Tt);It>=0&&(U[It]=null,N[It].disconnect(Tt))}for(let dt=0;dt<Q.added.length;dt++){const Tt=Q.added[dt];let It=U.indexOf(Tt);if(It===-1){for(let Rt=0;Rt<N.length;Rt++)if(Rt>=U.length){U.push(Tt),It=Rt;break}else if(U[Rt]===null){U[Rt]=Tt,It=Rt;break}if(It===-1)break}const _t=N[It];_t&&_t.connect(Tt)}}const at=new $,ht=new $;function yt(Q,dt,Tt){at.setFromMatrixPosition(dt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const It=at.distanceTo(ht),_t=dt.projectionMatrix.elements,Rt=Tt.projectionMatrix.elements,Ve=_t[14]/(_t[10]-1),pe=_t[14]/(_t[10]+1),ge=(_t[9]+1)/_t[5],xe=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(Rt[8]+1)/Rt[0],Xe=Ve*ee,pn=Ve*ie,Ie=It/(-ee+ie),tn=Ie*-ee;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(tn),Q.translateZ(Ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_t[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const W=Ve+Ie,an=pe+Ie,Pe=Xe-tn,O=pn+(It-tn),E=ge*pe/an*W,et=xe*pe/an*W;Q.projectionMatrix.makePerspective(Pe,O,E,et,W,an),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Qt(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let dt=Q.near,Tt=Q.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),nt.near=z.near=V.near=dt,nt.far=z.far=V.far=Tt,(K!==nt.near||tt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),K=nt.near,tt=nt.far),nt.layers.mask=Q.layers.mask|6,V.layers.mask=nt.layers.mask&-5,z.layers.mask=nt.layers.mask&-3;const It=Q.parent,_t=nt.cameras;Qt(nt,It);for(let Rt=0;Rt<_t.length;Rt++)Qt(_t[Rt],It);_t.length===2?yt(nt,V,z):nt.projectionMatrix.copy(V.projectionMatrix),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),Yt(Q,nt,It)};function Yt(Q,dt,Tt){Tt===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(Tt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=jp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(Q){p=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(Q){return x[Q]};let B=null;function mt(Q,dt){if(S=dt.getViewerPose(m||d),R=dt,S!==null){const Tt=S.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let It=!1;Tt.length!==nt.cameras.length&&(nt.cameras.length=0,It=!0);for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe];let xe=null;if(y!==null)xe=y.getViewport(ge);else{const ie=g.getViewSubImage(v,ge);xe=ie.viewport,pe===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let ee=Y[pe];ee===void 0&&(ee=new Ri,ee.layers.enable(pe),ee.viewport=new sn,Y[pe]=ee),ee.matrix.fromArray(ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(xe.x,xe.y,xe.width,xe.height),pe===0&&(nt.matrix.copy(ee.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),It===!0&&nt.cameras.push(ee)}const _t=l.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const pe=g.getDepthInformation(Tt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(_t&&_t.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe].camera;if(ge){let xe=x[ge];xe||(xe=new Xx,x[ge]=xe);const ee=g.getCameraImage(ge);xe.sourceTexture=ee}}}}for(let Tt=0;Tt<N.length;Tt++){const It=U[Tt],_t=N[Tt];It!==null&&_t!==void 0&&_t.update(It,dt,m||d)}B&&B(Q,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),R=null}const At=new qx;At.setAnimationLoop(mt),this.setAnimationLoop=function(Q){B=Q},this.dispose=function(){}}}const dC=new nn,$x=new fe;$x.set(-1,0,0,0,1,0,0,0,1);function hC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,kx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,G,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),g(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),w(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,P,G):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===$n&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===$n&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=e.get(x),G=P.envMap,C=P.envMapRotation;G&&(M.envMap.value=G,M.envMapRotation.value.setFromMatrix4(dC.makeRotationFromEuler(C)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply($x),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,P,G){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=G*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const P=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function pC(o,e,i,r){let l={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const U=N.program;r.uniformBlockBinding(C,U)}function m(C,N){let U=l[C.id];U===void 0&&(M(C),U=S(C),l[C.id]=U,C.addEventListener("dispose",P));const D=N.program;r.updateUBOMapping(C,D);const T=e.render.frame;f[C.id]!==T&&(v(C),f[C.id]=T)}function S(C){const N=g();C.__bindingPointIndex=N;const U=o.createBuffer(),D=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,D,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function g(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const N=l[C.id],U=C.uniforms,D=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let T=0,L=U.length;T<L;T++){const V=U[T];if(Array.isArray(V))for(let z=0,Y=V.length;z<Y;z++)y(V[z],T,z,D);else y(V,T,0,D)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,N,U,D){if(w(C,N,U,D)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let V=0;for(let z=0;z<L.length;z++){const Y=L[z],nt=x(Y);R(Y,C.__data,V),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function R(C,N,U){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,U)}function w(C,N,U,D){const T=C.value,L=N+"_"+U;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:ArrayBuffer.isView(T)?D[L]=T.slice():D[L]=T.clone(),!0;{const V=D[L];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return D[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function M(C){const N=C.uniforms;let U=0;const D=16;for(let L=0,V=N.length;L<V;L++){const z=Array.isArray(N[L])?N[L]:[N[L]];for(let Y=0,nt=z.length;Y<nt;Y++){const K=z[Y],tt=Array.isArray(K.value)?K.value:[K.value];for(let q=0,X=tt.length;q<X;q++){const ut=tt[q],at=x(ut),ht=U%D,yt=ht%at.boundary,Qt=ht+yt;U+=yt,Qt!==0&&D-Qt<at.storage&&(U+=D-Qt),K.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=at.storage}}}const T=U%D;return T>0&&(U+=D-T),C.__size=U,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),N}function P(C){const N=C.target;N.removeEventListener("dispose",P);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete f[N.id]}function G(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},f={}}return{bind:p,update:m,dispose:G}}const mC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function gC(){return ia===null&&(ia=new i1(mC,16,16,rs,fa),ia.name="DFG_LUT",ia.minFilter=Fn,ia.magFilter=Fn,ia.wrapS=Ba,ia.wrapT=Ba,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class _C{constructor(e={}){const{canvas:i=NT(),context:r=null,depth:l=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=hi}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=d;const w=y,M=new Set([Mm,xm,Sm]),x=new Set([hi,ca,Pl,Il,_m,vm]),P=new Uint32Array(4),G=new Int32Array(4),C=new $;let N=null,U=null;const D=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,Y=null,nt=null,K=null,tt=null;this._outputColorSpace=di;let q=0,X=0,ut=null,at=-1,ht=null;const yt=new sn,Qt=new sn;let Yt=null;const B=new Le(0);let mt=0,At=i.width,Q=i.height,dt=1,Tt=null,It=null;const _t=new sn(0,0,At,Q),Rt=new sn(0,0,At,Q);let Ve=!1;const pe=new Am;let ge=!1,xe=!1;const ee=new nn,ie=new $,Xe=new sn,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function tn(){return ut===null?dt:1}let W=r;function an(b,F){return i.getContext(b,F)}let Pe,O,E,et,lt,pt,bt,Dt,gt,Mt,wt,jt,Pt,Ot,Vt,ne,le,k,Ct,xt,Nt,Gt,Et;try{const b={alpha:!0,depth:l,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${mm}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ti,!1),W===null){const F="webgl2";if(W=an(F,b),W===null)throw an(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),Be("WebGLRenderer: "+b.message),b}function Jt(){Pe=new gR(W),Pe.init(),Nt=new oC(W,Pe),O=new sR(W,Pe,e,Nt),E=new rC(W,Pe),O.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),nt=W.createFramebuffer(),K=W.createFramebuffer(),tt=W.createFramebuffer(),et=new SR(W),lt=new W3,pt=new sC(W,Pe,E,lt,O,Nt,et),bt=new mR(V),Dt=new M1(W),Gt=new aR(W,Dt),gt=new _R(W,Dt,et,Gt),Mt=new MR(W,gt,Dt,Gt,et),k=new xR(W,O,pt),Vt=new oR(lt),wt=new k3(V,bt,Pe,O,Gt,Vt),jt=new hC(V,lt),Pt=new Y3,Ot=new $3(Pe),le=new iR(V,bt,E,Mt,R,p),ne=new aC(V,Mt,O),Et=new pC(W,et,O,E),Ct=new rR(W,Pe,et),xt=new vR(W,Pe,et),et.programs=wt.programs,V.capabilities=O,V.extensions=Pe,V.properties=lt,V.renderLists=Pt,V.shadowMap=ne,V.state=E,V.info=et}w!==hi&&(L=new ER(w,i.width,i.height,h,l,f));const Ht=new fC(V,W);this.xr=Ht,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(b){b!==void 0&&(dt=b,this.setSize(At,Q,!1))},this.getSize=function(b){return b.set(At,Q)},this.setSize=function(b,F,ft=!0){if(Ht.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}At=b,Q=F,i.width=Math.floor(b*dt),i.height=Math.floor(F*dt),ft===!0&&(i.style.width=b+"px",i.style.height=F+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(At*dt,Q*dt).floor()},this.setDrawingBufferSize=function(b,F,ft){At=b,Q=F,dt=ft,i.width=Math.floor(b*ft),i.height=Math.floor(F*ft),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(w===hi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(yt)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,F,ft,rt){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,F,ft,rt),E.viewport(yt.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,F,ft,rt){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,F,ft,rt),E.scissor(Qt.copy(Rt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){E.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){Tt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,ft=!0){let rt=0;if(b){let st=!1;if(ut!==null){const Bt=ut.texture.format;st=M.has(Bt)}if(st){const Bt=ut.texture.type,Xt=x.has(Bt),Ut=le.getClearColor(),qt=le.getClearAlpha(),Zt=Ut.r,re=Ut.g,ce=Ut.b;Xt?(P[0]=Zt,P[1]=re,P[2]=ce,P[3]=qt,W.clearBufferuiv(W.COLOR,0,P)):(G[0]=Zt,G[1]=re,G[2]=ce,G[3]=qt,W.clearBufferiv(W.COLOR,0,G))}else rt|=W.COLOR_BUFFER_BIT}F&&(rt|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(rt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&W.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Y=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),le.dispose(),Pt.dispose(),Ot.dispose(),lt.dispose(),bt.dispose(),Mt.dispose(),Gt.dispose(),Et.dispose(),wt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Cr),Ht.removeEventListener("sessionend",Xa),Vi.stop()};function Ce(b){b.preventDefault(),iS("WebGLRenderer: Context Lost."),z=!0}function ue(){iS("WebGLRenderer: Context Restored."),z=!1;const b=et.autoReset,F=ne.enabled,ft=ne.autoUpdate,rt=ne.needsUpdate,st=ne.type;Jt(),et.autoReset=b,ne.enabled=F,ne.autoUpdate=ft,ne.needsUpdate=rt,ne.type=st}function ti(b){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mi(b){const F=b.target;F.removeEventListener("dispose",mi),$c(F)}function $c(b){ls(b),lt.remove(b)}function ls(b){const F=lt.get(b).programs;F!==void 0&&(F.forEach(function(ft){wt.releaseProgram(ft)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,ft,rt,st,Bt){F===null&&(F=pn);const Xt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ut=No(b,F,ft,rt,st);E.setMaterial(rt,Xt);let qt=ft.index,Zt=1;if(rt.wireframe===!0){if(qt=gt.getWireframeAttribute(ft),qt===void 0)return;Zt=2}const re=ft.drawRange,ce=ft.attributes.position;let kt=re.start*Zt,Me=(re.start+re.count)*Zt;Bt!==null&&(kt=Math.max(kt,Bt.start*Zt),Me=Math.min(Me,(Bt.start+Bt.count)*Zt)),qt!==null?(kt=Math.max(kt,0),Me=Math.min(Me,qt.count)):ce!=null&&(kt=Math.max(kt,0),Me=Math.min(Me,ce.count));const _e=Me-kt;if(_e<0||_e===1/0)return;Gt.setup(st,rt,Ut,ft,qt);let Ze,He=Ct;if(qt!==null&&(Ze=Dt.get(qt),He=xt,He.setIndex(Ze)),st.isMesh)rt.wireframe===!0?(E.setLineWidth(rt.wireframeLinewidth*tn()),He.setMode(W.LINES)):He.setMode(W.TRIANGLES);else if(st.isLine){let xn=rt.linewidth;xn===void 0&&(xn=1),E.setLineWidth(xn*tn()),st.isLineSegments?He.setMode(W.LINES):st.isLineLoop?He.setMode(W.LINE_LOOP):He.setMode(W.LINE_STRIP)}else st.isPoints?He.setMode(W.POINTS):st.isSprite&&He.setMode(W.TRIANGLES);if(st.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))He.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const xn=st._multiDrawStarts,zt=st._multiDrawCounts,on=st._multiDrawCount,we=qt?Dt.get(qt).bytesPerElement:1,Gn=lt.get(rt).currentProgram.getUniforms();for(let ei=0;ei<on;ei++)Gn.setValue(W,"_gl_DrawID",ei),He.render(xn[ei]/we,zt[ei])}else if(st.isInstancedMesh)He.renderInstances(kt,_e,st.count);else if(ft.isInstancedBufferGeometry){const xn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,zt=Math.min(ft.instanceCount,xn);He.renderInstances(kt,_e,zt)}else He.render(kt,_e)};function Rr(b,F,ft,rt){Y!==null&&b.isNodeMaterial&&Y.setObject(rt,b),ge===!0&&Vt.setState(b,ft,!1),b.transparent===!0&&b.side===Ia&&b.forceSinglePass===!1?(b.side=$n,b.needsUpdate=!0,wr(b,F,rt),b.side=pi,b.needsUpdate=!0,wr(b,F,rt),b.side=Ia):wr(b,F,rt)}this.compile=function(b,F,ft=null){ft===null&&(ft=b),Y!==null&&Y.renderStart(b,F,ft),U=Ot.get(ft),U.init(F),T.push(U),ft.traverseVisible(function(st){st.isLight&&st.layers.test(F.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),b!==ft&&b.traverseVisible(function(st){st.isLight&&st.layers.test(F.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),U.setupLights(),Y!==null&&Y.updateLights(U.state.lightsArray),xe=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,xe),ge===!0&&Vt.setGlobalState(this.clippingPlanes,F),Y!==null&&ne.render(U.state.shadowsArray,ft,F);const rt=new Set;return b.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Bt=st.material;if(Bt)if(Array.isArray(Bt))for(let Xt=0;Xt<Bt.length;Xt++){const Ut=Bt[Xt];Rr(Ut,ft,F,st),rt.add(Ut)}else Rr(Bt,ft,F,st),rt.add(Bt)}),U=T.pop(),Y!==null&&Y.renderEnd(),rt},this.compileAsync=function(b,F,ft=null){const rt=this.compile(b,F,ft);return new Promise(st=>{function Bt(){if(rt.forEach(function(Xt){const qt=lt.get(Xt).currentProgram;(qt===void 0||qt.isReady())&&rt.delete(Xt)}),rt.size===0){st(b);return}setTimeout(Bt,10)}Pe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Va=null;function ma(b){Va&&Va(b)}function Cr(){Vi.stop()}function Xa(){Vi.start()}const Vi=new qx;Vi.setAnimationLoop(ma),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(b){Va=b,Ht.setAnimationLoop(b),b===null?Vi.stop():Vi.start()},Ht.addEventListener("sessionstart",Cr),Ht.addEventListener("sessionend",Xa),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(b,F);const ft=Ht.enabled===!0&&Ht.isPresenting===!0,rt=L!==null&&(ut===null||ft)&&L.begin(V,ut);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(F),F=Ht.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,F,ut),U=Ot.get(b,T.length),U.init(F),U.state.textureUnits=pt.getTextureUnits(),T.push(U),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(ee,oa,F.reversedDepth),xe=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,xe),N=Pt.get(b,D.length),N.init(),D.push(N),Ht.enabled===!0&&Ht.isPresenting===!0){const Xt=V.xr.getDepthSensingMesh();Xt!==null&&Ao(Xt,F,-1/0,V.sortObjects)}Ao(b,F,0,V.sortObjects),N.finish(),Y!==null&&Y.updateLights(U.state.lightsArray),V.sortObjects===!0&&N.sort(Tt,It),Ie=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Ie&&le.addToRenderList(N,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Vt.beginShadows();const st=U.state.shadowsArray;if(ne.render(st,b,F),ge===!0&&Vt.endShadows(),(rt&&L.hasRenderPass())===!1){const Xt=N.opaque,Ut=N.transmissive;if(U.setupLights(),F.isArrayCamera){const qt=F.cameras;if(Ut.length>0)for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt];us(Xt,Ut,b,ce)}Ie&&le.render(b);for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt];Ro(N,b,ce,ce.viewport)}}else Ut.length>0&&us(Xt,Ut,b,F),Ie&&le.render(b),Ro(N,b,F)}ut!==null&&X===0&&(pt.updateMultisampleRenderTarget(ut),pt.updateRenderTargetMipmap(ut)),rt&&L.end(V),b.isScene===!0&&b.onAfterRender(V,b,F),Gt.resetDefaultState(),at=-1,ht=null,T.pop(),T.length>0?(U=T[T.length-1],pt.setTextureUnits(U.state.textureUnits),ge===!0&&Vt.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,D.pop(),D.length>0?N=D[D.length-1]:N=null,Y!==null&&Y.renderEnd()};function Ao(b,F,ft,rt){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)ft=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)U.pushLightProbeGrid(b);else if(b.isLight)U.pushLight(b),b.castShadow&&U.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(pe)){rt&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Xt=Mt.update(b),Ut=b.material;Ut.visible&&N.push(b,Xt,Ut,ft,Xe.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(pe))){const Xt=Mt.update(b),Ut=b.material;if(rt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Xe.copy(Xt.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Ut)){const qt=Xt.groups;for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt],kt=Ut[ce.materialIndex];kt&&kt.visible&&N.push(b,Xt,kt,ft,Xe.z,ce,F)}}else Ut.visible&&N.push(b,Xt,Ut,ft,Xe.z,null,F)}}const Bt=b.children;for(let Xt=0,Ut=Bt.length;Xt<Ut;Xt++)Ao(Bt[Xt],F,ft,rt)}function Ro(b,F,ft,rt){const{opaque:st,transmissive:Bt,transparent:Xt}=b;U.setupLightsView(ft),ge===!0&&Vt.setGlobalState(V.clippingPlanes,ft),rt&&E.viewport(yt.copy(rt)),st.length>0&&Xi(st,F,ft),Bt.length>0&&Xi(Bt,F,ft),Xt.length>0&&Xi(Xt,F,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function us(b,F,ft,rt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[rt.id]===void 0){const kt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[rt.id]=new Fi(1,1,{generateMipmaps:!0,type:kt?fa:hi,minFilter:ns,samples:Math.max(4,O.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Bt=U.state.transmissionRenderTarget[rt.id],Xt=rt.viewport||yt;Bt.setSize(Xt.z*V.transmissionResolutionScale,Xt.w*V.transmissionResolutionScale);const Ut=V.getRenderTarget(),qt=V.getActiveCubeFace(),Zt=V.getActiveMipmapLevel();V.setRenderTarget(Bt),V.getClearColor(B),mt=V.getClearAlpha(),mt<1&&V.setClearColor(16777215,.5),V.clear(),Ie&&le.render(ft);const re=V.toneMapping;V.toneMapping=la;const ce=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),U.setupLightsView(rt),ge===!0&&Vt.setGlobalState(V.clippingPlanes,rt),Xi(b,ft,rt),pt.updateMultisampleRenderTarget(Bt),pt.updateRenderTargetMipmap(Bt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Me=0,_e=F.length;Me<_e;Me++){const Ze=F[Me],{object:He,geometry:xn,material:zt,group:on}=Ze;if(zt.side===Ia&&He.layers.test(rt.layers)){const we=zt.side;zt.side=$n,zt.needsUpdate=!0,kl(He,ft,rt,xn,zt,on),zt.side=we,zt.needsUpdate=!0,kt=!0}}kt===!0&&(pt.updateMultisampleRenderTarget(Bt),pt.updateRenderTargetMipmap(Bt))}V.setRenderTarget(Ut,qt,Zt),V.setClearColor(B,mt),ce!==void 0&&(rt.viewport=ce),V.toneMapping=re}function Xi(b,F,ft){const rt=F.isScene===!0?F.overrideMaterial:null;for(let st=0,Bt=b.length;st<Bt;st++){const Xt=b[st],{object:Ut,geometry:qt,group:Zt}=Xt;let re=Xt.material;re.allowOverride===!0&&rt!==null&&(re=rt),Ut.layers.test(ft.layers)&&kl(Ut,F,ft,qt,re,Zt)}}function kl(b,F,ft,rt,st,Bt){Y!==null&&st.isNodeMaterial&&Y.setObject(b,st),b.onBeforeRender(V,F,ft,rt,st,Bt),b.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),st.onBeforeRender(V,F,ft,rt,b,Bt),st.transparent===!0&&st.side===Ia&&st.forceSinglePass===!1?(st.side=$n,st.needsUpdate=!0,V.renderBufferDirect(ft,F,rt,st,b,Bt),st.side=pi,st.needsUpdate=!0,V.renderBufferDirect(ft,F,rt,st,b,Bt),st.side=Ia):V.renderBufferDirect(ft,F,rt,st,b,Bt),b.onAfterRender(V,F,ft,rt,st,Bt)}function wr(b,F,ft){F.isScene!==!0&&(F=pn);const rt=lt.get(b),st=U.state.lights,Bt=U.state.shadowsArray,Xt=st.state.version,Ut=wt.getParameters(b,st.state,Bt,F,ft,U.state.lightProbeGridArray),qt=wt.getProgramCacheKey(Ut);let Zt=rt.programs;rt.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,rt.fog=F.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;rt.envMap=bt.get(b.envMap||rt.environment,re),rt.envMapRotation=rt.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",mi),Zt=new Map,rt.programs=Zt);let ce=Zt.get(qt);if(ce!==void 0){if(rt.currentProgram===ce&&rt.lightsStateVersion===Xt)return wo(b,Ut),ce}else Ut.uniforms=wt.getUniforms(b),Y!==null&&b.isNodeMaterial&&Y.build(b,ft,Ut),b.onBeforeCompile(Ut,V),ce=wt.acquireProgram(Ut,qt),Zt.set(qt,ce),rt.uniforms=Ut.uniforms;const kt=rt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Vt.uniform),wo(b,Ut),rt.needsLights=ql(b),rt.lightsStateVersion=Xt,rt.needsLights&&(kt.ambientLightColor.value=st.state.ambient,kt.lightProbe.value=st.state.probe,kt.sunLights.value=st.state.sun,kt.sunLightShadows.value=st.state.sunShadow,kt.directionalLights.value=st.state.directional,kt.directionalLightShadows.value=st.state.directionalShadow,kt.spotLights.value=st.state.spot,kt.spotLightShadows.value=st.state.spotShadow,kt.rectAreaLights.value=st.state.rectArea,kt.ltc_1.value=st.state.rectAreaLTC1,kt.ltc_2.value=st.state.rectAreaLTC2,kt.pointLights.value=st.state.point,kt.pointLightShadows.value=st.state.pointShadow,kt.hemisphereLights.value=st.state.hemi,kt.sunShadowMatrix.value=st.state.sunShadowMatrix,kt.sunShadowCascade.value=st.state.sunShadowCascade,kt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,kt.spotLightMatrix.value=st.state.spotLightMatrix,kt.spotLightMap.value=st.state.spotLightMap,kt.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.lightProbeGrid=U.state.lightProbeGridArray.length>0,rt.currentProgram=ce,rt.uniformsList=null,ce}function Co(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Gc.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function wo(b,F){const ft=lt.get(b);ft.outputColorSpace=F.outputColorSpace,ft.batching=F.batching,ft.batchingColor=F.batchingColor,ft.instancing=F.instancing,ft.instancingColor=F.instancingColor,ft.instancingMorph=F.instancingMorph,ft.skinning=F.skinning,ft.morphTargets=F.morphTargets,ft.morphNormals=F.morphNormals,ft.morphColors=F.morphColors,ft.morphTargetsCount=F.morphTargetsCount,ft.numClippingPlanes=F.numClippingPlanes,ft.numIntersection=F.numClipIntersection,ft.vertexAlphas=F.vertexAlphas,ft.vertexTangents=F.vertexTangents,ft.toneMapping=F.toneMapping}function Do(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(F.matrixWorld);for(let ft=0,rt=b.length;ft<rt;ft++){const st=b[ft];if(st.texture!==null&&st.boundingBox.containsPoint(C))return st}return null}function No(b,F,ft,rt,st){F.isScene!==!0&&(F=pn),pt.resetTextureUnits();const Bt=F.fog,Xt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?F.environment:null,Ut=ut===null?V.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:De.workingColorSpace,qt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Zt=bt.get(rt.envMap||Xt,qt),re=rt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ce=!!ft.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),kt=!!ft.morphAttributes.position,Me=!!ft.morphAttributes.normal,_e=!!ft.morphAttributes.color;let Ze=la;rt.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ze=V.toneMapping);const He=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,xn=He!==void 0?He.length:0,zt=lt.get(rt),on=U.state.lights;if(ge===!0&&(xe===!0||b!==ht)){const be=b===ht&&rt.id===at;Vt.setState(rt,b,be)}let we=!1;rt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==on.state.version||zt.outputColorSpace!==Ut||st.isBatchedMesh&&zt.batching===!1||!st.isBatchedMesh&&zt.batching===!0||st.isBatchedMesh&&zt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&zt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&zt.instancing===!1||!st.isInstancedMesh&&zt.instancing===!0||st.isSkinnedMesh&&zt.skinning===!1||!st.isSkinnedMesh&&zt.skinning===!0||st.isInstancedMesh&&zt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&zt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&zt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&zt.instancingMorph===!1&&st.morphTexture!==null||zt.envMap!==Zt||rt.fog===!0&&zt.fog!==Bt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Vt.numPlanes||zt.numIntersection!==Vt.numIntersection)||zt.vertexAlphas!==re||zt.vertexTangents!==ce||zt.morphTargets!==kt||zt.morphNormals!==Me||zt.morphColors!==_e||zt.toneMapping!==Ze||zt.morphTargetsCount!==xn||!!zt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,zt.__version=rt.version);let Gn=zt.currentProgram;we===!0&&(Gn=wr(rt,F,st),Y&&rt.isNodeMaterial&&Y.onUpdateProgram(rt,Gn,zt));let ei=!1,ki=!1,ve=!1;const ze=Gn.getUniforms(),Je=zt.uniforms;if(E.useProgram(Gn.program)&&(ei=!0,ki=!0,ve=!0),rt.id!==at&&(at=rt.id,ki=!0),zt.needsLights){const be=Do(U.state.lightProbeGridArray,st);zt.lightProbeGrid!==be&&(zt.lightProbeGrid=be,ki=!0)}if(ei||ht!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ze.setValue(W,"projectionMatrix",b.projectionMatrix),ze.setValue(W,"viewMatrix",b.matrixWorldInverse);const ln=ze.map.cameraPosition;ln!==void 0&&ln.setValue(W,ie.setFromMatrixPosition(b.matrixWorld)),O.logarithmicDepthBuffer&&ze.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ze.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),ht!==b&&(ht=b,ki=!0,ve=!0)}if(zt.needsLights&&(on.state.sunShadowMap.length>0&&ze.setValue(W,"sunShadowMap",on.state.sunShadowMap,pt),on.state.directionalShadowMap.length>0&&ze.setValue(W,"directionalShadowMap",on.state.directionalShadowMap,pt),on.state.spotShadowMap.length>0&&ze.setValue(W,"spotShadowMap",on.state.spotShadowMap,pt),on.state.pointShadowMap.length>0&&ze.setValue(W,"pointShadowMap",on.state.pointShadowMap,pt)),st.isSkinnedMesh){ze.setOptional(W,st,"bindMatrix"),ze.setOptional(W,st,"bindMatrixInverse");const be=st.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ze.setValue(W,"boneTexture",be.boneTexture,pt))}st.isBatchedMesh&&(ze.setOptional(W,st,"batchingTexture"),ze.setValue(W,"batchingTexture",st._matricesTexture,pt),ze.setOptional(W,st,"batchingIdTexture"),ze.setValue(W,"batchingIdTexture",st._indirectTexture,pt),ze.setOptional(W,st,"batchingColorTexture"),st._colorsTexture!==null&&ze.setValue(W,"batchingColorTexture",st._colorsTexture,pt));const ni=ft.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&k.update(st,ft,Gn),(ki||zt.receiveShadow!==st.receiveShadow)&&(zt.receiveShadow=st.receiveShadow,ze.setValue(W,"receiveShadow",st.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=gC()),ki){if(ze.setValue(W,"toneMappingExposure",V.toneMappingExposure),zt.needsLights&&Wl(Je,ve),Bt&&rt.fog===!0&&jt.refreshFogUniforms(Je,Bt),jt.refreshMaterialUniforms(Je,rt,dt,Q,U.state.transmissionRenderTarget[b.id]),zt.needsLights&&zt.lightProbeGrid){const be=zt.lightProbeGrid;Je.probesSH.value=be.texture,Je.probesMin.value.copy(be.boundingBox.min),Je.probesMax.value.copy(be.boundingBox.max),Je.probesResolution.value.copy(be.resolution)}Gc.upload(W,Co(zt),Je,pt)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Gc.upload(W,Co(zt),Je,pt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ze.setValue(W,"center",st.center),ze.setValue(W,"modelViewMatrix",st.modelViewMatrix),ze.setValue(W,"normalMatrix",st.normalMatrix),ze.setValue(W,"modelMatrix",st.matrixWorld),rt.uniformsGroups!==void 0){const be=rt.uniformsGroups;for(let ln=0,ga=be.length;ln<ga;ln++){const Yl=be[ln];Et.update(Yl,Gn),Et.bind(Yl,Gn)}}return Gn}function Wl(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ql(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(b,F,ft){const rt=lt.get(b);rt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),lt.get(b.texture).__webglTexture=F,lt.get(b.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ft,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const ft=lt.get(b);ft.__webglFramebuffer=F,ft.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,ft=0){ut=b,q=F,X=ft;let rt=null,st=!1,Bt=!1;if(b){const Ut=lt.get(b);if(Ut.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Ut.__webglFramebuffer),yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest,E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),at=-1;return}else if(Ut.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Ut.__hasExternalTextures)pt.rebindTextures(b,lt.get(b.texture).__webglTexture,lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Ut.__boundDepthTexture!==re){if(re!==null&&lt.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Bt=!0);const Zt=lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?rt=Zt[F][ft]:rt=Zt[F],st=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?rt=lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?rt=Zt[ft]:rt=Zt,yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest}else yt.copy(_t).multiplyScalar(dt).floor(),Qt.copy(Rt).multiplyScalar(dt).floor(),Yt=Ve;if(ft!==0&&(rt=nt),E.bindFramebuffer(W.FRAMEBUFFER,rt)&&E.drawBuffers(b,rt),E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),st){const Ut=lt.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,ft)}else if(Bt){const Ut=F;for(let qt=0;qt<b.textures.length;qt++){const Zt=lt.get(b.textures[qt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,ft,Ut)}}else if(b!==null&&ft!==0){const Ut=lt.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ut.__webglTexture,ft)}at=-1};function gi(b){const F=lt.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=O.textureFormatReadable(b.format),F.__typeReadable=O.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,ft,rt,st,Bt,Xt,Ut=0){if(!(b&&b.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt){E.bindFramebuffer(W.FRAMEBUFFER,qt);try{const Zt=b.textures[Ut],re=Zt.format,ce=Zt.type;b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut);const kt=gi(Zt);if(kt.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-rt&&ft>=0&&ft<=b.height-st&&W.readPixels(F,ft,rt,st,Nt.convert(re),Nt.convert(ce),Bt)}finally{const Zt=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,F,ft,rt,st,Bt,Xt,Ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt)if(F>=0&&F<=b.width-rt&&ft>=0&&ft<=b.height-st){E.bindFramebuffer(W.FRAMEBUFFER,qt);const Zt=b.textures[Ut],re=Zt.format,ce=Zt.type;b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut);const kt=gi(Zt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Me),W.bufferData(W.PIXEL_PACK_BUFFER,Bt.byteLength,W.STREAM_READ),W.readPixels(F,ft,rt,st,Nt.convert(re),Nt.convert(ce),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const _e=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,_e);const Ze=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await UT(W,Ze,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Me),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Bt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Me),W.deleteSync(Ze),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,ft=0){const rt=Math.pow(2,-ft),st=Math.floor(b.image.width*rt),Bt=Math.floor(b.image.height*rt),Xt=F!==null?F.x:0,Ut=F!==null?F.y:0;pt.setTexture2D(b,0),W.copyTexSubImage2D(W.TEXTURE_2D,ft,0,0,Xt,Ut,st,Bt),E.unbindTexture()},this.copyTextureToTexture=function(b,F,ft=null,rt=null,st=0,Bt=0){let Xt,Ut,qt,Zt,re,ce,kt,Me,_e;const Ze=b.isCompressedTexture?b.mipmaps[Bt]:b.image;if(ft!==null)Xt=ft.max.x-ft.min.x,Ut=ft.max.y-ft.min.y,qt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,re=ft.min.y,ce=ft.isBox3?ft.min.z:0;else{const Je=Math.pow(2,-st);Xt=Math.floor(Ze.width*Je),Ut=Math.floor(Ze.height*Je),b.isDataArrayTexture?qt=Ze.depth:b.isData3DTexture?qt=Math.floor(Ze.depth*Je):qt=1,Zt=0,re=0,ce=0}rt!==null?(kt=rt.x,Me=rt.y,_e=rt.z):(kt=0,Me=0,_e=0);const He=Nt.convert(F.format),xn=Nt.convert(F.type);let zt;F.isData3DTexture?(pt.setTexture3D(F,0),zt=W.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(pt.setTexture2DArray(F,0),zt=W.TEXTURE_2D_ARRAY):(pt.setTexture2D(F,0),zt=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,F.unpackAlignment);const on=E.getParameter(W.UNPACK_ROW_LENGTH),we=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(W.UNPACK_SKIP_PIXELS),ei=E.getParameter(W.UNPACK_SKIP_ROWS),ki=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Ze.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ze.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Zt),E.pixelStorei(W.UNPACK_SKIP_ROWS,re),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ce);const ve=b.isDataArrayTexture||b.isData3DTexture,ze=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Je=lt.get(b),ni=lt.get(F),be=lt.get(Je.__renderTarget),ln=lt.get(ni.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,be.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let ga=0;ga<qt;ga++)ve&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,lt.get(b).__webglTexture,st,ce+ga),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,lt.get(F).__webglTexture,Bt,_e+ga)),W.blitFramebuffer(Zt,re,Xt,Ut,kt,Me,Xt,Ut,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(st!==0||b.isRenderTargetTexture||lt.has(b)){const Je=lt.get(b),ni=lt.get(F);E.bindFramebuffer(W.READ_FRAMEBUFFER,K),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,tt);for(let be=0;be<qt;be++)ve?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Je.__webglTexture,st,ce+be):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Je.__webglTexture,st),ze?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ni.__webglTexture,Bt,_e+be):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ni.__webglTexture,Bt),st!==0?W.blitFramebuffer(Zt,re,Xt,Ut,kt,Me,Xt,Ut,W.COLOR_BUFFER_BIT,W.NEAREST):ze?W.copyTexSubImage3D(zt,Bt,kt,Me,_e+be,Zt,re,Xt,Ut):W.copyTexSubImage2D(zt,Bt,kt,Me,Zt,re,Xt,Ut);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ze?b.isDataTexture||b.isData3DTexture?W.texSubImage3D(zt,Bt,kt,Me,_e,Xt,Ut,qt,He,xn,Ze.data):F.isCompressedArrayTexture?W.compressedTexSubImage3D(zt,Bt,kt,Me,_e,Xt,Ut,qt,He,Ze.data):W.texSubImage3D(zt,Bt,kt,Me,_e,Xt,Ut,qt,He,xn,Ze):b.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Bt,kt,Me,Xt,Ut,He,xn,Ze.data):b.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Bt,kt,Me,Ze.width,Ze.height,He,Ze.data):W.texSubImage2D(W.TEXTURE_2D,Bt,kt,Me,Xt,Ut,He,xn,Ze);E.pixelStorei(W.UNPACK_ROW_LENGTH,on),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,we),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(W.UNPACK_SKIP_ROWS,ei),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ki),Bt===0&&F.generateMipmaps&&W.generateMipmap(zt),E.unbindTexture()},this.initRenderTarget=function(b){lt.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){q=0,X=0,ut=null,E.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const br=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],os=o=>{const e=o.reduce((l,f)=>l+f[0],0)/o.length,i=o.reduce((l,f)=>l+f[1],0)/o.length,r=o.reduce((l,f)=>l+f[2],0)/o.length;return new $(e,i,r)},wm=(o,e)=>{const[i,r,l]=o,f=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],p=f[2]*d[0]-f[0]*d[2],m=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new $(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},xo=o=>{const e=new ha,i=[],r=[];for(const l of o){const f=os(l),d=wm(l,f),h=d.x,p=d.y,m=d.z,[S,g,v]=l,y=[g[0]-S[0],g[1]-S[1],g[2]-S[2]],R=[v[0]-S[0],v[1]-S[1],v[2]-S[2]],w=y[1]*R[2]-y[2]*R[1],M=y[2]*R[0]-y[0]*R[2],x=y[0]*R[1]-y[1]*R[0],G=w*f.x+M*f.y+x*f.z>=0?l:[...l].reverse();for(let C=1;C<G.length-1;C++)i.push(...G[0],...G[C],...G[C+1]),r.push(h,p,m,h,p,m,h,p,m)}return e.setAttribute("position",new Hi(i,3)),e.setAttribute("normal",new Hi(r,3)),e},tM=o=>{const e=Math.abs(o.y)>.9?new $(0,0,1):new $(0,1,0),i=e.clone().sub(o.clone().multiplyScalar(e.dot(o))).normalize(),r=new $().crossVectors(i,o).normalize(),l=new nn().makeBasis(r,i,o);return{normal:o,up:i,orientation:new dn().setFromRotationMatrix(l)}},eM=o=>tM(new $(...o).normalize()),Dm=o=>tM(wm(o,os(o))),Xl=o=>{const e=new $(0,0,1),i=new dn().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new dn().setFromAxisAngle(new $(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},Mo=o=>{const e=new Image,i=new Hn(e);return i.colorSpace=di,e.onload=()=>{i.needsUpdate=!0},e.src=o.toDataURL("image/png"),i};function yo(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}var vC=_x();function Eo({isRolling:o,error:e,result:i}){return vC.createPortal($t.jsx("p",{className:"hint",children:o?"Rolling...":e||(i!==null?`You rolled ${i}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")}),document.body)}const po=Math.PI/180,SC=3,xC=7,MC=.98,Ll=o=>1-(1-o)**3,nM=o=>new dn().setFromEuler(new Gi(o.x*po,o.y*po,o.z*po,"XYZ")),cp=o=>(o%360+540)%360-180,iM=o=>{const e=new $(o.x,o.y,o.z),i=e.length();return i<1e-9?new $(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},yC=(o,e)=>{const i=f=>nM({x:o.x+(e.x-o.x)*Ll(f),y:o.y+(e.y-o.y)*Ll(f),z:o.z+(e.z-o.z)*Ll(f)}),r=i(MC),l=i(1);return iM(l.multiply(r.clone().invert()))},EC=(o,e,i)=>{const r=nM(o),l=iM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),f=Math.random()*Math.PI,d=new dn().setFromAxisAngle(l,-f).multiply(e),h=new Gi().setFromQuaternion(d,"XYZ"),p={x:h.x/po,y:h.y/po,z:h.z/po},m=[];for(let g=SC;g<=xC;g++){const v=i-g;if(!(v<1))for(const y of[1,-1])for(const R of[1,-1])for(const w of[1,-1]){const M={x:o.x+y*360*g,y:o.y+R*360*v,z:o.z+w*360*i};M.x+=cp(p.x-M.x),M.y+=cp(p.y-M.y),M.z+=cp(p.z-M.z);const x=yC(o,M).dot(l);m.push({rotation:M,dot:x})}}const S=m.filter(g=>g.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((g,v)=>v.dot>g.dot?v:g).rotation},ua=Math.PI/180,YS=65,ZS=.5,TC=10,bC=1500,AC=750,RC=260,KS=(o,e,i)=>Math.min(i,Math.max(e,o)),CC=o=>{const e=new Gi().setFromQuaternion(o,"XYZ");return{x:e.x/ua,y:e.y/ua,z:e.z/ua}};function To({fetchRoll:o,resolveTarget:e,initialRotation:i={x:0,y:0,z:0}}){const r=Te.useRef(null),l=Te.useRef({...i}),f=Te.useRef({...i}),d=Te.useRef(null),h=Te.useRef(null),p=Te.useRef(null),m=Te.useRef(!1),[S,g]=Te.useState(!1),[v,y]=Te.useState(!1),[R,w]=Te.useState(null),[M,x]=Te.useState(null),P=Te.useRef({fetchRoll:o,resolveTarget:e});P.current={fetchRoll:o,resolveTarget:e};const G=Te.useCallback(z=>{l.current=z,r.current?.rotation.set(z.x*ua,z.y*ua,z.z*ua)},[]),C=Te.useCallback((z,Y)=>{p.current&&cancelAnimationFrame(p.current);const nt={...l.current},K=performance.now();return new Promise(tt=>{const q=X=>{const ut=Math.min((X-K)/Y,1),at=Ll(ut);G({x:nt.x+(z.x-nt.x)*at,y:nt.y+(z.y-nt.y)*at,z:nt.z+(z.z-nt.z)*at}),ut<1?p.current=requestAnimationFrame(q):(p.current=null,tt())};p.current=requestAnimationFrame(q)})},[G]),N=Te.useCallback((z,Y)=>{p.current&&cancelAnimationFrame(p.current);const nt=r.current;if(!nt)return Promise.resolve();const K=nt.quaternion.clone(),tt=performance.now();return new Promise(q=>{const X=ut=>{const at=Math.min((ut-tt)/Y,1);nt.quaternion.slerpQuaternions(K,z,Ll(at)),l.current=CC(nt.quaternion),at<1?p.current=requestAnimationFrame(X):(p.current=null,q())};p.current=requestAnimationFrame(X)})},[]),U=Te.useCallback(async()=>{m.current=!0,g(!0),w(null),x(null);try{const z=await P.current.fetchRoll(),Y=P.current.resolveTarget(z),nt=l.current,K=EC(nt,Y,TC);await C(K,bC),await N(Y,AC),f.current=l.current,g(!1),m.current=!1,w(z)}catch(z){g(!1),m.current=!1,x(z instanceof Error?z.message:"Roll failed.")}},[N,C]),D=Te.useCallback(z=>{if(m.current)return;const Y=z.currentTarget.getBoundingClientRect();d.current={centerX:Y.left+Y.width/2,centerY:Y.top+Y.height/2,halfWidth:Y.width/2,halfHeight:Y.height/2,nx:0,ny:0},z.currentTarget.setPointerCapture(z.pointerId),y(!0)},[]),T=Te.useCallback(z=>{const Y=d.current;!Y||m.current||(Y.nx=KS((z.clientX-Y.centerX)/Y.halfWidth,-1,1),Y.ny=KS((z.clientY-Y.centerY)/Y.halfHeight,-1,1),!h.current&&(h.current=requestAnimationFrame(()=>{h.current=null;const nt=f.current;G({x:nt.x-Y.ny*YS,y:nt.y+Y.nx*YS,z:nt.z})})))},[G]),L=Te.useCallback(()=>{const z=d.current;if(!z)return;d.current=null,y(!1),h.current&&(cancelAnimationFrame(h.current),h.current=null),Math.abs(z.nx)>=ZS||Math.abs(z.ny)>=ZS?U():C(f.current,RC)},[C,U]),V=Te.useCallback(()=>{p.current&&cancelAnimationFrame(p.current)},[]);return{meshRef:r,rotationRef:l,cancelAnimation:V,isRolling:S,isDragging:v,error:M,result:R,onPointerDown:D,onPointerMove:T,onPointerUp:L}}let Tr=null,Vc=0,mo=null,QS=!1;const wC=()=>QS?!1:(QS=!0,!0),DC=()=>{if(mo!==null&&(clearTimeout(mo),mo=null),Vc+=1,!Tr){const o=new Ri(28,1,.1,100);o.position.set(0,0,7),o.lookAt(0,0,0);const e=new _C({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(0,0),Tr={renderer:e,camera:o}}return Tr},NC=()=>{Vc-=1,!(Vc>0||mo!==null)&&(mo=setTimeout(()=>{mo=null,!(Vc>0||!Tr)&&(Tr.renderer.domElement.remove(),Tr.renderer.dispose(),Tr.renderer.forceContextLoss(),Tr=null)},0))},aM={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:769384,cssTop:[11,189,104],cssBottom:[9,165,90],label:"#ffffff"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},Nm=[4,6,8,10,12,20],Um=["red","yellow","green","blue","black","white"];function JS(o,e){return o[(o.indexOf(e)+1)%o.length]}const fp={sides:6,color:"red",translucent:!0},UC=.87,LC=o=>o?UC:1;function OC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=Nm.includes(e)?e:fp.sides,r=o.get("c")?.toLowerCase(),l=r!==void 0&&Um.includes(r)?r:fp.color,f=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=f==="true"?!0:f==="false"?!1:fp.translucent;return{sides:i,color:l,translucent:d}}function bo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:f}){const d=Te.useRef(null),h=Te.useRef(null),p=Te.useRef(null),m=Te.useRef(f);return m.current=f,Te.useEffect(()=>{const S=new ZT,g=m.current({palette:aM[o],opacity:LC(e),translucent:e});g.rotation.set(r.current.x*ua,r.current.y*ua,r.current.z*ua),S.add(g),S.add(new _1(16777215,1)),S.add(new h1(16777215,12303291,1));const v=new g1(16777215,1);return v.position.set(3,4,5),S.add(v),i.current=g,h.current=S,()=>{l(),g.geometry.dispose(),g.material.dispose(),g.children.forEach(y=>{const R=y;R.geometry.dispose(),R.material.map?.dispose(),R.material.dispose()}),i.current=null,h.current=null}},[o,e,i,r,l]),Te.useEffect(()=>{const S=d.current;if(!S)return;const{renderer:g,camera:v}=DC(),y=()=>{const M=S.clientWidth,x=S.clientHeight;g.setSize(M,x,!1),v.aspect=M/x,v.updateProjectionMatrix()},R=new ResizeObserver(y);R.observe(S),y(),h.current&&g.render(h.current,v),wC()&&g.getContext().finish(),S.appendChild(g.domElement);const w=()=>{p.current=requestAnimationFrame(w),h.current&&g.render(h.current,v)};return w(),()=>{g.domElement.remove(),R.disconnect(),p.current&&cancelAnimationFrame(p.current),NC()}},[]),{mountRef:d}}const PC=1.01,IC=2,BC=.95,zC=1.9,FC=.07,wl=512,jS=[.246667,.5,.753333],HC=.055733,GC="#ffffff",VC=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],XC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},kC=o=>{const e=[],i=o/2,r=[1,-1];for(const l of[0,1,2]){const[f,d]=[0,1,2].filter(h=>h!==l);for(const h of r){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([S,g])=>{const v=[0,0,0];return v[l]=h,v[f]=S,v[d]=g,v}),m=[];for(let S=0;S<4;S++){const g=p[S],v=p[(S+1)%4];m.push(br(g,v,i)),m.push(br(v,g,i))}e.push(m)}}for(const l of r)for(const f of r)for(const d of r)e.push([[l*(1-o),f,d],[l,f*(1-o),d],[l,f,d*(1-o)]]);return e},WC=kC(FC),$S=VC.map(eM),tx=(o,e,i)=>{const r=document.createElement("canvas");r.width=wl,r.height=wl;const l=r.getContext("2d");if(!l)return null;const f=HC*wl;l.fillStyle=e;for(const[p,m]of XC[o]){const S=jS[m-1]*wl,g=jS[p-1]*wl;l.beginPath(),l.arc(S,g,f,0,Math.PI*2),l.fill()}const d=Mo(r),h=new Ar({map:d,transparent:!0,side:pi,depthWrite:!1});return new hn(new pa(i,i),h)};function qC({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=To({fetchRoll:()=>yo(6),resolveTarget:y=>Xl($S[y-1])}),{mountRef:v}=bo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=xo(WC),x=new hn(M,new vo({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI);return $S.forEach((C,N)=>{const U=N+1,D=tx(U,y.label,IC);if(!D)return;D.position.copy(C.normal).multiplyScalar(PC),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const T=tx(U,GC,zC);T&&(T.renderOrder=-1,T.position.copy(C.normal).multiplyScalar(BC),T.quaternion.copy(C.orientation).multiply(P),x.add(T))}),x}});return $t.jsxs("div",{className:`stage stage--six-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(Eo,{isRolling:f,error:h,result:p})]})}const ex=.8,Pa=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],ra=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],em=[1,2,3,4],nx=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],YC=[180,180,0,180,0,180,0,180,180,0,180,180],ZC={x:-177.2356,y:55.25,z:45},nm=ra.map(o=>{const e=o.map(r=>Pa[r]),i=os(e);return{normal:wm(e,i),center:i}}),KC=.07,QC=o=>{const e=[];for(const i of ra){const r=[];for(let l=0;l<3;l++){const f=Pa[i[l]],d=Pa[i[(l+1)%3]],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),p=o/h;r.push(br(f,d,p)),r.push(br(d,f,p))}e.push(r)}for(let i=0;i<Pa.length;i++){const r=[];for(let l=0;l<Pa.length;l++){if(l===i)continue;const f=Pa[i],d=Pa[l],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]);r.push(br(f,d,o/h))}e.push(r)}return e},JC=QC(KC),jC=(o,e)=>{const i=ra[o][e],r=ra[o][(e+1)%3];for(let l=0;l<ra.length;l++)if(l!==o&&ra[l].includes(i)&&ra[l].includes(r))return em[l];return em[o]},$C=o=>{const{normal:e}=nm[o],i=new dn().setFromUnitVectors(e,new $(0,-1,0)),r=(o+1)%ra.length,l=nm[r].normal.clone().applyQuaternion(i),f=Math.atan2(l.x,l.z);return new dn().setFromAxisAngle(new $(0,1,0),-f).multiply(i)},t2="#ffffff",ix=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=Mo(i),f=new Ar({map:l,transparent:!0,side:pi,depthWrite:!1});return new hn(new pa(ex,ex),f)};function e2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=To({fetchRoll:()=>yo(4),resolveTarget:y=>$C(em.indexOf(y)),initialRotation:ZC}),{mountRef:v}=bo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=xo(JC),x=new hn(M,new vo({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(1,0,0),Math.PI),G=()=>{nm.forEach(({normal:C,center:N},U)=>{for(let D=0;D<3;D++){const T=U*3+D,L=jC(U,D),V=ra[U][D],z=ra[U][(D+1)%3],Y=new $().addVectors(new $(...Pa[V]),new $(...Pa[z])).multiplyScalar(.5),nt=N.clone().sub(Y).normalize(),K=new $().crossVectors(nt,C),tt=new dn().setFromRotationMatrix(new nn().makeBasis(K,nt,C)),q=new dn().setFromAxisAngle(new $(0,0,1),YC[T]*ua),X=ix(L,y.label);X&&(X.renderOrder=1,X.position.copy(new $(...nx[T])).addScaledVector(C,.01),X.quaternion.copy(tt),x.add(X));const ut=ix(L,t2);ut&&(ut.renderOrder=-1,ut.position.copy(new $(...nx[T])).addScaledVector(C,-.05),ut.quaternion.copy(tt).multiply(q).multiply(P),x.add(ut))}})};return document.fonts.load("700 160px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--four-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(Eo,{isRolling:f,error:h,result:p})]})}const ax=1.08,rx=.864,rM=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],sx=rM.map(eM),n2=.07,lo=1.7,es=[[lo,0,0],[-lo,0,0],[0,lo,0],[0,-lo,0],[0,0,lo],[0,0,-lo]],i2=rM.map(([o,e,i])=>[o>0?0:1,e>0?2:3,i>0?4:5]),a2=o=>{const e=[];for(const i of i2){const r=[];for(let l=0;l<3;l++){const f=es[i[l]],d=es[i[(l+1)%3]],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),p=o/h;r.push(br(f,d,p)),r.push(br(d,f,p))}e.push(r)}for(let i=0;i<es.length;i++){const r=[];for(let p=0;p<es.length;p++){if(Math.floor(p/2)===Math.floor(i/2))continue;const S=es[i],g=es[p],v=Math.hypot(g[0]-S[0],g[1]-S[1],g[2]-S[2]);r.push(br(S,g,o/v))}const l=os(r),f=new $(...es[i]).normalize(),d=new $(...r[0]).sub(l),h=new $().crossVectors(f,d);r.sort((p,m)=>{const S=new $(...p).sub(l),g=new $(...m).sub(l);return Math.atan2(S.dot(h),S.dot(d))-Math.atan2(g.dot(h),g.dot(d))}),e.push(r)}return e},r2=a2(n2),s2="#ffffff",ox=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const l=Mo(i),f=new Ar({map:l,transparent:!0,side:pi,depthWrite:!1});return new hn(new pa(rx,rx),f)};function o2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=To({fetchRoll:()=>yo(8),resolveTarget:y=>Xl(sx[y-1])}),{mountRef:v}=bo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=xo(r2),x=new hn(M,new vo({color:y.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{sx.forEach((C,N)=>{const U=N+1,D=ox(U,y.label);if(!D)return;D.position.copy(C.normal).multiplyScalar(ax),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const T=ox(U,s2);T&&(T.renderOrder=-1,T.position.copy(C.normal).multiplyScalar(ax-.2),T.quaternion.copy(C.orientation).multiply(P),x.add(T))})};return document.fonts.load("700 200px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--eight-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(Eo,{isRolling:f,error:h,result:p})]})}const lx=.77,sM=2.2,l2=.85,Zc=sM*.9*l2,Mr=sM*.65,im=Zc*.105573,am=Zc*.8,Pc=(Zc-am)/(Zc-im),rm=[...[0,1,2,3,4].map(o=>[Pc*Mr*Math.cos(o*2*Math.PI/5),am,Pc*Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Pc*Mr*Math.cos((o+.5)*2*Math.PI/5),-am,Pc*Mr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos(o*2*Math.PI/5),im,Mr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Mr*Math.cos((o+.5)*2*Math.PI/5),-im,Mr*Math.sin((o+.5)*2*Math.PI/5)])],sm=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],om=[1,3,5,7,9,8,6,4,2,10],ux=Array.from({length:om.length},(o,e)=>Dm(sm[e].map(i=>rm[i]))),u2="#ffffff",cx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const l=Mo(i),f=new Ar({map:l,transparent:!0,side:pi,depthWrite:!1});return new hn(new pa(lx,lx),f)};function c2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=To({fetchRoll:()=>yo(10),resolveTarget:y=>Xl(ux[om.indexOf(y)])}),{mountRef:v}=bo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=xo(sm.map(C=>C.map(N=>rm[N]))),x=new hn(M,new vo({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{ux.forEach((C,N)=>{const U=om[N],D=cx(U,y.label);if(!D)return;const T=os(sm[N].map(V=>rm[V]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=cx(U,u2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 180px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--ten-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(Eo,{isRolling:f,error:h,result:p})]})}const fx=1,lm=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],um=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],cm=[1,2,3,4,5,6,8,7,9,10,11,12],dx=Array.from({length:cm.length},(o,e)=>Dm(um[e].map(i=>lm[i]))),f2="#ffffff",hx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=Mo(i),f=new Ar({map:l,transparent:!0,side:pi,depthWrite:!1});return new hn(new pa(fx,fx),f)};function d2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=To({fetchRoll:()=>yo(12),resolveTarget:y=>Xl(dx[cm.indexOf(y)])}),{mountRef:v}=bo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=xo(um.map(C=>C.map(N=>lm[N]))),x=new hn(M,new vo({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{dx.forEach((C,N)=>{const U=cm[N],D=hx(U,y.label);if(!D)return;const T=os(um[N].map(V=>lm[V]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=hx(U,f2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 160px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--twelve-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(Eo,{isRolling:f,error:h,result:p})]})}const px=.9,fm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],dm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],hm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],mx=Array.from({length:hm.length},(o,e)=>Dm(dm[e].map(i=>fm[i]))),h2="#ffffff",gx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=Mo(i),f=new Ar({map:l,transparent:!0,side:pi,depthWrite:!1});return new hn(new pa(px,px),f)};function p2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:r,cancelAnimation:l,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=To({fetchRoll:()=>yo(20),resolveTarget:y=>Xl(mx[hm.indexOf(y)])}),{mountRef:v}=bo({color:o,translucent:e,meshRef:i,rotationRef:r,cancelAnimation:l,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=xo(dm.map(C=>C.map(N=>fm[N]))),x=new hn(M,new vo({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{mx.forEach((C,N)=>{const U=hm[N],D=gx(U,y.label);if(!D)return;const T=os(dm[N].map(V=>fm[V]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=gx(U,h2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 160px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--twenty-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(Eo,{isRolling:f,error:h,result:p})]})}function m2({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return $t.jsx(e2,{color:e,translucent:i});case 6:return $t.jsx(qC,{color:e,translucent:i});case 8:return $t.jsx(o2,{color:e,translucent:i});case 10:return $t.jsx(c2,{color:e,translucent:i});case 12:return $t.jsx(d2,{color:e,translucent:i});case 20:return $t.jsx(p2,{color:e,translucent:i});default:return null}}const g2=[0,45,90,135];function _2({isOpen:o,onClick:e,ref:i}){return $t.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:$t.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[g2.map(r=>$t.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),$t.jsx("span",{className:"settings-button__hub"})]})})}const v2='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function S2({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:l}){const f=Te.useRef(null),d=Te.useRef(null);return Te.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=f.current;if(!m)return;const S=Array.from(m.querySelectorAll(v2));if(S.length===0)return;const g=S[0],v=S[S.length-1],y=document.activeElement;if(!m.contains(y)){p.preventDefault(),(p.shiftKey?v:g).focus();return}p.shiftKey&&y===g?(p.preventDefault(),v.focus()):!p.shiftKey&&y===v&&(p.preventDefault(),g.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),$t.jsxs("div",{ref:f,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[$t.jsxs("div",{className:"settings-dialog__content",children:[$t.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:$t.jsx("div",{className:"sides-picker__options",children:Nm.map((h,p)=>$t.jsxs(Te.Fragment,{children:[p>0&&$t.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),$t.jsxs("span",{className:"sides-picker__option",children:[$t.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),$t.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),$t.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:$t.jsx("div",{className:"color-picker__options",children:Um.map(h=>$t.jsxs("span",{className:"color-picker__option",children:[$t.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),$t.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${aM[h].cssTop.join(" ")})`}})]},h))})}),$t.jsxs("label",{className:"translucent-toggle",children:[$t.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),$t.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),$t.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:$t.jsx("span",{className:"translucent-toggle__knob"})})]})]}),$t.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:$t.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function x2(){const[o,e]=Te.useState(()=>OC()),[i,r]=Te.useState(!1),l=Te.useRef(null),f=Te.useCallback(h=>{e(p=>({...p,...h}))},[]),d=Te.useCallback(()=>{r(!1),l.current?.focus()},[]);return Te.useEffect(()=>{const h=p=>{if(i||p.ctrlKey||p.altKey||p.metaKey)return;const m=p.key.toLowerCase();m==="s"?e(S=>({...S,sides:JS(Nm,S.sides)})):m==="c"?e(S=>({...S,color:JS(Um,S.color)})):m==="t"&&e(S=>({...S,translucent:!S.translucent}))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),$t.jsxs($t.Fragment,{children:[$t.jsx(_2,{ref:l,isOpen:i,onClick:()=>r(!0)}),i&&$t.jsx(S2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:f,onClose:d}),$t.jsx(m2,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const oM=document.getElementById("root");if(!oM)throw new Error("Root element was not found.");KE.createRoot(oM).render($t.jsx(Te.StrictMode,{children:$t.jsx(x2,{})}));

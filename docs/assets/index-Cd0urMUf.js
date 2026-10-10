(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var Th={exports:{}},_l={};var Hv;function IE(){if(Hv)return _l;Hv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return _l.Fragment=e,_l.jsx=i,_l.jsxs=i,_l}var Gv;function zE(){return Gv||(Gv=1,Th.exports=IE()),Th.exports}var $t=zE(),bh={exports:{}},se={};var Vv;function BE(){if(Vv)return se;Vv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function R(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function P(z,mt,At){this.props=z,this.context=mt,this.refs=x,this.updater=At||w}P.prototype.isReactComponent={},P.prototype.setState=function(z,mt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,mt,"setState")},P.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function G(){}G.prototype=P.prototype;function C(z,mt,At){this.props=z,this.context=mt,this.refs=x,this.updater=At||w}var N=C.prototype=new G;N.constructor=C,M(N,P.prototype),N.isPureReactComponent=!0;var U=Array.isArray;function D(){}var T={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function V(z,mt,At){var Q=At.ref;return{$$typeof:o,type:z,key:mt,ref:Q!==void 0?Q:null,props:At}}function B(z,mt){return V(z.type,mt,z.props)}function Y(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function nt(z){var mt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(At){return mt[At]})}var K=/\/+/g;function tt(z,mt){return typeof z=="object"&&z!==null&&z.key!=null?nt(""+z.key):mt.toString(36)}function q(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(D,D):(z.status="pending",z.then(function(mt){z.status==="pending"&&(z.status="fulfilled",z.value=mt)},function(mt){z.status==="pending"&&(z.status="rejected",z.reason=mt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function X(z,mt,At,Q,dt){var Tt=typeof z;(Tt==="undefined"||Tt==="boolean")&&(z=null);var It=!1;if(z===null)It=!0;else switch(Tt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(z.$$typeof){case o:case e:It=!0;break;case S:return It=z._init,X(It(z._payload),mt,At,Q,dt)}}if(It)return dt=dt(z),It=Q===""?"."+tt(z,0):Q,U(dt)?(At="",It!=null&&(At=It.replace(K,"$&/")+"/"),X(dt,mt,At,"",function(Ve){return Ve})):dt!=null&&(Y(dt)&&(dt=B(dt,At+(dt.key==null||z&&z.key===dt.key?"":(""+dt.key).replace(K,"$&/")+"/")+It)),mt.push(dt)),1;It=0;var _t=Q===""?".":Q+":";if(U(z))for(var Rt=0;Rt<z.length;Rt++)Q=z[Rt],Tt=_t+tt(Q,Rt),It+=X(Q,mt,At,Tt,dt);else if(Rt=R(z),typeof Rt=="function")for(z=Rt.call(z),Rt=0;!(Q=z.next()).done;)Q=Q.value,Tt=_t+tt(Q,Rt++),It+=X(Q,mt,At,Tt,dt);else if(Tt==="object"){if(typeof z.then=="function")return X(q(z),mt,At,Q,dt);throw mt=String(z),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return It}function ut(z,mt,At){if(z==null)return z;var Q=[],dt=0;return X(z,Q,"","",function(Tt){return mt.call(At,Tt,dt++)}),Q}function at(z){if(z._status===-1){var mt=z._result,At=mt();At.then(function(Q){(z._status===0||z._status===-1)&&(z._status=1,z._result=Q,At.status===void 0&&(At.status="fulfilled",At.value=Q))},function(Q){(z._status===0||z._status===-1)&&(z._status=2,z._result=Q,At.status===void 0&&(At.status="rejected",At.reason=Q))}),z._status===-1&&(z._status=0,z._result=At)}if(z._status===1)return z._result.default;throw z._result}var ht=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function yt(z){var mt=T.T,At={};At.types=mt!==null?mt.types:null,T.T=At;try{var Q=z(),dt=T.S;dt!==null&&dt(At,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(D,ht)}catch(Tt){ht(Tt)}finally{mt!==null&&At.types!==null&&(mt.types=At.types),T.T=mt}}function Qt(z){var mt=T.T;if(mt!==null){var At=mt.types;At===null?mt.types=[z]:At.indexOf(z)===-1&&At.push(z)}else yt(Qt.bind(null,z))}var Yt={map:ut,forEach:function(z,mt,At){ut(z,function(){mt.apply(this,arguments)},At)},count:function(z){var mt=0;return ut(z,function(){mt++}),mt},toArray:function(z){return ut(z,function(mt){return mt})||[]},only:function(z){if(!Y(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return se.Activity=g,se.Children=Yt,se.Component=P,se.Fragment=i,se.Profiler=u,se.PureComponent=C,se.StrictMode=s,se.Suspense=p,se.ViewTransition=v,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,se.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},se.addTransitionType=Qt,se.cache=function(z){return function(){return z.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(z,mt,At){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Q=M({},z.props),dt=z.key;if(mt!=null)for(Tt in mt.key!==void 0&&(dt=""+mt.key),mt)!L.call(mt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&mt.ref===void 0||(Q[Tt]=mt[Tt]);var Tt=arguments.length-2;if(Tt===1)Q.children=At;else if(1<Tt){for(var It=Array(Tt),_t=0;_t<Tt;_t++)It[_t]=arguments[_t+2];Q.children=It}return V(z.type,dt,Q)},se.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},se.createElement=function(z,mt,At){var Q,dt={},Tt=null;if(mt!=null)for(Q in mt.key!==void 0&&(Tt=""+mt.key),mt)L.call(mt,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(dt[Q]=mt[Q]);var It=arguments.length-2;if(It===1)dt.children=At;else if(1<It){for(var _t=Array(It),Rt=0;Rt<It;Rt++)_t[Rt]=arguments[Rt+2];dt.children=_t}if(z&&z.defaultProps)for(Q in It=z.defaultProps,It)dt[Q]===void 0&&(dt[Q]=It[Q]);return V(z,Tt,dt)},se.createRef=function(){return{current:null}},se.forwardRef=function(z){return{$$typeof:h,render:z}},se.isValidElement=Y,se.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:at}},se.memo=function(z,mt){return{$$typeof:m,type:z,compare:mt===void 0?null:mt}},se.startTransition=yt,se.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},se.use=function(z){return T.H.use(z)},se.useActionState=function(z,mt,At){return T.H.useActionState(z,mt,At)},se.useCallback=function(z,mt){return T.H.useCallback(z,mt)},se.useContext=function(z){return T.H.useContext(z)},se.useDebugValue=function(){},se.useDeferredValue=function(z,mt){return T.H.useDeferredValue(z,mt)},se.useEffect=function(z,mt){return T.H.useEffect(z,mt)},se.useEffectEvent=function(z){return T.H.useEffectEvent(z)},se.useId=function(){return T.H.useId()},se.useImperativeHandle=function(z,mt,At){return T.H.useImperativeHandle(z,mt,At)},se.useInsertionEffect=function(z,mt){return T.H.useInsertionEffect(z,mt)},se.useLayoutEffect=function(z,mt){return T.H.useLayoutEffect(z,mt)},se.useMemo=function(z,mt){return T.H.useMemo(z,mt)},se.useOptimistic=function(z,mt){return T.H.useOptimistic(z,mt)},se.useReducer=function(z,mt,At){return T.H.useReducer(z,mt,At)},se.useRef=function(z){return T.H.useRef(z)},se.useState=function(z){return T.H.useState(z)},se.useSyncExternalStore=function(z,mt,At){return T.H.useSyncExternalStore(z,mt,At)},se.useTransition=function(){return T.H.useTransition()},se.version="19.3.0",se}var Xv;function hm(){return Xv||(Xv=1,bh.exports=BE()),bh.exports}var Te=hm(),Ah={exports:{}},vl={},Rh={exports:{}},Ch={};var kv;function FE(){return kv||(kv=1,(function(o){function e(q,X){var ut=q.length;q.push(X);t:for(;0<ut;){var at=ut-1>>>1,ht=q[at];if(0<u(ht,X))q[at]=X,q[ut]=ht,ut=at;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var X=q[0],ut=q.pop();if(ut!==X){q[0]=ut;t:for(var at=0,ht=q.length,yt=ht>>>1;at<yt;){var Qt=2*(at+1)-1,Yt=q[Qt],z=Qt+1,mt=q[z];if(0>u(Yt,ut))z<ht&&0>u(mt,Yt)?(q[at]=mt,q[z]=ut,at=z):(q[at]=Yt,q[Qt]=ut,at=Qt);else if(z<ht&&0>u(mt,ut))q[at]=mt,q[z]=ut,at=z;else break t}}return X}function u(q,X){var ut=q.sortIndex-X.sortIndex;return ut!==0?ut:q.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,g=null,v=3,y=!1,R=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function C(q){for(var X=i(m);X!==null;){if(X.callback===null)s(m);else if(X.startTime<=q)s(m),X.sortIndex=X.expirationTime,e(p,X);else break;X=i(m)}}function N(q){if(w=!1,C(q),!R)if(i(p)!==null)R=!0,U||(U=!0,Y());else{var X=i(m);X!==null&&tt(N,X.startTime-q)}}var U=!1,D=-1,T=5,L=-1;function V(){return M?!0:!(o.unstable_now()-L<T)}function B(){if(M=!1,U){var q=o.unstable_now();L=q;var X=!0;try{t:{R=!1,w&&(w=!1,P(D),D=-1),y=!0;var ut=v;try{e:{for(C(q),g=i(p);g!==null&&!(g.expirationTime>q&&V());){var at=g.callback;if(typeof at=="function"){g.callback=null,v=g.priorityLevel;var ht=at(g.expirationTime<=q);if(q=o.unstable_now(),typeof ht=="function"){g.callback=ht,C(q),X=!0;break e}g===i(p)&&s(p),C(q)}else s(p);g=i(p)}if(g!==null)X=!0;else{var yt=i(m);yt!==null&&tt(N,yt.startTime-q),X=!1}}break t}finally{g=null,v=ut,y=!1}X=void 0}}finally{X?Y():U=!1}}}var Y;if(typeof G=="function")Y=function(){G(B)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,K=nt.port2;nt.port1.onmessage=B,Y=function(){K.postMessage(null)}}else Y=function(){x(B,0)};function tt(q,X){D=x(function(){q(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(q){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var ut=v;v=X;try{return q()}finally{v=ut}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ut=v;v=q;try{return X()}finally{v=ut}},o.unstable_scheduleCallback=function(q,X,ut){var at=o.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?at+ut:at):ut=at,q){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=ut+ht,q={id:S++,callback:X,priorityLevel:q,startTime:ut,expirationTime:ht,sortIndex:-1},ut>at?(q.sortIndex=ut,e(m,q),i(p)===null&&q===i(m)&&(w?(P(D),D=-1):w=!0,tt(N,ut-at))):(q.sortIndex=ht,e(p,q),R||y||(R=!0,U||(U=!0,Y()))),q},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(q){var X=v;return function(){var ut=v;v=X;try{return q.apply(this,arguments)}finally{v=ut}}}})(Ch)),Ch}var Wv;function HE(){return Wv||(Wv=1,Rh.exports=FE()),Rh.exports}var wh={exports:{}},Un={};var qv;function GE(){if(qv)return Un;qv=1;var o=hm();function e(S){var g="https://react.dev/errors/"+S;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:y===d?d:""+y,children:S,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,g){if(S==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(S){return{$$typeof:f,_reason:S}},Un.createPortal=function(S,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(S,g,null,v)},Un.flushSync=function(S){var g=p.T,v=s.p;try{if(p.T=null,s.p=2,S)return S()}finally{p.T=g,s.p=v,s.d.f()}},Un.preconnect=function(S,g){typeof S=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(S,g))},Un.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Un.preinit=function(S,g){if(typeof S=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),R=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(S,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:R,fetchPriority:w}):v==="script"&&s.d.X(S,{crossOrigin:y,integrity:R,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Un.preinitModule=function(S,g){if(typeof S=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);s.d.M(S,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(S)},Un.preload=function(S,g){if(typeof S=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);s.d.L(S,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Un.preloadModule=function(S,g){if(typeof S=="string")if(g){var v=m(g.as,g.crossOrigin);s.d.m(S,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(S)},Un.requestFormReset=function(S){s.d.r(S)},Un.unstable_batchedUpdates=function(S,g){return S(g)},Un.useFormState=function(S,g,v){return p.H.useFormState(S,g,v)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var Yv;function fx(){if(Yv)return wh.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),wh.exports=GE(),wh.exports}var Zv;function VE(){if(Zv)return vl;Zv=1;var o=HE(),e=hm(),i=fx();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return p(l),t;if(c===r)return p(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var _=!1,A=l.child;A;){if(A===a){_=!0,a=l,r=c;break}if(A===r){_=!0,r=l,a=c;break}A=A.sibling}if(!_){for(A=c.child;A;){if(A===a){_=!0,a=c,r=l;break}if(A===r){_=!0,r=c,a=l;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=v(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,P=null;function G(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function C(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(x=t),!0):!1}function N(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function U(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var D=Object.assign,T=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),tt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),Qt=Symbol.for("react.legacy_hidden"),Yt=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),At=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===dt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case nt:return"Profiler";case Y:return"StrictMode";case X:return"Suspense";case ut:return"SuspenseList";case yt:return"Activity";case z:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case tt:return t.displayName||"Context";case K:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case at:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var It=Array.isArray,_t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ve={pending:!1,data:null,method:null,action:null},pe=[],ge=-1;function xe(t){return{current:t}}function ee(t){0>ge||(t.current=pe[ge],pe[ge]=null,ge--)}function ie(t,n){ge++,pe[ge]=t.current,t.current=n}var Xe=xe(null),hn=xe(null),Ie=xe(null),tn=xe(null);function W(t,n){switch(ie(Ie,n),ie(hn,t),ie(Xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?K_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=K_(n),t=Q_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ee(Xe),ie(Xe,t)}function an(){ee(Xe),ee(hn),ee(Ie)}function Pe(t){var n=t.memoizedState;n!==null&&(ks._currentValue=n.memoizedState,ie(tn,t)),n=Xe.current;var a=Q_(n,t.type);n!==a&&(ie(hn,t),ie(Xe,a))}function O(t){hn.current===t&&(ee(Xe),ee(hn)),tn.current===t&&(ee(tn),ks._currentValue=Ve)}var E,et;function lt(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+t+et}var pt=!1;function bt(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Lt){var Z=Lt}Reflect.construct(t,[],St)}else{try{St.call()}catch(Lt){Z=Lt}St=!1;try{var ot=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(ot!==void 0?Object.defineProperty(t.prototype,"props",ot):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){Z=Lt}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Lt){if(Lt&&Z&&typeof Lt.stack=="string")return[Lt.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),_=c[0],A=c[1];if(_&&A){var I=_.split(`
`),j=A.split(`
`);for(l=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(r===I.length||l===j.length)for(r=I.length-1,l=j.length-1;1<=r&&0<=l&&I[r]!==j[l];)l--;for(;1<=r&&0<=l;r--,l--)if(I[r]!==j[l]){if(r!==1||l!==1)do if(r--,l--,0>l||I[r]!==j[l]){var ct=`
`+I[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=l);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?lt(a):""}function Dt(t,n){switch(t.tag){case 26:case 27:case 5:return lt(t.type);case 16:return lt("Lazy");case 13:return t.child!==n&&n!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return lt("Activity");case 30:return lt("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Dt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mt=Object.prototype.hasOwnProperty,wt=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,Ot=o.unstable_requestPaint,Vt=o.unstable_now,ne=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,k=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,xt=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,Gt=o.log,Et=o.unstable_setDisableYieldValue,Jt=null,Ht=null;function Ce(t){if(typeof Gt=="function"&&Et(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Jt,t)}catch{}}var ue=Math.clz32?Math.clz32:jc,ti=Math.log,pi=Math.LN2;function jc(t){return t>>>=0,t===0?32:31-(ti(t)/pi|0)|0}var ss=256,br=262144,Ga=4194304;function ha(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ar(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=ha(r):(_&=A,_!==0?l=ha(_):a||(a=A&~t,a!==0&&(l=ha(a))))):(A=r&~c,A!==0?l=ha(A):_!==0?l=ha(_):a||(a=r&~t,a!==0&&(l=ha(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Va(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Gi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-ue(a),l=1<<r;n|=t[r],a&=~l}return n}function Eo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var t=Ga;return Ga<<=1,(Ga&62914560)===0&&(Ga=4194304),t}function os(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Vi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vl(t,n,a,r,l,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-ue(a),St=1<<ct;A[ct]=0,I[ct]=-1;var Z=j[ct];if(Z!==null)for(j[ct]=null,ct=0;ct<Z.length;ct++){var ot=Z[ct];ot!==null&&(ot.lane&=-536870913)}a&=~St}r!==0&&Rr(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function Rr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-ue(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function bo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-ue(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function Ao(t,n){var a=n&-n;return a=(a&42)!==0?1:Ro(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ro(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Co(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Xl(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:Lv(t.type))}function kl(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var mi=Math.random().toString(36).slice(2),b="__reactFiber$"+mi,F="__reactProps$"+mi,ft="__reactContainer$"+mi,rt="__reactEvents$"+mi,st="__reactListeners$"+mi,zt="__reactHandles$"+mi,Xt="__reactResources$"+mi,Ut="__reactMarker$"+mi,qt="__reactLoad$"+mi;function Zt(t){delete t[b],delete t[F],delete t[st],delete t[zt]}function re(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ft]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=hv(t);t!==null;){if(a=t[b])return a;t=hv(t)}return n}t=a,a=t.parentNode}return null}function ce(t){if(t=t[b]||t[ft]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Me(t){var n=t[Xt];return n||(n=t[Xt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Ut]=!0}function Ze(t){t[qt]=void 0}var He=new Set,Sn={};function Bt(t,n){on(t,n),on(t+"Capture",n)}function on(t,n){for(Sn[t]=n,t=0;t<n.length;t++)He.add(n[t])}var we=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gn={},ei={};function Xi(t){return Mt.call(ei,t)?!0:Mt.call(Gn,t)?!1:we.test(t)?ei[t]=!0:(Gn[t]=!0,!1)}var ve=!1;function Be(){var t=ve;return ve=!1,t}function Je(t,n,a){if(Xi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ni(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Wl(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function $c(t){if(!t._valueTracker){var n=pa(t)?"checked":"value";t._valueTracker=Wl(t,n,""+t[n])}}function zm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=pa(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var iM=/[\n"\\]/g;function gi(t){return t.replace(iM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tf(t,n,a,r,l,c,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ln(n)):t.value!==""+ln(n)&&(t.value=""+ln(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?ef(t,ln(t.value)):ef(t,ln(n)):a!=null?ef(t,ln(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ln(A):t.removeAttribute("name")}function Bm(t,n,a,r,l,c,_,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){$c(t);return}a=a!=null?""+ln(a):"",n=n!=null?""+ln(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),$c(t)}function ef(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ls(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Fm(t,n,a){if(n!=null&&(n=""+ln(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ln(a):""}function Hm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ln(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),$c(t)}function us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var aM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||aM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ve=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(Gm(t,l,r),ve=!0)}else for(var c in n)n.hasOwnProperty(c)&&Gm(t,c,n[c])}function nf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(t){return sM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var af=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cs=null,fs=null;function Xm(t){var n=ce(t);if(n&&(t=n.stateNode)){var a=t[F]||null;t:switch(t=n.stateNode,n.type){case"input":if(tf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[F]||null;if(!l)throw Error(s(90));tf(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&zm(r)}break t;case"textarea":Fm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ls(t,!!a.multiple,n,!1)}}}var sf=!1;function km(t,n,a){if(sf)return t(n,a);sf=!0;try{var r=t(n);return r}finally{if(sf=!1,(cs!==null||fs!==null)&&(qu(),cs&&(n=cs,t=fs,fs=cs=null,Xm(n),t)))for(n=0;n<t.length;n++)Xm(t[n])}}function wo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[F]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=!1;if(ma)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){of=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{of=!1}var Xa=null,lf=null,Yl=null;function Wm(){if(Yl)return Yl;var t,n=lf,a=n.length,r,l="value"in Xa?Xa.value:Xa.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===l[c-r];r++);return Yl=l.slice(t,1<r?1-r:void 0)}function Zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Kl(){return!0}function qm(){return!1}function Vn(t){function n(a,r,l,c,_){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Kl:qm,this.isPropagationStopped=qm,this}return D(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kl)},persist:function(){},isPersistent:Kl}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Vn(ka),No=D({},ka,{view:0,detail:0}),oM=Vn(No),uf,cf,Uo,Jl=D({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(uf=t.screenX-Uo.screenX,cf=t.screenY-Uo.screenY):cf=uf=0,Uo=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:cf}}),Ym=Vn(Jl),lM=D({},Jl,{dataTransfer:0}),uM=Vn(lM),cM=D({},No,{relatedTarget:0}),ff=Vn(cM),fM=D({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),dM=Vn(fM),hM=D({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pM=Vn(hM),mM=D({},ka,{data:0}),Zm=Vn(mM),gM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vM[t])?!!n[t]:!1}function df(){return SM}var xM=D({},No,{key:function(t){if(t.key){var n=gM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_M[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?Zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),MM=Vn(xM),yM=D({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Km=Vn(yM),EM=D({},ka,{submitter:0}),TM=Vn(EM),bM=D({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),AM=Vn(bM),RM=D({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),CM=Vn(RM),wM=D({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DM=Vn(wM),NM=D({},ka,{newState:0,oldState:0,source:0}),UM=Vn(NM),LM=[9,13,27,32],hf=ma&&"CompositionEvent"in window,Lo=null;ma&&"documentMode"in document&&(Lo=document.documentMode);var OM=ma&&"TextEvent"in window&&!Lo,Qm=ma&&(!hf||Lo&&8<Lo&&11>=Lo),Jm=" ",jm=!1;function $m(t,n){switch(t){case"keyup":return LM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function PM(t,n){switch(t){case"compositionend":return t0(n);case"keypress":return n.which!==32?null:(jm=!0,Jm);case"textInput":return t=n.data,t===Jm&&jm?null:t;default:return null}}function IM(t,n){if(ds)return t==="compositionend"||!hf&&$m(t,n)?(t=Wm(),Yl=lf=Xa=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qm&&n.locale!=="ko"?null:n.data;default:return null}}var zM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zM[t.type]:n==="textarea"}function n0(t,n,a,r){cs?fs?fs.push(r):fs=[r]:cs=r,n=ju(n,"onChange"),0<n.length&&(a=new Ql("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Oo=null,Po=null;function BM(t){X_(t,0)}function jl(t){var n=kt(t);if(zm(n))return t}function i0(t,n){if(t==="change")return n}var a0=!1;if(ma){var pf;if(ma){var mf="oninput"in document;if(!mf){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),mf=typeof r0.oninput=="function"}pf=mf}else pf=!1;a0=pf&&(!document.documentMode||9<document.documentMode)}function s0(){Oo&&(Oo.detachEvent("onpropertychange",o0),Po=Oo=null)}function o0(t){if(t.propertyName==="value"&&jl(Po)){var n=[];n0(n,Po,t,rf(t)),km(BM,n)}}function FM(t,n,a){t==="focusin"?(s0(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",o0)):t==="focusout"&&s0()}function HM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Po)}function GM(t,n){if(t==="click")return jl(n)}function VM(t,n){if(t==="input"||t==="change")return jl(n)}function XM(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:XM;function Io(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Mt.call(n,l)||!ii(t[l],n[l]))return!1}return!0}function gf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function l0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function u0(t,n){var a=l0(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=l0(a)}}function c0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?c0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function f0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gf(t.document)}return n}function _f(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var kM=ma&&"documentMode"in document&&11>=document.documentMode,hs=null,vf=null,zo=null,Sf=!1;function d0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sf||hs==null||hs!==gf(r)||(r=hs,"selectionStart"in r&&_f(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&Io(zo,r)||(zo=r,r=ju(vf,"onSelect"),0<r.length&&(n=new Ql("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=hs)))}function Cr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ps={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},xf={},h0={};ma&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function wr(t){if(xf[t])return xf[t];if(!ps[t])return t;var n=ps[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in h0)return xf[t]=n[a];return t}var p0=wr("animationend"),m0=wr("animationiteration"),g0=wr("animationstart"),WM=wr("transitionrun"),qM=wr("transitionstart"),YM=wr("transitioncancel"),_0=wr("transitionend"),v0=new Map,Mf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mf.push("scrollEnd");function Ri(t,n){v0.set(t,n),Bt(n,[t])}var ZM=0;function ga(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ni.identifierPrefix;var a=ZM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function S0(t){if(t==null||typeof t=="string")return t;var n=null,a=Os;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function _a(t,n){return t=S0(t),n=S0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],ms=0,yf=0;function tu(){for(var t=ms,n=yf=ms=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var l=_i[n];_i[n++]=null;var c=_i[n];if(_i[n++]=null,r!==null&&l!==null){var _=r.pending;_===null?l.next=l:(l.next=_.next,_.next=l),r.pending=l}c!==0&&x0(a,l,c)}}function eu(t,n,a,r){_i[ms++]=t,_i[ms++]=n,_i[ms++]=a,_i[ms++]=r,yf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Ef(t,n,a,r){return eu(t,n,a,r),nu(t)}function Dr(t,n){return eu(t,null,null,n),nu(t)}function x0(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-ue(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function nu(t){if(50<rl)throw rl=0,Wu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var gs={};function KM(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new KM(t,n,a,r)}function Tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function M0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function iu(t,n,a,r,l,c){var _=0;if(r=t,typeof r=="function")Tf(r)&&(_=1);else if(typeof r=="string")_=EE(t,a,Xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case yt:return t=Yn(31,a,n,l),t.elementType=yt,t.lanes=c,t;case B:return Nr(a.children,l,c,n);case Y:_=8,l|=24;break;case nt:return t=Yn(12,a,n,l|2),t.elementType=nt,t.lanes=c,t;case X:return t=Yn(13,a,n,l),t.elementType=X,t.lanes=c,t;case ut:return t=Yn(19,a,n,l),t.elementType=ut,t.lanes=c,t;case Qt:case z:return t=l|32,t=Yn(30,a,n,t),t.elementType=z,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case tt:_=10;break t;case K:_=9;break t;case q:_=11;break t;case at:_=14;break t;case ht:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(_,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Nr(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function bf(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function y0(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Af(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var E0=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=E0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},E0.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var _s=[],vs=0,au=null,Bo=0,Si=[],xi=0,Wa=null,Wi=1,qi="";function Sa(t,n){_s[vs++]=Bo,_s[vs++]=au,au=t,Bo=n}function T0(t,n,a){Si[xi++]=Wi,Si[xi++]=qi,Si[xi++]=Wa,Wa=t;var r=Wi;t=qi;var l=32-ue(r)-1;r&=~(1<<l),a+=1;var c=32-ue(n)+l;if(30<c){var _=l-l%5;c=(r&(1<<_)-1).toString(32),r>>=_,l-=_,Wi=1<<32-ue(n)+l|a<<l|r,qi=c+t}else Wi=1<<c|a<<l|r,qi=t}function ru(t){t.return!==null&&(Sa(t,1),T0(t,1,0))}function Rf(t){for(;t===au;)au=_s[--vs],_s[vs]=null,Bo=_s[--vs],_s[vs]=null;for(;t===Wa;)Wa=Si[--xi],Si[xi]=null,qi=Si[--xi],Si[xi]=null,Wi=Si[--xi],Si[xi]=null}function b0(t,n){Si[xi++]=Wi,Si[xi++]=qi,Si[xi++]=Wa,Wi=n.id,qi=n.overflow,Wa=t}var En=null,je=null,Se=!1,qa=null,Mi=!1,Cf=Error(s(519));function Ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(vi(n,t)),Cf}function A0(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[F]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ee(ol[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Bm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Hm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Y_(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ya(t,!0)}function su(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:En=En.return}}function Ss(t){if(t!==En)return!1;if(!Se)return su(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ah(t.type,t.memoizedProps)),a=!a),a&&je&&Ya(t),su(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=dv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));je=dv(t)}else n===27?(n=je,ur(t.type)?(t=hh,hh=null,je=t):je=n):je=En?Ei(t.stateNode.nextSibling):null;return!0}function Ur(){je=En=null,Se=!1}function wf(){var t=qa;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),qa=null),t}function Fo(t){qa===null?qa=[t]:qa.push(t)}var Df=xe(null),Lr=null,xa=null;function Za(t,n,a){ie(Df,n._currentValue),n._currentValue=a}function Ma(t){t._currentValue=Df.current,ee(Df)}function ou(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Nf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var _=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),ou(c.return,a,t),r||(_=null);break t}c=A.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(s(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),ou(_,a,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,_=l.alternate,_!==null&&(_.lanes|=a),ou(l.return,a,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function Or(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=l.type;ii(l.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(l===tn.current){if(_=l.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(ks):t=[ks])}l=l.return}return t!==null&&Nf(n,t,a,r),n.flags|=262144,t!==null}function lu(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Pr(t){Lr=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return R0(Lr,t)}function uu(t,n){return Lr===null&&Pr(t),R0(t,n)}function R0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(t===null)throw Error(s(308));xa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else xa=xa.next=n;return a}var QM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},JM=o.unstable_scheduleCallback,jM=o.unstable_NormalPriority,pn={$$typeof:tt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new QM,data:new Map,refCount:0}}function Ho(t){t.refCount--,t.refCount===0&&JM(jM,function(){t.controller.abort()})}function C0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Go=null;function $M(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Vo=null,Lf=0,Ir=0,xs=null;function ty(t,n){if(Vo===null){var a=Vo=[];Lf=0,Ir=Kd(),xs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lf++,n.then(w0,w0),n}function w0(){if(--Lf===0&&(Go=null,Vo!==null)){xs!==null&&(xs.status="fulfilled");var t=Vo;Vo=null,Ir=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ey(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var D0=_t.S;_t.S=function(t,n){if(y_=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ty(t,n),Go!==null)for(var a=Bs;a!==null;)C0(a,Go),a=a.next;if(a=t.types,a!==null){for(var r=Bs;r!==null;)C0(r,a),r=r.next;if(Ir!==0){r=Go,r===null&&(r=Go=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}D0!==null&&D0(t,n)};var zr=xe(null);function Of(){var t=zr.current;return t!==null?t:Qe.pooledCache}function cu(t,n){n===null?ie(zr,zr.current):ie(zr,n.pool)}function N0(){var t=Of();return t===null?null:{parent:pn._currentValue,pool:t}}var Ms=Error(s(460)),Pf=Error(s(474)),fu=Error(s(542)),du={then:function(){}};function U0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function L0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,P0(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,P0(t),t}throw Fr=n,Ms}}function Br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fr=a,Ms):a}}var Fr=null;function O0(){if(Fr===null)throw Error(s(459));var t=Fr;return Fr=null,t}function P0(t){if(t===Ms||t===fu)throw Error(s(483))}var ys=null,Xo=0;function hu(t){var n=Xo;return Xo+=1,ys===null&&(ys=[]),L0(ys,t,n)}function Ka(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pu(t,n){throw n.$$typeof===T?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function I0(t){function n(J,H){if(t){var it=J.deletions;it===null?(J.deletions=[H],J.flags|=16):it.push(H)}}function a(J,H){if(!t)return null;for(;H!==null;)n(J,H),H=H.sibling;return null}function r(J){for(var H=new Map;J!==null;)J.key===null?H.set(J.index,J):H.set(J.key,J),J=J.sibling;return H}function l(J,H){return J=va(J,H),J.index=0,J.sibling=null,J}function c(J,H,it){return J.index=it,t?(it=J.alternate,it!==null?(it=it.index,it<H?(J.flags|=2,H):it):(J.flags|=134217730,H)):(J.flags|=1048576,H)}function _(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function A(J,H,it,vt){return H===null||H.tag!==6?(H=bf(it,J.mode,vt),H.return=J,H):(H=l(H,it),H.return=J,H)}function I(J,H,it,vt){var Wt=it.type;return Wt===B?(J=ct(J,H,it.props.children,vt,it.key),Ka(J,it),J):H!==null&&(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===ht&&Br(Wt)===H.type)?(H=l(H,it.props),Ka(H,it),H.return=J,H):(H=iu(it.type,it.key,it.props,null,J.mode,vt),Ka(H,it),H.return=J,H)}function j(J,H,it,vt){return H===null||H.tag!==4||H.stateNode.containerInfo!==it.containerInfo||H.stateNode.implementation!==it.implementation?(H=Af(it,J.mode,vt),H.return=J,H):(H=l(H,it.children||[]),H.return=J,H)}function ct(J,H,it,vt,Wt){return H===null||H.tag!==7?(H=Nr(it,J.mode,vt,Wt),H.return=J,H):(H=l(H,it),H.return=J,H)}function St(J,H,it){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=bf(""+H,J.mode,it),H.return=J,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case L:return it=iu(H.type,H.key,H.props,null,J.mode,it),Ka(it,H),it.return=J,it;case V:return H=Af(H,J.mode,it),H.return=J,H;case ht:return H=Br(H),St(J,H,it)}if(It(H)||Q(H))return H=Nr(H,J.mode,it,null),H.return=J,H;if(typeof H.then=="function")return St(J,hu(H),it);if(H.$$typeof===tt)return St(J,uu(J,H),it);pu(J,H)}return null}function Z(J,H,it,vt){var Wt=H!==null?H.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Wt!==null?null:A(J,H,""+it,vt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case L:return it.key===Wt?I(J,H,it,vt):null;case V:return it.key===Wt?j(J,H,it,vt):null;case ht:return it=Br(it),Z(J,H,it,vt)}if(It(it)||Q(it))return Wt!==null?null:ct(J,H,it,vt,null);if(typeof it.then=="function")return Z(J,H,hu(it),vt);if(it.$$typeof===tt)return Z(J,H,uu(J,it),vt);pu(J,it)}return null}function ot(J,H,it,vt,Wt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return J=J.get(it)||null,A(H,J,""+vt,Wt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case L:return J=J.get(vt.key===null?it:vt.key)||null,I(H,J,vt,Wt);case V:return J=J.get(vt.key===null?it:vt.key)||null,j(H,J,vt,Wt);case ht:return vt=Br(vt),ot(J,H,it,vt,Wt)}if(It(vt)||Q(vt))return J=J.get(it)||null,ct(H,J,vt,Wt,null);if(typeof vt.then=="function")return ot(J,H,it,hu(vt),Wt);if(vt.$$typeof===tt)return ot(J,H,it,uu(H,vt),Wt);pu(H,vt)}return null}function Lt(J,H,it,vt){for(var Wt=null,Re=null,te=H,ae=H=0,_n=null;te!==null&&ae<it.length;ae++){te.index>ae?(_n=te,te=null):_n=te.sibling;var Ue=Z(J,te,it[ae],vt);if(Ue===null){te===null&&(te=_n);break}t&&te&&Ue.alternate===null&&n(J,te),H=c(Ue,H,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue,te=_n}if(ae===it.length)return a(J,te),Se&&Sa(J,ae),Wt;if(te===null){for(;ae<it.length;ae++)te=St(J,it[ae],vt),te!==null&&(H=c(te,H,ae),Re===null?Wt=te:Re.sibling=te,Re=te);return Se&&Sa(J,ae),Wt}for(te=r(te);ae<it.length;ae++)_n=ot(te,J,ae,it[ae],vt),_n!==null&&(t&&(Ue=_n.alternate,Ue!==null&&te.delete(Ue.key===null?ae:Ue.key)),H=c(_n,H,ae),Re===null?Wt=_n:Re.sibling=_n,Re=_n);return t&&te.forEach(function(pr){return n(J,pr)}),Se&&Sa(J,ae),Wt}function Kt(J,H,it,vt){if(it==null)throw Error(s(151));for(var Wt=null,Re=null,te=H,ae=H=0,_n=null,Ue=it.next();te!==null&&!Ue.done;ae++,Ue=it.next()){te.index>ae?(_n=te,te=null):_n=te.sibling;var pr=Z(J,te,Ue.value,vt);if(pr===null){te===null&&(te=_n);break}t&&te&&pr.alternate===null&&n(J,te),H=c(pr,H,ae),Re===null?Wt=pr:Re.sibling=pr,Re=pr,te=_n}if(Ue.done)return a(J,te),Se&&Sa(J,ae),Wt;if(te===null){for(;!Ue.done;ae++,Ue=it.next())Ue=St(J,Ue.value,vt),Ue!==null&&(H=c(Ue,H,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue);return Se&&Sa(J,ae),Wt}for(te=r(te);!Ue.done;ae++,Ue=it.next())Ue=ot(te,J,ae,Ue.value,vt),Ue!==null&&(t&&(_n=Ue.alternate,_n!==null&&te.delete(_n.key===null?ae:_n.key)),H=c(Ue,H,ae),Re===null?Wt=Ue:Re.sibling=Ue,Re=Ue);return t&&te.forEach(function(PE){return n(J,PE)}),Se&&Sa(J,ae),Wt}function he(J,H,it,vt){if(typeof it=="object"&&it!==null&&it.type===B&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case L:t:{for(var Wt=it.key;H!==null;){if(H.key===Wt){if(Wt=it.type,Wt===B){if(H.tag===7){a(J,H.sibling),vt=l(H,it.props.children),Ka(vt,it),vt.return=J,J=vt;break t}}else if(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===ht&&Br(Wt)===H.type){a(J,H.sibling),vt=l(H,it.props),Ka(vt,it),vt.return=J,J=vt;break t}a(J,H);break}else n(J,H);H=H.sibling}it.type===B?(vt=Nr(it.props.children,J.mode,vt,it.key),Ka(vt,it),vt.return=J,J=vt):(vt=iu(it.type,it.key,it.props,null,J.mode,vt),Ka(vt,it),vt.return=J,J=vt)}return _(J);case V:t:{for(Wt=it.key;H!==null;){if(H.key===Wt)if(H.tag===4&&H.stateNode.containerInfo===it.containerInfo&&H.stateNode.implementation===it.implementation){a(J,H.sibling),vt=l(H,it.children||[]),vt.return=J,J=vt;break t}else{a(J,H);break}else n(J,H);H=H.sibling}vt=Af(it,J.mode,vt),vt.return=J,J=vt}return _(J);case ht:return it=Br(it),he(J,H,it,vt)}if(It(it))return Lt(J,H,it,vt);if(Q(it)){if(Wt=Q(it),typeof Wt!="function")throw Error(s(150));return it=Wt.call(it),Kt(J,H,it,vt)}if(typeof it.then=="function")return he(J,H,hu(it),vt);if(it.$$typeof===tt)return he(J,H,uu(J,it),vt);pu(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,H!==null&&H.tag===6?(a(J,H.sibling),vt=l(H,it),vt.return=J,J=vt):(a(J,H),vt=bf(it,J.mode,vt),vt.return=J,J=vt),_(J)):a(J,H)}return function(J,H,it,vt){try{Xo=0;var Wt=he(J,H,it,vt);return ys=null,Wt}catch(te){if(te===Ms||te===fu)throw te;var Re=Yn(29,te,null,J.mode);return Re.lanes=vt,Re.return=J,Re}}}var Hr=I0(!0),z0=I0(!1),Qa=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ja(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=nu(t),x0(t,null,a),n}return eu(t,r,n,a),nu(t)}function ko(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,bo(t,a)}}function Bf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ff=!1;function Wo(){if(Ff){var t=xs;if(t!==null)throw t}}function qo(t,n,a,r){Ff=!1;var l=t.updateQueue;Qa=!1;var c=l.firstBaseUpdate,_=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var I=A,j=I.next;I.next=null,_===null?c=j:_.next=j,_=I;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==_&&(A===null?ct.firstBaseUpdate=j:A.next=j,ct.lastBaseUpdate=I))}if(c!==null){var St=l.baseState;_=0,ct=j=I=null,A=c;do{var Z=A.lane&-536870913,ot=Z!==A.lane;if(ot?(Ae&Z)===Z:(r&Z)===Z){Z!==0&&Z===Ir&&(Ff=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Lt=t,Kt=A;Z=n;var he=a;switch(Kt.tag){case 1:if(Lt=Kt.payload,typeof Lt=="function"){St=Lt.call(he,St,Z);break t}St=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Kt.payload,Z=typeof Lt=="function"?Lt.call(he,St,Z):Lt,Z==null)break t;St=D({},St,Z);break t;case 2:Qa=!0}}Z=A.callback,Z!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=l.callbacks,ot===null?l.callbacks=[Z]:ot.push(Z))}else ot={lane:Z,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(j=ct=ot,I=St):ct=ct.next=ot,_|=Z;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,l.lastBaseUpdate=ot,l.shared.pending=null}}while(!0);ct===null&&(I=St),l.baseState=I,l.firstBaseUpdate=j,l.lastBaseUpdate=ct,c===null&&(l.shared.lanes=0),rr|=_,t.lanes=_,t.memoizedState=St}}function B0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function F0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)B0(a[t],n)}var $a=xe(null),mu=xe(0);function H0(t,n){t=Aa,ie(mu,t),ie($a,n),Aa=t|n.baseLanes}function Hf(){ie(mu,Aa),ie($a,$a.current)}function Gf(){Aa=mu.current,ee($a),ee(mu)}var Cn=xe(null),In=null;function tr(t){var n=t.alternate;ie(wn,wn.current&1),ie(Cn,t),In===null&&(n===null||$a.current!==null||n.memoizedState!==null)&&(In=t)}function Vf(t){ie(wn,wn.current),ie(Cn,t),In===null&&(In=t)}function G0(t){t.tag===22?(ie(wn,wn.current),ie(Cn,t),In===null&&(In=t)):er()}function er(){ie(wn,wn.current),ie(Cn,Cn.current)}function ai(t){ee(Cn),In===t&&(In=null),ee(wn)}var wn=xe(0);function Yo(t,n){ie(Cn,Cn.current),ie(wn,n)}function Xf(t){ee(wn),ee(Cn),In===t&&(In=null)}function gu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||dh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,de=null,Ke=null,mn=null,_u=!1,Es=!1,Gr=!1,vu=0,Zo=0,Ts=null,ny=0;function un(){throw Error(s(321))}function kf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Wf(t,n,a,r,l,c){return ya=c,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=t===null||t.memoizedState===null?Tg:bg,Gr=!1,c=a(r,l),Gr=!1,Es&&(c=X0(n,a,r,l)),V0(t),c}function V0(t){_t.H=bu;var n=Ke!==null&&Ke.next!==null;if(ya=0,mn=Ke=de=null,_u=!1,Zo=0,Ts=null,n)throw Error(s(300));t===null||gn||(t=t.dependencies,t!==null&&lu(t)&&(gn=!0))}function X0(t,n,a,r){de=t;var l=0;do{if(Es&&(Ts=null),Zo=0,Es=!1,25<=l)throw Error(s(301));if(l+=1,mn=Ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_t.H=cy,c=n(a,r)}while(Es);return c}function iy(){var t=_t.H,n=t.useState()[0];return n=typeof n.then=="function"?Ko(n):n,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(de.flags|=1024),n}function qf(){var t=vu!==0;return vu=0,t}function Yf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zf(t){if(_u){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_u=!1}ya=0,mn=Ke=de=null,Es=!1,Zo=vu=0,Ts=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?de.memoizedState=mn=t:mn=mn.next=t,mn}function fn(){if(Ke===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=mn===null?de.memoizedState:mn.next;if(n!==null)mn=n,Ke=t;else{if(t===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},mn===null?de.memoizedState=mn=t:mn=mn.next=t}return mn}function Su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(t){var n=Zo;return Zo+=1,Ts===null&&(Ts=[]),t=L0(Ts,t,n),n=de,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?Tg:bg),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ko(t);if(t.$$typeof===mt)return;if(t.$$typeof===tt)return Rn(t)}throw Error(s(438,String(t)))}function Kf(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Su(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Yt;return n.index++,a}function Ea(t,n){return typeof n=="function"?n(t):n}function Mu(t){var n=fn();return Qf(n,Ke,t)}function Qf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var _=l.next;l.next=c.next,c.next=_}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=_=null,I=null,j=n,ct=!1;do{var St=j.lane&-536870913;if(St!==j.lane?(Ae&St)===St:(ya&St)===St){var Z=j.revertLane;if(Z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),St===Ir&&(ct=!0);else if((ya&Z)===Z){j=j.next,Z===Ir&&(ct=!0);continue}else St={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(A=I=St,_=c):I=I.next=St,de.lanes|=Z,rr|=Z;St=j.action,Gr&&a(c,St),c=j.hasEagerState?j.eagerState:a(c,St)}else Z={lane:St,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(A=I=Z,_=c):I=I.next=Z,de.lanes|=St,rr|=St;j=j.next}while(j!==null&&j!==n);if(I===null?_=c:I.next=A,!ii(c,t.memoizedState)&&(gn=!0,ct&&(a=xs,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=I,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Jf(t){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var _=l=l.next;do c=t(c,_.action),_=_.next;while(_!==l);ii(c,n.memoizedState)||(gn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function k0(t,n,a){var r=de,l=fn(),c=Se;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ii((Ke||l).memoizedState,a);if(_&&(l.memoizedState=a,gn=!0),l=l.queue,td(Y0.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||_||mn!==null&&(mn.memoizedState.tag&1)!==0,bs(t?9:8,{destroy:void 0},q0.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Qe===null)throw Error(s(349));c||(ya&127)!==0||W0(r,n,a)}return a}function W0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Su(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function q0(t,n,a,r){n.value=a,n.getSnapshot=r,Z0(n)&&K0(t)}function Y0(t,n,a){return a(function(){Z0(n)&&K0(t)})}function Z0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function K0(t){var n=Dr(t,2);n!==null&&Jn(n,t,2)}function jf(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Gr){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},n}function Q0(t,n,a,r){return t.baseState=a,Qf(t,Ke,typeof r=="function"?r:Ea)}function ay(t,n,a,r,l){if(Tu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};_t.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,J0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function J0(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=_t.T,_={};_.types=c!==null?c.types:null,_t.T=_;try{var A=a(l,r),I=_t.S;I!==null&&I(_,A),j0(t,n,A)}catch(j){$f(t,n,j)}finally{c!==null&&_.types!==null&&(c.types=_.types),_t.T=c}}else try{c=a(l,r),j0(t,n,c)}catch(j){$f(t,n,j)}}function j0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){$0(t,n,r)},function(r){return $f(t,n,r)}):$0(t,n,a)}function $0(t,n,a){n.status="fulfilled",n.value=a,tg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,J0(t,a)))}function $f(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,tg(n),n=n.next;while(n!==r)}t.action=null}function tg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function eg(t,n){return n}function ng(t,n){if(Se){var a=Qe.formState;if(a!==null){t:{var r=de;if(Se){if(je){e:{for(var l=je,c=Mi;l.nodeType!==8;){if(!c){l=null;break e}if(l=Ei(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){je=Ei(l.nextSibling),r=l.data==="F!";break t}}Ya(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:n},a.queue=r,a=Mg.bind(null,de,r),r.dispatch=a,r=jf(!1),c=rd.bind(null,de,!1,r.queue),r=Xn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=ay.bind(null,de,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function ig(t){var n=fn();return ag(n,Ke,t)}function ag(t,n,a){if(n=Qf(t,n,eg)[0],t=Mu(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ko(n)}catch(_){throw _===Ms?fu:_}else r=n;n=fn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(de.flags|=2048,bs(9,{destroy:void 0},ry.bind(null,l,a),null)),[r,c,t]}function ry(t,n){t.action=n}function rg(t){var n=fn(),a=Ke;if(a!==null)return ag(n,a,t);fn(),n=n.memoizedState,a=fn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function bs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=Su(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function sg(){return fn().memoizedState}function yu(t,n,a,r){var l=Xn();de.flags|=t,l.memoizedState=bs(1|n,{destroy:void 0},a,r===void 0?null:r)}function Eu(t,n,a,r){var l=fn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ke!==null&&r!==null&&kf(r,Ke.memoizedState.deps)?l.memoizedState=bs(n,c,a,r):(de.flags|=t,l.memoizedState=bs(1|n,c,a,r))}function og(t,n){yu(8390656,8,t,n)}function td(t,n){Eu(2048,8,t,n)}function sy(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=Su(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function lg(t){var n=fn().memoizedState;return sy({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ug(t,n){return Eu(4,2,t,n)}function cg(t,n){return Eu(4,4,t,n)}function fg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function dg(t,n,a){a=a!=null?a.concat([t]):null,Eu(4,4,fg.bind(null,n,t),a)}function ed(){}function hg(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&kf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function pg(t,n){var a=fn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&kf(n,r[1]))return r[0];if(r=t(),Gr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r}function nd(t,n,a){return a===void 0||(ya&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=T_(),de.lanes|=t,rr|=t,a)}function mg(t,n,a,r){return ii(a,n)?a:$a.current!==null?(t=nd(t,a,r),ii(t,n)||(gn=!0),t):(ya&106)===0||(ya&1073741824)!==0&&(Ae&261930)===0?(gn=!0,t.memoizedState=a):(t=T_(),de.lanes|=t,rr|=t,n)}function gg(t,n,a,r,l){var c=Rt.p;Rt.p=c!==0&&8>c?c:8;var _=_t.T,A={};A.types=_!==null?_.types:null,_t.T=A,rd(t,!1,n,a);try{var I=l(),j=_t.S;if(j!==null&&j(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=ey(I,r);Qo(t,n,ct,li(t))}else Qo(t,n,r,li(t))}catch(St){Qo(t,n,{then:function(){},status:"rejected",reason:St},li())}finally{Rt.p=c,_!==null&&A.types!==null&&(_.types=A.types),_t.T=_}}function oy(){}function id(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=_g(t).queue;gg(t,l,n,Ve,a===null?oy:function(){return vg(t),a(r)})}function _g(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ve,baseState:Ve,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:Ve},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function vg(t){var n=_g(t);n.next===null&&(n=t.alternate.memoizedState),Qo(t,n.next.queue,{},li())}function ad(){return Rn(ks)}function Sg(){return fn().memoizedState}function xg(){return fn().memoizedState}function ly(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Ja(a);var r=ja(n,t,a);r!==null&&(Jn(r,n,a),ko(r,n,a)),n={cache:Uf()},t.payload=n;return}n=n.return}}function uy(t,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(t)?yg(n,a):(a=Ef(t,n,a,r),a!==null&&(Jn(a,t,r),Eg(a,n,r)))}function Mg(t,n,a){var r=li();Qo(t,n,a,r)}function Qo(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tu(t))yg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,A=c(_,a);if(l.hasEagerState=!0,l.eagerState=A,ii(A,_))return eu(t,n,l,0),Qe===null&&tu(),!1}catch{}if(a=Ef(t,n,l,r),a!==null)return Jn(a,t,r),Eg(a,n,r),!0}return!1}function rd(t,n,a,r){if(r={lane:2,revertLane:Kd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tu(t)){if(n)throw Error(s(479))}else n=Ef(t,a,r,2),n!==null&&Jn(n,t,2)}function Tu(t){var n=t.alternate;return t===de||n!==null&&n===de}function yg(t,n){Es=_u=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Eg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,bo(t,a)}}var bu={readContext:Rn,use:xu,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},Tg={readContext:Rn,use:xu,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:og,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,yu(4194308,4,fg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return yu(4194308,4,t,n)},useInsertionEffect:function(t,n){yu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(Gr){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var l=a(n);if(Gr){Ce(!0);try{a(n)}finally{Ce(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=uy.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=jf(t);var n=t.queue,a=Mg.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ed,useDeferredValue:function(t,n){var a=Xn();return nd(a,t,n)},useTransition:function(){var t=jf(!1);return t=gg.bind(null,de,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=de,l=Xn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Ae&127)!==0||W0(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,og(Y0.bind(null,r,c,t),[t]),r.flags|=2048,bs(9,{destroy:void 0},q0.bind(null,r,c,a,n),null),a},useId:function(){var t=Xn(),n=Qe.identifierPrefix;if(Se){var a=qi,r=Wi;a=(r&~(1<<32-ue(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ny++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ad,useFormState:ng,useActionState:ng,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rd.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Kf,useCacheRefresh:function(){return Xn().memoizedState=ly.bind(null,de)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},bg={readContext:Rn,use:xu,useCallback:hg,useContext:Rn,useEffect:td,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:Mu,useRef:sg,useState:function(){return Mu(Ea)},useDebugValue:ed,useDeferredValue:function(t,n){var a=fn();return mg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=Mu(Ea)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:k0,useId:Sg,useHostTransitionStatus:ad,useFormState:ig,useActionState:ig,useOptimistic:function(t,n){var a=fn();return Q0(a,Ke,t,n)},useMemoCache:Kf,useCacheRefresh:xg,useEffectEvent:lg},cy={readContext:Rn,use:xu,useCallback:hg,useContext:Rn,useEffect:td,useImperativeHandle:dg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:Jf,useRef:sg,useState:function(){return Jf(Ea)},useDebugValue:ed,useDeferredValue:function(t,n){var a=fn();return Ke===null?nd(a,t,n):mg(a,Ke.memoizedState,t,n)},useTransition:function(){var t=Jf(Ea)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Ko(t),n]},useSyncExternalStore:k0,useId:Sg,useHostTransitionStatus:ad,useFormState:rg,useActionState:rg,useOptimistic:function(t,n){var a=fn();return Ke!==null?Q0(a,Ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Kf,useCacheRefresh:xg,useEffectEvent:lg};function sd(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:D({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var od={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=li(),l=Ja(r);l.payload=n,a!=null&&(l.callback=a),n=ja(t,l,r),n!==null&&(Jn(n,t,r),ko(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=li(),l=Ja(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=ja(t,l,r),n!==null&&(Jn(n,t,r),ko(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),r=Ja(a);r.tag=2,n!=null&&(r.callback=n),n=ja(t,r,a),n!==null&&(Jn(n,t,a),ko(n,t,a))}};function Ag(t,n,a,r,l,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,_):n.prototype&&n.prototype.isPureReactComponent?!Io(a,r)||!Io(l,c):!0}function Rg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&od.enqueueReplaceState(n,n.state,null)}function Vr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=D({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function Cg(t){$l(t)}function wg(t){console.error(t)}function Dg(t){$l(t)}function Au(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Ng(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ld(t,n,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Au(t,n)},a}function Ug(t){return t=Ja(t),t.tag=3,t}function Lg(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Ng(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ng(n,a,r),typeof l!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function fy(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Or(n,a,l,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Yu():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===du?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),qd(t,r,l)),!1;case 22:return a.flags|=65536,r===du?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),qd(t,r,l)),!1}throw Error(s(435,a.tag))}return qd(t,r,l),Yu(),!1}if(Se)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Cf&&(t=Error(s(422),{cause:r}),Fo(vi(t,a)))):(r!==Cf&&(n=Error(s(423),{cause:r}),Fo(vi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=vi(r,a),l=ld(t.stateNode,r,l),Bf(t,l),cn!==4&&(cn=2)),!1;var c=Error(s(520),{cause:r});if(c=vi(c,a),al===null?al=[c]:al.push(c),cn!==4&&(cn=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=ld(a.stateNode,r,t),Bf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(sr===null||!sr.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Ug(l),Lg(l,t,a,r),Bf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ud=Error(s(461)),gn=!1;function xn(t,n,a,r){n.child=t===null?z0(n,null,a,r):Hr(n,t.child,a,r)}function Og(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return Pr(n),r=Wf(t,n,a,_,c,l),A=qf(),t!==null&&!gn?(Yf(t,n,l),Ta(t,n,l)):(Se&&A&&ru(n),n.flags|=1,xn(t,n,r,l),n.child)}function Pg(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!Tf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Ig(t,n,c,r,l)):(t=iu(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!_d(t,l)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(_,r)&&t.ref===n.ref)return Ta(t,n,l)}return n.flags|=1,t=va(c,r),t.ref=n.ref,t.return=n,n.child=t}function Ig(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(Io(c,r)&&t.ref===n.ref)if(gn=!1,n.pendingProps=r=c,_d(t,l))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,Ta(t,n,l)}return cd(t,n,a,r,l)}function zg(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Bg(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(n,c!==null?c.cachePool:null),c!==null?H0(n,c):Hf(),G0(n);else return r=n.lanes=536870912,Bg(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(cu(n,c.cachePool),H0(n,c),er(),n.memoizedState=null):(t!==null&&cu(n,null),Hf(),er());return xn(t,n,l,a),n.child}function Jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bg(t,n,a,r,l){var c=Of();return c=c===null?null:{parent:pn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&cu(n,null),Hf(),G0(n),t!==null&&Or(t,n,r,!0),n.childLanes=l,null}function Ru(t,n){return n=Cu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Fg(t,n,a){return Hr(n,t.child,null,a),t=Ru(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function dy(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Ru(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Jo(null,t);if(Vf(n),(t=je)?(t=fv(t,Mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=y0(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return Ru(n,r)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(Vf(n),l)if(n.flags&256)n.flags&=-257,n=Fg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||Or(t,n,a,!1),l=(a&t.childLanes)!==0,gn||l){if($a.current===null){if(r=Qe,r!==null&&(_=Ao(r,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,Dr(t,_),Jn(r,t,_),ud;Yu()}n=Fg(t,n,a)}else t=c.treeContext,je=Ei(_.nextSibling),En=n,Se=!0,qa=null,Mi=!1,t!==null&&b0(n,t),n=Ru(n,r),n.flags|=134221824;return n}return t=va(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function As(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function cd(t,n,a,r,l){return Pr(n),a=Wf(t,n,a,r,void 0,l),r=qf(),t!==null&&!gn?(Yf(t,n,l),Ta(t,n,l)):(Se&&r&&ru(n),n.flags|=1,xn(t,n,a,l),n.child)}function Hg(t,n,a,r,l,c){return Pr(n),n.updateQueue=null,a=X0(n,r,a,l),V0(t),r=qf(),t!==null&&!gn?(Yf(t,n,c),Ta(t,n,c)):(Se&&r&&ru(n),n.flags|=1,xn(t,n,a,c),n.child)}function Gg(t,n,a,r,l){if(Pr(n),n.stateNode===null){var c=gs,_=a.contextType;typeof _=="object"&&_!==null&&(c=Rn(_)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=od,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},If(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?Rn(_):gs,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(sd(n,a,_,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&od.enqueueReplaceState(c,c.state,null),qo(n,r,c,l),Wo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,I=Vr(a,A);c.props=I;var j=c.context,ct=a.contextType;_=gs,typeof ct=="object"&&ct!==null&&(_=Rn(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||j!==_)&&Rg(n,c,r,_),Qa=!1;var Z=n.memoizedState;c.state=Z,qo(n,r,c,l),Wo(),j=n.memoizedState,A||Z!==j||Qa?(typeof St=="function"&&(sd(n,a,St,r),j=n.memoizedState),(I=Qa||Ag(n,a,I,r,Z,j,_))?(ct||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),c.props=r,c.state=j,c.context=_,r=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,zf(t,n),_=n.memoizedProps,ct=Vr(a,_),c.props=ct,St=n.pendingProps,Z=c.context,j=a.contextType,I=gs,typeof j=="object"&&j!==null&&(I=Rn(j)),A=a.getDerivedStateFromProps,(j=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==St||Z!==I)&&Rg(n,c,r,I),Qa=!1,Z=n.memoizedState,c.state=Z,qo(n,r,c,l),Wo();var ot=n.memoizedState;_!==St||Z!==ot||Qa||t!==null&&t.dependencies!==null&&lu(t.dependencies)?(typeof A=="function"&&(sd(n,a,A,r),ot=n.memoizedState),(ct=Qa||Ag(n,a,ct,r,Z,ot,I)||t!==null&&t.dependencies!==null&&lu(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,ot,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,ot,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),c.props=r,c.state=ot,c.context=I,r=ct):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,As(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Hr(n,t.child,null,l),n.child=Hr(n,null,a,l)):xn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=Ta(t,n,l),t}function Vg(t,n,a,r){return Ur(),n.flags|=256,xn(t,n,a,r),n.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(t){return{baseLanes:t,cachePool:N0()}}function hd(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function Xg(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(wn.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(l?tr(n):er(),(t=je)?(t=fv(t,Mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=y0(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw Ya(n);return dh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(er(),l=n.mode,c=Cu({mode:"hidden",children:c},l),r=Nr(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=dd(a),r.childLanes=hd(t,_,a),n.memoizedState=fd,Jo(null,r)):(tr(n),pd(n,c))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return hy(t,n,c,_,r,I,A,a)}return l?(er(),l=r.fallback,c=n.mode,A=t.child,I=A.sibling,r=va(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,I!==null?l=va(I,l):(l=Nr(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Jo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=dd(a):(c=l.cachePool,c!==null?(A=pn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=N0(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=hd(t,_,a),n.memoizedState=fd,Jo(t.child,r)):(tr(n),a=t.child,t=a.sibling,a=va(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function pd(t,n){return n=Cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cu(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function wu(t,n,a){return Hr(n,t.child,null,a),t=pd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function hy(t,n,a,r,l,c,_,A){if(a)return n.flags&256?(tr(n),n.flags&=-257,wu(t,n,A)):n.memoizedState!==null?(er(),n.child=t.child,n.flags|=128,null):(er(),c=l.fallback,_=n.mode,l=Cu({mode:"visible",children:l.children},_),c=Nr(c,_,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Hr(n,t.child,null,A),l=n.child,l.memoizedState=dd(A),l.childLanes=hd(t,r,A),n.memoizedState=fd,Jo(null,l));if(tr(n),dh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Fo({value:l,source:null,stack:null})),wu(t,n,A)}if(gn||Or(t,n,A,!1),r=(A&t.childLanes)!==0,gn||r){if($a.current!==null)return wu(t,n,A);if(r=Qe,r!==null&&(l=Ao(r,A),l!==0&&l!==_.retryLane))throw _.retryLane=l,Dr(t,l),Jn(r,t,l),ud;return fh(c)||Yu(),wu(t,n,A)}return fh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,je=Ei(c.nextSibling),En=n,Se=!0,qa=null,Mi=!1,t!==null&&b0(n,t),n=pd(n,l.children),n.flags|=134221824,n)}function kg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),ou(t.return,n,a)}function Wg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&gu(a)===null&&(n=t),t=t.sibling}return n}function Du(t,n,a,r,l,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=l,_.treeForkCount=c)}function md(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function gd(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var _=wn.current;if(n.flags&128)return Yo(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,Yo(n,_),l==="backwards"&&t!==null?(md(t),xn(t,n,r,a),md(t)):xn(t,n,r,a),r=Se?Bo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,a,n);else if(t.tag===19)kg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=Wg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,md(n)),Du(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&gu(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Du(n,!0,a,null,c,r);break;case"together":Du(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Wg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),Du(n,!1,l,a,c,r)}return n.child}function qg(t,n,a){var r=n.pendingProps;return Za(n,n.type,r.value),xn(t,n,r.children,a),n.child}function Ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),rr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=va(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=va(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function _d(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&lu(t)))}function py(t,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),Za(n,pn,t.memoizedState.cache),Ur();break;case 27:case 5:Pe(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return tr(n),n.flags|=128,null;r=Or(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?Xg(t,n,a):(tr(n),t=Ta(t,n,a),t!==null?t.sibling:null)}tr(n);break;case 19:if(n.flags&128)return gd(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Or(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return gd(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Yo(n,wn.current),r)break;return null;case 22:return n.lanes=0,zg(t,n,a,n.pendingProps);case 24:Za(n,pn,t.memoizedState.cache)}return Ta(t,n,a)}function Yg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!_d(t,a)&&(n.flags&128)===0)return gn=!1,py(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,Se&&(n.flags&1048576)!==0&&T0(n,Bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Br(n.elementType),n.type=t,typeof t=="function")Tf(t)?(r=Vr(t,r),n.tag=1,n=Gg(null,n,t,r,a)):(n.tag=0,n=cd(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===q){n.tag=11,n=Og(null,n,t,r,a);break t}else if(l===at){n.tag=14,n=Pg(null,n,t,r,a);break t}else if(l===tt){n.tag=10,n.type=t,n=qg(null,n,a);break t}}throw n=Tt(t)||t,Error(s(306,n,""))}}return n;case 0:return cd(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Vr(r,n.pendingProps),Gg(t,n,r,l,a);case 3:t:{if(W(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,zf(t,n),qo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Za(n,pn,r),r!==c.cache&&Nf(n,[pn],a,!0),Wo(),r=_.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Vg(t,n,r,a);break t}else if(r!==l){l=vi(Error(s(424)),n),Fo(l),n=Vg(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=Ei(t.firstChild),En=n,Se=!0,qa=null,Mi=!0,a=z0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Ur(),r===l){n=Ta(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return As(t,n),t===null?(a=vv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=J_(n.type,n.pendingProps,Ie.current,n)):n.memoizedState=vv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pe(n),t===null&&Se&&(r=n.stateNode=pv(n.type,n.pendingProps,Ie.current),En=n,Mi=!0,l=je,ur(n.type)?(hh=l,je=Ei(r.firstChild)):je=l),xn(t,n,n.pendingProps.children,a),As(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((l=r=je)&&(r=lE(r,n.type,n.pendingProps,Mi),r!==null?(n.stateNode=r,En=n,je=Ei(r.firstChild),Mi=!1,l=!0):l=!1),l||Ya(n)),Pe(n),l=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,r=c.children,ah(l,c)?r=null:_!==null&&ah(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=Wf(t,n,iy,null,null,a),ks._currentValue=l),As(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=je)&&(a=uE(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,En=n,je=null,t=!0):t=!1),t||Ya(n)),null;case 13:return Xg(t,n,a);case 4:return W(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Hr(n,null,r,a):xn(t,n,r,a),n.child;case 11:return Og(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,As(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return qg(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Pr(n),l=Rn(l),r=r(l),n.flags|=1,xn(t,n,r,a),n.child;case 14:return Pg(t,n,n.type,n.pendingProps,a);case 15:return Ig(t,n,n.type,n.pendingProps,a);case 19:return gd(t,n,a);case 31:return dy(t,n,a);case 22:return zg(t,n,a,n.pendingProps);case 24:return Pr(n),r=Rn(pn),t===null?(l=Of(),l===null&&(l=Qe,c=Uf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},If(n),Za(n,pn,l)):((t.lanes&a)!==0&&(zf(t,n),qo(n,null,null,a),Wo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Za(n,pn,r)):(r=c.cache,Za(n,pn,r),r!==l.cache&&Nf(n,[pn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&ru(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:As(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ba(t){t.flags|=4}function vd(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?yv(n,r):yv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(C_())t.flags|=8192;else throw Fr=du,Pf}else t.flags&=-16777217}function Zg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ev(n))if(C_())t.flags|=8192;else throw Fr=du,Pf}function Nu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?To():536870912,t.lanes|=n,Ns|=n)}function jo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function my(t,n,a){var r=n.pendingProps;switch(Rf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ma(pn),an(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ss(n)?ba(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wf())),$e(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ba(n),c!==null?($e(n),Zg(n,c)):($e(n),vd(n,l,null,r,a))):c?c!==t.memoizedState?(ba(n),$e(n),Zg(n,c)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ba(n),$e(n),vd(n,l,t,r,a)),null;case 27:if(O(n),a=Ie.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}t=Xe.current,Ss(n)?A0(n):(t=pv(l,r,a),n.stateNode=t,ba(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(c=Xe.current,Ss(n))A0(n);else{var _=ul(Ie.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?_.createElement(l,{is:r.is}):_.createElement(l)}}c[b]=n,c[F]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Nn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ba(n)}}return $e(n),n.subtreeFlags&=-33554433,vd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ba(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ie.current,Ss(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=En,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Y_(t.nodeValue,a)),t||Ya(n,!0)}else t=ul(t).createTextNode(r),t[b]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ss(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Ss(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[b]=n}else Ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),l=!1}else l=wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nu(n,n.updateQueue),$e(n),null);case 4:return an(),t===null&&$d(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return Ma(n.type),$e(n),null;case 19:if(Xf(n),r=n.memoizedState,r===null)return $e(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)jo(r,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=gu(t),c!==null){for(n.flags|=128,jo(r,!1),t=c.updateQueue,n.updateQueue=t,Nu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)M0(a,t),a=a.sibling;return Yo(n,wn.current&1|2),Se&&Sa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Vt()>Xu&&(n.flags|=128,l=!0,jo(r,!1),n.lanes=4194304)}else{if(!l)if(t=gu(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,Nu(n,t),jo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return $e(n),null}else 2*Vt()-r.renderingStartTime>Xu&&a!==536870912&&(n.flags|=128,l=!0,jo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Vt(),t.sibling=null,c=wn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Yo(n,c):(a=c,ie(Cn,n),ie(wn,a),In===null&&(In=n)),Se&&Sa(n,r.treeForkCount),t}return $e(n),null;case 22:case 23:return ai(n),Gf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Nu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&ee(zr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ma(pn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function gy(t,n){switch(Rf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ma(pn),an(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Xf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return an(),null;case 10:return Ma(n.type),null;case 22:case 23:return ai(n),Gf(),t!==null&&ee(zr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ma(pn),null;case 25:return null;default:return null}}function Kg(t,n){switch(Rf(n),n.tag){case 3:Ma(pn),an();break;case 26:case 27:case 5:O(n);break;case 4:an();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Xf(n);break;case 10:Ma(n.type);break;case 22:case 23:ai(n),Gf(),t!==null&&ee(zr);break;case 24:Ma(pn)}}function $o(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,_=a.inst;r=c(),_.destroy=r}a=a.next}while(a!==l)}}catch(A){We(n,n.return,A)}}function nr(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,l=n;var I=a,j=A;try{j()}catch(ct){We(l,I,ct)}}}r=r.next}while(r!==c)}}catch(ct){We(n,n.return,ct)}}function Qg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{F0(n,a)}catch(r){We(t,t.return,r)}}}function Jg(t,n,a){a.props=Vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){We(t,n,r)}}function Yi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ga(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=av(c)),r=l.ref;break;case 7:if(t.stateNode===null){var _=new ui(t);g(t.child,!1,sE,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){We(t,n,A)}}function Dn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){We(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){We(t,n,l)}else a.current=null}function Uu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)cv(t.stateNode,n[a])}function jg(t){for(var n=t.return;n!==null&&(xd(n)&&cv(t.stateNode,n.stateNode),!Sd(n));)n=n.return}function tl(t){for(var n=t.return;n!==null&&(xd(n)&&oE(t.stateNode,n.stateNode),!Sd(n));)n=n.return}function Sd(t){return t.tag===5||t.tag===3||t.tag===27}function xd(t){return t&&t.tag===7&&t.stateNode!==null}function Md(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){We(t,t.return,l)}}function yd(t,n,a){try{var r=t.stateNode;Vy(r,t.type,a,n),r[F]=n}catch(l){We(t,t.return,l)}}function $g(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ur(t.type)||t.tag===4}function Ed(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki)),Uu(t,r),ve=!0;else if(l!==4&&(l===27&&(Uu(t,r),r=null,ur(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Td(t,n,a,r),t=t.sibling;t!==null;)Td(t,n,a,r),t=t.sibling}function Lu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Uu(t,r),ve=!0;else if(l!==4&&(l===27&&(Uu(t,r),r=null,ur(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Lu(t,n,a,r),t=t.sibling;t!==null;)Lu(t,n,a,r),t=t.sibling}function t_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Nn(n,r,a),n[b]=t,n[F]=a}catch(c){We(t,t.return,c)}}var Ou=!1,ri=null;function e_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ou=!0)}var Zi=null;function n_(){var t=Zi;return Zi=null,t}var Zn=0;function Rs(t,n,a,r,l){return Zn=0,i_(t.child,n,a,r,l)}function i_(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var A=oh(_);r.push(A),A.view&&(c=!0)}else c||oh(_).view&&(c=!0);Ou=!0,nv(_,Zn===0?n:n+"_"+Zn,a),Zn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||i_(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Ki(t,n){for(;t!==null;)t.tag===5?iv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Ki(t.child,n)),t=t.sibling}function Pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=_a(n.default,n.share),n!=="none"&&(Rs(t,a,n,null,!1)||Ki(t.child,!1))}t=t.sibling}}function bd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=ga(r,a),c=_a(r.default,a.paired?r.share:r.enter);c!=="none"?Rs(t,l,c,null,!1)?(Pu(t),a.paired||n||Ps(t,r.onEnter)):Ki(t.child,!1):Pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bd(t,n),t=t.sibling;else Pu(t)}function Ad(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=_a(a.default,a.share);if(c!=="none"&&(Rs(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Ps(t,a.onShare)):Ki(t.child,!1)),n.delete(r),n.size===0)break}}}Ad(t)}t=t.sibling}}}function Rd(t){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode),r=ri!==null?ri.get(a):void 0,l=_a(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Rs(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ri.delete(a),Ps(t,n.onShare)):Ps(t,n.onExit):Ki(t.child,!1)),ri!==null&&Ad(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rd(t),t=t.sibling;else ri!==null&&Ad(t)}function a_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ga(n,t.stateNode);n=_a(n.default,n.update),t.flags&=-5,n!=="none"&&Rs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&a_(t);t=t.sibling}}function Cd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Ki(t.child,!1))}Cd(t)}t=t.sibling}}function Iu(t){if(t.tag===30)t.stateNode.paired=null,Ki(t.child,!1),Cd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Iu(t),t=t.sibling;else Cd(t)}function r_(t){for(t=t.child;t!==null;)t.tag===30?Ki(t.child,!1):(t.subtreeFlags&33554432)!==0&&r_(t),t=t.sibling}function wd(t,n,a,r,l,c,_){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&Zn<c.length){var j=c[Zn],ct=oh(I);(j.view||ct.view)&&(A=!0);var St;if(St=(t.flags&4)===0)if(ct.clip)St=!0;else{St=j.rect;var Z=ct.rect;St=St.y!==Z.y||St.x!==Z.x||St.height!==Z.height||St.width!==Z.width}St&&(t.flags|=4),ct.abs?ct=!j.abs:(j=j.rect,ct=ct.rect,ct=j.height!==ct.height||j.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&nv(I,Zn===0?a:a+"_"+Zn,l),A&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(I,Zn===0?r:r+"_"+Zn,n.memoizedProps)),Zn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:wd(t,n.child,a,r,l,c,_)&&(A=!0));n=n.sibling}return A}function s_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=ga(a,r),c=_a(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;Zn=0,l=wd(r,A,l,l,c,_,!1),(t.flags&4)!==0&&l&&Ps(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&s_(t);t=t.sibling}}var Tn=!1,Ge=!1,Qi=!1,Dd=!1,o_=typeof WeakSet=="function"?WeakSet:Set,bn=null,Ji=!1,el=!1,zu=!1,Nd=!1;function _y(t,n,a){if(t=t.containerInfo,nh=Ws,t=f0(t),_f(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var A=0,I=-1,j=-1,ct=0,St=0,Z=t,ot=null;e:for(;;){for(var Lt;Z!==r||c!==0&&Z.nodeType!==3||(I=A+c),Z!==_||l!==0&&Z.nodeType!==3||(j=A+l),Z.nodeType===3&&(A+=Z.nodeValue.length),(Lt=Z.firstChild)!==null;)ot=Z,Z=Lt;for(;;){if(Z===t)break e;if(ot===r&&++ct===c&&(I=A),ot===_&&++St===l&&(j=A),(Lt=Z.nextSibling)!==null)break;Z=ot,ot=Z.parentNode}Z=Lt}r=I===-1||j===-1?null:{start:I,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(ih={focusedElem:t,selectionRange:r},Ws=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&Rd(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&e_(t),Bu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Rd(r),Bu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&e_(t),Bu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&a_(t),Bu(a))}}ri=null}function Bu(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var _=Vr(n.type,l);a=c.getSnapshotBeforeUpdate(_,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){We(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ch(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ch(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ga(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=_a(l.default,l.update),l!=="none"&&Rs(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function l_(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),r&4&&$o(5,a);break;case 1:if(ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){We(a,a.return,_)}else{var l=Vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){We(a,a.return,_)}}r&64&&Qg(a),r&512&&Yi(a,a.return);break;case 3:if(ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{F0(t,n)}catch(_){We(a,a.return,_)}}break;case 27:n===null&&r&4&&t_(a);case 26:case 5:ji(t,a),n===null&&r&4&&Md(a),r&512&&Yi(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),r&4&&d_(t,a);break;case 13:ji(t,a),r&4&&h_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wy.bind(null,a),cE(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var c=n!==null&&n.memoizedState!==null||Ge;n=Tn,l=Ge,Tn=r,(Ge=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Di(t,a,r)):ji(t,a),Tn=n,Ge=l}break;case 30:ji(t,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:ji(t,a)}}function Ud(t,n){for(t=t.child;t!==null;)u_(t,n),t=t.sibling}function u_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(I){We(t,t.return,I)}Ld(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ve=!0}catch(I){We(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?ev(A,!0):ev(t.stateNode,!1)}catch(I){We(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Ud(t,n);break;default:Ud(t,n)}}function Ld(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:u_(a,r);break t;case 22:a.memoizedState===null&&Ld(a,r);break t;default:Ld(a,r)}}t=t.sibling}}function c_(t){var n=t.alternate;n!==null&&(t.alternate=null,c_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Kn=!1;function Ci(t,n,a){for(a=a.child;a!==null;)f_(t,n,a),a=a.sibling}function f_(t,n,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:Ge||Dn(a,n),Ci(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Dn(a,n),tl(a);var r=en,l=Kn;ur(a.type)&&(en=a.stateNode,Kn=!1),Ci(t,n,a),mv(a.stateNode,a.type,a.memoizedProps),en=r,Kn=l;break;case 5:Ge||Dn(a,n),tl(a);case 6:if(a.tag===6&&tl(a),r=en,l=Kn,en=null,Ci(t,n,a),en=r,Kn=l,en!==null)if(Kn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ve=!0}catch(c){We(a,n,c)}else try{en.removeChild(a.stateNode),ve=!0}catch(c){We(a,n,c)}break;case 18:en!==null&&(Kn?(t=en,tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),qs(t)):tv(en,a.stateNode));break;case 4:r=en,l=Kn,en=a.stateNode.containerInfo,Kn=!0,Ci(t,n,a),en=r,Kn=l;break;case 0:case 11:case 14:case 15:nr(2,a,n),Ge||nr(4,a,n),Ci(t,n,a);break;case 1:Ge||(Dn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Jg(a,n,r)),Ci(t,n,a);break;case 21:Ci(t,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Ci(t,n,a),Ge=r;break;case 30:Dn(a,n),Ci(t,n,a);break;case 7:Ge||Dn(a,n),Ci(t,n,a);break;default:Ci(t,n,a)}}function d_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qs(t)}catch(a){We(n,n.return,a)}}}function h_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qs(t)}catch(a){We(n,n.return,a)}}function vy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new o_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new o_),n;default:throw Error(s(435,t.tag))}}function Fu(t,n){var a=vy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=Dy.bind(null,t,r);r.then(l,l)}})}function kn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],_=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(ur(I.type)){en=I.stateNode,Kn=!1;break t}break;case 5:en=I.stateNode,Kn=!1;break t;case 3:case 4:en=I.stateNode.containerInfo,Kn=!0;break t}I=I.return}if(en===null)throw Error(s(160));f_(_,A,c),en=null,Kn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)p_(n,t,a),n=n.sibling}var wi=null;function p_(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var _=r[c];_.ref.impl=_.nextImpl}kn(n,t,a),Wn(t),l&4&&(nr(3,t,t.return),$o(3,t),nr(5,t,t.return));break;case 1:kn(n,t,a),Wn(t),l&512&&(Ge||r===null||Dn(r,r.return)),l&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=wi,kn(n,t,a),Wn(t),l&512&&(Ge||r===null||Dn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=J_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ut]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Nn(r,n,a),r[b]=t,_e(r),n=r;break t;case"link":if(c=Mv("link","href",l).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=Mv("meta","content",l).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}r=l.createElement(n),Nn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,_e(r),n=r}t.stateNode=n}else Tn||_h(c,t.type,t.stateNode);else t.stateNode=xv(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):l.count--,a===null?Tn||_h(c,t.type,t.stateNode):xv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&yd(t,t.memoizedProps,r.memoizedProps);break;case 27:kn(n,t,a),Wn(t),l&512&&(Ge||r===null||Dn(r,r.return)),r!==null&&l&4&&yd(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Qi,Qi=!1,kn(n,t,a),Qi=c,Wn(t),l&512&&(Ge||r===null||Dn(r,r.return)),t.flags&32){n=t.stateNode;try{us(n,""),ve=!0}catch(ct){We(t,t.return,ct)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,yd(t,n,r!==null?r.memoizedProps:n)),l&1024&&(Dd=!0);break;case 6:if(kn(n,t,a),Wn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ve=!0}catch(ct){We(t,t.return,ct)}}break;case 3:if(ve=!1,tc=null,c=wi,wi=cl(n.containerInfo),kn(n,t,a),wi=c,Wn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{qs(n.containerInfo)}catch(ct){We(t,t.return,ct)}Dd&&(Dd=!1,m_(t)),ve=!1;break;case 4:l=Qi,Qi=Tn,r=Be(),c=wi,wi=cl(t.stateNode.containerInfo),kn(n,t,a),Wn(t),wi=c,ve&&el&&(zu=!0),ve=r,Qi=l;break;case 12:kn(n,t,a),Wn(t);break;case 31:kn(n,t,a),Wn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 13:kn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Vu=Vt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 22:c=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var A=Tn,I=Ge,j=Qi;Tn=A||c,Qi=j||c,Ge=I||_,kn(n,t,a),Ge=I,Qi=j,Tn=A,Wn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||_||Tn||Ge||(n=_||Ge,a=Tn,r=Ge,Tn=c||Tn,Ge=n,ir(t,2),Tn=a,Ge=r),!c&&Qi||Ud(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Fu(t,a))));break;case 19:kn(n,t,a),Wn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Fu(t,n)));break;case 30:l&512&&(Ge||r===null||Dn(r,r.return)),l=Be(),c=el,_=(a&335544064)===a,A=t.memoizedProps,el=_&&_a(A.default,A.update)!=="none",kn(n,t,a),Wn(t),_&&r!==null&&ve&&(t.flags|=4),el=c,ve=l;break;case 21:break;case 7:l&512&&(Ge||r===null||Dn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:kn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if($g(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(xd(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Sd(l))break;l=l.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,I=Ed(t);Lu(t,I,A,_);break;case 5:var j=a.stateNode;a.flags&32&&(us(j,""),a.flags&=-33);var ct=Ed(t);Lu(t,ct,j,_);break;case 3:case 4:var St=a.stateNode.containerInfo,Z=Ed(t);Td(t,Z,St,_);break;default:throw Error(s(161))}}catch(ot){We(t,t.return,ot)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function m_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;m_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ws=!0,n.reset(),Ws=!1),t=t.sibling}}function Cs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)g_(n,t),n=n.sibling;else s_(n)}function g_(t,n){var a=t.alternate;if(a===null)bd(t,!1);else switch(t.tag){case 3:if(Nd=Ji=!1,n_(),Cs(n,t),!Ji&&!zu){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];iv(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Nd=!0}Zi=null;break;case 5:Cs(n,t);break;case 4:r=Ji,Ji=!1,Cs(n,t),Ji&&(zu=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?bd(t,!1):Cs(n,t));break;case 30:r=Ji,l=n_(),Ji=!1,Cs(n,t),Ji&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=ga(c,_),_=ga(a.memoizedProps,_);var A=_a(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Zn=0,n=wd(t,a,n,_,A,c,!0),Zn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ps(t,t.memoizedProps.onUpdate),Zi=l):l!==null&&(l.push.apply(l,Zi),Zi=l),Ji=(t.flags&32)!==0?!0:r;break;default:Cs(n,t)}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l_(t,n.alternate,n),n=n.sibling}function ir(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:nr(4,a,a.return),ir(a,r);break;case 1:Dn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Jg(a,a.return,l),ir(a,r);break;case 27:(r&2)!==0&&mv(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||tl(a),ir(a,r);break;case 6:tl(a);break;case 26:Dn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Ge||l.parentNode.removeChild(l),ir(a,r);break;case 22:a.memoizedState===null&&ir(a,r);break;case 30:Dn(a,a.return),ir(a,r);break;case 7:Dn(a,a.return);default:ir(a,r)}t=t.sibling}}function Di(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,_=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Di(l,c,a),$o(4,c);break;case 1:if(Di(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ct){We(r,r.return,ct)}if(r=c,l=r.updateQueue,l!==null){var I=r.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)B0(j[l],I)}catch(ct){We(r,r.return,ct)}}A&&_&64&&Qg(c),Yi(c,c.return);break;case 27:(a&2)!==0&&t_(c);case 5:c.tag!==5&&c.tag!==27||jg(c),Di(l,c,a),A&&r===null&&_&4&&Md(c),Yi(c,c.return);break;case 6:jg(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||Tn||_h(cl(I.ownerDocument),c.type,I),Di(l,c,a),A&&r===null&&_&4&&Md(c),Yi(c,c.return);break;case 12:Di(l,c,a);break;case 31:Di(l,c,a),A&&_&4&&d_(l,c);break;case 13:Di(l,c,a),A&&_&4&&h_(l,c);break;case 22:c.memoizedState===null&&Di(l,c,a),Yi(c,c.return);break;case 30:Di(l,c,a),Yi(c,c.return);break;case 7:Yi(c,c.return);default:Di(l,c,a)}n=n.sibling}}function Od(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ho(a))}function Pd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ho(t))}function yi(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)__(t,n,a,r),n=n.sibling;else l&&r_(n)}function __(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Iu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,r),c&2048&&$o(9,n);break;case 1:yi(t,n,a,r);break;case 3:yi(t,n,a,r),l&&Nd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ho(c)));break;case 12:if(c&2048){yi(t,n,a,r),c=n.stateNode;try{var _=n.memoizedProps,A=_.id,I=_.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){We(n,n.return,j)}}else yi(t,n,a,r);break;case 31:yi(t,n,a,r);break;case 13:yi(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&Iu(A),_._visibility&2?yi(t,n,a,r):nl(t,n)):(l&&A!==null&&A.memoizedState!==null&&Iu(n),_._visibility&2?yi(t,n,a,r):(_._visibility|=2,ws(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Od(A,n);break;case 24:yi(t,n,a,r),c&2048&&Pd(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Ki(c.child,!0),Ki(n.child,!0))),yi(t,n,a,r);break;default:yi(t,n,a,r)}}function ws(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,A=a,I=r,j=_.flags;switch(_.tag){case 0:case 11:case 15:ws(c,_,A,I,l),$o(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?ws(c,_,A,I,l):nl(c,_):(ct._visibility|=2,ws(c,_,A,I,l)),l&&j&2048&&Od(_.alternate,_);break;case 24:ws(c,_,A,I,l),l&&j&2048&&Pd(_.alternate,_);break;default:ws(c,_,A,I,l)}n=n.sibling}}function nl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:nl(a,r),l&2048&&Od(r.alternate,r);break;case 24:nl(a,r),l&2048&&Pd(r.alternate,r);break;default:nl(a,r)}n=n.sibling}}var Xr=8192;function kr(t,n,a){if(t.subtreeFlags&Xr)for(t=t.child;t!==null;)v_(t,n,a),t=t.sibling}function v_(t,n,a){switch(t.tag){case 26:kr(t,n,a),t.flags&Xr&&(t.memoizedState!==null?TE(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&bv(a,t)));break;case 5:kr(t,n,a),t.flags&Xr&&(t=t.stateNode,(n&335544128)===n&&bv(a,t));break;case 3:case 4:var r=wi;wi=cl(t.stateNode.containerInfo),kr(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Xr,Xr=16777216,kr(t,n,a),Xr=r):kr(t,n,a));break;case 30:if((t.flags&Xr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(r,l)}kr(t,n,a);break;default:kr(t,n,a)}}function S_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function il(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,M_(r,t)}S_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x_(t),t=t.sibling}function x_(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&nr(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hu(t)):il(t);break;default:il(t)}}function Hu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,M_(r,t)}S_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:nr(8,n,n.return),Hu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hu(n));break;default:Hu(n)}t=t.sibling}}function M_(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:nr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var l=r.sibling,c=r.return;if(c_(r),r===a){bn=null;break t}if(l!==null){l.return=c,bn=l;break t}bn=c}}}var Sy={getCacheForType:function(t){var n=Rn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(pn).controller.signal}},xy=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,ye=null,Ae=0,ke=0,si=null,ar=!1,Ds=!1,Id=!1,Aa=0,cn=0,rr=0,Wr=0,Gu=0,oi=0,Ns=0,al=null,Qn=null,zd=!1,Vu=0,y_=0,Xu=1/0,ku=null,sr=null,rn=0,Ni=null,qr=null,$i=0,Bd=0,Fd=null,E_=null,Us=null,Ls=null,Os=null,rl=0,Wu=null;function li(){return(Fe&2)!==0&&Ae!==0?Ae&-Ae:_t.T!==null?Kd():Xl()}function T_(){if(oi===0)if((Ae&536870912)===0||Se){var t=br;br<<=1,(br&3932160)===0&&(br=262144),oi=t}else oi=536870912;return t=Cn.current,t!==null&&(t.flags|=32),oi}function Ps(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=av(ga(t.memoizedProps,a))),Ls===null&&(Ls=[]),Ls.push(n.bind(null,r))}}function Jn(t,n,a){(t===Qe&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(Is(t,0),or(t,Ae,oi,!1)),Vi(t,a),((Fe&2)===0||t!==Qe)&&(t===Qe&&((Fe&2)===0&&(Wr|=a),cn===4&&or(t,Ae,oi,!1)),ta(t))}function b_(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Va(t,n),l=r?Ey(t,n):Gd(t,n,!0),c=r;do{if(l===0){Ds&&!r&&or(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!My(a)){l=Gd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;l=al;var I=A.current.memoizedState.isDehydrated;if(I&&(Is(A,_).flags|=256),_=Gd(A,_,!1),_!==2&&_!==6){if(Id&&!I){A.errorRecoveryDisabledLanes|=c,Wr|=c,l=4;break t}c=Qn,Qn=l,c!==null&&(Qn===null?Qn=c:Qn.push.apply(Qn,c))}l=_}if(c=!1,l!==2)continue}}if(l===1){Is(t,0),or(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:or(r,n,oi,!ar);break t;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Vu+300-Vt(),10<l)){if(or(r,n,oi,!ar),Ar(r,0,!0)!==0)break t;$i=n,r.timeoutHandle=sh(A_.bind(null,r,a,Qn,ku,zd,n,oi,Wr,Ns,ar,c,"Throttled",-0,0),l);break t}A_(r,a,Qn,ku,zd,n,oi,Wr,Ns,ar,c,null,-0,0)}}break}while(!0);ta(t)}function A_(t,n,a,r,l,c,_,A,I,j,ct,St,Z,ot){t.timeoutHandle=-1;var Lt=n.subtreeFlags,Kt=(c&335544064)===c;if(St=null,(Kt||Lt&8192||(Lt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},ri=null,v_(n,c,St),Kt&&(Lt=St,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=hl.bind(Lt),Kt.finished.then(Lt,Lt))),Lt=(c&62914560)===c?Vu-Vt():(c&4194048)===c?y_-Vt():0,Lt=bE(St,Lt),Lt!==null)){$i=c,t.cancelPendingCommit=Lt(O_.bind(null,t,n,c,a,r,l,_,A,I,j,ct,St,null,Z,ot)),or(t,c,_,!j);return}O_(t,n,c,a,r,l,_,A,I,j,ct,St)}function My(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ii(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function or(t,n,a,r){n=Gi(t,n),n&=~Gu,n&=~Wr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-ue(l),_=1<<c;r[c]=-1,l&=~_}a!==0&&Rr(t,a,n)}function qu(){return(Fe&6)===0?(sl(0),!1):!0}function Hd(){if(ye!==null){if(ke===0)var t=ye.return;else t=ye,xa=Lr=null,Zf(t),ys=null,Xo=0,t=ye;for(;t!==null;)Kg(t.alternate,t),t=t.return;ye=null}}function Is(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Wy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Hd(),Qe=t,ye=a=va(t.current,null),Ae=n,ke=0,si=null,ar=!1,Ds=Va(t,n),Id=!1,Ns=oi=Gu=Wr=rr=cn=0,Qn=al=null,zd=!1,Aa=Gi(t,n),tu(),a}function R_(t,n){de=null,_t.H=bu,n===Ms||n===fu?(n=O0(),ke=3):n===Pf?(n=O0(),ke=4):ke=n===ud?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ye===null&&(cn=1,Au(t,vi(n,t.current)))}function C_(){var t=Cn.current;return t===null?!0:(Ae&4194048)===Ae?In===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===In:!1}function w_(){var t=_t.H;return _t.H=bu,t===null?bu:t}function D_(){var t=_t.A;return _t.A=Sy,t}function Yu(){cn=4,ar||(Ae&4194048)!==Ae&&Cn.current!==null||(Ds=!0),(rr&134217727)===0&&(Wr&134217727)===0||Qe===null||or(Qe,Ae,oi,!1)}function Gd(t,n,a){var r=Fe;Fe|=2;var l=w_(),c=D_();(Qe!==t||Ae!==n)&&(ku=null,Is(t,n)),n=!1;var _=cn;t:do try{if(ke!==0&&ye!==null){var A=ye,I=si;switch(ke){case 8:Hd(),_=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var j=ke;if(ke=0,si=null,zs(t,A,I,j),a&&Ds){_=0;break t}break;default:j=ke,ke=0,si=null,zs(t,A,I,j)}}yy(),_=cn;break}catch(ct){R_(t,ct)}while(!0);return n&&t.shellSuspendCounter++,xa=Lr=null,Fe=r,_t.H=l,_t.A=c,ye===null&&(Qe=null,Ae=0,tu()),_}function yy(){for(;ye!==null;)N_(ye)}function Ey(t,n){var a=Fe;Fe|=2;var r=w_(),l=D_();Qe!==t||Ae!==n?(ku=null,Xu=Vt()+500,Is(t,n)):Ds=Va(t,n);t:do try{if(ke!==0&&ye!==null){n=ye;var c=si;e:switch(ke){case 1:ke=0,si=null,zs(t,n,c,1);break;case 2:case 9:if(U0(c)){ke=0,si=null,U_(n);break}n=function(){ke!==2&&ke!==9||Qe!==t||(ke=7),ta(t)},c.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:U0(c)?(ke=0,si=null,U_(n)):(ke=0,si=null,zs(t,n,c,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var A=ye;if(_?Ev(_):A.stateNode.complete){ke=0,si=null;var I=A.sibling;if(I!==null)ye=I;else{var j=A.return;j!==null?(ye=j,Zu(j)):ye=null}break e}}ke=0,si=null,zs(t,n,c,5);break;case 6:ke=0,si=null,zs(t,n,c,6);break;case 8:Hd(),cn=6;break t;default:throw Error(s(462))}}Ty();break}catch(ct){R_(t,ct)}while(!0);return xa=Lr=null,_t.H=r,_t.A=l,Fe=a,ye!==null?0:(Qe=null,Ae=0,tu(),cn)}function Ty(){for(;ye!==null&&!Pt();)N_(ye)}function N_(t){var n=Yg(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?Zu(t):ye=n}function U_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Hg(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=Hg(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Zf(n);var r=n;r===En&&(Se?(su(r),r.tag===5&&r.stateNode!=null&&(je=r.stateNode)):(su(r),Se=!0));default:Kg(a,n),n=ye=M0(n,Aa),n=Yg(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?Zu(t):ye=n}function zs(t,n,a,r){xa=Lr=null,Zf(n),ys=null,Xo=0;var l=n.return;try{if(fy(t,l,n,a,Ae)){cn=1,Au(t,vi(a,t.current)),ye=null;return}}catch(c){if(l!==null)throw ye=l,c;cn=1,Au(t,vi(a,t.current)),ye=null;return}n.flags&32768?(Se||r===1?t=!0:Ds||(Ae&536870912)!==0?t=!1:(ar=t=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),L_(n,t)):Zu(n)}function Zu(t){var n=t;do{if((n.flags&32768)!==0){L_(n,ar);return}t=n.return;var a=my(n.alternate,n,Aa);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);cn===0&&(cn=5)}function L_(t,n){do{var a=gy(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);cn=6,ye=null}function O_(t,n,a,r,l,c,_,A,I,j,ct,St){t.cancelPendingCommit=null;do Ku();while(rn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Qe&&(ye=Qe=null,Ae=0),qr=n,Ni=t,$i=a,Fd=l,E_=r,by(t,n,a,_,A,I,St)}}function by(t,n,a,r,l,c,_){var A=n.lanes|n.childLanes;if(Bd=A,A|=yf,Vl(t,a,A,r,l,c),Ls=null,(a&335544064)===a?(Os=$M(t),r=10262):(Os=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Ny(Ct,function(){return Wd(),null})):(t.callbackNode=null,t.callbackPriority=0),Ou=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,l=Rt.p,Rt.p=2,c=Fe,Fe|=4;try{_y(t,n,a)}finally{Fe=c,Rt.p=l,_t.T=r}}rn=1,Ou?Us=Jy(_,t.containerInfo,Os,Vd,Xd,Ry,kd,Wd,Ay):(Vd(),Xd(),kd())}function Ay(t){if(rn!==0){var n=Ni.onRecoverableError;n(t,{componentStack:null})}}function Ry(){rn===3&&(rn=0,g_(qr,Ni),rn=4)}function Vd(){if(rn===1){rn=0;var t=Ni,n=qr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var l=Rt.p;Rt.p=2;var c=Fe;Fe|=4;try{el=zu=!1,p_(n,t,a),a=ih;var _=f0(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&c0(A.ownerDocument.documentElement,A)){if(I!==null&&_f(A)){var j=I.start,ct=I.end;if(ct===void 0&&(ct=j),"selectionStart"in A)A.selectionStart=j,A.selectionEnd=Math.min(ct,A.value.length);else{var St=A.ownerDocument||document,Z=St&&St.defaultView||window;if(Z.getSelection){var ot=Z.getSelection(),Lt=A.textContent.length,Kt=Math.min(I.start,Lt),he=I.end===void 0?Kt:Math.min(I.end,Lt);!ot.extend&&Kt>he&&(_=he,he=Kt,Kt=_);var J=u0(A,Kt),H=u0(A,he);if(J&&H&&(ot.rangeCount!==1||ot.anchorNode!==J.node||ot.anchorOffset!==J.offset||ot.focusNode!==H.node||ot.focusOffset!==H.offset)){var it=St.createRange();it.setStart(J.node,J.offset),ot.removeAllRanges(),Kt>he?(ot.addRange(it),ot.extend(H.node,H.offset)):(it.setEnd(H.node,H.offset),ot.addRange(it))}}}}for(St=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&St.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Ws=!!nh,ih=nh=null}finally{Fe=c,Rt.p=l,_t.T=r}}t.current=n,rn=2}}function Xd(){if(rn===2){rn=0;var t=Ni,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=Rt.p;Rt.p=2;var l=Fe;Fe|=4;try{l_(t,n.alternate,n)}finally{Fe=l,Rt.p=r,_t.T=a}}rn=3}}function kd(){if(rn===4||rn===3){rn=0;var t=Us;Us=null,Ot();var n=Ni,a=qr,r=$i,l=E_,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?rn=5:(rn=0,qr=Ni=null,P_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(sr=null),Co(r),a=a.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=_t.T,c=Rt.p,Rt.p=2,_t.T=null;try{for(var _=n.onRecoverableError,A=0;A<l.length;A++){var I=l[A];_(I.value,{componentStack:I.stack})}}finally{_t.T=a,Rt.p=c}}if(l=Ls,_=Os,Os=null,l!==null&&(Ls=null,_===null&&(_=[]),t!==null))for(I=0;I<l.length;I++)a=(0,l[I])(_),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Ku(),ta(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Wu?rl++:(rl=0,Wu=n):(rl=0,Wu=null),sl(0)}}function P_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ho(n)))}function Ku(){return Us!==null&&(Us.skipTransition(),Us=null),Vd(),Xd(),kd(),Wd()}function Wd(){if(rn!==5)return!1;var t=Ni,n=Bd;Bd=0;var a=Co($i),r=_t.T,l=Rt.p;try{Rt.p=32>a?32:a,_t.T=null,a=Fd,Fd=null;var c=Ni,_=$i;if(rn=0,qr=Ni=null,$i=0,(Fe&6)!==0)throw Error(s(331));var A=Fe;if(Fe|=4,x_(c.current),__(c,c.current,_,a),Fe=A,sl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Jt,c)}catch{}return!0}finally{Rt.p=l,_t.T=r,P_(t,n)}}function I_(t,n,a){n=vi(a,n),n=ld(t.stateNode,n,2),t=ja(t,n,2),t!==null&&(Vi(t,2),ta(t))}function We(t,n,a){if(t.tag===3)I_(t,t,a);else for(;n!==null;){if(n.tag===3){I_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=vi(a,t),a=Ug(2),r=ja(n,a,2),r!==null&&(Lg(a,r,n,t),Vi(r,2),ta(r));break}}n=n.return}}function qd(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new xy;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(Id=!0,l.add(a),t=Cy.bind(null,t,n,a),n.then(t,t))}function Cy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Ae&a)===a&&((cn===4||cn===3&&(Ae&62914560)===Ae&&300>Vt()-Vu)&&(Fe&2)===0?Is(t,0):Gu|=a,Ns===Ae&&(Ns=0)),ta(t)}function z_(t,n){n===0&&(n=To()),t=Dr(t,n),t!==null&&(Vi(t,n),ta(t))}function wy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),z_(t,a)}function Dy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),z_(t,a)}function Ny(t,n){return wt(t,n)}var Bs=null,Fs=null,Yd=!1,Qu=!1,Zd=!1,lr=0;function ta(t){t!==Fs&&t.next===null&&(Fs===null?Bs=Fs=t:Fs=Fs.next=t),Qu=!0,Yd||(Yd=!0,Ly())}function sl(t,n){if(!Zd&&Qu){Zd=!0;do for(var a=!1,r=Bs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var _=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-ue(42|t)+1)-1,c&=l&~(_&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,G_(r,c))}else c=Ae,c=Ar(r,r===Qe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Va(r,c)||(a=!0,G_(r,c));r=r.next}while(a);Zd=!1}}function Uy(){B_()}function B_(){Qu=Yd=!1;var t=0;lr!==0&&ky()&&(t=lr);for(var n=Vt(),a=null,r=Bs;r!==null;){var l=r.next,c=F_(r,n);c===0?(r.next=null,a===null?Bs=l:a.next=l,l===null&&(Fs=a)):(a=r,(t!==0||(c&3)!==0)&&(Qu=!0)),r=l}rn!==0&&rn!==5||sl(t),lr!==0&&(lr=0)}function F_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-ue(c),A=1<<_,I=l[_];I===-1?((A&a)===0||(A&r)!==0)&&(l[_]=Eo(A,n)):I<=n&&(t.expiredLanes|=A),c&=~A}if(n=Qe,a=Ae,a=Ar(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&jt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Va(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&jt(r),Co(a)){case 2:case 8:a=k;break;case 32:a=Ct;break;case 268435456:a=Nt;break;default:a=Ct}return r=H_.bind(null,t),a=wt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&jt(r),t.callbackPriority=2,t.callbackNode=null,2}function H_(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ku()&&t.callbackNode!==a)return null;var r=Ae;return r=Ar(t,t===Qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(b_(t,r,n),F_(t,Vt()),t.callbackNode!=null&&t.callbackNode===a?H_.bind(null,t):null)}function G_(t,n){if(Ku())return null;b_(t,n,!0)}function Ly(){qy(function(){(Fe&6)!==0?wt(le,Uy):B_()})}function Kd(){if(lr===0){var t=Ir;t===0&&(t=ss,ss<<=1,(ss&261888)===0&&(ss=256)),lr=t}return lr}function V_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ql(t)}function Oy(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=V_((l[F]||null).action),_=r.submitter;_&&(n=(n=_[F]||null)?V_(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var A=new Ql("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(lr!==0){var I=new FormData(l,_);id(a,{pending:!0,data:I,method:l.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(l,_),id(a,{pending:!0,data:I,method:l.method,action:c},c,I))},currentTarget:l}]})}}for(var Qd=0;Qd<Mf.length;Qd++){var Jd=Mf[Qd],Py=Jd.toLowerCase(),Iy=Jd[0].toUpperCase()+Jd.slice(1);Ri(Py,"on"+Iy)}Ri(p0,"onAnimationEnd"),Ri(m0,"onAnimationIteration"),Ri(g0,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(WM,"onTransitionRun"),Ri(qM,"onTransitionStart"),Ri(YM,"onTransitionCancel"),Ri(_0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function X_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],I=A.instance,j=A.currentTarget;if(A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=j;try{c(l)}catch(ct){$l(ct)}l.currentTarget=null,c=I}else for(_=0;_<r.length;_++){if(A=r[_],I=A.instance,j=A.currentTarget,A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=j;try{c(l)}catch(ct){$l(ct)}l.currentTarget=null,c=I}}}}function Ee(t,n){var a=n[rt];a===void 0&&(a=n[rt]=new Set);var r=t+"__bubble";a.has(r)||(k_(n,t,2,!1),a.add(r))}function jd(t,n,a){var r=0;n&&(r|=4),k_(a,t,r,n)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function $d(t){if(!t[Ju]){t[Ju]=!0,He.forEach(function(a){a!=="selectionchange"&&(zy.has(a)||jd(a,!1,t),jd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ju]||(n[Ju]=!0,jd("selectionchange",!1,n))}}function k_(t,n,a,r){switch(Lv(n)){case 2:var l=wE;break;case 8:l=DE;break;default:l=Sh}a=l.bind(null,n,a,t),l=void 0,!of||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function th(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===l)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;A!==null;){if(_=re(A),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=c=_;continue t}A=A.parentNode}}r=r.return}km(function(){var j=c,ct=rf(a),St=[];t:{var Z=v0.get(t);if(Z!==void 0){var ot=Ql,Lt=t;switch(t){case"keypress":if(Zl(a)===0)break t;case"keydown":case"keyup":ot=MM;break;case"focusin":Lt="focus",ot=ff;break;case"focusout":Lt="blur",ot=ff;break;case"beforeblur":case"afterblur":ot=ff;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=uM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=AM;break;case p0:case m0:case g0:ot=dM;break;case _0:ot=CM;break;case"scroll":case"scrollend":ot=oM;break;case"wheel":ot=DM;break;case"copy":case"cut":case"paste":ot=pM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Km;break;case"submit":ot=TM;break;case"toggle":case"beforetoggle":ot=UM}var Kt=(n&4)!==0,he=!Kt&&(t==="scroll"||t==="scrollend"),J=Kt?Z!==null?Z+"Capture":null:Z;Kt=[];for(var H=j,it;H!==null;){var vt=H;if(it=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||it===null||J===null||(vt=wo(H,J),vt!=null&&Kt.push(ll(H,vt,it))),he)break;H=H.return}0<Kt.length&&(Z=new ot(Z,Lt,null,a,ct),St.push({event:Z,listeners:Kt}))}}if((n&7)===0){t:{if(ot=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",ot&&a!==af&&(Lt=a.relatedTarget||a.fromElement)&&(re(Lt)||Lt[ft]))break t;(Z||ot)&&(Lt=ct.window===ct?ct:(ot=ct.ownerDocument)?ot.defaultView||ot.parentWindow:window,Z?(ot=a.relatedTarget||a.toElement,Z=j,ot=ot?re(ot):null,ot!==null&&(he=f(ot),Kt=ot.tag,ot!==he||Kt!==5&&Kt!==27&&Kt!==6)&&(ot=null)):(Z=null,ot=j),Z!==ot&&(Kt=Ym,vt="onMouseLeave",J="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=Km,vt="onPointerLeave",J="onPointerEnter",H="pointer"),he=Z==null?Lt:kt(Z),it=ot==null?Lt:kt(ot),Lt=new Kt(vt,H+"leave",Z,a,ct),Lt.target=he,Lt.relatedTarget=it,vt=null,re(ct)===j&&(Kt=new Kt(J,H+"enter",ot,a,ct),Kt.target=it,Kt.relatedTarget=he,vt=Kt),he=vt,Kt=Z&&ot?U(Z,ot,By):null,Z!==null&&W_(St,Lt,Z,Kt,!1),ot!==null&&he!==null&&W_(St,he,ot,Kt,!0)))}t:{if(Z=j?kt(j):window,ot=Z.nodeName&&Z.nodeName.toLowerCase(),ot==="select"||ot==="input"&&Z.type==="file")var Wt=i0;else if(e0(Z))if(a0)Wt=VM;else{Wt=HM;var Re=FM}else ot=Z.nodeName,!ot||ot.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?j&&nf(j.elementType)&&(Wt=i0):Wt=GM;if(Wt&&(Wt=Wt(t,j))){n0(St,Wt,a,ct);break t}Re&&Re(t,Z,j)}switch(Re=j?kt(j):window,t){case"focusin":(e0(Re)||Re.contentEditable==="true")&&(hs=Re,vf=j,zo=null);break;case"focusout":zo=vf=hs=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,d0(St,a,ct);break;case"selectionchange":if(kM)break;case"keydown":case"keyup":d0(St,a,ct)}var te;if(hf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ds?$m(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Qm&&a.locale!=="ko"&&(ds||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ds&&(te=Wm()):(Xa=ct,lf="value"in Xa?Xa.value:Xa.textContent,ds=!0)),Re=ju(j,ae),0<Re.length&&(ae=new Zm(ae,t,null,a,ct),St.push({event:ae,listeners:Re}),te?ae.data=te:(te=t0(a),te!==null&&(ae.data=te)))),(te=OM?PM(t,a):IM(t,a))&&(ae=ju(j,"onBeforeInput"),0<ae.length&&(Re=new Zm("onBeforeInput","beforeinput",null,a,ct),St.push({event:Re,listeners:ae}),Re.data=te)),Oy(St,t,j,a,ct)}X_(St,n)})}function ll(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ju(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=wo(t,a),l!=null&&r.unshift(ll(t,l,c)),l=wo(t,n),l!=null&&r.push(ll(t,l,c))),t.tag===3)return r;t=t.return}return[]}function By(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function W_(t,n,a,r,l){for(var c=n._reactName,_=[];a!==null&&a!==r;){var A=a,I=A.alternate,j=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||j===null||(I=j,l?(j=wo(a,c),j!=null&&_.unshift(ll(a,j,I))):l||(j=wo(a,c),j!=null&&_.push(ll(a,j,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Fy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function q_(t){return(typeof t=="string"?t:""+t).replace(Fy,`
`).replace(Hy,"")}function Y_(t,n){return n=q_(n),q_(t)===n}function qe(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||us(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&us(t,""+r);else return;break;case"className":ni(t,"class",r);break;case"tabIndex":ni(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,r);break;case"style":Vm(t,r,c);return;case"data":if(n!=="object"){ni(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ql(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&qe(t,n,"name",l.name,l,null),qe(t,n,"formEncType",l.formEncType,l,null),qe(t,n,"formMethod",l.formMethod,l,null),qe(t,n,"formTarget",l.formTarget,l,null)):(qe(t,n,"encType",l.encType,l,null),qe(t,n,"method",l.method,l,null),qe(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ql(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ki);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ql(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Je(t,"popover",r);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Je(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=rM.get(a)||a,Je(t,a,r);else return}ve=!0}function eh(t,n,a,r,l,c){switch(a){case"style":Vm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")us(t,r);else if(typeof r=="number"||typeof r=="bigint")us(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=ki);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Sn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[F]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}ve=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Je(t,a,r)}return}ve=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,c,_,a,null)}}l&&qe(t,n,"srcSet",a.srcSet,a,null),r&&qe(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var A=c=_=l=null,I=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":l=ct;break;case"type":_=ct;break;case"checked":I=ct;break;case"defaultChecked":j=ct;break;case"value":c=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:qe(t,n,r,ct,a,null)}}Bm(t,c,A,I,j,_,l,!1);return;case"select":Ee("invalid",t),r=_=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:qe(t,n,l,A,a,null)}n=c,a=_,t.multiple=!!r,n!=null?ls(t,!!r,n,!1):a!=null&&ls(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),c=l=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:qe(t,n,_,A,a,null)}Hm(t,r,l,c);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":qe(t,n,I,r,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<ol.length;r++)Ee(ol[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(t,n,j,r,a,null)}return;default:if(nf(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&eh(t,n,ct,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&qe(t,n,A,r,a,null))}var Gy={};function Vy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,_=null,A=null,I=null,j=null,ct=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=St;default:r.hasOwnProperty(ot)||qe(t,n,ot,null,r,St)}}for(var Z in r){var ot=r[Z];if(St=a[Z],r.hasOwnProperty(Z)&&(ot!=null||St!=null))switch(Z){case"type":ot!==St&&(ve=!0),c=ot;break;case"name":ot!==St&&(ve=!0),l=ot;break;case"checked":ot!==St&&(ve=!0),j=ot;break;case"defaultChecked":ot!==St&&(ve=!0),ct=ot;break;case"value":ot!==St&&(ve=!0),_=ot;break;case"defaultValue":ot!==St&&(ve=!0),A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==St&&qe(t,n,Z,ot,r,St)}}tf(t,_,A,I,j,ct,c,l);return;case"select":ot=_=A=Z=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":ot=I;default:r.hasOwnProperty(c)||qe(t,n,c,null,r,I)}for(l in r)if(c=r[l],I=a[l],r.hasOwnProperty(l)&&(c!=null||I!=null))switch(l){case"value":c!==I&&(ve=!0),Z=c;break;case"defaultValue":c!==I&&(ve=!0),A=c;break;case"multiple":c!==I&&(ve=!0),_=c;default:c!==I&&qe(t,n,l,c,r,I)}n=A,a=_,r=ot,Z!=null?ls(t,!!a,Z,!1):!!r!=!!a&&(n!=null?ls(t,!!a,n,!0):ls(t,!!a,a?[]:"",!1));return;case"textarea":ot=Z=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:qe(t,n,A,null,r,l)}for(_ in r)if(l=r[_],c=a[_],r.hasOwnProperty(_)&&(l!=null||c!=null))switch(_){case"value":l!==c&&(ve=!0),Z=l;break;case"defaultValue":l!==c&&(ve=!0),ot=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&qe(t,n,_,l,r,c)}Fm(t,Z,ot);return;case"option":for(var Lt in a)Z=a[Lt],a.hasOwnProperty(Lt)&&Z!=null&&!r.hasOwnProperty(Lt)&&(Lt==="selected"?t.selected=!1:qe(t,n,Lt,null,r,Z));for(I in r)Z=r[I],ot=a[I],r.hasOwnProperty(I)&&Z!==ot&&(Z!=null||ot!=null)&&(I==="selected"?(Z!==ot&&(ve=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol"):qe(t,n,I,Z,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)Z=a[Kt],a.hasOwnProperty(Kt)&&Z!=null&&!r.hasOwnProperty(Kt)&&qe(t,n,Kt,null,r,Z);for(j in r)if(Z=r[j],ot=a[j],r.hasOwnProperty(j)&&Z!==ot&&(Z!=null||ot!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:qe(t,n,j,Z,r,ot)}return;default:if(nf(n)){for(var he in a)Z=a[he],a.hasOwnProperty(he)&&Z!==void 0&&!r.hasOwnProperty(he)&&eh(t,n,he,void 0,r,Z);for(ct in r)Z=r[ct],ot=a[ct],!r.hasOwnProperty(ct)||Z===ot||Z===void 0&&ot===void 0||eh(t,n,ct,Z,r,ot);return}}for(var J in a)Z=a[J],a.hasOwnProperty(J)&&Z!=null&&!r.hasOwnProperty(J)&&qe(t,n,J,null,r,Z);for(St in r)Z=r[St],ot=a[St],!r.hasOwnProperty(St)||Z===ot||Z==null&&ot==null||qe(t,n,St,Z,r,ot)}function Z_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,_=l.initiatorType,A=l.duration;if(c&&A&&Z_(_)){for(_=0,A=l.responseEnd,r+=1;r<a.length;r++){var I=a[r],j=I.startTime;if(j>A)break;var ct=I.transferSize,St=I.initiatorType;ct&&Z_(St)&&(I=I.responseEnd,_+=ct*(I<A?1:(A-j)/(I-j)))}if(--r,n+=8*(c+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nh=null,ih=null;function ul(t){return t.nodeType===9?t:t.ownerDocument}function K_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function J_(t,n,a,r){return a=ul(a).createElement(t),a[b]=r,a[F]=n,Nn(a,t,n),_e(a),a}function ah(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function ky(){var t=window.event;return t&&t.type==="popstate"?t===rh?!1:(rh=t,!0):(rh=null,!1)}var sh=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,$_=typeof requestAnimationFrame=="function"?requestAnimationFrame:sh,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(t){return j_.resolve(null).then(t).catch(Yy)}:sh;function Yy(t){setTimeout(function(){throw t})}function ur(t){return t==="head"}function tv(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),qs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ph(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ph(a);for(var c=a.firstChild;c;){var _=c.nextSibling,A=c.nodeName;c[Ut]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&ph(t.ownerDocument.body);a=l}while(a);qs(n)}function ev(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function nv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function iv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Zy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function oh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Zy(n,a,t)}function Ky(t){return t.documentElement.clientHeight}function Qy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Jy(t,n,a,r,l,c,_,A,I){var j=n.nodeType===9?n:n.ownerDocument;try{var ct=j.startViewTransition({update:function(){var Z=j.defaultView,ot=Z.navigation&&Z.navigation.transition,Lt=j.fonts.status;r();var Kt=[];if(Lt==="loaded"&&(Ky(j),j.fonts.status==="loading"&&Kt.push(j.fonts.ready)),Lt=Kt.length,t!==null)for(var he=t.suspenseyImages,J=0,H=0;H<he.length;H++){var it=he[H];if(!it.complete){var vt=it.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<Z.innerHeight&&vt.left<Z.innerWidth){if(J+=Tv(it),J>ec){Kt.length=Lt;break}it=new Promise(Qy.bind(it)),Kt.push(it)}}}if(0<Kt.length)return Z=Promise.race([Promise.all(Kt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(l,l),(ot?Promise.allSettled([ot.finished,Z]):Z).then(c,c);if(l(),ot)return ot.finished.then(c,c);c()},types:a});j.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var Z=j.documentElement.getAnimations({subtree:!0}),ot=0;ot<Z.length;ot++){var Lt=Z[ot],Kt=Lt.effect,he=Kt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){St.push(Lt),Lt=Kt.getKeyframes();for(var J=he=void 0,H=!0,it=0;it<Lt.length;it++){var vt=Lt[it],Wt=vt.width;if(he===void 0)he=Wt;else if(he!==Wt){H=!1;break}if(Wt=vt.height,J===void 0)J=Wt;else if(J!==Wt){H=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}H&&he!==void 0&&J!==void 0&&(Kt.setKeyframes(Lt),H=getComputedStyle(Kt.target,Kt.pseudoElement),H.width!==he||H.height!==J)&&(H=Lt[0],H.width=he,H.height=J,H=Lt[Lt.length-1],H.width=he,H.height=J,Kt.setKeyframes(Lt))}}_()},function(Z){j.__reactViewTransition===ct&&(j.__reactViewTransition=null);try{typeof Z=="object"&&Z!==null&&Z.name==="InvalidStateError"&&(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null),Z!==null&&I(Z)}finally{r(),l(),_()}}),ct.finished.finally(function(){for(var Z=0;Z<St.length;Z++)St[Z].cancel();j.__reactViewTransition===ct&&(j.__reactViewTransition=null),A()}),ct}catch{return r(),l(),_(),null}}function Yr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Yr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:D({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Yr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Yr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function av(t){return{name:t,group:new Yr("group",t),imagePair:new Yr("image-pair",t),old:new Yr("old",t),new:new Yr("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(sv(c,t,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(l=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Hs(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),g(this._fragmentFiber.child,!1,jy,t,A,r)}this._eventListeners=c}};function jy(t,n,a,r){return M(t).addEventListener(n,a,r),!1}ui.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=sv(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Hs(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,$y,t,a,l),r.splice(n,1),c!==null&&c()}};function $y(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Hs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function rv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function sv(t,n,a,r){if(t.length===0)return-1;r=rv(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&rv(c.optionsOrUseCapture)===r)return l}return-1}ui.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Hs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Hs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){g(this._fragmentFiber.child,!0,ov,t,void 0,void 0)};function ov(t,n){return t.tag===6?!1:(t=M(t),fE(t,n))}ui.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,lh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!ov(n[a],t);a--);};function lh(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=ul(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,tE,t,void 0,void 0))};function tE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,eE,t,void 0,void 0)};function eE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,nE,t,void 0,void 0);for(var a=n=0;a<Ui.length;a++){var r=Ui[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ui[n++]=r}Ui.length=n}};function nE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ui=[],uh=!1;function iE(t,n,a){Ui.push({fragmentInstance:t,observer:n,instance:a}),uh||(uh=!0,dE(function(){uh=!1;var r=Ui;Ui=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,aE,t,void 0,void 0),t};function aE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,lh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),l=M(a[a.length-1]);var c=y(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),I=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||rE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function rE(t,n,a,r,l){var c=re(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=v(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=U(a,c,N),n===null?n=!1:(g(n,!0,G,c,a),c=x,x=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=U(r,c,N),n===null?n=!1:(g(n,!0,C,c,r),c=x,P=x=null,n=c!==null)),n):!1}function lv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,lh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),lv(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=M(l),lv(l,a)):M(l).scrollIntoView(t),r+=a?-1:1}};function sE(t,n){return t=M(t),uv(t,n),!1}function uv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function cv(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Hs(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,A=0;A<Ui.length;A++){var I=Ui[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Ui[_++]=I)}Ui.length=_,c.observe(t)}),uv(t,n))}function oE(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Hs(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?iE(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function ch(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),Zt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function lE(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ut])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function uE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function fv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function fh(t){return t.data==="$?"||t.data==="$~"}function dh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hh=null;function dv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function hv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function fE(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function dE(t){$_(function(){$_(function(n){return t(n)})})}function pv(t,n,a){switch(n=ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function mv(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&qe(t,n,r,null,Gy,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ki&&(t.onclick=null),Zt(t)}function ph(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zt(t)}var Ti=new Map,gv=new Set;function cl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ra=Rt.d;Rt.d={f:hE,r:pE,D:mE,C:gE,L:_E,m:vE,X:xE,S:SE,M:ME};function hE(){var t=Ra.f(),n=qu();return t||n}function pE(t){var n=ce(t);n!==null&&n.tag===5&&n.type==="form"?vg(n):Ra.r(t)}var Gs=typeof document>"u"?null:document;function _v(t,n,a){var r=Gs;if(r&&typeof n=="string"&&n){var l=gi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),gv.has(l)||(gv.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Nn(n,"link",t),_e(n),r.head.appendChild(n)))}}function mE(t){Ra.D(t),_v("dns-prefetch",t,null)}function gE(t,n){Ra.C(t,n),_v("preconnect",t,n)}function _E(t,n,a){Ra.L(t,n,a);var r=Gs;if(r&&t&&n){var l='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+gi(a.imageSizes)+'"]')):l+='[href="'+gi(t)+'"]';var c=l;switch(n){case"style":c=Vs(t);break;case"script":c=Xs(t)}if(!(Ti.has(c)||(t=D({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(fl(c))||n==="script"&&r.querySelector(dl(c))))){var _=r.createElement("link");Nn(_,"link",t),n==="style"&&(_[qt]=!0,_.onload=_.onerror=function(){Ze(_)}),_e(_),r.head.appendChild(_)}}}function vE(t,n){Ra.m(t,n);var a=Gs;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+gi(r)+'"][href="'+gi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Xs(t)}if(!Ti.has(c)&&(t=D({rel:"modulepreload",href:t},n),Ti.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(c)))return}r=a.createElement("link"),Nn(r,"link",t),_e(r),a.head.appendChild(r)}}}function SE(t,n,a){Ra.S(t,n,a);var r=Gs;if(r&&t){var l=Me(r).hoistableStyles,c=Vs(t);n=n||"default";var _=l.get(c);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(fl(c)))A.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(c))&&mh(t,a);var I=_=r.createElement("link");_e(I),Nn(I,"link",t),I._p=new Promise(function(j,ct){I.onload=j,I.onerror=ct}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,$u(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},l.set(c,_)}}}function xE(t,n){Ra.X(t,n);var a=Gs;if(a&&t){var r=Me(a).hoistableScripts,l=Xs(t),c=r.get(l);c||(c=a.querySelector(dl(l)),c||(t=D({src:t,async:!0},n),(n=Ti.get(l))&&gh(t,n),c=a.createElement("script"),_e(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function ME(t,n){Ra.M(t,n);var a=Gs;if(a&&t){var r=Me(a).hoistableScripts,l=Xs(t),c=r.get(l);c||(c=a.querySelector(dl(l)),c||(t=D({src:t,async:!0,type:"module"},n),(n=Ti.get(l))&&gh(t,n),c=a.createElement("script"),_e(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function vv(t,n,a,r){var l=(l=Ie.current)?cl(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vs(a.href),n=Me(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Vs(a.href);var c=Me(l).hoistableStyles,_=c.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=l.querySelector(fl(t)))?c._p||(_.instance=c,_.state.loading=5):(c=Ti.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,c)),yE(l,t,c,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Xs(a),n=Me(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Vs(t){return'href="'+gi(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function Sv(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function yE(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[qt]=!0,n.onload=n.onerror=Ze.bind(null,n),Nn(n,"link",a),_e(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Xs(t){return'[src="'+gi(t)+'"]'}function dl(t){return"script[async]"+t}function xv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(r)return n.instance=r,_e(r),r;var l=D({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),_e(r),Nn(r,"style",l),$u(r,a.precedence,t),n.instance=r;case"stylesheet":l=Vs(a.href);var c=t.querySelector(fl(l));if(c)return n.state.loading|=4,n.instance=c,_e(c),c;r=Sv(a),(l=Ti.get(l))&&mh(r,l),c=(t.ownerDocument||t).createElement("link"),_e(c);var _=c;return _._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Nn(c,"link",r),n.state.loading|=4,$u(c,a.precedence,t),n.instance=c;case"script":return c=Xs(a.src),(l=t.querySelector(dl(c)))?(n.instance=l,_e(l),l):(r=a,(l=Ti.get(c))&&(r=D({},a),gh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),_e(l),Nn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,$u(r,a.precedence,t));return n.instance}function $u(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function mh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function Mv(t,n,a){if(tc===null){var r=new Map,l=tc=new Map;l.set(a,r)}else l=tc,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Ut]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var A=r.get(_);A?A.push(c):r.set(_,[c])}}return r}function _h(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function EE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Tv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function bv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Tv(n),t.suspenseyImages.push(n)),t=AE.bind(t),n.decode().then(t,t))}function TE(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Vs(r.href),c=n.querySelector(fl(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,_e(c);return}c=n.ownerDocument||n,r=Sv(r),(l=Ti.get(l))&&mh(r,l),c=c.createElement("link"),_e(c);var _=c;_._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),Nn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ec=0;function bE(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ec===0&&(ec=62500*Xy());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ec?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Av(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ic(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function hl(){this.count--,Av(this)}function AE(){this.imgCount--,Av(this)}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(RE,t),nc=null,hl.call(t))}function RE(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var r=a.get(null);else{a=new Map,nc.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var _=l[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}l=n.instance,_=l.getAttribute("data-precedence"),c=a.get(_)||r,c===r&&a.set(null,l),a.set(_,l),this.count++,r=hl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var ks={$$typeof:tt,Provider:null,Consumer:null,_currentValue:Ve,_currentValue2:Ve,_threadCount:0};function CE(t,n,a,r,l,c,_,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Rv(t,n,a,r,l,c,_,A,I,j,ct,St){return t=new CE(t,n,a,_,I,j,ct,St,A),n=1,c===!0&&(n|=24),c=Yn(3,null,null,n),t.current=c,c.stateNode=t,n=Uf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},If(c),t}function Cv(t){return t?(t=gs,t):gs}function wv(t,n,a,r,l,c){l=Cv(l),r.context===null?r.context=l:r.pendingContext=l,r=Ja(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=ja(t,r,n),a!==null&&(Jn(a,t,n),ko(a,t,n))}function Dv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vh(t,n){Dv(t,n),(t=t.alternate)&&Dv(t,n)}function Nv(t){if(t.tag===13||t.tag===31){var n=Dr(t,67108864);n!==null&&Jn(n,t,67108864),vh(t,67108864)}}function Uv(t){if(t.tag===13||t.tag===31){var n=li();n=Ro(n);var a=Dr(t,n);a!==null&&Jn(a,t,n),vh(t,n)}}var Ws=!0;function wE(t,n,a,r){var l=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=2,Sh(t,n,a,r)}finally{Rt.p=c,_t.T=l}}function DE(t,n,a,r){var l=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=8,Sh(t,n,a,r)}finally{Rt.p=c,_t.T=l}}function Sh(t,n,a,r){if(Ws){var l=xh(r);if(l===null)th(t,n,r,ac,a),Ov(t,r);else if(UE(l,t,n,a,r))r.stopPropagation();else if(Ov(t,r),n&4&&-1<NE.indexOf(t)){for(;l!==null;){var c=ce(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=ha(c.pendingLanes);if(_!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var I=1<<31-ue(_);A.entanglements[1]|=I,_&=~I}ta(c),(Fe&6)===0&&(Xu=Vt()+500,sl(0))}}break;case 31:case 13:A=Dr(c,2),A!==null&&Jn(A,c,2),qu(),vh(c,2)}if(c=xh(r),c===null&&th(t,n,r,ac,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else th(t,n,r,null,a)}}function xh(t){return t=rf(t),Mh(t)}var ac=null;function Mh(t){if(ac=null,t=re(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Lv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case le:return 2;case k:return 8;case Ct:case xt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var yh=!1,cr=null,fr=null,dr=null,pl=new Map,ml=new Map,hr=[],NE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ov(t,n){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ce(n),n!==null&&Nv(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function UE(t,n,a,r,l){switch(n){case"focusin":return cr=gl(cr,t,n,a,r,l),!0;case"dragenter":return fr=gl(fr,t,n,a,r,l),!0;case"mouseover":return dr=gl(dr,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return pl.set(c,gl(pl.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,ml.set(c,gl(ml.get(c)||null,t,n,a,r,l)),!0}return!1}function Pv(t){var n=re(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,kl(t.priority,function(){Uv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,kl(t.priority,function(){Uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=xh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);af=r,a.target.dispatchEvent(r),af=null}else return n=ce(a),n!==null&&Nv(n),t.blockedOn=a,!1;n.shift()}return!0}function Iv(t,n,a){rc(t)&&a.delete(n)}function LE(){yh=!1,cr!==null&&rc(cr)&&(cr=null),fr!==null&&rc(fr)&&(fr=null),dr!==null&&rc(dr)&&(dr=null),pl.forEach(Iv),ml.forEach(Iv)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,yh||(yh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,LE)))}var oc=null;function zv(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(Mh(r||a)===null)continue;break}var c=ce(a);c!==null&&(t.splice(n,3),n-=3,id(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function qs(t){function n(I){return sc(I,t)}cr!==null&&sc(cr,t),fr!==null&&sc(fr,t),dr!==null&&sc(dr,t),pl.forEach(n),ml.forEach(n);for(var a=0;a<hr.length;a++){var r=hr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Pv(a),a.blockedOn===null&&hr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],_=l[F]||null;if(typeof c=="function")_||zv(a);else if(_){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,_=c[F]||null)A=_.formAction;else if(Mh(l)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),zv(a)}}}function Bv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Eh(t){this._internalRoot=t}lc.prototype.render=Eh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();wv(a,r,t,n,null,null)},lc.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;wv(t.current,2,null,t,null,null),qu(),n[ft]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Xl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<hr.length&&n!==0&&n<hr[a].priority;a++);hr.splice(a,0,t),a===0&&Pv(t)}};var Fv=e.version;if(Fv!=="19.3.0")throw Error(s(527,Fv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var OE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Jt=uc.inject(OE),Ht=uc}catch{}}return vl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=Cg,c=wg,_=Dg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Rv(t,1,!1,null,null,a,r,null,l,c,_,Bv),t[ft]=n.current,$d(t),new Eh(n)},vl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=Cg,_=wg,A=Dg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Rv(t,1,!0,n,a??null,r,l,I,c,_,A,Bv),n.context=Cv(null),a=n.current,r=li(),r=Ro(r),l=Ja(r),l.callback=null,ja(a,l,r),a=r,n.current.lanes=a,Vi(n,a),ta(n),t[ft]=n.current,$d(t),new lc(n)},vl.version="19.3.0",vl}var Kv;function XE(){if(Kv)return Ah.exports;Kv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ah.exports=VE(),Ah.exports}var kE=XE();const pm="186",WE=0,Qv=1,qE=2,Oc=1,YE=2,Rl=3,Fa=0,$n=1,Oa=2,Ia=0,wl=1,Jv=2,jv=3,$v=4,ZE=5,oo=100,KE=101,QE=102,JE=103,jE=104,$E=200,tT=201,eT=202,nT=203,dx=204,hx=205,iT=206,aT=207,rT=208,sT=209,oT=210,lT=211,uT=212,cT=213,fT=214,fp=0,dp=1,hp=2,Nl=3,pp=4,mp=5,gp=6,_p=7,px=0,dT=1,hT=2,oa=0,mx=1,gx=2,_x=3,vx=4,Sx=5,xx=6,Mx=7,yx=300,ns=301,po=302,Dh=303,Nh=304,Zc=306,vp=1e3,Pa=1001,Sp=1002,Ln=1003,pT=1004,cc=1005,Fn=1006,Uh=1007,ts=1008,hi=1009,Ex=1010,Tx=1011,Ul=1012,mm=1013,ua=1014,ra=1015,ca=1016,gm=1017,_m=1018,Ll=1020,bx=35902,Ax=35899,Rx=1021,Cx=1022,zi=1023,Ha=1026,es=1027,wx=1028,vm=1029,is=1030,Sm=1031,xm=1033,Pc=33776,Ic=33777,zc=33778,Bc=33779,xp=35840,Mp=35841,yp=35842,Ep=35843,Tp=36196,bp=37492,Ap=37496,Rp=37488,Cp=37489,Gc=37490,wp=37491,Dp=37808,Np=37809,Up=37810,Lp=37811,Op=37812,Pp=37813,Ip=37814,zp=37815,Bp=37816,Fp=37817,Hp=37818,Gp=37819,Vp=37820,Xp=37821,kp=36492,Wp=36494,qp=36495,Yp=36283,Zp=36284,Vc=36285,Kp=36286,mT=3200,Qp=0,gT=1,yr="",di="srgb",Xc="srgb-linear",kc="linear",Ye="srgb",Lh=7680,_T=519,vT=512,ST=513,xT=514,Mm=515,MT=516,yT=517,ym=518,ET=519,TT=35044,tS="300 es",sa=2e3,Ol=2001;function bT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function AT(){const o=Wc("canvas");return o.style.display="block",o}const eS={};function nS(...o){const e="THREE."+o.shift();console.log(e,...o)}function Dx(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=Dx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function ze(...o){o=Dx(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function uo(...o){const e=o.join(" ");e in eS||(eS[e]=!0,oe(...o))}function RT(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const CT={[fp]:dp,[hp]:gp,[pp]:_p,[Nl]:mp,[dp]:fp,[gp]:hp,[_p]:pp,[mp]:Nl};class as{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=Math.PI/180,Jp=180/Math.PI;function Il(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Ne(o,e,i){return Math.max(e,Math.min(i,o))}function wT(o,e){return(o%e+e)%e}function Ph(o,e,i){return(1-i)*o+i*e}function Sl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Um=class Um{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Um.prototype.isVector2=!0;let Oe=Um;class dn{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let p=s[u+0],m=s[u+1],S=s[u+2],g=s[u+3],v=f[d+0],y=f[d+1],R=f[d+2],w=f[d+3];if(g!==w||p!==v||m!==y||S!==R){let M=p*v+m*y+S*R+g*w;M<0&&(v=-v,y=-y,R=-R,w=-w,M=-M);let x=1-h;if(M<.9995){const P=Math.acos(M),G=Math.sin(P);x=Math.sin(x*P)/G,h=Math.sin(h*P)/G,p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+w*h}else{p=p*x+v*h,m=m*x+y*h,S=S*x+R*h,g=g*x+w*h;const P=1/Math.sqrt(p*p+m*m+S*S+g*g);p*=P,m*=P,S*=P,g*=P}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],p=s[u+1],m=s[u+2],S=s[u+3],g=f[d],v=f[d+1],y=f[d+2],R=f[d+3];return e[i]=h*R+S*g+p*y-m*v,e[i+1]=p*R+S*v+m*g-h*y,e[i+2]=m*R+S*y+h*v-p*g,e[i+3]=S*R-h*g-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(s/2),S=h(u/2),g=h(f/2),v=p(s/2),y=p(u/2),R=p(f/2);switch(d){case"XYZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"YXZ":this._x=v*S*g+m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"ZXY":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g-v*y*R;break;case"ZYX":this._x=v*S*g-m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g+v*y*R;break;case"YZX":this._x=v*S*g+m*y*R,this._y=m*y*g+v*S*R,this._z=m*S*R-v*y*g,this._w=m*S*g-v*y*R;break;case"XZY":this._x=v*S*g-m*y*R,this._y=m*y*g-v*S*R,this._z=m*S*R+v*y*g,this._w=m*S*g+v*y*R;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],g=i[10],v=s+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(S-p)*y,this._y=(f-m)*y,this._z=(d-u)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(S-p)/y,this._x=.25*y,this._y=(u+d)/y,this._z=(f+m)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(f-m)/y,this._x=(u+d)/y,this._y=.25*y,this._z=(p+S)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(d-u)/y,this._x=(f+m)/y,this._y=(p+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+u*m-f*p,this._y=u*S+d*p+f*h-s*m,this._z=f*S+d*m+s*p-u*h,this._w=d*S-s*h-u*p-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+s*i,this._y=this._y*p+u*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+u*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lm=class Lm{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(iS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(iS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*u-h*s),S=2*(h*i-f*u),g=2*(f*s-d*i);return this.x=i+p*m+d*g-h*S,this.y=s+p*S+h*m-f*g,this.z=u+p*g+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,p=i.z;return this.x=u*p-f*h,this.y=f*d-s*p,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ne(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lm.prototype.isVector3=!0;let $=Lm;const Ih=new $,iS=new dn,Om=class Om{constructor(e,i,s,u,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,m)}set(e,i,s,u,f,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=f,S[5]=p,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],S=s[4],g=s[7],v=s[2],y=s[5],R=s[8],w=u[0],M=u[3],x=u[6],P=u[1],G=u[4],C=u[7],N=u[2],U=u[5],D=u[8];return f[0]=d*w+h*P+p*N,f[3]=d*M+h*G+p*U,f[6]=d*x+h*C+p*D,f[1]=m*w+S*P+g*N,f[4]=m*M+S*G+g*U,f[7]=m*x+S*C+g*D,f[2]=v*w+y*P+R*N,f[5]=v*M+y*G+R*U,f[8]=v*x+y*C+R*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*f*S+s*h*p+u*f*m-u*d*p}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=S*d-h*m,v=h*p-S*f,y=m*f-d*p,R=i*g+s*v+u*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=g*w,e[1]=(u*m-S*s)*w,e[2]=(h*s-u*d)*w,e[3]=v*w,e[4]=(S*i-u*p)*w,e[5]=(u*f-h*i)*w,e[6]=y*w,e[7]=(s*p-m*i)*w,e[8]=(d*i-s*f)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(s*p,s*m,-s*(p*d+m*h)+d+e,-u*m,u*p,-u*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zh.makeScale(e,i)),this}rotate(e){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zh.makeRotation(-e)),this}translate(e,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Om.prototype.isMatrix3=!0;let fe=Om;const zh=new fe,aS=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rS=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DT(){const o={enabled:!0,workingColorSpace:Xc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Ye&&(u.r=za(u.r),u.g=za(u.g),u.b=za(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ye&&(u.r=co(u.r),u.g=co(u.g),u.b=co(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===yr?kc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Xc]:{primaries:e,whitePoint:s,transfer:kc,toXYZ:aS,fromXYZ:rS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:s,transfer:Ye,toXYZ:aS,fromXYZ:rS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const De=DT();function za(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ys;class NT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ys===void 0&&(Ys=Wc("canvas")),Ys.width=e.width,Ys.height=e.height;const u=Ys.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Ys}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=za(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(za(i[s]/255)*255):i[s]=za(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UT=0;class Em{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=Il(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(Bh(u[d].image)):f.push(Bh(u[d]))}else f=Bh(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function Bh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?NT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let LT=0;const Fh=new $;class Hn extends as{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=Pa,u=Pa,f=Fn,d=ts,h=zi,p=hi,m=Hn.DEFAULT_ANISOTROPY,S=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=Il(),this.name="",this.source=new Em(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vp:e.x=e.x-Math.floor(e.x);break;case Pa:e.x=e.x<0?0:1;break;case Sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vp:e.y=e.y-Math.floor(e.y);break;case Pa:e.y=e.y<0?0:1;break;case Sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=yx;Hn.DEFAULT_ANISOTROPY=1;const Pm=class Pm{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const p=e.elements,m=p[0],S=p[4],g=p[8],v=p[1],y=p[5],R=p[9],w=p[2],M=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(g-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(g+w)<.1&&Math.abs(R+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(m+1)/2,C=(y+1)/2,N=(x+1)/2,U=(S+v)/4,D=(g+w)/4,T=(R+M)/4;return G>C&&G>N?G<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(G),u=U/s,f=D/s):C>N?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=U/u,f=T/u):N<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(N),s=D/f,u=T/f),this.set(s,u,f,i),this}let P=Math.sqrt((M-R)*(M-R)+(g-w)*(g-w)+(v-S)*(v-S));return Math.abs(P)<.001&&(P=1),this.x=(M-R)/P,this.y=(g-w)/P,this.z=(v-S)/P,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ne(this.x,e.x,i.x),this.y=Ne(this.y,e.y,i.y),this.z=Ne(this.z,e.z,i.z),this.w=Ne(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ne(this.x,e,i),this.y=Ne(this.y,e,i),this.z=Ne(this.z,e,i),this.w=Ne(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ne(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pm.prototype.isVector4=!0;let sn=Pm;class OT extends as{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:s.depth},f=new Hn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Em(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends OT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Nx extends Hn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PT extends Hn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Yc=class Yc{constructor(e,i,s,u,f,d,h,p,m,S,g,v,y,R,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,p,m,S,g,v,y,R,w,M)}set(e,i,s,u,f,d,h,p,m,S,g,v,y,R,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=u,x[1]=f,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=g,x[14]=v,x[3]=y,x[7]=R,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Zs.setFromMatrixColumn(e,0).length(),f=1/Zs.setFromMatrixColumn(e,1).length(),d=1/Zs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(u),m=Math.sin(u),S=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const v=d*S,y=d*g,R=h*S,w=h*g;i[0]=p*S,i[4]=-p*g,i[8]=m,i[1]=y+R*m,i[5]=v-w*m,i[9]=-h*p,i[2]=w-v*m,i[6]=R+y*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,y=p*g,R=m*S,w=m*g;i[0]=v+w*h,i[4]=R*h-y,i[8]=d*m,i[1]=d*g,i[5]=d*S,i[9]=-h,i[2]=y*h-R,i[6]=w+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,y=p*g,R=m*S,w=m*g;i[0]=v-w*h,i[4]=-d*g,i[8]=R+y*h,i[1]=y+R*h,i[5]=d*S,i[9]=w-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,y=d*g,R=h*S,w=h*g;i[0]=p*S,i[4]=R*m-y,i[8]=v*m+w,i[1]=p*g,i[5]=w*m+v,i[9]=y*m-R,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*S,i[4]=w-v*g,i[8]=R*g+y,i[1]=g,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=y*g+R,i[10]=v-w*g}else if(e.order==="XZY"){const v=d*p,y=d*m,R=h*p,w=h*m;i[0]=p*S,i[4]=-g,i[8]=m*S,i[1]=v*g+w,i[5]=d*S,i[9]=y*g-R,i[2]=R*g-y,i[6]=h*S,i[10]=w*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IT,e,zT)}lookAt(e,i,s){const u=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),mr.crossVectors(s,ci),mr.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),mr.crossVectors(s,ci)),mr.normalize(),fc.crossVectors(ci,mr),u[0]=mr.x,u[4]=fc.x,u[8]=ci.x,u[1]=mr.y,u[5]=fc.y,u[9]=ci.y,u[2]=mr.z,u[6]=fc.z,u[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],S=s[1],g=s[5],v=s[9],y=s[13],R=s[2],w=s[6],M=s[10],x=s[14],P=s[3],G=s[7],C=s[11],N=s[15],U=u[0],D=u[4],T=u[8],L=u[12],V=u[1],B=u[5],Y=u[9],nt=u[13],K=u[2],tt=u[6],q=u[10],X=u[14],ut=u[3],at=u[7],ht=u[11],yt=u[15];return f[0]=d*U+h*V+p*K+m*ut,f[4]=d*D+h*B+p*tt+m*at,f[8]=d*T+h*Y+p*q+m*ht,f[12]=d*L+h*nt+p*X+m*yt,f[1]=S*U+g*V+v*K+y*ut,f[5]=S*D+g*B+v*tt+y*at,f[9]=S*T+g*Y+v*q+y*ht,f[13]=S*L+g*nt+v*X+y*yt,f[2]=R*U+w*V+M*K+x*ut,f[6]=R*D+w*B+M*tt+x*at,f[10]=R*T+w*Y+M*q+x*ht,f[14]=R*L+w*nt+M*X+x*yt,f[3]=P*U+G*V+C*K+N*ut,f[7]=P*D+G*B+C*tt+N*at,f[11]=P*T+G*Y+C*q+N*ht,f[15]=P*L+G*nt+C*X+N*yt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],g=e[6],v=e[10],y=e[14],R=e[3],w=e[7],M=e[11],x=e[15],P=p*y-m*v,G=h*y-m*g,C=h*v-p*g,N=d*y-m*S,U=d*v-p*S,D=d*g-h*S;return i*(w*P-M*G+x*C)-s*(R*P-M*N+x*U)+u*(R*G-w*N+x*D)-f*(R*C-w*U+M*D)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(f*S-h*p)+u*(f*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],g=e[9],v=e[10],y=e[11],R=e[12],w=e[13],M=e[14],x=e[15],P=i*h-s*d,G=i*p-u*d,C=i*m-f*d,N=s*p-u*h,U=s*m-f*h,D=u*m-f*p,T=S*w-g*R,L=S*M-v*R,V=S*x-y*R,B=g*M-v*w,Y=g*x-y*w,nt=v*x-y*M,K=P*nt-G*Y+C*B+N*V-U*L+D*T;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/K;return e[0]=(h*nt-p*Y+m*B)*tt,e[1]=(u*Y-s*nt-f*B)*tt,e[2]=(w*D-M*U+x*N)*tt,e[3]=(v*U-g*D-y*N)*tt,e[4]=(p*V-d*nt-m*L)*tt,e[5]=(i*nt-u*V+f*L)*tt,e[6]=(M*C-R*D-x*G)*tt,e[7]=(S*D-v*C+y*G)*tt,e[8]=(d*Y-h*V+m*T)*tt,e[9]=(s*V-i*Y-f*T)*tt,e[10]=(R*U-w*C+x*P)*tt,e[11]=(g*C-S*U-y*P)*tt,e[12]=(h*L-d*B-p*T)*tt,e[13]=(i*B-s*L+u*T)*tt,e[14]=(w*G-R*N-M*P)*tt,e[15]=(S*N-g*G+v*P)*tt,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,p=e.z,m=f*d,S=f*h;return this.set(m*d+s,m*h-u*p,m*p+u*h,0,m*h+u*p,S*h+s,S*p-u*d,0,m*p-u*h,S*p+u*d,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,S=d+d,g=h+h,v=f*m,y=f*S,R=f*g,w=d*S,M=d*g,x=h*g,P=p*m,G=p*S,C=p*g,N=s.x,U=s.y,D=s.z;return u[0]=(1-(w+x))*N,u[1]=(y+C)*N,u[2]=(R-G)*N,u[3]=0,u[4]=(y-C)*U,u[5]=(1-(v+x))*U,u[6]=(M+P)*U,u[7]=0,u[8]=(R+G)*D,u[9]=(M-P)*D,u[10]=(1-(v+w))*D,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Zs.set(u[0],u[1],u[2]).length();const h=Zs.set(u[4],u[5],u[6]).length(),p=Zs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Li.copy(this);const m=1/d,S=1/h,g=1/p;return Li.elements[0]*=m,Li.elements[1]*=m,Li.elements[2]*=m,Li.elements[4]*=S,Li.elements[5]*=S,Li.elements[6]*=S,Li.elements[8]*=g,Li.elements[9]*=g,Li.elements[10]*=g,i.setFromRotationMatrix(Li),s.x=d,s.y=h,s.z=p,this}makePerspective(e,i,s,u,f,d,h=sa,p=!1){const m=this.elements,S=2*f/(i-e),g=2*f/(s-u),v=(i+e)/(i-e),y=(s+u)/(s-u);let R,w;if(p)R=f/(d-f),w=d*f/(d-f);else if(h===sa)R=-(d+f)/(d-f),w=-2*d*f/(d-f);else if(h===Ol)R=-d/(d-f),w=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=sa,p=!1){const m=this.elements,S=2/(i-e),g=2/(s-u),v=-(i+e)/(i-e),y=-(s+u)/(s-u);let R,w;if(p)R=1/(d-f),w=d/(d-f);else if(h===sa)R=-2/(d-f),w=-(d+f)/(d-f);else if(h===Ol)R=-1/(d-f),w=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=R,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};Yc.prototype.isMatrix4=!0;let nn=Yc;const Zs=new $,Li=new nn,IT=new $(0,0,0),zT=new $(1,1,1),mr=new $,fc=new $,ci=new $,sS=new nn,oS=new dn;class Hi{constructor(e=0,i=0,s=0,u=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],p=u[1],m=u[5],S=u[9],g=u[2],v=u[6],y=u[10];switch(i){case"XYZ":this._y=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return sS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sS,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return oS.setFromEuler(this),this.setFromQuaternion(oS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BT=0;const lS=new $,Ks=new dn,Ca=new nn,dc=new $,xl=new $,FT=new $,HT=new dn,uS=new $(1,0,0),cS=new $(0,1,0),fS=new $(0,0,1),dS={type:"added"},GT={type:"removed"},Qs={type:"childadded",child:null},Hh={type:"childremoved",child:null};class On extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=Il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new $,i=new Hi,s=new dn,u=new $(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new nn},normalMatrix:{value:new fe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(uS,e)}rotateY(e){return this.rotateOnAxis(cS,e)}rotateZ(e){return this.rotateOnAxis(fS,e)}translateOnAxis(e,i){return lS.copy(e).applyQuaternion(this.quaternion),this.position.add(lS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(uS,e)}translateY(e){return this.translateOnAxis(cS,e)}translateZ(e){return this.translateOnAxis(fS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(xl,dc,this.up):Ca.lookAt(dc,xl,this.up),this.quaternion.setFromRotationMatrix(Ca),u&&(Ca.extractRotation(u.matrixWorld),Ks.setFromRotationMatrix(Ca),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dS),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(GT),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ca.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ca),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dS),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,FT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,HT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const g=p[m];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(e.materials,this.material[p]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];u.animations.push(f(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),g=d(e.shapes),v=d(e.skeletons),y=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}On.DEFAULT_UP=new $(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VT={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(m,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=S.position.distanceTo(g.position),y=.02,R=.005;m.inputState.pinching&&v>y+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(VT)))}return h!==null&&(h.visible=u!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new hc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Vh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=De.workingColorSpace){if(e=wT(e,1),i=Ne(i,0,1),s=Ne(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Vh(d,f,e+1/3),this.g=Vh(d,f,e),this.b=Vh(d,f,e-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(e,i=di){function s(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const s=Lx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return De.workingToColorSpace(Bn.copy(this),e),Math.round(Ne(Bn.r*255,0,255))*65536+Math.round(Ne(Bn.g*255,0,255))*256+Math.round(Ne(Bn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,u=Bn.g,f=Bn.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=S<=.5?g/(d+h):g/(2-d-h),d){case s:p=(u-f)/g+(u<f?6:0);break;case u:p=(f-s)/g+2;break;case f:p=(s-u)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=di){De.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,u=Bn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+i,gr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(gr),e.getHSL(pc);const s=Ph(gr.h,pc.h,i),u=Ph(gr.s,pc.s,i),f=Ph(gr.l,pc.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Le;Le.NAMES=Lx;class XT extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Oi=new $,wa=new $,Xh=new $,Da=new $,Js=new $,js=new $,hS=new $,kh=new $,Wh=new $,qh=new $,Yh=new sn,Zh=new sn,Kh=new sn;class Ii{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Oi.subVectors(e,i),u.cross(Oi);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Oi.subVectors(u,i),wa.subVectors(s,i),Xh.subVectors(e,i);const d=Oi.dot(Oi),h=Oi.dot(wa),p=Oi.dot(Xh),m=wa.dot(wa),S=wa.dot(Xh),g=d*m-h*h;if(g===0)return f.set(0,0,0),null;const v=1/g,y=(m*p-h*S)*v,R=(d*S-h*p)*v;return f.set(1-y-R,R,y)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,Da)===null?!1:Da.x>=0&&Da.y>=0&&Da.x+Da.y<=1}static getInterpolation(e,i,s,u,f,d,h,p){return this.getBarycoord(e,i,s,u,Da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Da.x),p.addScaledVector(d,Da.y),p.addScaledVector(h,Da.z),p)}static getInterpolatedAttribute(e,i,s,u,f,d){return Yh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),Yh.fromBufferAttribute(e,i),Zh.fromBufferAttribute(e,s),Kh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(Yh,f.x),d.addScaledVector(Zh,f.y),d.addScaledVector(Kh,f.z),d}static isFrontFacing(e,i,s,u){return Oi.subVectors(s,i),wa.subVectors(e,i),Oi.cross(wa).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Oi.cross(wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;Js.subVectors(u,s),js.subVectors(f,s),kh.subVectors(e,s);const p=Js.dot(kh),m=js.dot(kh);if(p<=0&&m<=0)return i.copy(s);Wh.subVectors(e,u);const S=Js.dot(Wh),g=js.dot(Wh);if(S>=0&&g<=S)return i.copy(u);const v=p*g-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(s).addScaledVector(Js,d);qh.subVectors(e,f);const y=Js.dot(qh),R=js.dot(qh);if(R>=0&&y<=R)return i.copy(f);const w=y*m-p*R;if(w<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(js,h);const M=S*R-y*g;if(M<=0&&g-S>=0&&y-R>=0)return hS.subVectors(f,u),h=(g-S)/(g-S+(y-R)),i.copy(u).addScaledVector(hS,h);const x=1/(M+w+v);return d=w*x,h=v*x,i.copy(s).addScaledVector(Js,d).addScaledVector(js,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Pi):Pi.fromBufferAttribute(f,d),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),mc.copy(s.boundingBox)),mc.applyMatrix4(e.matrixWorld),this.union(mc)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),gc.subVectors(this.max,Ml),$s.subVectors(e.a,Ml),to.subVectors(e.b,Ml),eo.subVectors(e.c,Ml),_r.subVectors(to,$s),vr.subVectors(eo,to),Zr.subVectors($s,eo);let i=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-Zr.z,Zr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,Zr.z,0,-Zr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-Zr.y,Zr.x,0];return!Qh(i,$s,to,eo,gc)||(i=[1,0,0,0,1,0,0,0,1],!Qh(i,$s,to,eo,gc))?!1:(_c.crossVectors(_r,vr),i=[_c.x,_c.y,_c.z],Qh(i,$s,to,eo,gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new $,new $,new $,new $,new $,new $,new $,new $],Pi=new $,mc=new zl,$s=new $,to=new $,eo=new $,_r=new $,vr=new $,Zr=new $,Ml=new $,gc=new $,_c=new $,Kr=new $;function Qh(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Kr.fromArray(o,f);const h=u.x*Math.abs(Kr.x)+u.y*Math.abs(Kr.y)+u.z*Math.abs(Kr.z),p=e.dot(Kr),m=i.dot(Kr),S=s.dot(Kr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const vn=new $,vc=new Oe;let kT=0;class Ba extends as{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=TT,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Sl(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Sl(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Sl(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Sl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Sl(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),u=jn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),u=jn(u,this.array),f=jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ox extends Ba{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Px extends Ba{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Fi extends Ba{constructor(e,i,s){super(new Float32Array(e),i,s)}}const WT=new zl,yl=new $,Jh=new $;class Tm{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):WT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const i=yl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(yl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(Jh)),this.expandByPoint(yl.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qT=0;const bi=new nn,jh=new On,no=new $,fi=new zl,El=new zl,An=new $;class da extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=Il(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bT(e)?Px:Ox)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new fe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return jh.lookAt(e),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fi(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];El.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(fi.min,El.min),fi.expandByPoint(An),An.addVectors(fi.max,El.max),fi.expandByPoint(An)):(fi.expandByPoint(El.min),fi.expandByPoint(El.max))}fi.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)An.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(An));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)An.fromBufferAttribute(h,m),p&&(no.fromBufferAttribute(e,m),An.add(no)),u=Math.max(u,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ba(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<s.count;T++)h[T]=new $,p[T]=new $;const m=new $,S=new $,g=new $,v=new Oe,y=new Oe,R=new Oe,w=new $,M=new $;function x(T,L,V){m.fromBufferAttribute(s,T),S.fromBufferAttribute(s,L),g.fromBufferAttribute(s,V),v.fromBufferAttribute(f,T),y.fromBufferAttribute(f,L),R.fromBufferAttribute(f,V),S.sub(m),g.sub(m),y.sub(v),R.sub(v);const B=1/(y.x*R.y-R.x*y.y);isFinite(B)&&(w.copy(S).multiplyScalar(R.y).addScaledVector(g,-y.y).multiplyScalar(B),M.copy(g).multiplyScalar(y.x).addScaledVector(S,-R.x).multiplyScalar(B),h[T].add(w),h[L].add(w),h[V].add(w),p[T].add(M),p[L].add(M),p[V].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let T=0,L=P.length;T<L;++T){const V=P[T],B=V.start,Y=V.count;for(let nt=B,K=B+Y;nt<K;nt+=3)x(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const G=new $,C=new $,N=new $,U=new $;function D(T){N.fromBufferAttribute(u,T),U.copy(N);const L=h[T];G.copy(L),G.sub(N.multiplyScalar(N.dot(L))).normalize(),C.crossVectors(U,L);const B=C.dot(p[T])<0?-1:1;d.setXYZW(T,G.x,G.y,G.z,B)}for(let T=0,L=P.length;T<L;++T){const V=P[T],B=V.start,Y=V.count;for(let nt=B,K=B+Y;nt<K;nt+=3)D(e.getX(nt+0)),D(e.getX(nt+1)),D(e.getX(nt+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ba(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const u=new $,f=new $,d=new $,h=new $,p=new $,m=new $,S=new $,g=new $;if(e)for(let v=0,y=e.count;v<y;v+=3){const R=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),S.subVectors(d,f),g.subVectors(u,f),S.cross(g),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),m.fromBufferAttribute(s,M),h.add(S),p.add(S),m.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(w,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)u.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,f),g.subVectors(u,f),S.cross(g),s.setXYZ(v+0,S.x,S.y,S.z),s.setXYZ(v+1,S.x,S.y,S.z),s.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,g=h.normalized,v=new m.constructor(p.length*S);let y=0,R=0;for(let w=0,M=p.length;w<M;w++){h.isInterleavedBufferAttribute?y=p[w]*h.data.stride+h.offset:y=p[w]*S;for(let x=0;x<S;x++)v[R++]=m[y++]}return new Ba(v,S,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new da,s=this.index.array,u=this.attributes;for(const h in u){const p=u[h],m=e(p,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let S=0,g=m.length;S<g;S++){const v=m[S],y=e(v,s);p.push(y)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const u={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];S.push(y.toJSON(e.data))}S.length>0&&(u[p]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const S=u[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],g=f[m];for(let v=0,y=g.length;v<y;v++)S.push(g[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new $,YT=new $,ZT=new fe;class Mr{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=$h.subVectors(s,i).cross(YT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta($h),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||ZT.getNormalMatrix(e),u=this.coplanarPoint($h).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let KT=0;class Bl extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Il(),this.name="",this.type="Material",this.blending=wl,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dx,this.blendDst=hx,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_T,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lh,this.stencilZFail=Lh,this.stencilZPass=Lh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Mr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Oe().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ua=new $,tp=new $,Sc=new $,xc=new $;class QT{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ua)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ua.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){tp.copy(e).add(i).multiplyScalar(.5),Sc.copy(i).sub(e).normalize(),xc.copy(this.origin).sub(tp);const f=e.distanceTo(i)*.5,d=-this.direction.dot(Sc),h=xc.dot(this.direction),p=-xc.dot(Sc),m=xc.lengthSq(),S=Math.abs(1-d*d);let g,v,y,R;if(S>0)if(g=d*p-h,v=d*h-p,R=f*S,g>=0)if(v>=-R)if(v<=R){const w=1/S;g*=w,v*=w,y=g*(g+d*v+2*h)+v*(d*g+v+2*p)+m}else v=f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v=-f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;else v<=-R?(g=Math.max(0,-(-d*f+h)),v=g>0?-f:Math.min(Math.max(-f,-p),f),y=-g*g+v*(v+2*p)+m):v<=R?(g=0,v=Math.min(Math.max(-f,-p),f),y=v*(v+2*p)+m):(g=Math.max(0,-(d*f+h)),v=g>0?f:Math.min(Math.max(-f,-p),f),y=-g*g+v*(v+2*p)+m);else v=d>0?-f:f,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),u&&u.copy(tp).addScaledVector(Sc,v),y}intersectSphere(e,i){if(e.radius<0)return null;Ua.subVectors(e.center,this.origin);const s=Ua.dot(this.direction),u=Ua.dot(Ua)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(s=(e.min.x-v.x)*m,u=(e.max.x-v.x)*m):(s=(e.max.x-v.x)*m,u=(e.min.x-v.x)*m),S>=0?(f=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(f=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),g>=0?(h=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),s>p||h>u)||((h>s||s!==s)&&(s=h),(p<u||u!==u)&&(u=p),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Ua)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,g=e.x-d.x,v=e.y-d.y,y=e.z-d.z,R=i.x-d.x,w=i.y-d.y,M=i.z-d.z,x=s.x-d.x,P=s.y-d.y,G=s.z-d.z,C=Math.abs(p),N=Math.abs(m),U=Math.abs(S);let D,T,L,V,B,Y,nt,K,tt,q,X,ut;if(C>=N&&C>=U?(L=p,Y=g,tt=R,ut=x,p>=0?(D=m,T=S,V=v,B=y,nt=w,K=M,q=P,X=G):(D=S,T=m,V=y,B=v,nt=M,K=w,q=G,X=P)):N>=U?(L=m,Y=v,tt=w,ut=P,m>=0?(D=S,T=p,V=y,B=g,nt=M,K=R,q=G,X=x):(D=p,T=S,V=g,B=y,nt=R,K=M,q=x,X=G)):(L=S,Y=y,tt=M,ut=G,S>=0?(D=p,T=m,V=g,B=v,nt=R,K=w,q=x,X=P):(D=m,T=p,V=v,B=g,nt=w,K=R,q=P,X=x)),L===0)return null;const at=D/L,ht=T/L,yt=1/L,Qt=V-at*Y,Yt=B-ht*Y,z=nt-at*tt,mt=K-ht*tt,At=q-at*ut,Q=X-ht*ut,dt=At*mt-Q*z,Tt=Qt*Q-Yt*At,It=z*Yt-mt*Qt;if(u){if(dt<0||Tt<0||It<0)return null}else if((dt<0||Tt<0||It<0)&&(dt>0||Tt>0||It>0))return null;const _t=dt+Tt+It;if(_t===0)return null;const Rt=yt*(dt*Y+Tt*tt+It*ut);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kc extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pS=new nn,Qr=new QT,Mc=new Tm,mS=new $,yc=new $,Ec=new $,Tc=new $,ep=new $,bc=new $,gS=new $,Ac=new $;class Pn extends On{constructor(e=new da,i=new Kc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){bc.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const S=h[p],g=f[p];S!==0&&(ep.fromBufferAttribute(g,e),d?bc.addScaledVector(ep,S):bc.addScaledVector(ep.sub(i),S))}i.add(bc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(f),Qr.copy(e.ray).recast(e.near),!(Mc.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Mc,mS)===null||Qr.origin.distanceToSquared(mS)>(e.far-e.near)**2))&&(pS.copy(f).invert(),Qr.copy(e.ray).applyMatrix4(pS),!(s.boundingBox!==null&&Qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Qr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,g=f.attributes.normal,v=f.groups,y=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],P=Math.max(M.start,y.start),G=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,N=G;C<N;C+=3){const U=h.getX(C),D=h.getX(C+1),T=h.getX(C+2);u=Rc(this,x,e,s,m,S,g,U,D,T),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const P=h.getX(M),G=h.getX(M+1),C=h.getX(M+2);u=Rc(this,d,e,s,m,S,g,P,G,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}else if(p!==void 0)if(Array.isArray(d))for(let R=0,w=v.length;R<w;R++){const M=v[R],x=d[M.materialIndex],P=Math.max(M.start,y.start),G=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,N=G;C<N;C+=3){const U=C,D=C+1,T=C+2;u=Rc(this,x,e,s,m,S,g,U,D,T),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=M.materialIndex,i.push(u))}}else{const R=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=R,x=w;M<x;M+=3){const P=M,G=M+1,C=M+2;u=Rc(this,d,e,s,m,S,g,P,G,C),u&&(u.faceIndex=Math.floor(M/3),i.push(u))}}}}function JT(o,e,i,s,u,f,d,h){let p;if(e.side===$n?p=s.intersectTriangle(d,f,u,!0,h):p=s.intersectTriangle(u,f,d,e.side===Fa,h),p===null)return null;Ac.copy(h),Ac.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Ac);return m<i.near||m>i.far?null:{distance:m,point:Ac.clone(),object:o}}function Rc(o,e,i,s,u,f,d,h,p,m){o.getVertexPosition(h,yc),o.getVertexPosition(p,Ec),o.getVertexPosition(m,Tc);const S=JT(o,e,i,s,yc,Ec,Tc,gS);if(S){const g=new $;Ii.getBarycoord(gS,yc,Ec,Tc,g),u&&(S.uv=Ii.getInterpolatedAttribute(u,h,p,m,g,new Oe)),f&&(S.uv1=Ii.getInterpolatedAttribute(f,h,p,m,g,new Oe)),d&&(S.normal=Ii.getInterpolatedAttribute(d,h,p,m,g,new $),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new $,materialIndex:0};Ii.getNormal(yc,Ec,Tc,v.normal),S.face=v,S.barycoord=g}return S}class jT extends Hn{constructor(e=null,i=1,s=1,u,f,d,h,p,m=Ln,S=Ln,g,v){super(null,d,h,p,m,S,u,f,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jr=new Tm,$T=new Oe(.5,.5),Cc=new $;class bm{constructor(e=new Mr,i=new Mr,s=new Mr,u=new Mr,f=new Mr,d=new Mr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=sa,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],p=f[2],m=f[3],S=f[4],g=f[5],v=f[6],y=f[7],R=f[8],w=f[9],M=f[10],x=f[11],P=f[12],G=f[13],C=f[14],N=f[15];if(u[0].setComponents(m-d,y-S,x-R,N-P).normalize(),u[1].setComponents(m+d,y+S,x+R,N+P).normalize(),u[2].setComponents(m+h,y+g,x+w,N+G).normalize(),u[3].setComponents(m-h,y-g,x-w,N-G).normalize(),s)u[4].setComponents(p,v,M,C).normalize(),u[5].setComponents(m-p,y-v,x-M,N-C).normalize();else if(u[4].setComponents(m-p,y-v,x-M,N-C).normalize(),i===sa)u[5].setComponents(m+p,y+v,x+M,N+C).normalize();else if(i===Ol)u[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const i=$T.distanceTo(e.center);return Jr.radius=.7071067811865476+i,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(Cc.x=u.normal.x>0?e.max.x:e.min.x,Cc.y=u.normal.y>0?e.max.y:e.min.y,Cc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ix extends Hn{constructor(e=[],i=ns,s,u,f,d,h,p,m,S){super(e,i,s,u,f,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pl extends Hn{constructor(e,i,s=ua,u,f,d,h=Ln,p=Ln,m,S=Ha,g=1){if(S!==Ha&&S!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,u,f,d,h,p,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Em(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class t1 extends Pl{constructor(e,i=ua,s=ns,u,f,d=Ln,h=Ln,p,m=Ha){const S={width:e,height:e,depth:1},g=[S,S,S,S,S,S];super(e,e,i,s,u,f,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fl extends da{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],S=[],g=[];let v=0,y=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,u,d,2),R("x","z","y",1,-1,e,s,-i,u,d,3),R("x","y","z",1,-1,e,i,s,u,f,4),R("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(p),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(S,3)),this.setAttribute("uv",new Fi(g,2));function R(w,M,x,P,G,C,N,U,D,T,L){const V=C/D,B=N/T,Y=C/2,nt=N/2,K=U/2,tt=D+1,q=T+1;let X=0,ut=0;const at=new $;for(let ht=0;ht<q;ht++){const yt=ht*B-nt;for(let Qt=0;Qt<tt;Qt++){const Yt=Qt*V-Y;at[w]=Yt*P,at[M]=yt*G,at[x]=K,m.push(at.x,at.y,at.z),at[w]=0,at[M]=0,at[x]=U>0?1:-1,S.push(at.x,at.y,at.z),g.push(Qt/D),g.push(1-ht/T),X+=1}}for(let ht=0;ht<T;ht++)for(let yt=0;yt<D;yt++){const Qt=v+yt+tt*ht,Yt=v+yt+tt*(ht+1),z=v+(yt+1)+tt*(ht+1),mt=v+(yt+1)+tt*ht;p.push(Qt,Yt,mt),p.push(Yt,z,mt),ut+=6}h.addGroup(y,ut,L),y+=ut,v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class go extends da{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),p=Math.floor(u),m=h+1,S=p+1,g=e/h,v=i/p,y=[],R=[],w=[],M=[];for(let x=0;x<S;x++){const P=x*v-d;for(let G=0;G<m;G++){const C=G*g-f;R.push(C,-P,0),w.push(0,0,1),M.push(G/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<h;P++){const G=P+m*x,C=P+m*(x+1),N=P+1+m*(x+1),U=P+1+m*x;y.push(G,C,U),y.push(C,N,U)}this.setIndex(y),this.setAttribute("position",new Fi(R,3)),this.setAttribute("normal",new Fi(w,3)),this.setAttribute("uv",new Fi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}function mo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(_S(u))u.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(_S(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function qn(o){const e={};for(let i=0;i<o.length;i++){const s=mo(o[i]);for(const u in s)e[u]=s[u]}return e}function _S(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function e1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Bx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const n1={clone:mo,merge:qn};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fa extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=e1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new Le().setHex(u.value);break;case"v2":this.uniforms[s].value=new Oe().fromArray(u.value);break;case"v3":this.uniforms[s].value=new $().fromArray(u.value);break;case"v4":this.uniforms[s].value=new sn().fromArray(u.value);break;case"m3":this.uniforms[s].value=new fe().fromArray(u.value);break;case"m4":this.uniforms[s].value=new nn().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class r1 extends fa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _o extends Bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qp,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class s1 extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class o1 extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Am extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class l1 extends Am{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const np=new nn,vS=new $,SS=new $;class u1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bm,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;vS.setFromMatrixPosition(e.matrixWorld),i.position.copy(vS),SS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(SS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,u){np.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(np,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=u?u.z/f.x:1,h=u?u.w/f.y:1,p=u?u.x/f.x:0,m=u?u.y/f.y:0;e.coordinateSystem===Ol||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(np)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new $,Dc=new dn,ea=new $;class Fx extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,ea.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(wc,Dc,ea),ea.x===1&&ea.y===1&&ea.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,ea.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new $,xS=new Oe,MS=new Oe;class Ai extends Fx{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Jp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jp*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,i){return this.getViewBounds(e,xS,MS),i.subVectors(MS,xS)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Oh*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/p,i-=d.offsetY*s/m,u*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Rm extends Fx{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,p=u-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class c1 extends u1{constructor(){super(new Rm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f1 extends Am{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new c1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class d1 extends Am{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const io=-90,ao=1;class h1 extends On{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ai(io,ao,e,i);u.layers=this.layers,this.add(u);const f=new Ai(io,ao,e,i);f.layers=this.layers,this.add(f);const d=new Ai(io,ao,e,i);d.layers=this.layers,this.add(d);const h=new Ai(io,ao,e,i);h.layers=this.layers,this.add(h);const p=new Ai(io,ao,e,i);p.layers=this.layers,this.add(p);const m=new Ai(io,ao,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,p]=i;for(const m of i)this.remove(m);if(e===sa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Ol)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,S]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,4,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,u),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(g,v,y),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class p1 extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Im=class Im{constructor(e,i,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,u){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=u,this}};Im.prototype.isMatrix2=!0;let yS=Im;function ES(o,e,i,s){const u=m1(s);switch(i){case Rx:return o*e;case wx:return o*e/u.components*u.byteLength;case vm:return o*e/u.components*u.byteLength;case is:return o*e*2/u.components*u.byteLength;case Sm:return o*e*2/u.components*u.byteLength;case Cx:return o*e*3/u.components*u.byteLength;case zi:return o*e*4/u.components*u.byteLength;case xm:return o*e*4/u.components*u.byteLength;case Pc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zc:case Bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mp:case Ep:return Math.max(o,16)*Math.max(e,8)/4;case xp:case yp:return Math.max(o,8)*Math.max(e,8)/2;case Tp:case bp:case Rp:case Cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ap:case Gc:case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Np:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case zp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Xp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case kp:case Wp:case qp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Yp:case Zp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Vc:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function m1(o){switch(o){case hi:case Ex:return{byteLength:1,components:1};case Ul:case Tx:case ca:return{byteLength:2,components:1};case gm:case _m:return{byteLength:2,components:4};case ua:case mm:case ra:return{byteLength:4,components:1};case bx:case Ax:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);function Hx(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function g1(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,p,m){const S=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,S);else{g.sort((y,R)=>y.start-R.start);let v=0;for(let y=1;y<g.length;y++){const R=g[v],w=g[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++v,g[v]=w)}g.length=v+1;for(let y=0,R=g.length;y<R;y++){const w=g[y];o.bufferSubData(m,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:u,remove:f,update:d}}var _1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v1=`#ifdef USE_ALPHAHASH
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
#endif`,S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E1=`#ifdef USE_AOMAP
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
#endif`,T1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b1=`#ifdef USE_BATCHING
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
#endif`,A1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D1=`#ifdef USE_IRIDESCENCE
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
#endif`,N1=`#ifdef USE_BUMPMAP
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
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,H1=`#define PI 3.141592653589793
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
} // validated`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V1=`vec3 transformedNormal = objectNormal;
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
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ub=`#ifdef USE_ENVMAP
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
#endif`,cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`uniform sampler2D dfgLUT;
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
}`,gb=`
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rb=`#if defined( USE_POINTS_UV )
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
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Db=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hb=`#ifdef USE_NORMALMAP
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
#endif`,Gb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nA=`float getShadowMask() {
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
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aA=`#ifdef USE_SKINNING
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
#endif`,rA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sA=`#ifdef USE_SKINNING
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
#endif`,oA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
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
#endif`,dA=`#ifdef USE_TRANSMISSION
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
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
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
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`#include <common>
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
}`,TA=`#if DEPTH_PACKING == 3200
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
}`,bA=`#define DISTANCE
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
}`,AA=`#define DISTANCE
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`uniform float scale;
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
}`,DA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,UA=`uniform vec3 diffuse;
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
}`,LA=`#define LAMBERT
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
}`,OA=`#define LAMBERT
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
}`,PA=`#define MATCAP
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
}`,IA=`#define MATCAP
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
}`,zA=`#define NORMAL
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
}`,BA=`#define NORMAL
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
}`,FA=`#define PHONG
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
}`,HA=`#define PHONG
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
}`,GA=`#define STANDARD
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
}`,VA=`#define STANDARD
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
}`,XA=`#define TOON
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
}`,kA=`#define TOON
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
}`,WA=`uniform float size;
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
}`,qA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,ZA=`uniform vec3 color;
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
}`,KA=`uniform float rotation;
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
}`,QA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:_1,alphahash_pars_fragment:v1,alphamap_fragment:S1,alphamap_pars_fragment:x1,alphatest_fragment:M1,alphatest_pars_fragment:y1,aomap_fragment:E1,aomap_pars_fragment:T1,batching_pars_vertex:b1,batching_vertex:A1,begin_vertex:R1,beginnormal_vertex:C1,bsdfs:w1,iridescence_fragment:D1,bumpmap_pars_fragment:N1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:L1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:P1,color_fragment:I1,color_pars_fragment:z1,color_pars_vertex:B1,color_vertex:F1,common:H1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:V1,displacementmap_pars_vertex:X1,displacementmap_vertex:k1,emissivemap_fragment:W1,emissivemap_pars_fragment:q1,colorspace_fragment:Y1,colorspace_pars_fragment:Z1,envmap_fragment:K1,envmap_common_pars_fragment:Q1,envmap_pars_fragment:J1,envmap_pars_vertex:j1,envmap_physical_pars_fragment:ub,envmap_vertex:$1,fog_vertex:tb,fog_pars_vertex:eb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:ab,lightmap_pars_fragment:rb,lights_lambert_fragment:sb,lights_lambert_pars_fragment:ob,lights_pars_begin:lb,lights_toon_fragment:cb,lights_toon_pars_fragment:fb,lights_phong_fragment:db,lights_phong_pars_fragment:hb,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:_b,lights_fragment_end:vb,lightprobes_pars_fragment:Sb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Eb,map_fragment:Tb,map_pars_fragment:bb,map_particle_fragment:Ab,map_particle_pars_fragment:Rb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:wb,morphinstance_vertex:Db,morphcolor_vertex:Nb,morphnormal_vertex:Ub,morphtarget_pars_vertex:Lb,morphtarget_vertex:Ob,normal_fragment_begin:Pb,normal_fragment_maps:Ib,normal_pars_fragment:zb,normal_pars_vertex:Bb,normal_vertex:Fb,normalmap_pars_fragment:Hb,clearcoat_normal_fragment_begin:Gb,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:Xb,iridescence_pars_fragment:kb,opaque_fragment:Wb,packing:qb,premultiplied_alpha_fragment:Yb,project_vertex:Zb,dithering_fragment:Kb,dithering_pars_fragment:Qb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:$b,shadowmap_pars_vertex:tA,shadowmap_vertex:eA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:aA,skinning_vertex:rA,skinnormal_vertex:sA,specularmap_fragment:oA,specularmap_pars_fragment:lA,tonemapping_fragment:uA,tonemapping_pars_fragment:cA,transmission_fragment:fA,transmission_pars_fragment:dA,uv_pars_fragment:hA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:gA,background_vert:_A,background_frag:vA,backgroundCube_vert:SA,backgroundCube_frag:xA,cube_vert:MA,cube_frag:yA,depth_vert:EA,depth_frag:TA,distance_vert:bA,distance_frag:AA,equirect_vert:RA,equirect_frag:CA,linedashed_vert:wA,linedashed_frag:DA,meshbasic_vert:NA,meshbasic_frag:UA,meshlambert_vert:LA,meshlambert_frag:OA,meshmatcap_vert:PA,meshmatcap_frag:IA,meshnormal_vert:zA,meshnormal_frag:BA,meshphong_vert:FA,meshphong_frag:HA,meshphysical_vert:GA,meshphysical_frag:VA,meshtoon_vert:XA,meshtoon_frag:kA,points_vert:WA,points_frag:qA,shadow_vert:YA,shadow_frag:ZA,sprite_vert:KA,sprite_frag:QA},Ft={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ia={basic:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:qn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:qn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:qn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:qn([Ft.points,Ft.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:qn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:qn([Ft.common,Ft.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:qn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:qn([Ft.sprite,Ft.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:qn([Ft.common,Ft.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:qn([Ft.lights,Ft.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ia.physical={uniforms:qn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Nc={r:0,b:0,g:0},JA=new nn,Gx=new fe;Gx.set(-1,0,0,0,1,0,0,0,1);function jA(o,e,i,s,u,f){const d=new Le(0);let h=u===!0?0:1,p,m,S=null,g=0,v=null;function y(P){let G=P.isScene===!0?P.background:null;if(G&&G.isTexture){const C=P.backgroundBlurriness>0;G=e.get(G,C)}return G}function R(P){let G=!1;const C=y(P);C===null?M(d,h):C&&C.isColor&&(M(C,1),G=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,f):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(P,G){const C=y(G);C&&(C.isCubeTexture||C.mapping===Zc)?(m===void 0&&(m=new Pn(new Fl(1,1,1),new fa({name:"BackgroundCubeMaterial",uniforms:mo(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,U,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(JA.makeRotationFromEuler(G.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Gx),m.material.toneMapped=De.getTransfer(C.colorSpace)!==Ye,(S!==C||g!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,g=C.version,v=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Pn(new go(2,2),new fa({name:"BackgroundMaterial",uniforms:mo(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,p.material.toneMapped=De.getTransfer(C.colorSpace)!==Ye,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||g!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,g=C.version,v=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function M(P,G){P.getRGB(Nc,Bx(o)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,G,f)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,G=1){d.set(P),h=G,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,M(d,h)},render:R,addToRenderList:w,dispose:x}}function $A(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=v(null);let f=u,d=!1;function h(B,Y,nt,K,tt){let q=!1;const X=g(B,K,nt,Y);f!==X&&(f=X,m(f.object)),q=y(B,K,nt,tt),q&&R(B,K,nt,tt),tt!==null&&e.update(tt,o.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,C(B,Y,nt,K),tt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function p(){return o.createVertexArray()}function m(B){return o.bindVertexArray(B)}function S(B){return o.deleteVertexArray(B)}function g(B,Y,nt,K){const tt=K.wireframe===!0;let q=s[Y.id];q===void 0&&(q={},s[Y.id]=q);const X=B.isInstancedMesh===!0?B.id:0;let ut=q[X];ut===void 0&&(ut={},q[X]=ut);let at=ut[nt.id];at===void 0&&(at={},ut[nt.id]=at);let ht=at[tt];return ht===void 0&&(ht=v(p()),at[tt]=ht),ht}function v(B){const Y=[],nt=[],K=[];for(let tt=0;tt<i;tt++)Y[tt]=0,nt[tt]=0,K[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:nt,attributeDivisors:K,object:B,attributes:{},index:null}}function y(B,Y,nt,K){const tt=f.attributes,q=Y.attributes;let X=0;const ut=nt.getAttributes();for(const at in ut)if(ut[at].location>=0){const yt=tt[at];let Qt=q[at];if(Qt===void 0&&(at==="instanceMatrix"&&B.instanceMatrix&&(Qt=B.instanceMatrix),at==="instanceColor"&&B.instanceColor&&(Qt=B.instanceColor)),yt===void 0||yt.attribute!==Qt||Qt&&yt.data!==Qt.data)return!0;X++}return f.attributesNum!==X||f.index!==K}function R(B,Y,nt,K){const tt={},q=Y.attributes;let X=0;const ut=nt.getAttributes();for(const at in ut)if(ut[at].location>=0){let yt=q[at];yt===void 0&&(at==="instanceMatrix"&&B.instanceMatrix&&(yt=B.instanceMatrix),at==="instanceColor"&&B.instanceColor&&(yt=B.instanceColor));const Qt={};Qt.attribute=yt,yt&&yt.data&&(Qt.data=yt.data),tt[at]=Qt,X++}f.attributes=tt,f.attributesNum=X,f.index=K}function w(){const B=f.newAttributes;for(let Y=0,nt=B.length;Y<nt;Y++)B[Y]=0}function M(B){x(B,0)}function x(B,Y){const nt=f.newAttributes,K=f.enabledAttributes,tt=f.attributeDivisors;nt[B]=1,K[B]===0&&(o.enableVertexAttribArray(B),K[B]=1),tt[B]!==Y&&(o.vertexAttribDivisor(B,Y),tt[B]=Y)}function P(){const B=f.newAttributes,Y=f.enabledAttributes;for(let nt=0,K=Y.length;nt<K;nt++)Y[nt]!==B[nt]&&(o.disableVertexAttribArray(nt),Y[nt]=0)}function G(B,Y,nt,K,tt,q,X){X===!0?o.vertexAttribIPointer(B,Y,nt,tt,q):o.vertexAttribPointer(B,Y,nt,K,tt,q)}function C(B,Y,nt,K){w();const tt=K.attributes,q=nt.getAttributes(),X=Y.defaultAttributeValues;for(const ut in q){const at=q[ut];if(at.location>=0){let ht=tt[ut];if(ht===void 0&&(ut==="instanceMatrix"&&B.instanceMatrix&&(ht=B.instanceMatrix),ut==="instanceColor"&&B.instanceColor&&(ht=B.instanceColor)),ht!==void 0){const yt=ht.normalized,Qt=ht.itemSize,Yt=e.get(ht);if(Yt===void 0)continue;const z=Yt.buffer,mt=Yt.type,At=Yt.bytesPerElement,Q=mt===o.INT||mt===o.UNSIGNED_INT||ht.gpuType===mm;if(ht.isInterleavedBufferAttribute){const dt=ht.data,Tt=dt.stride,It=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<at.locationSize;_t++)x(at.location+_t,dt.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<at.locationSize;_t++)M(at.location+_t);o.bindBuffer(o.ARRAY_BUFFER,z);for(let _t=0;_t<at.locationSize;_t++)G(at.location+_t,Qt/at.locationSize,mt,yt,Tt*At,(It+Qt/at.locationSize*_t)*At,Q)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<at.locationSize;dt++)x(at.location+dt,ht.meshPerAttribute);B.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<at.locationSize;dt++)M(at.location+dt);o.bindBuffer(o.ARRAY_BUFFER,z);for(let dt=0;dt<at.locationSize;dt++)G(at.location+dt,Qt/at.locationSize,mt,yt,Qt*At,Qt/at.locationSize*dt*At,Q)}}else if(X!==void 0){const yt=X[ut];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(at.location,yt);break;case 3:o.vertexAttrib3fv(at.location,yt);break;case 4:o.vertexAttrib4fv(at.location,yt);break;default:o.vertexAttrib1fv(at.location,yt)}}}}P()}function N(){L();for(const B in s){const Y=s[B];for(const nt in Y){const K=Y[nt];for(const tt in K){const q=K[tt];for(const X in q)S(q[X].object),delete q[X];delete K[tt]}}delete s[B]}}function U(B){if(s[B.id]===void 0)return;const Y=s[B.id];for(const nt in Y){const K=Y[nt];for(const tt in K){const q=K[tt];for(const X in q)S(q[X].object),delete q[X];delete K[tt]}}delete s[B.id]}function D(B){for(const Y in s){const nt=s[Y];for(const K in nt){const tt=nt[K];if(tt[B.id]===void 0)continue;const q=tt[B.id];for(const X in q)S(q[X].object),delete q[X];delete tt[B.id]}}}function T(B){for(const Y in s){const nt=s[Y],K=B.isInstancedMesh===!0?B.id:0,tt=nt[K];if(tt!==void 0){for(const q in tt){const X=tt[q];for(const ut in X)S(X[ut].object),delete X[ut];delete tt[q]}delete nt[K],Object.keys(nt).length===0&&delete s[Y]}}}function L(){V(),d=!0,f!==u&&(f=u,m(f.object))}function V(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:L,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function tR(o,e,i){let s;function u(p){s=p}function f(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(s,p,m,S),i.update(m,s,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,S);let v=0;for(let y=0;y<S;y++)v+=m[y];i.update(v,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function eR(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(D){return!(D!==zi&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const T=D===ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==hi&&D!==ra&&!T&&s.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(oe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:G,maxFragmentUniforms:C,maxSamples:N,samples:U}}function nR(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new Mr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||u;return u=v,s=g.length,y},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,v){i=S(g,v,0)},this.setState=function(g,v,y){const R=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!u||R===null||R.length===0||f&&!M)f?S(null):m();else{const P=f?0:s,G=P*4;let C=x.clippingState||null;p.value=C,C=S(R,v,G,y);for(let N=0;N!==G;++N)C[N]=i[N];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(g,v,y,R){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=p.value,R!==!0||M===null){const x=y+w*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let G=0,C=y;G!==w;++G,C+=4)d.copy(g[G]).applyMatrix4(P,h),d.normal.toArray(M,C),M[C+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const lo=4,iR=6,aR=20,rR=256,Tl=new Rm,TS=new Le;let ip=null,ap=0,rp=0,sp=!1;const sR=new $,jr=new $;class bS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=sR}=f;ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,u,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=CS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=RS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,ap,rp),this._renderer.xr.enabled=sp,e.scissorTest=!1,ro(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ns||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),ap=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ca,format:zi,colorSpace:Xc,depthBuffer:!1},u=AS(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=AS(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oR(f)),this._blurMaterial=uR(f,e,i),this._ggxMaterial=lR(f,e,i)}return u}_compileMaterial(e){const i=new Pn(new da,e);this._renderer.compile(i,Tl)}_sceneToCubeUV(e,i,s,u,f){const p=new Ai(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(TS),g.toneMapping=oa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(u),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new Fl,new Kc({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,x=!0):(M.color.copy(TS),x=!0);for(let G=0;G<6;G++){const C=G%3;C===0?(p.up.set(0,m[G],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+S[G],f.y,f.z)):C===1?(p.up.set(0,0,m[G]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+S[G],f.z)):(p.up.set(0,m[G],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+S[G]));const N=this._cubeSize;ro(u,C*N,G>2?N:0,N,N),g.setRenderTarget(u),x&&g.render(w,p),g.render(e,p)}g.toneMapping=y,g.autoClear=v,e.background=P}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===ns||e.mapping===po;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=CS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=RS());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const p=this._cubeSize;ro(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,Tl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-S*S),v=m*1.25,y=g*v,{_lodMax:R}=this,w=this._sizeLods[s],M=3*w*(s>R-lo?s-R+lo:0),x=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=R-i,ro(f,M,x,3*w,2*w),u.setRenderTarget(f),u.render(h,Tl),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=R-s,ro(e,M,x,3*w,2*w),u.setRenderTarget(e),u.render(h,Tl)}_blur(e,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,u,f){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[u];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[u],g=3*S*(u>this._lodMax-lo?u-this._lodMax+lo:0),v=4*(this._cubeSize-S);ro(i,g,v,3*S,2*S),d.setRenderTarget(i),d.render(p,Tl)}}function oR(o){const e=[],i=[];let s=o;const u=o-lo+1+iR;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,y=3,R=new Float32Array(y*v*g),w=new Float32Array(y*v*g);for(let x=0;x<g;x++){const P=x%3*2/3-1,G=x>2?0:-1,C=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];R.set(C,y*v*x);for(let N=0;N<v;N++){const U=S[N*2]*2-1,D=S[N*2+1]*2-1;x===0?jr.set(1,D,U):x===1?jr.set(-U,1,-D):x===2?jr.set(-U,D,1):x===3?jr.set(-1,D,-U):x===4?jr.set(-U,-1,D):jr.set(U,D,-1),jr.toArray(w,(x*v+N)*y)}}const M=new da;M.setAttribute("position",new Ba(R,y)),M.setAttribute("outputDirection",new Ba(w,y)),i.push(new Pn(M,null)),s>lo&&s--}return{lodMeshes:i,sizeLods:e}}function AS(o,e,i){const s=new Bi(o,e,i);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ro(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function lR(o,e,i){return new fa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function uR(o,e,i){return new fa({name:"SphericalGaussianBlur",defines:{SAMPLES:aR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function RS(){return new fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function CS(){return new fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function Qc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Vx extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new Ix(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Fl(5,5,5),f=new fa({name:"CubemapFromEquirect",uniforms:mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Ia});f.uniforms.tEquirect.value=i;const d=new Pn(u,f),h=i.minFilter;return i.minFilter===ts&&(i.minFilter=Fn),new h1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}function cR(o){let e=new WeakMap,i=new WeakMap,s=null;function u(v,y=!1){return v==null?null:y?d(v):f(v)}function f(v){if(v&&v.isTexture){const y=v.mapping;if(y===Dh||y===Nh)if(e.has(v)){const R=e.get(v).texture;return h(R,v.mapping)}else{const R=v.image;if(R&&R.height>0){const w=new Vx(R.height);return w.fromEquirectangularTexture(o,v),e.set(v,w),v.addEventListener("dispose",m),h(w.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const y=v.mapping,R=y===Dh||y===Nh,w=y===ns||y===po;if(R||w){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new bS(o)),M=R?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const P=v.image;return R&&P&&P.height>0||w&&P&&p(P)?(s===null&&(s=new bS(o)),M=R?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,y){return y===Dh?v.mapping=ns:y===Nh&&(v.mapping=po),v}function p(v){let y=0;const R=6;for(let w=0;w<R;w++)v[w]!==void 0&&y++;return y===R}function m(v){const y=v.target;y.removeEventListener("dispose",m);const R=e.get(y);R!==void 0&&(e.delete(y),R.dispose())}function S(v){const y=v.target;y.removeEventListener("dispose",S);const R=i.get(y);R!==void 0&&(i.delete(y),R.dispose())}function g(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:g}}function fR(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&uo("WebGLRenderer: "+s+" extension not supported."),u}}}function dR(o,e,i,s){const u={},f=new WeakMap;function d(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",d),delete u[v.id];const y=f.get(v);y&&(e.remove(y),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return u[v.id]===!0||(v.addEventListener("dispose",d),u[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,R=g.attributes.position;let w=0;if(R===void 0)return;if(y!==null){const P=y.array;w=y.version;for(let G=0,C=P.length;G<C;G+=3){const N=P[G+0],U=P[G+1],D=P[G+2];v.push(N,U,U,D,D,N)}}else{const P=R.array;w=R.version;for(let G=0,C=P.length/3-1;G<C;G+=3){const N=G+0,U=G+1,D=G+2;v.push(N,U,U,D,D,N)}}const M=new(R.count>=65535?Px:Ox)(v,1);M.version=w;const x=f.get(g);x&&e.remove(x),f.set(g,M)}function S(g){const v=f.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return f.get(g)}return{get:h,update:p,getWireframeAttribute:S}}function hR(o,e,i){let s;function u(g){s=g}let f,d;function h(g){f=g.type,d=g.bytesPerElement}function p(g,v){o.drawElements(s,v,f,g*d),i.update(v,s,1)}function m(g,v,y){y!==0&&(o.drawElementsInstanced(s,v,f,g*d,y),i.update(v,s,y))}function S(g,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,g,0,y);let w=0;for(let M=0;M<y;M++)w+=v[M];i.update(w,s,1)}this.setMode=u,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function pR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:ze("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function mR(o,e,i){const s=new WeakMap,u=new sn;function f(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=S!==void 0?S.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let V=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var y=V;v!==void 0&&v.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let N=h.attributes.position.count*C,U=1;N>e.maxTextureSize&&(U=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const D=new Float32Array(N*U*4*g),T=new Nx(D,N,U,g);T.type=ra,T.needsUpdate=!0;const L=C*4;for(let B=0;B<g;B++){const Y=x[B],nt=P[B],K=G[B],tt=N*U*4*B;for(let q=0;q<Y.count;q++){const X=q*L;R===!0&&(u.fromBufferAttribute(Y,q),D[tt+X+0]=u.x,D[tt+X+1]=u.y,D[tt+X+2]=u.z,D[tt+X+3]=0),w===!0&&(u.fromBufferAttribute(nt,q),D[tt+X+4]=u.x,D[tt+X+5]=u.y,D[tt+X+6]=u.z,D[tt+X+7]=0),M===!0&&(u.fromBufferAttribute(K,q),D[tt+X+8]=u.x,D[tt+X+9]=u.y,D[tt+X+10]=u.z,D[tt+X+11]=K.itemSize===4?u.w:1)}}v={count:g,texture:T,size:new Oe(N,U)},s.set(h,v),h.addEventListener("dispose",V)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let M=0;M<m.length;M++)R+=m[M];const w=h.morphTargetsRelative?1:1-R;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:f}}function gR(o,e,i,s,u){let f=new WeakMap;function d(m){const S=u.render.frame,g=m.geometry,v=e.get(m,g);if(f.get(v)!==S&&(e.update(v),f.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const y=m.skeleton;f.get(y)!==S&&(y.update(),f.set(y,S))}return v}function h(){f=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const _R={[mx]:"LINEAR_TONE_MAPPING",[gx]:"REINHARD_TONE_MAPPING",[_x]:"CINEON_TONE_MAPPING",[vx]:"ACES_FILMIC_TONE_MAPPING",[xx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function vR(o,e,i,s,u,f){const d=new Bi(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new da;m.setAttribute("position",new Fi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Fi([0,2,0,0,2,0],2));const S=new r1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Pn(m,S),v=new Rm(-1,1,1,-1,0,1);let y=null,R=null,w=!1,M,x=null,P=[],G=!1;this.setSize=function(C,N){d.setSize(C,N),h!==null&&h.setSize(C,N),p!==null&&p.setSize(C,N);for(let U=0;U<P.length;U++){const D=P[U];D.setSize&&D.setSize(C,N)}},this.setEffects=function(C){P=C,G=P.length>0&&P[0].isRenderPass===!0;const N=d.width,U=d.height;P.length>0&&h===null&&(h=new Bi(N,U,{type:ca,depthBuffer:!1,stencilBuffer:!1}),p=new Bi(N,U,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<P.length;D++){const T=P[D];T.setSize&&T.setSize(N,U)}},this.begin=function(C,N){if(w||C.toneMapping===oa&&P.length===0)return!1;if(x=N,N!==null){const U=N.width,D=N.height;(d.width!==U||d.height!==D)&&this.setSize(U,D)}return G===!1&&C.setRenderTarget(d),M=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return G},this.end=function(C,N){C.toneMapping=M,w=!0;let U=d,D=h;for(let T=0;T<P.length;T++){const L=P[T];L.enabled!==!1&&(L.render(C,D,U,N),L.needsSwap!==!1&&(U=D,D=D===h?p:h))}if(y!==C.outputColorSpace||R!==C.toneMapping){y=C.outputColorSpace,R=C.toneMapping,S.defines={},De.getTransfer(y)===Ye&&(S.defines.SRGB_TRANSFER="");const T=_R[R];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=U.texture,C.setRenderTarget(x),C.render(g,v),x=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const Xx=new Hn,jp=new Pl(1,1),kx=new Nx,Wx=new PT,qx=new Ix,wS=[],DS=[],NS=new Float32Array(16),US=new Float32Array(9),LS=new Float32Array(4);function vo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=wS[u];if(f===void 0&&(f=new Float32Array(u),wS[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Jc(o,e){let i=DS[e];i===void 0&&(i=new Int32Array(e),DS[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function SR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function xR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function MR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function yR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function ER(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;LS.set(s),o.uniformMatrix2fv(this.addr,!1,LS),yn(i,s)}}function TR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;US.set(s),o.uniformMatrix3fv(this.addr,!1,US),yn(i,s)}}function bR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Mn(i,s))return;NS.set(s),o.uniformMatrix4fv(this.addr,!1,NS),yn(i,s)}}function AR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function RR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function CR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function wR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function DR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function NR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function UR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function LR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function OR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(jp.compareFunction=i.isReversedDepthBuffer()?ym:Mm,f=jp):f=Xx,i.setTexture2D(e||f,u)}function PR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||Wx,u)}function IR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||qx,u)}function zR(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||kx,u)}function BR(o){switch(o){case 5126:return SR;case 35664:return xR;case 35665:return MR;case 35666:return yR;case 35674:return ER;case 35675:return TR;case 35676:return bR;case 5124:case 35670:return AR;case 35667:case 35671:return RR;case 35668:case 35672:return CR;case 35669:case 35673:return wR;case 5125:return DR;case 36294:return NR;case 36295:return UR;case 36296:return LR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return PR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return zR}}function FR(o,e){o.uniform1fv(this.addr,e)}function HR(o,e){const i=vo(e,this.size,2);o.uniform2fv(this.addr,i)}function GR(o,e){const i=vo(e,this.size,3);o.uniform3fv(this.addr,i)}function VR(o,e){const i=vo(e,this.size,4);o.uniform4fv(this.addr,i)}function XR(o,e){const i=vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function kR(o,e){const i=vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WR(o,e){const i=vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function qR(o,e){o.uniform1iv(this.addr,e)}function YR(o,e){o.uniform2iv(this.addr,e)}function ZR(o,e){o.uniform3iv(this.addr,e)}function KR(o,e){o.uniform4iv(this.addr,e)}function QR(o,e){o.uniform1uiv(this.addr,e)}function JR(o,e){o.uniform2uiv(this.addr,e)}function jR(o,e){o.uniform3uiv(this.addr,e)}function $R(o,e){o.uniform4uiv(this.addr,e)}function t3(o,e,i){const s=this.cache,u=e.length,f=Jc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=jp:d=Xx;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function e3(o,e,i){const s=this.cache,u=e.length,f=Jc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||Wx,f[d])}function n3(o,e,i){const s=this.cache,u=e.length,f=Jc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||qx,f[d])}function i3(o,e,i){const s=this.cache,u=e.length,f=Jc(i,u);Mn(s,f)||(o.uniform1iv(this.addr,f),yn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||kx,f[d])}function a3(o){switch(o){case 5126:return FR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return XR;case 35675:return kR;case 35676:return WR;case 5124:case 35670:return qR;case 35667:case 35671:return YR;case 35668:case 35672:return ZR;case 35669:case 35673:return KR;case 5125:return QR;case 36294:return JR;case 36295:return jR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}class r3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=BR(i.type)}}class s3{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=a3(i.type)}}class o3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const op=/(\w+)(\])?(\[|\.)?/g;function OS(o,e){o.seq.push(e),o.map[e.id]=e}function l3(o,e,i){const s=o.name,u=s.length;for(op.lastIndex=0;;){const f=op.exec(s),d=op.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===u){OS(i,m===void 0?new r3(h,o,e):new s3(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new o3(h),OS(i,g)),i=g}}}class Fc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);l3(h,p,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function PS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const u3=37297;let c3=0;function f3(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const IS=new fe;function d3(o){De._getMatrix(IS,De.workingColorSpace,o);const e=`mat3( ${IS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case kc:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function zS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+f3(o.getShaderSource(e),h)}else return f}function h3(o,e){const i=d3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const p3={[mx]:"Linear",[gx]:"Reinhard",[_x]:"Cineon",[vx]:"ACESFilmic",[xx]:"AgX",[Mx]:"Neutral",[Sx]:"Custom"};function m3(o,e){const i=p3[e];return i===void 0?(oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new $;function g3(){De.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function v3(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function S3(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Cl(o){return o!==""}function BS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function FS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x3=/^[ \t]*#include +<([\w\d./]+)>/gm;function $p(o){return o.replace(x3,y3)}const M3=new Map;function y3(o,e){let i=me[e];if(i===void 0){const s=M3.get(e);if(s!==void 0)i=me[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $p(i)}const E3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function HS(o){return o.replace(E3,T3)}function T3(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function GS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const b3={[Oc]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function A3(o){return b3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R3={[ns]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function C3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":R3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const w3={[po]:"ENVMAP_MODE_REFRACTION"};function D3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":w3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N3={[px]:"ENVMAP_BLENDING_MULTIPLY",[dT]:"ENVMAP_BLENDING_MIX",[hT]:"ENVMAP_BLENDING_ADD"};function U3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":N3[o.combine]||"ENVMAP_BLENDING_NONE"}function L3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function O3(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=A3(i),m=C3(i),S=D3(i),g=U3(i),v=L3(i),y=_3(i),R=v3(f),w=u.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Cl).join(`
`),x.length>0&&(x+=`
`)):(M=[GS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),x=[GS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?me.tonemapping_pars_fragment:"",i.toneMapping!==oa?m3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,h3("linearToOutputTexel",i.outputColorSpace),g3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cl).join(`
`)),d=$p(d),d=BS(d,i),d=FS(d,i),h=$p(h),h=BS(h,i),h=FS(h,i),d=HS(d),h=HS(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===tS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=P+M+d,C=P+x+h,N=PS(u,u.VERTEX_SHADER,G),U=PS(u,u.FRAGMENT_SHADER,C);u.attachShader(w,N),u.attachShader(w,U),i.index0AttributeName!==void 0?u.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function D(B){if(o.debug.checkShaderErrors){const Y=u.getProgramInfoLog(w)||"",nt=u.getShaderInfoLog(N)||"",K=u.getShaderInfoLog(U)||"",tt=Y.trim(),q=nt.trim(),X=K.trim();let ut=!0,at=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,N,U);else{const ht=zS(u,N,"vertex"),yt=zS(u,U,"fragment");ze("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+tt+`
`+ht+`
`+yt)}else tt!==""?oe("WebGLProgram: Program Info Log:",tt):(q===""||X==="")&&(at=!1);at&&(B.diagnostics={runnable:ut,programLog:tt,vertexShader:{log:q,prefix:M},fragmentShader:{log:X,prefix:x}})}u.deleteShader(N),u.deleteShader(U),T=new Fc(u,w),L=S3(u,w)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=u.getProgramParameter(w,u3)),V},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=c3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=U,this}let P3=0;class I3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new z3(e),i.set(e,s)),s}}class z3{constructor(e){this.id=P3++,this.code=e,this.usedTimes=0}}function B3(o){return o===is||o===Gc||o===Vc}function F3(o,e,i,s,u,f){const d=new Ux,h=new I3,p=new Set,m=[],S=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,L,V,B,Y,nt){const K=B.fog,tt=Y.geometry,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ut=e.get(T.envMap||q,X),at=ut&&ut.mapping===Zc?ut.image.height:null,ht=y[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const yt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Qt=yt!==void 0?yt.length:0;let Yt=0;tt.morphAttributes.position!==void 0&&(Yt=1),tt.morphAttributes.normal!==void 0&&(Yt=2),tt.morphAttributes.color!==void 0&&(Yt=3);let z,mt,At,Q;if(ht){const Ce=ia[ht];z=Ce.vertexShader,mt=Ce.fragmentShader}else{z=T.vertexShader,mt=T.fragmentShader;const Ce=h.getVertexShaderStage(T),ue=h.getFragmentShaderStage(T);h.update(T,Ce,ue),At=Ce.id,Q=ue.id}const dt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),It=Y.isInstancedMesh===!0,_t=Y.isBatchedMesh===!0,Rt=!!T.map,Ve=!!T.matcap,pe=!!ut,ge=!!T.aoMap,xe=!!T.lightMap,ee=!!T.bumpMap&&T.wireframe===!1,ie=!!T.normalMap,Xe=!!T.displacementMap,hn=!!T.emissiveMap,Ie=!!T.metalnessMap,tn=!!T.roughnessMap,W=T.anisotropy>0,an=T.clearcoat>0,Pe=T.dispersion>0,O=T.retroreflectivity>0,E=T.iridescence>0,et=T.sheen>0,lt=T.transmission>0,pt=W&&!!T.anisotropyMap,bt=an&&!!T.clearcoatMap,Dt=an&&!!T.clearcoatNormalMap,gt=an&&!!T.clearcoatRoughnessMap,Mt=E&&!!T.iridescenceMap,wt=E&&!!T.iridescenceThicknessMap,jt=et&&!!T.sheenColorMap,Pt=et&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Vt=!!T.specularColorMap,ne=!!T.specularIntensityMap,le=lt&&!!T.transmissionMap,k=lt&&!!T.thicknessMap,Ct=!!T.gradientMap,xt=!!T.alphaMap,Nt=T.alphaTest>0,Gt=!!T.alphaHash,Et=!!T.extensions;let Jt=oa;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Ht={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:mt,defines:T.defines,customVertexShaderID:At,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:_t,batchingColor:_t&&Y._colorsTexture!==null,instancing:It,instancingColor:It&&Y.instanceColor!==null,instancingMorph:It&&Y.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Rt,matcap:Ve,envMap:pe,envMapMode:pe&&ut.mapping,envMapCubeUVHeight:at,aoMap:ge,lightMap:xe,bumpMap:ee,normalMap:ie,displacementMap:Xe,emissiveMap:hn,normalMapObjectSpace:ie&&T.normalMapType===gT,normalMapTangentSpace:ie&&T.normalMapType===Qp,packedNormalMap:ie&&T.normalMapType===Qp&&B3(T.normalMap.format),metalnessMap:Ie,roughnessMap:tn,anisotropy:W,anisotropyMap:pt,clearcoat:an,clearcoatMap:bt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:gt,dispersion:Pe,retroreflection:O,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:wt,sheen:et,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Vt,specularIntensityMap:ne,transmission:lt,transmissionMap:le,thicknessMap:k,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===wl&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:Nt,alphaHash:Gt,combine:T.combine,mapUv:Rt&&R(T.map.channel),aoMapUv:ge&&R(T.aoMap.channel),lightMapUv:xe&&R(T.lightMap.channel),bumpMapUv:ee&&R(T.bumpMap.channel),normalMapUv:ie&&R(T.normalMap.channel),displacementMapUv:Xe&&R(T.displacementMap.channel),emissiveMapUv:hn&&R(T.emissiveMap.channel),metalnessMapUv:Ie&&R(T.metalnessMap.channel),roughnessMapUv:tn&&R(T.roughnessMap.channel),anisotropyMapUv:pt&&R(T.anisotropyMap.channel),clearcoatMapUv:bt&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&R(T.sheenRoughnessMap.channel),specularMapUv:Ot&&R(T.specularMap.channel),specularColorMapUv:Vt&&R(T.specularColorMap.channel),specularIntensityMapUv:ne&&R(T.specularIntensityMap.channel),transmissionMapUv:le&&R(T.transmissionMap.channel),thicknessMapUv:k&&R(T.thicknessMap.channel),alphaMapUv:xt&&R(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ie||W),vertexNormals:!!tt.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!tt.attributes.uv&&(Rt||xt),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&ie===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Tt,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:Yt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===Ye,decodeVideoTextureEmissive:hn&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===Ye,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Oa,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Et&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&T.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function M(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)L.push(V),L.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(x(L,T),P(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numSunLights),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numSunLightShadows),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function P(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function G(T){const L=y[T.type];let V;if(L){const B=ia[L];V=n1.clone(B.uniforms)}else V=T.uniforms;return V}function C(T,L){let V=S.get(L);return V!==void 0?++V.usedTimes:(V=new O3(o,L,T,u),m.push(V),S.set(L,V)),V}function N(T){if(--T.usedTimes===0){const L=m.indexOf(T);m[L]=m[m.length-1],m.pop(),S.delete(T.cacheKey),T.destroy()}}function U(T){h.remove(T)}function D(){h.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:G,acquireProgram:C,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:D}}function H3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function G3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function VS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function XS(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,R,w,M,x){let P=o[e];return P===void 0?(P={id:v.id,object:v,geometry:y,material:R,materialVariant:d(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:x},o[e]=P):(P.id=v.id,P.object=v,P.geometry=y,P.material=R,P.materialVariant=d(v),P.groupOrder=w,P.renderOrder=v.renderOrder,P.z=M,P.group=x),e++,P}function p(v,y,R,w,M,x,P){P.reversedDepth===!0&&(M=-M);const G=h(v,y,R,w,M,x);R.transmission>0?s.push(G):R.transparent===!0?u.push(G):i.push(G)}function m(v,y,R,w,M,x){const P=h(v,y,R,w,M,x);R.transmission>0?s.unshift(P):R.transparent===!0?u.unshift(P):i.unshift(P)}function S(v,y){i.length>1&&i.sort(v||G3),s.length>1&&s.sort(y||VS),u.length>1&&u.sort(y||VS)}function g(){for(let v=e,y=o.length;v<y;v++){const R=o[v];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:p,unshift:m,finish:g,sort:S}}function V3(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new XS,o.set(s,[d])):u>=f.length?(d=new XS,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function X3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new $,color:new Le};break;case"SpotLight":i={position:new $,direction:new $,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function k3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let W3=0;function q3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Y3(o){const e=new X3,i=k3(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new $);const u=new $,f=new nn,d=new nn;function h(m){let S=0,g=0,v=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let y=0,R=0,w=0,M=0,x=0,P=0,G=0,C=0,N=0,U=0,D=0,T=0,L=0,V=0;m.sort(q3);for(let Y=0,nt=m.length;Y<nt;Y++){const K=m[Y],tt=K.color,q=K.intensity,X=K.distance;let ut=null;if(K.shadow&&K.shadow.map&&(K.shadow.map.texture.format===is?ut=K.shadow.map.texture:ut=K.shadow.map.depthTexture||K.shadow.map.texture),K.isAmbientLight)S+=tt.r*q,g+=tt.g*q,v+=tt.b*q;else if(K.isLightProbe){for(let at=0;at<9;at++)s.probe[at].addScaledVector(K.sh.coefficients[at],q);V++}else if(K.isSunLight){const at=e.get(K);if(at.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ht=K.shadow,yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),s.sunShadow[R]=yt,s.sunShadowMap[R]=ut;const Qt=ht.getViewportCount();for(let Yt=0;Yt<Qt;Yt++)s.sunShadowMatrix[w+Yt]=ht.getMatrix(Yt),s.sunShadowCascade[w+Yt]=ht._cascadeData[Yt];w+=Qt,R++}s.sun[y]=at,y++}else if(K.isDirectionalLight){const at=e.get(K);if(at.color.copy(K.color).multiplyScalar(K.intensity),K.castShadow){const ht=K.shadow,yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,s.directionalShadow[M]=yt,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=K.shadow.matrix,N++}s.directional[M]=at,M++}else if(K.isSpotLight){const at=e.get(K);at.position.setFromMatrixPosition(K.matrixWorld),at.color.copy(tt).multiplyScalar(q),at.distance=X,at.coneCos=Math.cos(K.angle),at.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),at.decay=K.decay,s.spot[P]=at;const ht=K.shadow;if(K.map&&(s.spotLightMap[T]=K.map,T++,ht.updateMatrices(K),K.castShadow&&L++),s.spotLightMatrix[P]=ht.matrix,K.castShadow){const yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,s.spotShadow[P]=yt,s.spotShadowMap[P]=ut,D++}P++}else if(K.isRectAreaLight){const at=e.get(K);at.color.copy(tt).multiplyScalar(q),at.halfWidth.set(K.width*.5,0,0),at.halfHeight.set(0,K.height*.5,0),s.rectArea[G]=at,G++}else if(K.isPointLight){const at=e.get(K);if(at.color.copy(K.color).multiplyScalar(K.intensity),at.distance=K.distance,at.decay=K.decay,K.castShadow){const ht=K.shadow,yt=i.get(K);yt.shadowIntensity=ht.intensity,yt.shadowBias=ht.bias,yt.shadowNormalBias=ht.normalBias,yt.shadowRadius=ht.radius,yt.shadowMapSize=ht.mapSize,yt.shadowCameraNear=ht.camera.near,yt.shadowCameraFar=ht.camera.far,s.pointShadow[x]=yt,s.pointShadowMap[x]=ut,s.pointShadowMatrix[x]=K.shadow.matrix,U++}s.point[x]=at,x++}else if(K.isHemisphereLight){const at=e.get(K);at.skyColor.copy(K.color).multiplyScalar(q),at.groundColor.copy(K.groundColor).multiplyScalar(q),s.hemi[C]=at,C++}}G>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=g,s.ambient[2]=v;const B=s.hash;(B.sunLength!==y||B.directionalLength!==M||B.pointLength!==x||B.spotLength!==P||B.rectAreaLength!==G||B.hemiLength!==C||B.numSunShadows!==R||B.numDirectionalShadows!==N||B.numPointShadows!==U||B.numSpotShadows!==D||B.numSpotMaps!==T||B.numLightProbes!==V)&&(s.sun.length=y,s.directional.length=M,s.spot.length=P,s.rectArea.length=G,s.point.length=x,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=U,s.pointShadowMap.length=U,s.pointShadowMatrix.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.spotLightMatrix.length=D+T-L,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=V,B.sunLength=y,B.directionalLength=M,B.pointLength=x,B.spotLength=P,B.rectAreaLength=G,B.hemiLength=C,B.numSunShadows=R,B.numDirectionalShadows=N,B.numPointShadows=U,B.numSpotShadows=D,B.numSpotMaps=T,B.numLightProbes=V,s.version=W3++)}function p(m,S){let g=0,v=0,y=0,R=0,w=0,M=0;const x=S.matrixWorldInverse;for(let P=0,G=m.length;P<G;P++){const C=m[P];if(C.isSunLight){const N=s.sun[g];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),g++}else if(C.isDirectionalLight){const N=s.directional[v];N.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(x),v++}else if(C.isSpotLight){const N=s.spot[R];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),N.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(x),R++}else if(C.isRectAreaLight){const N=s.rectArea[w];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),d.identity(),f.copy(C.matrixWorld),f.premultiply(x),d.extractRotation(f),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const N=s.point[y];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(x),y++}else if(C.isHemisphereLight){const N=s.hemi[M];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:s}}function kS(o){const e=new Y3(o),i=[],s=[],u=[];function f(v){g.camera=v,i.length=0,s.length=0,u.length=0}function d(v){i.push(v)}function h(v){s.push(v)}function p(v){u.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:g,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function Z3(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new kS(o),e.set(u,[h])):f>=d.length?(h=new kS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const K3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q3=`uniform sampler2D shadow_pass;
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
}`,J3=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],j3=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],WS=new nn,bl=new $,lp=new $;function $3(o,e,i){let s=new bm;const u=new Oe,f=new Oe,d=new sn,h=new s1,p=new o1,m={},S=i.maxTextureSize,g={[Fa]:$n,[$n]:Fa,[Oa]:Oa},v=new fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:K3,fragmentShader:Q3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const R=new da;R.setAttribute("position",new Ba(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Pn(R,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let x=this.type;this.render=function(U,D,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===YE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oc);const L=o.getRenderTarget(),V=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Ia),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const nt=x!==this.type;nt&&D.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(tt=>tt.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,tt=U.length;K<tt;K++){const q=U[K],X=q.shadow;if(X===void 0){oe("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;u.copy(X.mapSize);const ut=X.getFrameExtents();u.multiply(ut),f.copy(X.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/ut.x),u.x=f.x*ut.x,X.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/ut.y),u.y=f.y*ut.y,X.mapSize.y=f.y));const at=o.state.buffers.depth.getReversed();if(X.camera._reversedDepth=at,X.map===null||nt===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Rl){if(q.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Bi(u.x,u.y,{format:is,type:ca,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Pl(u.x,u.y,ra),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Ha,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ln,X.map.depthTexture.magFilter=Ln}else q.isPointLight?(X.map=new Vx(u.x),X.map.depthTexture=new t1(u.x,ua)):(X.map=new Bi(u.x,u.y),X.map.depthTexture=new Pl(u.x,u.y,ua)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Ha,this.type===Oc?(X.map.depthTexture.compareFunction=at?ym:Mm,X.map.depthTexture.minFilter=Fn,X.map.depthTexture.magFilter=Fn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ln,X.map.depthTexture.magFilter=Ln);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==u.x||X.map.height!==u.y)&&X.map.setSize(u.x,u.y);const ht=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,T);for(let yt=0;yt<ht;yt++){const Qt=X.getCamera(yt);if(q.isPointLight){const Yt=X.camera,z=X.matrix,mt=q.distance||Yt.far;mt!==Yt.far&&(Yt.far=mt,Yt.updateProjectionMatrix()),bl.setFromMatrixPosition(q.matrixWorld),Yt.position.copy(bl),lp.copy(Yt.position),lp.add(J3[yt]),Yt.up.copy(j3[yt]),Yt.lookAt(lp),Yt.updateMatrixWorld(),z.makeTranslation(-bl.x,-bl.y,-bl.z),WS.multiplyMatrices(Yt.projectionMatrix,Yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(WS,Yt.coordinateSystem,Yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)o.setRenderTarget(X.map,yt),o.clear();else{yt===0&&(o.setRenderTarget(X.map),o.clear());const Yt=X.getViewport(yt);d.set(f.x*Yt.x,f.y*Yt.y,f.x*Yt.z,f.y*Yt.w),Y.viewport(d)}s=X.getFrustum(yt),C(D,T,Qt,q,this.type)}X.isPointLightShadow!==!0&&this.type===Rl&&P(X,T),X.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(L,V,B)};function P(U,D){const T=e.update(w);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null?U.mapPass=new Bi(u.x,u.y,{format:is,type:ca}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value.set(U.map.width,U.map.height),v.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(D,null,T,v,w,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value.set(U.map.width,U.map.height),y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(D,null,T,y,w,null)}function G(U,D,T,L){let V=null;const B=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)V=B;else if(V=T.isPointLight===!0?p:h,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Y=V.uuid,nt=D.uuid;let K=m[Y];K===void 0&&(K={},m[Y]=K);let tt=K[nt];tt===void 0&&(tt=V.clone(),K[nt]=tt,D.addEventListener("dispose",N)),V=tt}if(V.visible=D.visible,V.wireframe=D.wireframe,L===Rl?V.side=D.shadowSide!==null?D.shadowSide:D.side:V.side=D.shadowSide!==null?D.shadowSide:g[D.side],V.alphaMap=D.alphaMap,V.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,V.map=D.map,V.clipShadows=D.clipShadows,V.clippingPlanes=D.clippingPlanes,V.clipIntersection=D.clipIntersection,V.displacementMap=D.displacementMap,V.displacementScale=D.displacementScale,V.displacementBias=D.displacementBias,V.wireframeLinewidth=D.wireframeLinewidth,V.linewidth=D.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const Y=o.properties.get(V);Y.light=T}return V}function C(U,D,T,L,V){if(U.visible===!1)return;if(U.layers.test(D.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&V===Rl)&&(!U.frustumCulled||U.intersectsFrustum(s))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const nt=e.update(U),K=U.material;if(Array.isArray(K)){const tt=nt.groups;for(let q=0,X=tt.length;q<X;q++){const ut=tt[q],at=K[ut.materialIndex];if(at&&at.visible){const ht=G(U,at,L,V);U.onBeforeShadow(o,U,D,T,nt,ht,ut),o.renderBufferDirect(T,null,nt,ht,U,ut),U.onAfterShadow(o,U,D,T,nt,ht,ut)}}}else if(K.visible){const tt=G(U,K,L,V);U.onBeforeShadow(o,U,D,T,nt,tt,null),o.renderBufferDirect(T,null,nt,tt,U,null),U.onAfterShadow(o,U,D,T,nt,tt,null)}}const Y=U.children;for(let nt=0,K=Y.length;nt<K;nt++)C(Y[nt],D,T,L,V)}function N(U){U.target.removeEventListener("dispose",N);for(const T in m){const L=m[T],V=U.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function tC(o,e){function i(){let k=!1;const Ct=new sn;let xt=null;const Nt=new sn(0,0,0,0);return{setMask:function(Gt){xt!==Gt&&!k&&(o.colorMask(Gt,Gt,Gt,Gt),xt=Gt)},setLocked:function(Gt){k=Gt},setClear:function(Gt,Et,Jt,Ht,Ce){Ce===!0&&(Gt*=Ht,Et*=Ht,Jt*=Ht),Ct.set(Gt,Et,Jt,Ht),Nt.equals(Ct)===!1&&(o.clearColor(Gt,Et,Jt,Ht),Nt.copy(Ct))},reset:function(){k=!1,xt=null,Nt.set(-1,0,0,0)}}}function s(){let k=!1,Ct=!1,xt=null,Nt=null,Gt=null;return{setReversed:function(Et){if(Ct!==Et){const Jt=e.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const Ht=Gt;Gt=null,this.setClear(Ht)}},getReversed:function(){return Ct},setTest:function(Et){Et?dt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!k&&(o.depthMask(Et),xt=Et)},setFunc:function(Et){if(Ct&&(Et=CT[Et]),Nt!==Et){switch(Et){case fp:o.depthFunc(o.NEVER);break;case dp:o.depthFunc(o.ALWAYS);break;case hp:o.depthFunc(o.LESS);break;case Nl:o.depthFunc(o.LEQUAL);break;case pp:o.depthFunc(o.EQUAL);break;case mp:o.depthFunc(o.GEQUAL);break;case gp:o.depthFunc(o.GREATER);break;case _p:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Nt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){Gt!==Et&&(Gt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){k=!1,xt=null,Nt=null,Gt=null,Ct=!1}}}function u(){let k=!1,Ct=null,xt=null,Nt=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null;return{setTest:function(ue){k||(ue?dt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(ue){Ct!==ue&&!k&&(o.stencilMask(ue),Ct=ue)},setFunc:function(ue,ti,pi){(xt!==ue||Nt!==ti||Gt!==pi)&&(o.stencilFunc(ue,ti,pi),xt=ue,Nt=ti,Gt=pi)},setOp:function(ue,ti,pi){(Et!==ue||Jt!==ti||Ht!==pi)&&(o.stencilOp(ue,ti,pi),Et=ue,Jt=ti,Ht=pi)},setLocked:function(ue){k=ue},setClear:function(ue){Ce!==ue&&(o.clearStencil(ue),Ce=ue)},reset:function(){k=!1,Ct=null,xt=null,Nt=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null}}}const f=new i,d=new s,h=new u,p=new WeakMap,m=new WeakMap;let S={},g={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,P=null,G=null,C=null,N=null,U=null,D=null,T=new Le(0,0,0),L=0,V=!1,B=null,Y=null,nt=null,K=null,tt=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ut=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(at)[1]),X=ut>=1):at.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),X=ut>=2);let ht=null,yt={};const Qt=o.getParameter(o.SCISSOR_BOX),Yt=o.getParameter(o.VIEWPORT),z=new sn().fromArray(Qt),mt=new sn().fromArray(Yt);function At(k,Ct,xt,Nt){const Gt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(k,Et),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<xt;Jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Nt,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Et}const Q={};Q[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),d.setFunc(Nl),ee(!1),ie(Qv),dt(o.CULL_FACE),ge(Ia);function dt(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function Tt(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function It(k,Ct){return v[k]!==Ct?(o.bindFramebuffer(k,Ct),v[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function _t(k,Ct){let xt=R,Nt=!1;if(k){xt=y.get(Ct),xt===void 0&&(xt=[],y.set(Ct,xt));const Gt=k.textures;if(xt.length!==Gt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Jt=Gt.length;Et<Jt;Et++)xt[Et]=o.COLOR_ATTACHMENT0+Et;xt.length=Gt.length,Nt=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Nt=!0);Nt&&o.drawBuffers(xt)}function Rt(k){return w!==k?(o.useProgram(k),w=k,!0):!1}const Ve={[oo]:o.FUNC_ADD,[KE]:o.FUNC_SUBTRACT,[QE]:o.FUNC_REVERSE_SUBTRACT};Ve[JE]=o.MIN,Ve[jE]=o.MAX;const pe={[$E]:o.ZERO,[tT]:o.ONE,[eT]:o.SRC_COLOR,[dx]:o.SRC_ALPHA,[oT]:o.SRC_ALPHA_SATURATE,[rT]:o.DST_COLOR,[iT]:o.DST_ALPHA,[nT]:o.ONE_MINUS_SRC_COLOR,[hx]:o.ONE_MINUS_SRC_ALPHA,[sT]:o.ONE_MINUS_DST_COLOR,[aT]:o.ONE_MINUS_DST_ALPHA,[lT]:o.CONSTANT_COLOR,[uT]:o.ONE_MINUS_CONSTANT_COLOR,[cT]:o.CONSTANT_ALPHA,[fT]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(k,Ct,xt,Nt,Gt,Et,Jt,Ht,Ce,ue){if(k===Ia){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(dt(o.BLEND),M=!0),k!==ZE){if(k!==x||ue!==V){if((P!==oo||N!==oo)&&(o.blendEquation(o.FUNC_ADD),P=oo,N=oo),ue)switch(k){case wl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFunc(o.ONE,o.ONE);break;case jv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case $v:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ze("WebGLState: Invalid blending: ",k);break}else switch(k){case wl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case jv:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $v:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",k);break}G=null,C=null,U=null,D=null,T.set(0,0,0),L=0,x=k,V=ue}return}Gt=Gt||Ct,Et=Et||xt,Jt=Jt||Nt,(Ct!==P||Gt!==N)&&(o.blendEquationSeparate(Ve[Ct],Ve[Gt]),P=Ct,N=Gt),(xt!==G||Nt!==C||Et!==U||Jt!==D)&&(o.blendFuncSeparate(pe[xt],pe[Nt],pe[Et],pe[Jt]),G=xt,C=Nt,U=Et,D=Jt),(Ht.equals(T)===!1||Ce!==L)&&(o.blendColor(Ht.r,Ht.g,Ht.b,Ce),T.copy(Ht),L=Ce),x=k,V=!1}function xe(k,Ct){k.side===Oa?Tt(o.CULL_FACE):dt(o.CULL_FACE);let xt=k.side===$n;Ct&&(xt=!xt),ee(xt),k.blending===wl&&k.transparent===!1?ge(Ia):ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const Nt=k.stencilWrite;h.setTest(Nt),Nt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),hn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){B!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),B=k)}function ie(k){k!==WE?(dt(o.CULL_FACE),k!==Y&&(k===Qv?o.cullFace(o.BACK):k===qE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),Y=k}function Xe(k){k!==nt&&(X&&o.lineWidth(k),nt=k)}function hn(k,Ct,xt){k?(dt(o.POLYGON_OFFSET_FILL),(K!==Ct||tt!==xt)&&(K=Ct,tt=xt,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,xt))):Tt(o.POLYGON_OFFSET_FILL)}function Ie(k){k?dt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function tn(k){k===void 0&&(k=o.TEXTURE0+q-1),ht!==k&&(o.activeTexture(k),ht=k)}function W(k,Ct,xt){xt===void 0&&(ht===null?xt=o.TEXTURE0+q-1:xt=ht);let Nt=yt[xt];Nt===void 0&&(Nt={type:void 0,texture:void 0},yt[xt]=Nt),(Nt.type!==k||Nt.texture!==Ct)&&(ht!==xt&&(o.activeTexture(xt),ht=xt),o.bindTexture(k,Ct||Q[k]),Nt.type=k,Nt.texture=Ct)}function an(){const k=yt[ht];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Pe(){try{o.compressedTexImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function E(){try{o.texSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function et(){try{o.texSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function bt(){try{o.texStorage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function Dt(){try{o.texStorage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function gt(){try{o.texImage2D(...arguments)}catch(k){ze("WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){ze("WebGLState:",k)}}function wt(k){return g[k]!==void 0?g[k]:o.getParameter(k)}function jt(k,Ct){g[k]!==Ct&&(o.pixelStorei(k,Ct),g[k]=Ct)}function Pt(k){z.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),z.copy(k))}function Ot(k){mt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),mt.copy(k))}function Vt(k,Ct){let xt=m.get(Ct);xt===void 0&&(xt=new WeakMap,m.set(Ct,xt));let Nt=xt.get(k);Nt===void 0&&(Nt=o.getUniformBlockIndex(Ct,k.name),xt.set(k,Nt))}function ne(k,Ct){const Nt=m.get(Ct).get(k);p.get(Ct)!==Nt&&(o.uniformBlockBinding(Ct,Nt,k.__bindingPointIndex),p.set(Ct,Nt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},g={},ht=null,yt={},v={},y=new WeakMap,R=[],w=null,M=!1,x=null,P=null,G=null,C=null,N=null,U=null,D=null,T=new Le(0,0,0),L=0,V=!1,B=null,Y=null,nt=null,K=null,tt=null,z.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:dt,disable:Tt,bindFramebuffer:It,drawBuffers:_t,useProgram:Rt,setBlending:ge,setMaterial:xe,setFlipSided:ee,setCullFace:ie,setLineWidth:Xe,setPolygonOffset:hn,setScissorTest:Ie,activeTexture:tn,bindTexture:W,unbindTexture:an,compressedTexImage2D:Pe,compressedTexImage3D:O,texImage2D:gt,texImage3D:Mt,pixelStorei:jt,getParameter:wt,updateUBOMapping:Vt,uniformBlockBinding:ne,texStorage2D:bt,texStorage3D:Dt,texSubImage2D:E,texSubImage3D:et,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:Ot,reset:le}}function eC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Oe,S=new WeakMap,g=new Set;let v;const y=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return R?new OffscreenCanvas(O,E):Wc("canvas")}function M(O,E,et){let lt=1;const pt=Pe(O);if((pt.width>et||pt.height>et)&&(lt=et/Math.max(pt.width,pt.height)),lt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const bt=Math.floor(lt*pt.width),Dt=Math.floor(lt*pt.height);v===void 0&&(v=w(bt,Dt));const gt=E?w(bt,Dt):v;return gt.width=bt,gt.height=Dt,gt.getContext("2d").drawImage(O,0,0,bt,Dt),oe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+bt+"x"+Dt+")."),gt}else return"data"in O&&oe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),O;return O}function x(O){return O.generateMipmaps}function P(O){o.generateMipmap(O)}function G(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,E,et,lt,pt,bt=!1){if(O!==null){if(o[O]!==void 0)return o[O];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Dt;lt&&(Dt=e.get("EXT_texture_norm16"),Dt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(et===o.FLOAT&&(gt=o.R32F),et===o.HALF_FLOAT&&(gt=o.R16F),et===o.UNSIGNED_BYTE&&(gt=o.R8),et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.R16_EXT),et===o.SHORT&&Dt&&(gt=Dt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.R8UI),et===o.UNSIGNED_SHORT&&(gt=o.R16UI),et===o.UNSIGNED_INT&&(gt=o.R32UI),et===o.BYTE&&(gt=o.R8I),et===o.SHORT&&(gt=o.R16I),et===o.INT&&(gt=o.R32I)),E===o.RG&&(et===o.FLOAT&&(gt=o.RG32F),et===o.HALF_FLOAT&&(gt=o.RG16F),et===o.UNSIGNED_BYTE&&(gt=o.RG8),et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RG16_EXT),et===o.SHORT&&Dt&&(gt=Dt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RG8UI),et===o.UNSIGNED_SHORT&&(gt=o.RG16UI),et===o.UNSIGNED_INT&&(gt=o.RG32UI),et===o.BYTE&&(gt=o.RG8I),et===o.SHORT&&(gt=o.RG16I),et===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),et===o.UNSIGNED_INT&&(gt=o.RGB32UI),et===o.BYTE&&(gt=o.RGB8I),et===o.SHORT&&(gt=o.RGB16I),et===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),et===o.UNSIGNED_INT&&(gt=o.RGBA32UI),et===o.BYTE&&(gt=o.RGBA8I),et===o.SHORT&&(gt=o.RGBA16I),et===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGB16_EXT),et===o.SHORT&&Dt&&(gt=Dt.RGB16_SNORM_EXT),et===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=bt?kc:De.getTransfer(pt);et===o.FLOAT&&(gt=o.RGBA32F),et===o.HALF_FLOAT&&(gt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(gt=Mt===Ye?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGBA16_EXT),et===o.SHORT&&Dt&&(gt=Dt.RGBA16_SNORM_EXT),et===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function N(O,E){let et;return O?E===null||E===ua||E===Ll?et=o.DEPTH24_STENCIL8:E===ra?et=o.DEPTH32F_STENCIL8:E===Ul&&(et=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ua||E===Ll?et=o.DEPTH_COMPONENT24:E===ra?et=o.DEPTH_COMPONENT32F:E===Ul&&(et=o.DEPTH_COMPONENT16),et}function U(O,E){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ln&&O.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function D(O){const E=O.target;E.removeEventListener("dispose",D),L(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&g.delete(E)}function T(O){const E=O.target;E.removeEventListener("dispose",T),B(E)}function L(O){const E=s.get(O);if(E.__webglInit===void 0)return;const et=O.source,lt=y.get(et);if(lt){const pt=lt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&V(O),Object.keys(lt).length===0&&y.delete(et)}s.remove(O)}function V(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const et=O.source,lt=y.get(et);delete lt[E.__cacheKey],d.memory.textures--}function B(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let pt=0;pt<E.__webglFramebuffer[lt].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[lt][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[lt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=O.textures;for(let lt=0,pt=et.length;lt<pt;lt++){const bt=s.get(et[lt]);bt.__webglTexture&&(o.deleteTexture(bt.__webglTexture),d.memory.textures--),s.remove(et[lt])}s.remove(O)}let Y=0;function nt(){Y=0}function K(){return Y}function tt(O){Y=O}function q(){const O=Y;return O>=u.maxTextures&&oe("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+u.maxTextures),Y+=1,O}function X(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ut(O,E){const et=s.get(O);if(O.isVideoTexture&&W(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&et.__version!==O.version){const lt=O.image;if(lt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(et,O,E);return}}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function at(O,E){const et=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){Tt(et,O,E);return}else O.isExternalTexture&&(et.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function ht(O,E){const et=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&et.__version!==O.version){Tt(et,O,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function yt(O,E){const et=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&et.__version!==O.version){It(et,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const Qt={[vp]:o.REPEAT,[Pa]:o.CLAMP_TO_EDGE,[Sp]:o.MIRRORED_REPEAT},Yt={[Ln]:o.NEAREST,[pT]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[Uh]:o.LINEAR_MIPMAP_NEAREST,[ts]:o.LINEAR_MIPMAP_LINEAR},z={[vT]:o.NEVER,[ET]:o.ALWAYS,[ST]:o.LESS,[Mm]:o.LEQUAL,[xT]:o.EQUAL,[ym]:o.GEQUAL,[MT]:o.GREATER,[yT]:o.NOTEQUAL};function mt(O,E){if(E.type===ra&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Uh||E.magFilter===cc||E.magFilter===ts||E.minFilter===Fn||E.minFilter===Uh||E.minFilter===cc||E.minFilter===ts)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,Qt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,Qt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,Qt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Yt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Yt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==cc&&E.minFilter!==ts||E.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,u.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function At(O,E){let et=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",D));const lt=E.source;let pt=y.get(lt);pt===void 0&&(pt={},y.set(lt,pt));const bt=X(E);if(bt!==O.__cacheKey){pt[bt]===void 0&&(pt[bt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,et=!0),pt[bt].usedTimes++;const Dt=pt[O.__cacheKey];Dt!==void 0&&(pt[O.__cacheKey].usedTimes--,Dt.usedTimes===0&&V(E)),O.__cacheKey=bt,O.__webglTexture=pt[bt].texture}return et}function Q(O,E,et){return Math.floor(Math.floor(O/et)/E)}function dt(O,E,et,lt){const bt=O.updateRanges;if(bt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,lt,E.data);else{bt.sort((jt,Pt)=>jt.start-Pt.start);let Dt=0;for(let jt=1;jt<bt.length;jt++){const Pt=bt[Dt],Ot=bt[jt],Vt=Pt.start+Pt.count,ne=Q(Ot.start,E.width,4),le=Q(Pt.start,E.width,4);Ot.start<=Vt+1&&ne===le&&Q(Ot.start+Ot.count-1,E.width,4)===ne?Pt.count=Math.max(Pt.count,Ot.start+Ot.count-Pt.start):(++Dt,bt[Dt]=Ot)}bt.length=Dt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),wt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let jt=0,Pt=bt.length;jt<Pt;jt++){const Ot=bt[jt],Vt=Math.floor(Ot.start/4),ne=Math.ceil(Ot.count/4),le=Vt%E.width,k=Math.floor(Vt/E.width),Ct=ne,xt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Ct,xt,et,lt,E.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,wt)}}function Tt(O,E,et){let lt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=o.TEXTURE_3D);const pt=At(O,E),bt=E.source;i.bindTexture(lt,O.__webglTexture,o.TEXTURE0+et);const Dt=s.get(bt);if(bt.version!==Dt.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+et),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xt=De.getPrimaries(De.workingColorSpace),Nt=E.colorSpace===yr?null:De.getPrimaries(E.colorSpace),Gt=E.colorSpace===yr||xt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=M(E.image,!1,u.maxTextureSize);Mt=an(E,Mt);const wt=f.convert(E.format,E.colorSpace),jt=f.convert(E.type);let Pt=C(E.internalFormat,wt,jt,E.normalized,E.colorSpace,E.isVideoTexture);mt(lt,E);let Ot;const Vt=E.mipmaps,ne=E.isVideoTexture!==!0,le=Dt.__version===void 0||pt===!0,k=bt.dataReady,Ct=U(E,Mt);if(E.isDepthTexture)Pt=N(E.format===es,E.type),le&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Pt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,null));else if(E.isDataTexture)if(Vt.length>0){ne&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data);E.generateMipmaps=!1}else ne?(le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height),k&&dt(E,Mt,wt,jt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ne&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Vt[0].width,Vt[0].height,Mt.depth);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)if(Ot=Vt[xt],E.format!==zi)if(wt!==null)if(ne){if(k)if(E.layerUpdates.size>0){const Gt=ES(Ot.width,Ot.height,E.format,E.type);for(const Et of E.layerUpdates){const Jt=Ot.data.subarray(Et*Gt/Ot.data.BYTES_PER_ELEMENT,(Et+1)*Gt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,Et,Ot.width,Ot.height,1,wt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,wt,jt,Ot.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ne&&le&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],E.format!==zi?wt!==null?ne?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,Ot.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data)}else if(E.isDataArrayTexture)if(ne){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Mt.width,Mt.height,Mt.depth),k)if(E.layerUpdates.size>0){const xt=ES(Mt.width,Mt.height,E.format,E.type);for(const Nt of E.layerUpdates){const Gt=Mt.data.subarray(Nt*xt/Mt.data.BYTES_PER_ELEMENT,(Nt+1)*xt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Nt,Mt.width,Mt.height,1,wt,jt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isData3DTexture)ne?(le&&i.texStorage3D(o.TEXTURE_3D,Ct,Pt,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isFramebufferTexture){if(le)if(ne)i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height);else{let xt=Mt.width,Nt=Mt.height;for(let Gt=0;Gt<Ct;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Pt,xt,Nt,0,wt,jt,null),xt>>=1,Nt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const xt=o.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),Mt.parentNode!==xt){xt.appendChild(Mt),g.add(E),xt.onpaint=Nt=>{const Gt=Nt.changedElements;for(const Et of g)Gt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Gt=o.RGBA,Et=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Gt,Et,Jt,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(ne&&le){const xt=Pe(Vt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}for(let xt=0,Nt=Vt.length;xt<Nt;xt++)Ot=Vt[xt],ne?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,wt,jt,Ot):i.texImage2D(o.TEXTURE_2D,xt,Pt,wt,jt,Ot);E.generateMipmaps=!1}else if(ne){if(le){const xt=Pe(Mt);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,jt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,wt,jt,Mt);x(E)&&P(lt),Dt.__version=bt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function It(O,E,et){if(E.image.length!==6)return;const lt=At(O,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+et);const bt=s.get(pt);if(pt.version!==bt.__version||lt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=De.getPrimaries(De.workingColorSpace),gt=E.colorSpace===yr?null:De.getPrimaries(E.colorSpace),Mt=E.colorSpace===yr||Dt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,jt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let Et=0;Et<6;Et++)!wt&&!jt?Pt[Et]=M(E.image[Et],!0,u.maxCubemapSize):Pt[Et]=jt?E.image[Et].image:E.image[Et],Pt[Et]=an(E,Pt[Et]);const Ot=Pt[0],Vt=f.convert(E.format,E.colorSpace),ne=f.convert(E.type),le=C(E.internalFormat,Vt,ne,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ct=bt.__version===void 0||lt===!0,xt=pt.dataReady;let Nt=U(E,Ot);mt(o.TEXTURE_CUBE_MAP,E);let Gt;if(wt){k&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Ot.width,Ot.height);for(let Et=0;Et<6;Et++){Gt=Pt[Et].mipmaps;for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];E.format!==zi?Vt!==null?k?xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,Ht.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Ht.width,Ht.height,0,Ht.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,ne,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,le,Ht.width,Ht.height,0,Vt,ne,Ht.data)}}}else{if(Gt=E.mipmaps,k&&Ct){Gt.length>0&&Nt++;const Et=Pe(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Nt,le,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(jt){k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Pt[Et].width,Pt[Et].height,Vt,ne,Pt[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,Pt[Et].width,Pt[Et].height,0,Vt,ne,Pt[Et].data);for(let Jt=0;Jt<Gt.length;Jt++){const Ce=Gt[Jt].image[Et].image;k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Ce.width,Ce.height,Vt,ne,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,Ce.width,Ce.height,0,Vt,ne,Ce.data)}}else{k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Vt,ne,Pt[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,le,Vt,ne,Pt[Et]);for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Vt,ne,Ht.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,le,Vt,ne,Ht.image[Et])}}}x(E)&&P(o.TEXTURE_CUBE_MAP),bt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,et,lt,pt,bt){const Dt=f.convert(et.format,et.colorSpace),gt=f.convert(et.type),Mt=C(et.internalFormat,Dt,gt,et.normalized,et.colorSpace),wt=s.get(E),jt=s.get(et);if(jt.__renderTarget=E,!wt.__hasExternalTextures){const Pt=Math.max(1,E.width>>bt),Ot=Math.max(1,E.height>>bt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,bt,Mt,Pt,Ot,E.depth,0,Dt,gt,null):i.texImage2D(pt,bt,Mt,Pt,Ot,0,Dt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,0,Ie(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,bt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const lt=E.depthTexture,pt=lt&&lt.isDepthTexture?lt.type:null,bt=N(E.stencilBuffer,pt),Dt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),bt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),bt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,bt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,O)}else{const lt=E.textures;for(let pt=0;pt<lt.length;pt++){const bt=lt[pt],Dt=f.convert(bt.format,bt.colorSpace),gt=f.convert(bt.type),Mt=C(bt.internalFormat,Dt,gt,bt.normalized,bt.colorSpace);tn(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie(E),Mt,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie(E),Mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ve(O,E,et){const lt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=s.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const wt=f.convert(E.depthTexture.format),jt=f.convert(E.depthTexture.type);let Pt;E.depthTexture.format===Ha?Pt=o.DEPTH_COMPONENT24:E.depthTexture.format===es&&(Pt=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Pt,E.width,E.height,0,wt,jt,null)}}else ut(E.depthTexture,0);const bt=pt.__webglTexture,Dt=Ie(E),gt=lt?o.TEXTURE_CUBE_MAP_POSITIVE_X+et:o.TEXTURE_2D,Mt=E.depthTexture.format===es?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ha)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else if(E.depthTexture.format===es)tn(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(O){const E=s.get(O),et=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const lt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",pt)};lt.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=lt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(et)for(let lt=0;lt<6;lt++)Ve(E.__webglFramebuffer[lt],O,lt);else{const lt=O.texture.mipmaps;lt&&lt.length>0?Ve(E.__webglFramebuffer[0],O,0):Ve(E.__webglFramebuffer,O,0)}else if(et){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=o.createRenderbuffer(),Rt(E.__webglDepthbuffer[lt],O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}else{const lt=O.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Rt(E.__webglDepthbuffer,O,!1);else{const pt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(O,E,et){const lt=s.get(O);E!==void 0&&_t(lt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&pe(O)}function xe(O){const E=O.texture,et=s.get(O),lt=s.get(E);O.addEventListener("dispose",T);const pt=O.textures,bt=O.isWebGLCubeRenderTarget===!0,Dt=pt.length>1;if(Dt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=E.version,d.memory.textures++),bt){et.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)et.__webglFramebuffer[gt][Mt]=o.createFramebuffer()}else et.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)et.__webglFramebuffer[gt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Dt)for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=s.get(pt[gt]);wt.__webglTexture===void 0&&(wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&tn(O)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let gt=0;gt<pt.length;gt++){const Mt=pt[gt];et.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[gt]);const wt=f.convert(Mt.format,Mt.colorSpace),jt=f.convert(Mt.type),Pt=C(Mt.internalFormat,wt,jt,Mt.normalized,Mt.colorSpace,O.isXRRenderTarget===!0),Ot=Ie(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Pt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,et.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(et.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(bt){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(et.__webglFramebuffer[gt][Mt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else _t(et.__webglFramebuffer[gt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(E)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=pt[gt],jt=s.get(wt);let Pt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Pt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,jt.__webglTexture),mt(Pt,wt),_t(et.__webglFramebuffer,O,wt,o.COLOR_ATTACHMENT0+gt,Pt,0),x(wt)&&P(Pt)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(gt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,lt.__webglTexture),mt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(et.__webglFramebuffer[Mt],O,E,o.COLOR_ATTACHMENT0,gt,Mt);else _t(et.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,gt,0);x(E)&&P(gt),i.unbindTexture()}O.depthBuffer&&pe(O)}function ee(O){const E=O.textures;for(let et=0,lt=E.length;et<lt;et++){const pt=E[et];if(x(pt)){const bt=G(O),Dt=s.get(pt).__webglTexture;i.bindTexture(bt,Dt),P(bt),i.unbindTexture()}}}const ie=[],Xe=[];function hn(O){if(O.samples>0){if(tn(O)===!1){const E=O.textures,et=O.width,lt=O.height;let pt=o.COLOR_BUFFER_BIT;const bt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=s.get(O),gt=E.length>1;if(gt)for(let wt=0;wt<E.length;wt++)i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Mt=O.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=s.get(E[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,jt,0)}o.blitFramebuffer(0,0,et,lt,0,0,et,lt,pt,o.NEAREST),p===!0&&(ie.length=0,Xe.length=0,ie.push(o.COLOR_ATTACHMENT0+wt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(bt),Xe.push(bt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<E.length;wt++){i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=s.get(E[wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,jt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&p){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(O){return Math.min(u.maxSamples,O.samples)}function tn(O){const E=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(O){const E=d.render.frame;S.get(O)!==E&&(S.set(O,E),O.update())}function an(O,E){const et=O.colorSpace,lt=O.format,pt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||et!==Xc&&et!==yr&&(De.getTransfer(et)===Ye?(lt!==zi||pt!==hi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",et)),E}function Pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=nt,this.getTextureUnits=K,this.setTextureUnits=tt,this.setTexture2D=ut,this.setTexture2DArray=at,this.setTexture3D=ht,this.setTextureCube=yt,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function nC(o,e){function i(s,u=yr){let f;const d=De.getTransfer(u);if(s===hi)return o.UNSIGNED_BYTE;if(s===gm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_m)return o.UNSIGNED_SHORT_5_5_5_1;if(s===bx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Ax)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ex)return o.BYTE;if(s===Tx)return o.SHORT;if(s===Ul)return o.UNSIGNED_SHORT;if(s===mm)return o.INT;if(s===ua)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===ca)return o.HALF_FLOAT;if(s===Rx)return o.ALPHA;if(s===Cx)return o.RGB;if(s===zi)return o.RGBA;if(s===Ha)return o.DEPTH_COMPONENT;if(s===es)return o.DEPTH_STENCIL;if(s===wx)return o.RED;if(s===vm)return o.RED_INTEGER;if(s===is)return o.RG;if(s===Sm)return o.RG_INTEGER;if(s===xm)return o.RGBA_INTEGER;if(s===Pc||s===Ic||s===zc||s===Bc)if(d===Ye)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Pc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Pc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xp||s===Mp||s===yp||s===Ep)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===xp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ep)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===Gc||s===wp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Tp||s===bp)return d===Ye?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Ap)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===Rp)return f.COMPRESSED_R11_EAC;if(s===Cp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Gc)return f.COMPRESSED_RG11_EAC;if(s===wp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dp||s===Np||s===Up||s===Lp||s===Op||s===Pp||s===Ip||s===zp||s===Bp||s===Fp||s===Hp||s===Gp||s===Vp||s===Xp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Dp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Np)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Up)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Op)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ip)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xp)return d===Ye?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kp||s===Wp||s===qp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===kp)return d===Ye?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yp||s===Zp||s===Vc||s===Kp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Yp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Zp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ll?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new zx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new fa({vertexShader:iC,fragmentShader:aC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Pn(new go(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends as{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",p=1,m=null,S=null,g=null,v=null,y=null,R=null;const w=typeof XRWebGLBinding<"u",M=new rC,x={},P=i.getContextAttributes();let G=null,C=null;const N=[],U=[],D=new Oe;let T=null,L=null;const V=new Ai;V.viewport=new sn;const B=new Ai;B.viewport=new sn;const Y=[V,B],nt=new p1;let K=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=N[Q];return dt===void 0&&(dt=new Gh,N[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=N[Q];return dt===void 0&&(dt=new Gh,N[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=N[Q];return dt===void 0&&(dt=new Gh,N[Q]=dt),dt.getHandSpace()};function q(Q){const dt=U.indexOf(Q.inputSource);if(dt===-1)return;const Tt=N[dt];Tt!==void 0&&(Tt.update(Q.inputSource,Q.frame,m||d),Tt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){u.removeEventListener("select",q),u.removeEventListener("selectstart",q),u.removeEventListener("selectend",q),u.removeEventListener("squeeze",q),u.removeEventListener("squeezestart",q),u.removeEventListener("squeezeend",q),u.removeEventListener("end",X),u.removeEventListener("inputsourceschange",ut);for(let Q=0;Q<N.length;Q++){const dt=U[Q];dt!==null&&(U[Q]=null,N[Q].disconnect(dt))}K=null,tt=null,M.reset();for(const Q in x)delete x[Q];if(e.setRenderTarget(G),y=null,v=null,g=null,u=null,C=null,At.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(D.width,D.height,!1),L!==null){const Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(u,i)),g},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(Q){if(u=Q,u!==null){if(G=e.getRenderTarget(),u.addEventListener("select",q),u.addEventListener("selectstart",q),u.addEventListener("selectend",q),u.addEventListener("squeeze",q),u.addEventListener("squeezestart",q),u.addEventListener("squeezeend",q),u.addEventListener("end",X),u.addEventListener("inputsourceschange",ut),P.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(D),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,It=null,_t=null;P.depth&&(_t=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=P.stencil?es:Ha,It=P.stencil?Ll:ua);const Rt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};g=this.getBinding(),v=g.createProjectionLayer(Rt),u.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Bi(v.textureWidth,v.textureHeight,{format:zi,type:hi,depthTexture:new Pl(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};y=new XRWebGLLayer(u,i,Tt),u.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Bi(y.framebufferWidth,y.framebufferHeight,{format:zi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await u.requestReferenceSpace(h),At.setContext(u),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ut(Q){for(let dt=0;dt<Q.removed.length;dt++){const Tt=Q.removed[dt],It=U.indexOf(Tt);It>=0&&(U[It]=null,N[It].disconnect(Tt))}for(let dt=0;dt<Q.added.length;dt++){const Tt=Q.added[dt];let It=U.indexOf(Tt);if(It===-1){for(let Rt=0;Rt<N.length;Rt++)if(Rt>=U.length){U.push(Tt),It=Rt;break}else if(U[Rt]===null){U[Rt]=Tt,It=Rt;break}if(It===-1)break}const _t=N[It];_t&&_t.connect(Tt)}}const at=new $,ht=new $;function yt(Q,dt,Tt){at.setFromMatrixPosition(dt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const It=at.distanceTo(ht),_t=dt.projectionMatrix.elements,Rt=Tt.projectionMatrix.elements,Ve=_t[14]/(_t[10]-1),pe=_t[14]/(_t[10]+1),ge=(_t[9]+1)/_t[5],xe=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(Rt[8]+1)/Rt[0],Xe=Ve*ee,hn=Ve*ie,Ie=It/(-ee+ie),tn=Ie*-ee;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(tn),Q.translateZ(Ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),_t[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const W=Ve+Ie,an=pe+Ie,Pe=Xe-tn,O=hn+(It-tn),E=ge*pe/an*W,et=xe*pe/an*W;Q.projectionMatrix.makePerspective(Pe,O,E,et,W,an),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Qt(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(u===null)return;let dt=Q.near,Tt=Q.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),nt.near=B.near=V.near=dt,nt.far=B.far=V.far=Tt,(K!==nt.near||tt!==nt.far)&&(u.updateRenderState({depthNear:nt.near,depthFar:nt.far}),K=nt.near,tt=nt.far),nt.layers.mask=Q.layers.mask|6,V.layers.mask=nt.layers.mask&-5,B.layers.mask=nt.layers.mask&-3;const It=Q.parent,_t=nt.cameras;Qt(nt,It);for(let Rt=0;Rt<_t.length;Rt++)Qt(_t[Rt],It);_t.length===2?yt(nt,V,B):nt.projectionMatrix.copy(V.projectionMatrix),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),Yt(Q,nt,It)};function Yt(Q,dt,Tt){Tt===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(Tt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Jp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(Q){p=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(Q){return x[Q]};let z=null;function mt(Q,dt){if(S=dt.getViewerPose(m||d),R=dt,S!==null){const Tt=S.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let It=!1;Tt.length!==nt.cameras.length&&(nt.cameras.length=0,It=!0);for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe];let xe=null;if(y!==null)xe=y.getViewport(ge);else{const ie=g.getViewSubImage(v,ge);xe=ie.viewport,pe===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let ee=Y[pe];ee===void 0&&(ee=new Ai,ee.layers.enable(pe),ee.viewport=new sn,Y[pe]=ee),ee.matrix.fromArray(ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(xe.x,xe.y,xe.width,xe.height),pe===0&&(nt.matrix.copy(ee.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),It===!0&&nt.cameras.push(ee)}const _t=u.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const pe=g.getDepthInformation(Tt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,u.renderState)}if(_t&&_t.includes("camera-access")&&w){e.state.unbindTexture(),g=s.getBinding();for(let pe=0;pe<Tt.length;pe++){const ge=Tt[pe].camera;if(ge){let xe=x[ge];xe||(xe=new zx,x[ge]=xe);const ee=g.getCameraImage(ge);xe.sourceTexture=ee}}}}for(let Tt=0;Tt<N.length;Tt++){const It=U[Tt],_t=N[Tt];It!==null&&_t!==void 0&&_t.update(It,dt,m||d)}z&&z(Q,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),R=null}const At=new Hx;At.setAnimationLoop(mt),this.setAnimationLoop=function(Q){z=Q},this.dispose=function(){}}}const oC=new nn,Yx=new fe;Yx.set(-1,0,0,0,1,0,0,0,1);function lC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Bx(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function u(M,x,P,G,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?f(M,x):x.isMeshLambertMaterial?(f(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(f(M,x),g(M,x)):x.isMeshPhongMaterial?(f(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(f(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,C)):x.isMeshMatcapMaterial?(f(M,x),R(M,x)):x.isMeshDepthMaterial?f(M,x):x.isMeshDistanceMaterial?(f(M,x),w(M,x)):x.isMeshNormalMaterial?f(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,P,G):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===$n&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===$n&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=e.get(x),G=P.envMap,C=P.envMapRotation;G&&(M.envMap.value=G,M.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(C)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Yx),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,P,G){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=G*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const P=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function uC(o,e,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const U=N.program;s.uniformBlockBinding(C,U)}function m(C,N){let U=u[C.id];U===void 0&&(M(C),U=S(C),u[C.id]=U,C.addEventListener("dispose",P));const D=N.program;s.updateUBOMapping(C,D);const T=e.render.frame;f[C.id]!==T&&(v(C),f[C.id]=T)}function S(C){const N=g();C.__bindingPointIndex=N;const U=o.createBuffer(),D=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,D,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function g(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const N=u[C.id],U=C.uniforms,D=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let T=0,L=U.length;T<L;T++){const V=U[T];if(Array.isArray(V))for(let B=0,Y=V.length;B<Y;B++)y(V[B],T,B,D);else y(V,T,0,D)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,N,U,D){if(w(C,N,U,D)===!0){const T=C.__offset,L=C.value;if(Array.isArray(L)){let V=0;for(let B=0;B<L.length;B++){const Y=L[B],nt=x(Y);R(Y,C.__data,V),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function R(C,N,U){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,U)}function w(C,N,U,D){const T=C.value,L=N+"_"+U;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:ArrayBuffer.isView(T)?D[L]=T.slice():D[L]=T.clone(),!0;{const V=D[L];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return D[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function M(C){const N=C.uniforms;let U=0;const D=16;for(let L=0,V=N.length;L<V;L++){const B=Array.isArray(N[L])?N[L]:[N[L]];for(let Y=0,nt=B.length;Y<nt;Y++){const K=B[Y],tt=Array.isArray(K.value)?K.value:[K.value];for(let q=0,X=tt.length;q<X;q++){const ut=tt[q],at=x(ut),ht=U%D,yt=ht%at.boundary,Qt=ht+yt;U+=yt,Qt!==0&&D-Qt<at.storage&&(U+=D-Qt),K.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=at.storage}}}const T=U%D;return T>0&&(U+=D-T),C.__size=U,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",C),N}function P(C){const N=C.target;N.removeEventListener("dispose",P);const U=d.indexOf(N.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(u[N.id]),delete u[N.id],delete f[N.id]}function G(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:p,update:m,dispose:G}}const cC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let na=null;function fC(){return na===null&&(na=new jT(cC,16,16,is,ca),na.name="DFG_LUT",na.minFilter=Fn,na.magFilter=Fn,na.wrapS=Pa,na.wrapT=Pa,na.generateMipmaps=!1,na.needsUpdate=!0),na}class dC{constructor(e={}){const{canvas:i=AT(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=hi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const w=y,M=new Set([xm,Sm,vm]),x=new Set([hi,ua,Ul,Ll,gm,_m]),P=new Uint32Array(4),G=new Int32Array(4),C=new $;let N=null,U=null;const D=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let B=!1,Y=null,nt=null,K=null,tt=null;this._outputColorSpace=di;let q=0,X=0,ut=null,at=-1,ht=null;const yt=new sn,Qt=new sn;let Yt=null;const z=new Le(0);let mt=0,At=i.width,Q=i.height,dt=1,Tt=null,It=null;const _t=new sn(0,0,At,Q),Rt=new sn(0,0,At,Q);let Ve=!1;const pe=new bm;let ge=!1,xe=!1;const ee=new nn,ie=new $,Xe=new sn,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function tn(){return ut===null?dt:1}let W=s;function an(b,F){return i.getContext(b,F)}let Pe,O,E,et,lt,pt,bt,Dt,gt,Mt,wt,jt,Pt,Ot,Vt,ne,le,k,Ct,xt,Nt,Gt,Et;try{const b={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pm}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",ti,!1),W===null){const F="webgl2";if(W=an(F,b),W===null)throw an(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ze("WebGLRenderer: "+b.message),b}function Jt(){Pe=new fR(W),Pe.init(),Nt=new nC(W,Pe),O=new eR(W,Pe,e,Nt),E=new tC(W,Pe),O.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),nt=W.createFramebuffer(),K=W.createFramebuffer(),tt=W.createFramebuffer(),et=new pR(W),lt=new H3,pt=new eC(W,Pe,E,lt,O,Nt,et),bt=new cR(V),Dt=new g1(W),Gt=new $A(W,Dt),gt=new dR(W,Dt,et,Gt),Mt=new gR(W,gt,Dt,Gt,et),k=new mR(W,O,pt),Vt=new nR(lt),wt=new F3(V,bt,Pe,O,Gt,Vt),jt=new lC(V,lt),Pt=new V3,Ot=new Z3(Pe),le=new jA(V,bt,E,Mt,R,p),ne=new $3(V,Mt,O),Et=new uC(W,et,O,E),Ct=new tR(W,Pe,et),xt=new hR(W,Pe,et),et.programs=wt.programs,V.capabilities=O,V.extensions=Pe,V.properties=lt,V.renderLists=Pt,V.shadowMap=ne,V.state=E,V.info=et}w!==hi&&(L=new vR(w,i.width,i.height,h,u,f));const Ht=new sC(V,W);this.xr=Ht,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(b){b!==void 0&&(dt=b,this.setSize(At,Q,!1))},this.getSize=function(b){return b.set(At,Q)},this.setSize=function(b,F,ft=!0){if(Ht.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}At=b,Q=F,i.width=Math.floor(b*dt),i.height=Math.floor(F*dt),ft===!0&&(i.style.width=b+"px",i.style.height=F+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(At*dt,Q*dt).floor()},this.setDrawingBufferSize=function(b,F,ft){At=b,Q=F,dt=ft,i.width=Math.floor(b*ft),i.height=Math.floor(F*ft),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(w===hi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(yt)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,F,ft,rt){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,F,ft,rt),E.viewport(yt.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,F,ft,rt){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,F,ft,rt),E.scissor(Qt.copy(Rt).multiplyScalar(dt).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){E.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){Tt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,ft=!0){let rt=0;if(b){let st=!1;if(ut!==null){const zt=ut.texture.format;st=M.has(zt)}if(st){const zt=ut.texture.type,Xt=x.has(zt),Ut=le.getClearColor(),qt=le.getClearAlpha(),Zt=Ut.r,re=Ut.g,ce=Ut.b;Xt?(P[0]=Zt,P[1]=re,P[2]=ce,P[3]=qt,W.clearBufferuiv(W.COLOR,0,P)):(G[0]=Zt,G[1]=re,G[2]=ce,G[3]=qt,W.clearBufferiv(W.COLOR,0,G))}else rt|=W.COLOR_BUFFER_BIT}F&&(rt|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(rt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&W.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Y=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),le.dispose(),Pt.dispose(),Ot.dispose(),lt.dispose(),bt.dispose(),Mt.dispose(),Gt.dispose(),Et.dispose(),wt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ar),Ht.removeEventListener("sessionend",Va),Gi.stop()};function Ce(b){b.preventDefault(),nS("WebGLRenderer: Context Lost."),B=!0}function ue(){nS("WebGLRenderer: Context Restored."),B=!1;const b=et.autoReset,F=ne.enabled,ft=ne.autoUpdate,rt=ne.needsUpdate,st=ne.type;Jt(),et.autoReset=b,ne.enabled=F,ne.autoUpdate=ft,ne.needsUpdate=rt,ne.type=st}function ti(b){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pi(b){const F=b.target;F.removeEventListener("dispose",pi),jc(F)}function jc(b){ss(b),lt.remove(b)}function ss(b){const F=lt.get(b).programs;F!==void 0&&(F.forEach(function(ft){wt.releaseProgram(ft)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,ft,rt,st,zt){F===null&&(F=hn);const Xt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ut=Co(b,F,ft,rt,st);E.setMaterial(rt,Xt);let qt=ft.index,Zt=1;if(rt.wireframe===!0){if(qt=gt.getWireframeAttribute(ft),qt===void 0)return;Zt=2}const re=ft.drawRange,ce=ft.attributes.position;let kt=re.start*Zt,Me=(re.start+re.count)*Zt;zt!==null&&(kt=Math.max(kt,zt.start*Zt),Me=Math.min(Me,(zt.start+zt.count)*Zt)),qt!==null?(kt=Math.max(kt,0),Me=Math.min(Me,qt.count)):ce!=null&&(kt=Math.max(kt,0),Me=Math.min(Me,ce.count));const _e=Me-kt;if(_e<0||_e===1/0)return;Gt.setup(st,rt,Ut,ft,qt);let Ze,He=Ct;if(qt!==null&&(Ze=Dt.get(qt),He=xt,He.setIndex(Ze)),st.isMesh)rt.wireframe===!0?(E.setLineWidth(rt.wireframeLinewidth*tn()),He.setMode(W.LINES)):He.setMode(W.TRIANGLES);else if(st.isLine){let Sn=rt.linewidth;Sn===void 0&&(Sn=1),E.setLineWidth(Sn*tn()),st.isLineSegments?He.setMode(W.LINES):st.isLineLoop?He.setMode(W.LINE_LOOP):He.setMode(W.LINE_STRIP)}else st.isPoints?He.setMode(W.POINTS):st.isSprite&&He.setMode(W.TRIANGLES);if(st.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))He.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Sn=st._multiDrawStarts,Bt=st._multiDrawCounts,on=st._multiDrawCount,we=qt?Dt.get(qt).bytesPerElement:1,Gn=lt.get(rt).currentProgram.getUniforms();for(let ei=0;ei<on;ei++)Gn.setValue(W,"_gl_DrawID",ei),He.render(Sn[ei]/we,Bt[ei])}else if(st.isInstancedMesh)He.renderInstances(kt,_e,st.count);else if(ft.isInstancedBufferGeometry){const Sn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Bt=Math.min(ft.instanceCount,Sn);He.renderInstances(kt,_e,Bt)}else He.render(kt,_e)};function br(b,F,ft,rt){Y!==null&&b.isNodeMaterial&&Y.setObject(rt,b),ge===!0&&Vt.setState(b,ft,!1),b.transparent===!0&&b.side===Oa&&b.forceSinglePass===!1?(b.side=$n,b.needsUpdate=!0,Rr(b,F,rt),b.side=Fa,b.needsUpdate=!0,Rr(b,F,rt),b.side=Oa):Rr(b,F,rt)}this.compile=function(b,F,ft=null){ft===null&&(ft=b),Y!==null&&Y.renderStart(b,F,ft),U=Ot.get(ft),U.init(F),T.push(U),ft.traverseVisible(function(st){st.isLight&&st.layers.test(F.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),b!==ft&&b.traverseVisible(function(st){st.isLight&&st.layers.test(F.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),U.setupLights(),Y!==null&&Y.updateLights(U.state.lightsArray),xe=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,xe),ge===!0&&Vt.setGlobalState(this.clippingPlanes,F),Y!==null&&ne.render(U.state.shadowsArray,ft,F);const rt=new Set;return b.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const zt=st.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){const Ut=zt[Xt];br(Ut,ft,F,st),rt.add(Ut)}else br(zt,ft,F,st),rt.add(zt)}),U=T.pop(),Y!==null&&Y.renderEnd(),rt},this.compileAsync=function(b,F,ft=null){const rt=this.compile(b,F,ft);return new Promise(st=>{function zt(){if(rt.forEach(function(Xt){const qt=lt.get(Xt).currentProgram;(qt===void 0||qt.isReady())&&rt.delete(Xt)}),rt.size===0){st(b);return}setTimeout(zt,10)}Pe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Ga=null;function ha(b){Ga&&Ga(b)}function Ar(){Gi.stop()}function Va(){Gi.start()}const Gi=new Hx;Gi.setAnimationLoop(ha),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(b){Ga=b,Ht.setAnimationLoop(b),b===null?Gi.stop():Gi.start()},Ht.addEventListener("sessionstart",Ar),Ht.addEventListener("sessionend",Va),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Y!==null&&Y.renderStart(b,F);const ft=Ht.enabled===!0&&Ht.isPresenting===!0,rt=L!==null&&(ut===null||ft)&&L.begin(V,ut);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(F),F=Ht.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,F,ut),U=Ot.get(b,T.length),U.init(F),U.state.textureUnits=pt.getTextureUnits(),T.push(U),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(ee,sa,F.reversedDepth),xe=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,xe),N=Pt.get(b,D.length),N.init(),D.push(N),Ht.enabled===!0&&Ht.isPresenting===!0){const Xt=V.xr.getDepthSensingMesh();Xt!==null&&Eo(Xt,F,-1/0,V.sortObjects)}Eo(b,F,0,V.sortObjects),N.finish(),Y!==null&&Y.updateLights(U.state.lightsArray),V.sortObjects===!0&&N.sort(Tt,It),Ie=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Ie&&le.addToRenderList(N,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Vt.beginShadows();const st=U.state.shadowsArray;if(ne.render(st,b,F),ge===!0&&Vt.endShadows(),(rt&&L.hasRenderPass())===!1){const Xt=N.opaque,Ut=N.transmissive;if(U.setupLights(),F.isArrayCamera){const qt=F.cameras;if(Ut.length>0)for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt];os(Xt,Ut,b,ce)}Ie&&le.render(b);for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt];To(N,b,ce,ce.viewport)}}else Ut.length>0&&os(Xt,Ut,b,F),Ie&&le.render(b),To(N,b,F)}ut!==null&&X===0&&(pt.updateMultisampleRenderTarget(ut),pt.updateRenderTargetMipmap(ut)),rt&&L.end(V),b.isScene===!0&&b.onAfterRender(V,b,F),Gt.resetDefaultState(),at=-1,ht=null,T.pop(),T.length>0?(U=T[T.length-1],pt.setTextureUnits(U.state.textureUnits),ge===!0&&Vt.setGlobalState(V.clippingPlanes,U.state.camera)):U=null,D.pop(),D.length>0?N=D[D.length-1]:N=null,Y!==null&&Y.renderEnd()};function Eo(b,F,ft,rt){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)ft=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)U.pushLightProbeGrid(b);else if(b.isLight)U.pushLight(b),b.castShadow&&U.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(pe)){rt&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const Xt=Mt.update(b),Ut=b.material;Ut.visible&&N.push(b,Xt,Ut,ft,Xe.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(pe))){const Xt=Mt.update(b),Ut=b.material;if(rt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Xe.copy(Xt.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(Ut)){const qt=Xt.groups;for(let Zt=0,re=qt.length;Zt<re;Zt++){const ce=qt[Zt],kt=Ut[ce.materialIndex];kt&&kt.visible&&N.push(b,Xt,kt,ft,Xe.z,ce,F)}}else Ut.visible&&N.push(b,Xt,Ut,ft,Xe.z,null,F)}}const zt=b.children;for(let Xt=0,Ut=zt.length;Xt<Ut;Xt++)Eo(zt[Xt],F,ft,rt)}function To(b,F,ft,rt){const{opaque:st,transmissive:zt,transparent:Xt}=b;U.setupLightsView(ft),ge===!0&&Vt.setGlobalState(V.clippingPlanes,ft),rt&&E.viewport(yt.copy(rt)),st.length>0&&Vi(st,F,ft),zt.length>0&&Vi(zt,F,ft),Xt.length>0&&Vi(Xt,F,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function os(b,F,ft,rt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[rt.id]===void 0){const kt=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[rt.id]=new Bi(1,1,{generateMipmaps:!0,type:kt?ca:hi,minFilter:ts,samples:Math.max(4,O.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const zt=U.state.transmissionRenderTarget[rt.id],Xt=rt.viewport||yt;zt.setSize(Xt.z*V.transmissionResolutionScale,Xt.w*V.transmissionResolutionScale);const Ut=V.getRenderTarget(),qt=V.getActiveCubeFace(),Zt=V.getActiveMipmapLevel();V.setRenderTarget(zt),V.getClearColor(z),mt=V.getClearAlpha(),mt<1&&V.setClearColor(16777215,.5),V.clear(),Ie&&le.render(ft);const re=V.toneMapping;V.toneMapping=oa;const ce=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),U.setupLightsView(rt),ge===!0&&Vt.setGlobalState(V.clippingPlanes,rt),Vi(b,ft,rt),pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Me=0,_e=F.length;Me<_e;Me++){const Ze=F[Me],{object:He,geometry:Sn,material:Bt,group:on}=Ze;if(Bt.side===Oa&&He.layers.test(rt.layers)){const we=Bt.side;Bt.side=$n,Bt.needsUpdate=!0,Vl(He,ft,rt,Sn,Bt,on),Bt.side=we,Bt.needsUpdate=!0,kt=!0}}kt===!0&&(pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt))}V.setRenderTarget(Ut,qt,Zt),V.setClearColor(z,mt),ce!==void 0&&(rt.viewport=ce),V.toneMapping=re}function Vi(b,F,ft){const rt=F.isScene===!0?F.overrideMaterial:null;for(let st=0,zt=b.length;st<zt;st++){const Xt=b[st],{object:Ut,geometry:qt,group:Zt}=Xt;let re=Xt.material;re.allowOverride===!0&&rt!==null&&(re=rt),Ut.layers.test(ft.layers)&&Vl(Ut,F,ft,qt,re,Zt)}}function Vl(b,F,ft,rt,st,zt){Y!==null&&st.isNodeMaterial&&Y.setObject(b,st),b.onBeforeRender(V,F,ft,rt,st,zt),b.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),st.onBeforeRender(V,F,ft,rt,b,zt),st.transparent===!0&&st.side===Oa&&st.forceSinglePass===!1?(st.side=$n,st.needsUpdate=!0,V.renderBufferDirect(ft,F,rt,st,b,zt),st.side=Fa,st.needsUpdate=!0,V.renderBufferDirect(ft,F,rt,st,b,zt),st.side=Oa):V.renderBufferDirect(ft,F,rt,st,b,zt),b.onAfterRender(V,F,ft,rt,st,zt)}function Rr(b,F,ft){F.isScene!==!0&&(F=hn);const rt=lt.get(b),st=U.state.lights,zt=U.state.shadowsArray,Xt=st.state.version,Ut=wt.getParameters(b,st.state,zt,F,ft,U.state.lightProbeGridArray),qt=wt.getProgramCacheKey(Ut);let Zt=rt.programs;rt.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,rt.fog=F.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;rt.envMap=bt.get(b.envMap||rt.environment,re),rt.envMapRotation=rt.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",pi),Zt=new Map,rt.programs=Zt);let ce=Zt.get(qt);if(ce!==void 0){if(rt.currentProgram===ce&&rt.lightsStateVersion===Xt)return Ao(b,Ut),ce}else Ut.uniforms=wt.getUniforms(b),Y!==null&&b.isNodeMaterial&&Y.build(b,ft,Ut),b.onBeforeCompile(Ut,V),ce=wt.acquireProgram(Ut,qt),Zt.set(qt,ce),rt.uniforms=Ut.uniforms;const kt=rt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Vt.uniform),Ao(b,Ut),rt.needsLights=kl(b),rt.lightsStateVersion=Xt,rt.needsLights&&(kt.ambientLightColor.value=st.state.ambient,kt.lightProbe.value=st.state.probe,kt.sunLights.value=st.state.sun,kt.sunLightShadows.value=st.state.sunShadow,kt.directionalLights.value=st.state.directional,kt.directionalLightShadows.value=st.state.directionalShadow,kt.spotLights.value=st.state.spot,kt.spotLightShadows.value=st.state.spotShadow,kt.rectAreaLights.value=st.state.rectArea,kt.ltc_1.value=st.state.rectAreaLTC1,kt.ltc_2.value=st.state.rectAreaLTC2,kt.pointLights.value=st.state.point,kt.pointLightShadows.value=st.state.pointShadow,kt.hemisphereLights.value=st.state.hemi,kt.sunShadowMatrix.value=st.state.sunShadowMatrix,kt.sunShadowCascade.value=st.state.sunShadowCascade,kt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,kt.spotLightMatrix.value=st.state.spotLightMatrix,kt.spotLightMap.value=st.state.spotLightMap,kt.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.lightProbeGrid=U.state.lightProbeGridArray.length>0,rt.currentProgram=ce,rt.uniformsList=null,ce}function bo(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=Fc.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ao(b,F){const ft=lt.get(b);ft.outputColorSpace=F.outputColorSpace,ft.batching=F.batching,ft.batchingColor=F.batchingColor,ft.instancing=F.instancing,ft.instancingColor=F.instancingColor,ft.instancingMorph=F.instancingMorph,ft.skinning=F.skinning,ft.morphTargets=F.morphTargets,ft.morphNormals=F.morphNormals,ft.morphColors=F.morphColors,ft.morphTargetsCount=F.morphTargetsCount,ft.numClippingPlanes=F.numClippingPlanes,ft.numIntersection=F.numClipIntersection,ft.vertexAlphas=F.vertexAlphas,ft.vertexTangents=F.vertexTangents,ft.toneMapping=F.toneMapping}function Ro(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(F.matrixWorld);for(let ft=0,rt=b.length;ft<rt;ft++){const st=b[ft];if(st.texture!==null&&st.boundingBox.containsPoint(C))return st}return null}function Co(b,F,ft,rt,st){F.isScene!==!0&&(F=hn),pt.resetTextureUnits();const zt=F.fog,Xt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?F.environment:null,Ut=ut===null?V.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:De.workingColorSpace,qt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Zt=bt.get(rt.envMap||Xt,qt),re=rt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ce=!!ft.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),kt=!!ft.morphAttributes.position,Me=!!ft.morphAttributes.normal,_e=!!ft.morphAttributes.color;let Ze=oa;rt.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ze=V.toneMapping);const He=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Sn=He!==void 0?He.length:0,Bt=lt.get(rt),on=U.state.lights;if(ge===!0&&(xe===!0||b!==ht)){const be=b===ht&&rt.id===at;Vt.setState(rt,b,be)}let we=!1;rt.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==on.state.version||Bt.outputColorSpace!==Ut||st.isBatchedMesh&&Bt.batching===!1||!st.isBatchedMesh&&Bt.batching===!0||st.isBatchedMesh&&Bt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Bt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Bt.instancing===!1||!st.isInstancedMesh&&Bt.instancing===!0||st.isSkinnedMesh&&Bt.skinning===!1||!st.isSkinnedMesh&&Bt.skinning===!0||st.isInstancedMesh&&Bt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Bt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Bt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Bt.instancingMorph===!1&&st.morphTexture!==null||Bt.envMap!==Zt||rt.fog===!0&&Bt.fog!==zt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Vt.numPlanes||Bt.numIntersection!==Vt.numIntersection)||Bt.vertexAlphas!==re||Bt.vertexTangents!==ce||Bt.morphTargets!==kt||Bt.morphNormals!==Me||Bt.morphColors!==_e||Bt.toneMapping!==Ze||Bt.morphTargetsCount!==Sn||!!Bt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Bt.__version=rt.version);let Gn=Bt.currentProgram;we===!0&&(Gn=Rr(rt,F,st),Y&&rt.isNodeMaterial&&Y.onUpdateProgram(rt,Gn,Bt));let ei=!1,Xi=!1,ve=!1;const Be=Gn.getUniforms(),Je=Bt.uniforms;if(E.useProgram(Gn.program)&&(ei=!0,Xi=!0,ve=!0),rt.id!==at&&(at=rt.id,Xi=!0),Bt.needsLights){const be=Ro(U.state.lightProbeGridArray,st);Bt.lightProbeGrid!==be&&(Bt.lightProbeGrid=be,Xi=!0)}if(ei||ht!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Be.setValue(W,"projectionMatrix",b.projectionMatrix),Be.setValue(W,"viewMatrix",b.matrixWorldInverse);const ln=Be.map.cameraPosition;ln!==void 0&&ln.setValue(W,ie.setFromMatrixPosition(b.matrixWorld)),O.logarithmicDepthBuffer&&Be.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Be.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),ht!==b&&(ht=b,Xi=!0,ve=!0)}if(Bt.needsLights&&(on.state.sunShadowMap.length>0&&Be.setValue(W,"sunShadowMap",on.state.sunShadowMap,pt),on.state.directionalShadowMap.length>0&&Be.setValue(W,"directionalShadowMap",on.state.directionalShadowMap,pt),on.state.spotShadowMap.length>0&&Be.setValue(W,"spotShadowMap",on.state.spotShadowMap,pt),on.state.pointShadowMap.length>0&&Be.setValue(W,"pointShadowMap",on.state.pointShadowMap,pt)),st.isSkinnedMesh){Be.setOptional(W,st,"bindMatrix"),Be.setOptional(W,st,"bindMatrixInverse");const be=st.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),Be.setValue(W,"boneTexture",be.boneTexture,pt))}st.isBatchedMesh&&(Be.setOptional(W,st,"batchingTexture"),Be.setValue(W,"batchingTexture",st._matricesTexture,pt),Be.setOptional(W,st,"batchingIdTexture"),Be.setValue(W,"batchingIdTexture",st._indirectTexture,pt),Be.setOptional(W,st,"batchingColorTexture"),st._colorsTexture!==null&&Be.setValue(W,"batchingColorTexture",st._colorsTexture,pt));const ni=ft.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&k.update(st,ft,Gn),(Xi||Bt.receiveShadow!==st.receiveShadow)&&(Bt.receiveShadow=st.receiveShadow,Be.setValue(W,"receiveShadow",st.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=fC()),Xi){if(Be.setValue(W,"toneMappingExposure",V.toneMappingExposure),Bt.needsLights&&Xl(Je,ve),zt&&rt.fog===!0&&jt.refreshFogUniforms(Je,zt),jt.refreshMaterialUniforms(Je,rt,dt,Q,U.state.transmissionRenderTarget[b.id]),Bt.needsLights&&Bt.lightProbeGrid){const be=Bt.lightProbeGrid;Je.probesSH.value=be.texture,Je.probesMin.value.copy(be.boundingBox.min),Je.probesMax.value.copy(be.boundingBox.max),Je.probesResolution.value.copy(be.resolution)}Fc.upload(W,bo(Bt),Je,pt)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Fc.upload(W,bo(Bt),Je,pt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Be.setValue(W,"center",st.center),Be.setValue(W,"modelViewMatrix",st.modelViewMatrix),Be.setValue(W,"normalMatrix",st.normalMatrix),Be.setValue(W,"modelMatrix",st.matrixWorld),rt.uniformsGroups!==void 0){const be=rt.uniformsGroups;for(let ln=0,pa=be.length;ln<pa;ln++){const Wl=be[ln];Et.update(Wl,Gn),Et.bind(Wl,Gn)}}return Gn}function Xl(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function kl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(b,F,ft){const rt=lt.get(b);rt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),lt.get(b.texture).__webglTexture=F,lt.get(b.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ft,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const ft=lt.get(b);ft.__webglFramebuffer=F,ft.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,ft=0){ut=b,q=F,X=ft;let rt=null,st=!1,zt=!1;if(b){const Ut=lt.get(b);if(Ut.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Ut.__webglFramebuffer),yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest,E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),at=-1;return}else if(Ut.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Ut.__hasExternalTextures)pt.rebindTextures(b,lt.get(b.texture).__webglTexture,lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(Ut.__boundDepthTexture!==re){if(re!==null&&lt.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(zt=!0);const Zt=lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?rt=Zt[F][ft]:rt=Zt[F],st=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?rt=lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?rt=Zt[ft]:rt=Zt,yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest}else yt.copy(_t).multiplyScalar(dt).floor(),Qt.copy(Rt).multiplyScalar(dt).floor(),Yt=Ve;if(ft!==0&&(rt=nt),E.bindFramebuffer(W.FRAMEBUFFER,rt)&&E.drawBuffers(b,rt),E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),st){const Ut=lt.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,ft)}else if(zt){const Ut=F;for(let qt=0;qt<b.textures.length;qt++){const Zt=lt.get(b.textures[qt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,ft,Ut)}}else if(b!==null&&ft!==0){const Ut=lt.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ut.__webglTexture,ft)}at=-1};function mi(b){const F=lt.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=O.textureFormatReadable(b.format),F.__typeReadable=O.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,ft,rt,st,zt,Xt,Ut=0){if(!(b&&b.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt){E.bindFramebuffer(W.FRAMEBUFFER,qt);try{const Zt=b.textures[Ut],re=Zt.format,ce=Zt.type;b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut);const kt=mi(Zt);if(kt.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-rt&&ft>=0&&ft<=b.height-st&&W.readPixels(F,ft,rt,st,Nt.convert(re),Nt.convert(ce),zt)}finally{const Zt=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,F,ft,rt,st,zt,Xt,Ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt)if(F>=0&&F<=b.width-rt&&ft>=0&&ft<=b.height-st){E.bindFramebuffer(W.FRAMEBUFFER,qt);const Zt=b.textures[Ut],re=Zt.format,ce=Zt.type;b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ut);const kt=mi(Zt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Me),W.bufferData(W.PIXEL_PACK_BUFFER,zt.byteLength,W.STREAM_READ),W.readPixels(F,ft,rt,st,Nt.convert(re),Nt.convert(ce),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const _e=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,_e);const Ze=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await RT(W,Ze,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Me),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,zt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Me),W.deleteSync(Ze),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,ft=0){const rt=Math.pow(2,-ft),st=Math.floor(b.image.width*rt),zt=Math.floor(b.image.height*rt),Xt=F!==null?F.x:0,Ut=F!==null?F.y:0;pt.setTexture2D(b,0),W.copyTexSubImage2D(W.TEXTURE_2D,ft,0,0,Xt,Ut,st,zt),E.unbindTexture()},this.copyTextureToTexture=function(b,F,ft=null,rt=null,st=0,zt=0){let Xt,Ut,qt,Zt,re,ce,kt,Me,_e;const Ze=b.isCompressedTexture?b.mipmaps[zt]:b.image;if(ft!==null)Xt=ft.max.x-ft.min.x,Ut=ft.max.y-ft.min.y,qt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,re=ft.min.y,ce=ft.isBox3?ft.min.z:0;else{const Je=Math.pow(2,-st);Xt=Math.floor(Ze.width*Je),Ut=Math.floor(Ze.height*Je),b.isDataArrayTexture?qt=Ze.depth:b.isData3DTexture?qt=Math.floor(Ze.depth*Je):qt=1,Zt=0,re=0,ce=0}rt!==null?(kt=rt.x,Me=rt.y,_e=rt.z):(kt=0,Me=0,_e=0);const He=Nt.convert(F.format),Sn=Nt.convert(F.type);let Bt;F.isData3DTexture?(pt.setTexture3D(F,0),Bt=W.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(pt.setTexture2DArray(F,0),Bt=W.TEXTURE_2D_ARRAY):(pt.setTexture2D(F,0),Bt=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,F.unpackAlignment);const on=E.getParameter(W.UNPACK_ROW_LENGTH),we=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(W.UNPACK_SKIP_PIXELS),ei=E.getParameter(W.UNPACK_SKIP_ROWS),Xi=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Ze.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ze.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Zt),E.pixelStorei(W.UNPACK_SKIP_ROWS,re),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ce);const ve=b.isDataArrayTexture||b.isData3DTexture,Be=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Je=lt.get(b),ni=lt.get(F),be=lt.get(Je.__renderTarget),ln=lt.get(ni.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,be.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let pa=0;pa<qt;pa++)ve&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,lt.get(b).__webglTexture,st,ce+pa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,lt.get(F).__webglTexture,zt,_e+pa)),W.blitFramebuffer(Zt,re,Xt,Ut,kt,Me,Xt,Ut,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(st!==0||b.isRenderTargetTexture||lt.has(b)){const Je=lt.get(b),ni=lt.get(F);E.bindFramebuffer(W.READ_FRAMEBUFFER,K),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,tt);for(let be=0;be<qt;be++)ve?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Je.__webglTexture,st,ce+be):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Je.__webglTexture,st),Be?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ni.__webglTexture,zt,_e+be):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ni.__webglTexture,zt),st!==0?W.blitFramebuffer(Zt,re,Xt,Ut,kt,Me,Xt,Ut,W.COLOR_BUFFER_BIT,W.NEAREST):Be?W.copyTexSubImage3D(Bt,zt,kt,Me,_e+be,Zt,re,Xt,Ut):W.copyTexSubImage2D(Bt,zt,kt,Me,Zt,re,Xt,Ut);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Be?b.isDataTexture||b.isData3DTexture?W.texSubImage3D(Bt,zt,kt,Me,_e,Xt,Ut,qt,He,Sn,Ze.data):F.isCompressedArrayTexture?W.compressedTexSubImage3D(Bt,zt,kt,Me,_e,Xt,Ut,qt,He,Ze.data):W.texSubImage3D(Bt,zt,kt,Me,_e,Xt,Ut,qt,He,Sn,Ze):b.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,zt,kt,Me,Xt,Ut,He,Sn,Ze.data):b.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,zt,kt,Me,Ze.width,Ze.height,He,Ze.data):W.texSubImage2D(W.TEXTURE_2D,zt,kt,Me,Xt,Ut,He,Sn,Ze);E.pixelStorei(W.UNPACK_ROW_LENGTH,on),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,we),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(W.UNPACK_SKIP_ROWS,ei),E.pixelStorei(W.UNPACK_SKIP_IMAGES,Xi),zt===0&&F.generateMipmaps&&W.generateMipmap(Bt),E.unbindTexture()},this.initRenderTarget=function(b){lt.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){q=0,X=0,ut=null,E.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const Tr=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],rs=o=>{const e=o.reduce((u,f)=>u+f[0],0)/o.length,i=o.reduce((u,f)=>u+f[1],0)/o.length,s=o.reduce((u,f)=>u+f[2],0)/o.length;return new $(e,i,s)},Cm=(o,e)=>{const[i,s,u]=o,f=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],d=[u[0]-i[0],u[1]-i[1],u[2]-i[2]],h=f[1]*d[2]-f[2]*d[1],p=f[2]*d[0]-f[0]*d[2],m=f[0]*d[1]-f[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),g=new $(h/S,p/S,m/S);return g.dot(e)<0&&g.negate(),g},So=o=>{const e=new da,i=[],s=[];for(const u of o){const f=rs(u),d=Cm(u,f),h=d.x,p=d.y,m=d.z,[S,g,v]=u,y=[g[0]-S[0],g[1]-S[1],g[2]-S[2]],R=[v[0]-S[0],v[1]-S[1],v[2]-S[2]],w=y[1]*R[2]-y[2]*R[1],M=y[2]*R[0]-y[0]*R[2],x=y[0]*R[1]-y[1]*R[0],G=w*f.x+M*f.y+x*f.z>=0?u:[...u].reverse();for(let C=1;C<G.length-1;C++)i.push(...G[0],...G[C],...G[C+1]),s.push(h,p,m,h,p,m,h,p,m)}return e.setAttribute("position",new Fi(i,3)),e.setAttribute("normal",new Fi(s,3)),e},Zx=o=>{const e=Math.abs(o.y)>.9?new $(0,0,1):new $(0,1,0),i=e.clone().sub(o.clone().multiplyScalar(e.dot(o))).normalize(),s=new $().crossVectors(i,o).normalize(),u=new nn().makeBasis(s,i,o);return{normal:o,up:i,orientation:new dn().setFromRotationMatrix(u)}},Kx=o=>Zx(new $(...o).normalize()),wm=o=>Zx(Cm(o,rs(o))),Hl=o=>{const e=new $(0,0,1),i=new dn().setFromUnitVectors(o.normal,e),s=o.up.clone().applyQuaternion(i);return new dn().setFromAxisAngle(new $(0,0,1),Math.atan2(s.x,s.y)).multiply(i)},Qx=o=>{const e=new Image,i=new Hn(e);return i.colorSpace=di,e.onload=()=>{i.needsUpdate=!0},e.src=o.toDataURL("image/png"),i};var hC=fx();function xo({isRolling:o,error:e,result:i}){return hC.createPortal($t.jsx("p",{className:"hint",children:o?"Rolling...":e||(i!==null?`You rolled ${i}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")}),document.body)}const fo=Math.PI/180,pC=3,mC=7,gC=.98,Dl=o=>1-(1-o)**3,Jx=o=>new dn().setFromEuler(new Hi(o.x*fo,o.y*fo,o.z*fo,"XYZ")),up=o=>(o%360+540)%360-180,jx=o=>{const e=new $(o.x,o.y,o.z),i=e.length();return i<1e-9?new $(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},_C=(o,e)=>{const i=f=>Jx({x:o.x+(e.x-o.x)*Dl(f),y:o.y+(e.y-o.y)*Dl(f),z:o.z+(e.z-o.z)*Dl(f)}),s=i(gC),u=i(1);return jx(u.multiply(s.clone().invert()))},vC=(o,e,i)=>{const s=Jx(o),u=jx(s.clone().invert().multiply(e)).applyQuaternion(s).normalize(),f=Math.random()*Math.PI,d=new dn().setFromAxisAngle(u,-f).multiply(e),h=new Hi().setFromQuaternion(d,"XYZ"),p={x:h.x/fo,y:h.y/fo,z:h.z/fo},m=[];for(let g=pC;g<=mC;g++){const v=i-g;if(!(v<1))for(const y of[1,-1])for(const R of[1,-1])for(const w of[1,-1]){const M={x:o.x+y*360*g,y:o.y+R*360*v,z:o.z+w*360*i};M.x+=up(p.x-M.x),M.y+=up(p.y-M.y),M.z+=up(p.z-M.z);const x=_C(o,M).dot(u);m.push({rotation:M,dot:x})}}const S=m.filter(g=>g.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((g,v)=>v.dot>g.dot?v:g).rotation};function SC(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const la=Math.PI/180,qS=65,YS=.5,xC=10,MC=1500,yC=750,EC=260,ZS=(o,e,i)=>Math.min(i,Math.max(e,o)),TC=o=>{const e=new Hi().setFromQuaternion(o,"XYZ");return{x:e.x/la,y:e.y/la,z:e.z/la}};function Mo({sides:o,resolveTarget:e,initialRotation:i={x:0,y:0,z:0}}){const s=Te.useRef(null),u=Te.useRef({...i}),f=Te.useRef({...i}),d=Te.useRef(null),h=Te.useRef(null),p=Te.useRef(null),m=Te.useRef(!1),[S,g]=Te.useState(!1),[v,y]=Te.useState(!1),[R,w]=Te.useState(null),[M,x]=Te.useState(null),P=Te.useRef({sides:o,resolveTarget:e});P.current={sides:o,resolveTarget:e};const G=Te.useCallback(B=>{u.current=B,s.current?.rotation.set(B.x*la,B.y*la,B.z*la)},[]),C=Te.useCallback((B,Y)=>{p.current&&cancelAnimationFrame(p.current);const nt={...u.current},K=performance.now();return new Promise(tt=>{const q=X=>{const ut=Math.min((X-K)/Y,1),at=Dl(ut);G({x:nt.x+(B.x-nt.x)*at,y:nt.y+(B.y-nt.y)*at,z:nt.z+(B.z-nt.z)*at}),ut<1?p.current=requestAnimationFrame(q):(p.current=null,tt())};p.current=requestAnimationFrame(q)})},[G]),N=Te.useCallback((B,Y)=>{p.current&&cancelAnimationFrame(p.current);const nt=s.current;if(!nt)return Promise.resolve();const K=nt.quaternion.clone(),tt=performance.now();return new Promise(q=>{const X=ut=>{const at=Math.min((ut-tt)/Y,1);nt.quaternion.slerpQuaternions(K,B,Dl(at)),u.current=TC(nt.quaternion),at<1?p.current=requestAnimationFrame(X):(p.current=null,q())};p.current=requestAnimationFrame(X)})},[]),U=Te.useCallback(async()=>{m.current=!0,g(!0),w(null),x(null);try{const B=await SC(P.current.sides),Y=P.current.resolveTarget(B),nt=u.current,K=vC(nt,Y,xC);await C(K,MC),await N(Y,yC),f.current=u.current,g(!1),m.current=!1,w(B)}catch(B){g(!1),m.current=!1,x(B instanceof Error?B.message:"Roll failed.")}},[N,C]),D=Te.useCallback(B=>{if(m.current)return;const Y=B.currentTarget.getBoundingClientRect();d.current={centerX:Y.left+Y.width/2,centerY:Y.top+Y.height/2,halfWidth:Y.width/2,halfHeight:Y.height/2,nx:0,ny:0},B.currentTarget.setPointerCapture(B.pointerId),y(!0)},[]),T=Te.useCallback(B=>{const Y=d.current;!Y||m.current||(Y.nx=ZS((B.clientX-Y.centerX)/Y.halfWidth,-1,1),Y.ny=ZS((B.clientY-Y.centerY)/Y.halfHeight,-1,1),!h.current&&(h.current=requestAnimationFrame(()=>{h.current=null;const nt=f.current;G({x:nt.x-Y.ny*qS,y:nt.y+Y.nx*qS,z:nt.z})})))},[G]),L=Te.useCallback(()=>{const B=d.current;if(!B)return;d.current=null,y(!1),h.current&&(cancelAnimationFrame(h.current),h.current=null),Math.abs(B.nx)>=YS||Math.abs(B.ny)>=YS?U():C(f.current,EC)},[C,U]),V=Te.useCallback(()=>{p.current&&cancelAnimationFrame(p.current)},[]);return{meshRef:s,rotationRef:u,cancelAnimation:V,isRolling:S,isDragging:v,error:M,result:R,onPointerDown:D,onPointerMove:T,onPointerUp:L}}let Er=null,Hc=0,ho=null,KS=!1;const bC=()=>KS?!1:(KS=!0,!0),AC=()=>{if(ho!==null&&(clearTimeout(ho),ho=null),Hc+=1,!Er){const o=new Ai(28,1,.1,100);o.position.set(0,0,7),o.lookAt(0,0,0);const e=new dC({alpha:!0,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(0,0),Er={renderer:e,camera:o}}return Er},RC=()=>{Hc-=1,!(Hc>0||ho!==null)&&(ho=setTimeout(()=>{ho=null,!(Hc>0||!Er)&&(Er.renderer.domElement.remove(),Er.renderer.dispose(),Er.renderer.forceContextLoss(),Er=null)},0))},$x={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:769384,cssTop:[11,189,104],cssBottom:[9,165,90],label:"#ffffff"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},Dm=[4,6,8,10,12,20],Nm=["red","yellow","green","blue","black","white"];function QS(o,e){return o[(o.indexOf(e)+1)%o.length]}const cp={sides:6,color:"red",translucent:!0},CC=.87,wC=o=>o?CC:1;function DC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=Dm.includes(e)?e:cp.sides,s=o.get("c")?.toLowerCase(),u=s!==void 0&&Nm.includes(s)?s:cp.color,f=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=f==="true"?!0:f==="false"?!1:cp.translucent;return{sides:i,color:u,translucent:d}}function yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:u,buildMesh:f}){const d=Te.useRef(null),h=Te.useRef(null),p=Te.useRef(null),m=Te.useRef(f);return m.current=f,Te.useEffect(()=>{const S=new XT,g=m.current({palette:$x[o],opacity:wC(e),translucent:e});g.rotation.set(s.current.x*la,s.current.y*la,s.current.z*la),S.add(g),S.add(new d1(16777215,1)),S.add(new l1(16777215,12303291,1));const v=new f1(16777215,1);return v.position.set(3,4,5),S.add(v),i.current=g,h.current=S,()=>{u(),g.geometry.dispose(),g.material.dispose(),g.children.forEach(y=>{const R=y;R.geometry.dispose(),R.material.map?.dispose(),R.material.dispose()}),i.current=null,h.current=null}},[o,e,i,s,u]),Te.useEffect(()=>{const S=d.current;if(!S)return;const{renderer:g,camera:v}=AC(),y=()=>{const M=S.clientWidth,x=S.clientHeight;g.setSize(M,x,!1),v.aspect=M/x,v.updateProjectionMatrix()},R=new ResizeObserver(y);R.observe(S),y(),h.current&&g.render(h.current,v),bC()&&g.getContext().finish(),S.appendChild(g.domElement);const w=()=>{p.current=requestAnimationFrame(w),h.current&&g.render(h.current,v)};return w(),()=>{g.domElement.remove(),R.disconnect(),p.current&&cancelAnimationFrame(p.current),RC()}},[]),{mountRef:d}}const NC=1.01,UC=2,LC=.95,OC=1.9,PC=.07,Al=512,JS=[.246667,.5,.753333],IC=.055733,zC="#ffffff",BC=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],FC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},HC=o=>{const e=[],i=o/2,s=[1,-1];for(const u of[0,1,2]){const[f,d]=[0,1,2].filter(h=>h!==u);for(const h of s){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([S,g])=>{const v=[0,0,0];return v[u]=h,v[f]=S,v[d]=g,v}),m=[];for(let S=0;S<4;S++){const g=p[S],v=p[(S+1)%4];m.push(Tr(g,v,i)),m.push(Tr(v,g,i))}e.push(m)}}for(const u of s)for(const f of s)for(const d of s)e.push([[u*(1-o),f,d],[u,f*(1-o),d],[u,f,d*(1-o)]]);return e},GC=HC(PC),jS=BC.map(Kx),$S=(o,e,i)=>{const s=document.createElement("canvas");s.width=Al,s.height=Al;const u=s.getContext("2d");if(!u)return null;const f=IC*Al;u.fillStyle=e;for(const[p,m]of FC[o]){const S=JS[m-1]*Al,g=JS[p-1]*Al;u.beginPath(),u.arc(S,g,f,0,Math.PI*2),u.fill()}const d=Qx(s),h=new Kc({map:d,transparent:!0,side:Fa,depthWrite:!1});return new Pn(new go(i,i),h)};function VC({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:u,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:6,resolveTarget:y=>Hl(jS[y-1])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:u,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(GC),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI);return jS.forEach((C,N)=>{const U=N+1,D=$S(U,y.label,UC);if(!D)return;D.position.copy(C.normal).multiplyScalar(NC),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const T=$S(U,zC,OC);T&&(T.renderOrder=-1,T.position.copy(C.normal).multiplyScalar(LC),T.quaternion.copy(C.orientation).multiply(P),x.add(T))}),x}});return $t.jsxs("div",{className:`stage stage--six-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const Gl=({text:o,fontPx:e,color:i,planeSize:s,shadow:u})=>{const f=document.createElement("canvas");f.width=256,f.height=256;const d=f.getContext("2d");if(!d)return null;d.font=`700 ${e}px dice-font, system-ui, sans-serif`,d.textAlign="center",d.textBaseline="middle",d.fillStyle=i,u&&(d.shadowColor=u.color,d.shadowBlur=u.blur),d.fillText(o,128,136);const h=Qx(f),p=new Kc({map:h,transparent:!0,side:Fa,depthWrite:!1});return new Pn(new go(s,s),p)},XC=.8,La=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],aa=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],tm=[1,2,3,4],tx=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],kC=[180,180,0,180,0,180,0,180,180,0,180,180],WC={x:-177.2356,y:55.25,z:45},em=aa.map(o=>{const e=o.map(s=>La[s]),i=rs(e);return{normal:Cm(e,i),center:i}}),qC=.07,YC=o=>{const e=[];for(const i of aa){const s=[];for(let u=0;u<3;u++){const f=La[i[u]],d=La[i[(u+1)%3]],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),p=o/h;s.push(Tr(f,d,p)),s.push(Tr(d,f,p))}e.push(s)}for(let i=0;i<La.length;i++){const s=[];for(let u=0;u<La.length;u++){if(u===i)continue;const f=La[i],d=La[u],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]);s.push(Tr(f,d,o/h))}e.push(s)}return e},ZC=YC(qC),KC=(o,e)=>{const i=aa[o][e],s=aa[o][(e+1)%3];for(let u=0;u<aa.length;u++)if(u!==o&&aa[u].includes(i)&&aa[u].includes(s))return tm[u];return tm[o]},QC=o=>{const{normal:e}=em[o],i=new dn().setFromUnitVectors(e,new $(0,-1,0)),s=(o+1)%aa.length,u=em[s].normal.clone().applyQuaternion(i),f=Math.atan2(u.x,u.z);return new dn().setFromAxisAngle(new $(0,1,0),-f).multiply(i)},JC="#ffffff",ex=(o,e)=>Gl({text:String(o),fontPx:160,color:e,planeSize:XC});function jC({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:u,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:4,resolveTarget:y=>QC(tm.indexOf(y)),initialRotation:WC}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:u,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(ZC),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(1,0,0),Math.PI),G=()=>{em.forEach(({normal:C,center:N},U)=>{for(let D=0;D<3;D++){const T=U*3+D,L=KC(U,D),V=aa[U][D],B=aa[U][(D+1)%3],Y=new $().addVectors(new $(...La[V]),new $(...La[B])).multiplyScalar(.5),nt=N.clone().sub(Y).normalize(),K=new $().crossVectors(nt,C),tt=new dn().setFromRotationMatrix(new nn().makeBasis(K,nt,C)),q=new dn().setFromAxisAngle(new $(0,0,1),kC[T]*la),X=ex(L,y.label);X&&(X.renderOrder=1,X.position.copy(new $(...tx[T])).addScaledVector(C,.01),X.quaternion.copy(tt),x.add(X));const ut=ex(L,JC);ut&&(ut.renderOrder=-1,ut.position.copy(new $(...tx[T])).addScaledVector(C,-.05),ut.quaternion.copy(tt).multiply(q).multiply(P),x.add(ut))}})};return document.fonts.load("700 160px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--four-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const nx=1.08,$C=.864,tM=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],ix=tM.map(Kx),t2=.07,so=1.7,$r=[[so,0,0],[-so,0,0],[0,so,0],[0,-so,0],[0,0,so],[0,0,-so]],e2=tM.map(([o,e,i])=>[o>0?0:1,e>0?2:3,i>0?4:5]),n2=o=>{const e=[];for(const i of e2){const s=[];for(let u=0;u<3;u++){const f=$r[i[u]],d=$r[i[(u+1)%3]],h=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),p=o/h;s.push(Tr(f,d,p)),s.push(Tr(d,f,p))}e.push(s)}for(let i=0;i<$r.length;i++){const s=[];for(let p=0;p<$r.length;p++){if(Math.floor(p/2)===Math.floor(i/2))continue;const S=$r[i],g=$r[p],v=Math.hypot(g[0]-S[0],g[1]-S[1],g[2]-S[2]);s.push(Tr(S,g,o/v))}const u=rs(s),f=new $(...$r[i]).normalize(),d=new $(...s[0]).sub(u),h=new $().crossVectors(f,d);s.sort((p,m)=>{const S=new $(...p).sub(u),g=new $(...m).sub(u);return Math.atan2(S.dot(h),S.dot(d))-Math.atan2(g.dot(h),g.dot(d))}),e.push(s)}return e},i2=n2(t2),a2="#ffffff",ax=(o,e)=>Gl({text:String(o),fontPx:200,shadow:{color:"rgba(0, 0, 0, 0.35)",blur:6},color:e,planeSize:$C});function r2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:u,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:8,resolveTarget:y=>Hl(ix[y-1])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:u,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(i2),x=new Pn(M,new _o({color:y.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{ix.forEach((C,N)=>{const U=N+1,D=ax(U,y.label);if(!D)return;D.position.copy(C.normal).multiplyScalar(nx),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const T=ax(U,a2);T&&(T.renderOrder=-1,T.position.copy(C.normal).multiplyScalar(nx-.2),T.quaternion.copy(C.orientation).multiply(P),x.add(T))})};return document.fonts.load("700 200px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--eight-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const s2=.77,eM=2.2,o2=.85,qc=eM*.9*o2,xr=eM*.65,nm=qc*.105573,im=qc*.8,Lc=(qc-im)/(qc-nm),am=[...[0,1,2,3,4].map(o=>[Lc*xr*Math.cos(o*2*Math.PI/5),im,Lc*xr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Lc*xr*Math.cos((o+.5)*2*Math.PI/5),-im,Lc*xr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[xr*Math.cos(o*2*Math.PI/5),nm,xr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[xr*Math.cos((o+.5)*2*Math.PI/5),-nm,xr*Math.sin((o+.5)*2*Math.PI/5)])],rm=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],sm=[1,3,5,7,9,8,6,4,2,10],rx=Array.from({length:sm.length},(o,e)=>wm(rm[e].map(i=>am[i]))),l2="#ffffff",sx=(o,e)=>Gl({text:String(o===10?0:o),fontPx:180,color:e,planeSize:s2});function u2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:u,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:10,resolveTarget:y=>Hl(rx[sm.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:u,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(rm.map(C=>C.map(N=>am[N]))),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{rx.forEach((C,N)=>{const U=sm[N],D=sx(U,y.label);if(!D)return;const T=rs(rm[N].map(V=>am[V]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=sx(U,l2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 180px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--ten-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const c2=1,om=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],lm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],um=[1,2,3,4,5,6,8,7,9,10,11,12],ox=Array.from({length:um.length},(o,e)=>wm(lm[e].map(i=>om[i]))),f2="#ffffff",lx=(o,e)=>Gl({text:String(o),fontPx:160,color:e,planeSize:c2});function d2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:u,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:12,resolveTarget:y=>Hl(ox[um.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:u,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(lm.map(C=>C.map(N=>om[N]))),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{ox.forEach((C,N)=>{const U=um[N],D=lx(U,y.label);if(!D)return;const T=rs(lm[N].map(V=>om[V]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=lx(U,f2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 160px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--twelve-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}const h2=.9,cm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],fm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],dm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],ux=Array.from({length:dm.length},(o,e)=>wm(fm[e].map(i=>cm[i]))),p2="#ffffff",cx=(o,e)=>Gl({text:String(o),fontPx:160,color:e,planeSize:h2});function m2({color:o="red",translucent:e=!0}){const{meshRef:i,rotationRef:s,cancelAnimation:u,isRolling:f,isDragging:d,error:h,result:p,onPointerDown:m,onPointerMove:S,onPointerUp:g}=Mo({sides:20,resolveTarget:y=>Hl(ux[dm.indexOf(y)])}),{mountRef:v}=yo({color:o,translucent:e,meshRef:i,rotationRef:s,cancelAnimation:u,buildMesh:({palette:y,opacity:R,translucent:w})=>{const M=So(fm.map(C=>C.map(N=>cm[N]))),x=new Pn(M,new _o({color:y.hex,roughness:.4,metalness:0,flatShading:!1,transparent:w,opacity:R,depthWrite:!w})),P=new dn().setFromAxisAngle(new $(0,1,0),Math.PI),G=()=>{ux.forEach((C,N)=>{const U=dm[N],D=cx(U,y.label);if(!D)return;const T=rs(fm[N].map(V=>cm[V]));D.position.copy(T),D.position.addScaledVector(C.normal,.01),D.quaternion.copy(C.orientation),D.renderOrder=1,x.add(D);const L=cx(U,p2);L&&(L.renderOrder=-1,L.position.copy(T),L.position.addScaledVector(C.normal,-.05),L.quaternion.copy(C.orientation).multiply(P),x.add(L))})};return document.fonts.load("700 160px dice-font").then(G),x}});return $t.jsxs("div",{className:`stage stage--twenty-sided${d?" is-dragging":""}`,onPointerDown:m,onPointerMove:S,onPointerUp:g,onPointerCancel:g,children:[$t.jsx("div",{ref:v,className:"three-scene"}),$t.jsx(xo,{isRolling:f,error:h,result:p})]})}function g2({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return $t.jsx(jC,{color:e,translucent:i});case 6:return $t.jsx(VC,{color:e,translucent:i});case 8:return $t.jsx(r2,{color:e,translucent:i});case 10:return $t.jsx(u2,{color:e,translucent:i});case 12:return $t.jsx(d2,{color:e,translucent:i});case 20:return $t.jsx(m2,{color:e,translucent:i});default:return null}}const _2=[0,45,90,135];function v2({isOpen:o,onClick:e,ref:i}){return $t.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:$t.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[_2.map(s=>$t.jsx("span",{className:`settings-button__tooth settings-button__tooth--${s}`},s)),$t.jsx("span",{className:"settings-button__hub"})]})})}const S2='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function x2({sides:o,color:e,translucent:i,onSettingsChange:s,onClose:u}){const f=Te.useRef(null),d=Te.useRef(null);return Te.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){u();return}if(p.key!=="Tab")return;const m=f.current;if(!m)return;const S=Array.from(m.querySelectorAll(S2));if(S.length===0)return;const g=S[0],v=S[S.length-1],y=document.activeElement;if(!m.contains(y)){p.preventDefault(),(p.shiftKey?v:g).focus();return}p.shiftKey&&y===g?(p.preventDefault(),v.focus()):!p.shiftKey&&y===v&&(p.preventDefault(),g.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[u]),$t.jsxs("div",{ref:f,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[$t.jsxs("div",{className:"settings-dialog__content",children:[$t.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:$t.jsx("div",{className:"sides-picker__options",children:Dm.map((h,p)=>$t.jsxs(Te.Fragment,{children:[p>0&&$t.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),$t.jsxs("span",{className:"sides-picker__option",children:[$t.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>s({sides:h})}),$t.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),$t.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:$t.jsx("div",{className:"color-picker__options",children:Nm.map(h=>$t.jsxs("span",{className:"color-picker__option",children:[$t.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>s({color:h})}),$t.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${$x[h].cssTop.join(" ")})`}})]},h))})}),$t.jsxs("label",{className:"translucent-toggle",children:[$t.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>s({translucent:h.target.checked})}),$t.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),$t.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:$t.jsx("span",{className:"translucent-toggle__knob"})})]})]}),$t.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:u,children:$t.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),$t.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function M2(){const[o,e]=Te.useState(()=>DC()),[i,s]=Te.useState(!1),u=Te.useRef(null),f=Te.useCallback(h=>{e(p=>({...p,...h}))},[]),d=Te.useCallback(()=>{s(!1),u.current?.focus()},[]);return Te.useEffect(()=>{const h=p=>{if(i||p.ctrlKey||p.altKey||p.metaKey)return;const m=p.key.toLowerCase();m==="s"?e(S=>({...S,sides:QS(Dm,S.sides)})):m==="c"?e(S=>({...S,color:QS(Nm,S.color)})):m==="t"&&e(S=>({...S,translucent:!S.translucent}))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),$t.jsxs($t.Fragment,{children:[$t.jsx(v2,{ref:u,isOpen:i,onClick:()=>s(!0)}),i&&$t.jsx(x2,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:f,onClose:d}),$t.jsx(g2,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const nM=document.getElementById("root");if(!nM)throw new Error("Root element was not found.");kE.createRoot(nM).render($t.jsx(Te.StrictMode,{children:$t.jsx(M2,{})}));

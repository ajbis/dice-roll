(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var eh={exports:{}},el={};var ev;function Hy(){if(ev)return el;ev=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var h in u)h!=="key"&&(f[h]=u[h])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:d,ref:u!==void 0?u:null,props:f}}return el.Fragment=e,el.jsx=i,el.jsxs=i,el}var nv;function Gy(){return nv||(nv=1,eh.exports=Hy()),eh.exports}var bn=Gy(),nh={exports:{}},re={};var iv;function Vy(){if(iv)return re;iv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),T=Symbol.iterator;function R(F){return F===null||typeof F!="object"?null:(F=T&&F[T]||F["@@iterator"],typeof F=="function"?F:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,M={};function D(F,mt,At){this.props=F,this.context=mt,this.refs=M,this.updater=At||O}D.prototype.isReactComponent={},D.prototype.setState=function(F,mt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,mt,"setState")},D.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function B(){}B.prototype=D.prototype;function C(F,mt,At){this.props=F,this.context=mt,this.refs=M,this.updater=At||O}var L=C.prototype=new B;L.constructor=C,y(L,D.prototype),L.isPureReactComponent=!0;var N=Array.isArray;function U(){}var x={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function z(F,mt,At){var J=At.ref;return{$$typeof:o,type:F,key:mt,ref:J!==void 0?J:null,props:At}}function G(F,mt){return z(F.type,mt,F.props)}function K(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function ot(F){var mt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(At){return mt[At]})}var q=/\/+/g;function Q(F,mt){return typeof F=="object"&&F!==null&&F.key!=null?ot(""+F.key):mt.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(U,U):(F.status="pending",F.then(function(mt){F.status==="pending"&&(F.status="fulfilled",F.value=mt)},function(mt){F.status==="pending"&&(F.status="rejected",F.reason=mt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function Y(F,mt,At,J,ht){var Tt=typeof F;(Tt==="undefined"||Tt==="boolean")&&(F=null);var It=!1;if(F===null)It=!0;else switch(Tt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(F.$$typeof){case o:case e:It=!0;break;case S:return It=F._init,Y(It(F._payload),mt,At,J,ht)}}if(It)return ht=ht(F),It=J===""?"."+Q(F,0):J,N(ht)?(At="",It!=null&&(At=It.replace(q,"$&/")+"/"),Y(ht,mt,At,"",function(Ge){return Ge})):ht!=null&&(K(ht)&&(ht=G(ht,At+(ht.key==null||F&&F.key===ht.key?"":(""+ht.key).replace(q,"$&/")+"/")+It)),mt.push(ht)),1;It=0;var _t=J===""?".":J+":";if(N(F))for(var Rt=0;Rt<F.length;Rt++)J=F[Rt],Tt=_t+Q(J,Rt),It+=Y(J,mt,At,Tt,ht);else if(Rt=R(F),typeof Rt=="function")for(F=Rt.call(F),Rt=0;!(J=F.next()).done;)J=J.value,Tt=_t+Q(J,Rt++),It+=Y(J,mt,At,Tt,ht);else if(Tt==="object"){if(typeof F.then=="function")return Y(X(F),mt,At,J,ht);throw mt=String(F),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return It}function ut(F,mt,At){if(F==null)return F;var J=[],ht=0;return Y(F,J,"","",function(Tt){return mt.call(At,Tt,ht++)}),J}function nt(F){if(F._status===-1){var mt=F._result,At=mt();At.then(function(J){(F._status===0||F._status===-1)&&(F._status=1,F._result=J,At.status===void 0&&(At.status="fulfilled",At.value=J))},function(J){(F._status===0||F._status===-1)&&(F._status=2,F._result=J,At.status===void 0&&(At.status="rejected",At.reason=J))}),F._status===-1&&(F._status=0,F._result=At)}if(F._status===1)return F._result.default;throw F._result}var dt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function yt(F){var mt=x.T,At={};At.types=mt!==null?mt.types:null,x.T=At;try{var J=F(),ht=x.S;ht!==null&&ht(At,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(U,dt)}catch(Tt){dt(Tt)}finally{mt!==null&&At.types!==null&&(mt.types=At.types),x.T=mt}}function Qt(F){var mt=x.T;if(mt!==null){var At=mt.types;At===null?mt.types=[F]:At.indexOf(F)===-1&&At.push(F)}else yt(Qt.bind(null,F))}var Yt={map:ut,forEach:function(F,mt,At){ut(F,function(){mt.apply(this,arguments)},At)},count:function(F){var mt=0;return ut(F,function(){mt++}),mt},toArray:function(F){return ut(F,function(mt){return mt})||[]},only:function(F){if(!K(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return re.Activity=v,re.Children=Yt,re.Component=D,re.Fragment=i,re.Profiler=u,re.PureComponent=C,re.StrictMode=s,re.Suspense=g,re.ViewTransition=_,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,re.__COMPILER_RUNTIME={__proto__:null,c:function(F){return x.H.useMemoCache(F)}},re.addTransitionType=Qt,re.cache=function(F){return function(){return F.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(F,mt,At){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var J=y({},F.props),ht=F.key;if(mt!=null)for(Tt in mt.key!==void 0&&(ht=""+mt.key),mt)!w.call(mt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&mt.ref===void 0||(J[Tt]=mt[Tt]);var Tt=arguments.length-2;if(Tt===1)J.children=At;else if(1<Tt){for(var It=Array(Tt),_t=0;_t<Tt;_t++)It[_t]=arguments[_t+2];J.children=It}return z(F.type,ht,J)},re.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},re.createElement=function(F,mt,At){var J,ht={},Tt=null;if(mt!=null)for(J in mt.key!==void 0&&(Tt=""+mt.key),mt)w.call(mt,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=mt[J]);var It=arguments.length-2;if(It===1)ht.children=At;else if(1<It){for(var _t=Array(It),Rt=0;Rt<It;Rt++)_t[Rt]=arguments[Rt+2];ht.children=_t}if(F&&F.defaultProps)for(J in It=F.defaultProps,It)ht[J]===void 0&&(ht[J]=It[J]);return z(F,Tt,ht)},re.createRef=function(){return{current:null}},re.forwardRef=function(F){return{$$typeof:h,render:F}},re.isValidElement=K,re.lazy=function(F){return{$$typeof:S,_payload:{_status:-1,_result:F},_init:nt}},re.memo=function(F,mt){return{$$typeof:m,type:F,compare:mt===void 0?null:mt}},re.startTransition=yt,re.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},re.use=function(F){return x.H.use(F)},re.useActionState=function(F,mt,At){return x.H.useActionState(F,mt,At)},re.useCallback=function(F,mt){return x.H.useCallback(F,mt)},re.useContext=function(F){return x.H.useContext(F)},re.useDebugValue=function(){},re.useDeferredValue=function(F,mt){return x.H.useDeferredValue(F,mt)},re.useEffect=function(F,mt){return x.H.useEffect(F,mt)},re.useEffectEvent=function(F){return x.H.useEffectEvent(F)},re.useId=function(){return x.H.useId()},re.useImperativeHandle=function(F,mt,At){return x.H.useImperativeHandle(F,mt,At)},re.useInsertionEffect=function(F,mt){return x.H.useInsertionEffect(F,mt)},re.useLayoutEffect=function(F,mt){return x.H.useLayoutEffect(F,mt)},re.useMemo=function(F,mt){return x.H.useMemo(F,mt)},re.useOptimistic=function(F,mt){return x.H.useOptimistic(F,mt)},re.useReducer=function(F,mt,At){return x.H.useReducer(F,mt,At)},re.useRef=function(F){return x.H.useRef(F)},re.useState=function(F){return x.H.useState(F)},re.useSyncExternalStore=function(F,mt,At){return x.H.useSyncExternalStore(F,mt,At)},re.useTransition=function(){return x.H.useTransition()},re.version="19.3.0",re}var av;function Dp(){return av||(av=1,nh.exports=Vy()),nh.exports}var me=Dp(),ih={exports:{}},nl={},ah={exports:{}},rh={};var rv;function Xy(){return rv||(rv=1,(function(o){function e(X,Y){var ut=X.length;X.push(Y);t:for(;0<ut;){var nt=ut-1>>>1,dt=X[nt];if(0<u(dt,Y))X[nt]=Y,X[ut]=dt,ut=nt;else break t}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var Y=X[0],ut=X.pop();if(ut!==Y){X[0]=ut;t:for(var nt=0,dt=X.length,yt=dt>>>1;nt<yt;){var Qt=2*(nt+1)-1,Yt=X[Qt],F=Qt+1,mt=X[F];if(0>u(Yt,ut))F<dt&&0>u(mt,Yt)?(X[nt]=mt,X[F]=ut,nt=F):(X[nt]=Yt,X[Qt]=ut,nt=Qt);else if(F<dt&&0>u(mt,ut))X[nt]=mt,X[F]=ut,nt=F;else break t}}return Y}function u(X,Y){var ut=X.sortIndex-Y.sortIndex;return ut!==0?ut:X.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var g=[],m=[],S=1,v=null,_=3,T=!1,R=!1,O=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(X){for(var Y=i(m);Y!==null;){if(Y.callback===null)s(m);else if(Y.startTime<=X)s(m),Y.sortIndex=Y.expirationTime,e(g,Y);else break;Y=i(m)}}function L(X){if(O=!1,C(X),!R)if(i(g)!==null)R=!0,N||(N=!0,K());else{var Y=i(m);Y!==null&&Q(L,Y.startTime-X)}}var N=!1,U=-1,x=5,w=-1;function z(){return y?!0:!(o.unstable_now()-w<x)}function G(){if(y=!1,N){var X=o.unstable_now();w=X;var Y=!0;try{t:{R=!1,O&&(O=!1,D(U),U=-1),T=!0;var ut=_;try{e:{for(C(X),v=i(g);v!==null&&!(v.expirationTime>X&&z());){var nt=v.callback;if(typeof nt=="function"){v.callback=null,_=v.priorityLevel;var dt=nt(v.expirationTime<=X);if(X=o.unstable_now(),typeof dt=="function"){v.callback=dt,C(X),Y=!0;break e}v===i(g)&&s(g),C(X)}else s(g);v=i(g)}if(v!==null)Y=!0;else{var yt=i(m);yt!==null&&Q(L,yt.startTime-X),Y=!1}}break t}finally{v=null,_=ut,T=!1}Y=void 0}}finally{Y?K():N=!1}}}var K;if(typeof B=="function")K=function(){B(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,q=ot.port2;ot.port1.onmessage=G,K=function(){q.postMessage(null)}}else K=function(){M(G,0)};function Q(X,Y){U=M(function(){X(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(X){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var ut=_;_=Y;try{return X()}finally{_=ut}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(X,Y){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ut=_;_=X;try{return Y()}finally{_=ut}},o.unstable_scheduleCallback=function(X,Y,ut){var nt=o.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?nt+ut:nt):ut=nt,X){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=ut+dt,X={id:S++,callback:Y,priorityLevel:X,startTime:ut,expirationTime:dt,sortIndex:-1},ut>nt?(X.sortIndex=ut,e(m,X),i(g)===null&&X===i(m)&&(O?(D(U),U=-1):O=!0,Q(L,ut-nt))):(X.sortIndex=dt,e(g,X),R||T||(R=!0,N||(N=!0,K()))),X},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(X){var Y=_;return function(){var ut=_;_=Y;try{return X.apply(this,arguments)}finally{_=ut}}}})(rh)),rh}var sv;function ky(){return sv||(sv=1,ah.exports=Xy()),ah.exports}var sh={exports:{}},Un={};var ov;function Wy(){if(ov)return Un;ov=1;var o=Dp();function e(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,v,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:T==null?null:T===d?d:""+T,children:S,containerInfo:v,implementation:_}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(S){return{$$typeof:f,_reason:S}},Un.createPortal=function(S,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(S,v,null,_)},Un.flushSync=function(S){var v=g.T,_=s.p;try{if(g.T=null,s.p=2,S)return S()}finally{g.T=v,s.p=_,s.d.f()}},Un.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Un.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Un.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var _=v.as,T=m(_,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,O=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:O}):_==="script"&&s.d.X(S,{crossOrigin:T,integrity:R,fetchPriority:O,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Un.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=m(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(S)},Un.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,T=m(_,v.crossOrigin);s.d.L(S,_,{crossOrigin:T,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Un.preloadModule=function(S,v){if(typeof S=="string")if(v){var _=m(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(S)},Un.requestFormReset=function(S){s.d.r(S)},Un.unstable_batchedUpdates=function(S,v){return S(v)},Un.useFormState=function(S,v,_){return g.H.useFormState(S,v,_)},Un.useFormStatus=function(){return g.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var lv;function qy(){if(lv)return sh.exports;lv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sh.exports=Wy(),sh.exports}var uv;function Yy(){if(uv)return nl;uv=1;var o=ky(),e=Dp(),i=qy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return g(l),t;if(c===r)return g(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var p=!1,A=l.child;A;){if(A===a){p=!0,a=l,r=c;break}if(A===r){p=!0,r=l,a=c;break}A=A.sibling}if(!p){for(A=c.child;A;){if(A===a){p=!0,a=c,r=l;break}if(A===r){p=!0,r=c,a=l;break}A=A.sibling}if(!p)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function v(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&v(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function T(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function R(t){var n=[null,null],a=_(t);return a===null||O(n,t,a.child,{foundSelf:!1}),n}function O(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&O(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var M=null,D=null;function B(t,n,a){return t===a?!0:t===n?(M=t,!0):!1}function C(t,n,a){return t===a?(D=t,!1):t===n?(D!==null&&(M=t),!0):!1}function L(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function N(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var U=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),yt=Symbol.for("react.activity"),Qt=Symbol.for("react.legacy_hidden"),Yt=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),At=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ht?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case ot:return"Profiler";case K:return"StrictMode";case Y:return"Suspense";case ut:return"SuspenseList";case yt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case z:return"Portal";case Q:return t.displayName||"Context";case q:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nt:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case dt:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var It=Array.isArray,_t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ge={pending:!1,data:null,method:null,action:null},he=[],ge=-1;function xe(t){return{current:t}}function te(t){0>ge||(t.current=he[ge],he[ge]=null,ge--)}function ne(t,n){ge++,he[ge]=t.current,t.current=n}var Ve=xe(null),fn=xe(null),Pe=xe(null),$e=xe(null);function W(t,n){switch(ne(Pe,n),ne(fn,t),ne(Ve,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?c_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=c_(n),t=f_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(Ve),ne(Ve,t)}function en(){te(Ve),te(fn),te(Pe)}function Oe(t){var n=t.memoizedState;n!==null&&(Is._currentValue=n.memoizedState,ne($e,t)),n=Ve.current;var a=f_(n,t.type);n!==a&&(ne(fn,t),ne(Ve,a))}function P(t){fn.current===t&&(te(Ve),te(fn)),$e.current===t&&(te($e),Is._currentValue=Ge)}var E,tt;function lt(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+t+tt}var pt=!1;function bt(t,n){if(!t||pt)return"";pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Lt){var Z=Lt}Reflect.construct(t,[],St)}else{try{St.call()}catch(Lt){Z=Lt}St=!1;try{var st=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new t}finally{St&&(st!==void 0?Object.defineProperty(t.prototype,"props",st):delete t.prototype.props)}}}else{try{throw Error()}catch(Lt){Z=Lt}(St=t())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Lt){if(Lt&&Z&&typeof Lt.stack=="string")return[Lt.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],A=c[1];if(p&&A){var I=p.split(`
`),$=A.split(`
`);for(l=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;l<$.length&&!$[l].includes("DetermineComponentFrameRoot");)l++;if(r===I.length||l===$.length)for(r=I.length-1,l=$.length-1;1<=r&&0<=l&&I[r]!==$[l];)l--;for(;1<=r&&0<=l;r--,l--)if(I[r]!==$[l]){if(r!==1||l!==1)do if(r--,l--,0>l||I[r]!==$[l]){var ct=`
`+I[r].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=r&&0<=l);break}}}finally{pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?lt(a):""}function Dt(t,n){switch(t.tag){case 26:case 27:case 5:return lt(t.type);case 16:return lt("Lazy");case 13:return t.child!==n&&n!==null?lt("Suspense Fallback"):lt("Suspense");case 19:return lt("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return lt("Activity");case 30:return lt("ViewTransition");default:return""}}function gt(t){try{var n="",a=null;do n+=Dt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mt=Object.prototype.hasOwnProperty,wt=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,Ot=o.unstable_requestPaint,Vt=o.unstable_now,ee=o.unstable_getCurrentPriorityLevel,oe=o.unstable_ImmediatePriority,k=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,xt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Gt=o.log,Et=o.unstable_setDisableYieldValue,Jt=null,Ht=null;function Ce(t){if(typeof Gt=="function"&&Et(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode(Jt,t)}catch{}}var le=Math.clz32?Math.clz32:wc,jn=Math.log,di=Math.LN2;function wc(t){return t>>>=0,t===0?32:31-(jn(t)/di|0)|0}var jr=256,vr=262144,Ia=4194304;function ca(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Sr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~c,r!==0?l=ca(r):(p&=A,p!==0?l=ca(p):a||(a=A&~t,a!==0&&(l=ca(a))))):(A=r&~c,A!==0?l=ca(A):p!==0?l=ca(p):a||(a=r&~t,a!==0&&(l=ca(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function za(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Fi(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-le(a),l=1<<r;n|=t[r],a&=~l}return n}function so(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(){var t=Ia;return Ia<<=1,(Ia&62914560)===0&&(Ia=4194304),t}function $r(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Hi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function El(t,n,a,r,l,c){var p=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,$=t.hiddenUpdates;for(a=p&~a;0<a;){var ct=31-le(a),St=1<<ct;A[ct]=0,I[ct]=-1;var Z=$[ct];if(Z!==null)for($[ct]=null,ct=0;ct<Z.length;ct++){var st=Z[ct];st!==null&&(st.lane&=-536870913)}a&=~St}r!==0&&xr(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~n))}function xr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-le(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function lo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-le(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function uo(t,n){var a=n&-n;return a=(a&42)!==0?1:co(a),(a&(t.suspendedLanes|n))!==0?0:a}function co(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function fo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tl(){var t=Rt.p;return t!==0?t:(t=window.event,t===void 0?32:Z_(t.type))}function bl(t,n){var a=Rt.p;try{return Rt.p=t,n()}finally{Rt.p=a}}var hi=Math.random().toString(36).slice(2),b="__reactFiber$"+hi,H="__reactProps$"+hi,ft="__reactContainer$"+hi,it="__reactEvents$"+hi,rt="__reactListeners$"+hi,zt="__reactHandles$"+hi,Xt="__reactResources$"+hi,Nt="__reactMarker$"+hi,qt="__reactLoad$"+hi;function Zt(t){delete t[b],delete t[H],delete t[rt],delete t[zt]}function ae(t){var n;if(n=t[b])return n;for(var a=t.parentNode;a;){if(n=a[ft]||a[b]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=C_(t);t!==null;){if(a=t[b])return a;t=C_(t)}return n}t=a,a=t.parentNode}return null}function ue(t){if(t=t[b]||t[ft]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Me(t){var n=t[Xt];return n||(n=t[Xt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Nt]=!0}function Ye(t){t[qt]=void 0}var Fe=new Set,_n={};function Bt(t,n){sn(t,n),sn(t+"Capture",n)}function sn(t,n){for(_n[t]=n,t=0;t<n.length;t++)Fe.add(n[t])}var we=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fn={},$n={};function Gi(t){return Mt.call($n,t)?!0:Mt.call(Fn,t)?!1:we.test(t)?$n[t]=!0:(Fn[t]=!0,!1)}var ve=!1;function ze(){var t=ve;return ve=!1,t}function Qe(t,n,a){if(Gi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function ti(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function be(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function on(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Al(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dc(t){if(!t._valueTracker){var n=fa(t)?"checked":"value";t._valueTracker=Al(t,n,""+t[n])}}function jp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=fa(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var ox=/[\n"\\]/g;function pi(t){return t.replace(ox,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Uc(t,n,a,r,l,c,p,A){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+on(n)):t.value!==""+on(n)&&(t.value=""+on(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?p==="number"&&t.value==n?Nc(t,on(t.value)):Nc(t,on(n)):a!=null?Nc(t,on(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+on(A):t.removeAttribute("name")}function $p(t,n,a,r,l,c,p,A){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Dc(t);return}a=a!=null?""+on(a):"",n=n!=null?""+on(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),Dc(t)}function Nc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ts(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+on(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function tm(t,n,a){if(n!=null&&(n=""+on(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+on(a):""}function em(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(It(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=on(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Dc(t)}function es(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var lx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||lx.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function im(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ve=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(nm(t,l,r),ve=!0)}else for(var c in n)n.hasOwnProperty(c)&&nm(t,c,n[c])}function Lc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(t){return cx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Vi(){}var Oc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,is=null;function am(t){var n=ue(t);if(n&&(t=n.stateNode)){var a=t[H]||null;t:switch(t=n.stateNode,n.type){case"input":if(Uc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[H]||null;if(!l)throw Error(s(90));Uc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&jp(r)}break t;case"textarea":tm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ts(t,!!a.multiple,n,!1)}}}var Ic=!1;function rm(t,n,a){if(Ic)return t(n,a);Ic=!0;try{var r=t(n);return r}finally{if(Ic=!1,(ns!==null||is!==null)&&(Ru(),ns&&(n=ns,t=is,is=ns=null,am(n),t)))for(n=0;n<t.length;n++)am(t[n])}}function ho(t,n){var a=t.stateNode;if(a===null)return null;var r=a[H]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(da)try{var po={};Object.defineProperty(po,"passive",{get:function(){zc=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{zc=!1}var Ba=null,Bc=null,Cl=null;function sm(){if(Cl)return Cl;var t,n=Bc,a=n.length,r,l="value"in Ba?Ba.value:Ba.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var p=a-t;for(r=1;r<=p&&n[a-r]===l[c-r];r++);return Cl=l.slice(t,1<r?1-r:void 0)}function wl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function om(){return!1}function Hn(t){function n(a,r,l,c,p){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(c):c[A]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Dl:om,this.isPropagationStopped=om,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Hn(Fa),mo=U({},Fa,{view:0,detail:0}),fx=Hn(mo),Fc,Hc,go,Nl=U({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Fc=t.screenX-go.screenX,Hc=t.screenY-go.screenY):Hc=Fc=0,go=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),lm=Hn(Nl),dx=U({},Nl,{dataTransfer:0}),hx=Hn(dx),px=U({},mo,{relatedTarget:0}),Gc=Hn(px),mx=U({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=Hn(mx),_x=U({},Fa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vx=Hn(_x),Sx=U({},Fa,{data:0}),um=Hn(Sx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=yx[t])?!!n[t]:!1}function Vc(){return Ex}var Tx=U({},mo,{key:function(t){if(t.key){var n=xx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bx=Hn(Tx),Ax=U({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=Hn(Ax),Rx=U({},Fa,{submitter:0}),Cx=Hn(Rx),wx=U({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),Dx=Hn(wx),Ux=U({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nx=Hn(Ux),Lx=U({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=Hn(Lx),Px=U({},Fa,{newState:0,oldState:0,source:0}),Ix=Hn(Px),zx=[9,13,27,32],Xc=da&&"CompositionEvent"in window,_o=null;da&&"documentMode"in document&&(_o=document.documentMode);var Bx=da&&"TextEvent"in window&&!_o,fm=da&&(!Xc||_o&&8<_o&&11>=_o),dm=" ",hm=!1;function pm(t,n){switch(t){case"keyup":return zx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function Fx(t,n){switch(t){case"compositionend":return mm(n);case"keypress":return n.which!==32?null:(hm=!0,dm);case"textInput":return t=n.data,t===dm&&hm?null:t;default:return null}}function Hx(t,n){if(as)return t==="compositionend"||!Xc&&pm(t,n)?(t=sm(),Cl=Bc=Ba=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fm&&n.locale!=="ko"?null:n.data;default:return null}}var Gx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Gx[t.type]:n==="textarea"}function _m(t,n,a,r){ns?is?is.push(r):is=[r]:ns=r,n=Lu(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var vo=null,So=null;function Vx(t){a_(t,0)}function Ll(t){var n=kt(t);if(jp(n))return t}function vm(t,n){if(t==="change")return n}var Sm=!1;if(da){var kc;if(da){var Wc="oninput"in document;if(!Wc){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Wc=typeof xm.oninput=="function"}kc=Wc}else kc=!1;Sm=kc&&(!document.documentMode||9<document.documentMode)}function Mm(){vo&&(vo.detachEvent("onpropertychange",ym),So=vo=null)}function ym(t){if(t.propertyName==="value"&&Ll(So)){var n=[];_m(n,So,t,Pc(t)),rm(Vx,n)}}function Xx(t,n,a){t==="focusin"?(Mm(),vo=n,So=a,vo.attachEvent("onpropertychange",ym)):t==="focusout"&&Mm()}function kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(So)}function Wx(t,n){if(t==="click")return Ll(n)}function qx(t,n){if(t==="input"||t==="change")return Ll(n)}function Yx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:Yx;function xo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Mt.call(n,l)||!ei(t[l],n[l]))return!1}return!0}function qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,n){var a=Em(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Em(a)}}function bm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?bm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Am(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=qc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=qc(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Zx=da&&"documentMode"in document&&11>=document.documentMode,rs=null,Zc=null,Mo=null,Kc=!1;function Rm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||rs==null||rs!==qc(r)||(r=rs,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mo&&xo(Mo,r)||(Mo=r,r=Lu(Zc,"onSelect"),0<r.length&&(n=new Ul("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=rs)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ss={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},Qc={},Cm={};da&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function yr(t){if(Qc[t])return Qc[t];if(!ss[t])return t;var n=ss[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cm)return Qc[t]=n[a];return t}var wm=yr("animationend"),Dm=yr("animationiteration"),Um=yr("animationstart"),Kx=yr("transitionrun"),Qx=yr("transitionstart"),Jx=yr("transitioncancel"),Nm=yr("transitionend"),Lm=new Map,Jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jc.push("scrollEnd");function Ai(t,n){Lm.set(t,n),Bt(n,[t])}var jx=0;function ha(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Di.identifierPrefix;var a=jx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Om(t){if(t==null||typeof t=="string")return t;var n=null,a=As;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function pa(t,n){return t=Om(t),n=Om(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],os=0,jc=0;function Pl(){for(var t=os,n=jc=os=0;n<t;){var a=mi[n];mi[n++]=null;var r=mi[n];mi[n++]=null;var l=mi[n];mi[n++]=null;var c=mi[n];if(mi[n++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}c!==0&&Pm(a,l,c)}}function Il(t,n,a,r){mi[os++]=t,mi[os++]=n,mi[os++]=a,mi[os++]=r,jc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function $c(t,n,a,r){return Il(t,n,a,r),zl(t)}function Er(t,n){return Il(t,null,null,n),zl(t)}function Pm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-le(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function zl(t){if(50<Xo)throw Xo=0,Au=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ls={};function $x(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,r){return new $x(t,n,a,r)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Im(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Bl(t,n,a,r,l,c){var p=0;if(r=t,typeof r=="function")tf(r)&&(p=1);else if(typeof r=="string")p=Ry(t,a,Ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case yt:return t=Wn(31,a,n,l),t.elementType=yt,t.lanes=c,t;case G:return Tr(a.children,l,c,n);case K:p=8,l|=24;break;case ot:return t=Wn(12,a,n,l|2),t.elementType=ot,t.lanes=c,t;case Y:return t=Wn(13,a,n,l),t.elementType=Y,t.lanes=c,t;case ut:return t=Wn(19,a,n,l),t.elementType=ut,t.lanes=c,t;case Qt:case F:return t=l|32,t=Wn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Q:p=10;break t;case q:p=9;break t;case X:p=11;break t;case nt:p=14;break t;case dt:p=16,r=null;break t}p=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Wn(p,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function Tr(t,n,a,r){return t=Wn(7,t,r,n),t.lanes=a,t}function ef(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function zm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function nf(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=Bm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gt(n)},Bm.set(t,n),n)}return{value:t,source:n,stack:gt(n)}}var us=[],cs=0,Fl=null,yo=0,_i=[],vi=0,Ha=null,Xi=1,ki="";function ga(t,n){us[cs++]=yo,us[cs++]=Fl,Fl=t,yo=n}function Fm(t,n,a){_i[vi++]=Xi,_i[vi++]=ki,_i[vi++]=Ha,Ha=t;var r=Xi;t=ki;var l=32-le(r)-1;r&=~(1<<l),a+=1;var c=32-le(n)+l;if(30<c){var p=l-l%5;c=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Xi=1<<32-le(n)+l|a<<l|r,ki=c+t}else Xi=1<<c|a<<l|r,ki=t}function Hl(t){t.return!==null&&(ga(t,1),Fm(t,1,0))}function af(t){for(;t===Fl;)Fl=us[--cs],us[cs]=null,yo=us[--cs],us[cs]=null;for(;t===Ha;)Ha=_i[--vi],_i[vi]=null,ki=_i[--vi],_i[vi]=null,Xi=_i[--vi],_i[vi]=null}function Hm(t,n){_i[vi++]=Xi,_i[vi++]=ki,_i[vi++]=Ha,Xi=n.id,ki=n.overflow,Ha=t}var Mn=null,Je=null,Se=!1,Ga=null,Si=!1,rf=Error(s(519));function Va(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(gi(n,t)),rf}function Gm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[b]=t,n[H]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Wo.length;a++)Ee(Wo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),$p(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),em(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||l_(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Vi),n=!0):n=!1,n||Va(t,!0)}function Gl(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Mn=Mn.return}}function fs(t){if(t!==Mn)return!1;if(!Se)return Gl(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pd(t.type,t.memoizedProps)),a=!a),a&&Je&&Va(t),Gl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=R_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=R_(t)}else n===27?(n=Je,ar(t.type)?(t=kd,kd=null,Je=t):Je=n):Je=Mn?Mi(t.stateNode.nextSibling):null;return!0}function br(){Je=Mn=null,Se=!1}function sf(){var t=Ga;return t!==null&&(Zn===null?Zn=t:Zn.push.apply(Zn,t),Ga=null),t}function Eo(t){Ga===null?Ga=[t]:Ga.push(t)}var of=xe(null),Ar=null,_a=null;function Xa(t,n,a){ne(of,n._currentValue),n._currentValue=a}function va(t){t._currentValue=of.current,te(of)}function Vl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function lf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;t:for(;c!==null;){var A=c;c=l;for(var I=0;I<n.length;I++)if(A.context===n[I]){c.lanes|=a,A=c.alternate,A!==null&&(A.lanes|=a),Vl(c.return,a,t),r||(p=null);break t}c=A.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Vl(p,a,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,p=l.alternate,p!==null&&(p.lanes|=a),Vl(l.return,a,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Rr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var A=l.type;ei(l.pendingProps.value,p.value)||(t!==null?t.push(A):t=[A])}}else if(l===$e.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Is):t=[Is])}l=l.return}return t!==null&&lf(n,t,a,r),n.flags|=262144,t!==null}function Xl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Ar=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Vm(Ar,t)}function kl(t,n){return Ar===null&&Cr(t),Vm(t,n)}function Vm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(t===null)throw Error(s(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return a}var tM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},eM=o.unstable_scheduleCallback,nM=o.unstable_NormalPriority,dn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new tM,data:new Map,refCount:0}}function To(t){t.refCount--,t.refCount===0&&eM(nM,function(){t.controller.abort()})}function Xm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var bo=null;function iM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ao=null,cf=0,wr=0,ds=null;function aM(t,n){if(Ao===null){var a=Ao=[];cf=0,wr=Ad(),ds={status:"pending",value:void 0,then:function(r){a.push(r)}}}return cf++,n.then(km,km),n}function km(){if(--cf===0&&(bo=null,Ao!==null)){ds!==null&&(ds.status="fulfilled");var t=Ao;Ao=null,wr=0,ds=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function rM(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Wm=_t.S;_t.S=function(t,n){if(z0=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&aM(t,n),bo!==null)for(var a=Ds;a!==null;)Xm(a,bo),a=a.next;if(a=t.types,a!==null){for(var r=Ds;r!==null;)Xm(r,a),r=r.next;if(wr!==0){r=bo,r===null&&(r=bo=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}Wm!==null&&Wm(t,n)};var Dr=xe(null);function ff(){var t=Dr.current;return t!==null?t:Ke.pooledCache}function Wl(t,n){n===null?ne(Dr,Dr.current):ne(Dr,n.pool)}function qm(){var t=ff();return t===null?null:{parent:dn._currentValue,pool:t}}var hs=Error(s(460)),df=Error(s(474)),ql=Error(s(542)),Yl={then:function(){}};function Ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Vi,Vi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Vi,Vi);else{if(t=Ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qm(t),t}throw Nr=n,hs}}function Ur(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,hs):a}}var Nr=null;function Km(){if(Nr===null)throw Error(s(459));var t=Nr;return Nr=null,t}function Qm(t){if(t===hs||t===ql)throw Error(s(483))}var ps=null,Ro=0;function Zl(t){var n=Ro;return Ro+=1,ps===null&&(ps=[]),Zm(ps,t,n)}function ka(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Kl(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Jm(t){function n(j,V){if(t){var et=j.deletions;et===null?(j.deletions=[V],j.flags|=16):et.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function r(j){for(var V=new Map;j!==null;)j.key===null?V.set(j.index,j):V.set(j.key,j),j=j.sibling;return V}function l(j,V){return j=ma(j,V),j.index=0,j.sibling=null,j}function c(j,V,et){return j.index=et,t?(et=j.alternate,et!==null?(et=et.index,et<V?(j.flags|=2,V):et):(j.flags|=134217730,V)):(j.flags|=1048576,V)}function p(j){return t&&j.alternate===null&&(j.flags|=134217730),j}function A(j,V,et,vt){return V===null||V.tag!==6?(V=ef(et,j.mode,vt),V.return=j,V):(V=l(V,et),V.return=j,V)}function I(j,V,et,vt){var Wt=et.type;return Wt===G?(j=ct(j,V,et.props.children,vt,et.key),ka(j,et),j):V!==null&&(V.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===dt&&Ur(Wt)===V.type)?(V=l(V,et.props),ka(V,et),V.return=j,V):(V=Bl(et.type,et.key,et.props,null,j.mode,vt),ka(V,et),V.return=j,V)}function $(j,V,et,vt){return V===null||V.tag!==4||V.stateNode.containerInfo!==et.containerInfo||V.stateNode.implementation!==et.implementation?(V=nf(et,j.mode,vt),V.return=j,V):(V=l(V,et.children||[]),V.return=j,V)}function ct(j,V,et,vt,Wt){return V===null||V.tag!==7?(V=Tr(et,j.mode,vt,Wt),V.return=j,V):(V=l(V,et),V.return=j,V)}function St(j,V,et){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ef(""+V,j.mode,et),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return et=Bl(V.type,V.key,V.props,null,j.mode,et),ka(et,V),et.return=j,et;case z:return V=nf(V,j.mode,et),V.return=j,V;case dt:return V=Ur(V),St(j,V,et)}if(It(V)||J(V))return V=Tr(V,j.mode,et,null),V.return=j,V;if(typeof V.then=="function")return St(j,Zl(V),et);if(V.$$typeof===Q)return St(j,kl(j,V),et);Kl(j,V)}return null}function Z(j,V,et,vt){var Wt=V!==null?V.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Wt!==null?null:A(j,V,""+et,vt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case w:return et.key===Wt?I(j,V,et,vt):null;case z:return et.key===Wt?$(j,V,et,vt):null;case dt:return et=Ur(et),Z(j,V,et,vt)}if(It(et)||J(et))return Wt!==null?null:ct(j,V,et,vt,null);if(typeof et.then=="function")return Z(j,V,Zl(et),vt);if(et.$$typeof===Q)return Z(j,V,kl(j,et),vt);Kl(j,et)}return null}function st(j,V,et,vt,Wt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return j=j.get(et)||null,A(V,j,""+vt,Wt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case w:return j=j.get(vt.key===null?et:vt.key)||null,I(V,j,vt,Wt);case z:return j=j.get(vt.key===null?et:vt.key)||null,$(V,j,vt,Wt);case dt:return vt=Ur(vt),st(j,V,et,vt,Wt)}if(It(vt)||J(vt))return j=j.get(et)||null,ct(V,j,vt,Wt,null);if(typeof vt.then=="function")return st(j,V,et,Zl(vt),Wt);if(vt.$$typeof===Q)return st(j,V,et,kl(V,vt),Wt);Kl(V,vt)}return null}function Lt(j,V,et,vt){for(var Wt=null,Re=null,$t=V,ie=V=0,mn=null;$t!==null&&ie<et.length;ie++){$t.index>ie?(mn=$t,$t=null):mn=$t.sibling;var Ne=Z(j,$t,et[ie],vt);if(Ne===null){$t===null&&($t=mn);break}t&&$t&&Ne.alternate===null&&n(j,$t),V=c(Ne,V,ie),Re===null?Wt=Ne:Re.sibling=Ne,Re=Ne,$t=mn}if(ie===et.length)return a(j,$t),Se&&ga(j,ie),Wt;if($t===null){for(;ie<et.length;ie++)$t=St(j,et[ie],vt),$t!==null&&(V=c($t,V,ie),Re===null?Wt=$t:Re.sibling=$t,Re=$t);return Se&&ga(j,ie),Wt}for($t=r($t);ie<et.length;ie++)mn=st($t,j,ie,et[ie],vt),mn!==null&&(t&&(Ne=mn.alternate,Ne!==null&&$t.delete(Ne.key===null?ie:Ne.key)),V=c(mn,V,ie),Re===null?Wt=mn:Re.sibling=mn,Re=mn);return t&&$t.forEach(function(ur){return n(j,ur)}),Se&&ga(j,ie),Wt}function Kt(j,V,et,vt){if(et==null)throw Error(s(151));for(var Wt=null,Re=null,$t=V,ie=V=0,mn=null,Ne=et.next();$t!==null&&!Ne.done;ie++,Ne=et.next()){$t.index>ie?(mn=$t,$t=null):mn=$t.sibling;var ur=Z(j,$t,Ne.value,vt);if(ur===null){$t===null&&($t=mn);break}t&&$t&&ur.alternate===null&&n(j,$t),V=c(ur,V,ie),Re===null?Wt=ur:Re.sibling=ur,Re=ur,$t=mn}if(Ne.done)return a(j,$t),Se&&ga(j,ie),Wt;if($t===null){for(;!Ne.done;ie++,Ne=et.next())Ne=St(j,Ne.value,vt),Ne!==null&&(V=c(Ne,V,ie),Re===null?Wt=Ne:Re.sibling=Ne,Re=Ne);return Se&&ga(j,ie),Wt}for($t=r($t);!Ne.done;ie++,Ne=et.next())Ne=st($t,j,ie,Ne.value,vt),Ne!==null&&(t&&(mn=Ne.alternate,mn!==null&&$t.delete(mn.key===null?ie:mn.key)),V=c(Ne,V,ie),Re===null?Wt=Ne:Re.sibling=Ne,Re=Ne);return t&&$t.forEach(function(Fy){return n(j,Fy)}),Se&&ga(j,ie),Wt}function de(j,V,et,vt){if(typeof et=="object"&&et!==null&&et.type===G&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case w:t:{for(var Wt=et.key;V!==null;){if(V.key===Wt){if(Wt=et.type,Wt===G){if(V.tag===7){a(j,V.sibling),vt=l(V,et.props.children),ka(vt,et),vt.return=j,j=vt;break t}}else if(V.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===dt&&Ur(Wt)===V.type){a(j,V.sibling),vt=l(V,et.props),ka(vt,et),vt.return=j,j=vt;break t}a(j,V);break}else n(j,V);V=V.sibling}et.type===G?(vt=Tr(et.props.children,j.mode,vt,et.key),ka(vt,et),vt.return=j,j=vt):(vt=Bl(et.type,et.key,et.props,null,j.mode,vt),ka(vt,et),vt.return=j,j=vt)}return p(j);case z:t:{for(Wt=et.key;V!==null;){if(V.key===Wt)if(V.tag===4&&V.stateNode.containerInfo===et.containerInfo&&V.stateNode.implementation===et.implementation){a(j,V.sibling),vt=l(V,et.children||[]),vt.return=j,j=vt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}vt=nf(et,j.mode,vt),vt.return=j,j=vt}return p(j);case dt:return et=Ur(et),de(j,V,et,vt)}if(It(et))return Lt(j,V,et,vt);if(J(et)){if(Wt=J(et),typeof Wt!="function")throw Error(s(150));return et=Wt.call(et),Kt(j,V,et,vt)}if(typeof et.then=="function")return de(j,V,Zl(et),vt);if(et.$$typeof===Q)return de(j,V,kl(j,et),vt);Kl(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,V!==null&&V.tag===6?(a(j,V.sibling),vt=l(V,et),vt.return=j,j=vt):(a(j,V),vt=ef(et,j.mode,vt),vt.return=j,j=vt),p(j)):a(j,V)}return function(j,V,et,vt){try{Ro=0;var Wt=de(j,V,et,vt);return ps=null,Wt}catch($t){if($t===hs||$t===ql)throw $t;var Re=Wn(29,$t,null,j.mode);return Re.lanes=vt,Re.return=j,Re}}}var Lr=Jm(!0),jm=Jm(!1),Wa=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ya(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Be&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=zl(t),Pm(t,null,a),n}return Il(t,r,n,a),zl(t)}function Co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,lo(t,a)}}function mf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gf=!1;function wo(){if(gf){var t=ds;if(t!==null)throw t}}function Do(t,n,a,r){gf=!1;var l=t.updateQueue;Wa=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var I=A,$=I.next;I.next=null,p===null?c=$:p.next=$,p=I;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==p&&(A===null?ct.firstBaseUpdate=$:A.next=$,ct.lastBaseUpdate=I))}if(c!==null){var St=l.baseState;p=0,ct=$=I=null,A=c;do{var Z=A.lane&-536870913,st=Z!==A.lane;if(st?(Ae&Z)===Z:(r&Z)===Z){Z!==0&&Z===wr&&(gf=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Lt=t,Kt=A;Z=n;var de=a;switch(Kt.tag){case 1:if(Lt=Kt.payload,typeof Lt=="function"){St=Lt.call(de,St,Z);break t}St=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Kt.payload,Z=typeof Lt=="function"?Lt.call(de,St,Z):Lt,Z==null)break t;St=U({},St,Z);break t;case 2:Wa=!0}}Z=A.callback,Z!==null&&(t.flags|=64,st&&(t.flags|=8192),st=l.callbacks,st===null?l.callbacks=[Z]:st.push(Z))}else st={lane:Z,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?($=ct=st,I=St):ct=ct.next=st,p|=Z;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;st=A,A=st.next,st.next=null,l.lastBaseUpdate=st,l.shared.pending=null}}while(!0);ct===null&&(I=St),l.baseState=I,l.firstBaseUpdate=$,l.lastBaseUpdate=ct,c===null&&(l.shared.lanes=0),tr|=p,t.lanes=p,t.memoizedState=St}}function $m(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function tg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$m(a[t],n)}var Za=xe(null),Ql=xe(0);function eg(t,n){t=Ea,ne(Ql,t),ne(Za,n),Ea=t|n.baseLanes}function _f(){ne(Ql,Ea),ne(Za,Za.current)}function vf(){Ea=Ql.current,te(Za),te(Ql)}var Rn=xe(null),On=null;function Ka(t){var n=t.alternate;ne(Cn,Cn.current&1),ne(Rn,t),On===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(On=t)}function Sf(t){ne(Cn,Cn.current),ne(Rn,t),On===null&&(On=t)}function ng(t){t.tag===22?(ne(Cn,Cn.current),ne(Rn,t),On===null&&(On=t)):Qa()}function Qa(){ne(Cn,Cn.current),ne(Rn,Rn.current)}function ni(t){te(Rn),On===t&&(On=null),te(Cn)}var Cn=xe(0);function Uo(t,n){ne(Rn,Rn.current),ne(Cn,n)}function xf(t){te(Cn),te(Rn),On===t&&(On=null)}function Jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vd(a)||Xd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,fe=null,Ze=null,hn=null,jl=!1,ms=!1,Or=!1,$l=0,No=0,gs=null,sM=0;function ln(){throw Error(s(321))}function Mf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function yf(t,n,a,r,l,c){return Sa=c,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=t===null||t.memoizedState===null?Fg:Hg,Or=!1,c=a(r,l),Or=!1,ms&&(c=ag(n,a,r,l)),ig(t),c}function ig(t){_t.H=su;var n=Ze!==null&&Ze.next!==null;if(Sa=0,hn=Ze=fe=null,jl=!1,No=0,gs=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&Xl(t)&&(pn=!0))}function ag(t,n,a,r){fe=t;var l=0;do{if(ms&&(gs=null),No=0,ms=!1,25<=l)throw Error(s(301));if(l+=1,hn=Ze=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}_t.H=pM,c=n(a,r)}while(ms);return c}function oM(){var t=_t.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(fe.flags|=1024),n}function Ef(){var t=$l!==0;return $l=0,t}function Tf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bf(t){if(jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}jl=!1}Sa=0,hn=Ze=fe=null,ms=!1,No=$l=0,gs=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?fe.memoizedState=hn=t:hn=hn.next=t,hn}function cn(){if(Ze===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=hn===null?fe.memoizedState:hn.next;if(n!==null)hn=n,Ze=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},hn===null?fe.memoizedState=hn=t:hn=hn.next=t}return hn}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=No;return No+=1,gs===null&&(gs=[]),t=Zm(gs,t,n),n=fe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?Fg:Hg),t}function eu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===mt)return;if(t.$$typeof===Q)return An(t)}throw Error(s(438,String(t)))}function Af(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Yt;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function nu(t){var n=cn();return Rf(n,Ze,t)}function Rf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var A=p=null,I=null,$=n,ct=!1;do{var St=$.lane&-536870913;if(St!==$.lane?(Ae&St)===St:(Sa&St)===St){var Z=$.revertLane;if(Z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),St===wr&&(ct=!0);else if((Sa&Z)===Z){$=$.next,Z===wr&&(ct=!0);continue}else St={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=St,p=c):I=I.next=St,fe.lanes|=Z,tr|=Z;St=$.action,Or&&a(c,St),c=$.hasEagerState?$.eagerState:a(c,St)}else Z={lane:St,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},I===null?(A=I=Z,p=c):I=I.next=Z,fe.lanes|=St,tr|=St;$=$.next}while($!==null&&$!==n);if(I===null?p=c:I.next=A,!ei(c,t.memoizedState)&&(pn=!0,ct&&(a=ds,a!==null)))throw a;t.memoizedState=c,t.baseState=p,t.baseQueue=I,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Cf(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);ei(c,n.memoizedState)||(pn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function rg(t,n,a){var r=fe,l=cn(),c=Se;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var p=!ei((Ze||l).memoizedState,a);if(p&&(l.memoizedState=a,pn=!0),l=l.queue,Uf(lg.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||p||hn!==null&&(hn.memoizedState.tag&1)!==0,_s(t?9:8,{destroy:void 0},og.bind(null,r,l,a,n),null),t){if(r.flags|=2048,Ke===null)throw Error(s(349));c||(Sa&127)!==0||sg(r,n,a)}return a}function sg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=tu(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function og(t,n,a,r){n.value=a,n.getSnapshot=r,ug(n)&&cg(t)}function lg(t,n,a){return a(function(){ug(n)&&cg(t)})}function ug(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function cg(t){var n=Er(t,2);n!==null&&Kn(n,t,2)}function wf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Or){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function fg(t,n,a,r){return t.baseState=a,Rf(t,Ze,typeof r=="function"?r:xa)}function lM(t,n,a,r,l){if(ru(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};_t.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,dg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function dg(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=_t.T,p={};p.types=c!==null?c.types:null,_t.T=p;try{var A=a(l,r),I=_t.S;I!==null&&I(p,A),hg(t,n,A)}catch($){Df(t,n,$)}finally{c!==null&&p.types!==null&&(c.types=p.types),_t.T=c}}else try{c=a(l,r),hg(t,n,c)}catch($){Df(t,n,$)}}function hg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){pg(t,n,r)},function(r){return Df(t,n,r)}):pg(t,n,a)}function pg(t,n,a){n.status="fulfilled",n.value=a,mg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,dg(t,a)))}function Df(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,mg(n),n=n.next;while(n!==r)}t.action=null}function mg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gg(t,n){return n}function _g(t,n){if(Se){var a=Ke.formState;if(a!==null){t:{var r=fe;if(Se){if(Je){e:{for(var l=Je,c=Si;l.nodeType!==8;){if(!c){l=null;break e}if(l=Mi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Je=Mi(l.nextSibling),r=l.data==="F!";break t}}Va(r)}r=!1}r&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gg,lastRenderedState:n},a.queue=r,a=Ig.bind(null,fe,r),r.dispatch=a,r=wf(!1),c=If.bind(null,fe,!1,r.queue),r=Gn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=lM.bind(null,fe,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function vg(t){var n=cn();return Sg(n,Ze,t)}function Sg(t,n,a){if(n=Rf(t,n,gg)[0],t=nu(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Lo(n)}catch(p){throw p===hs?ql:p}else r=n;n=cn();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,_s(9,{destroy:void 0},uM.bind(null,l,a),null)),[r,c,t]}function uM(t,n){t.action=n}function xg(t){var n=cn(),a=Ze;if(a!==null)return Sg(n,a,t);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function _s(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=tu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Mg(){return cn().memoizedState}function iu(t,n,a,r){var l=Gn();fe.flags|=t,l.memoizedState=_s(1|n,{destroy:void 0},a,r===void 0?null:r)}function au(t,n,a,r){var l=cn();r=r===void 0?null:r;var c=l.memoizedState.inst;Ze!==null&&r!==null&&Mf(r,Ze.memoizedState.deps)?l.memoizedState=_s(n,c,a,r):(fe.flags|=t,l.memoizedState=_s(1|n,c,a,r))}function yg(t,n){iu(8390656,8,t,n)}function Uf(t,n){au(2048,8,t,n)}function cM(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=tu(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Eg(t){var n=cn().memoizedState;return cM({ref:n,nextImpl:t}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Tg(t,n){return au(4,2,t,n)}function bg(t,n){return au(4,4,t,n)}function Ag(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rg(t,n,a){a=a!=null?a.concat([t]):null,au(4,4,Ag.bind(null,n,t),a)}function Nf(){}function Cg(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Mf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function wg(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Mf(n,r[1]))return r[0];if(r=t(),Or){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r}function Lf(t,n,a){return a===void 0||(Sa&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=F0(),fe.lanes|=t,tr|=t,a)}function Dg(t,n,a,r){return ei(a,n)?a:Za.current!==null?(t=Lf(t,a,r),ei(t,n)||(pn=!0),t):(Sa&106)===0||(Sa&1073741824)!==0&&(Ae&261930)===0?(pn=!0,t.memoizedState=a):(t=F0(),fe.lanes|=t,tr|=t,n)}function Ug(t,n,a,r,l){var c=Rt.p;Rt.p=c!==0&&8>c?c:8;var p=_t.T,A={};A.types=p!==null?p.types:null,_t.T=A,If(t,!1,n,a);try{var I=l(),$=_t.S;if($!==null&&$(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ct=rM(I,r);Oo(t,n,ct,si(t))}else Oo(t,n,r,si(t))}catch(St){Oo(t,n,{then:function(){},status:"rejected",reason:St},si())}finally{Rt.p=c,p!==null&&A.types!==null&&(p.types=A.types),_t.T=p}}function fM(){}function Of(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=Ng(t).queue;Ug(t,l,n,Ge,a===null?fM:function(){return Lg(t),a(r)})}function Ng(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Ge,baseState:Ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:Ge},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Lg(t){var n=Ng(t);n.next===null&&(n=t.alternate.memoizedState),Oo(t,n.next.queue,{},si())}function Pf(){return An(Is)}function Og(){return cn().memoizedState}function Pg(){return cn().memoizedState}function dM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=qa(a);var r=Ya(n,t,a);r!==null&&(Kn(r,n,a),Co(r,n,a)),n={cache:uf()},t.payload=n;return}n=n.return}}function hM(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ru(t)?zg(n,a):(a=$c(t,n,a,r),a!==null&&(Kn(a,t,r),Bg(a,n,r)))}function Ig(t,n,a){var r=si();Oo(t,n,a,r)}function Oo(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ru(t))zg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,A=c(p,a);if(l.hasEagerState=!0,l.eagerState=A,ei(A,p))return Il(t,n,l,0),Ke===null&&Pl(),!1}catch{}if(a=$c(t,n,l,r),a!==null)return Kn(a,t,r),Bg(a,n,r),!0}return!1}function If(t,n,a,r){if(r={lane:2,revertLane:Ad(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ru(t)){if(n)throw Error(s(479))}else n=$c(t,a,r,2),n!==null&&Kn(n,t,2)}function ru(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function zg(t,n){ms=jl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Bg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,lo(t,a)}}var su={readContext:An,use:eu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Fg={readContext:An,use:eu,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:yg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,iu(4194308,4,Ag.bind(null,n,t),a)},useLayoutEffect:function(t,n){return iu(4194308,4,t,n)},useInsertionEffect:function(t,n){iu(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var r=t();if(Or){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Gn();if(a!==void 0){var l=a(n);if(Or){Ce(!0);try{a(n)}finally{Ce(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=hM.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=wf(t);var n=t.queue,a=Ig.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Nf,useDeferredValue:function(t,n){var a=Gn();return Lf(a,t,n)},useTransition:function(){var t=wf(!1);return t=Ug.bind(null,fe,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=fe,l=Gn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(Ae&127)!==0||sg(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,yg(lg.bind(null,r,c,t),[t]),r.flags|=2048,_s(9,{destroy:void 0},og.bind(null,r,c,a,n),null),a},useId:function(){var t=Gn(),n=Ke.identifierPrefix;if(Se){var a=ki,r=Xi;a=(r&~(1<<32-le(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Pf,useFormState:_g,useActionState:_g,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=If.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Af,useCacheRefresh:function(){return Gn().memoizedState=dM.bind(null,fe)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Hg={readContext:An,use:eu,useCallback:Cg,useContext:An,useEffect:Uf,useImperativeHandle:Rg,useInsertionEffect:Tg,useLayoutEffect:bg,useMemo:wg,useReducer:nu,useRef:Mg,useState:function(){return nu(xa)},useDebugValue:Nf,useDeferredValue:function(t,n){var a=cn();return Dg(a,Ze.memoizedState,t,n)},useTransition:function(){var t=nu(xa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:rg,useId:Og,useHostTransitionStatus:Pf,useFormState:vg,useActionState:vg,useOptimistic:function(t,n){var a=cn();return fg(a,Ze,t,n)},useMemoCache:Af,useCacheRefresh:Pg,useEffectEvent:Eg},pM={readContext:An,use:eu,useCallback:Cg,useContext:An,useEffect:Uf,useImperativeHandle:Rg,useInsertionEffect:Tg,useLayoutEffect:bg,useMemo:wg,useReducer:Cf,useRef:Mg,useState:function(){return Cf(xa)},useDebugValue:Nf,useDeferredValue:function(t,n){var a=cn();return Ze===null?Lf(a,t,n):Dg(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Cf(xa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:rg,useId:Og,useHostTransitionStatus:Pf,useFormState:xg,useActionState:xg,useOptimistic:function(t,n){var a=cn();return Ze!==null?fg(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Af,useCacheRefresh:Pg,useEffectEvent:Eg};function zf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:U({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),l=qa(r);l.payload=n,a!=null&&(l.callback=a),n=Ya(t,l,r),n!==null&&(Kn(n,t,r),Co(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),l=qa(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ya(t,l,r),n!==null&&(Kn(n,t,r),Co(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=qa(a);r.tag=2,n!=null&&(r.callback=n),n=Ya(t,r,a),n!==null&&(Kn(n,t,a),Co(n,t,a))}};function Gg(t,n,a,r,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,p):n.prototype&&n.prototype.isPureReactComponent?!xo(a,r)||!xo(l,c):!0}function Vg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Bf.enqueueReplaceState(n,n.state,null)}function Pr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=U({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function Xg(t){Ol(t)}function kg(t){console.error(t)}function Wg(t){Ol(t)}function ou(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function qg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ff(t,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){ou(t,n)},a}function Yg(t){return t=qa(t),t.tag=3,t}function Zg(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){qg(n,a,r)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){qg(n,a,r),typeof l!="function"&&(er===null?er=new Set([this]):er.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function mM(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Rr(n,a,l,!0),a=Rn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Cu():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ed(t,r,l)),!1;case 22:return a.flags|=65536,r===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ed(t,r,l)),!1}throw Error(s(435,a.tag))}return Ed(t,r,l),Cu(),!1}if(Se)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==rf&&(t=Error(s(422),{cause:r}),Eo(gi(t,a)))):(r!==rf&&(n=Error(s(423),{cause:r}),Eo(gi(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=gi(r,a),l=Ff(t.stateNode,r,l),mf(t,l),un!==4&&(un=2)),!1;var c=Error(s(520),{cause:r});if(c=gi(c,a),Vo===null?Vo=[c]:Vo.push(c),un!==4&&(un=2),n===null)return!0;r=gi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Ff(a.stateNode,r,t),mf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(er===null||!er.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Yg(l),Zg(l,t,a,r),mf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Hf=Error(s(461)),pn=!1;function vn(t,n,a,r){n.child=t===null?jm(n,null,a,r):Lr(n,t.child,a,r)}function Kg(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var p={};for(var A in r)A!=="ref"&&(p[A]=r[A])}else p=r;return Cr(n),r=yf(t,n,a,p,c,l),A=Ef(),t!==null&&!pn?(Tf(t,n,l),Ma(t,n,l)):(Se&&A&&Hl(n),n.flags|=1,vn(t,n,r,l),n.child)}function Qg(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!tf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Jg(t,n,c,r,l)):(t=Bl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Zf(t,l)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(p,r)&&t.ref===n.ref)return Ma(t,n,l)}return n.flags|=1,t=ma(c,r),t.ref=n.ref,t.return=n,n.child=t}function Jg(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(xo(c,r)&&t.ref===n.ref)if(pn=!1,n.pendingProps=r=c,Zf(t,l))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Ma(t,n,l)}return Gf(t,n,a,r,l)}function jg(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return $g(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,c!==null?c.cachePool:null),c!==null?eg(n,c):_f(),ng(n);else return r=n.lanes=536870912,$g(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Wl(n,c.cachePool),eg(n,c),Qa(),n.memoizedState=null):(t!==null&&Wl(n,null),_f(),Qa());return vn(t,n,l,a),n.child}function Po(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $g(t,n,a,r,l){var c=ff();return c=c===null?null:{parent:dn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Wl(n,null),_f(),ng(n),t!==null&&Rr(t,n,r,!0),n.childLanes=l,null}function lu(t,n){return n=uu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function t0(t,n,a){return Lr(n,t.child,null,a),t=lu(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function gM(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=lu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Po(null,t);if(Sf(n),(t=Je)?(t=A_(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Xi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,Mn=n,Je=null)):t=null,t===null)throw Va(n);return n.lanes=536870912,null}return lu(n,r)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(Sf(n),l)if(n.flags&256)n.flags&=-257,n=t0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Rr(t,n,a,!1),l=(a&t.childLanes)!==0,pn||l){if(Za.current===null){if(r=Ke,r!==null&&(p=uo(r,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,Er(t,p),Kn(r,t,p),Hf;Cu()}n=t0(t,n,a)}else t=c.treeContext,Je=Mi(p.nextSibling),Mn=n,Se=!0,Ga=null,Si=!1,t!==null&&Hm(n,t),n=lu(n,r),n.flags|=134221824;return n}return t=ma(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function vs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gf(t,n,a,r,l){return Cr(n),a=yf(t,n,a,r,void 0,l),r=Ef(),t!==null&&!pn?(Tf(t,n,l),Ma(t,n,l)):(Se&&r&&Hl(n),n.flags|=1,vn(t,n,a,l),n.child)}function e0(t,n,a,r,l,c){return Cr(n),n.updateQueue=null,a=ag(n,r,a,l),ig(t),r=Ef(),t!==null&&!pn?(Tf(t,n,c),Ma(t,n,c)):(Se&&r&&Hl(n),n.flags|=1,vn(t,n,a,c),n.child)}function n0(t,n,a,r,l){if(Cr(n),n.stateNode===null){var c=ls,p=a.contextType;typeof p=="object"&&p!==null&&(c=An(p)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Bf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},hf(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?An(p):ls,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(zf(n,a,p,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Bf.enqueueReplaceState(c,c.state,null),Do(n,r,c,l),wo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var A=n.memoizedProps,I=Pr(a,A);c.props=I;var $=c.context,ct=a.contextType;p=ls,typeof ct=="object"&&ct!==null&&(p=An(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof c.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(A||$!==p)&&Vg(n,c,r,p),Wa=!1;var Z=n.memoizedState;c.state=Z,Do(n,r,c,l),wo(),$=n.memoizedState,A||Z!==$||Wa?(typeof St=="function"&&(zf(n,a,St,r),$=n.memoizedState),(I=Wa||Gg(n,a,I,r,Z,$,p))?(ct||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),c.props=r,c.state=$,c.context=p,r=I):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,pf(t,n),p=n.memoizedProps,ct=Pr(a,p),c.props=ct,St=n.pendingProps,Z=c.context,$=a.contextType,I=ls,typeof $=="object"&&$!==null&&(I=An($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==St||Z!==I)&&Vg(n,c,r,I),Wa=!1,Z=n.memoizedState,c.state=Z,Do(n,r,c,l),wo();var st=n.memoizedState;p!==St||Z!==st||Wa||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof A=="function"&&(zf(n,a,A,r),st=n.memoizedState),(ct=Wa||Gg(n,a,ct,r,Z,st,I)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?($||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,st,I),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,st,I)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),c.props=r,c.state=st,c.context=I,r=ct):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,vs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Lr(n,t.child,null,l),n.child=Lr(n,null,a,l)):vn(t,n,a,l),n.memoizedState=c.state,t=n.child):t=Ma(t,n,l),t}function i0(t,n,a,r){return br(),n.flags|=256,vn(t,n,a,r),n.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:qm()}}function kf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function a0(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(Cn.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(l?Ka(n):Qa(),(t=Je)?(t=A_(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ha!==null?{id:Xi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},a=zm(t),a.return=n,n.child=a,Mn=n,Je=null)):t=null,t===null)throw Va(n);return Xd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Qa(),l=n.mode,c=uu({mode:"hidden",children:c},l),r=Tr(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Xf(a),r.childLanes=kf(t,p,a),n.memoizedState=Vf,Po(null,r)):(Ka(n),Wf(n,c))}var A=t.memoizedState;if(A!==null){var I=A.dehydrated;if(I!==null)return _M(t,n,c,p,r,I,A,a)}return l?(Qa(),l=r.fallback,c=n.mode,A=t.child,I=A.sibling,r=ma(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,I!==null?l=ma(I,l):(l=Tr(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Po(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Xf(a):(c=l.cachePool,c!==null?(A=dn._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=qm(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=kf(t,p,a),n.memoizedState=Vf,Po(t.child,r)):(Ka(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=a,n.memoizedState=null,a)}function Wf(t,n){return n=uu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function uu(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function cu(t,n,a){return Lr(n,t.child,null,a),t=Wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function _M(t,n,a,r,l,c,p,A){if(a)return n.flags&256?(Ka(n),n.flags&=-257,cu(t,n,A)):n.memoizedState!==null?(Qa(),n.child=t.child,n.flags|=128,null):(Qa(),c=l.fallback,p=n.mode,l=uu({mode:"visible",children:l.children},p),c=Tr(c,p,A,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Lr(n,t.child,null,A),l=n.child,l.memoizedState=Xf(A),l.childLanes=kf(t,r,A),n.memoizedState=Vf,Po(null,l));if(Ka(n),Xd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Eo({value:l,source:null,stack:null})),cu(t,n,A)}if(pn||Rr(t,n,A,!1),r=(A&t.childLanes)!==0,pn||r){if(Za.current!==null)return cu(t,n,A);if(r=Ke,r!==null&&(l=uo(r,A),l!==0&&l!==p.retryLane))throw p.retryLane=l,Er(t,l),Kn(r,t,l),Hf;return Vd(c)||Cu(),cu(t,n,A)}return Vd(c)?(n.flags|=192,n.child=t.child,null):(t=p.treeContext,Je=Mi(c.nextSibling),Mn=n,Se=!0,Ga=null,Si=!1,t!==null&&Hm(n,t),n=Wf(n,l.children),n.flags|=134221824,n)}function r0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Vl(t.return,n,a)}function s0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Jl(a)===null&&(n=t),t=t.sibling}return n}function fu(t,n,a,r,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=a,p.tailMode=l,p.treeForkCount=c)}function qf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Yf(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var p=Cn.current;if(n.flags&128)return Uo(n,p),null;var A=(p&2)!==0;if(A?(p=p&1|2,n.flags|=128):p&=1,Uo(n,p),l==="backwards"&&t!==null?(qf(t),vn(t,n,r,a),qf(t)):vn(t,n,r,a),r=Se?yo:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,a,n);else if(t.tag===19)r0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=s0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,qf(n)),fu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Jl(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}fu(n,!0,a,null,c,r);break;case"together":fu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=s0(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),fu(n,!1,l,a,c,r)}return n.child}function o0(t,n,a){var r=n.pendingProps;return Xa(n,n.type,r.value),vn(t,n,r.children,a),n.child}function Ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),tr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Rr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function vM(t,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),Xa(n,dn,t.memoizedState.cache),br();break;case 27:case 5:Oe(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Sf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ka(n),n.flags|=128,null;r=Rr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?a0(t,n,a):(Ka(n),t=Ma(t,n,a),t!==null?t.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return Yf(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Rr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return Yf(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(n,Cn.current),r)break;return null;case 22:return n.lanes=0,jg(t,n,a,n.pendingProps);case 24:Xa(n,dn,t.memoizedState.cache)}return Ma(t,n,a)}function l0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Zf(t,a)&&(n.flags&128)===0)return pn=!1,vM(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Se&&(n.flags&1048576)!==0&&Fm(n,yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ur(n.elementType),n.type=t,typeof t=="function")tf(t)?(r=Pr(t,r),n.tag=1,n=n0(null,n,t,r,a)):(n.tag=0,n=Gf(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===X){n.tag=11,n=Kg(null,n,t,r,a);break t}else if(l===nt){n.tag=14,n=Qg(null,n,t,r,a);break t}else if(l===Q){n.tag=10,n.type=t,n=o0(null,n,a);break t}}throw n=Tt(t)||t,Error(s(306,n,""))}}return n;case 0:return Gf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Pr(r,n.pendingProps),n0(t,n,r,l,a);case 3:t:{if(W(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,pf(t,n),Do(n,r,null,a);var p=n.memoizedState;if(r=p.cache,Xa(n,dn,r),r!==c.cache&&lf(n,[dn],a,!0),wo(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=i0(t,n,r,a);break t}else if(r!==l){l=gi(Error(s(424)),n),Eo(l),n=i0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Je=Mi(t.firstChild),Mn=n,Se=!0,Ga=null,Si=!0,a=jm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(br(),r===l){n=Ma(t,n,a);break t}vn(t,n,r,a)}n=n.child}return n;case 26:return vs(t,n),t===null?(a=L_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=d_(n.type,n.pendingProps,Pe.current,n)):n.memoizedState=L_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Oe(n),t===null&&Se&&(r=n.stateNode=w_(n.type,n.pendingProps,Pe.current),Mn=n,Si=!0,l=Je,ar(n.type)?(kd=l,Je=Mi(r.firstChild)):Je=l),vn(t,n,n.pendingProps.children,a),vs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((l=r=Je)&&(r=dy(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,Mn=n,Je=Mi(r.firstChild),Si=!1,l=!0):l=!1),l||Va(n)),Oe(n),l=n.type,c=n.pendingProps,p=t!==null?t.memoizedProps:null,r=c.children,Pd(l,c)?r=null:p!==null&&Pd(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=yf(t,n,oM,null,null,a),Is._currentValue=l),vs(t,n),vn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=Je)&&(a=hy(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Mn=n,Je=null,t=!0):t=!1),t||Va(n)),null;case 13:return a0(t,n,a);case 4:return W(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Lr(n,null,r,a):vn(t,n,r,a),n.child;case 11:return Kg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,vs(t,n),vn(t,n,r,a),n.child;case 8:return vn(t,n,n.pendingProps.children,a),n.child;case 12:return vn(t,n,n.pendingProps.children,a),n.child;case 10:return o0(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Cr(n),l=An(l),r=r(l),n.flags|=1,vn(t,n,r,a),n.child;case 14:return Qg(t,n,n.type,n.pendingProps,a);case 15:return Jg(t,n,n.type,n.pendingProps,a);case 19:return Yf(t,n,a);case 31:return gM(t,n,a);case 22:return jg(t,n,a,n.pendingProps);case 24:return Cr(n),r=An(dn),t===null?(l=ff(),l===null&&(l=Ke,c=uf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},hf(n),Xa(n,dn,l)):((t.lanes&a)!==0&&(pf(t,n),Do(n,null,null,a),wo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Xa(n,dn,r)):(r=c.cache,Xa(n,dn,r),r!==l.cache&&lf(n,[dn],a,!0))),vn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&Hl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:vs(t,n),vn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function Kf(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?z_(n,r):z_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(X0())t.flags|=8192;else throw Nr=Yl,df}else t.flags&=-16777217}function u0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!B_(n))if(X0())t.flags|=8192;else throw Nr=Yl,df}function du(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?oo():536870912,t.lanes|=n,Es|=n)}function Io(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function SM(t,n,a){var r=n.pendingProps;switch(af(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(dn),en(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fs(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sf())),je(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ya(n),c!==null?(je(n),u0(n,c)):(je(n),Kf(n,l,null,r,a))):c?c!==t.memoizedState?(ya(n),je(n),u0(n,c)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),je(n),Kf(n,l,t,r,a)),null;case 27:if(P(n),a=Pe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),n.subtreeFlags&=-33554433,null}t=Ve.current,fs(n)?Gm(n):(t=w_(l,r,a),n.stateNode=t,ya(n))}return je(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),n.subtreeFlags&=-33554433,null}if(c=Ve.current,fs(n))Gm(n);else{var p=Yo(Pe.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}c[b]=n,c[H]=r;t:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break t;for(;p.sibling===null;){if(p.return===null||p.return===n)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;t:switch(Dn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return je(n),n.subtreeFlags&=-33554433,Kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Pe.current,fs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[b]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||l_(t.nodeValue,a)),t||Va(n,!0)}else t=Yo(t).createTextNode(r),t[b]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=fs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[b]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=fs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[b]=n}else br(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),l=!1}else l=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),du(n,n.updateQueue),je(n),null);case 4:return en(),t===null&&Dd(n.stateNode.containerInfo),n.flags|=67108864,je(n),null;case 10:return va(n.type),je(n),null;case 19:if(xf(n),r=n.memoizedState,r===null)return je(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Io(r,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Jl(t),c!==null){for(n.flags|=128,Io(r,!1),t=c.updateQueue,n.updateQueue=t,du(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Im(a,t),a=a.sibling;return Uo(n,Cn.current&1|2),Se&&ga(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Vt()>Tu&&(n.flags|=128,l=!0,Io(r,!1),n.lanes=4194304)}else{if(!l)if(t=Jl(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,du(n,t),Io(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!Se)return je(n),null}else 2*Vt()-r.renderingStartTime>Tu&&a!==536870912&&(n.flags|=128,l=!0,Io(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Vt(),t.sibling=null,c=Cn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Uo(n,c):(a=c,ne(Rn,n),ne(Cn,a),On===null&&(On=n)),Se&&ga(n,r.treeForkCount),t}return je(n),null;case 22:case 23:return ni(n),vf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&du(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&te(Dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(dn),je(n),null;case 25:return null;case 30:return n.flags|=33554432,je(n),null}throw Error(s(156,n.tag))}function xM(t,n){switch(af(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return va(dn),en(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));br()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return en(),null;case 10:return va(n.type),null;case 22:case 23:return ni(n),vf(),t!==null&&te(Dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return va(dn),null;case 25:return null;default:return null}}function c0(t,n){switch(af(n),n.tag){case 3:va(dn),en();break;case 26:case 27:case 5:P(n);break;case 4:en();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:xf(n);break;case 10:va(n.type);break;case 22:case 23:ni(n),vf(),t!==null&&te(Dr);break;case 24:va(dn)}}function zo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,p=a.inst;r=c(),p.destroy=r}a=a.next}while(a!==l)}}catch(A){ke(n,n.return,A)}}function Ja(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var p=r.inst,A=p.destroy;if(A!==void 0){p.destroy=void 0,l=n;var I=a,$=A;try{$()}catch(ct){ke(l,I,ct)}}}r=r.next}while(r!==c)}}catch(ct){ke(n,n.return,ct)}}function f0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tg(n,a)}catch(r){ke(t,t.return,r)}}}function d0(t,n,a){a.props=Pr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function Wi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ha(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=S_(c)),r=l.ref;break;case 7:if(t.stateNode===null){var p=new oi(t);v(t.child,!1,cy,p,void 0,void 0),t.stateNode=p}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){ke(t,n,A)}}function wn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){ke(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ke(t,n,l)}else a.current=null}function hu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)b_(t.stateNode,n[a])}function h0(t){for(var n=t.return;n!==null&&(Jf(n)&&b_(t.stateNode,n.stateNode),!Qf(n));)n=n.return}function Bo(t){for(var n=t.return;n!==null&&(Jf(n)&&fy(t.stateNode,n.stateNode),!Qf(n));)n=n.return}function Qf(t){return t.tag===5||t.tag===3||t.tag===27}function Jf(t){return t&&t.tag===7&&t.stateNode!==null}function jf(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){ke(t,t.return,l)}}function $f(t,n,a){try{var r=t.stateNode;qM(r,t.type,a,n),r[H]=n}catch(l){ke(t,t.return,l)}}function p0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ar(t.type)||t.tag===4}function td(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ar(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Vi)),hu(t,r),ve=!0;else if(l!==4&&(l===27&&(hu(t,r),r=null,ar(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(ed(t,n,a,r),t=t.sibling;t!==null;)ed(t,n,a,r),t=t.sibling}function pu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),hu(t,r),ve=!0;else if(l!==4&&(l===27&&(hu(t,r),r=null,ar(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(pu(t,n,a,r),t=t.sibling;t!==null;)pu(t,n,a,r),t=t.sibling}function m0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,r,a),n[b]=t,n[H]=a}catch(c){ke(t,t.return,c)}}var mu=!1,ii=null;function g0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(mu=!0)}var qi=null;function _0(){var t=qi;return qi=null,t}var qn=0;function Ss(t,n,a,r,l){return qn=0,v0(t.child,n,a,r,l)}function v0(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(r!==null){var A=Bd(p);r.push(A),A.view&&(c=!0)}else c||Bd(p).view&&(c=!0);mu=!0,__(p,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||v0(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Yi(t,n){for(;t!==null;)t.tag===5?v_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Yi(t.child,n)),t=t.sibling}function gu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(gu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Ss(t,a,n,null,!1)||Yi(t.child,!1))}t=t.sibling}}function nd(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=ha(r,a),c=pa(r.default,a.paired?r.share:r.enter);c!=="none"?Ss(t,l,c,null,!1)?(gu(t),a.paired||n||Rs(t,r.onEnter)):Yi(t.child,!1):gu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)nd(t,n),t=t.sibling;else gu(t)}function id(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=pa(a.default,a.share);if(c!=="none"&&(Ss(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Rs(t,a.onShare)):Yi(t.child,!1)),n.delete(r),n.size===0)break}}}id(t)}t=t.sibling}}}function ad(t){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode),r=ii!==null?ii.get(a):void 0,l=pa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(Ss(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ii.delete(a),Rs(t,n.onShare)):Rs(t,n.onExit):Yi(t.child,!1)),ii!==null&&id(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ad(t),t=t.sibling;else ii!==null&&id(t)}function S0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ha(n,t.stateNode);n=pa(n.default,n.update),t.flags&=-5,n!=="none"&&Ss(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&S0(t);t=t.sibling}}function rd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Yi(t.child,!1))}rd(t)}t=t.sibling}}function _u(t){if(t.tag===30)t.stateNode.paired=null,Yi(t.child,!1),rd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_u(t),t=t.sibling;else rd(t)}function x0(t){for(t=t.child;t!==null;)t.tag===30?Yi(t.child,!1):(t.subtreeFlags&33554432)!==0&&x0(t),t=t.sibling}function sd(t,n,a,r,l,c,p){for(var A=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(c!==null&&qn<c.length){var $=c[qn],ct=Bd(I);($.view||ct.view)&&(A=!0);var St;if(St=(t.flags&4)===0)if(ct.clip)St=!0;else{St=$.rect;var Z=ct.rect;St=St.y!==Z.y||St.x!==Z.x||St.height!==Z.height||St.width!==Z.width}St&&(t.flags|=4),ct.abs?ct=!$.abs:($=$.rect,ct=ct.rect,ct=$.height!==ct.height||$.width!==ct.width),ct&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&__(I,qn===0?a:a+"_"+qn,l),A&&(t.flags&4)!==0||(qi===null&&(qi=[]),qi.push(I,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&p?t.flags|=n.flags&32:sd(t,n.child,a,r,l,c,p)&&(A=!0));n=n.sibling}return A}function M0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=ha(a,r),c=pa(a.default,a.update),p;p=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;qn=0,l=sd(r,A,l,l,c,p,!1),(t.flags&4)!==0&&l&&Rs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&M0(t);t=t.sibling}}var yn=!1,He=!1,Zi=!1,od=!1,y0=typeof WeakSet=="function"?WeakSet:Set,En=null,Ki=!1,Fo=!1,vu=!1,ld=!1;function MM(t,n,a){if(t=t.containerInfo,Ld=zs,t=Am(t),Yc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var A=0,I=-1,$=-1,ct=0,St=0,Z=t,st=null;e:for(;;){for(var Lt;Z!==r||c!==0&&Z.nodeType!==3||(I=A+c),Z!==p||l!==0&&Z.nodeType!==3||($=A+l),Z.nodeType===3&&(A+=Z.nodeValue.length),(Lt=Z.firstChild)!==null;)st=Z,Z=Lt;for(;;){if(Z===t)break e;if(st===r&&++ct===c&&(I=A),st===p&&++St===l&&($=A),(Lt=Z.nextSibling)!==null)break;Z=st,st=Z.parentNode}Z=Lt}r=I===-1||$===-1?null:{start:I,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(Od={focusedElem:t,selectionRange:r},zs=!1,a=(a&335544064)===a,En=n,n=a?9270:1024;En!==null;){if(t=En,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&ad(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&g0(t),Su(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&ad(r),Su(a);continue}else if(r!==null&&r.memoizedState!==null){a&&g0(t),Su(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,En=r):(a&&S0(t),Su(a))}}ii=null}function Su(t){for(;En!==null;){var n=En,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var p=Pr(n.type,l);a=c.getSnapshotBeforeUpdate(p,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(A){ke(n,n.return,A)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Gd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Gd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ha(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=pa(l.default,l.update),l!=="none"&&Ss(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,En=r;break}En=n.return}}function E0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),r&4&&zo(5,a);break;case 1:if(Qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(p){ke(a,a.return,p)}else{var l=Pr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){ke(a,a.return,p)}}r&64&&f0(a),r&512&&Wi(a,a.return);break;case 3:if(Qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tg(t,n)}catch(p){ke(a,a.return,p)}}break;case 27:n===null&&r&4&&m0(a);case 26:case 5:Qi(t,a),n===null&&r&4&&jf(a),r&512&&Wi(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),r&4&&R0(t,a);break;case 13:Qi(t,a),r&4&&C0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=LM.bind(null,a),py(t,a))));break;case 22:if(r=a.memoizedState!==null||yn,!r){var c=n!==null&&n.memoizedState!==null||He;n=yn,l=He,yn=r,(He=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),wi(t,a,r)):Qi(t,a),yn=n,He=l}break;case 30:Qi(t,a),r&512&&Wi(a,a.return);break;case 7:r&512&&Wi(a,a.return);default:Qi(t,a)}}function ud(t,n){for(t=t.child;t!==null;)T0(t,n),t=t.sibling}function T0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(I){ke(t,t.return,I)}cd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ve=!0}catch(I){ke(t,t.return,I)}break;case 18:try{var A=t.stateNode;n?g_(A,!0):g_(t.stateNode,!1)}catch(I){ke(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&ud(t,n);break;default:ud(t,n)}}function cd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:T0(a,r);break t;case 22:a.memoizedState===null&&cd(a,r);break t;default:cd(a,r)}}t=t.sibling}}function b0(t){var n=t.alternate;n!==null&&(t.alternate=null,b0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Yn=!1;function Ri(t,n,a){for(a=a.child;a!==null;)A0(t,n,a),a=a.sibling}function A0(t,n,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:He||wn(a,n),Ri(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||wn(a,n),Bo(a);var r=tn,l=Yn;ar(a.type)&&(tn=a.stateNode,Yn=!1),Ri(t,n,a),D_(a.stateNode,a.type,a.memoizedProps),tn=r,Yn=l;break;case 5:He||wn(a,n),Bo(a);case 6:if(a.tag===6&&Bo(a),r=tn,l=Yn,tn=null,Ri(t,n,a),tn=r,Yn=l,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),ve=!0}catch(c){ke(a,n,c)}else try{tn.removeChild(a.stateNode),ve=!0}catch(c){ke(a,n,c)}break;case 18:tn!==null&&(Yn?(t=tn,m_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bs(t)):m_(tn,a.stateNode));break;case 4:r=tn,l=Yn,tn=a.stateNode.containerInfo,Yn=!0,Ri(t,n,a),tn=r,Yn=l;break;case 0:case 11:case 14:case 15:Ja(2,a,n),He||Ja(4,a,n),Ri(t,n,a);break;case 1:He||(wn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&d0(a,n,r)),Ri(t,n,a);break;case 21:Ri(t,n,a);break;case 22:He=(r=He)||a.memoizedState!==null,Ri(t,n,a),He=r;break;case 30:wn(a,n),Ri(t,n,a);break;case 7:He||wn(a,n),Ri(t,n,a);break;default:Ri(t,n,a)}}function R0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bs(t)}catch(a){ke(n,n.return,a)}}}function C0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bs(t)}catch(a){ke(n,n.return,a)}}function yM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new y0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new y0),n;default:throw Error(s(435,t.tag))}}function xu(t,n){var a=yM(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=OM.bind(null,t,r);r.then(l,l)}})}function Vn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],p=t,A=n,I=A;t:for(;I!==null;){switch(I.tag){case 27:if(ar(I.type)){tn=I.stateNode,Yn=!1;break t}break;case 5:tn=I.stateNode,Yn=!1;break t;case 3:case 4:tn=I.stateNode.containerInfo,Yn=!0;break t}I=I.return}if(tn===null)throw Error(s(160));A0(p,A,c),tn=null,Yn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)w0(n,t,a),n=n.sibling}var Ci=null;function w0(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var p=r[c];p.ref.impl=p.nextImpl}Vn(n,t,a),Xn(t),l&4&&(Ja(3,t,t.return),zo(3,t),Ja(5,t,t.return));break;case 1:Vn(n,t,a),Xn(t),l&512&&(He||r===null||wn(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ci,Vn(n,t,a),Xn(t),l&512&&(He||r===null||wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(yn)t.stateNode=d_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Nt]||r[b]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,n,a),r[b]=t,_e(r),n=r;break t;case"link":if(c=I_("link","href",l).get(n+(a.href||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(p,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=I_("meta","content",l).get(n+(a.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(p,1);break e}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[b]=t,_e(r),n=r}t.stateNode=n}else yn||Zd(c,t.type,t.stateNode);else t.stateNode=P_(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||He||n.parentNode.removeChild(n)):l.count--,a===null?yn||Zd(c,t.type,t.stateNode):P_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&$f(t,t.memoizedProps,r.memoizedProps);break;case 27:Vn(n,t,a),Xn(t),l&512&&(He||r===null||wn(r,r.return)),r!==null&&l&4&&$f(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Zi,Zi=!1,Vn(n,t,a),Zi=c,Xn(t),l&512&&(He||r===null||wn(r,r.return)),t.flags&32){n=t.stateNode;try{es(n,""),ve=!0}catch(ct){ke(t,t.return,ct)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,$f(t,n,r!==null?r.memoizedProps:n)),l&1024&&(od=!0);break;case 6:if(Vn(n,t,a),Xn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ve=!0}catch(ct){ke(t,t.return,ct)}}break;case 3:if(ve=!1,Pu=null,c=Ci,Ci=Zo(n.containerInfo),Vn(n,t,a),Ci=c,Xn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Bs(n.containerInfo)}catch(ct){ke(t,t.return,ct)}od&&(od=!1,D0(t)),ve=!1;break;case 4:l=Zi,Zi=yn,r=ze(),c=Ci,Ci=Zo(t.stateNode.containerInfo),Vn(n,t,a),Xn(t),Ci=c,ve&&Fo&&(vu=!0),ve=r,Zi=l;break;case 12:Vn(n,t,a),Xn(t);break;case 31:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 13:Vn(n,t,a),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Eu=Vt()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 22:c=t.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var A=yn,I=He,$=Zi;yn=A||c,Zi=$||c,He=I||p,Vn(n,t,a),He=I,Zi=$,yn=A,Xn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||p||yn||He||(n=p||He,a=yn,r=He,yn=c||yn,He=n,ja(t,2),yn=a,He=r),!c&&Zi||ud(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,xu(t,a))));break;case 19:Vn(n,t,a),Xn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 30:l&512&&(He||r===null||wn(r,r.return)),l=ze(),c=Fo,p=(a&335544064)===a,A=t.memoizedProps,Fo=p&&pa(A.default,A.update)!=="none",Vn(n,t,a),Xn(t),p&&r!==null&&ve&&(t.flags|=4),Fo=c,ve=l;break;case 21:break;case 7:l&512&&(He||r===null||wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Vn(n,t,a),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(p0(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Jf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Qf(l))break;l=l.return}var p=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,I=td(t);pu(t,I,A,p);break;case 5:var $=a.stateNode;a.flags&32&&(es($,""),a.flags&=-33);var ct=td(t);pu(t,ct,$,p);break;case 3:case 4:var St=a.stateNode.containerInfo,Z=td(t);ed(t,Z,St,p);break;default:throw Error(s(161))}}catch(st){ke(t,t.return,st)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;D0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),t=t.sibling}}function xs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)U0(n,t),n=n.sibling;else M0(n)}function U0(t,n){var a=t.alternate;if(a===null)nd(t,!1);else switch(t.tag){case 3:if(ld=Ki=!1,_0(),xs(n,t),!Ki&&!vu){if(t=qi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];v_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ld=!0}qi=null;break;case 5:xs(n,t);break;case 4:r=Ki,Ki=!1,xs(n,t),Ki&&(vu=!0),Ki=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?nd(t,!1):xs(n,t));break;case 30:r=Ki,l=_0(),Ki=!1,xs(n,t),Ki&&(t.flags|=4);var c=t.memoizedProps,p=t.stateNode;n=ha(c,p),p=ha(a.memoizedProps,p);var A=pa(c.default,c.update);A==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=sd(t,a,n,p,A,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Rs(t,t.memoizedProps.onUpdate),qi=l):l!==null&&(l.push.apply(l,qi),qi=l),Ki=(t.flags&32)!==0?!0:r;break;default:xs(n,t)}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)E0(t,n.alternate,n),n=n.sibling}function ja(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),ja(a,r);break;case 1:wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&d0(a,a.return,l),ja(a,r);break;case 27:(r&2)!==0&&D_(a.stateNode,a.type,a.memoizedProps);case 5:wn(a,a.return),a.tag!==5&&a.tag!==27||Bo(a),ja(a,r);break;case 6:Bo(a);break;case 26:wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||He||l.parentNode.removeChild(l),ja(a,r);break;case 22:a.memoizedState===null&&ja(a,r);break;case 30:wn(a,a.return),ja(a,r);break;case 7:wn(a,a.return);default:ja(a,r)}t=t.sibling}}function wi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,p=c.flags,A=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:wi(l,c,a),zo(4,c);break;case 1:if(wi(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(ct){ke(r,r.return,ct)}if(r=c,l=r.updateQueue,l!==null){var I=r.stateNode;try{var $=l.shared.hiddenCallbacks;if($!==null)for(l.shared.hiddenCallbacks=null,l=0;l<$.length;l++)$m($[l],I)}catch(ct){ke(r,r.return,ct)}}A&&p&64&&f0(c),Wi(c,c.return);break;case 27:(a&2)!==0&&m0(c);case 5:c.tag!==5&&c.tag!==27||h0(c),wi(l,c,a),A&&r===null&&p&4&&jf(c),Wi(c,c.return);break;case 6:h0(c);break;case 26:I=c.stateNode,c.memoizedState!==null||I===null||yn||Zd(Zo(I.ownerDocument),c.type,I),wi(l,c,a),A&&r===null&&p&4&&jf(c),Wi(c,c.return);break;case 12:wi(l,c,a);break;case 31:wi(l,c,a),A&&p&4&&R0(l,c);break;case 13:wi(l,c,a),A&&p&4&&C0(l,c);break;case 22:c.memoizedState===null&&wi(l,c,a),Wi(c,c.return);break;case 30:wi(l,c,a),Wi(c,c.return);break;case 7:Wi(c,c.return);default:wi(l,c,a)}n=n.sibling}}function fd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&To(a))}function dd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t))}function xi(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)N0(t,n,a,r),n=n.sibling;else l&&x0(n)}function N0(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&_u(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),c&2048&&zo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),l&&ld&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&To(c)));break;case 12:if(c&2048){xi(t,n,a,r),c=n.stateNode;try{var p=n.memoizedProps,A=p.id,I=p.onPostCommit;typeof I=="function"&&I(A,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch($){ke(n,n.return,$)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:p=n.stateNode,A=n.alternate,n.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&_u(A),p._visibility&2?xi(t,n,a,r):Ho(t,n)):(l&&A!==null&&A.memoizedState!==null&&_u(n),p._visibility&2?xi(t,n,a,r):(p._visibility|=2,Ms(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&fd(A,n);break;case 24:xi(t,n,a,r),c&2048&&dd(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Yi(c.child,!0),Yi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function Ms(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,p=n,A=a,I=r,$=p.flags;switch(p.tag){case 0:case 11:case 15:Ms(c,p,A,I,l),zo(8,p);break;case 23:break;case 22:var ct=p.stateNode;p.memoizedState!==null?ct._visibility&2?Ms(c,p,A,I,l):Ho(c,p):(ct._visibility|=2,Ms(c,p,A,I,l)),l&&$&2048&&fd(p.alternate,p);break;case 24:Ms(c,p,A,I,l),l&&$&2048&&dd(p.alternate,p);break;default:Ms(c,p,A,I,l)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Ho(a,r),l&2048&&fd(r.alternate,r);break;case 24:Ho(a,r),l&2048&&dd(r.alternate,r);break;default:Ho(a,r)}n=n.sibling}}var Ir=8192;function zr(t,n,a){if(t.subtreeFlags&Ir)for(t=t.child;t!==null;)L0(t,n,a),t=t.sibling}function L0(t,n,a){switch(t.tag){case 26:zr(t,n,a),t.flags&Ir&&(t.memoizedState!==null?Cy(a,Ci,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&H_(a,t)));break;case 5:zr(t,n,a),t.flags&Ir&&(t=t.stateNode,(n&335544128)===n&&H_(a,t));break;case 3:case 4:var r=Ci;Ci=Zo(t.stateNode.containerInfo),zr(t,n,a),Ci=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ir,Ir=16777216,zr(t,n,a),Ir=r):zr(t,n,a));break;case 30:if((t.flags&Ir)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ii===null&&(ii=new Map),ii.set(r,l)}zr(t,n,a);break;default:zr(t,n,a)}}function O0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,I0(r,t)}O0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)P0(t),t=t.sibling}function P0(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Mu(t)):Go(t);break;default:Go(t)}}function Mu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,I0(r,t)}O0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),Mu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Mu(n));break;default:Mu(n)}t=t.sibling}}function I0(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:To(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,En=r;else t:for(a=t;En!==null;){r=En;var l=r.sibling,c=r.return;if(b0(r),r===a){En=null;break t}if(l!==null){l.return=c,En=l;break t}En=c}}}var EM={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},TM=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ke=null,ye=null,Ae=0,Xe=0,ai=null,$a=!1,ys=!1,hd=!1,Ea=0,un=0,tr=0,Br=0,yu=0,ri=0,Es=0,Vo=null,Zn=null,pd=!1,Eu=0,z0=0,Tu=1/0,bu=null,er=null,nn=0,Di=null,Fr=null,Ji=0,md=0,gd=null,B0=null,Ts=null,bs=null,As=null,Xo=0,Au=null;function si(){return(Be&2)!==0&&Ae!==0?Ae&-Ae:_t.T!==null?Ad():Tl()}function F0(){if(ri===0)if((Ae&536870912)===0||Se){var t=vr;vr<<=1,(vr&3932160)===0&&(vr=262144),ri=t}else ri=536870912;return t=Rn.current,t!==null&&(t.flags|=32),ri}function Rs(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=S_(ha(t.memoizedProps,a))),bs===null&&(bs=[]),bs.push(n.bind(null,r))}}function Kn(t,n,a){(t===Ke&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)&&(Cs(t,0),nr(t,Ae,ri,!1)),Hi(t,a),((Be&2)===0||t!==Ke)&&(t===Ke&&((Be&2)===0&&(Br|=a),un===4&&nr(t,Ae,ri,!1)),ji(t))}function H0(t,n,a){if((Be&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||za(t,n),l=r?RM(t,n):vd(t,n,!0),c=r;do{if(l===0){ys&&!r&&nr(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!bM(a)){l=vd(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var A=t;l=Vo;var I=A.current.memoizedState.isDehydrated;if(I&&(Cs(A,p).flags|=256),p=vd(A,p,!1),p!==2&&p!==6){if(hd&&!I){A.errorRecoveryDisabledLanes|=c,Br|=c,l=4;break t}c=Zn,Zn=l,c!==null&&(Zn===null?Zn=c:Zn.push.apply(Zn,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){Cs(t,0),nr(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:nr(r,n,ri,!$a);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Eu+300-Vt(),10<l)){if(nr(r,n,ri,!$a),Sr(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=zd(G0.bind(null,r,a,Zn,bu,pd,n,ri,Br,Es,$a,c,"Throttled",-0,0),l);break t}G0(r,a,Zn,bu,pd,n,ri,Br,Es,$a,c,null,-0,0)}}break}while(!0);ji(t)}function G0(t,n,a,r,l,c,p,A,I,$,ct,St,Z,st){t.timeoutHandle=-1;var Lt=n.subtreeFlags,Kt=(c&335544064)===c;if(St=null,(Kt||Lt&8192||(Lt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},ii=null,L0(n,c,St),Kt&&(Lt=St,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Lt.count++,Lt.waitingForViewTransition=!0,Lt=Jo.bind(Lt),Kt.finished.then(Lt,Lt))),Lt=(c&62914560)===c?Eu-Vt():(c&4194048)===c?z0-Vt():0,Lt=wy(St,Lt),Lt!==null)){Ji=c,t.cancelPendingCommit=Lt(K0.bind(null,t,n,c,a,r,l,p,A,I,$,ct,St,null,Z,st)),nr(t,c,p,!$);return}K0(t,n,c,a,r,l,p,A,I,$,ct,St)}function bM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ei(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nr(t,n,a,r){n=Fi(t,n),n&=~yu,n&=~Br,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-le(l),p=1<<c;r[c]=-1,l&=~p}a!==0&&xr(t,a,n)}function Ru(){return(Be&6)===0?(ko(0),!1):!0}function _d(){if(ye!==null){if(Xe===0)var t=ye.return;else t=ye,_a=Ar=null,bf(t),ps=null,Ro=0,t=ye;for(;t!==null;)c0(t.alternate,t),t=t.return;ye=null}}function Cs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,KM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,_d(),Ke=t,ye=a=ma(t.current,null),Ae=n,Xe=0,ai=null,$a=!1,ys=za(t,n),hd=!1,Es=ri=yu=Br=tr=un=0,Zn=Vo=null,pd=!1,Ea=Fi(t,n),Pl(),a}function V0(t,n){fe=null,_t.H=su,n===hs||n===ql?(n=Km(),Xe=3):n===df?(n=Km(),Xe=4):Xe=n===Hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,ye===null&&(un=1,ou(t,gi(n,t.current)))}function X0(){var t=Rn.current;return t===null?!0:(Ae&4194048)===Ae?On===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===On:!1}function k0(){var t=_t.H;return _t.H=su,t===null?su:t}function W0(){var t=_t.A;return _t.A=EM,t}function Cu(){un=4,$a||(Ae&4194048)!==Ae&&Rn.current!==null||(ys=!0),(tr&134217727)===0&&(Br&134217727)===0||Ke===null||nr(Ke,Ae,ri,!1)}function vd(t,n,a){var r=Be;Be|=2;var l=k0(),c=W0();(Ke!==t||Ae!==n)&&(bu=null,Cs(t,n)),n=!1;var p=un;t:do try{if(Xe!==0&&ye!==null){var A=ye,I=ai;switch(Xe){case 8:_d(),p=6;break t;case 3:case 2:case 9:case 6:Rn.current===null&&(n=!0);var $=Xe;if(Xe=0,ai=null,ws(t,A,I,$),a&&ys){p=0;break t}break;default:$=Xe,Xe=0,ai=null,ws(t,A,I,$)}}AM(),p=un;break}catch(ct){V0(t,ct)}while(!0);return n&&t.shellSuspendCounter++,_a=Ar=null,Be=r,_t.H=l,_t.A=c,ye===null&&(Ke=null,Ae=0,Pl()),p}function AM(){for(;ye!==null;)q0(ye)}function RM(t,n){var a=Be;Be|=2;var r=k0(),l=W0();Ke!==t||Ae!==n?(bu=null,Tu=Vt()+500,Cs(t,n)):ys=za(t,n);t:do try{if(Xe!==0&&ye!==null){n=ye;var c=ai;e:switch(Xe){case 1:Xe=0,ai=null,ws(t,n,c,1);break;case 2:case 9:if(Ym(c)){Xe=0,ai=null,Y0(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==t||(Xe=7),ji(t)},c.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Ym(c)?(Xe=0,ai=null,Y0(n)):(Xe=0,ai=null,ws(t,n,c,7));break;case 5:var p=null;switch(ye.tag){case 26:p=ye.memoizedState;case 5:case 27:var A=ye;if(p?B_(p):A.stateNode.complete){Xe=0,ai=null;var I=A.sibling;if(I!==null)ye=I;else{var $=A.return;$!==null?(ye=$,wu($)):ye=null}break e}}Xe=0,ai=null,ws(t,n,c,5);break;case 6:Xe=0,ai=null,ws(t,n,c,6);break;case 8:_d(),un=6;break t;default:throw Error(s(462))}}CM();break}catch(ct){V0(t,ct)}while(!0);return _a=Ar=null,_t.H=r,_t.A=l,Be=a,ye!==null?0:(Ke=null,Ae=0,Pl(),un)}function CM(){for(;ye!==null&&!Pt();)q0(ye)}function q0(t){var n=l0(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,n===null?wu(t):ye=n}function Y0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=e0(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=e0(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:bf(n);var r=n;r===Mn&&(Se?(Gl(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(Gl(r),Se=!0));default:c0(a,n),n=ye=Im(n,Ea),n=l0(a,n,Ea)}t.memoizedProps=t.pendingProps,n===null?wu(t):ye=n}function ws(t,n,a,r){_a=Ar=null,bf(n),ps=null,Ro=0;var l=n.return;try{if(mM(t,l,n,a,Ae)){un=1,ou(t,gi(a,t.current)),ye=null;return}}catch(c){if(l!==null)throw ye=l,c;un=1,ou(t,gi(a,t.current)),ye=null;return}n.flags&32768?(Se||r===1?t=!0:ys||(Ae&536870912)!==0?t=!1:($a=t=!0,(r===2||r===9||r===3||r===6)&&(r=Rn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Z0(n,t)):wu(n)}function wu(t){var n=t;do{if((n.flags&32768)!==0){Z0(n,$a);return}t=n.return;var a=SM(n.alternate,n,Ea);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);un===0&&(un=5)}function Z0(t,n){do{var a=xM(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);un=6,ye=null}function K0(t,n,a,r,l,c,p,A,I,$,ct,St){t.cancelPendingCommit=null;do Du();while(nn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ke&&(ye=Ke=null,Ae=0),Fr=n,Di=t,Ji=a,gd=l,B0=r,wM(t,n,a,p,A,I,St)}}function wM(t,n,a,r,l,c,p){var A=n.lanes|n.childLanes;if(md=A,A|=jc,El(t,a,A,r,l,c),bs=null,(a&335544064)===a?(As=iM(t),r=10262):(As=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,PM(Ct,function(){return yd(),null})):(t.callbackNode=null,t.callbackPriority=0),mu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,l=Rt.p,Rt.p=2,c=Be,Be|=4;try{MM(t,n,a)}finally{Be=c,Rt.p=l,_t.T=r}}nn=1,mu?Ts=ey(p,t.containerInfo,As,Sd,xd,UM,Md,yd,DM):(Sd(),xd(),Md())}function DM(t){if(nn!==0){var n=Di.onRecoverableError;n(t,{componentStack:null})}}function UM(){nn===3&&(nn=0,U0(Fr,Di),nn=4)}function Sd(){if(nn===1){nn=0;var t=Di,n=Fr,a=Ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var l=Rt.p;Rt.p=2;var c=Be;Be|=4;try{Fo=vu=!1,w0(n,t,a),a=Od;var p=Am(t.containerInfo),A=a.focusedElem,I=a.selectionRange;if(p!==A&&A&&A.ownerDocument&&bm(A.ownerDocument.documentElement,A)){if(I!==null&&Yc(A)){var $=I.start,ct=I.end;if(ct===void 0&&(ct=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ct,A.value.length);else{var St=A.ownerDocument||document,Z=St&&St.defaultView||window;if(Z.getSelection){var st=Z.getSelection(),Lt=A.textContent.length,Kt=Math.min(I.start,Lt),de=I.end===void 0?Kt:Math.min(I.end,Lt);!st.extend&&Kt>de&&(p=de,de=Kt,Kt=p);var j=Tm(A,Kt),V=Tm(A,de);if(j&&V&&(st.rangeCount!==1||st.anchorNode!==j.node||st.anchorOffset!==j.offset||st.focusNode!==V.node||st.focusOffset!==V.offset)){var et=St.createRange();et.setStart(j.node,j.offset),st.removeAllRanges(),Kt>de?(st.addRange(et),st.extend(V.node,V.offset)):(et.setEnd(V.node,V.offset),st.addRange(et))}}}}for(St=[],st=A;st=st.parentNode;)st.nodeType===1&&St.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}zs=!!Ld,Od=Ld=null}finally{Be=c,Rt.p=l,_t.T=r}}t.current=n,nn=2}}function xd(){if(nn===2){nn=0;var t=Di,n=Fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=Rt.p;Rt.p=2;var l=Be;Be|=4;try{E0(t,n.alternate,n)}finally{Be=l,Rt.p=r,_t.T=a}}nn=3}}function Md(){if(nn===4||nn===3){nn=0;var t=Ts;Ts=null,Ot();var n=Di,a=Fr,r=Ji,l=B0,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?nn=5:(nn=0,Fr=Di=null,Q0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(er=null),fo(r),a=a.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=_t.T,c=Rt.p,Rt.p=2,_t.T=null;try{for(var p=n.onRecoverableError,A=0;A<l.length;A++){var I=l[A];p(I.value,{componentStack:I.stack})}}finally{_t.T=a,Rt.p=c}}if(l=bs,p=As,As=null,l!==null&&(bs=null,p===null&&(p=[]),t!==null))for(I=0;I<l.length;I++)a=(0,l[I])(p),a!==void 0&&t.finished.finally(a);(Ji&3)!==0&&Du(),ji(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Au?Xo++:(Xo=0,Au=n):(Xo=0,Au=null),ko(0)}}function Q0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,To(n)))}function Du(){return Ts!==null&&(Ts.skipTransition(),Ts=null),Sd(),xd(),Md(),yd()}function yd(){if(nn!==5)return!1;var t=Di,n=md;md=0;var a=fo(Ji),r=_t.T,l=Rt.p;try{Rt.p=32>a?32:a,_t.T=null,a=gd,gd=null;var c=Di,p=Ji;if(nn=0,Fr=Di=null,Ji=0,(Be&6)!==0)throw Error(s(331));var A=Be;if(Be|=4,P0(c.current),N0(c,c.current,p,a),Be=A,ko(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Jt,c)}catch{}return!0}finally{Rt.p=l,_t.T=r,Q0(t,n)}}function J0(t,n,a){n=gi(a,n),n=Ff(t.stateNode,n,2),t=Ya(t,n,2),t!==null&&(Hi(t,2),ji(t))}function ke(t,n,a){if(t.tag===3)J0(t,t,a);else for(;n!==null;){if(n.tag===3){J0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=gi(a,t),a=Yg(2),r=Ya(n,a,2),r!==null&&(Zg(a,r,n,t),Hi(r,2),ji(r));break}}n=n.return}}function Ed(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new TM;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(hd=!0,l.add(a),t=NM.bind(null,t,n,a),n.then(t,t))}function NM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ke===t&&(Ae&a)===a&&((un===4||un===3&&(Ae&62914560)===Ae&&300>Vt()-Eu)&&(Be&2)===0?Cs(t,0):yu|=a,Es===Ae&&(Es=0)),ji(t)}function j0(t,n){n===0&&(n=oo()),t=Er(t,n),t!==null&&(Hi(t,n),ji(t))}function LM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),j0(t,a)}function OM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),j0(t,a)}function PM(t,n){return wt(t,n)}var Ds=null,Us=null,Td=!1,Uu=!1,bd=!1,ir=0;function ji(t){t!==Us&&t.next===null&&(Us===null?Ds=Us=t:Us=Us.next=t),Uu=!0,Td||(Td=!0,zM())}function ko(t,n){if(!bd&&Uu){bd=!0;do for(var a=!1,r=Ds;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var p=r.suspendedLanes,A=r.pingedLanes;c=(1<<31-le(42|t)+1)-1,c&=l&~(p&~A),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,n_(r,c))}else c=Ae,c=Sr(r,r===Ke?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||za(r,c)||(a=!0,n_(r,c));r=r.next}while(a);bd=!1}}function IM(){$0()}function $0(){Uu=Td=!1;var t=0;ir!==0&&ZM()&&(t=ir);for(var n=Vt(),a=null,r=Ds;r!==null;){var l=r.next,c=t_(r,n);c===0?(r.next=null,a===null?Ds=l:a.next=l,l===null&&(Us=a)):(a=r,(t!==0||(c&3)!==0)&&(Uu=!0)),r=l}nn!==0&&nn!==5||ko(t),ir!==0&&(ir=0)}function t_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-le(c),A=1<<p,I=l[p];I===-1?((A&a)===0||(A&r)!==0)&&(l[p]=so(A,n)):I<=n&&(t.expiredLanes|=A),c&=~A}if(n=Ke,a=Ae,a=Sr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Xe===2||Xe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&jt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||za(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&jt(r),fo(a)){case 2:case 8:a=k;break;case 32:a=Ct;break;case 268435456:a=Ut;break;default:a=Ct}return r=e_.bind(null,t),a=wt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&jt(r),t.callbackPriority=2,t.callbackNode=null,2}function e_(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Du()&&t.callbackNode!==a)return null;var r=Ae;return r=Sr(t,t===Ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(H0(t,r,n),t_(t,Vt()),t.callbackNode!=null&&t.callbackNode===a?e_.bind(null,t):null)}function n_(t,n){if(Du())return null;H0(t,n,!0)}function zM(){QM(function(){(Be&6)!==0?wt(oe,IM):$0()})}function Ad(){if(ir===0){var t=wr;t===0&&(t=jr,jr<<=1,(jr&261888)===0&&(jr=256)),ir=t}return ir}function i_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rl(t)}function BM(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=i_((l[H]||null).action),p=r.submitter;p&&(n=(n=p[H]||null)?i_(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var A=new Ul("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ir!==0){var I=new FormData(l,p);Of(a,{pending:!0,data:I,method:l.method,action:c},null,I)}}else typeof c=="function"&&(A.preventDefault(),I=new FormData(l,p),Of(a,{pending:!0,data:I,method:l.method,action:c},c,I))},currentTarget:l}]})}}for(var Rd=0;Rd<Jc.length;Rd++){var Cd=Jc[Rd],FM=Cd.toLowerCase(),HM=Cd[0].toUpperCase()+Cd.slice(1);Ai(FM,"on"+HM)}Ai(wm,"onAnimationEnd"),Ai(Dm,"onAnimationIteration"),Ai(Um,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Kx,"onTransitionRun"),Ai(Qx,"onTransitionStart"),Ai(Jx,"onTransitionCancel"),Ai(Nm,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function a_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var p=r.length-1;0<=p;p--){var A=r[p],I=A.instance,$=A.currentTarget;if(A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=$;try{c(l)}catch(ct){Ol(ct)}l.currentTarget=null,c=I}else for(p=0;p<r.length;p++){if(A=r[p],I=A.instance,$=A.currentTarget,A=A.listener,I!==c&&l.isPropagationStopped())break t;c=A,l.currentTarget=$;try{c(l)}catch(ct){Ol(ct)}l.currentTarget=null,c=I}}}}function Ee(t,n){var a=n[it];a===void 0&&(a=n[it]=new Set);var r=t+"__bubble";a.has(r)||(r_(n,t,2,!1),a.add(r))}function wd(t,n,a){var r=0;n&&(r|=4),r_(a,t,r,n)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function Dd(t){if(!t[Nu]){t[Nu]=!0,Fe.forEach(function(a){a!=="selectionchange"&&(GM.has(a)||wd(a,!1,t),wd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nu]||(n[Nu]=!0,wd("selectionchange",!1,n))}}function r_(t,n,a,r){switch(Z_(n)){case 2:var l=Ly;break;case 8:l=Oy;break;default:l=Qd}a=l.bind(null,n,a,t),l=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Ud(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var A=r.stateNode.containerInfo;if(A===l)break;if(p===4)for(p=r.return;p!==null;){var I=p.tag;if((I===3||I===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;A!==null;){if(p=ae(A),p===null)return;if(I=p.tag,I===5||I===6||I===26||I===27){r=c=p;continue t}A=A.parentNode}}r=r.return}rm(function(){var $=c,ct=Pc(a),St=[];t:{var Z=Lm.get(t);if(Z!==void 0){var st=Ul,Lt=t;switch(t){case"keypress":if(wl(a)===0)break t;case"keydown":case"keyup":st=bx;break;case"focusin":Lt="focus",st=Gc;break;case"focusout":Lt="blur",st=Gc;break;case"beforeblur":case"afterblur":st=Gc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Dx;break;case wm:case Dm:case Um:st=gx;break;case Nm:st=Nx;break;case"scroll":case"scrollend":st=fx;break;case"wheel":st=Ox;break;case"copy":case"cut":case"paste":st=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=cm;break;case"submit":st=Cx;break;case"toggle":case"beforetoggle":st=Ix}var Kt=(n&4)!==0,de=!Kt&&(t==="scroll"||t==="scrollend"),j=Kt?Z!==null?Z+"Capture":null:Z;Kt=[];for(var V=$,et;V!==null;){var vt=V;if(et=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||et===null||j===null||(vt=ho(V,j),vt!=null&&Kt.push(qo(V,vt,et))),de)break;V=V.return}0<Kt.length&&(Z=new st(Z,Lt,null,a,ct),St.push({event:Z,listeners:Kt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",st&&a!==Oc&&(Lt=a.relatedTarget||a.fromElement)&&(ae(Lt)||Lt[ft]))break t;(Z||st)&&(Lt=ct.window===ct?ct:(st=ct.ownerDocument)?st.defaultView||st.parentWindow:window,Z?(st=a.relatedTarget||a.toElement,Z=$,st=st?ae(st):null,st!==null&&(de=f(st),Kt=st.tag,st!==de||Kt!==5&&Kt!==27&&Kt!==6)&&(st=null)):(Z=null,st=$),Z!==st&&(Kt=lm,vt="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=cm,vt="onPointerLeave",j="onPointerEnter",V="pointer"),de=Z==null?Lt:kt(Z),et=st==null?Lt:kt(st),Lt=new Kt(vt,V+"leave",Z,a,ct),Lt.target=de,Lt.relatedTarget=et,vt=null,ae(ct)===$&&(Kt=new Kt(j,V+"enter",st,a,ct),Kt.target=et,Kt.relatedTarget=de,vt=Kt),de=vt,Kt=Z&&st?N(Z,st,VM):null,Z!==null&&s_(St,Lt,Z,Kt,!1),st!==null&&de!==null&&s_(St,de,st,Kt,!0)))}t:{if(Z=$?kt($):window,st=Z.nodeName&&Z.nodeName.toLowerCase(),st==="select"||st==="input"&&Z.type==="file")var Wt=vm;else if(gm(Z))if(Sm)Wt=qx;else{Wt=kx;var Re=Xx}else st=Z.nodeName,!st||st.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?$&&Lc($.elementType)&&(Wt=vm):Wt=Wx;if(Wt&&(Wt=Wt(t,$))){_m(St,Wt,a,ct);break t}Re&&Re(t,Z,$)}switch(Re=$?kt($):window,t){case"focusin":(gm(Re)||Re.contentEditable==="true")&&(rs=Re,Zc=$,Mo=null);break;case"focusout":Mo=Zc=rs=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Rm(St,a,ct);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":Rm(St,a,ct)}var $t;if(Xc)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else as?pm(t,a)&&(ie="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(fm&&a.locale!=="ko"&&(as||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&as&&($t=sm()):(Ba=ct,Bc="value"in Ba?Ba.value:Ba.textContent,as=!0)),Re=Lu($,ie),0<Re.length&&(ie=new um(ie,t,null,a,ct),St.push({event:ie,listeners:Re}),$t?ie.data=$t:($t=mm(a),$t!==null&&(ie.data=$t)))),($t=Bx?Fx(t,a):Hx(t,a))&&(ie=Lu($,"onBeforeInput"),0<ie.length&&(Re=new um("onBeforeInput","beforeinput",null,a,ct),St.push({event:Re,listeners:ie}),Re.data=$t)),BM(St,t,$,a,ct)}a_(St,n)})}function qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Lu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=ho(t,a),l!=null&&r.unshift(qo(t,l,c)),l=ho(t,n),l!=null&&r.push(qo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function VM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s_(t,n,a,r,l){for(var c=n._reactName,p=[];a!==null&&a!==r;){var A=a,I=A.alternate,$=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||$===null||(I=$,l?($=ho(a,c),$!=null&&p.unshift(qo(a,$,I))):l||($=ho(a,c),$!=null&&p.push(qo(a,$,I)))),a=a.return}p.length!==0&&t.push({event:n,listeners:p})}var XM=/\r\n?/g,kM=/\u0000|\uFFFD/g;function o_(t){return(typeof t=="string"?t:""+t).replace(XM,`
`).replace(kM,"")}function l_(t,n){return n=o_(n),o_(t)===n}function We(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||es(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&es(t,""+r);else return;break;case"className":ti(t,"class",r);break;case"tabIndex":ti(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ti(t,a,r);break;case"style":im(t,r,c);return;case"data":if(n!=="object"){ti(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Rl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&We(t,n,"name",l.name,l,null),We(t,n,"formEncType",l.formEncType,l,null),We(t,n,"formMethod",l.formMethod,l,null),We(t,n,"formTarget",l.formTarget,l,null)):(We(t,n,"encType",l.encType,l,null),We(t,n,"method",l.method,l,null),We(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Rl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Vi);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Rl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),Qe(t,"popover",r);break;case"xlinkActuate":be(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":be(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":be(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":be(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":be(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":be(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":be(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Qe(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=ux.get(a)||a,Qe(t,a,r);else return}ve=!0}function Nd(t,n,a,r,l,c){switch(a){case"style":im(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")es(t,r);else if(typeof r=="number"||typeof r=="bigint")es(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Vi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!_n.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[H]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}ve=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Qe(t,a,r)}return}ve=!0}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,c,p,a,null)}}l&&We(t,n,"srcSet",a.srcSet,a,null),r&&We(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var A=c=p=l=null,I=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":l=ct;break;case"type":p=ct;break;case"checked":I=ct;break;case"defaultChecked":$=ct;break;case"value":c=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:We(t,n,r,ct,a,null)}}$p(t,c,A,I,$,p,l,!1);return;case"select":Ee("invalid",t),r=p=c=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":c=A;break;case"defaultValue":p=A;break;case"multiple":r=A;default:We(t,n,l,A,a,null)}n=c,a=p,t.multiple=!!r,n!=null?ts(t,!!r,n,!1):a!=null&&ts(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),c=l=r=null;for(p in a)if(a.hasOwnProperty(p)&&(A=a[p],A!=null))switch(p){case"value":r=A;break;case"defaultValue":l=A;break;case"children":c=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:We(t,n,p,A,a,null)}em(t,r,l,c);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":We(t,n,I,r,a,null));return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<Wo.length;r++)Ee(Wo[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:We(t,n,$,r,a,null)}return;default:if(Lc(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Nd(t,n,ct,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&We(t,n,A,r,a,null))}var WM={};function qM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,A=null,I=null,$=null,ct=null;for(st in a){var St=a[st];if(a.hasOwnProperty(st)&&St!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":I=St;default:r.hasOwnProperty(st)||We(t,n,st,null,r,St)}}for(var Z in r){var st=r[Z];if(St=a[Z],r.hasOwnProperty(Z)&&(st!=null||St!=null))switch(Z){case"type":st!==St&&(ve=!0),c=st;break;case"name":st!==St&&(ve=!0),l=st;break;case"checked":st!==St&&(ve=!0),$=st;break;case"defaultChecked":st!==St&&(ve=!0),ct=st;break;case"value":st!==St&&(ve=!0),p=st;break;case"defaultValue":st!==St&&(ve=!0),A=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==St&&We(t,n,Z,st,r,St)}}Uc(t,p,A,I,$,ct,c,l);return;case"select":st=p=A=Z=null;for(c in a)if(I=a[c],a.hasOwnProperty(c)&&I!=null)switch(c){case"value":break;case"multiple":st=I;default:r.hasOwnProperty(c)||We(t,n,c,null,r,I)}for(l in r)if(c=r[l],I=a[l],r.hasOwnProperty(l)&&(c!=null||I!=null))switch(l){case"value":c!==I&&(ve=!0),Z=c;break;case"defaultValue":c!==I&&(ve=!0),A=c;break;case"multiple":c!==I&&(ve=!0),p=c;default:c!==I&&We(t,n,l,c,r,I)}n=A,a=p,r=st,Z!=null?ts(t,!!a,Z,!1):!!r!=!!a&&(n!=null?ts(t,!!a,n,!0):ts(t,!!a,a?[]:"",!1));return;case"textarea":st=Z=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(t,n,A,null,r,l)}for(p in r)if(l=r[p],c=a[p],r.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":l!==c&&(ve=!0),Z=l;break;case"defaultValue":l!==c&&(ve=!0),st=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&We(t,n,p,l,r,c)}tm(t,Z,st);return;case"option":for(var Lt in a)Z=a[Lt],a.hasOwnProperty(Lt)&&Z!=null&&!r.hasOwnProperty(Lt)&&(Lt==="selected"?t.selected=!1:We(t,n,Lt,null,r,Z));for(I in r)Z=r[I],st=a[I],r.hasOwnProperty(I)&&Z!==st&&(Z!=null||st!=null)&&(I==="selected"?(Z!==st&&(ve=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol"):We(t,n,I,Z,r,st));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)Z=a[Kt],a.hasOwnProperty(Kt)&&Z!=null&&!r.hasOwnProperty(Kt)&&We(t,n,Kt,null,r,Z);for($ in r)if(Z=r[$],st=a[$],r.hasOwnProperty($)&&Z!==st&&(Z!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:We(t,n,$,Z,r,st)}return;default:if(Lc(n)){for(var de in a)Z=a[de],a.hasOwnProperty(de)&&Z!==void 0&&!r.hasOwnProperty(de)&&Nd(t,n,de,void 0,r,Z);for(ct in r)Z=r[ct],st=a[ct],!r.hasOwnProperty(ct)||Z===st||Z===void 0&&st===void 0||Nd(t,n,ct,Z,r,st);return}}for(var j in a)Z=a[j],a.hasOwnProperty(j)&&Z!=null&&!r.hasOwnProperty(j)&&We(t,n,j,null,r,Z);for(St in r)Z=r[St],st=a[St],!r.hasOwnProperty(St)||Z===st||Z==null&&st==null||We(t,n,St,Z,r,st)}function u_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function YM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,p=l.initiatorType,A=l.duration;if(c&&A&&u_(p)){for(p=0,A=l.responseEnd,r+=1;r<a.length;r++){var I=a[r],$=I.startTime;if($>A)break;var ct=I.transferSize,St=I.initiatorType;ct&&u_(St)&&(I=I.responseEnd,p+=ct*(I<A?1:(A-$)/(I-$)))}if(--r,n+=8*(c+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ld=null,Od=null;function Yo(t){return t.nodeType===9?t:t.ownerDocument}function c_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function d_(t,n,a,r){return a=Yo(a).createElement(t),a[b]=r,a[H]=n,Dn(a,t,n),_e(a),a}function Pd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Id=null;function ZM(){var t=window.event;return t&&t.type==="popstate"?t===Id?!1:(Id=t,!0):(Id=null,!1)}var zd=typeof setTimeout=="function"?setTimeout:void 0,KM=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,p_=typeof requestAnimationFrame=="function"?requestAnimationFrame:zd,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(t){return h_.resolve(null).then(t).catch(JM)}:zd;function JM(t){setTimeout(function(){throw t})}function ar(t){return t==="head"}function m_(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Bs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Wd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Wd(a);for(var c=a.firstChild;c;){var p=c.nextSibling,A=c.nodeName;c[Nt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Wd(t.ownerDocument.body);a=l}while(a);Bs(n)}function g_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function __(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function v_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function jM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Bd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return jM(n,a,t)}function $M(t){return t.documentElement.clientHeight}function ty(t){this.addEventListener("load",t),this.addEventListener("error",t)}function ey(t,n,a,r,l,c,p,A,I){var $=n.nodeType===9?n:n.ownerDocument;try{var ct=$.startViewTransition({update:function(){var Z=$.defaultView,st=Z.navigation&&Z.navigation.transition,Lt=$.fonts.status;r();var Kt=[];if(Lt==="loaded"&&($M($),$.fonts.status==="loading"&&Kt.push($.fonts.ready)),Lt=Kt.length,t!==null)for(var de=t.suspenseyImages,j=0,V=0;V<de.length;V++){var et=de[V];if(!et.complete){var vt=et.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<Z.innerHeight&&vt.left<Z.innerWidth){if(j+=F_(et),j>Iu){Kt.length=Lt;break}et=new Promise(ty.bind(et)),Kt.push(et)}}}if(0<Kt.length)return Z=Promise.race([Promise.all(Kt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(l,l),(st?Promise.allSettled([st.finished,Z]):Z).then(c,c);if(l(),st)return st.finished.then(c,c);c()},types:a});$.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var Z=$.documentElement.getAnimations({subtree:!0}),st=0;st<Z.length;st++){var Lt=Z[st],Kt=Lt.effect,de=Kt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){St.push(Lt),Lt=Kt.getKeyframes();for(var j=de=void 0,V=!0,et=0;et<Lt.length;et++){var vt=Lt[et],Wt=vt.width;if(de===void 0)de=Wt;else if(de!==Wt){V=!1;break}if(Wt=vt.height,j===void 0)j=Wt;else if(j!==Wt){V=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}V&&de!==void 0&&j!==void 0&&(Kt.setKeyframes(Lt),V=getComputedStyle(Kt.target,Kt.pseudoElement),V.width!==de||V.height!==j)&&(V=Lt[0],V.width=de,V.height=j,V=Lt[Lt.length-1],V.width=de,V.height=j,Kt.setKeyframes(Lt))}}p()},function(Z){$.__reactViewTransition===ct&&($.__reactViewTransition=null);try{typeof Z=="object"&&Z!==null&&Z.name==="InvalidStateError"&&(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null),Z!==null&&I(Z)}finally{r(),l(),p()}}),ct.finished.finally(function(){for(var Z=0;Z<St.length;Z++)St[Z].cancel();$.__reactViewTransition===ct&&($.__reactViewTransition=null),A()}),ct}catch{return r(),l(),p(),null}}function Hr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Hr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:U({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Hr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Hr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function S_(t){return{name:t,group:new Hr("group",t),imagePair:new Hr("image-pair",t),old:new Hr("old",t),new:new Hr("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(M_(c,t,n,a)===-1){var p=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(I){p.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(l=p.removeEventListener.bind(p,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ns(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),v(this._fragmentFiber.child,!1,ny,t,A,r)}this._eventListeners=c}};function ny(t,n,a,r){return y(t).addEventListener(n,a,r),!1}oi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=M_(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Ns(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,iy,t,a,l),r.splice(n,1),c!==null&&c()}};function iy(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Ns(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function x_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function M_(t,n,a,r){if(t.length===0)return-1;r=x_(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&x_(c.optionsOrUseCapture)===r)return l}return-1}oi.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Ns(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Ns(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){v(this._fragmentFiber.child,!0,y_,t,void 0,void 0)};function y_(t,n){return t.tag===6?!1:(t=y(t),my(t,n))}oi.prototype.focusLast=function(t){var n=[];v(this._fragmentFiber.child,!0,Fd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!y_(n[a],t);a--);};function Fd(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=y(t),t=Yo(t).activeElement,t!==null&&v(this._fragmentFiber.child,!1,ay,t,void 0,void 0))};function ay(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),v(this._fragmentFiber.child,!1,ry,t,void 0,void 0)};function ry(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),v(this._fragmentFiber.child,!1,sy,t,void 0,void 0);for(var a=n=0;a<Ui.length;a++){var r=Ui[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ui[n++]=r}Ui.length=n}};function sy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ui=[],Hd=!1;function oy(t,n,a){Ui.push({fragmentInstance:t,observer:n,instance:a}),Hd||(Hd=!0,gy(function(){Hd=!1;var r=Ui;Ui=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return v(this._fragmentFiber.child,!1,ly,t,void 0,void 0),t};function ly(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,Fd,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,T(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var c=T(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=n.compareDocumentPosition(t),A=l.compareDocumentPosition(t),I=p&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||I||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||uy(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function uy(t,n,a,r,l){var c=ae(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=_(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=N(a,c,L),n===null?n=!1:(v(n,!0,B,c,a),c=M,M=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=N(r,c,L),n===null?n=!1:(v(n,!0,C,c,r),c=M,D=M=null,n=c!==null)),n):!1}function E_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,Fd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),E_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),E_(l,a)):y(l).scrollIntoView(t),r+=a?-1:1}};function cy(t,n){return t=y(t),T_(t,n),!1}function T_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function b_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Ns(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var p=0,A=0;A<Ui.length;A++){var I=Ui[A];(I.fragmentInstance!==n||I.observer!==c||I.instance!==t)&&(Ui[p++]=I)}Ui.length=p,c.observe(t)}),T_(t,n))}function fy(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Ns(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?oy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Gd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gd(a),Zt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dy(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Nt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function hy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function A_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function Vd(t){return t.data==="$?"||t.data==="$~"}function Xd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function py(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var kd=null;function R_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function C_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function my(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function gy(t){p_(function(){p_(function(n){return t(n)})})}function w_(t,n,a){switch(n=Yo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function D_(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&We(t,n,r,null,WM,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Vi&&(t.onclick=null),Zt(t)}function Wd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zt(t)}var yi=new Map,U_=new Set;function Zo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ta=Rt.d;Rt.d={f:_y,r:vy,D:Sy,C:xy,L:My,m:yy,X:Ty,S:Ey,M:by};function _y(){var t=Ta.f(),n=Ru();return t||n}function vy(t){var n=ue(t);n!==null&&n.tag===5&&n.type==="form"?Lg(n):Ta.r(t)}var Ls=typeof document>"u"?null:document;function N_(t,n,a){var r=Ls;if(r&&typeof n=="string"&&n){var l=pi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),U_.has(l)||(U_.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Dn(n,"link",t),_e(n),r.head.appendChild(n)))}}function Sy(t){Ta.D(t),N_("dns-prefetch",t,null)}function xy(t,n){Ta.C(t,n),N_("preconnect",t,n)}function My(t,n,a){Ta.L(t,n,a);var r=Ls;if(r&&t&&n){var l='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+pi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+pi(a.imageSizes)+'"]')):l+='[href="'+pi(t)+'"]';var c=l;switch(n){case"style":c=Os(t);break;case"script":c=Ps(t)}if(!(yi.has(c)||(t=U({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Ko(c))||n==="script"&&r.querySelector(Qo(c))))){var p=r.createElement("link");Dn(p,"link",t),n==="style"&&(p[qt]=!0,p.onload=p.onerror=function(){Ye(p)}),_e(p),r.head.appendChild(p)}}}function yy(t,n){Ta.m(t,n);var a=Ls;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+pi(r)+'"][href="'+pi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ps(t)}if(!yi.has(c)&&(t=U({rel:"modulepreload",href:t},n),yi.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qo(c)))return}r=a.createElement("link"),Dn(r,"link",t),_e(r),a.head.appendChild(r)}}}function Ey(t,n,a){Ta.S(t,n,a);var r=Ls;if(r&&t){var l=Me(r).hoistableStyles,c=Os(t);n=n||"default";var p=l.get(c);if(!p){var A={loading:0,preload:null};if(p=r.querySelector(Ko(c)))A.loading=5;else{t=U({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(c))&&qd(t,a);var I=p=r.createElement("link");_e(I),Dn(I,"link",t),I._p=new Promise(function($,ct){I.onload=$,I.onerror=ct}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ou(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:A},l.set(c,p)}}}function Ty(t,n){Ta.X(t,n);var a=Ls;if(a&&t){var r=Me(a).hoistableScripts,l=Ps(t),c=r.get(l);c||(c=a.querySelector(Qo(l)),c||(t=U({src:t,async:!0},n),(n=yi.get(l))&&Yd(t,n),c=a.createElement("script"),_e(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function by(t,n){Ta.M(t,n);var a=Ls;if(a&&t){var r=Me(a).hoistableScripts,l=Ps(t),c=r.get(l);c||(c=a.querySelector(Qo(l)),c||(t=U({src:t,async:!0,type:"module"},n),(n=yi.get(l))&&Yd(t,n),c=a.createElement("script"),_e(c),Dn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function L_(t,n,a,r){var l=(l=Pe.current)?Zo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Os(a.href),n=Me(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Os(a.href);var c=Me(l).hoistableStyles,p=c.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=l.querySelector(Ko(t)))?c._p||(p.instance=c,p.state.loading=5):(c=yi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,c)),Ay(l,t,c,p.state))),n&&r===null)throw Error(s(528,""));return p}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ps(a),n=Me(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Os(t){return'href="'+pi(t)+'"'}function Ko(t){return'link[rel="stylesheet"]['+t+"]"}function O_(t){return U({},t,{"data-precedence":t.precedence,precedence:null})}function Ay(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[qt]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[qt]=!0,n.onload=n.onerror=Ye.bind(null,n),Dn(n,"link",a),_e(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ps(t){return'[src="'+pi(t)+'"]'}function Qo(t){return"script[async]"+t}function P_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+pi(a.href)+'"]');if(r)return n.instance=r,_e(r),r;var l=U({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),_e(r),Dn(r,"style",l),Ou(r,a.precedence,t),n.instance=r;case"stylesheet":l=Os(a.href);var c=t.querySelector(Ko(l));if(c)return n.state.loading|=4,n.instance=c,_e(c),c;r=O_(a),(l=yi.get(l))&&qd(r,l),c=(t.ownerDocument||t).createElement("link"),_e(c);var p=c;return p._p=new Promise(function(A,I){p.onload=A,p.onerror=I}),Dn(c,"link",r),n.state.loading|=4,Ou(c,a.precedence,t),n.instance=c;case"script":return c=Ps(a.src),(l=t.querySelector(Qo(c)))?(n.instance=l,_e(l),l):(r=a,(l=yi.get(c))&&(r=U({},a),Yd(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),_e(l),Dn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ou(r,a.precedence,t));return n.instance}function Ou(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,p=0;p<r.length;p++){var A=r[p];if(A.dataset.precedence===n)c=A;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pu=null;function I_(t,n,a){if(Pu===null){var r=new Map,l=Pu=new Map;l.set(a,r)}else l=Pu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Nt]||c[b]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=t+p;var A=r.get(p);A?A.push(c):r.set(p,[c])}}return r}function Zd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ry(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function B_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function F_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function H_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=F_(n),t.suspenseyImages.push(n)),t=Dy.bind(t),n.decode().then(t,t))}function Cy(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Os(r.href),c=n.querySelector(Ko(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jo.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,_e(c);return}c=n.ownerDocument||n,r=O_(r),(l=yi.get(l))&&qd(r,l),c=c.createElement("link"),_e(c);var p=c;p._p=new Promise(function(A,I){p.onload=A,p.onerror=I}),Dn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jo.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Iu=0;function wy(t,n){return t.stylesheets&&t.count===0&&Bu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Iu===0&&(Iu=62500*YM());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Iu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function G_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Bu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Jo(){this.count--,G_(this)}function Dy(){this.imgCount--,G_(this)}var zu=null;function Bu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zu=new Map,n.forEach(Uy,t),zu=null,Jo.call(t))}function Uy(t,n){if(!(n.state.loading&4)){var a=zu.get(t);if(a)var r=a.get(null);else{a=new Map,zu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),r=p)}r&&a.set(null,r)}l=n.instance,p=l.getAttribute("data-precedence"),c=a.get(p)||r,c===r&&a.set(null,l),a.set(p,l),this.count++,r=Jo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Is={$$typeof:Q,Provider:null,Consumer:null,_currentValue:Ge,_currentValue2:Ge,_threadCount:0};function Ny(t,n,a,r,l,c,p,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function V_(t,n,a,r,l,c,p,A,I,$,ct,St){return t=new Ny(t,n,a,p,I,$,ct,St,A),n=1,c===!0&&(n|=24),c=Wn(3,null,null,n),t.current=c,c.stateNode=t,n=uf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},hf(c),t}function X_(t){return t?(t=ls,t):ls}function k_(t,n,a,r,l,c){l=X_(l),r.context===null?r.context=l:r.pendingContext=l,r=qa(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ya(t,r,n),a!==null&&(Kn(a,t,n),Co(a,t,n))}function W_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kd(t,n){W_(t,n),(t=t.alternate)&&W_(t,n)}function q_(t){if(t.tag===13||t.tag===31){var n=Er(t,67108864);n!==null&&Kn(n,t,67108864),Kd(t,67108864)}}function Y_(t){if(t.tag===13||t.tag===31){var n=si();n=co(n);var a=Er(t,n);a!==null&&Kn(a,t,n),Kd(t,n)}}var zs=!0;function Ly(t,n,a,r){var l=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=2,Qd(t,n,a,r)}finally{Rt.p=c,_t.T=l}}function Oy(t,n,a,r){var l=_t.T;_t.T=null;var c=Rt.p;try{Rt.p=8,Qd(t,n,a,r)}finally{Rt.p=c,_t.T=l}}function Qd(t,n,a,r){if(zs){var l=Jd(r);if(l===null)Ud(t,n,r,Fu,a),K_(t,r);else if(Iy(l,t,n,a,r))r.stopPropagation();else if(K_(t,r),n&4&&-1<Py.indexOf(t)){for(;l!==null;){var c=ue(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=ca(c.pendingLanes);if(p!==0){var A=c;for(A.pendingLanes|=2,A.entangledLanes|=2;p;){var I=1<<31-le(p);A.entanglements[1]|=I,p&=~I}ji(c),(Be&6)===0&&(Tu=Vt()+500,ko(0))}}break;case 31:case 13:A=Er(c,2),A!==null&&Kn(A,c,2),Ru(),Kd(c,2)}if(c=Jd(r),c===null&&Ud(t,n,r,Fu,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else Ud(t,n,r,null,a)}}function Jd(t){return t=Pc(t),jd(t)}var Fu=null;function jd(t){if(Fu=null,t=ae(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fu=t,null}function Z_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case oe:return 2;case k:return 8;case Ct:case xt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var $d=!1,rr=null,sr=null,or=null,jo=new Map,$o=new Map,lr=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(t,n){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function tl(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ue(n),n!==null&&q_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function Iy(t,n,a,r,l){switch(n){case"focusin":return rr=tl(rr,t,n,a,r,l),!0;case"dragenter":return sr=tl(sr,t,n,a,r,l),!0;case"mouseover":return or=tl(or,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return jo.set(c,tl(jo.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,$o.set(c,tl($o.get(c)||null,t,n,a,r,l)),!0}return!1}function Q_(t){var n=ae(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,bl(t.priority,function(){Y_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,bl(t.priority,function(){Y_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Oc=r,a.target.dispatchEvent(r),Oc=null}else return n=ue(a),n!==null&&q_(n),t.blockedOn=a,!1;n.shift()}return!0}function J_(t,n,a){Hu(t)&&a.delete(n)}function zy(){$d=!1,rr!==null&&Hu(rr)&&(rr=null),sr!==null&&Hu(sr)&&(sr=null),or!==null&&Hu(or)&&(or=null),jo.forEach(J_),$o.forEach(J_)}function Gu(t,n){t.blockedOn===n&&(t.blockedOn=null,$d||($d=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,zy)))}var Vu=null;function j_(t){Vu!==t&&(Vu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vu===t&&(Vu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(jd(r||a)===null)continue;break}var c=ue(a);c!==null&&(t.splice(n,3),n-=3,Of(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Bs(t){function n(I){return Gu(I,t)}rr!==null&&Gu(rr,t),sr!==null&&Gu(sr,t),or!==null&&Gu(or,t),jo.forEach(n),$o.forEach(n);for(var a=0;a<lr.length;a++){var r=lr[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Q_(a),a.blockedOn===null&&lr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],p=l[H]||null;if(typeof c=="function")p||j_(a);else if(p){var A=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[H]||null)A=p.formAction;else if(jd(l)!==null)continue}else A=p.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),j_(a)}}}function $_(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function th(t){this._internalRoot=t}Xu.prototype.render=th.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();k_(a,r,t,n,null,null)},Xu.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;k_(t.current,2,null,t,null,null),Ru(),n[ft]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<lr.length&&n!==0&&n<lr[a].priority;a++);lr.splice(a,0,t),a===0&&Q_(t)}};var tv=e.version;if(tv!=="19.3.0")throw Error(s(527,tv,"19.3.0"));Rt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var By={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Jt=ku.inject(By),Ht=ku}catch{}}return nl.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=Xg,c=kg,p=Wg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=V_(t,1,!1,null,null,a,r,null,l,c,p,$_),t[ft]=n.current,Dd(t),new th(n)},nl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=Xg,p=kg,A=Wg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=V_(t,1,!0,n,a??null,r,l,I,c,p,A,$_),n.context=X_(null),a=n.current,r=si(),r=co(r),l=qa(r),l.callback=null,Ya(a,l,r),a=r,n.current.lanes=a,Hi(n,a),ji(n),t[ft]=n.current,Dd(t),new Xu(n)},nl.version="19.3.0",nl}var cv;function Zy(){if(cv)return ih.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ih.exports=Yy(),ih.exports}var Ky=Zy();function yS(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const fv={1:{name:"front",orientation:{x:0,y:0}},2:{name:"top",orientation:{x:-90,y:0}},3:{name:"right",orientation:{x:0,y:-90}},4:{name:"left",orientation:{x:0,y:90}},5:{name:"bottom",orientation:{x:90,y:0}},6:{name:"back",orientation:{x:0,y:180}}},Qy={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},dv=65,hv=.5,Jy=10,oh=1500,pv=750,jy=260,mv=(o,e,i)=>Math.min(i,Math.max(e,o)),gv=o=>(o%360+360)%360,_v=o=>Math.round(o*10)/10,vv=(o,e,i)=>i>=0?o+gv(e-o):o-gv(o-e);function $y({value:o}){return bn.jsx(bn.Fragment,{children:Qy[o].map(([e,i])=>bn.jsx("span",{className:"pip",style:{gridRow:e,gridColumn:i}},`${e}-${i}`))})}function tE(){const[o,e]=me.useState({x:0,y:0}),[i,s]=me.useState({ms:0,easing:"linear"}),[u,f]=me.useState(!1),[d,h]=me.useState(!1),[g,m]=me.useState(null),[S,v]=me.useState(null),_=me.useRef(null),T=me.useRef(o),R=me.useRef({x:0,y:0}),O=me.useRef(null),y=me.useRef(null),M=me.useRef([]);T.current=o;const D=me.useCallback((U,x,w="ease-out")=>{s({ms:x,easing:w}),e(U)},[]),B=me.useCallback(async()=>{f(!0),m(null),v(null);try{const U=await yS(6),x=fv[U],w=3+Math.floor(Math.random()*5),z=Jy-w,G=Math.random()<.5?-1:1,K=Math.random()<.5?-1:1,ot=T.current,q={x:ot.x+G*360*w,y:ot.y+K*360*z};D(q,oh,"cubic-bezier(0.4, 0, 0.35, 1)"),M.current.push(setTimeout(()=>{const Q={x:vv(q.x,x.orientation.x,G),y:vv(q.y,x.orientation.y,K)};R.current=Q,D(Q,pv,"cubic-bezier(0.22, 1, 0.36, 1)")},oh)),M.current.push(setTimeout(()=>{f(!1),m(U)},oh+pv))}catch(U){f(!1),v(U instanceof Error?U.message:"Roll failed.")}},[D]),C=me.useCallback(U=>{if(u)return;const x=U.currentTarget.getBoundingClientRect();O.current={centerX:x.left+x.width/2,centerY:x.top+x.height/2,halfWidth:x.width/2,halfHeight:x.height/2,nx:0,ny:0},U.currentTarget.setPointerCapture(U.pointerId),h(!0),s({ms:0,easing:"linear"})},[u]),L=me.useCallback(U=>{const x=O.current;x&&(x.nx=mv((U.clientX-x.centerX)/x.halfWidth,-1,1),x.ny=mv((U.clientY-x.centerY)/x.halfHeight,-1,1),!y.current&&(y.current=requestAnimationFrame(()=>{y.current=null;const w=R.current;e({x:_v(w.x-x.ny*dv),y:_v(w.y+x.nx*dv)})})))},[]),N=me.useCallback(()=>{const U=O.current;if(!U)return;O.current=null,h(!1),y.current&&(cancelAnimationFrame(y.current),y.current=null),Math.abs(U.nx)>=hv||Math.abs(U.ny)>=hv?B():D(R.current,jy,"cubic-bezier(0.34, 1.3, 0.64, 1)")},[D,B]);return me.useEffect(()=>{const U=M.current;return()=>{U.forEach(clearTimeout),y.current&&cancelAnimationFrame(y.current)}},[]),bn.jsxs("div",{ref:_,className:"stage",onPointerDown:C,onPointerMove:L,onPointerUp:N,onPointerCancel:N,children:[bn.jsx("div",{className:"scene",children:bn.jsx("div",{className:`cube${u?" is-rolling":""}${d?" is-dragging":""}`,style:{transform:`translateZ(0) rotateX(${o.x}deg) rotateY(${o.y}deg)`,transitionDuration:`${i.ms}ms`,transitionTimingFunction:i.easing},children:Object.entries(fv).map(([U,x])=>bn.jsx("div",{className:`face face--${x.name}`,"data-value":U,children:bn.jsx("div",{className:"pips",children:bn.jsx($y,{value:Number(U)})})},U))})}),bn.jsx("p",{className:"hint",children:u?"Rolling...":S||(g?`You rolled ${g}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const Up="186",eE=0,Sv=1,nE=2,pc=1,iE=2,cl=3,Zr=0,Jn=1,na=2,Ua=0,dl=1,xv=2,Mv=3,yv=4,aE=5,js=100,rE=101,sE=102,oE=103,lE=104,uE=200,cE=201,fE=202,dE=203,ES=204,TS=205,hE=206,pE=207,mE=208,gE=209,_E=210,vE=211,SE=212,xE=213,ME=214,Gh=0,Vh=1,Xh=2,hl=3,kh=4,Wh=5,qh=6,Yh=7,bS=0,yE=1,EE=2,ra=0,AS=1,RS=2,CS=3,wS=4,DS=5,US=6,NS=7,LS=300,Kr=301,io=302,lh=303,uh=304,Ac=306,Zh=1e3,Da=1001,Kh=1002,Nn=1003,TE=1004,Wu=1005,zn=1006,ch=1007,qr=1008,fi=1009,OS=1010,PS=1011,pl=1012,Np=1013,sa=1014,ia=1015,oa=1016,Lp=1017,Op=1018,ml=1020,IS=35902,zS=35899,BS=1021,FS=1022,Ii=1023,Oa=1026,Yr=1027,HS=1028,Pp=1029,Qr=1030,Ip=1031,zp=1033,mc=33776,gc=33777,_c=33778,vc=33779,Qh=35840,Jh=35841,jh=35842,$h=35843,tp=36196,ep=37492,np=37496,ip=37488,ap=37489,xc=37490,rp=37491,sp=37808,op=37809,lp=37810,up=37811,cp=37812,fp=37813,dp=37814,hp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,Sp=37821,xp=36492,Mp=36494,yp=36495,Ep=36283,Tp=36284,Mc=36285,bp=36286,bE=3200,Ap=0,AE=1,gr="",ci="srgb",yc="srgb-linear",Ec="linear",qe="srgb",fh=7680,RE=519,CE=512,wE=513,DE=514,Bp=515,UE=516,NE=517,Fp=518,LE=519,OE=35044,Ev="300 es",aa=2e3,gl=2001;function PE(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Tc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function IE(){const o=Tc("canvas");return o.style.display="block",o}const Tv={};function bv(...o){const e="THREE."+o.shift();console.log(e,...o)}function GS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function se(...o){o=GS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ie(...o){o=GS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function to(...o){const e=o.join(" ");e in Tv||(Tv[e]=!0,se(...o))}function zE(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const BE={[Gh]:Vh,[Xh]:qh,[kh]:Yh,[hl]:Wh,[Vh]:Gh,[qh]:Xh,[Yh]:kh,[Wh]:hl};class Jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,d=u.length;f<d;f++)u[f].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,Rp=180/Math.PI;function vl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Ue(o,e,i){return Math.max(e,Math.min(i,o))}function FE(o,e){return(o%e+e)%e}function hh(o,e,i){return(1-i)*o+i*e}function il(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Yp=class Yp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ue(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,d=this.y-e.y;return this.x=f*s-d*u+e.x,this.y=f*u+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yp.prototype.isVector2=!0;let Te=Yp;class _r{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,d,h){let g=s[u+0],m=s[u+1],S=s[u+2],v=s[u+3],_=f[d+0],T=f[d+1],R=f[d+2],O=f[d+3];if(v!==O||g!==_||m!==T||S!==R){let y=g*_+m*T+S*R+v*O;y<0&&(_=-_,T=-T,R=-R,O=-O,y=-y);let M=1-h;if(y<.9995){const D=Math.acos(y),B=Math.sin(D);M=Math.sin(M*D)/B,h=Math.sin(h*D)/B,g=g*M+_*h,m=m*M+T*h,S=S*M+R*h,v=v*M+O*h}else{g=g*M+_*h,m=m*M+T*h,S=S*M+R*h,v=v*M+O*h;const D=1/Math.sqrt(g*g+m*m+S*S+v*v);g*=D,m*=D,S*=D,v*=D}}e[i]=g,e[i+1]=m,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,u,f,d){const h=s[u],g=s[u+1],m=s[u+2],S=s[u+3],v=f[d],_=f[d+1],T=f[d+2],R=f[d+3];return e[i]=h*R+S*v+g*T-m*_,e[i+1]=g*R+S*_+m*v-h*T,e[i+2]=m*R+S*T+h*_-g*v,e[i+3]=S*R-h*v-g*_-m*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,d=e._order,h=Math.cos,g=Math.sin,m=h(s/2),S=h(u/2),v=h(f/2),_=g(s/2),T=g(u/2),R=g(f/2);switch(d){case"XYZ":this._x=_*S*v+m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v-_*T*R;break;case"YXZ":this._x=_*S*v+m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v+_*T*R;break;case"ZXY":this._x=_*S*v-m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v-_*T*R;break;case"ZYX":this._x=_*S*v-m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v+_*T*R;break;case"YZX":this._x=_*S*v+m*T*R,this._y=m*T*v+_*S*R,this._z=m*S*R-_*T*v,this._w=m*S*v-_*T*R;break;case"XZY":this._x=_*S*v-m*T*R,this._y=m*T*v-_*S*R,this._z=m*S*R+_*T*v,this._w=m*S*v+_*T*R;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],d=i[1],h=i[5],g=i[9],m=i[2],S=i[6],v=i[10],_=s+h+v;if(_>0){const T=.5/Math.sqrt(_+1);this._w=.25/T,this._x=(S-g)*T,this._y=(f-m)*T,this._z=(d-u)*T}else if(s>h&&s>v){const T=2*Math.sqrt(1+s-h-v);this._w=(S-g)/T,this._x=.25*T,this._y=(u+d)/T,this._z=(f+m)/T}else if(h>v){const T=2*Math.sqrt(1+h-s-v);this._w=(f-m)/T,this._x=(u+d)/T,this._y=.25*T,this._z=(g+S)/T}else{const T=2*Math.sqrt(1+v-s-h);this._w=(d-u)/T,this._x=(f+m)/T,this._y=(g+S)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,d=e._w,h=i._x,g=i._y,m=i._z,S=i._w;return this._x=s*S+d*h+u*m-f*g,this._y=u*S+d*g+f*h-s*m,this._z=f*S+d*m+s*g-u*h,this._w=d*S-s*h-u*g-f*m,this._onChangeCallback(),this}slerp(e,i){let s=e._x,u=e._y,f=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,u=-u,f=-f,d=-d,h=-h);let g=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);g=Math.sin(g*m)/S,i=Math.sin(i*m)/S,this._x=this._x*g+s*i,this._y=this._y*g+u*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+u*i,this._z=this._z*g+f*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zp=class Zp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Av.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Av.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,d=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,d=e.y,h=e.z,g=e.w,m=2*(d*u-h*s),S=2*(h*i-f*u),v=2*(f*s-d*i);return this.x=i+g*m+d*v-h*S,this.y=s+g*S+h*m-f*v,this.z=u+g*v+f*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,d=i.x,h=i.y,g=i.z;return this.x=u*g-f*h,this.y=f*d-s*g,this.z=s*h-u*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ue(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zp.prototype.isVector3=!0;let at=Zp;const ph=new at,Av=new _r,Kp=class Kp{constructor(e,i,s,u,f,d,h,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,g,m)}set(e,i,s,u,f,d,h,g,m){const S=this.elements;return S[0]=e,S[1]=u,S[2]=h,S[3]=i,S[4]=f,S[5]=g,S[6]=s,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[3],g=s[6],m=s[1],S=s[4],v=s[7],_=s[2],T=s[5],R=s[8],O=u[0],y=u[3],M=u[6],D=u[1],B=u[4],C=u[7],L=u[2],N=u[5],U=u[8];return f[0]=d*O+h*D+g*L,f[3]=d*y+h*B+g*N,f[6]=d*M+h*C+g*U,f[1]=m*O+S*D+v*L,f[4]=m*y+S*B+v*N,f[7]=m*M+S*C+v*U,f[2]=_*O+T*D+R*L,f[5]=_*y+T*B+R*N,f[8]=_*M+T*C+R*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-s*f*S+s*h*g+u*f*m-u*d*g}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8],v=S*d-h*m,_=h*g-S*f,T=m*f-d*g,R=i*v+s*_+u*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=v*O,e[1]=(u*m-S*s)*O,e[2]=(h*s-u*d)*O,e[3]=_*O,e[4]=(S*i-u*g)*O,e[5]=(u*f-h*i)*O,e[6]=T*O,e[7]=(s*g-m*i)*O,e[8]=(d*i-s*f)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,d,h){const g=Math.cos(f),m=Math.sin(f);return this.set(s*g,s*m,-s*(g*d+m*h)+d+e,-u*m,u*g,-u*(-m*d+g*h)+h+i,0,0,1),this}scale(e,i){return to("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mh.makeScale(e,i)),this}rotate(e){return to("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mh.makeRotation(-e)),this}translate(e,i){return to("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kp.prototype.isMatrix3=!0;let ce=Kp;const mh=new ce,Rv=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const o={enabled:!0,workingColorSpace:yc,spaces:{},convert:function(u,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qe&&(u.r=Na(u.r),u.g=Na(u.g),u.b=Na(u.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(u.r=eo(u.r),u.g=eo(u.g),u.b=eo(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===gr?Ec:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,d){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[yc]:{primaries:e,whitePoint:s,transfer:Ec,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const De=HE();function Na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Fs;class GE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Fs===void 0&&(Fs=Tc("canvas")),Fs.width=e.width,Fs.height=e.height;const u=Fs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Fs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Tc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let d=0;d<f.length;d++)f[d]=Na(f[d]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:e.width,height:e.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VE=0;class Hp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let d=0,h=u.length;d<h;d++)u[d].isDataTexture?f.push(gh(u[d].image)):f.push(gh(u[d]))}else f=gh(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function gh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let XE=0;const _h=new at;class Bn extends Jr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,s=Da,u=Da,f=zn,d=qr,h=Ii,g=fi,m=Bn.DEFAULT_ANISOTROPY,S=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=vl(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=g,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==LS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case Da:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case Da:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=LS;Bn.DEFAULT_ANISOTROPY=1;const Qp=class Qp{constructor(e=0,i=0,s=0,u=1){this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*u+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*u+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*u+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*u+d[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const g=e.elements,m=g[0],S=g[4],v=g[8],_=g[1],T=g[5],R=g[9],O=g[2],y=g[6],M=g[10];if(Math.abs(S-_)<.01&&Math.abs(v-O)<.01&&Math.abs(R-y)<.01){if(Math.abs(S+_)<.1&&Math.abs(v+O)<.1&&Math.abs(R+y)<.1&&Math.abs(m+T+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(m+1)/2,C=(T+1)/2,L=(M+1)/2,N=(S+_)/4,U=(v+O)/4,x=(R+y)/4;return B>C&&B>L?B<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(B),u=N/s,f=U/s):C>L?C<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(C),s=N/u,f=x/u):L<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(L),s=U/f,u=x/f),this.set(s,u,f,i),this}let D=Math.sqrt((y-R)*(y-R)+(v-O)*(v-O)+(_-S)*(_-S));return Math.abs(D)<.001&&(D=1),this.x=(y-R)/D,this.y=(v-O)/D,this.z=(_-S)/D,this.w=Math.acos((m+T+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this.w=Ue(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this.w=Ue(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ue(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qp.prototype.isVector4=!0;let an=Qp;class kE extends Jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i),this.textures=[];const u={width:e,height:i,depth:s.depth},f=new Bn(u),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isData3DTexture!==!0&&(this.textures[u].isArrayTexture=this.textures[u].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Hp(u)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends kE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class VS extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class WE extends Bn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bc=class bc{constructor(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,y)}set(e,i,s,u,f,d,h,g,m,S,v,_,T,R,O,y){const M=this.elements;return M[0]=e,M[4]=i,M[8]=s,M[12]=u,M[1]=f,M[5]=d,M[9]=h,M[13]=g,M[2]=m,M[6]=S,M[10]=v,M[14]=_,M[3]=T,M[7]=R,M[11]=O,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,u=1/Hs.setFromMatrixColumn(e,0).length(),f=1/Hs.setFromMatrixColumn(e,1).length(),d=1/Hs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,d=Math.cos(s),h=Math.sin(s),g=Math.cos(u),m=Math.sin(u),S=Math.cos(f),v=Math.sin(f);if(e.order==="XYZ"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=g*S,i[4]=-g*v,i[8]=m,i[1]=T+R*m,i[5]=_-O*m,i[9]=-h*g,i[2]=O-_*m,i[6]=R+T*m,i[10]=d*g}else if(e.order==="YXZ"){const _=g*S,T=g*v,R=m*S,O=m*v;i[0]=_+O*h,i[4]=R*h-T,i[8]=d*m,i[1]=d*v,i[5]=d*S,i[9]=-h,i[2]=T*h-R,i[6]=O+_*h,i[10]=d*g}else if(e.order==="ZXY"){const _=g*S,T=g*v,R=m*S,O=m*v;i[0]=_-O*h,i[4]=-d*v,i[8]=R+T*h,i[1]=T+R*h,i[5]=d*S,i[9]=O-_*h,i[2]=-d*m,i[6]=h,i[10]=d*g}else if(e.order==="ZYX"){const _=d*S,T=d*v,R=h*S,O=h*v;i[0]=g*S,i[4]=R*m-T,i[8]=_*m+O,i[1]=g*v,i[5]=O*m+_,i[9]=T*m-R,i[2]=-m,i[6]=h*g,i[10]=d*g}else if(e.order==="YZX"){const _=d*g,T=d*m,R=h*g,O=h*m;i[0]=g*S,i[4]=O-_*v,i[8]=R*v+T,i[1]=v,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=T*v+R,i[10]=_-O*v}else if(e.order==="XZY"){const _=d*g,T=d*m,R=h*g,O=h*m;i[0]=g*S,i[4]=-v,i[8]=m*S,i[1]=_*v+O,i[5]=d*S,i[9]=T*v-R,i[2]=R*v-T,i[6]=h*S,i[10]=O*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qE,e,YE)}lookAt(e,i,s){const u=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),cr.crossVectors(s,li),cr.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),cr.crossVectors(s,li)),cr.normalize(),qu.crossVectors(li,cr),u[0]=cr.x,u[4]=qu.x,u[8]=li.x,u[1]=cr.y,u[5]=qu.y,u[9]=li.y,u[2]=cr.z,u[6]=qu.z,u[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,d=s[0],h=s[4],g=s[8],m=s[12],S=s[1],v=s[5],_=s[9],T=s[13],R=s[2],O=s[6],y=s[10],M=s[14],D=s[3],B=s[7],C=s[11],L=s[15],N=u[0],U=u[4],x=u[8],w=u[12],z=u[1],G=u[5],K=u[9],ot=u[13],q=u[2],Q=u[6],X=u[10],Y=u[14],ut=u[3],nt=u[7],dt=u[11],yt=u[15];return f[0]=d*N+h*z+g*q+m*ut,f[4]=d*U+h*G+g*Q+m*nt,f[8]=d*x+h*K+g*X+m*dt,f[12]=d*w+h*ot+g*Y+m*yt,f[1]=S*N+v*z+_*q+T*ut,f[5]=S*U+v*G+_*Q+T*nt,f[9]=S*x+v*K+_*X+T*dt,f[13]=S*w+v*ot+_*Y+T*yt,f[2]=R*N+O*z+y*q+M*ut,f[6]=R*U+O*G+y*Q+M*nt,f[10]=R*x+O*K+y*X+M*dt,f[14]=R*w+O*ot+y*Y+M*yt,f[3]=D*N+B*z+C*q+L*ut,f[7]=D*U+B*G+C*Q+L*nt,f[11]=D*x+B*K+C*X+L*dt,f[15]=D*w+B*ot+C*Y+L*yt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],d=e[1],h=e[5],g=e[9],m=e[13],S=e[2],v=e[6],_=e[10],T=e[14],R=e[3],O=e[7],y=e[11],M=e[15],D=g*T-m*_,B=h*T-m*v,C=h*_-g*v,L=d*T-m*S,N=d*_-g*S,U=d*v-h*S;return i*(O*D-y*B+M*C)-s*(R*D-y*L+M*N)+u*(R*B-O*L+M*U)-f*(R*C-O*N+y*U)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[1],d=e[5],h=e[9],g=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-s*(f*S-h*g)+u*(f*m-d*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],d=e[4],h=e[5],g=e[6],m=e[7],S=e[8],v=e[9],_=e[10],T=e[11],R=e[12],O=e[13],y=e[14],M=e[15],D=i*h-s*d,B=i*g-u*d,C=i*m-f*d,L=s*g-u*h,N=s*m-f*h,U=u*m-f*g,x=S*O-v*R,w=S*y-_*R,z=S*M-T*R,G=v*y-_*O,K=v*M-T*O,ot=_*M-T*y,q=D*ot-B*K+C*G+L*z-N*w+U*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/q;return e[0]=(h*ot-g*K+m*G)*Q,e[1]=(u*K-s*ot-f*G)*Q,e[2]=(O*U-y*N+M*L)*Q,e[3]=(_*N-v*U-T*L)*Q,e[4]=(g*z-d*ot-m*w)*Q,e[5]=(i*ot-u*z+f*w)*Q,e[6]=(y*C-R*U-M*B)*Q,e[7]=(S*U-_*C+T*B)*Q,e[8]=(d*K-h*z+m*x)*Q,e[9]=(s*z-i*K-f*x)*Q,e[10]=(R*N-O*C+M*D)*Q,e[11]=(v*C-S*N-T*D)*Q,e[12]=(h*w-d*G-g*x)*Q,e[13]=(i*G-s*w+u*x)*Q,e[14]=(O*B-R*L-y*D)*Q,e[15]=(S*L-v*B+_*D)*Q,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,d=e.x,h=e.y,g=e.z,m=f*d,S=f*h;return this.set(m*d+s,m*h-u*g,m*g+u*h,0,m*h+u*g,S*h+s,S*g-u*d,0,m*g-u*h,S*g+u*d,f*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,d){return this.set(1,s,f,0,e,1,d,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,d=i._y,h=i._z,g=i._w,m=f+f,S=d+d,v=h+h,_=f*m,T=f*S,R=f*v,O=d*S,y=d*v,M=h*v,D=g*m,B=g*S,C=g*v,L=s.x,N=s.y,U=s.z;return u[0]=(1-(O+M))*L,u[1]=(T+C)*L,u[2]=(R-B)*L,u[3]=0,u[4]=(T-C)*N,u[5]=(1-(_+M))*N,u[6]=(y+D)*N,u[7]=0,u[8]=(R+B)*U,u[9]=(y-D)*U,u[10]=(1-(_+O))*U,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;e.x=u[12],e.y=u[13],e.z=u[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Hs.set(u[0],u[1],u[2]).length();const h=Hs.set(u[4],u[5],u[6]).length(),g=Hs.set(u[8],u[9],u[10]).length();f<0&&(d=-d),Ni.copy(this);const m=1/d,S=1/h,v=1/g;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=S,Ni.elements[5]*=S,Ni.elements[6]*=S,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,i.setFromRotationMatrix(Ni),s.x=d,s.y=h,s.z=g,this}makePerspective(e,i,s,u,f,d,h=aa,g=!1){const m=this.elements,S=2*f/(i-e),v=2*f/(s-u),_=(i+e)/(i-e),T=(s+u)/(s-u);let R,O;if(g)R=f/(d-f),O=d*f/(d-f);else if(h===aa)R=-(d+f)/(d-f),O=-2*d*f/(d-f);else if(h===gl)R=-d/(d-f),O=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=T,m[13]=0,m[2]=0,m[6]=0,m[10]=R,m[14]=O,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,u,f,d,h=aa,g=!1){const m=this.elements,S=2/(i-e),v=2/(s-u),_=-(i+e)/(i-e),T=-(s+u)/(s-u);let R,O;if(g)R=1/(d-f),O=d/(d-f);else if(h===aa)R=-2/(d-f),O=-(d+f)/(d-f);else if(h===gl)R=-1/(d-f),O=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=T,m[2]=0,m[6]=0,m[10]=R,m[14]=O,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};bc.prototype.isMatrix4=!0;let rn=bc;const Hs=new at,Ni=new rn,qE=new at(0,0,0),YE=new at(1,1,1),cr=new at,qu=new at,li=new at,wv=new rn,Dv=new _r;class Pa{constructor(e=0,i=0,s=0,u=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],d=u[4],h=u[8],g=u[1],m=u[5],S=u[9],v=u[2],_=u[6],T=u[10];switch(i){case"XYZ":this._y=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,T),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,T),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,T),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-Ue(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,T),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,T));break;case"XZY":this._z=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-S,T),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class XS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZE=0;const Uv=new at,Gs=new _r,ba=new rn,Yu=new at,al=new at,KE=new at,QE=new _r,Nv=new at(1,0,0),Lv=new at(0,1,0),Ov=new at(0,0,1),Pv={type:"added"},JE={type:"removed"},Vs={type:"childadded",child:null},vh={type:"childremoved",child:null};class Ln extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new at,i=new Pa,s=new _r,u=new at(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new rn},normalMatrix:{value:new ce}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new XS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,i){return Gs.setFromAxisAngle(e,i),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Nv,e)}rotateY(e){return this.rotateOnAxis(Lv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,i){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Nv,e)}translateY(e){return this.translateOnAxis(Lv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Yu.copy(e):Yu.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(al,Yu,this.up):ba.lookAt(Yu,al,this.up),this.quaternion.setFromRotationMatrix(ba),u&&(ba.extractRotation(u.matrixWorld),Gs.setFromRotationMatrix(ba),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(JE),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,d=u.length;f<d;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,e,KE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,QE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,u=e.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*u,f[13]+=s-f[1]*i-f[5]*s-f[9]*u,f[14]+=u-f[2]*i-f[6]*s-f[10]*u}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const u=this.parent;if(e===!0&&u!==null&&u.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,u.name=this.name,u.castShadow=this.castShadow,u.receiveShadow=this.receiveShadow,u.visible=this.visible,u.frustumCulled=this.frustumCulled,u.renderOrder=this.renderOrder,u.static=this.static,u.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.pivot!==null&&(u.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(u.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(u.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(h=>({...h})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(h,g){return h[g.uuid]===void 0&&(h[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const g=h.shapes;if(Array.isArray(g))for(let m=0,S=g.length;m<S;m++){const v=g[m];f(e.shapes,v)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let g=0,m=this.material.length;g<m;g++)h.push(f(e.materials,this.material[g]));u.material=h}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let h=0;h<this.children.length;h++)u.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let h=0;h<this.animations.length;h++){const g=this.animations[h];u.animations.push(f(e.animations,g))}}if(i){const h=d(e.geometries),g=d(e.materials),m=d(e.textures),S=d(e.images),v=d(e.shapes),_=d(e.skeletons),T=d(e.animations),R=d(e.nodes);h.length>0&&(s.geometries=h),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),T.length>0&&(s.animations=T),R.length>0&&(s.nodes=R)}return s.object=u,s;function d(h){const g=[];for(const m in h){const S=h[m];delete S.metadata,g.push(S)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new at(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zu extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jE={type:"move"};class Sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,d=null;const h=this._targetRay,g=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const O of e.hand.values()){const y=i.getJointPose(O,s),M=this._getHandJoint(m,O);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const S=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=S.position.distanceTo(v.position),T=.02,R=.005;m.inputState.pinching&&_>T+R?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=T-R&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(jE)))}return h!==null&&(h.visible=u!==null),g!==null&&(g.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Zu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const kS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Ku={h:0,s:0,l:0};function xh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=De.workingColorSpace){return this.r=e,this.g=i,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=De.workingColorSpace){if(e=FE(e,1),i=Ue(i,0,1),s=Ue(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=xh(d,f,e+1/3),this.g=xh(d,f,e),this.b=xh(d,f,e-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(e,i=ci){function s(f){f!==void 0&&parseFloat(f)<1&&se("Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const d=u[1],h=u[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:se("Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);se("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const s=kS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return De.workingToColorSpace(In.copy(this),e),Math.round(Ue(In.r*255,0,255))*65536+Math.round(Ue(In.g*255,0,255))*256+Math.round(Ue(In.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(In.copy(this),i);const s=In.r,u=In.g,f=In.b,d=Math.max(s,u,f),h=Math.min(s,u,f);let g,m;const S=(h+d)/2;if(h===d)g=0,m=0;else{const v=d-h;switch(m=S<=.5?v/(d+h):v/(2-d-h),d){case s:g=(u-f)/v+(u<f?6:0);break;case u:g=(f-s)/v+2;break;case f:g=(s-u)/v+4;break}g/=6}return e.h=g,e.s=m,e.l=S,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ci){De.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,u=In.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+i,fr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fr),e.getHSL(Ku);const s=hh(fr.h,Ku.h,i),u=hh(fr.s,Ku.s,i),f=hh(fr.l,Ku.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Le;Le.NAMES=kS;class $E extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pa,this.environmentIntensity=1,this.environmentRotation=new Pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new at,Aa=new at,Mh=new at,Ra=new at,Xs=new at,ks=new at,Iv=new at,yh=new at,Eh=new at,Th=new at,bh=new an,Ah=new an,Rh=new an;class Pi{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Li.subVectors(e,i),u.cross(Li);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Li.subVectors(u,i),Aa.subVectors(s,i),Mh.subVectors(e,i);const d=Li.dot(Li),h=Li.dot(Aa),g=Li.dot(Mh),m=Aa.dot(Aa),S=Aa.dot(Mh),v=d*m-h*h;if(v===0)return f.set(0,0,0),null;const _=1/v,T=(m*g-h*S)*_,R=(d*S-h*g)*_;return f.set(1-T-R,R,T)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,u,f,d,h,g){return this.getBarycoord(e,i,s,u,Ra)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,Ra.x),g.addScaledVector(d,Ra.y),g.addScaledVector(h,Ra.z),g)}static getInterpolatedAttribute(e,i,s,u,f,d){return bh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),bh.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,s),Rh.fromBufferAttribute(e,u),d.setScalar(0),d.addScaledVector(bh,f.x),d.addScaledVector(Ah,f.y),d.addScaledVector(Rh,f.z),d}static isFrontFacing(e,i,s,u){return Li.subVectors(s,i),Aa.subVectors(e,i),Li.cross(Aa).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Li.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return Pi.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let d,h;Xs.subVectors(u,s),ks.subVectors(f,s),yh.subVectors(e,s);const g=Xs.dot(yh),m=ks.dot(yh);if(g<=0&&m<=0)return i.copy(s);Eh.subVectors(e,u);const S=Xs.dot(Eh),v=ks.dot(Eh);if(S>=0&&v<=S)return i.copy(u);const _=g*v-S*m;if(_<=0&&g>=0&&S<=0)return d=g/(g-S),i.copy(s).addScaledVector(Xs,d);Th.subVectors(e,f);const T=Xs.dot(Th),R=ks.dot(Th);if(R>=0&&T<=R)return i.copy(f);const O=T*m-g*R;if(O<=0&&m>=0&&R<=0)return h=m/(m-R),i.copy(s).addScaledVector(ks,h);const y=S*R-T*v;if(y<=0&&v-S>=0&&T-R>=0)return Iv.subVectors(f,u),h=(v-S)/(v-S+(T-R)),i.copy(u).addScaledVector(Iv,h);const M=1/(y+O+_);return d=O*M,h=_*M,i.copy(s).addScaledVector(Xs,d).addScaledVector(ks,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sl{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Oi):Oi.fromBufferAttribute(f,d),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Qu.copy(s.boundingBox)),Qu.applyMatrix4(e.matrixWorld),this.union(Qu)}const u=e.children;for(let f=0,d=u.length;f<d;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),Ju.subVectors(this.max,rl),Ws.subVectors(e.a,rl),qs.subVectors(e.b,rl),Ys.subVectors(e.c,rl),dr.subVectors(qs,Ws),hr.subVectors(Ys,qs),Gr.subVectors(Ws,Ys);let i=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Gr.z,Gr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Gr.z,0,-Gr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Gr.y,Gr.x,0];return!Ch(i,Ws,qs,Ys,Ju)||(i=[1,0,0,0,1,0,0,0,1],!Ch(i,Ws,qs,Ys,Ju))?!1:(ju.crossVectors(dr,hr),i=[ju.x,ju.y,ju.z],Ch(i,Ws,qs,Ys,Ju))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new at,new at,new at,new at,new at,new at,new at,new at],Oi=new at,Qu=new Sl,Ws=new at,qs=new at,Ys=new at,dr=new at,hr=new at,Gr=new at,rl=new at,Ju=new at,ju=new at,Vr=new at;function Ch(o,e,i,s,u){for(let f=0,d=o.length-3;f<=d;f+=3){Vr.fromArray(o,f);const h=u.x*Math.abs(Vr.x)+u.y*Math.abs(Vr.y)+u.z*Math.abs(Vr.z),g=e.dot(Vr),m=i.dot(Vr),S=s.dot(Vr);if(Math.max(-Math.max(g,m,S),Math.min(g,m,S))>h)return!1}return!0}const gn=new at,$u=new Te;let tT=0;class La extends Jr{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=OE,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)$u.fromBufferAttribute(this,i),$u.applyMatrix3(e),this.setXY(i,$u.x,$u.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=il(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=il(i,this.array)),i}setX(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=il(i,this.array)),i}setY(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=il(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=il(i,this.array)),i}setW(e,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),u=Qn(u,this.array),f=Qn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class WS extends La{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class qS extends La{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class bi extends La{constructor(e,i,s){super(new Float32Array(e),i,s)}}const eT=new Sl,sl=new at,wh=new at;class Gp{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):eT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,d=e.length;f<d;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sl.subVectors(e,this.center);const i=sl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(sl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sl.copy(e.center).add(wh)),this.expandByPoint(sl.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nT=0;const Ei=new rn,Dh=new Ln,Zs=new at,ui=new Sl,ol=new Sl,Tn=new at;class ua extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PE(e)?qS:WS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ce().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const d=e[u];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bi(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];ui.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];ol.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(ui.min,ol.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,ol.max),ui.expandByPoint(Tn)):(ui.expandByPoint(ol.min),ui.expandByPoint(ol.max))}ui.getCenter(s);let u=0;for(let f=0,d=e.count;f<d;f++)Tn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(Tn));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],g=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)Tn.fromBufferAttribute(h,m),g&&(Zs.fromBufferAttribute(e,m),Tn.add(Zs)),u=Math.max(u,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new La(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],g=[];for(let x=0;x<s.count;x++)h[x]=new at,g[x]=new at;const m=new at,S=new at,v=new at,_=new Te,T=new Te,R=new Te,O=new at,y=new at;function M(x,w,z){m.fromBufferAttribute(s,x),S.fromBufferAttribute(s,w),v.fromBufferAttribute(s,z),_.fromBufferAttribute(f,x),T.fromBufferAttribute(f,w),R.fromBufferAttribute(f,z),S.sub(m),v.sub(m),T.sub(_),R.sub(_);const G=1/(T.x*R.y-R.x*T.y);isFinite(G)&&(O.copy(S).multiplyScalar(R.y).addScaledVector(v,-T.y).multiplyScalar(G),y.copy(v).multiplyScalar(T.x).addScaledVector(S,-R.x).multiplyScalar(G),h[x].add(O),h[w].add(O),h[z].add(O),g[x].add(y),g[w].add(y),g[z].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let x=0,w=D.length;x<w;++x){const z=D[x],G=z.start,K=z.count;for(let ot=G,q=G+K;ot<q;ot+=3)M(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const B=new at,C=new at,L=new at,N=new at;function U(x){L.fromBufferAttribute(u,x),N.copy(L);const w=h[x];B.copy(w),B.sub(L.multiplyScalar(L.dot(w))).normalize(),C.crossVectors(N,w);const G=C.dot(g[x])<0?-1:1;d.setXYZW(x,B.x,B.y,B.z,G)}for(let x=0,w=D.length;x<w;++x){const z=D[x],G=z.start,K=z.count;for(let ot=G,q=G+K;ot<q;ot+=3)U(e.getX(ot+0)),U(e.getX(ot+1)),U(e.getX(ot+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new La(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,T=s.count;_<T;_++)s.setXYZ(_,0,0,0);const u=new at,f=new at,d=new at,h=new at,g=new at,m=new at,S=new at,v=new at;if(e)for(let _=0,T=e.count;_<T;_+=3){const R=e.getX(_+0),O=e.getX(_+1),y=e.getX(_+2);u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,O),d.fromBufferAttribute(i,y),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),h.fromBufferAttribute(s,R),g.fromBufferAttribute(s,O),m.fromBufferAttribute(s,y),h.add(S),g.add(S),m.add(S),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(O,g.x,g.y,g.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,T=i.count;_<T;_+=3)u.fromBufferAttribute(i,_+0),f.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,f),v.subVectors(u,f),S.cross(v),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(h,g){const m=h.array,S=h.itemSize,v=h.normalized,_=new m.constructor(g.length*S);let T=0,R=0;for(let O=0,y=g.length;O<y;O++){h.isInterleavedBufferAttribute?T=g[O]*h.data.stride+h.offset:T=g[O]*S;for(let M=0;M<S;M++)_[R++]=m[T++]}return new La(_,S,v)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ua,s=this.index.array,u=this.attributes;for(const h in u){const g=u[h],m=e(g,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const g=[],m=f[h];for(let S=0,v=m.length;S<v;S++){const _=m[S],T=e(_,s);g.push(T)}i.morphAttributes[h]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,g=d.length;h<g;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];e.data.attributes[g]=m.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],S=[];for(let v=0,_=m.length;v<_;v++){const T=m[v];S.push(T.toJSON(e.data))}S.length>0&&(u[g]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const m in u){const S=u[m];this.setAttribute(m,S.clone(i))}const f=e.morphAttributes;for(const m in f){const S=[],v=f[m];for(let _=0,T=v.length;_<T;_++)S.push(v[_].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new at,iT=new at,aT=new ce;class mr{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=Uh.subVectors(s,i).cross(iT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const u=e.delta(Uh),f=this.normal.dot(u);if(f===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(u,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||aT.getNormalMatrix(e),u=this.coplanarPoint(Uh).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let rT=0;class xl extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=vl(),this.name="",this.type="Material",this.blending=dl,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ES,this.blendDst=TS,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fh,this.stencilZFail=fh,this.stencilZPass=fh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector2&&s&&s.isVector2||u&&u.isEuler&&s&&s.isEuler||u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}if(i){const f=u(e.textures),d=u(e.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new mr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Te().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wa=new at,Nh=new at,tc=new at,ec=new at;class sT{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=wa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(wa.copy(this.origin).addScaledVector(this.direction,i),wa.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){Nh.copy(e).add(i).multiplyScalar(.5),tc.copy(i).sub(e).normalize(),ec.copy(this.origin).sub(Nh);const f=e.distanceTo(i)*.5,d=-this.direction.dot(tc),h=ec.dot(this.direction),g=-ec.dot(tc),m=ec.lengthSq(),S=Math.abs(1-d*d);let v,_,T,R;if(S>0)if(v=d*g-h,_=d*h-g,R=f*S,v>=0)if(_>=-R)if(_<=R){const O=1/S;v*=O,_*=O,T=v*(v+d*_+2*h)+_*(d*v+_+2*g)+m}else _=f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;else _=-f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;else _<=-R?(v=Math.max(0,-(-d*f+h)),_=v>0?-f:Math.min(Math.max(-f,-g),f),T=-v*v+_*(_+2*g)+m):_<=R?(v=0,_=Math.min(Math.max(-f,-g),f),T=_*(_+2*g)+m):(v=Math.max(0,-(d*f+h)),_=v>0?f:Math.min(Math.max(-f,-g),f),T=-v*v+_*(_+2*g)+m);else _=d>0?-f:f,v=Math.max(0,-(d*_+h)),T=-v*v+_*(_+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),u&&u.copy(Nh).addScaledVector(tc,_),T}intersectSphere(e,i){if(e.radius<0)return null;wa.subVectors(e.center,this.origin);const s=wa.dot(this.direction),u=wa.dot(wa)-s*s,f=e.radius*e.radius;if(u>f)return null;const d=Math.sqrt(f-u),h=s-d,g=s+d;return g<0?null:h<0?this.at(g,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,d,h,g;const m=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,u=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,u=(e.min.x-_.x)*m),S>=0?(f=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(f=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),s>d||f>u||((f>s||isNaN(s))&&(s=f),(d<u||isNaN(u))&&(u=d),v>=0?(h=(e.min.z-_.z)*v,g=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,g=(e.min.z-_.z)*v),s>g||h>u)||((h>s||s!==s)&&(s=h),(g<u||u!==u)&&(u=g),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,wa)!==null}intersectTriangle(e,i,s,u,f){const d=this.origin,h=this.direction,g=h.x,m=h.y,S=h.z,v=e.x-d.x,_=e.y-d.y,T=e.z-d.z,R=i.x-d.x,O=i.y-d.y,y=i.z-d.z,M=s.x-d.x,D=s.y-d.y,B=s.z-d.z,C=Math.abs(g),L=Math.abs(m),N=Math.abs(S);let U,x,w,z,G,K,ot,q,Q,X,Y,ut;if(C>=L&&C>=N?(w=g,K=v,Q=R,ut=M,g>=0?(U=m,x=S,z=_,G=T,ot=O,q=y,X=D,Y=B):(U=S,x=m,z=T,G=_,ot=y,q=O,X=B,Y=D)):L>=N?(w=m,K=_,Q=O,ut=D,m>=0?(U=S,x=g,z=T,G=v,ot=y,q=R,X=B,Y=M):(U=g,x=S,z=v,G=T,ot=R,q=y,X=M,Y=B)):(w=S,K=T,Q=y,ut=B,S>=0?(U=g,x=m,z=v,G=_,ot=R,q=O,X=M,Y=D):(U=m,x=g,z=_,G=v,ot=O,q=R,X=D,Y=M)),w===0)return null;const nt=U/w,dt=x/w,yt=1/w,Qt=z-nt*K,Yt=G-dt*K,F=ot-nt*Q,mt=q-dt*Q,At=X-nt*ut,J=Y-dt*ut,ht=At*mt-J*F,Tt=Qt*J-Yt*At,It=F*Yt-mt*Qt;if(u){if(ht<0||Tt<0||It<0)return null}else if((ht<0||Tt<0||It<0)&&(ht>0||Tt>0||It>0))return null;const _t=ht+Tt+It;if(_t===0)return null;const Rt=yt*(ht*K+Tt*Q+It*ut);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vp extends xl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.combine=bS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zv=new rn,Xr=new sT,nc=new Gp,Bv=new at,ic=new at,ac=new at,rc=new at,Lh=new at,sc=new at,Fv=new at,oc=new at;class Bi extends Ln{constructor(e=new ua,i=new Vp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=u.length;f<d;f++){const h=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const h=this.morphTargetInfluences;if(f&&h){sc.set(0,0,0);for(let g=0,m=f.length;g<m;g++){const S=h[g],v=f[g];S!==0&&(Lh.fromBufferAttribute(v,e),d?sc.addScaledVector(Lh,S):sc.addScaledVector(Lh.sub(i),S))}i.add(sc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nc.copy(s.boundingSphere),nc.applyMatrix4(f),Xr.copy(e.ray).recast(e.near),!(nc.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(nc,Bv)===null||Xr.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(zv.copy(f).invert(),Xr.copy(e.ray).applyMatrix4(zv),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Xr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,d=this.material,h=f.index,g=f.attributes.position,m=f.attributes.uv,S=f.attributes.uv1,v=f.attributes.normal,_=f.groups,T=f.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const y=_[R],M=d[y.materialIndex],D=Math.max(y.start,T.start),B=Math.min(h.count,Math.min(y.start+y.count,T.start+T.count));for(let C=D,L=B;C<L;C+=3){const N=h.getX(C),U=h.getX(C+1),x=h.getX(C+2);u=lc(this,M,e,s,m,S,v,N,U,x),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(h.count,T.start+T.count);for(let y=R,M=O;y<M;y+=3){const D=h.getX(y),B=h.getX(y+1),C=h.getX(y+2);u=lc(this,d,e,s,m,S,v,D,B,C),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}else if(g!==void 0)if(Array.isArray(d))for(let R=0,O=_.length;R<O;R++){const y=_[R],M=d[y.materialIndex],D=Math.max(y.start,T.start),B=Math.min(g.count,Math.min(y.start+y.count,T.start+T.count));for(let C=D,L=B;C<L;C+=3){const N=C,U=C+1,x=C+2;u=lc(this,M,e,s,m,S,v,N,U,x),u&&(u.faceIndex=Math.floor(C/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const R=Math.max(0,T.start),O=Math.min(g.count,T.start+T.count);for(let y=R,M=O;y<M;y+=3){const D=y,B=y+1,C=y+2;u=lc(this,d,e,s,m,S,v,D,B,C),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}}}function oT(o,e,i,s,u,f,d,h){let g;if(e.side===Jn?g=s.intersectTriangle(d,f,u,!0,h):g=s.intersectTriangle(u,f,d,e.side===Zr,h),g===null)return null;oc.copy(h),oc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(oc);return m<i.near||m>i.far?null:{distance:m,point:oc.clone(),object:o}}function lc(o,e,i,s,u,f,d,h,g,m){o.getVertexPosition(h,ic),o.getVertexPosition(g,ac),o.getVertexPosition(m,rc);const S=oT(o,e,i,s,ic,ac,rc,Fv);if(S){const v=new at;Pi.getBarycoord(Fv,ic,ac,rc,v),u&&(S.uv=Pi.getInterpolatedAttribute(u,h,g,m,v,new Te)),f&&(S.uv1=Pi.getInterpolatedAttribute(f,h,g,m,v,new Te)),d&&(S.normal=Pi.getInterpolatedAttribute(d,h,g,m,v,new at),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:h,b:g,c:m,normal:new at,materialIndex:0};Pi.getNormal(ic,ac,rc,_.normal),S.face=_,S.barycoord=v}return S}class lT extends Bn{constructor(e=null,i=1,s=1,u,f,d,h,g,m=Nn,S=Nn,v,_){super(null,d,h,g,m,S,u,f,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kr=new Gp,uT=new Te(.5,.5),uc=new at;class Xp{constructor(e=new mr,i=new mr,s=new mr,u=new mr,f=new mr,d=new mr){this.planes=[e,i,s,u,f,d]}set(e,i,s,u,f,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(u),h[4].copy(f),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=aa,s=!1){const u=this.planes,f=e.elements,d=f[0],h=f[1],g=f[2],m=f[3],S=f[4],v=f[5],_=f[6],T=f[7],R=f[8],O=f[9],y=f[10],M=f[11],D=f[12],B=f[13],C=f[14],L=f[15];if(u[0].setComponents(m-d,T-S,M-R,L-D).normalize(),u[1].setComponents(m+d,T+S,M+R,L+D).normalize(),u[2].setComponents(m+h,T+v,M+O,L+B).normalize(),u[3].setComponents(m-h,T-v,M-O,L-B).normalize(),s)u[4].setComponents(g,_,y,C).normalize(),u[5].setComponents(m-g,T-_,M-y,L-C).normalize();else if(u[4].setComponents(m-g,T-_,M-y,L-C).normalize(),i===aa)u[5].setComponents(m+g,T+_,M+y,L+C).normalize();else if(i===gl)u[5].setComponents(g,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const i=uT.distanceTo(e.center);return kr.radius=.7071067811865476+i,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(uc.x=u.normal.x>0?e.max.x:e.min.x,uc.y=u.normal.y>0?e.max.y:e.min.y,uc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class YS extends Bn{constructor(e=[],i=Kr,s,u,f,d,h,g,m,S){super(e,i,s,u,f,d,h,g,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cT extends Bn{constructor(e,i,s,u,f,d,h,g,m){super(e,i,s,u,f,d,h,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _l extends Bn{constructor(e,i,s=sa,u,f,d,h=Nn,g=Nn,m,S=Oa,v=1){if(S!==Oa&&S!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,u,f,d,h,g,S,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class fT extends _l{constructor(e,i=sa,s=Kr,u,f,d=Nn,h=Nn,g,m=Oa){const S={width:e,height:e,depth:1},v=[S,S,S,S,S,S];super(e,e,i,s,u,f,d,h,g,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ZS extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ml extends ua{constructor(e=1,i=1,s=1,u=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:d};const h=this;u=Math.floor(u),f=Math.floor(f),d=Math.floor(d);const g=[],m=[],S=[],v=[];let _=0,T=0;R("z","y","x",-1,-1,s,i,e,d,f,0),R("z","y","x",1,-1,s,i,-e,d,f,1),R("x","z","y",1,1,e,s,i,u,d,2),R("x","z","y",1,-1,e,s,-i,u,d,3),R("x","y","z",1,-1,e,i,s,u,f,4),R("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(g),this.setAttribute("position",new bi(m,3)),this.setAttribute("normal",new bi(S,3)),this.setAttribute("uv",new bi(v,2));function R(O,y,M,D,B,C,L,N,U,x,w){const z=C/U,G=L/x,K=C/2,ot=L/2,q=N/2,Q=U+1,X=x+1;let Y=0,ut=0;const nt=new at;for(let dt=0;dt<X;dt++){const yt=dt*G-ot;for(let Qt=0;Qt<Q;Qt++){const Yt=Qt*z-K;nt[O]=Yt*D,nt[y]=yt*B,nt[M]=q,m.push(nt.x,nt.y,nt.z),nt[O]=0,nt[y]=0,nt[M]=N>0?1:-1,S.push(nt.x,nt.y,nt.z),v.push(Qt/U),v.push(1-dt/x),Y+=1}}for(let dt=0;dt<x;dt++)for(let yt=0;yt<U;yt++){const Qt=_+yt+Q*dt,Yt=_+yt+Q*(dt+1),F=_+(yt+1)+Q*(dt+1),mt=_+(yt+1)+Q*dt;g.push(Qt,Yt,mt),g.push(Yt,F,mt),ut+=6}h.addGroup(T,ut,w),T+=ut,_+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kp extends ua{constructor(e=[],i=[],s=1,u=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:u};const f=[],d=[];h(u),m(s),S(),this.setAttribute("position",new bi(f,3)),this.setAttribute("normal",new bi(f.slice(),3)),this.setAttribute("uv",new bi(d,2)),u===0?this.computeVertexNormals():this.normalizeNormals();function h(D){const B=new at,C=new at,L=new at;for(let N=0;N<i.length;N+=3)T(i[N+0],B),T(i[N+1],C),T(i[N+2],L),g(B,C,L,D)}function g(D,B,C,L){const N=L+1,U=[];for(let x=0;x<=N;x++){U[x]=[];const w=D.clone().lerp(C,x/N),z=B.clone().lerp(C,x/N),G=N-x;for(let K=0;K<=G;K++)K===0&&x===N?U[x][K]=w:U[x][K]=w.clone().lerp(z,K/G)}for(let x=0;x<N;x++)for(let w=0;w<2*(N-x)-1;w++){const z=Math.floor(w/2);w%2===0?(_(U[x][z+1]),_(U[x+1][z]),_(U[x][z])):(_(U[x][z+1]),_(U[x+1][z+1]),_(U[x+1][z]))}}function m(D){const B=new at;for(let C=0;C<f.length;C+=3)B.x=f[C+0],B.y=f[C+1],B.z=f[C+2],B.normalize().multiplyScalar(D),f[C+0]=B.x,f[C+1]=B.y,f[C+2]=B.z}function S(){const D=new at;for(let B=0;B<f.length;B+=3){D.x=f[B+0],D.y=f[B+1],D.z=f[B+2];const C=y(D)/2/Math.PI+.5,L=M(D)/Math.PI+.5;d.push(C,1-L)}R(),v()}function v(){for(let D=0;D<d.length;D+=6){const B=d[D+0],C=d[D+2],L=d[D+4],N=Math.max(B,C,L),U=Math.min(B,C,L);N>.9&&U<.1&&(B<.2&&(d[D+0]+=1),C<.2&&(d[D+2]+=1),L<.2&&(d[D+4]+=1))}}function _(D){f.push(D.x,D.y,D.z)}function T(D,B){const C=D*3;B.x=e[C+0],B.y=e[C+1],B.z=e[C+2]}function R(){const D=new at,B=new at,C=new at,L=new at,N=new Te,U=new Te,x=new Te;for(let w=0,z=0;w<f.length;w+=9,z+=6){D.set(f[w+0],f[w+1],f[w+2]),B.set(f[w+3],f[w+4],f[w+5]),C.set(f[w+6],f[w+7],f[w+8]),N.set(d[z+0],d[z+1]),U.set(d[z+2],d[z+3]),x.set(d[z+4],d[z+5]),L.copy(D).add(B).add(C).divideScalar(3);const G=y(L);O(N,z+0,D,G),O(U,z+2,B,G),O(x,z+4,C,G)}}function O(D,B,C,L){L<0&&D.x===1&&(d[B]=D.x-1),C.x===0&&C.z===0&&(d[B]=L/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function M(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kp(e.vertices,e.indices,e.radius,e.detail)}}class Wp extends kp{constructor(e=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],u=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,u,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Wp(e.radius,e.detail)}}class yl extends ua{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,d=i/2,h=Math.floor(s),g=Math.floor(u),m=h+1,S=g+1,v=e/h,_=i/g,T=[],R=[],O=[],y=[];for(let M=0;M<S;M++){const D=M*_-d;for(let B=0;B<m;B++){const C=B*v-f;R.push(C,-D,0),O.push(0,0,1),y.push(B/h),y.push(1-M/g)}}for(let M=0;M<g;M++)for(let D=0;D<h;D++){const B=D+m*M,C=D+m*(M+1),L=D+1+m*(M+1),N=D+1+m*M;T.push(B,C,N),T.push(C,L,N)}this.setIndex(T),this.setAttribute("position",new bi(R,3)),this.setAttribute("normal",new bi(O,3)),this.setAttribute("uv",new bi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}function ao(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];if(Hv(u))u.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone();else if(Array.isArray(u))if(Hv(u[0])){const f=[];for(let d=0,h=u.length;d<h;d++)f[d]=u[d].clone();e[i][s]=f}else e[i][s]=u.slice();else e[i][s]=u}}return e}function kn(o){const e={};for(let i=0;i<o.length;i++){const s=ao(o[i]);for(const u in s)e[u]=s[u]}return e}function Hv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function dT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function KS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const hT={clone:ao,merge:kn};var pT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends xl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pT,this.fragmentShader=mT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=dT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const d=this.uniforms[u].value;d&&d.isTexture?i.uniforms[u]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[u]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[u]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[u]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[u]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[u]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[u]={type:"m4",value:d.toArray()}:i.uniforms[u]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const u=e.uniforms[s];switch(this.uniforms[s]={},u.type){case"t":this.uniforms[s].value=i[u.value]||null;break;case"c":this.uniforms[s].value=new Le().setHex(u.value);break;case"v2":this.uniforms[s].value=new Te().fromArray(u.value);break;case"v3":this.uniforms[s].value=new at().fromArray(u.value);break;case"v4":this.uniforms[s].value=new an().fromArray(u.value);break;case"m3":this.uniforms[s].value=new ce().fromArray(u.value);break;case"m4":this.uniforms[s].value=new rn().fromArray(u.value);break;default:this.uniforms[s].value=u.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gT extends la{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _T extends xl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vT extends xl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ST extends xl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class QS extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class xT extends QS{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Oh=new rn,Gv=new at,Vv=new at;class MT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xp,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;Gv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Vv),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,s,u){Oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),s.setFromProjectionMatrix(Oh,e.coordinateSystem,e.reversedDepth);const f=this._frameExtents,d=u?u.z/f.x:1,h=u?u.w/f.y:1,g=u?u.x/f.x:0,m=u?u.y/f.y:0;e.coordinateSystem===gl||e.reversedDepth?i.set(.5*d,0,0,.5*d+g,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+g,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(Oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cc=new at,fc=new _r,$i=new at;class JS extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cc,fc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,fc,$i.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(cc,fc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cc,fc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pr=new at,Xv=new Te,kv=new Te;class Ti extends JS{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rp*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,i){return this.getViewBounds(e,Xv,kv),i.subVectors(kv,Xv)}setViewOffset(e,i,s,u,f,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dh*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;f+=d.offsetX*u/g,i-=d.offsetY*s/m,u*=d.width/g,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class qp extends JS{constructor(e=-1,i=1,s=1,u=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,d=s+e,h=u+i,g=u-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=S*this.view.offsetY,g=h-S*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yT extends MT{constructor(){super(new qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ET extends QS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new yT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Ks=-90,Qs=1;class TT extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Ti(Ks,Qs,e,i);u.layers=this.layers,this.add(u);const f=new Ti(Ks,Qs,e,i);f.layers=this.layers,this.add(f);const d=new Ti(Ks,Qs,e,i);d.layers=this.layers,this.add(d);const h=new Ti(Ks,Qs,e,i);h.layers=this.layers,this.add(h);const g=new Ti(Ks,Qs,e,i);g.layers=this.layers,this.add(g);const m=new Ti(Ks,Qs,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,d,h,g]=i;for(const m of i)this.remove(m);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===gl)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,g,m,S]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const O=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,1,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),s.texture.generateMipmaps=O,e.setRenderTarget(s,5,u),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(v,_,T),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class bT extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jp=class Jp{constructor(e,i,s,u){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,u)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,u){const f=this.elements;return f[0]=e,f[2]=i,f[1]=s,f[3]=u,this}};Jp.prototype.isMatrix2=!0;let Wv=Jp;function qv(o,e,i,s){const u=AT(s);switch(i){case BS:return o*e;case HS:return o*e/u.components*u.byteLength;case Pp:return o*e/u.components*u.byteLength;case Qr:return o*e*2/u.components*u.byteLength;case Ip:return o*e*2/u.components*u.byteLength;case FS:return o*e*3/u.components*u.byteLength;case Ii:return o*e*4/u.components*u.byteLength;case zp:return o*e*4/u.components*u.byteLength;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Jh:case $h:return Math.max(o,16)*Math.max(e,8)/4;case Qh:case jh:return Math.max(o,8)*Math.max(e,8)/2;case tp:case ep:case ip:case ap:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case np:case xc:case rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case lp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case dp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case pp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case mp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case gp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case _p:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xp:case Mp:case yp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ep:case Tp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Mc:case bp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AT(o){switch(o){case fi:case OS:return{byteLength:1,components:1};case pl:case PS:case oa:return{byteLength:2,components:1};case Lp:case Op:return{byteLength:2,components:4};case sa:case Np:case ia:return{byteLength:4,components:1};case IS:case zS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);function jS(){let o=null,e=!1,i=null,s=null;function u(f,d){s=o.requestAnimationFrame(u),i(f,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function RT(o){const e=new WeakMap;function i(h,g){const m=h.array,S=h.usage,v=m.byteLength,_=o.createBuffer();o.bindBuffer(g,_),o.bufferData(g,m,S),h.onUploadCallback();let T;if(m instanceof Float32Array)T=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)T=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?T=o.HALF_FLOAT:T=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)T=o.SHORT;else if(m instanceof Uint32Array)T=o.UNSIGNED_INT;else if(m instanceof Int32Array)T=o.INT;else if(m instanceof Int8Array)T=o.BYTE;else if(m instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:T,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,g,m){const S=g.array,v=g.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,S);else{v.sort((T,R)=>T.start-R.start);let _=0;for(let T=1;T<v.length;T++){const R=v[_],O=v[T];O.start<=R.start+R.count+1?R.count=Math.max(R.count,O.start+O.count-R.start):(++_,v[_]=O)}v.length=_+1;for(let T=0,R=v.length;T<R;T++){const O=v[T];o.bufferSubData(m,O.start*S.BYTES_PER_ELEMENT,S,O.start,O.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const g=e.get(h);g&&(o.deleteBuffer(g.buffer),e.delete(h))}function d(h,g){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,g));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,g),m.version=h.version}}return{get:u,remove:f,update:d}}var CT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wT=`#ifdef USE_ALPHAHASH
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
#endif`,DT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OT=`#ifdef USE_AOMAP
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
#endif`,PT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IT=`#ifdef USE_BATCHING
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
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GT=`#ifdef USE_IRIDESCENCE
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
#endif`,VT=`#ifdef USE_BUMPMAP
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
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,KT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,JT=`#define PI 3.141592653589793
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
} // validated`,jT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$T=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",rb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mb=`#ifdef USE_GRADIENTMAP
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
}`,gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
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
#endif`,Ab=`uniform sampler2D dfgLUT;
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bb=`#if defined( USE_POINTS_UV )
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
#endif`,Fb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
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
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h1=`float getShadowMask() {
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
}`,p1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`uniform float scale;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,X1=`uniform vec3 diffuse;
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
}`,k1=`#define LAMBERT
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
}`,W1=`#define LAMBERT
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
}`,q1=`#define MATCAP
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
}`,Y1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,K1=`#define NORMAL
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
}`,Q1=`#define PHONG
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
}`,J1=`#define PHONG
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
}`,j1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
}`,tA=`#define TOON
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
}`,eA=`#define TOON
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
}`,nA=`uniform float size;
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
}`,iA=`uniform vec3 diffuse;
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
}`,aA=`#include <common>
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
}`,rA=`uniform vec3 color;
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
}`,sA=`uniform float rotation;
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
}`,oA=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:CT,alphahash_pars_fragment:wT,alphamap_fragment:DT,alphamap_pars_fragment:UT,alphatest_fragment:NT,alphatest_pars_fragment:LT,aomap_fragment:OT,aomap_pars_fragment:PT,batching_pars_vertex:IT,batching_vertex:zT,begin_vertex:BT,beginnormal_vertex:FT,bsdfs:HT,iridescence_fragment:GT,bumpmap_pars_fragment:VT,clipping_planes_fragment:XT,clipping_planes_pars_fragment:kT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:qT,color_fragment:YT,color_pars_fragment:ZT,color_pars_vertex:KT,color_vertex:QT,common:JT,cube_uv_reflection_fragment:jT,defaultnormal_vertex:$T,displacementmap_pars_vertex:tb,displacementmap_vertex:eb,emissivemap_fragment:nb,emissivemap_pars_fragment:ib,colorspace_fragment:ab,colorspace_pars_fragment:rb,envmap_fragment:sb,envmap_common_pars_fragment:ob,envmap_pars_fragment:lb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:xb,envmap_vertex:cb,fog_vertex:fb,fog_pars_vertex:db,fog_fragment:hb,fog_pars_fragment:pb,gradientmap_pars_fragment:mb,lightmap_pars_fragment:gb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:vb,lights_pars_begin:Sb,lights_toon_fragment:Mb,lights_toon_pars_fragment:yb,lights_phong_fragment:Eb,lights_phong_pars_fragment:Tb,lights_physical_fragment:bb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:wb,lightprobes_pars_fragment:Db,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Nb,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Ob,map_fragment:Pb,map_pars_fragment:Ib,map_particle_fragment:zb,map_particle_pars_fragment:Bb,metalnessmap_fragment:Fb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Gb,morphcolor_vertex:Vb,morphnormal_vertex:Xb,morphtarget_pars_vertex:kb,morphtarget_vertex:Wb,normal_fragment_begin:qb,normal_fragment_maps:Yb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:t1,iridescence_pars_fragment:e1,opaque_fragment:n1,packing:i1,premultiplied_alpha_fragment:a1,project_vertex:r1,dithering_fragment:s1,dithering_pars_fragment:o1,roughnessmap_fragment:l1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:h1,skinbase_vertex:p1,skinning_pars_vertex:m1,skinning_vertex:g1,skinnormal_vertex:_1,specularmap_fragment:v1,specularmap_pars_fragment:S1,tonemapping_fragment:x1,tonemapping_pars_fragment:M1,transmission_fragment:y1,transmission_pars_fragment:E1,uv_pars_fragment:T1,uv_pars_vertex:b1,uv_vertex:A1,worldpos_vertex:R1,background_vert:C1,background_frag:w1,backgroundCube_vert:D1,backgroundCube_frag:U1,cube_vert:N1,cube_frag:L1,depth_vert:O1,depth_frag:P1,distance_vert:I1,distance_frag:z1,equirect_vert:B1,equirect_frag:F1,linedashed_vert:H1,linedashed_frag:G1,meshbasic_vert:V1,meshbasic_frag:X1,meshlambert_vert:k1,meshlambert_frag:W1,meshmatcap_vert:q1,meshmatcap_frag:Y1,meshnormal_vert:Z1,meshnormal_frag:K1,meshphong_vert:Q1,meshphong_frag:J1,meshphysical_vert:j1,meshphysical_frag:$1,meshtoon_vert:tA,meshtoon_frag:eA,points_vert:nA,points_frag:iA,shadow_vert:aA,shadow_frag:rA,sprite_vert:sA,sprite_frag:oA},Ft={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new at},probesMax:{value:new at},probesResolution:{value:new at}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},ea={basic:{uniforms:kn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:kn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:kn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:kn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:kn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Le(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:kn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:kn([Ft.points,Ft.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:kn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:kn([Ft.common,Ft.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:kn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:kn([Ft.sprite,Ft.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:kn([Ft.common,Ft.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:kn([Ft.lights,Ft.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ea.physical={uniforms:kn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const dc={r:0,b:0,g:0},lA=new rn,$S=new ce;$S.set(-1,0,0,0,1,0,0,0,1);function uA(o,e,i,s,u,f){const d=new Le(0);let h=u===!0?0:1,g,m,S=null,v=0,_=null;function T(D){let B=D.isScene===!0?D.background:null;if(B&&B.isTexture){const C=D.backgroundBlurriness>0;B=e.get(B,C)}return B}function R(D){let B=!1;const C=T(D);C===null?y(d,h):C&&C.isColor&&(y(C,1),B=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,f):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function O(D,B){const C=T(B);C&&(C.isCubeTexture||C.mapping===Ac)?(m===void 0&&(m=new Bi(new Ml(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:ao(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(lA.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply($S),m.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,(S!==C||v!==C.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(g===void 0&&(g=new Bi(new yl(2,2),new la({name:"BackgroundMaterial",uniforms:ao(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=C,g.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,g.material.toneMapped=De.getTransfer(C.colorSpace)!==qe,C.matrixAutoUpdate===!0&&C.updateMatrix(),g.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||v!==C.version||_!==o.toneMapping)&&(g.material.needsUpdate=!0,S=C,v=C.version,_=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function y(D,B){D.getRGB(dc,KS(o)),i.buffers.color.setClear(dc.r,dc.g,dc.b,B,f)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,B=1){d.set(D),h=B,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,y(d,h)},render:R,addToRenderList:O,dispose:M}}function cA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=_(null);let f=u,d=!1;function h(G,K,ot,q,Q){let X=!1;const Y=v(G,q,ot,K);f!==Y&&(f=Y,m(f.object)),X=T(G,q,ot,Q),X&&R(G,q,ot,Q),Q!==null&&e.update(Q,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,C(G,K,ot,q),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function g(){return o.createVertexArray()}function m(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function v(G,K,ot,q){const Q=q.wireframe===!0;let X=s[K.id];X===void 0&&(X={},s[K.id]=X);const Y=G.isInstancedMesh===!0?G.id:0;let ut=X[Y];ut===void 0&&(ut={},X[Y]=ut);let nt=ut[ot.id];nt===void 0&&(nt={},ut[ot.id]=nt);let dt=nt[Q];return dt===void 0&&(dt=_(g()),nt[Q]=dt),dt}function _(G){const K=[],ot=[],q=[];for(let Q=0;Q<i;Q++)K[Q]=0,ot[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ot,attributeDivisors:q,object:G,attributes:{},index:null}}function T(G,K,ot,q){const Q=f.attributes,X=K.attributes;let Y=0;const ut=ot.getAttributes();for(const nt in ut)if(ut[nt].location>=0){const yt=Q[nt];let Qt=X[nt];if(Qt===void 0&&(nt==="instanceMatrix"&&G.instanceMatrix&&(Qt=G.instanceMatrix),nt==="instanceColor"&&G.instanceColor&&(Qt=G.instanceColor)),yt===void 0||yt.attribute!==Qt||Qt&&yt.data!==Qt.data)return!0;Y++}return f.attributesNum!==Y||f.index!==q}function R(G,K,ot,q){const Q={},X=K.attributes;let Y=0;const ut=ot.getAttributes();for(const nt in ut)if(ut[nt].location>=0){let yt=X[nt];yt===void 0&&(nt==="instanceMatrix"&&G.instanceMatrix&&(yt=G.instanceMatrix),nt==="instanceColor"&&G.instanceColor&&(yt=G.instanceColor));const Qt={};Qt.attribute=yt,yt&&yt.data&&(Qt.data=yt.data),Q[nt]=Qt,Y++}f.attributes=Q,f.attributesNum=Y,f.index=q}function O(){const G=f.newAttributes;for(let K=0,ot=G.length;K<ot;K++)G[K]=0}function y(G){M(G,0)}function M(G,K){const ot=f.newAttributes,q=f.enabledAttributes,Q=f.attributeDivisors;ot[G]=1,q[G]===0&&(o.enableVertexAttribArray(G),q[G]=1),Q[G]!==K&&(o.vertexAttribDivisor(G,K),Q[G]=K)}function D(){const G=f.newAttributes,K=f.enabledAttributes;for(let ot=0,q=K.length;ot<q;ot++)K[ot]!==G[ot]&&(o.disableVertexAttribArray(ot),K[ot]=0)}function B(G,K,ot,q,Q,X,Y){Y===!0?o.vertexAttribIPointer(G,K,ot,Q,X):o.vertexAttribPointer(G,K,ot,q,Q,X)}function C(G,K,ot,q){O();const Q=q.attributes,X=ot.getAttributes(),Y=K.defaultAttributeValues;for(const ut in X){const nt=X[ut];if(nt.location>=0){let dt=Q[ut];if(dt===void 0&&(ut==="instanceMatrix"&&G.instanceMatrix&&(dt=G.instanceMatrix),ut==="instanceColor"&&G.instanceColor&&(dt=G.instanceColor)),dt!==void 0){const yt=dt.normalized,Qt=dt.itemSize,Yt=e.get(dt);if(Yt===void 0)continue;const F=Yt.buffer,mt=Yt.type,At=Yt.bytesPerElement,J=mt===o.INT||mt===o.UNSIGNED_INT||dt.gpuType===Np;if(dt.isInterleavedBufferAttribute){const ht=dt.data,Tt=ht.stride,It=dt.offset;if(ht.isInstancedInterleavedBuffer){for(let _t=0;_t<nt.locationSize;_t++)M(nt.location+_t,ht.meshPerAttribute);G.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<nt.locationSize;_t++)y(nt.location+_t);o.bindBuffer(o.ARRAY_BUFFER,F);for(let _t=0;_t<nt.locationSize;_t++)B(nt.location+_t,Qt/nt.locationSize,mt,yt,Tt*At,(It+Qt/nt.locationSize*_t)*At,J)}else{if(dt.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)M(nt.location+ht,dt.meshPerAttribute);G.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ht=0;ht<nt.locationSize;ht++)y(nt.location+ht);o.bindBuffer(o.ARRAY_BUFFER,F);for(let ht=0;ht<nt.locationSize;ht++)B(nt.location+ht,Qt/nt.locationSize,mt,yt,Qt*At,Qt/nt.locationSize*ht*At,J)}}else if(Y!==void 0){const yt=Y[ut];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(nt.location,yt);break;case 3:o.vertexAttrib3fv(nt.location,yt);break;case 4:o.vertexAttrib4fv(nt.location,yt);break;default:o.vertexAttrib1fv(nt.location,yt)}}}}D()}function L(){w();for(const G in s){const K=s[G];for(const ot in K){const q=K[ot];for(const Q in q){const X=q[Q];for(const Y in X)S(X[Y].object),delete X[Y];delete q[Q]}}delete s[G]}}function N(G){if(s[G.id]===void 0)return;const K=s[G.id];for(const ot in K){const q=K[ot];for(const Q in q){const X=q[Q];for(const Y in X)S(X[Y].object),delete X[Y];delete q[Q]}}delete s[G.id]}function U(G){for(const K in s){const ot=s[K];for(const q in ot){const Q=ot[q];if(Q[G.id]===void 0)continue;const X=Q[G.id];for(const Y in X)S(X[Y].object),delete X[Y];delete Q[G.id]}}}function x(G){for(const K in s){const ot=s[K],q=G.isInstancedMesh===!0?G.id:0,Q=ot[q];if(Q!==void 0){for(const X in Q){const Y=Q[X];for(const ut in Y)S(Y[ut].object),delete Y[ut];delete Q[X]}delete ot[q],Object.keys(ot).length===0&&delete s[K]}}}function w(){z(),d=!0,f!==u&&(f=u,m(f.object))}function z(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:h,reset:w,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:x,releaseStatesOfProgram:U,initAttributes:O,enableAttribute:y,disableUnusedAttributes:D}}function fA(o,e,i){let s;function u(g){s=g}function f(g,m){o.drawArrays(s,g,m),i.update(m,s,1)}function d(g,m,S){S!==0&&(o.drawArraysInstanced(s,g,m,S),i.update(m,s,S))}function h(g,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,m,0,S);let _=0;for(let T=0;T<S;T++)_+=m[T];i.update(_,s,1)}this.setMode=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function dA(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function d(U){return!(U!==Ii&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const x=U===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==fi&&U!==ia&&!x&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=g(m);S!==m&&(se("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&se("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:T,maxVertexTextures:R,maxTextureSize:O,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:D,maxVaryings:B,maxFragmentUniforms:C,maxSamples:L,samples:N}}function hA(o){const e=this;let i=null,s=0,u=!1,f=!1;const d=new mr,h=new ce,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const T=v.length!==0||_||s!==0||u;return u=_,s=v.length,T},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,_){i=S(v,_,0)},this.setState=function(v,_,T){const R=v.clippingPlanes,O=v.clipIntersection,y=v.clipShadows,M=o.get(v);if(!u||R===null||R.length===0||f&&!y)f?S(null):m();else{const D=f?0:s,B=D*4;let C=M.clippingState||null;g.value=C,C=S(R,_,B,T);for(let L=0;L!==B;++L)C[L]=i[L];M.clippingState=C,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=D}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(v,_,T,R){const O=v!==null?v.length:0;let y=null;if(O!==0){if(y=g.value,R!==!0||y===null){const M=T+O*4,D=_.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<M)&&(y=new Float32Array(M));for(let B=0,C=T;B!==O;++B,C+=4)d.copy(v[B]).applyMatrix4(D,h),d.normal.toArray(y,C),y[C+3]=d.constant}g.value=y,g.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,y}}const $s=4,pA=6,mA=20,gA=256,ll=new qp,Yv=new Le;let Ph=null,Ih=0,zh=0,Bh=!1;const _A=new at,Wr=new at;class Zv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,u=100,f={}){const{size:d=256,position:h=_A}=f;Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,u,g,h),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Ih,zh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Kr||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:oa,format:Ii,colorSpace:yc,depthBuffer:!1},u=Kv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kv(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vA(f)),this._blurMaterial=xA(f,e,i),this._ggxMaterial=SA(f,e,i)}return u}_compileMaterial(e){const i=new Bi(new ua,e);this._renderer.compile(i,ll)}_sceneToCubeUV(e,i,s,u,f){const g=new Ti(90,1,i,s),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,T=v.toneMapping;v.getClearColor(Yv),v.toneMapping=ra,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(u),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new Ml,new Vp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,y=O.material;let M=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,M=!0):(y.color.copy(Yv),M=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(g.up.set(0,m[B],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+S[B],f.y,f.z)):C===1?(g.up.set(0,0,m[B]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+S[B],f.z)):(g.up.set(0,m[B],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+S[B]));const L=this._cubeSize;Js(u,C*L,B>2?L:0,L,L),v.setRenderTarget(u),M&&v.render(O,g),v.render(e,g)}v.toneMapping=T,v.autoClear=_,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===Kr||e.mapping===io;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const f=u?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=e;const g=this._cubeSize;Js(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,ll)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodMeshes.length;for(let f=1;f<u;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const u=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const g=d.uniforms,m=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-S*S),_=m*1.25,T=v*_,{_lodMax:R}=this,O=this._sizeLods[s],y=3*O*(s>R-$s?s-R+$s:0),M=4*(this._cubeSize-O);g.envMap.value=e.texture,g.roughness.value=T,g.mipInt.value=R-i,Js(f,y,M,3*O,2*O),u.setRenderTarget(f),u.render(h,ll),g.envMap.value=f.texture,g.roughness.value=0,g.mipInt.value=R-s,Js(e,y,M,3*O,2*O),u.setRenderTarget(e),u.render(h,ll)}_blur(e,i,s,u){const f=this._pingPongRenderTarget,d=Math.min(u,Math.PI)/Math.SQRT2;this._blurPass(e,f,i,s,d),this._blurPass(f,e,s,s,d)}_blurPass(e,i,s,u,f){const d=this._renderer,h=this._blurMaterial,g=this._lodMeshes[u];g.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const S=this._sizeLods[u],v=3*S*(u>this._lodMax-$s?u-this._lodMax+$s:0),_=4*(this._cubeSize-S);Js(i,v,_,3*S,2*S),d.setRenderTarget(i),d.render(g,ll)}}function vA(o){const e=[],i=[];let s=o;const u=o-$s+1+pA;for(let f=0;f<u;f++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),g=-h,m=1+h,S=[g,g,m,g,m,m,g,g,m,m,g,m],v=6,_=6,T=3,R=new Float32Array(T*_*v),O=new Float32Array(T*_*v);for(let M=0;M<v;M++){const D=M%3*2/3-1,B=M>2?0:-1,C=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];R.set(C,T*_*M);for(let L=0;L<_;L++){const N=S[L*2]*2-1,U=S[L*2+1]*2-1;M===0?Wr.set(1,U,N):M===1?Wr.set(-N,1,-U):M===2?Wr.set(-N,U,1):M===3?Wr.set(-1,U,-N):M===4?Wr.set(-N,-1,U):Wr.set(N,U,-1),Wr.toArray(O,(M*_+L)*T)}}const y=new ua;y.setAttribute("position",new La(R,T)),y.setAttribute("outputDirection",new La(O,T)),i.push(new Bi(y,null)),s>$s&&s--}return{lodMeshes:i,sizeLods:e}}function Kv(o,e,i){const s=new zi(o,e,i);return s.texture.mapping=Ac,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Js(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function SA(o,e,i){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function xA(o,e,i){return new la({name:"SphericalGaussianBlur",defines:{SAMPLES:mA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Qv(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Jv(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class tx extends zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new YS(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Ml(5,5,5),f=new la({name:"CubemapFromEquirect",uniforms:ao(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ua});f.uniforms.tEquirect.value=i;const d=new Bi(u,f),h=i.minFilter;return i.minFilter===qr&&(i.minFilter=zn),new TT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,u);e.setRenderTarget(f)}}function MA(o){let e=new WeakMap,i=new WeakMap,s=null;function u(_,T=!1){return _==null?null:T?d(_):f(_)}function f(_){if(_&&_.isTexture){const T=_.mapping;if(T===lh||T===uh)if(e.has(_)){const R=e.get(_).texture;return h(R,_.mapping)}else{const R=_.image;if(R&&R.height>0){const O=new tx(R.height);return O.fromEquirectangularTexture(o,_),e.set(_,O),_.addEventListener("dispose",m),h(O.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const T=_.mapping,R=T===lh||T===uh,O=T===Kr||T===io;if(R||O){let y=i.get(_);const M=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return s===null&&(s=new Zv(o)),y=R?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const D=_.image;return R&&D&&D.height>0||O&&D&&g(D)?(s===null&&(s=new Zv(o)),y=R?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",S),y.texture):null}}}return _}function h(_,T){return T===lh?_.mapping=Kr:T===uh&&(_.mapping=io),_}function g(_){let T=0;const R=6;for(let O=0;O<R;O++)_[O]!==void 0&&T++;return T===R}function m(_){const T=_.target;T.removeEventListener("dispose",m);const R=e.get(T);R!==void 0&&(e.delete(T),R.dispose())}function S(_){const T=_.target;T.removeEventListener("dispose",S);const R=i.get(T);R!==void 0&&(i.delete(T),R.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:u,dispose:v}}function yA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const u=o.getExtension(s);return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&to("WebGLRenderer: "+s+" extension not supported."),u}}}function EA(o,e,i,s){const u={},f=new WeakMap;function d(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);_.removeEventListener("dispose",d),delete u[_.id];const T=f.get(_);T&&(e.remove(T),f.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return u[_.id]===!0||(_.addEventListener("dispose",d),u[_.id]=!0,i.memory.geometries++),_}function g(v){const _=v.attributes;for(const T in _)e.update(_[T],o.ARRAY_BUFFER)}function m(v){const _=[],T=v.index,R=v.attributes.position;let O=0;if(R===void 0)return;if(T!==null){const D=T.array;O=T.version;for(let B=0,C=D.length;B<C;B+=3){const L=D[B+0],N=D[B+1],U=D[B+2];_.push(L,N,N,U,U,L)}}else{const D=R.array;O=R.version;for(let B=0,C=D.length/3-1;B<C;B+=3){const L=B+0,N=B+1,U=B+2;_.push(L,N,N,U,U,L)}}const y=new(R.count>=65535?qS:WS)(_,1);y.version=O;const M=f.get(v);M&&e.remove(M),f.set(v,y)}function S(v){const _=f.get(v);if(_){const T=v.index;T!==null&&_.version<T.version&&m(v)}else m(v);return f.get(v)}return{get:h,update:g,getWireframeAttribute:S}}function TA(o,e,i){let s;function u(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function g(v,_){o.drawElements(s,_,f,v*d),i.update(_,s,1)}function m(v,_,T){T!==0&&(o.drawElementsInstanced(s,_,f,v*d,T),i.update(_,s,T))}function S(v,_,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,f,v,0,T);let O=0;for(let y=0;y<T;y++)O+=_[y];i.update(O,s,1)}this.setMode=u,this.setIndex=h,this.render=g,this.renderInstances=m,this.renderMultiDraw=S}function bA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Ie("WebGLInfo: Unknown draw mode:",d);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function AA(o,e,i){const s=new WeakMap,u=new an;function f(d,h,g){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let _=s.get(h);if(_===void 0||_.count!==v){let z=function(){x.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var T=z;_!==void 0&&_.texture.dispose();const R=h.morphAttributes.position!==void 0,O=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let C=0;R===!0&&(C=1),O===!0&&(C=2),y===!0&&(C=3);let L=h.attributes.position.count*C,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*N*4*v),x=new VS(U,L,N,v);x.type=ia,x.needsUpdate=!0;const w=C*4;for(let G=0;G<v;G++){const K=M[G],ot=D[G],q=B[G],Q=L*N*4*G;for(let X=0;X<K.count;X++){const Y=X*w;R===!0&&(u.fromBufferAttribute(K,X),U[Q+Y+0]=u.x,U[Q+Y+1]=u.y,U[Q+Y+2]=u.z,U[Q+Y+3]=0),O===!0&&(u.fromBufferAttribute(ot,X),U[Q+Y+4]=u.x,U[Q+Y+5]=u.y,U[Q+Y+6]=u.z,U[Q+Y+7]=0),y===!0&&(u.fromBufferAttribute(q,X),U[Q+Y+8]=u.x,U[Q+Y+9]=u.y,U[Q+Y+10]=u.z,U[Q+Y+11]=q.itemSize===4?u.w:1)}}_={count:v,texture:x,size:new Te(L,N)},s.set(h,_),h.addEventListener("dispose",z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<m.length;y++)R+=m[y];const O=h.morphTargetsRelative?1:1-R;g.getUniforms().setValue(o,"morphTargetBaseInfluence",O),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:f}}function RA(o,e,i,s,u){let f=new WeakMap;function d(m){const S=u.render.frame,v=m.geometry,_=e.get(m,v);if(f.get(_)!==S&&(e.update(_),f.set(_,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),f.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,S))),m.isSkinnedMesh){const T=m.skeleton;f.get(T)!==S&&(T.update(),f.set(T,S))}return _}function h(){f=new WeakMap}function g(m){const S=m.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const CA={[AS]:"LINEAR_TONE_MAPPING",[RS]:"REINHARD_TONE_MAPPING",[CS]:"CINEON_TONE_MAPPING",[wS]:"ACES_FILMIC_TONE_MAPPING",[US]:"AGX_TONE_MAPPING",[NS]:"NEUTRAL_TONE_MAPPING",[DS]:"CUSTOM_TONE_MAPPING"};function wA(o,e,i,s,u,f){const d=new zi(e,i,{type:o,depthBuffer:u,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,g=null;const m=new ua;m.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new bi([0,2,0,0,2,0],2));const S=new gT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Bi(m,S),_=new qp(-1,1,1,-1,0,1);let T=null,R=null,O=!1,y,M=null,D=[],B=!1;this.setSize=function(C,L){d.setSize(C,L),h!==null&&h.setSize(C,L),g!==null&&g.setSize(C,L);for(let N=0;N<D.length;N++){const U=D[N];U.setSize&&U.setSize(C,L)}},this.setEffects=function(C){D=C,B=D.length>0&&D[0].isRenderPass===!0;const L=d.width,N=d.height;D.length>0&&h===null&&(h=new zi(L,N,{type:oa,depthBuffer:!1,stencilBuffer:!1}),g=new zi(L,N,{type:oa,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<D.length;U++){const x=D[U];x.setSize&&x.setSize(L,N)}},this.begin=function(C,L){if(O||C.toneMapping===ra&&D.length===0)return!1;if(M=L,L!==null){const N=L.width,U=L.height;(d.width!==N||d.height!==U)&&this.setSize(N,U)}return B===!1&&C.setRenderTarget(d),y=C.toneMapping,C.toneMapping=ra,!0},this.hasRenderPass=function(){return B},this.end=function(C,L){C.toneMapping=y,O=!0;let N=d,U=h;for(let x=0;x<D.length;x++){const w=D[x];w.enabled!==!1&&(w.render(C,U,N,L),w.needsSwap!==!1&&(N=U,U=U===h?g:h))}if(T!==C.outputColorSpace||R!==C.toneMapping){T=C.outputColorSpace,R=C.toneMapping,S.defines={},De.getTransfer(T)===qe&&(S.defines.SRGB_TRANSFER="");const x=CA[R];x&&(S.defines[x]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(M),C.render(v,_),M=null,O=!1},this.isCompositing=function(){return O},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),g!==null&&g.dispose(),m.dispose(),S.dispose()}}const ex=new Bn,Cp=new _l(1,1),nx=new VS,ix=new WE,ax=new YS,jv=[],$v=[],tS=new Float32Array(16),eS=new Float32Array(9),nS=new Float32Array(4);function ro(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=jv[u];if(f===void 0&&(f=new Float32Array(u),jv[u]=f),e!==0){s.toArray(f,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(f,h)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Cc(o,e){let i=$v[e];i===void 0&&(i=new Int32Array(e),$v[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function DA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function UA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function NA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function LA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function OA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(Sn(i,s))return;nS.set(s),o.uniformMatrix2fv(this.addr,!1,nS),xn(i,s)}}function PA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(Sn(i,s))return;eS.set(s),o.uniformMatrix3fv(this.addr,!1,eS),xn(i,s)}}function IA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(Sn(i,s))return;tS.set(s),o.uniformMatrix4fv(this.addr,!1,tS),xn(i,s)}}function zA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function BA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function GA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function VA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function XA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function kA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function WA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Cp.compareFunction=i.isReversedDepthBuffer()?Fp:Bp,f=Cp):f=ex,i.setTexture2D(e||f,u)}function qA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||ix,u)}function YA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||ax,u)}function ZA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||nx,u)}function KA(o){switch(o){case 5126:return DA;case 35664:return UA;case 35665:return NA;case 35666:return LA;case 35674:return OA;case 35675:return PA;case 35676:return IA;case 5124:case 35670:return zA;case 35667:case 35671:return BA;case 35668:case 35672:return FA;case 35669:case 35673:return HA;case 5125:return GA;case 36294:return VA;case 36295:return XA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return qA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return ZA}}function QA(o,e){o.uniform1fv(this.addr,e)}function JA(o,e){const i=ro(e,this.size,2);o.uniform2fv(this.addr,i)}function jA(o,e){const i=ro(e,this.size,3);o.uniform3fv(this.addr,i)}function $A(o,e){const i=ro(e,this.size,4);o.uniform4fv(this.addr,i)}function tR(o,e){const i=ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function eR(o,e){const i=ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function nR(o,e){const i=ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function iR(o,e){o.uniform1iv(this.addr,e)}function aR(o,e){o.uniform2iv(this.addr,e)}function rR(o,e){o.uniform3iv(this.addr,e)}function sR(o,e){o.uniform4iv(this.addr,e)}function oR(o,e){o.uniform1uiv(this.addr,e)}function lR(o,e){o.uniform2uiv(this.addr,e)}function uR(o,e){o.uniform3uiv(this.addr,e)}function cR(o,e){o.uniform4uiv(this.addr,e)}function fR(o,e,i){const s=this.cache,u=e.length,f=Cc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=Cp:d=ex;for(let h=0;h!==u;++h)i.setTexture2D(e[h]||d,f[h])}function dR(o,e,i){const s=this.cache,u=e.length,f=Cc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==u;++d)i.setTexture3D(e[d]||ix,f[d])}function hR(o,e,i){const s=this.cache,u=e.length,f=Cc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==u;++d)i.setTextureCube(e[d]||ax,f[d])}function pR(o,e,i){const s=this.cache,u=e.length,f=Cc(i,u);Sn(s,f)||(o.uniform1iv(this.addr,f),xn(s,f));for(let d=0;d!==u;++d)i.setTexture2DArray(e[d]||nx,f[d])}function mR(o){switch(o){case 5126:return QA;case 35664:return JA;case 35665:return jA;case 35666:return $A;case 35674:return tR;case 35675:return eR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return lR;case 36295:return uR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return pR}}class gR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=KA(i.type)}}class _R{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mR(i.type)}}class vR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,d=u.length;f!==d;++f){const h=u[f];h.setValue(e,i[h.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function iS(o,e){o.seq.push(e),o.map[e.id]=e}function SR(o,e,i){const s=o.name,u=s.length;for(Fh.lastIndex=0;;){const f=Fh.exec(s),d=Fh.lastIndex;let h=f[1];const g=f[2]==="]",m=f[3];if(g&&(h=h|0),m===void 0||m==="["&&d+2===u){iS(i,m===void 0?new gR(h,o,e):new _R(h,o,e));break}else{let v=i.map[h];v===void 0&&(v=new vR(h),iS(i,v)),i=v}}}class Sc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(i,d),g=e.getUniformLocation(i,h.name);SR(h,g,this)}const u=[],f=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?u.push(d):f.push(d);u.length>0&&(this.seq=u.concat(f))}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,d=i.length;f!==d;++f){const h=i[f],g=s[h.id];g.needsUpdate!==!1&&h.setValue(e,g.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const d=e[u];d.id in i&&s.push(d)}return s}}function aS(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const xR=37297;let MR=0;function yR(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let d=u;d<f;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const rS=new ce;function ER(o){De._getMatrix(rS,De.workingColorSpace,o);const e=`mat3( ${rS.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function sS(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+yR(o.getShaderSource(e),h)}else return f}function TR(o,e){const i=ER(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const bR={[AS]:"Linear",[RS]:"Reinhard",[CS]:"Cineon",[wS]:"ACESFilmic",[US]:"AgX",[NS]:"Neutral",[DS]:"Custom"};function AR(o,e){const i=bR[e];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hc=new at;function RR(){De.getLuminanceCoefficients(hc);const o=hc.x.toFixed(4),e=hc.y.toFixed(4),i=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function wR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function DR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function fl(o){return o!==""}function oS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(o){return o.replace(UR,LR)}const NR=new Map;function LR(o,e){let i=pe[e];if(i===void 0){const s=NR.get(e);if(s!==void 0)i=pe[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wp(i)}const OR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uS(o){return o.replace(OR,PR)}function PR(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function cS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const IR={[pc]:"SHADOWMAP_TYPE_PCF",[cl]:"SHADOWMAP_TYPE_VSM"};function zR(o){return IR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BR={[Kr]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function FR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":BR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const HR={[io]:"ENVMAP_MODE_REFRACTION"};function GR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":HR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VR={[bS]:"ENVMAP_BLENDING_MULTIPLY",[yE]:"ENVMAP_BLENDING_MIX",[EE]:"ENVMAP_BLENDING_ADD"};function XR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":VR[o.combine]||"ENVMAP_BLENDING_NONE"}function kR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function WR(o,e,i,s){const u=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const g=zR(i),m=FR(i),S=GR(i),v=XR(i),_=kR(i),T=CR(i),R=wR(f),O=u.createProgram();let y,M,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(fl).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(fl).join(`
`),M.length>0&&(M+=`
`)):(y=[cS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),M=[cS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ra?"#define TONE_MAPPING":"",i.toneMapping!==ra?pe.tonemapping_pars_fragment:"",i.toneMapping!==ra?AR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,TR("linearToOutputTexel",i.outputColorSpace),RR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fl).join(`
`)),d=wp(d),d=oS(d,i),d=lS(d,i),h=wp(h),h=oS(h,i),h=lS(h,i),d=uS(d),h=uS(h),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===Ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const B=D+y+d,C=D+M+h,L=aS(u,u.VERTEX_SHADER,B),N=aS(u,u.FRAGMENT_SHADER,C);u.attachShader(O,L),u.attachShader(O,N),i.index0AttributeName!==void 0?u.bindAttribLocation(O,0,i.index0AttributeName):i.hasPositionAttribute===!0&&u.bindAttribLocation(O,0,"position"),u.linkProgram(O);function U(G){if(o.debug.checkShaderErrors){const K=u.getProgramInfoLog(O)||"",ot=u.getShaderInfoLog(L)||"",q=u.getShaderInfoLog(N)||"",Q=K.trim(),X=ot.trim(),Y=q.trim();let ut=!0,nt=!0;if(u.getProgramParameter(O,u.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,O,L,N);else{const dt=sS(u,L,"vertex"),yt=sS(u,N,"fragment");Ie("WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(O,u.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+dt+`
`+yt)}else Q!==""?se("WebGLProgram: Program Info Log:",Q):(X===""||Y==="")&&(nt=!1);nt&&(G.diagnostics={runnable:ut,programLog:Q,vertexShader:{log:X,prefix:y},fragmentShader:{log:Y,prefix:M}})}u.deleteShader(L),u.deleteShader(N),x=new Sc(u,O),w=DR(u,O)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=u.getProgramParameter(O,xR)),z},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=MR++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=L,this.fragmentShader=N,this}let qR=0;class YR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const u=this._getShaderCacheForMaterial(e);return u.has(i)===!1&&(u.add(i),i.usedTimes++),u.has(s)===!1&&(u.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new ZR(e),i.set(e,s)),s}}class ZR{constructor(e){this.id=qR++,this.code=e,this.usedTimes=0}}function KR(o){return o===Qr||o===xc||o===Mc}function QR(o,e,i,s,u,f){const d=new XS,h=new YR,g=new Set,m=[],S=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(x){return g.add(x),x===0?"uv":`uv${x}`}function O(x,w,z,G,K,ot){const q=G.fog,Q=K.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?G.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ut=e.get(x.envMap||X,Y),nt=ut&&ut.mapping===Ac?ut.image.height:null,dt=T[x.type];x.precision!==null&&(_=s.getMaxPrecision(x.precision),_!==x.precision&&se("WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Qt=yt!==void 0?yt.length:0;let Yt=0;Q.morphAttributes.position!==void 0&&(Yt=1),Q.morphAttributes.normal!==void 0&&(Yt=2),Q.morphAttributes.color!==void 0&&(Yt=3);let F,mt,At,J;if(dt){const Ce=ea[dt];F=Ce.vertexShader,mt=Ce.fragmentShader}else{F=x.vertexShader,mt=x.fragmentShader;const Ce=h.getVertexShaderStage(x),le=h.getFragmentShaderStage(x);h.update(x,Ce,le),At=Ce.id,J=le.id}const ht=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),It=K.isInstancedMesh===!0,_t=K.isBatchedMesh===!0,Rt=!!x.map,Ge=!!x.matcap,he=!!ut,ge=!!x.aoMap,xe=!!x.lightMap,te=!!x.bumpMap&&x.wireframe===!1,ne=!!x.normalMap,Ve=!!x.displacementMap,fn=!!x.emissiveMap,Pe=!!x.metalnessMap,$e=!!x.roughnessMap,W=x.anisotropy>0,en=x.clearcoat>0,Oe=x.dispersion>0,P=x.retroreflectivity>0,E=x.iridescence>0,tt=x.sheen>0,lt=x.transmission>0,pt=W&&!!x.anisotropyMap,bt=en&&!!x.clearcoatMap,Dt=en&&!!x.clearcoatNormalMap,gt=en&&!!x.clearcoatRoughnessMap,Mt=E&&!!x.iridescenceMap,wt=E&&!!x.iridescenceThicknessMap,jt=tt&&!!x.sheenColorMap,Pt=tt&&!!x.sheenRoughnessMap,Ot=!!x.specularMap,Vt=!!x.specularColorMap,ee=!!x.specularIntensityMap,oe=lt&&!!x.transmissionMap,k=lt&&!!x.thicknessMap,Ct=!!x.gradientMap,xt=!!x.alphaMap,Ut=x.alphaTest>0,Gt=!!x.alphaHash,Et=!!x.extensions;let Jt=ra;x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Ht={shaderID:dt,shaderType:x.type,shaderName:x.name,vertexShader:F,fragmentShader:mt,defines:x.defines,customVertexShaderID:At,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:_t,batchingColor:_t&&K._colorsTexture!==null,instancing:It,instancingColor:It&&K.instanceColor!==null,instancingMorph:It&&K.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:Ge,envMap:he,envMapMode:he&&ut.mapping,envMapCubeUVHeight:nt,aoMap:ge,lightMap:xe,bumpMap:te,normalMap:ne,displacementMap:Ve,emissiveMap:fn,normalMapObjectSpace:ne&&x.normalMapType===AE,normalMapTangentSpace:ne&&x.normalMapType===Ap,packedNormalMap:ne&&x.normalMapType===Ap&&KR(x.normalMap.format),metalnessMap:Pe,roughnessMap:$e,anisotropy:W,anisotropyMap:pt,clearcoat:en,clearcoatMap:bt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:gt,dispersion:Oe,retroreflection:P,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:wt,sheen:tt,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Vt,specularIntensityMap:ee,transmission:lt,transmissionMap:oe,thicknessMap:k,gradientMap:Ct,opaque:x.transparent===!1&&x.blending===dl&&x.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ut,alphaHash:Gt,combine:x.combine,mapUv:Rt&&R(x.map.channel),aoMapUv:ge&&R(x.aoMap.channel),lightMapUv:xe&&R(x.lightMap.channel),bumpMapUv:te&&R(x.bumpMap.channel),normalMapUv:ne&&R(x.normalMap.channel),displacementMapUv:Ve&&R(x.displacementMap.channel),emissiveMapUv:fn&&R(x.emissiveMap.channel),metalnessMapUv:Pe&&R(x.metalnessMap.channel),roughnessMapUv:$e&&R(x.roughnessMap.channel),anisotropyMapUv:pt&&R(x.anisotropyMap.channel),clearcoatMapUv:bt&&R(x.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&R(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&R(x.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&R(x.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&R(x.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&R(x.sheenRoughnessMap.channel),specularMapUv:Ot&&R(x.specularMap.channel),specularColorMapUv:Vt&&R(x.specularColorMap.channel),specularIntensityMapUv:ee&&R(x.specularIntensityMap.channel),transmissionMapUv:oe&&R(x.transmissionMap.channel),thicknessMapUv:k&&R(x.thicknessMap.channel),alphaMapUv:xt&&R(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ne||W),vertexNormals:!!Q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Q.attributes.uv&&(Rt||xt),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Q.attributes.normal===void 0&&ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:Yt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&De.getTransfer(x.map.colorSpace)===qe,decodeVideoTextureEmissive:fn&&x.emissiveMap.isVideoTexture===!0&&De.getTransfer(x.emissiveMap.colorSpace)===qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===na,flipSided:x.side===Jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Et&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&x.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=g.has(1),Ht.vertexUv2s=g.has(2),Ht.vertexUv3s=g.has(3),g.clear(),Ht}function y(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)w.push(z),w.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(M(w,x),D(w,x),w.push(o.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function M(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function D(x,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.retroreflection&&d.enable(24),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),w.packedNormalMap&&d.enable(22),w.vertexNormals&&d.enable(23),x.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),w.numLightProbeGrids>0&&d.enable(22),w.hasPositionAttribute&&d.enable(23),x.push(d.mask)}function B(x){const w=T[x.type];let z;if(w){const G=ea[w];z=hT.clone(G.uniforms)}else z=x.uniforms;return z}function C(x,w){let z=S.get(w);return z!==void 0?++z.usedTimes:(z=new WR(o,w,x,u),m.push(z),S.set(w,z)),z}function L(x){if(--x.usedTimes===0){const w=m.indexOf(x);m[w]=m[m.length-1],m.pop(),S.delete(x.cacheKey),x.destroy()}}function N(x){h.remove(x)}function U(){h.dispose()}return{getParameters:O,getProgramCacheKey:y,getUniforms:B,acquireProgram:C,releaseProgram:L,releaseShaderCache:N,programs:m,dispose:U}}function JR(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function u(d,h,g){o.get(d)[h]=g}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function jR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function fS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function dS(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function d(_){let T=0;return _.isInstancedMesh&&(T+=2),_.isSkinnedMesh&&(T+=1),T}function h(_,T,R,O,y,M){let D=o[e];return D===void 0?(D={id:_.id,object:_,geometry:T,material:R,materialVariant:d(_),groupOrder:O,renderOrder:_.renderOrder,z:y,group:M},o[e]=D):(D.id=_.id,D.object=_,D.geometry=T,D.material=R,D.materialVariant=d(_),D.groupOrder=O,D.renderOrder=_.renderOrder,D.z=y,D.group=M),e++,D}function g(_,T,R,O,y,M,D){D.reversedDepth===!0&&(y=-y);const B=h(_,T,R,O,y,M);R.transmission>0?s.push(B):R.transparent===!0?u.push(B):i.push(B)}function m(_,T,R,O,y,M){const D=h(_,T,R,O,y,M);R.transmission>0?s.unshift(D):R.transparent===!0?u.unshift(D):i.unshift(D)}function S(_,T){i.length>1&&i.sort(_||jR),s.length>1&&s.sort(T||fS),u.length>1&&u.sort(T||fS)}function v(){for(let _=e,T=o.length;_<T;_++){const R=o[_];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:g,unshift:m,finish:v,sort:S}}function $R(){let o=new WeakMap;function e(s,u){const f=o.get(s);let d;return f===void 0?(d=new dS,o.set(s,[d])):u>=f.length?(d=new dS,f.push(d)):d=f[u],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function tC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new at,color:new Le};break;case"SpotLight":i={position:new at,direction:new at,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function eC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let nC=0;function iC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function aC(o){const e=new tC,i=eC(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new at);const u=new at,f=new rn,d=new rn;function h(m){let S=0,v=0,_=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let T=0,R=0,O=0,y=0,M=0,D=0,B=0,C=0,L=0,N=0,U=0,x=0,w=0,z=0;m.sort(iC);for(let K=0,ot=m.length;K<ot;K++){const q=m[K],Q=q.color,X=q.intensity,Y=q.distance;let ut=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===Qr?ut=q.shadow.map.texture:ut=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)S+=Q.r*X,v+=Q.g*X,_+=Q.b*X;else if(q.isLightProbe){for(let nt=0;nt<9;nt++)s.probe[nt].addScaledVector(q.sh.coefficients[nt],X);z++}else if(q.isSunLight){const nt=e.get(q);if(nt.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const dt=q.shadow,yt=i.get(q);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize.copy(dt.mapSize).multiply(dt.getFrameExtents()),s.sunShadow[R]=yt,s.sunShadowMap[R]=ut;const Qt=dt.getViewportCount();for(let Yt=0;Yt<Qt;Yt++)s.sunShadowMatrix[O+Yt]=dt.getMatrix(Yt),s.sunShadowCascade[O+Yt]=dt._cascadeData[Yt];O+=Qt,R++}s.sun[T]=nt,T++}else if(q.isDirectionalLight){const nt=e.get(q);if(nt.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const dt=q.shadow,yt=i.get(q);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize=dt.mapSize,s.directionalShadow[y]=yt,s.directionalShadowMap[y]=ut,s.directionalShadowMatrix[y]=q.shadow.matrix,L++}s.directional[y]=nt,y++}else if(q.isSpotLight){const nt=e.get(q);nt.position.setFromMatrixPosition(q.matrixWorld),nt.color.copy(Q).multiplyScalar(X),nt.distance=Y,nt.coneCos=Math.cos(q.angle),nt.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),nt.decay=q.decay,s.spot[D]=nt;const dt=q.shadow;if(q.map&&(s.spotLightMap[x]=q.map,x++,dt.updateMatrices(q),q.castShadow&&w++),s.spotLightMatrix[D]=dt.matrix,q.castShadow){const yt=i.get(q);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize=dt.mapSize,s.spotShadow[D]=yt,s.spotShadowMap[D]=ut,U++}D++}else if(q.isRectAreaLight){const nt=e.get(q);nt.color.copy(Q).multiplyScalar(X),nt.halfWidth.set(q.width*.5,0,0),nt.halfHeight.set(0,q.height*.5,0),s.rectArea[B]=nt,B++}else if(q.isPointLight){const nt=e.get(q);if(nt.color.copy(q.color).multiplyScalar(q.intensity),nt.distance=q.distance,nt.decay=q.decay,q.castShadow){const dt=q.shadow,yt=i.get(q);yt.shadowIntensity=dt.intensity,yt.shadowBias=dt.bias,yt.shadowNormalBias=dt.normalBias,yt.shadowRadius=dt.radius,yt.shadowMapSize=dt.mapSize,yt.shadowCameraNear=dt.camera.near,yt.shadowCameraFar=dt.camera.far,s.pointShadow[M]=yt,s.pointShadowMap[M]=ut,s.pointShadowMatrix[M]=q.shadow.matrix,N++}s.point[M]=nt,M++}else if(q.isHemisphereLight){const nt=e.get(q);nt.skyColor.copy(q.color).multiplyScalar(X),nt.groundColor.copy(q.groundColor).multiplyScalar(X),s.hemi[C]=nt,C++}}B>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=_;const G=s.hash;(G.sunLength!==T||G.directionalLength!==y||G.pointLength!==M||G.spotLength!==D||G.rectAreaLength!==B||G.hemiLength!==C||G.numSunShadows!==R||G.numDirectionalShadows!==L||G.numPointShadows!==N||G.numSpotShadows!==U||G.numSpotMaps!==x||G.numLightProbes!==z)&&(s.sun.length=T,s.directional.length=y,s.spot.length=D,s.rectArea.length=B,s.point.length=M,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=O,s.sunShadowCascade.length=O,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.directionalShadowMatrix.length=L,s.pointShadow.length=N,s.pointShadowMap.length=N,s.pointShadowMatrix.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.spotLightMatrix.length=U+x-w,s.spotLightMap.length=x,s.numSpotLightShadowsWithMaps=w,s.numLightProbes=z,G.sunLength=T,G.directionalLength=y,G.pointLength=M,G.spotLength=D,G.rectAreaLength=B,G.hemiLength=C,G.numSunShadows=R,G.numDirectionalShadows=L,G.numPointShadows=N,G.numSpotShadows=U,G.numSpotMaps=x,G.numLightProbes=z,s.version=nC++)}function g(m,S){let v=0,_=0,T=0,R=0,O=0,y=0;const M=S.matrixWorldInverse;for(let D=0,B=m.length;D<B;D++){const C=m[D];if(C.isSunLight){const L=s.sun[v];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(M),v++}else if(C.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(u),L.direction.transformDirection(M),_++}else if(C.isSpotLight){const L=s.spot[R];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(C.matrixWorld),u.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(u),L.direction.transformDirection(M),R++}else if(C.isRectAreaLight){const L=s.rectArea[O];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(M),d.identity(),f.copy(C.matrixWorld),f.premultiply(M),d.extractRotation(f),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),O++}else if(C.isPointLight){const L=s.point[T];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(M),T++}else if(C.isHemisphereLight){const L=s.hemi[y];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(M),y++}}}return{setup:h,setupView:g,state:s}}function hS(o){const e=new aC(o),i=[],s=[],u=[];function f(_){v.camera=_,i.length=0,s.length=0,u.length=0}function d(_){i.push(_)}function h(_){s.push(_)}function g(_){u.push(_)}function m(){e.setup(i)}function S(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:u,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:g}}function rC(o){let e=new WeakMap;function i(u,f=0){const d=e.get(u);let h;return d===void 0?(h=new hS(o),e.set(u,[h])):f>=d.length?(h=new hS(o),d.push(h)):h=d[f],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const sC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oC=`uniform sampler2D shadow_pass;
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
}`,lC=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],uC=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],pS=new rn,ul=new at,Hh=new at;function cC(o,e,i){let s=new Xp;const u=new Te,f=new Te,d=new an,h=new vT,g=new ST,m={},S=i.maxTextureSize,v={[Zr]:Jn,[Jn]:Zr,[na]:na},_=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:sC,fragmentShader:oC}),T=_.clone();T.defines.HORIZONTAL_PASS=1;const R=new ua;R.setAttribute("position",new La(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new Bi(R,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let M=this.type;this.render=function(N,U,x){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===iE&&(se("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pc);const w=o.getRenderTarget(),z=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Ua),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ot=M!==this.type;ot&&U.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Q=>Q.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Q=N.length;q<Q;q++){const X=N[q],Y=X.shadow;if(Y===void 0){se("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;u.copy(Y.mapSize);const ut=Y.getFrameExtents();u.multiply(ut),f.copy(Y.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/ut.x),u.x=f.x*ut.x,Y.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/ut.y),u.y=f.y*ut.y,Y.mapSize.y=f.y));const nt=o.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=nt,Y.map===null||ot===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===cl){if(X.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new zi(u.x,u.y,{format:Qr,type:oa,minFilter:zn,magFilter:zn,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new _l(u.x,u.y,ia),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=Oa,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nn,Y.map.depthTexture.magFilter=Nn}else X.isPointLight?(Y.map=new tx(u.x),Y.map.depthTexture=new fT(u.x,sa)):(Y.map=new zi(u.x,u.y),Y.map.depthTexture=new _l(u.x,u.y,sa)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=Oa,this.type===pc?(Y.map.depthTexture.compareFunction=nt?Fp:Bp,Y.map.depthTexture.minFilter=zn,Y.map.depthTexture.magFilter=zn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nn,Y.map.depthTexture.magFilter=Nn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==u.x||Y.map.height!==u.y)&&Y.map.setSize(u.x,u.y);const dt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,x);for(let yt=0;yt<dt;yt++){const Qt=Y.getCamera(yt);if(X.isPointLight){const Yt=Y.camera,F=Y.matrix,mt=X.distance||Yt.far;mt!==Yt.far&&(Yt.far=mt,Yt.updateProjectionMatrix()),ul.setFromMatrixPosition(X.matrixWorld),Yt.position.copy(ul),Hh.copy(Yt.position),Hh.add(lC[yt]),Yt.up.copy(uC[yt]),Yt.lookAt(Hh),Yt.updateMatrixWorld(),F.makeTranslation(-ul.x,-ul.y,-ul.z),pS.multiplyMatrices(Yt.projectionMatrix,Yt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(pS,Yt.coordinateSystem,Yt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)o.setRenderTarget(Y.map,yt),o.clear();else{yt===0&&(o.setRenderTarget(Y.map),o.clear());const Yt=Y.getViewport(yt);d.set(f.x*Yt.x,f.y*Yt.y,f.x*Yt.z,f.y*Yt.w),K.viewport(d)}s=Y.getFrustum(yt),C(U,x,Qt,X,this.type)}Y.isPointLightShadow!==!0&&this.type===cl&&D(Y,x),Y.needsUpdate=!1}M=this.type,y.needsUpdate=!1,o.setRenderTarget(w,z,G)};function D(N,U){const x=e.update(O);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,T.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,T.needsUpdate=!0),N.mapPass===null?N.mapPass=new zi(u.x,u.y,{format:Qr,type:oa}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),_.uniforms.shadow_pass.value=N.map.depthTexture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(U,null,x,_,O,null),T.uniforms.shadow_pass.value=N.mapPass.texture,T.uniforms.resolution.value.set(N.map.width,N.map.height),T.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(U,null,x,T,O,null)}function B(N,U,x,w){let z=null;const G=x.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)z=G;else if(z=x.isPointLight===!0?g:h,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const K=z.uuid,ot=U.uuid;let q=m[K];q===void 0&&(q={},m[K]=q);let Q=q[ot];Q===void 0&&(Q=z.clone(),q[ot]=Q,U.addEventListener("dispose",L)),z=Q}if(z.visible=U.visible,z.wireframe=U.wireframe,w===cl?z.side=U.shadowSide!==null?U.shadowSide:U.side:z.side=U.shadowSide!==null?U.shadowSide:v[U.side],z.alphaMap=U.alphaMap,z.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,z.map=U.map,z.clipShadows=U.clipShadows,z.clippingPlanes=U.clippingPlanes,z.clipIntersection=U.clipIntersection,z.displacementMap=U.displacementMap,z.displacementScale=U.displacementScale,z.displacementBias=U.displacementBias,z.wireframeLinewidth=U.wireframeLinewidth,z.linewidth=U.linewidth,x.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const K=o.properties.get(z);K.light=x}return z}function C(N,U,x,w,z){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&z===cl)&&(!N.frustumCulled||N.intersectsFrustum(s))){N.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,N.matrixWorld);const ot=e.update(N),q=N.material;if(Array.isArray(q)){const Q=ot.groups;for(let X=0,Y=Q.length;X<Y;X++){const ut=Q[X],nt=q[ut.materialIndex];if(nt&&nt.visible){const dt=B(N,nt,w,z);N.onBeforeShadow(o,N,U,x,ot,dt,ut),o.renderBufferDirect(x,null,ot,dt,N,ut),N.onAfterShadow(o,N,U,x,ot,dt,ut)}}}else if(q.visible){const Q=B(N,q,w,z);N.onBeforeShadow(o,N,U,x,ot,Q,null),o.renderBufferDirect(x,null,ot,Q,N,null),N.onAfterShadow(o,N,U,x,ot,Q,null)}}const K=N.children;for(let ot=0,q=K.length;ot<q;ot++)C(K[ot],U,x,w,z)}function L(N){N.target.removeEventListener("dispose",L);for(const x in m){const w=m[x],z=N.target.uuid;z in w&&(w[z].dispose(),delete w[z])}}}function fC(o,e){function i(){let k=!1;const Ct=new an;let xt=null;const Ut=new an(0,0,0,0);return{setMask:function(Gt){xt!==Gt&&!k&&(o.colorMask(Gt,Gt,Gt,Gt),xt=Gt)},setLocked:function(Gt){k=Gt},setClear:function(Gt,Et,Jt,Ht,Ce){Ce===!0&&(Gt*=Ht,Et*=Ht,Jt*=Ht),Ct.set(Gt,Et,Jt,Ht),Ut.equals(Ct)===!1&&(o.clearColor(Gt,Et,Jt,Ht),Ut.copy(Ct))},reset:function(){k=!1,xt=null,Ut.set(-1,0,0,0)}}}function s(){let k=!1,Ct=!1,xt=null,Ut=null,Gt=null;return{setReversed:function(Et){if(Ct!==Et){const Jt=e.get("EXT_clip_control");Et?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const Ht=Gt;Gt=null,this.setClear(Ht)}},getReversed:function(){return Ct},setTest:function(Et){Et?ht(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!k&&(o.depthMask(Et),xt=Et)},setFunc:function(Et){if(Ct&&(Et=BE[Et]),Ut!==Et){switch(Et){case Gh:o.depthFunc(o.NEVER);break;case Vh:o.depthFunc(o.ALWAYS);break;case Xh:o.depthFunc(o.LESS);break;case hl:o.depthFunc(o.LEQUAL);break;case kh:o.depthFunc(o.EQUAL);break;case Wh:o.depthFunc(o.GEQUAL);break;case qh:o.depthFunc(o.GREATER);break;case Yh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ut=Et}},setLocked:function(Et){k=Et},setClear:function(Et){Gt!==Et&&(Gt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){k=!1,xt=null,Ut=null,Gt=null,Ct=!1}}}function u(){let k=!1,Ct=null,xt=null,Ut=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null;return{setTest:function(le){k||(le?ht(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(le){Ct!==le&&!k&&(o.stencilMask(le),Ct=le)},setFunc:function(le,jn,di){(xt!==le||Ut!==jn||Gt!==di)&&(o.stencilFunc(le,jn,di),xt=le,Ut=jn,Gt=di)},setOp:function(le,jn,di){(Et!==le||Jt!==jn||Ht!==di)&&(o.stencilOp(le,jn,di),Et=le,Jt=jn,Ht=di)},setLocked:function(le){k=le},setClear:function(le){Ce!==le&&(o.clearStencil(le),Ce=le)},reset:function(){k=!1,Ct=null,xt=null,Ut=null,Gt=null,Et=null,Jt=null,Ht=null,Ce=null}}}const f=new i,d=new s,h=new u,g=new WeakMap,m=new WeakMap;let S={},v={},_={},T=new WeakMap,R=[],O=null,y=!1,M=null,D=null,B=null,C=null,L=null,N=null,U=null,x=new Le(0,0,0),w=0,z=!1,G=null,K=null,ot=null,q=null,Q=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ut=0;const nt=o.getParameter(o.VERSION);nt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Y=ut>=1):nt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Y=ut>=2);let dt=null,yt={};const Qt=o.getParameter(o.SCISSOR_BOX),Yt=o.getParameter(o.VIEWPORT),F=new an().fromArray(Qt),mt=new an().fromArray(Yt);function At(k,Ct,xt,Ut){const Gt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(k,Et),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<xt;Jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ut,0,o.RGBA,o.UNSIGNED_BYTE,Gt):o.texImage2D(Ct+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Gt);return Et}const J={};J[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ht(o.DEPTH_TEST),d.setFunc(hl),te(!1),ne(Sv),ht(o.CULL_FACE),ge(Ua);function ht(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function Tt(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function It(k,Ct){return _[k]!==Ct?(o.bindFramebuffer(k,Ct),_[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function _t(k,Ct){let xt=R,Ut=!1;if(k){xt=T.get(Ct),xt===void 0&&(xt=[],T.set(Ct,xt));const Gt=k.textures;if(xt.length!==Gt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Jt=Gt.length;Et<Jt;Et++)xt[Et]=o.COLOR_ATTACHMENT0+Et;xt.length=Gt.length,Ut=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Ut=!0);Ut&&o.drawBuffers(xt)}function Rt(k){return O!==k?(o.useProgram(k),O=k,!0):!1}const Ge={[js]:o.FUNC_ADD,[rE]:o.FUNC_SUBTRACT,[sE]:o.FUNC_REVERSE_SUBTRACT};Ge[oE]=o.MIN,Ge[lE]=o.MAX;const he={[uE]:o.ZERO,[cE]:o.ONE,[fE]:o.SRC_COLOR,[ES]:o.SRC_ALPHA,[_E]:o.SRC_ALPHA_SATURATE,[mE]:o.DST_COLOR,[hE]:o.DST_ALPHA,[dE]:o.ONE_MINUS_SRC_COLOR,[TS]:o.ONE_MINUS_SRC_ALPHA,[gE]:o.ONE_MINUS_DST_COLOR,[pE]:o.ONE_MINUS_DST_ALPHA,[vE]:o.CONSTANT_COLOR,[SE]:o.ONE_MINUS_CONSTANT_COLOR,[xE]:o.CONSTANT_ALPHA,[ME]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(k,Ct,xt,Ut,Gt,Et,Jt,Ht,Ce,le){if(k===Ua){y===!0&&(Tt(o.BLEND),y=!1);return}if(y===!1&&(ht(o.BLEND),y=!0),k!==aE){if(k!==M||le!==z){if((D!==js||L!==js)&&(o.blendEquation(o.FUNC_ADD),D=js,L=js),le)switch(k){case dl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xv:o.blendFunc(o.ONE,o.ONE);break;case Mv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case yv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ie("WebGLState: Invalid blending: ",k);break}else switch(k){case dl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Mv:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yv:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",k);break}B=null,C=null,N=null,U=null,x.set(0,0,0),w=0,M=k,z=le}return}Gt=Gt||Ct,Et=Et||xt,Jt=Jt||Ut,(Ct!==D||Gt!==L)&&(o.blendEquationSeparate(Ge[Ct],Ge[Gt]),D=Ct,L=Gt),(xt!==B||Ut!==C||Et!==N||Jt!==U)&&(o.blendFuncSeparate(he[xt],he[Ut],he[Et],he[Jt]),B=xt,C=Ut,N=Et,U=Jt),(Ht.equals(x)===!1||Ce!==w)&&(o.blendColor(Ht.r,Ht.g,Ht.b,Ce),x.copy(Ht),w=Ce),M=k,z=!1}function xe(k,Ct){k.side===na?Tt(o.CULL_FACE):ht(o.CULL_FACE);let xt=k.side===Jn;Ct&&(xt=!xt),te(xt),k.blending===dl&&k.transparent===!1?ge(Ua):ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),f.setMask(k.colorWrite);const Ut=k.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),fn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){G!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),G=k)}function ne(k){k!==eE?(ht(o.CULL_FACE),k!==K&&(k===Sv?o.cullFace(o.BACK):k===nE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),K=k}function Ve(k){k!==ot&&(Y&&o.lineWidth(k),ot=k)}function fn(k,Ct,xt){k?(ht(o.POLYGON_OFFSET_FILL),(q!==Ct||Q!==xt)&&(q=Ct,Q=xt,d.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,xt))):Tt(o.POLYGON_OFFSET_FILL)}function Pe(k){k?ht(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function $e(k){k===void 0&&(k=o.TEXTURE0+X-1),dt!==k&&(o.activeTexture(k),dt=k)}function W(k,Ct,xt){xt===void 0&&(dt===null?xt=o.TEXTURE0+X-1:xt=dt);let Ut=yt[xt];Ut===void 0&&(Ut={type:void 0,texture:void 0},yt[xt]=Ut),(Ut.type!==k||Ut.texture!==Ct)&&(dt!==xt&&(o.activeTexture(xt),dt=xt),o.bindTexture(k,Ct||J[k]),Ut.type=k,Ut.texture=Ct)}function en(){const k=yt[dt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Oe(){try{o.compressedTexImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function P(){try{o.compressedTexImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function E(){try{o.texSubImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function tt(){try{o.texSubImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function bt(){try{o.texStorage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function Dt(){try{o.texStorage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function gt(){try{o.texImage2D(...arguments)}catch(k){Ie("WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){Ie("WebGLState:",k)}}function wt(k){return v[k]!==void 0?v[k]:o.getParameter(k)}function jt(k,Ct){v[k]!==Ct&&(o.pixelStorei(k,Ct),v[k]=Ct)}function Pt(k){F.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),F.copy(k))}function Ot(k){mt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),mt.copy(k))}function Vt(k,Ct){let xt=m.get(Ct);xt===void 0&&(xt=new WeakMap,m.set(Ct,xt));let Ut=xt.get(k);Ut===void 0&&(Ut=o.getUniformBlockIndex(Ct,k.name),xt.set(k,Ut))}function ee(k,Ct){const Ut=m.get(Ct).get(k);g.get(Ct)!==Ut&&(o.uniformBlockBinding(Ct,Ut,k.__bindingPointIndex),g.set(Ct,Ut))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},dt=null,yt={},_={},T=new WeakMap,R=[],O=null,y=!1,M=null,D=null,B=null,C=null,L=null,N=null,U=null,x=new Le(0,0,0),w=0,z=!1,G=null,K=null,ot=null,q=null,Q=null,F.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:ht,disable:Tt,bindFramebuffer:It,drawBuffers:_t,useProgram:Rt,setBlending:ge,setMaterial:xe,setFlipSided:te,setCullFace:ne,setLineWidth:Ve,setPolygonOffset:fn,setScissorTest:Pe,activeTexture:$e,bindTexture:W,unbindTexture:en,compressedTexImage2D:Oe,compressedTexImage3D:P,texImage2D:gt,texImage3D:Mt,pixelStorei:jt,getParameter:wt,updateUBOMapping:Vt,uniformBlockBinding:ee,texStorage2D:bt,texStorage3D:Dt,texSubImage2D:E,texSubImage3D:tt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:Ot,reset:oe}}function dC(o,e,i,s,u,f,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Te,S=new WeakMap,v=new Set;let _;const T=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(P,E){return R?new OffscreenCanvas(P,E):Tc("canvas")}function y(P,E,tt){let lt=1;const pt=Oe(P);if((pt.width>tt||pt.height>tt)&&(lt=tt/Math.max(pt.width,pt.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const bt=Math.floor(lt*pt.width),Dt=Math.floor(lt*pt.height);_===void 0&&(_=O(bt,Dt));const gt=E?O(bt,Dt):_;return gt.width=bt,gt.height=Dt,gt.getContext("2d").drawImage(P,0,0,bt,Dt),se("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+bt+"x"+Dt+")."),gt}else return"data"in P&&se("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),P;return P}function M(P){return P.generateMipmaps}function D(P){o.generateMipmap(P)}function B(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(P,E,tt,lt,pt,bt=!1){if(P!==null){if(o[P]!==void 0)return o[P];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Dt;lt&&(Dt=e.get("EXT_texture_norm16"),Dt||se("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===o.RED&&(tt===o.FLOAT&&(gt=o.R32F),tt===o.HALF_FLOAT&&(gt=o.R16F),tt===o.UNSIGNED_BYTE&&(gt=o.R8),tt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.R16_EXT),tt===o.SHORT&&Dt&&(gt=Dt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.R8UI),tt===o.UNSIGNED_SHORT&&(gt=o.R16UI),tt===o.UNSIGNED_INT&&(gt=o.R32UI),tt===o.BYTE&&(gt=o.R8I),tt===o.SHORT&&(gt=o.R16I),tt===o.INT&&(gt=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(gt=o.RG32F),tt===o.HALF_FLOAT&&(gt=o.RG16F),tt===o.UNSIGNED_BYTE&&(gt=o.RG8),tt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RG16_EXT),tt===o.SHORT&&Dt&&(gt=Dt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(gt=o.RG16UI),tt===o.UNSIGNED_INT&&(gt=o.RG32UI),tt===o.BYTE&&(gt=o.RG8I),tt===o.SHORT&&(gt=o.RG16I),tt===o.INT&&(gt=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),tt===o.UNSIGNED_INT&&(gt=o.RGB32UI),tt===o.BYTE&&(gt=o.RGB8I),tt===o.SHORT&&(gt=o.RGB16I),tt===o.INT&&(gt=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(gt=o.RGBA32UI),tt===o.BYTE&&(gt=o.RGBA8I),tt===o.SHORT&&(gt=o.RGBA16I),tt===o.INT&&(gt=o.RGBA32I)),E===o.RGB&&(tt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGB16_EXT),tt===o.SHORT&&Dt&&(gt=Dt.RGB16_SNORM_EXT),tt===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=bt?Ec:De.getTransfer(pt);tt===o.FLOAT&&(gt=o.RGBA32F),tt===o.HALF_FLOAT&&(gt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(gt=Mt===qe?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT&&Dt&&(gt=Dt.RGBA16_EXT),tt===o.SHORT&&Dt&&(gt=Dt.RGBA16_SNORM_EXT),tt===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function L(P,E){let tt;return P?E===null||E===sa||E===ml?tt=o.DEPTH24_STENCIL8:E===ia?tt=o.DEPTH32F_STENCIL8:E===pl&&(tt=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===sa||E===ml?tt=o.DEPTH_COMPONENT24:E===ia?tt=o.DEPTH_COMPONENT32F:E===pl&&(tt=o.DEPTH_COMPONENT16),tt}function N(P,E){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function U(P){const E=P.target;E.removeEventListener("dispose",U),w(E),E.isVideoTexture&&S.delete(E),E.isHTMLTexture&&v.delete(E)}function x(P){const E=P.target;E.removeEventListener("dispose",x),G(E)}function w(P){const E=s.get(P);if(E.__webglInit===void 0)return;const tt=P.source,lt=T.get(tt);if(lt){const pt=lt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&z(P),Object.keys(lt).length===0&&T.delete(tt)}s.remove(P)}function z(P){const E=s.get(P);o.deleteTexture(E.__webglTexture);const tt=P.source,lt=T.get(tt);delete lt[E.__cacheKey],d.memory.textures--}function G(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let pt=0;pt<E.__webglFramebuffer[lt].length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[lt][pt]);else o.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[lt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=P.textures;for(let lt=0,pt=tt.length;lt<pt;lt++){const bt=s.get(tt[lt]);bt.__webglTexture&&(o.deleteTexture(bt.__webglTexture),d.memory.textures--),s.remove(tt[lt])}s.remove(P)}let K=0;function ot(){K=0}function q(){return K}function Q(P){K=P}function X(){const P=K;return P>=u.maxTextures&&se("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+u.maxTextures),K+=1,P}function Y(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ut(P,E){const tt=s.get(P);if(P.isVideoTexture&&W(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&tt.__version!==P.version){const lt=P.image;if(lt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(tt,P,E);return}}else P.isExternalTexture&&(tt.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function nt(P,E){const tt=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&tt.__version!==P.version){Tt(tt,P,E);return}else P.isExternalTexture&&(tt.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function dt(P,E){const tt=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&tt.__version!==P.version){Tt(tt,P,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function yt(P,E){const tt=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&tt.__version!==P.version){It(tt,P,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const Qt={[Zh]:o.REPEAT,[Da]:o.CLAMP_TO_EDGE,[Kh]:o.MIRRORED_REPEAT},Yt={[Nn]:o.NEAREST,[TE]:o.NEAREST_MIPMAP_NEAREST,[Wu]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[ch]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},F={[CE]:o.NEVER,[LE]:o.ALWAYS,[wE]:o.LESS,[Bp]:o.LEQUAL,[DE]:o.EQUAL,[Fp]:o.GEQUAL,[UE]:o.GREATER,[NE]:o.NOTEQUAL};function mt(P,E){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===ch||E.magFilter===Wu||E.magFilter===qr||E.minFilter===zn||E.minFilter===ch||E.minFilter===Wu||E.minFilter===qr)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,Qt[E.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,Qt[E.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,Qt[E.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,Yt[E.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,Yt[E.minFilter]),E.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Wu&&E.minFilter!==qr||E.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,u.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function At(P,E){let tt=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",U));const lt=E.source;let pt=T.get(lt);pt===void 0&&(pt={},T.set(lt,pt));const bt=Y(E);if(bt!==P.__cacheKey){pt[bt]===void 0&&(pt[bt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,tt=!0),pt[bt].usedTimes++;const Dt=pt[P.__cacheKey];Dt!==void 0&&(pt[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&z(E)),P.__cacheKey=bt,P.__webglTexture=pt[bt].texture}return tt}function J(P,E,tt){return Math.floor(Math.floor(P/tt)/E)}function ht(P,E,tt,lt){const bt=P.updateRanges;if(bt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,lt,E.data);else{bt.sort((jt,Pt)=>jt.start-Pt.start);let Dt=0;for(let jt=1;jt<bt.length;jt++){const Pt=bt[Dt],Ot=bt[jt],Vt=Pt.start+Pt.count,ee=J(Ot.start,E.width,4),oe=J(Pt.start,E.width,4);Ot.start<=Vt+1&&ee===oe&&J(Ot.start+Ot.count-1,E.width,4)===ee?Pt.count=Math.max(Pt.count,Ot.start+Ot.count-Pt.start):(++Dt,bt[Dt]=Ot)}bt.length=Dt+1;const gt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),wt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let jt=0,Pt=bt.length;jt<Pt;jt++){const Ot=bt[jt],Vt=Math.floor(Ot.start/4),ee=Math.ceil(Ot.count/4),oe=Vt%E.width,k=Math.floor(Vt/E.width),Ct=ee,xt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,oe,k,Ct,xt,tt,lt,E.data)}P.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,gt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,wt)}}function Tt(P,E,tt){let lt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=o.TEXTURE_3D);const pt=At(P,E),bt=E.source;i.bindTexture(lt,P.__webglTexture,o.TEXTURE0+tt);const Dt=s.get(bt);if(bt.version!==Dt.__version||pt===!0){if(i.activeTexture(o.TEXTURE0+tt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const xt=De.getPrimaries(De.workingColorSpace),Ut=E.colorSpace===gr?null:De.getPrimaries(E.colorSpace),Gt=E.colorSpace===gr||xt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=y(E.image,!1,u.maxTextureSize);Mt=en(E,Mt);const wt=f.convert(E.format,E.colorSpace),jt=f.convert(E.type);let Pt=C(E.internalFormat,wt,jt,E.normalized,E.colorSpace,E.isVideoTexture);mt(lt,E);let Ot;const Vt=E.mipmaps,ee=E.isVideoTexture!==!0,oe=Dt.__version===void 0||pt===!0,k=bt.dataReady,Ct=N(E,Mt);if(E.isDepthTexture)Pt=L(E.format===Yr,E.type),oe&&(ee?i.texStorage2D(o.TEXTURE_2D,1,Pt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,null));else if(E.isDataTexture)if(Vt.length>0){ee&&oe&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Ut=Vt.length;xt<Ut;xt++)Ot=Vt[xt],ee?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data);E.generateMipmaps=!1}else ee?(oe&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height),k&&ht(E,Mt,wt,jt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Mt.width,Mt.height,0,wt,jt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ee&&oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Vt[0].width,Vt[0].height,Mt.depth);for(let xt=0,Ut=Vt.length;xt<Ut;xt++)if(Ot=Vt[xt],E.format!==Ii)if(wt!==null)if(ee){if(k)if(E.layerUpdates.size>0){const Gt=qv(Ot.width,Ot.height,E.format,E.type);for(const Et of E.layerUpdates){const Jt=Ot.data.subarray(Et*Gt/Ot.data.BYTES_PER_ELEMENT,(Et+1)*Gt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,Et,Ot.width,Ot.height,1,wt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,Ot.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Ot.width,Ot.height,Mt.depth,wt,jt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,Pt,Ot.width,Ot.height,Mt.depth,0,wt,jt,Ot.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ee&&oe&&i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Vt[0].width,Vt[0].height);for(let xt=0,Ut=Vt.length;xt<Ut;xt++)Ot=Vt[xt],E.format!==Ii?wt!==null?ee?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,Ot.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot.width,Ot.height,wt,jt,Ot.data):i.texImage2D(o.TEXTURE_2D,xt,Pt,Ot.width,Ot.height,0,wt,jt,Ot.data)}else if(E.isDataArrayTexture)if(ee){if(oe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Pt,Mt.width,Mt.height,Mt.depth),k)if(E.layerUpdates.size>0){const xt=qv(Mt.width,Mt.height,E.format,E.type);for(const Ut of E.layerUpdates){const Gt=Mt.data.subarray(Ut*xt/Mt.data.BYTES_PER_ELEMENT,(Ut+1)*xt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,Mt.width,Mt.height,1,wt,jt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isData3DTexture)ee?(oe&&i.texStorage3D(o.TEXTURE_3D,Ct,Pt,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,wt,jt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Mt.width,Mt.height,Mt.depth,0,wt,jt,Mt.data);else if(E.isFramebufferTexture){if(oe)if(ee)i.texStorage2D(o.TEXTURE_2D,Ct,Pt,Mt.width,Mt.height);else{let xt=Mt.width,Ut=Mt.height;for(let Gt=0;Gt<Ct;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Pt,xt,Ut,0,wt,jt,null),xt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const xt=o.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),Mt.parentNode!==xt){xt.appendChild(Mt),v.add(E),xt.onpaint=Ut=>{const Gt=Ut.changedElements;for(const Et of v)Gt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Gt=o.RGBA,Et=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Gt,Et,Jt,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(ee&&oe){const xt=Oe(Vt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}for(let xt=0,Ut=Vt.length;xt<Ut;xt++)Ot=Vt[xt],ee?k&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,wt,jt,Ot):i.texImage2D(o.TEXTURE_2D,xt,Pt,wt,jt,Ot);E.generateMipmaps=!1}else if(ee){if(oe){const xt=Oe(Mt);i.texStorage2D(o.TEXTURE_2D,Ct,Pt,xt.width,xt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,jt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,wt,jt,Mt);M(E)&&D(lt),Dt.__version=bt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function It(P,E,tt){if(E.image.length!==6)return;const lt=At(P,E),pt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+tt);const bt=s.get(pt);if(pt.version!==bt.__version||lt===!0){i.activeTexture(o.TEXTURE0+tt);const Dt=De.getPrimaries(De.workingColorSpace),gt=E.colorSpace===gr?null:De.getPrimaries(E.colorSpace),Mt=E.colorSpace===gr||Dt===gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,jt=E.image[0]&&E.image[0].isDataTexture,Pt=[];for(let Et=0;Et<6;Et++)!wt&&!jt?Pt[Et]=y(E.image[Et],!0,u.maxCubemapSize):Pt[Et]=jt?E.image[Et].image:E.image[Et],Pt[Et]=en(E,Pt[Et]);const Ot=Pt[0],Vt=f.convert(E.format,E.colorSpace),ee=f.convert(E.type),oe=C(E.internalFormat,Vt,ee,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ct=bt.__version===void 0||lt===!0,xt=pt.dataReady;let Ut=N(E,Ot);mt(o.TEXTURE_CUBE_MAP,E);let Gt;if(wt){k&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,Ot.width,Ot.height);for(let Et=0;Et<6;Et++){Gt=Pt[Et].mipmaps;for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];E.format!==Ii?Vt!==null?k?xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,Ht.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,oe,Ht.width,Ht.height,0,Ht.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,0,0,Ht.width,Ht.height,Vt,ee,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt,oe,Ht.width,Ht.height,0,Vt,ee,Ht.data)}}}else{if(Gt=E.mipmaps,k&&Ct){Gt.length>0&&Ut++;const Et=Oe(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,oe,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(jt){k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Pt[Et].width,Pt[Et].height,Vt,ee,Pt[Et].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,oe,Pt[Et].width,Pt[Et].height,0,Vt,ee,Pt[Et].data);for(let Jt=0;Jt<Gt.length;Jt++){const Ce=Gt[Jt].image[Et].image;k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Ce.width,Ce.height,Vt,ee,Ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,oe,Ce.width,Ce.height,0,Vt,ee,Ce.data)}}else{k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Vt,ee,Pt[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,oe,Vt,ee,Pt[Et]);for(let Jt=0;Jt<Gt.length;Jt++){const Ht=Gt[Jt];k?xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,0,0,Vt,ee,Ht.image[Et]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Jt+1,oe,Vt,ee,Ht.image[Et])}}}M(E)&&D(o.TEXTURE_CUBE_MAP),bt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _t(P,E,tt,lt,pt,bt){const Dt=f.convert(tt.format,tt.colorSpace),gt=f.convert(tt.type),Mt=C(tt.internalFormat,Dt,gt,tt.normalized,tt.colorSpace),wt=s.get(E),jt=s.get(tt);if(jt.__renderTarget=E,!wt.__hasExternalTextures){const Pt=Math.max(1,E.width>>bt),Ot=Math.max(1,E.height>>bt);pt===o.TEXTURE_3D||pt===o.TEXTURE_2D_ARRAY?i.texImage3D(pt,bt,Mt,Pt,Ot,E.depth,0,Dt,gt,null):i.texImage2D(pt,bt,Mt,Pt,Ot,0,Dt,gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,0,Pe(E)):(pt===o.TEXTURE_2D||pt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,pt,jt.__webglTexture,bt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(P,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,P),E.depthBuffer){const lt=E.depthTexture,pt=lt&&lt.isDepthTexture?lt.type:null,bt=L(E.stencilBuffer,pt),Dt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;$e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(E),bt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(E),bt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,bt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,P)}else{const lt=E.textures;for(let pt=0;pt<lt.length;pt++){const bt=lt[pt],Dt=f.convert(bt.format,bt.colorSpace),gt=f.convert(bt.type),Mt=C(bt.internalFormat,Dt,gt,bt.normalized,bt.colorSpace);$e(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pe(E),Mt,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe(E),Mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(P,E,tt){const lt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pt=s.get(E.depthTexture);if(pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(pt.__webglInit===void 0&&(pt.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),pt.__webglTexture===void 0){pt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const wt=f.convert(E.depthTexture.format),jt=f.convert(E.depthTexture.type);let Pt;E.depthTexture.format===Oa?Pt=o.DEPTH_COMPONENT24:E.depthTexture.format===Yr&&(Pt=o.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,Pt,E.width,E.height,0,wt,jt,null)}}else ut(E.depthTexture,0);const bt=pt.__webglTexture,Dt=Pe(E),gt=lt?o.TEXTURE_CUBE_MAP_POSITIVE_X+tt:o.TEXTURE_2D,Mt=E.depthTexture.format===Yr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Oa)$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else if(E.depthTexture.format===Yr)$e(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,gt,bt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,gt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(P){const E=s.get(P),tt=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",pt)};lt.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=lt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(tt)for(let lt=0;lt<6;lt++)Ge(E.__webglFramebuffer[lt],P,lt);else{const lt=P.texture.mipmaps;lt&&lt.length>0?Ge(E.__webglFramebuffer[0],P,0):Ge(E.__webglFramebuffer,P,0)}else if(tt){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=o.createRenderbuffer(),Rt(E.__webglDepthbuffer[lt],P,!1);else{const pt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}else{const lt=P.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Rt(E.__webglDepthbuffer,P,!1);else{const pt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,bt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,bt),o.framebufferRenderbuffer(o.FRAMEBUFFER,pt,o.RENDERBUFFER,bt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(P,E,tt){const lt=s.get(P);E!==void 0&&_t(lt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&he(P)}function xe(P){const E=P.texture,tt=s.get(P),lt=s.get(E);P.addEventListener("dispose",x);const pt=P.textures,bt=P.isWebGLCubeRenderTarget===!0,Dt=pt.length>1;if(Dt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=E.version,d.memory.textures++),bt){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)tt.__webglFramebuffer[gt][Mt]=o.createFramebuffer()}else tt.__webglFramebuffer[gt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Dt)for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=s.get(pt[gt]);wt.__webglTexture===void 0&&(wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&$e(P)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<pt.length;gt++){const Mt=pt[gt];tt.__webglColorRenderbuffer[gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);const wt=f.convert(Mt.format,Mt.colorSpace),jt=f.convert(Mt.type),Pt=C(Mt.internalFormat,wt,jt,Mt.normalized,Mt.colorSpace,P.isXRRenderTarget===!0),Ot=Pe(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,Pt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(tt.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(bt){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(tt.__webglFramebuffer[gt][Mt],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else _t(tt.__webglFramebuffer[gt],P,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);M(E)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let gt=0,Mt=pt.length;gt<Mt;gt++){const wt=pt[gt],jt=s.get(wt);let Pt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,jt.__webglTexture),mt(Pt,wt),_t(tt.__webglFramebuffer,P,wt,o.COLOR_ATTACHMENT0+gt,Pt,0),M(wt)&&D(Pt)}i.unbindTexture()}else{let gt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(gt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(gt,lt.__webglTexture),mt(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(tt.__webglFramebuffer[Mt],P,E,o.COLOR_ATTACHMENT0,gt,Mt);else _t(tt.__webglFramebuffer,P,E,o.COLOR_ATTACHMENT0,gt,0);M(E)&&D(gt),i.unbindTexture()}P.depthBuffer&&he(P)}function te(P){const E=P.textures;for(let tt=0,lt=E.length;tt<lt;tt++){const pt=E[tt];if(M(pt)){const bt=B(P),Dt=s.get(pt).__webglTexture;i.bindTexture(bt,Dt),D(bt),i.unbindTexture()}}}const ne=[],Ve=[];function fn(P){if(P.samples>0){if($e(P)===!1){const E=P.textures,tt=P.width,lt=P.height;let pt=o.COLOR_BUFFER_BIT;const bt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=s.get(P),gt=E.length>1;if(gt)for(let wt=0;wt<E.length;wt++)i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Mt=P.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pt|=o.STENCIL_BUFFER_BIT)),gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=s.get(E[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,jt,0)}o.blitFramebuffer(0,0,tt,lt,0,0,tt,lt,pt,o.NEAREST),g===!0&&(ne.length=0,Ve.length=0,ne.push(o.COLOR_ATTACHMENT0+wt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ne.push(bt),Ve.push(bt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ve)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),gt)for(let wt=0;wt<E.length;wt++){i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[wt]);const jt=s.get(E[wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,jt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&g){const E=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Pe(P){return Math.min(u.maxSamples,P.samples)}function $e(P){const E=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(P){const E=d.render.frame;S.get(P)!==E&&(S.set(P,E),P.update())}function en(P,E){const tt=P.colorSpace,lt=P.format,pt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||tt!==yc&&tt!==gr&&(De.getTransfer(tt)===qe?(lt!==Ii||pt!==fi)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",tt)),E}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=ot,this.getTextureUnits=q,this.setTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=yt,this.rebindTextures=ge,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function hC(o,e){function i(s,u=gr){let f;const d=De.getTransfer(u);if(s===fi)return o.UNSIGNED_BYTE;if(s===Lp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Op)return o.UNSIGNED_SHORT_5_5_5_1;if(s===IS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===zS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===OS)return o.BYTE;if(s===PS)return o.SHORT;if(s===pl)return o.UNSIGNED_SHORT;if(s===Np)return o.INT;if(s===sa)return o.UNSIGNED_INT;if(s===ia)return o.FLOAT;if(s===oa)return o.HALF_FLOAT;if(s===BS)return o.ALPHA;if(s===FS)return o.RGB;if(s===Ii)return o.RGBA;if(s===Oa)return o.DEPTH_COMPONENT;if(s===Yr)return o.DEPTH_STENCIL;if(s===HS)return o.RED;if(s===Pp)return o.RED_INTEGER;if(s===Qr)return o.RG;if(s===Ip)return o.RG_INTEGER;if(s===zp)return o.RGBA_INTEGER;if(s===mc||s===gc||s===_c||s===vc)if(d===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_c)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_c)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qh||s===Jh||s===jh||s===$h)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Qh)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jh)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jh)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$h)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tp||s===ep||s===np||s===ip||s===ap||s===xc||s===rp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===tp||s===ep)return d===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===np)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===ip)return f.COMPRESSED_R11_EAC;if(s===ap)return f.COMPRESSED_SIGNED_R11_EAC;if(s===xc)return f.COMPRESSED_RG11_EAC;if(s===rp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===dp||s===hp||s===pp||s===mp||s===gp||s===_p||s===vp||s===Sp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===op)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===up)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_p)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sp)return d===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xp||s===Mp||s===yp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===xp)return d===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ep||s===Tp||s===Mc||s===bp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Ep)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Tp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mc)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ml?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const pC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mC=`
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

}`;class gC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new ZS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new la({vertexShader:pC,fragmentShader:mC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bi(new yl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _C extends Jr{constructor(e,i){super();const s=this;let u=null,f=1,d=null,h="local-floor",g=1,m=null,S=null,v=null,_=null,T=null,R=null;const O=typeof XRWebGLBinding<"u",y=new gC,M={},D=i.getContextAttributes();let B=null,C=null;const L=[],N=[],U=new Te;let x=null,w=null;const z=new Ti;z.viewport=new an;const G=new Ti;G.viewport=new an;const K=[z,G],ot=new bT;let q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=L[J];return ht===void 0&&(ht=new Sh,L[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=L[J];return ht===void 0&&(ht=new Sh,L[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=L[J];return ht===void 0&&(ht=new Sh,L[J]=ht),ht.getHandSpace()};function X(J){const ht=N.indexOf(J.inputSource);if(ht===-1)return;const Tt=L[ht];Tt!==void 0&&(Tt.update(J.inputSource,J.frame,m||d),Tt.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){u.removeEventListener("select",X),u.removeEventListener("selectstart",X),u.removeEventListener("selectend",X),u.removeEventListener("squeeze",X),u.removeEventListener("squeezestart",X),u.removeEventListener("squeezeend",X),u.removeEventListener("end",Y),u.removeEventListener("inputsourceschange",ut);for(let J=0;J<L.length;J++){const ht=N[J];ht!==null&&(N[J]=null,L[J].disconnect(ht))}q=null,Q=null,y.reset();for(const J in M)delete M[J];if(e.setRenderTarget(B),T=null,_=null,v=null,u=null,C=null,At.stop(),s.isPresenting=!1,e.setPixelRatio(x),e.setSize(U.width,U.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){f=J,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return _!==null?_:T},this.getBinding=function(){return v===null&&O&&(v=new XRWebGLBinding(u,i)),v},this.getFrame=function(){return R},this.getSession=function(){return u},this.setSession=async function(J){if(u=J,u!==null){if(B=e.getRenderTarget(),u.addEventListener("select",X),u.addEventListener("selectstart",X),u.addEventListener("selectend",X),u.addEventListener("squeeze",X),u.addEventListener("squeezestart",X),u.addEventListener("squeezeend",X),u.addEventListener("end",Y),u.addEventListener("inputsourceschange",ut),D.xrCompatible!==!0&&await i.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(U),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,It=null,_t=null;D.depth&&(_t=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=D.stencil?Yr:Oa,It=D.stencil?ml:sa);const Rt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:f};v=this.getBinding(),_=v.createProjectionLayer(Rt),u.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new zi(_.textureWidth,_.textureHeight,{format:Ii,type:fi,depthTexture:new _l(_.textureWidth,_.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:f};T=new XRWebGLLayer(u,i,Tt),u.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),C=new zi(T.framebufferWidth,T.framebufferHeight,{format:Ii,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await u.requestReferenceSpace(h),At.setContext(u),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ut(J){for(let ht=0;ht<J.removed.length;ht++){const Tt=J.removed[ht],It=N.indexOf(Tt);It>=0&&(N[It]=null,L[It].disconnect(Tt))}for(let ht=0;ht<J.added.length;ht++){const Tt=J.added[ht];let It=N.indexOf(Tt);if(It===-1){for(let Rt=0;Rt<L.length;Rt++)if(Rt>=N.length){N.push(Tt),It=Rt;break}else if(N[Rt]===null){N[Rt]=Tt,It=Rt;break}if(It===-1)break}const _t=L[It];_t&&_t.connect(Tt)}}const nt=new at,dt=new at;function yt(J,ht,Tt){nt.setFromMatrixPosition(ht.matrixWorld),dt.setFromMatrixPosition(Tt.matrixWorld);const It=nt.distanceTo(dt),_t=ht.projectionMatrix.elements,Rt=Tt.projectionMatrix.elements,Ge=_t[14]/(_t[10]-1),he=_t[14]/(_t[10]+1),ge=(_t[9]+1)/_t[5],xe=(_t[9]-1)/_t[5],te=(_t[8]-1)/_t[0],ne=(Rt[8]+1)/Rt[0],Ve=Ge*te,fn=Ge*ne,Pe=It/(-te+ne),$e=Pe*-te;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($e),J.translateZ(Pe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),_t[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const W=Ge+Pe,en=he+Pe,Oe=Ve-$e,P=fn+(It-$e),E=ge*he/en*W,tt=xe*he/en*W;J.projectionMatrix.makePerspective(Oe,P,E,tt,W,en),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Qt(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(u===null)return;let ht=J.near,Tt=J.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),ot.near=G.near=z.near=ht,ot.far=G.far=z.far=Tt,(q!==ot.near||Q!==ot.far)&&(u.updateRenderState({depthNear:ot.near,depthFar:ot.far}),q=ot.near,Q=ot.far),ot.layers.mask=J.layers.mask|6,z.layers.mask=ot.layers.mask&-5,G.layers.mask=ot.layers.mask&-3;const It=J.parent,_t=ot.cameras;Qt(ot,It);for(let Rt=0;Rt<_t.length;Rt++)Qt(_t[Rt],It);_t.length===2?yt(ot,z,G):ot.projectionMatrix.copy(z.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Yt(J,ot,It)};function Yt(J,ht,Tt){Tt===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(Tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rp*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return ot},this.getFoveation=function(){if(!(_===null&&T===null))return g},this.setFoveation=function(J){g=J,_!==null&&(_.fixedFoveation=J),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ot)},this.getCameraTexture=function(J){return M[J]};let F=null;function mt(J,ht){if(S=ht.getViewerPose(m||d),R=ht,S!==null){const Tt=S.views;T!==null&&(e.setRenderTargetFramebuffer(C,T.framebuffer),e.setRenderTarget(C));let It=!1;Tt.length!==ot.cameras.length&&(ot.cameras.length=0,It=!0);for(let he=0;he<Tt.length;he++){const ge=Tt[he];let xe=null;if(T!==null)xe=T.getViewport(ge);else{const ne=v.getViewSubImage(_,ge);xe=ne.viewport,he===0&&(e.setRenderTargetTextures(C,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(C))}let te=K[he];te===void 0&&(te=new Ti,te.layers.enable(he),te.viewport=new an,K[he]=te),te.matrix.fromArray(ge.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ge.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(xe.x,xe.y,xe.width,xe.height),he===0&&(ot.matrix.copy(te.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale)),It===!0&&ot.cameras.push(te)}const _t=u.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&O){v=s.getBinding();const he=v.getDepthInformation(Tt[0]);he&&he.isValid&&he.texture&&y.init(he,u.renderState)}if(_t&&_t.includes("camera-access")&&O){e.state.unbindTexture(),v=s.getBinding();for(let he=0;he<Tt.length;he++){const ge=Tt[he].camera;if(ge){let xe=M[ge];xe||(xe=new ZS,M[ge]=xe);const te=v.getCameraImage(ge);xe.sourceTexture=te}}}}for(let Tt=0;Tt<L.length;Tt++){const It=N[Tt],_t=L[Tt];It!==null&&_t!==void 0&&_t.update(It,ht,m||d)}F&&F(J,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),R=null}const At=new jS;At.setAnimationLoop(mt),this.setAnimationLoop=function(J){F=J},this.dispose=function(){}}}const vC=new rn,rx=new ce;rx.set(-1,0,0,0,1,0,0,0,1);function SC(o,e){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,KS(o)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function u(y,M,D,B,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?f(y,M):M.isMeshLambertMaterial?(f(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(f(y,M),v(y,M)):M.isMeshPhongMaterial?(f(y,M),S(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(f(y,M),_(y,M),M.isMeshPhysicalMaterial&&T(y,M,C)):M.isMeshMatcapMaterial?(f(y,M),R(y,M)):M.isMeshDepthMaterial?f(y,M):M.isMeshDistanceMaterial?(f(y,M),O(y,M)):M.isMeshNormalMaterial?f(y,M):M.isLineBasicMaterial?(d(y,M),M.isLineDashedMaterial&&h(y,M)):M.isPointsMaterial?g(y,M,D,B):M.isSpriteMaterial?m(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Jn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Jn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const D=e.get(M),B=D.envMap,C=D.envMapRotation;B&&(y.envMap.value=B,y.envMapRotation.value.setFromMatrix4(vC.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(rx),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function h(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function g(y,M,D,B){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*D,y.scale.value=B*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function S(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function v(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function _(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function T(y,M,D){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Jn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.retroreflectivity>0&&(y.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,M){M.matcap&&(y.matcap.value=M.matcap)}function O(y,M){const D=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function xC(o,e,i,s){let u={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(C,L){const N=L.program;s.uniformBlockBinding(C,N)}function m(C,L){let N=u[C.id];N===void 0&&(y(C),N=S(C),u[C.id]=N,C.addEventListener("dispose",D));const U=L.program;s.updateUBOMapping(C,U);const x=e.render.frame;f[C.id]!==x&&(_(C),f[C.id]=x)}function S(C){const L=v();C.__bindingPointIndex=L;const N=o.createBuffer(),U=C.__size,x=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,U,x),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,N),N}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const L=u[C.id],N=C.uniforms,U=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let x=0,w=N.length;x<w;x++){const z=N[x];if(Array.isArray(z))for(let G=0,K=z.length;G<K;G++)T(z[G],x,G,U);else T(z,x,0,U)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function T(C,L,N,U){if(O(C,L,N,U)===!0){const x=C.__offset,w=C.value;if(Array.isArray(w)){let z=0;for(let G=0;G<w.length;G++){const K=w[G],ot=M(K);R(K,C.__data,z),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(z+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(w,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,x,C.__data)}}function R(C,L,N){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,N)}function O(C,L,N,U){const x=C.value,w=L+"_"+N;if(U[w]===void 0)return typeof x=="number"||typeof x=="boolean"?U[w]=x:ArrayBuffer.isView(x)?U[w]=x.slice():U[w]=x.clone(),!0;{const z=U[w];if(typeof x=="number"||typeof x=="boolean"){if(z!==x)return U[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(z.equals(x)===!1)return z.copy(x),!0}}return!1}function y(C){const L=C.uniforms;let N=0;const U=16;for(let w=0,z=L.length;w<z;w++){const G=Array.isArray(L[w])?L[w]:[L[w]];for(let K=0,ot=G.length;K<ot;K++){const q=G[K],Q=Array.isArray(q.value)?q.value:[q.value];for(let X=0,Y=Q.length;X<Y;X++){const ut=Q[X],nt=M(ut),dt=N%U,yt=dt%nt.boundary,Qt=dt+yt;N+=yt,Qt!==0&&U-Qt<nt.storage&&(N+=U-Qt),q.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=nt.storage}}}const x=N%U;return x>0&&(N+=U-x),C.__size=N,C.__cache={},this}function M(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):se("WebGLRenderer: Unsupported uniform value type.",C),L}function D(C){const L=C.target;L.removeEventListener("dispose",D);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(u[L.id]),delete u[L.id],delete f[L.id]}function B(){for(const C in u)o.deleteBuffer(u[C]);d=[],u={},f={}}return{bind:g,update:m,dispose:B}}const MC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ta=null;function yC(){return ta===null&&(ta=new lT(MC,16,16,Qr,oa),ta.name="DFG_LUT",ta.minFilter=zn,ta.magFilter=zn,ta.wrapS=Da,ta.wrapT=Da,ta.generateMipmaps=!1,ta.needsUpdate=!0),ta}class EC{constructor(e={}){const{canvas:i=IE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:T=fi}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=d;const O=T,y=new Set([zp,Ip,Pp]),M=new Set([fi,sa,pl,ml,Lp,Op]),D=new Uint32Array(4),B=new Int32Array(4),C=new at;let L=null,N=null;const U=[],x=[];let w=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,K=null,ot=null,q=null,Q=null;this._outputColorSpace=ci;let X=0,Y=0,ut=null,nt=-1,dt=null;const yt=new an,Qt=new an;let Yt=null;const F=new Le(0);let mt=0,At=i.width,J=i.height,ht=1,Tt=null,It=null;const _t=new an(0,0,At,J),Rt=new an(0,0,At,J);let Ge=!1;const he=new Xp;let ge=!1,xe=!1;const te=new rn,ne=new at,Ve=new an,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function $e(){return ut===null?ht:1}let W=s;function en(b,H){return i.getContext(b,H)}let Oe,P,E,tt,lt,pt,bt,Dt,gt,Mt,wt,jt,Pt,Ot,Vt,ee,oe,k,Ct,xt,Ut,Gt,Et;try{const b={alpha:!0,depth:u,stencil:f,antialias:h,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Up}`),i.addEventListener("webglcontextlost",Ce,!1),i.addEventListener("webglcontextrestored",le,!1),i.addEventListener("webglcontextcreationerror",jn,!1),W===null){const H="webgl2";if(W=en(H,b),W===null)throw en(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(b){throw i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",le,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),Ie("WebGLRenderer: "+b.message),b}function Jt(){Oe=new yA(W),Oe.init(),Ut=new hC(W,Oe),P=new dA(W,Oe,e,Ut),E=new fC(W,Oe),P.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ot=W.createFramebuffer(),q=W.createFramebuffer(),Q=W.createFramebuffer(),tt=new bA(W),lt=new JR,pt=new dC(W,Oe,E,lt,P,Ut,tt),bt=new MA(z),Dt=new RT(W),Gt=new cA(W,Dt),gt=new EA(W,Dt,tt,Gt),Mt=new RA(W,gt,Dt,Gt,tt),k=new AA(W,P,pt),Vt=new hA(lt),wt=new QR(z,bt,Oe,P,Gt,Vt),jt=new SC(z,lt),Pt=new $R,Ot=new rC(Oe),oe=new uA(z,bt,E,Mt,R,g),ee=new cC(z,Mt,P),Et=new xC(W,tt,P,E),Ct=new fA(W,Oe,tt),xt=new TA(W,Oe,tt),tt.programs=wt.programs,z.capabilities=P,z.extensions=Oe,z.properties=lt,z.renderLists=Pt,z.shadowMap=ee,z.state=E,z.info=tt}O!==fi&&(w=new wA(O,i.width,i.height,h,u,f));const Ht=new _C(z,W);this.xr=Ht,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=Oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(At,J,!1))},this.getSize=function(b){return b.set(At,J)},this.setSize=function(b,H,ft=!0){if(Ht.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}At=b,J=H,i.width=Math.floor(b*ht),i.height=Math.floor(H*ht),ft===!0&&(i.style.width=b+"px",i.style.height=H+"px"),w!==null&&w.setSize(i.width,i.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(At*ht,J*ht).floor()},this.setDrawingBufferSize=function(b,H,ft){At=b,J=H,ht=ft,i.width=Math.floor(b*ft),i.height=Math.floor(H*ft),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(O===fi){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){se("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(yt)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,H,ft,it){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,H,ft,it),E.viewport(yt.copy(_t).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,H,ft,it){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,H,ft,it),E.scissor(Qt.copy(Rt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(b){E.setScissorTest(Ge=b)},this.setOpaqueSort=function(b){Tt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,ft=!0){let it=0;if(b){let rt=!1;if(ut!==null){const zt=ut.texture.format;rt=y.has(zt)}if(rt){const zt=ut.texture.type,Xt=M.has(zt),Nt=oe.getClearColor(),qt=oe.getClearAlpha(),Zt=Nt.r,ae=Nt.g,ue=Nt.b;Xt?(D[0]=Zt,D[1]=ae,D[2]=ue,D[3]=qt,W.clearBufferuiv(W.COLOR,0,D)):(B[0]=Zt,B[1]=ae,B[2]=ue,B[3]=qt,W.clearBufferiv(W.COLOR,0,B))}else it|=W.COLOR_BUFFER_BIT}H&&(it|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(it|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&W.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),K=b},this.dispose=function(){i.removeEventListener("webglcontextlost",Ce,!1),i.removeEventListener("webglcontextrestored",le,!1),i.removeEventListener("webglcontextcreationerror",jn,!1),oe.dispose(),Pt.dispose(),Ot.dispose(),lt.dispose(),bt.dispose(),Mt.dispose(),Gt.dispose(),Et.dispose(),wt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Sr),Ht.removeEventListener("sessionend",za),Fi.stop()};function Ce(b){b.preventDefault(),bv("WebGLRenderer: Context Lost."),G=!0}function le(){bv("WebGLRenderer: Context Restored."),G=!1;const b=tt.autoReset,H=ee.enabled,ft=ee.autoUpdate,it=ee.needsUpdate,rt=ee.type;Jt(),tt.autoReset=b,ee.enabled=H,ee.autoUpdate=ft,ee.needsUpdate=it,ee.type=rt}function jn(b){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function di(b){const H=b.target;H.removeEventListener("dispose",di),wc(H)}function wc(b){jr(b),lt.remove(b)}function jr(b){const H=lt.get(b).programs;H!==void 0&&(H.forEach(function(ft){wt.releaseProgram(ft)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,ft,it,rt,zt){H===null&&(H=fn);const Xt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Nt=fo(b,H,ft,it,rt);E.setMaterial(it,Xt);let qt=ft.index,Zt=1;if(it.wireframe===!0){if(qt=gt.getWireframeAttribute(ft),qt===void 0)return;Zt=2}const ae=ft.drawRange,ue=ft.attributes.position;let kt=ae.start*Zt,Me=(ae.start+ae.count)*Zt;zt!==null&&(kt=Math.max(kt,zt.start*Zt),Me=Math.min(Me,(zt.start+zt.count)*Zt)),qt!==null?(kt=Math.max(kt,0),Me=Math.min(Me,qt.count)):ue!=null&&(kt=Math.max(kt,0),Me=Math.min(Me,ue.count));const _e=Me-kt;if(_e<0||_e===1/0)return;Gt.setup(rt,it,Nt,ft,qt);let Ye,Fe=Ct;if(qt!==null&&(Ye=Dt.get(qt),Fe=xt,Fe.setIndex(Ye)),rt.isMesh)it.wireframe===!0?(E.setLineWidth(it.wireframeLinewidth*$e()),Fe.setMode(W.LINES)):Fe.setMode(W.TRIANGLES);else if(rt.isLine){let _n=it.linewidth;_n===void 0&&(_n=1),E.setLineWidth(_n*$e()),rt.isLineSegments?Fe.setMode(W.LINES):rt.isLineLoop?Fe.setMode(W.LINE_LOOP):Fe.setMode(W.LINE_STRIP)}else rt.isPoints?Fe.setMode(W.POINTS):rt.isSprite&&Fe.setMode(W.TRIANGLES);if(rt.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))Fe.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const _n=rt._multiDrawStarts,Bt=rt._multiDrawCounts,sn=rt._multiDrawCount,we=qt?Dt.get(qt).bytesPerElement:1,Fn=lt.get(it).currentProgram.getUniforms();for(let $n=0;$n<sn;$n++)Fn.setValue(W,"_gl_DrawID",$n),Fe.render(_n[$n]/we,Bt[$n])}else if(rt.isInstancedMesh)Fe.renderInstances(kt,_e,rt.count);else if(ft.isInstancedBufferGeometry){const _n=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Bt=Math.min(ft.instanceCount,_n);Fe.renderInstances(kt,_e,Bt)}else Fe.render(kt,_e)};function vr(b,H,ft,it){K!==null&&b.isNodeMaterial&&K.setObject(it,b),ge===!0&&Vt.setState(b,ft,!1),b.transparent===!0&&b.side===na&&b.forceSinglePass===!1?(b.side=Jn,b.needsUpdate=!0,xr(b,H,it),b.side=Zr,b.needsUpdate=!0,xr(b,H,it),b.side=na):xr(b,H,it)}this.compile=function(b,H,ft=null){ft===null&&(ft=b),K!==null&&K.renderStart(b,H,ft),N=Ot.get(ft),N.init(H),x.push(N),ft.traverseVisible(function(rt){rt.isLight&&rt.layers.test(H.layers)&&(N.pushLight(rt),rt.castShadow&&N.pushShadow(rt))}),b!==ft&&b.traverseVisible(function(rt){rt.isLight&&rt.layers.test(H.layers)&&(N.pushLight(rt),rt.castShadow&&N.pushShadow(rt))}),N.setupLights(),K!==null&&K.updateLights(N.state.lightsArray),xe=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,xe),ge===!0&&Vt.setGlobalState(this.clippingPlanes,H),K!==null&&ee.render(N.state.shadowsArray,ft,H);const it=new Set;return b.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const zt=rt.material;if(zt)if(Array.isArray(zt))for(let Xt=0;Xt<zt.length;Xt++){const Nt=zt[Xt];vr(Nt,ft,H,rt),it.add(Nt)}else vr(zt,ft,H,rt),it.add(zt)}),N=x.pop(),K!==null&&K.renderEnd(),it},this.compileAsync=function(b,H,ft=null){const it=this.compile(b,H,ft);return new Promise(rt=>{function zt(){if(it.forEach(function(Xt){const qt=lt.get(Xt).currentProgram;(qt===void 0||qt.isReady())&&it.delete(Xt)}),it.size===0){rt(b);return}setTimeout(zt,10)}Oe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Ia=null;function ca(b){Ia&&Ia(b)}function Sr(){Fi.stop()}function za(){Fi.start()}const Fi=new jS;Fi.setAnimationLoop(ca),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(b){Ia=b,Ht.setAnimationLoop(b),b===null?Fi.stop():Fi.start()},Ht.addEventListener("sessionstart",Sr),Ht.addEventListener("sessionend",za),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(b,H);const ft=Ht.enabled===!0&&Ht.isPresenting===!0,it=w!==null&&(ut===null||ft)&&w.begin(z,ut);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(H),H=Ht.getCamera()),b.isScene===!0&&b.onBeforeRender(z,b,H,ut),N=Ot.get(b,x.length),N.init(H),N.state.textureUnits=pt.getTextureUnits(),x.push(N),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),he.setFromProjectionMatrix(te,aa,H.reversedDepth),xe=this.localClippingEnabled,ge=Vt.init(this.clippingPlanes,xe),L=Pt.get(b,U.length),L.init(),U.push(L),Ht.enabled===!0&&Ht.isPresenting===!0){const Xt=z.xr.getDepthSensingMesh();Xt!==null&&so(Xt,H,-1/0,z.sortObjects)}so(b,H,0,z.sortObjects),L.finish(),K!==null&&K.updateLights(N.state.lightsArray),z.sortObjects===!0&&L.sort(Tt,It),Pe=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Pe&&oe.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Vt.beginShadows();const rt=N.state.shadowsArray;if(ee.render(rt,b,H),ge===!0&&Vt.endShadows(),(it&&w.hasRenderPass())===!1){const Xt=L.opaque,Nt=L.transmissive;if(N.setupLights(),H.isArrayCamera){const qt=H.cameras;if(Nt.length>0)for(let Zt=0,ae=qt.length;Zt<ae;Zt++){const ue=qt[Zt];$r(Xt,Nt,b,ue)}Pe&&oe.render(b);for(let Zt=0,ae=qt.length;Zt<ae;Zt++){const ue=qt[Zt];oo(L,b,ue,ue.viewport)}}else Nt.length>0&&$r(Xt,Nt,b,H),Pe&&oe.render(b),oo(L,b,H)}ut!==null&&Y===0&&(pt.updateMultisampleRenderTarget(ut),pt.updateRenderTargetMipmap(ut)),it&&w.end(z),b.isScene===!0&&b.onAfterRender(z,b,H),Gt.resetDefaultState(),nt=-1,dt=null,x.pop(),x.length>0?(N=x[x.length-1],pt.setTextureUnits(N.state.textureUnits),ge===!0&&Vt.setGlobalState(z.clippingPlanes,N.state.camera)):N=null,U.pop(),U.length>0?L=U[U.length-1]:L=null,K!==null&&K.renderEnd()};function so(b,H,ft,it){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)ft=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLightProbeGrid)N.pushLightProbeGrid(b);else if(b.isLight)N.pushLight(b),b.castShadow&&N.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(he)){it&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(te);const Xt=Mt.update(b),Nt=b.material;Nt.visible&&L.push(b,Xt,Nt,ft,Ve.z,null,H)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(he))){const Xt=Mt.update(b),Nt=b.material;if(it&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Ve.copy(Xt.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(te)),Array.isArray(Nt)){const qt=Xt.groups;for(let Zt=0,ae=qt.length;Zt<ae;Zt++){const ue=qt[Zt],kt=Nt[ue.materialIndex];kt&&kt.visible&&L.push(b,Xt,kt,ft,Ve.z,ue,H)}}else Nt.visible&&L.push(b,Xt,Nt,ft,Ve.z,null,H)}}const zt=b.children;for(let Xt=0,Nt=zt.length;Xt<Nt;Xt++)so(zt[Xt],H,ft,it)}function oo(b,H,ft,it){const{opaque:rt,transmissive:zt,transparent:Xt}=b;N.setupLightsView(ft),ge===!0&&Vt.setGlobalState(z.clippingPlanes,ft),it&&E.viewport(yt.copy(it)),rt.length>0&&Hi(rt,H,ft),zt.length>0&&Hi(zt,H,ft),Xt.length>0&&Hi(Xt,H,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function $r(b,H,ft,it){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[it.id]===void 0){const kt=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[it.id]=new zi(1,1,{generateMipmaps:!0,type:kt?oa:fi,minFilter:qr,samples:Math.max(4,P.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:De.workingColorSpace})}const zt=N.state.transmissionRenderTarget[it.id],Xt=it.viewport||yt;zt.setSize(Xt.z*z.transmissionResolutionScale,Xt.w*z.transmissionResolutionScale);const Nt=z.getRenderTarget(),qt=z.getActiveCubeFace(),Zt=z.getActiveMipmapLevel();z.setRenderTarget(zt),z.getClearColor(F),mt=z.getClearAlpha(),mt<1&&z.setClearColor(16777215,.5),z.clear(),Pe&&oe.render(ft);const ae=z.toneMapping;z.toneMapping=ra;const ue=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),N.setupLightsView(it),ge===!0&&Vt.setGlobalState(z.clippingPlanes,it),Hi(b,ft,it),pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Me=0,_e=H.length;Me<_e;Me++){const Ye=H[Me],{object:Fe,geometry:_n,material:Bt,group:sn}=Ye;if(Bt.side===na&&Fe.layers.test(it.layers)){const we=Bt.side;Bt.side=Jn,Bt.needsUpdate=!0,El(Fe,ft,it,_n,Bt,sn),Bt.side=we,Bt.needsUpdate=!0,kt=!0}}kt===!0&&(pt.updateMultisampleRenderTarget(zt),pt.updateRenderTargetMipmap(zt))}z.setRenderTarget(Nt,qt,Zt),z.setClearColor(F,mt),ue!==void 0&&(it.viewport=ue),z.toneMapping=ae}function Hi(b,H,ft){const it=H.isScene===!0?H.overrideMaterial:null;for(let rt=0,zt=b.length;rt<zt;rt++){const Xt=b[rt],{object:Nt,geometry:qt,group:Zt}=Xt;let ae=Xt.material;ae.allowOverride===!0&&it!==null&&(ae=it),Nt.layers.test(ft.layers)&&El(Nt,H,ft,qt,ae,Zt)}}function El(b,H,ft,it,rt,zt){K!==null&&rt.isNodeMaterial&&K.setObject(b,rt),b.onBeforeRender(z,H,ft,it,rt,zt),b.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),rt.onBeforeRender(z,H,ft,it,b,zt),rt.transparent===!0&&rt.side===na&&rt.forceSinglePass===!1?(rt.side=Jn,rt.needsUpdate=!0,z.renderBufferDirect(ft,H,it,rt,b,zt),rt.side=Zr,rt.needsUpdate=!0,z.renderBufferDirect(ft,H,it,rt,b,zt),rt.side=na):z.renderBufferDirect(ft,H,it,rt,b,zt),b.onAfterRender(z,H,ft,it,rt,zt)}function xr(b,H,ft){H.isScene!==!0&&(H=fn);const it=lt.get(b),rt=N.state.lights,zt=N.state.shadowsArray,Xt=rt.state.version,Nt=wt.getParameters(b,rt.state,zt,H,ft,N.state.lightProbeGridArray),qt=wt.getProgramCacheKey(Nt);let Zt=it.programs;it.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,it.fog=H.fog;const ae=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;it.envMap=bt.get(b.envMap||it.environment,ae),it.envMapRotation=it.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",di),Zt=new Map,it.programs=Zt);let ue=Zt.get(qt);if(ue!==void 0){if(it.currentProgram===ue&&it.lightsStateVersion===Xt)return uo(b,Nt),ue}else Nt.uniforms=wt.getUniforms(b),K!==null&&b.isNodeMaterial&&K.build(b,ft,Nt),b.onBeforeCompile(Nt,z),ue=wt.acquireProgram(Nt,qt),Zt.set(qt,ue),it.uniforms=Nt.uniforms;const kt=it.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=Vt.uniform),uo(b,Nt),it.needsLights=bl(b),it.lightsStateVersion=Xt,it.needsLights&&(kt.ambientLightColor.value=rt.state.ambient,kt.lightProbe.value=rt.state.probe,kt.sunLights.value=rt.state.sun,kt.sunLightShadows.value=rt.state.sunShadow,kt.directionalLights.value=rt.state.directional,kt.directionalLightShadows.value=rt.state.directionalShadow,kt.spotLights.value=rt.state.spot,kt.spotLightShadows.value=rt.state.spotShadow,kt.rectAreaLights.value=rt.state.rectArea,kt.ltc_1.value=rt.state.rectAreaLTC1,kt.ltc_2.value=rt.state.rectAreaLTC2,kt.pointLights.value=rt.state.point,kt.pointLightShadows.value=rt.state.pointShadow,kt.hemisphereLights.value=rt.state.hemi,kt.sunShadowMatrix.value=rt.state.sunShadowMatrix,kt.sunShadowCascade.value=rt.state.sunShadowCascade,kt.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,kt.spotLightMatrix.value=rt.state.spotLightMatrix,kt.spotLightMap.value=rt.state.spotLightMap,kt.pointShadowMatrix.value=rt.state.pointShadowMatrix),it.lightProbeGrid=N.state.lightProbeGridArray.length>0,it.currentProgram=ue,it.uniformsList=null,ue}function lo(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Sc.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function uo(b,H){const ft=lt.get(b);ft.outputColorSpace=H.outputColorSpace,ft.batching=H.batching,ft.batchingColor=H.batchingColor,ft.instancing=H.instancing,ft.instancingColor=H.instancingColor,ft.instancingMorph=H.instancingMorph,ft.skinning=H.skinning,ft.morphTargets=H.morphTargets,ft.morphNormals=H.morphNormals,ft.morphColors=H.morphColors,ft.morphTargetsCount=H.morphTargetsCount,ft.numClippingPlanes=H.numClippingPlanes,ft.numIntersection=H.numClipIntersection,ft.vertexAlphas=H.vertexAlphas,ft.vertexTangents=H.vertexTangents,ft.toneMapping=H.toneMapping}function co(b,H){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let ft=0,it=b.length;ft<it;ft++){const rt=b[ft];if(rt.texture!==null&&rt.boundingBox.containsPoint(C))return rt}return null}function fo(b,H,ft,it,rt){H.isScene!==!0&&(H=fn),pt.resetTextureUnits();const zt=H.fog,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?H.environment:null,Nt=ut===null?z.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:De.workingColorSpace,qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Zt=bt.get(it.envMap||Xt,qt),ae=it.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ue=!!ft.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),kt=!!ft.morphAttributes.position,Me=!!ft.morphAttributes.normal,_e=!!ft.morphAttributes.color;let Ye=ra;it.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ye=z.toneMapping);const Fe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,_n=Fe!==void 0?Fe.length:0,Bt=lt.get(it),sn=N.state.lights;if(ge===!0&&(xe===!0||b!==dt)){const be=b===dt&&it.id===nt;Vt.setState(it,b,be)}let we=!1;it.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==sn.state.version||Bt.outputColorSpace!==Nt||rt.isBatchedMesh&&Bt.batching===!1||!rt.isBatchedMesh&&Bt.batching===!0||rt.isBatchedMesh&&Bt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Bt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Bt.instancing===!1||!rt.isInstancedMesh&&Bt.instancing===!0||rt.isSkinnedMesh&&Bt.skinning===!1||!rt.isSkinnedMesh&&Bt.skinning===!0||rt.isInstancedMesh&&Bt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Bt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Bt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Bt.instancingMorph===!1&&rt.morphTexture!==null||Bt.envMap!==Zt||it.fog===!0&&Bt.fog!==zt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Vt.numPlanes||Bt.numIntersection!==Vt.numIntersection)||Bt.vertexAlphas!==ae||Bt.vertexTangents!==ue||Bt.morphTargets!==kt||Bt.morphNormals!==Me||Bt.morphColors!==_e||Bt.toneMapping!==Ye||Bt.morphTargetsCount!==_n||!!Bt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Bt.__version=it.version);let Fn=Bt.currentProgram;we===!0&&(Fn=xr(it,H,rt),K&&it.isNodeMaterial&&K.onUpdateProgram(it,Fn,Bt));let $n=!1,Gi=!1,ve=!1;const ze=Fn.getUniforms(),Qe=Bt.uniforms;if(E.useProgram(Fn.program)&&($n=!0,Gi=!0,ve=!0),it.id!==nt&&(nt=it.id,Gi=!0),Bt.needsLights){const be=co(N.state.lightProbeGridArray,rt);Bt.lightProbeGrid!==be&&(Bt.lightProbeGrid=be,Gi=!0)}if($n||dt!==b){E.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ze.setValue(W,"projectionMatrix",b.projectionMatrix),ze.setValue(W,"viewMatrix",b.matrixWorldInverse);const on=ze.map.cameraPosition;on!==void 0&&on.setValue(W,ne.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&ze.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ze.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),dt!==b&&(dt=b,Gi=!0,ve=!0)}if(Bt.needsLights&&(sn.state.sunShadowMap.length>0&&ze.setValue(W,"sunShadowMap",sn.state.sunShadowMap,pt),sn.state.directionalShadowMap.length>0&&ze.setValue(W,"directionalShadowMap",sn.state.directionalShadowMap,pt),sn.state.spotShadowMap.length>0&&ze.setValue(W,"spotShadowMap",sn.state.spotShadowMap,pt),sn.state.pointShadowMap.length>0&&ze.setValue(W,"pointShadowMap",sn.state.pointShadowMap,pt)),rt.isSkinnedMesh){ze.setOptional(W,rt,"bindMatrix"),ze.setOptional(W,rt,"bindMatrixInverse");const be=rt.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ze.setValue(W,"boneTexture",be.boneTexture,pt))}rt.isBatchedMesh&&(ze.setOptional(W,rt,"batchingTexture"),ze.setValue(W,"batchingTexture",rt._matricesTexture,pt),ze.setOptional(W,rt,"batchingIdTexture"),ze.setValue(W,"batchingIdTexture",rt._indirectTexture,pt),ze.setOptional(W,rt,"batchingColorTexture"),rt._colorsTexture!==null&&ze.setValue(W,"batchingColorTexture",rt._colorsTexture,pt));const ti=ft.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&k.update(rt,ft,Fn),(Gi||Bt.receiveShadow!==rt.receiveShadow)&&(Bt.receiveShadow=rt.receiveShadow,ze.setValue(W,"receiveShadow",rt.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&H.environment!==null&&(Qe.envMapIntensity.value=H.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=yC()),Gi){if(ze.setValue(W,"toneMappingExposure",z.toneMappingExposure),Bt.needsLights&&Tl(Qe,ve),zt&&it.fog===!0&&jt.refreshFogUniforms(Qe,zt),jt.refreshMaterialUniforms(Qe,it,ht,J,N.state.transmissionRenderTarget[b.id]),Bt.needsLights&&Bt.lightProbeGrid){const be=Bt.lightProbeGrid;Qe.probesSH.value=be.texture,Qe.probesMin.value.copy(be.boundingBox.min),Qe.probesMax.value.copy(be.boundingBox.max),Qe.probesResolution.value.copy(be.resolution)}Sc.upload(W,lo(Bt),Qe,pt)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Sc.upload(W,lo(Bt),Qe,pt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ze.setValue(W,"center",rt.center),ze.setValue(W,"modelViewMatrix",rt.modelViewMatrix),ze.setValue(W,"normalMatrix",rt.normalMatrix),ze.setValue(W,"modelMatrix",rt.matrixWorld),it.uniformsGroups!==void 0){const be=it.uniformsGroups;for(let on=0,fa=be.length;on<fa;on++){const Al=be[on];Et.update(Al,Fn),Et.bind(Al,Fn)}}return Fn}function Tl(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.sunLights.needsUpdate=H,b.sunLightShadows.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function bl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(b,H,ft){const it=lt.get(b);it.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),lt.get(b.texture).__webglTexture=H,lt.get(b.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ft,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const ft=lt.get(b);ft.__webglFramebuffer=H,ft.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,ft=0){ut=b,X=H,Y=ft;let it=null,rt=!1,zt=!1;if(b){const Nt=lt.get(b);if(Nt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Nt.__webglFramebuffer),yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest,E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),nt=-1;return}else if(Nt.__webglFramebuffer===void 0)pt.setupRenderTarget(b);else if(Nt.__hasExternalTextures)pt.rebindTextures(b,lt.get(b.texture).__webglTexture,lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ae=b.depthTexture;if(Nt.__boundDepthTexture!==ae){if(ae!==null&&lt.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(b)}}const qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(zt=!0);const Zt=lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[H])?it=Zt[H][ft]:it=Zt[H],rt=!0):b.samples>0&&pt.useMultisampledRTT(b)===!1?it=lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?it=Zt[ft]:it=Zt,yt.copy(b.viewport),Qt.copy(b.scissor),Yt=b.scissorTest}else yt.copy(_t).multiplyScalar(ht).floor(),Qt.copy(Rt).multiplyScalar(ht).floor(),Yt=Ge;if(ft!==0&&(it=ot),E.bindFramebuffer(W.FRAMEBUFFER,it)&&E.drawBuffers(b,it),E.viewport(yt),E.scissor(Qt),E.setScissorTest(Yt),rt){const Nt=lt.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,Nt.__webglTexture,ft)}else if(zt){const Nt=H;for(let qt=0;qt<b.textures.length;qt++){const Zt=lt.get(b.textures[qt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,ft,Nt)}}else if(b!==null&&ft!==0){const Nt=lt.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Nt.__webglTexture,ft)}nt=-1};function hi(b){const H=lt.get(b);return(H.__readFormat!==b.format||H.__readType!==b.type)&&(H.__readFormat=b.format,H.__readType=b.type,H.__formatReadable=P.textureFormatReadable(b.format),H.__typeReadable=P.textureTypeReadable(b.type)),H}this.readRenderTargetPixels=function(b,H,ft,it,rt,zt,Xt,Nt=0){if(!(b&&b.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt){E.bindFramebuffer(W.FRAMEBUFFER,qt);try{const Zt=b.textures[Nt],ae=Zt.format,ue=Zt.type;b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Nt);const kt=hi(Zt);if(kt.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-it&&ft>=0&&ft<=b.height-rt&&W.readPixels(H,ft,it,rt,Ut.convert(ae),Ut.convert(ue),zt)}finally{const Zt=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(b,H,ft,it,rt,zt,Xt,Nt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt)if(H>=0&&H<=b.width-it&&ft>=0&&ft<=b.height-rt){E.bindFramebuffer(W.FRAMEBUFFER,qt);const Zt=b.textures[Nt],ae=Zt.format,ue=Zt.type;b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Nt);const kt=hi(Zt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Me),W.bufferData(W.PIXEL_PACK_BUFFER,zt.byteLength,W.STREAM_READ),W.readPixels(H,ft,it,rt,Ut.convert(ae),Ut.convert(ue),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const _e=ut!==null?lt.get(ut).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,_e);const Ye=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await zE(W,Ye,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Me),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,zt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Me),W.deleteSync(Ye),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,ft=0){const it=Math.pow(2,-ft),rt=Math.floor(b.image.width*it),zt=Math.floor(b.image.height*it),Xt=H!==null?H.x:0,Nt=H!==null?H.y:0;pt.setTexture2D(b,0),W.copyTexSubImage2D(W.TEXTURE_2D,ft,0,0,Xt,Nt,rt,zt),E.unbindTexture()},this.copyTextureToTexture=function(b,H,ft=null,it=null,rt=0,zt=0){let Xt,Nt,qt,Zt,ae,ue,kt,Me,_e;const Ye=b.isCompressedTexture?b.mipmaps[zt]:b.image;if(ft!==null)Xt=ft.max.x-ft.min.x,Nt=ft.max.y-ft.min.y,qt=ft.isBox3?ft.max.z-ft.min.z:1,Zt=ft.min.x,ae=ft.min.y,ue=ft.isBox3?ft.min.z:0;else{const Qe=Math.pow(2,-rt);Xt=Math.floor(Ye.width*Qe),Nt=Math.floor(Ye.height*Qe),b.isDataArrayTexture?qt=Ye.depth:b.isData3DTexture?qt=Math.floor(Ye.depth*Qe):qt=1,Zt=0,ae=0,ue=0}it!==null?(kt=it.x,Me=it.y,_e=it.z):(kt=0,Me=0,_e=0);const Fe=Ut.convert(H.format),_n=Ut.convert(H.type);let Bt;H.isData3DTexture?(pt.setTexture3D(H,0),Bt=W.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(pt.setTexture2DArray(H,0),Bt=W.TEXTURE_2D_ARRAY):(pt.setTexture2D(H,0),Bt=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const sn=E.getParameter(W.UNPACK_ROW_LENGTH),we=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Fn=E.getParameter(W.UNPACK_SKIP_PIXELS),$n=E.getParameter(W.UNPACK_SKIP_ROWS),Gi=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Ye.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ye.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Zt),E.pixelStorei(W.UNPACK_SKIP_ROWS,ae),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ue);const ve=b.isDataArrayTexture||b.isData3DTexture,ze=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Qe=lt.get(b),ti=lt.get(H),be=lt.get(Qe.__renderTarget),on=lt.get(ti.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,be.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let fa=0;fa<qt;fa++)ve&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,lt.get(b).__webglTexture,rt,ue+fa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,lt.get(H).__webglTexture,zt,_e+fa)),W.blitFramebuffer(Zt,ae,Xt,Nt,kt,Me,Xt,Nt,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(rt!==0||b.isRenderTargetTexture||lt.has(b)){const Qe=lt.get(b),ti=lt.get(H);E.bindFramebuffer(W.READ_FRAMEBUFFER,q),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Q);for(let be=0;be<qt;be++)ve?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.__webglTexture,rt,ue+be):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qe.__webglTexture,rt),ze?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ti.__webglTexture,zt,_e+be):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ti.__webglTexture,zt),rt!==0?W.blitFramebuffer(Zt,ae,Xt,Nt,kt,Me,Xt,Nt,W.COLOR_BUFFER_BIT,W.NEAREST):ze?W.copyTexSubImage3D(Bt,zt,kt,Me,_e+be,Zt,ae,Xt,Nt):W.copyTexSubImage2D(Bt,zt,kt,Me,Zt,ae,Xt,Nt);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ze?b.isDataTexture||b.isData3DTexture?W.texSubImage3D(Bt,zt,kt,Me,_e,Xt,Nt,qt,Fe,_n,Ye.data):H.isCompressedArrayTexture?W.compressedTexSubImage3D(Bt,zt,kt,Me,_e,Xt,Nt,qt,Fe,Ye.data):W.texSubImage3D(Bt,zt,kt,Me,_e,Xt,Nt,qt,Fe,_n,Ye):b.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,zt,kt,Me,Xt,Nt,Fe,_n,Ye.data):b.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,zt,kt,Me,Ye.width,Ye.height,Fe,Ye.data):W.texSubImage2D(W.TEXTURE_2D,zt,kt,Me,Xt,Nt,Fe,_n,Ye);E.pixelStorei(W.UNPACK_ROW_LENGTH,sn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,we),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Fn),E.pixelStorei(W.UNPACK_SKIP_ROWS,$n),E.pixelStorei(W.UNPACK_SKIP_IMAGES,Gi),zt===0&&H.generateMipmaps&&W.generateMipmap(Bt),E.unbindTexture()},this.initRenderTarget=function(b){lt.get(b).__webglFramebuffer===void 0&&pt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?pt.setTextureCube(b,0):b.isData3DTexture?pt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?pt.setTexture2DArray(b,0):pt.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){X=0,Y=0,ut=null,E.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const mS=65,gS=.5,_S=10,TC=1500,bC=750,AC=260,no=Math.PI/180,RC=1.08,vS=.864,SS=(o,e,i)=>Math.min(i,Math.max(e,o)),xS=o=>1-(1-o)**3,CC=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],wC=o=>{const e=new at(...o).normalize(),i=Math.abs(e.y)>.9?new at(0,0,1):new at(0,1,0),s=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),u=new at().crossVectors(s,e).normalize(),f=new rn().makeBasis(u,s,e);return{normal:e,up:s,orientation:new _r().setFromRotationMatrix(f)}},MS=CC.map(wC),DC=o=>{const e=new at(0,0,1);return new _r().setFromUnitVectors(o.normal,e)},UC=o=>{const e=document.createElement("canvas");e.width=256,e.height=256;const i=e.getContext("2d");if(!i)return null;i.font="700 252px dice-font, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillStyle="#ecfdf5",i.shadowColor="rgba(0, 0, 0, 0.35)",i.shadowBlur=6,i.fillText(String(o),128,128);const s=new cT(e);s.colorSpace=ci;const u=new Vp({map:s,transparent:!0,side:na,depthWrite:!1});return new Bi(new yl(vS,vS),u)},NC=o=>{const e=new Pa().setFromQuaternion(o,"XYZ");return{x:e.x/no,y:e.y/no,z:e.z/no}};function LC(){const o=me.useRef(null),e=me.useRef(null),i=me.useRef(null),s=me.useRef(null),u=me.useRef(null),f=me.useRef({x:0,y:0,z:0}),d=me.useRef({x:0,y:0,z:0}),h=me.useRef(null),g=me.useRef(!1),[m,S]=me.useState(!1),[v,_]=me.useState(!1),[T,R]=me.useState(null),[O,y]=me.useState(null),M=me.useCallback(x=>{f.current=x,e.current?.rotation.set(x.x*no,x.y*no,x.z*no)},[]),D=me.useCallback((x,w)=>{u.current&&cancelAnimationFrame(u.current);const z={...f.current},G=performance.now();return new Promise(K=>{const ot=q=>{const Q=Math.min((q-G)/w,1),X=xS(Q);M({x:z.x+(x.x-z.x)*X,y:z.y+(x.y-z.y)*X,z:z.z+(x.z-z.z)*X}),Q<1?u.current=requestAnimationFrame(ot):(u.current=null,K())};u.current=requestAnimationFrame(ot)})},[M]),B=me.useCallback((x,w)=>{u.current&&cancelAnimationFrame(u.current);const z=e.current;if(!z)return Promise.resolve();const G=z.quaternion.clone(),K=performance.now();return new Promise(ot=>{const q=Q=>{const X=Math.min((Q-K)/w,1);z.quaternion.slerpQuaternions(G,x,xS(X)),f.current=NC(z.quaternion),X<1?u.current=requestAnimationFrame(q):(u.current=null,ot())};u.current=requestAnimationFrame(q)})},[]),C=me.useCallback(async()=>{g.current=!0,S(!0),R(null),y(null);try{const x=await yS(8),w=DC(MS[x-1]),z=f.current,G=3+Math.floor(Math.random()*5),K=_S-G,ot=Math.random()<.5?-1:1,q=Math.random()<.5?-1:1,Q=Math.random()<.5?-1:1,X={x:z.x+ot*360*G,y:z.y+q*360*K,z:z.z+Q*360*_S};await D(X,TC),await B(w,bC),d.current=f.current,S(!1),g.current=!1,R(x)}catch(x){S(!1),g.current=!1,y(x instanceof Error?x.message:"Roll failed.")}},[B,D]),L=me.useCallback(x=>{if(g.current)return;const w=x.currentTarget.getBoundingClientRect();h.current={centerX:w.left+w.width/2,centerY:w.top+w.height/2,halfWidth:w.width/2,halfHeight:w.height/2,nx:0,ny:0},x.currentTarget.setPointerCapture(x.pointerId),_(!0)},[]),N=me.useCallback(x=>{const w=h.current;!w||g.current||(w.nx=SS((x.clientX-w.centerX)/w.halfWidth,-1,1),w.ny=SS((x.clientY-w.centerY)/w.halfHeight,-1,1),!s.current&&(s.current=requestAnimationFrame(()=>{s.current=null;const z=d.current;M({x:z.x-w.ny*mS,y:z.y+w.nx*mS,z:z.z})})))},[M]),U=me.useCallback(()=>{const x=h.current;if(!x)return;h.current=null,_(!1),s.current&&(cancelAnimationFrame(s.current),s.current=null),Math.abs(x.nx)>=gS||Math.abs(x.ny)>=gS?C():D(d.current,AC)},[D,C]);return me.useEffect(()=>{const x=o.current;if(!x)return;const w=new $E,z=new Ti(28,1,.1,100);z.position.set(0,0,7),z.lookAt(0,0,0);const G=new EC({alpha:!0,antialias:!0});G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.setClearColor(0,0),x.appendChild(G.domElement);const K=new Bi(new Wp(1.7,0),new _T({color:1096065,roughness:.46,metalness:.08,flatShading:!0,transparent:!0,opacity:.8,depthWrite:!1})),ot=()=>{MS.forEach((ut,nt)=>{const dt=UC(nt+1);dt&&(dt.position.copy(ut.normal).multiplyScalar(RC),dt.quaternion.copy(ut.orientation),K.add(dt))})};document.fonts.ready.then(ot),w.add(K),w.add(new xT(15531509,413243,2.2));const q=new ET(16777215,2.8);q.position.set(3,4,5),w.add(q),e.current=K;const Q=()=>{const ut=x.clientWidth,nt=x.clientHeight;G.setSize(ut,nt,!1),z.aspect=ut/nt,z.updateProjectionMatrix()},X=new ResizeObserver(Q);X.observe(x),Q();const Y=()=>{i.current=requestAnimationFrame(Y),G.render(w,z)};return Y(),()=>{X.disconnect(),i.current&&cancelAnimationFrame(i.current),u.current&&cancelAnimationFrame(u.current),K.geometry.dispose(),K.material.dispose(),K.children.forEach(ut=>{const nt=ut;nt.geometry.dispose(),nt.material.map?.dispose(),nt.material.dispose()}),G.dispose(),x.removeChild(G.domElement),e.current=null}},[]),bn.jsxs("div",{className:`stage stage--eight-sided${v?" is-dragging":""}`,onPointerDown:L,onPointerMove:N,onPointerUp:U,onPointerCancel:U,children:[bn.jsx("div",{ref:o,className:"three-scene"}),bn.jsx("p",{className:"hint",children:m?"Rolling...":O||(T?`You rolled ${T}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function OC({sides:o=8}){return o===6?bn.jsx(tE,{}):o===8?bn.jsx(LC,{}):null}function PC(){return bn.jsx(OC,{})}const sx=document.getElementById("root");if(!sx)throw new Error("Root element was not found.");Ky.createRoot(sx).render(bn.jsx(me.StrictMode,{children:bn.jsx(PC,{})}));

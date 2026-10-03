(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ch={exports:{}},Al={};var Yv;function f1(){if(Yv)return Al;Yv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Al.Fragment=e,Al.jsx=i,Al.jsxs=i,Al}var Zv;function d1(){return Zv||(Zv=1,Ch.exports=f1()),Ch.exports}var se=d1(),wh={exports:{}},pe={};var Kv;function h1(){if(Kv)return pe;Kv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),E=Symbol.iterator;function w(G){return G===null||typeof G!="object"?null:(G=E&&G[E]||G["@@iterator"],typeof G=="function"?G:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function F(G,_t,lt){this.props=G,this.context=_t,this.refs=x,this.updater=lt||U}F.prototype.isReactComponent={},F.prototype.setState=function(G,_t){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,_t,"setState")},F.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function K(){}K.prototype=F.prototype;function D(G,_t,lt){this.props=G,this.context=_t,this.refs=x,this.updater=lt||U}var L=D.prototype=new K;L.constructor=D,M(L,F.prototype),L.isPureReactComponent=!0;var O=Array.isArray;function B(){}var b={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function T(G,_t,lt){var P=lt.ref;return{$$typeof:o,type:G,key:_t,ref:P!==void 0?P:null,props:lt}}function C(G,_t){return T(G.type,_t,G.props)}function N(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function q(G){var _t={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(lt){return _t[lt]})}var V=/\/+/g;function Y(G,_t){return typeof G=="object"&&G!==null&&G.key!=null?q(""+G.key):_t.toString(36)}function X(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(B,B):(G.status="pending",G.then(function(_t){G.status==="pending"&&(G.status="fulfilled",G.value=_t)},function(_t){G.status==="pending"&&(G.status="rejected",G.reason=_t)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function k(G,_t,lt,P,et){var dt=typeof G;(dt==="undefined"||dt==="boolean")&&(G=null);var yt=!1;if(G===null)yt=!0;else switch(dt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(G.$$typeof){case o:case e:yt=!0;break;case v:return yt=G._init,k(yt(G._payload),_t,lt,P,et)}}if(yt)return et=et(G),yt=P===""?"."+Y(G,0):P,O(et)?(lt="",yt!=null&&(lt=yt.replace(V,"$&/")+"/"),k(et,_t,lt,"",function(jt){return jt})):et!=null&&(N(et)&&(et=C(et,lt+(et.key==null||G&&G.key===et.key?"":(""+et.key).replace(V,"$&/")+"/")+yt)),_t.push(et)),1;yt=0;var rt=P===""?".":P+":";if(O(G))for(var Tt=0;Tt<G.length;Tt++)P=G[Tt],dt=rt+Y(P,Tt),yt+=k(P,_t,lt,dt,et);else if(Tt=w(G),typeof Tt=="function")for(G=Tt.call(G),Tt=0;!(P=G.next()).done;)P=P.value,dt=rt+Y(P,Tt++),yt+=k(P,_t,lt,dt,et);else if(dt==="object"){if(typeof G.then=="function")return k(X(G),_t,lt,P,et);throw _t=String(G),Error("Objects are not valid as a React child (found: "+(_t==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":_t)+"). If you meant to render a collection of children, use an array instead.")}return yt}function $(G,_t,lt){if(G==null)return G;var P=[],et=0;return k(G,P,"","",function(dt){return _t.call(lt,dt,et++)}),P}function j(G){if(G._status===-1){var _t=G._result,lt=_t();lt.then(function(P){(G._status===0||G._status===-1)&&(G._status=1,G._result=P,lt.status===void 0&&(lt.status="fulfilled",lt.value=P))},function(P){(G._status===0||G._status===-1)&&(G._status=2,G._result=P,lt.status===void 0&&(lt.status="rejected",lt.reason=P))}),G._status===-1&&(G._status=0,G._result=lt)}if(G._status===1)return G._result.default;throw G._result}var pt=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(_t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function Mt(G){var _t=b.T,lt={};lt.types=_t!==null?_t.types:null,b.T=lt;try{var P=G(),et=b.S;et!==null&&et(lt,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(B,pt)}catch(dt){pt(dt)}finally{_t!==null&&lt.types!==null&&(_t.types=lt.types),b.T=_t}}function Lt(G){var _t=b.T;if(_t!==null){var lt=_t.types;lt===null?_t.types=[G]:lt.indexOf(G)===-1&&lt.push(G)}else Mt(Lt.bind(null,G))}var Nt={map:$,forEach:function(G,_t,lt){$(G,function(){_t.apply(this,arguments)},lt)},count:function(G){var _t=0;return $(G,function(){_t++}),_t},toArray:function(G){return $(G,function(_t){return _t})||[]},only:function(G){if(!N(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return pe.Activity=g,pe.Children=Nt,pe.Component=F,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=D,pe.StrictMode=r,pe.Suspense=p,pe.ViewTransition=S,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,pe.__COMPILER_RUNTIME={__proto__:null,c:function(G){return b.H.useMemoCache(G)}},pe.addTransitionType=Lt,pe.cache=function(G){return function(){return G.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(G,_t,lt){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var P=M({},G.props),et=G.key;if(_t!=null)for(dt in _t.key!==void 0&&(et=""+_t.key),_t)!I.call(_t,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&_t.ref===void 0||(P[dt]=_t[dt]);var dt=arguments.length-2;if(dt===1)P.children=lt;else if(1<dt){for(var yt=Array(dt),rt=0;rt<dt;rt++)yt[rt]=arguments[rt+2];P.children=yt}return T(G.type,et,P)},pe.createContext=function(G){return G={$$typeof:d,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:u,_context:G},G},pe.createElement=function(G,_t,lt){var P,et={},dt=null;if(_t!=null)for(P in _t.key!==void 0&&(dt=""+_t.key),_t)I.call(_t,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(et[P]=_t[P]);var yt=arguments.length-2;if(yt===1)et.children=lt;else if(1<yt){for(var rt=Array(yt),Tt=0;Tt<yt;Tt++)rt[Tt]=arguments[Tt+2];et.children=rt}if(G&&G.defaultProps)for(P in yt=G.defaultProps,yt)et[P]===void 0&&(et[P]=yt[P]);return T(G,dt,et)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(G){return{$$typeof:h,render:G}},pe.isValidElement=N,pe.lazy=function(G){return{$$typeof:v,_payload:{_status:-1,_result:G},_init:j}},pe.memo=function(G,_t){return{$$typeof:m,type:G,compare:_t===void 0?null:_t}},pe.startTransition=Mt,pe.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},pe.use=function(G){return b.H.use(G)},pe.useActionState=function(G,_t,lt){return b.H.useActionState(G,_t,lt)},pe.useCallback=function(G,_t){return b.H.useCallback(G,_t)},pe.useContext=function(G){return b.H.useContext(G)},pe.useDebugValue=function(){},pe.useDeferredValue=function(G,_t){return b.H.useDeferredValue(G,_t)},pe.useEffect=function(G,_t){return b.H.useEffect(G,_t)},pe.useEffectEvent=function(G){return b.H.useEffectEvent(G)},pe.useId=function(){return b.H.useId()},pe.useImperativeHandle=function(G,_t,lt){return b.H.useImperativeHandle(G,_t,lt)},pe.useInsertionEffect=function(G,_t){return b.H.useInsertionEffect(G,_t)},pe.useLayoutEffect=function(G,_t){return b.H.useLayoutEffect(G,_t)},pe.useMemo=function(G,_t){return b.H.useMemo(G,_t)},pe.useOptimistic=function(G,_t){return b.H.useOptimistic(G,_t)},pe.useReducer=function(G,_t,lt){return b.H.useReducer(G,_t,lt)},pe.useRef=function(G){return b.H.useRef(G)},pe.useState=function(G){return b.H.useState(G)},pe.useSyncExternalStore=function(G,_t,lt){return b.H.useSyncExternalStore(G,_t,lt)},pe.useTransition=function(){return b.H.useTransition()},pe.version="19.3.0",pe}var Qv;function ym(){return Qv||(Qv=1,wh.exports=h1()),wh.exports}var vt=ym(),Dh={exports:{}},Rl={},Nh={exports:{}},Uh={};var Jv;function p1(){return Jv||(Jv=1,(function(o){function e(X,k){var $=X.length;X.push(k);t:for(;0<$;){var j=$-1>>>1,pt=X[j];if(0<l(pt,k))X[j]=k,X[$]=pt,$=j;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var k=X[0],$=X.pop();if($!==k){X[0]=$;t:for(var j=0,pt=X.length,Mt=pt>>>1;j<Mt;){var Lt=2*(j+1)-1,Nt=X[Lt],G=Lt+1,_t=X[G];if(0>l(Nt,$))G<pt&&0>l(_t,Nt)?(X[j]=_t,X[G]=$,j=G):(X[j]=Nt,X[Lt]=$,j=Lt);else if(G<pt&&0>l(_t,$))X[j]=_t,X[G]=$,j=G;else break t}}return k}function l(X,k){var $=X.sortIndex-k.sortIndex;return $!==0?$:X.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],v=1,g=null,S=3,E=!1,w=!1,U=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function D(X){for(var k=i(m);k!==null;){if(k.callback===null)r(m);else if(k.startTime<=X)r(m),k.sortIndex=k.expirationTime,e(p,k);else break;k=i(m)}}function L(X){if(U=!1,D(X),!w)if(i(p)!==null)w=!0,O||(O=!0,N());else{var k=i(m);k!==null&&Y(L,k.startTime-X)}}var O=!1,B=-1,b=5,I=-1;function T(){return M?!0:!(o.unstable_now()-I<b)}function C(){if(M=!1,O){var X=o.unstable_now();I=X;var k=!0;try{t:{w=!1,U&&(U=!1,F(B),B=-1),E=!0;var $=S;try{e:{for(D(X),g=i(p);g!==null&&!(g.expirationTime>X&&T());){var j=g.callback;if(typeof j=="function"){g.callback=null,S=g.priorityLevel;var pt=j(g.expirationTime<=X);if(X=o.unstable_now(),typeof pt=="function"){g.callback=pt,D(X),k=!0;break e}g===i(p)&&r(p),D(X)}else r(p);g=i(p)}if(g!==null)k=!0;else{var Mt=i(m);Mt!==null&&Y(L,Mt.startTime-X),k=!1}}break t}finally{g=null,S=$,E=!1}k=void 0}}finally{k?N():O=!1}}}var N;if(typeof K=="function")N=function(){K(C)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,V=q.port2;q.port1.onmessage=C,N=function(){V.postMessage(null)}}else N=function(){x(C,0)};function Y(X,k){B=x(function(){X(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(X){switch(S){case 1:case 2:case 3:var k=3;break;default:k=S}var $=S;S=k;try{return X()}finally{S=$}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,k){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var $=S;S=X;try{return k()}finally{S=$}},o.unstable_scheduleCallback=function(X,k,$){var j=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?j+$:j):$=j,X){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=$+pt,X={id:v++,callback:k,priorityLevel:X,startTime:$,expirationTime:pt,sortIndex:-1},$>j?(X.sortIndex=$,e(m,X),i(p)===null&&X===i(m)&&(U?(F(B),B=-1):U=!0,Y(L,$-j))):(X.sortIndex=pt,e(p,X),w||E||(w=!0,O||(O=!0,N()))),X},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(X){var k=S;return function(){var $=S;S=k;try{return X.apply(this,arguments)}finally{S=$}}}})(Uh)),Uh}var jv;function m1(){return jv||(jv=1,Nh.exports=p1()),Nh.exports}var Lh={exports:{}},Pn={};var $v;function g1(){if($v)return Pn;$v=1;var o=ym();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(v,g,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:v,containerInfo:g,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(v){return{$$typeof:u,_reason:v}},Pn.createPortal=function(v,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return h(v,g,null,S)},Pn.flushSync=function(v){var g=p.T,S=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=g,r.p=S,r.d.f()}},Pn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},Pn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Pn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var S=g.as,E=m(S,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,U=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:E,integrity:w,fetchPriority:U}):S==="script"&&r.d.X(v,{crossOrigin:E,integrity:w,fetchPriority:U,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=m(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},Pn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,E=m(S,g.crossOrigin);r.d.L(v,S,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pn.preloadModule=function(v,g){if(typeof v=="string")if(g){var S=m(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},Pn.requestFormReset=function(v){r.d.r(v)},Pn.unstable_batchedUpdates=function(v,g){return v(g)},Pn.useFormState=function(v,g,S){return p.H.useFormState(v,g,S)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var tS;function _1(){if(tS)return Lh.exports;tS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Lh.exports=g1(),Lh.exports}var eS;function v1(){if(eS)return Rl;eS=1;var o=m1(),e=ym(),i=_1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,R=c.child;R;){if(R===a){_=!0,a=c,s=f;break}if(R===s){_=!0,s=c,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,s=c;break}if(R===s){_=!0,s=f,a=c;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,c,f))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function w(t){var n=[null,null],a=S(t);return a===null||U(n,t,a.child,{foundSelf:!1}),n}function U(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&U(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,F=null;function K(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function D(t,n,a){return t===a?(F=t,!1):t===n?(F!==null&&(x=t),!0):!1}function L(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var B=Object.assign,b=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Mt=Symbol.for("react.activity"),Lt=Symbol.for("react.legacy_hidden"),Nt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.for("react.view_transition"),_t=Symbol.for("react.recoverable"),lt=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=lt&&t[lt]||t["@@iterator"],typeof t=="function"?t:null)}var et=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case q:return"Profiler";case N:return"StrictMode";case k:return"Suspense";case $:return"SuspenseList";case Mt:return"Activity";case G:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case Y:return t.displayName||"Context";case V:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case pt:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var yt=Array.isArray,rt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,jt={pending:!1,data:null,method:null,action:null},$t=[],Yt=-1;function Ot(t){return{current:t}}function wt(t){0>Yt||(t.current=$t[Yt],$t[Yt]=null,Yt--)}function ee(t,n){Yt++,$t[Yt]=t.current,t.current=n}var de=Ot(null),we=Ot(null),he=Ot(null),le=Ot(null);function W(t,n){switch(ee(he,n),ee(we,t),ee(de,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?nv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=nv(n),t=iv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}wt(de),ee(de,t)}function sn(){wt(de),wt(we),wt(he)}function He(t){var n=t.memoizedState;n!==null&&(Qs._currentValue=n.memoizedState,ee(le,t)),n=de.current;var a=iv(n,t.type);n!==a&&(ee(we,t),ee(de,a))}function z(t){we.current===t&&(wt(de),wt(we)),le.current===t&&(wt(le),Qs._currentValue=jt)}var y,st;function ht(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+st}var St=!1;function Dt(t,n){if(!t||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(Bt){var nt=Bt}Reflect.construct(t,[],bt)}else{try{bt.call()}catch(Bt){nt=Bt}bt=!1;try{var ft=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),bt=!0,new t}finally{bt&&(ft!==void 0?Object.defineProperty(t.prototype,"props",ft):delete t.prototype.props)}}}else{try{throw Error()}catch(Bt){nt=Bt}(bt=t())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(Bt){if(Bt&&nt&&typeof Bt.stack=="string")return[Bt.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var H=_.split(`
`),at=R.split(`
`);for(c=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;c<at.length&&!at[c].includes("DetermineComponentFrameRoot");)c++;if(s===H.length||c===at.length)for(s=H.length-1,c=at.length-1;1<=s&&0<=c&&H[s]!==at[c];)c--;for(;1<=s&&0<=c;s--,c--)if(H[s]!==at[c]){if(s!==1||c!==1)do if(s--,c--,0>c||H[s]!==at[c]){var mt=`
`+H[s].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=s&&0<=c);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ht(a):""}function It(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return Dt(t.type,!1);case 11:return Dt(t.type.render,!1);case 1:return Dt(t.type,!0);case 31:return ht("Activity");case 30:return ht("ViewTransition");default:return""}}function xt(t){try{var n="",a=null;do n+=It(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Rt=Object.prototype.hasOwnProperty,Pt=o.unstable_scheduleCallback,re=o.unstable_cancelCallback,Gt=o.unstable_shouldYield,Ht=o.unstable_requestPaint,Zt=o.unstable_now,ce=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,tt=o.unstable_UserBlockingPriority,Ut=o.unstable_NormalPriority,At=o.unstable_LowPriority,zt=o.unstable_IdlePriority,Wt=o.log,Ct=o.unstable_setDisableYieldValue,ae=null,qt=null;function Le(t){if(typeof Wt=="function"&&Ct(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(ae,t)}catch{}}var _e=Math.clz32?Math.clz32:nf,si=Math.log,xi=Math.LN2;function nf(t){return t>>>=0,t===0?32:31-(si(t)/xi|0)|0}var ds=256,Nr=262144,Za=4194304;function ga(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ur(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=ga(s):(_&=R,_!==0?c=ga(_):a||(a=R&~t,a!==0&&(c=ga(a))))):(R=s&~f,R!==0?c=ga(R):_!==0?c=ga(_):a||(a=s&~t,a!==0&&(c=ga(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ka(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ki(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-_e(a),c=1<<s;n|=t[s],a&=~c}return n}function Uo(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lo(){var t=Za;return Za<<=1,(Za&62914560)===0&&(Za=4194304),t}function hs(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zl(t,n,a,s,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,at=t.hiddenUpdates;for(a=_&~a;0<a;){var mt=31-_e(a),bt=1<<mt;R[mt]=0,H[mt]=-1;var nt=at[mt];if(nt!==null)for(at[mt]=null,mt=0;mt<nt.length;mt++){var ft=nt[mt];ft!==null&&(ft.lane&=-536870913)}a&=~bt}s!==0&&Lr(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Lr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-_e(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Oo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-_e(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Po(t,n){var a=n&-n;return a=(a&42)!==0?1:Io(a),(a&(t.suspendedLanes|n))!==0?0:a}function Io(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Kl(){var t=Tt.p;return t!==0?t:(t=window.event,t===void 0?32:Hv(t.type))}function Ql(t,n){var a=Tt.p;try{return Tt.p=t,n()}finally{Tt.p=a}}var Mi=Math.random().toString(36).slice(2),A="__reactFiber$"+Mi,Z="__reactProps$"+Mi,gt="__reactContainer$"+Mi,ct="__reactEvents$"+Mi,ut="__reactListeners$"+Mi,Vt="__reactHandles$"+Mi,Kt="__reactResources$"+Mi,Ft="__reactMarker$"+Mi,te="__reactLoad$"+Mi;function ne(t){delete t[A],delete t[Z],delete t[ut],delete t[Vt]}function fe(t){var n;if(n=t[A])return n;for(var a=t.parentNode;a;){if(n=a[gt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xv(t);t!==null;){if(a=t[A])return a;t=xv(t)}return n}t=a,a=t.parentNode}return null}function ve(t){if(t=t[A]||t[gt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ae(t){var n=t[Kt];return n||(n=t[Kt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ee(t){t[Ft]=!0}function Je(t){t[te]=void 0}var qe=new Set,Mn={};function Xt(t,n){cn(t,n),cn(t+"Capture",n)}function cn(t,n){for(Mn[t]=n,t=0;t<n.length;t++)qe.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qn={},oi={};function Wi(t){return Rt.call(oi,t)?!0:Rt.call(qn,t)?!1:Oe.test(t)?oi[t]=!0:(qn[t]=!0,!1)}var Te=!1;function Xe(){var t=Te;return Te=!1,t}function en(t,n,a){if(Wi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function li(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function De(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _a(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jl(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function af(t){if(!t._valueTracker){var n=_a(t)?"checked":"value";t._valueTracker=Jl(t,n,""+t[n])}}function km(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_a(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var UM=/[\n"\\]/g;function yi(t){return t.replace(UM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function rf(t,n,a,s,c,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?sf(t,un(t.value)):sf(t,un(n)):a!=null?sf(t,un(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+un(R):t.removeAttribute("name")}function qm(t,n,a,s,c,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){af(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),af(t)}function sf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ps(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Wm(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function Ym(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(yt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),af(t)}function ms(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var LM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||LM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Km(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Te=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(Zm(t,c,s),Te=!0)}else for(var f in n)n.hasOwnProperty(f)&&Zm(t,f,n[f])}function of(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var OM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),PM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jl(t){return PM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var lf=null;function cf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gs=null,_s=null;function Qm(t){var n=ve(t);if(n&&(t=n.stateNode)){var a=t[Z]||null;t:switch(t=n.stateNode,n.type){case"input":if(rf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Z]||null;if(!c)throw Error(r(90));rf(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&km(s)}break t;case"textarea":Wm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ps(t,!!a.multiple,n,!1)}}}var uf=!1;function Jm(t,n,a){if(uf)return t(n,a);uf=!0;try{var s=t(n);return s}finally{if(uf=!1,(gs!==null||_s!==null)&&(jc(),gs&&(n=gs,t=_s,_s=gs=null,Qm(n),t)))for(n=0;n<t.length;n++)Qm(t[n])}}function Fo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Z]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ff=!1;if(va)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){ff=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{ff=!1}var Qa=null,df=null,$l=null;function jm(){if($l)return $l;var t,n=df,a=n.length,s,c="value"in Qa?Qa.value:Qa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return $l=c.slice(t,1<s?1-s:void 0)}function tc(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ec(){return!0}function $m(){return!1}function Wn(t){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ec:$m,this.isPropagationStopped=$m,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=Wn(Ja),Ho=B({},Ja,{view:0,detail:0}),IM=Wn(Ho),hf,pf,Go,ic=B({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Go&&(Go&&t.type==="mousemove"?(hf=t.screenX-Go.screenX,pf=t.screenY-Go.screenY):pf=hf=0,Go=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:pf}}),t0=Wn(ic),zM=B({},ic,{dataTransfer:0}),FM=Wn(zM),BM=B({},Ho,{relatedTarget:0}),mf=Wn(BM),HM=B({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),GM=Wn(HM),VM=B({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XM=Wn(VM),kM=B({},Ja,{data:0}),e0=Wn(kM),qM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=YM[t])?!!n[t]:!1}function gf(){return ZM}var KM=B({},Ho,{key:function(t){if(t.key){var n=qM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QM=Wn(KM),JM=B({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=Wn(JM),jM=B({},Ja,{submitter:0}),$M=Wn(jM),ty=B({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),ey=Wn(ty),ny=B({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Wn(ny),ay=B({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Wn(ay),sy=B({},Ja,{newState:0,oldState:0,source:0}),oy=Wn(sy),ly=[9,13,27,32],_f=va&&"CompositionEvent"in window,Vo=null;va&&"documentMode"in document&&(Vo=document.documentMode);var cy=va&&"TextEvent"in window&&!Vo,i0=va&&(!_f||Vo&&8<Vo&&11>=Vo),a0=" ",r0=!1;function s0(t,n){switch(t){case"keyup":return ly.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function uy(t,n){switch(t){case"compositionend":return o0(n);case"keypress":return n.which!==32?null:(r0=!0,a0);case"textInput":return t=n.data,t===a0&&r0?null:t;default:return null}}function fy(t,n){if(vs)return t==="compositionend"||!_f&&s0(t,n)?(t=jm(),$l=df=Qa=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return i0&&n.locale!=="ko"?null:n.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dy[t.type]:n==="textarea"}function c0(t,n,a,s){gs?_s?_s.push(s):_s=[s]:gs=s,n=au(n,"onChange"),0<n.length&&(a=new nc("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Xo=null,ko=null;function hy(t){Q_(t,0)}function ac(t){var n=Qt(t);if(km(n))return t}function u0(t,n){if(t==="change")return n}var f0=!1;if(va){var vf;if(va){var Sf="oninput"in document;if(!Sf){var d0=document.createElement("div");d0.setAttribute("oninput","return;"),Sf=typeof d0.oninput=="function"}vf=Sf}else vf=!1;f0=vf&&(!document.documentMode||9<document.documentMode)}function h0(){Xo&&(Xo.detachEvent("onpropertychange",p0),ko=Xo=null)}function p0(t){if(t.propertyName==="value"&&ac(ko)){var n=[];c0(n,ko,t,cf(t)),Jm(hy,n)}}function py(t,n,a){t==="focusin"?(h0(),Xo=n,ko=a,Xo.attachEvent("onpropertychange",p0)):t==="focusout"&&h0()}function my(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(ko)}function gy(t,n){if(t==="click")return ac(n)}function _y(t,n){if(t==="input"||t==="change")return ac(n)}function vy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ci=typeof Object.is=="function"?Object.is:vy;function qo(t,n){if(ci(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Rt.call(n,c)||!ci(t[c],n[c]))return!1}return!0}function xf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function m0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g0(t,n){var a=m0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=m0(a)}}function _0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?_0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function v0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=xf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=xf(t.document)}return n}function Mf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Sy=va&&"documentMode"in document&&11>=document.documentMode,Ss=null,yf=null,Wo=null,Ef=!1;function S0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ef||Ss==null||Ss!==xf(s)||(s=Ss,"selectionStart"in s&&Mf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Wo&&qo(Wo,s)||(Wo=s,s=au(yf,"onSelect"),0<s.length&&(n=new nc("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ss)))}function Or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var xs={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionrun:Or("Transition","TransitionRun"),transitionstart:Or("Transition","TransitionStart"),transitioncancel:Or("Transition","TransitionCancel"),transitionend:Or("Transition","TransitionEnd")},Tf={},x0={};va&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Pr(t){if(Tf[t])return Tf[t];if(!xs[t])return t;var n=xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in x0)return Tf[t]=n[a];return t}var M0=Pr("animationend"),y0=Pr("animationiteration"),E0=Pr("animationstart"),xy=Pr("transitionrun"),My=Pr("transitionstart"),yy=Pr("transitioncancel"),T0=Pr("transitionend"),b0=new Map,bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bf.push("scrollEnd");function Ui(t,n){b0.set(t,n),Xt(n,[t])}var Ey=0;function Sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ii.identifierPrefix;var a=Ey++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function A0(t){if(t==null||typeof t=="string")return t;var n=null,a=Hs;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function xa(t,n){return t=A0(t),n=A0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var rc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],Ms=0,Af=0;function sc(){for(var t=Ms,n=Af=Ms=0;n<t;){var a=Ei[n];Ei[n++]=null;var s=Ei[n];Ei[n++]=null;var c=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&R0(a,c,f)}}function oc(t,n,a,s){Ei[Ms++]=t,Ei[Ms++]=n,Ei[Ms++]=a,Ei[Ms++]=s,Af|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Rf(t,n,a,s){return oc(t,n,a,s),lc(t)}function Ir(t,n){return oc(t,null,null,n),lc(t)}function R0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-_e(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function lc(t){if(50<pl)throw pl=0,Jc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ys={};function Ty(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,s){return new Ty(t,n,a,s)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ma(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function C0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cc(t,n,a,s,c,f){var _=0;if(s=t,typeof s=="function")Cf(s)&&(_=1);else if(typeof s=="string")_=jE(t,a,de.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Mt:return t=$n(31,a,n,c),t.elementType=Mt,t.lanes=f,t;case C:return zr(a.children,c,f,n);case N:_=8,c|=24;break;case q:return t=$n(12,a,n,c|2),t.elementType=q,t.lanes=f,t;case k:return t=$n(13,a,n,c),t.elementType=k,t.lanes=f,t;case $:return t=$n(19,a,n,c),t.elementType=$,t.lanes=f,t;case Lt:case G:return t=c|32,t=$n(30,a,n,t),t.elementType=G,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Y:_=10;break t;case V:_=9;break t;case X:_=11;break t;case j:_=14;break t;case pt:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=$n(_,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function zr(t,n,a,s){return t=$n(7,t,s,n),t.lanes=a,t}function wf(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function w0(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Df(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var D0=new WeakMap;function Ti(t,n){if(typeof t=="object"&&t!==null){var a=D0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:xt(n)},D0.set(t,n),n)}return{value:t,source:n,stack:xt(n)}}var Es=[],Ts=0,uc=null,Yo=0,bi=[],Ai=0,ja=null,Zi=1,Ki="";function ya(t,n){Es[Ts++]=Yo,Es[Ts++]=uc,uc=t,Yo=n}function N0(t,n,a){bi[Ai++]=Zi,bi[Ai++]=Ki,bi[Ai++]=ja,ja=t;var s=Zi;t=Ki;var c=32-_e(s)-1;s&=~(1<<c),a+=1;var f=32-_e(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Zi=1<<32-_e(n)+c|a<<c|s,Ki=f+t}else Zi=1<<f|a<<c|s,Ki=t}function fc(t){t.return!==null&&(ya(t,1),N0(t,1,0))}function Nf(t){for(;t===uc;)uc=Es[--Ts],Es[Ts]=null,Yo=Es[--Ts],Es[Ts]=null;for(;t===ja;)ja=bi[--Ai],bi[Ai]=null,Ki=bi[--Ai],bi[Ai]=null,Zi=bi[--Ai],bi[Ai]=null}function U0(t,n){bi[Ai++]=Zi,bi[Ai++]=Ki,bi[Ai++]=ja,Zi=n.id,Ki=n.overflow,ja=t}var bn=null,nn=null,be=!1,$a=null,Ri=!1,Uf=Error(r(519));function tr(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zo(Ti(n,t)),Uf}function L0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[A]=t,n[Z]=s,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<gl.length;a++)Ce(gl[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),qm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Ym(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||tv(n.textContent,a)?(s.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),s.onScroll!=null&&Ce("scroll",n),s.onScrollEnd!=null&&Ce("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||tr(t,!0)}function dc(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:bn=bn.return}}function bs(t){if(t!==bn)return!1;if(!be)return dc(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||lh(t.type,t.memoizedProps)),a=!a),a&&nn&&tr(t),dc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=Sv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=Sv(t)}else n===27?(n=nn,gr(t.type)?(t=_h,_h=null,nn=t):nn=n):nn=bn?wi(t.stateNode.nextSibling):null;return!0}function Fr(){nn=bn=null,be=!1}function Lf(){var t=$a;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),$a=null),t}function Zo(t){$a===null?$a=[t]:$a.push(t)}var Of=Ot(null),Br=null,Ea=null;function er(t,n,a){ee(Of,n._currentValue),n._currentValue=a}function Ta(t){t._currentValue=Of.current,wt(Of)}function hc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Pf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),hc(f.return,a,t),s||(_=null);break t}f=R.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),hc(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),hc(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Hr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=c.type;ci(c.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(c===le.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Qs):t=[Qs])}c=c.return}return t!==null&&Pf(n,t,a,s),n.flags|=262144,t!==null}function pc(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gr(t){Br=t,Ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return O0(Br,t)}function mc(t,n){return Br===null&&Gr(t),O0(t,n)}function O0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(t===null)throw Error(r(308));Ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ea=Ea.next=n;return a}var by=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ay=o.unstable_scheduleCallback,Ry=o.unstable_NormalPriority,gn={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function If(){return{controller:new by,data:new Map,refCount:0}}function Ko(t){t.refCount--,t.refCount===0&&Ay(Ry,function(){t.controller.abort()})}function P0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Qo=null;function Cy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Jo=null,zf=0,Vr=0,As=null;function wy(t,n){if(Jo===null){var a=Jo=[];zf=0,Vr=$d(),As={status:"pending",value:void 0,then:function(s){a.push(s)}}}return zf++,n.then(I0,I0),n}function I0(){if(--zf===0&&(Qo=null,Jo!==null)){As!==null&&(As.status="fulfilled");var t=Jo;Jo=null,Vr=0,As=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Dy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var z0=rt.S;rt.S=function(t,n){if(w_=Zt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wy(t,n),Qo!==null)for(var a=ks;a!==null;)P0(a,Qo),a=a.next;if(a=t.types,a!==null){for(var s=ks;s!==null;)P0(s,a),s=s.next;if(Vr!==0){s=Qo,s===null&&(s=Qo=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}z0!==null&&z0(t,n)};var Xr=Ot(null);function Ff(){var t=Xr.current;return t!==null?t:tn.pooledCache}function gc(t,n){n===null?ee(Xr,Xr.current):ee(Xr,n.pool)}function F0(){var t=Ff();return t===null?null:{parent:gn._currentValue,pool:t}}var Rs=Error(r(460)),Bf=Error(r(474)),_c=Error(r(542)),vc={then:function(){}};function B0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function H0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,V0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,V0(t),t}throw qr=n,Rs}}function kr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qr=a,Rs):a}}var qr=null;function G0(){if(qr===null)throw Error(r(459));var t=qr;return qr=null,t}function V0(t){if(t===Rs||t===_c)throw Error(r(483))}var Cs=null,jo=0;function Sc(t){var n=jo;return jo+=1,Cs===null&&(Cs=[]),H0(Cs,t,n)}function nr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xc(t,n){throw n.$$typeof===b?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function X0(t){function n(it,Q){if(t){var ot=it.deletions;ot===null?(it.deletions=[Q],it.flags|=16):ot.push(Q)}}function a(it,Q){if(!t)return null;for(;Q!==null;)n(it,Q),Q=Q.sibling;return null}function s(it){for(var Q=new Map;it!==null;)it.key===null?Q.set(it.index,it):Q.set(it.key,it),it=it.sibling;return Q}function c(it,Q){return it=Ma(it,Q),it.index=0,it.sibling=null,it}function f(it,Q,ot){return it.index=ot,t?(ot=it.alternate,ot!==null?(ot=ot.index,ot<Q?(it.flags|=2,Q):ot):(it.flags|=134217730,Q)):(it.flags|=1048576,Q)}function _(it){return t&&it.alternate===null&&(it.flags|=134217730),it}function R(it,Q,ot,Et){return Q===null||Q.tag!==6?(Q=wf(ot,it.mode,Et),Q.return=it,Q):(Q=c(Q,ot),Q.return=it,Q)}function H(it,Q,ot,Et){var Jt=ot.type;return Jt===C?(it=mt(it,Q,ot.props.children,Et,ot.key),nr(it,ot),it):Q!==null&&(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===pt&&kr(Jt)===Q.type)?(Q=c(Q,ot.props),nr(Q,ot),Q.return=it,Q):(Q=cc(ot.type,ot.key,ot.props,null,it.mode,Et),nr(Q,ot),Q.return=it,Q)}function at(it,Q,ot,Et){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ot.containerInfo||Q.stateNode.implementation!==ot.implementation?(Q=Df(ot,it.mode,Et),Q.return=it,Q):(Q=c(Q,ot.children||[]),Q.return=it,Q)}function mt(it,Q,ot,Et,Jt){return Q===null||Q.tag!==7?(Q=zr(ot,it.mode,Et,Jt),Q.return=it,Q):(Q=c(Q,ot),Q.return=it,Q)}function bt(it,Q,ot){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=wf(""+Q,it.mode,ot),Q.return=it,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case I:return ot=cc(Q.type,Q.key,Q.props,null,it.mode,ot),nr(ot,Q),ot.return=it,ot;case T:return Q=Df(Q,it.mode,ot),Q.return=it,Q;case pt:return Q=kr(Q),bt(it,Q,ot)}if(yt(Q)||P(Q))return Q=zr(Q,it.mode,ot,null),Q.return=it,Q;if(typeof Q.then=="function")return bt(it,Sc(Q),ot);if(Q.$$typeof===Y)return bt(it,mc(it,Q),ot);xc(it,Q)}return null}function nt(it,Q,ot,Et){var Jt=Q!==null?Q.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return Jt!==null?null:R(it,Q,""+ot,Et);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case I:return ot.key===Jt?H(it,Q,ot,Et):null;case T:return ot.key===Jt?at(it,Q,ot,Et):null;case pt:return ot=kr(ot),nt(it,Q,ot,Et)}if(yt(ot)||P(ot))return Jt!==null?null:mt(it,Q,ot,Et,null);if(typeof ot.then=="function")return nt(it,Q,Sc(ot),Et);if(ot.$$typeof===Y)return nt(it,Q,mc(it,ot),Et);xc(it,ot)}return null}function ft(it,Q,ot,Et,Jt){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return it=it.get(ot)||null,R(Q,it,""+Et,Jt);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case I:return it=it.get(Et.key===null?ot:Et.key)||null,H(Q,it,Et,Jt);case T:return it=it.get(Et.key===null?ot:Et.key)||null,at(Q,it,Et,Jt);case pt:return Et=kr(Et),ft(it,Q,ot,Et,Jt)}if(yt(Et)||P(Et))return it=it.get(ot)||null,mt(Q,it,Et,Jt,null);if(typeof Et.then=="function")return ft(it,Q,ot,Sc(Et),Jt);if(Et.$$typeof===Y)return ft(it,Q,ot,mc(Q,Et),Jt);xc(Q,Et)}return null}function Bt(it,Q,ot,Et){for(var Jt=null,Ue=null,oe=Q,ue=Q=0,Sn=null;oe!==null&&ue<ot.length;ue++){oe.index>ue?(Sn=oe,oe=null):Sn=oe.sibling;var ze=nt(it,oe,ot[ue],Et);if(ze===null){oe===null&&(oe=Sn);break}t&&oe&&ze.alternate===null&&n(it,oe),Q=f(ze,Q,ue),Ue===null?Jt=ze:Ue.sibling=ze,Ue=ze,oe=Sn}if(ue===ot.length)return a(it,oe),be&&ya(it,ue),Jt;if(oe===null){for(;ue<ot.length;ue++)oe=bt(it,ot[ue],Et),oe!==null&&(Q=f(oe,Q,ue),Ue===null?Jt=oe:Ue.sibling=oe,Ue=oe);return be&&ya(it,ue),Jt}for(oe=s(oe);ue<ot.length;ue++)Sn=ft(oe,it,ue,ot[ue],Et),Sn!==null&&(t&&(ze=Sn.alternate,ze!==null&&oe.delete(ze.key===null?ue:ze.key)),Q=f(Sn,Q,ue),Ue===null?Jt=Sn:Ue.sibling=Sn,Ue=Sn);return t&&oe.forEach(function(Mr){return n(it,Mr)}),be&&ya(it,ue),Jt}function ie(it,Q,ot,Et){if(ot==null)throw Error(r(151));for(var Jt=null,Ue=null,oe=Q,ue=Q=0,Sn=null,ze=ot.next();oe!==null&&!ze.done;ue++,ze=ot.next()){oe.index>ue?(Sn=oe,oe=null):Sn=oe.sibling;var Mr=nt(it,oe,ze.value,Et);if(Mr===null){oe===null&&(oe=Sn);break}t&&oe&&Mr.alternate===null&&n(it,oe),Q=f(Mr,Q,ue),Ue===null?Jt=Mr:Ue.sibling=Mr,Ue=Mr,oe=Sn}if(ze.done)return a(it,oe),be&&ya(it,ue),Jt;if(oe===null){for(;!ze.done;ue++,ze=ot.next())ze=bt(it,ze.value,Et),ze!==null&&(Q=f(ze,Q,ue),Ue===null?Jt=ze:Ue.sibling=ze,Ue=ze);return be&&ya(it,ue),Jt}for(oe=s(oe);!ze.done;ue++,ze=ot.next())ze=ft(oe,it,ue,ze.value,Et),ze!==null&&(t&&(Sn=ze.alternate,Sn!==null&&oe.delete(Sn.key===null?ue:Sn.key)),Q=f(ze,Q,ue),Ue===null?Jt=ze:Ue.sibling=ze,Ue=ze);return t&&oe.forEach(function(u1){return n(it,u1)}),be&&ya(it,ue),Jt}function Me(it,Q,ot,Et){if(typeof ot=="object"&&ot!==null&&ot.type===C&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case I:t:{for(var Jt=ot.key;Q!==null;){if(Q.key===Jt){if(Jt=ot.type,Jt===C){if(Q.tag===7){a(it,Q.sibling),Et=c(Q,ot.props.children),nr(Et,ot),Et.return=it,it=Et;break t}}else if(Q.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===pt&&kr(Jt)===Q.type){a(it,Q.sibling),Et=c(Q,ot.props),nr(Et,ot),Et.return=it,it=Et;break t}a(it,Q);break}else n(it,Q);Q=Q.sibling}ot.type===C?(Et=zr(ot.props.children,it.mode,Et,ot.key),nr(Et,ot),Et.return=it,it=Et):(Et=cc(ot.type,ot.key,ot.props,null,it.mode,Et),nr(Et,ot),Et.return=it,it=Et)}return _(it);case T:t:{for(Jt=ot.key;Q!==null;){if(Q.key===Jt)if(Q.tag===4&&Q.stateNode.containerInfo===ot.containerInfo&&Q.stateNode.implementation===ot.implementation){a(it,Q.sibling),Et=c(Q,ot.children||[]),Et.return=it,it=Et;break t}else{a(it,Q);break}else n(it,Q);Q=Q.sibling}Et=Df(ot,it.mode,Et),Et.return=it,it=Et}return _(it);case pt:return ot=kr(ot),Me(it,Q,ot,Et)}if(yt(ot))return Bt(it,Q,ot,Et);if(P(ot)){if(Jt=P(ot),typeof Jt!="function")throw Error(r(150));return ot=Jt.call(ot),ie(it,Q,ot,Et)}if(typeof ot.then=="function")return Me(it,Q,Sc(ot),Et);if(ot.$$typeof===Y)return Me(it,Q,mc(it,ot),Et);xc(it,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,Q!==null&&Q.tag===6?(a(it,Q.sibling),Et=c(Q,ot),Et.return=it,it=Et):(a(it,Q),Et=wf(ot,it.mode,Et),Et.return=it,it=Et),_(it)):a(it,Q)}return function(it,Q,ot,Et){try{jo=0;var Jt=Me(it,Q,ot,Et);return Cs=null,Jt}catch(oe){if(oe===Rs||oe===_c)throw oe;var Ue=$n(29,oe,null,it.mode);return Ue.lanes=Et,Ue.return=it,Ue}}}var Wr=X0(!0),k0=X0(!1),ir=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ar(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ke&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=lc(t),R0(t,null,a),n}return oc(t,s,n,a),lc(t)}function $o(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Oo(t,a)}}function Vf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Xf=!1;function tl(){if(Xf){var t=As;if(t!==null)throw t}}function el(t,n,a,s){Xf=!1;var c=t.updateQueue;ir=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var H=R,at=H.next;H.next=null,_===null?f=at:_.next=at,_=H;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==_&&(R===null?mt.firstBaseUpdate=at:R.next=at,mt.lastBaseUpdate=H))}if(f!==null){var bt=c.baseState;_=0,mt=at=H=null,R=f;do{var nt=R.lane&-536870913,ft=nt!==R.lane;if(ft?(Ne&nt)===nt:(s&nt)===nt){nt!==0&&nt===Vr&&(Xf=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Bt=t,ie=R;nt=n;var Me=a;switch(ie.tag){case 1:if(Bt=ie.payload,typeof Bt=="function"){bt=Bt.call(Me,bt,nt);break t}bt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=ie.payload,nt=typeof Bt=="function"?Bt.call(Me,bt,nt):Bt,nt==null)break t;bt=B({},bt,nt);break t;case 2:ir=!0}}nt=R.callback,nt!==null&&(t.flags|=64,ft&&(t.flags|=8192),ft=c.callbacks,ft===null?c.callbacks=[nt]:ft.push(nt))}else ft={lane:nt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(at=mt=ft,H=bt):mt=mt.next=ft,_|=nt;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,c.lastBaseUpdate=ft,c.shared.pending=null}}while(!0);mt===null&&(H=bt),c.baseState=H,c.firstBaseUpdate=at,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),dr|=_,t.lanes=_,t.memoizedState=bt}}function q0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function W0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)q0(a[t],n)}var sr=Ot(null),Mc=Ot(0);function Y0(t,n){t=wa,ee(Mc,t),ee(sr,n),wa=t|n.baseLanes}function kf(){ee(Mc,wa),ee(sr,sr.current)}function qf(){wa=Mc.current,wt(sr),wt(Mc)}var Nn=Ot(null),Bn=null;function or(t){var n=t.alternate;ee(Un,Un.current&1),ee(Nn,t),Bn===null&&(n===null||sr.current!==null||n.memoizedState!==null)&&(Bn=t)}function Wf(t){ee(Un,Un.current),ee(Nn,t),Bn===null&&(Bn=t)}function Z0(t){t.tag===22?(ee(Un,Un.current),ee(Nn,t),Bn===null&&(Bn=t)):lr()}function lr(){ee(Un,Un.current),ee(Nn,Nn.current)}function ui(t){wt(Nn),Bn===t&&(Bn=null),wt(Un)}var Un=Ot(0);function nl(t,n){ee(Nn,Nn.current),ee(Un,n)}function Yf(t){wt(Un),wt(Nn),Bn===t&&(Bn=null)}function yc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||gh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,xe=null,je=null,_n=null,Ec=!1,ws=!1,Yr=!1,Tc=0,il=0,Ds=null,Ny=0;function fn(){throw Error(r(321))}function Zf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ci(t[a],n[a]))return!1;return!0}function Kf(t,n,a,s,c,f){return ba=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rt.H=t===null||t.memoizedState===null?Ng:Ug,Yr=!1,f=a(s,c),Yr=!1,ws&&(f=Q0(n,a,s,c)),K0(t),f}function K0(t){rt.H=Nc;var n=je!==null&&je.next!==null;if(ba=0,_n=je=xe=null,Ec=!1,il=0,Ds=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&pc(t)&&(vn=!0))}function Q0(t,n,a,s){xe=t;var c=0;do{if(ws&&(Ds=null),il=0,ws=!1,25<=c)throw Error(r(301));if(c+=1,_n=je=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}rt.H=By,f=n(a,s)}while(ws);return f}function Uy(){var t=rt.H,n=t.useState()[0];return n=typeof n.then=="function"?al(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(xe.flags|=1024),n}function Qf(){var t=Tc!==0;return Tc=0,t}function Jf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function jf(t){if(Ec){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ec=!1}ba=0,_n=je=xe=null,ws=!1,il=Tc=0,Ds=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?xe.memoizedState=_n=t:_n=_n.next=t,_n}function hn(){if(je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=_n===null?xe.memoizedState:_n.next;if(n!==null)_n=n,je=t;else{if(t===null)throw xe.alternate===null?Error(r(467)):Error(r(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},_n===null?xe.memoizedState=_n=t:_n=_n.next=t}return _n}function bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(t){var n=il;return il+=1,Ds===null&&(Ds=[]),t=H0(Ds,t,n),n=xe,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,rt.H=n===null||n.memoizedState===null?Ng:Ug),t}function Ac(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return al(t);if(t.$$typeof===_t)return;if(t.$$typeof===Y)return Dn(t)}throw Error(r(438,String(t)))}function $f(t){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Nt;return n.index++,a}function Aa(t,n){return typeof n=="function"?n(t):n}function Rc(t){var n=hn();return td(n,je,t)}function td(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=_=null,H=null,at=n,mt=!1;do{var bt=at.lane&-536870913;if(bt!==at.lane?(Ne&bt)===bt:(ba&bt)===bt){var nt=at.revertLane;if(nt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),bt===Vr&&(mt=!0);else if((ba&nt)===nt){at=at.next,nt===Vr&&(mt=!0);continue}else bt={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(R=H=bt,_=f):H=H.next=bt,xe.lanes|=nt,dr|=nt;bt=at.action,Yr&&a(f,bt),f=at.hasEagerState?at.eagerState:a(f,bt)}else nt={lane:bt,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(R=H=nt,_=f):H=H.next=nt,xe.lanes|=bt,dr|=bt;at=at.next}while(at!==null&&at!==n);if(H===null?_=f:H.next=R,!ci(f,t.memoizedState)&&(vn=!0,mt&&(a=As,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=H,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function ed(t){var n=hn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);ci(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function J0(t,n,a){var s=xe,c=hn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ci((je||c).memoizedState,a);if(_&&(c.memoizedState=a,vn=!0),c=c.queue,ad(tg.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||_||_n!==null&&(_n.memoizedState.tag&1)!==0,Ns(t?9:8,{destroy:void 0},$0.bind(null,s,c,a,n),null),t){if(s.flags|=2048,tn===null)throw Error(r(349));f||(ba&127)!==0||j0(s,n,a)}return a}function j0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=bc(),xe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function $0(t,n,a,s){n.value=a,n.getSnapshot=s,eg(n)&&ng(t)}function tg(t,n,a){return a(function(){eg(n)&&ng(t)})}function eg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ci(t,a)}catch{return!0}}function ng(t){var n=Ir(t,2);n!==null&&ii(n,t,2)}function nd(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Yr){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},n}function ig(t,n,a,s){return t.baseState=a,td(t,je,typeof s=="function"?s:Aa)}function Ly(t,n,a,s,c){if(Dc(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};rt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,ag(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ag(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=rt.T,_={};_.types=f!==null?f.types:null,rt.T=_;try{var R=a(c,s),H=rt.S;H!==null&&H(_,R),rg(t,n,R)}catch(at){id(t,n,at)}finally{f!==null&&_.types!==null&&(f.types=_.types),rt.T=f}}else try{f=a(c,s),rg(t,n,f)}catch(at){id(t,n,at)}}function rg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){sg(t,n,s)},function(s){return id(t,n,s)}):sg(t,n,a)}function sg(t,n,a){n.status="fulfilled",n.value=a,og(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ag(t,a)))}function id(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,og(n),n=n.next;while(n!==s)}t.action=null}function og(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function lg(t,n){return n}function cg(t,n){if(be){var a=tn.formState;if(a!==null){t:{var s=xe;if(be){if(nn){e:{for(var c=nn,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=wi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=wi(c.nextSibling),s=c.data==="F!";break t}}tr(s)}s=!1}s&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lg,lastRenderedState:n},a.queue=s,a=Cg.bind(null,xe,s),s.dispatch=a,s=nd(!1),f=cd.bind(null,xe,!1,s.queue),s=Yn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Ly.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function ug(t){var n=hn();return fg(n,je,t)}function fg(t,n,a){if(n=td(t,n,lg)[0],t=Rc(Aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=al(n)}catch(_){throw _===Rs?_c:_}else s=n;n=hn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Ns(9,{destroy:void 0},Oy.bind(null,c,a),null)),[s,f,t]}function Oy(t,n){t.action=n}function dg(t){var n=hn(),a=je;if(a!==null)return fg(n,a,t);hn(),n=n.memoizedState,a=hn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ns(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=xe.updateQueue,n===null&&(n=bc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function hg(){return hn().memoizedState}function Cc(t,n,a,s){var c=Yn();xe.flags|=t,c.memoizedState=Ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function wc(t,n,a,s){var c=hn();s=s===void 0?null:s;var f=c.memoizedState.inst;je!==null&&s!==null&&Zf(s,je.memoizedState.deps)?c.memoizedState=Ns(n,f,a,s):(xe.flags|=t,c.memoizedState=Ns(1|n,f,a,s))}function pg(t,n){Cc(8390656,8,t,n)}function ad(t,n){wc(2048,8,t,n)}function Py(t){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=bc(),xe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function mg(t){var n=hn().memoizedState;return Py({ref:n,nextImpl:t}),function(){if((ke&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function gg(t,n){return wc(4,2,t,n)}function _g(t,n){return wc(4,4,t,n)}function vg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Sg(t,n,a){a=a!=null?a.concat([t]):null,wc(4,4,vg.bind(null,n,t),a)}function rd(){}function xg(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Zf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Mg(t,n){var a=hn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Zf(n,s[1]))return s[0];if(s=t(),Yr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s}function sd(t,n,a){return a===void 0||(ba&1073741824)!==0&&(Ne&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=N_(),xe.lanes|=t,dr|=t,a)}function yg(t,n,a,s){return ci(a,n)?a:sr.current!==null?(t=sd(t,a,s),ci(t,n)||(vn=!0),t):(ba&106)===0||(ba&1073741824)!==0&&(Ne&261930)===0?(vn=!0,t.memoizedState=a):(t=N_(),xe.lanes|=t,dr|=t,n)}function Eg(t,n,a,s,c){var f=Tt.p;Tt.p=f!==0&&8>f?f:8;var _=rt.T,R={};R.types=_!==null?_.types:null,rt.T=R,cd(t,!1,n,a);try{var H=c(),at=rt.S;if(at!==null&&at(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=Dy(H,s);rl(t,n,mt,pi(t))}else rl(t,n,s,pi(t))}catch(bt){rl(t,n,{then:function(){},status:"rejected",reason:bt},pi())}finally{Tt.p=f,_!==null&&R.types!==null&&(_.types=R.types),rt.T=_}}function Iy(){}function od(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Tg(t).queue;Eg(t,c,n,jt,a===null?Iy:function(){return bg(t),a(s)})}function Tg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:jt,baseState:jt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:jt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function bg(t){var n=Tg(t);n.next===null&&(n=t.alternate.memoizedState),rl(t,n.next.queue,{},pi())}function ld(){return Dn(Qs)}function Ag(){return hn().memoizedState}function Rg(){return hn().memoizedState}function zy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();t=ar(a);var s=rr(n,t,a);s!==null&&(ii(s,n,a),$o(s,n,a)),n={cache:If()},t.payload=n;return}n=n.return}}function Fy(t,n,a){var s=pi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dc(t)?wg(n,a):(a=Rf(t,n,a,s),a!==null&&(ii(a,t,s),Dg(a,n,s)))}function Cg(t,n,a){var s=pi();rl(t,n,a,s)}function rl(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dc(t))wg(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(c.hasEagerState=!0,c.eagerState=R,ci(R,_))return oc(t,n,c,0),tn===null&&sc(),!1}catch{}if(a=Rf(t,n,c,s),a!==null)return ii(a,t,s),Dg(a,n,s),!0}return!1}function cd(t,n,a,s){if(s={lane:2,revertLane:$d(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Dc(t)){if(n)throw Error(r(479))}else n=Rf(t,a,s,2),n!==null&&ii(n,t,2)}function Dc(t){var n=t.alternate;return t===xe||n!==null&&n===xe}function wg(t,n){ws=Ec=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Dg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Oo(t,a)}}var Nc={readContext:Dn,use:Ac,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},Ng={readContext:Dn,use:Ac,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:pg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cc(4194308,4,vg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cc(4194308,4,t,n)},useInsertionEffect:function(t,n){Cc(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var s=t();if(Yr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Yn();if(a!==void 0){var c=a(n);if(Yr){Le(!0);try{a(n)}finally{Le(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Fy.bind(null,xe,t),[s.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=nd(t);var n=t.queue,a=Cg.bind(null,xe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rd,useDeferredValue:function(t,n){var a=Yn();return sd(a,t,n)},useTransition:function(){var t=nd(!1);return t=Eg.bind(null,xe,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=xe,c=Yn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),tn===null)throw Error(r(349));(Ne&127)!==0||j0(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,pg(tg.bind(null,s,f,t),[t]),s.flags|=2048,Ns(9,{destroy:void 0},$0.bind(null,s,f,a,n),null),a},useId:function(){var t=Yn(),n=tn.identifierPrefix;if(be){var a=Ki,s=Zi;a=(s&~(1<<32-_e(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ny++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ld,useFormState:cg,useActionState:cg,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cd.bind(null,xe,!0,a),a.dispatch=n,[t,n]},useMemoCache:$f,useCacheRefresh:function(){return Yn().memoizedState=zy.bind(null,xe)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((ke&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ug={readContext:Dn,use:Ac,useCallback:xg,useContext:Dn,useEffect:ad,useImperativeHandle:Sg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Mg,useReducer:Rc,useRef:hg,useState:function(){return Rc(Aa)},useDebugValue:rd,useDeferredValue:function(t,n){var a=hn();return yg(a,je.memoizedState,t,n)},useTransition:function(){var t=Rc(Aa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:al(t),n]},useSyncExternalStore:J0,useId:Ag,useHostTransitionStatus:ld,useFormState:ug,useActionState:ug,useOptimistic:function(t,n){var a=hn();return ig(a,je,t,n)},useMemoCache:$f,useCacheRefresh:Rg,useEffectEvent:mg},By={readContext:Dn,use:Ac,useCallback:xg,useContext:Dn,useEffect:ad,useImperativeHandle:Sg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:Mg,useReducer:ed,useRef:hg,useState:function(){return ed(Aa)},useDebugValue:rd,useDeferredValue:function(t,n){var a=hn();return je===null?sd(a,t,n):yg(a,je.memoizedState,t,n)},useTransition:function(){var t=ed(Aa)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:al(t),n]},useSyncExternalStore:J0,useId:Ag,useHostTransitionStatus:ld,useFormState:dg,useActionState:dg,useOptimistic:function(t,n){var a=hn();return je!==null?ig(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$f,useCacheRefresh:Rg,useEffectEvent:mg};function ud(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:B({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fd={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=pi(),c=ar(s);c.payload=n,a!=null&&(c.callback=a),n=rr(t,c,s),n!==null&&(ii(n,t,s),$o(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=pi(),c=ar(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=rr(t,c,s),n!==null&&(ii(n,t,s),$o(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=pi(),s=ar(a);s.tag=2,n!=null&&(s.callback=n),n=rr(t,s,a),n!==null&&(ii(n,t,a),$o(n,t,a))}};function Lg(t,n,a,s,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!qo(a,s)||!qo(c,f):!0}function Og(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&fd.enqueueReplaceState(n,n.state,null)}function Zr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=B({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Pg(t){rc(t)}function Ig(t){console.error(t)}function zg(t){rc(t)}function Uc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Fg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function dd(t,n,a){return a=ar(a),a.tag=3,a.payload={element:null},a.callback=function(){Uc(t,n)},a}function Bg(t){return t=ar(t),t.tag=3,t}function Hg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Fg(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Fg(n,a,s),typeof c!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function Hy(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,c,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?$c():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===vc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Qd(t,s,c)),!1;case 22:return a.flags|=65536,s===vc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Qd(t,s,c)),!1}throw Error(r(435,a.tag))}return Qd(t,s,c),$c(),!1}if(be)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Uf&&(t=Error(r(422),{cause:s}),Zo(Ti(t,a)))):(s!==Uf&&(n=Error(r(423),{cause:s}),Zo(Ti(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Ti(s,a),c=dd(t.stateNode,s,c),Vf(t,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=Ti(f,a),hl===null?hl=[f]:hl.push(f),dn!==4&&(dn=2),n===null)return!0;s=Ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=dd(a.stateNode,s,t),Vf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(hr===null||!hr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Bg(c),Hg(c,t,a,s),Vf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var hd=Error(r(461)),vn=!1;function yn(t,n,a,s){n.child=t===null?k0(n,null,a,s):Wr(n,t.child,a,s)}function Gg(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var R in s)R!=="ref"&&(_[R]=s[R])}else _=s;return Gr(n),s=Kf(t,n,a,_,f,c),R=Qf(),t!==null&&!vn?(Jf(t,n,c),Ra(t,n,c)):(be&&R&&fc(n),n.flags|=1,yn(t,n,s,c),n.child)}function Vg(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Cf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xg(t,n,f,s,c)):(t=cc(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Md(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:qo,a(_,s)&&t.ref===n.ref)return Ra(t,n,c)}return n.flags|=1,t=Ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Xg(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(qo(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Md(t,c))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,Ra(t,n,c)}return pd(t,n,a,s,c)}function kg(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return qg(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gc(n,f!==null?f.cachePool:null),f!==null?Y0(n,f):kf(),Z0(n);else return s=n.lanes=536870912,qg(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(gc(n,f.cachePool),Y0(n,f),lr(),n.memoizedState=null):(t!==null&&gc(n,null),kf(),lr());return yn(t,n,c,a),n.child}function sl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qg(t,n,a,s,c){var f=Ff();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gc(n,null),kf(),Z0(n),t!==null&&Hr(t,n,s,!0),n.childLanes=c,null}function Lc(t,n){return n=Oc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Wg(t,n,a){return Wr(n,t.child,null,a),t=Lc(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function Gy(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(s.mode==="hidden")return t=Lc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},sl(null,t);if(Wf(n),(t=nn)?(t=vv(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=w0(t),a.return=n,n.child=a,bn=n,nn=null)):t=null,t===null)throw tr(n);return n.lanes=536870912,null}return Lc(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Wf(n),c)if(n.flags&256)n.flags&=-257,n=Wg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Hr(t,n,a,!1),c=(a&t.childLanes)!==0,vn||c){if(sr.current===null){if(s=tn,s!==null&&(_=Po(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ir(t,_),ii(s,t,_),hd;$c()}n=Wg(t,n,a)}else t=f.treeContext,nn=wi(_.nextSibling),bn=n,be=!0,$a=null,Ri=!1,t!==null&&U0(n,t),n=Lc(n,s),n.flags|=134221824;return n}return t=Ma(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Us(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function pd(t,n,a,s,c){return Gr(n),a=Kf(t,n,a,s,void 0,c),s=Qf(),t!==null&&!vn?(Jf(t,n,c),Ra(t,n,c)):(be&&s&&fc(n),n.flags|=1,yn(t,n,a,c),n.child)}function Yg(t,n,a,s,c,f){return Gr(n),n.updateQueue=null,a=Q0(n,s,a,c),K0(t),s=Qf(),t!==null&&!vn?(Jf(t,n,f),Ra(t,n,f)):(be&&s&&fc(n),n.flags|=1,yn(t,n,a,f),n.child)}function Zg(t,n,a,s,c){if(Gr(n),n.stateNode===null){var f=ys,_=a.contextType;typeof _=="object"&&_!==null&&(f=Dn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=fd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Hf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Dn(_):ys,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ud(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&fd.enqueueReplaceState(f,f.state,null),el(n,s,f,c),tl(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=Zr(a,R);f.props=H;var at=f.context,mt=a.contextType;_=ys,typeof mt=="object"&&mt!==null&&(_=Dn(mt));var bt=a.getDerivedStateFromProps;mt=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||at!==_)&&Og(n,f,s,_),ir=!1;var nt=n.memoizedState;f.state=nt,el(n,s,f,c),tl(),at=n.memoizedState,R||nt!==at||ir?(typeof bt=="function"&&(ud(n,a,bt,s),at=n.memoizedState),(H=ir||Lg(n,a,H,s,nt,at,_))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=_,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Gf(t,n),_=n.memoizedProps,mt=Zr(a,_),f.props=mt,bt=n.pendingProps,nt=f.context,at=a.contextType,H=ys,typeof at=="object"&&at!==null&&(H=Dn(at)),R=a.getDerivedStateFromProps,(at=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==bt||nt!==H)&&Og(n,f,s,H),ir=!1,nt=n.memoizedState,f.state=nt,el(n,s,f,c),tl();var ft=n.memoizedState;_!==bt||nt!==ft||ir||t!==null&&t.dependencies!==null&&pc(t.dependencies)?(typeof R=="function"&&(ud(n,a,R,s),ft=n.memoizedState),(mt=ir||Lg(n,a,mt,s,nt,ft,H)||t!==null&&t.dependencies!==null&&pc(t.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ft,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ft,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ft),f.props=s,f.state=ft,f.context=H,s=mt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Us(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Wr(n,t.child,null,c),n.child=Wr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ra(t,n,c),t}function Kg(t,n,a,s){return Fr(),n.flags|=256,yn(t,n,a,s),n.child}var md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gd(t){return{baseLanes:t,cachePool:F0()}}function _d(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=hi),t}function Qg(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Un.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?or(n):lr(),(t=nn)?(t=vv(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ja!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=w0(t),a.return=n,n.child=a,bn=n,nn=null)):t=null,t===null)throw tr(n);return gh(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(lr(),c=n.mode,f=Oc({mode:"hidden",children:f},c),s=zr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=gd(a),s.childLanes=_d(t,_,a),n.memoizedState=md,sl(null,s)):(or(n),vd(n,f))}var R=t.memoizedState;if(R!==null){var H=R.dehydrated;if(H!==null)return Vy(t,n,f,_,s,H,R,a)}return c?(lr(),c=s.fallback,f=n.mode,R=t.child,H=R.sibling,s=Ma(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,H!==null?c=Ma(H,c):(c=zr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,sl(null,s),s=n.child,c=t.child.memoizedState,c===null?c=gd(a):(f=c.cachePool,f!==null?(R=gn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=F0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=_d(t,_,a),n.memoizedState=md,sl(t.child,s)):(or(n),a=t.child,t=a.sibling,a=Ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function vd(t,n){return n=Oc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Oc(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Pc(t,n,a){return Wr(n,t.child,null,a),t=vd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vy(t,n,a,s,c,f,_,R){if(a)return n.flags&256?(or(n),n.flags&=-257,Pc(t,n,R)):n.memoizedState!==null?(lr(),n.child=t.child,n.flags|=128,null):(lr(),f=c.fallback,_=n.mode,c=Oc({mode:"visible",children:c.children},_),f=zr(f,_,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Wr(n,t.child,null,R),c=n.child,c.memoizedState=gd(R),c.childLanes=_d(t,s,R),n.memoizedState=md,sl(null,c));if(or(n),gh(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var H=s.dgst;return s=H,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Zo({value:c,source:null,stack:null})),Pc(t,n,R)}if(vn||Hr(t,n,R,!1),s=(R&t.childLanes)!==0,vn||s){if(sr.current!==null)return Pc(t,n,R);if(s=tn,s!==null&&(c=Po(s,R),c!==0&&c!==_.retryLane))throw _.retryLane=c,Ir(t,c),ii(s,t,c),hd;return mh(f)||$c(),Pc(t,n,R)}return mh(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,nn=wi(f.nextSibling),bn=n,be=!0,$a=null,Ri=!1,t!==null&&U0(n,t),n=vd(n,c.children),n.flags|=134221824,n)}function Jg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),hc(t.return,n,a)}function jg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&yc(a)===null&&(n=t),t=t.sibling}return n}function Ic(t,n,a,s,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Sd(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function xd(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Un.current;if(n.flags&128)return nl(n,_),null;var R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,nl(n,_),c==="backwards"&&t!==null?(Sd(t),yn(t,n,s,a),Sd(t)):yn(t,n,s,a),s=be?Yo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jg(t,a,n);else if(t.tag===19)Jg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=jg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Sd(n)),Ic(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&yc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ic(n,!0,a,null,f,s);break;case"together":Ic(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=jg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ic(n,!1,c,a,f,s)}return n.child}function $g(t,n,a){var s=n.pendingProps;return er(n,n.type,s.value),yn(t,n,s.children,a),n.child}function Ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),dr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Md(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pc(t)))}function Xy(t,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),er(n,gn,t.memoizedState.cache),Fr();break;case 27:case 5:He(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:er(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return or(n),n.flags|=128,null;s=Hr(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Qg(t,n,a):(or(n),t=Ra(t,n,a),t!==null?t.sibling:null)}or(n);break;case 19:if(n.flags&128)return xd(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Hr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return xd(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),nl(n,Un.current),s)break;return null;case 22:return n.lanes=0,kg(t,n,a,n.pendingProps);case 24:er(n,gn,t.memoizedState.cache)}return Ra(t,n,a)}function t_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Md(t,a)&&(n.flags&128)===0)return vn=!1,Xy(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,be&&(n.flags&1048576)!==0&&N0(n,Yo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=kr(n.elementType),n.type=t,typeof t=="function")Cf(t)?(s=Zr(t,s),n.tag=1,n=Zg(null,n,t,s,a)):(n.tag=0,n=pd(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===X){n.tag=11,n=Gg(null,n,t,s,a);break t}else if(c===j){n.tag=14,n=Vg(null,n,t,s,a);break t}else if(c===Y){n.tag=10,n.type=t,n=$g(null,n,a);break t}}throw n=dt(t)||t,Error(r(306,n,""))}}return n;case 0:return pd(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Zr(s,n.pendingProps),Zg(t,n,s,c,a);case 3:t:{if(W(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Gf(t,n),el(n,s,null,a);var _=n.memoizedState;if(s=_.cache,er(n,gn,s),s!==f.cache&&Pf(n,[gn],a,!0),tl(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Kg(t,n,s,a);break t}else if(s!==c){c=Ti(Error(r(424)),n),Zo(c),n=Kg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=wi(t.firstChild),bn=n,be=!0,$a=null,Ri=!0,a=k0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Fr(),s===c){n=Ra(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return Us(t,n),t===null?(a=bv(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(n.stateNode=av(n.type,n.pendingProps,he.current,n)):n.memoizedState=bv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&be&&(s=n.stateNode=Mv(n.type,n.pendingProps,he.current),bn=n,Ri=!0,c=nn,gr(n.type)?(_h=c,nn=wi(s.firstChild)):nn=c),yn(t,n,n.pendingProps.children,a),Us(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=nn)&&(s=zE(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,bn=n,nn=wi(s.firstChild),Ri=!1,c=!0):c=!1),c||tr(n)),He(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,lh(c,f)?s=null:_!==null&&lh(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Kf(t,n,Uy,null,null,a),Qs._currentValue=c),Us(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=nn)&&(a=FE(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,bn=n,nn=null,t=!0):t=!1),t||tr(n)),null;case 13:return Qg(t,n,a);case 4:return W(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Wr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return Gg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Us(t,n),yn(t,n,s,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return $g(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Gr(n),c=Dn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return Vg(t,n,n.type,n.pendingProps,a);case 15:return Xg(t,n,n.type,n.pendingProps,a);case 19:return xd(t,n,a);case 31:return Gy(t,n,a);case 22:return kg(t,n,a,n.pendingProps);case 24:return Gr(n),s=Dn(gn),t===null?(c=Ff(),c===null&&(c=tn,f=If(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Hf(n),er(n,gn,c)):((t.lanes&a)!==0&&(Gf(t,n),el(n,null,null,a),tl()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),er(n,gn,s)):(s=f.cache,er(n,gn,s),s!==c.cache&&Pf(n,[gn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:be&&fc(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Us(t,n),yn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ca(t){t.flags|=4}function yd(t,n,a,s,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?wv(n,s):wv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(P_())t.flags|=8192;else throw qr=vc,Bf}else t.flags&=-16777217}function e_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Dv(n))if(P_())t.flags|=8192;else throw qr=vc,Bf}function zc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Lo():536870912,t.lanes|=n,zs|=n)}function ol(t,n){if(!be)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ky(t,n,a){var s=n.pendingProps;switch(Nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ta(gn),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(bs(n)?Ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lf())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ca(n),f!==null?(an(n),e_(n,f)):(an(n),yd(n,c,null,s,a))):f?f!==t.memoizedState?(Ca(n),an(n),e_(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ca(n),an(n),yd(n,c,t,s,a)),null;case 27:if(z(n),a=he.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}t=de.current,bs(n)?L0(n):(t=Mv(c,s,a),n.stateNode=t,Ca(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(z(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=de.current,bs(n))L0(n);else{var _=vl(he.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[A]=n,f[Z]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(On(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ca(n)}}return an(n),n.subtreeFlags&=-33554433,yd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=he.current,bs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[A]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||tv(t.nodeValue,a)),t||tr(n,!0)}else t=vl(t).createTextNode(s),t[A]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=bs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[A]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=Lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=bs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[A]=n}else Fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Lf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zc(n,n.updateQueue),an(n),null);case 4:return sn(),t===null&&ih(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Ta(n.type),an(n),null;case 19:if(Yf(n),s=n.memoizedState,s===null)return an(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ol(s,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=yc(t),f!==null){for(n.flags|=128,ol(s,!1),t=f.updateQueue,n.updateQueue=t,zc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)C0(a,t),a=a.sibling;return nl(n,Un.current&1|2),be&&ya(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Zt()>Kc&&(n.flags|=128,c=!0,ol(s,!1),n.lanes=4194304)}else{if(!c)if(t=yc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,zc(n,t),ol(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!be)return an(n),null}else 2*Zt()-s.renderingStartTime>Kc&&a!==536870912&&(n.flags|=128,c=!0,ol(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Zt(),t.sibling=null,f=Un.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||be?nl(n,f):(a=f,ee(Nn,n),ee(Un,a),Bn===null&&(Bn=n)),be&&ya(n,s.treeForkCount),t}return an(n),null;case 22:case 23:return ui(n),qf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&zc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&wt(Xr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ta(gn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function qy(t,n){switch(Nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ta(gn),sn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return z(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(r(340));Fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Yf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return Ta(n.type),null;case 22:case 23:return ui(n),qf(),t!==null&&wt(Xr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ta(gn),null;case 25:return null;default:return null}}function n_(t,n){switch(Nf(n),n.tag){case 3:Ta(gn),sn();break;case 26:case 27:case 5:z(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Yf(n);break;case 10:Ta(n.type);break;case 22:case 23:ui(n),qf(),t!==null&&wt(Xr);break;case 24:Ta(gn)}}function ll(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(R){Ze(n,n.return,R)}}function cr(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var _=s.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,c=n;var H=a,at=R;try{at()}catch(mt){Ze(c,H,mt)}}}s=s.next}while(s!==f)}}catch(mt){Ze(n,n.return,mt)}}function i_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{W0(n,a)}catch(s){Ze(t,t.return,s)}}}function a_(t,n,a){a.props=Zr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ze(t,n,s)}}function Qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,f=Sa(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=fv(f)),s=c.ref;break;case 7:if(t.stateNode===null){var _=new mi(t);g(t.child,!1,PE,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(R){Ze(t,n,R)}}function Ln(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ze(t,n,c)}else a.current=null}function Fc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)_v(t.stateNode,n[a])}function r_(t){for(var n=t.return;n!==null&&(Td(n)&&_v(t.stateNode,n.stateNode),!Ed(n));)n=n.return}function cl(t){for(var n=t.return;n!==null&&(Td(n)&&IE(t.stateNode,n.stateNode),!Ed(n));)n=n.return}function Ed(t){return t.tag===5||t.tag===3||t.tag===27}function Td(t){return t&&t.tag===7&&t.stateNode!==null}function bd(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ze(t,t.return,c)}}function Ad(t,n,a){try{var s=t.stateNode;_E(s,t.type,a,n),s[Z]=n}catch(c){Ze(t,t.return,c)}}function s_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gr(t.type)||t.tag===4}function Rd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||s_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),Fc(t,s),Te=!0;else if(c!==4&&(c===27&&(Fc(t,s),s=null,gr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Cd(t,n,a,s),t=t.sibling;t!==null;)Cd(t,n,a,s),t=t.sibling}function Bc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Fc(t,s),Te=!0;else if(c!==4&&(c===27&&(Fc(t,s),s=null,gr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Bc(t,n,a,s),t=t.sibling;t!==null;)Bc(t,n,a,s),t=t.sibling}function o_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,s,a),n[A]=t,n[Z]=a}catch(f){Ze(t,t.return,f)}}var Hc=!1,fi=null;function l_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Hc=!0)}var Ji=null;function c_(){var t=Ji;return Ji=null,t}var ti=0;function Ls(t,n,a,s,c){return ti=0,u_(t.child,n,a,s,c)}function u_(t,n,a,s,c){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var R=fh(_);s.push(R),R.view&&(f=!0)}else f||fh(_).view&&(f=!0);Hc=!0,cv(_,ti===0?n:n+"_"+ti,a),ti++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||u_(t.child,n,a,s,c)&&(f=!0));t=t.sibling}return f}function ji(t,n){for(;t!==null;)t.tag===5?uv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function Gc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Gc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(Ls(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function wd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=Sa(s,a),f=xa(s.default,a.paired?s.share:s.enter);f!=="none"?Ls(t,c,f,null,!1)?(Gc(t),a.paired||n||Gs(t,s.onEnter)):ji(t.child,!1):Gc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)wd(t,n),t=t.sibling;else Gc(t)}function Dd(t){if(fi!==null&&fi.size!==0){var n=fi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=xa(a.default,a.share);if(f!=="none"&&(Ls(t,s,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Gs(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}Dd(t)}t=t.sibling}}}function Nd(t){if(t.tag===30){var n=t.memoizedProps,a=Sa(n,t.stateNode),s=fi!==null?fi.get(a):void 0,c=xa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Ls(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,fi.delete(a),Gs(t,n.onShare)):Gs(t,n.onExit):ji(t.child,!1)),fi!==null&&Dd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Nd(t),t=t.sibling;else fi!==null&&Dd(t)}function f_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=Sa(n,t.stateNode);n=xa(n.default,n.update),t.flags&=-5,n!=="none"&&Ls(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&f_(t);t=t.sibling}}function Ud(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}Ud(t)}t=t.sibling}}function Vc(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),Ud(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Vc(t),t=t.sibling;else Ud(t)}function d_(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&d_(t),t=t.sibling}function Ld(t,n,a,s,c,f,_){for(var R=!1;n!==null;){if(n.tag===5){var H=n.stateNode;if(f!==null&&ti<f.length){var at=f[ti],mt=fh(H);(at.view||mt.view)&&(R=!0);var bt;if(bt=(t.flags&4)===0)if(mt.clip)bt=!0;else{bt=at.rect;var nt=mt.rect;bt=bt.y!==nt.y||bt.x!==nt.x||bt.height!==nt.height||bt.width!==nt.width}bt&&(t.flags|=4),mt.abs?mt=!at.abs:(at=at.rect,mt=mt.rect,mt=at.height!==mt.height||at.width!==mt.width),mt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&cv(H,ti===0?a:a+"_"+ti,c),R&&(t.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(H,ti===0?s:s+"_"+ti,n.memoizedProps)),ti++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Ld(t,n.child,a,s,c,f,_)&&(R=!0));n=n.sibling}return R}function h_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=Sa(a,s),f=xa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var R=t.child;ti=0,c=Ld(s,R,c,c,f,_,!1),(t.flags&4)!==0&&c&&Gs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&h_(t);t=t.sibling}}var An=!1,We=!1,$i=!1,Od=!1,p_=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ta=!1,ul=!1,Xc=!1,Pd=!1;function Wy(t,n,a){if(t=t.containerInfo,sh=Js,t=v0(t),Mf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var R=0,H=-1,at=-1,mt=0,bt=0,nt=t,ft=null;e:for(;;){for(var Bt;nt!==s||f!==0&&nt.nodeType!==3||(H=R+f),nt!==_||c!==0&&nt.nodeType!==3||(at=R+c),nt.nodeType===3&&(R+=nt.nodeValue.length),(Bt=nt.firstChild)!==null;)ft=nt,nt=Bt;for(;;){if(nt===t)break e;if(ft===s&&++mt===f&&(H=R),ft===_&&++bt===c&&(at=R),(Bt=nt.nextSibling)!==null)break;nt=ft,ft=nt.parentNode}nt=Bt}s=H===-1||at===-1?null:{start:H,end:at}}else s=null}s=s||{start:0,end:0}}else s=null;for(oh={focusedElem:t,selectionRange:s},Js=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(t=Rn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&Nd(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&l_(t),kc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Nd(s),kc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&l_(t),kc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Rn=s):(a&&f_(t),kc(a))}}fi=null}function kc(t){for(;Rn!==null;){var n=Rn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var _=Zr(n.type,c);a=f.getSnapshotBeforeUpdate(_,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Ze(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)ph(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":ph(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Sa(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=xa(c.default,c.update),c!=="none"&&Ls(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function m_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&ll(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ze(a,a.return,_)}else{var c=Zr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ze(a,a.return,_)}}s&64&&i_(a),s&512&&Qi(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{W0(t,n)}catch(_){Ze(a,a.return,_)}}break;case 27:n===null&&s&4&&o_(a);case 26:case 5:ea(t,a),n===null&&s&4&&bd(a),s&512&&Qi(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&S_(t,a);break;case 13:ea(t,a),s&4&&x_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=aE.bind(null,a),BE(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||We;n=An,c=We,An=s,(We=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Pi(t,a,s)):ea(t,a),An=n,We=c}break;case 30:ea(t,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ea(t,a)}}function Id(t,n){for(t=t.child;t!==null;)g_(t,n),t=t.sibling}function g_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(H){Ze(t,t.return,H)}zd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Te=!0}catch(H){Ze(t,t.return,H)}break;case 18:try{var R=t.stateNode;n?lv(R,!0):lv(t.stateNode,!1)}catch(H){Ze(t,t.return,H)}break;case 22:case 23:t.memoizedState===null&&Id(t,n);break;default:Id(t,n)}}function zd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:g_(a,s);break t;case 22:a.memoizedState===null&&zd(a,s);break t;default:zd(a,s)}}t=t.sibling}}function __(t){var n=t.alternate;n!==null&&(t.alternate=null,__(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ne(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,ei=!1;function Li(t,n,a){for(a=a.child;a!==null;)v_(t,n,a),a=a.sibling}function v_(t,n,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:We||Ln(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!We&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Ln(a,n),cl(a);var s=rn,c=ei;gr(a.type)&&(rn=a.stateNode,ei=!1),Li(t,n,a),yv(a.stateNode,a.type,a.memoizedProps),rn=s,ei=c;break;case 5:We||Ln(a,n),cl(a);case 6:if(a.tag===6&&cl(a),s=rn,c=ei,rn=null,Li(t,n,a),rn=s,ei=c,rn!==null)if(ei)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode),Te=!0}catch(f){Ze(a,n,f)}else try{rn.removeChild(a.stateNode),Te=!0}catch(f){Ze(a,n,f)}break;case 18:rn!==null&&(ei?(t=rn,ov(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),js(t)):ov(rn,a.stateNode));break;case 4:s=rn,c=ei,rn=a.stateNode.containerInfo,ei=!0,Li(t,n,a),rn=s,ei=c;break;case 0:case 11:case 14:case 15:cr(2,a,n),We||cr(4,a,n),Li(t,n,a);break;case 1:We||(Ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&a_(a,n,s)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:We=(s=We)||a.memoizedState!==null,Li(t,n,a),We=s;break;case 30:Ln(a,n),Li(t,n,a);break;case 7:We||Ln(a,n),Li(t,n,a);break;default:Li(t,n,a)}}function S_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{js(t)}catch(a){Ze(n,n.return,a)}}}function x_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{js(t)}catch(a){Ze(n,n.return,a)}}function Yy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new p_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new p_),n;default:throw Error(r(435,t.tag))}}function qc(t,n){var a=Yy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=rE.bind(null,t,s);s.then(c,c)}})}function Zn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],_=t,R=n,H=R;t:for(;H!==null;){switch(H.tag){case 27:if(gr(H.type)){rn=H.stateNode,ei=!1;break t}break;case 5:rn=H.stateNode,ei=!1;break t;case 3:case 4:rn=H.stateNode.containerInfo,ei=!0;break t}H=H.return}if(rn===null)throw Error(r(160));v_(_,R,f),rn=null,ei=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)M_(n,t,a),n=n.sibling}var Oi=null;function M_(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var _=s[f];_.ref.impl=_.nextImpl}Zn(n,t,a),Kn(t),c&4&&(cr(3,t,t.return),ll(3,t),cr(5,t,t.return));break;case 1:Zn(n,t,a),Kn(t),c&512&&(We||s===null||Ln(s,s.return)),c&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Oi,Zn(n,t,a),Kn(t),c&512&&(We||s===null||Ln(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=av(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Ft]||s[A]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),On(s,n,a),s[A]=t,Ee(s),n=s;break t;case"link":if(f=Cv("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;case"meta":if(f=Cv("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[A]=t,Ee(s),n=s}t.stateNode=n}else An||Mh(f,t.type,t.stateNode);else t.stateNode=Rv(f,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||We||n.parentNode.removeChild(n)):c.count--,a===null?An||Mh(f,t.type,t.stateNode):Rv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ad(t,t.memoizedProps,s.memoizedProps);break;case 27:Zn(n,t,a),Kn(t),c&512&&(We||s===null||Ln(s,s.return)),s!==null&&c&4&&Ad(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=$i,$i=!1,Zn(n,t,a),$i=f,Kn(t),c&512&&(We||s===null||Ln(s,s.return)),t.flags&32){n=t.stateNode;try{ms(n,""),Te=!0}catch(mt){Ze(t,t.return,mt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,Ad(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Od=!0);break;case 6:if(Zn(n,t,a),Kn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Te=!0}catch(mt){Ze(t,t.return,mt)}}break;case 3:if(Te=!1,su=null,f=Oi,Oi=Sl(n.containerInfo),Zn(n,t,a),Oi=f,Kn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{js(n.containerInfo)}catch(mt){Ze(t,t.return,mt)}Od&&(Od=!1,y_(t)),Te=!1;break;case 4:c=$i,$i=An,s=Xe(),f=Oi,Oi=Sl(t.stateNode.containerInfo),Zn(n,t,a),Kn(t),Oi=f,Te&&ul&&(Xc=!0),Te=s,$i=c;break;case 12:Zn(n,t,a),Kn(t);break;case 31:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qc(t,n)));break;case 13:Zn(n,t,a),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zc=Zt()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qc(t,n)));break;case 22:f=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var R=An,H=We,at=$i;An=R||f,$i=at||f,We=H||_,Zn(n,t,a),We=H,$i=at,An=R,Kn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||_||An||We||(n=_||We,a=An,s=We,An=f||An,We=n,ur(t,2),An=a,We=s),!f&&$i||Id(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,qc(t,a))));break;case 19:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,qc(t,n)));break;case 30:c&512&&(We||s===null||Ln(s,s.return)),c=Xe(),f=ul,_=(a&335544064)===a,R=t.memoizedProps,ul=_&&xa(R.default,R.update)!=="none",Zn(n,t,a),Kn(t),_&&s!==null&&Te&&(t.flags|=4),ul=f,Te=c;break;case 21:break;case 7:c&512&&(We||s===null||Ln(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Zn(n,t,a),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(s_(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(Td(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(Ed(c))break;c=c.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,H=Rd(t);Bc(t,H,R,_);break;case 5:var at=a.stateNode;a.flags&32&&(ms(at,""),a.flags&=-33);var mt=Rd(t);Bc(t,mt,at,_);break;case 3:case 4:var bt=a.stateNode.containerInfo,nt=Rd(t);Cd(t,nt,bt,_);break;default:throw Error(r(161))}}catch(ft){Ze(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function y_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;y_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Js=!0,n.reset(),Js=!1),t=t.sibling}}function Os(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)E_(n,t),n=n.sibling;else h_(n)}function E_(t,n){var a=t.alternate;if(a===null)wd(t,!1);else switch(t.tag){case 3:if(Pd=ta=!1,c_(),Os(n,t),!ta&&!Xc){if(t=Ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];uv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Pd=!0}Ji=null;break;case 5:Os(n,t);break;case 4:s=ta,ta=!1,Os(n,t),ta&&(Xc=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?wd(t,!1):Os(n,t));break;case 30:s=ta,c=c_(),ta=!1,Os(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=Sa(f,_),_=Sa(a.memoizedProps,_);var R=xa(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,ti=0,n=Ld(t,a,n,_,R,f,!0),ti!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Gs(t,t.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ta=(t.flags&32)!==0?!0:s;break;default:Os(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)m_(t,n.alternate,n),n=n.sibling}function ur(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:cr(4,a,a.return),ur(a,s);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&a_(a,a.return,c),ur(a,s);break;case 27:(s&2)!==0&&yv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||cl(a),ur(a,s);break;case 6:cl(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||We||c.parentNode.removeChild(c),ur(a,s);break;case 22:a.memoizedState===null&&ur(a,s);break;case 30:Ln(a,a.return),ur(a,s);break;case 7:Ln(a,a.return);default:ur(a,s)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,_=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Pi(c,f,a),ll(4,f);break;case 1:if(Pi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(mt){Ze(s,s.return,mt)}if(s=f,c=s.updateQueue,c!==null){var H=s.stateNode;try{var at=c.shared.hiddenCallbacks;if(at!==null)for(c.shared.hiddenCallbacks=null,c=0;c<at.length;c++)q0(at[c],H)}catch(mt){Ze(s,s.return,mt)}}R&&_&64&&i_(f),Qi(f,f.return);break;case 27:(a&2)!==0&&o_(f);case 5:f.tag!==5&&f.tag!==27||r_(f),Pi(c,f,a),R&&s===null&&_&4&&bd(f),Qi(f,f.return);break;case 6:r_(f);break;case 26:H=f.stateNode,f.memoizedState!==null||H===null||An||Mh(Sl(H.ownerDocument),f.type,H),Pi(c,f,a),R&&s===null&&_&4&&bd(f),Qi(f,f.return);break;case 12:Pi(c,f,a);break;case 31:Pi(c,f,a),R&&_&4&&S_(c,f);break;case 13:Pi(c,f,a),R&&_&4&&x_(c,f);break;case 22:f.memoizedState===null&&Pi(c,f,a),Qi(f,f.return);break;case 30:Pi(c,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Pi(c,f,a)}n=n.sibling}}function Fd(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ko(a))}function Bd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ko(t))}function Ci(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)T_(t,n,a,s),n=n.sibling;else c&&d_(n)}function T_(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Vc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,s),f&2048&&ll(9,n);break;case 1:Ci(t,n,a,s);break;case 3:Ci(t,n,a,s),c&&Pd&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Ko(f)));break;case 12:if(f&2048){Ci(t,n,a,s),f=n.stateNode;try{var _=n.memoizedProps,R=_.id,H=_.onPostCommit;typeof H=="function"&&H(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(at){Ze(n,n.return,at)}}else Ci(t,n,a,s);break;case 31:Ci(t,n,a,s);break;case 13:Ci(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Vc(R),_._visibility&2?Ci(t,n,a,s):fl(t,n)):(c&&R!==null&&R.memoizedState!==null&&Vc(n),_._visibility&2?Ci(t,n,a,s):(_._visibility|=2,Ps(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Fd(R,n);break;case 24:Ci(t,n,a,s),f&2048&&Bd(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ji(f.child,!0),ji(n.child,!0))),Ci(t,n,a,s);break;default:Ci(t,n,a,s)}}function Ps(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,H=s,at=_.flags;switch(_.tag){case 0:case 11:case 15:Ps(f,_,R,H,c),ll(8,_);break;case 23:break;case 22:var mt=_.stateNode;_.memoizedState!==null?mt._visibility&2?Ps(f,_,R,H,c):fl(f,_):(mt._visibility|=2,Ps(f,_,R,H,c)),c&&at&2048&&Fd(_.alternate,_);break;case 24:Ps(f,_,R,H,c),c&&at&2048&&Bd(_.alternate,_);break;default:Ps(f,_,R,H,c)}n=n.sibling}}function fl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:fl(a,s),c&2048&&Fd(s.alternate,s);break;case 24:fl(a,s),c&2048&&Bd(s.alternate,s);break;default:fl(a,s)}n=n.sibling}}var Kr=8192;function Qr(t,n,a){if(t.subtreeFlags&Kr)for(t=t.child;t!==null;)b_(t,n,a),t=t.sibling}function b_(t,n,a){switch(t.tag){case 26:Qr(t,n,a),t.flags&Kr&&(t.memoizedState!==null?$E(a,Oi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Uv(a,t)));break;case 5:Qr(t,n,a),t.flags&Kr&&(t=t.stateNode,(n&335544128)===n&&Uv(a,t));break;case 3:case 4:var s=Oi;Oi=Sl(t.stateNode.containerInfo),Qr(t,n,a),Oi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Kr,Kr=16777216,Qr(t,n,a),Kr=s):Qr(t,n,a));break;case 30:if((t.flags&Kr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(s,c)}Qr(t,n,a);break;default:Qr(t,n,a)}}function A_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,C_(s,t)}A_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R_(t),t=t.sibling}function R_(t){switch(t.tag){case 0:case 11:case 15:dl(t),t.flags&2048&&cr(9,t,t.return);break;case 3:dl(t);break;case 12:dl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wc(t)):dl(t);break;default:dl(t)}}function Wc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,C_(s,t)}A_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:cr(8,n,n.return),Wc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wc(n));break;default:Wc(n)}t=t.sibling}}function C_(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:cr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ko(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=t;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(__(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var Zy={getCacheForType:function(t){var n=Dn(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(gn).controller.signal}},Ky=typeof WeakMap=="function"?WeakMap:Map,ke=0,tn=null,Re=null,Ne=0,Ye=0,di=null,fr=!1,Is=!1,Hd=!1,wa=0,dn=0,dr=0,Jr=0,Yc=0,hi=0,zs=0,hl=null,ni=null,Gd=!1,Zc=0,w_=0,Kc=1/0,Qc=null,hr=null,on=0,Ii=null,jr=null,na=0,Vd=0,Xd=null,D_=null,Fs=null,Bs=null,Hs=null,pl=0,Jc=null;function pi(){return(ke&2)!==0&&Ne!==0?Ne&-Ne:rt.T!==null?$d():Kl()}function N_(){if(hi===0)if((Ne&536870912)===0||be){var t=Nr;Nr<<=1,(Nr&3932160)===0&&(Nr=262144),hi=t}else hi=536870912;return t=Nn.current,t!==null&&(t.flags|=32),hi}function Gs(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=fv(Sa(t.memoizedProps,a))),Bs===null&&(Bs=[]),Bs.push(n.bind(null,s))}}function ii(t,n,a){(t===tn&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)&&(Vs(t,0),pr(t,Ne,hi,!1)),qi(t,a),((ke&2)===0||t!==tn)&&(t===tn&&((ke&2)===0&&(Jr|=a),dn===4&&pr(t,Ne,hi,!1)),ia(t))}function U_(t,n,a){if((ke&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ka(t,n),c=s?jy(t,n):qd(t,n,!0),f=s;do{if(c===0){Is&&!s&&pr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Qy(a)){c=qd(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=t;c=hl;var H=R.current.memoizedState.isDehydrated;if(H&&(Vs(R,_).flags|=256),_=qd(R,_,!1),_!==2&&_!==6){if(Hd&&!H){R.errorRecoveryDisabledLanes|=f,Jr|=f,c=4;break t}f=ni,ni=c,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){Vs(t,0),pr(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:pr(s,n,hi,!fr);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Zc+300-Zt(),10<c)){if(pr(s,n,hi,!fr),Ur(s,0,!0)!==0)break t;na=n,s.timeoutHandle=uh(L_.bind(null,s,a,ni,Qc,Gd,n,hi,Jr,zs,fr,f,"Throttled",-0,0),c);break t}L_(s,a,ni,Qc,Gd,n,hi,Jr,zs,fr,f,null,-0,0)}}break}while(!0);ia(t)}function L_(t,n,a,s,c,f,_,R,H,at,mt,bt,nt,ft){t.timeoutHandle=-1;var Bt=n.subtreeFlags,ie=(f&335544064)===f;if(bt=null,(ie||Bt&8192||(Bt&16785408)===16785408)&&(bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},fi=null,b_(n,f,bt),ie&&(Bt=bt,ie=t.containerInfo,ie=(ie.nodeType===9?ie:ie.ownerDocument).__reactViewTransition,ie!=null&&(Bt.count++,Bt.waitingForViewTransition=!0,Bt=yl.bind(Bt),ie.finished.then(Bt,Bt))),Bt=(f&62914560)===f?Zc-Zt():(f&4194048)===f?w_-Zt():0,Bt=t1(bt,Bt),Bt!==null)){na=f,t.cancelPendingCommit=Bt(G_.bind(null,t,n,f,a,s,c,_,R,H,at,mt,bt,null,nt,ft)),pr(t,f,_,!at);return}G_(t,n,f,a,s,c,_,R,H,at,mt,bt)}function Qy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!ci(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pr(t,n,a,s){n=ki(t,n),n&=~Yc,n&=~Jr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-_e(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&Lr(t,a,n)}function jc(){return(ke&6)===0?(ml(0),!1):!0}function kd(){if(Re!==null){if(Ye===0)var t=Re.return;else t=Re,Ea=Br=null,jf(t),Cs=null,jo=0,t=Re;for(;t!==null;)n_(t.alternate,t),t=t.return;Re=null}}function Vs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,xE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,kd(),tn=t,Re=a=Ma(t.current,null),Ne=n,Ye=0,di=null,fr=!1,Is=Ka(t,n),Hd=!1,zs=hi=Yc=Jr=dr=dn=0,ni=hl=null,Gd=!1,wa=ki(t,n),sc(),a}function O_(t,n){xe=null,rt.H=Nc,n===Rs||n===_c?(n=G0(),Ye=3):n===Bf?(n=G0(),Ye=4):Ye=n===hd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Re===null&&(dn=1,Uc(t,Ti(n,t.current)))}function P_(){var t=Nn.current;return t===null?!0:(Ne&4194048)===Ne?Bn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?t===Bn:!1}function I_(){var t=rt.H;return rt.H=Nc,t===null?Nc:t}function z_(){var t=rt.A;return rt.A=Zy,t}function $c(){dn=4,fr||(Ne&4194048)!==Ne&&Nn.current!==null||(Is=!0),(dr&134217727)===0&&(Jr&134217727)===0||tn===null||pr(tn,Ne,hi,!1)}function qd(t,n,a){var s=ke;ke|=2;var c=I_(),f=z_();(tn!==t||Ne!==n)&&(Qc=null,Vs(t,n)),n=!1;var _=dn;t:do try{if(Ye!==0&&Re!==null){var R=Re,H=di;switch(Ye){case 8:kd(),_=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var at=Ye;if(Ye=0,di=null,Xs(t,R,H,at),a&&Is){_=0;break t}break;default:at=Ye,Ye=0,di=null,Xs(t,R,H,at)}}Jy(),_=dn;break}catch(mt){O_(t,mt)}while(!0);return n&&t.shellSuspendCounter++,Ea=Br=null,ke=s,rt.H=c,rt.A=f,Re===null&&(tn=null,Ne=0,sc()),_}function Jy(){for(;Re!==null;)F_(Re)}function jy(t,n){var a=ke;ke|=2;var s=I_(),c=z_();tn!==t||Ne!==n?(Qc=null,Kc=Zt()+500,Vs(t,n)):Is=Ka(t,n);t:do try{if(Ye!==0&&Re!==null){n=Re;var f=di;e:switch(Ye){case 1:Ye=0,di=null,Xs(t,n,f,1);break;case 2:case 9:if(B0(f)){Ye=0,di=null,B_(n);break}n=function(){Ye!==2&&Ye!==9||tn!==t||(Ye=7),ia(t)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:B0(f)?(Ye=0,di=null,B_(n)):(Ye=0,di=null,Xs(t,n,f,7));break;case 5:var _=null;switch(Re.tag){case 26:_=Re.memoizedState;case 5:case 27:var R=Re;if(_?Dv(_):R.stateNode.complete){Ye=0,di=null;var H=R.sibling;if(H!==null)Re=H;else{var at=R.return;at!==null?(Re=at,tu(at)):Re=null}break e}}Ye=0,di=null,Xs(t,n,f,5);break;case 6:Ye=0,di=null,Xs(t,n,f,6);break;case 8:kd(),dn=6;break t;default:throw Error(r(462))}}$y();break}catch(mt){O_(t,mt)}while(!0);return Ea=Br=null,rt.H=s,rt.A=c,ke=a,Re!==null?0:(tn=null,Ne=0,sc(),dn)}function $y(){for(;Re!==null&&!Gt();)F_(Re)}function F_(t){var n=t_(t.alternate,t,wa);t.memoizedProps=t.pendingProps,n===null?tu(t):Re=n}function B_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Yg(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=Yg(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:jf(n);var s=n;s===bn&&(be?(dc(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(dc(s),be=!0));default:n_(a,n),n=Re=C0(n,wa),n=t_(a,n,wa)}t.memoizedProps=t.pendingProps,n===null?tu(t):Re=n}function Xs(t,n,a,s){Ea=Br=null,jf(n),Cs=null,jo=0;var c=n.return;try{if(Hy(t,c,n,a,Ne)){dn=1,Uc(t,Ti(a,t.current)),Re=null;return}}catch(f){if(c!==null)throw Re=c,f;dn=1,Uc(t,Ti(a,t.current)),Re=null;return}n.flags&32768?(be||s===1?t=!0:Is||(Ne&536870912)!==0?t=!1:(fr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),H_(n,t)):tu(n)}function tu(t){var n=t;do{if((n.flags&32768)!==0){H_(n,fr);return}t=n.return;var a=ky(n.alternate,n,wa);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=t}while(n!==null);dn===0&&(dn=5)}function H_(t,n){do{var a=qy(t.alternate,t);if(a!==null){a.flags&=32767,Re=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Re=t;return}Re=t=a}while(t!==null);dn=6,Re=null}function G_(t,n,a,s,c,f,_,R,H,at,mt,bt){t.cancelPendingCommit=null;do eu();while(on!==0);if((ke&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===tn&&(Re=tn=null,Ne=0),jr=n,Ii=t,na=a,Xd=c,D_=s,tE(t,n,a,_,R,H,bt)}}function tE(t,n,a,s,c,f,_){var R=n.lanes|n.childLanes;if(Vd=R,R|=Af,Zl(t,a,R,s,c,f),Bs=null,(a&335544064)===a?(Hs=Cy(t),s=10262):(Hs=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,sE(Ut,function(){return Kd(),null})):(t.callbackNode=null,t.callbackPriority=0),Hc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=rt.T,rt.T=null,c=Tt.p,Tt.p=2,f=ke,ke|=4;try{Wy(t,n,a)}finally{ke=f,Tt.p=c,rt.T=s}}on=1,Hc?Fs=AE(_,t.containerInfo,Hs,Wd,Yd,nE,Zd,Kd,eE):(Wd(),Yd(),Zd())}function eE(t){if(on!==0){var n=Ii.onRecoverableError;n(t,{componentStack:null})}}function nE(){on===3&&(on=0,E_(jr,Ii),on=4)}function Wd(){if(on===1){on=0;var t=Ii,n=jr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=rt.T,rt.T=null;var c=Tt.p;Tt.p=2;var f=ke;ke|=4;try{ul=Xc=!1,M_(n,t,a),a=oh;var _=v0(t.containerInfo),R=a.focusedElem,H=a.selectionRange;if(_!==R&&R&&R.ownerDocument&&_0(R.ownerDocument.documentElement,R)){if(H!==null&&Mf(R)){var at=H.start,mt=H.end;if(mt===void 0&&(mt=at),"selectionStart"in R)R.selectionStart=at,R.selectionEnd=Math.min(mt,R.value.length);else{var bt=R.ownerDocument||document,nt=bt&&bt.defaultView||window;if(nt.getSelection){var ft=nt.getSelection(),Bt=R.textContent.length,ie=Math.min(H.start,Bt),Me=H.end===void 0?ie:Math.min(H.end,Bt);!ft.extend&&ie>Me&&(_=Me,Me=ie,ie=_);var it=g0(R,ie),Q=g0(R,Me);if(it&&Q&&(ft.rangeCount!==1||ft.anchorNode!==it.node||ft.anchorOffset!==it.offset||ft.focusNode!==Q.node||ft.focusOffset!==Q.offset)){var ot=bt.createRange();ot.setStart(it.node,it.offset),ft.removeAllRanges(),ie>Me?(ft.addRange(ot),ft.extend(Q.node,Q.offset)):(ot.setEnd(Q.node,Q.offset),ft.addRange(ot))}}}}for(bt=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&bt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<bt.length;R++){var Et=bt[R];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Js=!!sh,oh=sh=null}finally{ke=f,Tt.p=c,rt.T=s}}t.current=n,on=2}}function Yd(){if(on===2){on=0;var t=Ii,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=rt.T,rt.T=null;var s=Tt.p;Tt.p=2;var c=ke;ke|=4;try{m_(t,n.alternate,n)}finally{ke=c,Tt.p=s,rt.T=a}}on=3}}function Zd(){if(on===4||on===3){on=0;var t=Fs;Fs=null,Ht();var n=Ii,a=jr,s=na,c=D_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,jr=Ii=null,V_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(hr=null),zo(s),a=a.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(ae,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=rt.T,f=Tt.p,Tt.p=2,rt.T=null;try{for(var _=n.onRecoverableError,R=0;R<c.length;R++){var H=c[R];_(H.value,{componentStack:H.stack})}}finally{rt.T=a,Tt.p=f}}if(c=Bs,_=Hs,Hs=null,c!==null&&(Bs=null,_===null&&(_=[]),t!==null))for(H=0;H<c.length;H++)a=(0,c[H])(_),a!==void 0&&t.finished.finally(a);(na&3)!==0&&eu(),ia(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Jc?pl++:(pl=0,Jc=n):(pl=0,Jc=null),ml(0)}}function V_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ko(n)))}function eu(){return Fs!==null&&(Fs.skipTransition(),Fs=null),Wd(),Yd(),Zd(),Kd()}function Kd(){if(on!==5)return!1;var t=Ii,n=Vd;Vd=0;var a=zo(na),s=rt.T,c=Tt.p;try{Tt.p=32>a?32:a,rt.T=null,a=Xd,Xd=null;var f=Ii,_=na;if(on=0,jr=Ii=null,na=0,(ke&6)!==0)throw Error(r(331));var R=ke;if(ke|=4,R_(f.current),T_(f,f.current,_,a),ke=R,ml(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(ae,f)}catch{}return!0}finally{Tt.p=c,rt.T=s,V_(t,n)}}function X_(t,n,a){n=Ti(a,n),n=dd(t.stateNode,n,2),t=rr(t,n,2),t!==null&&(qi(t,2),ia(t))}function Ze(t,n,a){if(t.tag===3)X_(t,t,a);else for(;n!==null;){if(n.tag===3){X_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(hr===null||!hr.has(s))){t=Ti(a,t),a=Bg(2),s=rr(n,a,2),s!==null&&(Hg(a,s,n,t),qi(s,2),ia(s));break}}n=n.return}}function Qd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ky;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Hd=!0,c.add(a),t=iE.bind(null,t,n,a),n.then(t,t))}function iE(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tn===t&&(Ne&a)===a&&((dn===4||dn===3&&(Ne&62914560)===Ne&&300>Zt()-Zc)&&(ke&2)===0?Vs(t,0):Yc|=a,zs===Ne&&(zs=0)),ia(t)}function k_(t,n){n===0&&(n=Lo()),t=Ir(t,n),t!==null&&(qi(t,n),ia(t))}function aE(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),k_(t,a)}function rE(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),k_(t,a)}function sE(t,n){return Pt(t,n)}var ks=null,qs=null,Jd=!1,nu=!1,jd=!1,mr=0;function ia(t){t!==qs&&t.next===null&&(qs===null?ks=qs=t:qs=qs.next=t),nu=!0,Jd||(Jd=!0,lE())}function ml(t,n){if(!jd&&nu){jd=!0;do for(var a=!1,s=ks;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-_e(42|t)+1)-1,f&=c&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Z_(s,f))}else f=Ne,f=Ur(s,s===tn?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ka(s,f)||(a=!0,Z_(s,f));s=s.next}while(a);jd=!1}}function oE(){q_()}function q_(){nu=Jd=!1;var t=0;mr!==0&&SE()&&(t=mr);for(var n=Zt(),a=null,s=ks;s!==null;){var c=s.next,f=W_(s,n);f===0?(s.next=null,a===null?ks=c:a.next=c,c===null&&(qs=a)):(a=s,(t!==0||(f&3)!==0)&&(nu=!0)),s=c}on!==0&&on!==5||ml(t),mr!==0&&(mr=0)}function W_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-_e(f),R=1<<_,H=c[_];H===-1?((R&a)===0||(R&s)!==0)&&(c[_]=Uo(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=tn,a=Ne,a=Ur(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&re(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ka(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&re(s),zo(a)){case 2:case 8:a=tt;break;case 32:a=Ut;break;case 268435456:a=zt;break;default:a=Ut}return s=Y_.bind(null,t),a=Pt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&re(s),t.callbackPriority=2,t.callbackNode=null,2}function Y_(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(eu()&&t.callbackNode!==a)return null;var s=Ne;return s=Ur(t,t===tn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(U_(t,s,n),W_(t,Zt()),t.callbackNode!=null&&t.callbackNode===a?Y_.bind(null,t):null)}function Z_(t,n){if(eu())return null;U_(t,n,!0)}function lE(){ME(function(){(ke&6)!==0?Pt(ge,oE):q_()})}function $d(){if(mr===0){var t=Vr;t===0&&(t=ds,ds<<=1,(ds&261888)===0&&(ds=256)),mr=t}return mr}function K_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jl(t)}function cE(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=K_((c[Z]||null).action),_=s.submitter;_&&(n=(n=_[Z]||null)?K_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new nc("action","action",null,s,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(mr!==0){var H=new FormData(c,_);od(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=new FormData(c,_),od(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var th=0;th<bf.length;th++){var eh=bf[th],uE=eh.toLowerCase(),fE=eh[0].toUpperCase()+eh.slice(1);Ui(uE,"on"+fE)}Ui(M0,"onAnimationEnd"),Ui(y0,"onAnimationIteration"),Ui(E0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(xy,"onTransitionRun"),Ui(My,"onTransitionStart"),Ui(yy,"onTransitionCancel"),Ui(T0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function Q_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var R=s[_],H=R.instance,at=R.currentTarget;if(R=R.listener,H!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=at;try{f(c)}catch(mt){rc(mt)}c.currentTarget=null,f=H}else for(_=0;_<s.length;_++){if(R=s[_],H=R.instance,at=R.currentTarget,R=R.listener,H!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=at;try{f(c)}catch(mt){rc(mt)}c.currentTarget=null,f=H}}}}function Ce(t,n){var a=n[ct];a===void 0&&(a=n[ct]=new Set);var s=t+"__bubble";a.has(s)||(J_(n,t,2,!1),a.add(s))}function nh(t,n,a){var s=0;n&&(s|=4),J_(a,t,s,n)}var iu="_reactListening"+Math.random().toString(36).slice(2);function ih(t){if(!t[iu]){t[iu]=!0,qe.forEach(function(a){a!=="selectionchange"&&(dE.has(a)||nh(a,!1,t),nh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[iu]||(n[iu]=!0,nh("selectionchange",!1,n))}}function J_(t,n,a,s){switch(Hv(n)){case 2:var c=a1;break;case 8:c=r1;break;default:c=Eh}a=c.bind(null,n,a,t),c=void 0,!ff||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function ah(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var R=s.stateNode.containerInfo;if(R===c)break;if(_===4)for(_=s.return;_!==null;){var H=_.tag;if((H===3||H===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;R!==null;){if(_=fe(R),_===null)return;if(H=_.tag,H===5||H===6||H===26||H===27){s=f=_;continue t}R=R.parentNode}}s=s.return}Jm(function(){var at=f,mt=cf(a),bt=[];t:{var nt=b0.get(t);if(nt!==void 0){var ft=nc,Bt=t;switch(t){case"keypress":if(tc(a)===0)break t;case"keydown":case"keyup":ft=QM;break;case"focusin":Bt="focus",ft=mf;break;case"focusout":Bt="blur",ft=mf;break;case"beforeblur":case"afterblur":ft=mf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=t0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=FM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=ey;break;case M0:case y0:case E0:ft=GM;break;case T0:ft=iy;break;case"scroll":case"scrollend":ft=IM;break;case"wheel":ft=ry;break;case"copy":case"cut":case"paste":ft=XM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=n0;break;case"submit":ft=$M;break;case"toggle":case"beforetoggle":ft=oy}var ie=(n&4)!==0,Me=!ie&&(t==="scroll"||t==="scrollend"),it=ie?nt!==null?nt+"Capture":null:nt;ie=[];for(var Q=at,ot;Q!==null;){var Et=Q;if(ot=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ot===null||it===null||(Et=Fo(Q,it),Et!=null&&ie.push(_l(Q,Et,ot))),Me)break;Q=Q.return}0<ie.length&&(nt=new ft(nt,Bt,null,a,mt),bt.push({event:nt,listeners:ie}))}}if((n&7)===0){t:{if(ft=t==="mouseover"||t==="pointerover",nt=t==="mouseout"||t==="pointerout",ft&&a!==lf&&(Bt=a.relatedTarget||a.fromElement)&&(fe(Bt)||Bt[gt]))break t;(nt||ft)&&(Bt=mt.window===mt?mt:(ft=mt.ownerDocument)?ft.defaultView||ft.parentWindow:window,nt?(ft=a.relatedTarget||a.toElement,nt=at,ft=ft?fe(ft):null,ft!==null&&(Me=u(ft),ie=ft.tag,ft!==Me||ie!==5&&ie!==27&&ie!==6)&&(ft=null)):(nt=null,ft=at),nt!==ft&&(ie=t0,Et="onMouseLeave",it="onMouseEnter",Q="mouse",(t==="pointerout"||t==="pointerover")&&(ie=n0,Et="onPointerLeave",it="onPointerEnter",Q="pointer"),Me=nt==null?Bt:Qt(nt),ot=ft==null?Bt:Qt(ft),Bt=new ie(Et,Q+"leave",nt,a,mt),Bt.target=Me,Bt.relatedTarget=ot,Et=null,fe(mt)===at&&(ie=new ie(it,Q+"enter",ft,a,mt),ie.target=ot,ie.relatedTarget=Me,Et=ie),Me=Et,ie=nt&&ft?O(nt,ft,hE):null,nt!==null&&j_(bt,Bt,nt,ie,!1),ft!==null&&Me!==null&&j_(bt,Me,ft,ie,!0)))}t:{if(nt=at?Qt(at):window,ft=nt.nodeName&&nt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&nt.type==="file")var Jt=u0;else if(l0(nt))if(f0)Jt=_y;else{Jt=my;var Ue=py}else ft=nt.nodeName,!ft||ft.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?at&&of(at.elementType)&&(Jt=u0):Jt=gy;if(Jt&&(Jt=Jt(t,at))){c0(bt,Jt,a,mt);break t}Ue&&Ue(t,nt,at)}switch(Ue=at?Qt(at):window,t){case"focusin":(l0(Ue)||Ue.contentEditable==="true")&&(Ss=Ue,yf=at,Wo=null);break;case"focusout":Wo=yf=Ss=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,S0(bt,a,mt);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":S0(bt,a,mt)}var oe;if(_f)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else vs?s0(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(i0&&a.locale!=="ko"&&(vs||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&vs&&(oe=jm()):(Qa=mt,df="value"in Qa?Qa.value:Qa.textContent,vs=!0)),Ue=au(at,ue),0<Ue.length&&(ue=new e0(ue,t,null,a,mt),bt.push({event:ue,listeners:Ue}),oe?ue.data=oe:(oe=o0(a),oe!==null&&(ue.data=oe)))),(oe=cy?uy(t,a):fy(t,a))&&(ue=au(at,"onBeforeInput"),0<ue.length&&(Ue=new e0("onBeforeInput","beforeinput",null,a,mt),bt.push({event:Ue,listeners:ue}),Ue.data=oe)),cE(bt,t,at,a,mt)}Q_(bt,n)})}function _l(t,n,a){return{instance:t,listener:n,currentTarget:a}}function au(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Fo(t,a),c!=null&&s.unshift(_l(t,c,f)),c=Fo(t,n),c!=null&&s.push(_l(t,c,f))),t.tag===3)return s;t=t.return}return[]}function hE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j_(t,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var R=a,H=R.alternate,at=R.stateNode;if(R=R.tag,H!==null&&H===s)break;R!==5&&R!==26&&R!==27||at===null||(H=at,c?(at=Fo(a,f),at!=null&&_.unshift(_l(a,at,H))):c||(at=Fo(a,f),at!=null&&_.push(_l(a,at,H)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function $_(t){return(typeof t=="string"?t:""+t).replace(pE,`
`).replace(mE,"")}function tv(t,n){return n=$_(n),$_(t)===n}function Ke(t,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ms(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ms(t,""+s);else return;break;case"className":li(t,"class",s);break;case"tabIndex":li(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":li(t,a,s);break;case"style":Km(t,s,f);return;case"data":if(n!=="object"){li(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ke(t,n,"name",c.name,c,null),Ke(t,n,"formEncType",c.formEncType,c,null),Ke(t,n,"formMethod",c.formMethod,c,null),Ke(t,n,"formTarget",c.formTarget,c,null)):(Ke(t,n,"encType",c.encType,c,null),Ke(t,n,"method",c.method,c,null),Ke(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=jl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);return;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=jl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),en(t,"popover",s);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=OM.get(a)||a,en(t,a,s);else return}Te=!0}function rh(t,n,a,s,c,f){switch(a){case"style":Km(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")ms(t,s);else if(typeof s=="number"||typeof s=="bigint")ms(t,""+s);else return;break;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[Z]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,c);break t}Te=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):en(t,a,s)}return}Te=!0}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(t,n,f,_,a,null)}}c&&Ke(t,n,"srcSet",a.srcSet,a,null),s&&Ke(t,n,"src",a.src,a,null);return;case"input":Ce("invalid",t);var R=f=_=c=null,H=null,at=null;for(s in a)if(a.hasOwnProperty(s)){var mt=a[s];if(mt!=null)switch(s){case"name":c=mt;break;case"type":_=mt;break;case"checked":H=mt;break;case"defaultChecked":at=mt;break;case"value":f=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Ke(t,n,s,mt,a,null)}}qm(t,f,R,H,at,_,c,!1);return;case"select":Ce("invalid",t),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":s=R;default:Ke(t,n,c,R,a,null)}n=f,a=_,t.multiple=!!s,n!=null?ps(t,!!s,n,!1):a!=null&&ps(t,!!s,a,!0);return;case"textarea":Ce("invalid",t),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ke(t,n,_,R,a,null)}Ym(t,s,c,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null)&&(H==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ke(t,n,H,s,a,null));return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(s=0;s<gl.length;s++)Ce(gl[s],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(s=a[at],s!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(t,n,at,s,a,null)}return;default:if(of(n)){for(mt in a)a.hasOwnProperty(mt)&&(s=a[mt],s!==void 0&&rh(t,n,mt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Ke(t,n,R,s,a,null))}var gE={};function _E(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,R=null,H=null,at=null,mt=null;for(ft in a){var bt=a[ft];if(a.hasOwnProperty(ft)&&bt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":H=bt;default:s.hasOwnProperty(ft)||Ke(t,n,ft,null,s,bt)}}for(var nt in s){var ft=s[nt];if(bt=a[nt],s.hasOwnProperty(nt)&&(ft!=null||bt!=null))switch(nt){case"type":ft!==bt&&(Te=!0),f=ft;break;case"name":ft!==bt&&(Te=!0),c=ft;break;case"checked":ft!==bt&&(Te=!0),at=ft;break;case"defaultChecked":ft!==bt&&(Te=!0),mt=ft;break;case"value":ft!==bt&&(Te=!0),_=ft;break;case"defaultValue":ft!==bt&&(Te=!0),R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==bt&&Ke(t,n,nt,ft,s,bt)}}rf(t,_,R,H,at,mt,f,c);return;case"select":ft=_=R=nt=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ft=H;default:s.hasOwnProperty(f)||Ke(t,n,f,null,s,H)}for(c in s)if(f=s[c],H=a[c],s.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":f!==H&&(Te=!0),nt=f;break;case"defaultValue":f!==H&&(Te=!0),R=f;break;case"multiple":f!==H&&(Te=!0),_=f;default:f!==H&&Ke(t,n,c,f,s,H)}n=R,a=_,s=ft,nt!=null?ps(t,!!a,nt,!1):!!s!=!!a&&(n!=null?ps(t,!!a,n,!0):ps(t,!!a,a?[]:"",!1));return;case"textarea":ft=nt=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ke(t,n,R,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(Te=!0),nt=c;break;case"defaultValue":c!==f&&(Te=!0),ft=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ke(t,n,_,c,s,f)}Wm(t,nt,ft);return;case"option":for(var Bt in a)nt=a[Bt],a.hasOwnProperty(Bt)&&nt!=null&&!s.hasOwnProperty(Bt)&&(Bt==="selected"?t.selected=!1:Ke(t,n,Bt,null,s,nt));for(H in s)nt=s[H],ft=a[H],s.hasOwnProperty(H)&&nt!==ft&&(nt!=null||ft!=null)&&(H==="selected"?(nt!==ft&&(Te=!0),t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol"):Ke(t,n,H,nt,s,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)nt=a[ie],a.hasOwnProperty(ie)&&nt!=null&&!s.hasOwnProperty(ie)&&Ke(t,n,ie,null,s,nt);for(at in s)if(nt=s[at],ft=a[at],s.hasOwnProperty(at)&&nt!==ft&&(nt!=null||ft!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Ke(t,n,at,nt,s,ft)}return;default:if(of(n)){for(var Me in a)nt=a[Me],a.hasOwnProperty(Me)&&nt!==void 0&&!s.hasOwnProperty(Me)&&rh(t,n,Me,void 0,s,nt);for(mt in s)nt=s[mt],ft=a[mt],!s.hasOwnProperty(mt)||nt===ft||nt===void 0&&ft===void 0||rh(t,n,mt,nt,s,ft);return}}for(var it in a)nt=a[it],a.hasOwnProperty(it)&&nt!=null&&!s.hasOwnProperty(it)&&Ke(t,n,it,null,s,nt);for(bt in s)nt=s[bt],ft=a[bt],!s.hasOwnProperty(bt)||nt===ft||nt==null&&ft==null||Ke(t,n,bt,nt,s,ft)}function ev(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,R=c.duration;if(f&&R&&ev(_)){for(_=0,R=c.responseEnd,s+=1;s<a.length;s++){var H=a[s],at=H.startTime;if(at>R)break;var mt=H.transferSize,bt=H.initiatorType;mt&&ev(bt)&&(H=H.responseEnd,_+=mt*(H<R?1:(R-at)/(H-at)))}if(--s,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sh=null,oh=null;function vl(t){return t.nodeType===9?t:t.ownerDocument}function nv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function av(t,n,a,s){return a=vl(a).createElement(t),a[A]=s,a[Z]=n,On(a,t,n),Ee(a),a}function lh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function SE(){var t=window.event;return t&&t.type==="popstate"?t===ch?!1:(ch=t,!0):(ch=null,!1)}var uh=typeof setTimeout=="function"?setTimeout:void 0,xE=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,sv=typeof requestAnimationFrame=="function"?requestAnimationFrame:uh,ME=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(t){return rv.resolve(null).then(t).catch(yE)}:uh;function yE(t){setTimeout(function(){throw t})}function gr(t){return t==="head"}function ov(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),js(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")vh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vh(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ft]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&vh(t.ownerDocument.body);a=c}while(a);js(n)}function lv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function cv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function uv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function EE(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function fh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return EE(n,a,t)}function TE(t){return t.documentElement.clientHeight}function bE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function AE(t,n,a,s,c,f,_,R,H){var at=n.nodeType===9?n:n.ownerDocument;try{var mt=at.startViewTransition({update:function(){var nt=at.defaultView,ft=nt.navigation&&nt.navigation.transition,Bt=at.fonts.status;s();var ie=[];if(Bt==="loaded"&&(TE(at),at.fonts.status==="loading"&&ie.push(at.fonts.ready)),Bt=ie.length,t!==null)for(var Me=t.suspenseyImages,it=0,Q=0;Q<Me.length;Q++){var ot=Me[Q];if(!ot.complete){var Et=ot.getBoundingClientRect();if(0<Et.bottom&&0<Et.right&&Et.top<nt.innerHeight&&Et.left<nt.innerWidth){if(it+=Nv(ot),it>ou){ie.length=Bt;break}ot=new Promise(bE.bind(ot)),ie.push(ot)}}}if(0<ie.length)return nt=Promise.race([Promise.all(ie),new Promise(function(Jt){return setTimeout(Jt,500)})]).then(c,c),(ft?Promise.allSettled([ft.finished,nt]):nt).then(f,f);if(c(),ft)return ft.finished.then(f,f);f()},types:a});at.__reactViewTransition=mt;var bt=[];return mt.ready.then(function(){for(var nt=at.documentElement.getAnimations({subtree:!0}),ft=0;ft<nt.length;ft++){var Bt=nt[ft],ie=Bt.effect,Me=ie.pseudoElement;if(Me!=null&&Me.startsWith("::view-transition")){bt.push(Bt),Bt=ie.getKeyframes();for(var it=Me=void 0,Q=!0,ot=0;ot<Bt.length;ot++){var Et=Bt[ot],Jt=Et.width;if(Me===void 0)Me=Jt;else if(Me!==Jt){Q=!1;break}if(Jt=Et.height,it===void 0)it=Jt;else if(it!==Jt){Q=!1;break}delete Et.width,delete Et.height,Et.transform==="none"&&delete Et.transform}Q&&Me!==void 0&&it!==void 0&&(ie.setKeyframes(Bt),Q=getComputedStyle(ie.target,ie.pseudoElement),Q.width!==Me||Q.height!==it)&&(Q=Bt[0],Q.width=Me,Q.height=it,Q=Bt[Bt.length-1],Q.width=Me,Q.height=it,ie.setKeyframes(Bt))}}_()},function(nt){at.__reactViewTransition===mt&&(at.__reactViewTransition=null);try{typeof nt=="object"&&nt!==null&&nt.name==="InvalidStateError"&&(nt.message==="View transition was skipped because document visibility state is hidden."||nt.message==="Skipping view transition because document visibility state has become hidden."||nt.message==="Skipping view transition because viewport size changed."||nt.message==="Transition was aborted because of invalid state")&&(nt=null),nt!==null&&H(nt)}finally{s(),c(),_()}}),mt.finished.finally(function(){for(var nt=0;nt<bt.length;nt++)bt[nt].cancel();at.__reactViewTransition===mt&&(at.__reactViewTransition=null),R()}),mt}catch{return s(),c(),_(),null}}function $r(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}$r.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:B({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},$r.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[c])}return s},$r.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function fv(t){return{name:t,group:new $r("group",t),imagePair:new $r("image-pair",t),old:new $r("old",t),new:new $r("new",t)}}function mi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(hv(f,t,n,a)===-1){var _=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(H){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,H):n.handleEvent(H)}),s!==null&&(c=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Ws(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),g(this._fragmentFiber.child,!1,RE,t,R,s)}this._eventListeners=f}};function RE(t,n,a,s){return M(t).addEventListener(n,a,s),!1}mi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=hv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Ws(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,CE,t,a,c),s.splice(n,1),f!==null&&f()}};function CE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Ws(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function dv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function hv(t,n,a,s){if(t.length===0)return-1;s=dv(s);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&dv(f.optionsOrUseCapture)===s)return c}return-1}mi.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Ws(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Ws(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},mi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,pv,t,void 0,void 0)};function pv(t,n){return t.tag===6?!1:(t=M(t),HE(t,n))}mi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,dh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!pv(n[a],t);a--);};function dh(t,n){return n.push(t),!1}mi.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=M(t),t=vl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,wE,t,void 0,void 0))};function wE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,DE,t,void 0,void 0)};function DE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}mi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,NE,t,void 0,void 0);for(var a=n=0;a<zi.length;a++){var s=zi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):zi[n++]=s}zi.length=n}};function NE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var zi=[],hh=!1;function UE(t,n,a){zi.push({fragmentInstance:t,observer:n,instance:a}),hh||(hh=!0,GE(function(){hh=!1;var s=zi;zi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}mi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,LE,t,void 0,void 0),t};function LE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}mi.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},mi.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,dh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=w(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),R=c.compareDocumentPosition(t),H=_&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&c===t||H||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||OE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function OE(t,n,a,s,c){var f=fe(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=S(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=O(a,f,L),n===null?n=!1:(g(n,!0,K,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=O(s,f,L),n===null?n=!1:(g(n,!0,D,f,s),f=x,F=x=null,n=f!==null)),n):!1}function mv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,dh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=w(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),mv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),mv(c,a)):M(c).scrollIntoView(t),s+=a?-1:1}};function PE(t,n){return t=M(t),gv(t,n),!1}function gv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function _v(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Ws(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,R=0;R<zi.length;R++){var H=zi[R];(H.fragmentInstance!==n||H.observer!==f||H.instance!==t)&&(zi[_++]=H)}zi.length=_,f.observe(t)}),gv(t,n))}function IE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Ws(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?UE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function ph(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function zE(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ft])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function FE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=wi(t.nextSibling),t===null))return null;return t}function vv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=wi(t.nextSibling),t===null))return null;return t}function mh(t){return t.data==="$?"||t.data==="$~"}function gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function BE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var _h=null;function Sv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return wi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function HE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function GE(t){sv(function(){sv(function(n){return t(n)})})}function Mv(t,n,a){switch(n=vl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yv(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ke(t,n,s,null,gE,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Yi&&(t.onclick=null),ne(t)}function vh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ne(t)}var Di=new Map,Ev=new Set;function Sl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Da=Tt.d;Tt.d={f:VE,r:XE,D:kE,C:qE,L:WE,m:YE,X:KE,S:ZE,M:QE};function VE(){var t=Da.f(),n=jc();return t||n}function XE(t){var n=ve(t);n!==null&&n.tag===5&&n.type==="form"?bg(n):Da.r(t)}var Ys=typeof document>"u"?null:document;function Tv(t,n,a){var s=Ys;if(s&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Ev.has(c)||(Ev.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),On(n,"link",t),Ee(n),s.head.appendChild(n)))}}function kE(t){Da.D(t),Tv("dns-prefetch",t,null)}function qE(t,n){Da.C(t,n),Tv("preconnect",t,n)}function WE(t,n,a){Da.L(t,n,a);var s=Ys;if(s&&t&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(t)+'"]';var f=c;switch(n){case"style":f=Zs(t);break;case"script":f=Ks(t)}if(!(Di.has(f)||(t=B({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Di.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(xl(f))||n==="script"&&s.querySelector(Ml(f))))){var _=s.createElement("link");On(_,"link",t),n==="style"&&(_[te]=!0,_.onload=_.onerror=function(){Je(_)}),Ee(_),s.head.appendChild(_)}}}function YE(t,n){Da.m(t,n);var a=Ys;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(s)+'"][href="'+yi(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ks(t)}if(!Di.has(f)&&(t=B({rel:"modulepreload",href:t},n),Di.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ml(f)))return}s=a.createElement("link"),On(s,"link",t),Ee(s),a.head.appendChild(s)}}}function ZE(t,n,a){Da.S(t,n,a);var s=Ys;if(s&&t){var c=Ae(s).hoistableStyles,f=Zs(t);n=n||"default";var _=c.get(f);if(!_){var R={loading:0,preload:null};if(_=s.querySelector(xl(f)))R.loading=5;else{t=B({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Di.get(f))&&Sh(t,a);var H=_=s.createElement("link");Ee(H),On(H,"link",t),H._p=new Promise(function(at,mt){H.onload=at,H.onerror=mt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ru(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:R},c.set(f,_)}}}function KE(t,n){Da.X(t,n);var a=Ys;if(a&&t){var s=Ae(a).hoistableScripts,c=Ks(t),f=s.get(c);f||(f=a.querySelector(Ml(c)),f||(t=B({src:t,async:!0},n),(n=Di.get(c))&&xh(t,n),f=a.createElement("script"),Ee(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function QE(t,n){Da.M(t,n);var a=Ys;if(a&&t){var s=Ae(a).hoistableScripts,c=Ks(t),f=s.get(c);f||(f=a.querySelector(Ml(c)),f||(t=B({src:t,async:!0,type:"module"},n),(n=Di.get(c))&&xh(t,n),f=a.createElement("script"),Ee(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function bv(t,n,a,s){var c=(c=he.current)?Sl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Zs(a.href),n=Ae(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zs(a.href);var f=Ae(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(xl(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Di.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(t,f)),JE(c,t,f,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ks(a),n=Ae(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zs(t){return'href="'+yi(t)+'"'}function xl(t){return'link[rel="stylesheet"]['+t+"]"}function Av(t){return B({},t,{"data-precedence":t.precedence,precedence:null})}function JE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[te]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[te]=!0,n.onload=n.onerror=Je.bind(null,n),On(n,"link",a),Ee(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ks(t){return'[src="'+yi(t)+'"]'}function Ml(t){return"script[async]"+t}function Rv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+yi(a.href)+'"]');if(s)return n.instance=s,Ee(s),s;var c=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ee(s),On(s,"style",c),ru(s,a.precedence,t),n.instance=s;case"stylesheet":c=Zs(a.href);var f=t.querySelector(xl(c));if(f)return n.state.loading|=4,n.instance=f,Ee(f),f;s=Av(a),(c=Di.get(c))&&Sh(s,c),f=(t.ownerDocument||t).createElement("link"),Ee(f);var _=f;return _._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),On(f,"link",s),n.state.loading|=4,ru(f,a.precedence,t),n.instance=f;case"script":return f=Ks(a.src),(c=t.querySelector(Ml(f)))?(n.instance=c,Ee(c),c):(s=a,(c=Di.get(f))&&(s=B({},a),xh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ee(c),On(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ru(s,a.precedence,t));return n.instance}function ru(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var R=s[_];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Sh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function xh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var su=null;function Cv(t,n,a){if(su===null){var s=new Map,c=su=new Map;c.set(a,s)}else c=su,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ft]||f[A]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=s.get(_);R?R.push(f):s.set(_,[f])}}return s}function Mh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function jE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Dv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Nv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Uv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Nv(n),t.suspenseyImages.push(n)),t=e1.bind(t),n.decode().then(t,t))}function $E(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Zs(s.href),f=n.querySelector(xl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=yl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ee(f);return}f=n.ownerDocument||n,s=Av(s),(c=Di.get(c))&&Sh(s,c),f=f.createElement("link"),Ee(f);var _=f;_._p=new Promise(function(R,H){_.onload=R,_.onerror=H}),On(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=yl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ou=0;function t1(t,n){return t.stylesheets&&t.count===0&&cu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&cu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ou===0&&(ou=62500*vE());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&cu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ou?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Lv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)cu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function yl(){this.count--,Lv(this)}function e1(){this.imgCount--,Lv(this)}var lu=null;function cu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lu=new Map,n.forEach(n1,t),lu=null,yl.call(t))}function n1(t,n){if(!(n.state.loading&4)){var a=lu.get(t);if(a)var s=a.get(null);else{a=new Map,lu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=yl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Qs={$$typeof:Y,Provider:null,Consumer:null,_currentValue:jt,_currentValue2:jt,_threadCount:0};function i1(t,n,a,s,c,f,_,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hs(0),this.hiddenUpdates=hs(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ov(t,n,a,s,c,f,_,R,H,at,mt,bt){return t=new i1(t,n,a,_,H,at,mt,bt,R),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=If(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Hf(f),t}function Pv(t){return t?(t=ys,t):ys}function Iv(t,n,a,s,c,f){c=Pv(c),s.context===null?s.context=c:s.pendingContext=c,s=ar(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=rr(t,s,n),a!==null&&(ii(a,t,n),$o(a,t,n))}function zv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function yh(t,n){zv(t,n),(t=t.alternate)&&zv(t,n)}function Fv(t){if(t.tag===13||t.tag===31){var n=Ir(t,67108864);n!==null&&ii(n,t,67108864),yh(t,67108864)}}function Bv(t){if(t.tag===13||t.tag===31){var n=pi();n=Io(n);var a=Ir(t,n);a!==null&&ii(a,t,n),yh(t,n)}}var Js=!0;function a1(t,n,a,s){var c=rt.T;rt.T=null;var f=Tt.p;try{Tt.p=2,Eh(t,n,a,s)}finally{Tt.p=f,rt.T=c}}function r1(t,n,a,s){var c=rt.T;rt.T=null;var f=Tt.p;try{Tt.p=8,Eh(t,n,a,s)}finally{Tt.p=f,rt.T=c}}function Eh(t,n,a,s){if(Js){var c=Th(s);if(c===null)ah(t,n,s,uu,a),Gv(t,s);else if(o1(c,t,n,a,s))s.stopPropagation();else if(Gv(t,s),n&4&&-1<s1.indexOf(t)){for(;c!==null;){var f=ve(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ga(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var H=1<<31-_e(_);R.entanglements[1]|=H,_&=~H}ia(f),(ke&6)===0&&(Kc=Zt()+500,ml(0))}}break;case 31:case 13:R=Ir(f,2),R!==null&&ii(R,f,2),jc(),yh(f,2)}if(f=Th(s),f===null&&ah(t,n,s,uu,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else ah(t,n,s,null,a)}}function Th(t){return t=cf(t),bh(t)}var uu=null;function bh(t){if(uu=null,t=fe(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function Hv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ge:return 2;case tt:return 8;case Ut:case At:return 32;case zt:return 268435456;default:return 32}default:return 32}}var Ah=!1,_r=null,vr=null,Sr=null,El=new Map,Tl=new Map,xr=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gv(t,n){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":El.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(n.pointerId)}}function bl(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=ve(n),n!==null&&Fv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function o1(t,n,a,s,c){switch(n){case"focusin":return _r=bl(_r,t,n,a,s,c),!0;case"dragenter":return vr=bl(vr,t,n,a,s,c),!0;case"mouseover":return Sr=bl(Sr,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return El.set(f,bl(El.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Tl.set(f,bl(Tl.get(f)||null,t,n,a,s,c)),!0}return!1}function Vv(t){var n=fe(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ql(t.priority,function(){Bv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ql(t.priority,function(){Bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Th(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);lf=s,a.target.dispatchEvent(s),lf=null}else return n=ve(a),n!==null&&Fv(n),t.blockedOn=a,!1;n.shift()}return!0}function Xv(t,n,a){fu(t)&&a.delete(n)}function l1(){Ah=!1,_r!==null&&fu(_r)&&(_r=null),vr!==null&&fu(vr)&&(vr=null),Sr!==null&&fu(Sr)&&(Sr=null),El.forEach(Xv),Tl.forEach(Xv)}function du(t,n){t.blockedOn===n&&(t.blockedOn=null,Ah||(Ah=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,l1)))}var hu=null;function kv(t){hu!==t&&(hu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hu===t&&(hu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(bh(s||a)===null)continue;break}var f=ve(a);f!==null&&(t.splice(n,3),n-=3,od(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function js(t){function n(H){return du(H,t)}_r!==null&&du(_r,t),vr!==null&&du(vr,t),Sr!==null&&du(Sr,t),El.forEach(n),Tl.forEach(n);for(var a=0;a<xr.length;a++){var s=xr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)Vv(a),a.blockedOn===null&&xr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[Z]||null;if(typeof f=="function")_||kv(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[Z]||null)R=_.formAction;else if(bh(c)!==null)continue}else R=_.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),kv(a)}}}function qv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Rh(t){this._internalRoot=t}pu.prototype.render=Rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=pi();Iv(a,s,t,n,null,null)},pu.prototype.unmount=Rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Iv(t.current,2,null,t,null,null),jc(),n[gt]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Kl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<xr.length&&n!==0&&n<xr[a].priority;a++);xr.splice(a,0,t),a===0&&Vv(t)}};var Wv=e.version;if(Wv!=="19.3.0")throw Error(r(527,Wv,"19.3.0"));Tt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var c1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:rt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{ae=mu.inject(c1),qt=mu}catch{}}return Rl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Pg,f=Ig,_=zg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Ov(t,1,!1,null,null,a,s,null,c,f,_,qv),t[gt]=n.current,ih(t),new Rh(n)},Rl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Pg,_=Ig,R=zg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Ov(t,1,!0,n,a??null,s,c,H,f,_,R,qv),n.context=Pv(null),a=n.current,s=pi(),s=Io(s),c=ar(s),c.callback=null,rr(a,c,s),a=s,n.current.lanes=a,qi(n,a),ia(n),t[gt]=n.current,ih(t),new pu(n)},Rl.version="19.3.0",Rl}var nS;function S1(){if(nS)return Dh.exports;nS=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Dh.exports=v1(),Dh.exports}var x1=S1();const Em="186",M1=0,iS=1,y1=2,Hu=1,E1=2,Il=3,Si=0,ri=1,Va=2,ka=0,Fl=1,aS=2,rS=3,sS=4,T1=5,po=100,b1=101,A1=102,R1=103,C1=104,w1=200,D1=201,N1=202,U1=203,Bx=204,Hx=205,L1=206,O1=207,P1=208,I1=209,z1=210,F1=211,B1=212,H1=213,G1=214,_p=0,vp=1,Sp=2,Bl=3,xp=4,Mp=5,yp=6,Ep=7,Gx=0,V1=1,X1=2,fa=0,Vx=1,Xx=2,kx=3,qx=4,Wx=5,Yx=6,Zx=7,Kx=300,ls=301,So=302,Oh=303,Ph=304,$u=306,Tp=1e3,Xa=1001,bp=1002,zn=1003,k1=1004,gu=1005,Vn=1006,Ih=1007,ss=1008,vi=1009,Qx=1010,Jx=1011,Hl=1012,Tm=1013,da=1014,ca=1015,ha=1016,bm=1017,Am=1018,Gl=1020,jx=35902,$x=35899,tM=1021,eM=1022,Vi=1023,Ya=1026,os=1027,nM=1028,Rm=1029,cs=1030,Cm=1031,wm=1033,Gu=33776,Vu=33777,Xu=33778,ku=33779,Ap=35840,Rp=35841,Cp=35842,wp=35843,Dp=36196,Np=37492,Up=37496,Lp=37488,Op=37489,Wu=37490,Pp=37491,Ip=37808,zp=37809,Fp=37810,Bp=37811,Hp=37812,Gp=37813,Vp=37814,Xp=37815,kp=37816,qp=37817,Wp=37818,Yp=37819,Zp=37820,Kp=37821,Qp=36492,Jp=36494,jp=36495,$p=36283,tm=36284,Yu=36285,em=36286,q1=3200,nm=0,W1=1,wr="",wn="srgb",Zu="srgb-linear",Ku="linear",Qe="srgb",zh=7680,Y1=519,Z1=512,K1=513,Q1=514,Dm=515,J1=516,j1=517,Nm=518,$1=519,tT=35044,oS="300 es",ua=2e3,Vl=2001;function eT(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Qu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nT(){const o=Qu("canvas");return o.style.display="block",o}const lS={};function cS(...o){const e="THREE."+o.shift();console.log(e,...o)}function iM(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function me(...o){o=iM(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ve(...o){o=iM(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function go(...o){const e=o.join(" ");e in lS||(lS[e]=!0,me(...o))}function iT(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const aT={[_p]:vp,[Sp]:yp,[xp]:Ep,[Bl]:Mp,[vp]:_p,[yp]:Sp,[Ep]:xp,[Mp]:Bl};class us{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,im=180/Math.PI;function kl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Ie(o,e,i){return Math.max(e,Math.min(i,o))}function rT(o,e){return(o%e+e)%e}function Bh(o,e,i){return(1-i)*o+i*e}function Cl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ai(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Bm=class Bm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ie(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bm.prototype.isVector2=!0;let Be=Bm;class Ge{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],v=r[l+2],g=r[l+3],S=u[d+0],E=u[d+1],w=u[d+2],U=u[d+3];if(g!==U||p!==S||m!==E||v!==w){let M=p*S+m*E+v*w+g*U;M<0&&(S=-S,E=-E,w=-w,U=-U,M=-M);let x=1-h;if(M<.9995){const F=Math.acos(M),K=Math.sin(F);x=Math.sin(x*F)/K,h=Math.sin(h*F)/K,p=p*x+S*h,m=m*x+E*h,v=v*x+w*h,g=g*x+U*h}else{p=p*x+S*h,m=m*x+E*h,v=v*x+w*h,g=g*x+U*h;const F=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=F,m*=F,v*=F,g*=F}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],v=r[l+3],g=u[d],S=u[d+1],E=u[d+2],w=u[d+3];return e[i]=h*w+v*g+p*E-m*S,e[i+1]=p*w+v*S+m*g-h*E,e[i+2]=m*w+v*E+h*S-p*g,e[i+3]=v*w-h*g-p*S-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),v=h(l/2),g=h(u/2),S=p(r/2),E=p(l/2),w=p(u/2);switch(d){case"XYZ":this._x=S*v*g+m*E*w,this._y=m*E*g-S*v*w,this._z=m*v*w+S*E*g,this._w=m*v*g-S*E*w;break;case"YXZ":this._x=S*v*g+m*E*w,this._y=m*E*g-S*v*w,this._z=m*v*w-S*E*g,this._w=m*v*g+S*E*w;break;case"ZXY":this._x=S*v*g-m*E*w,this._y=m*E*g+S*v*w,this._z=m*v*w+S*E*g,this._w=m*v*g-S*E*w;break;case"ZYX":this._x=S*v*g-m*E*w,this._y=m*E*g+S*v*w,this._z=m*v*w-S*E*g,this._w=m*v*g+S*E*w;break;case"YZX":this._x=S*v*g+m*E*w,this._y=m*E*g+S*v*w,this._z=m*v*w-S*E*g,this._w=m*v*g-S*E*w;break;case"XZY":this._x=S*v*g-m*E*w,this._y=m*E*g-S*v*w,this._z=m*v*w+S*E*g,this._w=m*v*g+S*E*w;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],v=i[6],g=i[10],S=r+h+g;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-p)*E,this._y=(u-m)*E,this._z=(d-l)*E}else if(r>h&&r>g){const E=2*Math.sqrt(1+r-h-g);this._w=(v-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+m)/E}else if(h>g){const E=2*Math.sqrt(1+h-r-g);this._w=(u-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+g-r-h);this._w=(d-l)/E,this._x=(u+m)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ie(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+d*h+l*m-u*p,this._y=l*v+d*p+u*h-r*m,this._z=u*v+d*m+r*p-l*h,this._w=d*v-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);p=Math.sin(p*m)/v,i=Math.sin(i*m)/v,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hm=class Hm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(uS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(uS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+p*m+d*g-h*v,this.y=r+p*v+h*m-u*g,this.z=l+p*g+u*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ie(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hm.prototype.isVector3=!0;let J=Hm;const Hh=new J,uS=new Ge,Gm=class Gm{constructor(e,i,r,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],v=r[4],g=r[7],S=r[2],E=r[5],w=r[8],U=l[0],M=l[3],x=l[6],F=l[1],K=l[4],D=l[7],L=l[2],O=l[5],B=l[8];return u[0]=d*U+h*F+p*L,u[3]=d*M+h*K+p*O,u[6]=d*x+h*D+p*B,u[1]=m*U+v*F+g*L,u[4]=m*M+v*K+g*O,u[7]=m*x+v*D+g*B,u[2]=S*U+E*F+w*L,u[5]=S*M+E*K+w*O,u[8]=S*x+E*D+w*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return i*d*v-i*h*m-r*u*v+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=v*d-h*m,S=h*p-v*u,E=m*u-d*p,w=i*g+r*S+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/w;return e[0]=g*U,e[1]=(l*m-v*r)*U,e[2]=(h*r-l*d)*U,e[3]=S*U,e[4]=(v*i-l*p)*U,e[5]=(l*u-h*i)*U,e[6]=E*U,e[7]=(r*p-m*i)*U,e[8]=(d*i-r*u)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return go("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gh.makeScale(e,i)),this}rotate(e){return go("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gh.makeRotation(-e)),this}translate(e,i){return go("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gm.prototype.isMatrix3=!0;let Se=Gm;const Gh=new Se,fS=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dS=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sT(){const o={enabled:!0,workingColorSpace:Zu,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Qe&&(l.r=qa(l.r),l.g=qa(l.g),l.b=qa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qe&&(l.r=_o(l.r),l.g=_o(l.g),l.b=_o(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===wr?Ku:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Zu]:{primaries:e,whitePoint:r,transfer:Ku,toXYZ:fS,fromXYZ:dS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:r,transfer:Qe,toXYZ:fS,fromXYZ:dS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),o}const Pe=sT();function qa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function _o(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $s;class oT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{$s===void 0&&($s=Qu("canvas")),$s.width=e.width,$s.height=e.height;const l=$s.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=$s}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=qa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(qa(i[r]/255)*255):i[r]=qa(i[r]);return{data:i,width:e.width,height:e.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lT=0;class Um{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=kl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Vh(l[d].image)):u.push(Vh(l[d]))}else u=Vh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?oT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}let cT=0;const Xh=new J;class Xn extends us{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Xa,l=Xa,u=Vn,d=ss,h=Vi,p=vi,m=Xn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=kl(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xh).x}get height(){return this.source.getSize(Xh).y}get depth(){return this.source.getSize(Xh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tp:e.x=e.x-Math.floor(e.x);break;case Xa:e.x=e.x<0?0:1;break;case bp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tp:e.y=e.y-Math.floor(e.y);break;case Xa:e.y=e.y<0?0:1;break;case bp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Kx;Xn.DEFAULT_ANISOTROPY=1;const Vm=class Vm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],v=p[4],g=p[8],S=p[1],E=p[5],w=p[9],U=p[2],M=p[6],x=p[10];if(Math.abs(v-S)<.01&&Math.abs(g-U)<.01&&Math.abs(w-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+U)<.1&&Math.abs(w+M)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const K=(m+1)/2,D=(E+1)/2,L=(x+1)/2,O=(v+S)/4,B=(g+U)/4,b=(w+M)/4;return K>D&&K>L?K<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(K),l=O/r,u=B/r):D>L?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=O/l,u=b/l):L<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(L),r=B/u,l=b/u),this.set(r,l,u,i),this}let F=Math.sqrt((M-w)*(M-w)+(g-U)*(g-U)+(S-v)*(S-v));return Math.abs(F)<.001&&(F=1),this.x=(M-w)/F,this.y=(g-U)/F,this.z=(S-v)/F,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ie(this.x,e.x,i.x),this.y=Ie(this.y,e.y,i.y),this.z=Ie(this.z,e.z,i.z),this.w=Ie(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ie(this.x,e,i),this.y=Ie(this.y,e,i),this.z=Ie(this.z,e,i),this.w=Ie(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ie(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vm.prototype.isVector4=!0;let ln=Vm;class uT extends us{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Xn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Um(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends uT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class aM extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fT extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ju=class ju{constructor(e,i,r,l,u,d,h,p,m,v,g,S,E,w,U,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,v,g,S,E,w,U,M)}set(e,i,r,l,u,d,h,p,m,v,g,S,E,w,U,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=v,x[10]=g,x[14]=S,x[3]=E,x[7]=w,x[11]=U,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ju().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/to.setFromMatrixColumn(e,0).length(),u=1/to.setFromMatrixColumn(e,1).length(),d=1/to.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*v,E=d*g,w=h*v,U=h*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=E+w*m,i[5]=S-U*m,i[9]=-h*p,i[2]=U-S*m,i[6]=w+E*m,i[10]=d*p}else if(e.order==="YXZ"){const S=p*v,E=p*g,w=m*v,U=m*g;i[0]=S+U*h,i[4]=w*h-E,i[8]=d*m,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=E*h-w,i[6]=U+S*h,i[10]=d*p}else if(e.order==="ZXY"){const S=p*v,E=p*g,w=m*v,U=m*g;i[0]=S-U*h,i[4]=-d*g,i[8]=w+E*h,i[1]=E+w*h,i[5]=d*v,i[9]=U-S*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const S=d*v,E=d*g,w=h*v,U=h*g;i[0]=p*v,i[4]=w*m-E,i[8]=S*m+U,i[1]=p*g,i[5]=U*m+S,i[9]=E*m-w,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const S=d*p,E=d*m,w=h*p,U=h*m;i[0]=p*v,i[4]=U-S*g,i[8]=w*g+E,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-m*v,i[6]=E*g+w,i[10]=S-U*g}else if(e.order==="XZY"){const S=d*p,E=d*m,w=h*p,U=h*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=S*g+U,i[5]=d*v,i[9]=E*g-w,i[2]=w*g-E,i[6]=h*v,i[10]=U*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dT,e,hT)}lookAt(e,i,r){const l=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),yr.crossVectors(r,gi),yr.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),yr.crossVectors(r,gi)),yr.normalize(),_u.crossVectors(gi,yr),l[0]=yr.x,l[4]=_u.x,l[8]=gi.x,l[1]=yr.y,l[5]=_u.y,l[9]=gi.y,l[2]=yr.z,l[6]=_u.z,l[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],v=r[1],g=r[5],S=r[9],E=r[13],w=r[2],U=r[6],M=r[10],x=r[14],F=r[3],K=r[7],D=r[11],L=r[15],O=l[0],B=l[4],b=l[8],I=l[12],T=l[1],C=l[5],N=l[9],q=l[13],V=l[2],Y=l[6],X=l[10],k=l[14],$=l[3],j=l[7],pt=l[11],Mt=l[15];return u[0]=d*O+h*T+p*V+m*$,u[4]=d*B+h*C+p*Y+m*j,u[8]=d*b+h*N+p*X+m*pt,u[12]=d*I+h*q+p*k+m*Mt,u[1]=v*O+g*T+S*V+E*$,u[5]=v*B+g*C+S*Y+E*j,u[9]=v*b+g*N+S*X+E*pt,u[13]=v*I+g*q+S*k+E*Mt,u[2]=w*O+U*T+M*V+x*$,u[6]=w*B+U*C+M*Y+x*j,u[10]=w*b+U*N+M*X+x*pt,u[14]=w*I+U*q+M*k+x*Mt,u[3]=F*O+K*T+D*V+L*$,u[7]=F*B+K*C+D*Y+L*j,u[11]=F*b+K*N+D*X+L*pt,u[15]=F*I+K*q+D*k+L*Mt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],v=e[2],g=e[6],S=e[10],E=e[14],w=e[3],U=e[7],M=e[11],x=e[15],F=p*E-m*S,K=h*E-m*g,D=h*S-p*g,L=d*E-m*v,O=d*S-p*v,B=d*g-h*v;return i*(U*F-M*K+x*D)-r*(w*F-M*L+x*O)+l*(w*K-U*L+x*B)-u*(w*D-U*O+M*B)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],d=e[5],h=e[9],p=e[2],m=e[6],v=e[10];return i*(d*v-h*m)-r*(u*v-h*p)+l*(u*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],g=e[9],S=e[10],E=e[11],w=e[12],U=e[13],M=e[14],x=e[15],F=i*h-r*d,K=i*p-l*d,D=i*m-u*d,L=r*p-l*h,O=r*m-u*h,B=l*m-u*p,b=v*U-g*w,I=v*M-S*w,T=v*x-E*w,C=g*M-S*U,N=g*x-E*U,q=S*x-E*M,V=F*q-K*N+D*C+L*T-O*I+B*b;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/V;return e[0]=(h*q-p*N+m*C)*Y,e[1]=(l*N-r*q-u*C)*Y,e[2]=(U*B-M*O+x*L)*Y,e[3]=(S*O-g*B-E*L)*Y,e[4]=(p*T-d*q-m*I)*Y,e[5]=(i*q-l*T+u*I)*Y,e[6]=(M*D-w*B-x*K)*Y,e[7]=(v*B-S*D+E*K)*Y,e[8]=(d*N-h*T+m*b)*Y,e[9]=(r*T-i*N-u*b)*Y,e[10]=(w*O-U*D+x*F)*Y,e[11]=(g*D-v*O-E*F)*Y,e[12]=(h*I-d*C-p*b)*Y,e[13]=(i*C-r*I+l*b)*Y,e[14]=(U*K-w*L-M*F)*Y,e[15]=(v*L-g*K+S*F)*Y,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,v=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+r,v*p-l*d,0,m*p-l*h,v*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,v=d+d,g=h+h,S=u*m,E=u*v,w=u*g,U=d*v,M=d*g,x=h*g,F=p*m,K=p*v,D=p*g,L=r.x,O=r.y,B=r.z;return l[0]=(1-(U+x))*L,l[1]=(E+D)*L,l[2]=(w-K)*L,l[3]=0,l[4]=(E-D)*O,l[5]=(1-(S+x))*O,l[6]=(M+F)*O,l[7]=0,l[8]=(w+K)*B,l[9]=(M-F)*B,l[10]=(1-(S+U))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=to.set(l[0],l[1],l[2]).length();const h=to.set(l[4],l[5],l[6]).length(),p=to.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Fi.copy(this);const m=1/d,v=1/h,g=1/p;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=v,Fi.elements[5]*=v,Fi.elements[6]*=v,Fi.elements[8]*=g,Fi.elements[9]*=g,Fi.elements[10]*=g,i.setFromRotationMatrix(Fi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,v=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let w,U;if(p)w=u/(d-u),U=d*u/(d-u);else if(h===ua)w=-(d+u)/(d-u),U=-2*d*u/(d-u);else if(h===Vl)w=-d/(d-u),U=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=U,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let w,U;if(p)w=1/(d-u),U=d/(d-u);else if(h===ua)w=-2/(d-u),U=-(d+u)/(d-u);else if(h===Vl)w=-1/(d-u),U=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=g,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=w,m[14]=U,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};ju.prototype.isMatrix4=!0;let $e=ju;const to=new J,Fi=new $e,dT=new J(0,0,0),hT=new J(1,1,1),yr=new J,_u=new J,gi=new J,hS=new $e,pS=new Ge;class kn{constructor(e=0,i=0,r=0,l=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],v=l[9],g=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ie(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ie(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return hS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return pS.setFromEuler(this),this.setFromQuaternion(pS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class rM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pT=0;const mS=new J,eo=new Ge,Na=new $e,vu=new J,wl=new J,mT=new J,gT=new Ge,gS=new J(1,0,0),_S=new J(0,1,0),vS=new J(0,0,1),SS={type:"added"},_T={type:"removed"},no={type:"childadded",child:null},kh={type:"childremoved",child:null};class Fn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new J,i=new kn,r=new Ge,l=new J(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new Se}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return eo.setFromAxisAngle(e,i),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,i){return eo.setFromAxisAngle(e,i),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(gS,e)}rotateY(e){return this.rotateOnAxis(_S,e)}rotateZ(e){return this.rotateOnAxis(vS,e)}translateOnAxis(e,i){return mS.copy(e).applyQuaternion(this.quaternion),this.position.add(mS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(gS,e)}translateY(e){return this.translateOnAxis(_S,e)}translateZ(e){return this.translateOnAxis(vS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?vu.copy(e):vu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(wl,vu,this.up):Na.lookAt(vu,wl,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),eo.setFromRotationMatrix(Na),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(SS),no.child=e,this.dispatchEvent(no),no.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(_T),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(SS),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,e,mT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,gT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(e.shapes,g)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),g=d(e.shapes),S=d(e.skeletons),E=d(e.animations),w=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fn.DEFAULT_UP=new J(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Su extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vT={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Su,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Su,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Su,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const U of e.hand.values()){const M=i.getJointPose(U,r),x=this._getHandJoint(m,U);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],S=v.position.distanceTo(g.position),E=.02,w=.005;m.inputState.pinching&&S>E+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=E-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(vT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Su;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const sM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},xu={h:0,s:0,l:0};function Wh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Fe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pe.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Pe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Pe.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Pe.workingColorSpace){if(e=rT(e,1),i=Ie(i,0,1),r=Ie(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Wh(d,u,e+1/3),this.g=Wh(d,u,e),this.b=Wh(d,u,e-1/3)}return Pe.colorSpaceToWorking(this,l),this}setStyle(e,i=wn){function r(u){u!==void 0&&parseFloat(u)<1&&me("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:me("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=wn){const r=sM[e.toLowerCase()];return r!==void 0?this.setHex(r,i):me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Pe.workingToColorSpace(Gn.copy(this),e),Math.round(Ie(Gn.r*255,0,255))*65536+Math.round(Ie(Gn.g*255,0,255))*256+Math.round(Ie(Gn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pe.workingColorSpace){Pe.workingToColorSpace(Gn.copy(this),i);const r=Gn.r,l=Gn.g,u=Gn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const v=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=v<=.5?g/(d+h):g/(2-d-h),d){case r:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-r)/g+2;break;case u:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=Pe.workingColorSpace){return Pe.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=wn){Pe.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,r=Gn.g,l=Gn.b;return e!==wn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+i,Er.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Er),e.getHSL(xu);const r=Bh(Er.h,xu.h,i),l=Bh(Er.s,xu.s,i),u=Bh(Er.l,xu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Fe;Fe.NAMES=sM;class Mo extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new J,Ua=new J,Yh=new J,La=new J,io=new J,ao=new J,xS=new J,Zh=new J,Kh=new J,Qh=new J,Jh=new ln,jh=new ln,$h=new ln;class Gi{constructor(e=new J,i=new J,r=new J){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Bi.subVectors(e,i),l.cross(Bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Bi.subVectors(l,i),Ua.subVectors(r,i),Yh.subVectors(e,i);const d=Bi.dot(Bi),h=Bi.dot(Ua),p=Bi.dot(Yh),m=Ua.dot(Ua),v=Ua.dot(Yh),g=d*m-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,E=(m*p-h*v)*S,w=(d*v-h*p)*S;return u.set(1-E-w,w,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,La)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,La.x),p.addScaledVector(d,La.y),p.addScaledVector(h,La.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return Jh.setScalar(0),jh.setScalar(0),$h.setScalar(0),Jh.fromBufferAttribute(e,i),jh.fromBufferAttribute(e,r),$h.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Jh,u.x),d.addScaledVector(jh,u.y),d.addScaledVector($h,u.z),d}static isFrontFacing(e,i,r,l){return Bi.subVectors(r,i),Ua.subVectors(e,i),Bi.cross(Ua).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Bi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;io.subVectors(l,r),ao.subVectors(u,r),Zh.subVectors(e,r);const p=io.dot(Zh),m=ao.dot(Zh);if(p<=0&&m<=0)return i.copy(r);Kh.subVectors(e,l);const v=io.dot(Kh),g=ao.dot(Kh);if(v>=0&&g<=v)return i.copy(l);const S=p*g-v*m;if(S<=0&&p>=0&&v<=0)return d=p/(p-v),i.copy(r).addScaledVector(io,d);Qh.subVectors(e,u);const E=io.dot(Qh),w=ao.dot(Qh);if(w>=0&&E<=w)return i.copy(u);const U=E*m-p*w;if(U<=0&&m>=0&&w<=0)return h=m/(m-w),i.copy(r).addScaledVector(ao,h);const M=v*w-E*g;if(M<=0&&g-v>=0&&E-w>=0)return xS.subVectors(u,l),h=(g-v)/(g-v+(E-w)),i.copy(l).addScaledVector(xS,h);const x=1/(M+U+S);return d=U*x,h=S*x,i.copy(r).addScaledVector(io,d).addScaledVector(ao,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ql{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Hi):Hi.fromBufferAttribute(u,d),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mu.copy(r.boundingBox)),Mu.applyMatrix4(e.matrixWorld),this.union(Mu)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),yu.subVectors(this.max,Dl),ro.subVectors(e.a,Dl),so.subVectors(e.b,Dl),oo.subVectors(e.c,Dl),Tr.subVectors(so,ro),br.subVectors(oo,so),ts.subVectors(ro,oo);let i=[0,-Tr.z,Tr.y,0,-br.z,br.y,0,-ts.z,ts.y,Tr.z,0,-Tr.x,br.z,0,-br.x,ts.z,0,-ts.x,-Tr.y,Tr.x,0,-br.y,br.x,0,-ts.y,ts.x,0];return!tp(i,ro,so,oo,yu)||(i=[1,0,0,0,1,0,0,0,1],!tp(i,ro,so,oo,yu))?!1:(Eu.crossVectors(Tr,br),i=[Eu.x,Eu.y,Eu.z],tp(i,ro,so,oo,yu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new J,new J,new J,new J,new J,new J,new J,new J],Hi=new J,Mu=new ql,ro=new J,so=new J,oo=new J,Tr=new J,br=new J,ts=new J,Dl=new J,yu=new J,Eu=new J,es=new J;function tp(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){es.fromArray(o,u);const h=l.x*Math.abs(es.x)+l.y*Math.abs(es.y)+l.z*Math.abs(es.z),p=e.dot(es),m=i.dot(es),v=r.dot(es);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const xn=new J,Tu=new Be;let ST=0;class Wa extends us{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ST++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=tT,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Cl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ai(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Cl(i,this.array)),i}setX(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Cl(i,this.array)),i}setY(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Cl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Cl(i,this.array)),i}setW(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),r=ai(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),r=ai(r,this.array),l=ai(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),r=ai(r,this.array),l=ai(l,this.array),u=ai(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class oM extends Wa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class lM extends Wa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class pn extends Wa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const xT=new ql,Nl=new J,ep=new J;class Lm{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):xT.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nl.subVectors(e,this.center);const i=Nl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Nl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ep.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nl.copy(e.center).add(ep)),this.expandByPoint(Nl.copy(e.center).sub(ep))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MT=0;const Ni=new $e,np=new Fn,lo=new J,_i=new ql,Ul=new ql,Cn=new J;class jn extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=kl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eT(e)?lM:oM)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new Se().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,i,r){return Ni.makeTranslation(e,i,r),this.applyMatrix4(Ni),this}scale(e,i,r){return Ni.makeScale(e,i,r),this.applyMatrix4(Ni),this}lookAt(e){return np.lookAt(e),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ql);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];_i.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ul.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(_i.min,Ul.min),_i.expandByPoint(Cn),Cn.addVectors(_i.max,Ul.max),_i.expandByPoint(Cn)):(_i.expandByPoint(Ul.min),_i.expandByPoint(Ul.max))}_i.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Cn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)Cn.fromBufferAttribute(h,m),p&&(lo.fromBufferAttribute(e,m),Cn.add(lo)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Wa(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let b=0;b<r.count;b++)h[b]=new J,p[b]=new J;const m=new J,v=new J,g=new J,S=new Be,E=new Be,w=new Be,U=new J,M=new J;function x(b,I,T){m.fromBufferAttribute(r,b),v.fromBufferAttribute(r,I),g.fromBufferAttribute(r,T),S.fromBufferAttribute(u,b),E.fromBufferAttribute(u,I),w.fromBufferAttribute(u,T),v.sub(m),g.sub(m),E.sub(S),w.sub(S);const C=1/(E.x*w.y-w.x*E.y);isFinite(C)&&(U.copy(v).multiplyScalar(w.y).addScaledVector(g,-E.y).multiplyScalar(C),M.copy(g).multiplyScalar(E.x).addScaledVector(v,-w.x).multiplyScalar(C),h[b].add(U),h[I].add(U),h[T].add(U),p[b].add(M),p[I].add(M),p[T].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let b=0,I=F.length;b<I;++b){const T=F[b],C=T.start,N=T.count;for(let q=C,V=C+N;q<V;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const K=new J,D=new J,L=new J,O=new J;function B(b){L.fromBufferAttribute(l,b),O.copy(L);const I=h[b];K.copy(I),K.sub(L.multiplyScalar(L.dot(I))).normalize(),D.crossVectors(O,I);const C=D.dot(p[b])<0?-1:1;d.setXYZW(b,K.x,K.y,K.z,C)}for(let b=0,I=F.length;b<I;++b){const T=F[b],C=T.start,N=T.count;for(let q=C,V=C+N;q<V;q+=3)B(e.getX(q+0)),B(e.getX(q+1)),B(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Wa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new J,u=new J,d=new J,h=new J,p=new J,m=new J,v=new J,g=new J;if(e)for(let S=0,E=e.count;S<E;S+=3){const w=e.getX(S+0),U=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,U),d.fromBufferAttribute(i,M),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,M),h.add(v),p.add(v),m.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(U,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,g=h.normalized,S=new m.constructor(p.length*v);let E=0,w=0;for(let U=0,M=p.length;U<M;U++){h.isInterleavedBufferAttribute?E=p[U]*h.data.stride+h.offset:E=p[U]*v;for(let x=0;x<v;x++)S[w++]=m[E++]}return new Wa(S,v,g)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let v=0,g=m.length;v<g;v++){const S=m[v],E=e(S,r);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,S=m.length;g<S;g++){const E=m[g];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=e.morphAttributes;for(const m in u){const v=[],g=u[m];for(let S=0,E=g.length;S<E;S++)v.push(g[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ip=new J,yT=new J,ET=new Se;class Cr{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ip.subVectors(r,i).cross(yT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(ip),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ET.getNormalMatrix(e),l=this.coplanarPoint(ip).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let TT=0;class Wl extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=kl(),this.name="",this.type="Material",this.blending=Fl,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bx,this.blendDst=Hx,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Bl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zh,this.stencilZFail=zh,this.stencilZPass=zh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Cr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Be().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pa=new J,ap=new J,bu=new J,Au=new J;class bT{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ap.copy(e).add(i).multiplyScalar(.5),bu.copy(i).sub(e).normalize(),Au.copy(this.origin).sub(ap);const u=e.distanceTo(i)*.5,d=-this.direction.dot(bu),h=Au.dot(this.direction),p=-Au.dot(bu),m=Au.lengthSq(),v=Math.abs(1-d*d);let g,S,E,w;if(v>0)if(g=d*p-h,S=d*h-p,w=u*v,g>=0)if(S>=-w)if(S<=w){const U=1/v;g*=U,S*=U,E=g*(g+d*S+2*h)+S*(d*g+S+2*p)+m}else S=u,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;else S=-u,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;else S<=-w?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-p),u),E=-g*g+S*(S+2*p)+m):S<=w?(g=0,S=Math.min(Math.max(-u,-p),u),E=S*(S+2*p)+m):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-p),u),E=-g*g+S*(S+2*p)+m);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),E=-g*g+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ap).addScaledVector(bu,S),E}intersectSphere(e,i){if(e.radius<0)return null;Pa.subVectors(e.center,this.origin);const r=Pa.dot(this.direction),l=Pa.dot(Pa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,p=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,p=(e.min.z-S.z)*g),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,i,r,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,v=h.z,g=e.x-d.x,S=e.y-d.y,E=e.z-d.z,w=i.x-d.x,U=i.y-d.y,M=i.z-d.z,x=r.x-d.x,F=r.y-d.y,K=r.z-d.z,D=Math.abs(p),L=Math.abs(m),O=Math.abs(v);let B,b,I,T,C,N,q,V,Y,X,k,$;if(D>=L&&D>=O?(I=p,N=g,Y=w,$=x,p>=0?(B=m,b=v,T=S,C=E,q=U,V=M,X=F,k=K):(B=v,b=m,T=E,C=S,q=M,V=U,X=K,k=F)):L>=O?(I=m,N=S,Y=U,$=F,m>=0?(B=v,b=p,T=E,C=g,q=M,V=w,X=K,k=x):(B=p,b=v,T=g,C=E,q=w,V=M,X=x,k=K)):(I=v,N=E,Y=M,$=K,v>=0?(B=p,b=m,T=g,C=S,q=w,V=U,X=x,k=F):(B=m,b=p,T=S,C=g,q=U,V=w,X=F,k=x)),I===0)return null;const j=B/I,pt=b/I,Mt=1/I,Lt=T-j*N,Nt=C-pt*N,G=q-j*Y,_t=V-pt*Y,lt=X-j*$,P=k-pt*$,et=lt*_t-P*G,dt=Lt*P-Nt*lt,yt=G*Nt-_t*Lt;if(l){if(et<0||dt<0||yt<0)return null}else if((et<0||dt<0||yt<0)&&(et>0||dt>0||yt>0))return null;const rt=et+dt+yt;if(rt===0)return null;const Tt=Mt*(et*N+dt*Y+yt*$);return(rt>0?Tt<0:Tt>0)?null:this.at(Tt/rt,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dr extends Wl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const MS=new $e,ns=new bT,Ru=new Lm,yS=new J,Cu=new J,wu=new J,Du=new J,rp=new J,Nu=new J,ES=new J,Uu=new J;class mn extends Fn{constructor(e=new jn,i=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Nu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=h[p],g=u[p];v!==0&&(rp.fromBufferAttribute(g,e),d?Nu.addScaledVector(rp,v):Nu.addScaledVector(rp.sub(i),v))}i.add(Nu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ru.copy(r.boundingSphere),Ru.applyMatrix4(u),ns.copy(e.ray).recast(e.near),!(Ru.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ru,yS)===null||ns.origin.distanceToSquared(yS)>(e.far-e.near)**2))&&(MS.copy(u).invert(),ns.copy(e.ray).applyMatrix4(MS),!(r.boundingBox!==null&&ns.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ns)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,U=S.length;w<U;w++){const M=S[w],x=d[M.materialIndex],F=Math.max(M.start,E.start),K=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let D=F,L=K;D<L;D+=3){const O=h.getX(D),B=h.getX(D+1),b=h.getX(D+2);l=Lu(this,x,e,r,m,v,g,O,B,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),U=Math.min(h.count,E.start+E.count);for(let M=w,x=U;M<x;M+=3){const F=h.getX(M),K=h.getX(M+1),D=h.getX(M+2);l=Lu(this,d,e,r,m,v,g,F,K,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,U=S.length;w<U;w++){const M=S[w],x=d[M.materialIndex],F=Math.max(M.start,E.start),K=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let D=F,L=K;D<L;D+=3){const O=D,B=D+1,b=D+2;l=Lu(this,x,e,r,m,v,g,O,B,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),U=Math.min(p.count,E.start+E.count);for(let M=w,x=U;M<x;M+=3){const F=M,K=M+1,D=M+2;l=Lu(this,d,e,r,m,v,g,F,K,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function AT(o,e,i,r,l,u,d,h){let p;if(e.side===ri?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Si,h),p===null)return null;Uu.copy(h),Uu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Uu);return m<i.near||m>i.far?null:{distance:m,point:Uu.clone(),object:o}}function Lu(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,Cu),o.getVertexPosition(p,wu),o.getVertexPosition(m,Du);const v=AT(o,e,i,r,Cu,wu,Du,ES);if(v){const g=new J;Gi.getBarycoord(ES,Cu,wu,Du,g),l&&(v.uv=Gi.getInterpolatedAttribute(l,h,p,m,g,new Be)),u&&(v.uv1=Gi.getInterpolatedAttribute(u,h,p,m,g,new Be)),d&&(v.normal=Gi.getInterpolatedAttribute(d,h,p,m,g,new J),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:p,c:m,normal:new J,materialIndex:0};Gi.getNormal(Cu,wu,Du,S.normal),v.face=S,v.barycoord=g}return v}class RT extends Xn{constructor(e=null,i=1,r=1,l,u,d,h,p,m=zn,v=zn,g,S){super(null,d,h,p,m,v,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const is=new Lm,CT=new Be(.5,.5),Ou=new J;class Om{constructor(e=new Cr,i=new Cr,r=new Cr,l=new Cr,u=new Cr,d=new Cr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ua,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],p=u[2],m=u[3],v=u[4],g=u[5],S=u[6],E=u[7],w=u[8],U=u[9],M=u[10],x=u[11],F=u[12],K=u[13],D=u[14],L=u[15];if(l[0].setComponents(m-d,E-v,x-w,L-F).normalize(),l[1].setComponents(m+d,E+v,x+w,L+F).normalize(),l[2].setComponents(m+h,E+g,x+U,L+K).normalize(),l[3].setComponents(m-h,E-g,x-U,L-K).normalize(),r)l[4].setComponents(p,S,M,D).normalize(),l[5].setComponents(m-p,E-S,x-M,L-D).normalize();else if(l[4].setComponents(m-p,E-S,x-M,L-D).normalize(),i===ua)l[5].setComponents(m+p,E+S,x+M,L+D).normalize();else if(i===Vl)l[5].setComponents(p,S,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const i=CT.distanceTo(e.center);return is.radius=.7071067811865476+i,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ou.x=l.normal.x>0?e.max.x:e.min.x,Ou.y=l.normal.y>0?e.max.y:e.min.y,Ou.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cM extends Xn{constructor(e=[],i=ls,r,l,u,d,h,p,m,v){super(e,i,r,l,u,d,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yo extends Xn{constructor(e,i,r,l,u,d,h,p,m){super(e,i,r,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xl extends Xn{constructor(e,i,r=da,l,u,d,h=zn,p=zn,m,v=Ya,g=1){if(v!==Ya&&v!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,h,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class wT extends Xl{constructor(e,i=da,r=ls,l,u,d=zn,h=zn,p,m=Ya){const v={width:e,height:e,depth:1},g=[v,v,v,v,v,v];super(e,e,i,r,l,u,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uM extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yl extends jn{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],v=[],g=[];let S=0,E=0;w("z","y","x",-1,-1,r,i,e,d,u,0),w("z","y","x",1,-1,r,i,-e,d,u,1),w("x","z","y",1,1,e,r,i,l,d,2),w("x","z","y",1,-1,e,r,-i,l,d,3),w("x","y","z",1,-1,e,i,r,l,u,4),w("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(g,2));function w(U,M,x,F,K,D,L,O,B,b,I){const T=D/B,C=L/b,N=D/2,q=L/2,V=O/2,Y=B+1,X=b+1;let k=0,$=0;const j=new J;for(let pt=0;pt<X;pt++){const Mt=pt*C-q;for(let Lt=0;Lt<Y;Lt++){const Nt=Lt*T-N;j[U]=Nt*F,j[M]=Mt*K,j[x]=V,m.push(j.x,j.y,j.z),j[U]=0,j[M]=0,j[x]=O>0?1:-1,v.push(j.x,j.y,j.z),g.push(Lt/B),g.push(1-pt/b),k+=1}}for(let pt=0;pt<b;pt++)for(let Mt=0;Mt<B;Mt++){const Lt=S+Mt+Y*pt,Nt=S+Mt+Y*(pt+1),G=S+(Mt+1)+Y*(pt+1),_t=S+(Mt+1)+Y*pt;p.push(Lt,Nt,_t),p.push(Nt,G,_t),$+=6}h.addGroup(E,$,I),E+=$,S+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ma extends jn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,v=p+1,g=e/h,S=i/p,E=[],w=[],U=[],M=[];for(let x=0;x<v;x++){const F=x*S-d;for(let K=0;K<m;K++){const D=K*g-u;w.push(D,-F,0),U.push(0,0,1),M.push(K/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let F=0;F<h;F++){const K=F+m*x,D=F+m*(x+1),L=F+1+m*(x+1),O=F+1+m*x;E.push(K,D,O),E.push(D,L,O)}this.setIndex(E),this.setAttribute("position",new pn(w,3)),this.setAttribute("normal",new pn(U,3)),this.setAttribute("uv",new pn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(TS(l))l.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(TS(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Qn(o){const e={};for(let i=0;i<o.length;i++){const r=xo(o[i]);for(const l in r)e[l]=r[l]}return e}function TS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function DT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function fM(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pe.workingColorSpace}const NT={clone:xo,merge:Qn};var UT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends Wl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UT,this.fragmentShader=LT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=DT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Fe().setHex(l.value);break;case"v2":this.uniforms[r].value=new Be().fromArray(l.value);break;case"v3":this.uniforms[r].value=new J().fromArray(l.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[r].value=new Se().fromArray(l.value);break;case"m4":this.uniforms[r].value=new $e().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class OT extends pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Eo extends Wl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nm,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PT extends Wl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IT extends Wl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pm extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class To extends Pm{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const sp=new $e,bS=new J,AS=new J;class zT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Om,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;bS.setFromMatrixPosition(e.matrixWorld),i.position.copy(bS),AS.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(AS),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){sp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(sp,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,h=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;e.coordinateSystem===Vl||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(sp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pu=new J,Iu=new Ge,aa=new J;class dM extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pu,Iu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Iu,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Pu,Iu,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pu,Iu,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new J,RS=new Be,CS=new Be;class In extends dM{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=im*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return im*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,i){return this.getViewBounds(e,RS,CS),i.subVectors(CS,RS)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Fh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Im extends dM{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class FT extends zT{constructor(){super(new Im(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bo extends Pm{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new FT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Ao extends Pm{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const co=-90,uo=1;class BT extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new In(co,uo,e,i);l.layers=this.layers,this.add(l);const u=new In(co,uo,e,i);u.layers=this.layers,this.add(u);const d=new In(co,uo,e,i);d.layers=this.layers,this.add(d);const h=new In(co,uo,e,i);h.layers=this.layers,this.add(h);const p=new In(co,uo,e,i);p.layers=this.layers,this.add(p);const m=new In(co,uo,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const U=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=U,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(g,S,E),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class HT extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xm=class Xm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};Xm.prototype.isMatrix2=!0;let wS=Xm;function DS(o,e,i,r){const l=GT(r);switch(i){case tM:return o*e;case nM:return o*e/l.components*l.byteLength;case Rm:return o*e/l.components*l.byteLength;case cs:return o*e*2/l.components*l.byteLength;case Cm:return o*e*2/l.components*l.byteLength;case eM:return o*e*3/l.components*l.byteLength;case Vi:return o*e*4/l.components*l.byteLength;case wm:return o*e*4/l.components*l.byteLength;case Gu:case Vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xu:case ku:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rp:case wp:return Math.max(o,16)*Math.max(e,8)/4;case Ap:case Cp:return Math.max(o,8)*Math.max(e,8)/2;case Dp:case Np:case Lp:case Op:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Up:case Wu:case Pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ip:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Hp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case kp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case qp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Yp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Kp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Qp:case Jp:case jp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case $p:case tm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Yu:case em:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GT(o){switch(o){case vi:case Qx:return{byteLength:1,components:1};case Hl:case Jx:case ha:return{byteLength:2,components:1};case bm:case Am:return{byteLength:2,components:4};case da:case Tm:case ca:return{byteLength:4,components:1};case jx:case $x:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Em}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Em);function hM(){let o=null,e=!1,i=null,r=null;function l(u,d){r=o.requestAnimationFrame(l),i(u,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function VT(o){const e=new WeakMap;function i(h,p){const m=h.array,v=h.usage,g=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,v),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,h),g.length===0)o.bufferSubData(m,0,v);else{g.sort((E,w)=>E.start-w.start);let S=0;for(let E=1;E<g.length;E++){const w=g[S],U=g[E];U.start<=w.start+w.count+1?w.count=Math.max(w.count,U.start+U.count-w.start):(++S,g[S]=U)}g.length=S+1;for(let E=0,w=g.length;E<w;E++){const U=g[E];o.bufferSubData(m,U.start*v.BYTES_PER_ELEMENT,v,U.start,U.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var XT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kT=`#ifdef USE_ALPHAHASH
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
#endif`,qT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KT=`#ifdef USE_AOMAP
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
#endif`,QT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JT=`#ifdef USE_BATCHING
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
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$T=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nb=`#ifdef USE_IRIDESCENCE
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
#endif`,ib=`#ifdef USE_BUMPMAP
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,db=`#define PI 3.141592653589793
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
} // validated`,hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pb=`vec3 transformedNormal = objectNormal;
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
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hb=`PhysicalMaterial material;
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
#endif`,Gb=`uniform sampler2D dfgLUT;
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
}`,Vb=`
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$b=`#if defined( USE_POINTS_UV )
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
#endif`,tA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`#ifdef USE_MORPHTARGETS
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
#endif`,sA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dA=`#ifdef USE_NORMALMAP
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
#endif`,hA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_A=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,CA=`float getShadowMask() {
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
}`,wA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DA=`#ifdef USE_SKINNING
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
#endif`,NA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UA=`#ifdef USE_SKINNING
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
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zA=`#ifdef USE_TRANSMISSION
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
#endif`,FA=`#ifdef USE_TRANSMISSION
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
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
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
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`#include <common>
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
}`,QA=`#if DEPTH_PACKING == 3200
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
}`,JA=`#define DISTANCE
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
}`,jA=`#define DISTANCE
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
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`uniform float scale;
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
}`,nR=`uniform vec3 diffuse;
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
}`,iR=`#include <common>
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
}`,aR=`uniform vec3 diffuse;
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
}`,rR=`#define LAMBERT
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
}`,sR=`#define LAMBERT
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
}`,oR=`#define MATCAP
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
}`,lR=`#define MATCAP
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
}`,cR=`#define NORMAL
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
}`,uR=`#define NORMAL
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
}`,fR=`#define PHONG
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
}`,dR=`#define PHONG
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
}`,hR=`#define STANDARD
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
}`,pR=`#define STANDARD
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
}`,mR=`#define TOON
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
}`,gR=`#define TOON
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
}`,_R=`uniform float size;
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
}`,vR=`uniform vec3 diffuse;
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
}`,SR=`#include <common>
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
}`,xR=`uniform vec3 color;
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
}`,MR=`uniform float rotation;
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
}`,yR=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:XT,alphahash_pars_fragment:kT,alphamap_fragment:qT,alphamap_pars_fragment:WT,alphatest_fragment:YT,alphatest_pars_fragment:ZT,aomap_fragment:KT,aomap_pars_fragment:QT,batching_pars_vertex:JT,batching_vertex:jT,begin_vertex:$T,beginnormal_vertex:tb,bsdfs:eb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:ab,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:sb,clipping_planes_vertex:ob,color_fragment:lb,color_pars_fragment:cb,color_pars_vertex:ub,color_vertex:fb,common:db,cube_uv_reflection_fragment:hb,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:_b,emissivemap_pars_fragment:vb,colorspace_fragment:Sb,colorspace_pars_fragment:xb,envmap_fragment:Mb,envmap_common_pars_fragment:yb,envmap_pars_fragment:Eb,envmap_pars_vertex:Tb,envmap_physical_pars_fragment:Pb,envmap_vertex:bb,fog_vertex:Ab,fog_pars_vertex:Rb,fog_fragment:Cb,fog_pars_fragment:wb,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Nb,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:Lb,lights_pars_begin:Ob,lights_toon_fragment:Ib,lights_toon_pars_fragment:zb,lights_phong_fragment:Fb,lights_phong_pars_fragment:Bb,lights_physical_fragment:Hb,lights_physical_pars_fragment:Gb,lights_fragment_begin:Vb,lights_fragment_maps:Xb,lights_fragment_end:kb,lightprobes_pars_fragment:qb,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Kb,map_fragment:Qb,map_pars_fragment:Jb,map_particle_fragment:jb,map_particle_pars_fragment:$b,metalnessmap_fragment:tA,metalnessmap_pars_fragment:eA,morphinstance_vertex:nA,morphcolor_vertex:iA,morphnormal_vertex:aA,morphtarget_pars_vertex:rA,morphtarget_vertex:sA,normal_fragment_begin:oA,normal_fragment_maps:lA,normal_pars_fragment:cA,normal_pars_vertex:uA,normal_vertex:fA,normalmap_pars_fragment:dA,clearcoat_normal_fragment_begin:hA,clearcoat_normal_fragment_maps:pA,clearcoat_pars_fragment:mA,iridescence_pars_fragment:gA,opaque_fragment:_A,packing:vA,premultiplied_alpha_fragment:SA,project_vertex:xA,dithering_fragment:MA,dithering_pars_fragment:yA,roughnessmap_fragment:EA,roughnessmap_pars_fragment:TA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:AA,shadowmap_vertex:RA,shadowmask_pars_fragment:CA,skinbase_vertex:wA,skinning_pars_vertex:DA,skinning_vertex:NA,skinnormal_vertex:UA,specularmap_fragment:LA,specularmap_pars_fragment:OA,tonemapping_fragment:PA,tonemapping_pars_fragment:IA,transmission_fragment:zA,transmission_pars_fragment:FA,uv_pars_fragment:BA,uv_pars_vertex:HA,uv_vertex:GA,worldpos_vertex:VA,background_vert:XA,background_frag:kA,backgroundCube_vert:qA,backgroundCube_frag:WA,cube_vert:YA,cube_frag:ZA,depth_vert:KA,depth_frag:QA,distance_vert:JA,distance_frag:jA,equirect_vert:$A,equirect_frag:tR,linedashed_vert:eR,linedashed_frag:nR,meshbasic_vert:iR,meshbasic_frag:aR,meshlambert_vert:rR,meshlambert_frag:sR,meshmatcap_vert:oR,meshmatcap_frag:lR,meshnormal_vert:cR,meshnormal_frag:uR,meshphong_vert:fR,meshphong_frag:dR,meshphysical_vert:hR,meshphysical_frag:pR,meshtoon_vert:mR,meshtoon_frag:gR,points_vert:_R,points_frag:vR,shadow_vert:SR,shadow_frag:xR,sprite_vert:MR,sprite_frag:yR},kt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},oa={basic:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Qn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Qn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Qn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Qn([kt.points,kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Qn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Qn([kt.common,kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Qn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Qn([kt.sprite,kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Qn([kt.common,kt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Qn([kt.lights,kt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};oa.physical={uniforms:Qn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const zu={r:0,b:0,g:0},ER=new $e,pM=new Se;pM.set(-1,0,0,0,1,0,0,0,1);function TR(o,e,i,r,l,u){const d=new Fe(0);let h=l===!0?0:1,p,m,v=null,g=0,S=null;function E(F){let K=F.isScene===!0?F.background:null;if(K&&K.isTexture){const D=F.backgroundBlurriness>0;K=e.get(K,D)}return K}function w(F){let K=!1;const D=E(F);D===null?M(d,h):D&&D.isColor&&(M(D,1),K=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||K)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function U(F,K){const D=E(K);D&&(D.isCubeTexture||D.mapping===$u)?(m===void 0&&(m=new mn(new Yl(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:xo(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=K.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=K.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(ER.makeRotationFromEuler(K.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(pM),m.material.toneMapped=Pe.getTransfer(D.colorSpace)!==Qe,(v!==D||g!==D.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=D,g=D.version,S=o.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new mn(new ma(2,2),new pa({name:"BackgroundMaterial",uniforms:xo(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=K.backgroundIntensity,p.material.toneMapped=Pe.getTransfer(D.colorSpace)!==Qe,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||g!==D.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,v=D,g=D.version,S=o.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function M(F,K){F.getRGB(zu,fM(o)),i.buffers.color.setClear(zu.r,zu.g,zu.b,K,u)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(F,K=1){d.set(F),h=K,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,M(d,h)},render:w,addToRenderList:U,dispose:x}}function bR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,N,q,V,Y){let X=!1;const k=g(C,V,q,N);u!==k&&(u=k,m(u.object)),X=E(C,V,q,Y),X&&w(C,V,q,Y),Y!==null&&e.update(Y,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,D(C,N,q,V),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function p(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,N,q,V){const Y=V.wireframe===!0;let X=r[N.id];X===void 0&&(X={},r[N.id]=X);const k=C.isInstancedMesh===!0?C.id:0;let $=X[k];$===void 0&&($={},X[k]=$);let j=$[q.id];j===void 0&&(j={},$[q.id]=j);let pt=j[Y];return pt===void 0&&(pt=S(p()),j[Y]=pt),pt}function S(C){const N=[],q=[],V=[];for(let Y=0;Y<i;Y++)N[Y]=0,q[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:V,object:C,attributes:{},index:null}}function E(C,N,q,V){const Y=u.attributes,X=N.attributes;let k=0;const $=q.getAttributes();for(const j in $)if($[j].location>=0){const Mt=Y[j];let Lt=X[j];if(Lt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Lt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Lt=C.instanceColor)),Mt===void 0||Mt.attribute!==Lt||Lt&&Mt.data!==Lt.data)return!0;k++}return u.attributesNum!==k||u.index!==V}function w(C,N,q,V){const Y={},X=N.attributes;let k=0;const $=q.getAttributes();for(const j in $)if($[j].location>=0){let Mt=X[j];Mt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor));const Lt={};Lt.attribute=Mt,Mt&&Mt.data&&(Lt.data=Mt.data),Y[j]=Lt,k++}u.attributes=Y,u.attributesNum=k,u.index=V}function U(){const C=u.newAttributes;for(let N=0,q=C.length;N<q;N++)C[N]=0}function M(C){x(C,0)}function x(C,N){const q=u.newAttributes,V=u.enabledAttributes,Y=u.attributeDivisors;q[C]=1,V[C]===0&&(o.enableVertexAttribArray(C),V[C]=1),Y[C]!==N&&(o.vertexAttribDivisor(C,N),Y[C]=N)}function F(){const C=u.newAttributes,N=u.enabledAttributes;for(let q=0,V=N.length;q<V;q++)N[q]!==C[q]&&(o.disableVertexAttribArray(q),N[q]=0)}function K(C,N,q,V,Y,X,k){k===!0?o.vertexAttribIPointer(C,N,q,Y,X):o.vertexAttribPointer(C,N,q,V,Y,X)}function D(C,N,q,V){U();const Y=V.attributes,X=q.getAttributes(),k=N.defaultAttributeValues;for(const $ in X){const j=X[$];if(j.location>=0){let pt=Y[$];if(pt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(pt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(pt=C.instanceColor)),pt!==void 0){const Mt=pt.normalized,Lt=pt.itemSize,Nt=e.get(pt);if(Nt===void 0)continue;const G=Nt.buffer,_t=Nt.type,lt=Nt.bytesPerElement,P=_t===o.INT||_t===o.UNSIGNED_INT||pt.gpuType===Tm;if(pt.isInterleavedBufferAttribute){const et=pt.data,dt=et.stride,yt=pt.offset;if(et.isInstancedInterleavedBuffer){for(let rt=0;rt<j.locationSize;rt++)x(j.location+rt,et.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let rt=0;rt<j.locationSize;rt++)M(j.location+rt);o.bindBuffer(o.ARRAY_BUFFER,G);for(let rt=0;rt<j.locationSize;rt++)K(j.location+rt,Lt/j.locationSize,_t,Mt,dt*lt,(yt+Lt/j.locationSize*rt)*lt,P)}else{if(pt.isInstancedBufferAttribute){for(let et=0;et<j.locationSize;et++)x(j.location+et,pt.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let et=0;et<j.locationSize;et++)M(j.location+et);o.bindBuffer(o.ARRAY_BUFFER,G);for(let et=0;et<j.locationSize;et++)K(j.location+et,Lt/j.locationSize,_t,Mt,Lt*lt,Lt/j.locationSize*et*lt,P)}}else if(k!==void 0){const Mt=k[$];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(j.location,Mt);break;case 3:o.vertexAttrib3fv(j.location,Mt);break;case 4:o.vertexAttrib4fv(j.location,Mt);break;default:o.vertexAttrib1fv(j.location,Mt)}}}}F()}function L(){I();for(const C in r){const N=r[C];for(const q in N){const V=N[q];for(const Y in V){const X=V[Y];for(const k in X)v(X[k].object),delete X[k];delete V[Y]}}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const N=r[C.id];for(const q in N){const V=N[q];for(const Y in V){const X=V[Y];for(const k in X)v(X[k].object),delete X[k];delete V[Y]}}delete r[C.id]}function B(C){for(const N in r){const q=r[N];for(const V in q){const Y=q[V];if(Y[C.id]===void 0)continue;const X=Y[C.id];for(const k in X)v(X[k].object),delete X[k];delete Y[C.id]}}}function b(C){for(const N in r){const q=r[N],V=C.isInstancedMesh===!0?C.id:0,Y=q[V];if(Y!==void 0){for(const X in Y){const k=Y[X];for(const $ in k)v(k[$].object),delete k[$];delete Y[X]}delete q[V],Object.keys(q).length===0&&delete r[N]}}}function I(){T(),d=!0,u!==l&&(u=l,m(u.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:U,enableAttribute:M,disableUnusedAttributes:F}}function AR(o,e,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,v){v!==0&&(o.drawArraysInstanced(r,p,m,v),i.update(m,r,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let S=0;for(let E=0;E<v;E++)S+=m[E];i.update(S,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function RR(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Vi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const b=B===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==vi&&B!==ca&&!b&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(me("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&S===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),K=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:w,maxTextureSize:U,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:K,maxFragmentUniforms:D,maxSamples:L,samples:O}}function CR(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Cr,h=new Se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const E=g.length!==0||S||r!==0||l;return l=S,r=g.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,E){const w=g.clippingPlanes,U=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||w===null||w.length===0||u&&!M)u?v(null):m();else{const F=u?0:r,K=F*4;let D=x.clippingState||null;p.value=D,D=v(w,S,K,E);for(let L=0;L!==K;++L)D[L]=i[L];x.clippingState=D,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,E,w){const U=g!==null?g.length:0;let M=null;if(U!==0){if(M=p.value,w!==!0||M===null){const x=E+U*4,F=S.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let K=0,D=E;K!==U;++K,D+=4)d.copy(g[K]).applyMatrix4(F,h),d.normal.toArray(M,D),M[D+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,M}}const mo=4,wR=6,DR=20,NR=256,Ll=new Im,NS=new Fe;let op=null,lp=0,cp=0,up=!1;const UR=new J,as=new J;class US{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=UR}=u;op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=PS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=OS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(op,lp,cp),this._renderer.xr.enabled=up,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ls||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),op=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ha,format:Vi,colorSpace:Zu,depthBuffer:!1},l=LS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=LS(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=LR(u)),this._blurMaterial=PR(u,e,i),this._ggxMaterial=OR(u,e,i)}return l}_compileMaterial(e){const i=new mn(new jn,e);this._renderer.compile(i,Ll)}_sceneToCubeUV(e,i,r,l,u){const p=new In(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,E=g.toneMapping;g.getClearColor(NS),g.toneMapping=fa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Yl,new Dr({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,M=U.material;let x=!1;const F=e.background;F?F.isColor&&(M.color.copy(F),e.background=null,x=!0):(M.color.copy(NS),x=!0);for(let K=0;K<6;K++){const D=K%3;D===0?(p.up.set(0,m[K],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[K],u.y,u.z)):D===1?(p.up.set(0,0,m[K]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[K],u.z)):(p.up.set(0,m[K],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[K]));const L=this._cubeSize;fo(l,D*L,K>2?L:0,L,L),g.setRenderTarget(l),x&&g.render(U,p),g.render(e,p)}g.toneMapping=E,g.autoClear=S,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ls||e.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=PS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=OS());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;fo(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Ll)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-v*v),S=m*1.25,E=g*S,{_lodMax:w}=this,U=this._sizeLods[r],M=3*U*(r>w-mo?r-w+mo:0),x=4*(this._cubeSize-U);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=w-i,fo(u,M,x,3*U,2*U),l.setRenderTarget(u),l.render(h,Ll),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=w-r,fo(e,M,x,3*U,2*U),l.setRenderTarget(e),l.render(h,Ll)}_blur(e,i,r,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,u,i,r,d),this._blurPass(u,e,r,r,d)}_blurPass(e,i,r,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[l],g=3*v*(l>this._lodMax-mo?l-this._lodMax+mo:0),S=4*(this._cubeSize-v);fo(i,g,S,3*v,2*v),d.setRenderTarget(i),d.render(p,Ll)}}function LR(o){const e=[],i=[];let r=o;const l=o-mo+1+wR;for(let u=0;u<l;u++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,v=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,S=6,E=3,w=new Float32Array(E*S*g),U=new Float32Array(E*S*g);for(let x=0;x<g;x++){const F=x%3*2/3-1,K=x>2?0:-1,D=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];w.set(D,E*S*x);for(let L=0;L<S;L++){const O=v[L*2]*2-1,B=v[L*2+1]*2-1;x===0?as.set(1,B,O):x===1?as.set(-O,1,-B):x===2?as.set(-O,B,1):x===3?as.set(-1,B,-O):x===4?as.set(-O,-1,B):as.set(O,B,-1),as.toArray(U,(x*S+L)*E)}}const M=new jn;M.setAttribute("position",new Wa(w,E)),M.setAttribute("outputDirection",new Wa(U,E)),i.push(new mn(M,null)),r>mo&&r--}return{lodMeshes:i,sizeLods:e}}function LS(o,e,i){const r=new Xi(o,e,i);return r.texture.mapping=$u,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fo(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function OR(o,e,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function PR(o,e,i){return new pa({name:"SphericalGaussianBlur",defines:{SAMPLES:DR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function OS(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function PS(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function tf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class mM extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new cM(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yl(5,5,5),u=new pa({name:"CubemapFromEquirect",uniforms:xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:ka});u.uniforms.tEquirect.value=i;const d=new mn(l,u),h=i.minFilter;return i.minFilter===ss&&(i.minFilter=Vn),new BT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function IR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(S,E=!1){return S==null?null:E?d(S):u(S)}function u(S){if(S&&S.isTexture){const E=S.mapping;if(E===Oh||E===Ph)if(e.has(S)){const w=e.get(S).texture;return h(w,S.mapping)}else{const w=S.image;if(w&&w.height>0){const U=new mM(w.height);return U.fromEquirectangularTexture(o,S),e.set(S,U),S.addEventListener("dispose",m),h(U.texture,S.mapping)}else return null}}return S}function d(S){if(S&&S.isTexture){const E=S.mapping,w=E===Oh||E===Ph,U=E===ls||E===So;if(w||U){let M=i.get(S);const x=M!==void 0?M.texture.pmremVersion:0;if(S.isRenderTargetTexture&&S.pmremVersion!==x)return r===null&&(r=new US(o)),M=w?r.fromEquirectangular(S,M):r.fromCubemap(S,M),M.texture.pmremVersion=S.pmremVersion,i.set(S,M),M.texture;if(M!==void 0)return M.texture;{const F=S.image;return w&&F&&F.height>0||U&&F&&p(F)?(r===null&&(r=new US(o)),M=w?r.fromEquirectangular(S):r.fromCubemap(S),M.texture.pmremVersion=S.pmremVersion,i.set(S,M),S.addEventListener("dispose",v),M.texture):null}}}return S}function h(S,E){return E===Oh?S.mapping=ls:E===Ph&&(S.mapping=So),S}function p(S){let E=0;const w=6;for(let U=0;U<w;U++)S[U]!==void 0&&E++;return E===w}function m(S){const E=S.target;E.removeEventListener("dispose",m);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function v(S){const E=S.target;E.removeEventListener("dispose",v);const w=i.get(E);w!==void 0&&(i.delete(E),w.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function zR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&go("WebGLRenderer: "+r+" extension not supported."),l}}}function FR(o,e,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);S.removeEventListener("dispose",d),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function p(g){const S=g.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function m(g){const S=[],E=g.index,w=g.attributes.position;let U=0;if(w===void 0)return;if(E!==null){const F=E.array;U=E.version;for(let K=0,D=F.length;K<D;K+=3){const L=F[K+0],O=F[K+1],B=F[K+2];S.push(L,O,O,B,B,L)}}else{const F=w.array;U=w.version;for(let K=0,D=F.length/3-1;K<D;K+=3){const L=K+0,O=K+1,B=K+2;S.push(L,O,O,B,B,L)}}const M=new(w.count>=65535?lM:oM)(S,1);M.version=U;const x=u.get(g);x&&e.remove(x),u.set(g,M)}function v(g){const S=u.get(g);if(S){const E=g.index;E!==null&&S.version<E.version&&m(g)}else m(g);return u.get(g)}return{get:h,update:p,getWireframeAttribute:v}}function BR(o,e,i){let r;function l(g){r=g}let u,d;function h(g){u=g.type,d=g.bytesPerElement}function p(g,S){o.drawElements(r,S,u,g*d),i.update(S,r,1)}function m(g,S,E){E!==0&&(o.drawElementsInstanced(r,S,u,g*d,E),i.update(S,r,E))}function v(g,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,g,0,E);let U=0;for(let M=0;M<E;M++)U+=S[M];i.update(U,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function HR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Ve("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function GR(o,e,i){const r=new WeakMap,l=new ln;function u(d,h,p){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let T=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",T)};var E=T;S!==void 0&&S.texture.dispose();const w=h.morphAttributes.position!==void 0,U=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],K=h.morphAttributes.color||[];let D=0;w===!0&&(D=1),U===!0&&(D=2),M===!0&&(D=3);let L=h.attributes.position.count*D,O=1;L>e.maxTextureSize&&(O=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const B=new Float32Array(L*O*4*g),b=new aM(B,L,O,g);b.type=ca,b.needsUpdate=!0;const I=D*4;for(let C=0;C<g;C++){const N=x[C],q=F[C],V=K[C],Y=L*O*4*C;for(let X=0;X<N.count;X++){const k=X*I;w===!0&&(l.fromBufferAttribute(N,X),B[Y+k+0]=l.x,B[Y+k+1]=l.y,B[Y+k+2]=l.z,B[Y+k+3]=0),U===!0&&(l.fromBufferAttribute(q,X),B[Y+k+4]=l.x,B[Y+k+5]=l.y,B[Y+k+6]=l.z,B[Y+k+7]=0),M===!0&&(l.fromBufferAttribute(V,X),B[Y+k+8]=l.x,B[Y+k+9]=l.y,B[Y+k+10]=l.z,B[Y+k+11]=V.itemSize===4?l.w:1)}}S={count:g,texture:b,size:new Be(L,O)},r.set(h,S),h.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let w=0;for(let M=0;M<m.length;M++)w+=m[M];const U=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",U),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function VR(o,e,i,r,l){let u=new WeakMap;function d(m){const v=l.render.frame,g=m.geometry,S=e.get(m,g);if(u.get(S)!==v&&(e.update(S),u.set(S,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const E=m.skeleton;u.get(E)!==v&&(E.update(),u.set(E,v))}return S}function h(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:h}}const XR={[Vx]:"LINEAR_TONE_MAPPING",[Xx]:"REINHARD_TONE_MAPPING",[kx]:"CINEON_TONE_MAPPING",[qx]:"ACES_FILMIC_TONE_MAPPING",[Yx]:"AGX_TONE_MAPPING",[Zx]:"NEUTRAL_TONE_MAPPING",[Wx]:"CUSTOM_TONE_MAPPING"};function kR(o,e,i,r,l,u){const d=new Xi(e,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new jn;m.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new pn([0,2,0,0,2,0],2));const v=new OT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new mn(m,v),S=new Im(-1,1,1,-1,0,1);let E=null,w=null,U=!1,M,x=null,F=[],K=!1;this.setSize=function(D,L){d.setSize(D,L),h!==null&&h.setSize(D,L),p!==null&&p.setSize(D,L);for(let O=0;O<F.length;O++){const B=F[O];B.setSize&&B.setSize(D,L)}},this.setEffects=function(D){F=D,K=F.length>0&&F[0].isRenderPass===!0;const L=d.width,O=d.height;F.length>0&&h===null&&(h=new Xi(L,O,{type:ha,depthBuffer:!1,stencilBuffer:!1}),p=new Xi(L,O,{type:ha,depthBuffer:!1,stencilBuffer:!1}));for(let B=0;B<F.length;B++){const b=F[B];b.setSize&&b.setSize(L,O)}},this.begin=function(D,L){if(U||D.toneMapping===fa&&F.length===0)return!1;if(x=L,L!==null){const O=L.width,B=L.height;(d.width!==O||d.height!==B)&&this.setSize(O,B)}return K===!1&&D.setRenderTarget(d),M=D.toneMapping,D.toneMapping=fa,!0},this.hasRenderPass=function(){return K},this.end=function(D,L){D.toneMapping=M,U=!0;let O=d,B=h;for(let b=0;b<F.length;b++){const I=F[b];I.enabled!==!1&&(I.render(D,B,O,L),I.needsSwap!==!1&&(O=B,B=B===h?p:h))}if(E!==D.outputColorSpace||w!==D.toneMapping){E=D.outputColorSpace,w=D.toneMapping,v.defines={},Pe.getTransfer(E)===Qe&&(v.defines.SRGB_TRANSFER="");const b=XR[w];b&&(v.defines[b]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=O.texture,D.setRenderTarget(x),D.render(g,S),x=null,U=!1},this.isCompositing=function(){return U},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const gM=new Xn,am=new Xl(1,1),_M=new aM,vM=new fT,SM=new cM,IS=[],zS=[],FS=new Float32Array(16),BS=new Float32Array(9),HS=new Float32Array(4);function Ro(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=IS[l];if(u===void 0&&(u=new Float32Array(l),IS[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function ef(o,e){let i=zS[e];i===void 0&&(i=new Int32Array(e),zS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function qR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function WR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function YR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function ZR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function KR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;HS.set(r),o.uniformMatrix2fv(this.addr,!1,HS),Tn(i,r)}}function QR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;BS.set(r),o.uniformMatrix3fv(this.addr,!1,BS),Tn(i,r)}}function JR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;FS.set(r),o.uniformMatrix4fv(this.addr,!1,FS),Tn(i,r)}}function jR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function $R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function tC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function eC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function nC(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function iC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function aC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function rC(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function sC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(am.compareFunction=i.isReversedDepthBuffer()?Nm:Dm,u=am):u=gM,i.setTexture2D(e||u,l)}function oC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||vM,l)}function lC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||SM,l)}function cC(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||_M,l)}function uC(o){switch(o){case 5126:return qR;case 35664:return WR;case 35665:return YR;case 35666:return ZR;case 35674:return KR;case 35675:return QR;case 35676:return JR;case 5124:case 35670:return jR;case 35667:case 35671:return $R;case 35668:case 35672:return tC;case 35669:case 35673:return eC;case 5125:return nC;case 36294:return iC;case 36295:return aC;case 36296:return rC;case 35678:case 36198:case 36298:case 36306:case 35682:return sC;case 35679:case 36299:case 36307:return oC;case 35680:case 36300:case 36308:case 36293:return lC;case 36289:case 36303:case 36311:case 36292:return cC}}function fC(o,e){o.uniform1fv(this.addr,e)}function dC(o,e){const i=Ro(e,this.size,2);o.uniform2fv(this.addr,i)}function hC(o,e){const i=Ro(e,this.size,3);o.uniform3fv(this.addr,i)}function pC(o,e){const i=Ro(e,this.size,4);o.uniform4fv(this.addr,i)}function mC(o,e){const i=Ro(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function gC(o,e){const i=Ro(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _C(o,e){const i=Ro(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function vC(o,e){o.uniform1iv(this.addr,e)}function SC(o,e){o.uniform2iv(this.addr,e)}function xC(o,e){o.uniform3iv(this.addr,e)}function MC(o,e){o.uniform4iv(this.addr,e)}function yC(o,e){o.uniform1uiv(this.addr,e)}function EC(o,e){o.uniform2uiv(this.addr,e)}function TC(o,e){o.uniform3uiv(this.addr,e)}function bC(o,e){o.uniform4uiv(this.addr,e)}function AC(o,e,i){const r=this.cache,l=e.length,u=ef(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=am:d=gM;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function RC(o,e,i){const r=this.cache,l=e.length,u=ef(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||vM,u[d])}function CC(o,e,i){const r=this.cache,l=e.length,u=ef(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||SM,u[d])}function wC(o,e,i){const r=this.cache,l=e.length,u=ef(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||_M,u[d])}function DC(o){switch(o){case 5126:return fC;case 35664:return dC;case 35665:return hC;case 35666:return pC;case 35674:return mC;case 35675:return gC;case 35676:return _C;case 5124:case 35670:return vC;case 35667:case 35671:return SC;case 35668:case 35672:return xC;case 35669:case 35673:return MC;case 5125:return yC;case 36294:return EC;case 36295:return TC;case 36296:return bC;case 35678:case 36198:case 36298:case 36306:case 35682:return AC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return CC;case 36289:case 36303:case 36311:case 36292:return wC}}class NC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=uC(i.type)}}class UC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DC(i.type)}}class LC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const fp=/(\w+)(\])?(\[|\.)?/g;function GS(o,e){o.seq.push(e),o.map[e.id]=e}function OC(o,e,i){const r=o.name,l=r.length;for(fp.lastIndex=0;;){const u=fp.exec(r),d=fp.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){GS(i,m===void 0?new NC(h,o,e):new UC(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new LC(h),GS(i,g)),i=g}}}class qu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);OC(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function VS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const PC=37297;let IC=0;function zC(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const XS=new Se;function FC(o){Pe._getMatrix(XS,Pe.workingColorSpace,o);const e=`mat3( ${XS.elements.map(i=>i.toFixed(4))} )`;switch(Pe.getTransfer(o)){case Ku:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function kS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+zC(o.getShaderSource(e),h)}else return u}function BC(o,e){const i=FC(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const HC={[Vx]:"Linear",[Xx]:"Reinhard",[kx]:"Cineon",[qx]:"ACESFilmic",[Yx]:"AgX",[Zx]:"Neutral",[Wx]:"Custom"};function GC(o,e){const i=HC[e];return i===void 0?(me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fu=new J;function VC(){Pe.getLuminanceCoefficients(Fu);const o=Fu.x.toFixed(4),e=Fu.y.toFixed(4),i=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function kC(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function qC(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function zl(o){return o!==""}function qS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function WS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WC=/^[ \t]*#include +<([\w\d./]+)>/gm;function rm(o){return o.replace(WC,ZC)}const YC=new Map;function ZC(o,e){let i=ye[e];if(i===void 0){const r=YC.get(e);if(r!==void 0)i=ye[r],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rm(i)}const KC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function YS(o){return o.replace(KC,QC)}function QC(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ZS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const JC={[Hu]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function jC(o){return JC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $C={[ls]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[$u]:"ENVMAP_TYPE_CUBE_UV"};function t3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":$C[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const e3={[So]:"ENVMAP_MODE_REFRACTION"};function n3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":e3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i3={[Gx]:"ENVMAP_BLENDING_MULTIPLY",[V1]:"ENVMAP_BLENDING_MIX",[X1]:"ENVMAP_BLENDING_ADD"};function a3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":i3[o.combine]||"ENVMAP_BLENDING_NONE"}function r3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function s3(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=jC(i),m=t3(i),v=n3(i),g=a3(i),S=r3(i),E=XC(i),w=kC(u),U=l.createProgram();let M,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(zl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(zl).join(`
`),x.length>0&&(x+=`
`)):(M=[ZS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),x=[ZS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?ye.tonemapping_pars_fragment:"",i.toneMapping!==fa?GC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,BC("linearToOutputTexel",i.outputColorSpace),VC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zl).join(`
`)),d=rm(d),d=qS(d,i),d=WS(d,i),h=rm(h),h=qS(h,i),h=WS(h,i),d=YS(d),h=YS(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===oS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===oS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const K=F+M+d,D=F+x+h,L=VS(l,l.VERTEX_SHADER,K),O=VS(l,l.FRAGMENT_SHADER,D);l.attachShader(U,L),l.attachShader(U,O),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function B(C){if(o.debug.checkShaderErrors){const N=l.getProgramInfoLog(U)||"",q=l.getShaderInfoLog(L)||"",V=l.getShaderInfoLog(O)||"",Y=N.trim(),X=q.trim(),k=V.trim();let $=!0,j=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,U,L,O);else{const pt=kS(l,L,"vertex"),Mt=kS(l,O,"fragment");Ve("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+pt+`
`+Mt)}else Y!==""?me("WebGLProgram: Program Info Log:",Y):(X===""||k==="")&&(j=!1);j&&(C.diagnostics={runnable:$,programLog:Y,vertexShader:{log:X,prefix:M},fragmentShader:{log:k,prefix:x}})}l.deleteShader(L),l.deleteShader(O),b=new qu(l,U),I=qC(l,U)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(U,PC)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=IC++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=L,this.fragmentShader=O,this}let o3=0;class l3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new c3(e),i.set(e,r)),r}}class c3{constructor(e){this.id=o3++,this.code=e,this.usedTimes=0}}function u3(o){return o===cs||o===Wu||o===Yu}function f3(o,e,i,r,l,u){const d=new rM,h=new l3,p=new Set,m=[],v=new Map,g=r.logarithmicDepthBuffer;let S=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function U(b,I,T,C,N,q){const V=C.fog,Y=N.geometry,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=e.get(b.envMap||X,k),j=$&&$.mapping===$u?$.image.height:null,pt=E[b.type];b.precision!==null&&(S=r.getMaxPrecision(b.precision),S!==b.precision&&me("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const Mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Lt=Mt!==void 0?Mt.length:0;let Nt=0;Y.morphAttributes.position!==void 0&&(Nt=1),Y.morphAttributes.normal!==void 0&&(Nt=2),Y.morphAttributes.color!==void 0&&(Nt=3);let G,_t,lt,P;if(pt){const Le=oa[pt];G=Le.vertexShader,_t=Le.fragmentShader}else{G=b.vertexShader,_t=b.fragmentShader;const Le=h.getVertexShaderStage(b),_e=h.getFragmentShaderStage(b);h.update(b,Le,_e),lt=Le.id,P=_e.id}const et=o.getRenderTarget(),dt=o.state.buffers.depth.getReversed(),yt=N.isInstancedMesh===!0,rt=N.isBatchedMesh===!0,Tt=!!b.map,jt=!!b.matcap,$t=!!$,Yt=!!b.aoMap,Ot=!!b.lightMap,wt=!!b.bumpMap&&b.wireframe===!1,ee=!!b.normalMap,de=!!b.displacementMap,we=!!b.emissiveMap,he=!!b.metalnessMap,le=!!b.roughnessMap,W=b.anisotropy>0,sn=b.clearcoat>0,He=b.dispersion>0,z=b.retroreflectivity>0,y=b.iridescence>0,st=b.sheen>0,ht=b.transmission>0,St=W&&!!b.anisotropyMap,Dt=sn&&!!b.clearcoatMap,It=sn&&!!b.clearcoatNormalMap,xt=sn&&!!b.clearcoatRoughnessMap,Rt=y&&!!b.iridescenceMap,Pt=y&&!!b.iridescenceThicknessMap,re=st&&!!b.sheenColorMap,Gt=st&&!!b.sheenRoughnessMap,Ht=!!b.specularMap,Zt=!!b.specularColorMap,ce=!!b.specularIntensityMap,ge=ht&&!!b.transmissionMap,tt=ht&&!!b.thicknessMap,Ut=!!b.gradientMap,At=!!b.alphaMap,zt=b.alphaTest>0,Wt=!!b.alphaHash,Ct=!!b.extensions;let ae=fa;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ae=o.toneMapping);const qt={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:G,fragmentShader:_t,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:P,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:rt,batchingColor:rt&&N._colorsTexture!==null,instancing:yt,instancingColor:yt&&N.instanceColor!==null,instancingMorph:yt&&N.morphTexture!==null,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Tt,matcap:jt,envMap:$t,envMapMode:$t&&$.mapping,envMapCubeUVHeight:j,aoMap:Yt,lightMap:Ot,bumpMap:wt,normalMap:ee,displacementMap:de,emissiveMap:we,normalMapObjectSpace:ee&&b.normalMapType===W1,normalMapTangentSpace:ee&&b.normalMapType===nm,packedNormalMap:ee&&b.normalMapType===nm&&u3(b.normalMap.format),metalnessMap:he,roughnessMap:le,anisotropy:W,anisotropyMap:St,clearcoat:sn,clearcoatMap:Dt,clearcoatNormalMap:It,clearcoatRoughnessMap:xt,dispersion:He,retroreflection:z,iridescence:y,iridescenceMap:Rt,iridescenceThicknessMap:Pt,sheen:st,sheenColorMap:re,sheenRoughnessMap:Gt,specularMap:Ht,specularColorMap:Zt,specularIntensityMap:ce,transmission:ht,transmissionMap:ge,thicknessMap:tt,gradientMap:Ut,opaque:b.transparent===!1&&b.blending===Fl&&b.alphaToCoverage===!1,alphaMap:At,alphaTest:zt,alphaHash:Wt,combine:b.combine,mapUv:Tt&&w(b.map.channel),aoMapUv:Yt&&w(b.aoMap.channel),lightMapUv:Ot&&w(b.lightMap.channel),bumpMapUv:wt&&w(b.bumpMap.channel),normalMapUv:ee&&w(b.normalMap.channel),displacementMapUv:de&&w(b.displacementMap.channel),emissiveMapUv:we&&w(b.emissiveMap.channel),metalnessMapUv:he&&w(b.metalnessMap.channel),roughnessMapUv:le&&w(b.roughnessMap.channel),anisotropyMapUv:St&&w(b.anisotropyMap.channel),clearcoatMapUv:Dt&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:It&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:re&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&w(b.sheenRoughnessMap.channel),specularMapUv:Ht&&w(b.specularMap.channel),specularColorMapUv:Zt&&w(b.specularColorMap.channel),specularIntensityMapUv:ce&&w(b.specularIntensityMap.channel),transmissionMapUv:ge&&w(b.transmissionMap.channel),thicknessMapUv:tt&&w(b.thicknessMap.channel),alphaMapUv:At&&w(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ee||W),vertexNormals:!!Y.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(Tt||At),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Y.attributes.normal===void 0&&ee===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:dt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Nt,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&T.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:Tt&&b.map.isVideoTexture===!0&&Pe.getTransfer(b.map.colorSpace)===Qe,decodeVideoTextureEmissive:we&&b.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(b.emissiveMap.colorSpace)===Qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Va,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ct&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&b.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function M(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const T in b.defines)I.push(T),I.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(x(I,b),F(I,b),I.push(o.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function x(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numSunLights),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numSunLightShadows),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function F(b,I){d.disableAll(),I.instancing&&d.enable(0),I.instancingColor&&d.enable(1),I.instancingMorph&&d.enable(2),I.matcap&&d.enable(3),I.envMap&&d.enable(4),I.normalMapObjectSpace&&d.enable(5),I.normalMapTangentSpace&&d.enable(6),I.clearcoat&&d.enable(7),I.iridescence&&d.enable(8),I.alphaTest&&d.enable(9),I.vertexColors&&d.enable(10),I.vertexAlphas&&d.enable(11),I.vertexUv1s&&d.enable(12),I.vertexUv2s&&d.enable(13),I.vertexUv3s&&d.enable(14),I.vertexTangents&&d.enable(15),I.anisotropy&&d.enable(16),I.alphaHash&&d.enable(17),I.batching&&d.enable(18),I.dispersion&&d.enable(19),I.retroreflection&&d.enable(24),I.batchingColor&&d.enable(20),I.gradientMap&&d.enable(21),I.packedNormalMap&&d.enable(22),I.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),I.fog&&d.enable(0),I.useFog&&d.enable(1),I.flatShading&&d.enable(2),I.logarithmicDepthBuffer&&d.enable(3),I.reversedDepthBuffer&&d.enable(4),I.skinning&&d.enable(5),I.morphTargets&&d.enable(6),I.morphNormals&&d.enable(7),I.morphColors&&d.enable(8),I.premultipliedAlpha&&d.enable(9),I.shadowMapEnabled&&d.enable(10),I.doubleSided&&d.enable(11),I.flipSided&&d.enable(12),I.useDepthPacking&&d.enable(13),I.dithering&&d.enable(14),I.transmission&&d.enable(15),I.sheen&&d.enable(16),I.opaque&&d.enable(17),I.pointsUvs&&d.enable(18),I.decodeVideoTexture&&d.enable(19),I.decodeVideoTextureEmissive&&d.enable(20),I.alphaToCoverage&&d.enable(21),I.numLightProbeGrids>0&&d.enable(22),I.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function K(b){const I=E[b.type];let T;if(I){const C=oa[I];T=NT.clone(C.uniforms)}else T=b.uniforms;return T}function D(b,I){let T=v.get(I);return T!==void 0?++T.usedTimes:(T=new s3(o,I,b,l),m.push(T),v.set(I,T)),T}function L(b){if(--b.usedTimes===0){const I=m.indexOf(b);m[I]=m[m.length-1],m.pop(),v.delete(b.cacheKey),b.destroy()}}function O(b){h.remove(b)}function B(){h.dispose()}return{getParameters:U,getProgramCacheKey:M,getUniforms:K,acquireProgram:D,releaseProgram:L,releaseShaderCache:O,programs:m,dispose:B}}function d3(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function h3(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function KS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function QS(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(S){let E=0;return S.isInstancedMesh&&(E+=2),S.isSkinnedMesh&&(E+=1),E}function h(S,E,w,U,M,x){let F=o[e];return F===void 0?(F={id:S.id,object:S,geometry:E,material:w,materialVariant:d(S),groupOrder:U,renderOrder:S.renderOrder,z:M,group:x},o[e]=F):(F.id=S.id,F.object=S,F.geometry=E,F.material=w,F.materialVariant=d(S),F.groupOrder=U,F.renderOrder=S.renderOrder,F.z=M,F.group=x),e++,F}function p(S,E,w,U,M,x,F){F.reversedDepth===!0&&(M=-M);const K=h(S,E,w,U,M,x);w.transmission>0?r.push(K):w.transparent===!0?l.push(K):i.push(K)}function m(S,E,w,U,M,x){const F=h(S,E,w,U,M,x);w.transmission>0?r.unshift(F):w.transparent===!0?l.unshift(F):i.unshift(F)}function v(S,E){i.length>1&&i.sort(S||h3),r.length>1&&r.sort(E||KS),l.length>1&&l.sort(E||KS)}function g(){for(let S=e,E=o.length;S<E;S++){const w=o[S];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:g,sort:v}}function p3(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new QS,o.set(r,[d])):l>=u.length?(d=new QS,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function m3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new J,color:new Fe};break;case"SpotLight":i={position:new J,direction:new J,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function g3(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let _3=0;function v3(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function S3(o){const e=new m3,i=g3(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const l=new J,u=new $e,d=new $e;function h(m){let v=0,g=0,S=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,w=0,U=0,M=0,x=0,F=0,K=0,D=0,L=0,O=0,B=0,b=0,I=0,T=0;m.sort(v3);for(let N=0,q=m.length;N<q;N++){const V=m[N],Y=V.color,X=V.intensity,k=V.distance;let $=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===cs?$=V.shadow.map.texture:$=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=Y.r*X,g+=Y.g*X,S+=Y.b*X;else if(V.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],X);T++}else if(V.isSunLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const pt=V.shadow,Mt=i.get(V);Mt.shadowIntensity=pt.intensity,Mt.shadowBias=pt.bias,Mt.shadowNormalBias=pt.normalBias,Mt.shadowRadius=pt.radius,Mt.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),r.sunShadow[w]=Mt,r.sunShadowMap[w]=$;const Lt=pt.getViewportCount();for(let Nt=0;Nt<Lt;Nt++)r.sunShadowMatrix[U+Nt]=pt.getMatrix(Nt),r.sunShadowCascade[U+Nt]=pt._cascadeData[Nt];U+=Lt,w++}r.sun[E]=j,E++}else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const pt=V.shadow,Mt=i.get(V);Mt.shadowIntensity=pt.intensity,Mt.shadowBias=pt.bias,Mt.shadowNormalBias=pt.normalBias,Mt.shadowRadius=pt.radius,Mt.shadowMapSize=pt.mapSize,r.directionalShadow[M]=Mt,r.directionalShadowMap[M]=$,r.directionalShadowMatrix[M]=V.shadow.matrix,L++}r.directional[M]=j,M++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(Y).multiplyScalar(X),j.distance=k,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[F]=j;const pt=V.shadow;if(V.map&&(r.spotLightMap[b]=V.map,b++,pt.updateMatrices(V),V.castShadow&&I++),r.spotLightMatrix[F]=pt.matrix,V.castShadow){const Mt=i.get(V);Mt.shadowIntensity=pt.intensity,Mt.shadowBias=pt.bias,Mt.shadowNormalBias=pt.normalBias,Mt.shadowRadius=pt.radius,Mt.shadowMapSize=pt.mapSize,r.spotShadow[F]=Mt,r.spotShadowMap[F]=$,B++}F++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(Y).multiplyScalar(X),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[K]=j,K++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),j.distance=V.distance,j.decay=V.decay,V.castShadow){const pt=V.shadow,Mt=i.get(V);Mt.shadowIntensity=pt.intensity,Mt.shadowBias=pt.bias,Mt.shadowNormalBias=pt.normalBias,Mt.shadowRadius=pt.radius,Mt.shadowMapSize=pt.mapSize,Mt.shadowCameraNear=pt.camera.near,Mt.shadowCameraFar=pt.camera.far,r.pointShadow[x]=Mt,r.pointShadowMap[x]=$,r.pointShadowMatrix[x]=V.shadow.matrix,O++}r.point[x]=j,x++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(X),j.groundColor.copy(V.groundColor).multiplyScalar(X),r.hemi[D]=j,D++}}K>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const C=r.hash;(C.sunLength!==E||C.directionalLength!==M||C.pointLength!==x||C.spotLength!==F||C.rectAreaLength!==K||C.hemiLength!==D||C.numSunShadows!==w||C.numDirectionalShadows!==L||C.numPointShadows!==O||C.numSpotShadows!==B||C.numSpotMaps!==b||C.numLightProbes!==T)&&(r.sun.length=E,r.directional.length=M,r.spot.length=F,r.rectArea.length=K,r.point.length=x,r.hemi.length=D,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=U,r.sunShadowCascade.length=U,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=O,r.pointShadowMap.length=O,r.pointShadowMatrix.length=O,r.spotShadow.length=B,r.spotShadowMap.length=B,r.spotLightMatrix.length=B+b-I,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=T,C.sunLength=E,C.directionalLength=M,C.pointLength=x,C.spotLength=F,C.rectAreaLength=K,C.hemiLength=D,C.numSunShadows=w,C.numDirectionalShadows=L,C.numPointShadows=O,C.numSpotShadows=B,C.numSpotMaps=b,C.numLightProbes=T,r.version=_3++)}function p(m,v){let g=0,S=0,E=0,w=0,U=0,M=0;const x=v.matrixWorldInverse;for(let F=0,K=m.length;F<K;F++){const D=m[F];if(D.isSunLight){const L=r.sun[g];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(x),g++}else if(D.isDirectionalLight){const L=r.directional[S];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),S++}else if(D.isSpotLight){const L=r.spot[w];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(x),w++}else if(D.isRectAreaLight){const L=r.rectArea[U];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(x),d.identity(),u.copy(D.matrixWorld),u.premultiply(x),d.extractRotation(u),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),U++}else if(D.isPointLight){const L=r.point[E];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(x),E++}else if(D.isHemisphereLight){const L=r.hemi[M];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:r}}function JS(o){const e=new S3(o),i=[],r=[],l=[];function u(S){g.camera=S,i.length=0,r.length=0,l.length=0}function d(S){i.push(S)}function h(S){r.push(S)}function p(S){l.push(S)}function m(){e.setup(i)}function v(S){e.setupView(i,S)}const g={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:m,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function x3(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new JS(o),e.set(l,[h])):u>=d.length?(h=new JS(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const M3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y3=`uniform sampler2D shadow_pass;
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
}`,E3=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],T3=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],jS=new $e,Ol=new J,dp=new J;function b3(o,e,i){let r=new Om;const l=new Be,u=new Be,d=new ln,h=new PT,p=new IT,m={},v=i.maxTextureSize,g={[Si]:ri,[ri]:Si,[Va]:Va},S=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:M3,fragmentShader:y3}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const w=new jn;w.setAttribute("position",new Wa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new mn(w,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let x=this.type;this.render=function(O,B,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===E1&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hu);const I=o.getRenderTarget(),T=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),N=o.state;N.setBlending(ka),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const q=x!==this.type;q&&B.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(Y=>Y.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,Y=O.length;V<Y;V++){const X=O[V],k=X.shadow;if(k===void 0){me("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const $=k.getFrameExtents();l.multiply($),u.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/$.x),l.x=u.x*$.x,k.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/$.y),l.y=u.y*$.y,k.mapSize.y=u.y));const j=o.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Il){if(X.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Xi(l.x,l.y,{format:cs,type:ha,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new Xl(l.x,l.y,ca),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=Ya,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn}else X.isPointLight?(k.map=new mM(l.x),k.map.depthTexture=new wT(l.x,da)):(k.map=new Xi(l.x,l.y),k.map.depthTexture=new Xl(l.x,l.y,da)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=Ya,this.type===Hu?(k.map.depthTexture.compareFunction=j?Nm:Dm,k.map.depthTexture.minFilter=Vn,k.map.depthTexture.magFilter=Vn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zn,k.map.depthTexture.magFilter=zn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==l.x||k.map.height!==l.y)&&k.map.setSize(l.x,l.y);const pt=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,b);for(let Mt=0;Mt<pt;Mt++){const Lt=k.getCamera(Mt);if(X.isPointLight){const Nt=k.camera,G=k.matrix,_t=X.distance||Nt.far;_t!==Nt.far&&(Nt.far=_t,Nt.updateProjectionMatrix()),Ol.setFromMatrixPosition(X.matrixWorld),Nt.position.copy(Ol),dp.copy(Nt.position),dp.add(E3[Mt]),Nt.up.copy(T3[Mt]),Nt.lookAt(dp),Nt.updateMatrixWorld(),G.makeTranslation(-Ol.x,-Ol.y,-Ol.z),jS.multiplyMatrices(Nt.projectionMatrix,Nt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(jS,Nt.coordinateSystem,Nt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)o.setRenderTarget(k.map,Mt),o.clear();else{Mt===0&&(o.setRenderTarget(k.map),o.clear());const Nt=k.getViewport(Mt);d.set(u.x*Nt.x,u.y*Nt.y,u.x*Nt.z,u.y*Nt.w),N.viewport(d)}r=k.getFrustum(Mt),D(B,b,Lt,X,this.type)}k.isPointLightShadow!==!0&&this.type===Il&&F(k,b),k.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(I,T,C)};function F(O,B){const b=e.update(U);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null?O.mapPass=new Xi(l.x,l.y,{format:cs,type:ha}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),S.uniforms.shadow_pass.value=O.map.depthTexture,S.uniforms.resolution.value.set(O.map.width,O.map.height),S.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(B,null,b,S,U,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value.set(O.map.width,O.map.height),E.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(B,null,b,E,U,null)}function K(O,B,b,I){let T=null;const C=b.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(C!==void 0)T=C;else if(T=b.isPointLight===!0?p:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const N=T.uuid,q=B.uuid;let V=m[N];V===void 0&&(V={},m[N]=V);let Y=V[q];Y===void 0&&(Y=T.clone(),V[q]=Y,B.addEventListener("dispose",L)),T=Y}if(T.visible=B.visible,T.wireframe=B.wireframe,I===Il?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:g[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=o.properties.get(T);N.light=b}return T}function D(O,B,b,I,T){if(O.visible===!1)return;if(O.layers.test(B.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===Il)&&(!O.frustumCulled||O.intersectsFrustum(r))){O.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,O.matrixWorld);const q=e.update(O),V=O.material;if(Array.isArray(V)){const Y=q.groups;for(let X=0,k=Y.length;X<k;X++){const $=Y[X],j=V[$.materialIndex];if(j&&j.visible){const pt=K(O,j,I,T);O.onBeforeShadow(o,O,B,b,q,pt,$),o.renderBufferDirect(b,null,q,pt,O,$),O.onAfterShadow(o,O,B,b,q,pt,$)}}}else if(V.visible){const Y=K(O,V,I,T);O.onBeforeShadow(o,O,B,b,q,Y,null),o.renderBufferDirect(b,null,q,Y,O,null),O.onAfterShadow(o,O,B,b,q,Y,null)}}const N=O.children;for(let q=0,V=N.length;q<V;q++)D(N[q],B,b,I,T)}function L(O){O.target.removeEventListener("dispose",L);for(const b in m){const I=m[b],T=O.target.uuid;T in I&&(I[T].dispose(),delete I[T])}}}function A3(o,e){function i(){let tt=!1;const Ut=new ln;let At=null;const zt=new ln(0,0,0,0);return{setMask:function(Wt){At!==Wt&&!tt&&(o.colorMask(Wt,Wt,Wt,Wt),At=Wt)},setLocked:function(Wt){tt=Wt},setClear:function(Wt,Ct,ae,qt,Le){Le===!0&&(Wt*=qt,Ct*=qt,ae*=qt),Ut.set(Wt,Ct,ae,qt),zt.equals(Ut)===!1&&(o.clearColor(Wt,Ct,ae,qt),zt.copy(Ut))},reset:function(){tt=!1,At=null,zt.set(-1,0,0,0)}}}function r(){let tt=!1,Ut=!1,At=null,zt=null,Wt=null;return{setReversed:function(Ct){if(Ut!==Ct){const ae=e.get("EXT_clip_control");Ct?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Ut=Ct;const qt=Wt;Wt=null,this.setClear(qt)}},getReversed:function(){return Ut},setTest:function(Ct){Ct?et(o.DEPTH_TEST):dt(o.DEPTH_TEST)},setMask:function(Ct){At!==Ct&&!tt&&(o.depthMask(Ct),At=Ct)},setFunc:function(Ct){if(Ut&&(Ct=aT[Ct]),zt!==Ct){switch(Ct){case _p:o.depthFunc(o.NEVER);break;case vp:o.depthFunc(o.ALWAYS);break;case Sp:o.depthFunc(o.LESS);break;case Bl:o.depthFunc(o.LEQUAL);break;case xp:o.depthFunc(o.EQUAL);break;case Mp:o.depthFunc(o.GEQUAL);break;case yp:o.depthFunc(o.GREATER);break;case Ep:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=Ct}},setLocked:function(Ct){tt=Ct},setClear:function(Ct){Wt!==Ct&&(Wt=Ct,Ut&&(Ct=1-Ct),o.clearDepth(Ct))},reset:function(){tt=!1,At=null,zt=null,Wt=null,Ut=!1}}}function l(){let tt=!1,Ut=null,At=null,zt=null,Wt=null,Ct=null,ae=null,qt=null,Le=null;return{setTest:function(_e){tt||(_e?et(o.STENCIL_TEST):dt(o.STENCIL_TEST))},setMask:function(_e){Ut!==_e&&!tt&&(o.stencilMask(_e),Ut=_e)},setFunc:function(_e,si,xi){(At!==_e||zt!==si||Wt!==xi)&&(o.stencilFunc(_e,si,xi),At=_e,zt=si,Wt=xi)},setOp:function(_e,si,xi){(Ct!==_e||ae!==si||qt!==xi)&&(o.stencilOp(_e,si,xi),Ct=_e,ae=si,qt=xi)},setLocked:function(_e){tt=_e},setClear:function(_e){Le!==_e&&(o.clearStencil(_e),Le=_e)},reset:function(){tt=!1,Ut=null,At=null,zt=null,Wt=null,Ct=null,ae=null,qt=null,Le=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let v={},g={},S={},E=new WeakMap,w=[],U=null,M=!1,x=null,F=null,K=null,D=null,L=null,O=null,B=null,b=new Fe(0,0,0),I=0,T=!1,C=null,N=null,q=null,V=null,Y=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=$>=2);let pt=null,Mt={};const Lt=o.getParameter(o.SCISSOR_BOX),Nt=o.getParameter(o.VIEWPORT),G=new ln().fromArray(Lt),_t=new ln().fromArray(Nt);function lt(tt,Ut,At,zt){const Wt=new Uint8Array(4),Ct=o.createTexture();o.bindTexture(tt,Ct),o.texParameteri(tt,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(tt,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ae=0;ae<At;ae++)tt===o.TEXTURE_3D||tt===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Wt):o.texImage2D(Ut+ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Wt);return Ct}const P={};P[o.TEXTURE_2D]=lt(o.TEXTURE_2D,o.TEXTURE_2D,1),P[o.TEXTURE_CUBE_MAP]=lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[o.TEXTURE_2D_ARRAY]=lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),P[o.TEXTURE_3D]=lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),et(o.DEPTH_TEST),d.setFunc(Bl),wt(!1),ee(iS),et(o.CULL_FACE),Yt(ka);function et(tt){v[tt]!==!0&&(o.enable(tt),v[tt]=!0)}function dt(tt){v[tt]!==!1&&(o.disable(tt),v[tt]=!1)}function yt(tt,Ut){return S[tt]!==Ut?(o.bindFramebuffer(tt,Ut),S[tt]=Ut,tt===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ut),tt===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function rt(tt,Ut){let At=w,zt=!1;if(tt){At=E.get(Ut),At===void 0&&(At=[],E.set(Ut,At));const Wt=tt.textures;if(At.length!==Wt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let Ct=0,ae=Wt.length;Ct<ae;Ct++)At[Ct]=o.COLOR_ATTACHMENT0+Ct;At.length=Wt.length,zt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,zt=!0);zt&&o.drawBuffers(At)}function Tt(tt){return U!==tt?(o.useProgram(tt),U=tt,!0):!1}const jt={[po]:o.FUNC_ADD,[b1]:o.FUNC_SUBTRACT,[A1]:o.FUNC_REVERSE_SUBTRACT};jt[R1]=o.MIN,jt[C1]=o.MAX;const $t={[w1]:o.ZERO,[D1]:o.ONE,[N1]:o.SRC_COLOR,[Bx]:o.SRC_ALPHA,[z1]:o.SRC_ALPHA_SATURATE,[P1]:o.DST_COLOR,[L1]:o.DST_ALPHA,[U1]:o.ONE_MINUS_SRC_COLOR,[Hx]:o.ONE_MINUS_SRC_ALPHA,[I1]:o.ONE_MINUS_DST_COLOR,[O1]:o.ONE_MINUS_DST_ALPHA,[F1]:o.CONSTANT_COLOR,[B1]:o.ONE_MINUS_CONSTANT_COLOR,[H1]:o.CONSTANT_ALPHA,[G1]:o.ONE_MINUS_CONSTANT_ALPHA};function Yt(tt,Ut,At,zt,Wt,Ct,ae,qt,Le,_e){if(tt===ka){M===!0&&(dt(o.BLEND),M=!1);return}if(M===!1&&(et(o.BLEND),M=!0),tt!==T1){if(tt!==x||_e!==T){if((F!==po||L!==po)&&(o.blendEquation(o.FUNC_ADD),F=po,L=po),_e)switch(tt){case Fl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case aS:o.blendFunc(o.ONE,o.ONE);break;case rS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ve("WebGLState: Invalid blending: ",tt);break}else switch(tt){case Fl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case aS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case rS:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sS:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",tt);break}K=null,D=null,O=null,B=null,b.set(0,0,0),I=0,x=tt,T=_e}return}Wt=Wt||Ut,Ct=Ct||At,ae=ae||zt,(Ut!==F||Wt!==L)&&(o.blendEquationSeparate(jt[Ut],jt[Wt]),F=Ut,L=Wt),(At!==K||zt!==D||Ct!==O||ae!==B)&&(o.blendFuncSeparate($t[At],$t[zt],$t[Ct],$t[ae]),K=At,D=zt,O=Ct,B=ae),(qt.equals(b)===!1||Le!==I)&&(o.blendColor(qt.r,qt.g,qt.b,Le),b.copy(qt),I=Le),x=tt,T=!1}function Ot(tt,Ut){tt.side===Va?dt(o.CULL_FACE):et(o.CULL_FACE);let At=tt.side===ri;Ut&&(At=!At),wt(At),tt.blending===Fl&&tt.transparent===!1?Yt(ka):Yt(tt.blending,tt.blendEquation,tt.blendSrc,tt.blendDst,tt.blendEquationAlpha,tt.blendSrcAlpha,tt.blendDstAlpha,tt.blendColor,tt.blendAlpha,tt.premultipliedAlpha),d.setFunc(tt.depthFunc),d.setTest(tt.depthTest),d.setMask(tt.depthWrite),u.setMask(tt.colorWrite);const zt=tt.stencilWrite;h.setTest(zt),zt&&(h.setMask(tt.stencilWriteMask),h.setFunc(tt.stencilFunc,tt.stencilRef,tt.stencilFuncMask),h.setOp(tt.stencilFail,tt.stencilZFail,tt.stencilZPass)),we(tt.polygonOffset,tt.polygonOffsetFactor,tt.polygonOffsetUnits),tt.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function wt(tt){C!==tt&&(tt?o.frontFace(o.CW):o.frontFace(o.CCW),C=tt)}function ee(tt){tt!==M1?(et(o.CULL_FACE),tt!==N&&(tt===iS?o.cullFace(o.BACK):tt===y1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):dt(o.CULL_FACE),N=tt}function de(tt){tt!==q&&(k&&o.lineWidth(tt),q=tt)}function we(tt,Ut,At){tt?(et(o.POLYGON_OFFSET_FILL),(V!==Ut||Y!==At)&&(V=Ut,Y=At,d.getReversed()&&(Ut=-Ut),o.polygonOffset(Ut,At))):dt(o.POLYGON_OFFSET_FILL)}function he(tt){tt?et(o.SCISSOR_TEST):dt(o.SCISSOR_TEST)}function le(tt){tt===void 0&&(tt=o.TEXTURE0+X-1),pt!==tt&&(o.activeTexture(tt),pt=tt)}function W(tt,Ut,At){At===void 0&&(pt===null?At=o.TEXTURE0+X-1:At=pt);let zt=Mt[At];zt===void 0&&(zt={type:void 0,texture:void 0},Mt[At]=zt),(zt.type!==tt||zt.texture!==Ut)&&(pt!==At&&(o.activeTexture(At),pt=At),o.bindTexture(tt,Ut||P[tt]),zt.type=tt,zt.texture=Ut)}function sn(){const tt=Mt[pt];tt!==void 0&&tt.type!==void 0&&(o.bindTexture(tt.type,null),tt.type=void 0,tt.texture=void 0)}function He(){try{o.compressedTexImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function y(){try{o.texSubImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function st(){try{o.texSubImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function St(){try{o.compressedTexSubImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function Dt(){try{o.texStorage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function It(){try{o.texStorage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function xt(){try{o.texImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function Rt(){try{o.texImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function Pt(tt){return g[tt]!==void 0?g[tt]:o.getParameter(tt)}function re(tt,Ut){g[tt]!==Ut&&(o.pixelStorei(tt,Ut),g[tt]=Ut)}function Gt(tt){G.equals(tt)===!1&&(o.scissor(tt.x,tt.y,tt.z,tt.w),G.copy(tt))}function Ht(tt){_t.equals(tt)===!1&&(o.viewport(tt.x,tt.y,tt.z,tt.w),_t.copy(tt))}function Zt(tt,Ut){let At=m.get(Ut);At===void 0&&(At=new WeakMap,m.set(Ut,At));let zt=At.get(tt);zt===void 0&&(zt=o.getUniformBlockIndex(Ut,tt.name),At.set(tt,zt))}function ce(tt,Ut){const zt=m.get(Ut).get(tt);p.get(Ut)!==zt&&(o.uniformBlockBinding(Ut,zt,tt.__bindingPointIndex),p.set(Ut,zt))}function ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},g={},pt=null,Mt={},S={},E=new WeakMap,w=[],U=null,M=!1,x=null,F=null,K=null,D=null,L=null,O=null,B=null,b=new Fe(0,0,0),I=0,T=!1,C=null,N=null,q=null,V=null,Y=null,G.set(0,0,o.canvas.width,o.canvas.height),_t.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:et,disable:dt,bindFramebuffer:yt,drawBuffers:rt,useProgram:Tt,setBlending:Yt,setMaterial:Ot,setFlipSided:wt,setCullFace:ee,setLineWidth:de,setPolygonOffset:we,setScissorTest:he,activeTexture:le,bindTexture:W,unbindTexture:sn,compressedTexImage2D:He,compressedTexImage3D:z,texImage2D:xt,texImage3D:Rt,pixelStorei:re,getParameter:Pt,updateUBOMapping:Zt,uniformBlockBinding:ce,texStorage2D:Dt,texStorage3D:It,texSubImage2D:y,texSubImage3D:st,compressedTexSubImage2D:ht,compressedTexSubImage3D:St,scissor:Gt,viewport:Ht,reset:ge}}function R3(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Be,v=new WeakMap,g=new Set;let S;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(z,y){return w?new OffscreenCanvas(z,y):Qu("canvas")}function M(z,y,st){let ht=1;const St=He(z);if((St.width>st||St.height>st)&&(ht=st/Math.max(St.width,St.height)),ht<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Dt=Math.floor(ht*St.width),It=Math.floor(ht*St.height);S===void 0&&(S=U(Dt,It));const xt=y?U(Dt,It):S;return xt.width=Dt,xt.height=It,xt.getContext("2d").drawImage(z,0,0,Dt,It),me("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+Dt+"x"+It+")."),xt}else return"data"in z&&me("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),z;return z}function x(z){return z.generateMipmaps}function F(z){o.generateMipmap(z)}function K(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(z,y,st,ht,St,Dt=!1){if(z!==null){if(o[z]!==void 0)return o[z];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let It;ht&&(It=e.get("EXT_texture_norm16"),It||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=y;if(y===o.RED&&(st===o.FLOAT&&(xt=o.R32F),st===o.HALF_FLOAT&&(xt=o.R16F),st===o.UNSIGNED_BYTE&&(xt=o.R8),st===o.UNSIGNED_SHORT&&It&&(xt=It.R16_EXT),st===o.SHORT&&It&&(xt=It.R16_SNORM_EXT)),y===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(xt=o.R8UI),st===o.UNSIGNED_SHORT&&(xt=o.R16UI),st===o.UNSIGNED_INT&&(xt=o.R32UI),st===o.BYTE&&(xt=o.R8I),st===o.SHORT&&(xt=o.R16I),st===o.INT&&(xt=o.R32I)),y===o.RG&&(st===o.FLOAT&&(xt=o.RG32F),st===o.HALF_FLOAT&&(xt=o.RG16F),st===o.UNSIGNED_BYTE&&(xt=o.RG8),st===o.UNSIGNED_SHORT&&It&&(xt=It.RG16_EXT),st===o.SHORT&&It&&(xt=It.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(xt=o.RG8UI),st===o.UNSIGNED_SHORT&&(xt=o.RG16UI),st===o.UNSIGNED_INT&&(xt=o.RG32UI),st===o.BYTE&&(xt=o.RG8I),st===o.SHORT&&(xt=o.RG16I),st===o.INT&&(xt=o.RG32I)),y===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(xt=o.RGB8UI),st===o.UNSIGNED_SHORT&&(xt=o.RGB16UI),st===o.UNSIGNED_INT&&(xt=o.RGB32UI),st===o.BYTE&&(xt=o.RGB8I),st===o.SHORT&&(xt=o.RGB16I),st===o.INT&&(xt=o.RGB32I)),y===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(xt=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(xt=o.RGBA16UI),st===o.UNSIGNED_INT&&(xt=o.RGBA32UI),st===o.BYTE&&(xt=o.RGBA8I),st===o.SHORT&&(xt=o.RGBA16I),st===o.INT&&(xt=o.RGBA32I)),y===o.RGB&&(st===o.UNSIGNED_SHORT&&It&&(xt=It.RGB16_EXT),st===o.SHORT&&It&&(xt=It.RGB16_SNORM_EXT),st===o.UNSIGNED_INT_5_9_9_9_REV&&(xt=o.RGB9_E5),st===o.UNSIGNED_INT_10F_11F_11F_REV&&(xt=o.R11F_G11F_B10F)),y===o.RGBA){const Rt=Dt?Ku:Pe.getTransfer(St);st===o.FLOAT&&(xt=o.RGBA32F),st===o.HALF_FLOAT&&(xt=o.RGBA16F),st===o.UNSIGNED_BYTE&&(xt=Rt===Qe?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT&&It&&(xt=It.RGBA16_EXT),st===o.SHORT&&It&&(xt=It.RGBA16_SNORM_EXT),st===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xt}function L(z,y){let st;return z?y===null||y===da||y===Gl?st=o.DEPTH24_STENCIL8:y===ca?st=o.DEPTH32F_STENCIL8:y===Hl&&(st=o.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===da||y===Gl?st=o.DEPTH_COMPONENT24:y===ca?st=o.DEPTH_COMPONENT32F:y===Hl&&(st=o.DEPTH_COMPONENT16),st}function O(z,y){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==zn&&z.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?y.mipmaps.length:1}function B(z){const y=z.target;y.removeEventListener("dispose",B),I(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&g.delete(y)}function b(z){const y=z.target;y.removeEventListener("dispose",b),C(y)}function I(z){const y=r.get(z);if(y.__webglInit===void 0)return;const st=z.source,ht=E.get(st);if(ht){const St=ht[y.__cacheKey];St.usedTimes--,St.usedTimes===0&&T(z),Object.keys(ht).length===0&&E.delete(st)}r.remove(z)}function T(z){const y=r.get(z);o.deleteTexture(y.__webglTexture);const st=z.source,ht=E.get(st);delete ht[y.__cacheKey],d.memory.textures--}function C(z){const y=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(y.__webglFramebuffer[ht]))for(let St=0;St<y.__webglFramebuffer[ht].length;St++)o.deleteFramebuffer(y.__webglFramebuffer[ht][St]);else o.deleteFramebuffer(y.__webglFramebuffer[ht]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ht])}else{if(Array.isArray(y.__webglFramebuffer))for(let ht=0;ht<y.__webglFramebuffer.length;ht++)o.deleteFramebuffer(y.__webglFramebuffer[ht]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ht=0;ht<y.__webglColorRenderbuffer.length;ht++)y.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ht]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const st=z.textures;for(let ht=0,St=st.length;ht<St;ht++){const Dt=r.get(st[ht]);Dt.__webglTexture&&(o.deleteTexture(Dt.__webglTexture),d.memory.textures--),r.remove(st[ht])}r.remove(z)}let N=0;function q(){N=0}function V(){return N}function Y(z){N=z}function X(){const z=N;return z>=l.maxTextures&&me("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+l.maxTextures),N+=1,z}function k(z){const y=[];return y.push(z.wrapS),y.push(z.wrapT),y.push(z.wrapR||0),y.push(z.magFilter),y.push(z.minFilter),y.push(z.anisotropy),y.push(z.internalFormat),y.push(z.format),y.push(z.type),y.push(z.generateMipmaps),y.push(z.premultiplyAlpha),y.push(z.flipY),y.push(z.unpackAlignment),y.push(z.colorSpace),y.join()}function $(z,y){const st=r.get(z);if(z.isVideoTexture&&W(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&st.__version!==z.version){const ht=z.image;if(ht===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(st,z,y);return}}else z.isExternalTexture&&(st.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+y)}function j(z,y){const st=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&st.__version!==z.version){dt(st,z,y);return}else z.isExternalTexture&&(st.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+y)}function pt(z,y){const st=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&st.__version!==z.version){dt(st,z,y);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+y)}function Mt(z,y){const st=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&st.__version!==z.version){yt(st,z,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+y)}const Lt={[Tp]:o.REPEAT,[Xa]:o.CLAMP_TO_EDGE,[bp]:o.MIRRORED_REPEAT},Nt={[zn]:o.NEAREST,[k1]:o.NEAREST_MIPMAP_NEAREST,[gu]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Ih]:o.LINEAR_MIPMAP_NEAREST,[ss]:o.LINEAR_MIPMAP_LINEAR},G={[Z1]:o.NEVER,[$1]:o.ALWAYS,[K1]:o.LESS,[Dm]:o.LEQUAL,[Q1]:o.EQUAL,[Nm]:o.GEQUAL,[J1]:o.GREATER,[j1]:o.NOTEQUAL};function _t(z,y){if(y.type===ca&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Ih||y.magFilter===gu||y.magFilter===ss||y.minFilter===Vn||y.minFilter===Ih||y.minFilter===gu||y.minFilter===ss)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,Lt[y.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,Lt[y.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,Lt[y.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,Nt[y.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,Nt[y.minFilter]),y.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,G[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn||y.minFilter!==gu&&y.minFilter!==ss||y.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function lt(z,y){let st=!1;z.__webglInit===void 0&&(z.__webglInit=!0,y.addEventListener("dispose",B));const ht=y.source;let St=E.get(ht);St===void 0&&(St={},E.set(ht,St));const Dt=k(y);if(Dt!==z.__cacheKey){St[Dt]===void 0&&(St[Dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,st=!0),St[Dt].usedTimes++;const It=St[z.__cacheKey];It!==void 0&&(St[z.__cacheKey].usedTimes--,It.usedTimes===0&&T(y)),z.__cacheKey=Dt,z.__webglTexture=St[Dt].texture}return st}function P(z,y,st){return Math.floor(Math.floor(z/st)/y)}function et(z,y,st,ht){const Dt=z.updateRanges;if(Dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,st,ht,y.data);else{Dt.sort((re,Gt)=>re.start-Gt.start);let It=0;for(let re=1;re<Dt.length;re++){const Gt=Dt[It],Ht=Dt[re],Zt=Gt.start+Gt.count,ce=P(Ht.start,y.width,4),ge=P(Gt.start,y.width,4);Ht.start<=Zt+1&&ce===ge&&P(Ht.start+Ht.count-1,y.width,4)===ce?Gt.count=Math.max(Gt.count,Ht.start+Ht.count-Gt.start):(++It,Dt[It]=Ht)}Dt.length=It+1;const xt=i.getParameter(o.UNPACK_ROW_LENGTH),Rt=i.getParameter(o.UNPACK_SKIP_PIXELS),Pt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let re=0,Gt=Dt.length;re<Gt;re++){const Ht=Dt[re],Zt=Math.floor(Ht.start/4),ce=Math.ceil(Ht.count/4),ge=Zt%y.width,tt=Math.floor(Zt/y.width),Ut=ce,At=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(o.UNPACK_SKIP_ROWS,tt),i.texSubImage2D(o.TEXTURE_2D,0,ge,tt,Ut,At,st,ht,y.data)}z.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,xt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Pt)}}function dt(z,y,st){let ht=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ht=o.TEXTURE_3D);const St=lt(z,y),Dt=y.source;i.bindTexture(ht,z.__webglTexture,o.TEXTURE0+st);const It=r.get(Dt);if(Dt.version!==It.__version||St===!0){if(i.activeTexture(o.TEXTURE0+st),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const At=Pe.getPrimaries(Pe.workingColorSpace),zt=y.colorSpace===wr?null:Pe.getPrimaries(y.colorSpace),Wt=y.colorSpace===wr||At===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let Rt=M(y.image,!1,l.maxTextureSize);Rt=sn(y,Rt);const Pt=u.convert(y.format,y.colorSpace),re=u.convert(y.type);let Gt=D(y.internalFormat,Pt,re,y.normalized,y.colorSpace,y.isVideoTexture);_t(ht,y);let Ht;const Zt=y.mipmaps,ce=y.isVideoTexture!==!0,ge=It.__version===void 0||St===!0,tt=Dt.dataReady,Ut=O(y,Rt);if(y.isDepthTexture)Gt=L(y.format===os,y.type),ge&&(ce?i.texStorage2D(o.TEXTURE_2D,1,Gt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Rt.width,Rt.height,0,Pt,re,null));else if(y.isDataTexture)if(Zt.length>0){ce&&ge&&i.texStorage2D(o.TEXTURE_2D,Ut,Gt,Zt[0].width,Zt[0].height);for(let At=0,zt=Zt.length;At<zt;At++)Ht=Zt[At],ce?tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ht.width,Ht.height,Pt,re,Ht.data):i.texImage2D(o.TEXTURE_2D,At,Gt,Ht.width,Ht.height,0,Pt,re,Ht.data);y.generateMipmaps=!1}else ce?(ge&&i.texStorage2D(o.TEXTURE_2D,Ut,Gt,Rt.width,Rt.height),tt&&et(y,Rt,Pt,re)):i.texImage2D(o.TEXTURE_2D,0,Gt,Rt.width,Rt.height,0,Pt,re,Rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ce&&ge&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Gt,Zt[0].width,Zt[0].height,Rt.depth);for(let At=0,zt=Zt.length;At<zt;At++)if(Ht=Zt[At],y.format!==Vi)if(Pt!==null)if(ce){if(tt)if(y.layerUpdates.size>0){const Wt=DS(Ht.width,Ht.height,y.format,y.type);for(const Ct of y.layerUpdates){const ae=Ht.data.subarray(Ct*Wt/Ht.data.BYTES_PER_ELEMENT,(Ct+1)*Wt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,Ct,Ht.width,Ht.height,1,Pt,ae)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ht.width,Ht.height,Rt.depth,Pt,Ht.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,Gt,Ht.width,Ht.height,Rt.depth,0,Ht.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Ht.width,Ht.height,Rt.depth,Pt,re,Ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,Gt,Ht.width,Ht.height,Rt.depth,0,Pt,re,Ht.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ce&&ge&&i.texStorage2D(o.TEXTURE_2D,Ut,Gt,Zt[0].width,Zt[0].height);for(let At=0,zt=Zt.length;At<zt;At++)Ht=Zt[At],y.format!==Vi?Pt!==null?ce?tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Ht.width,Ht.height,Pt,Ht.data):i.compressedTexImage2D(o.TEXTURE_2D,At,Gt,Ht.width,Ht.height,0,Ht.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Ht.width,Ht.height,Pt,re,Ht.data):i.texImage2D(o.TEXTURE_2D,At,Gt,Ht.width,Ht.height,0,Pt,re,Ht.data)}else if(y.isDataArrayTexture)if(ce){if(ge&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Gt,Rt.width,Rt.height,Rt.depth),tt)if(y.layerUpdates.size>0){const At=DS(Rt.width,Rt.height,y.format,y.type);for(const zt of y.layerUpdates){const Wt=Rt.data.subarray(zt*At/Rt.data.BYTES_PER_ELEMENT,(zt+1)*At/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,zt,Rt.width,Rt.height,1,Pt,re,Wt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,re,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Rt.width,Rt.height,Rt.depth,0,Pt,re,Rt.data);else if(y.isData3DTexture)ce?(ge&&i.texStorage3D(o.TEXTURE_3D,Ut,Gt,Rt.width,Rt.height,Rt.depth),tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Pt,re,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Rt.width,Rt.height,Rt.depth,0,Pt,re,Rt.data);else if(y.isFramebufferTexture){if(ge)if(ce)i.texStorage2D(o.TEXTURE_2D,Ut,Gt,Rt.width,Rt.height);else{let At=Rt.width,zt=Rt.height;for(let Wt=0;Wt<Ut;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Gt,At,zt,0,Pt,re,null),At>>=1,zt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const At=o.canvas;if(At.hasAttribute("layoutsubtree")||At.setAttribute("layoutsubtree","true"),Rt.parentNode!==At){At.appendChild(Rt),g.add(y),At.onpaint=zt=>{const Wt=zt.changedElements;for(const Ct of g)Wt.includes(Ct.image)&&(Ct.needsUpdate=!0)},At.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Rt);else{const Wt=o.RGBA,Ct=o.RGBA,ae=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Wt,Ct,ae,Rt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(ce&&ge){const At=He(Zt[0]);i.texStorage2D(o.TEXTURE_2D,Ut,Gt,At.width,At.height)}for(let At=0,zt=Zt.length;At<zt;At++)Ht=Zt[At],ce?tt&&i.texSubImage2D(o.TEXTURE_2D,At,0,0,Pt,re,Ht):i.texImage2D(o.TEXTURE_2D,At,Gt,Pt,re,Ht);y.generateMipmaps=!1}else if(ce){if(ge){const At=He(Rt);i.texStorage2D(o.TEXTURE_2D,Ut,Gt,At.width,At.height)}tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,re,Rt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Pt,re,Rt);x(y)&&F(ht),It.__version=Dt.version,y.onUpdate&&y.onUpdate(y)}z.__version=y.version}function yt(z,y,st){if(y.image.length!==6)return;const ht=lt(z,y),St=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+st);const Dt=r.get(St);if(St.version!==Dt.__version||ht===!0){i.activeTexture(o.TEXTURE0+st);const It=Pe.getPrimaries(Pe.workingColorSpace),xt=y.colorSpace===wr?null:Pe.getPrimaries(y.colorSpace),Rt=y.colorSpace===wr||It===xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,Gt=[];for(let Ct=0;Ct<6;Ct++)!Pt&&!re?Gt[Ct]=M(y.image[Ct],!0,l.maxCubemapSize):Gt[Ct]=re?y.image[Ct].image:y.image[Ct],Gt[Ct]=sn(y,Gt[Ct]);const Ht=Gt[0],Zt=u.convert(y.format,y.colorSpace),ce=u.convert(y.type),ge=D(y.internalFormat,Zt,ce,y.normalized,y.colorSpace),tt=y.isVideoTexture!==!0,Ut=Dt.__version===void 0||ht===!0,At=St.dataReady;let zt=O(y,Ht);_t(o.TEXTURE_CUBE_MAP,y);let Wt;if(Pt){tt&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ge,Ht.width,Ht.height);for(let Ct=0;Ct<6;Ct++){Wt=Gt[Ct].mipmaps;for(let ae=0;ae<Wt.length;ae++){const qt=Wt[ae];y.format!==Vi?Zt!==null?tt?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,0,0,qt.width,qt.height,Zt,qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,ge,qt.width,qt.height,0,qt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,0,0,qt.width,qt.height,Zt,ce,qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,ge,qt.width,qt.height,0,Zt,ce,qt.data)}}}else{if(Wt=y.mipmaps,tt&&Ut){Wt.length>0&&zt++;const Ct=He(Gt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ge,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(re){tt?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Gt[Ct].width,Gt[Ct].height,Zt,ce,Gt[Ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,ge,Gt[Ct].width,Gt[Ct].height,0,Zt,ce,Gt[Ct].data);for(let ae=0;ae<Wt.length;ae++){const Le=Wt[ae].image[Ct].image;tt?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,0,0,Le.width,Le.height,Zt,ce,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,ge,Le.width,Le.height,0,Zt,ce,Le.data)}}else{tt?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Zt,ce,Gt[Ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,ge,Zt,ce,Gt[Ct]);for(let ae=0;ae<Wt.length;ae++){const qt=Wt[ae];tt?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,0,0,Zt,ce,qt.image[Ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,ge,Zt,ce,qt.image[Ct])}}}x(y)&&F(o.TEXTURE_CUBE_MAP),Dt.__version=St.version,y.onUpdate&&y.onUpdate(y)}z.__version=y.version}function rt(z,y,st,ht,St,Dt){const It=u.convert(st.format,st.colorSpace),xt=u.convert(st.type),Rt=D(st.internalFormat,It,xt,st.normalized,st.colorSpace),Pt=r.get(y),re=r.get(st);if(re.__renderTarget=y,!Pt.__hasExternalTextures){const Gt=Math.max(1,y.width>>Dt),Ht=Math.max(1,y.height>>Dt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,Dt,Rt,Gt,Ht,y.depth,0,It,xt,null):i.texImage2D(St,Dt,Rt,Gt,Ht,0,It,xt,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),le(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,St,re.__webglTexture,0,he(y)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,St,re.__webglTexture,Dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(z,y,st){if(o.bindRenderbuffer(o.RENDERBUFFER,z),y.depthBuffer){const ht=y.depthTexture,St=ht&&ht.isDepthTexture?ht.type:null,Dt=L(y.stencilBuffer,St),It=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;le(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,he(y),Dt,y.width,y.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,he(y),Dt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,z)}else{const ht=y.textures;for(let St=0;St<ht.length;St++){const Dt=ht[St],It=u.convert(Dt.format,Dt.colorSpace),xt=u.convert(Dt.type),Rt=D(Dt.internalFormat,It,xt,Dt.normalized,Dt.colorSpace);le(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,he(y),Rt,y.width,y.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,he(y),Rt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Rt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function jt(z,y,st){const ht=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const St=r.get(y.depthTexture);if(St.__renderTarget=y,(!St.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ht){if(St.__webglInit===void 0&&(St.__webglInit=!0,y.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),_t(o.TEXTURE_CUBE_MAP,y.depthTexture);const Pt=u.convert(y.depthTexture.format),re=u.convert(y.depthTexture.type);let Gt;y.depthTexture.format===Ya?Gt=o.DEPTH_COMPONENT24:y.depthTexture.format===os&&(Gt=o.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Gt,y.width,y.height,0,Pt,re,null)}}else $(y.depthTexture,0);const Dt=St.__webglTexture,It=he(y),xt=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+st:o.TEXTURE_2D,Rt=y.depthTexture.format===os?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ya)le(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Rt,xt,Dt,0,It):o.framebufferTexture2D(o.FRAMEBUFFER,Rt,xt,Dt,0);else if(y.depthTexture.format===os)le(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Rt,xt,Dt,0,It):o.framebufferTexture2D(o.FRAMEBUFFER,Rt,xt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(z){const y=r.get(z),st=z.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==z.depthTexture){const ht=z.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ht){const St=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ht.removeEventListener("dispose",St)};ht.addEventListener("dispose",St),y.__depthDisposeCallback=St}y.__boundDepthTexture=ht}if(z.depthTexture&&!y.__autoAllocateDepthBuffer)if(st)for(let ht=0;ht<6;ht++)jt(y.__webglFramebuffer[ht],z,ht);else{const ht=z.texture.mipmaps;ht&&ht.length>0?jt(y.__webglFramebuffer[0],z,0):jt(y.__webglFramebuffer,z,0)}else if(st){y.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ht]),y.__webglDepthbuffer[ht]===void 0)y.__webglDepthbuffer[ht]=o.createRenderbuffer(),Tt(y.__webglDepthbuffer[ht],z,!1);else{const St=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=y.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,Dt)}}else{const ht=z.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Tt(y.__webglDepthbuffer,z,!1);else{const St=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,Dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(z,y,st){const ht=r.get(z);y!==void 0&&rt(ht.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&$t(z)}function Ot(z){const y=z.texture,st=r.get(z),ht=r.get(y);z.addEventListener("dispose",b);const St=z.textures,Dt=z.isWebGLCubeRenderTarget===!0,It=St.length>1;if(It||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=y.version,d.memory.textures++),Dt){st.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){st.__webglFramebuffer[xt]=[];for(let Rt=0;Rt<y.mipmaps.length;Rt++)st.__webglFramebuffer[xt][Rt]=o.createFramebuffer()}else st.__webglFramebuffer[xt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){st.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)st.__webglFramebuffer[xt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(It)for(let xt=0,Rt=St.length;xt<Rt;xt++){const Pt=r.get(St[xt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&le(z)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let xt=0;xt<St.length;xt++){const Rt=St[xt];st.__webglColorRenderbuffer[xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[xt]);const Pt=u.convert(Rt.format,Rt.colorSpace),re=u.convert(Rt.type),Gt=D(Rt.internalFormat,Pt,re,Rt.normalized,Rt.colorSpace,z.isXRRenderTarget===!0),Ht=he(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,Gt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,st.__webglColorRenderbuffer[xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(st.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),_t(o.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)rt(st.__webglFramebuffer[xt][Rt],z,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt);else rt(st.__webglFramebuffer[xt],z,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(y)&&F(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let xt=0,Rt=St.length;xt<Rt;xt++){const Pt=St[xt],re=r.get(Pt);let Gt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Gt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Gt,re.__webglTexture),_t(Gt,Pt),rt(st.__webglFramebuffer,z,Pt,o.COLOR_ATTACHMENT0+xt,Gt,0),x(Pt)&&F(Gt)}i.unbindTexture()}else{let xt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(xt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xt,ht.__webglTexture),_t(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)rt(st.__webglFramebuffer[Rt],z,y,o.COLOR_ATTACHMENT0,xt,Rt);else rt(st.__webglFramebuffer,z,y,o.COLOR_ATTACHMENT0,xt,0);x(y)&&F(xt),i.unbindTexture()}z.depthBuffer&&$t(z)}function wt(z){const y=z.textures;for(let st=0,ht=y.length;st<ht;st++){const St=y[st];if(x(St)){const Dt=K(z),It=r.get(St).__webglTexture;i.bindTexture(Dt,It),F(Dt),i.unbindTexture()}}}const ee=[],de=[];function we(z){if(z.samples>0){if(le(z)===!1){const y=z.textures,st=z.width,ht=z.height;let St=o.COLOR_BUFFER_BIT;const Dt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=r.get(z),xt=y.length>1;if(xt)for(let Pt=0;Pt<y.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Rt=z.texture.mipmaps;Rt&&Rt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),xt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const re=r.get(y[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,re,0)}o.blitFramebuffer(0,0,st,ht,0,0,st,ht,St,o.NEAREST),p===!0&&(ee.length=0,de.length=0,ee.push(o.COLOR_ATTACHMENT0+Pt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(ee.push(Dt),de.push(Dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,de)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ee))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xt)for(let Pt=0;Pt<y.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const re=r.get(y[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,re,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&p){const y=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function he(z){return Math.min(l.maxSamples,z.samples)}function le(z){const y=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function W(z){const y=d.render.frame;v.get(z)!==y&&(v.set(z,y),z.update())}function sn(z,y){const st=z.colorSpace,ht=z.format,St=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||st!==Zu&&st!==wr&&(Pe.getTransfer(st)===Qe?(ht!==Vi||St!==vi)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",st)),y}function He(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.getTextureUnits=V,this.setTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=pt,this.setTextureCube=Mt,this.rebindTextures=Yt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function C3(o,e){function i(r,l=wr){let u;const d=Pe.getTransfer(l);if(r===vi)return o.UNSIGNED_BYTE;if(r===bm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Am)return o.UNSIGNED_SHORT_5_5_5_1;if(r===jx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===$x)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Qx)return o.BYTE;if(r===Jx)return o.SHORT;if(r===Hl)return o.UNSIGNED_SHORT;if(r===Tm)return o.INT;if(r===da)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===ha)return o.HALF_FLOAT;if(r===tM)return o.ALPHA;if(r===eM)return o.RGB;if(r===Vi)return o.RGBA;if(r===Ya)return o.DEPTH_COMPONENT;if(r===os)return o.DEPTH_STENCIL;if(r===nM)return o.RED;if(r===Rm)return o.RED_INTEGER;if(r===cs)return o.RG;if(r===Cm)return o.RG_INTEGER;if(r===wm)return o.RGBA_INTEGER;if(r===Gu||r===Vu||r===Xu||r===ku)if(d===Qe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Gu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Gu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ku)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ap||r===Rp||r===Cp||r===wp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ap)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Cp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dp||r===Np||r===Up||r===Lp||r===Op||r===Wu||r===Pp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Dp||r===Np)return d===Qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Up)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lp)return u.COMPRESSED_R11_EAC;if(r===Op)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Wu)return u.COMPRESSED_RG11_EAC;if(r===Pp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ip||r===zp||r===Fp||r===Bp||r===Hp||r===Gp||r===Vp||r===Xp||r===kp||r===qp||r===Wp||r===Yp||r===Zp||r===Kp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ip)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qp||r===Jp||r===jp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Qp)return d===Qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===jp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$p||r===tm||r===Yu||r===em)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===$p)return u.COMPRESSED_RED_RGTC1_EXT;if(r===tm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===em)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Gl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const w3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D3=`
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

}`;class N3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new uM(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new pa({vertexShader:w3,fragmentShader:D3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new ma(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U3 extends us{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,v=null,g=null,S=null,E=null,w=null;const U=typeof XRWebGLBinding<"u",M=new N3,x={},F=i.getContextAttributes();let K=null,D=null;const L=[],O=[],B=new Be;let b=null,I=null;const T=new In;T.viewport=new ln;const C=new In;C.viewport=new ln;const N=[T,C],q=new HT;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let et=L[P];return et===void 0&&(et=new qh,L[P]=et),et.getTargetRaySpace()},this.getControllerGrip=function(P){let et=L[P];return et===void 0&&(et=new qh,L[P]=et),et.getGripSpace()},this.getHand=function(P){let et=L[P];return et===void 0&&(et=new qh,L[P]=et),et.getHandSpace()};function X(P){const et=O.indexOf(P.inputSource);if(et===-1)return;const dt=L[et];dt!==void 0&&(dt.update(P.inputSource,P.frame,m||d),dt.dispatchEvent({type:P.type,data:P.inputSource}))}function k(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",$);for(let P=0;P<L.length;P++){const et=O[P];et!==null&&(O[P]=null,L[P].disconnect(et))}V=null,Y=null,M.reset();for(const P in x)delete x[P];if(e.setRenderTarget(K),E=null,S=null,g=null,l=null,D=null,lt.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),I!==null){const P=I.camera;P.fov=I.fov,P.zoom=I.zoom,P.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){u=P,r.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){h=P,r.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(P){m=P},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return g===null&&U&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(P){if(l=P,l!==null){if(K=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",k),l.addEventListener("inputsourceschange",$),F.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,yt=null,rt=null;F.depth&&(rt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=F.stencil?os:Ya,yt=F.stencil?Gl:da);const Tt={colorFormat:i.RGBA8,depthFormat:rt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(Tt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new Xi(S.textureWidth,S.textureHeight,{format:Vi,type:vi,depthTexture:new Xl(S.textureWidth,S.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}else{const dt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new Xi(E.framebufferWidth,E.framebufferHeight,{format:Vi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),lt.setContext(l),lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(P){for(let et=0;et<P.removed.length;et++){const dt=P.removed[et],yt=O.indexOf(dt);yt>=0&&(O[yt]=null,L[yt].disconnect(dt))}for(let et=0;et<P.added.length;et++){const dt=P.added[et];let yt=O.indexOf(dt);if(yt===-1){for(let Tt=0;Tt<L.length;Tt++)if(Tt>=O.length){O.push(dt),yt=Tt;break}else if(O[Tt]===null){O[Tt]=dt,yt=Tt;break}if(yt===-1)break}const rt=L[yt];rt&&rt.connect(dt)}}const j=new J,pt=new J;function Mt(P,et,dt){j.setFromMatrixPosition(et.matrixWorld),pt.setFromMatrixPosition(dt.matrixWorld);const yt=j.distanceTo(pt),rt=et.projectionMatrix.elements,Tt=dt.projectionMatrix.elements,jt=rt[14]/(rt[10]-1),$t=rt[14]/(rt[10]+1),Yt=(rt[9]+1)/rt[5],Ot=(rt[9]-1)/rt[5],wt=(rt[8]-1)/rt[0],ee=(Tt[8]+1)/Tt[0],de=jt*wt,we=jt*ee,he=yt/(-wt+ee),le=he*-wt;if(et.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(le),P.translateZ(he),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),rt[10]===-1)P.projectionMatrix.copy(et.projectionMatrix),P.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const W=jt+he,sn=$t+he,He=de-le,z=we+(yt-le),y=Yt*$t/sn*W,st=Ot*$t/sn*W;P.projectionMatrix.makePerspective(He,z,y,st,W,sn),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function Lt(P,et){et===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(et.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(l===null)return;let et=P.near,dt=P.far;M.texture!==null&&(M.depthNear>0&&(et=M.depthNear),M.depthFar>0&&(dt=M.depthFar)),q.near=C.near=T.near=et,q.far=C.far=T.far=dt,(V!==q.near||Y!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),V=q.near,Y=q.far),q.layers.mask=P.layers.mask|6,T.layers.mask=q.layers.mask&-5,C.layers.mask=q.layers.mask&-3;const yt=P.parent,rt=q.cameras;Lt(q,yt);for(let Tt=0;Tt<rt.length;Tt++)Lt(rt[Tt],yt);rt.length===2?Mt(q,T,C):q.projectionMatrix.copy(T.projectionMatrix),I===null&&P.isPerspectiveCamera&&(I={camera:P,fov:P.fov,zoom:P.zoom}),Nt(P,q,yt)};function Nt(P,et,dt){dt===null?P.matrix.copy(et.matrixWorld):(P.matrix.copy(dt.matrixWorld),P.matrix.invert(),P.matrix.multiply(et.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(et.projectionMatrix),P.projectionMatrixInverse.copy(et.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=im*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(S===null&&E===null))return p},this.setFoveation=function(P){p=P,S!==null&&(S.fixedFoveation=P),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=P)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(q)},this.getCameraTexture=function(P){return x[P]};let G=null;function _t(P,et){if(v=et.getViewerPose(m||d),w=et,v!==null){const dt=v.views;E!==null&&(e.setRenderTargetFramebuffer(D,E.framebuffer),e.setRenderTarget(D));let yt=!1;dt.length!==q.cameras.length&&(q.cameras.length=0,yt=!0);for(let $t=0;$t<dt.length;$t++){const Yt=dt[$t];let Ot=null;if(E!==null)Ot=E.getViewport(Yt);else{const ee=g.getViewSubImage(S,Yt);Ot=ee.viewport,$t===0&&(e.setRenderTargetTextures(D,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(D))}let wt=N[$t];wt===void 0&&(wt=new In,wt.layers.enable($t),wt.viewport=new ln,N[$t]=wt),wt.matrix.fromArray(Yt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Yt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),$t===0&&(q.matrix.copy(wt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),yt===!0&&q.cameras.push(wt)}const rt=l.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){g=r.getBinding();const $t=g.getDepthInformation(dt[0]);$t&&$t.isValid&&$t.texture&&M.init($t,l.renderState)}if(rt&&rt.includes("camera-access")&&U){e.state.unbindTexture(),g=r.getBinding();for(let $t=0;$t<dt.length;$t++){const Yt=dt[$t].camera;if(Yt){let Ot=x[Yt];Ot||(Ot=new uM,x[Yt]=Ot);const wt=g.getCameraImage(Yt);Ot.sourceTexture=wt}}}}for(let dt=0;dt<L.length;dt++){const yt=O[dt],rt=L[dt];yt!==null&&rt!==void 0&&rt.update(yt,et,m||d)}G&&G(P,et),et.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:et}),w=null}const lt=new hM;lt.setAnimationLoop(_t),this.setAnimationLoop=function(P){G=P},this.dispose=function(){}}}const L3=new $e,xM=new Se;xM.set(-1,0,0,0,1,0,0,0,1);function O3(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,fM(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,K,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?u(M,x):x.isMeshLambertMaterial?(u(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(M,x),g(M,x)):x.isMeshPhongMaterial?(u(M,x),v(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(M,x),S(M,x),x.isMeshPhysicalMaterial&&E(M,x,D)):x.isMeshMatcapMaterial?(u(M,x),w(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),U(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,F,K):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ri&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ri&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=e.get(x),K=F.envMap,D=F.envMapRotation;K&&(M.envMap.value=K,M.envMapRotation.value.setFromMatrix4(L3.makeRotationFromEuler(D)).transpose(),K.isCubeTexture&&K.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(xM),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,F,K){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=K*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function S(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ri&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,x){x.matcap&&(M.matcap.value=x.matcap)}function U(M,x){const F=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function P3(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,L){const O=L.program;r.uniformBlockBinding(D,O)}function m(D,L){let O=l[D.id];O===void 0&&(M(D),O=v(D),l[D.id]=O,D.addEventListener("dispose",F));const B=L.program;r.updateUBOMapping(D,B);const b=e.render.frame;u[D.id]!==b&&(S(D),u[D.id]=b)}function v(D){const L=g();D.__bindingPointIndex=L;const O=o.createBuffer(),B=D.__size,b=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,B,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,O),O}function g(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const L=l[D.id],O=D.uniforms,B=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let b=0,I=O.length;b<I;b++){const T=O[b];if(Array.isArray(T))for(let C=0,N=T.length;C<N;C++)E(T[C],b,C,B);else E(T,b,0,B)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,L,O,B){if(U(D,L,O,B)===!0){const b=D.__offset,I=D.value;if(Array.isArray(I)){let T=0;for(let C=0;C<I.length;C++){const N=I[C],q=x(N);w(N,D.__data,T),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(T+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(I,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,D.__data)}}function w(D,L,O){typeof D=="number"||typeof D=="boolean"?L[0]=D:D.isMatrix3?(L[0]=D.elements[0],L[1]=D.elements[1],L[2]=D.elements[2],L[3]=0,L[4]=D.elements[3],L[5]=D.elements[4],L[6]=D.elements[5],L[7]=0,L[8]=D.elements[6],L[9]=D.elements[7],L[10]=D.elements[8],L[11]=0):ArrayBuffer.isView(D)?L.set(new D.constructor(D.buffer,D.byteOffset,L.length)):D.toArray(L,O)}function U(D,L,O,B){const b=D.value,I=L+"_"+O;if(B[I]===void 0)return typeof b=="number"||typeof b=="boolean"?B[I]=b:ArrayBuffer.isView(b)?B[I]=b.slice():B[I]=b.clone(),!0;{const T=B[I];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return B[I]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(T.equals(b)===!1)return T.copy(b),!0}}return!1}function M(D){const L=D.uniforms;let O=0;const B=16;for(let I=0,T=L.length;I<T;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let N=0,q=C.length;N<q;N++){const V=C[N],Y=Array.isArray(V.value)?V.value:[V.value];for(let X=0,k=Y.length;X<k;X++){const $=Y[X],j=x($),pt=O%B,Mt=pt%j.boundary,Lt=pt+Mt;O+=Mt,Lt!==0&&B-Lt<j.storage&&(O+=B-Lt),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=O,O+=j.storage}}}const b=O%B;return b>0&&(O+=B-b),D.__size=O,D.__cache={},this}function x(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(L.boundary=16,L.storage=D.byteLength):me("WebGLRenderer: Unsupported uniform value type.",D),L}function F(D){const L=D.target;L.removeEventListener("dispose",F);const O=d.indexOf(L.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function K(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:p,update:m,dispose:K}}const I3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function z3(){return ra===null&&(ra=new RT(I3,16,16,cs,ha),ra.name="DFG_LUT",ra.minFilter=Vn,ra.magFilter=Vn,ra.wrapS=Xa,ra.wrapT=Xa,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class Co{constructor(e={}){const{canvas:i=nT(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:E=vi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const U=E,M=new Set([wm,Cm,Rm]),x=new Set([vi,da,Hl,Gl,bm,Am]),F=new Uint32Array(4),K=new Int32Array(4),D=new J;let L=null,O=null;const B=[],b=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1,N=null,q=null,V=null,Y=null;this._outputColorSpace=wn;let X=0,k=0,$=null,j=-1,pt=null;const Mt=new ln,Lt=new ln;let Nt=null;const G=new Fe(0);let _t=0,lt=i.width,P=i.height,et=1,dt=null,yt=null;const rt=new ln(0,0,lt,P),Tt=new ln(0,0,lt,P);let jt=!1;const $t=new Om;let Yt=!1,Ot=!1;const wt=new $e,ee=new J,de=new ln,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function le(){return $===null?et:1}let W=r;function sn(A,Z){return i.getContext(A,Z)}let He,z,y,st,ht,St,Dt,It,xt,Rt,Pt,re,Gt,Ht,Zt,ce,ge,tt,Ut,At,zt,Wt,Ct;try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Em}`),i.addEventListener("webglcontextlost",Le,!1),i.addEventListener("webglcontextrestored",_e,!1),i.addEventListener("webglcontextcreationerror",si,!1),W===null){const Z="webgl2";if(W=sn(Z,A),W===null)throw sn(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(A){throw i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",si,!1),Ve("WebGLRenderer: "+A.message),A}function ae(){He=new zR(W),He.init(),zt=new C3(W,He),z=new RR(W,He,e,zt),y=new A3(W,He),z.reversedDepthBuffer&&S&&y.buffers.depth.setReversed(!0),q=W.createFramebuffer(),V=W.createFramebuffer(),Y=W.createFramebuffer(),st=new HR(W),ht=new d3,St=new R3(W,He,y,ht,z,zt,st),Dt=new IR(T),It=new VT(W),Wt=new bR(W,It),xt=new FR(W,It,st,Wt),Rt=new VR(W,xt,It,Wt,st),tt=new GR(W,z,St),Zt=new CR(ht),Pt=new f3(T,Dt,He,z,Wt,Zt),re=new O3(T,ht),Gt=new p3,Ht=new x3(He),ge=new TR(T,Dt,y,Rt,w,p),ce=new b3(T,Rt,z),Ct=new P3(W,st,z,y),Ut=new AR(W,He,st),At=new BR(W,He,st),st.programs=Pt.programs,T.capabilities=z,T.extensions=He,T.properties=ht,T.renderLists=Gt,T.shadowMap=ce,T.state=y,T.info=st}U!==vi&&(I=new kR(U,i.width,i.height,h,l,u));const qt=new U3(T,W);this.xr=qt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(A){A!==void 0&&(et=A,this.setSize(lt,P,!1))},this.getSize=function(A){return A.set(lt,P)},this.setSize=function(A,Z,gt=!0){if(qt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=A,P=Z,i.width=Math.floor(A*et),i.height=Math.floor(Z*et),gt===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(lt*et,P*et).floor()},this.setDrawingBufferSize=function(A,Z,gt){lt=A,P=Z,et=gt,i.width=Math.floor(A*gt),i.height=Math.floor(Z*gt),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(U===vi){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Mt)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,Z,gt,ct){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,Z,gt,ct),y.viewport(Mt.copy(rt).multiplyScalar(et).round())},this.getScissor=function(A){return A.copy(Tt)},this.setScissor=function(A,Z,gt,ct){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,Z,gt,ct),y.scissor(Lt.copy(Tt).multiplyScalar(et).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(A){y.setScissorTest(jt=A)},this.setOpaqueSort=function(A){dt=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,gt=!0){let ct=0;if(A){let ut=!1;if($!==null){const Vt=$.texture.format;ut=M.has(Vt)}if(ut){const Vt=$.texture.type,Kt=x.has(Vt),Ft=ge.getClearColor(),te=ge.getClearAlpha(),ne=Ft.r,fe=Ft.g,ve=Ft.b;Kt?(F[0]=ne,F[1]=fe,F[2]=ve,F[3]=te,W.clearBufferuiv(W.COLOR,0,F)):(K[0]=ne,K[1]=fe,K[2]=ve,K[3]=te,W.clearBufferiv(W.COLOR,0,K))}else ct|=W.COLOR_BUFFER_BIT}Z&&(ct|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),gt&&(ct|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&W.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",_e,!1),i.removeEventListener("webglcontextcreationerror",si,!1),ge.dispose(),Gt.dispose(),Ht.dispose(),ht.dispose(),Dt.dispose(),Rt.dispose(),Wt.dispose(),Ct.dispose(),Pt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Ur),qt.removeEventListener("sessionend",Ka),ki.stop()};function Le(A){A.preventDefault(),cS("WebGLRenderer: Context Lost."),C=!0}function _e(){cS("WebGLRenderer: Context Restored."),C=!1;const A=st.autoReset,Z=ce.enabled,gt=ce.autoUpdate,ct=ce.needsUpdate,ut=ce.type;ae(),st.autoReset=A,ce.enabled=Z,ce.autoUpdate=gt,ce.needsUpdate=ct,ce.type=ut}function si(A){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xi(A){const Z=A.target;Z.removeEventListener("dispose",xi),nf(Z)}function nf(A){ds(A),ht.remove(A)}function ds(A){const Z=ht.get(A).programs;Z!==void 0&&(Z.forEach(function(gt){Pt.releaseProgram(gt)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,gt,ct,ut,Vt){Z===null&&(Z=we);const Kt=ut.isMesh&&ut.matrixWorld.determinantAffine()<0,Ft=zo(A,Z,gt,ct,ut);y.setMaterial(ct,Kt);let te=gt.index,ne=1;if(ct.wireframe===!0){if(te=xt.getWireframeAttribute(gt),te===void 0)return;ne=2}const fe=gt.drawRange,ve=gt.attributes.position;let Qt=fe.start*ne,Ae=(fe.start+fe.count)*ne;Vt!==null&&(Qt=Math.max(Qt,Vt.start*ne),Ae=Math.min(Ae,(Vt.start+Vt.count)*ne)),te!==null?(Qt=Math.max(Qt,0),Ae=Math.min(Ae,te.count)):ve!=null&&(Qt=Math.max(Qt,0),Ae=Math.min(Ae,ve.count));const Ee=Ae-Qt;if(Ee<0||Ee===1/0)return;Wt.setup(ut,ct,Ft,gt,te);let Je,qe=Ut;if(te!==null&&(Je=It.get(te),qe=At,qe.setIndex(Je)),ut.isMesh)ct.wireframe===!0?(y.setLineWidth(ct.wireframeLinewidth*le()),qe.setMode(W.LINES)):qe.setMode(W.TRIANGLES);else if(ut.isLine){let Mn=ct.linewidth;Mn===void 0&&(Mn=1),y.setLineWidth(Mn*le()),ut.isLineSegments?qe.setMode(W.LINES):ut.isLineLoop?qe.setMode(W.LINE_LOOP):qe.setMode(W.LINE_STRIP)}else ut.isPoints?qe.setMode(W.POINTS):ut.isSprite&&qe.setMode(W.TRIANGLES);if(ut.isBatchedMesh)if(He.get("WEBGL_multi_draw"))qe.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{const Mn=ut._multiDrawStarts,Xt=ut._multiDrawCounts,cn=ut._multiDrawCount,Oe=te?It.get(te).bytesPerElement:1,qn=ht.get(ct).currentProgram.getUniforms();for(let oi=0;oi<cn;oi++)qn.setValue(W,"_gl_DrawID",oi),qe.render(Mn[oi]/Oe,Xt[oi])}else if(ut.isInstancedMesh)qe.renderInstances(Qt,Ee,ut.count);else if(gt.isInstancedBufferGeometry){const Mn=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Xt=Math.min(gt.instanceCount,Mn);qe.renderInstances(Qt,Ee,Xt)}else qe.render(Qt,Ee)};function Nr(A,Z,gt,ct){N!==null&&A.isNodeMaterial&&N.setObject(ct,A),Yt===!0&&Zt.setState(A,gt,!1),A.transparent===!0&&A.side===Va&&A.forceSinglePass===!1?(A.side=ri,A.needsUpdate=!0,Lr(A,Z,ct),A.side=Si,A.needsUpdate=!0,Lr(A,Z,ct),A.side=Va):Lr(A,Z,ct)}this.compile=function(A,Z,gt=null){gt===null&&(gt=A),N!==null&&N.renderStart(A,Z,gt),O=Ht.get(gt),O.init(Z),b.push(O),gt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(Z.layers)&&(O.pushLight(ut),ut.castShadow&&O.pushShadow(ut))}),A!==gt&&A.traverseVisible(function(ut){ut.isLight&&ut.layers.test(Z.layers)&&(O.pushLight(ut),ut.castShadow&&O.pushShadow(ut))}),O.setupLights(),N!==null&&N.updateLights(O.state.lightsArray),Ot=this.localClippingEnabled,Yt=Zt.init(this.clippingPlanes,Ot),Yt===!0&&Zt.setGlobalState(this.clippingPlanes,Z),N!==null&&ce.render(O.state.shadowsArray,gt,Z);const ct=new Set;return A.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;const Vt=ut.material;if(Vt)if(Array.isArray(Vt))for(let Kt=0;Kt<Vt.length;Kt++){const Ft=Vt[Kt];Nr(Ft,gt,Z,ut),ct.add(Ft)}else Nr(Vt,gt,Z,ut),ct.add(Vt)}),O=b.pop(),N!==null&&N.renderEnd(),ct},this.compileAsync=function(A,Z,gt=null){const ct=this.compile(A,Z,gt);return new Promise(ut=>{function Vt(){if(ct.forEach(function(Kt){const te=ht.get(Kt).currentProgram;(te===void 0||te.isReady())&&ct.delete(Kt)}),ct.size===0){ut(A);return}setTimeout(Vt,10)}He.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let Za=null;function ga(A){Za&&Za(A)}function Ur(){ki.stop()}function Ka(){ki.start()}const ki=new hM;ki.setAnimationLoop(ga),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Za=A,qt.setAnimationLoop(A),A===null?ki.stop():ki.start()},qt.addEventListener("sessionstart",Ur),qt.addEventListener("sessionend",Ka),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,Z);const gt=qt.enabled===!0&&qt.isPresenting===!0,ct=I!==null&&($===null||gt)&&I.begin(T,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(Z),Z=qt.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,Z,$),O=Ht.get(A,b.length),O.init(Z),O.state.textureUnits=St.getTextureUnits(),b.push(O),wt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$t.setFromProjectionMatrix(wt,ua,Z.reversedDepth),Ot=this.localClippingEnabled,Yt=Zt.init(this.clippingPlanes,Ot),L=Gt.get(A,B.length),L.init(),B.push(L),qt.enabled===!0&&qt.isPresenting===!0){const Kt=T.xr.getDepthSensingMesh();Kt!==null&&Uo(Kt,Z,-1/0,T.sortObjects)}Uo(A,Z,0,T.sortObjects),L.finish(),N!==null&&N.updateLights(O.state.lightsArray),T.sortObjects===!0&&L.sort(dt,yt),he=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,he&&ge.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Zt.beginShadows();const ut=O.state.shadowsArray;if(ce.render(ut,A,Z),Yt===!0&&Zt.endShadows(),(ct&&I.hasRenderPass())===!1){const Kt=L.opaque,Ft=L.transmissive;if(O.setupLights(),Z.isArrayCamera){const te=Z.cameras;if(Ft.length>0)for(let ne=0,fe=te.length;ne<fe;ne++){const ve=te[ne];hs(Kt,Ft,A,ve)}he&&ge.render(A);for(let ne=0,fe=te.length;ne<fe;ne++){const ve=te[ne];Lo(L,A,ve,ve.viewport)}}else Ft.length>0&&hs(Kt,Ft,A,Z),he&&ge.render(A),Lo(L,A,Z)}$!==null&&k===0&&(St.updateMultisampleRenderTarget($),St.updateRenderTargetMipmap($)),ct&&I.end(T),A.isScene===!0&&A.onAfterRender(T,A,Z),Wt.resetDefaultState(),j=-1,pt=null,b.pop(),b.length>0?(O=b[b.length-1],St.setTextureUnits(O.state.textureUnits),Yt===!0&&Zt.setGlobalState(T.clippingPlanes,O.state.camera)):O=null,B.pop(),B.length>0?L=B[B.length-1]:L=null,N!==null&&N.renderEnd()};function Uo(A,Z,gt,ct){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)gt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum($t)){ct&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const Kt=Rt.update(A),Ft=A.material;Ft.visible&&L.push(A,Kt,Ft,gt,de.z,null,Z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum($t))){const Kt=Rt.update(A),Ft=A.material;if(ct&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(Kt.boundingSphere===null&&Kt.computeBoundingSphere(),de.copy(Kt.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Ft)){const te=Kt.groups;for(let ne=0,fe=te.length;ne<fe;ne++){const ve=te[ne],Qt=Ft[ve.materialIndex];Qt&&Qt.visible&&L.push(A,Kt,Qt,gt,de.z,ve,Z)}}else Ft.visible&&L.push(A,Kt,Ft,gt,de.z,null,Z)}}const Vt=A.children;for(let Kt=0,Ft=Vt.length;Kt<Ft;Kt++)Uo(Vt[Kt],Z,gt,ct)}function Lo(A,Z,gt,ct){const{opaque:ut,transmissive:Vt,transparent:Kt}=A;O.setupLightsView(gt),Yt===!0&&Zt.setGlobalState(T.clippingPlanes,gt),ct&&y.viewport(Mt.copy(ct)),ut.length>0&&qi(ut,Z,gt),Vt.length>0&&qi(Vt,Z,gt),Kt.length>0&&qi(Kt,Z,gt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function hs(A,Z,gt,ct){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ct.id]===void 0){const Qt=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ct.id]=new Xi(1,1,{generateMipmaps:!0,type:Qt?ha:vi,minFilter:ss,samples:Math.max(4,z.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Vt=O.state.transmissionRenderTarget[ct.id],Kt=ct.viewport||Mt;Vt.setSize(Kt.z*T.transmissionResolutionScale,Kt.w*T.transmissionResolutionScale);const Ft=T.getRenderTarget(),te=T.getActiveCubeFace(),ne=T.getActiveMipmapLevel();T.setRenderTarget(Vt),T.getClearColor(G),_t=T.getClearAlpha(),_t<1&&T.setClearColor(16777215,.5),T.clear(),he&&ge.render(gt);const fe=T.toneMapping;T.toneMapping=fa;const ve=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),O.setupLightsView(ct),Yt===!0&&Zt.setGlobalState(T.clippingPlanes,ct),qi(A,gt,ct),St.updateMultisampleRenderTarget(Vt),St.updateRenderTargetMipmap(Vt),He.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ae=0,Ee=Z.length;Ae<Ee;Ae++){const Je=Z[Ae],{object:qe,geometry:Mn,material:Xt,group:cn}=Je;if(Xt.side===Va&&qe.layers.test(ct.layers)){const Oe=Xt.side;Xt.side=ri,Xt.needsUpdate=!0,Zl(qe,gt,ct,Mn,Xt,cn),Xt.side=Oe,Xt.needsUpdate=!0,Qt=!0}}Qt===!0&&(St.updateMultisampleRenderTarget(Vt),St.updateRenderTargetMipmap(Vt))}T.setRenderTarget(Ft,te,ne),T.setClearColor(G,_t),ve!==void 0&&(ct.viewport=ve),T.toneMapping=fe}function qi(A,Z,gt){const ct=Z.isScene===!0?Z.overrideMaterial:null;for(let ut=0,Vt=A.length;ut<Vt;ut++){const Kt=A[ut],{object:Ft,geometry:te,group:ne}=Kt;let fe=Kt.material;fe.allowOverride===!0&&ct!==null&&(fe=ct),Ft.layers.test(gt.layers)&&Zl(Ft,Z,gt,te,fe,ne)}}function Zl(A,Z,gt,ct,ut,Vt){N!==null&&ut.isNodeMaterial&&N.setObject(A,ut),A.onBeforeRender(T,Z,gt,ct,ut,Vt),A.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ut.onBeforeRender(T,Z,gt,ct,A,Vt),ut.transparent===!0&&ut.side===Va&&ut.forceSinglePass===!1?(ut.side=ri,ut.needsUpdate=!0,T.renderBufferDirect(gt,Z,ct,ut,A,Vt),ut.side=Si,ut.needsUpdate=!0,T.renderBufferDirect(gt,Z,ct,ut,A,Vt),ut.side=Va):T.renderBufferDirect(gt,Z,ct,ut,A,Vt),A.onAfterRender(T,Z,gt,ct,ut,Vt)}function Lr(A,Z,gt){Z.isScene!==!0&&(Z=we);const ct=ht.get(A),ut=O.state.lights,Vt=O.state.shadowsArray,Kt=ut.state.version,Ft=Pt.getParameters(A,ut.state,Vt,Z,gt,O.state.lightProbeGridArray),te=Pt.getProgramCacheKey(Ft);let ne=ct.programs;ct.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,ct.fog=Z.fog;const fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ct.envMap=Dt.get(A.envMap||ct.environment,fe),ct.envMapRotation=ct.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,ne===void 0&&(A.addEventListener("dispose",xi),ne=new Map,ct.programs=ne);let ve=ne.get(te);if(ve!==void 0){if(ct.currentProgram===ve&&ct.lightsStateVersion===Kt)return Po(A,Ft),ve}else Ft.uniforms=Pt.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,gt,Ft),A.onBeforeCompile(Ft,T),ve=Pt.acquireProgram(Ft,te),ne.set(te,ve),ct.uniforms=Ft.uniforms;const Qt=ct.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qt.clippingPlanes=Zt.uniform),Po(A,Ft),ct.needsLights=Ql(A),ct.lightsStateVersion=Kt,ct.needsLights&&(Qt.ambientLightColor.value=ut.state.ambient,Qt.lightProbe.value=ut.state.probe,Qt.sunLights.value=ut.state.sun,Qt.sunLightShadows.value=ut.state.sunShadow,Qt.directionalLights.value=ut.state.directional,Qt.directionalLightShadows.value=ut.state.directionalShadow,Qt.spotLights.value=ut.state.spot,Qt.spotLightShadows.value=ut.state.spotShadow,Qt.rectAreaLights.value=ut.state.rectArea,Qt.ltc_1.value=ut.state.rectAreaLTC1,Qt.ltc_2.value=ut.state.rectAreaLTC2,Qt.pointLights.value=ut.state.point,Qt.pointLightShadows.value=ut.state.pointShadow,Qt.hemisphereLights.value=ut.state.hemi,Qt.sunShadowMatrix.value=ut.state.sunShadowMatrix,Qt.sunShadowCascade.value=ut.state.sunShadowCascade,Qt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Qt.spotLightMatrix.value=ut.state.spotLightMatrix,Qt.spotLightMap.value=ut.state.spotLightMap,Qt.pointShadowMatrix.value=ut.state.pointShadowMatrix),ct.lightProbeGrid=O.state.lightProbeGridArray.length>0,ct.currentProgram=ve,ct.uniformsList=null,ve}function Oo(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=qu.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Po(A,Z){const gt=ht.get(A);gt.outputColorSpace=Z.outputColorSpace,gt.batching=Z.batching,gt.batchingColor=Z.batchingColor,gt.instancing=Z.instancing,gt.instancingColor=Z.instancingColor,gt.instancingMorph=Z.instancingMorph,gt.skinning=Z.skinning,gt.morphTargets=Z.morphTargets,gt.morphNormals=Z.morphNormals,gt.morphColors=Z.morphColors,gt.morphTargetsCount=Z.morphTargetsCount,gt.numClippingPlanes=Z.numClippingPlanes,gt.numIntersection=Z.numClipIntersection,gt.vertexAlphas=Z.vertexAlphas,gt.vertexTangents=Z.vertexTangents,gt.toneMapping=Z.toneMapping}function Io(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(Z.matrixWorld);for(let gt=0,ct=A.length;gt<ct;gt++){const ut=A[gt];if(ut.texture!==null&&ut.boundingBox.containsPoint(D))return ut}return null}function zo(A,Z,gt,ct,ut){Z.isScene!==!0&&(Z=we),St.resetTextureUnits();const Vt=Z.fog,Kt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?Z.environment:null,Ft=$===null?T.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Pe.workingColorSpace,te=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,ne=Dt.get(ct.envMap||Kt,te),fe=ct.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,ve=!!gt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Qt=!!gt.morphAttributes.position,Ae=!!gt.morphAttributes.normal,Ee=!!gt.morphAttributes.color;let Je=fa;ct.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Je=T.toneMapping);const qe=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Mn=qe!==void 0?qe.length:0,Xt=ht.get(ct),cn=O.state.lights;if(Yt===!0&&(Ot===!0||A!==pt)){const De=A===pt&&ct.id===j;Zt.setState(ct,A,De)}let Oe=!1;ct.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==cn.state.version||Xt.outputColorSpace!==Ft||ut.isBatchedMesh&&Xt.batching===!1||!ut.isBatchedMesh&&Xt.batching===!0||ut.isBatchedMesh&&Xt.batchingColor===!0&&ut._colorsTexture===null||ut.isBatchedMesh&&Xt.batchingColor===!1&&ut._colorsTexture!==null||ut.isInstancedMesh&&Xt.instancing===!1||!ut.isInstancedMesh&&Xt.instancing===!0||ut.isSkinnedMesh&&Xt.skinning===!1||!ut.isSkinnedMesh&&Xt.skinning===!0||ut.isInstancedMesh&&Xt.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&Xt.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&Xt.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&Xt.instancingMorph===!1&&ut.morphTexture!==null||Xt.envMap!==ne||ct.fog===!0&&Xt.fog!==Vt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Zt.numPlanes||Xt.numIntersection!==Zt.numIntersection)||Xt.vertexAlphas!==fe||Xt.vertexTangents!==ve||Xt.morphTargets!==Qt||Xt.morphNormals!==Ae||Xt.morphColors!==Ee||Xt.toneMapping!==Je||Xt.morphTargetsCount!==Mn||!!Xt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Xt.__version=ct.version);let qn=Xt.currentProgram;Oe===!0&&(qn=Lr(ct,Z,ut),N&&ct.isNodeMaterial&&N.onUpdateProgram(ct,qn,Xt));let oi=!1,Wi=!1,Te=!1;const Xe=qn.getUniforms(),en=Xt.uniforms;if(y.useProgram(qn.program)&&(oi=!0,Wi=!0,Te=!0),ct.id!==j&&(j=ct.id,Wi=!0),Xt.needsLights){const De=Io(O.state.lightProbeGridArray,ut);Xt.lightProbeGrid!==De&&(Xt.lightProbeGrid=De,Wi=!0)}if(oi||pt!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xe.setValue(W,"projectionMatrix",A.projectionMatrix),Xe.setValue(W,"viewMatrix",A.matrixWorldInverse);const un=Xe.map.cameraPosition;un!==void 0&&un.setValue(W,ee.setFromMatrixPosition(A.matrixWorld)),z.logarithmicDepthBuffer&&Xe.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Xe.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),pt!==A&&(pt=A,Wi=!0,Te=!0)}if(Xt.needsLights&&(cn.state.sunShadowMap.length>0&&Xe.setValue(W,"sunShadowMap",cn.state.sunShadowMap,St),cn.state.directionalShadowMap.length>0&&Xe.setValue(W,"directionalShadowMap",cn.state.directionalShadowMap,St),cn.state.spotShadowMap.length>0&&Xe.setValue(W,"spotShadowMap",cn.state.spotShadowMap,St),cn.state.pointShadowMap.length>0&&Xe.setValue(W,"pointShadowMap",cn.state.pointShadowMap,St)),ut.isSkinnedMesh){Xe.setOptional(W,ut,"bindMatrix"),Xe.setOptional(W,ut,"bindMatrixInverse");const De=ut.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Xe.setValue(W,"boneTexture",De.boneTexture,St))}ut.isBatchedMesh&&(Xe.setOptional(W,ut,"batchingTexture"),Xe.setValue(W,"batchingTexture",ut._matricesTexture,St),Xe.setOptional(W,ut,"batchingIdTexture"),Xe.setValue(W,"batchingIdTexture",ut._indirectTexture,St),Xe.setOptional(W,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Xe.setValue(W,"batchingColorTexture",ut._colorsTexture,St));const li=gt.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&tt.update(ut,gt,qn),(Wi||Xt.receiveShadow!==ut.receiveShadow)&&(Xt.receiveShadow=ut.receiveShadow,Xe.setValue(W,"receiveShadow",ut.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&Z.environment!==null&&(en.envMapIntensity.value=Z.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=z3()),Wi){if(Xe.setValue(W,"toneMappingExposure",T.toneMappingExposure),Xt.needsLights&&Kl(en,Te),Vt&&ct.fog===!0&&re.refreshFogUniforms(en,Vt),re.refreshMaterialUniforms(en,ct,et,P,O.state.transmissionRenderTarget[A.id]),Xt.needsLights&&Xt.lightProbeGrid){const De=Xt.lightProbeGrid;en.probesSH.value=De.texture,en.probesMin.value.copy(De.boundingBox.min),en.probesMax.value.copy(De.boundingBox.max),en.probesResolution.value.copy(De.resolution)}qu.upload(W,Oo(Xt),en,St)}if(ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(qu.upload(W,Oo(Xt),en,St),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Xe.setValue(W,"center",ut.center),Xe.setValue(W,"modelViewMatrix",ut.modelViewMatrix),Xe.setValue(W,"normalMatrix",ut.normalMatrix),Xe.setValue(W,"modelMatrix",ut.matrixWorld),ct.uniformsGroups!==void 0){const De=ct.uniformsGroups;for(let un=0,_a=De.length;un<_a;un++){const Jl=De[un];Ct.update(Jl,qn),Ct.bind(Jl,qn)}}return qn}function Kl(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.sunLights.needsUpdate=Z,A.sunLightShadows.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Ql(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Z,gt){const ct=ht.get(A);ct.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),ht.get(A.texture).__webglTexture=Z,ht.get(A.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:gt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const gt=ht.get(A);gt.__webglFramebuffer=Z,gt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,gt=0){$=A,X=Z,k=gt;let ct=null,ut=!1,Vt=!1;if(A){const Ft=ht.get(A);if(Ft.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(W.FRAMEBUFFER,Ft.__webglFramebuffer),Mt.copy(A.viewport),Lt.copy(A.scissor),Nt=A.scissorTest,y.viewport(Mt),y.scissor(Lt),y.setScissorTest(Nt),j=-1;return}else if(Ft.__webglFramebuffer===void 0)St.setupRenderTarget(A);else if(Ft.__hasExternalTextures)St.rebindTextures(A,ht.get(A.texture).__webglTexture,ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const fe=A.depthTexture;if(Ft.__boundDepthTexture!==fe){if(fe!==null&&ht.has(fe)&&(A.width!==fe.image.width||A.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Vt=!0);const ne=ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[Z])?ct=ne[Z][gt]:ct=ne[Z],ut=!0):A.samples>0&&St.useMultisampledRTT(A)===!1?ct=ht.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?ct=ne[gt]:ct=ne,Mt.copy(A.viewport),Lt.copy(A.scissor),Nt=A.scissorTest}else Mt.copy(rt).multiplyScalar(et).floor(),Lt.copy(Tt).multiplyScalar(et).floor(),Nt=jt;if(gt!==0&&(ct=q),y.bindFramebuffer(W.FRAMEBUFFER,ct)&&y.drawBuffers(A,ct),y.viewport(Mt),y.scissor(Lt),y.setScissorTest(Nt),ut){const Ft=ht.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft.__webglTexture,gt)}else if(Vt){const Ft=Z;for(let te=0;te<A.textures.length;te++){const ne=ht.get(A.textures[te]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+te,ne.__webglTexture,gt,Ft)}}else if(A!==null&&gt!==0){const Ft=ht.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ft.__webglTexture,gt)}j=-1};function Mi(A){const Z=ht.get(A);return(Z.__readFormat!==A.format||Z.__readType!==A.type)&&(Z.__readFormat=A.format,Z.__readType=A.type,Z.__formatReadable=z.textureFormatReadable(A.format),Z.__typeReadable=z.textureTypeReadable(A.type)),Z}this.readRenderTargetPixels=function(A,Z,gt,ct,ut,Vt,Kt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Kt!==void 0&&(te=te[Kt]),te){y.bindFramebuffer(W.FRAMEBUFFER,te);try{const ne=A.textures[Ft],fe=ne.format,ve=ne.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ft);const Qt=Mi(ne);if(Qt.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qt.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ct&&gt>=0&&gt<=A.height-ut&&W.readPixels(Z,gt,ct,ut,zt.convert(fe),zt.convert(ve),Vt)}finally{const ne=$!==null?ht.get($).__webglFramebuffer:null;y.bindFramebuffer(W.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(A,Z,gt,ct,ut,Vt,Kt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Kt!==void 0&&(te=te[Kt]),te)if(Z>=0&&Z<=A.width-ct&&gt>=0&&gt<=A.height-ut){y.bindFramebuffer(W.FRAMEBUFFER,te);const ne=A.textures[Ft],fe=ne.format,ve=ne.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ft);const Qt=Mi(ne);if(Qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ae),W.bufferData(W.PIXEL_PACK_BUFFER,Vt.byteLength,W.STREAM_READ),W.readPixels(Z,gt,ct,ut,zt.convert(fe),zt.convert(ve),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Ee=$!==null?ht.get($).__webglFramebuffer:null;y.bindFramebuffer(W.FRAMEBUFFER,Ee);const Je=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await iT(W,Je,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ae),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Vt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Ae),W.deleteSync(Je),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,gt=0){const ct=Math.pow(2,-gt),ut=Math.floor(A.image.width*ct),Vt=Math.floor(A.image.height*ct),Kt=Z!==null?Z.x:0,Ft=Z!==null?Z.y:0;St.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,gt,0,0,Kt,Ft,ut,Vt),y.unbindTexture()},this.copyTextureToTexture=function(A,Z,gt=null,ct=null,ut=0,Vt=0){let Kt,Ft,te,ne,fe,ve,Qt,Ae,Ee;const Je=A.isCompressedTexture?A.mipmaps[Vt]:A.image;if(gt!==null)Kt=gt.max.x-gt.min.x,Ft=gt.max.y-gt.min.y,te=gt.isBox3?gt.max.z-gt.min.z:1,ne=gt.min.x,fe=gt.min.y,ve=gt.isBox3?gt.min.z:0;else{const en=Math.pow(2,-ut);Kt=Math.floor(Je.width*en),Ft=Math.floor(Je.height*en),A.isDataArrayTexture?te=Je.depth:A.isData3DTexture?te=Math.floor(Je.depth*en):te=1,ne=0,fe=0,ve=0}ct!==null?(Qt=ct.x,Ae=ct.y,Ee=ct.z):(Qt=0,Ae=0,Ee=0);const qe=zt.convert(Z.format),Mn=zt.convert(Z.type);let Xt;Z.isData3DTexture?(St.setTexture3D(Z,0),Xt=W.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(St.setTexture2DArray(Z,0),Xt=W.TEXTURE_2D_ARRAY):(St.setTexture2D(Z,0),Xt=W.TEXTURE_2D),y.activeTexture(W.TEXTURE0),y.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),y.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),y.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const cn=y.getParameter(W.UNPACK_ROW_LENGTH),Oe=y.getParameter(W.UNPACK_IMAGE_HEIGHT),qn=y.getParameter(W.UNPACK_SKIP_PIXELS),oi=y.getParameter(W.UNPACK_SKIP_ROWS),Wi=y.getParameter(W.UNPACK_SKIP_IMAGES);y.pixelStorei(W.UNPACK_ROW_LENGTH,Je.width),y.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Je.height),y.pixelStorei(W.UNPACK_SKIP_PIXELS,ne),y.pixelStorei(W.UNPACK_SKIP_ROWS,fe),y.pixelStorei(W.UNPACK_SKIP_IMAGES,ve);const Te=A.isDataArrayTexture||A.isData3DTexture,Xe=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const en=ht.get(A),li=ht.get(Z),De=ht.get(en.__renderTarget),un=ht.get(li.__renderTarget);y.bindFramebuffer(W.READ_FRAMEBUFFER,De.__webglFramebuffer),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let _a=0;_a<te;_a++)Te&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ht.get(A).__webglTexture,ut,ve+_a),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ht.get(Z).__webglTexture,Vt,Ee+_a)),W.blitFramebuffer(ne,fe,Kt,Ft,Qt,Ae,Kt,Ft,W.DEPTH_BUFFER_BIT,W.NEAREST);y.bindFramebuffer(W.READ_FRAMEBUFFER,null),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ut!==0||A.isRenderTargetTexture||ht.has(A)){const en=ht.get(A),li=ht.get(Z);y.bindFramebuffer(W.READ_FRAMEBUFFER,V),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,Y);for(let De=0;De<te;De++)Te?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,en.__webglTexture,ut,ve+De):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,en.__webglTexture,ut),Xe?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,li.__webglTexture,Vt,Ee+De):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,li.__webglTexture,Vt),ut!==0?W.blitFramebuffer(ne,fe,Kt,Ft,Qt,Ae,Kt,Ft,W.COLOR_BUFFER_BIT,W.NEAREST):Xe?W.copyTexSubImage3D(Xt,Vt,Qt,Ae,Ee+De,ne,fe,Kt,Ft):W.copyTexSubImage2D(Xt,Vt,Qt,Ae,ne,fe,Kt,Ft);y.bindFramebuffer(W.READ_FRAMEBUFFER,null),y.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Xe?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Xt,Vt,Qt,Ae,Ee,Kt,Ft,te,qe,Mn,Je.data):Z.isCompressedArrayTexture?W.compressedTexSubImage3D(Xt,Vt,Qt,Ae,Ee,Kt,Ft,te,qe,Je.data):W.texSubImage3D(Xt,Vt,Qt,Ae,Ee,Kt,Ft,te,qe,Mn,Je):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Vt,Qt,Ae,Kt,Ft,qe,Mn,Je.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Vt,Qt,Ae,Je.width,Je.height,qe,Je.data):W.texSubImage2D(W.TEXTURE_2D,Vt,Qt,Ae,Kt,Ft,qe,Mn,Je);y.pixelStorei(W.UNPACK_ROW_LENGTH,cn),y.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Oe),y.pixelStorei(W.UNPACK_SKIP_PIXELS,qn),y.pixelStorei(W.UNPACK_SKIP_ROWS,oi),y.pixelStorei(W.UNPACK_SKIP_IMAGES,Wi),Vt===0&&Z.generateMipmaps&&W.generateMipmap(Xt),y.unbindTexture()},this.initRenderTarget=function(A){ht.get(A).__webglFramebuffer===void 0&&St.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?St.setTextureCube(A,0):A.isData3DTexture?St.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?St.setTexture2DArray(A,0):St.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){X=0,k=0,$=null,y.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pe._getUnpackColorSpace()}}function wo(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const vo=Math.PI/180,F3=3,B3=7,H3=.98,Jn=o=>1-(1-o)**3,MM=o=>new Ge().setFromEuler(new kn(o.x*vo,o.y*vo,o.z*vo,"XYZ")),hp=o=>(o%360+540)%360-180,yM=o=>{const e=new J(o.x,o.y,o.z),i=e.length();return i<1e-9?new J(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},G3=(o,e)=>{const i=u=>MM({x:o.x+(e.x-o.x)*Jn(u),y:o.y+(e.y-o.y)*Jn(u),z:o.z+(e.z-o.z)*Jn(u)}),r=i(H3),l=i(1);return yM(l.multiply(r.clone().invert()))},Do=(o,e,i)=>{const r=MM(o),l=yM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),u=Math.random()*Math.PI,d=new Ge().setFromAxisAngle(l,-u).multiply(e),h=new kn().setFromQuaternion(d,"XYZ"),p={x:h.x/vo,y:h.y/vo,z:h.z/vo},m=[];for(let g=F3;g<=B3;g++){const S=i-g;if(!(S<1))for(const E of[1,-1])for(const w of[1,-1])for(const U of[1,-1]){const M={x:o.x+E*360*g,y:o.y+w*360*S,z:o.z+U*360*i};M.x+=hp(p.x-M.x),M.y+=hp(p.y-M.y),M.z+=hp(p.z-M.z);const x=G3(o,M).dot(l);m.push({rotation:M,dot:x})}}const v=m.filter(g=>g.dot>0);return v.length>0?v[Math.floor(Math.random()*v.length)].rotation:m.reduce((g,S)=>S.dot>g.dot?S:g).rotation},fs={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:769384,cssTop:[11,189,104],cssBottom:[9,165,90],label:"#ffffff"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},zm=[4,6,8,10,12,20],Fm=["red","yellow","green","blue","black","white"];function $S(o,e){return o[(o.indexOf(e)+1)%o.length]}const pp={sides:6,color:"red",translucent:!0},V3=.87,No=o=>o?V3:1;function X3(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=zm.includes(e)?e:pp.sides,r=o.get("c")?.toLowerCase(),l=r!==void 0&&Fm.includes(r)?r:pp.color,u=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=u==="true"?!0:u==="false"?!1:pp.translucent;return{sides:i,color:l,translucent:d}}const tx=65,ex=.5,k3=10,q3=1500,W3=750,Y3=260,Ia=Math.PI/180,Z3=1.01,K3=2,Q3=.95,J3=1.9,j3=.07,Pl=512,nx=[.246667,.5,.753333],$3=.055733,t2="#ffffff",ix=(o,e,i)=>Math.min(i,Math.max(e,o)),e2=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],n2={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},ax=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],i2=o=>{const e=[],i=o/2,r=[1,-1];for(const l of[0,1,2]){const[u,d]=[0,1,2].filter(h=>h!==l);for(const h of r){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([v,g])=>{const S=[0,0,0];return S[l]=h,S[u]=v,S[d]=g,S}),m=[];for(let v=0;v<4;v++){const g=p[v],S=p[(v+1)%4];m.push(ax(g,S,i)),m.push(ax(S,g,i))}e.push(m)}}for(const l of r)for(const u of r)for(const d of r)e.push([[l*(1-o),u,d],[l,u*(1-o),d],[l,u,d*(1-o)]]);return e},a2=i2(j3),r2=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},s2=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new J(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},o2=o=>{const e=new J(...o).normalize(),i=Math.abs(e.y)>.9?new J(0,0,1):new J(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new J().crossVectors(r,e).normalize(),u=new $e().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ge().setFromRotationMatrix(u)}},rx=e2.map(o2),l2=o=>{const e=new J(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},sx=(o,e,i)=>{const r=document.createElement("canvas");r.width=Pl,r.height=Pl;const l=r.getContext("2d");if(!l)return null;const u=$3*Pl;l.fillStyle=e;for(const[p,m]of n2[o]){const v=nx[m-1]*Pl,g=nx[p-1]*Pl;l.beginPath(),l.arc(v,g,u,0,Math.PI*2),l.fill()}const d=new yo(r);d.colorSpace=wn;const h=new Dr({map:d,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(i,i),h)},c2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/Ia,y:e.y/Ia,z:e.z/Ia}};function u2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),v=vt.useRef(!1),[g,S]=vt.useState(!1),[E,w]=vt.useState(!1),[U,M]=vt.useState(null),[x,F]=vt.useState(null),K=vt.useCallback(T=>{h.current=T,r.current?.rotation.set(T.x*Ia,T.y*Ia,T.z*Ia)},[]),D=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},q=performance.now();return new Promise(V=>{const Y=X=>{const k=Math.min((X-q)/C,1),$=Jn(k);K({x:N.x+(T.x-N.x)*$,y:N.y+(T.y-N.y)*$,z:N.z+(T.z-N.z)*$}),k<1?d.current=requestAnimationFrame(Y):(d.current=null,V())};d.current=requestAnimationFrame(Y)})},[K]),L=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const q=N.quaternion.clone(),V=performance.now();return new Promise(Y=>{const X=k=>{const $=Math.min((k-V)/C,1);N.quaternion.slerpQuaternions(q,T,Jn($)),h.current=c2(N.quaternion),$<1?d.current=requestAnimationFrame(X):(d.current=null,Y())};d.current=requestAnimationFrame(X)})},[]),O=vt.useCallback(async()=>{v.current=!0,S(!0),M(null),F(null);try{const T=await wo(6),C=l2(rx[T-1]),N=h.current,q=Do(N,C,k3);await D(q,q3),await L(C,W3),p.current=h.current,S(!1),v.current=!1,M(T)}catch(T){S(!1),v.current=!1,F(T instanceof Error?T.message:"Roll failed.")}},[L,D]),B=vt.useCallback(T=>{if(v.current)return;const C=T.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),w(!0)},[]),b=vt.useCallback(T=>{const C=m.current;!C||v.current||(C.nx=ix((T.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=ix((T.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;K({x:N.x-C.ny*tx,y:N.y+C.nx*tx,z:N.z})})))},[K]),I=vt.useCallback(()=>{const T=m.current;if(!T)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(T.nx)>=ex||Math.abs(T.ny)>=ex?O():D(p.current,Y3)},[D,O]);return vt.useEffect(()=>{const T=i.current;if(!T)return;const C=new Mo,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const q=new Co({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),T.appendChild(q.domElement);const V=new jn,Y=[],X=[];for(const lt of a2){const P=r2(lt),et=s2(lt,P),dt=et.x,yt=et.y,rt=et.z,[Tt,jt,$t]=lt,Yt=[jt[0]-Tt[0],jt[1]-Tt[1],jt[2]-Tt[2]],Ot=[$t[0]-Tt[0],$t[1]-Tt[1],$t[2]-Tt[2]],wt=Yt[1]*Ot[2]-Yt[2]*Ot[1],ee=Yt[2]*Ot[0]-Yt[0]*Ot[2],de=Yt[0]*Ot[1]-Yt[1]*Ot[0],he=wt*P.x+ee*P.y+de*P.z>=0?lt:[...lt].reverse();for(let le=1;le<he.length-1;le++)Y.push(...he[0],...he[le],...he[le+1]),X.push(dt,yt,rt,dt,yt,rt,dt,yt,rt)}V.setAttribute("position",new pn(Y,3)),V.setAttribute("normal",new pn(X,3));const k=fs[o],$=No(e),j=new mn(V,new Eo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e}));j.rotation.set(h.current.x*Ia,h.current.y*Ia,h.current.z*Ia);const pt=new Ge().setFromAxisAngle(new J(0,1,0),Math.PI);rx.forEach((lt,P)=>{const et=P+1,dt=sx(et,k.label,K3);if(!dt)return;dt.position.copy(lt.normal).multiplyScalar(Z3),dt.quaternion.copy(lt.orientation),dt.renderOrder=1,j.add(dt);const yt=sx(et,t2,J3);yt&&(yt.renderOrder=-1,yt.position.copy(lt.normal).multiplyScalar(Q3),yt.quaternion.copy(lt.orientation).multiply(pt),j.add(yt))}),C.add(j),C.add(new Ao(16777215,1)),C.add(new To(16777215,12303291,1));const Lt=new bo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=j;const Nt=()=>{const lt=T.clientWidth,P=T.clientHeight;q.setSize(lt,P,!1),N.aspect=lt/P,N.updateProjectionMatrix()},G=new ResizeObserver(Nt);G.observe(T),Nt();const _t=()=>{l.current=requestAnimationFrame(_t),q.render(C,N)};return _t(),()=>{G.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),j.geometry.dispose(),j.material.dispose(),j.children.forEach(lt=>{const P=lt;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),q.dispose(),T.removeChild(q.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--six-sided${E?" is-dragging":""}`,onPointerDown:B,onPointerMove:b,onPointerUp:I,onPointerCancel:I,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:g?"Rolling...":x||(U?`You rolled ${U}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const ox=65,lx=.5,f2=10,d2=1500,h2=750,p2=260,sa=Math.PI/180,cx=.8,za=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],la=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],sm=[1,2,3,4],ux=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],m2=[180,180,0,180,0,180,0,180,180,0,180,180],fx={x:-177.2356,y:55.25,z:45},dx=(o,e,i)=>Math.min(i,Math.max(e,o)),mp=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],EM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new J(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},TM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},om=la.map(o=>{const e=o.map(r=>za[r]),i=TM(e);return{normal:EM(e,i),center:i}}),g2=.07,_2=o=>{const e=[];for(const i of la){const r=[];for(let l=0;l<3;l++){const u=za[i[l]],d=za[i[(l+1)%3]],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]),p=o/h;r.push(mp(u,d,p)),r.push(mp(d,u,p))}e.push(r)}for(let i=0;i<za.length;i++){const r=[];for(let l=0;l<za.length;l++){if(l===i)continue;const u=za[i],d=za[l],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]);r.push(mp(u,d,o/h))}e.push(r)}return e},v2=_2(g2),S2=(o,e)=>{const i=la[o][e],r=la[o][(e+1)%3];for(let l=0;l<la.length;l++)if(l!==o&&la[l].includes(i)&&la[l].includes(r))return sm[l];return sm[o]},x2=o=>{const{normal:e}=om[o],i=new Ge().setFromUnitVectors(e,new J(0,-1,0)),r=(o+1)%la.length,l=om[r].normal.clone().applyQuaternion(i),u=Math.atan2(l.x,l.z);return new Ge().setFromAxisAngle(new J(0,1,0),-u).multiply(i)},M2="#ffffff",hx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new yo(i);l.colorSpace=wn;const u=new Dr({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(cx,cx),u)},y2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/sa,y:e.y/sa,z:e.z/sa}};function E2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({...fx}),p=vt.useRef({...fx}),m=vt.useRef(null),v=vt.useRef(!1),[g,S]=vt.useState(!1),[E,w]=vt.useState(!1),[U,M]=vt.useState(null),[x,F]=vt.useState(null),K=vt.useCallback(T=>{h.current=T,r.current?.rotation.set(T.x*sa,T.y*sa,T.z*sa)},[]),D=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},q=performance.now();return new Promise(V=>{const Y=X=>{const k=Math.min((X-q)/C,1),$=Jn(k);K({x:N.x+(T.x-N.x)*$,y:N.y+(T.y-N.y)*$,z:N.z+(T.z-N.z)*$}),k<1?d.current=requestAnimationFrame(Y):(d.current=null,V())};d.current=requestAnimationFrame(Y)})},[K]),L=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const q=N.quaternion.clone(),V=performance.now();return new Promise(Y=>{const X=k=>{const $=Math.min((k-V)/C,1);N.quaternion.slerpQuaternions(q,T,Jn($)),h.current=y2(N.quaternion),$<1?d.current=requestAnimationFrame(X):(d.current=null,Y())};d.current=requestAnimationFrame(X)})},[]),O=vt.useCallback(async()=>{v.current=!0,S(!0),M(null),F(null);try{const T=await wo(4),C=sm.indexOf(T),N=x2(C),q=h.current,V=Do(q,N,f2);await D(V,d2),await L(N,h2),p.current=h.current,S(!1),v.current=!1,M(T)}catch(T){S(!1),v.current=!1,F(T instanceof Error?T.message:"Roll failed.")}},[L,D]),B=vt.useCallback(T=>{if(v.current)return;const C=T.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),w(!0)},[]),b=vt.useCallback(T=>{const C=m.current;!C||v.current||(C.nx=dx((T.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=dx((T.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;K({x:N.x-C.ny*ox,y:N.y+C.nx*ox,z:N.z})})))},[K]),I=vt.useCallback(()=>{const T=m.current;if(!T)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(T.nx)>=lx||Math.abs(T.ny)>=lx?O():D(p.current,p2)},[D,O]);return vt.useEffect(()=>{const T=i.current;if(!T)return;const C=new Mo,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const q=new Co({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),T.appendChild(q.domElement);const V=new jn,Y=[],X=[];for(const lt of v2){const P=lt,et=TM(P),dt=EM(P,et),yt=dt.x,rt=dt.y,Tt=dt.z,[jt,$t,Yt]=P,Ot=[$t[0]-jt[0],$t[1]-jt[1],$t[2]-jt[2]],wt=[Yt[0]-jt[0],Yt[1]-jt[1],Yt[2]-jt[2]],ee=Ot[1]*wt[2]-Ot[2]*wt[1],de=Ot[2]*wt[0]-Ot[0]*wt[2],we=Ot[0]*wt[1]-Ot[1]*wt[0],le=ee*et.x+de*et.y+we*et.z>=0?P:[...P].reverse();for(let W=1;W<le.length-1;W++)Y.push(...le[0],...le[W],...le[W+1]),X.push(yt,rt,Tt,yt,rt,Tt,yt,rt,Tt)}V.setAttribute("position",new pn(Y,3)),V.setAttribute("normal",new pn(X,3));const k=fs[o],$=No(e),j=new mn(V,new Eo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e}));j.rotation.set(h.current.x*sa,h.current.y*sa,h.current.z*sa);const pt=new Ge().setFromAxisAngle(new J(1,0,0),Math.PI),Mt=()=>{om.forEach(({normal:lt,center:P},et)=>{for(let dt=0;dt<3;dt++){const yt=et*3+dt,rt=S2(et,dt),Tt=la[et][dt],jt=la[et][(dt+1)%3],$t=new J().addVectors(new J(...za[Tt]),new J(...za[jt])).multiplyScalar(.5),Yt=P.clone().sub($t).normalize(),Ot=new J().crossVectors(Yt,lt),wt=new Ge().setFromRotationMatrix(new $e().makeBasis(Ot,Yt,lt)),ee=new Ge().setFromAxisAngle(new J(0,0,1),m2[yt]*sa),de=hx(rt,k.label);de&&(de.renderOrder=1,de.position.copy(new J(...ux[yt])).addScaledVector(lt,.01),de.quaternion.copy(wt),j.add(de));const we=hx(rt,M2);we&&(we.renderOrder=-1,we.position.copy(new J(...ux[yt])).addScaledVector(lt,-.05),we.quaternion.copy(wt).multiply(ee).multiply(pt),j.add(we))}})};document.fonts.load("700 160px dice-font").then(Mt),C.add(j),C.add(new Ao(16777215,1)),C.add(new To(16777215,12303291,1));const Lt=new bo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=j;const Nt=()=>{const lt=T.clientWidth,P=T.clientHeight;q.setSize(lt,P,!1),N.aspect=lt/P,N.updateProjectionMatrix()},G=new ResizeObserver(Nt);G.observe(T),Nt();const _t=()=>{l.current=requestAnimationFrame(_t),q.render(C,N)};return _t(),()=>{G.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),j.material.dispose(),j.children.forEach(lt=>{const P=lt;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),q.dispose(),T.removeChild(q.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--four-sided${E?" is-dragging":""}`,onPointerDown:B,onPointerMove:b,onPointerUp:I,onPointerCancel:I,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:g?"Rolling...":x||(U!==null?`You rolled ${U}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const px=65,mx=.5,T2=10,b2=1500,A2=750,R2=260,Fa=Math.PI/180,gx=1.08,_x=.864,vx=(o,e,i)=>Math.min(i,Math.max(e,o)),bM=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],C2=o=>{const e=new J(...o).normalize(),i=Math.abs(e.y)>.9?new J(0,0,1):new J(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new J().crossVectors(r,e).normalize(),u=new $e().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ge().setFromRotationMatrix(u)}},Sx=bM.map(C2),gp=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],w2=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new J(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},AM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},D2=.07,ho=1.7,rs=[[ho,0,0],[-ho,0,0],[0,ho,0],[0,-ho,0],[0,0,ho],[0,0,-ho]],N2=bM.map(([o,e,i])=>[o>0?0:1,e>0?2:3,i>0?4:5]),U2=o=>{const e=[];for(const i of N2){const r=[];for(let l=0;l<3;l++){const u=rs[i[l]],d=rs[i[(l+1)%3]],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]),p=o/h;r.push(gp(u,d,p)),r.push(gp(d,u,p))}e.push(r)}for(let i=0;i<rs.length;i++){const r=[];for(let p=0;p<rs.length;p++){if(Math.floor(p/2)===Math.floor(i/2))continue;const v=rs[i],g=rs[p],S=Math.hypot(g[0]-v[0],g[1]-v[1],g[2]-v[2]);r.push(gp(v,g,o/S))}const l=AM(r),u=new J(...rs[i]).normalize(),d=new J(...r[0]).sub(l),h=new J().crossVectors(u,d);r.sort((p,m)=>{const v=new J(...p).sub(l),g=new J(...m).sub(l);return Math.atan2(v.dot(h),v.dot(d))-Math.atan2(g.dot(h),g.dot(d))}),e.push(r)}return e},L2=U2(D2),O2=o=>{const e=new J(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},P2="#ffffff",xx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const l=new yo(i);l.colorSpace=wn;const u=new Dr({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(_x,_x),u)},I2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/Fa,y:e.y/Fa,z:e.z/Fa}};function z2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),v=vt.useRef(!1),[g,S]=vt.useState(!1),[E,w]=vt.useState(!1),[U,M]=vt.useState(null),[x,F]=vt.useState(null),K=vt.useCallback(T=>{h.current=T,r.current?.rotation.set(T.x*Fa,T.y*Fa,T.z*Fa)},[]),D=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},q=performance.now();return new Promise(V=>{const Y=X=>{const k=Math.min((X-q)/C,1),$=Jn(k);K({x:N.x+(T.x-N.x)*$,y:N.y+(T.y-N.y)*$,z:N.z+(T.z-N.z)*$}),k<1?d.current=requestAnimationFrame(Y):(d.current=null,V())};d.current=requestAnimationFrame(Y)})},[K]),L=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const q=N.quaternion.clone(),V=performance.now();return new Promise(Y=>{const X=k=>{const $=Math.min((k-V)/C,1);N.quaternion.slerpQuaternions(q,T,Jn($)),h.current=I2(N.quaternion),$<1?d.current=requestAnimationFrame(X):(d.current=null,Y())};d.current=requestAnimationFrame(X)})},[]),O=vt.useCallback(async()=>{v.current=!0,S(!0),M(null),F(null);try{const T=await wo(8),C=O2(Sx[T-1]),N=h.current,q=Do(N,C,T2);await D(q,b2),await L(C,A2),p.current=h.current,S(!1),v.current=!1,M(T)}catch(T){S(!1),v.current=!1,F(T instanceof Error?T.message:"Roll failed.")}},[L,D]),B=vt.useCallback(T=>{if(v.current)return;const C=T.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),w(!0)},[]),b=vt.useCallback(T=>{const C=m.current;!C||v.current||(C.nx=vx((T.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=vx((T.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;K({x:N.x-C.ny*px,y:N.y+C.nx*px,z:N.z})})))},[K]),I=vt.useCallback(()=>{const T=m.current;if(!T)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(T.nx)>=mx||Math.abs(T.ny)>=mx?O():D(p.current,R2)},[D,O]);return vt.useEffect(()=>{const T=i.current;if(!T)return;const C=new Mo,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const q=new Co({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),T.appendChild(q.domElement);const V=fs[o],Y=No(e),X=new jn,k=[],$=[];for(const lt of L2){const P=AM(lt),et=w2(lt,P),dt=et.x,yt=et.y,rt=et.z,[Tt,jt,$t]=lt,Yt=[jt[0]-Tt[0],jt[1]-Tt[1],jt[2]-Tt[2]],Ot=[$t[0]-Tt[0],$t[1]-Tt[1],$t[2]-Tt[2]],wt=Yt[1]*Ot[2]-Yt[2]*Ot[1],ee=Yt[2]*Ot[0]-Yt[0]*Ot[2],de=Yt[0]*Ot[1]-Yt[1]*Ot[0],he=wt*P.x+ee*P.y+de*P.z>=0?lt:[...lt].reverse();for(let le=1;le<he.length-1;le++)k.push(...he[0],...he[le],...he[le+1]),$.push(dt,yt,rt,dt,yt,rt,dt,yt,rt)}X.setAttribute("position",new pn(k,3)),X.setAttribute("normal",new pn($,3));const j=new mn(X,new Eo({color:V.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:Y,depthWrite:!e}));j.rotation.set(h.current.x*Fa,h.current.y*Fa,h.current.z*Fa);const pt=new Ge().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{Sx.forEach((lt,P)=>{const et=P+1,dt=xx(et,V.label);if(!dt)return;dt.position.copy(lt.normal).multiplyScalar(gx),dt.quaternion.copy(lt.orientation),dt.renderOrder=1,j.add(dt);const yt=xx(et,P2);yt&&(yt.renderOrder=-1,yt.position.copy(lt.normal).multiplyScalar(gx-.2),yt.quaternion.copy(lt.orientation).multiply(pt),j.add(yt))})};document.fonts.load("700 200px dice-font").then(Mt),C.add(j),C.add(new Ao(16777215,1)),C.add(new To(16777215,12303291,1));const Lt=new bo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=j;const Nt=()=>{const lt=T.clientWidth,P=T.clientHeight;q.setSize(lt,P,!1),N.aspect=lt/P,N.updateProjectionMatrix()},G=new ResizeObserver(Nt);G.observe(T),Nt();const _t=()=>{l.current=requestAnimationFrame(_t),q.render(C,N)};return _t(),()=>{G.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),j.geometry.dispose(),j.material.dispose(),j.children.forEach(lt=>{const P=lt;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),q.dispose(),T.removeChild(q.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--eight-sided${E?" is-dragging":""}`,onPointerDown:B,onPointerMove:b,onPointerUp:I,onPointerCancel:I,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:g?"Rolling...":x||(U?`You rolled ${U}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const Mx=65,yx=.5,F2=10,B2=1500,H2=750,G2=260,Ba=Math.PI/180,Ex=.77,RM=2.2,V2=.85,Ju=RM*.9*V2,Rr=RM*.65,lm=Ju*.105573,cm=Ju*.8,Bu=(Ju-cm)/(Ju-lm),um=[...[0,1,2,3,4].map(o=>[Bu*Rr*Math.cos(o*2*Math.PI/5),cm,Bu*Rr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Bu*Rr*Math.cos((o+.5)*2*Math.PI/5),-cm,Bu*Rr*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Rr*Math.cos(o*2*Math.PI/5),lm,Rr*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Rr*Math.cos((o+.5)*2*Math.PI/5),-lm,Rr*Math.sin((o+.5)*2*Math.PI/5)])],fm=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],dm=[1,3,5,7,9,8,6,4,2,10],Tx=(o,e,i)=>Math.min(i,Math.max(e,o)),CM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new J(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},hm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},X2=o=>{const e=fm[o].map(p=>um[p]),i=hm(e),r=CM(e,i),l=Math.abs(r.y)>.9?new J(0,0,1):new J(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new J().crossVectors(u,r).normalize(),h=new $e().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ge().setFromRotationMatrix(h)}},bx=Array.from({length:dm.length},(o,e)=>X2(e)),k2=o=>{const e=new J(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},q2="#ffffff",Ax=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const l=new yo(i);l.colorSpace=wn;const u=new Dr({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(Ex,Ex),u)},W2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/Ba,y:e.y/Ba,z:e.z/Ba}};function Y2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),v=vt.useRef(!1),[g,S]=vt.useState(!1),[E,w]=vt.useState(!1),[U,M]=vt.useState(null),[x,F]=vt.useState(null),K=vt.useCallback(T=>{h.current=T,r.current?.rotation.set(T.x*Ba,T.y*Ba,T.z*Ba)},[]),D=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},q=performance.now();return new Promise(V=>{const Y=X=>{const k=Math.min((X-q)/C,1),$=Jn(k);K({x:N.x+(T.x-N.x)*$,y:N.y+(T.y-N.y)*$,z:N.z+(T.z-N.z)*$}),k<1?d.current=requestAnimationFrame(Y):(d.current=null,V())};d.current=requestAnimationFrame(Y)})},[K]),L=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const q=N.quaternion.clone(),V=performance.now();return new Promise(Y=>{const X=k=>{const $=Math.min((k-V)/C,1);N.quaternion.slerpQuaternions(q,T,Jn($)),h.current=W2(N.quaternion),$<1?d.current=requestAnimationFrame(X):(d.current=null,Y())};d.current=requestAnimationFrame(X)})},[]),O=vt.useCallback(async()=>{v.current=!0,S(!0),M(null),F(null);try{const T=await wo(10),C=dm.indexOf(T),N=k2(bx[C]),q=h.current,V=Do(q,N,F2);await D(V,B2),await L(N,H2),p.current=h.current,S(!1),v.current=!1,M(T)}catch(T){S(!1),v.current=!1,F(T instanceof Error?T.message:"Roll failed.")}},[L,D]),B=vt.useCallback(T=>{if(v.current)return;const C=T.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),w(!0)},[]),b=vt.useCallback(T=>{const C=m.current;!C||v.current||(C.nx=Tx((T.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=Tx((T.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;K({x:N.x-C.ny*Mx,y:N.y+C.nx*Mx,z:N.z})})))},[K]),I=vt.useCallback(()=>{const T=m.current;if(!T)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(T.nx)>=yx||Math.abs(T.ny)>=yx?O():D(p.current,G2)},[D,O]);return vt.useEffect(()=>{const T=i.current;if(!T)return;const C=new Mo,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const q=new Co({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),T.appendChild(q.domElement);const V=new jn,Y=[],X=[];for(const lt of fm){const P=lt.map(W=>um[W]),et=hm(P),dt=CM(P,et),yt=dt.x,rt=dt.y,Tt=dt.z,[jt,$t,Yt]=P,Ot=[$t[0]-jt[0],$t[1]-jt[1],$t[2]-jt[2]],wt=[Yt[0]-jt[0],Yt[1]-jt[1],Yt[2]-jt[2]],ee=Ot[1]*wt[2]-Ot[2]*wt[1],de=Ot[2]*wt[0]-Ot[0]*wt[2],we=Ot[0]*wt[1]-Ot[1]*wt[0],le=ee*et.x+de*et.y+we*et.z>=0?P:[...P].reverse();for(let W=1;W<le.length-1;W++)Y.push(...le[0],...le[W],...le[W+1]),X.push(yt,rt,Tt,yt,rt,Tt,yt,rt,Tt)}V.setAttribute("position",new pn(Y,3)),V.setAttribute("normal",new pn(X,3));const k=fs[o],$=No(e),j=new mn(V,new Eo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e}));j.rotation.set(h.current.x*Ba,h.current.y*Ba,h.current.z*Ba);const pt=new Ge().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{bx.forEach((lt,P)=>{const et=dm[P],dt=Ax(et,k.label);if(!dt)return;const yt=hm(fm[P].map(Tt=>um[Tt]));dt.position.copy(yt),dt.position.addScaledVector(lt.normal,.01),dt.quaternion.copy(lt.orientation),dt.renderOrder=1,j.add(dt);const rt=Ax(et,q2);rt&&(rt.renderOrder=-1,rt.position.copy(yt),rt.position.addScaledVector(lt.normal,-.05),rt.quaternion.copy(lt.orientation).multiply(pt),j.add(rt))})};document.fonts.load("700 180px dice-font").then(Mt),C.add(j),C.add(new Ao(16777215,1)),C.add(new To(16777215,12303291,1));const Lt=new bo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=j;const Nt=()=>{const lt=T.clientWidth,P=T.clientHeight;q.setSize(lt,P,!1),N.aspect=lt/P,N.updateProjectionMatrix()},G=new ResizeObserver(Nt);G.observe(T),Nt();const _t=()=>{l.current=requestAnimationFrame(_t),q.render(C,N)};return _t(),()=>{G.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),j.material.dispose(),j.children.forEach(lt=>{const P=lt;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),q.dispose(),T.removeChild(q.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--ten-sided${E?" is-dragging":""}`,onPointerDown:B,onPointerMove:b,onPointerUp:I,onPointerCancel:I,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:g?"Rolling...":x||(U!==null?`You rolled ${U}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const Rx=65,Cx=.5,Z2=10,K2=1500,Q2=750,J2=260,Ha=Math.PI/180,wx=1,pm=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],mm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],gm=[1,2,3,4,5,6,8,7,9,10,11,12],Dx=(o,e,i)=>Math.min(i,Math.max(e,o)),wM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new J(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},_m=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},j2=o=>{const e=mm[o].map(p=>pm[p]),i=_m(e),r=wM(e,i),l=Math.abs(r.y)>.9?new J(0,0,1):new J(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new J().crossVectors(u,r).normalize(),h=new $e().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ge().setFromRotationMatrix(h)}},Nx=Array.from({length:gm.length},(o,e)=>j2(e)),$2=o=>{const e=new J(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},tw="#ffffff",Ux=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new yo(i);l.colorSpace=wn;const u=new Dr({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(wx,wx),u)},ew=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/Ha,y:e.y/Ha,z:e.z/Ha}};function nw({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),v=vt.useRef(!1),[g,S]=vt.useState(!1),[E,w]=vt.useState(!1),[U,M]=vt.useState(null),[x,F]=vt.useState(null),K=vt.useCallback(T=>{h.current=T,r.current?.rotation.set(T.x*Ha,T.y*Ha,T.z*Ha)},[]),D=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},q=performance.now();return new Promise(V=>{const Y=X=>{const k=Math.min((X-q)/C,1),$=Jn(k);K({x:N.x+(T.x-N.x)*$,y:N.y+(T.y-N.y)*$,z:N.z+(T.z-N.z)*$}),k<1?d.current=requestAnimationFrame(Y):(d.current=null,V())};d.current=requestAnimationFrame(Y)})},[K]),L=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const q=N.quaternion.clone(),V=performance.now();return new Promise(Y=>{const X=k=>{const $=Math.min((k-V)/C,1);N.quaternion.slerpQuaternions(q,T,Jn($)),h.current=ew(N.quaternion),$<1?d.current=requestAnimationFrame(X):(d.current=null,Y())};d.current=requestAnimationFrame(X)})},[]),O=vt.useCallback(async()=>{v.current=!0,S(!0),M(null),F(null);try{const T=await wo(12),C=gm.indexOf(T),N=$2(Nx[C]),q=h.current,V=Do(q,N,Z2);await D(V,K2),await L(N,Q2),p.current=h.current,S(!1),v.current=!1,M(T)}catch(T){S(!1),v.current=!1,F(T instanceof Error?T.message:"Roll failed.")}},[L,D]),B=vt.useCallback(T=>{if(v.current)return;const C=T.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),w(!0)},[]),b=vt.useCallback(T=>{const C=m.current;!C||v.current||(C.nx=Dx((T.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=Dx((T.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;K({x:N.x-C.ny*Rx,y:N.y+C.nx*Rx,z:N.z})})))},[K]),I=vt.useCallback(()=>{const T=m.current;if(!T)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(T.nx)>=Cx||Math.abs(T.ny)>=Cx?O():D(p.current,J2)},[D,O]);return vt.useEffect(()=>{const T=i.current;if(!T)return;const C=new Mo,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const q=new Co({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),T.appendChild(q.domElement);const V=new jn,Y=[],X=[];for(const lt of mm){const P=lt.map(W=>pm[W]),et=_m(P),dt=wM(P,et),yt=dt.x,rt=dt.y,Tt=dt.z,[jt,$t,Yt]=P,Ot=[$t[0]-jt[0],$t[1]-jt[1],$t[2]-jt[2]],wt=[Yt[0]-jt[0],Yt[1]-jt[1],Yt[2]-jt[2]],ee=Ot[1]*wt[2]-Ot[2]*wt[1],de=Ot[2]*wt[0]-Ot[0]*wt[2],we=Ot[0]*wt[1]-Ot[1]*wt[0],le=ee*et.x+de*et.y+we*et.z>=0?P:[...P].reverse();for(let W=1;W<le.length-1;W++)Y.push(...le[0],...le[W],...le[W+1]),X.push(yt,rt,Tt,yt,rt,Tt,yt,rt,Tt)}V.setAttribute("position",new pn(Y,3)),V.setAttribute("normal",new pn(X,3));const k=fs[o],$=No(e),j=new mn(V,new Eo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e}));j.rotation.set(h.current.x*Ha,h.current.y*Ha,h.current.z*Ha);const pt=new Ge().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{Nx.forEach((lt,P)=>{const et=gm[P],dt=Ux(et,k.label);if(!dt)return;const yt=_m(mm[P].map(Tt=>pm[Tt]));dt.position.copy(yt),dt.position.addScaledVector(lt.normal,.01),dt.quaternion.copy(lt.orientation),dt.renderOrder=1,j.add(dt);const rt=Ux(et,tw);rt&&(rt.renderOrder=-1,rt.position.copy(yt),rt.position.addScaledVector(lt.normal,-.05),rt.quaternion.copy(lt.orientation).multiply(pt),j.add(rt))})};document.fonts.load("700 160px dice-font").then(Mt),C.add(j),C.add(new Ao(16777215,1)),C.add(new To(16777215,12303291,1));const Lt=new bo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=j;const Nt=()=>{const lt=T.clientWidth,P=T.clientHeight;q.setSize(lt,P,!1),N.aspect=lt/P,N.updateProjectionMatrix()},G=new ResizeObserver(Nt);G.observe(T),Nt();const _t=()=>{l.current=requestAnimationFrame(_t),q.render(C,N)};return _t(),()=>{G.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),j.material.dispose(),j.children.forEach(lt=>{const P=lt;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),q.dispose(),T.removeChild(q.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--twelve-sided${E?" is-dragging":""}`,onPointerDown:B,onPointerMove:b,onPointerUp:I,onPointerCancel:I,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:g?"Rolling...":x||(U!==null?`You rolled ${U}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const Lx=65,Ox=.5,iw=10,aw=1500,rw=750,sw=260,Ga=Math.PI/180,Px=.9,vm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],Sm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],xm=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],Ix=(o,e,i)=>Math.min(i,Math.max(e,o)),DM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],v=Math.sqrt(h*h+p*p+m*m),g=new J(h/v,p/v,m/v);return g.dot(e)<0&&g.negate(),g},Mm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new J(e,i,r)},ow=o=>{const e=Sm[o].map(p=>vm[p]),i=Mm(e),r=DM(e,i),l=Math.abs(r.y)>.9?new J(0,0,1):new J(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new J().crossVectors(u,r).normalize(),h=new $e().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ge().setFromRotationMatrix(h)}},zx=Array.from({length:xm.length},(o,e)=>ow(e)),lw=o=>{const e=new J(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new J(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},cw="#ffffff",Fx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new yo(i);l.colorSpace=wn;const u=new Dr({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(Px,Px),u)},uw=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/Ga,y:e.y/Ga,z:e.z/Ga}};function fw({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),v=vt.useRef(!1),[g,S]=vt.useState(!1),[E,w]=vt.useState(!1),[U,M]=vt.useState(null),[x,F]=vt.useState(null),K=vt.useCallback(T=>{h.current=T,r.current?.rotation.set(T.x*Ga,T.y*Ga,T.z*Ga)},[]),D=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},q=performance.now();return new Promise(V=>{const Y=X=>{const k=Math.min((X-q)/C,1),$=Jn(k);K({x:N.x+(T.x-N.x)*$,y:N.y+(T.y-N.y)*$,z:N.z+(T.z-N.z)*$}),k<1?d.current=requestAnimationFrame(Y):(d.current=null,V())};d.current=requestAnimationFrame(Y)})},[K]),L=vt.useCallback((T,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const q=N.quaternion.clone(),V=performance.now();return new Promise(Y=>{const X=k=>{const $=Math.min((k-V)/C,1);N.quaternion.slerpQuaternions(q,T,Jn($)),h.current=uw(N.quaternion),$<1?d.current=requestAnimationFrame(X):(d.current=null,Y())};d.current=requestAnimationFrame(X)})},[]),O=vt.useCallback(async()=>{v.current=!0,S(!0),M(null),F(null);try{const T=await wo(20),C=xm.indexOf(T),N=lw(zx[C]),q=h.current,V=Do(q,N,iw);await D(V,aw),await L(N,rw),p.current=h.current,S(!1),v.current=!1,M(T)}catch(T){S(!1),v.current=!1,F(T instanceof Error?T.message:"Roll failed.")}},[L,D]),B=vt.useCallback(T=>{if(v.current)return;const C=T.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},T.currentTarget.setPointerCapture(T.pointerId),w(!0)},[]),b=vt.useCallback(T=>{const C=m.current;!C||v.current||(C.nx=Ix((T.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=Ix((T.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;K({x:N.x-C.ny*Lx,y:N.y+C.nx*Lx,z:N.z})})))},[K]),I=vt.useCallback(()=>{const T=m.current;if(!T)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(T.nx)>=Ox||Math.abs(T.ny)>=Ox?O():D(p.current,sw)},[D,O]);return vt.useEffect(()=>{const T=i.current;if(!T)return;const C=new Mo,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const q=new Co({alpha:!0,antialias:!0});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setClearColor(0,0),T.appendChild(q.domElement);const V=new jn,Y=[],X=[];for(const lt of Sm){const P=lt.map(W=>vm[W]),et=Mm(P),dt=DM(P,et),yt=dt.x,rt=dt.y,Tt=dt.z,[jt,$t,Yt]=P,Ot=[$t[0]-jt[0],$t[1]-jt[1],$t[2]-jt[2]],wt=[Yt[0]-jt[0],Yt[1]-jt[1],Yt[2]-jt[2]],ee=Ot[1]*wt[2]-Ot[2]*wt[1],de=Ot[2]*wt[0]-Ot[0]*wt[2],we=Ot[0]*wt[1]-Ot[1]*wt[0],le=ee*et.x+de*et.y+we*et.z>=0?P:[...P].reverse();for(let W=1;W<le.length-1;W++)Y.push(...le[0],...le[W],...le[W+1]),X.push(yt,rt,Tt,yt,rt,Tt,yt,rt,Tt)}V.setAttribute("position",new pn(Y,3)),V.setAttribute("normal",new pn(X,3));const k=fs[o],$=No(e),j=new mn(V,new Eo({color:k.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:$,depthWrite:!e}));j.rotation.set(h.current.x*Ga,h.current.y*Ga,h.current.z*Ga);const pt=new Ge().setFromAxisAngle(new J(0,1,0),Math.PI),Mt=()=>{zx.forEach((lt,P)=>{const et=xm[P],dt=Fx(et,k.label);if(!dt)return;const yt=Mm(Sm[P].map(Tt=>vm[Tt]));dt.position.copy(yt),dt.position.addScaledVector(lt.normal,.01),dt.quaternion.copy(lt.orientation),dt.renderOrder=1,j.add(dt);const rt=Fx(et,cw);rt&&(rt.renderOrder=-1,rt.position.copy(yt),rt.position.addScaledVector(lt.normal,-.05),rt.quaternion.copy(lt.orientation).multiply(pt),j.add(rt))})};document.fonts.load("700 160px dice-font").then(Mt),C.add(j),C.add(new Ao(16777215,1)),C.add(new To(16777215,12303291,1));const Lt=new bo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=j;const Nt=()=>{const lt=T.clientWidth,P=T.clientHeight;q.setSize(lt,P,!1),N.aspect=lt/P,N.updateProjectionMatrix()},G=new ResizeObserver(Nt);G.observe(T),Nt();const _t=()=>{l.current=requestAnimationFrame(_t),q.render(C,N)};return _t(),()=>{G.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),V.dispose(),j.material.dispose(),j.children.forEach(lt=>{const P=lt;P.geometry.dispose(),P.material.map?.dispose(),P.material.dispose()}),q.dispose(),T.removeChild(q.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--twenty-sided${E?" is-dragging":""}`,onPointerDown:B,onPointerMove:b,onPointerUp:I,onPointerCancel:I,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:g?"Rolling...":x||(U!==null?`You rolled ${U}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function dw({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return se.jsx(E2,{color:e,translucent:i});case 6:return se.jsx(u2,{color:e,translucent:i});case 8:return se.jsx(z2,{color:e,translucent:i});case 10:return se.jsx(Y2,{color:e,translucent:i});case 12:return se.jsx(nw,{color:e,translucent:i});case 20:return se.jsx(fw,{color:e,translucent:i});default:return null}}const hw=[0,45,90,135];function pw({isOpen:o,onClick:e,ref:i}){return se.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:se.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[hw.map(r=>se.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),se.jsx("span",{className:"settings-button__hub"})]})})}const mw='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function gw({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:l}){const u=vt.useRef(null),d=vt.useRef(null);return vt.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=u.current;if(!m)return;const v=Array.from(m.querySelectorAll(mw));if(v.length===0)return;const g=v[0],S=v[v.length-1],E=document.activeElement;if(!m.contains(E)){p.preventDefault(),(p.shiftKey?S:g).focus();return}p.shiftKey&&E===g?(p.preventDefault(),S.focus()):!p.shiftKey&&E===S&&(p.preventDefault(),g.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),se.jsxs("div",{ref:u,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[se.jsxs("div",{className:"settings-dialog__content",children:[se.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:se.jsx("div",{className:"sides-picker__options",children:zm.map((h,p)=>se.jsxs(vt.Fragment,{children:[p>0&&se.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),se.jsxs("span",{className:"sides-picker__option",children:[se.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),se.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),se.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:se.jsx("div",{className:"color-picker__options",children:Fm.map(h=>se.jsxs("span",{className:"color-picker__option",children:[se.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),se.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${fs[h].cssTop.join(" ")})`}})]},h))})}),se.jsxs("label",{className:"translucent-toggle",children:[se.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),se.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),se.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:se.jsx("span",{className:"translucent-toggle__knob"})})]})]}),se.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:se.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[se.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),se.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function _w(){const[o,e]=vt.useState(()=>X3()),[i,r]=vt.useState(!1),l=vt.useRef(null),u=vt.useCallback(h=>{e(p=>({...p,...h}))},[]),d=vt.useCallback(()=>{r(!1),l.current?.focus()},[]);return vt.useEffect(()=>{const h=p=>{if(i||p.ctrlKey||p.altKey||p.metaKey)return;const m=p.key.toLowerCase();m==="s"?e(v=>({...v,sides:$S(zm,v.sides)})):m==="c"?e(v=>({...v,color:$S(Fm,v.color)})):m==="t"&&e(v=>({...v,translucent:!v.translucent}))};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),se.jsxs(se.Fragment,{children:[se.jsx(pw,{ref:l,isOpen:i,onClick:()=>r(!0)}),i&&se.jsx(gw,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:u,onClose:d}),se.jsx(dw,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const NM=document.getElementById("root");if(!NM)throw new Error("Root element was not found.");x1.createRoot(NM).render(se.jsx(vt.StrictMode,{children:se.jsx(_w,{})}));

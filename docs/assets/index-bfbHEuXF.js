(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ah={exports:{}},Tl={};var kv;function r1(){if(kv)return Tl;kv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Tl.Fragment=e,Tl.jsx=i,Tl.jsxs=i,Tl}var qv;function s1(){return qv||(qv=1,Ah.exports=r1()),Ah.exports}var se=s1(),Rh={exports:{}},he={};var Wv;function o1(){if(Wv)return he;Wv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function w(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function U(V,_t,dt){this.props=V,this.context=_t,this.refs=x,this.updater=dt||I}U.prototype.isReactComponent={},U.prototype.setState=function(V,_t){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,_t,"setState")},U.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function G(){}G.prototype=U.prototype;function D(V,_t,dt){this.props=V,this.context=_t,this.refs=x,this.updater=dt||I}var O=D.prototype=new G;O.constructor=D,M(O,U.prototype),O.isPureReactComponent=!0;var L=Array.isArray;function z(){}var T={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function b(V,_t,dt){var B=dt.ref;return{$$typeof:o,type:V,key:_t,ref:B!==void 0?B:null,props:dt}}function C(V,_t){return b(V.type,_t,V.props)}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function W(V){var _t={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(dt){return _t[dt]})}var k=/\/+/g;function Z(V,_t){return typeof V=="object"&&V!==null&&V.key!=null?W(""+V.key):_t.toString(36)}function X(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(z,z):(V.status="pending",V.then(function(_t){V.status==="pending"&&(V.status="fulfilled",V.value=_t)},function(_t){V.status==="pending"&&(V.status="rejected",V.reason=_t)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function q(V,_t,dt,B,nt){var gt=typeof V;(gt==="undefined"||gt==="boolean")&&(V=null);var Rt=!1;if(V===null)Rt=!0;else switch(gt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(V.$$typeof){case o:case e:Rt=!0;break;case S:return Rt=V._init,q(Rt(V._payload),_t,dt,B,nt)}}if(Rt)return nt=nt(V),Rt=B===""?"."+Z(V,0):B,L(nt)?(dt="",Rt!=null&&(dt=Rt.replace(k,"$&/")+"/"),q(nt,_t,dt,"",function(ee){return ee})):nt!=null&&(N(nt)&&(nt=C(nt,dt+(nt.key==null||V&&V.key===nt.key?"":(""+nt.key).replace(k,"$&/")+"/")+Rt)),_t.push(nt)),1;Rt=0;var st=B===""?".":B+":";if(L(V))for(var At=0;At<V.length;At++)B=V[At],gt=st+Z(B,At),Rt+=q(B,_t,dt,gt,nt);else if(At=w(V),typeof At=="function")for(V=At.call(V),At=0;!(B=V.next()).done;)B=B.value,gt=st+Z(B,At++),Rt+=q(B,_t,dt,gt,nt);else if(gt==="object"){if(typeof V.then=="function")return q(X(V),_t,dt,B,nt);throw _t=String(V),Error("Objects are not valid as a React child (found: "+(_t==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":_t)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function j(V,_t,dt){if(V==null)return V;var B=[],nt=0;return q(V,B,"","",function(gt){return _t.call(dt,gt,nt++)}),B}function $(V){if(V._status===-1){var _t=V._result,dt=_t();dt.then(function(B){(V._status===0||V._status===-1)&&(V._status=1,V._result=B,dt.status===void 0&&(dt.status="fulfilled",dt.value=B))},function(B){(V._status===0||V._status===-1)&&(V._status=2,V._result=B,dt.status===void 0&&(dt.status="rejected",dt.reason=B))}),V._status===-1&&(V._status=0,V._result=dt)}if(V._status===1)return V._result.default;throw V._result}var ht=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(_t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Mt(V){var _t=T.T,dt={};dt.types=_t!==null?_t.types:null,T.T=dt;try{var B=V(),nt=T.S;nt!==null&&nt(dt,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(z,ht)}catch(gt){ht(gt)}finally{_t!==null&&dt.types!==null&&(_t.types=dt.types),T.T=_t}}function Lt(V){var _t=T.T;if(_t!==null){var dt=_t.types;dt===null?_t.types=[V]:dt.indexOf(V)===-1&&dt.push(V)}else Mt(Lt.bind(null,V))}var wt={map:j,forEach:function(V,_t,dt){j(V,function(){_t.apply(this,arguments)},dt)},count:function(V){var _t=0;return j(V,function(){_t++}),_t},toArray:function(V){return j(V,function(_t){return _t})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return he.Activity=_,he.Children=wt,he.Component=U,he.Fragment=i,he.Profiler=l,he.PureComponent=D,he.StrictMode=r,he.Suspense=p,he.ViewTransition=v,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,he.__COMPILER_RUNTIME={__proto__:null,c:function(V){return T.H.useMemoCache(V)}},he.addTransitionType=Lt,he.cache=function(V){return function(){return V.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(V,_t,dt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var B=M({},V.props),nt=V.key;if(_t!=null)for(gt in _t.key!==void 0&&(nt=""+_t.key),_t)!P.call(_t,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&_t.ref===void 0||(B[gt]=_t[gt]);var gt=arguments.length-2;if(gt===1)B.children=dt;else if(1<gt){for(var Rt=Array(gt),st=0;st<gt;st++)Rt[st]=arguments[st+2];B.children=Rt}return b(V.type,nt,B)},he.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},he.createElement=function(V,_t,dt){var B,nt={},gt=null;if(_t!=null)for(B in _t.key!==void 0&&(gt=""+_t.key),_t)P.call(_t,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(nt[B]=_t[B]);var Rt=arguments.length-2;if(Rt===1)nt.children=dt;else if(1<Rt){for(var st=Array(Rt),At=0;At<Rt;At++)st[At]=arguments[At+2];nt.children=st}if(V&&V.defaultProps)for(B in Rt=V.defaultProps,Rt)nt[B]===void 0&&(nt[B]=Rt[B]);return b(V,gt,nt)},he.createRef=function(){return{current:null}},he.forwardRef=function(V){return{$$typeof:h,render:V}},he.isValidElement=N,he.lazy=function(V){return{$$typeof:S,_payload:{_status:-1,_result:V},_init:$}},he.memo=function(V,_t){return{$$typeof:m,type:V,compare:_t===void 0?null:_t}},he.startTransition=Mt,he.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},he.use=function(V){return T.H.use(V)},he.useActionState=function(V,_t,dt){return T.H.useActionState(V,_t,dt)},he.useCallback=function(V,_t){return T.H.useCallback(V,_t)},he.useContext=function(V){return T.H.useContext(V)},he.useDebugValue=function(){},he.useDeferredValue=function(V,_t){return T.H.useDeferredValue(V,_t)},he.useEffect=function(V,_t){return T.H.useEffect(V,_t)},he.useEffectEvent=function(V){return T.H.useEffectEvent(V)},he.useId=function(){return T.H.useId()},he.useImperativeHandle=function(V,_t,dt){return T.H.useImperativeHandle(V,_t,dt)},he.useInsertionEffect=function(V,_t){return T.H.useInsertionEffect(V,_t)},he.useLayoutEffect=function(V,_t){return T.H.useLayoutEffect(V,_t)},he.useMemo=function(V,_t){return T.H.useMemo(V,_t)},he.useOptimistic=function(V,_t){return T.H.useOptimistic(V,_t)},he.useReducer=function(V,_t,dt){return T.H.useReducer(V,_t,dt)},he.useRef=function(V){return T.H.useRef(V)},he.useState=function(V){return T.H.useState(V)},he.useSyncExternalStore=function(V,_t,dt){return T.H.useSyncExternalStore(V,_t,dt)},he.useTransition=function(){return T.H.useTransition()},he.version="19.3.0",he}var Yv;function Sm(){return Yv||(Yv=1,Rh.exports=o1()),Rh.exports}var vt=Sm(),Ch={exports:{}},bl={},wh={exports:{}},Dh={};var Zv;function l1(){return Zv||(Zv=1,(function(o){function e(X,q){var j=X.length;X.push(q);t:for(;0<j;){var $=j-1>>>1,ht=X[$];if(0<l(ht,q))X[$]=q,X[j]=ht,j=$;else break t}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var q=X[0],j=X.pop();if(j!==q){X[0]=j;t:for(var $=0,ht=X.length,Mt=ht>>>1;$<Mt;){var Lt=2*($+1)-1,wt=X[Lt],V=Lt+1,_t=X[V];if(0>l(wt,j))V<ht&&0>l(_t,wt)?(X[$]=_t,X[V]=j,$=V):(X[$]=wt,X[Lt]=j,$=Lt);else if(V<ht&&0>l(_t,j))X[$]=_t,X[V]=j,$=V;else break t}}return q}function l(X,q){var j=X.sortIndex-q.sortIndex;return j!==0?j:X.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],S=1,_=null,v=3,E=!1,w=!1,I=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function D(X){for(var q=i(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=X)r(m),q.sortIndex=q.expirationTime,e(p,q);else break;q=i(m)}}function O(X){if(I=!1,D(X),!w)if(i(p)!==null)w=!0,L||(L=!0,N());else{var q=i(m);q!==null&&Z(O,q.startTime-X)}}var L=!1,z=-1,T=5,P=-1;function b(){return M?!0:!(o.unstable_now()-P<T)}function C(){if(M=!1,L){var X=o.unstable_now();P=X;var q=!0;try{t:{w=!1,I&&(I=!1,U(z),z=-1),E=!0;var j=v;try{e:{for(D(X),_=i(p);_!==null&&!(_.expirationTime>X&&b());){var $=_.callback;if(typeof $=="function"){_.callback=null,v=_.priorityLevel;var ht=$(_.expirationTime<=X);if(X=o.unstable_now(),typeof ht=="function"){_.callback=ht,D(X),q=!0;break e}_===i(p)&&r(p),D(X)}else r(p);_=i(p)}if(_!==null)q=!0;else{var Mt=i(m);Mt!==null&&Z(O,Mt.startTime-X),q=!1}}break t}finally{_=null,v=j,E=!1}q=void 0}}finally{q?N():L=!1}}}var N;if(typeof G=="function")N=function(){G(C)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,k=W.port2;W.port1.onmessage=C,N=function(){k.postMessage(null)}}else N=function(){x(C,0)};function Z(X,q){z=x(function(){X(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(X){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var j=v;v=q;try{return X()}finally{v=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,q){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var j=v;v=X;try{return q()}finally{v=j}},o.unstable_scheduleCallback=function(X,q,j){var $=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?$+j:$):j=$,X){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=j+ht,X={id:S++,callback:q,priorityLevel:X,startTime:j,expirationTime:ht,sortIndex:-1},j>$?(X.sortIndex=j,e(m,X),i(p)===null&&X===i(m)&&(I?(U(z),z=-1):I=!0,Z(O,j-$))):(X.sortIndex=ht,e(p,X),w||E||(w=!0,L||(L=!0,N()))),X},o.unstable_shouldYield=b,o.unstable_wrapCallback=function(X){var q=v;return function(){var j=v;v=q;try{return X.apply(this,arguments)}finally{v=j}}}})(Dh)),Dh}var Kv;function c1(){return Kv||(Kv=1,wh.exports=l1()),wh.exports}var Nh={exports:{}},Pn={};var Qv;function u1(){if(Qv)return Pn;Qv=1;var o=Sm();function e(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(S,_,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:E===d?d:""+E,children:S,containerInfo:_,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(S){return{$$typeof:u,_reason:S}},Pn.createPortal=function(S,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return h(S,_,null,v)},Pn.flushSync=function(S){var _=p.T,v=r.p;try{if(p.T=null,r.p=2,S)return S()}finally{p.T=_,r.p=v,r.d.f()}},Pn.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(S,_))},Pn.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Pn.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin),w=typeof _.integrity=="string"?_.integrity:void 0,I=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?r.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:w,fetchPriority:I}):v==="script"&&r.d.X(S,{crossOrigin:E,integrity:w,fetchPriority:I,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Pn.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=m(_.as,_.crossOrigin);r.d.M(S,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(S)},Pn.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,E=m(v,_.crossOrigin);r.d.L(S,v,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Pn.preloadModule=function(S,_){if(typeof S=="string")if(_){var v=m(_.as,_.crossOrigin);r.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(S)},Pn.requestFormReset=function(S){r.d.r(S)},Pn.unstable_batchedUpdates=function(S,_){return S(_)},Pn.useFormState=function(S,_,v){return p.H.useFormState(S,_,v)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var Jv;function f1(){if(Jv)return Nh.exports;Jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Nh.exports=u1(),Nh.exports}var jv;function d1(){if(jv)return bl;jv=1;var o=c1(),e=Sm(),i=f1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),t;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,R=c.child;R;){if(R===a){g=!0,a=c,s=f;break}if(R===s){g=!0,s=c,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,s=c;break}if(R===s){g=!0,s=f,a=c;break}R=R.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,s,c,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,s,c,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function E(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function w(t){var n=[null,null],a=v(t);return a===null||I(n,t,a.child,{foundSelf:!1}),n}function I(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&I(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,U=null;function G(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function D(t,n,a){return t===a?(U=t,!1):t===n?(U!==null&&(x=t),!0):!1}function O(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function L(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,T=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Mt=Symbol.for("react.activity"),Lt=Symbol.for("react.legacy_hidden"),wt=Symbol.for("react.memo_cache_sentinel"),V=Symbol.for("react.view_transition"),_t=Symbol.for("react.recoverable"),dt=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=dt&&t[dt]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===nt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case W:return"Profiler";case N:return"StrictMode";case q:return"Suspense";case j:return"SuspenseList";case Mt:return"Activity";case V:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case Z:return t.displayName||"Context";case k:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var Rt=Array.isArray,st=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ne=[],jt=-1;function kt(t){return{current:t}}function Nt(t){0>jt||(t.current=ne[jt],ne[jt]=null,jt--)}function ie(t,n){jt++,ne[jt]=t.current,t.current=n}var Se=kt(null),Le=kt(null),de=kt(null),ce=kt(null);function Y(t,n){switch(ie(de,n),ie(Le,t),ie(Se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$_(n),t=tv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(Se),ie(Se,t)}function sn(){Nt(Se),Nt(Le),Nt(de)}function He(t){var n=t.memoizedState;n!==null&&(qs._currentValue=n.memoizedState,ie(ce,t)),n=Se.current;var a=tv(n,t.type);n!==a&&(ie(Le,t),ie(Se,a))}function F(t){Le.current===t&&(Nt(Se),Nt(Le)),ce.current===t&&(Nt(ce),qs._currentValue=ee)}var y,rt;function ft(t){if(y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);y=n&&n[1]||"",rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y+t+rt}var St=!1;function Dt(t,n){if(!t||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(Ft){var et=Ft}Reflect.construct(t,[],Et)}else{try{Et.call()}catch(Ft){et=Ft}Et=!1;try{var ut=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Et=!0,new t}finally{Et&&(ut!==void 0?Object.defineProperty(t.prototype,"props",ut):delete t.prototype.props)}}}else{try{throw Error()}catch(Ft){et=Ft}(Et=t())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(Ft){if(Ft&&et&&typeof Ft.stack=="string")return[Ft.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var H=g.split(`
`),at=R.split(`
`);for(c=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;c<at.length&&!at[c].includes("DetermineComponentFrameRoot");)c++;if(s===H.length||c===at.length)for(s=H.length-1,c=at.length-1;1<=s&&0<=c&&H[s]!==at[c];)c--;for(;1<=s&&0<=c;s--,c--)if(H[s]!==at[c]){if(s!==1||c!==1)do if(s--,c--,0>c||H[s]!==at[c]){var pt=`
`+H[s].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=s&&0<=c);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ft(a):""}function Pt(t,n){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return Dt(t.type,!1);case 11:return Dt(t.type.render,!1);case 1:return Dt(t.type,!0);case 31:return ft("Activity");case 30:return ft("ViewTransition");default:return""}}function xt(t){try{var n="",a=null;do n+=Pt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var bt=Object.prototype.hasOwnProperty,Ot=o.unstable_scheduleCallback,re=o.unstable_cancelCallback,Ht=o.unstable_shouldYield,Bt=o.unstable_requestPaint,Yt=o.unstable_now,le=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,tt=o.unstable_UserBlockingPriority,Ut=o.unstable_NormalPriority,Tt=o.unstable_LowPriority,It=o.unstable_IdlePriority,Wt=o.log,Ct=o.unstable_setDisableYieldValue,ae=null,qt=null;function Oe(t){if(typeof Wt=="function"&&Ct(t),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(ae,t)}catch{}}var ge=Math.clz32?Math.clz32:tf,si=Math.log,xi=Math.LN2;function tf(t){return t>>>=0,t===0?32:31-(si(t)/xi|0)|0}var os=256,Rr=262144,ka=4194304;function ga(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=ga(s):(g&=R,g!==0?c=ga(g):a||(a=R&~t,a!==0&&(c=ga(a))))):(R=s&~f,R!==0?c=ga(R):g!==0?c=ga(g):a||(a=s&~t,a!==0&&(c=ga(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function qa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ki(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-ge(a),c=1<<s;n|=t[s],a&=~c}return n}function Do(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var t=ka;return ka<<=1,(ka&62914560)===0&&(ka=4194304),t}function ls(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function qi(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wl(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,at=t.hiddenUpdates;for(a=g&~a;0<a;){var pt=31-ge(a),Et=1<<pt;R[pt]=0,H[pt]=-1;var et=at[pt];if(et!==null)for(at[pt]=null,pt=0;pt<et.length;pt++){var ut=et[pt];ut!==null&&(ut.lane&=-536870913)}a&=~Et}s!==0&&wr(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function wr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ge(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Uo(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ge(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Lo(t,n){var a=n&-n;return a=(a&42)!==0?1:Oo(a),(a&(t.suspendedLanes|n))!==0?0:a}function Oo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Po(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yl(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:zv(t.type))}function Zl(t,n){var a=At.p;try{return At.p=t,n()}finally{At.p=a}}var Mi=Math.random().toString(36).slice(2),A="__reactFiber$"+Mi,K="__reactProps$"+Mi,mt="__reactContainer$"+Mi,lt="__reactEvents$"+Mi,ct="__reactListeners$"+Mi,Gt="__reactHandles$"+Mi,Zt="__reactResources$"+Mi,zt="__reactMarker$"+Mi,Jt="__reactLoad$"+Mi;function $t(t){delete t[A],delete t[K],delete t[ct],delete t[Gt]}function fe(t){var n;if(n=t[A])return n;for(var a=t.parentNode;a;){if(n=a[mt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=_v(t);t!==null;){if(a=t[A])return a;t=_v(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[A]||t[mt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ae(t){var n=t[Zt];return n||(n=t[Zt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ee(t){t[zt]=!0}function Je(t){t[Jt]=void 0}var qe=new Set,Mn={};function Vt(t,n){cn(t,n),cn(t+"Capture",n)}function cn(t,n){for(Mn[t]=n,t=0;t<n.length;t++)qe.add(n[t])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qn={},oi={};function Wi(t){return bt.call(oi,t)?!0:bt.call(qn,t)?!1:Pe.test(t)?oi[t]=!0:(qn[t]=!0,!1)}var Te=!1;function Xe(){var t=Te;return Te=!1,t}function en(t,n,a){if(Wi(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function li(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function De(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _a(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kl(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ef(t){if(!t._valueTracker){var n=_a(t)?"checked":"value";t._valueTracker=Kl(t,n,""+t[n])}}function Gm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=_a(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var AM=/[\n"\\]/g;function yi(t){return t.replace(AM,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function nf(t,n,a,s,c,f,g,R){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+un(n)):t.value!==""+un(n)&&(t.value=""+un(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?af(t,un(t.value)):af(t,un(n)):a!=null?af(t,un(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+un(R):t.removeAttribute("name")}function Vm(t,n,a,s,c,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ef(t);return}a=a!=null?""+un(a):"",n=n!=null?""+un(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ef(t)}function af(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function cs(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Xm(t,n,a){if(n!=null&&(n=""+un(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+un(a):""}function km(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=un(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ef(t)}function us(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var RM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||RM.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Wm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Te=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(qm(t,c,s),Te=!0)}else for(var f in n)n.hasOwnProperty(f)&&qm(t,f,n[f])}function rf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(t){return wM.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var sf=null;function of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fs=null,ds=null;function Ym(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[K]||null;t:switch(t=n.stateNode,n.type){case"input":if(nf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[K]||null;if(!c)throw Error(r(90));nf(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Gm(s)}break t;case"textarea":Xm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&cs(t,!!a.multiple,n,!1)}}}var lf=!1;function Zm(t,n,a){if(lf)return t(n,a);lf=!0;try{var s=t(n);return s}finally{if(lf=!1,(fs!==null||ds!==null)&&(Qc(),fs&&(n=fs,t=ds,ds=fs=null,Ym(n),t)))for(n=0;n<t.length;n++)Ym(t[n])}}function Io(t,n){var a=t.stateNode;if(a===null)return null;var s=a[K]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=!1;if(va)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){cf=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{cf=!1}var Wa=null,uf=null,Jl=null;function Km(){if(Jl)return Jl;var t,n=uf,a=n.length,s,c="value"in Wa?Wa.value:Wa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Jl=c.slice(t,1<s?1-s:void 0)}function jl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function Qm(){return!1}function Wn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$l:Qm,this.isPropagationStopped=Qm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=Wn(Ya),Fo=z({},Ya,{view:0,detail:0}),DM=Wn(Fo),ff,df,Bo,ec=z({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(ff=t.screenX-Bo.screenX,df=t.screenY-Bo.screenY):df=ff=0,Bo=t),ff)},movementY:function(t){return"movementY"in t?t.movementY:df}}),Jm=Wn(ec),NM=z({},ec,{dataTransfer:0}),UM=Wn(NM),LM=z({},Fo,{relatedTarget:0}),hf=Wn(LM),OM=z({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),PM=Wn(OM),IM=z({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zM=Wn(IM),FM=z({},Ya,{data:0}),jm=Wn(FM),BM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VM(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=GM[t])?!!n[t]:!1}function pf(){return VM}var XM=z({},Fo,{key:function(t){if(t.key){var n=BM[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kM=Wn(XM),qM=z({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Wn(qM),WM=z({},Ya,{submitter:0}),YM=Wn(WM),ZM=z({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),KM=Wn(ZM),QM=z({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),JM=Wn(QM),jM=z({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$M=Wn(jM),ty=z({},Ya,{newState:0,oldState:0,source:0}),ey=Wn(ty),ny=[9,13,27,32],mf=va&&"CompositionEvent"in window,Ho=null;va&&"documentMode"in document&&(Ho=document.documentMode);var iy=va&&"TextEvent"in window&&!Ho,t0=va&&(!mf||Ho&&8<Ho&&11>=Ho),e0=" ",n0=!1;function i0(t,n){switch(t){case"keyup":return ny.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function ay(t,n){switch(t){case"compositionend":return a0(n);case"keypress":return n.which!==32?null:(n0=!0,e0);case"textInput":return t=n.data,t===e0&&n0?null:t;default:return null}}function ry(t,n){if(hs)return t==="compositionend"||!mf&&i0(t,n)?(t=Km(),Jl=uf=Wa=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return t0&&n.locale!=="ko"?null:n.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function r0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sy[t.type]:n==="textarea"}function s0(t,n,a,s){fs?ds?ds.push(s):ds=[s]:fs=s,n=nu(n,"onChange"),0<n.length&&(a=new tc("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Go=null,Vo=null;function oy(t){Y_(t,0)}function nc(t){var n=Kt(t);if(Gm(n))return t}function o0(t,n){if(t==="change")return n}var l0=!1;if(va){var gf;if(va){var _f="oninput"in document;if(!_f){var c0=document.createElement("div");c0.setAttribute("oninput","return;"),_f=typeof c0.oninput=="function"}gf=_f}else gf=!1;l0=gf&&(!document.documentMode||9<document.documentMode)}function u0(){Go&&(Go.detachEvent("onpropertychange",f0),Vo=Go=null)}function f0(t){if(t.propertyName==="value"&&nc(Vo)){var n=[];s0(n,Vo,t,of(t)),Zm(oy,n)}}function ly(t,n,a){t==="focusin"?(u0(),Go=n,Vo=a,Go.attachEvent("onpropertychange",f0)):t==="focusout"&&u0()}function cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(Vo)}function uy(t,n){if(t==="click")return nc(n)}function fy(t,n){if(t==="input"||t==="change")return nc(n)}function dy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ci=typeof Object.is=="function"?Object.is:dy;function Xo(t,n){if(ci(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!bt.call(n,c)||!ci(t[c],n[c]))return!1}return!0}function vf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function d0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function h0(t,n){var a=d0(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=d0(a)}}function p0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?p0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function m0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vf(t.document)}return n}function Sf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var hy=va&&"documentMode"in document&&11>=document.documentMode,ps=null,xf=null,ko=null,Mf=!1;function g0(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mf||ps==null||ps!==vf(s)||(s=ps,"selectionStart"in s&&Sf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ko&&Xo(ko,s)||(ko=s,s=nu(xf,"onSelect"),0<s.length&&(n=new tc("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ps)))}function Dr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ms={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},yf={},_0={};va&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Nr(t){if(yf[t])return yf[t];if(!ms[t])return t;var n=ms[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _0)return yf[t]=n[a];return t}var v0=Nr("animationend"),S0=Nr("animationiteration"),x0=Nr("animationstart"),py=Nr("transitionrun"),my=Nr("transitionstart"),gy=Nr("transitioncancel"),M0=Nr("transitionend"),y0=new Map,Ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ef.push("scrollEnd");function Ui(t,n){y0.set(t,n),Vt(n,[t])}var _y=0;function Sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ii.identifierPrefix;var a=_y++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function E0(t){if(t==null||typeof t=="string")return t;var n=null,a=Ps;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function xa(t,n){return t=E0(t),n=E0(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ic=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ei=[],gs=0,Tf=0;function ac(){for(var t=gs,n=Tf=gs=0;n<t;){var a=Ei[n];Ei[n++]=null;var s=Ei[n];Ei[n++]=null;var c=Ei[n];Ei[n++]=null;var f=Ei[n];if(Ei[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&T0(a,c,f)}}function rc(t,n,a,s){Ei[gs++]=t,Ei[gs++]=n,Ei[gs++]=a,Ei[gs++]=s,Tf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function bf(t,n,a,s){return rc(t,n,a,s),sc(t)}function Ur(t,n){return rc(t,null,null,n),sc(t)}function T0(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ge(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function sc(t){if(50<dl)throw dl=0,Kc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _s={};function vy(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,s){return new vy(t,n,a,s)}function Af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ma(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function b0(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function oc(t,n,a,s,c,f){var g=0;if(s=t,typeof s=="function")Af(s)&&(g=1);else if(typeof s=="string")g=WE(t,a,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Mt:return t=$n(31,a,n,c),t.elementType=Mt,t.lanes=f,t;case C:return Lr(a.children,c,f,n);case N:g=8,c|=24;break;case W:return t=$n(12,a,n,c|2),t.elementType=W,t.lanes=f,t;case q:return t=$n(13,a,n,c),t.elementType=q,t.lanes=f,t;case j:return t=$n(19,a,n,c),t.elementType=j,t.lanes=f,t;case Lt:case V:return t=c|32,t=$n(30,a,n,t),t.elementType=V,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Z:g=10;break t;case k:g=9;break t;case X:g=11;break t;case $:g=14;break t;case ht:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=$n(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Lr(t,n,a,s){return t=$n(7,t,s,n),t.lanes=a,t}function Rf(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function A0(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function Cf(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var R0=new WeakMap;function Ti(t,n){if(typeof t=="object"&&t!==null){var a=R0.get(t);return a!==void 0?a:(n={value:t,source:n,stack:xt(n)},R0.set(t,n),n)}return{value:t,source:n,stack:xt(n)}}var vs=[],Ss=0,lc=null,qo=0,bi=[],Ai=0,Za=null,Zi=1,Ki="";function ya(t,n){vs[Ss++]=qo,vs[Ss++]=lc,lc=t,qo=n}function C0(t,n,a){bi[Ai++]=Zi,bi[Ai++]=Ki,bi[Ai++]=Za,Za=t;var s=Zi;t=Ki;var c=32-ge(s)-1;s&=~(1<<c),a+=1;var f=32-ge(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Zi=1<<32-ge(n)+c|a<<c|s,Ki=f+t}else Zi=1<<f|a<<c|s,Ki=t}function cc(t){t.return!==null&&(ya(t,1),C0(t,1,0))}function wf(t){for(;t===lc;)lc=vs[--Ss],vs[Ss]=null,qo=vs[--Ss],vs[Ss]=null;for(;t===Za;)Za=bi[--Ai],bi[Ai]=null,Ki=bi[--Ai],bi[Ai]=null,Zi=bi[--Ai],bi[Ai]=null}function w0(t,n){bi[Ai++]=Zi,bi[Ai++]=Ki,bi[Ai++]=Za,Zi=n.id,Ki=n.overflow,Za=t}var bn=null,nn=null,be=!1,Ka=null,Ri=!1,Df=Error(r(519));function Qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(Ti(n,t)),Df}function D0(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[A]=t,n[K]=s,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<pl.length;a++)Ce(pl[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Vm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),km(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||J_(n.textContent,a)?(s.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),s.onScroll!=null&&Ce("scroll",n),s.onScrollEnd!=null&&Ce("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Qa(t,!0)}function uc(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:bn=bn.return}}function xs(t){if(t!==bn)return!1;if(!be)return uc(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||sh(t.type,t.memoizedProps)),a=!a),a&&nn&&Qa(t),uc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=gv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=gv(t)}else n===27?(n=nn,dr(t.type)?(t=mh,mh=null,nn=t):nn=n):nn=bn?wi(t.stateNode.nextSibling):null;return!0}function Or(){nn=bn=null,be=!1}function Nf(){var t=Ka;return t!==null&&(ni===null?ni=t:ni.push.apply(ni,t),Ka=null),t}function Wo(t){Ka===null?Ka=[t]:Ka.push(t)}var Uf=kt(null),Pr=null,Ea=null;function Ja(t,n,a){ie(Uf,n._currentValue),n._currentValue=a}function Ta(t){t._currentValue=Uf.current,Nt(Uf)}function fc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Lf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),fc(f.return,a,t),s||(g=null);break t}f=R.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),fc(g,a,t),g=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),fc(c.return,a,t),g=c.child,g=g!==null?g.sibling:null):g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Ir(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var R=c.type;ci(c.pendingProps.value,g.value)||(t!==null?t.push(R):t=[R])}}else if(c===ce.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(qs):t=[qs])}c=c.return}return t!==null&&Lf(n,t,a,s),n.flags|=262144,t!==null}function dc(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zr(t){Pr=t,Ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return N0(Pr,t)}function hc(t,n){return Pr===null&&zr(t),N0(t,n)}function N0(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ea===null){if(t===null)throw Error(r(308));Ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ea=Ea.next=n;return a}var Sy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xy=o.unstable_scheduleCallback,My=o.unstable_NormalPriority,gn={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Of(){return{controller:new Sy,data:new Map,refCount:0}}function Yo(t){t.refCount--,t.refCount===0&&xy(My,function(){t.controller.abort()})}function U0(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Zo=null;function yy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ko=null,Pf=0,Fr=0,Ms=null;function Ey(t,n){if(Ko===null){var a=Ko=[];Pf=0,Fr=Jd(),Ms={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Pf++,n.then(L0,L0),n}function L0(){if(--Pf===0&&(Zo=null,Ko!==null)){Ms!==null&&(Ms.status="fulfilled");var t=Ko;Ko=null,Fr=0,Ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ty(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var O0=st.S;st.S=function(t,n){if(A_=Yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ey(t,n),Zo!==null)for(var a=Bs;a!==null;)U0(a,Zo),a=a.next;if(a=t.types,a!==null){for(var s=Bs;s!==null;)U0(s,a),s=s.next;if(Fr!==0){s=Zo,s===null&&(s=Zo=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}O0!==null&&O0(t,n)};var Br=kt(null);function If(){var t=Br.current;return t!==null?t:tn.pooledCache}function pc(t,n){n===null?ie(Br,Br.current):ie(Br,n.pool)}function P0(){var t=If();return t===null?null:{parent:gn._currentValue,pool:t}}var ys=Error(r(460)),zf=Error(r(474)),mc=Error(r(542)),gc={then:function(){}};function I0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function z0(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,B0(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=tn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,B0(t),t}throw Gr=n,ys}}function Hr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gr=a,ys):a}}var Gr=null;function F0(){if(Gr===null)throw Error(r(459));var t=Gr;return Gr=null,t}function B0(t){if(t===ys||t===mc)throw Error(r(483))}var Es=null,Qo=0;function _c(t){var n=Qo;return Qo+=1,Es===null&&(Es=[]),z0(Es,t,n)}function ja(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vc(t,n){throw n.$$typeof===T?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function H0(t){function n(it,J){if(t){var ot=it.deletions;ot===null?(it.deletions=[J],it.flags|=16):ot.push(J)}}function a(it,J){if(!t)return null;for(;J!==null;)n(it,J),J=J.sibling;return null}function s(it){for(var J=new Map;it!==null;)it.key===null?J.set(it.index,it):J.set(it.key,it),it=it.sibling;return J}function c(it,J){return it=Ma(it,J),it.index=0,it.sibling=null,it}function f(it,J,ot){return it.index=ot,t?(ot=it.alternate,ot!==null?(ot=ot.index,ot<J?(it.flags|=2,J):ot):(it.flags|=134217730,J)):(it.flags|=1048576,J)}function g(it){return t&&it.alternate===null&&(it.flags|=134217730),it}function R(it,J,ot,yt){return J===null||J.tag!==6?(J=Rf(ot,it.mode,yt),J.return=it,J):(J=c(J,ot),J.return=it,J)}function H(it,J,ot,yt){var Qt=ot.type;return Qt===C?(it=pt(it,J,ot.props.children,yt,ot.key),ja(it,ot),it):J!==null&&(J.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===ht&&Hr(Qt)===J.type)?(J=c(J,ot.props),ja(J,ot),J.return=it,J):(J=oc(ot.type,ot.key,ot.props,null,it.mode,yt),ja(J,ot),J.return=it,J)}function at(it,J,ot,yt){return J===null||J.tag!==4||J.stateNode.containerInfo!==ot.containerInfo||J.stateNode.implementation!==ot.implementation?(J=Cf(ot,it.mode,yt),J.return=it,J):(J=c(J,ot.children||[]),J.return=it,J)}function pt(it,J,ot,yt,Qt){return J===null||J.tag!==7?(J=Lr(ot,it.mode,yt,Qt),J.return=it,J):(J=c(J,ot),J.return=it,J)}function Et(it,J,ot){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=Rf(""+J,it.mode,ot),J.return=it,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case P:return ot=oc(J.type,J.key,J.props,null,it.mode,ot),ja(ot,J),ot.return=it,ot;case b:return J=Cf(J,it.mode,ot),J.return=it,J;case ht:return J=Hr(J),Et(it,J,ot)}if(Rt(J)||B(J))return J=Lr(J,it.mode,ot,null),J.return=it,J;if(typeof J.then=="function")return Et(it,_c(J),ot);if(J.$$typeof===Z)return Et(it,hc(it,J),ot);vc(it,J)}return null}function et(it,J,ot,yt){var Qt=J!==null?J.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return Qt!==null?null:R(it,J,""+ot,yt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case P:return ot.key===Qt?H(it,J,ot,yt):null;case b:return ot.key===Qt?at(it,J,ot,yt):null;case ht:return ot=Hr(ot),et(it,J,ot,yt)}if(Rt(ot)||B(ot))return Qt!==null?null:pt(it,J,ot,yt,null);if(typeof ot.then=="function")return et(it,J,_c(ot),yt);if(ot.$$typeof===Z)return et(it,J,hc(it,ot),yt);vc(it,ot)}return null}function ut(it,J,ot,yt,Qt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return it=it.get(ot)||null,R(J,it,""+yt,Qt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case P:return it=it.get(yt.key===null?ot:yt.key)||null,H(J,it,yt,Qt);case b:return it=it.get(yt.key===null?ot:yt.key)||null,at(J,it,yt,Qt);case ht:return yt=Hr(yt),ut(it,J,ot,yt,Qt)}if(Rt(yt)||B(yt))return it=it.get(ot)||null,pt(J,it,yt,Qt,null);if(typeof yt.then=="function")return ut(it,J,ot,_c(yt),Qt);if(yt.$$typeof===Z)return ut(it,J,ot,hc(J,yt),Qt);vc(J,yt)}return null}function Ft(it,J,ot,yt){for(var Qt=null,Ue=null,oe=J,ue=J=0,Sn=null;oe!==null&&ue<ot.length;ue++){oe.index>ue?(Sn=oe,oe=null):Sn=oe.sibling;var Fe=et(it,oe,ot[ue],yt);if(Fe===null){oe===null&&(oe=Sn);break}t&&oe&&Fe.alternate===null&&n(it,oe),J=f(Fe,J,ue),Ue===null?Qt=Fe:Ue.sibling=Fe,Ue=Fe,oe=Sn}if(ue===ot.length)return a(it,oe),be&&ya(it,ue),Qt;if(oe===null){for(;ue<ot.length;ue++)oe=Et(it,ot[ue],yt),oe!==null&&(J=f(oe,J,ue),Ue===null?Qt=oe:Ue.sibling=oe,Ue=oe);return be&&ya(it,ue),Qt}for(oe=s(oe);ue<ot.length;ue++)Sn=ut(oe,it,ue,ot[ue],yt),Sn!==null&&(t&&(Fe=Sn.alternate,Fe!==null&&oe.delete(Fe.key===null?ue:Fe.key)),J=f(Sn,J,ue),Ue===null?Qt=Sn:Ue.sibling=Sn,Ue=Sn);return t&&oe.forEach(function(_r){return n(it,_r)}),be&&ya(it,ue),Qt}function te(it,J,ot,yt){if(ot==null)throw Error(r(151));for(var Qt=null,Ue=null,oe=J,ue=J=0,Sn=null,Fe=ot.next();oe!==null&&!Fe.done;ue++,Fe=ot.next()){oe.index>ue?(Sn=oe,oe=null):Sn=oe.sibling;var _r=et(it,oe,Fe.value,yt);if(_r===null){oe===null&&(oe=Sn);break}t&&oe&&_r.alternate===null&&n(it,oe),J=f(_r,J,ue),Ue===null?Qt=_r:Ue.sibling=_r,Ue=_r,oe=Sn}if(Fe.done)return a(it,oe),be&&ya(it,ue),Qt;if(oe===null){for(;!Fe.done;ue++,Fe=ot.next())Fe=Et(it,Fe.value,yt),Fe!==null&&(J=f(Fe,J,ue),Ue===null?Qt=Fe:Ue.sibling=Fe,Ue=Fe);return be&&ya(it,ue),Qt}for(oe=s(oe);!Fe.done;ue++,Fe=ot.next())Fe=ut(oe,it,ue,Fe.value,yt),Fe!==null&&(t&&(Sn=Fe.alternate,Sn!==null&&oe.delete(Sn.key===null?ue:Sn.key)),J=f(Fe,J,ue),Ue===null?Qt=Fe:Ue.sibling=Fe,Ue=Fe);return t&&oe.forEach(function(a1){return n(it,a1)}),be&&ya(it,ue),Qt}function Me(it,J,ot,yt){if(typeof ot=="object"&&ot!==null&&ot.type===C&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case P:t:{for(var Qt=ot.key;J!==null;){if(J.key===Qt){if(Qt=ot.type,Qt===C){if(J.tag===7){a(it,J.sibling),yt=c(J,ot.props.children),ja(yt,ot),yt.return=it,it=yt;break t}}else if(J.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===ht&&Hr(Qt)===J.type){a(it,J.sibling),yt=c(J,ot.props),ja(yt,ot),yt.return=it,it=yt;break t}a(it,J);break}else n(it,J);J=J.sibling}ot.type===C?(yt=Lr(ot.props.children,it.mode,yt,ot.key),ja(yt,ot),yt.return=it,it=yt):(yt=oc(ot.type,ot.key,ot.props,null,it.mode,yt),ja(yt,ot),yt.return=it,it=yt)}return g(it);case b:t:{for(Qt=ot.key;J!==null;){if(J.key===Qt)if(J.tag===4&&J.stateNode.containerInfo===ot.containerInfo&&J.stateNode.implementation===ot.implementation){a(it,J.sibling),yt=c(J,ot.children||[]),yt.return=it,it=yt;break t}else{a(it,J);break}else n(it,J);J=J.sibling}yt=Cf(ot,it.mode,yt),yt.return=it,it=yt}return g(it);case ht:return ot=Hr(ot),Me(it,J,ot,yt)}if(Rt(ot))return Ft(it,J,ot,yt);if(B(ot)){if(Qt=B(ot),typeof Qt!="function")throw Error(r(150));return ot=Qt.call(ot),te(it,J,ot,yt)}if(typeof ot.then=="function")return Me(it,J,_c(ot),yt);if(ot.$$typeof===Z)return Me(it,J,hc(it,ot),yt);vc(it,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,J!==null&&J.tag===6?(a(it,J.sibling),yt=c(J,ot),yt.return=it,it=yt):(a(it,J),yt=Rf(ot,it.mode,yt),yt.return=it,it=yt),g(it)):a(it,J)}return function(it,J,ot,yt){try{Qo=0;var Qt=Me(it,J,ot,yt);return Es=null,Qt}catch(oe){if(oe===ys||oe===mc)throw oe;var Ue=$n(29,oe,null,it.mode);return Ue.lanes=yt,Ue.return=it,Ue}}}var Vr=H0(!0),G0=H0(!1),$a=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function tr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function er(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(ke&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=sc(t),T0(t,null,a),n}return rc(t,s,n,a),sc(t)}function Jo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Uo(t,a)}}function Hf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gf=!1;function jo(){if(Gf){var t=Ms;if(t!==null)throw t}}function $o(t,n,a,s){Gf=!1;var c=t.updateQueue;$a=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var H=R,at=H.next;H.next=null,g===null?f=at:g.next=at,g=H;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==g&&(R===null?pt.firstBaseUpdate=at:R.next=at,pt.lastBaseUpdate=H))}if(f!==null){var Et=c.baseState;g=0,pt=at=H=null,R=f;do{var et=R.lane&-536870913,ut=et!==R.lane;if(ut?(Ne&et)===et:(s&et)===et){et!==0&&et===Fr&&(Gf=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Ft=t,te=R;et=n;var Me=a;switch(te.tag){case 1:if(Ft=te.payload,typeof Ft=="function"){Et=Ft.call(Me,Et,et);break t}Et=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=te.payload,et=typeof Ft=="function"?Ft.call(Me,Et,et):Ft,et==null)break t;Et=z({},Et,et);break t;case 2:$a=!0}}et=R.callback,et!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[et]:ut.push(et))}else ut={lane:et,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(at=pt=ut,H=Et):pt=pt.next=ut,g|=et;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);pt===null&&(H=Et),c.baseState=H,c.firstBaseUpdate=at,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),lr|=g,t.lanes=g,t.memoizedState=Et}}function V0(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function X0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)V0(a[t],n)}var nr=kt(null),Sc=kt(0);function k0(t,n){t=wa,ie(Sc,t),ie(nr,n),wa=t|n.baseLanes}function Vf(){ie(Sc,wa),ie(nr,nr.current)}function Xf(){wa=Sc.current,Nt(nr),Nt(Sc)}var Nn=kt(null),Bn=null;function ir(t){var n=t.alternate;ie(Un,Un.current&1),ie(Nn,t),Bn===null&&(n===null||nr.current!==null||n.memoizedState!==null)&&(Bn=t)}function kf(t){ie(Un,Un.current),ie(Nn,t),Bn===null&&(Bn=t)}function q0(t){t.tag===22?(ie(Un,Un.current),ie(Nn,t),Bn===null&&(Bn=t)):ar()}function ar(){ie(Un,Un.current),ie(Nn,Nn.current)}function ui(t){Nt(Nn),Bn===t&&(Bn=null),Nt(Un)}var Un=kt(0);function tl(t,n){ie(Nn,Nn.current),ie(Un,n)}function qf(t){Nt(Un),Nt(Nn),Bn===t&&(Bn=null)}function xc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hh(a)||ph(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,xe=null,je=null,_n=null,Mc=!1,Ts=!1,Xr=!1,yc=0,el=0,bs=null,by=0;function fn(){throw Error(r(321))}function Wf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ci(t[a],n[a]))return!1;return!0}function Yf(t,n,a,s,c,f){return ba=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,st.H=t===null||t.memoizedState===null?Cg:wg,Xr=!1,f=a(s,c),Xr=!1,Ts&&(f=Y0(n,a,s,c)),W0(t),f}function W0(t){st.H=wc;var n=je!==null&&je.next!==null;if(ba=0,_n=je=xe=null,Mc=!1,el=0,bs=null,n)throw Error(r(300));t===null||vn||(t=t.dependencies,t!==null&&dc(t)&&(vn=!0))}function Y0(t,n,a,s){xe=t;var c=0;do{if(Ts&&(bs=null),el=0,Ts=!1,25<=c)throw Error(r(301));if(c+=1,_n=je=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}st.H=Ly,f=n(a,s)}while(Ts);return f}function Ay(){var t=st.H,n=t.useState()[0];return n=typeof n.then=="function"?nl(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(xe.flags|=1024),n}function Zf(){var t=yc!==0;return yc=0,t}function Kf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qf(t){if(Mc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Mc=!1}ba=0,_n=je=xe=null,Ts=!1,el=yc=0,bs=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?xe.memoizedState=_n=t:_n=_n.next=t,_n}function pn(){if(je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=_n===null?xe.memoizedState:_n.next;if(n!==null)_n=n,je=t;else{if(t===null)throw xe.alternate===null?Error(r(467)):Error(r(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},_n===null?xe.memoizedState=_n=t:_n=_n.next=t}return _n}function Ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(t){var n=el;return el+=1,bs===null&&(bs=[]),t=z0(bs,t,n),n=xe,(_n===null?n.memoizedState:_n.next)===null&&(n=n.alternate,st.H=n===null||n.memoizedState===null?Cg:wg),t}function Tc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nl(t);if(t.$$typeof===_t)return;if(t.$$typeof===Z)return Dn(t)}throw Error(r(438,String(t)))}function Jf(t){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ec(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=wt;return n.index++,a}function Aa(t,n){return typeof n=="function"?n(t):n}function bc(t){var n=pn();return jf(n,je,t)}function jf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=g=null,H=null,at=n,pt=!1;do{var Et=at.lane&-536870913;if(Et!==at.lane?(Ne&Et)===Et:(ba&Et)===Et){var et=at.revertLane;if(et===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),Et===Fr&&(pt=!0);else if((ba&et)===et){at=at.next,et===Fr&&(pt=!0);continue}else Et={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(R=H=Et,g=f):H=H.next=Et,xe.lanes|=et,lr|=et;Et=at.action,Xr&&a(f,Et),f=at.hasEagerState?at.eagerState:a(f,Et)}else et={lane:Et,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(R=H=et,g=f):H=H.next=et,xe.lanes|=Et,lr|=Et;at=at.next}while(at!==null&&at!==n);if(H===null?g=f:H.next=R,!ci(f,t.memoizedState)&&(vn=!0,pt&&(a=Ms,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=H,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function $f(t){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);ci(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Z0(t,n,a){var s=xe,c=pn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!ci((je||c).memoizedState,a);if(g&&(c.memoizedState=a,vn=!0),c=c.queue,nd(J0.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||g||_n!==null&&(_n.memoizedState.tag&1)!==0,As(t?9:8,{destroy:void 0},Q0.bind(null,s,c,a,n),null),t){if(s.flags|=2048,tn===null)throw Error(r(349));f||(ba&127)!==0||K0(s,n,a)}return a}function K0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Ec(),xe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Q0(t,n,a,s){n.value=a,n.getSnapshot=s,j0(n)&&$0(t)}function J0(t,n,a){return a(function(){j0(n)&&$0(t)})}function j0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ci(t,a)}catch{return!0}}function $0(t){var n=Ur(t,2);n!==null&&ii(n,t,2)}function td(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Xr){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},n}function tg(t,n,a,s){return t.baseState=a,jf(t,je,typeof s=="function"?s:Aa)}function Ry(t,n,a,s,c){if(Cc(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};st.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,eg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function eg(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=st.T,g={};g.types=f!==null?f.types:null,st.T=g;try{var R=a(c,s),H=st.S;H!==null&&H(g,R),ng(t,n,R)}catch(at){ed(t,n,at)}finally{f!==null&&g.types!==null&&(f.types=g.types),st.T=f}}else try{f=a(c,s),ng(t,n,f)}catch(at){ed(t,n,at)}}function ng(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){ig(t,n,s)},function(s){return ed(t,n,s)}):ig(t,n,a)}function ig(t,n,a){n.status="fulfilled",n.value=a,ag(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,eg(t,a)))}function ed(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ag(n),n=n.next;while(n!==s)}t.action=null}function ag(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rg(t,n){return n}function sg(t,n){if(be){var a=tn.formState;if(a!==null){t:{var s=xe;if(be){if(nn){e:{for(var c=nn,f=Ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=wi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=wi(c.nextSibling),s=c.data==="F!";break t}}Qa(s)}s=!1}s&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:n},a.queue=s,a=bg.bind(null,xe,s),s.dispatch=a,s=td(!1),f=od.bind(null,xe,!1,s.queue),s=Yn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Ry.bind(null,xe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function og(t){var n=pn();return lg(n,je,t)}function lg(t,n,a){if(n=jf(t,n,rg)[0],t=bc(Aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=nl(n)}catch(g){throw g===ys?mc:g}else s=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,As(9,{destroy:void 0},Cy.bind(null,c,a),null)),[s,f,t]}function Cy(t,n){t.action=n}function cg(t){var n=pn(),a=je;if(a!==null)return lg(n,a,t);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function As(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Ec(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ug(){return pn().memoizedState}function Ac(t,n,a,s){var c=Yn();xe.flags|=t,c.memoizedState=As(1|n,{destroy:void 0},a,s===void 0?null:s)}function Rc(t,n,a,s){var c=pn();s=s===void 0?null:s;var f=c.memoizedState.inst;je!==null&&s!==null&&Wf(s,je.memoizedState.deps)?c.memoizedState=As(n,f,a,s):(xe.flags|=t,c.memoizedState=As(1|n,f,a,s))}function fg(t,n){Ac(8390656,8,t,n)}function nd(t,n){Rc(2048,8,t,n)}function wy(t){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Ec(),xe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function dg(t){var n=pn().memoizedState;return wy({ref:n,nextImpl:t}),function(){if((ke&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function hg(t,n){return Rc(4,2,t,n)}function pg(t,n){return Rc(4,4,t,n)}function mg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gg(t,n,a){a=a!=null?a.concat([t]):null,Rc(4,4,mg.bind(null,n,t),a)}function id(){}function _g(t,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Wf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function vg(t,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Wf(n,s[1]))return s[0];if(s=t(),Xr){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[s,n],s}function ad(t,n,a){return a===void 0||(ba&1073741824)!==0&&(Ne&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=C_(),xe.lanes|=t,lr|=t,a)}function Sg(t,n,a,s){return ci(a,n)?a:nr.current!==null?(t=ad(t,a,s),ci(t,n)||(vn=!0),t):(ba&106)===0||(ba&1073741824)!==0&&(Ne&261930)===0?(vn=!0,t.memoizedState=a):(t=C_(),xe.lanes|=t,lr|=t,n)}function xg(t,n,a,s,c){var f=At.p;At.p=f!==0&&8>f?f:8;var g=st.T,R={};R.types=g!==null?g.types:null,st.T=R,od(t,!1,n,a);try{var H=c(),at=st.S;if(at!==null&&at(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=Ty(H,s);il(t,n,pt,pi(t))}else il(t,n,s,pi(t))}catch(Et){il(t,n,{then:function(){},status:"rejected",reason:Et},pi())}finally{At.p=f,g!==null&&R.types!==null&&(g.types=R.types),st.T=g}}function Dy(){}function rd(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Mg(t).queue;xg(t,c,n,ee,a===null?Dy:function(){return yg(t),a(s)})}function Mg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function yg(t){var n=Mg(t);n.next===null&&(n=t.alternate.memoizedState),il(t,n.next.queue,{},pi())}function sd(){return Dn(qs)}function Eg(){return pn().memoizedState}function Tg(){return pn().memoizedState}function Ny(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();t=tr(a);var s=er(n,t,a);s!==null&&(ii(s,n,a),Jo(s,n,a)),n={cache:Of()},t.payload=n;return}n=n.return}}function Uy(t,n,a){var s=pi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cc(t)?Ag(n,a):(a=bf(t,n,a,s),a!==null&&(ii(a,t,s),Rg(a,n,s)))}function bg(t,n,a){var s=pi();il(t,n,a,s)}function il(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cc(t))Ag(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(c.hasEagerState=!0,c.eagerState=R,ci(R,g))return rc(t,n,c,0),tn===null&&ac(),!1}catch{}if(a=bf(t,n,c,s),a!==null)return ii(a,t,s),Rg(a,n,s),!0}return!1}function od(t,n,a,s){if(s={lane:2,revertLane:Jd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Cc(t)){if(n)throw Error(r(479))}else n=bf(t,a,s,2),n!==null&&ii(n,t,2)}function Cc(t){var n=t.alternate;return t===xe||n!==null&&n===xe}function Ag(t,n){Ts=Mc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Rg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Uo(t,a)}}var wc={readContext:Dn,use:Tc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn,useEffectEvent:fn},Cg={readContext:Dn,use:Tc,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:fg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ac(4194308,4,mg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ac(4194308,4,t,n)},useInsertionEffect:function(t,n){Ac(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var s=t();if(Xr){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Yn();if(a!==void 0){var c=a(n);if(Xr){Oe(!0);try{a(n)}finally{Oe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Uy.bind(null,xe,t),[s.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=td(t);var n=t.queue,a=bg.bind(null,xe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:id,useDeferredValue:function(t,n){var a=Yn();return ad(a,t,n)},useTransition:function(){var t=td(!1);return t=xg.bind(null,xe,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=xe,c=Yn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),tn===null)throw Error(r(349));(Ne&127)!==0||K0(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,fg(J0.bind(null,s,f,t),[t]),s.flags|=2048,As(9,{destroy:void 0},Q0.bind(null,s,f,a,n),null),a},useId:function(){var t=Yn(),n=tn.identifierPrefix;if(be){var a=Ki,s=Zi;a=(s&~(1<<32-ge(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=by++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sd,useFormState:sg,useActionState:sg,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=od.bind(null,xe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Jf,useCacheRefresh:function(){return Yn().memoizedState=Ny.bind(null,xe)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((ke&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},wg={readContext:Dn,use:Tc,useCallback:_g,useContext:Dn,useEffect:nd,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:vg,useReducer:bc,useRef:ug,useState:function(){return bc(Aa)},useDebugValue:id,useDeferredValue:function(t,n){var a=pn();return Sg(a,je.memoizedState,t,n)},useTransition:function(){var t=bc(Aa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:Z0,useId:Eg,useHostTransitionStatus:sd,useFormState:og,useActionState:og,useOptimistic:function(t,n){var a=pn();return tg(a,je,t,n)},useMemoCache:Jf,useCacheRefresh:Tg,useEffectEvent:dg},Ly={readContext:Dn,use:Tc,useCallback:_g,useContext:Dn,useEffect:nd,useImperativeHandle:gg,useInsertionEffect:hg,useLayoutEffect:pg,useMemo:vg,useReducer:$f,useRef:ug,useState:function(){return $f(Aa)},useDebugValue:id,useDeferredValue:function(t,n){var a=pn();return je===null?ad(a,t,n):Sg(a,je.memoizedState,t,n)},useTransition:function(){var t=$f(Aa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:Z0,useId:Eg,useHostTransitionStatus:sd,useFormState:cg,useActionState:cg,useOptimistic:function(t,n){var a=pn();return je!==null?tg(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Jf,useCacheRefresh:Tg,useEffectEvent:dg};function ld(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cd={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=pi(),c=tr(s);c.payload=n,a!=null&&(c.callback=a),n=er(t,c,s),n!==null&&(ii(n,t,s),Jo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=pi(),c=tr(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=er(t,c,s),n!==null&&(ii(n,t,s),Jo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=pi(),s=tr(a);s.tag=2,n!=null&&(s.callback=n),n=er(t,s,a),n!==null&&(ii(n,t,a),Jo(n,t,a))}};function Dg(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Xo(a,s)||!Xo(c,f):!0}function Ng(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&cd.enqueueReplaceState(n,n.state,null)}function kr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Ug(t){ic(t)}function Lg(t){console.error(t)}function Og(t){ic(t)}function Dc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Pg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ud(t,n,a){return a=tr(a),a.tag=3,a.payload={element:null},a.callback=function(){Dc(t,n)},a}function Ig(t){return t=tr(t),t.tag=3,t}function zg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Pg(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Pg(n,a,s),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function Oy(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,c,!0),a=Nn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?Jc():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===gc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Zd(t,s,c)),!1;case 22:return a.flags|=65536,s===gc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Zd(t,s,c)),!1}throw Error(r(435,a.tag))}return Zd(t,s,c),Jc(),!1}if(be)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Df&&(t=Error(r(422),{cause:s}),Wo(Ti(t,a)))):(s!==Df&&(n=Error(r(423),{cause:s}),Wo(Ti(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Ti(s,a),c=ud(t.stateNode,s,c),Hf(t,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=Ti(f,a),fl===null?fl=[f]:fl.push(f),dn!==4&&(dn=2),n===null)return!0;s=Ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ud(a.stateNode,s,t),Hf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(cr===null||!cr.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ig(c),zg(c,t,a,s),Hf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var fd=Error(r(461)),vn=!1;function yn(t,n,a,s){n.child=t===null?G0(n,null,a,s):Vr(n,t.child,a,s)}function Fg(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var R in s)R!=="ref"&&(g[R]=s[R])}else g=s;return zr(n),s=Yf(t,n,a,g,f,c),R=Zf(),t!==null&&!vn?(Kf(t,n,c),Ra(t,n,c)):(be&&R&&cc(n),n.flags|=1,yn(t,n,s,c),n.child)}function Bg(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Af(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Hg(t,n,f,s,c)):(t=oc(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Sd(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(g,s)&&t.ref===n.ref)return Ra(t,n,c)}return n.flags|=1,t=Ma(f,s),t.ref=n.ref,t.return=n,n.child=t}function Hg(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Xo(f,s)&&t.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Sd(t,c))(t.flags&131072)!==0&&(vn=!0);else return n.lanes=t.lanes,Ra(t,n,c)}return dd(t,n,a,s,c)}function Gg(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Vg(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pc(n,f!==null?f.cachePool:null),f!==null?k0(n,f):Vf(),q0(n);else return s=n.lanes=536870912,Vg(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(pc(n,f.cachePool),k0(n,f),ar(),n.memoizedState=null):(t!==null&&pc(n,null),Vf(),ar());return yn(t,n,c,a),n.child}function al(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vg(t,n,a,s,c){var f=If();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pc(n,null),Vf(),q0(n),t!==null&&Ir(t,n,s,!0),n.childLanes=c,null}function Nc(t,n){return n=Uc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xg(t,n,a){return Vr(n,t.child,null,a),t=Nc(n,n.pendingProps),t.flags|=2,ui(n),n.memoizedState=null,t}function Py(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(s.mode==="hidden")return t=Nc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},al(null,t);if(kf(n),(t=nn)?(t=mv(t,Ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Za!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=A0(t),a.return=n,n.child=a,bn=n,nn=null)):t=null,t===null)throw Qa(n);return n.lanes=536870912,null}return Nc(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(kf(n),c)if(n.flags&256)n.flags&=-257,n=Xg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Ir(t,n,a,!1),c=(a&t.childLanes)!==0,vn||c){if(nr.current===null){if(s=tn,s!==null&&(g=Lo(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ur(t,g),ii(s,t,g),fd;Jc()}n=Xg(t,n,a)}else t=f.treeContext,nn=wi(g.nextSibling),bn=n,be=!0,Ka=null,Ri=!1,t!==null&&w0(n,t),n=Nc(n,s),n.flags|=134221824;return n}return t=Ma(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function dd(t,n,a,s,c){return zr(n),a=Yf(t,n,a,s,void 0,c),s=Zf(),t!==null&&!vn?(Kf(t,n,c),Ra(t,n,c)):(be&&s&&cc(n),n.flags|=1,yn(t,n,a,c),n.child)}function kg(t,n,a,s,c,f){return zr(n),n.updateQueue=null,a=Y0(n,s,a,c),W0(t),s=Zf(),t!==null&&!vn?(Kf(t,n,f),Ra(t,n,f)):(be&&s&&cc(n),n.flags|=1,yn(t,n,a,f),n.child)}function qg(t,n,a,s,c){if(zr(n),n.stateNode===null){var f=_s,g=a.contextType;typeof g=="object"&&g!==null&&(f=Dn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Ff(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Dn(g):_s,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ld(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&cd.enqueueReplaceState(f,f.state,null),$o(n,s,f,c),jo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,H=kr(a,R);f.props=H;var at=f.context,pt=a.contextType;g=_s,typeof pt=="object"&&pt!==null&&(g=Dn(pt));var Et=a.getDerivedStateFromProps;pt=typeof Et=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||at!==g)&&Ng(n,f,s,g),$a=!1;var et=n.memoizedState;f.state=et,$o(n,s,f,c),jo(),at=n.memoizedState,R||et!==at||$a?(typeof Et=="function"&&(ld(n,a,Et,s),at=n.memoizedState),(H=$a||Dg(n,a,H,s,et,at,g))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=at),f.props=s,f.state=at,f.context=g,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Bf(t,n),g=n.memoizedProps,pt=kr(a,g),f.props=pt,Et=n.pendingProps,et=f.context,at=a.contextType,H=_s,typeof at=="object"&&at!==null&&(H=Dn(at)),R=a.getDerivedStateFromProps,(at=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==Et||et!==H)&&Ng(n,f,s,H),$a=!1,et=n.memoizedState,f.state=et,$o(n,s,f,c),jo();var ut=n.memoizedState;g!==Et||et!==ut||$a||t!==null&&t.dependencies!==null&&dc(t.dependencies)?(typeof R=="function"&&(ld(n,a,R,s),ut=n.memoizedState),(pt=$a||Dg(n,a,pt,s,et,ut,H)||t!==null&&t.dependencies!==null&&dc(t.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=H,s=pt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Rs(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Vr(n,t.child,null,c),n.child=Vr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Ra(t,n,c),t}function Wg(t,n,a,s){return Or(),n.flags|=256,yn(t,n,a,s),n.child}var hd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pd(t){return{baseLanes:t,cachePool:P0()}}function md(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=hi),t}function Yg(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Un.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?ir(n):ar(),(t=nn)?(t=mv(t,Ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Za!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=A0(t),a.return=n,n.child=a,bn=n,nn=null)):t=null,t===null)throw Qa(n);return ph(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(ar(),c=n.mode,f=Uc({mode:"hidden",children:f},c),s=Lr(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=pd(a),s.childLanes=md(t,g,a),n.memoizedState=hd,al(null,s)):(ir(n),gd(n,f))}var R=t.memoizedState;if(R!==null){var H=R.dehydrated;if(H!==null)return Iy(t,n,f,g,s,H,R,a)}return c?(ar(),c=s.fallback,f=n.mode,R=t.child,H=R.sibling,s=Ma(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,H!==null?c=Ma(H,c):(c=Lr(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,al(null,s),s=n.child,c=t.child.memoizedState,c===null?c=pd(a):(f=c.cachePool,f!==null?(R=gn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=P0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=md(t,g,a),n.memoizedState=hd,al(t.child,s)):(ir(n),a=t.child,t=a.sibling,a=Ma(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function gd(t,n){return n=Uc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Uc(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Lc(t,n,a){return Vr(n,t.child,null,a),t=gd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Iy(t,n,a,s,c,f,g,R){if(a)return n.flags&256?(ir(n),n.flags&=-257,Lc(t,n,R)):n.memoizedState!==null?(ar(),n.child=t.child,n.flags|=128,null):(ar(),f=c.fallback,g=n.mode,c=Uc({mode:"visible",children:c.children},g),f=Lr(f,g,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Vr(n,t.child,null,R),c=n.child,c.memoizedState=pd(R),c.childLanes=md(t,s,R),n.memoizedState=hd,al(null,c));if(ir(n),ph(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var H=s.dgst;return s=H,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Wo({value:c,source:null,stack:null})),Lc(t,n,R)}if(vn||Ir(t,n,R,!1),s=(R&t.childLanes)!==0,vn||s){if(nr.current!==null)return Lc(t,n,R);if(s=tn,s!==null&&(c=Lo(s,R),c!==0&&c!==g.retryLane))throw g.retryLane=c,Ur(t,c),ii(s,t,c),fd;return hh(f)||Jc(),Lc(t,n,R)}return hh(f)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,nn=wi(f.nextSibling),bn=n,be=!0,Ka=null,Ri=!1,t!==null&&w0(n,t),n=gd(n,c.children),n.flags|=134221824,n)}function Zg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),fc(t.return,n,a)}function Kg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&xc(a)===null&&(n=t),t=t.sibling}return n}function Oc(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function _d(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function vd(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=Un.current;if(n.flags&128)return tl(n,g),null;var R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,tl(n,g),c==="backwards"&&t!==null?(_d(t),yn(t,n,s,a),_d(t)):yn(t,n,s,a),s=be?qo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,a,n);else if(t.tag===19)Zg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Kg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,_d(n)),Oc(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&xc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Oc(n,!0,a,null,f,s);break;case"together":Oc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Kg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Oc(n,!1,c,a,f,s)}return n.child}function Qg(t,n,a){var s=n.pendingProps;return Ja(n,n.type,s.value),yn(t,n,s.children,a),n.child}function Ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),lr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ir(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Sd(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dc(t)))}function zy(t,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Ja(n,gn,t.memoizedState.cache),Or();break;case 27:case 5:He(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,kf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return ir(n),n.flags|=128,null;s=Ir(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Yg(t,n,a):(ir(n),t=Ra(t,n,a),t!==null?t.sibling:null)}ir(n);break;case 19:if(n.flags&128)return vd(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Ir(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return vd(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),tl(n,Un.current),s)break;return null;case 22:return n.lanes=0,Gg(t,n,a,n.pendingProps);case 24:Ja(n,gn,t.memoizedState.cache)}return Ra(t,n,a)}function Jg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)vn=!0;else{if(!Sd(t,a)&&(n.flags&128)===0)return vn=!1,zy(t,n,a);vn=(t.flags&131072)!==0}else vn=!1,be&&(n.flags&1048576)!==0&&C0(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Hr(n.elementType),n.type=t,typeof t=="function")Af(t)?(s=kr(t,s),n.tag=1,n=qg(null,n,t,s,a)):(n.tag=0,n=dd(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===X){n.tag=11,n=Fg(null,n,t,s,a);break t}else if(c===$){n.tag=14,n=Bg(null,n,t,s,a);break t}else if(c===Z){n.tag=10,n.type=t,n=Qg(null,n,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return dd(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=kr(s,n.pendingProps),qg(t,n,s,c,a);case 3:t:{if(Y(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Bf(t,n),$o(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Ja(n,gn,s),s!==f.cache&&Lf(n,[gn],a,!0),jo(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wg(t,n,s,a);break t}else if(s!==c){c=Ti(Error(r(424)),n),Wo(c),n=Wg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nn=wi(t.firstChild),bn=n,be=!0,Ka=null,Ri=!0,a=G0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Or(),s===c){n=Ra(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return Rs(t,n),t===null?(a=yv(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(n.stateNode=ev(n.type,n.pendingProps,de.current,n)):n.memoizedState=yv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&be&&(s=n.stateNode=vv(n.type,n.pendingProps,de.current),bn=n,Ri=!0,c=nn,dr(n.type)?(mh=c,nn=wi(s.firstChild)):nn=c),yn(t,n,n.pendingProps.children,a),Rs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=nn)&&(s=NE(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,bn=n,nn=wi(s.firstChild),Ri=!1,c=!0):c=!1),c||Qa(n)),He(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,sh(c,f)?s=null:g!==null&&sh(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Yf(t,n,Ay,null,null,a),qs._currentValue=c),Rs(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=nn)&&(a=UE(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,bn=n,nn=null,t=!0):t=!1),t||Qa(n)),null;case 13:return Yg(t,n,a);case 4:return Y(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Vr(n,null,s,a):yn(t,n,s,a),n.child;case 11:return Fg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Rs(t,n),yn(t,n,s,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return Qg(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,zr(n),c=Dn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return Bg(t,n,n.type,n.pendingProps,a);case 15:return Hg(t,n,n.type,n.pendingProps,a);case 19:return vd(t,n,a);case 31:return Py(t,n,a);case 22:return Gg(t,n,a,n.pendingProps);case 24:return zr(n),s=Dn(gn),t===null?(c=If(),c===null&&(c=tn,f=Of(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Ff(n),Ja(n,gn,c)):((t.lanes&a)!==0&&(Bf(t,n),$o(n,null,null,a),jo()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ja(n,gn,s)):(s=f.cache,Ja(n,gn,s),s!==c.cache&&Lf(n,[gn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:be&&cc(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Rs(t,n),yn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ca(t){t.flags|=4}function xd(t,n,a,s,c){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Av(n,s):Av(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(U_())t.flags|=8192;else throw Gr=gc,zf}else t.flags&=-16777217}function jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Rv(n))if(U_())t.flags|=8192;else throw Gr=gc,zf}function Pc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?No():536870912,t.lanes|=n,Us|=n)}function rl(t,n){if(!be)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Fy(t,n,a){var s=n.pendingProps;switch(wf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ta(gn),sn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(xs(n)?Ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nf())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Ca(n),f!==null?(an(n),jg(n,f)):(an(n),xd(n,c,null,s,a))):f?f!==t.memoizedState?(Ca(n),an(n),jg(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ca(n),an(n),xd(n,c,t,s,a)),null;case 27:if(F(n),a=de.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}t=Se.current,xs(n)?D0(n):(t=vv(c,s,a),n.stateNode=t,Ca(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(F(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=Se.current,xs(n))D0(n);else{var g=gl(de.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[A]=n,f[K]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(On(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ca(n)}}return an(n),n.subtreeFlags&=-33554433,xd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ca(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=de.current,xs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[A]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||J_(t.nodeValue,a)),t||Qa(n,!0)}else t=gl(t).createTextNode(s),t[A]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=xs(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[A]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=Nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=xs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[A]=n}else Or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pc(n,n.updateQueue),an(n),null);case 4:return sn(),t===null&&eh(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Ta(n.type),an(n),null;case 19:if(qf(n),s=n.memoizedState,s===null)return an(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)rl(s,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xc(t),f!==null){for(n.flags|=128,rl(s,!1),t=f.updateQueue,n.updateQueue=t,Pc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)b0(a,t),a=a.sibling;return tl(n,Un.current&1|2),be&&ya(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Yt()>Yc&&(n.flags|=128,c=!0,rl(s,!1),n.lanes=4194304)}else{if(!c)if(t=xc(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Pc(n,t),rl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!be)return an(n),null}else 2*Yt()-s.renderingStartTime>Yc&&a!==536870912&&(n.flags|=128,c=!0,rl(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Yt(),t.sibling=null,f=Un.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||be?tl(n,f):(a=f,ie(Nn,n),ie(Un,a),Bn===null&&(Bn=n)),be&&ya(n,s.treeForkCount),t}return an(n),null;case 22:case 23:return ui(n),Xf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Pc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Nt(Br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ta(gn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function By(t,n){switch(wf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ta(gn),sn(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return F(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(r(340));Or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ui(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return qf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return sn(),null;case 10:return Ta(n.type),null;case 22:case 23:return ui(n),Xf(),t!==null&&Nt(Br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ta(gn),null;case 25:return null;default:return null}}function $g(t,n){switch(wf(n),n.tag){case 3:Ta(gn),sn();break;case 26:case 27:case 5:F(n);break;case 4:sn();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:qf(n);break;case 10:Ta(n.type);break;case 22:case 23:ui(n),Xf(),t!==null&&Nt(Br);break;case 24:Ta(gn)}}function sl(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(R){Ze(n,n.return,R)}}function rr(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,c=n;var H=a,at=R;try{at()}catch(pt){Ze(c,H,pt)}}}s=s.next}while(s!==f)}}catch(pt){Ze(n,n.return,pt)}}function t_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{X0(n,a)}catch(s){Ze(t,t.return,s)}}}function e_(t,n,a){a.props=kr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ze(t,n,s)}}function Qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,f=Sa(t.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=lv(f)),s=c.ref;break;case 7:if(t.stateNode===null){var g=new mi(t);_(t.child,!1,wE,g,void 0,void 0),t.stateNode=g}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(R){Ze(t,n,R)}}function Ln(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ze(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ze(t,n,c)}else a.current=null}function Ic(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)pv(t.stateNode,n[a])}function n_(t){for(var n=t.return;n!==null&&(yd(n)&&pv(t.stateNode,n.stateNode),!Md(n));)n=n.return}function ol(t){for(var n=t.return;n!==null&&(yd(n)&&DE(t.stateNode,n.stateNode),!Md(n));)n=n.return}function Md(t){return t.tag===5||t.tag===3||t.tag===27}function yd(t){return t&&t.tag===7&&t.stateNode!==null}function Ed(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ze(t,t.return,c)}}function Td(t,n,a){try{var s=t.stateNode;fE(s,t.type,a,n),s[K]=n}catch(c){Ze(t,t.return,c)}}function i_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&dr(t.type)||t.tag===4}function bd(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||i_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&dr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi)),Ic(t,s),Te=!0;else if(c!==4&&(c===27&&(Ic(t,s),s=null,dr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Ad(t,n,a,s),t=t.sibling;t!==null;)Ad(t,n,a,s),t=t.sibling}function zc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ic(t,s),Te=!0;else if(c!==4&&(c===27&&(Ic(t,s),s=null,dr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(zc(t,n,a,s),t=t.sibling;t!==null;)zc(t,n,a,s),t=t.sibling}function a_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,s,a),n[A]=t,n[K]=a}catch(f){Ze(t,t.return,f)}}var Fc=!1,fi=null;function r_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Fc=!0)}var Ji=null;function s_(){var t=Ji;return Ji=null,t}var ti=0;function Cs(t,n,a,s,c){return ti=0,o_(t.child,n,a,s,c)}function o_(t,n,a,s,c){for(var f=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(s!==null){var R=ch(g);s.push(R),R.view&&(f=!0)}else f||ch(g).view&&(f=!0);Fc=!0,sv(g,ti===0?n:n+"_"+ti,a),ti++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||o_(t.child,n,a,s,c)&&(f=!0));t=t.sibling}return f}function ji(t,n){for(;t!==null;)t.tag===5?ov(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||ji(t.child,n)),t=t.sibling}function Bc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Bc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(Cs(t,a,n,null,!1)||ji(t.child,!1))}t=t.sibling}}function Rd(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=Sa(s,a),f=xa(s.default,a.paired?s.share:s.enter);f!=="none"?Cs(t,c,f,null,!1)?(Bc(t),a.paired||n||Is(t,s.onEnter)):ji(t.child,!1):Bc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rd(t,n),t=t.sibling;else Bc(t)}function Cd(t){if(fi!==null&&fi.size!==0){var n=fi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=xa(a.default,a.share);if(f!=="none"&&(Cs(t,s,f,null,!1)?(f=t.stateNode,c.paired=f,f.paired=c,Is(t,a.onShare)):ji(t.child,!1)),n.delete(s),n.size===0)break}}}Cd(t)}t=t.sibling}}}function wd(t){if(t.tag===30){var n=t.memoizedProps,a=Sa(n,t.stateNode),s=fi!==null?fi.get(a):void 0,c=xa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Cs(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,fi.delete(a),Is(t,n.onShare)):Is(t,n.onExit):ji(t.child,!1)),fi!==null&&Cd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)wd(t),t=t.sibling;else fi!==null&&Cd(t)}function l_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=Sa(n,t.stateNode);n=xa(n.default,n.update),t.flags&=-5,n!=="none"&&Cs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&l_(t);t=t.sibling}}function Dd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,ji(t.child,!1))}Dd(t)}t=t.sibling}}function Hc(t){if(t.tag===30)t.stateNode.paired=null,ji(t.child,!1),Dd(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Hc(t),t=t.sibling;else Dd(t)}function c_(t){for(t=t.child;t!==null;)t.tag===30?ji(t.child,!1):(t.subtreeFlags&33554432)!==0&&c_(t),t=t.sibling}function Nd(t,n,a,s,c,f,g){for(var R=!1;n!==null;){if(n.tag===5){var H=n.stateNode;if(f!==null&&ti<f.length){var at=f[ti],pt=ch(H);(at.view||pt.view)&&(R=!0);var Et;if(Et=(t.flags&4)===0)if(pt.clip)Et=!0;else{Et=at.rect;var et=pt.rect;Et=Et.y!==et.y||Et.x!==et.x||Et.height!==et.height||Et.width!==et.width}Et&&(t.flags|=4),pt.abs?pt=!at.abs:(at=at.rect,pt=pt.rect,pt=at.height!==pt.height||at.width!==pt.width),pt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&sv(H,ti===0?a:a+"_"+ti,c),R&&(t.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(H,ti===0?s:s+"_"+ti,n.memoizedProps)),ti++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:Nd(t,n.child,a,s,c,f,g)&&(R=!0));n=n.sibling}return R}function u_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=Sa(a,s),f=xa(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,s=t;var R=t.child;ti=0,c=Nd(s,R,c,c,f,g,!1),(t.flags&4)!==0&&c&&Is(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&u_(t);t=t.sibling}}var An=!1,We=!1,$i=!1,Ud=!1,f_=typeof WeakSet=="function"?WeakSet:Set,Rn=null,ta=!1,ll=!1,Gc=!1,Ld=!1;function Hy(t,n,a){if(t=t.containerInfo,ah=Ws,t=m0(t),Sf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var R=0,H=-1,at=-1,pt=0,Et=0,et=t,ut=null;e:for(;;){for(var Ft;et!==s||f!==0&&et.nodeType!==3||(H=R+f),et!==g||c!==0&&et.nodeType!==3||(at=R+c),et.nodeType===3&&(R+=et.nodeValue.length),(Ft=et.firstChild)!==null;)ut=et,et=Ft;for(;;){if(et===t)break e;if(ut===s&&++pt===f&&(H=R),ut===g&&++Et===c&&(at=R),(Ft=et.nextSibling)!==null)break;et=ut,ut=et.parentNode}et=Ft}s=H===-1||at===-1?null:{start:H,end:at}}else s=null}s=s||{start:0,end:0}}else s=null;for(rh={focusedElem:t,selectionRange:s},Ws=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(t=Rn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&wd(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&r_(t),Vc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&wd(s),Vc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&r_(t),Vc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Rn=s):(a&&l_(t),Vc(a))}}fi=null}function Vc(t){for(;Rn!==null;){var n=Rn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var g=kr(n.type,c);a=f.getSnapshotBeforeUpdate(g,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Ze(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)dh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":dh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=Sa(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=xa(c.default,c.update),c!=="none"&&Cs(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function d_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&sl(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ze(a,a.return,g)}else{var c=kr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ze(a,a.return,g)}}s&64&&t_(a),s&512&&Qi(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{X0(t,n)}catch(g){Ze(a,a.return,g)}}break;case 27:n===null&&s&4&&a_(a);case 26:case 5:ea(t,a),n===null&&s&4&&Ed(a),s&512&&Qi(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&g_(t,a);break;case 13:ea(t,a),s&4&&__(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jy.bind(null,a),LE(t,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||We;n=An,c=We,An=s,(We=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Pi(t,a,s)):ea(t,a),An=n,We=c}break;case 30:ea(t,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ea(t,a)}}function Od(t,n){for(t=t.child;t!==null;)h_(t,n),t=t.sibling}function h_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,f=t.memoizedProps.style,g=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(H){Ze(t,t.return,H)}Pd(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Te=!0}catch(H){Ze(t,t.return,H)}break;case 18:try{var R=t.stateNode;n?rv(R,!0):rv(t.stateNode,!1)}catch(H){Ze(t,t.return,H)}break;case 22:case 23:t.memoizedState===null&&Od(t,n);break;default:Od(t,n)}}function Pd(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:h_(a,s);break t;case 22:a.memoizedState===null&&Pd(a,s);break t;default:Pd(a,s)}}t=t.sibling}}function p_(t){var n=t.alternate;n!==null&&(t.alternate=null,p_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$t(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,ei=!1;function Li(t,n,a){for(a=a.child;a!==null;)m_(t,n,a),a=a.sibling}function m_(t,n,a){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:We||Ln(a,n),Li(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!We&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Ln(a,n),ol(a);var s=rn,c=ei;dr(a.type)&&(rn=a.stateNode,ei=!1),Li(t,n,a),Sv(a.stateNode,a.type,a.memoizedProps),rn=s,ei=c;break;case 5:We||Ln(a,n),ol(a);case 6:if(a.tag===6&&ol(a),s=rn,c=ei,rn=null,Li(t,n,a),rn=s,ei=c,rn!==null)if(ei)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode),Te=!0}catch(f){Ze(a,n,f)}else try{rn.removeChild(a.stateNode),Te=!0}catch(f){Ze(a,n,f)}break;case 18:rn!==null&&(ei?(t=rn,av(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ys(t)):av(rn,a.stateNode));break;case 4:s=rn,c=ei,rn=a.stateNode.containerInfo,ei=!0,Li(t,n,a),rn=s,ei=c;break;case 0:case 11:case 14:case 15:rr(2,a,n),We||rr(4,a,n),Li(t,n,a);break;case 1:We||(Ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&e_(a,n,s)),Li(t,n,a);break;case 21:Li(t,n,a);break;case 22:We=(s=We)||a.memoizedState!==null,Li(t,n,a),We=s;break;case 30:Ln(a,n),Li(t,n,a);break;case 7:We||Ln(a,n),Li(t,n,a);break;default:Li(t,n,a)}}function g_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ys(t)}catch(a){Ze(n,n.return,a)}}}function __(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ys(t)}catch(a){Ze(n,n.return,a)}}function Gy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new f_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new f_),n;default:throw Error(r(435,t.tag))}}function Xc(t,n){var a=Gy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=$y.bind(null,t,s);s.then(c,c)}})}function Zn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],g=t,R=n,H=R;t:for(;H!==null;){switch(H.tag){case 27:if(dr(H.type)){rn=H.stateNode,ei=!1;break t}break;case 5:rn=H.stateNode,ei=!1;break t;case 3:case 4:rn=H.stateNode.containerInfo,ei=!0;break t}H=H.return}if(rn===null)throw Error(r(160));m_(g,R,f),rn=null,ei=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)v_(n,t,a),n=n.sibling}var Oi=null;function v_(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var g=s[f];g.ref.impl=g.nextImpl}Zn(n,t,a),Kn(t),c&4&&(rr(3,t,t.return),sl(3,t),rr(5,t,t.return));break;case 1:Zn(n,t,a),Kn(t),c&512&&(We||s===null||Ln(s,s.return)),c&64&&An&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Oi,Zn(n,t,a),Kn(t),c&512&&(We||s===null||Ln(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(An)t.stateNode=ev(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[zt]||s[A]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),On(s,n,a),s[A]=t,Ee(s),n=s;break t;case"link":if(f=bv("link","href",c).get(n+(a.href||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(g,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;case"meta":if(f=bv("meta","content",c).get(n+(a.content||""))){for(g=0;g<f.length;g++)if(s=f[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(g,1);break e}}s=c.createElement(n),On(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[A]=t,Ee(s),n=s}t.stateNode=n}else An||Sh(f,t.type,t.stateNode);else t.stateNode=Tv(f,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||We||n.parentNode.removeChild(n)):c.count--,a===null?An||Sh(f,t.type,t.stateNode):Tv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Td(t,t.memoizedProps,s.memoizedProps);break;case 27:Zn(n,t,a),Kn(t),c&512&&(We||s===null||Ln(s,s.return)),s!==null&&c&4&&Td(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=$i,$i=!1,Zn(n,t,a),$i=f,Kn(t),c&512&&(We||s===null||Ln(s,s.return)),t.flags&32){n=t.stateNode;try{us(n,""),Te=!0}catch(pt){Ze(t,t.return,pt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,Td(t,n,s!==null?s.memoizedProps:n)),c&1024&&(Ud=!0);break;case 6:if(Zn(n,t,a),Kn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Te=!0}catch(pt){Ze(t,t.return,pt)}}break;case 3:if(Te=!1,au=null,f=Oi,Oi=_l(n.containerInfo),Zn(n,t,a),Oi=f,Kn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ys(n.containerInfo)}catch(pt){Ze(t,t.return,pt)}Ud&&(Ud=!1,S_(t)),Te=!1;break;case 4:c=$i,$i=An,s=Xe(),f=Oi,Oi=_l(t.stateNode.containerInfo),Zn(n,t,a),Kn(t),Oi=f,Te&&ll&&(Gc=!0),Te=s,$i=c;break;case 12:Zn(n,t,a),Kn(t);break;case 31:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xc(t,n)));break;case 13:Zn(n,t,a),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wc=Yt()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xc(t,n)));break;case 22:f=t.memoizedState!==null,g=s!==null&&s.memoizedState!==null;var R=An,H=We,at=$i;An=R||f,$i=at||f,We=H||g,Zn(n,t,a),We=H,$i=at,An=R,Kn(t),c&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||g||An||We||(n=g||We,a=An,s=We,An=f||An,We=n,sr(t,2),An=a,We=s),!f&&$i||Od(t,f)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xc(t,a))));break;case 19:Zn(n,t,a),Kn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Xc(t,n)));break;case 30:c&512&&(We||s===null||Ln(s,s.return)),c=Xe(),f=ll,g=(a&335544064)===a,R=t.memoizedProps,ll=g&&xa(R.default,R.update)!=="none",Zn(n,t,a),Kn(t),g&&s!==null&&Te&&(t.flags|=4),ll=f,Te=c;break;case 21:break;case 7:c&512&&(We||s===null||Ln(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Zn(n,t,a),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(i_(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(yd(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(Md(c))break;c=c.return}var g=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,H=bd(t);zc(t,H,R,g);break;case 5:var at=a.stateNode;a.flags&32&&(us(at,""),a.flags&=-33);var pt=bd(t);zc(t,pt,at,g);break;case 3:case 4:var Et=a.stateNode.containerInfo,et=bd(t);Ad(t,et,Et,g);break;default:throw Error(r(161))}}catch(ut){Ze(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function S_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;S_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ws=!0,n.reset(),Ws=!1),t=t.sibling}}function ws(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)x_(n,t),n=n.sibling;else u_(n)}function x_(t,n){var a=t.alternate;if(a===null)Rd(t,!1);else switch(t.tag){case 3:if(Ld=ta=!1,s_(),ws(n,t),!ta&&!Gc){if(t=Ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];ov(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ld=!0}Ji=null;break;case 5:ws(n,t);break;case 4:s=ta,ta=!1,ws(n,t),ta&&(Gc=!0),ta=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Rd(t,!1):ws(n,t));break;case 30:s=ta,c=s_(),ta=!1,ws(n,t),ta&&(t.flags|=4);var f=t.memoizedProps,g=t.stateNode;n=Sa(f,g),g=Sa(a.memoizedProps,g);var R=xa(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,ti=0,n=Nd(t,a,n,g,R,f,!0),ti!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Is(t,t.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ta=(t.flags&32)!==0?!0:s;break;default:ws(n,t)}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)d_(t,n.alternate,n),n=n.sibling}function sr(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:rr(4,a,a.return),sr(a,s);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&e_(a,a.return,c),sr(a,s);break;case 27:(s&2)!==0&&Sv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||ol(a),sr(a,s);break;case 6:ol(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||We||c.parentNode.removeChild(c),sr(a,s);break;case 22:a.memoizedState===null&&sr(a,s);break;case 30:Ln(a,a.return),sr(a,s);break;case 7:Ln(a,a.return);default:sr(a,s)}t=t.sibling}}function Pi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Pi(c,f,a),sl(4,f);break;case 1:if(Pi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(pt){Ze(s,s.return,pt)}if(s=f,c=s.updateQueue,c!==null){var H=s.stateNode;try{var at=c.shared.hiddenCallbacks;if(at!==null)for(c.shared.hiddenCallbacks=null,c=0;c<at.length;c++)V0(at[c],H)}catch(pt){Ze(s,s.return,pt)}}R&&g&64&&t_(f),Qi(f,f.return);break;case 27:(a&2)!==0&&a_(f);case 5:f.tag!==5&&f.tag!==27||n_(f),Pi(c,f,a),R&&s===null&&g&4&&Ed(f),Qi(f,f.return);break;case 6:n_(f);break;case 26:H=f.stateNode,f.memoizedState!==null||H===null||An||Sh(_l(H.ownerDocument),f.type,H),Pi(c,f,a),R&&s===null&&g&4&&Ed(f),Qi(f,f.return);break;case 12:Pi(c,f,a);break;case 31:Pi(c,f,a),R&&g&4&&g_(c,f);break;case 13:Pi(c,f,a),R&&g&4&&__(c,f);break;case 22:f.memoizedState===null&&Pi(c,f,a),Qi(f,f.return);break;case 30:Pi(c,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Pi(c,f,a)}n=n.sibling}}function Id(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yo(a))}function zd(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yo(t))}function Ci(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)M_(t,n,a,s),n=n.sibling;else c&&c_(n)}function M_(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Hc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,s),f&2048&&sl(9,n);break;case 1:Ci(t,n,a,s);break;case 3:Ci(t,n,a,s),c&&Ld&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Yo(f)));break;case 12:if(f&2048){Ci(t,n,a,s),f=n.stateNode;try{var g=n.memoizedProps,R=g.id,H=g.onPostCommit;typeof H=="function"&&H(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(at){Ze(n,n.return,at)}}else Ci(t,n,a,s);break;case 31:Ci(t,n,a,s);break;case 13:Ci(t,n,a,s);break;case 23:break;case 22:g=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Hc(R),g._visibility&2?Ci(t,n,a,s):cl(t,n)):(c&&R!==null&&R.memoizedState!==null&&Hc(n),g._visibility&2?Ci(t,n,a,s):(g._visibility|=2,Ds(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Id(R,n);break;case 24:Ci(t,n,a,s),f&2048&&zd(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ji(f.child,!0),ji(n.child,!0))),Ci(t,n,a,s);break;default:Ci(t,n,a,s)}}function Ds(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,R=a,H=s,at=g.flags;switch(g.tag){case 0:case 11:case 15:Ds(f,g,R,H,c),sl(8,g);break;case 23:break;case 22:var pt=g.stateNode;g.memoizedState!==null?pt._visibility&2?Ds(f,g,R,H,c):cl(f,g):(pt._visibility|=2,Ds(f,g,R,H,c)),c&&at&2048&&Id(g.alternate,g);break;case 24:Ds(f,g,R,H,c),c&&at&2048&&zd(g.alternate,g);break;default:Ds(f,g,R,H,c)}n=n.sibling}}function cl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:cl(a,s),c&2048&&Id(s.alternate,s);break;case 24:cl(a,s),c&2048&&zd(s.alternate,s);break;default:cl(a,s)}n=n.sibling}}var qr=8192;function Wr(t,n,a){if(t.subtreeFlags&qr)for(t=t.child;t!==null;)y_(t,n,a),t=t.sibling}function y_(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&qr&&(t.memoizedState!==null?YE(a,Oi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&wv(a,t)));break;case 5:Wr(t,n,a),t.flags&qr&&(t=t.stateNode,(n&335544128)===n&&wv(a,t));break;case 3:case 4:var s=Oi;Oi=_l(t.stateNode.containerInfo),Wr(t,n,a),Oi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=qr,qr=16777216,Wr(t,n,a),qr=s):Wr(t,n,a));break;case 30:if((t.flags&qr)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(s,c)}Wr(t,n,a);break;default:Wr(t,n,a)}}function E_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ul(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,b_(s,t)}E_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)T_(t),t=t.sibling}function T_(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&rr(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kc(t)):ul(t);break;default:ul(t)}}function kc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,b_(s,t)}E_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:rr(8,n,n.return),kc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kc(n));break;default:kc(n)}t=t.sibling}}function b_(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:rr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Yo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=t;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(p_(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var Vy={getCacheForType:function(t){var n=Dn(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(gn).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,ke=0,tn=null,Re=null,Ne=0,Ye=0,di=null,or=!1,Ns=!1,Fd=!1,wa=0,dn=0,lr=0,Yr=0,qc=0,hi=0,Us=0,fl=null,ni=null,Bd=!1,Wc=0,A_=0,Yc=1/0,Zc=null,cr=null,on=0,Ii=null,Zr=null,na=0,Hd=0,Gd=null,R_=null,Ls=null,Os=null,Ps=null,dl=0,Kc=null;function pi(){return(ke&2)!==0&&Ne!==0?Ne&-Ne:st.T!==null?Jd():Yl()}function C_(){if(hi===0)if((Ne&536870912)===0||be){var t=Rr;Rr<<=1,(Rr&3932160)===0&&(Rr=262144),hi=t}else hi=536870912;return t=Nn.current,t!==null&&(t.flags|=32),hi}function Is(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=lv(Sa(t.memoizedProps,a))),Os===null&&(Os=[]),Os.push(n.bind(null,s))}}function ii(t,n,a){(t===tn&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)&&(zs(t,0),ur(t,Ne,hi,!1)),qi(t,a),((ke&2)===0||t!==tn)&&(t===tn&&((ke&2)===0&&(Yr|=a),dn===4&&ur(t,Ne,hi,!1)),ia(t))}function w_(t,n,a){if((ke&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||qa(t,n),c=s?Wy(t,n):Xd(t,n,!0),f=s;do{if(c===0){Ns&&!s&&ur(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ky(a)){c=Xd(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=t;c=fl;var H=R.current.memoizedState.isDehydrated;if(H&&(zs(R,g).flags|=256),g=Xd(R,g,!1),g!==2&&g!==6){if(Fd&&!H){R.errorRecoveryDisabledLanes|=f,Yr|=f,c=4;break t}f=ni,ni=c,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){zs(t,0),ur(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ur(s,n,hi,!or);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Wc+300-Yt(),10<c)){if(ur(s,n,hi,!or),Cr(s,0,!0)!==0)break t;na=n,s.timeoutHandle=lh(D_.bind(null,s,a,ni,Zc,Bd,n,hi,Yr,Us,or,f,"Throttled",-0,0),c);break t}D_(s,a,ni,Zc,Bd,n,hi,Yr,Us,or,f,null,-0,0)}}break}while(!0);ia(t)}function D_(t,n,a,s,c,f,g,R,H,at,pt,Et,et,ut){t.timeoutHandle=-1;var Ft=n.subtreeFlags,te=(f&335544064)===f;if(Et=null,(te||Ft&8192||(Ft&16785408)===16785408)&&(Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},fi=null,y_(n,f,Et),te&&(Ft=Et,te=t.containerInfo,te=(te.nodeType===9?te:te.ownerDocument).__reactViewTransition,te!=null&&(Ft.count++,Ft.waitingForViewTransition=!0,Ft=xl.bind(Ft),te.finished.then(Ft,Ft))),Ft=(f&62914560)===f?Wc-Yt():(f&4194048)===f?A_-Yt():0,Ft=ZE(Et,Ft),Ft!==null)){na=f,t.cancelPendingCommit=Ft(F_.bind(null,t,n,f,a,s,c,g,R,H,at,pt,Et,null,et,ut)),ur(t,f,g,!at);return}F_(t,n,f,a,s,c,g,R,H,at,pt,Et)}function ky(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!ci(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ur(t,n,a,s){n=ki(t,n),n&=~qc,n&=~Yr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-ge(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&wr(t,a,n)}function Qc(){return(ke&6)===0?(hl(0),!1):!0}function Vd(){if(Re!==null){if(Ye===0)var t=Re.return;else t=Re,Ea=Pr=null,Qf(t),Es=null,Qo=0,t=Re;for(;t!==null;)$g(t.alternate,t),t=t.return;Re=null}}function zs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,pE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),na=0,Vd(),tn=t,Re=a=Ma(t.current,null),Ne=n,Ye=0,di=null,or=!1,Ns=qa(t,n),Fd=!1,Us=hi=qc=Yr=lr=dn=0,ni=fl=null,Bd=!1,wa=ki(t,n),ac(),a}function N_(t,n){xe=null,st.H=wc,n===ys||n===mc?(n=F0(),Ye=3):n===zf?(n=F0(),Ye=4):Ye=n===fd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Re===null&&(dn=1,Dc(t,Ti(n,t.current)))}function U_(){var t=Nn.current;return t===null?!0:(Ne&4194048)===Ne?Bn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?t===Bn:!1}function L_(){var t=st.H;return st.H=wc,t===null?wc:t}function O_(){var t=st.A;return st.A=Vy,t}function Jc(){dn=4,or||(Ne&4194048)!==Ne&&Nn.current!==null||(Ns=!0),(lr&134217727)===0&&(Yr&134217727)===0||tn===null||ur(tn,Ne,hi,!1)}function Xd(t,n,a){var s=ke;ke|=2;var c=L_(),f=O_();(tn!==t||Ne!==n)&&(Zc=null,zs(t,n)),n=!1;var g=dn;t:do try{if(Ye!==0&&Re!==null){var R=Re,H=di;switch(Ye){case 8:Vd(),g=6;break t;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var at=Ye;if(Ye=0,di=null,Fs(t,R,H,at),a&&Ns){g=0;break t}break;default:at=Ye,Ye=0,di=null,Fs(t,R,H,at)}}qy(),g=dn;break}catch(pt){N_(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Ea=Pr=null,ke=s,st.H=c,st.A=f,Re===null&&(tn=null,Ne=0,ac()),g}function qy(){for(;Re!==null;)P_(Re)}function Wy(t,n){var a=ke;ke|=2;var s=L_(),c=O_();tn!==t||Ne!==n?(Zc=null,Yc=Yt()+500,zs(t,n)):Ns=qa(t,n);t:do try{if(Ye!==0&&Re!==null){n=Re;var f=di;e:switch(Ye){case 1:Ye=0,di=null,Fs(t,n,f,1);break;case 2:case 9:if(I0(f)){Ye=0,di=null,I_(n);break}n=function(){Ye!==2&&Ye!==9||tn!==t||(Ye=7),ia(t)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:I0(f)?(Ye=0,di=null,I_(n)):(Ye=0,di=null,Fs(t,n,f,7));break;case 5:var g=null;switch(Re.tag){case 26:g=Re.memoizedState;case 5:case 27:var R=Re;if(g?Rv(g):R.stateNode.complete){Ye=0,di=null;var H=R.sibling;if(H!==null)Re=H;else{var at=R.return;at!==null?(Re=at,jc(at)):Re=null}break e}}Ye=0,di=null,Fs(t,n,f,5);break;case 6:Ye=0,di=null,Fs(t,n,f,6);break;case 8:Vd(),dn=6;break t;default:throw Error(r(462))}}Yy();break}catch(pt){N_(t,pt)}while(!0);return Ea=Pr=null,st.H=s,st.A=c,ke=a,Re!==null?0:(tn=null,Ne=0,ac(),dn)}function Yy(){for(;Re!==null&&!Ht();)P_(Re)}function P_(t){var n=Jg(t.alternate,t,wa);t.memoizedProps=t.pendingProps,n===null?jc(t):Re=n}function I_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=kg(a,n,n.pendingProps,n.type,void 0,Ne);break;case 11:n=kg(a,n,n.pendingProps,n.type.render,n.ref,Ne);break;case 5:Qf(n);var s=n;s===bn&&(be?(uc(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(uc(s),be=!0));default:$g(a,n),n=Re=b0(n,wa),n=Jg(a,n,wa)}t.memoizedProps=t.pendingProps,n===null?jc(t):Re=n}function Fs(t,n,a,s){Ea=Pr=null,Qf(n),Es=null,Qo=0;var c=n.return;try{if(Oy(t,c,n,a,Ne)){dn=1,Dc(t,Ti(a,t.current)),Re=null;return}}catch(f){if(c!==null)throw Re=c,f;dn=1,Dc(t,Ti(a,t.current)),Re=null;return}n.flags&32768?(be||s===1?t=!0:Ns||(Ne&536870912)!==0?t=!1:(or=t=!0,(s===2||s===9||s===3||s===6)&&(s=Nn.current,s!==null&&s.tag===13&&(s.flags|=16384))),z_(n,t)):jc(n)}function jc(t){var n=t;do{if((n.flags&32768)!==0){z_(n,or);return}t=n.return;var a=Fy(n.alternate,n,wa);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=t}while(n!==null);dn===0&&(dn=5)}function z_(t,n){do{var a=By(t.alternate,t);if(a!==null){a.flags&=32767,Re=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Re=t;return}Re=t=a}while(t!==null);dn=6,Re=null}function F_(t,n,a,s,c,f,g,R,H,at,pt,Et){t.cancelPendingCommit=null;do $c();while(on!==0);if((ke&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===tn&&(Re=tn=null,Ne=0),Zr=n,Ii=t,na=a,Gd=c,R_=s,Zy(t,n,a,g,R,H,Et)}}function Zy(t,n,a,s,c,f,g){var R=n.lanes|n.childLanes;if(Hd=R,R|=Tf,Wl(t,a,R,s,c,f),Os=null,(a&335544064)===a?(Ps=yy(t),s=10262):(Ps=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,tE(Ut,function(){return Yd(),null})):(t.callbackNode=null,t.callbackPriority=0),Fc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=st.T,st.T=null,c=At.p,At.p=2,f=ke,ke|=4;try{Hy(t,n,a)}finally{ke=f,At.p=c,st.T=s}}on=1,Fc?Ls=xE(g,t.containerInfo,Ps,kd,qd,Qy,Wd,Yd,Ky):(kd(),qd(),Wd())}function Ky(t){if(on!==0){var n=Ii.onRecoverableError;n(t,{componentStack:null})}}function Qy(){on===3&&(on=0,x_(Zr,Ii),on=4)}function kd(){if(on===1){on=0;var t=Ii,n=Zr,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=st.T,st.T=null;var c=At.p;At.p=2;var f=ke;ke|=4;try{ll=Gc=!1,v_(n,t,a),a=rh;var g=m0(t.containerInfo),R=a.focusedElem,H=a.selectionRange;if(g!==R&&R&&R.ownerDocument&&p0(R.ownerDocument.documentElement,R)){if(H!==null&&Sf(R)){var at=H.start,pt=H.end;if(pt===void 0&&(pt=at),"selectionStart"in R)R.selectionStart=at,R.selectionEnd=Math.min(pt,R.value.length);else{var Et=R.ownerDocument||document,et=Et&&Et.defaultView||window;if(et.getSelection){var ut=et.getSelection(),Ft=R.textContent.length,te=Math.min(H.start,Ft),Me=H.end===void 0?te:Math.min(H.end,Ft);!ut.extend&&te>Me&&(g=Me,Me=te,te=g);var it=h0(R,te),J=h0(R,Me);if(it&&J&&(ut.rangeCount!==1||ut.anchorNode!==it.node||ut.anchorOffset!==it.offset||ut.focusNode!==J.node||ut.focusOffset!==J.offset)){var ot=Et.createRange();ot.setStart(it.node,it.offset),ut.removeAllRanges(),te>Me?(ut.addRange(ot),ut.extend(J.node,J.offset)):(ot.setEnd(J.node,J.offset),ut.addRange(ot))}}}}for(Et=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&Et.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Et.length;R++){var yt=Et[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}Ws=!!ah,rh=ah=null}finally{ke=f,At.p=c,st.T=s}}t.current=n,on=2}}function qd(){if(on===2){on=0;var t=Ii,n=Zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=st.T,st.T=null;var s=At.p;At.p=2;var c=ke;ke|=4;try{d_(t,n.alternate,n)}finally{ke=c,At.p=s,st.T=a}}on=3}}function Wd(){if(on===4||on===3){on=0;var t=Ls;Ls=null,Bt();var n=Ii,a=Zr,s=na,c=R_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,Zr=Ii=null,B_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(cr=null),Po(s),a=a.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(ae,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=st.T,f=At.p,At.p=2,st.T=null;try{for(var g=n.onRecoverableError,R=0;R<c.length;R++){var H=c[R];g(H.value,{componentStack:H.stack})}}finally{st.T=a,At.p=f}}if(c=Os,g=Ps,Ps=null,c!==null&&(Os=null,g===null&&(g=[]),t!==null))for(H=0;H<c.length;H++)a=(0,c[H])(g),a!==void 0&&t.finished.finally(a);(na&3)!==0&&$c(),ia(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Kc?dl++:(dl=0,Kc=n):(dl=0,Kc=null),hl(0)}}function B_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Yo(n)))}function $c(){return Ls!==null&&(Ls.skipTransition(),Ls=null),kd(),qd(),Wd(),Yd()}function Yd(){if(on!==5)return!1;var t=Ii,n=Hd;Hd=0;var a=Po(na),s=st.T,c=At.p;try{At.p=32>a?32:a,st.T=null,a=Gd,Gd=null;var f=Ii,g=na;if(on=0,Zr=Ii=null,na=0,(ke&6)!==0)throw Error(r(331));var R=ke;if(ke|=4,T_(f.current),M_(f,f.current,g,a),ke=R,hl(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(ae,f)}catch{}return!0}finally{At.p=c,st.T=s,B_(t,n)}}function H_(t,n,a){n=Ti(a,n),n=ud(t.stateNode,n,2),t=er(t,n,2),t!==null&&(qi(t,2),ia(t))}function Ze(t,n,a){if(t.tag===3)H_(t,t,a);else for(;n!==null;){if(n.tag===3){H_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(cr===null||!cr.has(s))){t=Ti(a,t),a=Ig(2),s=er(n,a,2),s!==null&&(zg(a,s,n,t),qi(s,2),ia(s));break}}n=n.return}}function Zd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Xy;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Fd=!0,c.add(a),t=Jy.bind(null,t,n,a),n.then(t,t))}function Jy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tn===t&&(Ne&a)===a&&((dn===4||dn===3&&(Ne&62914560)===Ne&&300>Yt()-Wc)&&(ke&2)===0?zs(t,0):qc|=a,Us===Ne&&(Us=0)),ia(t)}function G_(t,n){n===0&&(n=No()),t=Ur(t,n),t!==null&&(qi(t,n),ia(t))}function jy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),G_(t,a)}function $y(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),G_(t,a)}function tE(t,n){return Ot(t,n)}var Bs=null,Hs=null,Kd=!1,tu=!1,Qd=!1,fr=0;function ia(t){t!==Hs&&t.next===null&&(Hs===null?Bs=Hs=t:Hs=Hs.next=t),tu=!0,Kd||(Kd=!0,nE())}function hl(t,n){if(!Qd&&tu){Qd=!0;do for(var a=!1,s=Bs;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-ge(42|t)+1)-1,f&=c&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,q_(s,f))}else f=Ne,f=Cr(s,s===tn?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||qa(s,f)||(a=!0,q_(s,f));s=s.next}while(a);Qd=!1}}function eE(){V_()}function V_(){tu=Kd=!1;var t=0;fr!==0&&hE()&&(t=fr);for(var n=Yt(),a=null,s=Bs;s!==null;){var c=s.next,f=X_(s,n);f===0?(s.next=null,a===null?Bs=c:a.next=c,c===null&&(Hs=a)):(a=s,(t!==0||(f&3)!==0)&&(tu=!0)),s=c}on!==0&&on!==5||hl(t),fr!==0&&(fr=0)}function X_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-ge(f),R=1<<g,H=c[g];H===-1?((R&a)===0||(R&s)!==0)&&(c[g]=Do(R,n)):H<=n&&(t.expiredLanes|=R),f&=~R}if(n=tn,a=Ne,a=Cr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&re(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||qa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&re(s),Po(a)){case 2:case 8:a=tt;break;case 32:a=Ut;break;case 268435456:a=It;break;default:a=Ut}return s=k_.bind(null,t),a=Ot(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&re(s),t.callbackPriority=2,t.callbackNode=null,2}function k_(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($c()&&t.callbackNode!==a)return null;var s=Ne;return s=Cr(t,t===tn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(w_(t,s,n),X_(t,Yt()),t.callbackNode!=null&&t.callbackNode===a?k_.bind(null,t):null)}function q_(t,n){if($c())return null;w_(t,n,!0)}function nE(){mE(function(){(ke&6)!==0?Ot(me,eE):V_()})}function Jd(){if(fr===0){var t=Fr;t===0&&(t=os,os<<=1,(os&261888)===0&&(os=256)),fr=t}return fr}function W_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ql(t)}function iE(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=W_((c[K]||null).action),g=s.submitter;g&&(n=(n=g[K]||null)?W_(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new tc("action","action",null,s,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(fr!==0){var H=new FormData(c,g);rd(a,{pending:!0,data:H,method:c.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=new FormData(c,g),rd(a,{pending:!0,data:H,method:c.method,action:f},f,H))},currentTarget:c}]})}}for(var jd=0;jd<Ef.length;jd++){var $d=Ef[jd],aE=$d.toLowerCase(),rE=$d[0].toUpperCase()+$d.slice(1);Ui(aE,"on"+rE)}Ui(v0,"onAnimationEnd"),Ui(S0,"onAnimationIteration"),Ui(x0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(py,"onTransitionRun"),Ui(my,"onTransitionStart"),Ui(gy,"onTransitionCancel"),Ui(M0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pl));function Y_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var R=s[g],H=R.instance,at=R.currentTarget;if(R=R.listener,H!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=at;try{f(c)}catch(pt){ic(pt)}c.currentTarget=null,f=H}else for(g=0;g<s.length;g++){if(R=s[g],H=R.instance,at=R.currentTarget,R=R.listener,H!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=at;try{f(c)}catch(pt){ic(pt)}c.currentTarget=null,f=H}}}}function Ce(t,n){var a=n[lt];a===void 0&&(a=n[lt]=new Set);var s=t+"__bubble";a.has(s)||(Z_(n,t,2,!1),a.add(s))}function th(t,n,a){var s=0;n&&(s|=4),Z_(a,t,s,n)}var eu="_reactListening"+Math.random().toString(36).slice(2);function eh(t){if(!t[eu]){t[eu]=!0,qe.forEach(function(a){a!=="selectionchange"&&(sE.has(a)||th(a,!1,t),th(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[eu]||(n[eu]=!0,th("selectionchange",!1,n))}}function Z_(t,n,a,s){switch(zv(n)){case 2:var c=jE;break;case 8:c=$E;break;default:c=Mh}a=c.bind(null,n,a,t),c=void 0,!cf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function nh(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var R=s.stateNode.containerInfo;if(R===c)break;if(g===4)for(g=s.return;g!==null;){var H=g.tag;if((H===3||H===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;R!==null;){if(g=fe(R),g===null)return;if(H=g.tag,H===5||H===6||H===26||H===27){s=f=g;continue t}R=R.parentNode}}s=s.return}Zm(function(){var at=f,pt=of(a),Et=[];t:{var et=y0.get(t);if(et!==void 0){var ut=tc,Ft=t;switch(t){case"keypress":if(jl(a)===0)break t;case"keydown":case"keyup":ut=kM;break;case"focusin":Ft="focus",ut=hf;break;case"focusout":Ft="blur",ut=hf;break;case"beforeblur":case"afterblur":ut=hf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=UM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=KM;break;case v0:case S0:case x0:ut=PM;break;case M0:ut=JM;break;case"scroll":case"scrollend":ut=DM;break;case"wheel":ut=$M;break;case"copy":case"cut":case"paste":ut=zM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=$m;break;case"submit":ut=YM;break;case"toggle":case"beforetoggle":ut=ey}var te=(n&4)!==0,Me=!te&&(t==="scroll"||t==="scrollend"),it=te?et!==null?et+"Capture":null:et;te=[];for(var J=at,ot;J!==null;){var yt=J;if(ot=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||ot===null||it===null||(yt=Io(J,it),yt!=null&&te.push(ml(J,yt,ot))),Me)break;J=J.return}0<te.length&&(et=new ut(et,Ft,null,a,pt),Et.push({event:et,listeners:te}))}}if((n&7)===0){t:{if(ut=t==="mouseover"||t==="pointerover",et=t==="mouseout"||t==="pointerout",ut&&a!==sf&&(Ft=a.relatedTarget||a.fromElement)&&(fe(Ft)||Ft[mt]))break t;(et||ut)&&(Ft=pt.window===pt?pt:(ut=pt.ownerDocument)?ut.defaultView||ut.parentWindow:window,et?(ut=a.relatedTarget||a.toElement,et=at,ut=ut?fe(ut):null,ut!==null&&(Me=u(ut),te=ut.tag,ut!==Me||te!==5&&te!==27&&te!==6)&&(ut=null)):(et=null,ut=at),et!==ut&&(te=Jm,yt="onMouseLeave",it="onMouseEnter",J="mouse",(t==="pointerout"||t==="pointerover")&&(te=$m,yt="onPointerLeave",it="onPointerEnter",J="pointer"),Me=et==null?Ft:Kt(et),ot=ut==null?Ft:Kt(ut),Ft=new te(yt,J+"leave",et,a,pt),Ft.target=Me,Ft.relatedTarget=ot,yt=null,fe(pt)===at&&(te=new te(it,J+"enter",ut,a,pt),te.target=ot,te.relatedTarget=Me,yt=te),Me=yt,te=et&&ut?L(et,ut,oE):null,et!==null&&K_(Et,Ft,et,te,!1),ut!==null&&Me!==null&&K_(Et,Me,ut,te,!0)))}t:{if(et=at?Kt(at):window,ut=et.nodeName&&et.nodeName.toLowerCase(),ut==="select"||ut==="input"&&et.type==="file")var Qt=o0;else if(r0(et))if(l0)Qt=fy;else{Qt=cy;var Ue=ly}else ut=et.nodeName,!ut||ut.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?at&&rf(at.elementType)&&(Qt=o0):Qt=uy;if(Qt&&(Qt=Qt(t,at))){s0(Et,Qt,a,pt);break t}Ue&&Ue(t,et,at)}switch(Ue=at?Kt(at):window,t){case"focusin":(r0(Ue)||Ue.contentEditable==="true")&&(ps=Ue,xf=at,ko=null);break;case"focusout":ko=xf=ps=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,g0(Et,a,pt);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":g0(Et,a,pt)}var oe;if(mf)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else hs?i0(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(t0&&a.locale!=="ko"&&(hs||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&hs&&(oe=Km()):(Wa=pt,uf="value"in Wa?Wa.value:Wa.textContent,hs=!0)),Ue=nu(at,ue),0<Ue.length&&(ue=new jm(ue,t,null,a,pt),Et.push({event:ue,listeners:Ue}),oe?ue.data=oe:(oe=a0(a),oe!==null&&(ue.data=oe)))),(oe=iy?ay(t,a):ry(t,a))&&(ue=nu(at,"onBeforeInput"),0<ue.length&&(Ue=new jm("onBeforeInput","beforeinput",null,a,pt),Et.push({event:Ue,listeners:ue}),Ue.data=oe)),iE(Et,t,at,a,pt)}Y_(Et,n)})}function ml(t,n,a){return{instance:t,listener:n,currentTarget:a}}function nu(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Io(t,a),c!=null&&s.unshift(ml(t,c,f)),c=Io(t,n),c!=null&&s.push(ml(t,c,f))),t.tag===3)return s;t=t.return}return[]}function oE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function K_(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var R=a,H=R.alternate,at=R.stateNode;if(R=R.tag,H!==null&&H===s)break;R!==5&&R!==26&&R!==27||at===null||(H=at,c?(at=Io(a,f),at!=null&&g.unshift(ml(a,at,H))):c||(at=Io(a,f),at!=null&&g.push(ml(a,at,H)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var lE=/\r\n?/g,cE=/\u0000|\uFFFD/g;function Q_(t){return(typeof t=="string"?t:""+t).replace(lE,`
`).replace(cE,"")}function J_(t,n){return n=Q_(n),Q_(t)===n}function Ke(t,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||us(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&us(t,""+s);else return;break;case"className":li(t,"class",s);break;case"tabIndex":li(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":li(t,a,s);break;case"style":Wm(t,s,f);return;case"data":if(n!=="object"){li(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ql(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ke(t,n,"name",c.name,c,null),Ke(t,n,"formEncType",c.formEncType,c,null),Ke(t,n,"formMethod",c.formMethod,c,null),Ke(t,n,"formTarget",c.formTarget,c,null)):(Ke(t,n,"encType",c.encType,c,null),Ke(t,n,"method",c.method,c,null),Ke(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ql(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);return;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ql(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),en(t,"popover",s);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=CM.get(a)||a,en(t,a,s);else return}Te=!0}function ih(t,n,a,s,c,f){switch(a){case"style":Wm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")us(t,s);else if(typeof s=="number"||typeof s=="bigint")us(t,""+s);else return;break;case"onScroll":s!=null&&Ce("scroll",t);return;case"onScrollEnd":s!=null&&Ce("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Yi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=t[K]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,c);break t}Te=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):en(t,a,s)}return}Te=!0}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(t,n,f,g,a,null)}}c&&Ke(t,n,"srcSet",a.srcSet,a,null),s&&Ke(t,n,"src",a.src,a,null);return;case"input":Ce("invalid",t);var R=f=g=c=null,H=null,at=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":c=pt;break;case"type":g=pt;break;case"checked":H=pt;break;case"defaultChecked":at=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Ke(t,n,s,pt,a,null)}}Vm(t,f,R,H,at,g,c,!1);return;case"select":Ce("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":s=R;default:Ke(t,n,c,R,a,null)}n=f,a=g,t.multiple=!!s,n!=null?cs(t,!!s,n,!1):a!=null&&cs(t,!!s,a,!0);return;case"textarea":Ce("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ke(t,n,g,R,a,null)}km(t,s,c,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null)&&(H==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ke(t,n,H,s,a,null));return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(s=0;s<pl.length;s++)Ce(pl[s],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(s=a[at],s!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(t,n,at,s,a,null)}return;default:if(rf(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&ih(t,n,pt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Ke(t,n,R,s,a,null))}var uE={};function fE(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,R=null,H=null,at=null,pt=null;for(ut in a){var Et=a[ut];if(a.hasOwnProperty(ut)&&Et!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=Et;default:s.hasOwnProperty(ut)||Ke(t,n,ut,null,s,Et)}}for(var et in s){var ut=s[et];if(Et=a[et],s.hasOwnProperty(et)&&(ut!=null||Et!=null))switch(et){case"type":ut!==Et&&(Te=!0),f=ut;break;case"name":ut!==Et&&(Te=!0),c=ut;break;case"checked":ut!==Et&&(Te=!0),at=ut;break;case"defaultChecked":ut!==Et&&(Te=!0),pt=ut;break;case"value":ut!==Et&&(Te=!0),g=ut;break;case"defaultValue":ut!==Et&&(Te=!0),R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==Et&&Ke(t,n,et,ut,s,Et)}}nf(t,g,R,H,at,pt,f,c);return;case"select":ut=g=R=et=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ut=H;default:s.hasOwnProperty(f)||Ke(t,n,f,null,s,H)}for(c in s)if(f=s[c],H=a[c],s.hasOwnProperty(c)&&(f!=null||H!=null))switch(c){case"value":f!==H&&(Te=!0),et=f;break;case"defaultValue":f!==H&&(Te=!0),R=f;break;case"multiple":f!==H&&(Te=!0),g=f;default:f!==H&&Ke(t,n,c,f,s,H)}n=R,a=g,s=ut,et!=null?cs(t,!!a,et,!1):!!s!=!!a&&(n!=null?cs(t,!!a,n,!0):cs(t,!!a,a?[]:"",!1));return;case"textarea":ut=et=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ke(t,n,R,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":c!==f&&(Te=!0),et=c;break;case"defaultValue":c!==f&&(Te=!0),ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ke(t,n,g,c,s,f)}Xm(t,et,ut);return;case"option":for(var Ft in a)et=a[Ft],a.hasOwnProperty(Ft)&&et!=null&&!s.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:Ke(t,n,Ft,null,s,et));for(H in s)et=s[H],ut=a[H],s.hasOwnProperty(H)&&et!==ut&&(et!=null||ut!=null)&&(H==="selected"?(et!==ut&&(Te=!0),t.selected=et&&typeof et!="function"&&typeof et!="symbol"):Ke(t,n,H,et,s,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)et=a[te],a.hasOwnProperty(te)&&et!=null&&!s.hasOwnProperty(te)&&Ke(t,n,te,null,s,et);for(at in s)if(et=s[at],ut=a[at],s.hasOwnProperty(at)&&et!==ut&&(et!=null||ut!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ke(t,n,at,et,s,ut)}return;default:if(rf(n)){for(var Me in a)et=a[Me],a.hasOwnProperty(Me)&&et!==void 0&&!s.hasOwnProperty(Me)&&ih(t,n,Me,void 0,s,et);for(pt in s)et=s[pt],ut=a[pt],!s.hasOwnProperty(pt)||et===ut||et===void 0&&ut===void 0||ih(t,n,pt,et,s,ut);return}}for(var it in a)et=a[it],a.hasOwnProperty(it)&&et!=null&&!s.hasOwnProperty(it)&&Ke(t,n,it,null,s,et);for(Et in s)et=s[Et],ut=a[Et],!s.hasOwnProperty(Et)||et===ut||et==null&&ut==null||Ke(t,n,Et,et,s,ut)}function j_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,R=c.duration;if(f&&R&&j_(g)){for(g=0,R=c.responseEnd,s+=1;s<a.length;s++){var H=a[s],at=H.startTime;if(at>R)break;var pt=H.transferSize,Et=H.initiatorType;pt&&j_(Et)&&(H=H.responseEnd,g+=pt*(H<R?1:(R-at)/(H-at)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ah=null,rh=null;function gl(t){return t.nodeType===9?t:t.ownerDocument}function $_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ev(t,n,a,s){return a=gl(a).createElement(t),a[A]=s,a[K]=n,On(a,t,n),Ee(a),a}function sh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oh=null;function hE(){var t=window.event;return t&&t.type==="popstate"?t===oh?!1:(oh=t,!0):(oh=null,!1)}var lh=typeof setTimeout=="function"?setTimeout:void 0,pE=typeof clearTimeout=="function"?clearTimeout:void 0,nv=typeof Promise=="function"?Promise:void 0,iv=typeof requestAnimationFrame=="function"?requestAnimationFrame:lh,mE=typeof queueMicrotask=="function"?queueMicrotask:typeof nv<"u"?function(t){return nv.resolve(null).then(t).catch(gE)}:lh;function gE(t){setTimeout(function(){throw t})}function dr(t){return t==="head"}function av(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),Ys(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")gh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,gh(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[zt]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&gh(t.ownerDocument.body);a=c}while(a);Ys(n)}function rv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function sv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function ov(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function _E(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function ch(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return _E(n,a,t)}function vE(t){return t.documentElement.clientHeight}function SE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function xE(t,n,a,s,c,f,g,R,H){var at=n.nodeType===9?n:n.ownerDocument;try{var pt=at.startViewTransition({update:function(){var et=at.defaultView,ut=et.navigation&&et.navigation.transition,Ft=at.fonts.status;s();var te=[];if(Ft==="loaded"&&(vE(at),at.fonts.status==="loading"&&te.push(at.fonts.ready)),Ft=te.length,t!==null)for(var Me=t.suspenseyImages,it=0,J=0;J<Me.length;J++){var ot=Me[J];if(!ot.complete){var yt=ot.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<et.innerHeight&&yt.left<et.innerWidth){if(it+=Cv(ot),it>ru){te.length=Ft;break}ot=new Promise(SE.bind(ot)),te.push(ot)}}}if(0<te.length)return et=Promise.race([Promise.all(te),new Promise(function(Qt){return setTimeout(Qt,500)})]).then(c,c),(ut?Promise.allSettled([ut.finished,et]):et).then(f,f);if(c(),ut)return ut.finished.then(f,f);f()},types:a});at.__reactViewTransition=pt;var Et=[];return pt.ready.then(function(){for(var et=at.documentElement.getAnimations({subtree:!0}),ut=0;ut<et.length;ut++){var Ft=et[ut],te=Ft.effect,Me=te.pseudoElement;if(Me!=null&&Me.startsWith("::view-transition")){Et.push(Ft),Ft=te.getKeyframes();for(var it=Me=void 0,J=!0,ot=0;ot<Ft.length;ot++){var yt=Ft[ot],Qt=yt.width;if(Me===void 0)Me=Qt;else if(Me!==Qt){J=!1;break}if(Qt=yt.height,it===void 0)it=Qt;else if(it!==Qt){J=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}J&&Me!==void 0&&it!==void 0&&(te.setKeyframes(Ft),J=getComputedStyle(te.target,te.pseudoElement),J.width!==Me||J.height!==it)&&(J=Ft[0],J.width=Me,J.height=it,J=Ft[Ft.length-1],J.width=Me,J.height=it,te.setKeyframes(Ft))}}g()},function(et){at.__reactViewTransition===pt&&(at.__reactViewTransition=null);try{typeof et=="object"&&et!==null&&et.name==="InvalidStateError"&&(et.message==="View transition was skipped because document visibility state is hidden."||et.message==="Skipping view transition because document visibility state has become hidden."||et.message==="Skipping view transition because viewport size changed."||et.message==="Transition was aborted because of invalid state")&&(et=null),et!==null&&H(et)}finally{s(),c(),g()}}),pt.finished.finally(function(){for(var et=0;et<Et.length;et++)Et[et].cancel();at.__reactViewTransition===pt&&(at.__reactViewTransition=null),R()}),pt}catch{return s(),c(),g(),null}}function Kr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Kr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Kr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[c])}return s},Kr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function lv(t){return{name:t,group:new Kr("group",t),imagePair:new Kr("image-pair",t),old:new Kr("old",t),new:new Kr("new",t)}}function mi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(uv(f,t,n,a)===-1){var g=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(H){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,H):n.handleEvent(H)}),s!==null&&(c=g.removeEventListener.bind(g,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Gs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),_(this._fragmentFiber.child,!1,ME,t,R,s)}this._eventListeners=f}};function ME(t,n,a,s){return M(t).addEventListener(n,a,s),!1}mi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=uv(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Gs(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,yE,t,a,c),s.splice(n,1),f!==null&&f()}};function yE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Gs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function cv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function uv(t,n,a,s){if(t.length===0)return-1;s=cv(s);for(var c=0;c<t.length;c++){var f=t[c];if(f.type===n&&f.listener===a&&cv(f.optionsOrUseCapture)===s)return c}return-1}mi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Gs(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Gs(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},mi.prototype.focus=function(t){_(this._fragmentFiber.child,!0,fv,t,void 0,void 0)};function fv(t,n){return t.tag===6?!1:(t=M(t),OE(t,n))}mi.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,uh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!fv(n[a],t);a--);};function uh(t,n){return n.push(t),!1}mi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=gl(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,EE,t,void 0,void 0))};function EE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,TE,t,void 0,void 0)};function TE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}mi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,bE,t,void 0,void 0);for(var a=n=0;a<zi.length;a++){var s=zi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):zi[n++]=s}zi.length=n}};function bE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var zi=[],fh=!1;function AE(t,n,a){zi.push({fragmentInstance:t,observer:n,instance:a}),fh||(fh=!0,PE(function(){fh=!1;var s=zi;zi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}mi.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,RE,t,void 0,void 0),t};function RE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}mi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},mi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,uh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,E(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=w(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=E(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),R=c.compareDocumentPosition(t),H=g&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&f&&g&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&c===t||H||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||CE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function CE(t,n,a,s,c){var f=fe(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=L(a,f,O),n===null?n=!1:(_(n,!0,G,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=L(s,f,O),n===null?n=!1:(_(n,!0,D,f,s),f=x,U=x=null,n=f!==null)),n):!1}function dv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,uh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=w(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),dv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),dv(c,a)):M(c).scrollIntoView(t),s+=a?-1:1}};function wE(t,n){return t=M(t),hv(t,n),!1}function hv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function pv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Gs(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var g=0,R=0;R<zi.length;R++){var H=zi[R];(H.fragmentInstance!==n||H.observer!==f||H.instance!==t)&&(zi[g++]=H)}zi.length=g,f.observe(t)}),hv(t,n))}function DE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Gs(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?AE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function dh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dh(a),$t(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function NE(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[zt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=wi(t.nextSibling),t===null)break}return null}function UE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=wi(t.nextSibling),t===null))return null;return t}function mv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=wi(t.nextSibling),t===null))return null;return t}function hh(t){return t.data==="$?"||t.data==="$~"}function ph(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function LE(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function wi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var mh=null;function gv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return wi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function _v(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function OE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function PE(t){iv(function(){iv(function(n){return t(n)})})}function vv(t,n,a){switch(n=gl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Sv(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ke(t,n,s,null,uE,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Yi&&(t.onclick=null),$t(t)}function gh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$t(t)}var Di=new Map,xv=new Set;function _l(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Da=At.d;At.d={f:IE,r:zE,D:FE,C:BE,L:HE,m:GE,X:XE,S:VE,M:kE};function IE(){var t=Da.f(),n=Qc();return t||n}function zE(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?yg(n):Da.r(t)}var Vs=typeof document>"u"?null:document;function Mv(t,n,a){var s=Vs;if(s&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),xv.has(c)||(xv.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),On(n,"link",t),Ee(n),s.head.appendChild(n)))}}function FE(t){Da.D(t),Mv("dns-prefetch",t,null)}function BE(t,n){Da.C(t,n),Mv("preconnect",t,n)}function HE(t,n,a){Da.L(t,n,a);var s=Vs;if(s&&t&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(t)+'"]';var f=c;switch(n){case"style":f=Xs(t);break;case"script":f=ks(t)}if(!(Di.has(f)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Di.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(vl(f))||n==="script"&&s.querySelector(Sl(f))))){var g=s.createElement("link");On(g,"link",t),n==="style"&&(g[Jt]=!0,g.onload=g.onerror=function(){Je(g)}),Ee(g),s.head.appendChild(g)}}}function GE(t,n){Da.m(t,n);var a=Vs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(s)+'"][href="'+yi(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ks(t)}if(!Di.has(f)&&(t=z({rel:"modulepreload",href:t},n),Di.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(f)))return}s=a.createElement("link"),On(s,"link",t),Ee(s),a.head.appendChild(s)}}}function VE(t,n,a){Da.S(t,n,a);var s=Vs;if(s&&t){var c=Ae(s).hoistableStyles,f=Xs(t);n=n||"default";var g=c.get(f);if(!g){var R={loading:0,preload:null};if(g=s.querySelector(vl(f)))R.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Di.get(f))&&_h(t,a);var H=g=s.createElement("link");Ee(H),On(H,"link",t),H._p=new Promise(function(at,pt){H.onload=at,H.onerror=pt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,iu(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:R},c.set(f,g)}}}function XE(t,n){Da.X(t,n);var a=Vs;if(a&&t){var s=Ae(a).hoistableScripts,c=ks(t),f=s.get(c);f||(f=a.querySelector(Sl(c)),f||(t=z({src:t,async:!0},n),(n=Di.get(c))&&vh(t,n),f=a.createElement("script"),Ee(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function kE(t,n){Da.M(t,n);var a=Vs;if(a&&t){var s=Ae(a).hoistableScripts,c=ks(t),f=s.get(c);f||(f=a.querySelector(Sl(c)),f||(t=z({src:t,async:!0,type:"module"},n),(n=Di.get(c))&&vh(t,n),f=a.createElement("script"),Ee(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function yv(t,n,a,s){var c=(c=de.current)?_l(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Xs(a.href),n=Ae(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xs(a.href);var f=Ae(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(vl(t)))?f._p||(g.instance=f,g.state.loading=5):(f=Di.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(t,f)),qE(c,t,f,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=ks(a),n=Ae(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Xs(t){return'href="'+yi(t)+'"'}function vl(t){return'link[rel="stylesheet"]['+t+"]"}function Ev(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function qE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Jt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Jt]=!0,n.onload=n.onerror=Je.bind(null,n),On(n,"link",a),Ee(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function ks(t){return'[src="'+yi(t)+'"]'}function Sl(t){return"script[async]"+t}function Tv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+yi(a.href)+'"]');if(s)return n.instance=s,Ee(s),s;var c=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ee(s),On(s,"style",c),iu(s,a.precedence,t),n.instance=s;case"stylesheet":c=Xs(a.href);var f=t.querySelector(vl(c));if(f)return n.state.loading|=4,n.instance=f,Ee(f),f;s=Ev(a),(c=Di.get(c))&&_h(s,c),f=(t.ownerDocument||t).createElement("link"),Ee(f);var g=f;return g._p=new Promise(function(R,H){g.onload=R,g.onerror=H}),On(f,"link",s),n.state.loading|=4,iu(f,a.precedence,t),n.instance=f;case"script":return f=ks(a.src),(c=t.querySelector(Sl(f)))?(n.instance=c,Ee(c),c):(s=a,(c=Di.get(f))&&(s=z({},a),vh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ee(c),On(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,iu(s,a.precedence,t));return n.instance}function iu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var R=s[g];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function _h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function vh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var au=null;function bv(t,n,a){if(au===null){var s=new Map,c=au=new Map;c.set(a,s)}else c=au,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[zt]||f[A]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var R=s.get(g);R?R.push(f):s.set(g,[f])}}return s}function Sh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function WE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Av(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Rv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Cv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function wv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Cv(n),t.suspenseyImages.push(n)),t=KE.bind(t),n.decode().then(t,t))}function YE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Xs(s.href),f=n.querySelector(vl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=xl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ee(f);return}f=n.ownerDocument||n,s=Ev(s),(c=Di.get(c))&&_h(s,c),f=f.createElement("link"),Ee(f);var g=f;g._p=new Promise(function(R,H){g.onload=R,g.onerror=H}),On(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=xl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ru=0;function ZE(t,n){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ru===0&&(ru=62500*dE());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ru?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Dv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ou(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function xl(){this.count--,Dv(this)}function KE(){this.imgCount--,Dv(this)}var su=null;function ou(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,n.forEach(QE,t),su=null,xl.call(t))}function QE(t,n){if(!(n.state.loading&4)){var a=su.get(t);if(a)var s=a.get(null);else{a=new Map,su.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var qs={$$typeof:Z,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function JE(t,n,a,s,c,f,g,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ls(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ls(0),this.hiddenUpdates=ls(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.transitionTypes=null,this.incompleteTransitions=new Map}function Nv(t,n,a,s,c,f,g,R,H,at,pt,Et){return t=new JE(t,n,a,g,H,at,pt,Et,R),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=Of(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Ff(f),t}function Uv(t){return t?(t=_s,t):_s}function Lv(t,n,a,s,c,f){c=Uv(c),s.context===null?s.context=c:s.pendingContext=c,s=tr(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=er(t,s,n),a!==null&&(ii(a,t,n),Jo(a,t,n))}function Ov(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function xh(t,n){Ov(t,n),(t=t.alternate)&&Ov(t,n)}function Pv(t){if(t.tag===13||t.tag===31){var n=Ur(t,67108864);n!==null&&ii(n,t,67108864),xh(t,67108864)}}function Iv(t){if(t.tag===13||t.tag===31){var n=pi();n=Oo(n);var a=Ur(t,n);a!==null&&ii(a,t,n),xh(t,n)}}var Ws=!0;function jE(t,n,a,s){var c=st.T;st.T=null;var f=At.p;try{At.p=2,Mh(t,n,a,s)}finally{At.p=f,st.T=c}}function $E(t,n,a,s){var c=st.T;st.T=null;var f=At.p;try{At.p=8,Mh(t,n,a,s)}finally{At.p=f,st.T=c}}function Mh(t,n,a,s){if(Ws){var c=yh(s);if(c===null)nh(t,n,s,lu,a),Fv(t,s);else if(e1(c,t,n,a,s))s.stopPropagation();else if(Fv(t,s),n&4&&-1<t1.indexOf(t)){for(;c!==null;){var f=_e(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ga(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var H=1<<31-ge(g);R.entanglements[1]|=H,g&=~H}ia(f),(ke&6)===0&&(Yc=Yt()+500,hl(0))}}break;case 31:case 13:R=Ur(f,2),R!==null&&ii(R,f,2),Qc(),xh(f,2)}if(f=yh(s),f===null&&nh(t,n,s,lu,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else nh(t,n,s,null,a)}}function yh(t){return t=of(t),Eh(t)}var lu=null;function Eh(t){if(lu=null,t=fe(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lu=t,null}function zv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(le()){case me:return 2;case tt:return 8;case Ut:case Tt:return 32;case It:return 268435456;default:return 32}default:return 32}}var Th=!1,hr=null,pr=null,mr=null,Ml=new Map,yl=new Map,gr=[],t1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(t,n){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(n.pointerId)}}function El(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=_e(n),n!==null&&Pv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function e1(t,n,a,s,c){switch(n){case"focusin":return hr=El(hr,t,n,a,s,c),!0;case"dragenter":return pr=El(pr,t,n,a,s,c),!0;case"mouseover":return mr=El(mr,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ml.set(f,El(Ml.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yl.set(f,El(yl.get(f)||null,t,n,a,s,c)),!0}return!1}function Bv(t){var n=fe(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Zl(t.priority,function(){Iv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Zl(t.priority,function(){Iv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);sf=s,a.target.dispatchEvent(s),sf=null}else return n=_e(a),n!==null&&Pv(n),t.blockedOn=a,!1;n.shift()}return!0}function Hv(t,n,a){cu(t)&&a.delete(n)}function n1(){Th=!1,hr!==null&&cu(hr)&&(hr=null),pr!==null&&cu(pr)&&(pr=null),mr!==null&&cu(mr)&&(mr=null),Ml.forEach(Hv),yl.forEach(Hv)}function uu(t,n){t.blockedOn===n&&(t.blockedOn=null,Th||(Th=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,n1)))}var fu=null;function Gv(t){fu!==t&&(fu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fu===t&&(fu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Eh(s||a)===null)continue;break}var f=_e(a);f!==null&&(t.splice(n,3),n-=3,rd(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Ys(t){function n(H){return uu(H,t)}hr!==null&&uu(hr,t),pr!==null&&uu(pr,t),mr!==null&&uu(mr,t),Ml.forEach(n),yl.forEach(n);for(var a=0;a<gr.length;a++){var s=gr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<gr.length&&(a=gr[0],a.blockedOn===null);)Bv(a),a.blockedOn===null&&gr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[K]||null;if(typeof f=="function")g||Gv(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[K]||null)R=g.formAction;else if(Eh(c)!==null)continue}else R=g.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),Gv(a)}}}function Vv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function bh(t){this._internalRoot=t}du.prototype.render=bh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=pi();Lv(a,s,t,n,null,null)},du.prototype.unmount=bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Lv(t.current,2,null,t,null,null),Qc(),n[mt]=null}};function du(t){this._internalRoot=t}du.prototype.unstable_scheduleHydration=function(t){if(t){var n=Yl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<gr.length&&n!==0&&n<gr[a].priority;a++);gr.splice(a,0,t),a===0&&Bv(t)}};var Xv=e.version;if(Xv!=="19.3.0")throw Error(r(527,Xv,"19.3.0"));At.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var i1={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:st,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{ae=hu.inject(i1),qt=hu}catch{}}return bl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Ug,f=Lg,g=Og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Nv(t,1,!1,null,null,a,s,null,c,f,g,Vv),t[mt]=n.current,eh(t),new bh(n)},bl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Ug,g=Lg,R=Og,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Nv(t,1,!0,n,a??null,s,c,H,f,g,R,Vv),n.context=Uv(null),a=n.current,s=pi(),s=Oo(s),c=tr(s),c.callback=null,er(a,c,s),a=s,n.current.lanes=a,qi(n,a),ia(n),t[mt]=n.current,eh(t),new du(n)},bl.version="19.3.0",bl}var $v;function h1(){if($v)return Ch.exports;$v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ch.exports=d1(),Ch.exports}var p1=h1();const xm="186",m1=0,tS=1,g1=2,Fu=1,_1=2,Ol=3,Si=0,ri=1,Fa=2,Ha=0,Il=1,eS=2,nS=3,iS=4,v1=5,oo=100,S1=101,x1=102,M1=103,y1=104,E1=200,T1=201,b1=202,A1=203,Px=204,Ix=205,R1=206,C1=207,w1=208,D1=209,N1=210,U1=211,L1=212,O1=213,P1=214,pp=0,mp=1,gp=2,zl=3,_p=4,vp=5,Sp=6,xp=7,zx=0,I1=1,z1=2,fa=0,Fx=1,Bx=2,Hx=3,Gx=4,Vx=5,Xx=6,kx=7,qx=300,is=301,_o=302,Uh=303,Lh=304,Ju=306,Mp=1e3,Ba=1001,yp=1002,zn=1003,F1=1004,pu=1005,Vn=1006,Oh=1007,es=1008,vi=1009,Wx=1010,Yx=1011,Fl=1012,Mm=1013,da=1014,ca=1015,ha=1016,ym=1017,Em=1018,Bl=1020,Zx=35902,Kx=35899,Qx=1021,Jx=1022,Vi=1023,Xa=1026,ns=1027,jx=1028,Tm=1029,as=1030,bm=1031,Am=1033,Bu=33776,Hu=33777,Gu=33778,Vu=33779,Ep=35840,Tp=35841,bp=35842,Ap=35843,Rp=36196,Cp=37492,wp=37496,Dp=37488,Np=37489,ku=37490,Up=37491,Lp=37808,Op=37809,Pp=37810,Ip=37811,zp=37812,Fp=37813,Bp=37814,Hp=37815,Gp=37816,Vp=37817,Xp=37818,kp=37819,qp=37820,Wp=37821,Yp=36492,Zp=36494,Kp=36495,Qp=36283,Jp=36284,qu=36285,jp=36286,B1=3200,$p=0,H1=1,br="",wn="srgb",Wu="srgb-linear",Yu="linear",Qe="srgb",Ph=7680,G1=519,V1=512,X1=513,k1=514,Rm=515,q1=516,W1=517,Cm=518,Y1=519,Z1=35044,aS="300 es",ua=2e3,Hl=2001;function K1(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Zu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Q1(){const o=Zu("canvas");return o.style.display="block",o}const rS={};function sS(...o){const e="THREE."+o.shift();console.log(e,...o)}function $x(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function pe(...o){o=$x(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ve(...o){o=$x(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function co(...o){const e=o.join(" ");e in rS||(rS[e]=!0,pe(...o))}function J1(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const j1={[pp]:mp,[gp]:Sp,[_p]:xp,[zl]:vp,[mp]:pp,[Sp]:gp,[xp]:_p,[vp]:zl};class rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ih=Math.PI/180,tm=180/Math.PI;function Vl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function ze(o,e,i){return Math.max(e,Math.min(i,o))}function $1(o,e){return(o%e+e)%e}function zh(o,e,i){return(1-i)*o+i*e}function Al(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ai(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Im=class Im{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Im.prototype.isVector2=!0;let we=Im;class Ge{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let p=r[l+0],m=r[l+1],S=r[l+2],_=r[l+3],v=u[d+0],E=u[d+1],w=u[d+2],I=u[d+3];if(_!==I||p!==v||m!==E||S!==w){let M=p*v+m*E+S*w+_*I;M<0&&(v=-v,E=-E,w=-w,I=-I,M=-M);let x=1-h;if(M<.9995){const U=Math.acos(M),G=Math.sin(U);x=Math.sin(x*U)/G,h=Math.sin(h*U)/G,p=p*x+v*h,m=m*x+E*h,S=S*x+w*h,_=_*x+I*h}else{p=p*x+v*h,m=m*x+E*h,S=S*x+w*h,_=_*x+I*h;const U=1/Math.sqrt(p*p+m*m+S*S+_*_);p*=U,m*=U,S*=U,_*=U}}e[i]=p,e[i+1]=m,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],p=r[l+1],m=r[l+2],S=r[l+3],_=u[d],v=u[d+1],E=u[d+2],w=u[d+3];return e[i]=h*w+S*_+p*E-m*v,e[i+1]=p*w+S*v+m*_-h*E,e[i+2]=m*w+S*E+h*v-p*_,e[i+3]=S*w-h*_-p*v-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),S=h(l/2),_=h(u/2),v=p(r/2),E=p(l/2),w=p(u/2);switch(d){case"XYZ":this._x=v*S*_+m*E*w,this._y=m*E*_-v*S*w,this._z=m*S*w+v*E*_,this._w=m*S*_-v*E*w;break;case"YXZ":this._x=v*S*_+m*E*w,this._y=m*E*_-v*S*w,this._z=m*S*w-v*E*_,this._w=m*S*_+v*E*w;break;case"ZXY":this._x=v*S*_-m*E*w,this._y=m*E*_+v*S*w,this._z=m*S*w+v*E*_,this._w=m*S*_-v*E*w;break;case"ZYX":this._x=v*S*_-m*E*w,this._y=m*E*_+v*S*w,this._z=m*S*w-v*E*_,this._w=m*S*_+v*E*w;break;case"YZX":this._x=v*S*_+m*E*w,this._y=m*E*_+v*S*w,this._z=m*S*w-v*E*_,this._w=m*S*_-v*E*w;break;case"XZY":this._x=v*S*_-m*E*w,this._y=m*E*_-v*S*w,this._z=m*S*w+v*E*_,this._w=m*S*_+v*E*w;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],p=i[9],m=i[2],S=i[6],_=i[10],v=r+h+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(S-p)*E,this._y=(u-m)*E,this._z=(d-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(S-p)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+m)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(u-m)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(p+S)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(d-l)/E,this._x=(u+m)/E,this._y=(p+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,p=i._y,m=i._z,S=i._w;return this._x=r*S+d*h+l*m-u*p,this._y=l*S+d*p+u*h-r*m,this._z=u*S+d*m+r*p-l*h,this._w=d*S-r*h-l*p-u*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),S=Math.sin(m);p=Math.sin(p*m)/S,i=Math.sin(i*m)/S,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zm=class zm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(oS.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(oS.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),S=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+p*m+d*_-h*S,this.y=r+p*S+h*m-u*_,this.z=l+p*_+u*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this.z=ze(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this.z=ze(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,p=i.z;return this.x=l*p-u*h,this.y=u*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ze(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zm.prototype.isVector3=!0;let Q=zm;const Fh=new Q,oS=new Ge,Fm=class Fm{constructor(e,i,r,l,u,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m)}set(e,i,r,l,u,d,h,p,m){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=u,S[5]=p,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],S=r[4],_=r[7],v=r[2],E=r[5],w=r[8],I=l[0],M=l[3],x=l[6],U=l[1],G=l[4],D=l[7],O=l[2],L=l[5],z=l[8];return u[0]=d*I+h*U+p*O,u[3]=d*M+h*G+p*L,u[6]=d*x+h*D+p*z,u[1]=m*I+S*U+_*O,u[4]=m*M+S*G+_*L,u[7]=m*x+S*D+_*z,u[2]=v*I+E*U+w*O,u[5]=v*M+E*G+w*L,u[8]=v*x+E*D+w*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8];return i*d*S-i*h*m-r*u*S+r*h*p+l*u*m-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=S*d-h*m,v=h*p-S*u,E=m*u-d*p,w=i*_+r*v+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=_*I,e[1]=(l*m-S*r)*I,e[2]=(h*r-l*d)*I,e[3]=v*I,e[4]=(S*i-l*p)*I,e[5]=(l*u-h*i)*I,e[6]=E*I,e[7]=(r*p-m*i)*I,e[8]=(d*i-r*u)*I,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+i,0,0,1),this}scale(e,i){return co("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bh.makeScale(e,i)),this}rotate(e){return co("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bh.makeRotation(-e)),this}translate(e,i){return co("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fm.prototype.isMatrix3=!0;let ve=Fm;const Bh=new ve,lS=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cS=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tT(){const o={enabled:!0,workingColorSpace:Wu,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Qe&&(l.r=Ga(l.r),l.g=Ga(l.g),l.b=Ga(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qe&&(l.r=uo(l.r),l.g=uo(l.g),l.b=uo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===br?Yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return co("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return co("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Wu]:{primaries:e,whitePoint:r,transfer:Yu,toXYZ:lS,fromXYZ:cS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:r,transfer:Qe,toXYZ:lS,fromXYZ:cS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),o}const Ie=tT();function Ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function uo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Zs;class eT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=Zu("canvas")),Zs.width=e.width,Zs.height=e.height;const l=Zs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Zu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ga(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ga(i[r]/255)*255):i[r]=Ga(i[r]);return{data:i,width:e.width,height:e.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nT=0;class wm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Vl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Hh(l[d].image)):u.push(Hh(l[d]))}else u=Hh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Hh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?eT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let iT=0;const Gh=new Q;class Xn extends rs{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Ba,l=Ba,u=Vn,d=es,h=Vi,p=vi,m=Xn.DEFAULT_ANISOTROPY,S=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Vl(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mp:e.x=e.x-Math.floor(e.x);break;case Ba:e.x=e.x<0?0:1;break;case yp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mp:e.y=e.y-Math.floor(e.y);break;case Ba:e.y=e.y<0?0:1;break;case yp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=qx;Xn.DEFAULT_ANISOTROPY=1;const Bm=class Bm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,m=p[0],S=p[4],_=p[8],v=p[1],E=p[5],w=p[9],I=p[2],M=p[6],x=p[10];if(Math.abs(S-v)<.01&&Math.abs(_-I)<.01&&Math.abs(w-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(_+I)<.1&&Math.abs(w+M)<.1&&Math.abs(m+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const G=(m+1)/2,D=(E+1)/2,O=(x+1)/2,L=(S+v)/4,z=(_+I)/4,T=(w+M)/4;return G>D&&G>O?G<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(G),l=L/r,u=z/r):D>O?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=L/l,u=T/l):O<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(O),r=z/u,l=T/u),this.set(r,l,u,i),this}let U=Math.sqrt((M-w)*(M-w)+(_-I)*(_-I)+(v-S)*(v-S));return Math.abs(U)<.001&&(U=1),this.x=(M-w)/U,this.y=(_-I)/U,this.z=(v-S)/U,this.w=Math.acos((m+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ze(this.x,e.x,i.x),this.y=ze(this.y,e.y,i.y),this.z=ze(this.z,e.z,i.z),this.w=ze(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ze(this.x,e,i),this.y=ze(this.y,e,i),this.z=ze(this.z,e,i),this.w=ze(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ze(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bm.prototype.isVector4=!0;let ln=Bm;class aT extends rs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new Xn(l),d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new wm(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends aT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class tM extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rT extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=Ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Qu=class Qu{constructor(e,i,r,l,u,d,h,p,m,S,_,v,E,w,I,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,p,m,S,_,v,E,w,I,M)}set(e,i,r,l,u,d,h,p,m,S,_,v,E,w,I,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=p,x[2]=m,x[6]=S,x[10]=_,x[14]=v,x[3]=E,x[7]=w,x[11]=I,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ks.setFromMatrixColumn(e,0).length(),u=1/Ks.setFromMatrixColumn(e,1).length(),d=1/Ks.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),S=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=d*S,E=d*_,w=h*S,I=h*_;i[0]=p*S,i[4]=-p*_,i[8]=m,i[1]=E+w*m,i[5]=v-I*m,i[9]=-h*p,i[2]=I-v*m,i[6]=w+E*m,i[10]=d*p}else if(e.order==="YXZ"){const v=p*S,E=p*_,w=m*S,I=m*_;i[0]=v+I*h,i[4]=w*h-E,i[8]=d*m,i[1]=d*_,i[5]=d*S,i[9]=-h,i[2]=E*h-w,i[6]=I+v*h,i[10]=d*p}else if(e.order==="ZXY"){const v=p*S,E=p*_,w=m*S,I=m*_;i[0]=v-I*h,i[4]=-d*_,i[8]=w+E*h,i[1]=E+w*h,i[5]=d*S,i[9]=I-v*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(e.order==="ZYX"){const v=d*S,E=d*_,w=h*S,I=h*_;i[0]=p*S,i[4]=w*m-E,i[8]=v*m+I,i[1]=p*_,i[5]=I*m+v,i[9]=E*m-w,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(e.order==="YZX"){const v=d*p,E=d*m,w=h*p,I=h*m;i[0]=p*S,i[4]=I-v*_,i[8]=w*_+E,i[1]=_,i[5]=d*S,i[9]=-h*S,i[2]=-m*S,i[6]=E*_+w,i[10]=v-I*_}else if(e.order==="XZY"){const v=d*p,E=d*m,w=h*p,I=h*m;i[0]=p*S,i[4]=-_,i[8]=m*S,i[1]=v*_+I,i[5]=d*S,i[9]=E*_-w,i[2]=w*_-E,i[6]=h*S,i[10]=I*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sT,e,oT)}lookAt(e,i,r){const l=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),vr.crossVectors(r,gi),vr.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),vr.crossVectors(r,gi)),vr.normalize(),mu.crossVectors(gi,vr),l[0]=vr.x,l[4]=mu.x,l[8]=gi.x,l[1]=vr.y,l[5]=mu.y,l[9]=gi.y,l[2]=vr.z,l[6]=mu.z,l[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],S=r[1],_=r[5],v=r[9],E=r[13],w=r[2],I=r[6],M=r[10],x=r[14],U=r[3],G=r[7],D=r[11],O=r[15],L=l[0],z=l[4],T=l[8],P=l[12],b=l[1],C=l[5],N=l[9],W=l[13],k=l[2],Z=l[6],X=l[10],q=l[14],j=l[3],$=l[7],ht=l[11],Mt=l[15];return u[0]=d*L+h*b+p*k+m*j,u[4]=d*z+h*C+p*Z+m*$,u[8]=d*T+h*N+p*X+m*ht,u[12]=d*P+h*W+p*q+m*Mt,u[1]=S*L+_*b+v*k+E*j,u[5]=S*z+_*C+v*Z+E*$,u[9]=S*T+_*N+v*X+E*ht,u[13]=S*P+_*W+v*q+E*Mt,u[2]=w*L+I*b+M*k+x*j,u[6]=w*z+I*C+M*Z+x*$,u[10]=w*T+I*N+M*X+x*ht,u[14]=w*P+I*W+M*q+x*Mt,u[3]=U*L+G*b+D*k+O*j,u[7]=U*z+G*C+D*Z+O*$,u[11]=U*T+G*N+D*X+O*ht,u[15]=U*P+G*W+D*q+O*Mt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],p=e[9],m=e[13],S=e[2],_=e[6],v=e[10],E=e[14],w=e[3],I=e[7],M=e[11],x=e[15],U=p*E-m*v,G=h*E-m*_,D=h*v-p*_,O=d*E-m*S,L=d*v-p*S,z=d*_-h*S;return i*(I*U-M*G+x*D)-r*(w*U-M*O+x*L)+l*(w*G-I*O+x*z)-u*(w*D-I*L+M*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],d=e[5],h=e[9],p=e[2],m=e[6],S=e[10];return i*(d*S-h*m)-r*(u*S-h*p)+l*(u*m-d*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],p=e[6],m=e[7],S=e[8],_=e[9],v=e[10],E=e[11],w=e[12],I=e[13],M=e[14],x=e[15],U=i*h-r*d,G=i*p-l*d,D=i*m-u*d,O=r*p-l*h,L=r*m-u*h,z=l*m-u*p,T=S*I-_*w,P=S*M-v*w,b=S*x-E*w,C=_*M-v*I,N=_*x-E*I,W=v*x-E*M,k=U*W-G*N+D*C+O*b-L*P+z*T;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/k;return e[0]=(h*W-p*N+m*C)*Z,e[1]=(l*N-r*W-u*C)*Z,e[2]=(I*z-M*L+x*O)*Z,e[3]=(v*L-_*z-E*O)*Z,e[4]=(p*b-d*W-m*P)*Z,e[5]=(i*W-l*b+u*P)*Z,e[6]=(M*D-w*z-x*G)*Z,e[7]=(S*z-v*D+E*G)*Z,e[8]=(d*N-h*b+m*T)*Z,e[9]=(r*b-i*N-u*T)*Z,e[10]=(w*L-I*D+x*U)*Z,e[11]=(_*D-S*L-E*U)*Z,e[12]=(h*P-d*C-p*T)*Z,e[13]=(i*C-r*P+l*T)*Z,e[14]=(I*G-w*O-M*U)*Z,e[15]=(S*O-_*G+v*U)*Z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,p=e.z,m=u*d,S=u*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,S*h+r,S*p-l*d,0,m*p-l*h,S*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,p=i._w,m=u+u,S=d+d,_=h+h,v=u*m,E=u*S,w=u*_,I=d*S,M=d*_,x=h*_,U=p*m,G=p*S,D=p*_,O=r.x,L=r.y,z=r.z;return l[0]=(1-(I+x))*O,l[1]=(E+D)*O,l[2]=(w-G)*O,l[3]=0,l[4]=(E-D)*L,l[5]=(1-(v+x))*L,l[6]=(M+U)*L,l[7]=0,l[8]=(w+G)*z,l[9]=(M-U)*z,l[10]=(1-(v+I))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let d=Ks.set(l[0],l[1],l[2]).length();const h=Ks.set(l[4],l[5],l[6]).length(),p=Ks.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Fi.copy(this);const m=1/d,S=1/h,_=1/p;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=S,Fi.elements[5]*=S,Fi.elements[6]*=S,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,S=2*u/(i-e),_=2*u/(r-l),v=(i+e)/(i-e),E=(r+l)/(r-l);let w,I;if(p)w=u/(d-u),I=d*u/(d-u);else if(h===ua)w=-(d+u)/(d-u),I=-2*d*u/(d-u);else if(h===Hl)w=-d/(d-u),I=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=I,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=ua,p=!1){const m=this.elements,S=2/(i-e),_=2/(r-l),v=-(i+e)/(i-e),E=-(r+l)/(r-l);let w,I;if(p)w=1/(d-u),I=d/(d-u);else if(h===ua)w=-2/(d-u),I=-(d+u)/(d-u);else if(h===Hl)w=-1/(d-u),I=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=S,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=w,m[14]=I,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Qu.prototype.isMatrix4=!0;let $e=Qu;const Ks=new Q,Fi=new $e,sT=new Q(0,0,0),oT=new Q(1,1,1),vr=new Q,mu=new Q,gi=new Q,uS=new $e,fS=new Ge;class kn{constructor(e=0,i=0,r=0,l=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],p=l[1],m=l[5],S=l[9],_=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ze(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ze(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-S,E),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return uS.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uS,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return fS.setFromEuler(this),this.setFromQuaternion(fS,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class eM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lT=0;const dS=new Q,Qs=new Ge,Na=new $e,gu=new Q,Rl=new Q,cT=new Q,uT=new Ge,hS=new Q(1,0,0),pS=new Q(0,1,0),mS=new Q(0,0,1),gS={type:"added"},fT={type:"removed"},Js={type:"childadded",child:null},Vh={type:"childremoved",child:null};class Fn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Vl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new Q,i=new kn,r=new Ge,l=new Q(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ve}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Qs.setFromAxisAngle(e,i),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,i){return Qs.setFromAxisAngle(e,i),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(hS,e)}rotateY(e){return this.rotateOnAxis(pS,e)}rotateZ(e){return this.rotateOnAxis(mS,e)}translateOnAxis(e,i){return dS.copy(e).applyQuaternion(this.quaternion),this.position.add(dS.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(hS,e)}translateY(e){return this.translateOnAxis(pS,e)}translateZ(e){return this.translateOnAxis(mS,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gu.copy(e):gu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(Rl,gu,this.up):Na.lookAt(gu,Rl,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),Qs.setFromRotationMatrix(Na),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gS),Js.child=e,this.dispatchEvent(Js),Js.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fT),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Na.multiply(e.parent.matrixWorld)),e.applyMatrix4(Na),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gS),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,cT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,uT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(u(e.animations,p))}}if(i){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),_=d(e.shapes),v=d(e.skeletons),E=d(e.animations),w=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),E.length>0&&(r.animations=E),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(h){const p=[];for(const m in h){const S=h[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Fn.DEFAULT_UP=new Q(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _u extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dT={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _u,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _u,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _u,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const I of e.hand.values()){const M=i.getJointPose(I,r),x=this._getHandJoint(m,I);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=S.position.distanceTo(_.position),E=.02,w=.005;m.inputState.pinching&&v>E+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=E-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new _u;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const nM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},vu={h:0,s:0,l:0};function kh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ie.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ie.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ie.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ie.workingColorSpace){if(e=$1(e,1),i=ze(i,0,1),r=ze(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=kh(d,u,e+1/3),this.g=kh(d,u,e),this.b=kh(d,u,e-1/3)}return Ie.colorSpaceToWorking(this,l),this}setStyle(e,i=wn){function r(u){u!==void 0&&parseFloat(u)<1&&pe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:pe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=wn){const r=nM[e.toLowerCase()];return r!==void 0?this.setHex(r,i):pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Ie.workingToColorSpace(Gn.copy(this),e),Math.round(ze(Gn.r*255,0,255))*65536+Math.round(ze(Gn.g*255,0,255))*256+Math.round(ze(Gn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ie.workingColorSpace){Ie.workingToColorSpace(Gn.copy(this),i);const r=Gn.r,l=Gn.g,u=Gn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let p,m;const S=(h+d)/2;if(h===d)p=0,m=0;else{const _=d-h;switch(m=S<=.5?_/(d+h):_/(2-d-h),d){case r:p=(l-u)/_+(l<u?6:0);break;case l:p=(u-r)/_+2;break;case u:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,i=Ie.workingColorSpace){return Ie.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=wn){Ie.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,r=Gn.g,l=Gn.b;return e!==wn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+i,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Sr),e.getHSL(vu);const r=zh(Sr.h,vu.h,i),l=zh(Sr.s,vu.s,i),u=zh(Sr.l,vu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Be;Be.NAMES=nM;class So extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new Q,Ua=new Q,qh=new Q,La=new Q,js=new Q,$s=new Q,_S=new Q,Wh=new Q,Yh=new Q,Zh=new Q,Kh=new ln,Qh=new ln,Jh=new ln;class Gi{constructor(e=new Q,i=new Q,r=new Q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Bi.subVectors(e,i),l.cross(Bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Bi.subVectors(l,i),Ua.subVectors(r,i),qh.subVectors(e,i);const d=Bi.dot(Bi),h=Bi.dot(Ua),p=Bi.dot(qh),m=Ua.dot(Ua),S=Ua.dot(qh),_=d*m-h*h;if(_===0)return u.set(0,0,0),null;const v=1/_,E=(m*p-h*S)*v,w=(d*S-h*p)*v;return u.set(1-E-w,w,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,i,r,l,u,d,h,p){return this.getBarycoord(e,i,r,l,La)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,La.x),p.addScaledVector(d,La.y),p.addScaledVector(h,La.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return Kh.setScalar(0),Qh.setScalar(0),Jh.setScalar(0),Kh.fromBufferAttribute(e,i),Qh.fromBufferAttribute(e,r),Jh.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Kh,u.x),d.addScaledVector(Qh,u.y),d.addScaledVector(Jh,u.z),d}static isFrontFacing(e,i,r,l){return Bi.subVectors(r,i),Ua.subVectors(e,i),Bi.cross(Ua).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Bi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;js.subVectors(l,r),$s.subVectors(u,r),Wh.subVectors(e,r);const p=js.dot(Wh),m=$s.dot(Wh);if(p<=0&&m<=0)return i.copy(r);Yh.subVectors(e,l);const S=js.dot(Yh),_=$s.dot(Yh);if(S>=0&&_<=S)return i.copy(l);const v=p*_-S*m;if(v<=0&&p>=0&&S<=0)return d=p/(p-S),i.copy(r).addScaledVector(js,d);Zh.subVectors(e,u);const E=js.dot(Zh),w=$s.dot(Zh);if(w>=0&&E<=w)return i.copy(u);const I=E*m-p*w;if(I<=0&&m>=0&&w<=0)return h=m/(m-w),i.copy(r).addScaledVector($s,h);const M=S*w-E*_;if(M<=0&&_-S>=0&&E-w>=0)return _S.subVectors(u,l),h=(_-S)/(_-S+(E-w)),i.copy(l).addScaledVector(_S,h);const x=1/(M+I+v);return d=I*x,h=v*x,i.copy(r).addScaledVector(js,d).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xl{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Hi):Hi.fromBufferAttribute(u,d),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Su.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Su.copy(r.boundingBox)),Su.applyMatrix4(e.matrixWorld),this.union(Su)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),xu.subVectors(this.max,Cl),to.subVectors(e.a,Cl),eo.subVectors(e.b,Cl),no.subVectors(e.c,Cl),xr.subVectors(eo,to),Mr.subVectors(no,eo),Qr.subVectors(to,no);let i=[0,-xr.z,xr.y,0,-Mr.z,Mr.y,0,-Qr.z,Qr.y,xr.z,0,-xr.x,Mr.z,0,-Mr.x,Qr.z,0,-Qr.x,-xr.y,xr.x,0,-Mr.y,Mr.x,0,-Qr.y,Qr.x,0];return!jh(i,to,eo,no,xu)||(i=[1,0,0,0,1,0,0,0,1],!jh(i,to,eo,no,xu))?!1:(Mu.crossVectors(xr,Mr),i=[Mu.x,Mu.y,Mu.z],jh(i,to,eo,no,xu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Hi=new Q,Su=new Xl,to=new Q,eo=new Q,no=new Q,xr=new Q,Mr=new Q,Qr=new Q,Cl=new Q,xu=new Q,Mu=new Q,Jr=new Q;function jh(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Jr.fromArray(o,u);const h=l.x*Math.abs(Jr.x)+l.y*Math.abs(Jr.y)+l.z*Math.abs(Jr.z),p=e.dot(Jr),m=i.dot(Jr),S=r.dot(Jr);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>h)return!1}return!0}const xn=new Q,yu=new we;let hT=0;class Va extends rs{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Z1,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yu.fromBufferAttribute(this,i),yu.applyMatrix3(e),this.setXY(i,yu.x,yu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Al(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ai(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Al(i,this.array)),i}setX(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Al(i,this.array)),i}setY(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Al(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Al(i,this.array)),i}setW(e,i){return this.normalized&&(i=ai(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),r=ai(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),r=ai(r,this.array),l=ai(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=ai(i,this.array),r=ai(r,this.array),l=ai(l,this.array),u=ai(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class iM extends Va{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class aM extends Va{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class hn extends Va{constructor(e,i,r){super(new Float32Array(e),i,r)}}const pT=new Xl,wl=new Q,$h=new Q;class Dm{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):pT.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const i=wl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add($h)),this.expandByPoint(wl.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mT=0;const Ni=new $e,tp=new Fn,io=new Q,_i=new Xl,Dl=new Xl,Cn=new Q;class jn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Vl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K1(e)?aM:iM)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ve().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,i,r){return Ni.makeTranslation(e,i,r),this.applyMatrix4(Ni),this}scale(e,i,r){return Ni.makeScale(e,i,r),this.applyMatrix4(Ni),this}lookAt(e){return tp.lookAt(e),tp.updateMatrix(),this.applyMatrix4(tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new hn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];_i.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Dl.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(_i.min,Dl.min),_i.expandByPoint(Cn),Cn.addVectors(_i.max,Dl.max),_i.expandByPoint(Cn)):(_i.expandByPoint(Dl.min),_i.expandByPoint(Dl.max))}_i.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Cn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],p=this.morphTargetsRelative;for(let m=0,S=h.count;m<S;m++)Cn.fromBufferAttribute(h,m),p&&(io.fromBufferAttribute(e,m),Cn.add(io)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Va(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<r.count;T++)h[T]=new Q,p[T]=new Q;const m=new Q,S=new Q,_=new Q,v=new we,E=new we,w=new we,I=new Q,M=new Q;function x(T,P,b){m.fromBufferAttribute(r,T),S.fromBufferAttribute(r,P),_.fromBufferAttribute(r,b),v.fromBufferAttribute(u,T),E.fromBufferAttribute(u,P),w.fromBufferAttribute(u,b),S.sub(m),_.sub(m),E.sub(v),w.sub(v);const C=1/(E.x*w.y-w.x*E.y);isFinite(C)&&(I.copy(S).multiplyScalar(w.y).addScaledVector(_,-E.y).multiplyScalar(C),M.copy(_).multiplyScalar(E.x).addScaledVector(S,-w.x).multiplyScalar(C),h[T].add(I),h[P].add(I),h[b].add(I),p[T].add(M),p[P].add(M),p[b].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let T=0,P=U.length;T<P;++T){const b=U[T],C=b.start,N=b.count;for(let W=C,k=C+N;W<k;W+=3)x(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const G=new Q,D=new Q,O=new Q,L=new Q;function z(T){O.fromBufferAttribute(l,T),L.copy(O);const P=h[T];G.copy(P),G.sub(O.multiplyScalar(O.dot(P))).normalize(),D.crossVectors(L,P);const C=D.dot(p[T])<0?-1:1;d.setXYZW(T,G.x,G.y,G.z,C)}for(let T=0,P=U.length;T<P;++T){const b=U[T],C=b.start,N=b.count;for(let W=C,k=C+N;W<k;W+=3)z(e.getX(W+0)),z(e.getX(W+1)),z(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Va(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,E=r.count;v<E;v++)r.setXYZ(v,0,0,0);const l=new Q,u=new Q,d=new Q,h=new Q,p=new Q,m=new Q,S=new Q,_=new Q;if(e)for(let v=0,E=e.count;v<E;v+=3){const w=e.getX(v+0),I=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,M),S.subVectors(d,u),_.subVectors(l,u),S.cross(_),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,M),h.add(S),p.add(S),m.add(S),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(I,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),S.subVectors(d,u),_.subVectors(l,u),S.cross(_),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,p){const m=h.array,S=h.itemSize,_=h.normalized,v=new m.constructor(p.length*S);let E=0,w=0;for(let I=0,M=p.length;I<M;I++){h.isInterleavedBufferAttribute?E=p[I]*h.data.stride+h.offset:E=p[I]*S;for(let x=0;x<S;x++)v[w++]=m[E++]}return new Va(v,S,_)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);i.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let S=0,_=m.length;S<_;S++){const v=m[S],E=e(v,r);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let _=0,v=m.length;_<v;_++){const E=m[_];S.push(E.toJSON(e.data))}S.length>0&&(l[p]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const u=e.morphAttributes;for(const m in u){const S=[],_=u[m];for(let v=0,E=_.length;v<E;v++)S.push(_[v].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ep=new Q,gT=new Q,_T=new ve;class Tr{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ep.subVectors(r,i).cross(gT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(ep),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||_T.getNormalMatrix(e),l=this.coplanarPoint(ep).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let vT=0;class kl extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Vl(),this.name="",this.type="Material",this.blending=Il,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Px,this.blendDst=Ix,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ph,this.stencilZFail=Ph,this.stencilZPass=Ph,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){pe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){pe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Tr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new we().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pa=new Q,np=new Q,Eu=new Q,Tu=new Q;class ST{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){np.copy(e).add(i).multiplyScalar(.5),Eu.copy(i).sub(e).normalize(),Tu.copy(this.origin).sub(np);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Eu),h=Tu.dot(this.direction),p=-Tu.dot(Eu),m=Tu.lengthSq(),S=Math.abs(1-d*d);let _,v,E,w;if(S>0)if(_=d*p-h,v=d*h-p,w=u*S,_>=0)if(v>=-w)if(v<=w){const I=1/S;_*=I,v*=I,E=_*(_+d*v+2*h)+v*(d*_+v+2*p)+m}else v=u,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;else v=-u,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;else v<=-w?(_=Math.max(0,-(-d*u+h)),v=_>0?-u:Math.min(Math.max(-u,-p),u),E=-_*_+v*(v+2*p)+m):v<=w?(_=0,v=Math.min(Math.max(-u,-p),u),E=v*(v+2*p)+m):(_=Math.max(0,-(d*u+h)),v=_>0?u:Math.min(Math.max(-u,-p),u),E=-_*_+v*(v+2*p)+m);else v=d>0?-u:u,_=Math.max(0,-(d*v+h)),E=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(np).addScaledVector(Eu,v),E}intersectSphere(e,i){if(e.radius<0)return null;Pa.subVectors(e.center,this.origin);const r=Pa.dot(this.direction),l=Pa.dot(Pa)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,p;const m=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),S>=0?(u=(e.min.y-v.y)*S,d=(e.max.y-v.y)*S):(u=(e.max.y-v.y)*S,d=(e.min.y-v.y)*S),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,i,r,l,u){const d=this.origin,h=this.direction,p=h.x,m=h.y,S=h.z,_=e.x-d.x,v=e.y-d.y,E=e.z-d.z,w=i.x-d.x,I=i.y-d.y,M=i.z-d.z,x=r.x-d.x,U=r.y-d.y,G=r.z-d.z,D=Math.abs(p),O=Math.abs(m),L=Math.abs(S);let z,T,P,b,C,N,W,k,Z,X,q,j;if(D>=O&&D>=L?(P=p,N=_,Z=w,j=x,p>=0?(z=m,T=S,b=v,C=E,W=I,k=M,X=U,q=G):(z=S,T=m,b=E,C=v,W=M,k=I,X=G,q=U)):O>=L?(P=m,N=v,Z=I,j=U,m>=0?(z=S,T=p,b=E,C=_,W=M,k=w,X=G,q=x):(z=p,T=S,b=_,C=E,W=w,k=M,X=x,q=G)):(P=S,N=E,Z=M,j=G,S>=0?(z=p,T=m,b=_,C=v,W=w,k=I,X=x,q=U):(z=m,T=p,b=v,C=_,W=I,k=w,X=U,q=x)),P===0)return null;const $=z/P,ht=T/P,Mt=1/P,Lt=b-$*N,wt=C-ht*N,V=W-$*Z,_t=k-ht*Z,dt=X-$*j,B=q-ht*j,nt=dt*_t-B*V,gt=Lt*B-wt*dt,Rt=V*wt-_t*Lt;if(l){if(nt<0||gt<0||Rt<0)return null}else if((nt<0||gt<0||Rt<0)&&(nt>0||gt>0||Rt>0))return null;const st=nt+gt+Rt;if(st===0)return null;const At=Mt*(nt*N+gt*Z+Rt*j);return(st>0?At<0:At>0)?null:this.at(At/st,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ar extends kl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vS=new $e,jr=new ST,bu=new Dm,SS=new Q,Au=new Q,Ru=new Q,Cu=new Q,ip=new Q,wu=new Q,xS=new Q,Du=new Q;class mn extends Fn{constructor(e=new jn,i=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){wu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const S=h[p],_=u[p];S!==0&&(ip.fromBufferAttribute(_,e),d?wu.addScaledVector(ip,S):wu.addScaledVector(ip.sub(i),S))}i.add(wu)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(u),jr.copy(e.ray).recast(e.near),!(bu.containsPoint(jr.origin)===!1&&(jr.intersectSphere(bu,SS)===null||jr.origin.distanceToSquared(SS)>(e.far-e.near)**2))&&(vS.copy(u).invert(),jr.copy(e.ray).applyMatrix4(vS),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,jr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,S=u.attributes.uv1,_=u.attributes.normal,v=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,I=v.length;w<I;w++){const M=v[w],x=d[M.materialIndex],U=Math.max(M.start,E.start),G=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let D=U,O=G;D<O;D+=3){const L=h.getX(D),z=h.getX(D+1),T=h.getX(D+2);l=Nu(this,x,e,r,m,S,_,L,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),I=Math.min(h.count,E.start+E.count);for(let M=w,x=I;M<x;M+=3){const U=h.getX(M),G=h.getX(M+1),D=h.getX(M+2);l=Nu(this,d,e,r,m,S,_,U,G,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,I=v.length;w<I;w++){const M=v[w],x=d[M.materialIndex],U=Math.max(M.start,E.start),G=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let D=U,O=G;D<O;D+=3){const L=D,z=D+1,T=D+2;l=Nu(this,x,e,r,m,S,_,L,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),I=Math.min(p.count,E.start+E.count);for(let M=w,x=I;M<x;M+=3){const U=M,G=M+1,D=M+2;l=Nu(this,d,e,r,m,S,_,U,G,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function xT(o,e,i,r,l,u,d,h){let p;if(e.side===ri?p=r.intersectTriangle(d,u,l,!0,h):p=r.intersectTriangle(l,u,d,e.side===Si,h),p===null)return null;Du.copy(h),Du.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Du);return m<i.near||m>i.far?null:{distance:m,point:Du.clone(),object:o}}function Nu(o,e,i,r,l,u,d,h,p,m){o.getVertexPosition(h,Au),o.getVertexPosition(p,Ru),o.getVertexPosition(m,Cu);const S=xT(o,e,i,r,Au,Ru,Cu,xS);if(S){const _=new Q;Gi.getBarycoord(xS,Au,Ru,Cu,_),l&&(S.uv=Gi.getInterpolatedAttribute(l,h,p,m,_,new we)),u&&(S.uv1=Gi.getInterpolatedAttribute(u,h,p,m,_,new we)),d&&(S.normal=Gi.getInterpolatedAttribute(d,h,p,m,_,new Q),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Q,materialIndex:0};Gi.getNormal(Au,Ru,Cu,v.normal),S.face=v,S.barycoord=_}return S}class MT extends Xn{constructor(e=null,i=1,r=1,l,u,d,h,p,m=zn,S=zn,_,v){super(null,d,h,p,m,S,l,u,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $r=new Dm,yT=new we(.5,.5),Uu=new Q;class Nm{constructor(e=new Tr,i=new Tr,r=new Tr,l=new Tr,u=new Tr,d=new Tr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ua,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],p=u[2],m=u[3],S=u[4],_=u[5],v=u[6],E=u[7],w=u[8],I=u[9],M=u[10],x=u[11],U=u[12],G=u[13],D=u[14],O=u[15];if(l[0].setComponents(m-d,E-S,x-w,O-U).normalize(),l[1].setComponents(m+d,E+S,x+w,O+U).normalize(),l[2].setComponents(m+h,E+_,x+I,O+G).normalize(),l[3].setComponents(m-h,E-_,x-I,O-G).normalize(),r)l[4].setComponents(p,v,M,D).normalize(),l[5].setComponents(m-p,E-v,x-M,O-D).normalize();else if(l[4].setComponents(m-p,E-v,x-M,O-D).normalize(),i===ua)l[5].setComponents(m+p,E+v,x+M,O+D).normalize();else if(i===Hl)l[5].setComponents(p,v,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const i=yT.distanceTo(e.center);return $r.radius=.7071067811865476+i,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uu.x=l.normal.x>0?e.max.x:e.min.x,Uu.y=l.normal.y>0?e.max.y:e.min.y,Uu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rM extends Xn{constructor(e=[],i=is,r,l,u,d,h,p,m,S){super(e,i,r,l,u,d,h,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xo extends Xn{constructor(e,i,r,l,u,d,h,p,m){super(e,i,r,l,u,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gl extends Xn{constructor(e,i,r=da,l,u,d,h=zn,p=zn,m,S=Xa,_=1){if(S!==Xa&&S!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,u,d,h,p,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class ET extends Gl{constructor(e,i=da,r=is,l,u,d=zn,h=zn,p,m=Xa){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,r,l,u,d,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sM extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ql extends jn{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],m=[],S=[],_=[];let v=0,E=0;w("z","y","x",-1,-1,r,i,e,d,u,0),w("z","y","x",1,-1,r,i,-e,d,u,1),w("x","z","y",1,1,e,r,i,l,d,2),w("x","z","y",1,-1,e,r,-i,l,d,3),w("x","y","z",1,-1,e,i,r,l,u,4),w("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(_,2));function w(I,M,x,U,G,D,O,L,z,T,P){const b=D/z,C=O/T,N=D/2,W=O/2,k=L/2,Z=z+1,X=T+1;let q=0,j=0;const $=new Q;for(let ht=0;ht<X;ht++){const Mt=ht*C-W;for(let Lt=0;Lt<Z;Lt++){const wt=Lt*b-N;$[I]=wt*U,$[M]=Mt*G,$[x]=k,m.push($.x,$.y,$.z),$[I]=0,$[M]=0,$[x]=L>0?1:-1,S.push($.x,$.y,$.z),_.push(Lt/z),_.push(1-ht/T),q+=1}}for(let ht=0;ht<T;ht++)for(let Mt=0;Mt<z;Mt++){const Lt=v+Mt+Z*ht,wt=v+Mt+Z*(ht+1),V=v+(Mt+1)+Z*(ht+1),_t=v+(Mt+1)+Z*ht;p.push(Lt,wt,_t),p.push(wt,V,_t),j+=6}h.addGroup(E,j,P),E+=j,v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Um extends jn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],d=[];h(l),m(r),S(),this.setAttribute("position",new hn(u,3)),this.setAttribute("normal",new hn(u.slice(),3)),this.setAttribute("uv",new hn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(U){const G=new Q,D=new Q,O=new Q;for(let L=0;L<i.length;L+=3)E(i[L+0],G),E(i[L+1],D),E(i[L+2],O),p(G,D,O,U)}function p(U,G,D,O){const L=O+1,z=[];for(let T=0;T<=L;T++){z[T]=[];const P=U.clone().lerp(D,T/L),b=G.clone().lerp(D,T/L),C=L-T;for(let N=0;N<=C;N++)N===0&&T===L?z[T][N]=P:z[T][N]=P.clone().lerp(b,N/C)}for(let T=0;T<L;T++)for(let P=0;P<2*(L-T)-1;P++){const b=Math.floor(P/2);P%2===0?(v(z[T][b+1]),v(z[T+1][b]),v(z[T][b])):(v(z[T][b+1]),v(z[T+1][b+1]),v(z[T+1][b]))}}function m(U){const G=new Q;for(let D=0;D<u.length;D+=3)G.x=u[D+0],G.y=u[D+1],G.z=u[D+2],G.normalize().multiplyScalar(U),u[D+0]=G.x,u[D+1]=G.y,u[D+2]=G.z}function S(){const U=new Q;for(let G=0;G<u.length;G+=3){U.x=u[G+0],U.y=u[G+1],U.z=u[G+2];const D=M(U)/2/Math.PI+.5,O=x(U)/Math.PI+.5;d.push(D,1-O)}w(),_()}function _(){for(let U=0;U<d.length;U+=6){const G=d[U+0],D=d[U+2],O=d[U+4],L=Math.max(G,D,O),z=Math.min(G,D,O);L>.9&&z<.1&&(G<.2&&(d[U+0]+=1),D<.2&&(d[U+2]+=1),O<.2&&(d[U+4]+=1))}}function v(U){u.push(U.x,U.y,U.z)}function E(U,G){const D=U*3;G.x=e[D+0],G.y=e[D+1],G.z=e[D+2]}function w(){const U=new Q,G=new Q,D=new Q,O=new Q,L=new we,z=new we,T=new we;for(let P=0,b=0;P<u.length;P+=9,b+=6){U.set(u[P+0],u[P+1],u[P+2]),G.set(u[P+3],u[P+4],u[P+5]),D.set(u[P+6],u[P+7],u[P+8]),L.set(d[b+0],d[b+1]),z.set(d[b+2],d[b+3]),T.set(d[b+4],d[b+5]),O.copy(U).add(G).add(D).divideScalar(3);const C=M(O);I(L,b+0,U,C),I(z,b+2,G,C),I(T,b+4,D,C)}}function I(U,G,D,O){O<0&&U.x===1&&(d[G]=U.x-1),D.x===0&&D.z===0&&(d[G]=O/2/Math.PI+.5)}function M(U){return Math.atan2(U.z,-U.x)}function x(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Um(e.vertices,e.indices,e.radius,e.detail)}}class Lm extends Um{constructor(e=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Lm(e.radius,e.detail)}}class ma extends jn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,S=p+1,_=e/h,v=i/p,E=[],w=[],I=[],M=[];for(let x=0;x<S;x++){const U=x*v-d;for(let G=0;G<m;G++){const D=G*_-u;w.push(D,-U,0),I.push(0,0,1),M.push(G/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<h;U++){const G=U+m*x,D=U+m*(x+1),O=U+1+m*(x+1),L=U+1+m*x;E.push(G,D,L),E.push(D,O,L)}this.setIndex(E),this.setAttribute("position",new hn(w,3)),this.setAttribute("normal",new hn(I,3)),this.setAttribute("uv",new hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}function vo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(MS(l))l.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(MS(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Qn(o){const e={};for(let i=0;i<o.length;i++){const r=vo(o[i]);for(const l in r)e[l]=r[l]}return e}function MS(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function TT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function oM(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ie.workingColorSpace}const bT={clone:vo,merge:Qn};var AT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends kl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AT,this.fragmentShader=RT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=TT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Be().setHex(l.value);break;case"v2":this.uniforms[r].value=new we().fromArray(l.value);break;case"v3":this.uniforms[r].value=new Q().fromArray(l.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ve().fromArray(l.value);break;case"m4":this.uniforms[r].value=new $e().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CT extends pa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mo extends kl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wT extends kl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DT extends kl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Om extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class yo extends Om{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const ap=new $e,yS=new Q,ES=new Q;class NT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nm,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;yS.setFromMatrixPosition(e.matrixWorld),i.position.copy(yS),ES.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ES),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){ap.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(ap,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,h=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;e.coordinateSystem===Hl||e.reversedDepth?i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),i.multiply(ap)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lu=new Q,Ou=new Ge,aa=new Q;class lM extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lu,Ou,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Ou,aa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Lu,Ou,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Ou,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yr=new Q,TS=new we,bS=new we;class In extends lM{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tm*2*Math.atan(Math.tan(Ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,i){return this.getViewBounds(e,TS,bS),i.subVectors(bS,TS)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ih*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Pm extends lM{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,h-=S*this.view.offsetY,p=h-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class UT extends NT{constructor(){super(new Pm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eo extends Om{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new UT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class To extends Om{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ao=-90,ro=1;class LT extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new In(ao,ro,e,i);l.layers=this.layers,this.add(l);const u=new In(ao,ro,e,i);u.layers=this.layers,this.add(u);const d=new In(ao,ro,e,i);d.layers=this.layers,this.add(d);const h=new In(ao,ro,e,i);h.layers=this.layers,this.add(h);const p=new In(ao,ro,e,i);p.layers=this.layers,this.add(p);const m=new In(ao,ro,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,p]=i;for(const m of i)this.remove(m);if(e===ua)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,p,m,S]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const I=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=I,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,v,E),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class OT extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hm=class Hm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};Hm.prototype.isMatrix2=!0;let AS=Hm;function RS(o,e,i,r){const l=PT(r);switch(i){case Qx:return o*e;case jx:return o*e/l.components*l.byteLength;case Tm:return o*e/l.components*l.byteLength;case as:return o*e*2/l.components*l.byteLength;case bm:return o*e*2/l.components*l.byteLength;case Jx:return o*e*3/l.components*l.byteLength;case Vi:return o*e*4/l.components*l.byteLength;case Am:return o*e*4/l.components*l.byteLength;case Bu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Gu:case Vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tp:case Ap:return Math.max(o,16)*Math.max(e,8)/4;case Ep:case bp:return Math.max(o,8)*Math.max(e,8)/2;case Rp:case Cp:case Dp:case Np:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wp:case ku:case Up:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Op:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case zp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Fp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Hp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Xp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case kp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case qp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Wp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Yp:case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Qp:case Jp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qu:case jp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function PT(o){switch(o){case vi:case Wx:return{byteLength:1,components:1};case Fl:case Yx:case ha:return{byteLength:2,components:1};case ym:case Em:return{byteLength:2,components:4};case da:case Mm:case ca:return{byteLength:4,components:1};case Zx:case Kx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);function cM(){let o=null,e=!1,i=null,r=null;function l(u,d){r=o.requestAnimationFrame(l),i(u,d)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function IT(o){const e=new WeakMap;function i(h,p){const m=h.array,S=h.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,S),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const S=p.array,_=p.updateRanges;if(o.bindBuffer(m,h),_.length===0)o.bufferSubData(m,0,S);else{_.sort((E,w)=>E.start-w.start);let v=0;for(let E=1;E<_.length;E++){const w=_[v],I=_[E];I.start<=w.start+w.count+1?w.count=Math.max(w.count,I.start+I.count-w.start):(++v,_[v]=I)}_.length=v+1;for(let E=0,w=_.length;E<w;E++){const I=_[E];o.bufferSubData(m,I.start*S.BYTES_PER_ELEMENT,S,I.start,I.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(o.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:u,update:d}}var zT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FT=`#ifdef USE_ALPHAHASH
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
#endif`,BT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XT=`#ifdef USE_AOMAP
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
#endif`,kT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qT=`#ifdef USE_BATCHING
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
#endif`,WT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QT=`#ifdef USE_IRIDESCENCE
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
#endif`,JT=`#ifdef USE_BUMPMAP
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
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ab=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sb=`#define PI 3.141592653589793
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
} // validated`,ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lb=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",pb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tb=`#ifdef USE_GRADIENTMAP
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
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wb=`#ifdef USE_ENVMAP
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
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
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
#endif`,Pb=`uniform sampler2D dfgLUT;
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
}`,Ib=`
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yb=`#if defined( USE_POINTS_UV )
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
#endif`,Zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
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
#endif`,tA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sA=`#ifdef USE_NORMALMAP
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
#endif`,oA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yA=`float getShadowMask() {
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
}`,EA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TA=`#ifdef USE_SKINNING
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
#endif`,bA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
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
#endif`,RA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,UA=`#ifdef USE_TRANSMISSION
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
#endif`,LA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FA=`uniform sampler2D t2D;
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
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
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
}`,kA=`#if DEPTH_PACKING == 3200
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
}`,qA=`#define DISTANCE
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
}`,WA=`#define DISTANCE
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`uniform float scale;
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
}`,QA=`uniform vec3 diffuse;
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
}`,JA=`#include <common>
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
}`,jA=`uniform vec3 diffuse;
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
}`,$A=`#define LAMBERT
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
}`,tR=`#define LAMBERT
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
}`,eR=`#define MATCAP
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
}`,nR=`#define MATCAP
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
}`,iR=`#define NORMAL
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
}`,aR=`#define NORMAL
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
}`,rR=`#define PHONG
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
}`,sR=`#define PHONG
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
}`,oR=`#define STANDARD
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
}`,lR=`#define STANDARD
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
}`,cR=`#define TOON
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
}`,uR=`#define TOON
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
}`,fR=`uniform float size;
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
}`,dR=`uniform vec3 diffuse;
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
}`,hR=`#include <common>
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
}`,pR=`uniform vec3 color;
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
}`,mR=`uniform float rotation;
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
}`,gR=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:zT,alphahash_pars_fragment:FT,alphamap_fragment:BT,alphamap_pars_fragment:HT,alphatest_fragment:GT,alphatest_pars_fragment:VT,aomap_fragment:XT,aomap_pars_fragment:kT,batching_pars_vertex:qT,batching_vertex:WT,begin_vertex:YT,beginnormal_vertex:ZT,bsdfs:KT,iridescence_fragment:QT,bumpmap_pars_fragment:JT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:$T,clipping_planes_pars_vertex:tb,clipping_planes_vertex:eb,color_fragment:nb,color_pars_fragment:ib,color_pars_vertex:ab,color_vertex:rb,common:sb,cube_uv_reflection_fragment:ob,defaultnormal_vertex:lb,displacementmap_pars_vertex:cb,displacementmap_vertex:ub,emissivemap_fragment:fb,emissivemap_pars_fragment:db,colorspace_fragment:hb,colorspace_pars_fragment:pb,envmap_fragment:mb,envmap_common_pars_fragment:gb,envmap_pars_fragment:_b,envmap_pars_vertex:vb,envmap_physical_pars_fragment:wb,envmap_vertex:Sb,fog_vertex:xb,fog_pars_vertex:Mb,fog_fragment:yb,fog_pars_fragment:Eb,gradientmap_pars_fragment:Tb,lightmap_pars_fragment:bb,lights_lambert_fragment:Ab,lights_lambert_pars_fragment:Rb,lights_pars_begin:Cb,lights_toon_fragment:Db,lights_toon_pars_fragment:Nb,lights_phong_fragment:Ub,lights_phong_pars_fragment:Lb,lights_physical_fragment:Ob,lights_physical_pars_fragment:Pb,lights_fragment_begin:Ib,lights_fragment_maps:zb,lights_fragment_end:Fb,lightprobes_pars_fragment:Bb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Xb,map_fragment:kb,map_pars_fragment:qb,map_particle_fragment:Wb,map_particle_pars_fragment:Yb,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:Qb,morphcolor_vertex:Jb,morphnormal_vertex:jb,morphtarget_pars_vertex:$b,morphtarget_vertex:tA,normal_fragment_begin:eA,normal_fragment_maps:nA,normal_pars_fragment:iA,normal_pars_vertex:aA,normal_vertex:rA,normalmap_pars_fragment:sA,clearcoat_normal_fragment_begin:oA,clearcoat_normal_fragment_maps:lA,clearcoat_pars_fragment:cA,iridescence_pars_fragment:uA,opaque_fragment:fA,packing:dA,premultiplied_alpha_fragment:hA,project_vertex:pA,dithering_fragment:mA,dithering_pars_fragment:gA,roughnessmap_fragment:_A,roughnessmap_pars_fragment:vA,shadowmap_pars_fragment:SA,shadowmap_pars_vertex:xA,shadowmap_vertex:MA,shadowmask_pars_fragment:yA,skinbase_vertex:EA,skinning_pars_vertex:TA,skinning_vertex:bA,skinnormal_vertex:AA,specularmap_fragment:RA,specularmap_pars_fragment:CA,tonemapping_fragment:wA,tonemapping_pars_fragment:DA,transmission_fragment:NA,transmission_pars_fragment:UA,uv_pars_fragment:LA,uv_pars_vertex:OA,uv_vertex:PA,worldpos_vertex:IA,background_vert:zA,background_frag:FA,backgroundCube_vert:BA,backgroundCube_frag:HA,cube_vert:GA,cube_frag:VA,depth_vert:XA,depth_frag:kA,distance_vert:qA,distance_frag:WA,equirect_vert:YA,equirect_frag:ZA,linedashed_vert:KA,linedashed_frag:QA,meshbasic_vert:JA,meshbasic_frag:jA,meshlambert_vert:$A,meshlambert_frag:tR,meshmatcap_vert:eR,meshmatcap_frag:nR,meshnormal_vert:iR,meshnormal_frag:aR,meshphong_vert:rR,meshphong_frag:sR,meshphysical_vert:oR,meshphysical_frag:lR,meshtoon_vert:cR,meshtoon_frag:uR,points_vert:fR,points_frag:dR,shadow_vert:hR,shadow_frag:pR,sprite_vert:mR,sprite_frag:gR},Xt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},oa={basic:{uniforms:Qn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Qn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Qn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Qn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Qn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new Be(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Qn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Qn([Xt.points,Xt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Qn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Qn([Xt.common,Xt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Qn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Qn([Xt.sprite,Xt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Qn([Xt.common,Xt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Qn([Xt.lights,Xt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};oa.physical={uniforms:Qn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Pu={r:0,b:0,g:0},_R=new $e,uM=new ve;uM.set(-1,0,0,0,1,0,0,0,1);function vR(o,e,i,r,l,u){const d=new Be(0);let h=l===!0?0:1,p,m,S=null,_=0,v=null;function E(U){let G=U.isScene===!0?U.background:null;if(G&&G.isTexture){const D=U.backgroundBlurriness>0;G=e.get(G,D)}return G}function w(U){let G=!1;const D=E(U);D===null?M(d,h):D&&D.isColor&&(M(D,1),G=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||G)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function I(U,G){const D=E(G);D&&(D.isCubeTexture||D.mapping===Ju)?(m===void 0&&(m=new mn(new ql(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:vo(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(_R.makeRotationFromEuler(G.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(uM),m.material.toneMapped=Ie.getTransfer(D.colorSpace)!==Qe,(S!==D||_!==D.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,_=D.version,v=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new mn(new ma(2,2),new pa({name:"BackgroundMaterial",uniforms:vo(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,p.material.toneMapped=Ie.getTransfer(D.colorSpace)!==Qe,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||_!==D.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,S=D,_=D.version,v=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function M(U,G){U.getRGB(Pu,oM(o)),i.buffers.color.setClear(Pu.r,Pu.g,Pu.b,G,u)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,G=1){d.set(U),h=G,M(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,M(d,h)},render:w,addToRenderList:I,dispose:x}}function SR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function h(C,N,W,k,Z){let X=!1;const q=_(C,k,W,N);u!==q&&(u=q,m(u.object)),X=E(C,k,W,Z),X&&w(C,k,W,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,D(C,N,W,k),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function _(C,N,W,k){const Z=k.wireframe===!0;let X=r[N.id];X===void 0&&(X={},r[N.id]=X);const q=C.isInstancedMesh===!0?C.id:0;let j=X[q];j===void 0&&(j={},X[q]=j);let $=j[W.id];$===void 0&&($={},j[W.id]=$);let ht=$[Z];return ht===void 0&&(ht=v(p()),$[Z]=ht),ht}function v(C){const N=[],W=[],k=[];for(let Z=0;Z<i;Z++)N[Z]=0,W[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:k,object:C,attributes:{},index:null}}function E(C,N,W,k){const Z=u.attributes,X=N.attributes;let q=0;const j=W.getAttributes();for(const $ in j)if(j[$].location>=0){const Mt=Z[$];let Lt=X[$];if(Lt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Lt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Lt=C.instanceColor)),Mt===void 0||Mt.attribute!==Lt||Lt&&Mt.data!==Lt.data)return!0;q++}return u.attributesNum!==q||u.index!==k}function w(C,N,W,k){const Z={},X=N.attributes;let q=0;const j=W.getAttributes();for(const $ in j)if(j[$].location>=0){let Mt=X[$];Mt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor));const Lt={};Lt.attribute=Mt,Mt&&Mt.data&&(Lt.data=Mt.data),Z[$]=Lt,q++}u.attributes=Z,u.attributesNum=q,u.index=k}function I(){const C=u.newAttributes;for(let N=0,W=C.length;N<W;N++)C[N]=0}function M(C){x(C,0)}function x(C,N){const W=u.newAttributes,k=u.enabledAttributes,Z=u.attributeDivisors;W[C]=1,k[C]===0&&(o.enableVertexAttribArray(C),k[C]=1),Z[C]!==N&&(o.vertexAttribDivisor(C,N),Z[C]=N)}function U(){const C=u.newAttributes,N=u.enabledAttributes;for(let W=0,k=N.length;W<k;W++)N[W]!==C[W]&&(o.disableVertexAttribArray(W),N[W]=0)}function G(C,N,W,k,Z,X,q){q===!0?o.vertexAttribIPointer(C,N,W,Z,X):o.vertexAttribPointer(C,N,W,k,Z,X)}function D(C,N,W,k){I();const Z=k.attributes,X=W.getAttributes(),q=N.defaultAttributeValues;for(const j in X){const $=X[j];if($.location>=0){let ht=Z[j];if(ht===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor)),ht!==void 0){const Mt=ht.normalized,Lt=ht.itemSize,wt=e.get(ht);if(wt===void 0)continue;const V=wt.buffer,_t=wt.type,dt=wt.bytesPerElement,B=_t===o.INT||_t===o.UNSIGNED_INT||ht.gpuType===Mm;if(ht.isInterleavedBufferAttribute){const nt=ht.data,gt=nt.stride,Rt=ht.offset;if(nt.isInstancedInterleavedBuffer){for(let st=0;st<$.locationSize;st++)x($.location+st,nt.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<$.locationSize;st++)M($.location+st);o.bindBuffer(o.ARRAY_BUFFER,V);for(let st=0;st<$.locationSize;st++)G($.location+st,Lt/$.locationSize,_t,Mt,gt*dt,(Rt+Lt/$.locationSize*st)*dt,B)}else{if(ht.isInstancedBufferAttribute){for(let nt=0;nt<$.locationSize;nt++)x($.location+nt,ht.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let nt=0;nt<$.locationSize;nt++)M($.location+nt);o.bindBuffer(o.ARRAY_BUFFER,V);for(let nt=0;nt<$.locationSize;nt++)G($.location+nt,Lt/$.locationSize,_t,Mt,Lt*dt,Lt/$.locationSize*nt*dt,B)}}else if(q!==void 0){const Mt=q[j];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv($.location,Mt);break;case 3:o.vertexAttrib3fv($.location,Mt);break;case 4:o.vertexAttrib4fv($.location,Mt);break;default:o.vertexAttrib1fv($.location,Mt)}}}}U()}function O(){P();for(const C in r){const N=r[C];for(const W in N){const k=N[W];for(const Z in k){const X=k[Z];for(const q in X)S(X[q].object),delete X[q];delete k[Z]}}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const N=r[C.id];for(const W in N){const k=N[W];for(const Z in k){const X=k[Z];for(const q in X)S(X[q].object),delete X[q];delete k[Z]}}delete r[C.id]}function z(C){for(const N in r){const W=r[N];for(const k in W){const Z=W[k];if(Z[C.id]===void 0)continue;const X=Z[C.id];for(const q in X)S(X[q].object),delete X[q];delete Z[C.id]}}}function T(C){for(const N in r){const W=r[N],k=C.isInstancedMesh===!0?C.id:0,Z=W[k];if(Z!==void 0){for(const X in Z){const q=Z[X];for(const j in q)S(q[j].object),delete q[j];delete Z[X]}delete W[k],Object.keys(W).length===0&&delete r[N]}}}function P(){b(),d=!0,u!==l&&(u=l,m(u.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:P,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:I,enableAttribute:M,disableUnusedAttributes:U}}function xR(o,e,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function d(p,m,S){S!==0&&(o.drawArraysInstanced(r,p,m,S),i.update(m,r,S))}function h(p,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,S);let v=0;for(let E=0;E<S;E++)v+=m[E];i.update(v,r,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function MR(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Vi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const T=z===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==vi&&z!==ca&&!T&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=p(m);S!==m&&(pe("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),G=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:w,maxTextureSize:I,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:U,maxVaryings:G,maxFragmentUniforms:D,maxSamples:O,samples:L}}function yR(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Tr,h=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||r!==0||l;return l=v,r=_.length,E},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){i=S(_,v,0)},this.setState=function(_,v,E){const w=_.clippingPlanes,I=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!l||w===null||w.length===0||u&&!M)u?S(null):m();else{const U=u?0:r,G=U*4;let D=x.clippingState||null;p.value=D,D=S(w,v,G,E);for(let O=0;O!==G;++O)D[O]=i[O];x.clippingState=D,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(_,v,E,w){const I=_!==null?_.length:0;let M=null;if(I!==0){if(M=p.value,w!==!0||M===null){const x=E+I*4,U=v.matrixWorldInverse;h.getNormalMatrix(U),(M===null||M.length<x)&&(M=new Float32Array(x));for(let G=0,D=E;G!==I;++G,D+=4)d.copy(_[G]).applyMatrix4(U,h),d.normal.toArray(M,D),M[D+3]=d.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=I,e.numIntersection=0,M}}const lo=4,ER=6,TR=20,bR=256,Nl=new Pm,CS=new Be;let rp=null,sp=0,op=0,lp=!1;const AR=new Q,ts=new Q;class wS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=AR}=u;rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=US(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=NS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rp,sp,op),this._renderer.xr.enabled=lp,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===is||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ha,format:Vi,colorSpace:Wu,depthBuffer:!1},l=DS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=DS(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RR(u)),this._blurMaterial=wR(u,e,i),this._ggxMaterial=CR(u,e,i)}return l}_compileMaterial(e){const i=new mn(new jn,e);this._renderer.compile(i,Nl)}_sceneToCubeUV(e,i,r,l,u){const p=new In(90,1,i,r),m=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,E=_.toneMapping;_.getClearColor(CS),_.toneMapping=fa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new ql,new Ar({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const I=this._backgroundBox,M=I.material;let x=!1;const U=e.background;U?U.isColor&&(M.color.copy(U),e.background=null,x=!0):(M.color.copy(CS),x=!0);for(let G=0;G<6;G++){const D=G%3;D===0?(p.up.set(0,m[G],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+S[G],u.y,u.z)):D===1?(p.up.set(0,0,m[G]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+S[G],u.z)):(p.up.set(0,m[G],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+S[G]));const O=this._cubeSize;so(l,D*O,G>2?O:0,O,O),_.setRenderTarget(l),x&&_.render(I,p),_.render(e,p)}_.toneMapping=E,_.autoClear=v,e.background=U}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===is||e.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=US()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=NS());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;so(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,Nl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(m*m-S*S),v=m*1.25,E=_*v,{_lodMax:w}=this,I=this._sizeLods[r],M=3*I*(r>w-lo?r-w+lo:0),x=4*(this._cubeSize-I);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=w-i,so(u,M,x,3*I,2*I),l.setRenderTarget(u),l.render(h,Nl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=w-r,so(e,M,x,3*I,2*I),l.setRenderTarget(e),l.render(h,Nl)}_blur(e,i,r,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,u,i,r,d),this._blurPass(u,e,r,r,d)}_blurPass(e,i,r,l,u){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[l];p.material=h;const m=h.uniforms;m.envMap.value=e.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const S=this._sizeLods[l],_=3*S*(l>this._lodMax-lo?l-this._lodMax+lo:0),v=4*(this._cubeSize-S);so(i,_,v,3*S,2*S),d.setRenderTarget(i),d.render(p,Nl)}}function RR(o){const e=[],i=[];let r=o;const l=o-lo+1+ER;for(let u=0;u<l;u++){const d=Math.pow(2,r);e.push(d);const h=1/(d-2),p=-h,m=1+h,S=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,v=6,E=3,w=new Float32Array(E*v*_),I=new Float32Array(E*v*_);for(let x=0;x<_;x++){const U=x%3*2/3-1,G=x>2?0:-1,D=[U,G,0,U+2/3,G,0,U+2/3,G+1,0,U,G,0,U+2/3,G+1,0,U,G+1,0];w.set(D,E*v*x);for(let O=0;O<v;O++){const L=S[O*2]*2-1,z=S[O*2+1]*2-1;x===0?ts.set(1,z,L):x===1?ts.set(-L,1,-z):x===2?ts.set(-L,z,1):x===3?ts.set(-1,z,-L):x===4?ts.set(-L,-1,z):ts.set(L,z,-1),ts.toArray(I,(x*v+O)*E)}}const M=new jn;M.setAttribute("position",new Va(w,E)),M.setAttribute("outputDirection",new Va(I,E)),i.push(new mn(M,null)),r>lo&&r--}return{lodMeshes:i,sizeLods:e}}function DS(o,e,i){const r=new Xi(o,e,i);return r.texture.mapping=Ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function so(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function CR(o,e,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function wR(o,e,i){return new pa({name:"SphericalGaussianBlur",defines:{SAMPLES:TR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function NS(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function US(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ju(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class fM extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new rM(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ql(5,5,5),u=new pa({name:"CubemapFromEquirect",uniforms:vo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:Ha});u.uniforms.tEquirect.value=i;const d=new mn(l,u),h=i.minFilter;return i.minFilter===es&&(i.minFilter=Vn),new LT(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function DR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(v,E=!1){return v==null?null:E?d(v):u(v)}function u(v){if(v&&v.isTexture){const E=v.mapping;if(E===Uh||E===Lh)if(e.has(v)){const w=e.get(v).texture;return h(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const I=new fM(w.height);return I.fromEquirectangularTexture(o,v),e.set(v,I),v.addEventListener("dispose",m),h(I.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,w=E===Uh||E===Lh,I=E===is||E===_o;if(w||I){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new wS(o)),M=w?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const U=v.image;return w&&U&&U.height>0||I&&U&&p(U)?(r===null&&(r=new wS(o)),M=w?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function h(v,E){return E===Uh?v.mapping=is:E===Lh&&(v.mapping=_o),v}function p(v){let E=0;const w=6;for(let I=0;I<w;I++)v[I]!==void 0&&E++;return E===w}function m(v){const E=v.target;E.removeEventListener("dispose",m);const w=e.get(E);w!==void 0&&(e.delete(E),w.dispose())}function S(v){const E=v.target;E.removeEventListener("dispose",S);const w=i.get(E);w!==void 0&&(i.delete(E),w.dispose())}function _(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function NR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&co("WebGLRenderer: "+r+" extension not supported."),l}}}function UR(o,e,i,r){const l={},u=new WeakMap;function d(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);v.removeEventListener("dispose",d),delete l[v.id];const E=u.get(v);E&&(e.remove(E),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const E in v)e.update(v[E],o.ARRAY_BUFFER)}function m(_){const v=[],E=_.index,w=_.attributes.position;let I=0;if(w===void 0)return;if(E!==null){const U=E.array;I=E.version;for(let G=0,D=U.length;G<D;G+=3){const O=U[G+0],L=U[G+1],z=U[G+2];v.push(O,L,L,z,z,O)}}else{const U=w.array;I=w.version;for(let G=0,D=U.length/3-1;G<D;G+=3){const O=G+0,L=G+1,z=G+2;v.push(O,L,L,z,z,O)}}const M=new(w.count>=65535?aM:iM)(v,1);M.version=I;const x=u.get(_);x&&e.remove(x),u.set(_,M)}function S(_){const v=u.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:S}}function LR(o,e,i){let r;function l(_){r=_}let u,d;function h(_){u=_.type,d=_.bytesPerElement}function p(_,v){o.drawElements(r,v,u,_*d),i.update(v,r,1)}function m(_,v,E){E!==0&&(o.drawElementsInstanced(r,v,u,_*d,E),i.update(v,r,E))}function S(_,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,_,0,E);let I=0;for(let M=0;M<E;M++)I+=v[M];i.update(I,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=S}function OR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Ve("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function PR(o,e,i){const r=new WeakMap,l=new ln;function u(d,h,p){const m=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let b=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",b)};var E=b;v!==void 0&&v.texture.dispose();const w=h.morphAttributes.position!==void 0,I=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let D=0;w===!0&&(D=1),I===!0&&(D=2),M===!0&&(D=3);let O=h.attributes.position.count*D,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const z=new Float32Array(O*L*4*_),T=new tM(z,O,L,_);T.type=ca,T.needsUpdate=!0;const P=D*4;for(let C=0;C<_;C++){const N=x[C],W=U[C],k=G[C],Z=O*L*4*C;for(let X=0;X<N.count;X++){const q=X*P;w===!0&&(l.fromBufferAttribute(N,X),z[Z+q+0]=l.x,z[Z+q+1]=l.y,z[Z+q+2]=l.z,z[Z+q+3]=0),I===!0&&(l.fromBufferAttribute(W,X),z[Z+q+4]=l.x,z[Z+q+5]=l.y,z[Z+q+6]=l.z,z[Z+q+7]=0),M===!0&&(l.fromBufferAttribute(k,X),z[Z+q+8]=l.x,z[Z+q+9]=l.y,z[Z+q+10]=l.z,z[Z+q+11]=k.itemSize===4?l.w:1)}}v={count:_,texture:T,size:new we(O,L)},r.set(h,v),h.addEventListener("dispose",b)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let w=0;for(let M=0;M<m.length;M++)w+=m[M];const I=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",I),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function IR(o,e,i,r,l){let u=new WeakMap;function d(m){const S=l.render.frame,_=m.geometry,v=e.get(m,_);if(u.get(v)!==S&&(e.update(v),u.set(v,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,S))),m.isSkinnedMesh){const E=m.skeleton;u.get(E)!==S&&(E.update(),u.set(E,S))}return v}function h(){u=new WeakMap}function p(m){const S=m.target;S.removeEventListener("dispose",p),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const zR={[Fx]:"LINEAR_TONE_MAPPING",[Bx]:"REINHARD_TONE_MAPPING",[Hx]:"CINEON_TONE_MAPPING",[Gx]:"ACES_FILMIC_TONE_MAPPING",[Xx]:"AGX_TONE_MAPPING",[kx]:"NEUTRAL_TONE_MAPPING",[Vx]:"CUSTOM_TONE_MAPPING"};function FR(o,e,i,r,l,u){const d=new Xi(e,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new jn;m.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new hn([0,2,0,0,2,0],2));const S=new CT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new mn(m,S),v=new Pm(-1,1,1,-1,0,1);let E=null,w=null,I=!1,M,x=null,U=[],G=!1;this.setSize=function(D,O){d.setSize(D,O),h!==null&&h.setSize(D,O),p!==null&&p.setSize(D,O);for(let L=0;L<U.length;L++){const z=U[L];z.setSize&&z.setSize(D,O)}},this.setEffects=function(D){U=D,G=U.length>0&&U[0].isRenderPass===!0;const O=d.width,L=d.height;U.length>0&&h===null&&(h=new Xi(O,L,{type:ha,depthBuffer:!1,stencilBuffer:!1}),p=new Xi(O,L,{type:ha,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<U.length;z++){const T=U[z];T.setSize&&T.setSize(O,L)}},this.begin=function(D,O){if(I||D.toneMapping===fa&&U.length===0)return!1;if(x=O,O!==null){const L=O.width,z=O.height;(d.width!==L||d.height!==z)&&this.setSize(L,z)}return G===!1&&D.setRenderTarget(d),M=D.toneMapping,D.toneMapping=fa,!0},this.hasRenderPass=function(){return G},this.end=function(D,O){D.toneMapping=M,I=!0;let L=d,z=h;for(let T=0;T<U.length;T++){const P=U[T];P.enabled!==!1&&(P.render(D,z,L,O),P.needsSwap!==!1&&(L=z,z=z===h?p:h))}if(E!==D.outputColorSpace||w!==D.toneMapping){E=D.outputColorSpace,w=D.toneMapping,S.defines={},Ie.getTransfer(E)===Qe&&(S.defines.SRGB_TRANSFER="");const T=zR[w];T&&(S.defines[T]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(x),D.render(_,v),x=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),S.dispose()}}const dM=new Xn,em=new Gl(1,1),hM=new tM,pM=new rT,mM=new rM,LS=[],OS=[],PS=new Float32Array(16),IS=new Float32Array(9),zS=new Float32Array(4);function bo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=LS[l];if(u===void 0&&(u=new Float32Array(l),LS[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function $u(o,e){let i=OS[e];i===void 0&&(i=new Int32Array(e),OS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function BR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function HR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function GR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function VR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function XR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;zS.set(r),o.uniformMatrix2fv(this.addr,!1,zS),Tn(i,r)}}function kR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;IS.set(r),o.uniformMatrix3fv(this.addr,!1,IS),Tn(i,r)}}function qR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;PS.set(r),o.uniformMatrix4fv(this.addr,!1,PS),Tn(i,r)}}function WR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function YR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function ZR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function KR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function QR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function JR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function jR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function $R(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function t3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(em.compareFunction=i.isReversedDepthBuffer()?Cm:Rm,u=em):u=dM,i.setTexture2D(e||u,l)}function e3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||pM,l)}function n3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||mM,l)}function i3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||hM,l)}function a3(o){switch(o){case 5126:return BR;case 35664:return HR;case 35665:return GR;case 35666:return VR;case 35674:return XR;case 35675:return kR;case 35676:return qR;case 5124:case 35670:return WR;case 35667:case 35671:return YR;case 35668:case 35672:return ZR;case 35669:case 35673:return KR;case 5125:return QR;case 36294:return JR;case 36295:return jR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function r3(o,e){o.uniform1fv(this.addr,e)}function s3(o,e){const i=bo(e,this.size,2);o.uniform2fv(this.addr,i)}function o3(o,e){const i=bo(e,this.size,3);o.uniform3fv(this.addr,i)}function l3(o,e){const i=bo(e,this.size,4);o.uniform4fv(this.addr,i)}function c3(o,e){const i=bo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function u3(o,e){const i=bo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function f3(o,e){const i=bo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function d3(o,e){o.uniform1iv(this.addr,e)}function h3(o,e){o.uniform2iv(this.addr,e)}function p3(o,e){o.uniform3iv(this.addr,e)}function m3(o,e){o.uniform4iv(this.addr,e)}function g3(o,e){o.uniform1uiv(this.addr,e)}function _3(o,e){o.uniform2uiv(this.addr,e)}function v3(o,e){o.uniform3uiv(this.addr,e)}function S3(o,e){o.uniform4uiv(this.addr,e)}function x3(o,e,i){const r=this.cache,l=e.length,u=$u(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=em:d=dM;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function M3(o,e,i){const r=this.cache,l=e.length,u=$u(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||pM,u[d])}function y3(o,e,i){const r=this.cache,l=e.length,u=$u(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||mM,u[d])}function E3(o,e,i){const r=this.cache,l=e.length,u=$u(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||hM,u[d])}function T3(o){switch(o){case 5126:return r3;case 35664:return s3;case 35665:return o3;case 35666:return l3;case 35674:return c3;case 35675:return u3;case 35676:return f3;case 5124:case 35670:return d3;case 35667:case 35671:return h3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return _3;case 36295:return v3;case 36296:return S3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return M3;case 35680:case 36300:case 36308:case 36293:return y3;case 36289:case 36303:case 36311:case 36292:return E3}}class b3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=a3(i.type)}}class A3{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=T3(i.type)}}class R3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const cp=/(\w+)(\])?(\[|\.)?/g;function FS(o,e){o.seq.push(e),o.map[e.id]=e}function C3(o,e,i){const r=o.name,l=r.length;for(cp.lastIndex=0;;){const u=cp.exec(r),d=cp.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){FS(i,m===void 0?new b3(h,o,e):new A3(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new R3(h),FS(i,_)),i=_}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),p=e.getUniformLocation(i,h.name);C3(h,p,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function BS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const w3=37297;let D3=0;function N3(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const HS=new ve;function U3(o){Ie._getMatrix(HS,Ie.workingColorSpace,o);const e=`mat3( ${HS.elements.map(i=>i.toFixed(4))} )`;switch(Ie.getTransfer(o)){case Yu:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function GS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+N3(o.getShaderSource(e),h)}else return u}function L3(o,e){const i=U3(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const O3={[Fx]:"Linear",[Bx]:"Reinhard",[Hx]:"Cineon",[Gx]:"ACESFilmic",[Xx]:"AgX",[kx]:"Neutral",[Vx]:"Custom"};function P3(o,e){const i=O3[e];return i===void 0?(pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Iu=new Q;function I3(){Ie.getLuminanceCoefficients(Iu);const o=Iu.x.toFixed(4),e=Iu.y.toFixed(4),i=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function F3(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function B3(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Pl(o){return o!==""}function VS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function XS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H3=/^[ \t]*#include +<([\w\d./]+)>/gm;function nm(o){return o.replace(H3,V3)}const G3=new Map;function V3(o,e){let i=ye[e];if(i===void 0){const r=G3.get(e);if(r!==void 0)i=ye[r],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nm(i)}const X3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kS(o){return o.replace(X3,k3)}function k3(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function qS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const q3={[Fu]:"SHADOWMAP_TYPE_PCF",[Ol]:"SHADOWMAP_TYPE_VSM"};function W3(o){return q3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y3={[is]:"ENVMAP_TYPE_CUBE",[_o]:"ENVMAP_TYPE_CUBE",[Ju]:"ENVMAP_TYPE_CUBE_UV"};function Z3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Y3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const K3={[_o]:"ENVMAP_MODE_REFRACTION"};function Q3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":K3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J3={[zx]:"ENVMAP_BLENDING_MULTIPLY",[I1]:"ENVMAP_BLENDING_MIX",[z1]:"ENVMAP_BLENDING_ADD"};function j3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":J3[o.combine]||"ENVMAP_BLENDING_NONE"}function $3(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function tC(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=W3(i),m=Z3(i),S=Q3(i),_=j3(i),v=$3(i),E=z3(i),w=F3(u),I=l.createProgram();let M,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Pl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(Pl).join(`
`),x.length>0&&(x+=`
`)):(M=[qS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),x=[qS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?ye.tonemapping_pars_fragment:"",i.toneMapping!==fa?P3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,L3("linearToOutputTexel",i.outputColorSpace),I3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pl).join(`
`)),d=nm(d),d=VS(d,i),d=XS(d,i),h=nm(h),h=VS(h,i),h=XS(h,i),d=kS(d),h=kS(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===aS?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===aS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const G=U+M+d,D=U+x+h,O=BS(l,l.VERTEX_SHADER,G),L=BS(l,l.FRAGMENT_SHADER,D);l.attachShader(I,O),l.attachShader(I,L),i.index0AttributeName!==void 0?l.bindAttribLocation(I,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(I,0,"position"),l.linkProgram(I);function z(C){if(o.debug.checkShaderErrors){const N=l.getProgramInfoLog(I)||"",W=l.getShaderInfoLog(O)||"",k=l.getShaderInfoLog(L)||"",Z=N.trim(),X=W.trim(),q=k.trim();let j=!0,$=!0;if(l.getProgramParameter(I,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,I,O,L);else{const ht=GS(l,O,"vertex"),Mt=GS(l,L,"fragment");Ve("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(I,l.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Z+`
`+ht+`
`+Mt)}else Z!==""?pe("WebGLProgram: Program Info Log:",Z):(X===""||q==="")&&($=!1);$&&(C.diagnostics={runnable:j,programLog:Z,vertexShader:{log:X,prefix:M},fragmentShader:{log:q,prefix:x}})}l.deleteShader(O),l.deleteShader(L),T=new Xu(l,I),P=B3(l,I)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(I,w3)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(I),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=D3++,this.cacheKey=e,this.usedTimes=1,this.program=I,this.vertexShader=O,this.fragmentShader=L,this}let eC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new iC(e),i.set(e,r)),r}}class iC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function aC(o){return o===as||o===ku||o===qu}function rC(o,e,i,r,l,u){const d=new eM,h=new nC,p=new Set,m=[],S=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return p.add(T),T===0?"uv":`uv${T}`}function I(T,P,b,C,N,W){const k=C.fog,Z=N.geometry,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?C.environment:null,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=e.get(T.envMap||X,q),$=j&&j.mapping===Ju?j.image.height:null,ht=E[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&pe("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const Mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Lt=Mt!==void 0?Mt.length:0;let wt=0;Z.morphAttributes.position!==void 0&&(wt=1),Z.morphAttributes.normal!==void 0&&(wt=2),Z.morphAttributes.color!==void 0&&(wt=3);let V,_t,dt,B;if(ht){const Oe=oa[ht];V=Oe.vertexShader,_t=Oe.fragmentShader}else{V=T.vertexShader,_t=T.fragmentShader;const Oe=h.getVertexShaderStage(T),ge=h.getFragmentShaderStage(T);h.update(T,Oe,ge),dt=Oe.id,B=ge.id}const nt=o.getRenderTarget(),gt=o.state.buffers.depth.getReversed(),Rt=N.isInstancedMesh===!0,st=N.isBatchedMesh===!0,At=!!T.map,ee=!!T.matcap,ne=!!j,jt=!!T.aoMap,kt=!!T.lightMap,Nt=!!T.bumpMap&&T.wireframe===!1,ie=!!T.normalMap,Se=!!T.displacementMap,Le=!!T.emissiveMap,de=!!T.metalnessMap,ce=!!T.roughnessMap,Y=T.anisotropy>0,sn=T.clearcoat>0,He=T.dispersion>0,F=T.retroreflectivity>0,y=T.iridescence>0,rt=T.sheen>0,ft=T.transmission>0,St=Y&&!!T.anisotropyMap,Dt=sn&&!!T.clearcoatMap,Pt=sn&&!!T.clearcoatNormalMap,xt=sn&&!!T.clearcoatRoughnessMap,bt=y&&!!T.iridescenceMap,Ot=y&&!!T.iridescenceThicknessMap,re=rt&&!!T.sheenColorMap,Ht=rt&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,Yt=!!T.specularColorMap,le=!!T.specularIntensityMap,me=ft&&!!T.transmissionMap,tt=ft&&!!T.thicknessMap,Ut=!!T.gradientMap,Tt=!!T.alphaMap,It=T.alphaTest>0,Wt=!!T.alphaHash,Ct=!!T.extensions;let ae=fa;T.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const qt={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:V,fragmentShader:_t,defines:T.defines,customVertexShaderID:dt,customFragmentShaderID:B,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:st,batchingColor:st&&N._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&N.instanceColor!==null,instancingMorph:Rt&&N.morphTexture!==null,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:At,matcap:ee,envMap:ne,envMapMode:ne&&j.mapping,envMapCubeUVHeight:$,aoMap:jt,lightMap:kt,bumpMap:Nt,normalMap:ie,displacementMap:Se,emissiveMap:Le,normalMapObjectSpace:ie&&T.normalMapType===H1,normalMapTangentSpace:ie&&T.normalMapType===$p,packedNormalMap:ie&&T.normalMapType===$p&&aC(T.normalMap.format),metalnessMap:de,roughnessMap:ce,anisotropy:Y,anisotropyMap:St,clearcoat:sn,clearcoatMap:Dt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:xt,dispersion:He,retroreflection:F,iridescence:y,iridescenceMap:bt,iridescenceThicknessMap:Ot,sheen:rt,sheenColorMap:re,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:Yt,specularIntensityMap:le,transmission:ft,transmissionMap:me,thicknessMap:tt,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===Il&&T.alphaToCoverage===!1,alphaMap:Tt,alphaTest:It,alphaHash:Wt,combine:T.combine,mapUv:At&&w(T.map.channel),aoMapUv:jt&&w(T.aoMap.channel),lightMapUv:kt&&w(T.lightMap.channel),bumpMapUv:Nt&&w(T.bumpMap.channel),normalMapUv:ie&&w(T.normalMap.channel),displacementMapUv:Se&&w(T.displacementMap.channel),emissiveMapUv:Le&&w(T.emissiveMap.channel),metalnessMapUv:de&&w(T.metalnessMap.channel),roughnessMapUv:ce&&w(T.roughnessMap.channel),anisotropyMapUv:St&&w(T.anisotropyMap.channel),clearcoatMapUv:Dt&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:re&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&w(T.sheenRoughnessMap.channel),specularMapUv:Bt&&w(T.specularMap.channel),specularColorMapUv:Yt&&w(T.specularColorMap.channel),specularIntensityMapUv:le&&w(T.specularIntensityMap.channel),transmissionMapUv:me&&w(T.transmissionMap.channel),thicknessMapUv:tt&&w(T.thicknessMap.channel),alphaMapUv:Tt&&w(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ie||Y),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(At||Tt),fog:!!k,useFog:T.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&ie===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:wt,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&b.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:At&&T.map.isVideoTexture===!0&&Ie.getTransfer(T.map.colorSpace)===Qe,decodeVideoTextureEmissive:Le&&T.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(T.emissiveMap.colorSpace)===Qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fa,flipSided:T.side===ri,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ct&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&T.extensions.multiDraw===!0||st)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function M(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)P.push(b),P.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(x(P,T),U(P,T),P.push(o.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function x(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numSunLights),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numSunLightShadows),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function U(T,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.retroreflection&&d.enable(24),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),P.packedNormalMap&&d.enable(22),P.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),P.numLightProbeGrids>0&&d.enable(22),P.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function G(T){const P=E[T.type];let b;if(P){const C=oa[P];b=bT.clone(C.uniforms)}else b=T.uniforms;return b}function D(T,P){let b=S.get(P);return b!==void 0?++b.usedTimes:(b=new tC(o,P,T,l),m.push(b),S.set(P,b)),b}function O(T){if(--T.usedTimes===0){const P=m.indexOf(T);m[P]=m[m.length-1],m.pop(),S.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function z(){h.dispose()}return{getParameters:I,getProgramCacheKey:M,getUniforms:G,acquireProgram:D,releaseProgram:O,releaseShaderCache:L,programs:m,dispose:z}}function sC(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,p){o.get(d)[h]=p}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function oC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function WS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function YS(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function h(v,E,w,I,M,x){let U=o[e];return U===void 0?(U={id:v.id,object:v,geometry:E,material:w,materialVariant:d(v),groupOrder:I,renderOrder:v.renderOrder,z:M,group:x},o[e]=U):(U.id=v.id,U.object=v,U.geometry=E,U.material=w,U.materialVariant=d(v),U.groupOrder=I,U.renderOrder=v.renderOrder,U.z=M,U.group=x),e++,U}function p(v,E,w,I,M,x,U){U.reversedDepth===!0&&(M=-M);const G=h(v,E,w,I,M,x);w.transmission>0?r.push(G):w.transparent===!0?l.push(G):i.push(G)}function m(v,E,w,I,M,x){const U=h(v,E,w,I,M,x);w.transmission>0?r.unshift(U):w.transparent===!0?l.unshift(U):i.unshift(U)}function S(v,E){i.length>1&&i.sort(v||oC),r.length>1&&r.sort(E||WS),l.length>1&&l.sort(E||WS)}function _(){for(let v=e,E=o.length;v<E;v++){const w=o[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:_,sort:S}}function lC(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new YS,o.set(r,[d])):l>=u.length?(d=new YS,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function cC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new Q,color:new Be};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function uC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let fC=0;function dC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function hC(o){const e=new cC,i=uC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const l=new Q,u=new $e,d=new $e;function h(m){let S=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,w=0,I=0,M=0,x=0,U=0,G=0,D=0,O=0,L=0,z=0,T=0,P=0,b=0;m.sort(dC);for(let N=0,W=m.length;N<W;N++){const k=m[N],Z=k.color,X=k.intensity,q=k.distance;let j=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===as?j=k.shadow.map.texture:j=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)S+=Z.r*X,_+=Z.g*X,v+=Z.b*X;else if(k.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(k.sh.coefficients[$],X);b++}else if(k.isSunLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ht=k.shadow,Mt=i.get(k);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),r.sunShadow[w]=Mt,r.sunShadowMap[w]=j;const Lt=ht.getViewportCount();for(let wt=0;wt<Lt;wt++)r.sunShadowMatrix[I+wt]=ht.getMatrix(wt),r.sunShadowCascade[I+wt]=ht._cascadeData[wt];I+=Lt,w++}r.sun[E]=$,E++}else if(k.isDirectionalLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ht=k.shadow,Mt=i.get(k);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,r.directionalShadow[M]=Mt,r.directionalShadowMap[M]=j,r.directionalShadowMatrix[M]=k.shadow.matrix,O++}r.directional[M]=$,M++}else if(k.isSpotLight){const $=e.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(Z).multiplyScalar(X),$.distance=q,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,r.spot[U]=$;const ht=k.shadow;if(k.map&&(r.spotLightMap[T]=k.map,T++,ht.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[U]=ht.matrix,k.castShadow){const Mt=i.get(k);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,r.spotShadow[U]=Mt,r.spotShadowMap[U]=j,z++}U++}else if(k.isRectAreaLight){const $=e.get(k);$.color.copy(Z).multiplyScalar(X),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),r.rectArea[G]=$,G++}else if(k.isPointLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){const ht=k.shadow,Mt=i.get(k);Mt.shadowIntensity=ht.intensity,Mt.shadowBias=ht.bias,Mt.shadowNormalBias=ht.normalBias,Mt.shadowRadius=ht.radius,Mt.shadowMapSize=ht.mapSize,Mt.shadowCameraNear=ht.camera.near,Mt.shadowCameraFar=ht.camera.far,r.pointShadow[x]=Mt,r.pointShadowMap[x]=j,r.pointShadowMatrix[x]=k.shadow.matrix,L++}r.point[x]=$,x++}else if(k.isHemisphereLight){const $=e.get(k);$.skyColor.copy(k.color).multiplyScalar(X),$.groundColor.copy(k.groundColor).multiplyScalar(X),r.hemi[D]=$,D++}}G>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xt.LTC_FLOAT_1,r.rectAreaLTC2=Xt.LTC_FLOAT_2):(r.rectAreaLTC1=Xt.LTC_HALF_1,r.rectAreaLTC2=Xt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=v;const C=r.hash;(C.sunLength!==E||C.directionalLength!==M||C.pointLength!==x||C.spotLength!==U||C.rectAreaLength!==G||C.hemiLength!==D||C.numSunShadows!==w||C.numDirectionalShadows!==O||C.numPointShadows!==L||C.numSpotShadows!==z||C.numSpotMaps!==T||C.numLightProbes!==b)&&(r.sun.length=E,r.directional.length=M,r.spot.length=U,r.rectArea.length=G,r.point.length=x,r.hemi.length=D,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=I,r.sunShadowCascade.length=I,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.directionalShadowMatrix.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=z,r.spotShadowMap.length=z,r.spotLightMatrix.length=z+T-P,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=b,C.sunLength=E,C.directionalLength=M,C.pointLength=x,C.spotLength=U,C.rectAreaLength=G,C.hemiLength=D,C.numSunShadows=w,C.numDirectionalShadows=O,C.numPointShadows=L,C.numSpotShadows=z,C.numSpotMaps=T,C.numLightProbes=b,r.version=fC++)}function p(m,S){let _=0,v=0,E=0,w=0,I=0,M=0;const x=S.matrixWorldInverse;for(let U=0,G=m.length;U<G;U++){const D=m[U];if(D.isSunLight){const O=r.sun[_];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(x),_++}else if(D.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),v++}else if(D.isSpotLight){const O=r.spot[w];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(x),w++}else if(D.isRectAreaLight){const O=r.rectArea[I];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),d.identity(),u.copy(D.matrixWorld),u.premultiply(x),d.extractRotation(u),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),I++}else if(D.isPointLight){const O=r.point[E];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(x),E++}else if(D.isHemisphereLight){const O=r.hemi[M];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(x),M++}}}return{setup:h,setupView:p,state:r}}function ZS(o){const e=new hC(o),i=[],r=[],l=[];function u(v){_.camera=v,i.length=0,r.length=0,l.length=0}function d(v){i.push(v)}function h(v){r.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function S(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function pC(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new ZS(o),e.set(l,[h])):u>=d.length?(h=new ZS(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const mC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gC=`uniform sampler2D shadow_pass;
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
}`,_C=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],vC=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],KS=new $e,Ul=new Q,up=new Q;function SC(o,e,i){let r=new Nm;const l=new we,u=new we,d=new ln,h=new wT,p=new DT,m={},S=i.maxTextureSize,_={[Si]:ri,[ri]:Si,[Fa]:Fa},v=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:mC,fragmentShader:gC}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const w=new jn;w.setAttribute("position",new Va(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const I=new mn(w,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let x=this.type;this.render=function(L,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===_1&&(pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fu);const P=o.getRenderTarget(),b=o.getActiveCubeFace(),C=o.getActiveMipmapLevel(),N=o.state;N.setBlending(Ha),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=x!==this.type;W&&z.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(Z=>Z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,Z=L.length;k<Z;k++){const X=L[k],q=X.shadow;if(q===void 0){pe("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const j=q.getFrameExtents();l.multiply(j),u.copy(q.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/j.x),l.x=u.x*j.x,q.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/j.y),l.y=u.y*j.y,q.mapSize.y=u.y));const $=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=$,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ol){if(X.isPointLight){pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Xi(l.x,l.y,{format:as,type:ha,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new Gl(l.x,l.y,ca),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=Xa,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=zn,q.map.depthTexture.magFilter=zn}else X.isPointLight?(q.map=new fM(l.x),q.map.depthTexture=new ET(l.x,da)):(q.map=new Xi(l.x,l.y),q.map.depthTexture=new Gl(l.x,l.y,da)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=Xa,this.type===Fu?(q.map.depthTexture.compareFunction=$?Cm:Rm,q.map.depthTexture.minFilter=Vn,q.map.depthTexture.magFilter=Vn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=zn,q.map.depthTexture.magFilter=zn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==l.x||q.map.height!==l.y)&&q.map.setSize(l.x,l.y);const ht=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,T);for(let Mt=0;Mt<ht;Mt++){const Lt=q.getCamera(Mt);if(X.isPointLight){const wt=q.camera,V=q.matrix,_t=X.distance||wt.far;_t!==wt.far&&(wt.far=_t,wt.updateProjectionMatrix()),Ul.setFromMatrixPosition(X.matrixWorld),wt.position.copy(Ul),up.copy(wt.position),up.add(_C[Mt]),wt.up.copy(vC[Mt]),wt.lookAt(up),wt.updateMatrixWorld(),V.makeTranslation(-Ul.x,-Ul.y,-Ul.z),KS.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(KS,wt.coordinateSystem,wt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,Mt),o.clear();else{Mt===0&&(o.setRenderTarget(q.map),o.clear());const wt=q.getViewport(Mt);d.set(u.x*wt.x,u.y*wt.y,u.x*wt.z,u.y*wt.w),N.viewport(d)}r=q.getFrustum(Mt),D(z,T,Lt,X,this.type)}q.isPointLightShadow!==!0&&this.type===Ol&&U(q,T),q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(P,b,C)};function U(L,z){const T=e.update(I);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null?L.mapPass=new Xi(l.x,l.y,{format:as,type:ha}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(z,null,T,v,I,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value.set(L.map.width,L.map.height),E.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(z,null,T,E,I,null)}function G(L,z,T,P){let b=null;const C=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(C!==void 0)b=C;else if(b=T.isPointLight===!0?p:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const N=b.uuid,W=z.uuid;let k=m[N];k===void 0&&(k={},m[N]=k);let Z=k[W];Z===void 0&&(Z=b.clone(),k[W]=Z,z.addEventListener("dispose",O)),b=Z}if(b.visible=z.visible,b.wireframe=z.wireframe,P===Ol?b.side=z.shadowSide!==null?z.shadowSide:z.side:b.side=z.shadowSide!==null?z.shadowSide:_[z.side],b.alphaMap=z.alphaMap,b.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,b.map=z.map,b.clipShadows=z.clipShadows,b.clippingPlanes=z.clippingPlanes,b.clipIntersection=z.clipIntersection,b.displacementMap=z.displacementMap,b.displacementScale=z.displacementScale,b.displacementBias=z.displacementBias,b.wireframeLinewidth=z.wireframeLinewidth,b.linewidth=z.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=o.properties.get(b);N.light=T}return b}function D(L,z,T,P,b){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===Ol)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const W=e.update(L),k=L.material;if(Array.isArray(k)){const Z=W.groups;for(let X=0,q=Z.length;X<q;X++){const j=Z[X],$=k[j.materialIndex];if($&&$.visible){const ht=G(L,$,P,b);L.onBeforeShadow(o,L,z,T,W,ht,j),o.renderBufferDirect(T,null,W,ht,L,j),L.onAfterShadow(o,L,z,T,W,ht,j)}}}else if(k.visible){const Z=G(L,k,P,b);L.onBeforeShadow(o,L,z,T,W,Z,null),o.renderBufferDirect(T,null,W,Z,L,null),L.onAfterShadow(o,L,z,T,W,Z,null)}}const N=L.children;for(let W=0,k=N.length;W<k;W++)D(N[W],z,T,P,b)}function O(L){L.target.removeEventListener("dispose",O);for(const T in m){const P=m[T],b=L.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}function xC(o,e){function i(){let tt=!1;const Ut=new ln;let Tt=null;const It=new ln(0,0,0,0);return{setMask:function(Wt){Tt!==Wt&&!tt&&(o.colorMask(Wt,Wt,Wt,Wt),Tt=Wt)},setLocked:function(Wt){tt=Wt},setClear:function(Wt,Ct,ae,qt,Oe){Oe===!0&&(Wt*=qt,Ct*=qt,ae*=qt),Ut.set(Wt,Ct,ae,qt),It.equals(Ut)===!1&&(o.clearColor(Wt,Ct,ae,qt),It.copy(Ut))},reset:function(){tt=!1,Tt=null,It.set(-1,0,0,0)}}}function r(){let tt=!1,Ut=!1,Tt=null,It=null,Wt=null;return{setReversed:function(Ct){if(Ut!==Ct){const ae=e.get("EXT_clip_control");Ct?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Ut=Ct;const qt=Wt;Wt=null,this.setClear(qt)}},getReversed:function(){return Ut},setTest:function(Ct){Ct?nt(o.DEPTH_TEST):gt(o.DEPTH_TEST)},setMask:function(Ct){Tt!==Ct&&!tt&&(o.depthMask(Ct),Tt=Ct)},setFunc:function(Ct){if(Ut&&(Ct=j1[Ct]),It!==Ct){switch(Ct){case pp:o.depthFunc(o.NEVER);break;case mp:o.depthFunc(o.ALWAYS);break;case gp:o.depthFunc(o.LESS);break;case zl:o.depthFunc(o.LEQUAL);break;case _p:o.depthFunc(o.EQUAL);break;case vp:o.depthFunc(o.GEQUAL);break;case Sp:o.depthFunc(o.GREATER);break;case xp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=Ct}},setLocked:function(Ct){tt=Ct},setClear:function(Ct){Wt!==Ct&&(Wt=Ct,Ut&&(Ct=1-Ct),o.clearDepth(Ct))},reset:function(){tt=!1,Tt=null,It=null,Wt=null,Ut=!1}}}function l(){let tt=!1,Ut=null,Tt=null,It=null,Wt=null,Ct=null,ae=null,qt=null,Oe=null;return{setTest:function(ge){tt||(ge?nt(o.STENCIL_TEST):gt(o.STENCIL_TEST))},setMask:function(ge){Ut!==ge&&!tt&&(o.stencilMask(ge),Ut=ge)},setFunc:function(ge,si,xi){(Tt!==ge||It!==si||Wt!==xi)&&(o.stencilFunc(ge,si,xi),Tt=ge,It=si,Wt=xi)},setOp:function(ge,si,xi){(Ct!==ge||ae!==si||qt!==xi)&&(o.stencilOp(ge,si,xi),Ct=ge,ae=si,qt=xi)},setLocked:function(ge){tt=ge},setClear:function(ge){Oe!==ge&&(o.clearStencil(ge),Oe=ge)},reset:function(){tt=!1,Ut=null,Tt=null,It=null,Wt=null,Ct=null,ae=null,qt=null,Oe=null}}}const u=new i,d=new r,h=new l,p=new WeakMap,m=new WeakMap;let S={},_={},v={},E=new WeakMap,w=[],I=null,M=!1,x=null,U=null,G=null,D=null,O=null,L=null,z=null,T=new Be(0,0,0),P=0,b=!1,C=null,N=null,W=null,k=null,Z=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),q=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=j>=2);let ht=null,Mt={};const Lt=o.getParameter(o.SCISSOR_BOX),wt=o.getParameter(o.VIEWPORT),V=new ln().fromArray(Lt),_t=new ln().fromArray(wt);function dt(tt,Ut,Tt,It){const Wt=new Uint8Array(4),Ct=o.createTexture();o.bindTexture(tt,Ct),o.texParameteri(tt,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(tt,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ae=0;ae<Tt;ae++)tt===o.TEXTURE_3D||tt===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Wt):o.texImage2D(Ut+ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Wt);return Ct}const B={};B[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),B[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),B[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),nt(o.DEPTH_TEST),d.setFunc(zl),Nt(!1),ie(tS),nt(o.CULL_FACE),jt(Ha);function nt(tt){S[tt]!==!0&&(o.enable(tt),S[tt]=!0)}function gt(tt){S[tt]!==!1&&(o.disable(tt),S[tt]=!1)}function Rt(tt,Ut){return v[tt]!==Ut?(o.bindFramebuffer(tt,Ut),v[tt]=Ut,tt===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),tt===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function st(tt,Ut){let Tt=w,It=!1;if(tt){Tt=E.get(Ut),Tt===void 0&&(Tt=[],E.set(Ut,Tt));const Wt=tt.textures;if(Tt.length!==Wt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let Ct=0,ae=Wt.length;Ct<ae;Ct++)Tt[Ct]=o.COLOR_ATTACHMENT0+Ct;Tt.length=Wt.length,It=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,It=!0);It&&o.drawBuffers(Tt)}function At(tt){return I!==tt?(o.useProgram(tt),I=tt,!0):!1}const ee={[oo]:o.FUNC_ADD,[S1]:o.FUNC_SUBTRACT,[x1]:o.FUNC_REVERSE_SUBTRACT};ee[M1]=o.MIN,ee[y1]=o.MAX;const ne={[E1]:o.ZERO,[T1]:o.ONE,[b1]:o.SRC_COLOR,[Px]:o.SRC_ALPHA,[N1]:o.SRC_ALPHA_SATURATE,[w1]:o.DST_COLOR,[R1]:o.DST_ALPHA,[A1]:o.ONE_MINUS_SRC_COLOR,[Ix]:o.ONE_MINUS_SRC_ALPHA,[D1]:o.ONE_MINUS_DST_COLOR,[C1]:o.ONE_MINUS_DST_ALPHA,[U1]:o.CONSTANT_COLOR,[L1]:o.ONE_MINUS_CONSTANT_COLOR,[O1]:o.CONSTANT_ALPHA,[P1]:o.ONE_MINUS_CONSTANT_ALPHA};function jt(tt,Ut,Tt,It,Wt,Ct,ae,qt,Oe,ge){if(tt===Ha){M===!0&&(gt(o.BLEND),M=!1);return}if(M===!1&&(nt(o.BLEND),M=!0),tt!==v1){if(tt!==x||ge!==b){if((U!==oo||O!==oo)&&(o.blendEquation(o.FUNC_ADD),U=oo,O=oo),ge)switch(tt){case Il:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eS:o.blendFunc(o.ONE,o.ONE);break;case nS:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case iS:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ve("WebGLState: Invalid blending: ",tt);break}else switch(tt){case Il:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eS:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case nS:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iS:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",tt);break}G=null,D=null,L=null,z=null,T.set(0,0,0),P=0,x=tt,b=ge}return}Wt=Wt||Ut,Ct=Ct||Tt,ae=ae||It,(Ut!==U||Wt!==O)&&(o.blendEquationSeparate(ee[Ut],ee[Wt]),U=Ut,O=Wt),(Tt!==G||It!==D||Ct!==L||ae!==z)&&(o.blendFuncSeparate(ne[Tt],ne[It],ne[Ct],ne[ae]),G=Tt,D=It,L=Ct,z=ae),(qt.equals(T)===!1||Oe!==P)&&(o.blendColor(qt.r,qt.g,qt.b,Oe),T.copy(qt),P=Oe),x=tt,b=!1}function kt(tt,Ut){tt.side===Fa?gt(o.CULL_FACE):nt(o.CULL_FACE);let Tt=tt.side===ri;Ut&&(Tt=!Tt),Nt(Tt),tt.blending===Il&&tt.transparent===!1?jt(Ha):jt(tt.blending,tt.blendEquation,tt.blendSrc,tt.blendDst,tt.blendEquationAlpha,tt.blendSrcAlpha,tt.blendDstAlpha,tt.blendColor,tt.blendAlpha,tt.premultipliedAlpha),d.setFunc(tt.depthFunc),d.setTest(tt.depthTest),d.setMask(tt.depthWrite),u.setMask(tt.colorWrite);const It=tt.stencilWrite;h.setTest(It),It&&(h.setMask(tt.stencilWriteMask),h.setFunc(tt.stencilFunc,tt.stencilRef,tt.stencilFuncMask),h.setOp(tt.stencilFail,tt.stencilZFail,tt.stencilZPass)),Le(tt.polygonOffset,tt.polygonOffsetFactor,tt.polygonOffsetUnits),tt.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):gt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(tt){C!==tt&&(tt?o.frontFace(o.CW):o.frontFace(o.CCW),C=tt)}function ie(tt){tt!==m1?(nt(o.CULL_FACE),tt!==N&&(tt===tS?o.cullFace(o.BACK):tt===g1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):gt(o.CULL_FACE),N=tt}function Se(tt){tt!==W&&(q&&o.lineWidth(tt),W=tt)}function Le(tt,Ut,Tt){tt?(nt(o.POLYGON_OFFSET_FILL),(k!==Ut||Z!==Tt)&&(k=Ut,Z=Tt,d.getReversed()&&(Ut=-Ut),o.polygonOffset(Ut,Tt))):gt(o.POLYGON_OFFSET_FILL)}function de(tt){tt?nt(o.SCISSOR_TEST):gt(o.SCISSOR_TEST)}function ce(tt){tt===void 0&&(tt=o.TEXTURE0+X-1),ht!==tt&&(o.activeTexture(tt),ht=tt)}function Y(tt,Ut,Tt){Tt===void 0&&(ht===null?Tt=o.TEXTURE0+X-1:Tt=ht);let It=Mt[Tt];It===void 0&&(It={type:void 0,texture:void 0},Mt[Tt]=It),(It.type!==tt||It.texture!==Ut)&&(ht!==Tt&&(o.activeTexture(Tt),ht=Tt),o.bindTexture(tt,Ut||B[tt]),It.type=tt,It.texture=Ut)}function sn(){const tt=Mt[ht];tt!==void 0&&tt.type!==void 0&&(o.bindTexture(tt.type,null),tt.type=void 0,tt.texture=void 0)}function He(){try{o.compressedTexImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function F(){try{o.compressedTexImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function y(){try{o.texSubImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function rt(){try{o.texSubImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function St(){try{o.compressedTexSubImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function Dt(){try{o.texStorage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function Pt(){try{o.texStorage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function xt(){try{o.texImage2D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function bt(){try{o.texImage3D(...arguments)}catch(tt){Ve("WebGLState:",tt)}}function Ot(tt){return _[tt]!==void 0?_[tt]:o.getParameter(tt)}function re(tt,Ut){_[tt]!==Ut&&(o.pixelStorei(tt,Ut),_[tt]=Ut)}function Ht(tt){V.equals(tt)===!1&&(o.scissor(tt.x,tt.y,tt.z,tt.w),V.copy(tt))}function Bt(tt){_t.equals(tt)===!1&&(o.viewport(tt.x,tt.y,tt.z,tt.w),_t.copy(tt))}function Yt(tt,Ut){let Tt=m.get(Ut);Tt===void 0&&(Tt=new WeakMap,m.set(Ut,Tt));let It=Tt.get(tt);It===void 0&&(It=o.getUniformBlockIndex(Ut,tt.name),Tt.set(tt,It))}function le(tt,Ut){const It=m.get(Ut).get(tt);p.get(Ut)!==It&&(o.uniformBlockBinding(Ut,It,tt.__bindingPointIndex),p.set(Ut,It))}function me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},_={},ht=null,Mt={},v={},E=new WeakMap,w=[],I=null,M=!1,x=null,U=null,G=null,D=null,O=null,L=null,z=null,T=new Be(0,0,0),P=0,b=!1,C=null,N=null,W=null,k=null,Z=null,V.set(0,0,o.canvas.width,o.canvas.height),_t.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:nt,disable:gt,bindFramebuffer:Rt,drawBuffers:st,useProgram:At,setBlending:jt,setMaterial:kt,setFlipSided:Nt,setCullFace:ie,setLineWidth:Se,setPolygonOffset:Le,setScissorTest:de,activeTexture:ce,bindTexture:Y,unbindTexture:sn,compressedTexImage2D:He,compressedTexImage3D:F,texImage2D:xt,texImage3D:bt,pixelStorei:re,getParameter:Ot,updateUBOMapping:Yt,uniformBlockBinding:le,texStorage2D:Dt,texStorage3D:Pt,texSubImage2D:y,texSubImage3D:rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:St,scissor:Ht,viewport:Bt,reset:me}}function MC(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new we,S=new WeakMap,_=new Set;let v;const E=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(F,y){return w?new OffscreenCanvas(F,y):Zu("canvas")}function M(F,y,rt){let ft=1;const St=He(F);if((St.width>rt||St.height>rt)&&(ft=rt/Math.max(St.width,St.height)),ft<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Dt=Math.floor(ft*St.width),Pt=Math.floor(ft*St.height);v===void 0&&(v=I(Dt,Pt));const xt=y?I(Dt,Pt):v;return xt.width=Dt,xt.height=Pt,xt.getContext("2d").drawImage(F,0,0,Dt,Pt),pe("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+Dt+"x"+Pt+")."),xt}else return"data"in F&&pe("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),F;return F}function x(F){return F.generateMipmaps}function U(F){o.generateMipmap(F)}function G(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(F,y,rt,ft,St,Dt=!1){if(F!==null){if(o[F]!==void 0)return o[F];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Pt;ft&&(Pt=e.get("EXT_texture_norm16"),Pt||pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xt=y;if(y===o.RED&&(rt===o.FLOAT&&(xt=o.R32F),rt===o.HALF_FLOAT&&(xt=o.R16F),rt===o.UNSIGNED_BYTE&&(xt=o.R8),rt===o.UNSIGNED_SHORT&&Pt&&(xt=Pt.R16_EXT),rt===o.SHORT&&Pt&&(xt=Pt.R16_SNORM_EXT)),y===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.R8UI),rt===o.UNSIGNED_SHORT&&(xt=o.R16UI),rt===o.UNSIGNED_INT&&(xt=o.R32UI),rt===o.BYTE&&(xt=o.R8I),rt===o.SHORT&&(xt=o.R16I),rt===o.INT&&(xt=o.R32I)),y===o.RG&&(rt===o.FLOAT&&(xt=o.RG32F),rt===o.HALF_FLOAT&&(xt=o.RG16F),rt===o.UNSIGNED_BYTE&&(xt=o.RG8),rt===o.UNSIGNED_SHORT&&Pt&&(xt=Pt.RG16_EXT),rt===o.SHORT&&Pt&&(xt=Pt.RG16_SNORM_EXT)),y===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.RG8UI),rt===o.UNSIGNED_SHORT&&(xt=o.RG16UI),rt===o.UNSIGNED_INT&&(xt=o.RG32UI),rt===o.BYTE&&(xt=o.RG8I),rt===o.SHORT&&(xt=o.RG16I),rt===o.INT&&(xt=o.RG32I)),y===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(xt=o.RGB16UI),rt===o.UNSIGNED_INT&&(xt=o.RGB32UI),rt===o.BYTE&&(xt=o.RGB8I),rt===o.SHORT&&(xt=o.RGB16I),rt===o.INT&&(xt=o.RGB32I)),y===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(xt=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(xt=o.RGBA16UI),rt===o.UNSIGNED_INT&&(xt=o.RGBA32UI),rt===o.BYTE&&(xt=o.RGBA8I),rt===o.SHORT&&(xt=o.RGBA16I),rt===o.INT&&(xt=o.RGBA32I)),y===o.RGB&&(rt===o.UNSIGNED_SHORT&&Pt&&(xt=Pt.RGB16_EXT),rt===o.SHORT&&Pt&&(xt=Pt.RGB16_SNORM_EXT),rt===o.UNSIGNED_INT_5_9_9_9_REV&&(xt=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(xt=o.R11F_G11F_B10F)),y===o.RGBA){const bt=Dt?Yu:Ie.getTransfer(St);rt===o.FLOAT&&(xt=o.RGBA32F),rt===o.HALF_FLOAT&&(xt=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(xt=bt===Qe?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT&&Pt&&(xt=Pt.RGBA16_EXT),rt===o.SHORT&&Pt&&(xt=Pt.RGBA16_SNORM_EXT),rt===o.UNSIGNED_SHORT_4_4_4_4&&(xt=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(xt=o.RGB5_A1)}return(xt===o.R16F||xt===o.R32F||xt===o.RG16F||xt===o.RG32F||xt===o.RGBA16F||xt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),xt}function O(F,y){let rt;return F?y===null||y===da||y===Bl?rt=o.DEPTH24_STENCIL8:y===ca?rt=o.DEPTH32F_STENCIL8:y===Fl&&(rt=o.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===da||y===Bl?rt=o.DEPTH_COMPONENT24:y===ca?rt=o.DEPTH_COMPONENT32F:y===Fl&&(rt=o.DEPTH_COMPONENT16),rt}function L(F,y){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==zn&&F.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?y.mipmaps.length:1}function z(F){const y=F.target;y.removeEventListener("dispose",z),P(y),y.isVideoTexture&&S.delete(y),y.isHTMLTexture&&_.delete(y)}function T(F){const y=F.target;y.removeEventListener("dispose",T),C(y)}function P(F){const y=r.get(F);if(y.__webglInit===void 0)return;const rt=F.source,ft=E.get(rt);if(ft){const St=ft[y.__cacheKey];St.usedTimes--,St.usedTimes===0&&b(F),Object.keys(ft).length===0&&E.delete(rt)}r.remove(F)}function b(F){const y=r.get(F);o.deleteTexture(y.__webglTexture);const rt=F.source,ft=E.get(rt);delete ft[y.__cacheKey],d.memory.textures--}function C(F){const y=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(y.__webglFramebuffer[ft]))for(let St=0;St<y.__webglFramebuffer[ft].length;St++)o.deleteFramebuffer(y.__webglFramebuffer[ft][St]);else o.deleteFramebuffer(y.__webglFramebuffer[ft]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ft])}else{if(Array.isArray(y.__webglFramebuffer))for(let ft=0;ft<y.__webglFramebuffer.length;ft++)o.deleteFramebuffer(y.__webglFramebuffer[ft]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ft=0;ft<y.__webglColorRenderbuffer.length;ft++)y.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ft]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const rt=F.textures;for(let ft=0,St=rt.length;ft<St;ft++){const Dt=r.get(rt[ft]);Dt.__webglTexture&&(o.deleteTexture(Dt.__webglTexture),d.memory.textures--),r.remove(rt[ft])}r.remove(F)}let N=0;function W(){N=0}function k(){return N}function Z(F){N=F}function X(){const F=N;return F>=l.maxTextures&&pe("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+l.maxTextures),N+=1,F}function q(F){const y=[];return y.push(F.wrapS),y.push(F.wrapT),y.push(F.wrapR||0),y.push(F.magFilter),y.push(F.minFilter),y.push(F.anisotropy),y.push(F.internalFormat),y.push(F.format),y.push(F.type),y.push(F.generateMipmaps),y.push(F.premultiplyAlpha),y.push(F.flipY),y.push(F.unpackAlignment),y.push(F.colorSpace),y.join()}function j(F,y){const rt=r.get(F);if(F.isVideoTexture&&Y(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&rt.__version!==F.version){const ft=F.image;if(ft===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(rt,F,y);return}}else F.isExternalTexture&&(rt.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+y)}function $(F,y){const rt=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&rt.__version!==F.version){gt(rt,F,y);return}else F.isExternalTexture&&(rt.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+y)}function ht(F,y){const rt=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&rt.__version!==F.version){gt(rt,F,y);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+y)}function Mt(F,y){const rt=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&rt.__version!==F.version){Rt(rt,F,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+y)}const Lt={[Mp]:o.REPEAT,[Ba]:o.CLAMP_TO_EDGE,[yp]:o.MIRRORED_REPEAT},wt={[zn]:o.NEAREST,[F1]:o.NEAREST_MIPMAP_NEAREST,[pu]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Oh]:o.LINEAR_MIPMAP_NEAREST,[es]:o.LINEAR_MIPMAP_LINEAR},V={[V1]:o.NEVER,[Y1]:o.ALWAYS,[X1]:o.LESS,[Rm]:o.LEQUAL,[k1]:o.EQUAL,[Cm]:o.GEQUAL,[q1]:o.GREATER,[W1]:o.NOTEQUAL};function _t(F,y){if(y.type===ca&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vn||y.magFilter===Oh||y.magFilter===pu||y.magFilter===es||y.minFilter===Vn||y.minFilter===Oh||y.minFilter===pu||y.minFilter===es)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,Lt[y.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,Lt[y.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,Lt[y.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,wt[y.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,wt[y.minFilter]),y.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zn||y.minFilter!==pu&&y.minFilter!==es||y.type===ca&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(F,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function dt(F,y){let rt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,y.addEventListener("dispose",z));const ft=y.source;let St=E.get(ft);St===void 0&&(St={},E.set(ft,St));const Dt=q(y);if(Dt!==F.__cacheKey){St[Dt]===void 0&&(St[Dt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,rt=!0),St[Dt].usedTimes++;const Pt=St[F.__cacheKey];Pt!==void 0&&(St[F.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(y)),F.__cacheKey=Dt,F.__webglTexture=St[Dt].texture}return rt}function B(F,y,rt){return Math.floor(Math.floor(F/rt)/y)}function nt(F,y,rt,ft){const Dt=F.updateRanges;if(Dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,rt,ft,y.data);else{Dt.sort((re,Ht)=>re.start-Ht.start);let Pt=0;for(let re=1;re<Dt.length;re++){const Ht=Dt[Pt],Bt=Dt[re],Yt=Ht.start+Ht.count,le=B(Bt.start,y.width,4),me=B(Ht.start,y.width,4);Bt.start<=Yt+1&&le===me&&B(Bt.start+Bt.count-1,y.width,4)===le?Ht.count=Math.max(Ht.count,Bt.start+Bt.count-Ht.start):(++Pt,Dt[Pt]=Bt)}Dt.length=Pt+1;const xt=i.getParameter(o.UNPACK_ROW_LENGTH),bt=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let re=0,Ht=Dt.length;re<Ht;re++){const Bt=Dt[re],Yt=Math.floor(Bt.start/4),le=Math.ceil(Bt.count/4),me=Yt%y.width,tt=Math.floor(Yt/y.width),Ut=le,Tt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,me),i.pixelStorei(o.UNPACK_SKIP_ROWS,tt),i.texSubImage2D(o.TEXTURE_2D,0,me,tt,Ut,Tt,rt,ft,y.data)}F.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,xt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function gt(F,y,rt){let ft=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ft=o.TEXTURE_3D);const St=dt(F,y),Dt=y.source;i.bindTexture(ft,F.__webglTexture,o.TEXTURE0+rt);const Pt=r.get(Dt);if(Dt.version!==Pt.__version||St===!0){if(i.activeTexture(o.TEXTURE0+rt),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Tt=Ie.getPrimaries(Ie.workingColorSpace),It=y.colorSpace===br?null:Ie.getPrimaries(y.colorSpace),Wt=y.colorSpace===br||Tt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt)}i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment);let bt=M(y.image,!1,l.maxTextureSize);bt=sn(y,bt);const Ot=u.convert(y.format,y.colorSpace),re=u.convert(y.type);let Ht=D(y.internalFormat,Ot,re,y.normalized,y.colorSpace,y.isVideoTexture);_t(ft,y);let Bt;const Yt=y.mipmaps,le=y.isVideoTexture!==!0,me=Pt.__version===void 0||St===!0,tt=Dt.dataReady,Ut=L(y,bt);if(y.isDepthTexture)Ht=O(y.format===ns,y.type),me&&(le?i.texStorage2D(o.TEXTURE_2D,1,Ht,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Ht,bt.width,bt.height,0,Ot,re,null));else if(y.isDataTexture)if(Yt.length>0){le&&me&&i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Yt[0].width,Yt[0].height);for(let Tt=0,It=Yt.length;Tt<It;Tt++)Bt=Yt[Tt],le?tt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Ot,re,Bt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Bt.width,Bt.height,0,Ot,re,Bt.data);y.generateMipmaps=!1}else le?(me&&i.texStorage2D(o.TEXTURE_2D,Ut,Ht,bt.width,bt.height),tt&&nt(y,bt,Ot,re)):i.texImage2D(o.TEXTURE_2D,0,Ht,bt.width,bt.height,0,Ot,re,bt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){le&&me&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Ht,Yt[0].width,Yt[0].height,bt.depth);for(let Tt=0,It=Yt.length;Tt<It;Tt++)if(Bt=Yt[Tt],y.format!==Vi)if(Ot!==null)if(le){if(tt)if(y.layerUpdates.size>0){const Wt=RS(Bt.width,Bt.height,y.format,y.type);for(const Ct of y.layerUpdates){const ae=Bt.data.subarray(Ct*Wt/Bt.data.BYTES_PER_ELEMENT,(Ct+1)*Wt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,Ct,Bt.width,Bt.height,1,Ot,ae)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,bt.depth,Ot,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Ht,Bt.width,Bt.height,bt.depth,0,Bt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Bt.width,Bt.height,bt.depth,Ot,re,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Ht,Bt.width,Bt.height,bt.depth,0,Ot,re,Bt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{le&&me&&i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Yt[0].width,Yt[0].height);for(let Tt=0,It=Yt.length;Tt<It;Tt++)Bt=Yt[Tt],y.format!==Vi?Ot!==null?le?tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Ot,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Ht,Bt.width,Bt.height,0,Bt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?tt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Bt.width,Bt.height,Ot,re,Bt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Bt.width,Bt.height,0,Ot,re,Bt.data)}else if(y.isDataArrayTexture)if(le){if(me&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ut,Ht,bt.width,bt.height,bt.depth),tt)if(y.layerUpdates.size>0){const Tt=RS(bt.width,bt.height,y.format,y.type);for(const It of y.layerUpdates){const Wt=bt.data.subarray(It*Tt/bt.data.BYTES_PER_ELEMENT,(It+1)*Tt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,It,bt.width,bt.height,1,Ot,re,Wt)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,re,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ht,bt.width,bt.height,bt.depth,0,Ot,re,bt.data);else if(y.isData3DTexture)le?(me&&i.texStorage3D(o.TEXTURE_3D,Ut,Ht,bt.width,bt.height,bt.depth),tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,re,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Ht,bt.width,bt.height,bt.depth,0,Ot,re,bt.data);else if(y.isFramebufferTexture){if(me)if(le)i.texStorage2D(o.TEXTURE_2D,Ut,Ht,bt.width,bt.height);else{let Tt=bt.width,It=bt.height;for(let Wt=0;Wt<Ut;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Ht,Tt,It,0,Ot,re,null),Tt>>=1,It>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in o){const Tt=o.canvas;if(Tt.hasAttribute("layoutsubtree")||Tt.setAttribute("layoutsubtree","true"),bt.parentNode!==Tt){Tt.appendChild(bt),_.add(y),Tt.onpaint=It=>{const Wt=It.changedElements;for(const Ct of _)Wt.includes(Ct.image)&&(Ct.needsUpdate=!0)},Tt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,bt);else{const Wt=o.RGBA,Ct=o.RGBA,ae=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Wt,Ct,ae,bt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(le&&me){const Tt=He(Yt[0]);i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Tt.width,Tt.height)}for(let Tt=0,It=Yt.length;Tt<It;Tt++)Bt=Yt[Tt],le?tt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Ot,re,Bt):i.texImage2D(o.TEXTURE_2D,Tt,Ht,Ot,re,Bt);y.generateMipmaps=!1}else if(le){if(me){const Tt=He(bt);i.texStorage2D(o.TEXTURE_2D,Ut,Ht,Tt.width,Tt.height)}tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,re,bt)}else i.texImage2D(o.TEXTURE_2D,0,Ht,Ot,re,bt);x(y)&&U(ft),Pt.__version=Dt.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function Rt(F,y,rt){if(y.image.length!==6)return;const ft=dt(F,y),St=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+rt);const Dt=r.get(St);if(St.version!==Dt.__version||ft===!0){i.activeTexture(o.TEXTURE0+rt);const Pt=Ie.getPrimaries(Ie.workingColorSpace),xt=y.colorSpace===br?null:Ie.getPrimaries(y.colorSpace),bt=y.colorSpace===br||Pt===xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Ot=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,Ht=[];for(let Ct=0;Ct<6;Ct++)!Ot&&!re?Ht[Ct]=M(y.image[Ct],!0,l.maxCubemapSize):Ht[Ct]=re?y.image[Ct].image:y.image[Ct],Ht[Ct]=sn(y,Ht[Ct]);const Bt=Ht[0],Yt=u.convert(y.format,y.colorSpace),le=u.convert(y.type),me=D(y.internalFormat,Yt,le,y.normalized,y.colorSpace),tt=y.isVideoTexture!==!0,Ut=Dt.__version===void 0||ft===!0,Tt=St.dataReady;let It=L(y,Bt);_t(o.TEXTURE_CUBE_MAP,y);let Wt;if(Ot){tt&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,me,Bt.width,Bt.height);for(let Ct=0;Ct<6;Ct++){Wt=Ht[Ct].mipmaps;for(let ae=0;ae<Wt.length;ae++){const qt=Wt[ae];y.format!==Vi?Yt!==null?tt?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,0,0,qt.width,qt.height,Yt,qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,me,qt.width,qt.height,0,qt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,0,0,qt.width,qt.height,Yt,le,qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae,me,qt.width,qt.height,0,Yt,le,qt.data)}}}else{if(Wt=y.mipmaps,tt&&Ut){Wt.length>0&&It++;const Ct=He(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,me,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(re){tt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Ht[Ct].width,Ht[Ct].height,Yt,le,Ht[Ct].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,me,Ht[Ct].width,Ht[Ct].height,0,Yt,le,Ht[Ct].data);for(let ae=0;ae<Wt.length;ae++){const Oe=Wt[ae].image[Ct].image;tt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,0,0,Oe.width,Oe.height,Yt,le,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,me,Oe.width,Oe.height,0,Yt,le,Oe.data)}}else{tt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Yt,le,Ht[Ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,me,Yt,le,Ht[Ct]);for(let ae=0;ae<Wt.length;ae++){const qt=Wt[ae];tt?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,0,0,Yt,le,qt.image[Ct]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,ae+1,me,Yt,le,qt.image[Ct])}}}x(y)&&U(o.TEXTURE_CUBE_MAP),Dt.__version=St.version,y.onUpdate&&y.onUpdate(y)}F.__version=y.version}function st(F,y,rt,ft,St,Dt){const Pt=u.convert(rt.format,rt.colorSpace),xt=u.convert(rt.type),bt=D(rt.internalFormat,Pt,xt,rt.normalized,rt.colorSpace),Ot=r.get(y),re=r.get(rt);if(re.__renderTarget=y,!Ot.__hasExternalTextures){const Ht=Math.max(1,y.width>>Dt),Bt=Math.max(1,y.height>>Dt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,Dt,bt,Ht,Bt,y.depth,0,Pt,xt,null):i.texImage2D(St,Dt,bt,Ht,Bt,0,Pt,xt,null)}i.bindFramebuffer(o.FRAMEBUFFER,F),ce(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,St,re.__webglTexture,0,de(y)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,St,re.__webglTexture,Dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(F,y,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,F),y.depthBuffer){const ft=y.depthTexture,St=ft&&ft.isDepthTexture?ft.type:null,Dt=O(y.stencilBuffer,St),Pt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ce(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de(y),Dt,y.width,y.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,de(y),Dt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,F)}else{const ft=y.textures;for(let St=0;St<ft.length;St++){const Dt=ft[St],Pt=u.convert(Dt.format,Dt.colorSpace),xt=u.convert(Dt.type),bt=D(Dt.internalFormat,Pt,xt,Dt.normalized,Dt.colorSpace);ce(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de(y),bt,y.width,y.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,de(y),bt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,bt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ee(F,y,rt){const ft=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,F),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const St=r.get(y.depthTexture);if(St.__renderTarget=y,(!St.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ft){if(St.__webglInit===void 0&&(St.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),St.__webglTexture===void 0){St.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),_t(o.TEXTURE_CUBE_MAP,y.depthTexture);const Ot=u.convert(y.depthTexture.format),re=u.convert(y.depthTexture.type);let Ht;y.depthTexture.format===Xa?Ht=o.DEPTH_COMPONENT24:y.depthTexture.format===ns&&(Ht=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Ht,y.width,y.height,0,Ot,re,null)}}else j(y.depthTexture,0);const Dt=St.__webglTexture,Pt=de(y),xt=ft?o.TEXTURE_CUBE_MAP_POSITIVE_X+rt:o.TEXTURE_2D,bt=y.depthTexture.format===ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xa)ce(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,bt,xt,Dt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,bt,xt,Dt,0);else if(y.depthTexture.format===ns)ce(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,bt,xt,Dt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,bt,xt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(F){const y=r.get(F),rt=F.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==F.depthTexture){const ft=F.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ft){const St=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ft.removeEventListener("dispose",St)};ft.addEventListener("dispose",St),y.__depthDisposeCallback=St}y.__boundDepthTexture=ft}if(F.depthTexture&&!y.__autoAllocateDepthBuffer)if(rt)for(let ft=0;ft<6;ft++)ee(y.__webglFramebuffer[ft],F,ft);else{const ft=F.texture.mipmaps;ft&&ft.length>0?ee(y.__webglFramebuffer[0],F,0):ee(y.__webglFramebuffer,F,0)}else if(rt){y.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ft]),y.__webglDepthbuffer[ft]===void 0)y.__webglDepthbuffer[ft]=o.createRenderbuffer(),At(y.__webglDepthbuffer[ft],F,!1);else{const St=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=y.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,Dt)}}else{const ft=F.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),At(y.__webglDepthbuffer,F,!1);else{const St=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,Dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(F,y,rt){const ft=r.get(F);y!==void 0&&st(ft.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&ne(F)}function kt(F){const y=F.texture,rt=r.get(F),ft=r.get(y);F.addEventListener("dispose",T);const St=F.textures,Dt=F.isWebGLCubeRenderTarget===!0,Pt=St.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=y.version,d.memory.textures++),Dt){rt.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){rt.__webglFramebuffer[xt]=[];for(let bt=0;bt<y.mipmaps.length;bt++)rt.__webglFramebuffer[xt][bt]=o.createFramebuffer()}else rt.__webglFramebuffer[xt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){rt.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)rt.__webglFramebuffer[xt]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let xt=0,bt=St.length;xt<bt;xt++){const Ot=r.get(St[xt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),d.memory.textures++)}if(F.samples>0&&ce(F)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let xt=0;xt<St.length;xt++){const bt=St[xt];rt.__webglColorRenderbuffer[xt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[xt]);const Ot=u.convert(bt.format,bt.colorSpace),re=u.convert(bt.type),Ht=D(bt.internalFormat,Ot,re,bt.normalized,bt.colorSpace,F.isXRRenderTarget===!0),Bt=de(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,Ht,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[xt])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),At(rt.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),_t(o.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)st(rt.__webglFramebuffer[xt][bt],F,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,bt);else st(rt.__webglFramebuffer[xt],F,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);x(y)&&U(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let xt=0,bt=St.length;xt<bt;xt++){const Ot=St[xt],re=r.get(Ot);let Ht=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ht=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ht,re.__webglTexture),_t(Ht,Ot),st(rt.__webglFramebuffer,F,Ot,o.COLOR_ATTACHMENT0+xt,Ht,0),x(Ot)&&U(Ht)}i.unbindTexture()}else{let xt=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(xt=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xt,ft.__webglTexture),_t(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)st(rt.__webglFramebuffer[bt],F,y,o.COLOR_ATTACHMENT0,xt,bt);else st(rt.__webglFramebuffer,F,y,o.COLOR_ATTACHMENT0,xt,0);x(y)&&U(xt),i.unbindTexture()}F.depthBuffer&&ne(F)}function Nt(F){const y=F.textures;for(let rt=0,ft=y.length;rt<ft;rt++){const St=y[rt];if(x(St)){const Dt=G(F),Pt=r.get(St).__webglTexture;i.bindTexture(Dt,Pt),U(Dt),i.unbindTexture()}}}const ie=[],Se=[];function Le(F){if(F.samples>0){if(ce(F)===!1){const y=F.textures,rt=F.width,ft=F.height;let St=o.COLOR_BUFFER_BIT;const Dt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(F),xt=y.length>1;if(xt)for(let Ot=0;Ot<y.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const bt=F.texture.mipmaps;bt&&bt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ot=0;Ot<y.length;Ot++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),xt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ot]);const re=r.get(y[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,re,0)}o.blitFramebuffer(0,0,rt,ft,0,0,rt,ft,St,o.NEAREST),p===!0&&(ie.length=0,Se.length=0,ie.push(o.COLOR_ATTACHMENT0+Ot),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(ie.push(Dt),Se.push(Dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),xt)for(let Ot=0;Ot<y.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ot]);const re=r.get(y[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,re,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&p){const y=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function de(F){return Math.min(l.maxSamples,F.samples)}function ce(F){const y=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Y(F){const y=d.render.frame;S.get(F)!==y&&(S.set(F,y),F.update())}function sn(F,y){const rt=F.colorSpace,ft=F.format,St=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||rt!==Wu&&rt!==br&&(Ie.getTransfer(rt)===Qe?(ft!==Vi||St!==vi)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",rt)),y}function He(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.getTextureUnits=k,this.setTextureUnits=Z,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=ht,this.setTextureCube=Mt,this.rebindTextures=jt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=st,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function yC(o,e){function i(r,l=br){let u;const d=Ie.getTransfer(l);if(r===vi)return o.UNSIGNED_BYTE;if(r===ym)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Em)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Zx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Kx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Wx)return o.BYTE;if(r===Yx)return o.SHORT;if(r===Fl)return o.UNSIGNED_SHORT;if(r===Mm)return o.INT;if(r===da)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===ha)return o.HALF_FLOAT;if(r===Qx)return o.ALPHA;if(r===Jx)return o.RGB;if(r===Vi)return o.RGBA;if(r===Xa)return o.DEPTH_COMPONENT;if(r===ns)return o.DEPTH_STENCIL;if(r===jx)return o.RED;if(r===Tm)return o.RED_INTEGER;if(r===as)return o.RG;if(r===bm)return o.RG_INTEGER;if(r===Am)return o.RGBA_INTEGER;if(r===Bu||r===Hu||r===Gu||r===Vu)if(d===Qe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ep||r===Tp||r===bp||r===Ap)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ep)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ap)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rp||r===Cp||r===wp||r===Dp||r===Np||r===ku||r===Up)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Rp||r===Cp)return d===Qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===wp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Dp)return u.COMPRESSED_R11_EAC;if(r===Np)return u.COMPRESSED_SIGNED_R11_EAC;if(r===ku)return u.COMPRESSED_RG11_EAC;if(r===Up)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Lp||r===Op||r===Pp||r===Ip||r===zp||r===Fp||r===Bp||r===Hp||r===Gp||r===Vp||r===Xp||r===kp||r===qp||r===Wp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Lp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Op)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ip)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wp)return d===Qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yp||r===Zp||r===Kp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Yp)return d===Qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qp||r===Jp||r===qu||r===jp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Qp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Jp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const EC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TC=`
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

}`;class bC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new sM(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new pa({vertexShader:EC,fragmentShader:TC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mn(new ma(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AC extends rs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",p=1,m=null,S=null,_=null,v=null,E=null,w=null;const I=typeof XRWebGLBinding<"u",M=new bC,x={},U=i.getContextAttributes();let G=null,D=null;const O=[],L=[],z=new we;let T=null,P=null;const b=new In;b.viewport=new ln;const C=new In;C.viewport=new ln;const N=[b,C],W=new OT;let k=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let nt=O[B];return nt===void 0&&(nt=new Xh,O[B]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(B){let nt=O[B];return nt===void 0&&(nt=new Xh,O[B]=nt),nt.getGripSpace()},this.getHand=function(B){let nt=O[B];return nt===void 0&&(nt=new Xh,O[B]=nt),nt.getHandSpace()};function X(B){const nt=L.indexOf(B.inputSource);if(nt===-1)return;const gt=O[nt];gt!==void 0&&(gt.update(B.inputSource,B.frame,m||d),gt.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",j);for(let B=0;B<O.length;B++){const nt=L[B];nt!==null&&(L[B]=null,O[B].disconnect(nt))}k=null,Z=null,M.reset();for(const B in x)delete x[B];if(e.setRenderTarget(G),E=null,v=null,_=null,l=null,D=null,dt.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),P!==null){const B=P.camera;B.fov=P.fov,B.zoom=P.zoom,B.updateProjectionMatrix(),P=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){u=B,r.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){h=B,r.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(B){m=B},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _===null&&I&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(B){if(l=B,l!==null){if(G=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",q),l.addEventListener("inputsourceschange",j),U.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Rt=null,st=null;U.depth&&(st=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=U.stencil?ns:Xa,Rt=U.stencil?Bl:da);const At={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(At),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Xi(v.textureWidth,v.textureHeight,{format:Vi,type:vi,depthTexture:new Gl(v.textureWidth,v.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const gt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new Xi(E.framebufferWidth,E.framebufferHeight,{format:Vi,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),dt.setContext(l),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(B){for(let nt=0;nt<B.removed.length;nt++){const gt=B.removed[nt],Rt=L.indexOf(gt);Rt>=0&&(L[Rt]=null,O[Rt].disconnect(gt))}for(let nt=0;nt<B.added.length;nt++){const gt=B.added[nt];let Rt=L.indexOf(gt);if(Rt===-1){for(let At=0;At<O.length;At++)if(At>=L.length){L.push(gt),Rt=At;break}else if(L[At]===null){L[At]=gt,Rt=At;break}if(Rt===-1)break}const st=O[Rt];st&&st.connect(gt)}}const $=new Q,ht=new Q;function Mt(B,nt,gt){$.setFromMatrixPosition(nt.matrixWorld),ht.setFromMatrixPosition(gt.matrixWorld);const Rt=$.distanceTo(ht),st=nt.projectionMatrix.elements,At=gt.projectionMatrix.elements,ee=st[14]/(st[10]-1),ne=st[14]/(st[10]+1),jt=(st[9]+1)/st[5],kt=(st[9]-1)/st[5],Nt=(st[8]-1)/st[0],ie=(At[8]+1)/At[0],Se=ee*Nt,Le=ee*ie,de=Rt/(-Nt+ie),ce=de*-Nt;if(nt.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ce),B.translateZ(de),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),st[10]===-1)B.projectionMatrix.copy(nt.projectionMatrix),B.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Y=ee+de,sn=ne+de,He=Se-ce,F=Le+(Rt-ce),y=jt*ne/sn*Y,rt=kt*ne/sn*Y;B.projectionMatrix.makePerspective(He,F,y,rt,Y,sn),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Lt(B,nt){nt===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(nt.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(l===null)return;let nt=B.near,gt=B.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(gt=M.depthFar)),W.near=C.near=b.near=nt,W.far=C.far=b.far=gt,(k!==W.near||Z!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),k=W.near,Z=W.far),W.layers.mask=B.layers.mask|6,b.layers.mask=W.layers.mask&-5,C.layers.mask=W.layers.mask&-3;const Rt=B.parent,st=W.cameras;Lt(W,Rt);for(let At=0;At<st.length;At++)Lt(st[At],Rt);st.length===2?Mt(W,b,C):W.projectionMatrix.copy(b.projectionMatrix),P===null&&B.isPerspectiveCamera&&(P={camera:B,fov:B.fov,zoom:B.zoom}),wt(B,W,Rt)};function wt(B,nt,gt){gt===null?B.matrix.copy(nt.matrixWorld):(B.matrix.copy(gt.matrixWorld),B.matrix.invert(),B.matrix.multiply(nt.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(nt.projectionMatrix),B.projectionMatrixInverse.copy(nt.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=tm*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(v===null&&E===null))return p},this.setFoveation=function(B){p=B,v!==null&&(v.fixedFoveation=B),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=B)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(B){return x[B]};let V=null;function _t(B,nt){if(S=nt.getViewerPose(m||d),w=nt,S!==null){const gt=S.views;E!==null&&(e.setRenderTargetFramebuffer(D,E.framebuffer),e.setRenderTarget(D));let Rt=!1;gt.length!==W.cameras.length&&(W.cameras.length=0,Rt=!0);for(let ne=0;ne<gt.length;ne++){const jt=gt[ne];let kt=null;if(E!==null)kt=E.getViewport(jt);else{const ie=_.getViewSubImage(v,jt);kt=ie.viewport,ne===0&&(e.setRenderTargetTextures(D,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(D))}let Nt=N[ne];Nt===void 0&&(Nt=new In,Nt.layers.enable(ne),Nt.viewport=new ln,N[ne]=Nt),Nt.matrix.fromArray(jt.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(jt.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(kt.x,kt.y,kt.width,kt.height),ne===0&&(W.matrix.copy(Nt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Rt===!0&&W.cameras.push(Nt)}const st=l.enabledFeatures;if(st&&st.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&I){_=r.getBinding();const ne=_.getDepthInformation(gt[0]);ne&&ne.isValid&&ne.texture&&M.init(ne,l.renderState)}if(st&&st.includes("camera-access")&&I){e.state.unbindTexture(),_=r.getBinding();for(let ne=0;ne<gt.length;ne++){const jt=gt[ne].camera;if(jt){let kt=x[jt];kt||(kt=new sM,x[jt]=kt);const Nt=_.getCameraImage(jt);kt.sourceTexture=Nt}}}}for(let gt=0;gt<O.length;gt++){const Rt=L[gt],st=O[gt];Rt!==null&&st!==void 0&&st.update(Rt,nt,m||d)}V&&V(B,nt),nt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:nt}),w=null}const dt=new cM;dt.setAnimationLoop(_t),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}const RC=new $e,gM=new ve;gM.set(-1,0,0,0,1,0,0,0,1);function CC(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,oM(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,U,G,D){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?u(M,x):x.isMeshLambertMaterial?(u(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(M,x),_(M,x)):x.isMeshPhongMaterial?(u(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(M,x),v(M,x),x.isMeshPhysicalMaterial&&E(M,x,D)):x.isMeshMatcapMaterial?(u(M,x),w(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),I(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,U,G):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ri&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ri&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const U=e.get(x),G=U.envMap,D=U.envMapRotation;G&&(M.envMap.value=G,M.envMapRotation.value.setFromMatrix4(RC.makeRotationFromEuler(D)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(gM),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,U,G){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*U,M.scale.value=G*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,U){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ri&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.retroreflectivity>0&&(M.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,x){x.matcap&&(M.matcap.value=x.matcap)}function I(M,x){const U=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wC(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,O){const L=O.program;r.uniformBlockBinding(D,L)}function m(D,O){let L=l[D.id];L===void 0&&(M(D),L=S(D),l[D.id]=L,D.addEventListener("dispose",U));const z=O.program;r.updateUBOMapping(D,z);const T=e.render.frame;u[D.id]!==T&&(v(D),u[D.id]=T)}function S(D){const O=_();D.__bindingPointIndex=O;const L=o.createBuffer(),z=D.__size,T=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,L),L}function _(){for(let D=0;D<h;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const O=l[D.id],L=D.uniforms,z=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let T=0,P=L.length;T<P;T++){const b=L[T];if(Array.isArray(b))for(let C=0,N=b.length;C<N;C++)E(b[C],T,C,z);else E(b,T,0,z)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,O,L,z){if(I(D,O,L,z)===!0){const T=D.__offset,P=D.value;if(Array.isArray(P)){let b=0;for(let C=0;C<P.length;C++){const N=P[C],W=x(N);w(N,D.__data,b),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(b+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(P,D.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,D.__data)}}function w(D,O,L){typeof D=="number"||typeof D=="boolean"?O[0]=D:D.isMatrix3?(O[0]=D.elements[0],O[1]=D.elements[1],O[2]=D.elements[2],O[3]=0,O[4]=D.elements[3],O[5]=D.elements[4],O[6]=D.elements[5],O[7]=0,O[8]=D.elements[6],O[9]=D.elements[7],O[10]=D.elements[8],O[11]=0):ArrayBuffer.isView(D)?O.set(new D.constructor(D.buffer,D.byteOffset,O.length)):D.toArray(O,L)}function I(D,O,L,z){const T=D.value,P=O+"_"+L;if(z[P]===void 0)return typeof T=="number"||typeof T=="boolean"?z[P]=T:ArrayBuffer.isView(T)?z[P]=T.slice():z[P]=T.clone(),!0;{const b=z[P];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return z[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(b.equals(T)===!1)return b.copy(T),!0}}return!1}function M(D){const O=D.uniforms;let L=0;const z=16;for(let P=0,b=O.length;P<b;P++){const C=Array.isArray(O[P])?O[P]:[O[P]];for(let N=0,W=C.length;N<W;N++){const k=C[N],Z=Array.isArray(k.value)?k.value:[k.value];for(let X=0,q=Z.length;X<q;X++){const j=Z[X],$=x(j),ht=L%z,Mt=ht%$.boundary,Lt=ht+Mt;L+=Mt,Lt!==0&&z-Lt<$.storage&&(L+=z-Lt),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=L,L+=$.storage}}}const T=L%z;return T>0&&(L+=z-T),D.__size=L,D.__cache={},this}function x(D){const O={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(O.boundary=4,O.storage=4):D.isVector2?(O.boundary=8,O.storage=8):D.isVector3||D.isColor?(O.boundary=16,O.storage=12):D.isVector4?(O.boundary=16,O.storage=16):D.isMatrix3?(O.boundary=48,O.storage=48):D.isMatrix4?(O.boundary=64,O.storage=64):D.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(O.boundary=16,O.storage=D.byteLength):pe("WebGLRenderer: Unsupported uniform value type.",D),O}function U(D){const O=D.target;O.removeEventListener("dispose",U);const L=d.indexOf(O.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function G(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},u={}}return{bind:p,update:m,dispose:G}}const DC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function NC(){return ra===null&&(ra=new MT(DC,16,16,as,ha),ra.name="DFG_LUT",ra.minFilter=Vn,ra.magFilter=Vn,ra.wrapS=Ba,ra.wrapT=Ba,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class Ao{constructor(e={}){const{canvas:i=Q1(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:E=vi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const I=E,M=new Set([Am,bm,Tm]),x=new Set([vi,da,Fl,Bl,ym,Em]),U=new Uint32Array(4),G=new Int32Array(4),D=new Q;let O=null,L=null;const z=[],T=[];let P=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1,N=null,W=null,k=null,Z=null;this._outputColorSpace=wn;let X=0,q=0,j=null,$=-1,ht=null;const Mt=new ln,Lt=new ln;let wt=null;const V=new Be(0);let _t=0,dt=i.width,B=i.height,nt=1,gt=null,Rt=null;const st=new ln(0,0,dt,B),At=new ln(0,0,dt,B);let ee=!1;const ne=new Nm;let jt=!1,kt=!1;const Nt=new $e,ie=new Q,Se=new ln,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function ce(){return j===null?nt:1}let Y=r;function sn(A,K){return i.getContext(A,K)}let He,F,y,rt,ft,St,Dt,Pt,xt,bt,Ot,re,Ht,Bt,Yt,le,me,tt,Ut,Tt,It,Wt,Ct;try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xm}`),i.addEventListener("webglcontextlost",Oe,!1),i.addEventListener("webglcontextrestored",ge,!1),i.addEventListener("webglcontextcreationerror",si,!1),Y===null){const K="webgl2";if(Y=sn(K,A),Y===null)throw sn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(A){throw i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",si,!1),Ve("WebGLRenderer: "+A.message),A}function ae(){He=new NR(Y),He.init(),It=new yC(Y,He),F=new MR(Y,He,e,It),y=new xC(Y,He),F.reversedDepthBuffer&&v&&y.buffers.depth.setReversed(!0),W=Y.createFramebuffer(),k=Y.createFramebuffer(),Z=Y.createFramebuffer(),rt=new OR(Y),ft=new sC,St=new MC(Y,He,y,ft,F,It,rt),Dt=new DR(b),Pt=new IT(Y),Wt=new SR(Y,Pt),xt=new UR(Y,Pt,rt,Wt),bt=new IR(Y,xt,Pt,Wt,rt),tt=new PR(Y,F,St),Yt=new yR(ft),Ot=new rC(b,Dt,He,F,Wt,Yt),re=new CC(b,ft),Ht=new lC,Bt=new pC(He),me=new vR(b,Dt,y,bt,w,p),le=new SC(b,bt,F),Ct=new wC(Y,rt,F,y),Ut=new xR(Y,He,rt),Tt=new LR(Y,He,rt),rt.programs=Ot.programs,b.capabilities=F,b.extensions=He,b.properties=ft,b.renderLists=Ht,b.shadowMap=le,b.state=y,b.info=rt}I!==vi&&(P=new FR(I,i.width,i.height,h,l,u));const qt=new AC(b,Y);this.xr=qt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(dt,B,!1))},this.getSize=function(A){return A.set(dt,B)},this.setSize=function(A,K,mt=!0){if(qt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=A,B=K,i.width=Math.floor(A*nt),i.height=Math.floor(K*nt),mt===!0&&(i.style.width=A+"px",i.style.height=K+"px"),P!==null&&P.setSize(i.width,i.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(dt*nt,B*nt).floor()},this.setDrawingBufferSize=function(A,K,mt){dt=A,B=K,nt=mt,i.width=Math.floor(A*mt),i.height=Math.floor(K*mt),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(I===vi){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Mt)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,K,mt,lt){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,K,mt,lt),y.viewport(Mt.copy(st).multiplyScalar(nt).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,K,mt,lt){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,K,mt,lt),y.scissor(Lt.copy(At).multiplyScalar(nt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){y.setScissorTest(ee=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){Rt=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,mt=!0){let lt=0;if(A){let ct=!1;if(j!==null){const Gt=j.texture.format;ct=M.has(Gt)}if(ct){const Gt=j.texture.type,Zt=x.has(Gt),zt=me.getClearColor(),Jt=me.getClearAlpha(),$t=zt.r,fe=zt.g,_e=zt.b;Zt?(U[0]=$t,U[1]=fe,U[2]=_e,U[3]=Jt,Y.clearBufferuiv(Y.COLOR,0,U)):(G[0]=$t,G[1]=fe,G[2]=_e,G[3]=Jt,Y.clearBufferiv(Y.COLOR,0,G))}else lt|=Y.COLOR_BUFFER_BIT}K&&(lt|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),mt&&(lt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&Y.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",ge,!1),i.removeEventListener("webglcontextcreationerror",si,!1),me.dispose(),Ht.dispose(),Bt.dispose(),ft.dispose(),Dt.dispose(),bt.dispose(),Wt.dispose(),Ct.dispose(),Ot.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Cr),qt.removeEventListener("sessionend",qa),ki.stop()};function Oe(A){A.preventDefault(),sS("WebGLRenderer: Context Lost."),C=!0}function ge(){sS("WebGLRenderer: Context Restored."),C=!1;const A=rt.autoReset,K=le.enabled,mt=le.autoUpdate,lt=le.needsUpdate,ct=le.type;ae(),rt.autoReset=A,le.enabled=K,le.autoUpdate=mt,le.needsUpdate=lt,le.type=ct}function si(A){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xi(A){const K=A.target;K.removeEventListener("dispose",xi),tf(K)}function tf(A){os(A),ft.remove(A)}function os(A){const K=ft.get(A).programs;K!==void 0&&(K.forEach(function(mt){Ot.releaseProgram(mt)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,mt,lt,ct,Gt){K===null&&(K=Le);const Zt=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,zt=Po(A,K,mt,lt,ct);y.setMaterial(lt,Zt);let Jt=mt.index,$t=1;if(lt.wireframe===!0){if(Jt=xt.getWireframeAttribute(mt),Jt===void 0)return;$t=2}const fe=mt.drawRange,_e=mt.attributes.position;let Kt=fe.start*$t,Ae=(fe.start+fe.count)*$t;Gt!==null&&(Kt=Math.max(Kt,Gt.start*$t),Ae=Math.min(Ae,(Gt.start+Gt.count)*$t)),Jt!==null?(Kt=Math.max(Kt,0),Ae=Math.min(Ae,Jt.count)):_e!=null&&(Kt=Math.max(Kt,0),Ae=Math.min(Ae,_e.count));const Ee=Ae-Kt;if(Ee<0||Ee===1/0)return;Wt.setup(ct,lt,zt,mt,Jt);let Je,qe=Ut;if(Jt!==null&&(Je=Pt.get(Jt),qe=Tt,qe.setIndex(Je)),ct.isMesh)lt.wireframe===!0?(y.setLineWidth(lt.wireframeLinewidth*ce()),qe.setMode(Y.LINES)):qe.setMode(Y.TRIANGLES);else if(ct.isLine){let Mn=lt.linewidth;Mn===void 0&&(Mn=1),y.setLineWidth(Mn*ce()),ct.isLineSegments?qe.setMode(Y.LINES):ct.isLineLoop?qe.setMode(Y.LINE_LOOP):qe.setMode(Y.LINE_STRIP)}else ct.isPoints?qe.setMode(Y.POINTS):ct.isSprite&&qe.setMode(Y.TRIANGLES);if(ct.isBatchedMesh)if(He.get("WEBGL_multi_draw"))qe.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const Mn=ct._multiDrawStarts,Vt=ct._multiDrawCounts,cn=ct._multiDrawCount,Pe=Jt?Pt.get(Jt).bytesPerElement:1,qn=ft.get(lt).currentProgram.getUniforms();for(let oi=0;oi<cn;oi++)qn.setValue(Y,"_gl_DrawID",oi),qe.render(Mn[oi]/Pe,Vt[oi])}else if(ct.isInstancedMesh)qe.renderInstances(Kt,Ee,ct.count);else if(mt.isInstancedBufferGeometry){const Mn=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Vt=Math.min(mt.instanceCount,Mn);qe.renderInstances(Kt,Ee,Vt)}else qe.render(Kt,Ee)};function Rr(A,K,mt,lt){N!==null&&A.isNodeMaterial&&N.setObject(lt,A),jt===!0&&Yt.setState(A,mt,!1),A.transparent===!0&&A.side===Fa&&A.forceSinglePass===!1?(A.side=ri,A.needsUpdate=!0,wr(A,K,lt),A.side=Si,A.needsUpdate=!0,wr(A,K,lt),A.side=Fa):wr(A,K,lt)}this.compile=function(A,K,mt=null){mt===null&&(mt=A),N!==null&&N.renderStart(A,K,mt),L=Bt.get(mt),L.init(K),T.push(L),mt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(L.pushLight(ct),ct.castShadow&&L.pushShadow(ct))}),A!==mt&&A.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(L.pushLight(ct),ct.castShadow&&L.pushShadow(ct))}),L.setupLights(),N!==null&&N.updateLights(L.state.lightsArray),kt=this.localClippingEnabled,jt=Yt.init(this.clippingPlanes,kt),jt===!0&&Yt.setGlobalState(this.clippingPlanes,K),N!==null&&le.render(L.state.shadowsArray,mt,K);const lt=new Set;return A.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Gt=ct.material;if(Gt)if(Array.isArray(Gt))for(let Zt=0;Zt<Gt.length;Zt++){const zt=Gt[Zt];Rr(zt,mt,K,ct),lt.add(zt)}else Rr(Gt,mt,K,ct),lt.add(Gt)}),L=T.pop(),N!==null&&N.renderEnd(),lt},this.compileAsync=function(A,K,mt=null){const lt=this.compile(A,K,mt);return new Promise(ct=>{function Gt(){if(lt.forEach(function(Zt){const Jt=ft.get(Zt).currentProgram;(Jt===void 0||Jt.isReady())&&lt.delete(Zt)}),lt.size===0){ct(A);return}setTimeout(Gt,10)}He.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let ka=null;function ga(A){ka&&ka(A)}function Cr(){ki.stop()}function qa(){ki.start()}const ki=new cM;ki.setAnimationLoop(ga),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){ka=A,qt.setAnimationLoop(A),A===null?ki.stop():ki.start()},qt.addEventListener("sessionstart",Cr),qt.addEventListener("sessionend",qa),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,K);const mt=qt.enabled===!0&&qt.isPresenting===!0,lt=P!==null&&(j===null||mt)&&P.begin(b,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(K),K=qt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,K,j),L=Bt.get(A,T.length),L.init(K),L.state.textureUnits=St.getTextureUnits(),T.push(L),Nt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ne.setFromProjectionMatrix(Nt,ua,K.reversedDepth),kt=this.localClippingEnabled,jt=Yt.init(this.clippingPlanes,kt),O=Ht.get(A,z.length),O.init(),z.push(O),qt.enabled===!0&&qt.isPresenting===!0){const Zt=b.xr.getDepthSensingMesh();Zt!==null&&Do(Zt,K,-1/0,b.sortObjects)}Do(A,K,0,b.sortObjects),O.finish(),N!==null&&N.updateLights(L.state.lightsArray),b.sortObjects===!0&&O.sort(gt,Rt),de=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,de&&me.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&Yt.beginShadows();const ct=L.state.shadowsArray;if(le.render(ct,A,K),jt===!0&&Yt.endShadows(),(lt&&P.hasRenderPass())===!1){const Zt=O.opaque,zt=O.transmissive;if(L.setupLights(),K.isArrayCamera){const Jt=K.cameras;if(zt.length>0)for(let $t=0,fe=Jt.length;$t<fe;$t++){const _e=Jt[$t];ls(Zt,zt,A,_e)}de&&me.render(A);for(let $t=0,fe=Jt.length;$t<fe;$t++){const _e=Jt[$t];No(O,A,_e,_e.viewport)}}else zt.length>0&&ls(Zt,zt,A,K),de&&me.render(A),No(O,A,K)}j!==null&&q===0&&(St.updateMultisampleRenderTarget(j),St.updateRenderTargetMipmap(j)),lt&&P.end(b),A.isScene===!0&&A.onAfterRender(b,A,K),Wt.resetDefaultState(),$=-1,ht=null,T.pop(),T.length>0?(L=T[T.length-1],St.setTextureUnits(L.state.textureUnits),jt===!0&&Yt.setGlobalState(b.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?O=z[z.length-1]:O=null,N!==null&&N.renderEnd()};function Do(A,K,mt,lt){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)mt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ne)){lt&&Se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Nt);const Zt=bt.update(A),zt=A.material;zt.visible&&O.push(A,Zt,zt,mt,Se.z,null,K)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ne))){const Zt=bt.update(A),zt=A.material;if(lt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Se.copy(A.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),Se.copy(Zt.boundingSphere.center)),Se.applyMatrix4(A.matrixWorld).applyMatrix4(Nt)),Array.isArray(zt)){const Jt=Zt.groups;for(let $t=0,fe=Jt.length;$t<fe;$t++){const _e=Jt[$t],Kt=zt[_e.materialIndex];Kt&&Kt.visible&&O.push(A,Zt,Kt,mt,Se.z,_e,K)}}else zt.visible&&O.push(A,Zt,zt,mt,Se.z,null,K)}}const Gt=A.children;for(let Zt=0,zt=Gt.length;Zt<zt;Zt++)Do(Gt[Zt],K,mt,lt)}function No(A,K,mt,lt){const{opaque:ct,transmissive:Gt,transparent:Zt}=A;L.setupLightsView(mt),jt===!0&&Yt.setGlobalState(b.clippingPlanes,mt),lt&&y.viewport(Mt.copy(lt)),ct.length>0&&qi(ct,K,mt),Gt.length>0&&qi(Gt,K,mt),Zt.length>0&&qi(Zt,K,mt),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ls(A,K,mt,lt){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[lt.id]===void 0){const Kt=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[lt.id]=new Xi(1,1,{generateMipmaps:!0,type:Kt?ha:vi,minFilter:es,samples:Math.max(4,F.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}const Gt=L.state.transmissionRenderTarget[lt.id],Zt=lt.viewport||Mt;Gt.setSize(Zt.z*b.transmissionResolutionScale,Zt.w*b.transmissionResolutionScale);const zt=b.getRenderTarget(),Jt=b.getActiveCubeFace(),$t=b.getActiveMipmapLevel();b.setRenderTarget(Gt),b.getClearColor(V),_t=b.getClearAlpha(),_t<1&&b.setClearColor(16777215,.5),b.clear(),de&&me.render(mt);const fe=b.toneMapping;b.toneMapping=fa;const _e=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),L.setupLightsView(lt),jt===!0&&Yt.setGlobalState(b.clippingPlanes,lt),qi(A,mt,lt),St.updateMultisampleRenderTarget(Gt),St.updateRenderTargetMipmap(Gt),He.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ae=0,Ee=K.length;Ae<Ee;Ae++){const Je=K[Ae],{object:qe,geometry:Mn,material:Vt,group:cn}=Je;if(Vt.side===Fa&&qe.layers.test(lt.layers)){const Pe=Vt.side;Vt.side=ri,Vt.needsUpdate=!0,Wl(qe,mt,lt,Mn,Vt,cn),Vt.side=Pe,Vt.needsUpdate=!0,Kt=!0}}Kt===!0&&(St.updateMultisampleRenderTarget(Gt),St.updateRenderTargetMipmap(Gt))}b.setRenderTarget(zt,Jt,$t),b.setClearColor(V,_t),_e!==void 0&&(lt.viewport=_e),b.toneMapping=fe}function qi(A,K,mt){const lt=K.isScene===!0?K.overrideMaterial:null;for(let ct=0,Gt=A.length;ct<Gt;ct++){const Zt=A[ct],{object:zt,geometry:Jt,group:$t}=Zt;let fe=Zt.material;fe.allowOverride===!0&&lt!==null&&(fe=lt),zt.layers.test(mt.layers)&&Wl(zt,K,mt,Jt,fe,$t)}}function Wl(A,K,mt,lt,ct,Gt){N!==null&&ct.isNodeMaterial&&N.setObject(A,ct),A.onBeforeRender(b,K,mt,lt,ct,Gt),A.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ct.onBeforeRender(b,K,mt,lt,A,Gt),ct.transparent===!0&&ct.side===Fa&&ct.forceSinglePass===!1?(ct.side=ri,ct.needsUpdate=!0,b.renderBufferDirect(mt,K,lt,ct,A,Gt),ct.side=Si,ct.needsUpdate=!0,b.renderBufferDirect(mt,K,lt,ct,A,Gt),ct.side=Fa):b.renderBufferDirect(mt,K,lt,ct,A,Gt),A.onAfterRender(b,K,mt,lt,ct,Gt)}function wr(A,K,mt){K.isScene!==!0&&(K=Le);const lt=ft.get(A),ct=L.state.lights,Gt=L.state.shadowsArray,Zt=ct.state.version,zt=Ot.getParameters(A,ct.state,Gt,K,mt,L.state.lightProbeGridArray),Jt=Ot.getProgramCacheKey(zt);let $t=lt.programs;lt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,lt.fog=K.fog;const fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;lt.envMap=Dt.get(A.envMap||lt.environment,fe),lt.envMapRotation=lt.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",xi),$t=new Map,lt.programs=$t);let _e=$t.get(Jt);if(_e!==void 0){if(lt.currentProgram===_e&&lt.lightsStateVersion===Zt)return Lo(A,zt),_e}else zt.uniforms=Ot.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,mt,zt),A.onBeforeCompile(zt,b),_e=Ot.acquireProgram(zt,Jt),$t.set(Jt,_e),lt.uniforms=zt.uniforms;const Kt=lt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=Yt.uniform),Lo(A,zt),lt.needsLights=Zl(A),lt.lightsStateVersion=Zt,lt.needsLights&&(Kt.ambientLightColor.value=ct.state.ambient,Kt.lightProbe.value=ct.state.probe,Kt.sunLights.value=ct.state.sun,Kt.sunLightShadows.value=ct.state.sunShadow,Kt.directionalLights.value=ct.state.directional,Kt.directionalLightShadows.value=ct.state.directionalShadow,Kt.spotLights.value=ct.state.spot,Kt.spotLightShadows.value=ct.state.spotShadow,Kt.rectAreaLights.value=ct.state.rectArea,Kt.ltc_1.value=ct.state.rectAreaLTC1,Kt.ltc_2.value=ct.state.rectAreaLTC2,Kt.pointLights.value=ct.state.point,Kt.pointLightShadows.value=ct.state.pointShadow,Kt.hemisphereLights.value=ct.state.hemi,Kt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Kt.sunShadowCascade.value=ct.state.sunShadowCascade,Kt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Kt.spotLightMatrix.value=ct.state.spotLightMatrix,Kt.spotLightMap.value=ct.state.spotLightMap,Kt.pointShadowMatrix.value=ct.state.pointShadowMatrix),lt.lightProbeGrid=L.state.lightProbeGridArray.length>0,lt.currentProgram=_e,lt.uniformsList=null,_e}function Uo(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=Xu.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Lo(A,K){const mt=ft.get(A);mt.outputColorSpace=K.outputColorSpace,mt.batching=K.batching,mt.batchingColor=K.batchingColor,mt.instancing=K.instancing,mt.instancingColor=K.instancingColor,mt.instancingMorph=K.instancingMorph,mt.skinning=K.skinning,mt.morphTargets=K.morphTargets,mt.morphNormals=K.morphNormals,mt.morphColors=K.morphColors,mt.morphTargetsCount=K.morphTargetsCount,mt.numClippingPlanes=K.numClippingPlanes,mt.numIntersection=K.numClipIntersection,mt.vertexAlphas=K.vertexAlphas,mt.vertexTangents=K.vertexTangents,mt.toneMapping=K.toneMapping}function Oo(A,K){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;D.setFromMatrixPosition(K.matrixWorld);for(let mt=0,lt=A.length;mt<lt;mt++){const ct=A[mt];if(ct.texture!==null&&ct.boundingBox.containsPoint(D))return ct}return null}function Po(A,K,mt,lt,ct){K.isScene!==!0&&(K=Le),St.resetTextureUnits();const Gt=K.fog,Zt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?K.environment:null,zt=j===null?b.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ie.workingColorSpace,Jt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,$t=Dt.get(lt.envMap||Zt,Jt),fe=lt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,_e=!!mt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Kt=!!mt.morphAttributes.position,Ae=!!mt.morphAttributes.normal,Ee=!!mt.morphAttributes.color;let Je=fa;lt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Je=b.toneMapping);const qe=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Mn=qe!==void 0?qe.length:0,Vt=ft.get(lt),cn=L.state.lights;if(jt===!0&&(kt===!0||A!==ht)){const De=A===ht&&lt.id===$;Yt.setState(lt,A,De)}let Pe=!1;lt.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==cn.state.version||Vt.outputColorSpace!==zt||ct.isBatchedMesh&&Vt.batching===!1||!ct.isBatchedMesh&&Vt.batching===!0||ct.isBatchedMesh&&Vt.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&Vt.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&Vt.instancing===!1||!ct.isInstancedMesh&&Vt.instancing===!0||ct.isSkinnedMesh&&Vt.skinning===!1||!ct.isSkinnedMesh&&Vt.skinning===!0||ct.isInstancedMesh&&Vt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Vt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Vt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Vt.instancingMorph===!1&&ct.morphTexture!==null||Vt.envMap!==$t||lt.fog===!0&&Vt.fog!==Gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Yt.numPlanes||Vt.numIntersection!==Yt.numIntersection)||Vt.vertexAlphas!==fe||Vt.vertexTangents!==_e||Vt.morphTargets!==Kt||Vt.morphNormals!==Ae||Vt.morphColors!==Ee||Vt.toneMapping!==Je||Vt.morphTargetsCount!==Mn||!!Vt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,Vt.__version=lt.version);let qn=Vt.currentProgram;Pe===!0&&(qn=wr(lt,K,ct),N&&lt.isNodeMaterial&&N.onUpdateProgram(lt,qn,Vt));let oi=!1,Wi=!1,Te=!1;const Xe=qn.getUniforms(),en=Vt.uniforms;if(y.useProgram(qn.program)&&(oi=!0,Wi=!0,Te=!0),lt.id!==$&&($=lt.id,Wi=!0),Vt.needsLights){const De=Oo(L.state.lightProbeGridArray,ct);Vt.lightProbeGrid!==De&&(Vt.lightProbeGrid=De,Wi=!0)}if(oi||ht!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xe.setValue(Y,"projectionMatrix",A.projectionMatrix),Xe.setValue(Y,"viewMatrix",A.matrixWorldInverse);const un=Xe.map.cameraPosition;un!==void 0&&un.setValue(Y,ie.setFromMatrixPosition(A.matrixWorld)),F.logarithmicDepthBuffer&&Xe.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Xe.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),ht!==A&&(ht=A,Wi=!0,Te=!0)}if(Vt.needsLights&&(cn.state.sunShadowMap.length>0&&Xe.setValue(Y,"sunShadowMap",cn.state.sunShadowMap,St),cn.state.directionalShadowMap.length>0&&Xe.setValue(Y,"directionalShadowMap",cn.state.directionalShadowMap,St),cn.state.spotShadowMap.length>0&&Xe.setValue(Y,"spotShadowMap",cn.state.spotShadowMap,St),cn.state.pointShadowMap.length>0&&Xe.setValue(Y,"pointShadowMap",cn.state.pointShadowMap,St)),ct.isSkinnedMesh){Xe.setOptional(Y,ct,"bindMatrix"),Xe.setOptional(Y,ct,"bindMatrixInverse");const De=ct.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Xe.setValue(Y,"boneTexture",De.boneTexture,St))}ct.isBatchedMesh&&(Xe.setOptional(Y,ct,"batchingTexture"),Xe.setValue(Y,"batchingTexture",ct._matricesTexture,St),Xe.setOptional(Y,ct,"batchingIdTexture"),Xe.setValue(Y,"batchingIdTexture",ct._indirectTexture,St),Xe.setOptional(Y,ct,"batchingColorTexture"),ct._colorsTexture!==null&&Xe.setValue(Y,"batchingColorTexture",ct._colorsTexture,St));const li=mt.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&tt.update(ct,mt,qn),(Wi||Vt.receiveShadow!==ct.receiveShadow)&&(Vt.receiveShadow=ct.receiveShadow,Xe.setValue(Y,"receiveShadow",ct.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&K.environment!==null&&(en.envMapIntensity.value=K.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=NC()),Wi){if(Xe.setValue(Y,"toneMappingExposure",b.toneMappingExposure),Vt.needsLights&&Yl(en,Te),Gt&&lt.fog===!0&&re.refreshFogUniforms(en,Gt),re.refreshMaterialUniforms(en,lt,nt,B,L.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.lightProbeGrid){const De=Vt.lightProbeGrid;en.probesSH.value=De.texture,en.probesMin.value.copy(De.boundingBox.min),en.probesMax.value.copy(De.boundingBox.max),en.probesResolution.value.copy(De.resolution)}Xu.upload(Y,Uo(Vt),en,St)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Xu.upload(Y,Uo(Vt),en,St),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Xe.setValue(Y,"center",ct.center),Xe.setValue(Y,"modelViewMatrix",ct.modelViewMatrix),Xe.setValue(Y,"normalMatrix",ct.normalMatrix),Xe.setValue(Y,"modelMatrix",ct.matrixWorld),lt.uniformsGroups!==void 0){const De=lt.uniformsGroups;for(let un=0,_a=De.length;un<_a;un++){const Kl=De[un];Ct.update(Kl,qn),Ct.bind(Kl,qn)}}return qn}function Yl(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.sunLights.needsUpdate=K,A.sunLightShadows.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Zl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,K,mt){const lt=ft.get(A);lt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),ft.get(A.texture).__webglTexture=K,ft.get(A.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:mt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const mt=ft.get(A);mt.__webglFramebuffer=K,mt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,mt=0){j=A,X=K,q=mt;let lt=null,ct=!1,Gt=!1;if(A){const zt=ft.get(A);if(zt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(Y.FRAMEBUFFER,zt.__webglFramebuffer),Mt.copy(A.viewport),Lt.copy(A.scissor),wt=A.scissorTest,y.viewport(Mt),y.scissor(Lt),y.setScissorTest(wt),$=-1;return}else if(zt.__webglFramebuffer===void 0)St.setupRenderTarget(A);else if(zt.__hasExternalTextures)St.rebindTextures(A,ft.get(A.texture).__webglTexture,ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const fe=A.depthTexture;if(zt.__boundDepthTexture!==fe){if(fe!==null&&ft.has(fe)&&(A.width!==fe.image.width||A.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Gt=!0);const $t=ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[K])?lt=$t[K][mt]:lt=$t[K],ct=!0):A.samples>0&&St.useMultisampledRTT(A)===!1?lt=ft.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?lt=$t[mt]:lt=$t,Mt.copy(A.viewport),Lt.copy(A.scissor),wt=A.scissorTest}else Mt.copy(st).multiplyScalar(nt).floor(),Lt.copy(At).multiplyScalar(nt).floor(),wt=ee;if(mt!==0&&(lt=W),y.bindFramebuffer(Y.FRAMEBUFFER,lt)&&y.drawBuffers(A,lt),y.viewport(Mt),y.scissor(Lt),y.setScissorTest(wt),ct){const zt=ft.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,zt.__webglTexture,mt)}else if(Gt){const zt=K;for(let Jt=0;Jt<A.textures.length;Jt++){const $t=ft.get(A.textures[Jt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Jt,$t.__webglTexture,mt,zt)}}else if(A!==null&&mt!==0){const zt=ft.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,zt.__webglTexture,mt)}$=-1};function Mi(A){const K=ft.get(A);return(K.__readFormat!==A.format||K.__readType!==A.type)&&(K.__readFormat=A.format,K.__readType=A.type,K.__formatReadable=F.textureFormatReadable(A.format),K.__typeReadable=F.textureTypeReadable(A.type)),K}this.readRenderTargetPixels=function(A,K,mt,lt,ct,Gt,Zt,zt=0){if(!(A&&A.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt){y.bindFramebuffer(Y.FRAMEBUFFER,Jt);try{const $t=A.textures[zt],fe=$t.format,_e=$t.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+zt);const Kt=Mi($t);if(Kt.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-lt&&mt>=0&&mt<=A.height-ct&&Y.readPixels(K,mt,lt,ct,It.convert(fe),It.convert(_e),Gt)}finally{const $t=j!==null?ft.get(j).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,K,mt,lt,ct,Gt,Zt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt)if(K>=0&&K<=A.width-lt&&mt>=0&&mt<=A.height-ct){y.bindFramebuffer(Y.FRAMEBUFFER,Jt);const $t=A.textures[zt],fe=$t.format,_e=$t.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+zt);const Kt=Mi($t);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ae),Y.bufferData(Y.PIXEL_PACK_BUFFER,Gt.byteLength,Y.STREAM_READ),Y.readPixels(K,mt,lt,ct,It.convert(fe),It.convert(_e),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const Ee=j!==null?ft.get(j).__webglFramebuffer:null;y.bindFramebuffer(Y.FRAMEBUFFER,Ee);const Je=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await J1(Y,Je,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ae),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Gt),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ae),Y.deleteSync(Je),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,mt=0){const lt=Math.pow(2,-mt),ct=Math.floor(A.image.width*lt),Gt=Math.floor(A.image.height*lt),Zt=K!==null?K.x:0,zt=K!==null?K.y:0;St.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,mt,0,0,Zt,zt,ct,Gt),y.unbindTexture()},this.copyTextureToTexture=function(A,K,mt=null,lt=null,ct=0,Gt=0){let Zt,zt,Jt,$t,fe,_e,Kt,Ae,Ee;const Je=A.isCompressedTexture?A.mipmaps[Gt]:A.image;if(mt!==null)Zt=mt.max.x-mt.min.x,zt=mt.max.y-mt.min.y,Jt=mt.isBox3?mt.max.z-mt.min.z:1,$t=mt.min.x,fe=mt.min.y,_e=mt.isBox3?mt.min.z:0;else{const en=Math.pow(2,-ct);Zt=Math.floor(Je.width*en),zt=Math.floor(Je.height*en),A.isDataArrayTexture?Jt=Je.depth:A.isData3DTexture?Jt=Math.floor(Je.depth*en):Jt=1,$t=0,fe=0,_e=0}lt!==null?(Kt=lt.x,Ae=lt.y,Ee=lt.z):(Kt=0,Ae=0,Ee=0);const qe=It.convert(K.format),Mn=It.convert(K.type);let Vt;K.isData3DTexture?(St.setTexture3D(K,0),Vt=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(St.setTexture2DArray(K,0),Vt=Y.TEXTURE_2D_ARRAY):(St.setTexture2D(K,0),Vt=Y.TEXTURE_2D),y.activeTexture(Y.TEXTURE0),y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),y.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);const cn=y.getParameter(Y.UNPACK_ROW_LENGTH),Pe=y.getParameter(Y.UNPACK_IMAGE_HEIGHT),qn=y.getParameter(Y.UNPACK_SKIP_PIXELS),oi=y.getParameter(Y.UNPACK_SKIP_ROWS),Wi=y.getParameter(Y.UNPACK_SKIP_IMAGES);y.pixelStorei(Y.UNPACK_ROW_LENGTH,Je.width),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Je.height),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,$t),y.pixelStorei(Y.UNPACK_SKIP_ROWS,fe),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,_e);const Te=A.isDataArrayTexture||A.isData3DTexture,Xe=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const en=ft.get(A),li=ft.get(K),De=ft.get(en.__renderTarget),un=ft.get(li.__renderTarget);y.bindFramebuffer(Y.READ_FRAMEBUFFER,De.__webglFramebuffer),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let _a=0;_a<Jt;_a++)Te&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ft.get(A).__webglTexture,ct,_e+_a),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ft.get(K).__webglTexture,Gt,Ee+_a)),Y.blitFramebuffer($t,fe,Zt,zt,Kt,Ae,Zt,zt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ct!==0||A.isRenderTargetTexture||ft.has(A)){const en=ft.get(A),li=ft.get(K);y.bindFramebuffer(Y.READ_FRAMEBUFFER,k),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Z);for(let De=0;De<Jt;De++)Te?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,en.__webglTexture,ct,_e+De):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,en.__webglTexture,ct),Xe?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,li.__webglTexture,Gt,Ee+De):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,li.__webglTexture,Gt),ct!==0?Y.blitFramebuffer($t,fe,Zt,zt,Kt,Ae,Zt,zt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Xe?Y.copyTexSubImage3D(Vt,Gt,Kt,Ae,Ee+De,$t,fe,Zt,zt):Y.copyTexSubImage2D(Vt,Gt,Kt,Ae,$t,fe,Zt,zt);y.bindFramebuffer(Y.READ_FRAMEBUFFER,null),y.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Xe?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Vt,Gt,Kt,Ae,Ee,Zt,zt,Jt,qe,Mn,Je.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Vt,Gt,Kt,Ae,Ee,Zt,zt,Jt,qe,Je.data):Y.texSubImage3D(Vt,Gt,Kt,Ae,Ee,Zt,zt,Jt,qe,Mn,Je):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Gt,Kt,Ae,Zt,zt,qe,Mn,Je.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Gt,Kt,Ae,Je.width,Je.height,qe,Je.data):Y.texSubImage2D(Y.TEXTURE_2D,Gt,Kt,Ae,Zt,zt,qe,Mn,Je);y.pixelStorei(Y.UNPACK_ROW_LENGTH,cn),y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Pe),y.pixelStorei(Y.UNPACK_SKIP_PIXELS,qn),y.pixelStorei(Y.UNPACK_SKIP_ROWS,oi),y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Wi),Gt===0&&K.generateMipmaps&&Y.generateMipmap(Vt),y.unbindTexture()},this.initRenderTarget=function(A){ft.get(A).__webglFramebuffer===void 0&&St.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?St.setTextureCube(A,0):A.isData3DTexture?St.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?St.setTexture2DArray(A,0):St.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){X=0,q=0,j=null,y.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ie._getUnpackColorSpace()}}function Ro(o){const e=new Uint32Array(1);return crypto.getRandomValues(e),Promise.resolve(e[0]%o+1)}const fo=Math.PI/180,UC=3,LC=7,OC=.98,Jn=o=>1-(1-o)**3,_M=o=>new Ge().setFromEuler(new kn(o.x*fo,o.y*fo,o.z*fo,"XYZ")),fp=o=>(o%360+540)%360-180,vM=o=>{const e=new Q(o.x,o.y,o.z),i=e.length();return i<1e-9?new Q(0,1,0):(e.divideScalar(i),o.w<0&&e.negate(),e)},PC=(o,e)=>{const i=u=>_M({x:o.x+(e.x-o.x)*Jn(u),y:o.y+(e.y-o.y)*Jn(u),z:o.z+(e.z-o.z)*Jn(u)}),r=i(OC),l=i(1);return vM(l.multiply(r.clone().invert()))},Co=(o,e,i)=>{const r=_M(o),l=vM(r.clone().invert().multiply(e)).applyQuaternion(r).normalize(),u=Math.random()*Math.PI,d=new Ge().setFromAxisAngle(l,-u).multiply(e),h=new kn().setFromQuaternion(d,"XYZ"),p={x:h.x/fo,y:h.y/fo,z:h.z/fo},m=[];for(let _=UC;_<=LC;_++){const v=i-_;if(!(v<1))for(const E of[1,-1])for(const w of[1,-1])for(const I of[1,-1]){const M={x:o.x+E*360*_,y:o.y+w*360*v,z:o.z+I*360*i};M.x+=fp(p.x-M.x),M.y+=fp(p.y-M.y),M.z+=fp(p.z-M.z);const x=PC(o,M).dot(l);m.push({rotation:M,dot:x})}}const S=m.filter(_=>_.dot>0);return S.length>0?S[Math.floor(Math.random()*S.length)].rotation:m.reduce((_,v)=>v.dot>_.dot?v:_).rotation},ss={red:{hex:14034996,cssTop:[214,40,52],cssBottom:[140,18,28],label:"#ffffff"},green:{hex:1096065,cssTop:[16,185,129],cssBottom:[5,150,105],label:"#ecfdf5"},white:{hex:15790320,cssTop:[240,240,240],cssBottom:[200,200,200],label:"#111827"},black:{hex:1052691,cssTop:[16,16,19],cssBottom:[3,3,5],label:"#ffffff"},blue:{hex:1785819,cssTop:[27,63,219],cssBottom:[17,38,140],label:"#ffffff"},yellow:{hex:16761856,cssTop:[255,196,0],cssBottom:[214,152,0],label:"#111827"}},IC=[4,6,8,10,12,20],zC=["red","green","white","black","blue","yellow"],dp={sides:6,color:"red",translucent:!0},FC=.87,wo=o=>o?FC:1;function BC(){const o=new URLSearchParams(window.location.search),e=Number(o.get("s")),i=IC.includes(e)?e:dp.sides,r=o.get("c")?.toLowerCase(),l=r!==void 0&&zC.includes(r)?r:dp.color,u=(o.get("translucent")??o.get("t"))?.toLowerCase(),d=u==="true"?!0:u==="false"?!1:dp.translucent;return{sides:i,color:l,translucent:d}}const QS=65,JS=.5,HC=10,GC=1500,VC=750,XC=260,Ia=Math.PI/180,kC=1.01,qC=2,WC=.95,YC=1.9,ZC=.07,Ll=512,jS=[.246667,.5,.753333],KC=.055733,QC="#ffffff",$S=(o,e,i)=>Math.min(i,Math.max(e,o)),JC=[[0,0,1],[0,1,0],[1,0,0],[-1,0,0],[0,-1,0],[0,0,-1]],jC={1:[[2,2]],2:[[1,1],[3,3]],3:[[1,1],[2,2],[3,3]],4:[[1,1],[1,3],[3,1],[3,3]],5:[[1,1],[1,3],[2,2],[3,1],[3,3]],6:[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]]},tx=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],$C=o=>{const e=[],i=o/2,r=[1,-1];for(const l of[0,1,2]){const[u,d]=[0,1,2].filter(h=>h!==l);for(const h of r){const p=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([S,_])=>{const v=[0,0,0];return v[l]=h,v[u]=S,v[d]=_,v}),m=[];for(let S=0;S<4;S++){const _=p[S],v=p[(S+1)%4];m.push(tx(_,v,i)),m.push(tx(v,_,i))}e.push(m)}}for(const l of r)for(const u of r)for(const d of r)e.push([[l*(1-o),u,d],[l,u*(1-o),d],[l,u,d*(1-o)]]);return e},t2=$C(ZC),e2=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new Q(e,i,r)},n2=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new Q(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},i2=o=>{const e=new Q(...o).normalize(),i=Math.abs(e.y)>.9?new Q(0,0,1):new Q(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new Q().crossVectors(r,e).normalize(),u=new $e().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ge().setFromRotationMatrix(u)}},ex=JC.map(i2),a2=o=>{const e=new Q(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new Q(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},nx=(o,e,i)=>{const r=document.createElement("canvas");r.width=Ll,r.height=Ll;const l=r.getContext("2d");if(!l)return null;const u=KC*Ll;l.fillStyle=e;for(const[p,m]of jC[o]){const S=jS[m-1]*Ll,_=jS[p-1]*Ll;l.beginPath(),l.arc(S,_,u,0,Math.PI*2),l.fill()}const d=new xo(r);d.colorSpace=wn;const h=new Ar({map:d,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(i,i),h)},r2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/Ia,y:e.y/Ia,z:e.z/Ia}};function s2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),S=vt.useRef(!1),[_,v]=vt.useState(!1),[E,w]=vt.useState(!1),[I,M]=vt.useState(null),[x,U]=vt.useState(null),G=vt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*Ia,b.y*Ia,b.z*Ia)},[]),D=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},W=performance.now();return new Promise(k=>{const Z=X=>{const q=Math.min((X-W)/C,1),j=Jn(q);G({x:N.x+(b.x-N.x)*j,y:N.y+(b.y-N.y)*j,z:N.z+(b.z-N.z)*j}),q<1?d.current=requestAnimationFrame(Z):(d.current=null,k())};d.current=requestAnimationFrame(Z)})},[G]),O=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const W=N.quaternion.clone(),k=performance.now();return new Promise(Z=>{const X=q=>{const j=Math.min((q-k)/C,1);N.quaternion.slerpQuaternions(W,b,Jn(j)),h.current=r2(N.quaternion),j<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),L=vt.useCallback(async()=>{S.current=!0,v(!0),M(null),U(null);try{const b=await Ro(6),C=a2(ex[b-1]),N=h.current,W=Co(N,C,HC);await D(W,GC),await O(C,VC),p.current=h.current,v(!1),S.current=!1,M(b)}catch(b){v(!1),S.current=!1,U(b instanceof Error?b.message:"Roll failed.")}},[O,D]),z=vt.useCallback(b=>{if(S.current)return;const C=b.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),w(!0)},[]),T=vt.useCallback(b=>{const C=m.current;!C||S.current||(C.nx=$S((b.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=$S((b.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;G({x:N.x-C.ny*QS,y:N.y+C.nx*QS,z:N.z})})))},[G]),P=vt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=JS||Math.abs(b.ny)>=JS?L():D(p.current,XC)},[D,L]);return vt.useEffect(()=>{const b=i.current;if(!b)return;const C=new So,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const W=new Ao({alpha:!0,antialias:!0});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setClearColor(0,0),b.appendChild(W.domElement);const k=new jn,Z=[],X=[];for(const dt of t2){const B=e2(dt),nt=n2(dt,B),gt=nt.x,Rt=nt.y,st=nt.z,[At,ee,ne]=dt,jt=[ee[0]-At[0],ee[1]-At[1],ee[2]-At[2]],kt=[ne[0]-At[0],ne[1]-At[1],ne[2]-At[2]],Nt=jt[1]*kt[2]-jt[2]*kt[1],ie=jt[2]*kt[0]-jt[0]*kt[2],Se=jt[0]*kt[1]-jt[1]*kt[0],de=Nt*B.x+ie*B.y+Se*B.z>=0?dt:[...dt].reverse();for(let ce=1;ce<de.length-1;ce++)Z.push(...de[0],...de[ce],...de[ce+1]),X.push(gt,Rt,st,gt,Rt,st,gt,Rt,st)}k.setAttribute("position",new hn(Z,3)),k.setAttribute("normal",new hn(X,3));const q=ss[o],j=wo(e),$=new mn(k,new Mo({color:q.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:j,depthWrite:!e}));$.rotation.set(h.current.x*Ia,h.current.y*Ia,h.current.z*Ia);const ht=new Ge().setFromAxisAngle(new Q(0,1,0),Math.PI);ex.forEach((dt,B)=>{const nt=B+1,gt=nx(nt,q.label,qC);if(!gt)return;gt.position.copy(dt.normal).multiplyScalar(kC),gt.quaternion.copy(dt.orientation),gt.renderOrder=1,$.add(gt);const Rt=nx(nt,QC,YC);Rt&&(Rt.renderOrder=-1,Rt.position.copy(dt.normal).multiplyScalar(WC),Rt.quaternion.copy(dt.orientation).multiply(ht),$.add(Rt))}),C.add($),C.add(new To(16777215,1)),C.add(new yo(16777215,12303291,1));const Lt=new Eo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=$;const wt=()=>{const dt=b.clientWidth,B=b.clientHeight;W.setSize(dt,B,!1),N.aspect=dt/B,N.updateProjectionMatrix()},V=new ResizeObserver(wt);V.observe(b),wt();const _t=()=>{l.current=requestAnimationFrame(_t),W.render(C,N)};return _t(),()=>{V.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),$.geometry.dispose(),$.material.dispose(),$.children.forEach(dt=>{const B=dt;B.geometry.dispose(),B.material.map?.dispose(),B.material.dispose()}),W.dispose(),b.removeChild(W.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--six-sided${E?" is-dragging":""}`,onPointerDown:z,onPointerMove:T,onPointerUp:P,onPointerCancel:P,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:_?"Rolling...":x||(I?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const ix=65,ax=.5,o2=10,l2=1500,c2=750,u2=260,sa=Math.PI/180,rx=.8,za=[[.981495,.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495]],la=[[1,3,2],[0,2,3],[0,3,1],[0,1,2]],im=[1,2,3,4],sx=[[-.122687,-.736122,-.122687],[-.736122,-.122687,-.122687],[-.122687,-.122687,-.736122],[-.122687,.736122,.122687],[-.736122,.122687,.122687],[-.122687,.122687,.736122],[.122687,-.122687,.736122],[.122687,-.736122,.122687],[.736122,-.122687,.122687],[.736122,.122687,-.122687],[.122687,.122687,-.736122],[.122687,.736122,-.122687]],f2=[180,180,0,180,0,180,0,180,180,0,180,180],ox={x:-177.2356,y:55.25,z:45},lx=(o,e,i)=>Math.min(i,Math.max(e,o)),hp=(o,e,i)=>[o[0]+(e[0]-o[0])*i,o[1]+(e[1]-o[1])*i,o[2]+(e[2]-o[2])*i],SM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new Q(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},xM=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new Q(e,i,r)},am=la.map(o=>{const e=o.map(r=>za[r]),i=xM(e);return{normal:SM(e,i),center:i}}),d2=.07,h2=o=>{const e=[];for(const i of la){const r=[];for(let l=0;l<3;l++){const u=za[i[l]],d=za[i[(l+1)%3]],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]),p=o/h;r.push(hp(u,d,p)),r.push(hp(d,u,p))}e.push(r)}for(let i=0;i<za.length;i++){const r=[];for(let l=0;l<za.length;l++){if(l===i)continue;const u=za[i],d=za[l],h=Math.hypot(d[0]-u[0],d[1]-u[1],d[2]-u[2]);r.push(hp(u,d,o/h))}e.push(r)}return e},p2=h2(d2),m2=(o,e)=>{const i=la[o][e],r=la[o][(e+1)%3];for(let l=0;l<la.length;l++)if(l!==o&&la[l].includes(i)&&la[l].includes(r))return im[l];return im[o]},g2=o=>{const{normal:e}=am[o],i=new Ge().setFromUnitVectors(e,new Q(0,-1,0)),r=(o+1)%la.length,l=am[r].normal.clone().applyQuaternion(i),u=Math.atan2(l.x,l.z);return new Ge().setFromAxisAngle(new Q(0,1,0),-u).multiply(i)},_2="#ffffff",cx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new xo(i);l.colorSpace=wn;const u=new Ar({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(rx,rx),u)},v2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/sa,y:e.y/sa,z:e.z/sa}};function S2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({...ox}),p=vt.useRef({...ox}),m=vt.useRef(null),S=vt.useRef(!1),[_,v]=vt.useState(!1),[E,w]=vt.useState(!1),[I,M]=vt.useState(null),[x,U]=vt.useState(null),G=vt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*sa,b.y*sa,b.z*sa)},[]),D=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},W=performance.now();return new Promise(k=>{const Z=X=>{const q=Math.min((X-W)/C,1),j=Jn(q);G({x:N.x+(b.x-N.x)*j,y:N.y+(b.y-N.y)*j,z:N.z+(b.z-N.z)*j}),q<1?d.current=requestAnimationFrame(Z):(d.current=null,k())};d.current=requestAnimationFrame(Z)})},[G]),O=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const W=N.quaternion.clone(),k=performance.now();return new Promise(Z=>{const X=q=>{const j=Math.min((q-k)/C,1);N.quaternion.slerpQuaternions(W,b,Jn(j)),h.current=v2(N.quaternion),j<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),L=vt.useCallback(async()=>{S.current=!0,v(!0),M(null),U(null);try{const b=await Ro(4),C=im.indexOf(b),N=g2(C),W=h.current,k=Co(W,N,o2);await D(k,l2),await O(N,c2),p.current=h.current,v(!1),S.current=!1,M(b)}catch(b){v(!1),S.current=!1,U(b instanceof Error?b.message:"Roll failed.")}},[O,D]),z=vt.useCallback(b=>{if(S.current)return;const C=b.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),w(!0)},[]),T=vt.useCallback(b=>{const C=m.current;!C||S.current||(C.nx=lx((b.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=lx((b.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;G({x:N.x-C.ny*ix,y:N.y+C.nx*ix,z:N.z})})))},[G]),P=vt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=ax||Math.abs(b.ny)>=ax?L():D(p.current,u2)},[D,L]);return vt.useEffect(()=>{const b=i.current;if(!b)return;const C=new So,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const W=new Ao({alpha:!0,antialias:!0});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setClearColor(0,0),b.appendChild(W.domElement);const k=new jn,Z=[],X=[];for(const dt of p2){const B=dt,nt=xM(B),gt=SM(B,nt),Rt=gt.x,st=gt.y,At=gt.z,[ee,ne,jt]=B,kt=[ne[0]-ee[0],ne[1]-ee[1],ne[2]-ee[2]],Nt=[jt[0]-ee[0],jt[1]-ee[1],jt[2]-ee[2]],ie=kt[1]*Nt[2]-kt[2]*Nt[1],Se=kt[2]*Nt[0]-kt[0]*Nt[2],Le=kt[0]*Nt[1]-kt[1]*Nt[0],ce=ie*nt.x+Se*nt.y+Le*nt.z>=0?B:[...B].reverse();for(let Y=1;Y<ce.length-1;Y++)Z.push(...ce[0],...ce[Y],...ce[Y+1]),X.push(Rt,st,At,Rt,st,At,Rt,st,At)}k.setAttribute("position",new hn(Z,3)),k.setAttribute("normal",new hn(X,3));const q=ss[o],j=wo(e),$=new mn(k,new Mo({color:q.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:j,depthWrite:!e}));$.rotation.set(h.current.x*sa,h.current.y*sa,h.current.z*sa);const ht=new Ge().setFromAxisAngle(new Q(0,1,0),Math.PI),Mt=()=>{am.forEach(({normal:dt,center:B},nt)=>{for(let gt=0;gt<3;gt++){const Rt=nt*3+gt,st=m2(nt,gt),At=la[nt][gt],ee=la[nt][(gt+1)%3],ne=new Q().addVectors(new Q(...za[At]),new Q(...za[ee])).multiplyScalar(.5),jt=B.clone().sub(ne).normalize(),kt=new Q().crossVectors(jt,dt),Nt=new Ge().setFromRotationMatrix(new $e().makeBasis(kt,jt,dt)),ie=new Ge().setFromAxisAngle(new Q(0,0,1),f2[Rt]*sa),Se=Nt.multiply(ie),Le=cx(st,q.label);Le&&(Le.renderOrder=1,Le.position.copy(new Q(...sx[Rt])).addScaledVector(dt,.01),Le.quaternion.copy(Se),$.add(Le));const de=cx(st,_2);de&&(de.renderOrder=-1,de.position.copy(new Q(...sx[Rt])).addScaledVector(dt,-.05),de.quaternion.copy(Se).multiply(ht),$.add(de))}})};document.fonts.load("700 160px dice-font").then(Mt),C.add($),C.add(new To(16777215,1)),C.add(new yo(16777215,12303291,1));const Lt=new Eo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=$;const wt=()=>{const dt=b.clientWidth,B=b.clientHeight;W.setSize(dt,B,!1),N.aspect=dt/B,N.updateProjectionMatrix()},V=new ResizeObserver(wt);V.observe(b),wt();const _t=()=>{l.current=requestAnimationFrame(_t),W.render(C,N)};return _t(),()=>{V.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),k.dispose(),$.material.dispose(),$.children.forEach(dt=>{const B=dt;B.geometry.dispose(),B.material.map?.dispose(),B.material.dispose()}),W.dispose(),b.removeChild(W.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--four-sided${E?" is-dragging":""}`,onPointerDown:z,onPointerMove:T,onPointerUp:P,onPointerCancel:P,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:_?"Rolling...":x||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const ux=65,fx=.5,x2=10,M2=1500,y2=750,E2=260,ho=Math.PI/180,dx=1.08,hx=.864,px=(o,e,i)=>Math.min(i,Math.max(e,o)),T2=[[1,1,1],[-1,1,1],[-1,1,-1],[1,1,-1],[1,-1,1],[-1,-1,1],[-1,-1,-1],[1,-1,-1]],b2=o=>{const e=new Q(...o).normalize(),i=Math.abs(e.y)>.9?new Q(0,0,1):new Q(0,1,0),r=i.clone().sub(e.clone().multiplyScalar(i.dot(e))).normalize(),l=new Q().crossVectors(r,e).normalize(),u=new $e().makeBasis(l,r,e);return{normal:e,up:r,orientation:new Ge().setFromRotationMatrix(u)}},mx=T2.map(b2),A2=o=>{const e=new Q(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new Q(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},R2="#ffffff",gx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 200px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.shadowColor="rgba(0, 0, 0, 0.35)",r.shadowBlur=6,r.fillText(String(o),128,136);const l=new xo(i);l.colorSpace=wn;const u=new Ar({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(hx,hx),u)},C2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/ho,y:e.y/ho,z:e.z/ho}};function w2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),S=vt.useRef(!1),[_,v]=vt.useState(!1),[E,w]=vt.useState(!1),[I,M]=vt.useState(null),[x,U]=vt.useState(null),G=vt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*ho,b.y*ho,b.z*ho)},[]),D=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},W=performance.now();return new Promise(k=>{const Z=X=>{const q=Math.min((X-W)/C,1),j=Jn(q);G({x:N.x+(b.x-N.x)*j,y:N.y+(b.y-N.y)*j,z:N.z+(b.z-N.z)*j}),q<1?d.current=requestAnimationFrame(Z):(d.current=null,k())};d.current=requestAnimationFrame(Z)})},[G]),O=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const W=N.quaternion.clone(),k=performance.now();return new Promise(Z=>{const X=q=>{const j=Math.min((q-k)/C,1);N.quaternion.slerpQuaternions(W,b,Jn(j)),h.current=C2(N.quaternion),j<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),L=vt.useCallback(async()=>{S.current=!0,v(!0),M(null),U(null);try{const b=await Ro(8),C=A2(mx[b-1]),N=h.current,W=Co(N,C,x2);await D(W,M2),await O(C,y2),p.current=h.current,v(!1),S.current=!1,M(b)}catch(b){v(!1),S.current=!1,U(b instanceof Error?b.message:"Roll failed.")}},[O,D]),z=vt.useCallback(b=>{if(S.current)return;const C=b.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),w(!0)},[]),T=vt.useCallback(b=>{const C=m.current;!C||S.current||(C.nx=px((b.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=px((b.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;G({x:N.x-C.ny*ux,y:N.y+C.nx*ux,z:N.z})})))},[G]),P=vt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=fx||Math.abs(b.ny)>=fx?L():D(p.current,E2)},[D,L]);return vt.useEffect(()=>{const b=i.current;if(!b)return;const C=new So,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const W=new Ao({alpha:!0,antialias:!0});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setClearColor(0,0),b.appendChild(W.domElement);const k=ss[o],Z=wo(e),X=new mn(new Lm(1.7,0),new Mo({color:k.hex,roughness:.46,metalness:.08,flatShading:!0,transparent:e,opacity:Z,depthWrite:!e})),q=new Ge().setFromAxisAngle(new Q(0,1,0),Math.PI),j=()=>{mx.forEach((wt,V)=>{const _t=V+1,dt=gx(_t,k.label);if(!dt)return;dt.position.copy(wt.normal).multiplyScalar(dx),dt.quaternion.copy(wt.orientation),dt.renderOrder=1,X.add(dt);const B=gx(_t,R2);B&&(B.renderOrder=-1,B.position.copy(wt.normal).multiplyScalar(dx-.2),B.quaternion.copy(wt.orientation).multiply(q),X.add(B))})};document.fonts.load("700 200px dice-font").then(j),C.add(X),C.add(new To(16777215,1)),C.add(new yo(16777215,12303291,1));const $=new Eo(16777215,1);$.position.set(3,4,5),C.add($),r.current=X;const ht=()=>{const wt=b.clientWidth,V=b.clientHeight;W.setSize(wt,V,!1),N.aspect=wt/V,N.updateProjectionMatrix()},Mt=new ResizeObserver(ht);Mt.observe(b),ht();const Lt=()=>{l.current=requestAnimationFrame(Lt),W.render(C,N)};return Lt(),()=>{Mt.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),X.geometry.dispose(),X.material.dispose(),X.children.forEach(wt=>{const V=wt;V.geometry.dispose(),V.material.map?.dispose(),V.material.dispose()}),W.dispose(),b.removeChild(W.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--eight-sided${E?" is-dragging":""}`,onPointerDown:z,onPointerMove:T,onPointerUp:P,onPointerCancel:P,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:_?"Rolling...":x||(I?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const _x=65,vx=.5,D2=10,N2=1500,U2=750,L2=260,po=Math.PI/180,Sx=.77,MM=2.2,O2=.85,Ku=MM*.9*O2,Er=MM*.65,rm=Ku*.105573,sm=Ku*.8,zu=(Ku-sm)/(Ku-rm),om=[...[0,1,2,3,4].map(o=>[zu*Er*Math.cos(o*2*Math.PI/5),sm,zu*Er*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[zu*Er*Math.cos((o+.5)*2*Math.PI/5),-sm,zu*Er*Math.sin((o+.5)*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Er*Math.cos(o*2*Math.PI/5),rm,Er*Math.sin(o*2*Math.PI/5)]),...[0,1,2,3,4].map(o=>[Er*Math.cos((o+.5)*2*Math.PI/5),-rm,Er*Math.sin((o+.5)*2*Math.PI/5)])],lm=[[0,10,15,11,1],[1,11,16,12,2],[2,12,17,13,3],[3,13,18,14,4],[4,14,19,10,0],[5,6,16,11,15],[6,7,17,12,16],[7,8,18,13,17],[8,9,19,14,18],[9,5,15,10,19],[0,1,2,3,4],[5,6,7,8,9]],cm=[1,3,5,7,9,8,6,4,2,10],xx=(o,e,i)=>Math.min(i,Math.max(e,o)),yM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new Q(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},um=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new Q(e,i,r)},P2=o=>{const e=lm[o].map(p=>om[p]),i=um(e),r=yM(e,i),l=Math.abs(r.y)>.9?new Q(0,0,1):new Q(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new Q().crossVectors(u,r).normalize(),h=new $e().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ge().setFromRotationMatrix(h)}},Mx=Array.from({length:cm.length},(o,e)=>P2(e)),I2=o=>{const e=new Q(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new Q(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},z2="#ffffff",yx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 180px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o===10?0:o),128,136);const l=new xo(i);l.colorSpace=wn;const u=new Ar({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(Sx,Sx),u)},F2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/po,y:e.y/po,z:e.z/po}};function B2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),S=vt.useRef(!1),[_,v]=vt.useState(!1),[E,w]=vt.useState(!1),[I,M]=vt.useState(null),[x,U]=vt.useState(null),G=vt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*po,b.y*po,b.z*po)},[]),D=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},W=performance.now();return new Promise(k=>{const Z=X=>{const q=Math.min((X-W)/C,1),j=Jn(q);G({x:N.x+(b.x-N.x)*j,y:N.y+(b.y-N.y)*j,z:N.z+(b.z-N.z)*j}),q<1?d.current=requestAnimationFrame(Z):(d.current=null,k())};d.current=requestAnimationFrame(Z)})},[G]),O=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const W=N.quaternion.clone(),k=performance.now();return new Promise(Z=>{const X=q=>{const j=Math.min((q-k)/C,1);N.quaternion.slerpQuaternions(W,b,Jn(j)),h.current=F2(N.quaternion),j<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),L=vt.useCallback(async()=>{S.current=!0,v(!0),M(null),U(null);try{const b=await Ro(10),C=cm.indexOf(b),N=I2(Mx[C]),W=h.current,k=Co(W,N,D2);await D(k,N2),await O(N,U2),p.current=h.current,v(!1),S.current=!1,M(b)}catch(b){v(!1),S.current=!1,U(b instanceof Error?b.message:"Roll failed.")}},[O,D]),z=vt.useCallback(b=>{if(S.current)return;const C=b.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),w(!0)},[]),T=vt.useCallback(b=>{const C=m.current;!C||S.current||(C.nx=xx((b.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=xx((b.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;G({x:N.x-C.ny*_x,y:N.y+C.nx*_x,z:N.z})})))},[G]),P=vt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=vx||Math.abs(b.ny)>=vx?L():D(p.current,L2)},[D,L]);return vt.useEffect(()=>{const b=i.current;if(!b)return;const C=new So,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const W=new Ao({alpha:!0,antialias:!0});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setClearColor(0,0),b.appendChild(W.domElement);const k=new jn,Z=[],X=[];for(const dt of lm){const B=dt.map(Y=>om[Y]),nt=um(B),gt=yM(B,nt),Rt=gt.x,st=gt.y,At=gt.z,[ee,ne,jt]=B,kt=[ne[0]-ee[0],ne[1]-ee[1],ne[2]-ee[2]],Nt=[jt[0]-ee[0],jt[1]-ee[1],jt[2]-ee[2]],ie=kt[1]*Nt[2]-kt[2]*Nt[1],Se=kt[2]*Nt[0]-kt[0]*Nt[2],Le=kt[0]*Nt[1]-kt[1]*Nt[0],ce=ie*nt.x+Se*nt.y+Le*nt.z>=0?B:[...B].reverse();for(let Y=1;Y<ce.length-1;Y++)Z.push(...ce[0],...ce[Y],...ce[Y+1]),X.push(Rt,st,At,Rt,st,At,Rt,st,At)}k.setAttribute("position",new hn(Z,3)),k.setAttribute("normal",new hn(X,3));const q=ss[o],j=wo(e),$=new mn(k,new Mo({color:q.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:j,depthWrite:!e})),ht=new Ge().setFromAxisAngle(new Q(0,1,0),Math.PI),Mt=()=>{Mx.forEach((dt,B)=>{const nt=cm[B],gt=yx(nt,q.label);if(!gt)return;const Rt=um(lm[B].map(At=>om[At]));gt.position.copy(Rt),gt.position.addScaledVector(dt.normal,.01),gt.quaternion.copy(dt.orientation),gt.renderOrder=1,$.add(gt);const st=yx(nt,z2);st&&(st.renderOrder=-1,st.position.copy(Rt),st.position.addScaledVector(dt.normal,-.05),st.quaternion.copy(dt.orientation).multiply(ht),$.add(st))})};document.fonts.load("700 180px dice-font").then(Mt),C.add($),C.add(new To(16777215,1)),C.add(new yo(16777215,12303291,1));const Lt=new Eo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=$;const wt=()=>{const dt=b.clientWidth,B=b.clientHeight;W.setSize(dt,B,!1),N.aspect=dt/B,N.updateProjectionMatrix()},V=new ResizeObserver(wt);V.observe(b),wt();const _t=()=>{l.current=requestAnimationFrame(_t),W.render(C,N)};return _t(),()=>{V.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),k.dispose(),$.material.dispose(),$.children.forEach(dt=>{const B=dt;B.geometry.dispose(),B.material.map?.dispose(),B.material.dispose()}),W.dispose(),b.removeChild(W.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--ten-sided${E?" is-dragging":""}`,onPointerDown:z,onPointerMove:T,onPointerUp:P,onPointerCancel:P,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:_?"Rolling...":x||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const Ex=65,Tx=.5,H2=10,G2=1500,V2=750,X2=260,mo=Math.PI/180,bx=1,fm=[[.981495,.981495,.981495],[.981495,.981495,-.981495],[.981495,-.981495,.981495],[.981495,-.981495,-.981495],[-.981495,.981495,.981495],[-.981495,.981495,-.981495],[-.981495,-.981495,.981495],[-.981495,-.981495,-.981495],[0,.606598,1.588093],[0,.606598,-1.588093],[0,-.606598,1.588093],[0,-.606598,-1.588093],[.606598,1.588093,0],[.606598,-1.588093,0],[-.606598,1.588093,0],[-.606598,-1.588093,0],[1.588093,0,.606598],[1.588093,0,-.606598],[-1.588093,0,.606598],[-1.588093,0,-.606598]],dm=[[14,12,1,9,5],[4,8,0,12,14],[1,12,0,16,17],[19,18,4,14,5],[7,19,5,9,11],[11,9,1,17,3],[2,16,0,8,10],[10,8,4,18,6],[17,16,2,13,3],[7,15,6,18,19],[7,11,3,13,15],[15,13,2,10,6]],hm=[1,2,3,4,5,6,8,7,9,10,11,12],Ax=(o,e,i)=>Math.min(i,Math.max(e,o)),EM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new Q(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},pm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new Q(e,i,r)},k2=o=>{const e=dm[o].map(p=>fm[p]),i=pm(e),r=EM(e,i),l=Math.abs(r.y)>.9?new Q(0,0,1):new Q(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new Q().crossVectors(u,r).normalize(),h=new $e().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ge().setFromRotationMatrix(h)}},Rx=Array.from({length:hm.length},(o,e)=>k2(e)),q2=o=>{const e=new Q(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new Q(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},W2="#ffffff",Cx=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new xo(i);l.colorSpace=wn;const u=new Ar({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(bx,bx),u)},Y2=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/mo,y:e.y/mo,z:e.z/mo}};function Z2({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),S=vt.useRef(!1),[_,v]=vt.useState(!1),[E,w]=vt.useState(!1),[I,M]=vt.useState(null),[x,U]=vt.useState(null),G=vt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*mo,b.y*mo,b.z*mo)},[]),D=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},W=performance.now();return new Promise(k=>{const Z=X=>{const q=Math.min((X-W)/C,1),j=Jn(q);G({x:N.x+(b.x-N.x)*j,y:N.y+(b.y-N.y)*j,z:N.z+(b.z-N.z)*j}),q<1?d.current=requestAnimationFrame(Z):(d.current=null,k())};d.current=requestAnimationFrame(Z)})},[G]),O=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const W=N.quaternion.clone(),k=performance.now();return new Promise(Z=>{const X=q=>{const j=Math.min((q-k)/C,1);N.quaternion.slerpQuaternions(W,b,Jn(j)),h.current=Y2(N.quaternion),j<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),L=vt.useCallback(async()=>{S.current=!0,v(!0),M(null),U(null);try{const b=await Ro(12),C=hm.indexOf(b),N=q2(Rx[C]),W=h.current,k=Co(W,N,H2);await D(k,G2),await O(N,V2),p.current=h.current,v(!1),S.current=!1,M(b)}catch(b){v(!1),S.current=!1,U(b instanceof Error?b.message:"Roll failed.")}},[O,D]),z=vt.useCallback(b=>{if(S.current)return;const C=b.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),w(!0)},[]),T=vt.useCallback(b=>{const C=m.current;!C||S.current||(C.nx=Ax((b.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=Ax((b.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;G({x:N.x-C.ny*Ex,y:N.y+C.nx*Ex,z:N.z})})))},[G]),P=vt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=Tx||Math.abs(b.ny)>=Tx?L():D(p.current,X2)},[D,L]);return vt.useEffect(()=>{const b=i.current;if(!b)return;const C=new So,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const W=new Ao({alpha:!0,antialias:!0});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setClearColor(0,0),b.appendChild(W.domElement);const k=new jn,Z=[],X=[];for(const dt of dm){const B=dt.map(Y=>fm[Y]),nt=pm(B),gt=EM(B,nt),Rt=gt.x,st=gt.y,At=gt.z,[ee,ne,jt]=B,kt=[ne[0]-ee[0],ne[1]-ee[1],ne[2]-ee[2]],Nt=[jt[0]-ee[0],jt[1]-ee[1],jt[2]-ee[2]],ie=kt[1]*Nt[2]-kt[2]*Nt[1],Se=kt[2]*Nt[0]-kt[0]*Nt[2],Le=kt[0]*Nt[1]-kt[1]*Nt[0],ce=ie*nt.x+Se*nt.y+Le*nt.z>=0?B:[...B].reverse();for(let Y=1;Y<ce.length-1;Y++)Z.push(...ce[0],...ce[Y],...ce[Y+1]),X.push(Rt,st,At,Rt,st,At,Rt,st,At)}k.setAttribute("position",new hn(Z,3)),k.setAttribute("normal",new hn(X,3));const q=ss[o],j=wo(e),$=new mn(k,new Mo({color:q.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:j,depthWrite:!e})),ht=new Ge().setFromAxisAngle(new Q(0,1,0),Math.PI),Mt=()=>{Rx.forEach((dt,B)=>{const nt=hm[B],gt=Cx(nt,q.label);if(!gt)return;const Rt=pm(dm[B].map(At=>fm[At]));gt.position.copy(Rt),gt.position.addScaledVector(dt.normal,.01),gt.quaternion.copy(dt.orientation),gt.renderOrder=1,$.add(gt);const st=Cx(nt,W2);st&&(st.renderOrder=-1,st.position.copy(Rt),st.position.addScaledVector(dt.normal,-.05),st.quaternion.copy(dt.orientation).multiply(ht),$.add(st))})};document.fonts.load("700 160px dice-font").then(Mt),C.add($),C.add(new To(16777215,1)),C.add(new yo(16777215,12303291,1));const Lt=new Eo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=$;const wt=()=>{const dt=b.clientWidth,B=b.clientHeight;W.setSize(dt,B,!1),N.aspect=dt/B,N.updateProjectionMatrix()},V=new ResizeObserver(wt);V.observe(b),wt();const _t=()=>{l.current=requestAnimationFrame(_t),W.render(C,N)};return _t(),()=>{V.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),k.dispose(),$.material.dispose(),$.children.forEach(dt=>{const B=dt;B.geometry.dispose(),B.material.map?.dispose(),B.material.dispose()}),W.dispose(),b.removeChild(W.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--twelve-sided${E?" is-dragging":""}`,onPointerDown:z,onPointerMove:T,onPointerUp:P,onPointerCancel:P,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:_?"Rolling...":x||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}const wx=65,Dx=.5,K2=10,Q2=1500,J2=750,j2=260,go=Math.PI/180,Nx=.9,mm=[[0,.893743,1.446106],[0,.893743,-1.446106],[0,-.893743,1.446106],[0,-.893743,-1.446106],[.893743,1.446106,0],[.893743,-1.446106,0],[-.893743,1.446106,0],[-.893743,-1.446106,0],[1.446106,0,.893743],[1.446106,0,-.893743],[-1.446106,0,.893743],[-1.446106,0,-.893743]],gm=[[6,4,1],[0,4,6],[11,6,1],[1,4,9],[8,4,0],[0,6,10],[4,8,9],[11,10,6],[1,3,11],[9,3,1],[0,2,8],[10,2,0],[9,8,5],[7,10,11],[3,7,11],[9,5,3],[2,5,8],[10,7,2],[3,5,7],[7,5,2]],_m=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,16,15,18,17,19,20],Ux=(o,e,i)=>Math.min(i,Math.max(e,o)),TM=(o,e)=>{const[i,r,l]=o,u=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],d=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],h=u[1]*d[2]-u[2]*d[1],p=u[2]*d[0]-u[0]*d[2],m=u[0]*d[1]-u[1]*d[0],S=Math.sqrt(h*h+p*p+m*m),_=new Q(h/S,p/S,m/S);return _.dot(e)<0&&_.negate(),_},vm=o=>{const e=o.reduce((l,u)=>l+u[0],0)/o.length,i=o.reduce((l,u)=>l+u[1],0)/o.length,r=o.reduce((l,u)=>l+u[2],0)/o.length;return new Q(e,i,r)},$2=o=>{const e=gm[o].map(p=>mm[p]),i=vm(e),r=TM(e,i),l=Math.abs(r.y)>.9?new Q(0,0,1):new Q(0,1,0),u=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),d=new Q().crossVectors(u,r).normalize(),h=new $e().makeBasis(d,u,r);return{normal:r,up:u,orientation:new Ge().setFromRotationMatrix(h)}},Lx=Array.from({length:_m.length},(o,e)=>$2(e)),tw=o=>{const e=new Q(0,0,1),i=new Ge().setFromUnitVectors(o.normal,e),r=o.up.clone().applyQuaternion(i);return new Ge().setFromAxisAngle(new Q(0,0,1),Math.atan2(r.x,r.y)).multiply(i)},ew="#ffffff",Ox=(o,e)=>{const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");if(!r)return null;r.font="700 160px dice-font, system-ui, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillStyle=e,r.fillText(String(o),128,136);const l=new xo(i);l.colorSpace=wn;const u=new Ar({map:l,transparent:!0,side:Si,depthWrite:!1});return new mn(new ma(Nx,Nx),u)},nw=o=>{const e=new kn().setFromQuaternion(o,"XYZ");return{x:e.x/go,y:e.y/go,z:e.z/go}};function iw({color:o="red",translucent:e=!0}){const i=vt.useRef(null),r=vt.useRef(null),l=vt.useRef(null),u=vt.useRef(null),d=vt.useRef(null),h=vt.useRef({x:0,y:0,z:0}),p=vt.useRef({x:0,y:0,z:0}),m=vt.useRef(null),S=vt.useRef(!1),[_,v]=vt.useState(!1),[E,w]=vt.useState(!1),[I,M]=vt.useState(null),[x,U]=vt.useState(null),G=vt.useCallback(b=>{h.current=b,r.current?.rotation.set(b.x*go,b.y*go,b.z*go)},[]),D=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N={...h.current},W=performance.now();return new Promise(k=>{const Z=X=>{const q=Math.min((X-W)/C,1),j=Jn(q);G({x:N.x+(b.x-N.x)*j,y:N.y+(b.y-N.y)*j,z:N.z+(b.z-N.z)*j}),q<1?d.current=requestAnimationFrame(Z):(d.current=null,k())};d.current=requestAnimationFrame(Z)})},[G]),O=vt.useCallback((b,C)=>{d.current&&cancelAnimationFrame(d.current);const N=r.current;if(!N)return Promise.resolve();const W=N.quaternion.clone(),k=performance.now();return new Promise(Z=>{const X=q=>{const j=Math.min((q-k)/C,1);N.quaternion.slerpQuaternions(W,b,Jn(j)),h.current=nw(N.quaternion),j<1?d.current=requestAnimationFrame(X):(d.current=null,Z())};d.current=requestAnimationFrame(X)})},[]),L=vt.useCallback(async()=>{S.current=!0,v(!0),M(null),U(null);try{const b=await Ro(20),C=_m.indexOf(b),N=tw(Lx[C]),W=h.current,k=Co(W,N,K2);await D(k,Q2),await O(N,J2),p.current=h.current,v(!1),S.current=!1,M(b)}catch(b){v(!1),S.current=!1,U(b instanceof Error?b.message:"Roll failed.")}},[O,D]),z=vt.useCallback(b=>{if(S.current)return;const C=b.currentTarget.getBoundingClientRect();m.current={centerX:C.left+C.width/2,centerY:C.top+C.height/2,halfWidth:C.width/2,halfHeight:C.height/2,nx:0,ny:0},b.currentTarget.setPointerCapture(b.pointerId),w(!0)},[]),T=vt.useCallback(b=>{const C=m.current;!C||S.current||(C.nx=Ux((b.clientX-C.centerX)/C.halfWidth,-1,1),C.ny=Ux((b.clientY-C.centerY)/C.halfHeight,-1,1),!u.current&&(u.current=requestAnimationFrame(()=>{u.current=null;const N=p.current;G({x:N.x-C.ny*wx,y:N.y+C.nx*wx,z:N.z})})))},[G]),P=vt.useCallback(()=>{const b=m.current;if(!b)return;m.current=null,w(!1),u.current&&(cancelAnimationFrame(u.current),u.current=null),Math.abs(b.nx)>=Dx||Math.abs(b.ny)>=Dx?L():D(p.current,j2)},[D,L]);return vt.useEffect(()=>{const b=i.current;if(!b)return;const C=new So,N=new In(28,1,.1,100);N.position.set(0,0,7),N.lookAt(0,0,0);const W=new Ao({alpha:!0,antialias:!0});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setClearColor(0,0),b.appendChild(W.domElement);const k=new jn,Z=[],X=[];for(const dt of gm){const B=dt.map(Y=>mm[Y]),nt=vm(B),gt=TM(B,nt),Rt=gt.x,st=gt.y,At=gt.z,[ee,ne,jt]=B,kt=[ne[0]-ee[0],ne[1]-ee[1],ne[2]-ee[2]],Nt=[jt[0]-ee[0],jt[1]-ee[1],jt[2]-ee[2]],ie=kt[1]*Nt[2]-kt[2]*Nt[1],Se=kt[2]*Nt[0]-kt[0]*Nt[2],Le=kt[0]*Nt[1]-kt[1]*Nt[0],ce=ie*nt.x+Se*nt.y+Le*nt.z>=0?B:[...B].reverse();for(let Y=1;Y<ce.length-1;Y++)Z.push(...ce[0],...ce[Y],...ce[Y+1]),X.push(Rt,st,At,Rt,st,At,Rt,st,At)}k.setAttribute("position",new hn(Z,3)),k.setAttribute("normal",new hn(X,3));const q=ss[o],j=wo(e),$=new mn(k,new Mo({color:q.hex,roughness:.4,metalness:0,flatShading:!1,transparent:e,opacity:j,depthWrite:!e})),ht=new Ge().setFromAxisAngle(new Q(0,1,0),Math.PI),Mt=()=>{Lx.forEach((dt,B)=>{const nt=_m[B],gt=Ox(nt,q.label);if(!gt)return;const Rt=vm(gm[B].map(At=>mm[At]));gt.position.copy(Rt),gt.position.addScaledVector(dt.normal,.01),gt.quaternion.copy(dt.orientation),gt.renderOrder=1,$.add(gt);const st=Ox(nt,ew);st&&(st.renderOrder=-1,st.position.copy(Rt),st.position.addScaledVector(dt.normal,-.05),st.quaternion.copy(dt.orientation).multiply(ht),$.add(st))})};document.fonts.load("700 160px dice-font").then(Mt),C.add($),C.add(new To(16777215,1)),C.add(new yo(16777215,12303291,1));const Lt=new Eo(16777215,1);Lt.position.set(3,4,5),C.add(Lt),r.current=$;const wt=()=>{const dt=b.clientWidth,B=b.clientHeight;W.setSize(dt,B,!1),N.aspect=dt/B,N.updateProjectionMatrix()},V=new ResizeObserver(wt);V.observe(b),wt();const _t=()=>{l.current=requestAnimationFrame(_t),W.render(C,N)};return _t(),()=>{V.disconnect(),l.current&&cancelAnimationFrame(l.current),d.current&&cancelAnimationFrame(d.current),k.dispose(),$.material.dispose(),$.children.forEach(dt=>{const B=dt;B.geometry.dispose(),B.material.map?.dispose(),B.material.dispose()}),W.dispose(),b.removeChild(W.domElement),r.current=null}},[o,e]),se.jsxs("div",{className:`stage stage--twenty-sided${E?" is-dragging":""}`,onPointerDown:z,onPointerMove:T,onPointerUp:P,onPointerCancel:P,children:[se.jsx("div",{ref:i,className:"three-scene"}),se.jsx("p",{className:"hint",children:_?"Rolling...":x||(I!==null?`You rolled ${I}. Drag again to roll.`:"Drag from the centre. Let go past halfway to roll.")})]})}function aw({sides:o=6,color:e="red",translucent:i=!0}){switch(o){case 4:return se.jsx(S2,{color:e,translucent:i});case 6:return se.jsx(s2,{color:e,translucent:i});case 8:return se.jsx(w2,{color:e,translucent:i});case 10:return se.jsx(B2,{color:e,translucent:i});case 12:return se.jsx(Z2,{color:e,translucent:i});case 20:return se.jsx(iw,{color:e,translucent:i});default:return null}}const rw=[0,45,90,135];function sw({isOpen:o,onClick:e,ref:i}){return se.jsx("button",{ref:i,type:"button",className:"icon-button settings-button","aria-label":"Settings","aria-haspopup":"dialog","aria-expanded":o,onClick:e,children:se.jsxs("span",{className:"settings-button__cog","aria-hidden":"true",children:[rw.map(r=>se.jsx("span",{className:`settings-button__tooth settings-button__tooth--${r}`},r)),se.jsx("span",{className:"settings-button__hub"})]})})}const ow='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',lw=[4,6,8,10,12,20],cw=["red","yellow","green","blue","black","white"];function uw({sides:o,color:e,translucent:i,onSettingsChange:r,onClose:l}){const u=vt.useRef(null),d=vt.useRef(null);return vt.useEffect(()=>{d.current?.focus();const h=p=>{if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const m=u.current;if(!m)return;const S=Array.from(m.querySelectorAll(ow));if(S.length===0)return;const _=S[0],v=S[S.length-1],E=document.activeElement;if(!m.contains(E)){p.preventDefault(),(p.shiftKey?v:_).focus();return}p.shiftKey&&E===_?(p.preventDefault(),v.focus()):!p.shiftKey&&E===v&&(p.preventDefault(),_.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[l]),se.jsxs("div",{ref:u,className:"settings-dialog",role:"dialog","aria-modal":"true","aria-label":"Settings",children:[se.jsxs("div",{className:"settings-dialog__content",children:[se.jsx("fieldset",{className:"sides-picker","aria-label":"Sides",children:se.jsx("div",{className:"sides-picker__options",children:lw.map((h,p)=>se.jsxs(vt.Fragment,{children:[p>0&&se.jsx("span",{className:"sides-picker__divider","aria-hidden":"true"}),se.jsxs("span",{className:"sides-picker__option",children:[se.jsx("input",{className:"sides-picker__input",type:"radio",name:"sides",id:`sides-${h}`,value:h,checked:o===h,onChange:()=>r({sides:h})}),se.jsx("label",{className:"sides-picker__label",htmlFor:`sides-${h}`,children:h})]})]},h))})}),se.jsx("fieldset",{className:"color-picker","aria-label":"Color",children:se.jsx("div",{className:"color-picker__options",children:cw.map(h=>se.jsxs("span",{className:"color-picker__option",children:[se.jsx("input",{className:"color-picker__input",type:"radio",name:"color",id:`color-${h}`,value:h,checked:e===h,"aria-label":h,onChange:()=>r({color:h})}),se.jsx("label",{className:"color-picker__label",htmlFor:`color-${h}`,style:{backgroundColor:`rgb(${ss[h].cssTop.join(" ")})`}})]},h))})}),se.jsxs("label",{className:"translucent-toggle",children:[se.jsx("input",{className:"translucent-toggle__input",type:"checkbox",checked:i,onChange:h=>r({translucent:h.target.checked})}),se.jsx("span",{className:"translucent-toggle__text",children:"Translucent"}),se.jsx("span",{className:"translucent-toggle__track","aria-hidden":"true",children:se.jsx("span",{className:"translucent-toggle__knob"})})]})]}),se.jsx("button",{ref:d,type:"button",className:"icon-button settings-dialog__close","aria-label":"Close",onClick:l,children:se.jsxs("span",{className:"settings-dialog__x","aria-hidden":"true",children:[se.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--45"}),se.jsx("span",{className:"settings-dialog__x-bar settings-dialog__x-bar--135"})]})})]})}function fw(){const[o,e]=vt.useState(()=>BC()),[i,r]=vt.useState(!1),l=vt.useRef(null),u=vt.useCallback(h=>{e(p=>({...p,...h}))},[]),d=vt.useCallback(()=>{r(!1),l.current?.focus()},[]);return se.jsxs(se.Fragment,{children:[se.jsx(sw,{ref:l,isOpen:i,onClick:()=>r(!0)}),i&&se.jsx(uw,{sides:o.sides,color:o.color,translucent:o.translucent,onSettingsChange:u,onClose:d}),se.jsx(aw,{sides:o.sides,color:o.color,translucent:o.translucent})]})}const bM=document.getElementById("root");if(!bM)throw new Error("Root element was not found.");p1.createRoot(bM).render(se.jsx(vt.StrictMode,{children:se.jsx(fw,{})}));
